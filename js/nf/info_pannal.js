var PannalDisplay = document.getElementById('pannal_display')
var PannalBtn = document.getElementById('pannal_btn');
var PannalBtnText = document.getElementById('pannal_btn').innerText;
var InfoPannalWrap = document.getElementById('info_pannal_wrap');
let InfoPannal = ''

InfoPannal += '<div id="info_pannal">'
InfoPannal += '   <p>안내창임</p>'
InfoPannal += '   <button id="pannal_btn_close" onclick="PannalClose()">닫기</button>'
InfoPannal += '</div>'

if (PannalBtnText == '열기'){
    pannal_btn.addEventListener('click', PannalOpen);
} else if (PannalBtnText == '닫기'){
    pannal_btn.addEventListener('click', PannalClose);
};

function PannalDisplayRefresh(){
    PannalDisplay.innerText = "현재시각 : " + new Date() + "\n 현재상태 : " + PannalBtnText;
};

function PannalOpen(){
    PannalBtnText = '닫기';
    pannal_btn.innerText = '닫기';
    console.log('PannalOpen');
    pannal_btn.removeEventListener('click', PannalOpen);
    pannal_btn.addEventListener('click', PannalClose);
    // document.getElementById('info_pannal').style.display='block';
    InfoPannalWrap.innerHTML = InfoPannal;
};

function PannalClose(){
    PannalBtnText = '열기';
    pannal_btn.innerText = "열기";
    console.log('PannalClose');
    pannal_btn.removeEventListener('click', PannalClose);
    pannal_btn.addEventListener('click', PannalOpen);
    InfoPannalWrap.innerHTML = '';
};
