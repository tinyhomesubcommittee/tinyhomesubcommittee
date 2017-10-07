function getNavHeight() {
  return $('nav').height();
}

function hashToId(hash) {
  return hash === '' ? '#welcome-link' : hash + '-link';
}

function scrollIntoView(id) {
  var navHeight = getNavHeight();
  $('html, body').animate({ scrollTop: $(id).position().top - navHeight });
}

function respondToHashChange () {
  setTimeout(function() { scrollIntoView(hashToId(window.location.hash)) }, 200);
  return false;
}

$(document).ready(function() {
  //Respond to location changes after page refresh
  respondToHashChange();
});
