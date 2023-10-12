const sendBtn = document.getElementById('modal_send');
const modalForm = document.getElementById('modal');
const sendForm = document.getElementById('send_btn');
const textArea = document.getElementById('textarea');


const downloadFile = () => {
    window.open("#");
};


sendBtn.addEventListener('click', function(){
    modalForm.style.display = 'block';
});


sendForm.addEventListener('click', function(){
    textArea.value = ''
    modalForm.style.display = 'none';
});
