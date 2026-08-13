const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>[...r.querySelectorAll(s)];

// Copy-to-clipboard controls
$$('.copy').forEach(btn=>btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(btn.dataset.code);const old=btn.textContent;btn.textContent='Copied!';setTimeout(()=>btn.textContent=old,1200)}catch{btn.textContent='Select manually'}}));

// Category + search filtering
const cards=$$('.component');const filters=$$('.filter');const search=$('#search');
function render(){const active=$('.filter.active').dataset.filter;const q=search.value.trim().toLowerCase();let visible=0;cards.forEach(card=>{const okCat=active==='all'||card.dataset.category===active;const okSearch=!q||card.dataset.name.includes(q);const show=okCat&&okSearch;card.classList.toggle('hidden',!show);if(show)visible++});$('#empty').style.display=visible?'none':'block'}
filters.forEach(f=>f.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));f.classList.add('active');render()}));search.addEventListener('input',render);

// Pointer-reactive magnetic button
$$('.magnetic').forEach(el=>el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.25;const y=(e.clientY-r.top-r.height/2)*.25;el.style.transform=`translate(${x}px,${y}px)`}));
$$('.magnetic').forEach(el=>el.addEventListener('pointerleave',()=>el.style.transform='translate(0,0)'));

// Spotlight follows pointer inside its demo
$$('.spotlight-card').forEach(el=>el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();const x=((e.clientX-r.left)/r.width)*100;const y=((e.clientY-r.top)/r.height)*100;el.style.background=`radial-gradient(circle at ${x}% ${y}%, rgba(200,255,61,.18), transparent 28%), #0e0e10`}));
$$('.spotlight-card').forEach(el=>el.addEventListener('pointerleave',()=>el.style.background='radial-gradient(circle at 50% 50%,rgba(200,255,61,.14),transparent 28%),#0e0e10'));

// Lightweight scramble preview
const scramble=$('#scramble');const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';let timer;function scrambleText(){if(!scramble)return;const target='MOTION / 001';let frame=0;clearInterval(timer);timer=setInterval(()=>{scramble.textContent=target.split('').map((c,i)=>c===' '?c:(i<frame?c:chars[Math.floor(Math.random()*chars.length)])).join('');frame++;if(frame>target.length)clearInterval(timer)},55)}scrambleText();scramble?.addEventListener('mouseenter',scrambleText);

// Reveal sections when they enter the viewport
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');observer.unobserve(e.target)}}),{threshold:.08});$$('.section,.cta,.component,.template').forEach(el=>observer.observe(el));
