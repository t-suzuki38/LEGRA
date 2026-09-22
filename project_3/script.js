document.addEventListener('DOMContentLoaded', () => {
  const completeBtn = document.getElementById('complete-btn');
  const shareBtn = document.getElementById('share-btn');
  const upgradeBtn = document.getElementById('upgrade-btn');
  const userBadge = document.getElementById('user-badge');

  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      completeBtn.textContent = '実践完了!';
      completeBtn.classList.add('completed');
      completeBtn.disabled = true;
      alert('素晴らしい!今夜の1分アクションを達成しました。');
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      const text = '今夜の睡眠改善アクションを達成しました! #スリープクエスト';
      if (navigator.share) {
        navigator.share({ title: 'スリープクエスト', text: text, url: window.location.href }).catch(() => {});
      } else {
        alert('シェア内容をコピーしました: ' + text);
      }
    });
  }

  if (upgradeBtn) {
    upgradeBtn.addEventListener('click', () => {
      const confirmUpgrade = confirm('プレミアム会員に登録してAI分析を試しますか?');
      if (confirmUpgrade) {
        userBadge.textContent = 'プレミアム';
        userBadge.className = 'badge premium';
        alert('プレミアム会員へアップグレードされました!');
      }
    });
  }
});