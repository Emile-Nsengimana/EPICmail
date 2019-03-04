const inbox = document.getElementById('in');
const sent = document.getElementById('out');
const draft = document.getElementById('drf');

const read = document.getElementById('read');
const backInbox =document.getElementById('btn-back');

inbox.addEventListener('click', () => {
    document.getElementById('inbox').style.display = "block";
    document.getElementById('sent').style.display = "none";
    document.getElementById('draft').style.display = "none";
});

sent.addEventListener('click', () => {
    document.getElementById('inbox').style.display = "none";
    document.getElementById('sent').style.display = "block";
    document.getElementById('draft').style.display = "none";
});

draft.addEventListener('click', () => {
    document.getElementById('inbox').style.display = "none";
    document.getElementById('sent').style.display = "none";
    document.getElementById('draft').style.display = "block";
    
});

function readme(){
  read.style.display = "block";
}
backInbox.addEventListener('click', () =>{
    read.style.display = "none"; 
});
