(()=>{
 const key='cosmic-session-state-v1';
 const locked=()=>localStorage.getItem(key)==='signed-out';
 const target=()=>new URL('settings.html?tab=Account+Login#account-login',location.href).href;
 const enforce=()=>{if(!locked())return; if(!location.pathname.endsWith('/settings.html')||location.hash!=='#account-login'){location.replace(target());return;} document.documentElement.classList.add('session-locked');};
 window.cosmicSession={locked,login(){localStorage.setItem(key,'signed-in');document.documentElement.classList.remove('session-locked');},logout(){for(const store of [localStorage,sessionStorage])for(const k of Object.keys(store))if(/^cosmic/i.test(k)&&k!==key)store.removeItem(k);localStorage.setItem(key,'signed-out');location.replace(target());}};
 enforce();window.addEventListener('pageshow',e=>{enforce();if(e.persisted&&locked()&&location.pathname.endsWith('/settings.html'))location.reload();});window.addEventListener('storage',e=>{if(e.key===key){if(locked()){enforce();window.dispatchEvent(new Event('cosmic-session-lock'));}else location.reload();}});
})();
