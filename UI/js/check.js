/* eslint-disable no-undef */
const inbox = document.getElementById('in');
const sent = document.getElementById('out');
const draft = document.getElementById('drf');

const read = document.getElementById('read');
const backInbox = document.getElementById('btn-back');

function act() {
  inbox.style.color = 'greenyellow';
  inbox.style.background = 'linear-gradient(rgba(140, 153, 142, 0.2),rgba(0, 0, 0, 0.5))';
  inbox.style.borderTopRightRadius = '20px';
  inbox.style.borderBottomRightRadius = '20px';
}

inbox.addEventListener('click', () => {
<<<<<<< HEAD
    document.getElementById('inbox').style.display = 'block';
    document.getElementById('sent').style.display = 'none';
    document.getElementById('draft').style.display = 'none';
=======
  document.getElementById('inbox').style.display = 'block';
  document.getElementById('sent').style.display = 'none';
  document.getElementById('draft').style.display = 'none';
  inbox.style.color = 'greenyellow';
  inbox.style.background = 'linear-gradient(rgba(140, 153, 142, 0.2),rgba(0, 0, 0, 0.5))';
  inbox.style.borderTopRightRadius = '20px';
  inbox.style.borderBottomRightRadius = '20px';

  sent.style.color = 'white';
  sent.style.background = 'none';
  draft.style.color = 'white';
  draft.style.background = 'none';
>>>>>>> 26bfb554a35292161b378e079cffadb9a66fcf57
});

sent.addEventListener('click', () => {
  document.getElementById('inbox').style.display = 'none';
  document.getElementById('sent').style.display = 'block';
  document.getElementById('draft').style.display = 'none';
  inbox.style.color = 'white';
  inbox.style.background = 'none';
  sent.style.color = 'greenyellow';
  sent.style.background = 'linear-gradient(rgba(140, 153, 142, 0.2),rgba(0, 0, 0, 0.5))';
  sent.style.borderTopRightRadius = '20px';
  sent.style.borderBottomRightRadius = '20PX';
  draft.style.color = 'white';
  draft.style.background = 'none';
});

draft.addEventListener('click', () => {
  document.getElementById('inbox').style.display = 'none';
  document.getElementById('sent').style.display = 'none';
  document.getElementById('draft').style.display = 'block';

  draft.style.color = 'greenyellow';
  draft.style.background = 'linear-gradient(rgba(140, 153, 142, 0.2),rgba(0, 0, 0, 0.5))';
  draft.style.borderTopRightRadius = '20px';
  draft.style.borderBottomRightRadius = '20PX';

  sent.style.color = 'white';
  sent.style.background = 'none';
  inbox.style.color = 'white';
  inbox.style.background = 'none';
});

function readme() {
  read.style.display = 'block';
}
backInbox.addEventListener('click', () => {
  read.style.display = 'none';
});
