/*
 *	H5P Picture Slider 1.0.0
 *	Demo's and documentation:
 *	griffwith.com/drupal
 *
 *	Copyright (c) 2013 griffen
 *	griffwith.com
 *
 *	Licensed under MIT licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 */

/*
 * Init a H5P object
 */
var H5P = H5P || {};
/**
 *
 * @param object params
 *  The object defined in content.json
 * @param int contentId
 *  The nodes vid
 * @returns object
 *  The Picture Slider Object
 */
H5P.PictureSlider = function(params, contentId) {
  if (!(this instanceof H5P.PictureSlider)) {
    return H5P.PictureSlider(params, contentId);
  }
  // Get the newest jquery from H5P
  var $ = H5P.jQuery;
  //Setting default values
  var defaults = {
    "SliderType": "html_carousel",
    "image": "",
    "action": "",
    "width": "600",
    "height": "400",
    "items": "variable",
    "settings": {
      "infinite": true,
      "responsive": false,
      "circular": true,
      "direction": "up",
      "align": "center",
      "padding": null,
      "synchronise": null,
      "cookie": false,
      "items": 1,
      "pagination": false,
      "scroll": {
        "fx": "crossfade",
        "items": "1",
        "duration": 3000
      },
      "auto": {
        "play": true,
        "items": "1",
        "duration": 1000,
        "pauseOnHover": true
      }
    },
  };
  // setting all the paramters into one variable
  params = $.extend({}, defaults, params);
  var $myDom;
  /**
   * Attach the Picture Slider html to a given target
   *
   * @param {string|jquery} target
   *  Where the H5P html should be placed
   */
  this.attach = function(target) {
    // Make sure we have a jquery object
    $myDom = typeof target === 'string' ? $('#' + target) : target;

    // Adding the Picture Slider
    // Render Picture Slider DOM elements
    var $slider = $('<div/>', {'class': 'h5p-ps-' + params.SliderType });
    var $slidercontainer = $(params.SliderType === 'listCarousel' ? '<ul/>' : '<div/>', {'class': 'h5p-ps-slidercontainer'});

    //Setting image with and height
    var asImageWidth = params.width;
    var asImageHeight = params.height - 35;
    // creating fom dom for a html_carousel

    var i;
    if (params.SliderType === "html_carousel") {
      for (i = 0, length = params.images.length; i < length; i++) {
        var $infoView = (params.images[i].header ? '<h2>' + params.images[i].header + '</h2>' : '') +
        (params.images[i].text ? '<p>' + params.images[i].text + '</p>' : '' ) + '</div>';

        $slidercontainer.append($('<div class="h5p-ps-slide"><img src="' + H5P.getPath(params.images[i].image.path, contentId) + '" alt="carousel ' + i + '" width="' + asImageWidth + '" height="' + asImageHeight + '"/>' +
          ($infoView ? ('<div class="h5p-ps-imageinfo">' + $infoView + '</div>') : '') + '</div>'));
      }
    }
    // TODO: NOT IMPLEMENTED IN H5P EDITOR YET
    // creating fom dom for a imageCarousel
    else if (params.SliderType === "imageCarousel") {
      for (i = 0, length = params.images.length; i < length; i++) {
        $slidercontainer.append($('<img src="' + H5P.getPath(params.images[i].image.path, contentId) + '" width="' + asImageWidth + '" height="' + asImageHeight + '"/>'));
      }
    }
    // TODO: NOT IMPLEMENTED IN H5P EDITOR YET
    // creating fom dom for a listCarousel
    else if (params.SliderType === "listCarousel") {
      for (i = 0, length = params.images.length; i < length; i++) {
        $slidercontainer.append($('<li><img src="' + H5P.getPath(params.images[i].image.path, contentId) + '" width="' + asImageWidth + '" height="' + asImageHeight + '"/><div></li>'));
      }
    }
    // Appending here when slidecontainer is built, to avoid unnecessary rerendering in browser
    $slider.append($slidercontainer);
    $slider.append($('<div/>', {'class': 'h5p-ps-clearfix'}));
    // check if pagination is set
    if (params.settings.pagination) {
      // creating paginationbar
      $slider.append($('<div/>', {'class': 'h5p-ps-pager'}));
    }

    $myDom.append($slider);

    $(function () {
      //Setting Picture Slider properties
      $slidercontainer.carouFredSel({
        circular: params.settings.circular,
        infinite: params.settings.infinite,
        responsive: params.settings.responsive,
        direction: params.settings.direction,
        align: params.settings.align,
        padding: params.settings.padding,
        synchronise: params.settings.synchronise,
        cookie: params.settings.cookie,
        items: {
          height: 'variable'
        },
        height: params.height,
        width: params.width,
        scroll: {
          fx: params.settings.scroll.fx,
          items: params.settings.scroll.items,
          duration: params.settings.scroll.duration
        },
        pagination: {
          container: $('.h5p-ps-pager', $slider),
          duration: 0,
          anchorBuilder: params.settings.pagination,
          keys: true,
          deviation: -1
        },
        auto: {
          play: params.settings.auto.play,
          itema: params.settings.auto.items,
          duration: params.settings.auto.duration,
          pauseOnHover: params.settings.auto.pauseOnHover
        }
      }).find(".h5p-ps-slide").hover(
          function() {
            $(this).find("div").slideDown();
          },
          function() {
            $(this).find("div").slideUp();
          }
      );
    });

    return this;
  };
};
