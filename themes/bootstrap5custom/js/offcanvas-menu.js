document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var menu = document.getElementById('bootstrap5custom-offcanvas');
  if (!menu) {
    return;
  }

  var lockBodyScroll = function () {
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  };

  var unlockBodyScroll = function () {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
  };

  menu.addEventListener('shown.bs.offcanvas', lockBodyScroll);
  menu.addEventListener('hidden.bs.offcanvas', unlockBodyScroll);
});
