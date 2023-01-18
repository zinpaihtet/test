

const blackBtn = document.querySelector('#haikei_black');
const blueBtn = document.querySelector('#haikei_blue')
const pageTopLink = document.querySelector('.color_change #footer_link_pagetop a');

[blackBtn, blueBtn].forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(document.getElementsByTagName('body')[0].classList.contains('.color_change')){
            pageTopLink.style.background = 'none'
        }
    })
})

alert('hello world')