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
        config.allowedContent = true; 
        config.fontSize_sizes = '8px/8px;8pt/8pt;9px/9px;9pt/9pt;10px/10px;10pt/10pt;11px/11px;11pt/11pt;12px/12px;12pt/12pt;14px/14px;14pt/14pt;16px/16px;16pt/16pt;18px/18px;18pt/18pt;20px/20px;20pt/20pt;22px/22px/22pt/22pt;24px/24px;24pt/24pt;26px/26px;26pt/26pt;28px/28px;28pt/28pt;36px/36px;36pt/36pt;48px/48px;48pt/48pt;72px/72px;72pt/72pt;';
        // console.log(H5PEditor.HtmlAddons.additional);
        config.removePlugins = 'cloudservices,easyimage,googledocs';
        // config.removeButtons = '';
        config.filebrowserImageUploadUrl = CKEDITOR.basePath + 'plugins/uploadImage/uploadImg.php?type=image';
        config.filebrowserUploadMethod = 'form';
        config.filebrowserUploadUrl = CKEDITOR.basePath + 'plugins/insertfiles/documentUpload.php?type=files';
        config.filebrowserUploadMethod = 'form';
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
        config.spoilerLib = CKEDITOR.basePath + 'plugins/spoiler/plugin.js';
        // Add plugin to config
        config.extraPlugins = (config.extraPlugins ? ',' : '') + 
        'dialog,pastefromgdocs,mathjax,exportpdf,basicstyles,spacingsliders,find,'+
        'liststyle,footnotes,bidi,specialchar,div,sourcedialog,indent,indentblock,copyformatting,'+
        'showblocks,clipboard,selectall,forms,smiley,tabletoolstoolbar,timestamp,'+
        'autolink,youtube,brclear,leomodel,btgrid,zoom,imageresizerowandcolumn,tablesorter,ckeditor-gwf-plugin,'+
        'notification,inserthtmlfile,imageuploader,texttransform,a11yheading,a11yfirsthelp,markdown,'+
        'tableselection,replaceTagNameByBsquochoai,textwatcher,autocomplete,textmatch,autotag,insertfiles,'+
        'font,flash,uploadfile';

        // Looking inside plugin.js I see that InsertFiles should go into
        // the 'insert' toolbar group. So let's create it and add the button
        config.toolbar.unshift({
            name: 'tools',
            items: ['Source']
        });
        config.toolbar.splice(1,0,{
            name: 'insert',
            items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord']
        });
        config.toolbar.splice(2,0,{
            name: 'insert',
            items: ['Undo', 'Redo']
        });
        config.toolbar.splice(8,0,
            {
                name: 'tools',
                items: [
                    'tabledelete', 'tableproperties', '-', 
                    'tablerowinsertbefore', 'tablerowinsertafter',
                    'tablerowdelete', '-', 'tablecolumninsertbefore',
                    'tablecolumninsertafter', 'tablecolumndelete',
                    '-', 'tablecellinsertbefore', 'tablecellinsertafter',
                    'tablecelldelete', 'tablecellproperties', '-',
                    'tablecellsmerge', 'tablecellmergeright',
                    'tablecellmergedown', 'tablecellsplithorizontal',
                    'tablecellsplitvertical'
                ]
            },
            {
                name: 'tools',
                items: ['Subscript', 'Superscript', 'BidiLtr', 'BidiRtl', 'brclear']
            },
            {
                name: 'insert',
                items: ['Underline', 'spacingsliders', 'Footnotes', '-', 'SpecialChar']
            },
            {
                name: 'insert',
                items: ['Styles']
            }
        );

        config.toolbar.push(
            {
                name: 'tools',
                items: ['ShowBlocks', 'SelectAll', 'Scayt']
            },
            {
                name: 'tools',
                items: ['CreateDiv', 'Outdent', 'Indent', '-', 'CopyFormatting']
            },
            {
                name: 'tools',
                items: ['Youtube', '-', 'btgrid', 'Zoom', 'Heading']
            },
            { 
                name: 'texttransform', 
                items: [ 'TransformTextToUppercase', 'TransformTextToLowercase', 'TransformTextCapitalize', 'TransformTextSwitcher' ] 
            },
            {
                name: 'tools',
                items: ['Timestamp', 'leomodel', '-', 'inserthtmlfile', 'replaceTagName', 'Insertfiles']
            },
            {
                name: 'markdown',
                items: ['Markdown', 'Flash']
            },
            {
                name: 'tools',
                items: ['A11yFirstHelp']
            }         
        );
        config.toolbar.splice(7,0,
            {
                name: 'tools',
                items: ['Form', 'TextField', 'Textarea', 'Checkbox', 'Radio', 'Select', 'Button', 'ImageButton', 'HiddenField']
            },
            {
                name: 'insert',
                items: ['Mathjax', 'ExportPdf']
            },
            {
                name: 'tools',
                items: ['Find', 'Smiley', 'Maximize', 'Anchor']
            }
        );
        // Add our special tags
        config.font_names = 'GoogleWebFonts';        
        tags.push('additional');
    };
});
