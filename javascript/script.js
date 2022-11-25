const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    document.getElementById('container').classList.toggle('dark')
    document.getElementsByTagName('a').classList.toggle('dark')
    document.getElementsByTagName('p').classList.toggle('dark')
    document.getElementsByTagName('h2').classList.toggle('dark')
    document.getElementsByClassName('card').classList.toggle('dark')
    document.getElementsByTagName('hr').classList.toggle('dark')

   

})