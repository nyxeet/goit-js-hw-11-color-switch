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

startButtonRef.addEventListener('click', event => { backgroundGenerator.start() })
stopButtonRef.addEventListener('click', event => {backgroundGenerator.stop()
})

const backgroundGenerator = {
    isActive: false,
    intervalId: null,
    start() {
        if (this.isActive) {
            return;
        }
        console.log(this)
        this.isActive = true;
        const setBodyBackgroundColor = () => {
        bodyRef.setAttribute("style", "background:" + colors[randomIntegerFromInterval(0, colors.length - 1)] + ";")
        }
        this.intervalId = setInterval(setBodyBackgroundColor, 1000)
        console.log(this.intervalId)
    },
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.isActive = false;
        bodyRef.removeAttribute("style");
    }
}



const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
