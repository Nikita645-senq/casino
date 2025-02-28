const parentQuests = document.querySelector('.faq')
const scrollBtn = document.querySelector('.scroll-btn')

try {
    parentQuests.addEventListener('click', (event) => {
        let target = event.target.closest('.faq-question')
        target.childNodes[1].classList.toggle('active')
        target.childNodes[0].childNodes[1].classList.toggle('active')
    })
} catch(error) {
    console.log('error', error)
}

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if(window.scrollY > 150) {
        scrollBtn.style.display = 'flex'
    }
    else {
        scrollBtn.style.display = 'none'
    }
})

scrollBtn.addEventListener('click', () => {
    scrollTo(0, 0)
})