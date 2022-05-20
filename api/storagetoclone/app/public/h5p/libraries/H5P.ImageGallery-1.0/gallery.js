///JUSTIFIED GALLERY




// Get width of the outer container
function getContainerWidth() {
  var justifiedGallery = document.querySelector('.h5p-image-gallery-justified-gallery');
  var containerWidth = window.parseFloat(getStyle(justifiedGallery, 'width'), 10);

  return containerWidth;
}

// Assign images to rows
function setRows(images){
  var totalRowWidth = 0;

  // calculate normalized widths
  images.forEach(function(element, index) {
    var imageToCompute = document.getElementById('h5p-image-gallery-image-'+index);
    var ratio = (element.image.height) / (element.image.width);
    var imagePadding = window.parseFloat(getStyle(imageToCompute, 'padding'), 10);
    element.image.normalizedWidth = parseFloat((rowHeight / ratio));
  });

  // make rows
  let rowCounter = 0;
  let rowWidth = 0;
  images.forEach(function(element) {
    const createNewRow = rowWidth + element.image.normalizedWidth > containerWidth
        && rowWidth != 0;

    if(createNewRow) {
      rowCounter++;
      rowWidth = 0;
    }

    rowWidth += element.image.normalizedWidth;
    element.image.row = rowCounter;
  });

  // get total row width for each row
  rowWidths = images.reduce(function(result, element) {
    if(!result[element.image.row]) {
      result[element.image.row] = 0;
    }

    result[element.image.row] += element.image.normalizedWidth;
    return result;
  }, []);
}

// Calculate how many percentage of the rowWidth each image make
function calculateRelativePercentage(images){
  images.forEach(function(element) {
    element.image.relativePercentage = element.image.normalizedWidth/rowWidths[element.image.row];
  });
}


// Get index of last row
function getLastRowIndex(images) {
  return images[images.length-1].image.row;
}

// Check if image is on last row
function lastRowImage(image) {
  return image.row == lastRowIndex;
}

// Scale images to fit container
function scaleImages(images) {

  images.forEach(function (element, index) {
    if (!lastRowImage(element.image)){
      var newWidth = element.image.relativePercentage*100;
      var imageElement = document.getElementById('h5p-image-gallery-image-'+index);
      imageElement.style.width = newWidth+'%';
      imageElement.style.height ='auto';

    }

    else {
      var lastRowImageWidth = element.image.normalizedWidth;
      var imageElement = document.getElementById('h5p-image-gallery-image-'+index);
      imageElement.style.width = lastRowImageWidth+'px';
      imageElement.style.height = 'auto';
    }
  });
}

// Make navigation dots
function makeDots(){

  // only make dots if they are needed
  var totalNumberofRows = lastRowIndex+1;
  var dots = document.getElementsByClassName("dot");
  var dotsMade = 0;

  if (totalNumberofRows > maximumNumberofRows) {
    var numberOfdots = Math.ceil(totalNumberofRows/maximumNumberofRows);
    var footer = document.querySelector('.h5p-image-gallery-footer');

    var dotsContainer = document.createElement("ul");
    dotsContainer.className = 'h5p-image-gallery-dots-container';

    for (var i = 0; i < numberOfdots; i++){

      var dotItem = document.createElement("li");
      var dot = document.createElement("div");
      dotItem.className = "h5p-image-gallery-progress-item";
      dot.className= "h5p-image-gallery-dot";
      dot.id = 'h5p-image-gallery-dot-'+i;



      dotsContainer.appendChild(dotItem);
      dotItem.appendChild(dot);
      footer.appendChild(dotsContainer);

      // add onclick eventlisteners for all the dots
      makeEvents(i);

    }
  }
}

// Add onclick eventlisteners for dot of index i
function makeEvents(i){
  var dotElement = document.getElementById('h5p-image-gallery-dot-'+i);
  dotElement.onclick = function(){
    showContentDot(i);
  }
}

// Show the images for the dot of index dotNumber
function showContentDot(dotNumber){

  var dots = document.getElementsByClassName("h5p-image-gallery-dot");

  // start rowindex of images showing
  var start = dotNumber*maximumNumberofRows;

  // end rowindex of images showing
  var end = start+maximumNumberofRows;

  // if dots exists - show only content of dot with index dotNumber
  if (dots.length > 1){
    images.forEach(function(element, index){
      var imageElement = document.getElementById('h5p-image-gallery-image-'+index);

      if (element.image.row >= start && element.image.row < end){
        imageElement.style.display = 'inline-block';
      }
      else{
        imageElement.style.display = 'none';
      }
    });

    for (var i = 0; i < dots.length; i++){
      dots[i].classList.remove('h5p-image-gallery-dotCurrent');
    }

    // add color to current dot
    var dotOn = document.getElementById('h5p-image-gallery-dot-'+dotNumber);
    dotOn.classList.add('h5p-image-gallery-dotCurrent');

    // keep track of current dot index
    currentDot(dotNumber);
  }
}

// If dots exists - show the images for the first dot
function showFirstDot(){
  var dots = document.getElementsByClassName("h5p-image-gallery-dot");
  if (dots.length > 0){
    showContentDot(0);
  }
}

// Keep track of current dot showing
function currentDot(dotNumber){
  dotIndex = dotNumber;
}


// Delete dots for window.resize event
function deleteDots(){
  var dotsContainer = document.querySelector(".h5p-image-gallery-dots-container");
  var footer = document.querySelector(".h5p-image-gallery-footer")
  if (dotsContainer){
    // dotsContainer.remove();
    footer.removeChild(dotsContainer);

  }
}

// Check if current dot exists for window.resize event
function checkDotExistence(dotNumber){
  var dots = document.getElementsByClassName('h5p-image-gallery-dot');
  if (dotIndex >= dots.length){

    // change current dot to dot existing
    dotIndex = dots.length-1;
    showContentDot(dotIndex);
  }
}

// Rebuild function for responsiveness, justified gallery
function rebuildScreenOne() {

  // set attributes to start value
  totalRowWidth = 0;
  rowWidths = [];

  // get new container width
  containerWidth = getContainerWidth();

  // set new rows
  setRows(images);

  // get new last row index
  lastRowIndex = getLastRowIndex(images);

  // calculate new relative percentage of new rows
  calculateRelativePercentage(images);

  // scale
  scaleImages(images);

  // delete dots
  deleteDots();

  // make new dots
  makeDots();

  // check if dot of dotIndex still exists
  checkDotExistence(dotIndex);

  // show the content of dot dotIndex
  showContentDot(dotIndex);
}
