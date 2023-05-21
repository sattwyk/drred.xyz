// Listen for changes in the URL hash (e.g., the video ID)
window.addEventListener('hashchange', function () {
  redirectYouTubeLink();
});

// Redirect the YouTube link to drred.xyz
function redirectYouTubeLink() {
  var currentURL = window.location.href;
  var redirectURL = currentURL.replace('youtube.com/watch', 'drred.xyz/watch');
  window.location.href = redirectURL;
}

// Redirect the initial YouTube link when the page loads
redirectYouTubeLink();
