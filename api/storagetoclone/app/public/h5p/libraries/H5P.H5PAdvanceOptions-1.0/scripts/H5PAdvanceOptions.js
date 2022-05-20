var H5P = H5P || {};

H5P.H5PAdvanceOptions = (function ($) {
    /**
     * Constructor function.
     */
    function C(options, id) {
        // Extend defaults with provided options        
        this.options = $.extend(true, {}, {
            title: 'Default title',
            documentcontent: 'params',
            
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
        $container.addClass("field-items");

        // $container.append('<h1 class="document-title" style="text-align: center;">' + this.options.title + '</h1>');
        $container.append('<div class="field-item even">' + decodeEntities(this.options.documentcontent) + '</div>');

        setTimeout(iframesCheck, 3000);
    };

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
            // console.log(ele.contentWindow); // if iframe is loaded this will through exception due to cross-origin policy
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
        // console.log(encodedString)
        textArea.innerHTML = encodedString;
        return textArea.value;
    }

    return C;
})(H5P.jQuery);
