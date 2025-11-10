// スムーズスクロール
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
// ナビゲーションリンクもスムーズスクロール化
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('href').substring(1);
    scrollToSection(target);
  });
});
// モーダルウィンドウを開くための関数
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block"; // モーダルを表示
}
// モーダルウィンドウを閉じるための関数
function closeModal(modal) {
    modal.style.display = "none"; // モーダルを非表示
}
// 各作品の要素を取得
const works = document.querySelectorAll('.work');
// 各作品にクリックイベントを追加
works.forEach(work => {
    work.addEventListener('click', () => {
        const modalId = work.getAttribute('data-modal'); // data-modal属性からIDを取得
        openModal(modalId); // モーダルを開く
    });
});
// モーダルの閉じるボタンを取得
const closeButtons = document.querySelectorAll('.close');
// 各閉じるボタンにクリックイベントを追加
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal'); // 親のモーダルを取得
        closeModal(modal); // モーダルを閉じる
    });
});
// モーダルの外側をクリックしたときに閉じる処理
window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal); // モーダルを閉じる
        }
    });
});