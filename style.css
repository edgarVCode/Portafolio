:root {
   --felt:      #17241d;
   --felt-1:    #10190f;
   --felt-2:    #0c1310;
   --walnut:    #2a1c14;
   --walnut-2:  #3a2618;
   --ivory:     #ece3ce;
   --ivory-dim: #cfc6ae;
   --gold:      #c9a02e;
   --gold-bg:   rgba(201,160,46,0.1);
   --dim:       #8a9a8a;
   --dimmer:    #4c5c4e;
   --f-d: 'Fraunces', Georgia, serif;
   --f-m: 'IBM Plex Mono', 'Courier New', monospace;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { background: var(--felt-1); color: var(--ivory); font-family: var(--f-m); overflow-x: hidden; cursor: none; }

/* CURSOR */
#cur  { width:10px; height:10px; background:var(--gold); border-radius:50%; position:fixed; pointer-events:none; z-index:9999; transform:translate(-50%,-50%); transition:width .2s,height .2s; }
#cur2 { width:34px; height:34px; border:1px solid rgba(201,160,46,.4); border-radius:50%; position:fixed; pointer-events:none; z-index:9998; transform:translate(-50%,-50%); }
body.ch #cur  { width:6px; height:6px; }
body.ch #cur2 { width:52px; height:52px; border-color:var(--gold); }

/* NAV */
nav { position:fixed; top:0; left:0; width:100%; z-index:100; padding:22px 48px; display:flex; justify-content:space-between; align-items:center; transition:background .4s,border-color .4s; }
nav.s { background:rgba(12,19,16,.96); border-bottom:1px solid var(--walnut-2); }
.logo { font-family:var(--f-d); font-weight:700; font-size:1.2rem; color:var(--ivory); text-decoration:none; letter-spacing:-.01em; display:flex; align-items:center; gap:8px; }
.logo em { color:var(--gold); font-style:normal; }
.nl { display:flex; gap:32px; list-style:none; }
.nl a { font-family:var(--f-m); font-size:.72rem; letter-spacing:.15em; text-transform:uppercase; color:var(--dim); text-decoration:none; position:relative; transition:color .3s; }
.nl a::after { content:''; position:absolute; bottom:-4px; left:0; width:0; height:1px; background:var(--gold); transition:width .3s; }
.nl a:hover,.nl a.act { color:var(--gold); }
.nl a:hover::after,.nl a.act::after { width:100%; }
.hbg { display:none; flex-direction:column; gap:5px; background:none; border:none; cursor:none; padding:4px; }
.hbg span { display:block; width:24px; height:1px; background:var(--ivory); }

/* HERO */
#inicio { min-height:100vh; display:flex; align-items:center; padding:110px 48px 60px; position:relative; overflow:hidden; }
#inicio::before {
   content:''; position:absolute; inset:0;
   background-image: repeating-conic-gradient(var(--walnut) 0% 25%, transparent 0% 50%);
   background-size: 64px 64px;
   opacity:.35; pointer-events:none;
   mask-image: radial-gradient(ellipse 70% 60% at 30% 40%, black, transparent);
}
.hero-inner { display:grid; grid-template-columns:1fr 1fr; gap:80px; max-width:1200px; width:100%; margin:auto; align-items:center; position:relative; z-index:1; }
.htag { font-family:var(--f-m); font-size:.7rem; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); margin-bottom:22px; display:flex; align-items:center; gap:12px; }
.htag::before { content:''; width:28px; height:1px; background:var(--gold); }
.hname { font-family:var(--f-d); font-size:clamp(3.2rem,6vw,6.5rem); font-weight:700; line-height:.94; letter-spacing:-.02em; margin-bottom:26px; }
.hname .a { color:var(--gold); font-style:italic; font-weight:500; }
.hsub { font-family:var(--f-m); font-size:.88rem; line-height:1.9; color:var(--dim); margin-bottom:40px; max-width:420px; }
.hbtns { display:flex; gap:14px; flex-wrap:wrap; }

