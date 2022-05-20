
var H5P = H5P || {};


// Global variables, justified gallery

// start-height of images
var rowHeight = 120;

// array for total widths of images on each row
var rowWidths = [];

// width of container
var containerWidth = 0;

// index of last row
var lastRowIndex = 0;

var maximumNumberofRows = 4;
// Global variables, lightbox

// current index of big image showing
var imageIndex = 0;

// current index of thumbnailrow showing
var rowIndex = 0;

// array for all images in gallery
var images = [];

// current index of dot showing
var dotIndex = 0;

// for h5p container
var container = 0;


H5P.GreetingCard = (function ($) {

  // Constructor
  function C(options, id ) {

    this.options = options;
    this.id = id;
    images = this.options.images;
    maximumNumberofRows = this.options.rows;
    this.on('resize', function () {

      var show = document.querySelector('.h5p-image-gallery-show');
      var justifiedGallery = document.querySelector('.h5p-image-gallery-justified-gallery');

      if (show.style.display == 'flex'){
        rebuildScreenTwo(images);
      }
      else {

        rebuildScreenOne();
      }
    });

  };

   // Attach function called by H5P framework to insert H5P content into page
  C.prototype.attach = function ($container) {
    var self = this;
    // get h5p container
    container = $container.get(0);

    //create div container, justified gallery
    var justifiedGallery = document.createElement("div");
    justifiedGallery.className = "h5p-image-gallery-justified-gallery";

    // create footer for the navigation dots, justified gallery
    var footer = document.createElement("div");
    footer.className = "h5p-image-gallery-footer";

    // append to h5p container
    container.appendChild(justifiedGallery);
    container.appendChild(footer);


    // add title if provided
    if (this.options.title){
      var titleDiv = document.createElement("div");
      var title = this.options.title;
      titleDiv.className = "h5p-image-gallery-gallerytitle";
      titleDiv.innerHTML = titleDiv.innerHTML + title;
      titleDiv.style.display="block";
      justifiedGallery.appendChild(titleDiv);
    }

    // create images, justified gallery
    images.forEach (function(element, index)  {
      var img = document.createElement("img");
      img.src = H5P.getPath(element.image.path, self.id);
      img.id = 'h5p-image-gallery-image-'+index;
      img.alt = element.description;
      img.onclick = function () {
        fullScreen();
        open();
        zoom(index);
      };
      justifiedGallery.appendChild(img);
    });


    // make div containers, lightbox
    var show = document.createElement("div")
    var topPart = document.createElement("div")
    var galleryPlaceholder = document.createElement("div");
    var imagePlaceholder = document.createElement("div");
    var thumbnailPlaceholder = document.createElement("div");
    var thumbnailImageContainer = document.createElement("div");

    // make buttons, lightbox
    var closeButton = document.createElement("button");
    var leftButtonGallery = document.createElement("button");
    var rightButtonGallery = document.createElement("button");
    var leftButtonThumbnail = document.createElement("button");
    var rightButtonThumbnail = document.createElement("button");

    // set classnames, lightbox
    show.className = "h5p-image-gallery-show";
    topPart.className = "h5p-image-gallery-topPart";
    closeButton.className = "h5p-image-gallery-closeButton";
    galleryPlaceholder.className = "h5p-image-gallery-galleryPlaceholder";
    imagePlaceholder.className = "h5p-image-gallery-imagePlaceholder";
    leftButtonGallery.className = "h5p-image-gallery-buttonGallery h5p-image-gallery-leftButtonGallery";
    rightButtonGallery.className = "h5p-image-gallery-buttonGallery h5p-image-gallery-rightButtonGallery";
    thumbnailPlaceholder.className = "h5p-image-gallery-thumbnailPlaceholder";
    thumbnailImageContainer.className = "h5p-image-gallery-thumbnailImageContainer";
    leftButtonThumbnail.className = "h5p-image-gallery-buttonThumbnail h5p-image-gallery-leftButtonThumbnail";
    rightButtonThumbnail.className = "h5p-image-gallery-buttonThumbnail h5p-image-gallery-rightButtonThumbnail";

    // append to h5p container
    container.appendChild(show);

    // structure, lightbox
    show.appendChild(topPart);
    show.appendChild(galleryPlaceholder);
    show.appendChild(thumbnailPlaceholder);

    topPart.appendChild(closeButton);

    galleryPlaceholder.appendChild(leftButtonGallery);
    galleryPlaceholder.appendChild(rightButtonGallery);
    galleryPlaceholder.appendChild(imagePlaceholder);

    thumbnailPlaceholder.appendChild(thumbnailImageContainer);
    thumbnailPlaceholder.appendChild(leftButtonThumbnail);
    thumbnailPlaceholder.appendChild(rightButtonThumbnail);


    // eventlisteners for buttons
    closeButton.addEventListener('click', close);
    rightButtonGallery.addEventListener('click', next);
    leftButtonGallery.addEventListener('click', previous);
    rightButtonThumbnail.addEventListener('click', nextThumbnailgallery);
    leftButtonThumbnail.addEventListener('click', previousThumbnailgallery);

    // eventlistener for key (used for esc)
    window.addEventListener('keydown',checkKey);


    // Create the big images, lightbox
    images.forEach(function(element, index)  {
      var imgBig = document.createElement('img');
      imgBig.src = H5P.getPath(element.image.path, self.id);;
      imgBig.className = 'h5p-image-gallery-imageBig';
      imagePlaceholder.appendChild(imgBig);
    });

    // Create the thumbnails, lightbox
    images.forEach(function(element, index) {
      var imgThumbnail = document.createElement("img");
      imgThumbnail.src = H5P.getPath(element.image.path, self.id);
      imgThumbnail.id = 'h5p-image-gallery-thumbnail-'+index;
      imgThumbnail.className = 'h5p-image-gallery-imageSmall';
      imgThumbnail.onclick = function () {
        zoom(index);
      };
      thumbnailImageContainer.appendChild(imgThumbnail);
    });



    // Check if full screen is supported
    if (H5P.canHasFullScreen !== false) {

     // make full screen function
      var fullScreen = function() {
      if (H5P.isFullscreen) {
        H5P.exitFullScreen();
      }
      else {
        H5P.semiFullScreen($container, this);
      }
    }
    }

    // Run justified gallery functions
    containerWidth = getContainerWidth();
    setRows(images);
    lastRowIndex = getLastRowIndex(images);
    calculateRelativePercentage(images);
    scaleImages(images);
    makeDots();
    showFirstDot();

   };


  return C;
})(H5P.jQuery);
