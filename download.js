/* ANIMATION source package downloader. Generates a standalone .zip in the browser. */
(function(){
  const esc=s=>String(s).replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const data={
    'magnetic-button':{name:'Magnetic Button',html:'<button class="magnetic-button">Magnetic Button</button>',css:'.magnetic-button{padding:14px 22px;border:0;border-radius:999px;background:#111;color:#fff;transition:transform .18s ease}',js:'const el=document.querySelector(".magnetic-button");el?.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.18}px)`});el?.addEventListener("pointerleave",()=>el.style.transform="")'},
    'tilt-card':{name:'Tilt Card',html:'<article class="tilt-card">Tilt Card</article>',css:'.tilt-card{padding:32px;border-radius:18px;background:#111;color:#fff;transition:transform .2s ease}',js:'const el=document.querySelector(".tilt-card");el?.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect();el.style.transform=`perspective(700px) rotateX(${-(e.clientY-r.top-r.height/2)/12}deg) rotateY(${(e.clientX-r.left-r.width/2)/12}deg)`})'},
    'glow-button':{name:'Glow Button',html:'<button class="glow-button">Glow Button</button>',css:'.glow-button{padding:14px 24px;border:1px solid #c8ff3d;border-radius:999px;background:#111;color:#fff;transition:.3s}.glow-button:hover{box-shadow:0 0 36px #c8ff3d55}',js:''},
    'gradient-text':{name:'Gradient Text',html:'<h2 class="gradient-text">Gradient Motion</h2>',css:'.gradient-text{background:linear-gradient(90deg,#fff,#c8ff3d,#9c7cff,#fff);background-size:250% auto;background-clip:text;color:transparent;animation:gradient 4s linear infinite}@keyframes gradient{to{background-position:250%}}',js:''},
    'count-up':{name:'Count Up',html:'<span class="count-up">1000</span>',css:'.count-up{font:700 4rem/1 ui-monospace;color:#c8ff3d}',js:'const el=document.querySelector(".count-up");let n=0;const tick=()=>{n=Math.min(1000,n+25);el.textContent=n;if(n<1000)requestAnimationFrame(tick)};requestAnimationFrame(tick);'}
  };
  window.ANIMATION_DOWNLOAD={data,esc};
})();
