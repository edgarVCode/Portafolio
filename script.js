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

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{ const t=document.querySelector(a.getAttribute('href')); if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});} });
});
