/* eslint-disable prettier/prettier */
$(document).ready(function() {
  $('.gallery__back-button').hide();
  $('.gallery__back-button').click(function(e) {
    e.stopPropagation();
    location.reload();
    $('.gallery__images-box').css({"filter": "blur(5px)"});
    window.location.href = '#gallery__top';
  });

  function gallerySettings() {
    var $backButton = $('.gallery__back-button');
    if (window.innerWidth >= 940) {
      $('html, body').animate({
        scrollTop: $('#gallery__top').offset().top - 63
      });
    } else {
      window.location.href = '#gallery__top';
    }

    if ($backButton.is(':hidden')) {
      $backButton.css({ "display": "flex" });
      $backButton.fadeIn();
    }
  }

  $('.gallery__machine-park-images-box').hide();
  $('.gallery__main-image--machine-park').click(function(e) {
    var $mainImagesBox = $('.gallery__main-images-box');
    var $galleryImagesBox = $('.gallery__machine-park-images-box');
    e.stopPropagation();
    if ($galleryImagesBox.is(':hidden')) {
      $galleryImagesBox.css({"display": "grid"});
      $galleryImagesBox.fadeIn();
      $($mainImagesBox).hide();
    }
    gallerySettings();
  });

  $('.gallery__details-images-box').hide();
  $('.gallery__main-image--details').click(function(e) {
    var $mainImagesBox = $('.gallery__main-images-box');
    var $galleryImagesBox = $('.gallery__details-images-box');
    e.stopPropagation();
    if ($galleryImagesBox.is(':hidden')) {
      $galleryImagesBox.css({"display": "grid"});
      $galleryImagesBox.fadeIn();
      $($mainImagesBox).hide();
    }
    gallerySettings();
  });

  $('.gallery__tools-images-box').hide();
  $('.gallery__main-image--tools').click(function(e) {
    var $mainImagesBox = $('.gallery__main-images-box');
    var $galleryImagesBox = $('.gallery__tools-images-box');
    e.stopPropagation();
    if ($galleryImagesBox.is(':hidden')) {
      $galleryImagesBox.css({"display": "grid"});
      $galleryImagesBox.fadeIn();
      $($mainImagesBox).hide();
    }
    gallerySettings();
  });

  // Magnific Popup
  $('.gallery__view-machine-park-images').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $('.gallery__view-details-images').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $('.gallery__view-tools-images').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});
