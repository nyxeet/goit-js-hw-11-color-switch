import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startButtonRef = document.querySelector('button[data-action="start"]');
const stopButtonRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body')

startButtonRef.addEventListener('click', event => { backgroundGenerator.start(event) })
stopButtonRef.addEventListener('click', event => {backgroundGenerator.stop(event)})

const backgroundGenerator = {
    isActive: false,
    intervalId: null,
    start(e) {
        if (this.isActive) {
            return;
        }
        e.target.disabled = true;
        this.isActive = true;
        this.intervalId = setInterval(setBodyBackgroundColor, 1000)

    },
    stop(e) {
        clearInterval(this.intervalId);
        startButtonRef.disabled = false;
        this.intervalId = null;
        this.isActive = false;
        bodyRef.removeAttribute("style");
    }
}


function setBodyBackgroundColor() {
        bodyRef.setAttribute("style", "background:" + colors[randomIntegerFromInterval(0, colors.length - 1)] + ";")
}
        
function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
