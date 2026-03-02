/* ════════════════════════════════════════════
   CURSOR
════════════════════════════════════════════ */
const c1 = document.getElementById('cur'), c2 = document.getElementById('cur2');
let mx=0, my=0, fx=0, fy=0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  c1.style.left = mx+'px'; c1.style.top = my+'px';
});
(function loop(){ fx+=(mx-fx)*.1; fy+=(my-fy)*.1; c2.style.left=fx+'px'; c2.style.top=fy+'px'; requestAnimationFrame(loop); })();
document.querySelectorAll('a,button,.pc,.tcell').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hov'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hov'));
});

/* ════════════════════════════════════════════
   INK DROP THEME TRANSITION
   Al hacer click en el botón, un círculo de tinta
   se expande desde el botón hasta cubrir toda la
   pantalla, luego el tema cambia y desaparece.
════════════════════════════════════════════ */
const ink  = document.getElementById('ink');
const html = document.documentElement;
let theme  = localStorage.getItem('ev-theme') || 'dark';

// set initial theme silently
html.setAttribute('data-theme', theme);

function triggerInkDrop(originEl, newTheme) {
  // posición del botón (origen de la tinta)
  const rect = originEl.getBoundingClientRect();
  const ox = rect.left + rect.width / 2;
  const oy = rect.top  + rect.height / 2;

  // calcular escala necesaria para cubrir toda la pantalla
  const maxDist = Math.hypot(
    Math.max(ox, window.innerWidth  - ox),
    Math.max(oy, window.innerHeight - oy)
  );
  const scale = (maxDist * 2) / 20; // 20 = tamaño base del círculo

  // color de la tinta según el tema al que vamos
  const inkColor = newTheme === 'light'
    ? '#f8f3ea'   // ivory del modo claro
    : '#050505';  // negro del modo oscuro

  // posicionar y colorear el ink
  ink.style.cssText = `
    left: ${ox}px;
    top: ${oy}px;
    width: 20px;
    height: 20px;
    background: ${inkColor};
    transform: translate(-50%,-50%) scale(0);
    transition: none;
    opacity: 1;
  `;

  // forzar reflow
  ink.getBoundingClientRect();

  // arrancar la animación de expansión
  ink.style.transition = `transform .68s cubic-bezier(.22,.6,.36,1)`;
  ink.style.transform  = `translate(-50%,-50%) scale(${scale})`;

  // en el punto máximo de expansión: cambiar tema + contraer tinta
  setTimeout(() => {
    html.setAttribute('data-theme', newTheme);
    theme = newTheme;
    localStorage.setItem('ev-theme', theme);
  }, 340); // mitad de la animación

  // contraer y ocultar
  setTimeout(() => {
    ink.style.transition = 'transform .5s ease, opacity .3s ease';
    ink.style.transform  = `translate(-50%,-50%) scale(0)`;
    ink.style.opacity    = '0';
  }, 680);
}

document.getElementById('theme-btn').addEventListener('click', function(e) {
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  triggerInkDrop(this, newTheme);
});

/* ════════════════════════════════════════════
   NAV scroll + active link
════════════════════════════════════════════ */
const nav  = document.getElementById('nav');
const secs = ['inicio','proyectos','habilidades','sobre-mi','contacto'];
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  let cur = '';
  secs.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 130) cur = id;
  });
  document.querySelectorAll('.nl a').forEach(a =>
    a.classList.toggle('act', a.getAttribute('href') === '#'+cur)
  );
}, { passive:true });

/* ════════════════════════════════════════════
   REVEAL — aparece al bajar, desaparece al subir
════════════════════════════════════════════ */
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => {
    const wasIn = e.target.classList.contains('in');
    if (e.isIntersecting) {
      e.target.classList.add('in');
      e.target.classList.remove('out');
    } else if (wasIn) {
      e.target.classList.remove('in');
      e.target.classList.add('out');
      setTimeout(() => {
        if (!e.target.classList.contains('in'))
          e.target.classList.remove('out');
      }, 420);
    }
  });
}, { threshold:0.08, rootMargin:'0px 0px -50px 0px' });
document.querySelectorAll('.r').forEach(el => {
  if (!el.classList.contains('in')) ro.observe(el);
});

