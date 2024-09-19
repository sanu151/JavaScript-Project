const container = document.querySelector('.container')
const h1 = document.querySelector('h1')
const image = document.querySelector('img')
const lightOn = document.querySelector('#light-on')
const lightOff = document.querySelector('#light-off')

lightOff.addEventListener('click', () => {
    container.style.backgroundColor = 'rgb(250, 165, 8)'
    image.src = 'light_off.png'
    h1.innerHTML = 'Light Off'
})

lightOn.addEventListener('click', () => {
    container.style.backgroundColor = 'rgb(248, 211, 142)'
    image.src = 'light_on.png'
    h1.innerHTML = 'Light On'
})