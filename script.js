const mario = document.querySelector('.mario')
const goombe = document.querySelector('.goombe')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const goombeposition = goombe.offsetLeft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '')


    if(goombeposition <= 120 && goombeposition > 0 && marioposition < 80){

        goombe.style.animation = 'none';
        goombe.style.left = `${goombeposition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;

        mario.src ='imagens/game_over-removebg-preview.png'
        mario.style.width= '100px';
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }
},10)

document.addEventListener('keydown', jump)

