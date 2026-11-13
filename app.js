const $ = s => document.querySelector(s);
const cfg = window.MEIKE_CONFIG;
const https = value => {try {return new URL(value).protocol === 'https:';} catch {return false;}};
if(https(cfg.webAppUrl)) document.querySelectorAll('.web-link').forEach(a=>a.href=cfg.webAppUrl);
// Actual screenshots remain untouched when theme samples change.
const screenshotDialog = $('#screenshot-dialog');
const screenshotLarge = $('#screenshot-large');
document.querySelectorAll('[data-shot]').forEach(button => {
  button.addEventListener('click', () => {
    screenshotLarge.src = button.dataset.shot;
    screenshotLarge.alt = button.dataset.title + '，App 原始实机截图';
    $('#screenshot-title').textContent = button.dataset.title;
    screenshotDialog.showModal();
    $('.screenshot-dialog-body').scrollTop = 0;
    document.body.classList.add('screenshot-open');
  });
});
$('.close-screenshot').addEventListener('click', () => screenshotDialog.close());
screenshotDialog.addEventListener('click', event => {
  if (event.target !== screenshotDialog) return;
  const bounds = screenshotDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) screenshotDialog.close();
});
screenshotDialog.addEventListener('close', () => document.body.classList.remove('screenshot-open'));
const themes={plum:['01 / 青梅书页','像翻开一页，<br>干干净净的日常。','轻柔的纸色底、清楚的课程块，让注意力留给这一周的安排。'],ginkgo:['02 / 银杏书签','给这一周，<br>夹一枚银杏书签。','深绿页眉、纸面课程和金黄色的标记，把校园的颜色留在课表里。'],nai:['03 / 奶家日常','课表很正经，<br>陪你的家伙不一定。','奶蛋探个头，奶家成员来报到。把一点呆萌，放进每天都要打开的课表。']};
document.querySelectorAll('.theme-tabs button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.theme-tabs button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));const t=b.dataset.theme;$('#theme-sample').dataset.theme=t;$('#theme-tag').textContent=themes[t][0];$('#theme-title').innerHTML=themes[t][1];$('#theme-description').textContent=themes[t][2];});
const messages={'奶蛙':'奶蛙：人在教室，脑子正在加载。','奶鸡':'奶鸡：今天也要认真听讲。','奶鼠':'奶鼠：这道题，我们讨论一下？','奶狗':'奶狗：下课了，一起走！','奶蛋':'奶蛋：课表空空，脑袋也空空。'};
document.querySelectorAll('#family-lineup button').forEach(b=>b.onclick=()=>{$('#family-message').textContent=messages[b.dataset.name];b.animate([{transform:'translateY(0)'},{transform:'translateY(-12px)'},{transform:'translateY(0)'}],{duration:matchMedia('(prefers-reduced-motion: reduce)').matches?0:400});});$('#meet-family').onclick=()=>{$('#family-lineup button').focus();$('#family-message').textContent='五位都到齐了，点一个认识一下。';};
let toastTimer;function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3500);}
$('#copy-link').onclick=async()=>{try{await navigator.clipboard.writeText(cfg.webAppUrl);toast('已复制，在 iPhone 的 Safari 中打开即可。');}catch{toast('网页版地址：'+cfg.webAppUrl);}};
if(https(cfg.android.url)){const a=document.createElement('a');a.className='button primary';a.id='apk-download';a.href=cfg.android.url;a.textContent='下载 Android APK ↗';$('#apk-download').replaceWith(a);$('#apk-meta').textContent=[cfg.android.version,cfg.android.size,cfg.android.minAndroid].filter(Boolean).join(' · ');$('.testing').textContent='安装包已发布';$('.android-install > p').textContent='适用于 '+(cfg.android.minAndroid || 'Android')+'。下载安装包后，按手机提示完成安装。';if(https(cfg.android.releaseNotesUrl)){const notes=document.createElement('a');notes.href=cfg.android.releaseNotesUrl;notes.textContent='查看更新说明 ↗';notes.className='help-link';$('.android-install').append(notes);}}
