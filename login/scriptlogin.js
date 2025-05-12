document.addEventListener('DOMContentLoaded', function() {
  const modeBtn = document.getElementById('changemodebtn');
  const body = document.body;
  const loginForm = document.querySelector('.login-form');
  const inputs = document.querySelectorAll('input');
  const buttons = document.querySelectorAll('button');
  const links = document.querySelectorAll('a');
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    enableDarkMode();
  }

  modeBtn.addEventListener('click', function() {
    if (body.classList.contains('dark-mode')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
 
    this.style.transform = 'scale(1.1)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 200);
  });

  function enableDarkMode() {
    body.classList.add('dark-mode');
    loginForm.classList.add('dark-mode');
    
      inputs.forEach(input => {
      input.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      input.style.color = '#f8f5ff';
      input.style.borderColor = '#4a1a6b';
    });
    
      buttons.forEach(button => {
      if (button.id !== 'changemodebtn') {
        button.style.color = '#2a0a3d';
      }
    });
    
   
    links.forEach(link => {
      link.style.color = '#ff6b9e';
    });
    
    localStorage.setItem('theme', 'dark');
    modeBtn.textContent = 'Light Mode';
  }

  function disableDarkMode() {
    body.classList.remove('dark-mode');
    loginForm.classList.remove('dark-mode');
    
    
    inputs.forEach(input => {
      input.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
      input.style.color = '#2a0a3d';
      input.style.borderColor = '#ddd';
    });
    
   
    buttons.forEach(button => {
      if (button.id !== 'changemodebtn') {
        button.style.color = '#9c006d';
      }
    });
    
   
    links.forEach(link => {
      link.style.color = '#9c006d';
    });
    
    localStorage.setItem('theme', 'light');
    modeBtn.textContent = 'Dark Mode';
  }
 
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
        this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
      alert('Login successful! Redirecting...');
    }, 300);
  });

  
  document.getElementById('changelanbtn').addEventListener('mouseenter', function() {
    this.style.animation = 'pulse 1s infinite';
  });
  
  document.getElementById('changelanbtn').addEventListener('mouseleave', function() {
    this.style.animation = 'none';
  });
});