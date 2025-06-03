document.addEventListener('DOMContentLoaded', function() {
  var banner = document.getElementById('cookie-banner');
  if (!localStorage.getItem('cookies-accepted')) {
    banner.style.display = 'flex';
  }

  document.getElementById('accept-cookies').addEventListener('click', function() {
    localStorage.setItem('cookies-accepted', 'true');
    banner.style.display = 'none';
  });
});
