// CURSOR
const c1 = document.getElementById('cur'), c2 = document.getElementById('cur2');
let mx=0,my=0,fx=0,fy=0;
document.addEventListener('mousemove', e => {
  mx=e.clientX; my=e.clientY;
  c1.style.left=mx+'px'; c1.style.top=my+'px';
});
(function loop(){ fx+=(mx-fx)*.12; fy+=(my-fy)*.12; c2.style.left=fx+'px'; c2.style.top=fy+'px'; requestAnimationFrame(loop); })();
document.querySelectorAll('a,button,.pc,.tcell').forEach(el=>{
  el.addEventListener('mouseenter',()=>document.body.classList.add('ch'));
  el.addEventListener('mouseleave',()=>document.body.classList.remove('ch'));
});

// NAV
const nav=document.getElementById('nav');
const secs=['inicio','proyectos','habilidades','sobre-mi','contacto'];
window.addEventListener('scroll',()=>{
  nav.classList.toggle('s',window.scrollY>50);
  let cur='';
  secs.forEach(id=>{ const el=document.getElementById(id); if(el&&el.getBoundingClientRect().top<=120) cur=id; });
  document.querySelectorAll('.nl a').forEach(a=>a.classList.toggle('act',a.getAttribute('href')==='#'+cur));
});

// MOBILE NAV
document.getElementById('hbg').addEventListener('click',()=>document.getElementById('nl').classList.toggle('open'));
document.querySelectorAll('.nl a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nl').classList.remove('open')));

// REVEAL
const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); ro.unobserve(e.target); } });
},{threshold:0.08});
document.querySelectorAll('.r').forEach(el=>ro.observe(el));

// SKILLS
const so=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
      if(e.isIntersecting){
          e.target.querySelectorAll('.sk-fill').forEach(b=>{ setTimeout(()=>{ b.style.width=b.dataset.w+'%'; },150); });
          so.unobserve(e.target);
      }
  });
},{threshold:0.15});
const skS=document.getElementById('habilidades'); if(skS) so.observe(skS);

// COUNTERS
const co=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
      if(e.isIntersecting){
          const t=+e.target.dataset.count; let v=0; const s=t/40;
          const tm=setInterval(()=>{ v+=s; if(v>=t){v=t;clearInterval(tm);} e.target.textContent=Math.floor(v)+(t>=10?'+':''); },35);
          co.unobserve(e.target);
      }
  });
},{threshold:0.5});
document.querySelectorAll('[data-count]').forEach(el=>co.observe(el));

// MASCOTA SOPORTE TÉCNICO
const mascot = document.getElementById('mascot');
const mBubble = document.getElementById('mBubble');
const mText = document.getElementById('mText');
const mFrases = [
  '¿Ya intentaste reiniciar?',
  '¿Y si lo apagamos y prendemos?',
  '¿Está conectado el cable?',
  'Prueba en modo incógnito',
  'Borra caché y cookies',
  '¿Tienes internet?',
  'En mi máquina sí funciona 🤷',
  'Actualiza el navegador',
  'Ctrl + Alt + Supr, a ver',
  '¿Probaste apagar el router?',
  'Manda captura del error',
  'Dale F5 con fe'
];
let mLast = -1, mTimer = null, mNext = null;
function mShow(){
  clearTimeout(mNext);
  let i;
  do { i = Math.floor(Math.random()*mFrases.length); } while(i===mLast && mFrases.length>1);
  mLast = i;
  mText.textContent = mFrases[i];
  mBubble.classList.add('show');
  clearTimeout(mTimer);
  mTimer = setTimeout(()=>{
    mBubble.classList.remove('show');
    mNext = setTimeout(mShow, 1200 + Math.random()*700);
  }, 3400);
}
if(mascot){
  mascot.addEventListener('click', mShow);
  mascot.addEventListener('mouseenter',()=>document.body.classList.add('ch'));
  mascot.addEventListener('mouseleave',()=>document.body.classList.remove('ch'));
  mNext = setTimeout(mShow, 1500);
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{ const t=document.querySelector(a.getAttribute('href')); if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});} });
});
