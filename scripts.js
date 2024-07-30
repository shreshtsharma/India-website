document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
  });

  // Function to toggle the theme
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    var themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark-mode')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
  }

  // Apply the theme on page load based on localStorage value
  function applyTheme() {
    var theme = localStorage.getItem('theme');
    var themeIcon = document.getElementById('theme-icon');
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      document.body.classList.remove('dark-mode');
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }

  document.getElementById('theme-icon').addEventListener('click', toggleTheme);

  // Apply theme on page load
  applyTheme();
});
