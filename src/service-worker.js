function showNotification(title, options) {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification(title, options);
    });
  }
}

function handleNewNotification() {
  // Increment the badge count
  const badgeCount = parseInt(localStorage.getItem('badgeCount') || 0);
  localStorage.setItem('badgeCount', badgeCount + 1);

  // Show notification
  showNotification('New Message', {
    body: 'You have a new message!',
    icon: '/path/to/notification-icon.png'
  });
}
