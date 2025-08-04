const welcomePage = document.getElementById('welcome-page')
const manualEntryBtn = document.getElementById('manual-entry-btn');


manualEntryBtn.addEventListener('click', function(){
  window.location.href = "manual.html"
});
welcomePage.addEventListener('click', function(){
  window.location.href = "welcome.html"
});
 document.addEventListener('DOMContentLoaded', function() {
            // Initialize QR scanner
            const html5QrcodeScanner = new Html5Qrcode("reader");
            const qrConfig = { fps: 10, qrbox: { width: 250, height: 250 } };
            let cameraId = null;
            let currentCamera = 'environment'; // 'environment' for back camera, 'user' for front
            
            // Get camera list
            Html5Qrcode.getCameras().then(devices => {
                if (devices && devices.length) {
                    cameraId = devices[0].id;
                    startScanner();
                }
            }).catch(err => {
                console.error('Error getting cameras', err);
                showToast('error');
            });
            
            function startScanner() {
                html5QrcodeScanner.start(
                    { facingMode: currentCamera }, 
                    qrConfig,
                    onScanSuccess,
                    onScanFailure
                ).catch(err => {
                    console.error('Error starting scanner', err);
                });
            }
            
            // Toggle camera button
            document.getElementById('toggle-camera').addEventListener('click', () => {
                html5QrcodeScanner.stop().then(() => {
                    currentCamera = currentCamera === 'environment' ? 'user' : 'environment';
                    startScanner();
                });
            });
            
            // Success handler for QR scan
            function onScanSuccess(decodedText, decodedResult) {
                // Vibrate if supported
                if (navigator.vibrate) {
                    navigator.vibrate(200);
                }
                
                // Stop scanner temporarily to prevent multiple scans
                html5QrcodeScanner.pause();
                
                // Simulate processing the QR code
                console.log(`QR Code detected: ${decodedText}`);
                
                // Simulate different scenarios (in a real app, this would be API calls)
                const scenarios = ['success', 'signout', 'duplicate', 'error'];
                const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
                
                // Show appropriate toast
                showToast(randomScenario);
                
                // Resume scanner after 3 seconds
                setTimeout(() => {
                    html5QrcodeScanner.resume();
                }, 3000);
            }
            
            // Error handler for QR scan
            function onScanFailure(error) {
                // Don't show errors for normal operation
                // console.warn(`QR scan error: ${error}`);
            }
            
            // Toast management
            function showToast(type) {
                const toast = document.getElementById('status-toast');
                const success = document.getElementById('status-success');
                const signout = document.getElementById('status-signout');
                const error = document.getElementById('status-error');
                const duplicate = document.getElementById('status-duplicate');
                
                // Hide all states first
                success.classList.add('hidden');
                signout.classList.add('hidden');
                error.classList.add('hidden');
                duplicate.classList.add('hidden');
                
                // Set current time
                const now = new Date();
                const timeString = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
                
                // Show appropriate state
                if (type === 'success') {
                    document.getElementById('user-name').textContent = 'Jane Smith';
                    document.getElementById('sign-time').textContent = timeString;
                    success.classList.remove('hidden');
                } else if (type === 'signout') {
                    document.getElementById('signout-name').textContent = 'Jane Smith';
                    signout.classList.remove('hidden');
                } else if (type === 'error') {
                    error.classList.remove('hidden');
                } else if (type === 'duplicate') {
                    document.getElementById('previous-time').textContent = '7:30 AM';
                    duplicate.classList.remove('hidden');
                }
                
                // Show toast
                toast.classList.remove('hidden');
                toast.classList.add('toast-enter');
                
                // Hide toast after 3 seconds
                setTimeout(() => {
                    toast.classList.add('hidden');
                    toast.classList.remove('toast-enter');
                }, 3000);
            }
            
            // Manual entry modal
            const manualEntryBtn = document.getElementById('manual-entry-btn');
            const manualEntryModal = document.getElementById('manual-entry-modal');
            const closeModalBtn = document.getElementById('close-modal');
            
            manualEntryBtn.addEventListener('click', () => {
                manualEntryModal.classList.remove('hidden');
            });
            
            closeModalBtn.addEventListener('click', () => {
                manualEntryModal.classList.add('hidden');
            });
            
            // Sign in/out toggle in manual form
            const signInBtn = document.getElementById('sign-in-btn');
            const signOutBtn = document.getElementById('sign-out-btn');
            
            signInBtn.addEventListener('click', () => {
                signInBtn.classList.remove('bg-gray-800', 'border-gray-700', 'text-gray-300');
                signInBtn.classList.add('bg-primary/20', 'border-primary/40', 'text-primary');
                
                signOutBtn.classList.remove('bg-primary/20', 'border-primary/40', 'text-primary');
                signOutBtn.classList.add('bg-gray-800', 'border-gray-700', 'text-gray-300');
            });
            
            signOutBtn.addEventListener('click', () => {
                signOutBtn.classList.remove('bg-gray-800', 'border-gray-700', 'text-gray-300');
                signOutBtn.classList.add('bg-primary/20', 'border-primary/40', 'text-primary');
                
                signInBtn.classList.remove('bg-primary/20', 'border-primary/40', 'text-primary');
                signInBtn.classList.add('bg-gray-800', 'border-gray-700', 'text-gray-300');
            });
            
            // Manual form submission
            document.getElementById('manual-form').addEventListener('submit', (e) => {
                e.preventDefault();
                const studentId = document.getElementById('student-id').value;
                if (studentId.trim()) {
                    manualEntryModal.classList.add('hidden');
                    showToast('success');
                }
            });
        });