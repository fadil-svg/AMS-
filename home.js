  const scanButton = document.getElementById('qrscan-button');
  const adminButton = document.getElementById('admin-button')
  
  
  scanButton.addEventListener('click', function() {
      window.location.href = "qrscan.html"
  });

  adminButton.addEventListener('click', function(){
    window.location.href = "auth.html"
  })
  // Theme Toggle Functionality
        const themeToggle = document.getElementById('theme-toggle');
        
        // Check for dark mode preference
        if (localStorage.getItem('color-theme') === 'dark' || 
            (!localStorage.getItem('color-theme') && 
             window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        // Toggle dark/light mode
        themeToggle.addEventListener('click', function() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        });
        
        // Button hover animations
        const buttons = document.querySelectorAll('.button-hover-effect');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.classList.add('scale-105');
            });
            button.addEventListener('mouseleave', () => {
                button.classList.remove('scale-105');
            });
        });