.btn-p { padding:13px 30px; background:var(--gold); color:var(--felt-2); font-family:var(--f-d); font-weight:700; font-size:.9rem; text-decoration:none; cursor:none; display:inline-block; position:relative; overflow:hidden; transition:transform .25s; }
.btn-p::before { content:''; position:absolute; inset:0; background:var(--ivory); transform:translateX(-101%); transition:transform .4s cubic-bezier(.16,1,.3,1); }
.btn-p:hover::before { transform:translateX(0); }
.btn-p:hover { transform:translateY(-2px); }
.btn-p span { position:relative; z-index:1; }
.btn-o { padding:12px 30px; background:transparent; color:var(--ivory); font-family:var(--f-d); font-weight:600; font-size:.9rem; text-decoration:none; cursor:none; display:inline-block; border:1px solid var(--walnut-2); transition:border-color .3s; }
.btn-o:hover { border-color:var(--dim); }

/* CLOCK / AVATAR */
.hright { display:flex; align-items:center; justify-content:center; }
.avwrap { position:relative; }
.ring { width:300px; height:300px; border:1px solid var(--walnut-2); border-radius:50%; position:relative; animation:spin 26s linear infinite; }
.ring::before,.ring::after { content:''; position:absolute; width:8px; height:8px; background:var(--gold); border-radius:50%; }
.ring::before { top:-4px; left:50%; transform:translateX(-50%); }
.ring::after  { bottom:-4px; left:50%; transform:translateX(-50%); }
@keyframes spin { to { transform:rotate(360deg); } }
.ring-inner { position:absolute; inset:20px; background:var(--felt-2); border-radius:50%; border:1px solid var(--walnut-2); display:flex; align-items:center; justify-content:center; }
.initials { font-size:5.6rem; color:var(--walnut-2); user-select:none; line-height:1; }
.hstats { position:absolute; right:-44px; bottom:10px; display:flex; flex-direction:column; gap:10px; }
.stat { background:var(--felt-2); border:1px solid var(--walnut-2); padding:13px 16px; text-align:right; min-width:105px; }
.sn { font-family:var(--f-d); font-size:1.7rem; font-weight:700; color:var(--gold); line-height:1; }
.sl { font-family:var(--f-m); font-size:.6rem; letter-spacing:.1em; color:var(--dim); text-transform:uppercase; margin-top:3px; }

/* SCROLL HINT */
.sh { position:absolute; bottom:30px; left:48px; display:flex; align-items:center; gap:14px; z-index:1; }
.sh span { font-family:var(--f-m); font-size:.62rem; letter-spacing:.2em; text-transform:uppercase; color:var(--dimmer); }
.sh-bar { width:48px; height:1px; background:var(--walnut-2); overflow:hidden; position:relative; }
.sh-fill { position:absolute; top:0; left:-100%; width:100%; height:100%; background:var(--gold); animation:sha 1.6s ease infinite; }
@keyframes sha { 0%{left:-100%} 100%{left:100%} }

/* SECTIONS */
section { padding:120px 48px; }
.wrap { max-width:1200px; margin:auto; }
.sh2 { display:flex; align-items:flex-end; gap:40px; margin-bottom:70px; }
.snum { font-family:var(--f-m); font-size:.68rem; letter-spacing:.2em; color:var(--gold); margin-bottom:10px; }
.stitle { font-family:var(--f-d); font-size:clamp(2rem,4vw,3.4rem); font-weight:700; letter-spacing:-.02em; line-height:1; }
.sline { flex:1; height:1px; background:var(--walnut-2); margin-bottom:8px; }

/* REVEAL */
.r { opacity:0; transform:translateY(32px); transition:opacity .7s ease, transform .7s cubic-bezier(.16,1,.3,1); }
.r.in { opacity:1; transform:translateY(0); }
.r.d1{transition-delay:.1s} .r.d2{transition-delay:.2s} .r.d3{transition-delay:.3s} .r.d4{transition-delay:.4s}

