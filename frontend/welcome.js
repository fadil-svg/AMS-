const checkInTime = getCurrentLagosTime();



function getCurrentLagosTime() {
  return new Date().toLocaleString('en-GB', {
    timeZone: 'Africa/Lagos',
    hour12: false, // 24-hour format; remove if you prefer AM/PM
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}



sessionStorage.setItem('checkedInUser', JSON.stringify({
  name: `{$}`,
  id: user.id,
  time: checkInTime
}));

// Optionally send to your backend to record the check-in
fetch('/api/checkin', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userId: user.id,
    checkInTimestamp: new Date().toISOString() 
  })
})
  .then(res => {
    if (!res.ok) {
      console.warn('Failed to persist check-in on backend');
    }
    // redirect regardless or wait if you want confirmation
    window.location.href = 'welcome.html';
  })
  .catch(err => {
    console.warn('Network error while saving check-in:', err);
    window.location.href = 'welcome.html';
  });
