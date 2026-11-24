const $ = id => document.getElementById(id);
const form = $('preferences');
const key = 'cosmic-security-preferences';
const defaults = Object.fromEntries([...form.querySelectorAll('input')].map(i=>[i.name,i.checked]));
function restore(){let values=defaults;try{values={...defaults,...JSON.parse(localStorage.getItem(key)||'{}')}}catch{};for(const i of form.querySelectorAll('input'))i.checked=!!values[i.name];}
restore();
form.addEventListener('submit',e=>{e.preventDefault();localStorage.setItem(key,JSON.stringify(Object.fromEntries([...form.querySelectorAll('input')].map(i=>[i.name,i.checked]))));$('saved').textContent='Demo preferences saved.';});
$('cancel').onclick=()=>{restore();$('saved').textContent='Unsaved changes discarded.';};
for(const [id,message] of [['block','Demo device blocked and session revoked.'],['verify','Demo identity review marked complete.']]){$(id).onclick=()=>{$('loginResult').textContent=message;$('securityStatus').textContent='Demo alert reviewed';$('block').disabled=$('verify').disabled=true;};}
for(const button of document.querySelectorAll('[data-tab]'))button.onclick=()=>{if(button.hidden)return;for(const b of document.querySelectorAll('[data-tab]'))b.setAttribute('aria-pressed',String(b===button));const security=button.dataset.tab==='Security', db=button.dataset.tab==='Database MGMT';const account=button.dataset.tab==='Account Login';$('accountPanel').hidden=!account;$('securityHero').hidden=db||account;$('securityPanel').hidden=!security;$('dbPanel').hidden=!db;$('dbWebHistory').hidden=!db;$('dbHistory').hidden=!db;document.querySelector('.settings-layout').classList.toggle('db-active',db);$('placeholder').hidden=security||db||account;$('placeholderTitle').textContent=button.dataset.tab;document.querySelector('.auth-content').scrollTop=0;};

window.addEventListener('DOMContentLoaded', () => {
 const requested = new URLSearchParams(location.search).get('tab');
 const tab = [...document.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === requested && !b.hidden);
 if (tab) { tab.click(); tab.scrollIntoView({block:'nearest',inline:'nearest'}); }
});
