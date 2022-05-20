///LIGHTBOX



// Set max width for big images
function setImageWidth() {
  var imagesBig = (document.getElementsByClassName('h5p-image-gallery-imageBig'));
  var imagePlaceholder = document.querySelector('.h5p-image-gallery-imagePlaceholder');
  widthImagePlaceholder = window.getComputedStyle(imagePlaceholder).width;

  for (var i=0; i < imagesBig.length; i++){
    imagesBig[i].style.maxWidth = widthImagePlaceholder;
  }
}

// Open lightbox
function open() {
  var show = document.querySelector('.h5p-image-gallery-show');
  show.style.display="flex";
  setImageWidth();
  setHeightThumbnail(images)
  getWidthThumbnailImage(images);
  setThumbnailRows(images);
  maxwidthUsed(images);

  // Close justified gallery
  var justifiedGallery = document.querySelector('.h5p-image-gallery-justified-gallery');
  var footer = document.querySelector('.h5p-image-gallery-footer');
  justifiedGallery.style.display= 'none';
  footer.style.display ='none';
}

// Show image big
function zoom(imageNumber) {

  var bigImages = document.getElementsByClassName("h5p-image-gallery-imageBig");

  // image wrapping
  if (imageNumber > (bigImages.length-1)){
    imageNumber = 0;
  }

  // image wrapping
  if (imageNumber < 0) {
    imageNumber = bigImages.length-1;
  }

  // show big image of index imageNumber
  for (var i = 0; i < bigImages.length; i++) {
    if(i==imageNumber){
      bigImages[i].style.display="block";
    }
    else{
      bigImages[i].style.display="none";
  }
  }


  // keep track of image showing
  onPicture(imageNumber);

  // show thumbnail corresponding to big image showing
  showThumbnailImages(images[imageNumber].image.thumbnailRow);
}

// Show next image
function next() {
  zoom(imageIndex+=1);
}

// Show previous image
function previous() {
  zoom(imageIndex-=1);
}

// Keep track of current image showing
function onPicture(i) {
  imageIndex=i;

  // add border on thumbnail showing
  var smallImages = document.getElementsByClassName("h5p-image-gallery-imageSmall");
  for (var j = 0; j < smallImages.length; j++){
    smallImages[j].style.outline='none';
  }

  smallImages[i].style.outline = "1px solid #fff";
}


// Calculate width of thumbnails
function getWidthThumbnailImage(images) {
  images.forEach(function(element, index) {

    // get height thumbnails
    var imageToCompute = document.getElementById('h5p-image-gallery-thumbnail-'+index);
    var imageHeight = parseFloat(window.getComputedStyle(imageToCompute).height);

    // get margin of thumbnails
    imageMargin = window.parseFloat(getStyle(imageToCompute, 'margin-left'), 10);
    element.image.margin = imageMargin;

    // calculate width of thumbnails
    var ratio = element.image.height / element.image.width ;
    element.image.newWidth = imageHeight / ratio + (2 * imageMargin) ;
  });
}

// Get style of elements
// source: http://www.codingforums.com/javascript-programming/230503-how-get-margin-left-value.html
function getStyle(e, styleName) {
  var styleValue = "";
  if(document.defaultView && document.defaultView.getComputedStyle) {
      styleValue = document.defaultView.getComputedStyle(e, "").getPropertyValue(styleName);
  }
  else if(e.currentStyle) {
      styleName = styleName.replace(/\-(\w)/g, function (strMatch, p1) {
          return p1.toUpperCase();
      });
      styleValue = e.currentStyle[styleName];
  }
  return styleValue;
}

// Assign thumbnails to thumbnailrows
function setThumbnailRows(images) {
  var thumbnailImageContainer = document.querySelector('.h5p-image-gallery-thumbnailImageContainer');
  var widthThumbnailImageContainer = window.parseFloat(getStyle(thumbnailImageContainer, 'width'), 10);

  // make rows
  let rowCounter = 0;
  let rowWidth = 0;
  images.forEach(function(element) {
    const createNewRow = rowWidth + element.image.newWidth > widthThumbnailImageContainer
        && rowWidth != 0;

    if(createNewRow) {
      rowCounter++;
      rowWidth = 0;
    }

    rowWidth += element.image.newWidth;
    element.image.thumbnailRow = rowCounter;
  });
}

