var H5P = H5P || {};

H5P.DocumentsUpload = (function ($) {
    /**
     * Constructor function.
     */
    function C(options, id) {
        // Extend defaults with provided options
        this.options = $.extend(true, {}, {
            title: 'Default title',
            documentcontent: 'Documents'
        }, options);
        // Keep provided id.
        this.id = id;
    }

    /**
     * Attach function called by H5P framework to insert H5P content into
     * page
     *
     * @param {jQuery} $container
     */
    C.prototype.attach = function ($container) {
        //this.sendStatement('consume');
        //this.sendStatement('complete');
        $container.addClass("h5p-document");

        $container.append('<h1 class="document-title" style="text-align: center;">' + this.options.title + '</h1>');
        $container.append('<div class="document-content" style="text-align: center;">' + decodeEntities(this.options.documentcontent) + '</div>');

        setTimeout(iframesCheck, 3000);
        setTimeout(this.sendStatement('consume'), 3000);
        convertMathJaxEq();
    };


    C.prototype.sendStatement = function (verb) {
        console.log('sendStatement');
        var xAPIEvent = this.createXAPIEventTemplate({
            id: 'http://activitystrea.ms/schema/1.0/'+verb,
            display: {
              'en-US': verb+'d'
            }
          }, {
            result: {
              completion: true
            }
          });
          this.trigger(xAPIEvent);
          console.log(xAPIEvent);
    }
    /**
     * Loop through each IFrame
     */
    function iframesCheck() {
        var iframes = $('.files iframe');
        iframes.each(function (index, ele) {
            // console.log(ele);
            checkIframeLoaded(ele);
        });
    }

    /**
     * Check if iframe re-loaded skip, otherwise re-load it
     * @param ele
     */
    function checkIframeLoaded(ele) {
        var count = 0;
        var intervalID = setInterval(function () {
            if (!isIframeLoaded(ele) && count < 3) {
                var element = $(ele);
                var iframe_url = element.attr("src")
                element.attr("src", iframe_url);
                count++;
                console.log("IFrame ReLoaded...");
                return;
            }
            clearInterval(intervalID);
        }, 1500);
    }

    /**
     * Quick hack to verify the content of IFrame is Loaded Or NOt
     * Function for checking specific iframe content is loaded or not
     * @param ele
     * @returns {boolean}
     */
    function isIframeLoaded(ele) {
        try {
            console.log(ele.contentWindow); // if iframe is loaded this will through exception due to cross-origin policy
            return false; // if here means exception is not thrown so content is not loaded in iframe
        } catch (err) {
            return true;
        }
    }

    /**
     * Decode string HTML Entities
     * @param encodedString
     * @returns {string}
     */
    function decodeEntities(encodedString) {
        var textArea = document.createElement('textarea');
        textArea.innerHTML = encodedString;
        return textArea.value;
    }

    /**
     * Convert latex equations to visual form
     */
    function convertMathJaxEq() {
        const element = document.createElement('script');
        element.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML';
        element.async = false;
        element.onload = () => {
            const timerMath = setInterval(() => {
                try {
                    window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
                    clearTimeout(timerMath);
                } catch (e) {
                    console.log(e);
                }
            }, 100);
        };
        document.body.appendChild(element);
    }

    return C;
})(H5P.jQuery);
