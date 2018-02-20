function getNavHeight() {
  return $('nav').height();
}

function hashToSectionId(hash) {
  return hash === '' ? '#constuction' : hash + '-link';
}

function hashToMenuItemId(hash) {
  return hash === '' ? 'welcome-menu-item' : hash.split("#")[1] + '-menu-item';
}

function scrollIntoView(id) {
  var navHeight = getNavHeight();
  $('html, body').animate({ scrollTop: $(id).position().top - navHeight });
}

function highlightMenuItem(id) {
  $.each($('.dropdown-item'), function(index, value) {
    const $elem = $(value);
    $elem.attr('id') === id ? $elem.addClass('active') : $elem.removeClass('active');
  });
}

function respondToHashChange () {
  setTimeout(function() { scrollIntoView(hashToSectionId(window.location.hash)) }, 200);
}

function highlightCurrentSubMenuItem() {
  setTimeout(function() { highlightMenuItem(hashToMenuItemId(window.location.hash)) }, 200);
}

function handleSubMenuItemClick() {
  respondToHashChange();
  highlightCurrentSubMenuItem();
}

$(document).ready(function() {
  //Respond to location changes after page refresh
  handleSubMenuItemClick();
});