// Show thumbnailrow of index rowNumber
function showThumbnailImages(rowNumber) {

  // image wrapping
  if (rowNumber > images[images.length-1].image.thumbnailRow){
    rowNumber = 0;
  }

  // image wrapping
  if (rowNumber < 0){
    rowNumber = images[images.length-1].image.thumbnailRow;
  }

  // show thumbnails
  images.forEach(function(element, index) {
  var thumbnailImage = document.getElementById('h5p-image-gallery-thumbnail-'+index);

    if (element.image.thumbnailRow == ''+rowNumber){
      thumbnailImage.style.display = 'inline-block';
    }
    else{
      thumbnailImage.style.display = 'none';
    }
  });

  // keep track of current thumbnail showing
  currentThumbnail(rowNumber);
}

// Show next thumbnail
function nextThumbnailgallery(){
  showThumbnailImages(rowIndex+=1);
}

// Show previous thumbnail
function previousThumbnailgallery(){
  showThumbnailImages(rowIndex-=1);
}

// Keep track of current thumbnail showing
function currentThumbnail(i){
  rowIndex = i;
}


// Set and get max width of thumbnail image
function setMaxwidthThumbnailImage() {
  var thumbnailImageContainer = document.querySelector('.h5p-image-gallery-thumbnailImageContainer');
  var widthThumbnailImageContainer = window.parseFloat(getComputedStyle(thumbnailImageContainer).width, 10);
  var thumbnailImages = (document.getElementsByClassName('h5p-image-gallery-imageSmall'));
  var imageMargin = 0;

  // get margin thumbnails
  images.forEach(function(element, index) {
    var imageToCompute = document.getElementById('h5p-image-gallery-image-'+index);
    imageMargin = element.image.margin;
  });

  // set max-width of thumbnails
  maxWidth = widthThumbnailImageContainer-(2*imageMargin);
  for (var i=0 ; i < thumbnailImages.length; i++){
      thumbnailImages[i].style.maxWidth = maxWidth + 'px';
  }

  // get maxWidth
  return maxWidth;
}

// Check if the thumbnail images are too wide for the container
function maxwidthUsed(images) {
  maxWidth = setMaxwidthThumbnailImage();

  images.forEach(function(element, index) {
    var thumbnail = document.getElementById('h5p-image-gallery-thumbnail-'+index);
      if (element.image.newWidth > maxWidth){
        maxWidthImages(index, element.image);
      }
  });
}

// Change the height of the thumbnail images that are too wide
function maxWidthImages(i, image) {
  var wideImage = document.getElementById('h5p-image-gallery-thumbnail-'+i);
  wideImage.style.height = 'auto';
}

// Check if esc has been pressed
function checkKey(event){
  if (event.keyCode==27){
    close();
  }
}

// Set height of thumbnails for different window sizes
function setHeightThumbnail(images){
  var widthWindow = window.innerWidth;

  images.forEach(function(element, index){
    var thumbnail = document.getElementById('h5p-image-gallery-thumbnail-'+index)
    if (widthWindow >= 300 && widthWindow <= 699){
      thumbnail.style.height = '38.6094px';
    }

    if (widthWindow >= 700 && widthWindow <= 999){
      thumbnail.style.height = '83.5781px';
    }

    if (widthWindow >= 1000){
      thumbnail.style.height = '104.953px';
    }
    element.image.newHeight = thumbnail.style.height;
  });
}


// Close lightbox
function close() {
  var show = document.querySelector('.h5p-image-gallery-show');
  var justifiedGallery = document.querySelector('.h5p-image-gallery-justified-gallery');
  var footer = document.querySelector('.h5p-image-gallery-footer');
  show.style.display="none";

  // exit fullscreen
  if (H5P.isFullscreen) {
    H5P.exitFullScreen();
  }

  // open justified gallery
  justifiedGallery.style.display = 'inline-block';
  footer.style.display ='block';

  // rebuild justified gallery
  rebuildScreenOne();
}

// Rebuild function for responsiveness, lightbox
function rebuildScreenTwo(images){

  // set new max width of image big
  setImageWidth();

  // set height of thumbnails as they sometimes change on resize
  setHeightThumbnail(images);

  // get width of thumnails
  getWidthThumbnailImage(images);

  // set new thumbnail rows
  setThumbnailRows(images);

  // set max width of thumbnails
  maxwidthUsed(images);

  // show current image and current thumbnails
  zoom(imageIndex);

}
