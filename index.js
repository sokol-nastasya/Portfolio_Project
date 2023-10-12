const sendBtn = document.getElementById('modal_send');
const modalForm = document.getElementById('modal');
const sendForm = document.getElementById('send_btn');
const textArea = document.getElementById('textarea');


const downloadFile = () => {
    window.open("https://docs.google.com/document/d/18iOIHr8cpb9kIU_H-IoJ0NxYRp8Moutl/edit");
};


sendBtn.addEventListener('click', function(){
    modalForm.style.display = 'block';
});


sendForm.addEventListener('click', function(){
    textArea.value = ''
    modalForm.style.display = 'none';
});