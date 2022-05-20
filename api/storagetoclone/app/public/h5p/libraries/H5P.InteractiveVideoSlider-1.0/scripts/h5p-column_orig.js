H5P.InteractiveVideoSlider = (function (EventDispatcher) {

  /**
   * Column Constructor
   *
   * @class
   * @param {Object} params Describes task behavior
   * @param {number} id Content identifier
   * @param {Object} data User specific data to adapt behavior
   */
  function Column(params, id, data) {
    /** @alias H5P.Column# */
    var self = this;
     console.log(params)
     var noslide = params.listcounter
    // add slider 
    // var head =  document.getElementsByTagName('head')[0]
    // var script1 = document.createElement('script');
    // script1.src ='https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min'
    // head.appendChild(script1)
    // var script2 = document.createElement('script');
    // script2.src ='http://code.jquery.com/jquery-migrate-1.2.1.min.js'
    // var script3 = document.createElement('script');
    // script3.scr ='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
    // // We support events by extending this class
    EventDispatcher.call(self);

    // Add defaults
    params = params || {};
    if (params.useSeparators === undefined) {
      params.useSeparators = true;
    }

    this.contentData = data;

    // Column wrapper element
    var wrapper;

    // H5P content in the column
    var instances = [];
    var instanceContainers = [];

    // Number of tasks among instances
    var numTasks = 0;

    // Number of tasks that has been completed
    var numTasksCompleted = 0;

    // Keep track of result for each task
    var tasksResultEvent = [];

    // Keep track of last content's margin state
    var previousHasMargin;

    /**
     * Calculate score and trigger completed event.
     *
     * @private
     */
    var completed = function () {
      // Sum all scores
      var raw = 0;
      var max = 0;

      for (var i = 0; i < tasksResultEvent.length; i++) {
        var event = tasksResultEvent[i];
        raw += event.getScore();
        max += event.getMaxScore();
      }

      self.triggerXAPIScored(raw, max, 'completed');
    };

    /**
     * Generates an event handler for the given task index.
     *
     * @private
     * @param {number} taskIndex
     * @return {function} xAPI event handler
     */
    var trackScoring = function (taskIndex) {
      return function (event) {
        if (event.getScore() === null) {
          return; // Skip, not relevant
        }

        if (tasksResultEvent[taskIndex] === undefined) {
          // Update number of completed tasks
          numTasksCompleted++;
        }

        // Keep track of latest event with result
        tasksResultEvent[taskIndex] = event;

        // Track progress
        var progressed = self.createXAPIEventTemplate('progressed');
        progressed.data.statement.object.definition.extensions['http://id.tincanapi.com/extension/ending-point'] = taskIndex + 1;
        self.trigger(progressed);

        // Check to see if we're done
        if (numTasksCompleted === numTasks) {
          // Run this after the current event is sent
          setTimeout(function () {
            completed(); // Done
          }, 0);
        }
      };
    };

    /**
     * Creates a new ontent instance from the given content parameters and
     * then attaches it the wrapper. Sets up event listeners.
     *
     * @private
     * @param {Object} content Parameters
     * @param {Object} [contentData] Content Data
     */
    var addRunnable = function (content, contentData, anchorBtn) {
      // Create container for content
      var container = document.createElement('div');
      container.classList.add('h5p-column-content');
      //container.classList.add('slide');
      var library = content.library.split(' ')[0];
      if (library === 'H5P.InteractiveVideo') {
      // Content overrides
      
      if (library === 'H5P.Video') {
        // Prevent video from growing endlessly since height is unlimited.
        content.params.visuals.fit = false;
      }

      // Create content instance
      var instance = H5P.newRunnable(content, id, undefined, true, contentData);

      // Bubble resize events
      bubbleUp(instance, 'resize', self);

      // Check if instance is a task
      if (Column.isTask(instance)) {
        // Tasks requires completion

        instance.on('xAPI', trackScoring(numTasks));
        numTasks++;
      }

      if (library === 'H5P.Image' || library === 'H5P.TwitterUserFeed') {
        // Resize when images are loaded

        instance.on('loaded', function () {
          self.trigger('resize');
        });
      }

      // Keep track of all instances
      instances.push(instance);
      instanceContainers.push({
        hasAttached: false,
        container: container,
        instanceIndex: instances.length - 1,
      });
    
      // Add to DOM wrapper
      anchorBtn.append(container)
      var jab = document.createElement('div')
      jab.className = "strictoverlay"
      anchorBtn.appendChild(jab)

      wrapper.appendChild(anchorBtn);
      
    
    }else{
    
      var embedActivityid="123"
      try{
        embedActivityid = content.params.text.split('p>')[1].split("</")[0].trim()
      }catch(e){}
      container.innerHTML=`<iframe src="https://imsparked.currikistudio.org/h5p/embed/${embedActivityid}" width="100%" class="iframed-special" ><iframe>`
      anchorBtn.append(container)
      var jab = document.createElement('div')
      jab.className = "strictoverlay"
      anchorBtn.appendChild(jab)
      wrapper.appendChild(anchorBtn)
    }
    };
    var addRunnable1 = function (content, contentData, modelcontainer) {
      // Create container for content
      var container = document.createElement('div');
      container.classList.add('h5p-column-content');
      //container.classList.add('slide');
      var library = content.library.split(' ')[0];
      if (library === 'H5P.InteractiveVideo') {
      // Content overrides
      
      if (library === 'H5P.Video') {
        // Prevent video from growing endlessly since height is unlimited.
        content.params.visuals.fit = false;
      }

      // Create content instance
      var instance = H5P.newRunnable(content, id, undefined, true, contentData);

      // Bubble resize events
      bubbleUp(instance, 'resize', self);

      // Check if instance is a task
      if (Column.isTask(instance)) {
        // Tasks requires completion

        instance.on('xAPI', trackScoring(numTasks));
        numTasks++;
      }

      if (library === 'H5P.Image' || library === 'H5P.TwitterUserFeed') {
        // Resize when images are loaded

        instance.on('loaded', function () {
          self.trigger('resize');
        });
      }

      // Keep track of all instances
      instances.push(instance);
      instanceContainers.push({
        hasAttached: false,
        container: container,
        instanceIndex: instances.length - 1,
      });
    
      // Add to DOM wrapper
      modelcontainer.appendChild(container);

    }else{
    
      var embedActivityid="123"
      try{
        embedActivityid = content.params.text.split('p>')[1].split("</")[0].trim()
      }catch(e){}
      container.innerHTML=`<iframe src="https://imsparked.currikistudio.org/h5p/embed/${embedActivityid}" width="100%" class="iframed-special" ><iframe>`
      modelcontainer.appendChild(container)
    }
    };

    var showPopbox =  function (e) {
      window.scrollTo(0,0)
      console.log(e)
      var ida = e.path[1].className.split(" ")[0].trim();
     
      e.path[3].querySelector('#'+ida).scrollIntoView(true)
      
      e.path[3].querySelector('#'+ida).style.visibility = "visible";
      e.path[3].querySelector('#'+ida).style.opacity = 1;
    }
    var closepopup =  function (e) {
      console.log(e);
      if((!e.path[2].querySelector('.h5p-control.h5p-play')?.classList?.contains('h5p-pause') && e.srcElement.nextSibling.classList.contains('h5p-interactive-video')) ) {
        alert('stop video first');
        
      } else {
       //setTimeout(() => {
        e.path[2].style.visibility='hidden';
        e.path[2].style.opacity=0;
       //}, 2500);
        
      }
      
      
    }

    /**
     * Help get data for content at given index
     *
     * @private
     * @param {number} index
     * @returns {Object} Data object with previous state
     */
    var grabContentData = function (index) {
      var contentData = {
        parent: self
      };

      if (data.previousState && data.previousState.instances && data.previousState.instances[index]) {
        contentData.previousState = data.previousState.instances[index];
      }

      return contentData;
    };

    /**
     * Adds separator before the next content.
     *
     * @private
     * @param {string} libraryName Name of the next content type
     * @param {string} useSeparator
     */
    var addSeparator = function (libraryName, useSeparator) {
      // Determine separator spacing
      var thisHasMargin = (hasMargins.indexOf(libraryName) !== -1);

      // Only add if previous content exists
      if (previousHasMargin !== undefined) {

        // Create separator element
        var separator = document.createElement('div');
        //separator.classList.add('h5p-column-ruler');

        // If no margins, check for top margin only
        if (!thisHasMargin && (hasTopMargins.indexOf(libraryName) === -1)) {
          if (!previousHasMargin) {
            // None of them have margin

            // Only add separator if forced
            if (useSeparator === 'enabled') {
              // Add ruler
              separator.classList.add('h5p-column-ruler');

              // Add space both before and after the ruler
              separator.classList.add('h5p-column-space-before-n-after');
            }
            else {
              // Default is to separte using a single space, no ruler
              separator.classList.add('h5p-column-space-before');
            }
          }
          else {
            // We don't have any margin but the previous content does

            // Only add separator if forced
            if (useSeparator === 'enabled') {
              // Add ruler
              separator.classList.add('h5p-column-ruler');

              // Add space after the ruler
              separator.classList.add('h5p-column-space-after');
            }
          }
        }
        else if (!previousHasMargin) {
          // We have margin but not the previous content doesn't

          // Only add separator if forced
          if (useSeparator === 'enabled') {
            // Add ruler
            separator.classList.add('h5p-column-ruler');

            // Add space after the ruler
            separator.classList.add('h5p-column-space-before');
          }
        }
        else {
          // Both already have margin

          if (useSeparator !== 'disabled') {
            // Default is to add ruler unless its disabled
            separator.classList.add('h5p-column-ruler');
          }
        }

        // Insert into DOM
        // wrapper.appendChild(separator);
      }

      // Keep track of spacing for next separator
      previousHasMargin = thisHasMargin || (hasBottomMargins.indexOf(libraryName) !== -1);
    };

    /**
     * Creates a wrapper and the column content the first time the column
     * is attached to the DOM.
     *
     * @private
     */
    var createHTML = function () {
      // Create wrapper
      wrapper2 = document.createElement('div');
      wrapper2.className ='interactive-video-slider';
      heading2 = document.createElement('h2');
      heading2.innerHTML = params.text,
      !!params.text && wrapper2.appendChild(heading2)
      description2 = document.createElement('div');
      description2.innerHTML = params.description
      !!params.description && wrapper2.appendChild(description2)
      wrapper1 = document.createElement('div');
      wrapper1.className = 'slider custom-'
      wrapper = document.createElement('div');
      wrapper.className = 'slides'
      wrapper1.appendChild(wrapper)
      wrapper2.appendChild(wrapper1)
      // var control =  document.createElement('div')
      // control.innerHTML= `<div class="controls">
      // <button class="prev"><i class="fa fa-chevron-left"></i></button>
      // <button class="next"><i class="fa fa-chevron-right"></i></button>
      // </div>`
      
      // Go though all contents
     
      for (var i = 0; i < params.content.length; i++) {
        var content = params.content[i];

        // In case the author has created an element without selecting any
        // library
    
   
        // Add content
        var anchorBtn = document.createElement('div');
        anchorBtn.className = `popupid${i+1} slide`
        anchorBtn.onclick = showPopbox

        addRunnable(content, grabContentData(i),anchorBtn);
        var popbox = document.createElement('div');
        popbox.id = `popupid${i+1}`
        popbox.className = "overlay"

        var popboxover = document.createElement('div');
        popboxover.className = "popup"

        var popboxclose = document.createElement('a');
        popboxclose.className = "close"
        popboxclose.onclick = closepopup;
        popboxclose.href = "#"
        popboxclose.innerHTML = "&times;"
        popboxover.append(popboxclose)
        popbox.append(popboxover)
        wrapper1.appendChild(popbox)
        addRunnable1(content, grabContentData(i),popboxover)
        
      }
     
    };


    /**
     * Attach the column to the given container
     *
     * @param {H5P.jQuery} $container
     */
    self.attach = function ($container) {
      //if (wrapper === undefined) {
        // Create wrapper and content
        createHTML();
      //}

      // Attach instances that have not been attached
      instanceContainers.filter(function (container) { return !container.hasAttached })
        .forEach(function (container) {
          instances[container.instanceIndex]
            .attach(H5P.jQuery(container.container));

          // Remove any fullscreen buttons
          disableFullscreen(instances[container.instanceIndex]);
        });


      // Add to DOM
      
      $container.addClass('h5p-column slider-video-ib').html('').append(wrapper2);
      //var slider = document.querySelector(".slider.custom-");
      // document.querySelector('iframe.h5p-initialized')[0]?.style?.minHeight  ='600px' 
    
      // var slides = document.querySelectorAll(".slider.custom- .slide");
      // var container1 = document.querySelector(".slider.custom- .slides");
      
      // var prevButton = document.querySelector(".slider.custom- .prev");
      // var nextButton = document.querySelector(".slider.custom- .next");
      // let current = noslide;
      // let startX = 0;
      // let endX = 0;
      
      // let autoSlide = 0;
      // let position = 0;
      // let move = 1
      
      // function slideWidth() {

      
      //   let totalWidth = 0;
        
      //   slides.forEach(slide => {
      //     position = slider.offsetWidth/noslide
      //     slide.style.width = slider.offsetWidth/noslide + "px";
      //     totalWidth = totalWidth +  slider.offsetWidth/noslide;
      //   });
        
        
        
      //   container1.style.width = totalWidth + 'px';
        
      // }
      
      // function animate() {
       
      //   container1.style.transform = `translateX(-${position}px)`;
      //   position = (slider.offsetWidth/noslide) * move ;
        
      //   requestAnimationFrame(animate);
      // }
      
      // function slideFoward() {
        
      //   if (current < slides.length-1) {
      //     move++
      //     current++;
        
      //     requestAnimationFrame(animate);
      //   }
      // }
      
      // function slideBack() {
       
      //   if (current > noslide-1) {
      //     current = current - 1;
      //     move--
        
          
      //     requestAnimationFrame(animate);
      //   }
      // }
      
      // // LOAD EVENT
      // var myVar = setInterval(() => {
      //   if(nextButton){
      //     myStopFunction()
      //     window.addEventListener("load", slideWidth);
      
      //   // RESIZE EVENT
      //   window.addEventListener("resize", slideWidth);
        
      //   // BUTTON EVENTS
      //   nextButton.addEventListener("click", event => {
      //     clearInterval(autoSlide);
      //     slideFoward();
      //   });
        
      //   prevButton.addEventListener("click", event => {
      //     clearInterval(autoSlide);
      //     slideBack();
      //   });
        
      //   // TOUCH EVENTS
      //   container1.addEventListener("pointerdown", event => {
      //     event.preventDefault();
          
      //     clearInterval(autoSlide);
      //     startX = event.pageX;
      //   });
        
        
      //   container1.addEventListener("pointerup", event => {
      //     event.preventDefault();
          
      //     endX = event.pageX;
      //     if (startX - endX > 40) {
      //       slideFoward();
      //     }
      //     if (startX - endX < -40) {
      //       slideBack();
      //     }
      //   });
        
      //     } else{
      //       slider = document.querySelector(".slider.custom-");
           
          
      //       slides = document.querySelectorAll(".slider.custom- .slide");
      //       container1 = document.querySelector(".slider.custom- .slides");
            
      //       prevButton = document.querySelector(".slider.custom- .prev");
      //       nextButton = document.querySelector(".slider.custom- .next");
           
      //     }
      //   }, 1000);

        // function myStopFunction() {
         
        //   clearInterval(myVar);
        // }
    
    };

   
    /**
     * Create object containing information about the current state
     * of this content.
     *
     * @return {Object}
     */
    self.getCurrentState = function () {
      // Get previous state object or create new state object
      var state = (data.previousState ? data.previousState : {});
      if (!state.instances) {
        state.instances = [];
      }

      // Grab the current state for each instance
      for (var i = 0; i < instances.length; i++) {
        var instance = instances[i];

        if (instance.getCurrentState instanceof Function ||
            typeof instance.getCurrentState === 'function') {

          state.instances[i] = instance.getCurrentState();
        }
      }

      // Done
      return state;
    };

    /**
     * Get xAPI data.
     * Contract used by report rendering engine.
     *
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
     */
    self.getXAPIData = function () {
      var xAPIEvent = self.createXAPIEventTemplate('answered');
      addQuestionToXAPI(xAPIEvent);
      xAPIEvent.setScoredResult(self.getScore(),
        self.getMaxScore(),
        self,
        true,
        self.getScore() === self.getMaxScore()
      );
      return {
        statement: xAPIEvent.data.statement,
        children: getXAPIDataFromChildren(instances)
      };
    };

    /**
     * Get score for all children
     * Contract used for getting the complete score of task.
     *
     * @return {number} Score for questions
     */
    self.getScore = function () {
      return instances.reduce(function (prev, instance) {
        return prev + (instance.getScore ? instance.getScore() : 0);
      }, 0);
    };

    /**
     * Get maximum score possible for all children instances
     * Contract.
     *
     * @return {number} Maximum score for questions
     */
    self.getMaxScore = function () {
      return instances.reduce(function (prev, instance) {
        return prev + (instance.getMaxScore ? instance.getMaxScore() : 0);
      }, 0);
    };

    /**
     * Get answer given
     * Contract.
     *
     * @return {boolean} True, if all answers have been given.
     */
    self.getAnswerGiven = function () {
      return instances.reduce(function (prev, instance) {
        return prev && (instance.getAnswerGiven ? instance.getAnswerGiven() : prev);
      }, true);
    };

    /**
     * Show solutions.
     * Contract.
     */
    self.showSolutions = function () {
      instances.forEach(function (instance) {
        if (instance.toggleReadSpeaker) {
          instance.toggleReadSpeaker(true);
        }
        if (instance.showSolutions) {
          instance.showSolutions();
        }
        if (instance.toggleReadSpeaker) {
          instance.toggleReadSpeaker(false);
        }
      });
    };

    /**
     * Reset task.
     * Contract.
     */
    self.resetTask = function () {
      instances.forEach(function (instance) {
        if (instance.resetTask) {
          instance.resetTask();
        }
      });
    };

    /**
     * Get instances for all children
     * TODO: This is not a good interface, we should provide handling needed
     * handling of the tasks instead of repeating them for each parent...
     *
     * @return {Object[]} array of instances
     */
    self.getInstances = function () {
      return instances;
    };

    /**
     * Get title, e.g. for xAPI when Column is subcontent.
     *
     * @return {string} Title.
     */
    self.getTitle = function () {
      return H5P.createTitle((self.contentData && self.contentData.metadata && self.contentData.metadata.title) ? self.contentData.metadata.title : 'Column');
    };

    /**
     * Add the question itself to the definition part of an xAPIEvent
     */
    var addQuestionToXAPI = function (xAPIEvent) {
      var definition = xAPIEvent.getVerifiedStatementValue(['object', 'definition']);
      H5P.jQuery.extend(definition, getxAPIDefinition());
    };

    /**
     * Generate xAPI object definition used in xAPI statements.
     * @return {Object}
     */
    var getxAPIDefinition = function () {
      var definition = {};

      definition.interactionType = 'compound';
      definition.type = 'http://adlnet.gov/expapi/activities/cmi.interaction';
      definition.description = {
        'en-US': ''
      };

      return definition;
    };

    /**
     * Get xAPI data from sub content types
     *
     * @param {Array} of H5P instances
     * @returns {Array} of xAPI data objects used to build a report
     */
    var getXAPIDataFromChildren = function (children) {
      return children.map(function (child) {
        if (typeof child.getXAPIData == 'function') {
          return child.getXAPIData();
        }
      }).filter(function (data) {
        return !!data;
      });
    };

    // Resize children to fit inside parent
    bubbleDown(self, 'resize', instances);

    if (wrapper === undefined) {
      // Create wrapper and content
      createHTML();
    }

    self.setActivityStarted();
  }

  Column.prototype = Object.create(EventDispatcher.prototype);
  Column.prototype.constructor = Column;

  /**
   * Makes it easy to bubble events from parent to children
   *
   * @private
   * @param {Object} origin Origin of the Event
   * @param {string} eventName Name of the Event
   * @param {Array} targets Targets to trigger event on
   */
  function bubbleDown(origin, eventName, targets) {
    origin.on(eventName, function (event) {
      if (origin.bubblingUpwards) {
        return; // Prevent send event back down.
      }

      for (var i = 0; i < targets.length; i++) {
        targets[i].trigger(eventName, event);
      }
    });
  }

  /**
   * Makes it easy to bubble events from child to parent
   *
   * @private
   * @param {Object} origin Origin of the Event
   * @param {string} eventName Name of the Event
   * @param {Object} target Target to trigger event on
   */
  function bubbleUp(origin, eventName, target) {
    origin.on(eventName, function (event) {
      // Prevent target from sending event back down
      target.bubblingUpwards = true;

      // Trigger event
      target.trigger(eventName, event);

      // Reset
      target.bubblingUpwards = false;
    });
  }

  /**
   * Definition of which content types are tasks
   */
  var isTasks = [
    'H5P.ImageHotspotQuestion',
    'H5P.Blanks',
    'H5P.Essay',
    'H5P.SingleChoiceSet',
    'H5P.MultiChoice',
    'H5P.TrueFalse',
    'H5P.DragQuestion',
    'H5P.Summary',
    'H5P.DragText',
    'H5P.MarkTheWords',
    'H5P.MemoryGame',
    'H5P.QuestionSet',
    'H5P.InteractiveVideo',
    'H5P.CoursePresentation',
    'H5P.DocumentationTool'
  ];

  /**
   * Check if the given content instance is a task (will give a score)
   *
   * @param {Object} instance
   * @return {boolean}
   */
  Column.isTask = function (instance) {
    if (instance.isTask !== undefined) {
      return instance.isTask; // Content will determine self if it's a task
    }

    // Go through the valid task names
    for (var i = 0; i < isTasks.length; i++) {
      // Check against library info. (instanceof is broken in H5P.newRunnable)
      if (instance.libraryInfo.machineName === isTasks[i]) {
        return true;
      }
    }

    return false;
  }

  /**
   * Definition of which content type have margins
   */
  var hasMargins = [
    'H5P.AdvancedText',
    'H5P.AudioRecorder',
    'H5P.Essay',
    'H5P.Link',
    'H5P.Accordion',
    'H5P.Table',
    'H5P.GuessTheAnswer',
    'H5P.Blanks',
    'H5P.MultiChoice',
    'H5P.TrueFalse',
    'H5P.DragQuestion',
    'H5P.Summary',
    'H5P.DragText',
    'H5P.MarkTheWords',
    'H5P.ImageHotspotQuestion',
    'H5P.MemoryGame',
    'H5P.Dialogcards',
    'H5P.QuestionSet',
    'H5P.DocumentationTool'
  ];

  /**
   * Definition of which content type have top margins
   */
  var hasTopMargins = [
    'H5P.SingleChoiceSet'
  ];

  /**
   * Definition of which content type have bottom margins
   */
  var hasBottomMargins = [
    'H5P.CoursePresentation',
    'H5P.Dialogcards',
    'H5P.GuessTheAnswer',
    'H5P.ImageSlider'
  ];

  /**
   * Remove custom fullscreen buttons from sub content.
   * (A bit of a hack, there should have been some sort of override…)
   *
   * @param {Object} instance
   */
  function disableFullscreen(instance) {
    switch (instance.libraryInfo.machineName) {
      case 'H5P.CoursePresentation':
        if (instance.$fullScreenButton) {
          instance.$fullScreenButton.remove();
        }
        break;

      case 'H5P.InteractiveVideo':
        instance.on('controls', function () {
          if (instance.controls.$fullscreen) {
            instance.controls.$fullscreen.remove();
          }
        });
        break;
    }
  }

  return Column;
})(H5P.EventDispatcher);
