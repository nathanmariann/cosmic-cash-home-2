const total=47000, key='cosmicCashBudget';
const $=id=>document.getElementById(id);
const fields=['bills','discretionary','savings'];
const names=['Bills & Payments','Discretionary Fund','Savings'];
const colors=['#e47779','#e6ae39','#25a99b'];
const money=n=>n.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:0,maximumFractionDigits:2});
try {const saved=JSON.parse(localStorage.getItem(key));if(saved){$('amount').value=saved.amount;fields.forEach((f,i)=>$(f).value=saved.percentages[i]);}}catch(e){}
function render(){
 const amount=$('amount').valueAsNumber,p=fields.map(f=>$(f).valueAsNumber),sum=p.reduce((a,b)=>a+b,0);
 const valid=Number.isFinite(amount)&&amount>=0&&amount<=total&&p.every(x=>Number.isInteger(x)&&x>=0&&x<=100)&&sum===100;
 $('percentTotal').textContent='Total allocation: '+(Number.isFinite(sum)?sum+'%':'—');
 $('budgetMessage').textContent=valid?'': 'Enter an amount from $0 to $47,000 and percentages totaling 100%.';
 $('saveBudget').disabled=!valid;
 ['allocated','remaining','usable','chartTotal','finalAllocated','finalRemaining'].forEach(id=>$(id).textContent='—');
 $('breakdown').replaceChildren();$('chart').style.background='#eee8f5';$('chart').setAttribute('aria-label','Budget allocation unavailable');
 $('suggested').replaceChildren(); if(Number.isFinite(amount)&&amount>=0&&amount<=total){names.forEach((n,i)=>{const row=document.createElement('div');row.className='budget-line';row.textContent=n+' · '+[50,30,20][i]+'%';const v=document.createElement('strong');v.textContent=money(amount*[.5,.3,.2][i]);row.append(v);$('suggested').append(row);});} if(!valid)return null;
 const cents=Math.round(amount*100), raw=p.map(x=>cents*x/100), values=raw.map(Math.floor);
 const order=[0,1,2].sort((a,b)=>(raw[b]-values[b])-(raw[a]-values[a]));
 const left=cents-values.reduce((a,b)=>a+b,0); for(let i=0;i<left;i++)values[order[i]]++;
 $('allocated').textContent=money(amount);$('remaining').textContent=money(total-amount);$('usable').textContent=money(values[1]/100);$('chartTotal').textContent='100%';$('finalAllocated').textContent=money(amount);$('finalRemaining').textContent=money(total-amount);
 $('chart').style.background=`conic-gradient(${colors[0]} 0% ${p[0]}%,${colors[1]} ${p[0]}% ${p[0]+p[1]}%,${colors[2]} ${p[0]+p[1]}% 100%)`;
 $('chart').setAttribute('aria-label',names.map((n,i)=>n+' '+p[i]+'%').join(', '));
 names.forEach((n,i)=>{const row=document.createElement('div');row.className='budget-line';const dot=document.createElement('i');dot.style.background=colors[i];const label=document.createElement('span');label.textContent=n+' · '+p[i]+'%';const value=document.createElement('strong');value.textContent=money(values[i]/100);row.append(dot,label,value);$('breakdown').append(row);});
 return {amount,percentages:p};
}
$('budgetForm').addEventListener('input',render);
$('budgetForm').addEventListener('submit',e=>{e.preventDefault();const data=render();if(data){try{localStorage.setItem(key,JSON.stringify(data));$('budgetMessage').textContent='Budget saved on this device.';}catch(e){$('budgetMessage').textContent='Browser storage unavailable.';}}});
$('resetBudget').addEventListener('click',()=>{fields.forEach((f,i)=>$(f).value=[50,30,20][i]);render();});render();

$('editAmount').addEventListener('click',()=>{$('amount').focus();$('amount').select();});
