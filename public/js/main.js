// 貯金箱をクリックした時の処理
const saihu = document.getElementById('saihu');

console.log(saihu);

saihu.addEventListener('click', () => {
    document.querySelector('.tyokin-wrap').classList.add('active');
});
