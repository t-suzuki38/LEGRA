document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('main-btn');
  if (button) {
    button.addEventListener('click', function() {
      alert('MVP機能が正常に動作しました。');
    });
  }
});