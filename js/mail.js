const btnCompose = document.getElementById('add-msg');
const btnSend = document.getElementById('btn-send');
const clsGroup = document.getElementById('cls-group');
const clsMessage = document.getElementById('cls-message');
const createGroup = document.getElementById('create-group');
const login = document.getElementById('btn-login');
const btnCancelMsg = document.getElementsByClassName('btn-cancel1');
const btnCancelGrp = document.getElementsByClassName('btn-cancel2');

btnSend.addEventListener('click', () =>{
    document.getElementById('message').style.display = "none";
    alert("Sent");
});

btnCompose.addEventListener('click', () => {
document.getElementById('message').style.display = "block";
document.getElementById('inbox').style.background = "rgba(0, 0, 0, 0.1)";
document.getElementById('sent').style.background = "rgba(0, 0, 0, 0.1)";
document.getElementById('draft').style.background = "rgba(0, 0, 0, 0.1)";
});

clsMessage.addEventListener('click', () => {
    document.getElementById('message').style.display = "none";
    document.getElementById('inbox').style.background = "rgba(0,0 ,0 , 0.8)";
    document.getElementById('sent').style.background = "rgba(255, 255, 255, 1)";
    document.getElementById('draft').style.background = "rgba(255, 255, 255, 0.7)";
})
createGroup.addEventListener('click', () =>{
    document.getElementById('inbox').style.background = "rgba(0, 0, 0, 0.1)";
    document.getElementById('sent').style.background = "rgba(0, 0, 0, 0.1)";
    document.getElementById('draft').style.background = "rgba(0, 0, 0, 0.1)";
    document.getElementById('group').style.display = "block";
});
clsGroup.addEventListener('click', () => {
    document.getElementById('inbox').style.background = "rgba(0,0 ,0 , 0.8)";
    document.getElementById('sent').style.background = "rgba(255, 255, 255, 1)";
    document.getElementById('draft').style.background = "rgba(255, 255, 255, 0.7)";
    document.getElementById('group').style.display = "none";
});

btnCancelMsg.addEventListener('click', () => {
   document.getElementById('message').style.display = 'none';
});
btnCancelGrp.addEventListener('click', () => {
    document.getElementById('group').style.display = 'none';
});