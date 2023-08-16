const bosses = document.querySelectorAll('.boss'),
    modeChangeBtn = document.querySelector('#mode-change-btn'),
    preHmList = document.querySelector('#pre-hardmode'),
    hmList = document.querySelector('#hardmode')

bosses.forEach(boss => {
    boss.addEventListener('click', () => {
        const bossSelected = document.querySelector('.selected')
        const bossSelectedImg = document.querySelector('.boss-img')
        const nameBoss = document.querySelector('.boss-name')
        const descriptionBoss = document.querySelector('.boss-description')

        bossSelected.classList.remove('selected')
        boss.classList.add('selected')
        bossSelectedImg.src = boss.getAttribute('data-img')
        nameBoss.innerText = boss.getAttribute('data-name')
        descriptionBoss.innerText = boss.getAttribute('data-description')

        if (window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    })
})

modeChangeBtn.addEventListener('click', () => {
    preHmList.classList.toggle('hide')
    hmList.classList.toggle('hide')
    console.log('clicou');
})