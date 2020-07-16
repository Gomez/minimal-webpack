import 'plone';

import './default.less';
import './theme.less';

import jQuery from 'jquery';
import registry from 'pat-registry';

if (jQuery('body.userrole-anonymous').length === 0) {
    import(/* webpackChunkName: "logged-in" */ './logged-in').then(
    () => jQuery(($) => setTimeout(() => registry.scan(document.body)))
  );
}
if (jQuery('body.userrole-anonymous').length > 0) {
  jQuery(($) => setTimeout(() => registry.scan(document.body)));
}

if (
    jQuery(
        "body.template-facetednavigation_view,body.template-configure_faceted-html"
    ).length
) {
    (function() {
        "use strict";
        let faceted_evt = null,
            faceted_path = null;
        window.Faceted = {
            Load: function(evt, path) {
                faceted_evt = evt;
                faceted_path = path;
            }
        };
        Promise.all([
            import(
                /* webpackChunkName: "facetednavigation" */ "./facetednavigation"
                )
        ]).then(args => {
            jQuery(document).ready(function(evt) {
                window.Faceted.Load(faceted_evt, faceted_path);
            });
        });
    })();
}
if (jQuery("body.template-configure_faceted-html").length) {
    (function () {
        "use strict";
        let faceted_evt = null,
            faceted_path = null;
        window.FacetedEdit = {
            Load: function (evt, path) {
                faceted_evt = evt;
                faceted_path = path;
            }
        };
        Promise.all([
            import(
                /* webpackChunkName: "facetednavigation-edit" */ "./facetednavigation-edit"
                )
        ]).then(args => {
            window.FacetedEdit.Load(faceted_evt, faceted_path);
        });
    })();
}

/* Expose jQuery when needed */
window.jQuery = jQuery;
window.$ = jQuery;

import requirejs from 'exports-loader?requirejs!script-loader!requirejs/require.js';
requirejs.config({});  // the real configuration is loaded in webpack.xml