/* ════════════════════════════════════════════
   TYPEWRITER JSON
   Las líneas del bloque developer.json se escriben
   sola a sola, letra a letra, cuando la sección
   entra en pantalla.
════════════════════════════════════════════ */
// Cada elemento: { text, classes }
// classes = array de clases para el span, o null para texto plano
const jsonLines = [
  { parts: [{ t:'{', c:null }] },
  { parts: [{ t:'  "name"',      c:'ck' }, { t:': ', c:null }, { t:'"Edgar Vásquez"',       c:'cs' }, { t:',', c:null }] },
  { parts: [{ t:'  "ubicación"', c:'ck' }, { t:': ', c:null }, { t:'"México"',               c:'cs' }, { t:',', c:null }] },
  { parts: [{ t:'  "status"',    c:'ck' }, { t:': ', c:null }, { t:'"Estudiante ING Software"', c:'cs' }, { t:',', c:null }] },
  { parts: [{ t:'  "stack"',     c:'ck' }, { t:': [', c:null }] },
  { parts: [{ t:'    "Odoo SaaS"',       c:'cs' }, { t:',', c:null }] },
  { parts: [{ t:'    "Python"',          c:'cs' }, { t:',', c:null }] },
  { parts: [{ t:'    "Computer Vision"', c:'cs' }] },
  { parts: [{ t:'  ],', c:null }] },
  { parts: [{ t:'  "disponible"', c:'ck' }, { t:': ', c:null }, { t:'true', c:'cv' }] },
  { parts: [{ t:'}', c:null }] },
];

const jsonOutput = document.getElementById('json-output');
let twDone = false;

// Construye el HTML de una línea sin aún mostrarla completa
function buildLineHTML(line) {
  return line.parts.map(p =>
    p.c ? `<span class="${p.c}"></span>` : `<span></span>`
  ).join('') + '<br>';
}

// Anima letra a letra todos los spans de todas las líneas en secuencia
async function runTypewriter() {
  if (twDone) return;
  twDone = true;

  // agregar cursor
  const cursor = document.createElement('span');
  cursor.className = 'tw-cursor';
  jsonOutput.appendChild(cursor);

  const delay = ms => new Promise(r => setTimeout(r, ms));
  const charDelay = 22; // ms por caracter
  const lineDelay = 60; // pausa entre líneas

  for (const line of jsonLines) {
    // crear una fila de spans para cada part
    const rowDiv = document.createElement('div');
    rowDiv.style.display = 'block';

    const spans = line.parts.map(p => {
      const s = document.createElement('span');
      if (p.c) s.className = p.c;
      rowDiv.appendChild(s);
      return { el: s, text: p.t };
    });

    // br
    const br = document.createElement('br');
    rowDiv.appendChild(br);

    // insertar fila antes del cursor
    jsonOutput.insertBefore(rowDiv, cursor);

    // escribir letra a letra cada part
    for (const { el, text } of spans) {
      for (const ch of text) {
        el.textContent += ch;
        await delay(charDelay);
      }
    }
    await delay(lineDelay);
  }

  // al terminar, cursor sigue pero no bloquea
}

// Observar cuando json-card entra en pantalla
const twObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    runTypewriter();
    twObs.disconnect();
  }
}, { threshold: 0.3 });
twObs.observe(document.getElementById('json-card'));

/* ════════════════════════════════════════════
   SKILL BARS
════════════════════════════════════════════ */
let skillsDone = false;
new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !skillsDone) {
    skillsDone = true;
    document.querySelectorAll('.sk-fill').forEach(b => {
      setTimeout(() => { b.style.width = b.dataset.w + '%'; }, 150);
    });
  }
}, { threshold: 0.15 }).observe(document.getElementById('habilidades'));

/* ════════════════════════════════════════════
   COUNTER
════════════════════════════════════════════ */
new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const t = +e.target.dataset.count; let v = 0;
      const tm = setInterval(() => {
        v += t/40;
        if (v >= t) { v = t; clearInterval(tm); }
        e.target.textContent = Math.floor(v) + '+';
      }, 35);
    }
  });
}, { threshold: 0.5 }).observe(document.querySelector('[data-count]'));

/* ════════════════════════════════════════════
   MOBILE NAV
════════════════════════════════════════════ */
document.getElementById('hbg').addEventListener('click', () =>
  document.getElementById('nl').classList.toggle('open')
);
document.querySelectorAll('.nl a').forEach(a =>
  a.addEventListener('click', () => document.getElementById('nl').classList.remove('open'))
);

/* ════════════════════════════════════════════
   SMOOTH SCROLL
════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior:'smooth' }); }
  });
});

/* ════════════════════════════════════════════
   PHOTO UPLOAD
════════════════════════════════════════════ */
const photoContainer   = document.getElementById('photoContainer');
const photoPlaceholder = document.getElementById('photoPlaceholder');
function setPhoto(file) {
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = ev => {
    photoPlaceholder.style.display = 'none';
    const old = photoContainer.querySelector('img');
    if (old) old.remove();
    const img = document.createElement('img');
    img.src = ev.target.result; img.alt = 'Edgar Vásquez';
    photoContainer.appendChild(img);
  };
  reader.readAsDataURL(file);
}
photoContainer.addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  input.onchange = e => setPhoto(e.target.files[0]);
  input.click();
});
photoContainer.addEventListener('dragover', e => { e.preventDefault(); photoContainer.style.outline='2px dashed var(--acid)'; });
photoContainer.addEventListener('dragleave', () => { photoContainer.style.outline=''; });
photoContainer.addEventListener('drop', e => {
  e.preventDefault(); photoContainer.style.outline='';
  setPhoto(e.dataTransfer.files[0]);
});
