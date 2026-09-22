document.addEventListener('DOMContentLoaded', () => {
  const mainSearchBtn = document.getElementById('search-main-btn');
  if(mainSearchBtn) {
    mainSearchBtn.addEventListener('click', () => {
      alert('位置情報を取得しました。周辺のカフェを検索します。');
    });
  }
});