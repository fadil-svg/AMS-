const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', function(event){

  event.preventDefault();
  window.location.href = "welcome.html";
  
});


    function getCurrentLagosTime() {
      return new Date().toLocaleString('en-GB', {
        timeZone: 'Africa/Lagos',
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }

   
   async function lookupUserById(id) {
      // Replace with real call
      if (id === 'valid123') {
        return { name: 'Alice Doe', id: 'valid123' };
      } else {
        throw new Error('User not found');
      }
    }
    const params = new URLSearchParams(window.location.search);
    if (params.get('reason')) {
      const reason = params.get('reason');
      document.getElementById('message').textContent = reason === 'scan_failed'
        ? 'QR lookup failed; please enter your ID manually.'
        : 'QR scan error; please enter your ID manually.';
    }

    document.getElementById('#manual-login-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      document.getElementById('error').textContent = '';
      const userId = document.getElementById('#qr-Id').value.trim();
      if (!userId) return;

      try {
        const user = await lookupUserById(id);
        const checkInTime = getCurrentLagosTime();

        sessionStorage.setItem('checkedInUser', JSON.stringify({
          name: user.name,
          id: user.id,
          time: checkInTime
        }));

        // Send to backend (optional)
        fetch('/api/checkin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: user.id,
            checkInTimestamp: new Date().toISOString()
          })
        }).catch(err => {
          console.warn('Backend persistence failed', err);
        }).finally(() => {
          window.location.href = "welcome.html";
        });
      } catch (err) {
        document.getElementById('error').textContent = 'User not found. Please verify the ID.';
      }
    });
  
