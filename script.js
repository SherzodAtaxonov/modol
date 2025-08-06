let text = document.getElementById("text")
let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let orqa = document.querySelector('.orqa')
btn2.addEventListener( 'click', ()=>{
    text.classList.add('yoqot')

    btn.classList.remove('yoqot')
    orqa.classList.add('yoqot')
})
btn.addEventListener('click',()=>{
    text.classList.remove('yoqot')
    btn.classList.add('yoqot')
    orqa.classList.remove('yoqot')
}) 
orqa.addEventListener('click',()=>{
    text.classList.add('yoqot')

    btn.classList.remove('yoqot')
    orqa.classList.add('yoqot')
})
document.addEventListener('keydown', (enter)=>{
    if (enter.key == 'Enter'){
        text.classList.remove('yoqot')
       
    }
   

})
document.addEventListener('keydown',(alt)=>{
    if(alt.key == 'Alt'){
        
        text.classList.add('yoqot')
    }
})
