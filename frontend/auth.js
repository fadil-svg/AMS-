 // Toggle password visibility
        const togglePassword = document.getElementById('toggle-password');
        const password = document.getElementById('password');
        
        
        togglePassword.addEventListener('click', function() {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            
            // Toggle icon
            const icon = this.querySelector('i');
            if (type === 'text') {
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
        
        // Enable/disable login button based on form input
        const email = document.getElementById('email');
        const loginButton = document.getElementById('login-button');
        

        loginButton.addEventListener('click', function() {
            window.location.href = "admin.html"
            
        });
        
        function validateForm() {
            if (email.value.trim() !== '' && password.value.trim() !== '') {
                loginButton.disabled = false;
            } else {
                loginButton.disabled = true;
            }
        }
        
        email.addEventListener('input', validateForm);
        password.addEventListener('input', validateForm);
        
        // Form submission with loading state
        const loginForm = document.getElementById('login-form');
        const loginError = document.getElementById('login-error');
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            loginButton.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin mr-2"></i> Logging in...';
            loginButton.disabled = true;
            
            // Simulate API call
            setTimeout(function() {
                // For demo: show error (in real app, this would check credentials)
                loginError.classList.remove('hidden');
                
                // Reset button
                loginButton.innerHTML = '<span>Login to Dashboard</span><i class="fa-solid fa-arrow-right ml-2"></i>';
                loginButton.disabled = false;
                
                // For demo: clear error after 3 seconds
                setTimeout(function() {
                    loginError.classList.add('hidden');
                }, 3000);
            }, 1500);
        });