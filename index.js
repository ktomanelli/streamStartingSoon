const randSpeed = () => Math.random() * 300;
let typeWriter;
const start = () => {
  const initText = 'KyleFromInternet $';
  const text = 'stream starting soon...';
  const messageEl = document.querySelector('#message');
  const timeToBackspace = 100;
  let i = 0;
  let backspace = false;
  typeWriter = setInterval(
    () => {
      if (i % timeToBackspace === 0) {
        backspace = true;
      }
      if (backspace) {
        if (messageEl.innerHTML === initText) backspace = false;
        else if (messageEl.innerHTML !== initText) {
          messageEl.innerHTML = messageEl.innerHTML.substr(
            0,
            messageEl.innerHTML.length - 1
          );
        }
      } else if (messageEl.innerHTML !== initText + text) {
        messageEl.innerHTML +=
          text[messageEl.innerHTML.length - initText.length];
      }
      i += 1;
    },
    randSpeed(),
    i,
    backspace
  );
};

document.addEventListener('DOMContentLoaded', start);
document.addEventListener('beforeunload', () => clearInterval(typeWriter));