/* PROJECTS */
#proyectos { background:var(--felt-2); }
.pgrid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--walnut-2); }
.pc { background:var(--felt-2); padding:44px; position:relative; overflow:hidden; cursor:none; }
.pc::before { content:''; position:absolute; inset:0; background:var(--felt); transform:translateY(100%); transition:transform .5s cubic-bezier(.16,1,.3,1); }
.pc:hover::before { transform:translateY(0); }
.pci { position:relative; z-index:1; }
.pnum { font-family:var(--f-m); font-size:.68rem; letter-spacing:.12em; color:var(--dimmer); margin-bottom:26px; }
.pico { width:44px; height:44px; border:1px solid var(--walnut-2); display:flex; align-items:center; justify-content:center; margin-bottom:18px; transition:border-color .3s,background .3s; }
.pc:hover .pico { border-color:var(--gold); background:var(--gold-bg); }
.pc:hover .pico svg { stroke:var(--gold); }
.pname { font-family:var(--f-d); font-size:1.4rem; font-weight:600; letter-spacing:-.01em; margin-bottom:10px; transition:color .3s; }
.pc:hover .pname { color:var(--gold); }
.pdesc { font-family:var(--f-m); font-size:.77rem; line-height:1.85; color:var(--dim); margin-bottom:26px; }
.ptags { display:flex; flex-wrap:wrap; gap:7px; }
.ptag { font-family:var(--f-m); font-size:.6rem; letter-spacing:.1em; text-transform:uppercase; padding:5px 10px; border:1px solid var(--walnut-2); color:var(--dimmer); transition:border-color .3s,color .3s; }
.pc:hover .ptag { border-color:rgba(201,160,46,.35); color:var(--gold); }
.parr { position:absolute; top:44px; right:44px; width:36px; height:36px; border:1px solid var(--walnut-2); display:flex; align-items:center; justify-content:center; transition:border-color .3s,background .3s,transform .3s; }
.pc:hover .parr { border-color:var(--gold); background:var(--gold); transform:rotate(45deg); }
.pc:hover .parr svg { stroke:var(--felt-2); }

/* SKILLS */
.sk-grid { display:grid; grid-template-columns:1.1fr .9fr; gap:70px; align-items:start; }
.sk-label { font-family:var(--f-m); font-size:.65rem; letter-spacing:.15em; text-transform:uppercase; color:var(--dimmer); margin-bottom:28px; }
.sk-row { margin-bottom:24px; }
.sk-top { display:flex; justify-content:space-between; align-items:baseline; margin-bottom:8px; }
.sk-name { font-family:var(--f-d); font-size:1rem; font-weight:600; }
.sk-pct { font-family:var(--f-m); font-size:.72rem; color:var(--gold); }
.sk-track { height:3px; background:var(--walnut-2); position:relative; overflow:hidden; }
.sk-fill { position:absolute; left:0; top:0; height:100%; width:0; background:var(--gold); transition:width 1.4s cubic-bezier(.16,1,.3,1); }
.tgrid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--walnut-2); border:1px solid var(--walnut-2); }
.tcell { background:var(--felt-2); padding:26px 14px; display:flex; flex-direction:column; align-items:center; gap:10px; transition:background .3s; }
.tcell:hover { background:var(--felt); }
.tcell svg { transition:stroke .3s; }
.tcell:hover svg { stroke:var(--gold); }
.tname { font-family:var(--f-m); font-size:.62rem; letter-spacing:.08em; text-transform:uppercase; color:var(--dim); }

