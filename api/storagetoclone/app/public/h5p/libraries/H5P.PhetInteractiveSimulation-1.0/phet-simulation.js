var H5P = H5P || {};

H5P.PhetInteractiveSimulation = (function(EventDispatcher, $) {
    
    function PhetInteractiveSimulation(options, id, extras) {
        var self = this;
        this.id = id;
        this.options = options;
        this.title = extras && extras.hasOwnProperty("metadata") && extras.metadata.hasOwnProperty("title") ? extras.metadata.title : 'PhET Interactive Simulation';
        // Initialize event inheritance
        EventDispatcher.call(self);
        self.on('resize', function () {
            if (this.container) {
                let width = H5P.jQuery(this.container).width();
                let height = width * (9/16);
                let phetiframe = $('.phetiframe', this.container);
                $(phetiframe).width(width);
                $(phetiframe).height(height);
            }
        });
    }

    PhetInteractiveSimulation.prototype.attach = function($container) {
        this.container = $container;
        if (!Object.keys(this.options).find(field => field === 'phetSimulationFile' || field === 'phetSimulationUrl')) {
            $container.append('<h3><strong>No simulation configured.</strong></h3>');
        } else if (this.options.phetSimulationSource === 'url' && this.options.phetSimulationUrl) {
            $container.append('<iframe class="phetiframe" src="' + this.options.phetSimulationUrl + '"></iframe>');
            this.trigger('resize');
        } else if (this.options.phetSimulationSource === 'file' && this.options.phetSimulationFile) {            
            let hasAbsoluteUrl = H5PIntegration.url.split('/').find(x => x === 'https:' || x === 'http:');
            var url = (hasAbsoluteUrl ? H5PIntegration.url : H5PIntegration.baseUrl + '/' + H5PIntegration.url) + "/content/" + this.id + "/" + this.options.phetSimulationFile.path;
            $container.append('<iframe class="phetiframe" src="' + url + '"></iframe>');
            this.trigger('resize');
        }

        // trigger consumed
        this.triggerConsumed();
    };

    /**
     * Trigger the 'consumed' xAPI event when this commences
     *
     */
    PhetInteractiveSimulation.prototype.triggerConsumed = function () {
        var xAPIEvent = this.createXAPIEventTemplate({
            id: 'http://activitystrea.ms/schema/1.0/consume',
            display: {
                'en-US': 'consumed'
            }
        }, {
            result: {
                completion: true
            }
        });

        Object.assign(xAPIEvent.data.statement.object.definition, {
            name: {
                'en-US': this.title
            }
        });

        this.trigger(xAPIEvent);
    };

    return PhetInteractiveSimulation;

})(H5P.EventDispatcher, H5P.jQuery);
