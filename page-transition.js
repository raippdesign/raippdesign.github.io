(() => {
  const key = 'raipp-page-transition';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let busy = false;
  function circle(x, y, color, scale) {
    const el = document.createElement('div');
    el.setAttribute('aria-hidden', 'true');
    el.setAttribute('data-page-cover', '');
    Object.assign(el.style, {position:'fixed',left:x+'px',top:y+'px',width:'20px',height:'20px',margin:'-10px',borderRadius:'50%',background:color,zIndex:'2147483647',pointerEvents:'none',transform:'scale('+scale+')',willChange:'transform, background-color'});
    document.documentElement.appendChild(el);
    return el;
  }
  function radius(x,y) { return Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y))/10+2; }
  let arrival;
  try { arrival = JSON.parse(sessionStorage.getItem(key)); sessionStorage.removeItem(key); } catch (_) {}
  if (arrival && Date.now()-arrival.time < 15000 && !reduced) {
    const x=arrival.x*innerWidth, y=arrival.y*innerHeight;
    const el=circle(x,y,'#BEFF8B',radius(x,y));
    // The bundled page replaces its root while unpacking; retain the cover until ready.
    let revealed=false;
    const observer=new MutationObserver(() => {
      if (!el.isConnected) document.documentElement.appendChild(el);
      if (!document.getElementById('__bundler_loading') && !document.getElementById('__bundler_placeholder')) reveal();
    });
    function reveal() {
      if(revealed) return;
      revealed=true; observer.disconnect();
      if(!el.isConnected) document.documentElement.appendChild(el);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        const anim=el.animate([{transform:'scale('+radius(x,y)+')'},{transform:'scale(0)'}],{duration:650,easing:'cubic-bezier(.76,0,.24,1)',fill:'forwards'});
        anim.finished.then(()=>el.remove());
      }));
    }
    observer.observe(document,{childList:true,subtree:true});
    setTimeout(reveal,8000);
  }
  document.addEventListener('click',async event => {
    const a=event.target.closest && event.target.closest('a[href]');
    if(!a || event.defaultPrevented || event.button!==0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || a.download || (a.target && a.target!=='_self')) return;
    const url=new URL(a.href,location.href);
    if(!url.pathname.endsWith('/virtual-plant-design-system.html') || url.href===location.href || reduced) return;
    event.preventDefault();
    if(busy) return;
    busy=true;
    const rect=a.getBoundingClientRect();
    const x=event.detail ? event.clientX : rect.left+rect.width/2;
    const y=event.detail ? event.clientY : rect.top+rect.height/2;
    const el=circle(x,y,'#262626',1);
    await el.animate([{transform:'scale(1)',background:'#262626'},{transform:'scale('+radius(x,y)+')',background:'#262626',offset:.65},{transform:'scale('+radius(x,y)+')',background:'#BEFF8B'}],{duration:800,easing:'cubic-bezier(.76,0,.24,1)',fill:'forwards'}).finished;
    try {sessionStorage.setItem(key,JSON.stringify({x:x/innerWidth,y:y/innerHeight,time:Date.now()}));} catch (_) {}
    location.assign(url.href);
  });
  addEventListener('pageshow', e=> {if(e.persisted){busy=false; document.querySelectorAll('[data-page-cover]').forEach(el=>el.remove());}});
})();