/* ABOUT */
.about-g { display:grid; grid-template-columns:.9fr 1.1fr; gap:80px; align-items:center; }
.cbox { background:var(--felt-2); border:1px solid var(--walnut-2); padding:32px; }
.ctag { font-family:var(--f-m); font-size:.68rem; color:var(--dimmer); margin-bottom:18px; letter-spacing:.05em; }
.cbody { font-family:var(--f-m); font-size:.82rem; line-height:2; color:var(--ivory-dim); }
.ck { color:var(--gold); }
.cs { color:#a8c9a0; }
.atext h3 { font-family:var(--f-d); font-size:1.9rem; font-weight:600; line-height:1.3; margin-bottom:22px; letter-spacing:-.01em; }
.atext p { font-family:var(--f-m); font-size:.85rem; line-height:1.9; color:var(--dim); margin-bottom:16px; }
.tl { margin-top:34px; padding-left:26px; border-left:1px solid var(--walnut-2); }
.tli { margin-bottom:24px; position:relative; }
.tli::before { content:''; position:absolute; left:-30px; top:6px; width:8px; height:8px; background:var(--felt-1); border:1px solid var(--gold); border-radius:50%; }
.tyr { font-family:var(--f-m); font-size:.62rem; letter-spacing:.15em; color:var(--gold); text-transform:uppercase; margin-bottom:4px; }
.trole { font-family:var(--f-d); font-size:1rem; font-weight:600; margin-bottom:3px; }
.tdesc { font-family:var(--f-m); font-size:.72rem; color:var(--dim); }

/* CONTACT */
#contacto { background:var(--felt-1); position:relative; overflow:hidden; }
#contacto::before { content:''; position:absolute; bottom:-200px; left:50%; width:500px; height:500px; background:radial-gradient(circle,rgba(201,160,46,.06),transparent 70%); transform:translateX(-50%); pointer-events:none; }
.cbox2 { text-align:center; max-width:660px; margin:auto; position:relative; z-index:1; }
.cbig { font-family:var(--f-d); font-size:clamp(2.6rem,6.4vw,5.6rem); font-weight:700; letter-spacing:-.02em; line-height:1; margin:20px 0 42px; }
.cbig .out { -webkit-text-stroke:1px var(--gold); color:transparent; font-style:italic; font-weight:500; }
.clinks { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
.cl { display:flex; align-items:center; gap:10px; padding:13px 26px; border:1px solid var(--walnut-2); color:var(--dim); text-decoration:none; font-family:var(--f-m); font-size:.72rem; letter-spacing:.1em; text-transform:uppercase; transition:border-color .3s,color .3s,background .3s; cursor:none; }
.cl:hover { border-color:var(--gold); color:var(--gold); background:var(--gold-bg); }

/* FOOTER */
footer { background:var(--felt-2); border-top:1px solid var(--walnut-2); padding:26px 48px; display:flex; justify-content:space-between; align-items:center; }
footer p { font-family:var(--f-m); font-size:.68rem; letter-spacing:.08em; color:var(--dimmer); }
.fdot { width:8px; height:8px; background:var(--gold); border-radius:50%; animation:blink 2s ease infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.2} }

/* MASCOTA — SOPORTE TÉCNICO */
.mascot { position:fixed; right:30px; bottom:30px; z-index:150; display:flex; flex-direction:column; align-items:flex-end; gap:12px; cursor:none; }
.m-bubble { position:relative; max-width:250px; background:var(--felt-2); border:1px solid var(--walnut-2); padding:12px 17px; font-family:var(--f-m); font-size:.74rem; line-height:1.65; color:var(--ivory-dim); opacity:0; transform:translateY(8px) scale(.96); transition:opacity .35s ease, transform .35s cubic-bezier(.16,1,.3,1); pointer-events:none; }
.m-bubble::before { content:'// soporte'; display:block; font-size:.58rem; letter-spacing:.1em; text-transform:uppercase; color:var(--gold); margin-bottom:5px; }
.m-bubble::after { content:''; position:absolute; right:22px; bottom:-7px; width:12px; height:12px; background:var(--felt-2); border-right:1px solid var(--walnut-2); border-bottom:1px solid var(--walnut-2); transform:rotate(45deg); }
.m-bubble.show { opacity:1; transform:translateY(0) scale(1); }
.m-body { position:relative; width:88px; height:88px; display:flex; align-items:center; justify-content:center; }
.m-svg { width:100%; height:100%; color:var(--dimmer); transition:color .3s; animation:mbob 3.6s ease-in-out infinite; }
.mascot:hover .m-svg { color:var(--gold); }
.m-dot { position:absolute; top:4px; right:4px; width:9px; height:9px; background:var(--gold); border-radius:50%; animation:blink 2s ease infinite; }
@keyframes mbob { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-6px); } }

/* RESPONSIVE */
@media(max-width:900px){
   nav { padding:18px 24px; }
   .nl { display:none; flex-direction:column; position:fixed; inset:0; background:var(--felt-1); justify-content:center; align-items:center; z-index:99; }
   .nl.open { display:flex; }
   .nl a { font-size:1rem; padding:18px; }
   .hbg { display:flex; z-index:200; }
   section { padding:80px 24px; }
   #inicio { padding:90px 24px 60px; }
   .hero-inner { grid-template-columns:1fr; }
   .hright { display:none; }
   .pgrid { grid-template-columns:1fr; }
   .sk-grid { grid-template-columns:1fr; gap:56px; }
   .tgrid { grid-template-columns:repeat(3,1fr); }
   .about-g { grid-template-columns:1fr; gap:44px; }
   .sh2 { flex-direction:column; align-items:flex-start; gap:16px; }
   .sline { display:none; }
   footer { flex-direction:column; gap:12px; text-align:center; }
   .sh { left:24px; }
   .mascot { right:18px; bottom:18px; gap:9px; }
   .m-body { width:66px; height:66px; }
   .m-bubble { max-width:190px; font-size:.68rem; padding:10px 14px; }
}
