var H5P = H5P || {};

H5P.jQuery(document).ready(function () {
    if (!window.CKEDITOR) return; // CK not available
    if (CKEDITOR.version < "4.14.1") return; // CK versions is not latest

    // Register plugin with CK
    // Tell H5P about the plugin
    H5PEditor.HtmlAddons = H5PEditor.HtmlAddons || {};

    // Register plugin with CK
    H5PEditor.HtmlAddons.additional = H5PEditor.HtmlAddons.additional || {};

    // custom callback
    H5PEditor.HtmlAddons.additional.additional = function (config, tags) {
        config.removePlugins = 'cloudservices,easyimage,googledocs';
        config.removeButtons = 'Image,Table,Link,Unlink';

        // Print debug to browser console (Ctrl+Shift+J in Chrome)
        console.log('Adding Extra Plugins for Documents Curriki...');

        // config.filebrowserUploadMethod = 'form';
        // URL of a upload script
        config.filebrowserInsertfilesUploadUrl = CKEDITOR.basePath + 'plugins/insertfiles/documentUpload.php?type=files';
        // at this address you can get a list of documents on the server
        // URL where you can get a list of uploaded documents
        config.filebrowserInsertfilesBrowseUrl = CKEDITOR.basePath + 'plugins/insertfiles/documentsList.php?type=files';
        // URL of a upload scriptgi
        // config.filebrowserUploadUrl = CKEDITOR.basePath + 'plugins/imageuploader/imgupload.php';
        // config.filebrowserImageUploadUrl = CKEDITOR.basePath + 'plugins/imageuploader/imgupload.php';
        // at this address you can get a list of documents on the server
        // URL where you can get a list of uploaded documents
        // config.filebrowserBrowseUrl = CKEDITOR.basePath + 'plugins/imageuploader/imgbrowser.php';
        // config.filebrowserImageBrowseUrl = CKEDITOR.basePath + 'plugins/imageuploader/imgbrowser.php';

        // cloud services
        // config.cloudServices_tokenUrl = 'https://example.com/cs-token-endpoint';
        // config.cloudServices_uploadUrl = 'https://your-organization-id.cke-cs.com/easyimage/upload/';

        // math jax plugin configuration
        config.mathJaxClass = 'math-tex';
        config.mathJaxLib = '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML';
        // Remove Formating Plugin
        config.removeFormatLib = CKEDITOR.basePath + 'plugins/removeformat/plugin.js';
        // Export to Pdf Plugin
        config.exportToPdfLib = CKEDITOR.basePath + 'plugins/exportpdf/plugin.js';
        // Basic Styles Plugin
        config.basicStyleLib = CKEDITOR.basePath + 'plugins/basicstyles/plugin.js';
        // Spacing slider Plugin
        config.spacingSliderLib = CKEDITOR.basePath + 'plugins/spacingsliders/plugin.js';
        // Find Plugin
        config.findLib = CKEDITOR.basePath + 'plugins/find/plugin.js';
        // List style Plugin
        config.listStyleLib = CKEDITOR.basePath + 'plugins/liststyle/plugin.js';
        // Footnote Plugin 
        config.FootNoteLib = CKEDITOR.basePath + 'plugins/footnotes/plugin.js';
        // Bidi Text Direction Plugin
        config.bidiLib = CKEDITOR.basePath + 'plugins/bidi/plugin.js';
        // Special Character Plugin
        config.specialCharLib = CKEDITOR.basePath + 'plugins/specialchar/plugin.js';
        // Div Container Plugin
        config.divContainerLib = CKEDITOR.basePath + 'plugins/div/plugin.js';
        // Source Dialog Plugini
        config.sourcedialogLib = CKEDITOR.basePath + 'plugins/sourcedialog/plugin.js';
        // Increase/decrease Indent Plugin
        config.indentLib = CKEDITOR.basePath + 'plugins/indent/plugin.js';
        // Indent Block Dependency for Indent Plugin
        config.indentBlockLib = CKEDITOR.basePath + 'plugins/indentblock/plugin.js';
        // Copy Formatting Plugin
        config.copyFormattingLib = CKEDITOR.basePath + 'plugins/copyformatting/plugin.js';
        // Show Block Plugin
        config.showBlockLib = CKEDITOR.basePath + 'plugins/showblocks/plugin.js';
        // ClipBoard Plugin
        config.clipboardLib = CKEDITOR.basePath + 'plugins/clipboard/plugin.js';
        // Templates Plugin
        config.templatesLib = CKEDITOR.basePath + 'plugins/templates/plugin.js';
        // Select All Plugin
        config.selectAllLib = CKEDITOR.basePath + 'plugins/selectall/plugin.js';
        // Forms Plugin 
        // config.formLib = CKEDITOR.basePath + 'plugins/forms/plugin.js';
        // Add plugin to config
        config.extraPlugins = (config.extraPlugins ? ',' : '') + 'insertfiles,pastefromgdocs,mathjax';

        // Looking inside plugin.js I see that InsertFiles should go into
        // the 'insert' toolbar group. So let's create it and add the button
        config.toolbar.push({
            name: 'insert',
            items: ['Insertfiles']
        });

        config.toolbar.push({
            name: 'insert',
            items: ['Mathjax']
        });

        // Add our special tags
        tags.push('additional');
    };
});
