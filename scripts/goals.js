const initialGoals=[{name:'Vacation Fund',saved:1850,target:3000,icon:'✈'},{name:'Emergency Fund',saved:3400,target:5000,icon:'◇'}];
const currency=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
let customGoals=[];
try {const stored=JSON.parse(localStorage.getItem('cosmicCashGoals')||'[]');if(Array.isArray(stored))customGoals=stored.filter(g=>typeof g.name==='string'&&Number.isFinite(g.saved)&&Number.isFinite(g.target)&&g.target>0&&g.saved>=0&&g.saved<=g.target).slice(0,30)}catch(e){}
function render(){const list=document.getElementById('goalCards');list.replaceChildren();for(const goal of [...initialGoals,...customGoals]){const percent=Math.min(100,Math.round(goal.saved/goal.target*100));const article=document.createElement('article');article.className='goal-card';const top=document.createElement('div');top.className='goal-card-top';const icon=document.createElement('span');icon.className='goal-card-icon';icon.textContent=goal.icon||'◎';const heading=document.createElement('div');heading.className='goal-card-heading';const title=document.createElement('h3');title.textContent=goal.name;const subtitle=document.createElement('small');subtitle.textContent='Savings milestone';heading.append(title,subtitle);const pct=document.createElement('strong');pct.className='goal-percent';pct.textContent=percent+'%';top.append(icon,heading,pct);const track=document.createElement('div');track.className='goal-track';const fill=document.createElement('div');fill.style.width=percent+'%';track.append(fill);const foot=document.createElement('div');foot.className='goal-card-foot';const saved=document.createElement('strong');saved.textContent=currency(goal.saved)+' saved';const target=document.createElement('span');target.textContent='Goal: '+currency(goal.target);foot.append(saved,target);article.append(top,track,foot);list.append(article)}}
render();const dialog=document.getElementById('goalDialog');document.getElementById('newGoal').addEventListener('click',()=>dialog.showModal());document.getElementById('cancelGoal').addEventListener('click',()=>dialog.close());document.getElementById('goalForm').addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget);const name=String(fd.get('name')||'').trim();const target=Number(fd.get('target'));const saved=Number(fd.get('saved'));const error=document.getElementById('dialogError');if(!name||!Number.isFinite(target)||target<=0||!Number.isFinite(saved)||saved<0||saved>target){error.textContent='Enter a name and valid amounts (saved cannot exceed target).';return}customGoals.push({name:name.slice(0,45),saved,target,icon:'◎'});try{localStorage.setItem('cosmicCashGoals',JSON.stringify(customGoals))}catch(e){}render();e.currentTarget.reset();error.textContent='';dialog.close()});

// Grouped monthly bar chart. Both series use a common $25,000 scale.
const months=['Jun','Jul','Aug','Sep','Oct','Nov'];
const savings=[3200,4100,5000,6100,7200,8450];
const investments=[6000,7300,8400,9600,10900,12500];
const maxValue=25000;
const plot=document.getElementById('combinedChart');
months.forEach((month,i)=>{
  const group=document.createElement('div');group.className='combined-month';
  const bars=document.createElement('div');bars.className='combined-bars';
  for(const [kind,value] of [['savings',savings[i]],['investments',investments[i]]]){
    const bar=document.createElement('div');bar.className='combined-bar '+kind;
    bar.style.height=(value/maxValue*100)+'%';
    bar.title=kind[0].toUpperCase()+kind.slice(1)+' '+month+': '+currency(value);
    bar.setAttribute('aria-label',bar.title);
    bars.append(bar);
  }
  const label=document.createElement('span');label.className='combined-month-label';label.textContent=month;
  group.append(bars,label);plot.append(group);
});
