

H5P.StarRating  = (function (EventDispatcher, $) {

  /**
   * @extends H5P.EventDispatcher
   * @param {Object} params
   */
  function Rating(params) {
  
    this.text = params.text === undefined ? '<p>New text</p>' : params.text;
    this.icon = params.icontype === undefined ? 'star' : params.icontype;
    this.starcounter = params.starcounter === undefined ? 6 : params.starcounter+1
    var self = this;
    var startco =   params.starcounter
    // Initialize event inheritance
    EventDispatcher.call(self);

    /**
     * 
     *
     * @param {H5P.jQuery} $container
     */
    function ratingStar(event){
      console.log(event)
      var checkValue = event.target.parentNode.parentNode.querySelectorAll(".star-rating input.checkbox-class");
      var checkStar =  event.target.parentNode.parentNode.querySelectorAll(".star-rating label");
  
      var checkCount = 0;
      for(var i=0; i<checkValue.length; i++){
          if(checkValue[i]==event.target){
              checkCount = i+1;
          }
      }
      for(var j=0; j<checkCount; j++){
          checkValue[j].checked = true;
          checkStar[j].className = "rated";
         
      }
      
      for(var k=checkCount; k<checkValue.length; k++){
          checkValue[k].checked = false;
          checkStar[k].className = "check"
            
      }
      var completedEvent = self.createXAPIEventTemplate('interacted');
      
      Object.assign(completedEvent.data.statement, {
        result: {
          response: String(checkCount)
        }
      });
    
      var nodehtml = document.createElement('div');
      nodehtml.innerHTML = self.text;
      Object.assign(completedEvent.data.statement.object.definition,{
        description: {
          'en-US':nodehtml.innerText,
        },
        type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
        interactionType: 'numeric',
        "correctResponsesPattern": [
          "[:]"+startco
        ]
      })
      self.trigger(completedEvent);
      // alert(`You have submitted ${checkCount} rating out of ${startco}`)
  }
  var elem;
  var lab;
  var checkb = document.createElement("div");
  
  const heading = document.createElement('h5');
  heading.innerHTML = this.text;
  checkb.appendChild(heading);
  for (var i = 1; i < this.starcounter; i++) {
    elem = document.createElement('input');
    elem.type = 'checkbox';
    elem.className = 'checkbox-class';
    elem.id = 'r' + i;
    elem.onchange = ratingStar;
   
  
    lab = document.createElement('label');
    lab.for = 'r' + i;
    lab.className= `check`;
    lab.id= `${this.icon}`;
    lab.appendChild(elem);
    checkb.appendChild(lab)
  }
    self.attach = function ($container) {
      $container.addClass('star-rating').html(checkb)

    };
  }

  return Rating;
})(H5P.EventDispatcher, H5P.jQuery);