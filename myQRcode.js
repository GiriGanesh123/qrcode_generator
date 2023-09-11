let buttonEl = document.getElementById('getSubmit');
let Img = document.getElementById('newContainer');
let textArea = document.getElementById('textContent');

let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
buttonEl.onclick = function() {
    Img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textArea.value;
};