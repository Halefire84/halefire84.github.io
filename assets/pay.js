(function(){
var note=document.getElementById('paynote');
fetch('/pay/links.json',{cache:'no-store'}).then(function(r){return r.ok?r.json():{}}).then(function(d){
 var on=0;
 document.querySelectorAll('.pay').forEach(function(b){
  var u=(d[b.dataset.plan]||{}).url||'';
  if(u.indexOf('https://buy.stripe.com/')===0){
   b.disabled=false;b.textContent=b.textContent.replace(' (coming soon)','');
   b.addEventListener('click',function(){location.href=u});on++;
  }
 });
 if(on&&note)note.hidden=true;
}).catch(function(){});
})();
