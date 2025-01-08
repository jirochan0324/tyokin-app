const saihu = document.getElementById('saihu');

console.log(saihu);

saihu.addEventListener('click', () => {
    document.querySelector('.tyokin-wrap').classList.add('active');
});