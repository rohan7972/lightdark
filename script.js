function toggleTheme() {
    const body = document.body;
    const themeSwitchContainer = document.querySelector('.theme-switch-container');
    const themeSwitch = document.getElementById('theme-switch');
  
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    themeSwitchContainer.classList.toggle('light-mode');
    themeSwitchContainer.classList.toggle('dark-mode');
  
    // Change button text based on the current mode
    const currentMode = body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
    themeSwitch.textContent = currentMode;
}
