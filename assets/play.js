(function(){
var f=document.getElementById('pf'),out=document.getElementById('pf-out'),d=document.getElementById('pf-data');
if(f&&out&&d){f.addEventListener('submit',function(e){e.preventDefault();
 var g=function(n){var r=f.querySelector('input[name='+n+']:checked');return r?r.value:''},site=g('site'),sells=g('sells'),tasks=g('tasks'),D=d.dataset,pick,why;
 if(sells==='yes'){pick=['E-Commerce & Systems',D.ecomPrice,'ecommerce-systems'];why='You sell online, so start with a site built for selling.';}
 else if(tasks==='yes'&&site==='fine'){pick=[D.aiName,D.aiPrice,'ai-workflow'];why='Your site works, and repeated tasks are where automation pays back.';}
 else if(site==='none'||site==='old'){pick=[D.fastName,D.fastPrice,'fast-launch'];why='A fast, mobile-friendly site is the quickest win.';}
 else{pick=[D.careName,D.carePrice,'care-plan'];why='Your site works, so keep it healthy and up to date.';}
 var extra=(tasks==='yes'&&pick[2]!=='ai-workflow')?' Later, '+D.aiName+' ('+D.aiPrice+') can take over the repeated tasks.':'';
 out.textContent='';var p=document.createElement('p');p.textContent='Start with '+pick[0]+' ('+pick[1]+'). '+why+extra;out.appendChild(p);
 var a=document.createElement('a');a.href='/pricing/#'+pick[2];a.className='btn btn-primary';a.textContent='See '+pick[0]+' details';out.appendChild(a);out.focus();});}
var rv=document.getElementById('rv'),msg=document.getElementById('rv-msg'),stop=document.getElementById('rv-stop'),tx=document.getElementById('rv-text');
if(rv&&msg){if(!('speechSynthesis' in window)){msg.textContent='This browser cannot speak. Try a recent Chrome, Edge, Safari or Firefox.';}
 else{rv.addEventListener('submit',function(e){e.preventDefault();var t=(tx.value||'').trim().slice(0,80);if(!t){msg.textContent='Type a name first.';return;}
  window.speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t);u.pitch=0.1;u.rate=0.85;u.onend=function(){msg.textContent='';};window.speechSynthesis.speak(u);msg.textContent='Speaking...';});
  stop.addEventListener('click',function(){window.speechSynthesis.cancel();msg.textContent='Stopped.';});}}
})();
