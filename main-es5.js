function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/historial-actualizaciones/historial-actualizaciones.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/historial-actualizaciones/historial-actualizaciones.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHistorialActualizacionesHistorialActualizacionesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<style>\n    .overlay {\n        background-position: 50%;\n        background-repeat: no-repeat;\n        width: 100vw;\n        height: 100vh;\n        left: 0px;\n        top: 0px;\n        position: fixed;\n        background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='145.652' height='145.599' viewBox='0 0 145.652 145.599'><g id='Grupo_1' data-name='Grupo 1' transform='translate(-206.526 -147.438)'><path id='Trazado_1' data-name='Trazado 1' d='M254.273,213.6a20.691,20.691,0,1,0,8.982-27.857,20.684,20.684,0,0,0-8.982,27.857' fill='%23f16112'/><path id='Trazado_2' data-name='Trazado 2' d='M345.454,189.671A72.822,72.822,0,0,0,281.3,147.438c-3.864.031-13.4.912-13.549.943a2.113,2.113,0,0,0-1.5.717,2.127,2.127,0,0,0,1.582,3.557c.173.025,8.489-.353,8.489-.353l.055,1.536-13.912.779a2.227,2.227,0,0,0-1.641.771,2.116,2.116,0,0,0,.164,3.011,2.5,2.5,0,0,0,1.622.54c.235.024,13.621-.609,13.621-.609l.065,1.51-16.7.961a2.471,2.471,0,0,0-1.818.744,2.146,2.146,0,0,0,.152,3.019,2.241,2.241,0,0,0,1.554.544c.6-.016,16.97-.851,16.97-.851l.1,1.589-15.039.782a2.094,2.094,0,0,0-1.493.707,2.122,2.122,0,0,0-.475,1.993,2.244,2.244,0,0,0,2.557,1.629l16.588-.93-.017,1.374-6.454.435c-2.94.434-3.7,2.06-3.847,4.65a45.4,45.4,0,0,1,13.883-1.016c.588.045,1.131.08,1.649.1A44.869,44.869,0,1,1,243.525,193.3c.309-.373.64-.789.977-1.228a45.654,45.654,0,0,1,10.035-9.657c-2.014-1.624-3.729-2.14-6.025-.229l-4.637,4.5-.988-.959,11.737-11.676a2.237,2.237,0,0,0,.5-2.979,2.14,2.14,0,0,0-1.8-.984,2.062,2.062,0,0,0-1.517.639L241.152,181.4l-1.112-1.152s11.559-11.593,11.968-12.04a2.135,2.135,0,0,0-1.491-3.659,2.469,2.469,0,0,0-1.769.856l-11.876,11.778-1.079-1.037s9.423-9.535,9.549-9.743a2.509,2.509,0,0,0,.7-1.562,2.145,2.145,0,0,0-2.142-2.14,2.3,2.3,0,0,0-1.671.71l-9.89,9.834-1.1-1.073s5.844-5.934,5.941-6.088a2.056,2.056,0,0,0,.534-1.4,2.14,2.14,0,0,0-2.126-2.147,2.088,2.088,0,0,0-1.53.645c-.141.083-8.334,7.756-10.435,10.231-.275.327-.539.628-.778.906l-.007-.008a72.809,72.809,0,1,0,122.616,15.357' fill='%230064b3'/></g></svg>\");\n        background-color: rgba(255, 255, 255, .1);\n        z-index: 100;\n        transform: scale(1);\n        animation: pulse 1400ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);\n        opacity: 1;\n    }\n\n    @keyframes pulse {\n        50% {\n            transform: scale(1.1);\n            opacity: .9;\n        }\n    }\n\n    .fade-enter-active {\n        transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n    }\n\n    .fade-leave-active {\n        transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n        will-change: transform, opacity;\n        transform: scale(1);\n    }\n\n    .fade-enter {\n        opacity: 0;\n        transform: scale(0);\n    }\n\n    .fade-leave-to {\n        transform: scale(0);\n        opacity: 0;\n    }\n\n\n    .lightfade-enter-active {\n        transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n    }\n\n    .lightfade-leave-active {\n        transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n        will-change: transform, opacity;\n        transform: scale(1);\n    }\n\n    .lightfade-enter {\n        opacity: 0;\n        transform: scale(0.8);\n    }\n\n    .lightfade-leave-to {\n        transform: scale(0.8);\n        opacity: 0;\n    }\n\n    .show-enter-active,\n    .show-leave-active {\n        transition: opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    }\n\n    .show-enter,\n    .show-leave-to\n\n    /* .fade-leave-active below version 2.1.8 */\n        {\n        opacity: 0;\n    }\n\n\n    .slide-fade-enter-active {\n        transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n    }\n\n    .slide-fade-leave-active {\n        transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n    }\n\n    .slide-fade-enter {\n        transform: scale(.99);\n        opacity: 0;\n        will-change: transform, opacity;\n        backface-visibility: hidden;\n    }\n\n    .slide-fade-leave-to {\n        transform: scale(.99);\n        opacity: 0;\n        will-change: transform, opacity;\n        backface-visibility: hidden;\n    }\n\n    .fade-enter-active {\n        opacity: 1;\n        transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n    }\n\n    .fade-leave-active {\n        opacity: 1;\n        transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n    }\n\n    .fade-enter {\n        opacity: 0;\n        will-change: opacity;\n        backface-visibility: hidden;\n    }\n\n    .fade-leave-to {\n        opacity: 0;\n        will-change: opacity;\n        backface-visibility: hidden;\n    }\n\n\n    .gfade-enter-active,\n    .gfade-leave-active {\n        transition: all .2s;\n    }\n\n    .gfade-enter,\n    .gfade-leave-to {\n        opacity: 0;\n    }\n\n    .gfade-enter-active {\n        transition-delay: .2s;\n    }\n\n    .list-item {\n        display: inline-block;\n        margin-right: 10px;\n    }\n\n    .list-enter-active,\n    .list-leave-active {\n        transition: all 1s;\n    }\n\n    .list-enter,\n    .list-leave-to\n\n    /* .list-leave-active below version 2.1.8 */\n        {\n        opacity: 0;\n        transform: translateY(30px);\n    }\n\n    .buttonSelectEmpresa svg path {\n        fill: #BCBCBD !important;\n    }\n\n    .loginnoshow {\n        opacity: 1 !important;\n    }\n\n</style>\n\n<script>\n    window.dataLayer = window.dataLayer || [];\n    function gtag() { dataLayer.push(arguments); }\n    gtag('js', new Date());\n\n    gtag('config', 'UA-143162283-1');\n</script>\n\n<style type=\"text/css\">\n    .toasted {\n        padding: 0 20px\n    }\n\n    .toasted.rounded {\n        border-radius: 24px\n    }\n\n    .toasted .primary,\n    .toasted.toasted-primary {\n        border-radius: 2px;\n        min-height: 38px;\n        line-height: 1.1em;\n        background-color: #353535;\n        padding: 6px 20px;\n        font-size: 15px;\n        font-weight: 300;\n        color: #fff;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)\n    }\n\n    .toasted .primary.success,\n    .toasted.toasted-primary.success {\n        background: #4caf50\n    }\n\n    .toasted .primary.error,\n    .toasted.toasted-primary.error {\n        background: #f44336\n    }\n\n    .toasted .primary.info,\n    .toasted.toasted-primary.info {\n        background: #3f51b5\n    }\n\n    .toasted .primary .action,\n    .toasted.toasted-primary .action {\n        color: #a1c2fa\n    }\n\n    .toasted.bubble {\n        border-radius: 30px;\n        min-height: 38px;\n        line-height: 1.1em;\n        background-color: #ff7043;\n        padding: 0 20px;\n        font-size: 15px;\n        font-weight: 300;\n        color: #fff;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)\n    }\n\n    .toasted.bubble.success {\n        background: #4caf50\n    }\n\n    .toasted.bubble.error {\n        background: #f44336\n    }\n\n    .toasted.bubble.info {\n        background: #3f51b5\n    }\n\n    .toasted.bubble .action {\n        color: #8e2b0c\n    }\n\n    .toasted.outline {\n        border-radius: 30px;\n        min-height: 38px;\n        line-height: 1.1em;\n        background-color: #fff;\n        border: 1px solid #676767;\n        padding: 0 20px;\n        font-size: 15px;\n        color: #676767;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);\n        font-weight: 700\n    }\n\n    .toasted.outline.success {\n        color: #4caf50;\n        border-color: #4caf50\n    }\n\n    .toasted.outline.error {\n        color: #f44336;\n        border-color: #f44336\n    }\n\n    .toasted.outline.info {\n        color: #3f51b5;\n        border-color: #3f51b5\n    }\n\n    .toasted.outline .action {\n        color: #607d8b\n    }\n\n    .toasted-container {\n        position: fixed;\n        z-index: 10000\n    }\n\n    .toasted-container,\n    .toasted-container.full-width {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: column;\n        flex-direction: column\n    }\n\n    .toasted-container.full-width {\n        max-width: 86%;\n        width: 100%\n    }\n\n    .toasted-container.full-width.fit-to-screen {\n        min-width: 100%\n    }\n\n    .toasted-container.full-width.fit-to-screen .toasted:first-child {\n        margin-top: 0\n    }\n\n    .toasted-container.full-width.fit-to-screen.top-right {\n        top: 0;\n        right: 0\n    }\n\n    .toasted-container.full-width.fit-to-screen.top-left {\n        top: 0;\n        left: 0\n    }\n\n    .toasted-container.full-width.fit-to-screen.top-center {\n        top: 0;\n        left: 0;\n        -webkit-transform: translateX(0);\n        transform: translateX(0)\n    }\n\n    .toasted-container.full-width.fit-to-screen.bottom-right {\n        right: 0;\n        bottom: 0\n    }\n\n    .toasted-container.full-width.fit-to-screen.bottom-left {\n        left: 0;\n        bottom: 0\n    }\n\n    .toasted-container.full-width.fit-to-screen.bottom-center {\n        left: 0;\n        bottom: 0;\n        -webkit-transform: translateX(0);\n        transform: translateX(0)\n    }\n\n    .toasted-container.top-right {\n        top: 10%;\n        right: 7%\n    }\n\n    .toasted-container.top-left {\n        top: 10%;\n        left: 7%\n    }\n\n    .toasted-container.top-center {\n        top: 10%;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n        transform: translateX(-50%)\n    }\n\n    .toasted-container.bottom-right {\n        right: 5%;\n        bottom: 7%\n    }\n\n    .toasted-container.bottom-left {\n        left: 5%;\n        bottom: 7%\n    }\n\n    .toasted-container.bottom-center {\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n        transform: translateX(-50%);\n        bottom: 7%\n    }\n\n    .toasted-container.bottom-left .toasted,\n    .toasted-container.top-left .toasted {\n        float: left\n    }\n\n    .toasted-container.bottom-right .toasted,\n    .toasted-container.top-right .toasted {\n        float: right\n    }\n\n    .toasted-container .toasted {\n        top: 35px;\n        width: auto;\n        clear: both;\n        margin-top: 10px;\n        position: relative;\n        max-width: 100%;\n        height: auto;\n        word-break: normal;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-align: center;\n        align-items: center;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n        box-sizing: inherit\n    }\n\n    .toasted-container .toasted .fa,\n    .toasted-container .toasted .fab,\n    .toasted-container .toasted .far,\n    .toasted-container .toasted .fas,\n    .toasted-container .toasted .material-icons,\n    .toasted-container .toasted .mdi {\n        margin-right: .5rem;\n        margin-left: -.4rem\n    }\n\n    .toasted-container .toasted .fa.after,\n    .toasted-container .toasted .fab.after,\n    .toasted-container .toasted .far.after,\n    .toasted-container .toasted .fas.after,\n    .toasted-container .toasted .material-icons.after,\n    .toasted-container .toasted .mdi.after {\n        margin-left: .5rem;\n        margin-right: -.4rem\n    }\n\n    .toasted-container .toasted .action {\n        text-decoration: none;\n        font-size: .8rem;\n        padding: 8px;\n        margin: 5px -7px 5px 7px;\n        border-radius: 3px;\n        text-transform: uppercase;\n        letter-spacing: .03em;\n        font-weight: 600;\n        cursor: pointer\n    }\n\n    .toasted-container .toasted .action.icon {\n        padding: 4px;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-align: center;\n        align-items: center;\n        -ms-flex-pack: center;\n        justify-content: center\n    }\n\n    .toasted-container .toasted .action.icon .fa,\n    .toasted-container .toasted .action.icon .material-icons,\n    .toasted-container .toasted .action.icon .mdi {\n        margin-right: 0;\n        margin-left: 4px\n    }\n\n    .toasted-container .toasted .action.icon:hover {\n        text-decoration: none\n    }\n\n    .toasted-container .toasted .action:hover {\n        text-decoration: underline\n    }\n\n    @media only screen and (max-width:600px) {\n        .toasted-container {\n            min-width: 100%\n        }\n\n        .toasted-container .toasted:first-child {\n            margin-top: 0\n        }\n\n        .toasted-container.top-right {\n            top: 0;\n            right: 0\n        }\n\n        .toasted-container.top-left {\n            top: 0;\n            left: 0\n        }\n\n        .toasted-container.top-center {\n            top: 0;\n            left: 0;\n            -webkit-transform: translateX(0);\n            transform: translateX(0)\n        }\n\n        .toasted-container.bottom-right {\n            right: 0;\n            bottom: 0\n        }\n\n        .toasted-container.bottom-left {\n            left: 0;\n            bottom: 0\n        }\n\n        .toasted-container.bottom-center {\n            left: 0;\n            bottom: 0;\n            -webkit-transform: translateX(0);\n            transform: translateX(0)\n        }\n\n        .toasted-container.bottom-center,\n        .toasted-container.top-center {\n            -ms-flex-align: stretch !important;\n            align-items: stretch !important\n        }\n\n        .toasted-container.bottom-left .toasted,\n        .toasted-container.bottom-right .toasted,\n        .toasted-container.top-left .toasted,\n        .toasted-container.top-right .toasted {\n            float: none\n        }\n\n        .toasted-container .toasted {\n            border-radius: 0\n        }\n    }\n</style>\n<style type=\"text/css\">\n    .resize-observer[data-v-b329ee4c] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: -1;\n        width: 100%;\n        height: 100%;\n        border: none;\n        background-color: transparent;\n        pointer-events: none;\n        display: block;\n        overflow: hidden;\n        opacity: 0\n    }\n\n    .resize-observer[data-v-b329ee4c] object {\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n        overflow: hidden;\n        pointer-events: none;\n        z-index: -1\n    }\n</style>\n<style type=\"text/css\">\n    .company-selector {\n        position: fixed;\n        top: 0px;\n        left: 0px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        width: 100vw;\n        height: 100vh;\n        z-index: 7000;\n        background: rgba(255, 255, 255, 0.8);\n    }\n\n    .company-selector .wrapper-company-selector {\n        width: 100vw;\n        height: 100vh;\n        max-width: 500px;\n        max-height: 200px;\n        border-radius: 8px;\n        -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n        background-color: #fff;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        padding: 0 20px;\n        -webkit-transition: -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n        transition: -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n        transition: transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n        transition: transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55), -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    }\n\n    .company-selector .wrapper-company-selector.expand {\n        max-height: 500px;\n    }\n\n    .company-selector .wrapper-company-selector h1 {\n        margin-top: 15px;\n        margin-bottom: 10px;\n    }\n\n    .company-selector .wrapper-company-selector h3 {\n        margin-top: 0px;\n    }\n\n    .company-selector .wrapper-company-selector .controls {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: end;\n        -ms-flex-pack: end;\n        justify-content: flex-end;\n        -webkit-box-align: end;\n        -ms-flex-align: end;\n        align-items: flex-end;\n    }\n\n    .company-selector .wrapper-company-selector .controls .alt_cp_class {\n        padding-bottom: 0px;\n        padding-left: 0px;\n        border: none;\n        max-height: 52px;\n    }\n\n    .company-selector .wrapper-company-selector .controls .alt_cp_class label {\n        font-size: 12px;\n        color: #707070;\n        font-family: 'Open Sans', sans-serif;\n        font-weight: 600;\n        padding-bottom: 4px;\n        display: inline-block;\n    }\n\n    .company-selector .wrapper-company-selector .controls .alt_cp_class input {\n        font-size: 16px;\n        font-weight: 700;\n        border: none;\n        width: 100%;\n        height: 30px;\n        border-bottom: 1px solid rgba(188, 188, 188, 0.45);\n        padding: 0 5px;\n    }\n\n    .company-selector .wrapper-company-selector .controls .alt_cp_class span {\n        font-family: 'Open Sans', sans-serif;\n        display: inline-block;\n        vertical-align: top;\n        padding: 2px 4px;\n        font-size: 12px;\n        font-style: italic;\n        min-height: 21px;\n        color: #F98A31;\n    }\n\n    .company-selector .wrapper-company-selector .companys-finded {\n        height: 280px;\n        overflow-y: auto;\n        margin-top: 20px;\n    }\n\n    .company-selector .wrapper-company-selector .companys-finded ul {\n        list-style: none;\n        padding: 0;\n    }\n\n    .company-selector .wrapper-company-selector .companys-finded ul li {\n        cursor: pointer;\n        font-family: 'Open Sans', sans-serif;\n        font-size: 11px;\n        -webkit-transition: -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n        transition: -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n        transition: transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n        transition: transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55), -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n        padding-bottom: 5px;\n    }\n\n    .company-selector .wrapper-company-selector .companys-finded ul li p {\n        font-size: 12px;\n        margin: 0;\n        width: 100%;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        padding: 0px 10px;\n        font-weight: 600;\n    }\n\n    .company-selector .wrapper-company-selector .companys-finded ul li span {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        padding: 0px 10px;\n    }\n\n    .company-selector .wrapper-company-selector .companys-finded ul li:hover {\n        background-color: #cfd8dc;\n    }\n\n    .company-selector .wrapper-company-selector .companys-finded ul li+li {\n        margin-top: 5px;\n    }\n</style>\n<style type=\"text/css\">\n    .fa-icon {\n        display: inline-block;\n        fill: currentColor;\n    }\n\n    .fa-flip-horizontal {\n        -webkit-transform: scale(-1, 1);\n        transform: scale(-1, 1);\n    }\n\n    .fa-flip-vertical {\n        -webkit-transform: scale(1, -1);\n        transform: scale(1, -1);\n    }\n\n    .fa-spin {\n        -webkit-animation: fa-spin 1s 0s infinite linear;\n        animation: fa-spin 1s 0s infinite linear;\n    }\n\n    .fa-inverse {\n        color: #fff;\n    }\n\n    .fa-pulse {\n        -webkit-animation: fa-spin 1s infinite steps(8);\n        animation: fa-spin 1s infinite steps(8);\n    }\n\n    @-webkit-keyframes fa-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n\n        100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes fa-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n\n        100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n</style>\n<style type=\"text/css\">\n    [v-cloak] .v-cloak--hidden {\n        display: none !important;\n    }\n\n    .search_bar {\n        margin-top: 20px;\n    }\n\n    .search {\n        position: relative;\n    }\n\n    .search .icon-enter {\n        position: absolute;\n        right: 50px;\n        top: 11px;\n        -webkit-animation: press 1s infinite;\n        animation: press 1s infinite;\n        opacity: 0;\n        -webkit-transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);\n        transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n\n    .search .icon-enter.press {\n        opacity: 1;\n        right: 60px;\n    }\n\n    .search fieldset {\n        width: 450px;\n        border: none;\n        height: auto;\n        padding: 5px;\n        padding-right: 0px;\n        margin-right: 22px;\n        position: relative;\n    }\n\n    .search fieldset input {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        font-family: 'Open Sans', sans-serif;\n        font-weight: 600;\n        font-size: 14px;\n        border: 1px solid #BCBCBD;\n        border-radius: 4px;\n        padding: 4px 8px;\n        width: 450px;\n    }\n\n    .search fieldset:after {\n        content: \"\";\n        display: block;\n        position: absolute;\n        background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='%23BCBCBD' d='M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z'/></svg>\");\n        background-size: cover;\n        background-repeat: no-repeat;\n        width: 20px;\n        height: 20px;\n        right: 6px;\n        top: 9px;\n    }\n\n    .list-history {\n        width: 100%;\n    }\n\n    .list-history header {\n        font-family: 'Open Sans', sans-serif;\n        font-weight: 500;\n        color: black;\n        font-size: 18px;\n        background-color: white;\n        position: -webkit-sticky;\n        position: sticky;\n        top: -15px;\n        padding: 10px 0;\n        display: grid;\n        grid-template-columns: 1.05fr 2.2fr 0.7fr 1fr 1fr;\n        grid-gap: 10px;\n    }\n\n    .list-history header span {\n        display: inline-block;\n        text-align: left;\n    }\n\n    .list-history ul {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n\n    .list-history ul li {\n        font-family: 'Open Sans', sans-serif;\n        font-weight: 400;\n        color: #11405C;\n        font-size: 16px;\n        display: grid;\n        grid-template-columns: 1.05fr 2.2fr 0.7fr 1fr 1fr;\n        grid-gap: 10px;\n        padding: 0 0 10px 0;\n        margin: 10px 0px 0px 0px;\n        border-bottom: 1px solid #11405C;\n    }\n\n    .list-history ul li span a {\n        text-decoration: none;\n        display: inline-block;\n        font-size: 16px;\n        line-height: 16px;\n        color: #11405C;\n    }\n\n    .list-history ul li span a svg {\n        margin-top: -2px;\n        margin-left: 4px;\n        display: inline-block;\n        vertical-align: middle;\n    }\n\n    .list-history p {\n        display: inline-block;\n        vertical-align: top;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        padding: 20px;\n        text-align: center;\n        width: 100%;\n    }\n</style>\n\n<body>\n    <div id=\"app\">\n        <!---->\n        <div class=\"general_message info\" style=\"display: none;\">\n            <div class=\"wrapper_general_message\">\n                <div class=\"icon\"><svg aria-hidden=\"true\" width=\"42\" height=\"48\" viewBox=\"0 0 448 512\" focusable=\"false\"\n                        class=\"fa-icon\" style=\"font-size: 3em;\">\n                        <path style=\"fill:currentColor\"\n                            d=\"M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm16 400c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352c8.822 0 16 7.178 16 16v352zm-228-80h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z\">\n                        </path>\n                    </svg></div>\n                <div class=\"general_message_text\">\n                    <h2>Información</h2>\n                    <p>.</p>\n                </div>\n                <div class=\"close_general_message\"><button class=\"no-minw ghost\"><svg aria-hidden=\"true\" width=\"12\"\n                            height=\"19.2\" viewBox=\"0 0 320 512\" focusable=\"false\" class=\"fa-icon\"\n                            style=\"font-size: 1.2em;\">\n                            <path style=\"fill:#FFF\"\n                                d=\"M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z\">\n                            </path>\n                        </svg></button></div>\n            </div>\n        </div>\n        <div class=\"overlay\" style=\"display: none;\"></div>\n        <div class=\"main-container\">\n            <header class=\"loginnoshow\">\n                <div class=\"wrapper-main-header\">\n                    <h1><a href=\"https://devatramos.losheroes.cl/\">\n                            <figure><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"190.096\" height=\"39.554\"\n                                    viewBox=\"0 0 190.096 39.554\">\n                                    <g id=\"Grupo_7\" data-name=\"Grupo 7\" transform=\"translate(27.994 -188.438)\">\n                                        <path id=\"Trazado_1\" data-name=\"Trazado 1\"\n                                            d=\"M252.609,191.656a5.621,5.621,0,1,0,2.44-7.568,5.619,5.619,0,0,0-2.44,7.568\"\n                                            transform=\"translate(-267.632 14.755)\" fill=\"#f16112\"></path>\n                                        <path id=\"Trazado_2\" data-name=\"Trazado 2\"\n                                            d=\"M244.267,158.911a19.783,19.783,0,0,0-17.428-11.473c-1.05.008-3.64.248-3.681.256a.574.574,0,0,0-.407.195.578.578,0,0,0,.43.966c.047.007,2.306-.1,2.306-.1l.015.417-3.779.212a.605.605,0,0,0-.446.209.575.575,0,0,0,.045.818.68.68,0,0,0,.441.147c.064.007,3.7-.165,3.7-.165l.018.41-4.538.261a.671.671,0,0,0-.494.2.583.583,0,0,0,.041.82.609.609,0,0,0,.422.148c.164,0,4.61-.231,4.61-.231l.026.432-4.086.212a.569.569,0,0,0-.406.192.576.576,0,0,0-.129.541.61.61,0,0,0,.695.443l4.506-.253,0,.373-1.753.118c-.8.118-1.005.56-1.045,1.263a12.334,12.334,0,0,1,3.771-.276c.16.012.307.022.448.028a12.189,12.189,0,1,1-10.968,4.816c.084-.1.174-.214.265-.334a12.4,12.4,0,0,1,2.726-2.623,1.109,1.109,0,0,0-1.637-.062l-1.26,1.223-.268-.261,3.188-3.172a.608.608,0,0,0,.135-.809.581.581,0,0,0-.489-.267.56.56,0,0,0-.412.174l-2.894,2.9-.3-.313s3.14-3.149,3.251-3.271a.58.58,0,0,0-.405-.994.671.671,0,0,0-.481.233l-3.226,3.2-.293-.282s2.56-2.59,2.594-2.647a.681.681,0,0,0,.19-.424.583.583,0,0,0-.582-.581.626.626,0,0,0-.454.193l-2.687,2.672-.3-.291s1.588-1.612,1.614-1.654a.559.559,0,0,0,.145-.38.581.581,0,0,0-.578-.583.567.567,0,0,0-.416.175c-.038.023-2.264,2.107-2.835,2.779-.075.089-.146.171-.211.246l0,0a19.779,19.779,0,1,0,33.31,4.172\"\n                                            transform=\"translate(-234.52 41)\" fill=\"#0064b3\"></path>\n                                        <path id=\"Trazado_3\" data-name=\"Trazado 3\"\n                                            d=\"M17.712,316.414h2.506V331.64H28.1v2.281H17.712Z\"\n                                            transform=\"translate(0 -123.071)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_4\" data-name=\"Trazado 4\"\n                                            d=\"M70.535,315.491a9.413,9.413,0,0,1,6.756,2.569,8.52,8.52,0,0,1,2.7,6.441,8.383,8.383,0,0,1-2.724,6.41,9.685,9.685,0,0,1-6.869,2.538,9.131,9.131,0,0,1-6.593-2.538,8.46,8.46,0,0,1-2.636-6.359,8.648,8.648,0,0,1,2.655-6.491,9.258,9.258,0,0,1,6.712-2.569m.1,2.381a6.794,6.794,0,0,0-4.939,1.88,6.4,6.4,0,0,0-1.935,4.8,6.289,6.289,0,0,0,1.941,4.712,7.2,7.2,0,0,0,9.747-.037,6.408,6.408,0,0,0,1.96-4.775,6.259,6.259,0,0,0-1.96-4.68,6.656,6.656,0,0,0-4.814-1.9\"\n                                            transform=\"translate(-31.65 -122.4)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_5\" data-name=\"Trazado 5\"\n                                            d=\"M143.785,325.98l-1.9-1.158a8.651,8.651,0,0,1-2.55-2.153,4.083,4.083,0,0,1-.759-2.438,4.307,4.307,0,0,1,1.435-3.359,5.364,5.364,0,0,1,3.728-1.291,7.052,7.052,0,0,1,4.023,1.231v2.844a5.8,5.8,0,0,0-4.073-1.82,3.369,3.369,0,0,0-2.018.568,1.722,1.722,0,0,0-.789,1.454,2.235,2.235,0,0,0,.582,1.472,7.3,7.3,0,0,0,1.87,1.442l1.914,1.133q3.2,1.913,3.2,4.87a4.467,4.467,0,0,1-1.41,3.422,5.158,5.158,0,0,1-3.666,1.315,7.7,7.7,0,0,1-4.724-1.595v-3.183a5.9,5.9,0,0,0,4.7,2.573,2.955,2.955,0,0,0,1.961-.656,2.056,2.056,0,0,0,.783-1.642q0-1.6-2.306-3.032\"\n                                            transform=\"translate(-88.027 -122.466)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_6\" data-name=\"Trazado 6\"\n                                            d=\"M223.663,316.414h2.506V333.92h-2.506V326.3h-9.838v7.62h-2.506V316.414h2.506v7.57h9.838Z\"\n                                            transform=\"translate(-141.011 -123.071)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_7\" data-name=\"Trazado 7\"\n                                            d=\"M280.19,316.414h9.925v2.23H282.7v5.339h7.168v2.243H282.7v5.439h7.657v2.23H280.19Z\"\n                                            transform=\"translate(-191.173 -123.071)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_8\" data-name=\"Trazado 8\"\n                                            d=\"M327.7,333.921V316.414h4.386a6.331,6.331,0,0,1,4.217,1.315,4.415,4.415,0,0,1,1.56,3.56,4.379,4.379,0,0,1-2.958,4.311,7.741,7.741,0,0,1,1.643,1.5,30.266,30.266,0,0,1,2.256,3.321q.915,1.492,1.466,2.243l.928,1.253h-2.983l-.764-1.153c-.025-.042-.075-.113-.149-.214l-.488-.689-.776-1.279-.839-1.367a13.715,13.715,0,0,0-1.422-1.717,5.469,5.469,0,0,0-1.167-.92,3.951,3.951,0,0,0-1.75-.281h-.653v7.619Zm3.258-15.377h-.752v5.527h.952a7.068,7.068,0,0,0,2.613-.326,2.449,2.449,0,0,0,1.1-.983,2.85,2.85,0,0,0,.4-1.5,2.676,2.676,0,0,0-.439-1.5,2.343,2.343,0,0,0-1.234-.946,8.889,8.889,0,0,0-2.638-.276\"\n                                            transform=\"translate(-225.777 -123.072)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_9\" data-name=\"Trazado 9\"\n                                            d=\"M385.323,315.491a9.412,9.412,0,0,1,6.756,2.569,8.52,8.52,0,0,1,2.7,6.441,8.383,8.383,0,0,1-2.724,6.41,9.685,9.685,0,0,1-6.869,2.538,9.132,9.132,0,0,1-6.594-2.538,8.462,8.462,0,0,1-2.636-6.359,8.647,8.647,0,0,1,2.655-6.491,9.258,9.258,0,0,1,6.712-2.569m.1,2.381a6.793,6.793,0,0,0-4.939,1.88,6.4,6.4,0,0,0-1.935,4.8,6.288,6.288,0,0,0,1.941,4.712,7.2,7.2,0,0,0,9.747-.037,6.408,6.408,0,0,0,1.959-4.775,6.259,6.259,0,0,0-1.959-4.68,6.656,6.656,0,0,0-4.814-1.9\"\n                                            transform=\"translate(-260.923 -122.4)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_10\" data-name=\"Trazado 10\"\n                                            d=\"M456.589,316.414h9.925v2.23H459.1v5.339h7.169v2.243H459.1v5.439h7.657v2.23H456.589Z\"\n                                            transform=\"translate(-319.651 -123.071)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_11\" data-name=\"Trazado 11\"\n                                            d=\"M505.807,325.98l-1.905-1.158a8.659,8.659,0,0,1-2.549-2.153,4.085,4.085,0,0,1-.759-2.438,4.308,4.308,0,0,1,1.436-3.359,5.363,5.363,0,0,1,3.727-1.291,7.055,7.055,0,0,1,4.024,1.231v2.844a5.8,5.8,0,0,0-4.073-1.82,3.37,3.37,0,0,0-2.018.568,1.723,1.723,0,0,0-.789,1.454,2.236,2.236,0,0,0,.582,1.472,7.31,7.31,0,0,0,1.87,1.442l1.915,1.133q3.2,1.913,3.2,4.87a4.465,4.465,0,0,1-1.41,3.422,5.158,5.158,0,0,1-3.666,1.315,7.7,7.7,0,0,1-4.724-1.595v-3.183a5.9,5.9,0,0,0,4.7,2.573,2.954,2.954,0,0,0,1.961-.656,2.054,2.054,0,0,0,.783-1.642q0-1.6-2.305-3.032\"\n                                            transform=\"translate(-351.701 -122.466)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_29\" data-name=\"Trazado 29\"\n                                            d=\"M539.166,374.426l-.208-.363c-.183-.322-.232-.371-.386-.426v-.009a.5.5,0,0,0,.486-.505c0-.287-.182-.5-.568-.5h-.9v1.808h.365v-.739h.069a.354.354,0,0,1,.3.089,1.647,1.647,0,0,1,.247.355l.142.3Zm-1.207-1.03v-.5h.338c.244,0,.374.089.374.246,0,.128-.082.25-.334.25Zm.407-1.25a1.371,1.371,0,1,1-1.37,1.368,1.372,1.372,0,0,1,1.37-1.368m0-.333a1.7,1.7,0,1,0,1.7,1.7,1.7,1.7,0,0,0-1.7-1.7\"\n                                            transform=\"translate(-377.968 -163.42)\" fill=\"#1a1818\" fill-rule=\"evenodd\">\n                                        </path>\n                                    </g>\n                                </svg></figure>\n                        </a></h1>\n                        <section class=\"usuario\">\n                            <span>\n                                {{user}}\n                            </span>\n                        </section>\n                        <section class=\"empresa\">\n                            <span>\n                                <label>\n                                    <p>Empresa:</p><span>{{empresa}}</span>\n                                </label>\n                                <label>\n                                    <p>Rut:</p><span>{{rutEmpresa}}</span>\n                                </label>\n                            </span>\n                            <ul class=\"list_empresas\">\n                                <li class=\"\">\n                                    <p>MUELLAJE DEL MAIPO S A</p> <span>99506030-2</span>\n                                </li>\n                            </ul>\n                        </section>\n                    \n                    <section></section>\n                    <section class=\"menu\"><button (click)=\"salir()\">Salir</button></section>\n                </div>\n            \n                <p class=\"separador-header\"></p>\n            </header>\n            <nav class=\"sidebar loginnoshow\">\n                <ul>\n                    <li><a class=\"router-link-active\"\n                            class-active=\"active\">Actualización de tramos</a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"inner-container\">\n                <nav class=\"lh__breadcrumb\">\n                    <li><a class=\"active\">Inicio</a></li>\n                    <li><a class=\"\">Resumen de proceso</a></li>\n                    <li><span>Historial del proceso</span></li>\n                </nav>\n                <nav class=\"lhLinkTabs\">\n                    <li>\n                        <a (click)=\"mostrarResumen()\" class=\"\"\n                            class-active=\"active\">Resumen proceso</a>\n                        </li>\n                    <li>\n                        <a class=\"router-link-exact-active router-link-active\" class-active=\"active\">Historial de\n                            actualizaciones</a>\n                        </li>\n                </nav>\n          <br>\n                <div>\n                    <table class=\"list-history\">\n                       <thead>\n                          <tr>\n                             <th>Fecha</th>\n                             <th>Usuario</th>\n                             <th>Rut</th>\n                             <th>Cant Actualizados</th>\n                          </tr>\n                       </thead>\n                       <tbody>\n                          <tr *ngFor=\"let propuesta of propuestas2\">\n                             <th>{{ propuesta.fecActualizacion }}</th>\n                             <td>{{ propuesta.usuario }}</td>\n                             <td>{{ propuesta.rutEmp }}</td>\n                             <td>1</td>                          \n                          </tr>\n                       </tbody>\n                    </table>\n                 </div>\n            </div>\n        </div>\n    </div>\n\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<!-- saved from url=(0039)https://devatramos.losheroes.cl/#/login -->\n<html lang=\"es\">\n\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <link rel=\"shortcut icon\" href=\"https://devatramos.losheroes.cl/favicon.ico\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"csrf-token\" content=\"MsOR0no3YgUhAo81tUfRH3tAC9dVl0MT0dm1pNaj\">\n    <title>Actualización de Tramos</title>\n    <!-- Fonts -->\n    <style>\n        .overlay {\n            background-position: 50%;\n            background-repeat: no-repeat;\n            width: 100vw;\n            height: 100vh;\n            left: 0px;\n            top: 0px;\n            position: fixed;\n            background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='145.652' height='145.599' viewBox='0 0 145.652 145.599'><g id='Grupo_1' data-name='Grupo 1' transform='translate(-206.526 -147.438)'><path id='Trazado_1' data-name='Trazado 1' d='M254.273,213.6a20.691,20.691,0,1,0,8.982-27.857,20.684,20.684,0,0,0-8.982,27.857' fill='%23f16112'/><path id='Trazado_2' data-name='Trazado 2' d='M345.454,189.671A72.822,72.822,0,0,0,281.3,147.438c-3.864.031-13.4.912-13.549.943a2.113,2.113,0,0,0-1.5.717,2.127,2.127,0,0,0,1.582,3.557c.173.025,8.489-.353,8.489-.353l.055,1.536-13.912.779a2.227,2.227,0,0,0-1.641.771,2.116,2.116,0,0,0,.164,3.011,2.5,2.5,0,0,0,1.622.54c.235.024,13.621-.609,13.621-.609l.065,1.51-16.7.961a2.471,2.471,0,0,0-1.818.744,2.146,2.146,0,0,0,.152,3.019,2.241,2.241,0,0,0,1.554.544c.6-.016,16.97-.851,16.97-.851l.1,1.589-15.039.782a2.094,2.094,0,0,0-1.493.707,2.122,2.122,0,0,0-.475,1.993,2.244,2.244,0,0,0,2.557,1.629l16.588-.93-.017,1.374-6.454.435c-2.94.434-3.7,2.06-3.847,4.65a45.4,45.4,0,0,1,13.883-1.016c.588.045,1.131.08,1.649.1A44.869,44.869,0,1,1,243.525,193.3c.309-.373.64-.789.977-1.228a45.654,45.654,0,0,1,10.035-9.657c-2.014-1.624-3.729-2.14-6.025-.229l-4.637,4.5-.988-.959,11.737-11.676a2.237,2.237,0,0,0,.5-2.979,2.14,2.14,0,0,0-1.8-.984,2.062,2.062,0,0,0-1.517.639L241.152,181.4l-1.112-1.152s11.559-11.593,11.968-12.04a2.135,2.135,0,0,0-1.491-3.659,2.469,2.469,0,0,0-1.769.856l-11.876,11.778-1.079-1.037s9.423-9.535,9.549-9.743a2.509,2.509,0,0,0,.7-1.562,2.145,2.145,0,0,0-2.142-2.14,2.3,2.3,0,0,0-1.671.71l-9.89,9.834-1.1-1.073s5.844-5.934,5.941-6.088a2.056,2.056,0,0,0,.534-1.4,2.14,2.14,0,0,0-2.126-2.147,2.088,2.088,0,0,0-1.53.645c-.141.083-8.334,7.756-10.435,10.231-.275.327-.539.628-.778.906l-.007-.008a72.809,72.809,0,1,0,122.616,15.357' fill='%230064b3'/></g></svg>\");\n            background-color: rgba(255, 255, 255, .1);\n            z-index: 100;\n            transform: scale(1);\n            animation: pulse 1400ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);\n            opacity: 1;\n        }\n\n        @keyframes pulse {\n            50% {\n                transform: scale(1.1);\n                opacity: .9;\n            }\n        }\n\n        .fade-enter-active {\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n        }\n\n        .fade-leave-active {\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n            will-change: transform, opacity;\n            transform: scale(1);\n        }\n\n        .fade-enter {\n            opacity: 0;\n            transform: scale(0);\n        }\n\n        .fade-leave-to {\n            transform: scale(0);\n            opacity: 0;\n        }\n\n\n        .lightfade-enter-active {\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n        }\n\n        .lightfade-leave-active {\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n            will-change: transform, opacity;\n            transform: scale(1);\n        }\n\n        .lightfade-enter {\n            opacity: 0;\n            transform: scale(0.8);\n        }\n\n        .lightfade-leave-to {\n            transform: scale(0.8);\n            opacity: 0;\n        }\n\n        .show-enter-active,\n        .show-leave-active {\n            transition: opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1);\n        }\n\n        .show-enter,\n        .show-leave-to\n\n        /* .fade-leave-active below version 2.1.8 */\n            {\n            opacity: 0;\n        }\n\n\n        .slide-fade-enter-active {\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n        }\n\n        .slide-fade-leave-active {\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n        }\n\n        .slide-fade-enter {\n            transform: scale(.99);\n            opacity: 0;\n            will-change: transform, opacity;\n            backface-visibility: hidden;\n        }\n\n        .slide-fade-leave-to {\n            transform: scale(.99);\n            opacity: 0;\n            will-change: transform, opacity;\n            backface-visibility: hidden;\n        }\n\n        .fade-enter-active {\n            opacity: 1;\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n        }\n\n        .fade-leave-active {\n            opacity: 1;\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n        }\n\n        .fade-enter {\n            opacity: 0;\n            will-change: opacity;\n            backface-visibility: hidden;\n        }\n\n        .fade-leave-to {\n            opacity: 0;\n            will-change: opacity;\n            backface-visibility: hidden;\n        }\n\n\n        .gfade-enter-active,\n        .gfade-leave-active {\n            transition: all .2s;\n        }\n\n        .gfade-enter,\n        .gfade-leave-to {\n            opacity: 0;\n        }\n\n        .gfade-enter-active {\n            transition-delay: .2s;\n        }\n\n        .list-item {\n            display: inline-block;\n            margin-right: 10px;\n        }\n\n        .list-enter-active,\n        .list-leave-active {\n            transition: all 1s;\n        }\n\n        .list-enter,\n        .list-leave-to\n\n        /* .list-leave-active below version 2.1.8 */\n            {\n            opacity: 0;\n            transform: translateY(30px);\n        }\n\n        .buttonSelectEmpresa svg path {\n            fill: #BCBCBD !important;\n        }\n\n        .loginnoshow {\n            opacity: 1 !important;\n        }\n    </style>\n    <script type=\"text/javascript\" async=\"\" src=\"./login_files/analytics.js\"></script>\n    <script> window.pathurl = \"https://devatramos.losheroes.cl\" </script>\n    <!-- Global site tag (gtag.js) - Google Analytics -->\n    <script async=\"\" src=\"./login_files/js\"></script>\n    <script>\n        window.dataLayer = window.dataLayer || [];\n        function gtag() { dataLayer.push(arguments); }\n        gtag('js', new Date());\n\n        gtag('config', 'UA-143162283-1');\n    </script>\n\n    <style type=\"text/css\">\n        .toasted {\n            padding: 0 20px\n        }\n\n        .toasted.rounded {\n            border-radius: 24px\n        }\n\n        .toasted .primary,\n        .toasted.toasted-primary {\n            border-radius: 2px;\n            min-height: 38px;\n            line-height: 1.1em;\n            background-color: #353535;\n            padding: 6px 20px;\n            font-size: 15px;\n            font-weight: 300;\n            color: #fff;\n            box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)\n        }\n\n        .toasted .primary.success,\n        .toasted.toasted-primary.success {\n            background: #4caf50\n        }\n\n        .toasted .primary.error,\n        .toasted.toasted-primary.error {\n            background: #f44336\n        }\n\n        .toasted .primary.info,\n        .toasted.toasted-primary.info {\n            background: #3f51b5\n        }\n\n        .toasted .primary .action,\n        .toasted.toasted-primary .action {\n            color: #a1c2fa\n        }\n\n        .toasted.bubble {\n            border-radius: 30px;\n            min-height: 38px;\n            line-height: 1.1em;\n            background-color: #ff7043;\n            padding: 0 20px;\n            font-size: 15px;\n            font-weight: 300;\n            color: #fff;\n            box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)\n        }\n\n        .toasted.bubble.success {\n            background: #4caf50\n        }\n\n        .toasted.bubble.error {\n            background: #f44336\n        }\n\n        .toasted.bubble.info {\n            background: #3f51b5\n        }\n\n        .toasted.bubble .action {\n            color: #8e2b0c\n        }\n\n        .toasted.outline {\n            border-radius: 30px;\n            min-height: 38px;\n            line-height: 1.1em;\n            background-color: #fff;\n            border: 1px solid #676767;\n            padding: 0 20px;\n            font-size: 15px;\n            color: #676767;\n            box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);\n            font-weight: 700\n        }\n\n        .toasted.outline.success {\n            color: #4caf50;\n            border-color: #4caf50\n        }\n\n        .toasted.outline.error {\n            color: #f44336;\n            border-color: #f44336\n        }\n\n        .toasted.outline.info {\n            color: #3f51b5;\n            border-color: #3f51b5\n        }\n\n        .toasted.outline .action {\n            color: #607d8b\n        }\n\n        .toasted-container {\n            position: fixed;\n            z-index: 10000\n        }\n\n        .toasted-container,\n        .toasted-container.full-width {\n            display: -ms-flexbox;\n            display: flex;\n            -ms-flex-direction: column;\n            flex-direction: column\n        }\n\n        .toasted-container.full-width {\n            max-width: 86%;\n            width: 100%\n        }\n\n        .toasted-container.full-width.fit-to-screen {\n            min-width: 100%\n        }\n\n        .toasted-container.full-width.fit-to-screen .toasted:first-child {\n            margin-top: 0\n        }\n\n        .toasted-container.full-width.fit-to-screen.top-right {\n            top: 0;\n            right: 0\n        }\n\n        .toasted-container.full-width.fit-to-screen.top-left {\n            top: 0;\n            left: 0\n        }\n\n        .toasted-container.full-width.fit-to-screen.top-center {\n            top: 0;\n            left: 0;\n            -webkit-transform: translateX(0);\n            transform: translateX(0)\n        }\n\n        .toasted-container.full-width.fit-to-screen.bottom-right {\n            right: 0;\n            bottom: 0\n        }\n\n        .toasted-container.full-width.fit-to-screen.bottom-left {\n            left: 0;\n            bottom: 0\n        }\n\n        .toasted-container.full-width.fit-to-screen.bottom-center {\n            left: 0;\n            bottom: 0;\n            -webkit-transform: translateX(0);\n            transform: translateX(0)\n        }\n\n        .toasted-container.top-right {\n            top: 10%;\n            right: 7%\n        }\n\n        .toasted-container.top-left {\n            top: 10%;\n            left: 7%\n        }\n\n        .toasted-container.top-center {\n            top: 10%;\n            left: 50%;\n            -webkit-transform: translateX(-50%);\n            transform: translateX(-50%)\n        }\n\n        .toasted-container.bottom-right {\n            right: 5%;\n            bottom: 7%\n        }\n\n        .toasted-container.bottom-left {\n            left: 5%;\n            bottom: 7%\n        }\n\n        .toasted-container.bottom-center {\n            left: 50%;\n            -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n            bottom: 7%\n        }\n\n        .toasted-container.bottom-left .toasted,\n        .toasted-container.top-left .toasted {\n            float: left\n        }\n\n        .toasted-container.bottom-right .toasted,\n        .toasted-container.top-right .toasted {\n            float: right\n        }\n\n        .toasted-container .toasted {\n            top: 35px;\n            width: auto;\n            clear: both;\n            margin-top: 10px;\n            position: relative;\n            max-width: 100%;\n            height: auto;\n            word-break: normal;\n            display: -ms-flexbox;\n            display: flex;\n            -ms-flex-align: center;\n            align-items: center;\n            -ms-flex-pack: justify;\n            justify-content: space-between;\n            box-sizing: inherit\n        }\n\n        .toasted-container .toasted .fa,\n        .toasted-container .toasted .fab,\n        .toasted-container .toasted .far,\n        .toasted-container .toasted .fas,\n        .toasted-container .toasted .material-icons,\n        .toasted-container .toasted .mdi {\n            margin-right: .5rem;\n            margin-left: -.4rem\n        }\n\n        .toasted-container .toasted .fa.after,\n        .toasted-container .toasted .fab.after,\n        .toasted-container .toasted .far.after,\n        .toasted-container .toasted .fas.after,\n        .toasted-container .toasted .material-icons.after,\n        .toasted-container .toasted .mdi.after {\n            margin-left: .5rem;\n            margin-right: -.4rem\n        }\n\n        .toasted-container .toasted .action {\n            text-decoration: none;\n            font-size: .8rem;\n            padding: 8px;\n            margin: 5px -7px 5px 7px;\n            border-radius: 3px;\n            text-transform: uppercase;\n            letter-spacing: .03em;\n            font-weight: 600;\n            cursor: pointer\n        }\n\n        .toasted-container .toasted .action.icon {\n            padding: 4px;\n            display: -ms-flexbox;\n            display: flex;\n            -ms-flex-align: center;\n            align-items: center;\n            -ms-flex-pack: center;\n            justify-content: center\n        }\n\n        .toasted-container .toasted .action.icon .fa,\n        .toasted-container .toasted .action.icon .material-icons,\n        .toasted-container .toasted .action.icon .mdi {\n            margin-right: 0;\n            margin-left: 4px\n        }\n\n        .toasted-container .toasted .action.icon:hover {\n            text-decoration: none\n        }\n\n        .toasted-container .toasted .action:hover {\n            text-decoration: underline\n        }\n\n        @media only screen and (max-width:600px) {\n            .toasted-container {\n                min-width: 100%\n            }\n\n            .toasted-container .toasted:first-child {\n                margin-top: 0\n            }\n\n            .toasted-container.top-right {\n                top: 0;\n                right: 0\n            }\n\n            .toasted-container.top-left {\n                top: 0;\n                left: 0\n            }\n\n            .toasted-container.top-center {\n                top: 0;\n                left: 0;\n                -webkit-transform: translateX(0);\n                transform: translateX(0)\n            }\n\n            .toasted-container.bottom-right {\n                right: 0;\n                bottom: 0\n            }\n\n            .toasted-container.bottom-left {\n                left: 0;\n                bottom: 0\n            }\n\n            .toasted-container.bottom-center {\n                left: 0;\n                bottom: 0;\n                -webkit-transform: translateX(0);\n                transform: translateX(0)\n            }\n\n            .toasted-container.bottom-center,\n            .toasted-container.top-center {\n                -ms-flex-align: stretch !important;\n                align-items: stretch !important\n            }\n\n            .toasted-container.bottom-left .toasted,\n            .toasted-container.bottom-right .toasted,\n            .toasted-container.top-left .toasted,\n            .toasted-container.top-right .toasted {\n                float: none\n            }\n\n            .toasted-container .toasted {\n                border-radius: 0\n            }\n        }\n    </style>\n    <style type=\"text/css\">\n        .resize-observer[data-v-b329ee4c] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            z-index: -1;\n            width: 100%;\n            height: 100%;\n            border: none;\n            background-color: transparent;\n            pointer-events: none;\n            display: block;\n            overflow: hidden;\n            opacity: 0\n        }\n\n        .resize-observer[data-v-b329ee4c] object {\n            display: block;\n            position: absolute;\n            top: 0;\n            left: 0;\n            height: 100%;\n            width: 100%;\n            overflow: hidden;\n            pointer-events: none;\n            z-index: -1\n        }\n    </style>\n    <style type=\"text/css\">\n        .company-selector {\n            position: fixed;\n            top: 0px;\n            left: 0px;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n            -ms-flex-pack: center;\n            justify-content: center;\n            -webkit-box-align: center;\n            -ms-flex-align: center;\n            align-items: center;\n            width: 100vw;\n            height: 100vh;\n            z-index: 7000;\n            background: rgba(255, 255, 255, 0.8);\n        }\n\n        .company-selector .wrapper-company-selector {\n            width: 100vw;\n            height: 100vh;\n            max-width: 500px;\n            max-height: 200px;\n            border-radius: 8px;\n            -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n            background-color: #fff;\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            padding: 0 20px;\n            -webkit-transition: -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n            transition: -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n            transition: transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n            transition: transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55), -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n        }\n\n        .company-selector .wrapper-company-selector.expand {\n            max-height: 500px;\n        }\n\n        .company-selector .wrapper-company-selector h1 {\n            margin-top: 15px;\n            margin-bottom: 10px;\n        }\n\n        .company-selector .wrapper-company-selector h3 {\n            margin-top: 0px;\n        }\n\n        .company-selector .wrapper-company-selector .controls {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: end;\n            -ms-flex-pack: end;\n            justify-content: flex-end;\n            -webkit-box-align: end;\n            -ms-flex-align: end;\n            align-items: flex-end;\n        }\n\n        .company-selector .wrapper-company-selector .controls .alt_cp_class {\n            padding-bottom: 0px;\n            padding-left: 0px;\n            border: none;\n            max-height: 52px;\n        }\n\n        .company-selector .wrapper-company-selector .controls .alt_cp_class label {\n            font-size: 12px;\n            color: #707070;\n            font-family: 'Open Sans', sans-serif;\n            font-weight: 600;\n            padding-bottom: 4px;\n            display: inline-block;\n        }\n\n        .company-selector .wrapper-company-selector .controls .alt_cp_class input {\n            font-size: 16px;\n            font-weight: 700;\n            border: none;\n            width: 100%;\n            height: 30px;\n            border-bottom: 1px solid rgba(188, 188, 188, 0.45);\n            padding: 0 5px;\n        }\n\n        .company-selector .wrapper-company-selector .controls .alt_cp_class span {\n            font-family: 'Open Sans', sans-serif;\n            display: inline-block;\n            vertical-align: top;\n            padding: 2px 4px;\n            font-size: 12px;\n            font-style: italic;\n            min-height: 21px;\n            color: #F98A31;\n        }\n\n        .company-selector .wrapper-company-selector .companys-finded {\n            height: 280px;\n            overflow-y: auto;\n            margin-top: 20px;\n        }\n\n        .company-selector .wrapper-company-selector .companys-finded ul {\n            list-style: none;\n            padding: 0;\n        }\n\n        .company-selector .wrapper-company-selector .companys-finded ul li {\n            cursor: pointer;\n            font-family: 'Open Sans', sans-serif;\n            font-size: 11px;\n            -webkit-transition: -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n            transition: -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n            transition: transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n            transition: transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55), -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n            padding-bottom: 5px;\n        }\n\n        .company-selector .wrapper-company-selector .companys-finded ul li p {\n            font-size: 12px;\n            margin: 0;\n            width: 100%;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            padding: 0px 10px;\n            font-weight: 600;\n        }\n\n        .company-selector .wrapper-company-selector .companys-finded ul li span {\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            padding: 0px 10px;\n        }\n\n        .company-selector .wrapper-company-selector .companys-finded ul li:hover {\n            background-color: #cfd8dc;\n        }\n\n        .company-selector .wrapper-company-selector .companys-finded ul li+li {\n            margin-top: 5px;\n        }\n    </style>\n    <style type=\"text/css\">\n        .fa-icon {\n            display: inline-block;\n            fill: currentColor;\n        }\n\n        .fa-flip-horizontal {\n            -webkit-transform: scale(-1, 1);\n            transform: scale(-1, 1);\n        }\n\n        .fa-flip-vertical {\n            -webkit-transform: scale(1, -1);\n            transform: scale(1, -1);\n        }\n\n        .fa-spin {\n            -webkit-animation: fa-spin 1s 0s infinite linear;\n            animation: fa-spin 1s 0s infinite linear;\n        }\n\n        .fa-inverse {\n            color: #fff;\n        }\n\n        .fa-pulse {\n            -webkit-animation: fa-spin 1s infinite steps(8);\n            animation: fa-spin 1s infinite steps(8);\n        }\n\n        @-webkit-keyframes fa-spin {\n            0% {\n                -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n            }\n\n            100% {\n                -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n            }\n        }\n\n        @keyframes fa-spin {\n            0% {\n                -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n            }\n\n            100% {\n                -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n            }\n        }\n    </style>\n    <style type=\"text/css\">\n        .vue-tooltip-theme {\n            z-index: 4000;\n        }\n\n        .vue-tooltip-theme .tooltip-inner {\n            background-color: #1F78B4;\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            padding: 5px 8px;\n            margin-top: -10px;\n            color: white;\n            border-radius: 4px;\n            font-family: 'Open Sans', sans-serif;\n            font-weight: 400;\n            font-size: 14px;\n        }\n    </style>\n</head>\n\n<body>\n    <div id=\"app\">\n        <!---->\n        <div class=\"general_message info\" style=\"display: none;\">\n            <div class=\"wrapper_general_message\">\n                <div class=\"icon\"><svg aria-hidden=\"true\" width=\"42\" height=\"48\" viewBox=\"0 0 448 512\" focusable=\"false\"\n                        class=\"fa-icon\" style=\"font-size: 3em;\">\n                        <path style=\"fill:currentColor\"\n                            d=\"M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm16 400c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352c8.822 0 16 7.178 16 16v352zm-228-80h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z\">\n                        </path>\n                    </svg></div>\n                <div class=\"general_message_text\">\n                    <h2>Información</h2>\n                    <p>.</p>\n                </div>\n                <div class=\"close_general_message\"><button class=\"no-minw ghost\"><svg aria-hidden=\"true\" width=\"12\"\n                            height=\"19.2\" viewBox=\"0 0 320 512\" focusable=\"false\" class=\"fa-icon\"\n                            style=\"font-size: 1.2em;\">\n                            <path style=\"fill:#FFF\"\n                                d=\"M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z\">\n                            </path>\n                        </svg></button></div>\n            </div>\n        </div>\n        <div class=\"overlay\" style=\"display: none;\"></div>\n        <div class=\"main-container\">\n            <header class=\"\">\n                <div class=\"wrapper-main-header\">\n                    <h1><a href=\"https://devatramos.losheroes.cl/\">\n                            <figure><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"190.096\" height=\"39.554\"\n                                    viewBox=\"0 0 190.096 39.554\">\n                                    <g id=\"Grupo_7\" data-name=\"Grupo 7\" transform=\"translate(27.994 -188.438)\">\n                                        <path id=\"Trazado_1\" data-name=\"Trazado 1\"\n                                            d=\"M252.609,191.656a5.621,5.621,0,1,0,2.44-7.568,5.619,5.619,0,0,0-2.44,7.568\"\n                                            transform=\"translate(-267.632 14.755)\" fill=\"#f16112\"></path>\n                                        <path id=\"Trazado_2\" data-name=\"Trazado 2\"\n                                            d=\"M244.267,158.911a19.783,19.783,0,0,0-17.428-11.473c-1.05.008-3.64.248-3.681.256a.574.574,0,0,0-.407.195.578.578,0,0,0,.43.966c.047.007,2.306-.1,2.306-.1l.015.417-3.779.212a.605.605,0,0,0-.446.209.575.575,0,0,0,.045.818.68.68,0,0,0,.441.147c.064.007,3.7-.165,3.7-.165l.018.41-4.538.261a.671.671,0,0,0-.494.2.583.583,0,0,0,.041.82.609.609,0,0,0,.422.148c.164,0,4.61-.231,4.61-.231l.026.432-4.086.212a.569.569,0,0,0-.406.192.576.576,0,0,0-.129.541.61.61,0,0,0,.695.443l4.506-.253,0,.373-1.753.118c-.8.118-1.005.56-1.045,1.263a12.334,12.334,0,0,1,3.771-.276c.16.012.307.022.448.028a12.189,12.189,0,1,1-10.968,4.816c.084-.1.174-.214.265-.334a12.4,12.4,0,0,1,2.726-2.623,1.109,1.109,0,0,0-1.637-.062l-1.26,1.223-.268-.261,3.188-3.172a.608.608,0,0,0,.135-.809.581.581,0,0,0-.489-.267.56.56,0,0,0-.412.174l-2.894,2.9-.3-.313s3.14-3.149,3.251-3.271a.58.58,0,0,0-.405-.994.671.671,0,0,0-.481.233l-3.226,3.2-.293-.282s2.56-2.59,2.594-2.647a.681.681,0,0,0,.19-.424.583.583,0,0,0-.582-.581.626.626,0,0,0-.454.193l-2.687,2.672-.3-.291s1.588-1.612,1.614-1.654a.559.559,0,0,0,.145-.38.581.581,0,0,0-.578-.583.567.567,0,0,0-.416.175c-.038.023-2.264,2.107-2.835,2.779-.075.089-.146.171-.211.246l0,0a19.779,19.779,0,1,0,33.31,4.172\"\n                                            transform=\"translate(-234.52 41)\" fill=\"#0064b3\"></path>\n                                        <path id=\"Trazado_3\" data-name=\"Trazado 3\"\n                                            d=\"M17.712,316.414h2.506V331.64H28.1v2.281H17.712Z\"\n                                            transform=\"translate(0 -123.071)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_4\" data-name=\"Trazado 4\"\n                                            d=\"M70.535,315.491a9.413,9.413,0,0,1,6.756,2.569,8.52,8.52,0,0,1,2.7,6.441,8.383,8.383,0,0,1-2.724,6.41,9.685,9.685,0,0,1-6.869,2.538,9.131,9.131,0,0,1-6.593-2.538,8.46,8.46,0,0,1-2.636-6.359,8.648,8.648,0,0,1,2.655-6.491,9.258,9.258,0,0,1,6.712-2.569m.1,2.381a6.794,6.794,0,0,0-4.939,1.88,6.4,6.4,0,0,0-1.935,4.8,6.289,6.289,0,0,0,1.941,4.712,7.2,7.2,0,0,0,9.747-.037,6.408,6.408,0,0,0,1.96-4.775,6.259,6.259,0,0,0-1.96-4.68,6.656,6.656,0,0,0-4.814-1.9\"\n                                            transform=\"translate(-31.65 -122.4)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_5\" data-name=\"Trazado 5\"\n                                            d=\"M143.785,325.98l-1.9-1.158a8.651,8.651,0,0,1-2.55-2.153,4.083,4.083,0,0,1-.759-2.438,4.307,4.307,0,0,1,1.435-3.359,5.364,5.364,0,0,1,3.728-1.291,7.052,7.052,0,0,1,4.023,1.231v2.844a5.8,5.8,0,0,0-4.073-1.82,3.369,3.369,0,0,0-2.018.568,1.722,1.722,0,0,0-.789,1.454,2.235,2.235,0,0,0,.582,1.472,7.3,7.3,0,0,0,1.87,1.442l1.914,1.133q3.2,1.913,3.2,4.87a4.467,4.467,0,0,1-1.41,3.422,5.158,5.158,0,0,1-3.666,1.315,7.7,7.7,0,0,1-4.724-1.595v-3.183a5.9,5.9,0,0,0,4.7,2.573,2.955,2.955,0,0,0,1.961-.656,2.056,2.056,0,0,0,.783-1.642q0-1.6-2.306-3.032\"\n                                            transform=\"translate(-88.027 -122.466)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_6\" data-name=\"Trazado 6\"\n                                            d=\"M223.663,316.414h2.506V333.92h-2.506V326.3h-9.838v7.62h-2.506V316.414h2.506v7.57h9.838Z\"\n                                            transform=\"translate(-141.011 -123.071)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_7\" data-name=\"Trazado 7\"\n                                            d=\"M280.19,316.414h9.925v2.23H282.7v5.339h7.168v2.243H282.7v5.439h7.657v2.23H280.19Z\"\n                                            transform=\"translate(-191.173 -123.071)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_8\" data-name=\"Trazado 8\"\n                                            d=\"M327.7,333.921V316.414h4.386a6.331,6.331,0,0,1,4.217,1.315,4.415,4.415,0,0,1,1.56,3.56,4.379,4.379,0,0,1-2.958,4.311,7.741,7.741,0,0,1,1.643,1.5,30.266,30.266,0,0,1,2.256,3.321q.915,1.492,1.466,2.243l.928,1.253h-2.983l-.764-1.153c-.025-.042-.075-.113-.149-.214l-.488-.689-.776-1.279-.839-1.367a13.715,13.715,0,0,0-1.422-1.717,5.469,5.469,0,0,0-1.167-.92,3.951,3.951,0,0,0-1.75-.281h-.653v7.619Zm3.258-15.377h-.752v5.527h.952a7.068,7.068,0,0,0,2.613-.326,2.449,2.449,0,0,0,1.1-.983,2.85,2.85,0,0,0,.4-1.5,2.676,2.676,0,0,0-.439-1.5,2.343,2.343,0,0,0-1.234-.946,8.889,8.889,0,0,0-2.638-.276\"\n                                            transform=\"translate(-225.777 -123.072)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_9\" data-name=\"Trazado 9\"\n                                            d=\"M385.323,315.491a9.412,9.412,0,0,1,6.756,2.569,8.52,8.52,0,0,1,2.7,6.441,8.383,8.383,0,0,1-2.724,6.41,9.685,9.685,0,0,1-6.869,2.538,9.132,9.132,0,0,1-6.594-2.538,8.462,8.462,0,0,1-2.636-6.359,8.647,8.647,0,0,1,2.655-6.491,9.258,9.258,0,0,1,6.712-2.569m.1,2.381a6.793,6.793,0,0,0-4.939,1.88,6.4,6.4,0,0,0-1.935,4.8,6.288,6.288,0,0,0,1.941,4.712,7.2,7.2,0,0,0,9.747-.037,6.408,6.408,0,0,0,1.959-4.775,6.259,6.259,0,0,0-1.959-4.68,6.656,6.656,0,0,0-4.814-1.9\"\n                                            transform=\"translate(-260.923 -122.4)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_10\" data-name=\"Trazado 10\"\n                                            d=\"M456.589,316.414h9.925v2.23H459.1v5.339h7.169v2.243H459.1v5.439h7.657v2.23H456.589Z\"\n                                            transform=\"translate(-319.651 -123.071)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_11\" data-name=\"Trazado 11\"\n                                            d=\"M505.807,325.98l-1.905-1.158a8.659,8.659,0,0,1-2.549-2.153,4.085,4.085,0,0,1-.759-2.438,4.308,4.308,0,0,1,1.436-3.359,5.363,5.363,0,0,1,3.727-1.291,7.055,7.055,0,0,1,4.024,1.231v2.844a5.8,5.8,0,0,0-4.073-1.82,3.37,3.37,0,0,0-2.018.568,1.723,1.723,0,0,0-.789,1.454,2.236,2.236,0,0,0,.582,1.472,7.31,7.31,0,0,0,1.87,1.442l1.915,1.133q3.2,1.913,3.2,4.87a4.465,4.465,0,0,1-1.41,3.422,5.158,5.158,0,0,1-3.666,1.315,7.7,7.7,0,0,1-4.724-1.595v-3.183a5.9,5.9,0,0,0,4.7,2.573,2.954,2.954,0,0,0,1.961-.656,2.054,2.054,0,0,0,.783-1.642q0-1.6-2.305-3.032\"\n                                            transform=\"translate(-351.701 -122.466)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_29\" data-name=\"Trazado 29\"\n                                            d=\"M539.166,374.426l-.208-.363c-.183-.322-.232-.371-.386-.426v-.009a.5.5,0,0,0,.486-.505c0-.287-.182-.5-.568-.5h-.9v1.808h.365v-.739h.069a.354.354,0,0,1,.3.089,1.647,1.647,0,0,1,.247.355l.142.3Zm-1.207-1.03v-.5h.338c.244,0,.374.089.374.246,0,.128-.082.25-.334.25Zm.407-1.25a1.371,1.371,0,1,1-1.37,1.368,1.372,1.372,0,0,1,1.37-1.368m0-.333a1.7,1.7,0,1,0,1.7,1.7,1.7,1.7,0,0,0-1.7-1.7\"\n                                            transform=\"translate(-377.968 -163.42)\" fill=\"#1a1818\" fill-rule=\"evenodd\">\n                                        </path>\n                                    </g>\n                                </svg></figure>\n                        </a></h1>\n                    <section class=\"usuario\"><span>\n                            <br>\n\n                        </span> <button class=\"no-minw ghost sep-from-left\"><svg aria-hidden=\"true\" width=\"32\"\n                                height=\"25.601\" viewBox=\"0 0 32 25.601\" focusable=\"false\" class=\"fa-icon\" fill=\"#BCBCBD\"\n                                style=\"font-size: 2em;\">\n                                <path style=\"fill:#BCBCBD\"\n                                    d=\"M11.2,12.8A6.4,6.4,0,1,0,4.8,6.4,6.4,6.4,0,0,0,11.2,12.8Zm0-11.2A4.8,4.8,0,1,1,6.4,6.4,4.808,4.808,0,0,1,11.2,1.6ZM31.531,11.805,29.8,10.07a1.618,1.618,0,0,0-2.28,0L16.391,21.2l-.38,3.41a.89.89,0,0,0,.885.99A.67.67,0,0,0,17,25.6l3.41-.38L31.531,14.091a1.627,1.627,0,0,0,0-2.285ZM19.666,23.686l-1.97.225.22-1.975,7.845-7.845,1.75,1.75-7.845,7.845Zm8.975-8.975-1.75-1.75,1.76-1.76h0l.01.005,1.735,1.75ZM6.72,16c.98,0,1.955.8,4.48.8s3.5-.8,4.48-.8a5.075,5.075,0,0,1,2.8.845l1.14-1.14a6.658,6.658,0,0,0-3.94-1.3c-1.435,0-2.125.8-4.48.8s-3.04-.8-4.48-.8A6.715,6.715,0,0,0,0,21.121V23.2a2.4,2.4,0,0,0,2.4,2.4H14.576a2.516,2.516,0,0,1-.16-1.17l.05-.43H2.4a.8.8,0,0,1-.8-.8v-2.08A5.124,5.124,0,0,1,6.72,16Z\">\n                                </path>\n                            </svg></button></section>\n                    <section class=\"empresa\"><span><label>\n                                <p>Empresa:</p><span></span>\n                            </label> <label>\n                                <p>Rut:</p><span></span>\n                            </label></span> <button class=\"no-minw ghost sep-from-left buttonSelectEmpresa\"><svg\n                                aria-hidden=\"true\" width=\"30.4\" height=\"25.33365\" viewBox=\"0 0 32 26.667\"\n                                focusable=\"false\" class=\"fa-icon\" fill=\"#BCBCBD\" style=\"font-size: 1.9em;\">\n                                <path style=\"fill:#BCBCBD\"\n                                    d=\"M21.76,16.432,22.8,15.391a.311.311,0,0,1,.531.219v8.557a2.5,2.5,0,0,1-2.5,2.5H2.5a2.5,2.5,0,0,1-2.5-2.5V5.833a2.5,2.5,0,0,1,2.5-2.5H17.724a.311.311,0,0,1,.219.531L16.9,4.906A.322.322,0,0,1,16.682,5H2.5a.836.836,0,0,0-.833.833V24.167A.836.836,0,0,0,2.5,25H20.833a.836.836,0,0,0,.833-.833V16.651A.292.292,0,0,1,21.76,16.432Zm7.6-9.958L13.083,22.75l-5.2.578A1.093,1.093,0,0,1,6.672,22.12l.578-5.2L23.526.641a2.188,2.188,0,0,1,3.094,0l2.74,2.74a2.188,2.188,0,0,1,0,3.094ZM24.484,8.995,21.01,5.521,8.844,17.682l-.432,3.911,3.911-.432L24.484,8.995Zm3.7-4.437-2.74-2.74a.519.519,0,0,0-.734,0L22.188,4.339l3.474,3.474,2.521-2.521a.519.519,0,0,0,0-.734Z\">\n                                </path>\n                            </svg></button>\n                        <ul class=\"list_empresas\"></ul>\n                    </section>\n                    <section></section>\n                    <section class=\"menu\"><button>Salir</button></section>\n                </div>\n                <p class=\"separador-header\"></p>\n            </header>\n            <nav class=\"sidebar\">\n                <ul>\n                    <li><a href=\"https://devatramos.losheroes.cl/#/\" class=\"router-link-active\"\n                            class-active=\"active\">Actualización de tramos</a>\n                        <ul>\n                            <li><a href=\"https://devatramos.losheroes.cl/#/instrucciones\" class=\"\"\n                                    class-active=\"active\">Instrucciones de proceso</a></li>\n                            <li><a href=\"https://devatramos.losheroes.cl/#/normativa\" class=\"\"\n                                    class-active=\"active\">Normativa vigente</a></li>\n                            <li><a href=\"https://devatramos.losheroes.cl/#/proceso\" class=\"\"\n                                    class-active=\"active\">Actualización de tramos</a></li>\n                            <li style=\"display: none;\"><a href=\"https://devatramos.losheroes.cl/#/user\" class=\"\"\n                                    class-active=\"active\">Mantención de usuarios</a></li>\n                        </ul>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"main-login\">\n                <header>\n                    <h1>\n                        <figure><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"190.096\" height=\"39.554\"\n                                viewBox=\"0 0 190.096 39.554\">\n                                <g id=\"Grupo_7\" data-name=\"Grupo 7\" transform=\"translate(27.994 -188.438)\">\n                                    <path id=\"Trazado_1\" data-name=\"Trazado 1\"\n                                        d=\"M252.609,191.656a5.621,5.621,0,1,0,2.44-7.568,5.619,5.619,0,0,0-2.44,7.568\"\n                                        transform=\"translate(-267.632 14.755)\" fill=\"#f16112\"></path>\n                                    <path id=\"Trazado_2\" data-name=\"Trazado 2\"\n                                        d=\"M244.267,158.911a19.783,19.783,0,0,0-17.428-11.473c-1.05.008-3.64.248-3.681.256a.574.574,0,0,0-.407.195.578.578,0,0,0,.43.966c.047.007,2.306-.1,2.306-.1l.015.417-3.779.212a.605.605,0,0,0-.446.209.575.575,0,0,0,.045.818.68.68,0,0,0,.441.147c.064.007,3.7-.165,3.7-.165l.018.41-4.538.261a.671.671,0,0,0-.494.2.583.583,0,0,0,.041.82.609.609,0,0,0,.422.148c.164,0,4.61-.231,4.61-.231l.026.432-4.086.212a.569.569,0,0,0-.406.192.576.576,0,0,0-.129.541.61.61,0,0,0,.695.443l4.506-.253,0,.373-1.753.118c-.8.118-1.005.56-1.045,1.263a12.334,12.334,0,0,1,3.771-.276c.16.012.307.022.448.028a12.189,12.189,0,1,1-10.968,4.816c.084-.1.174-.214.265-.334a12.4,12.4,0,0,1,2.726-2.623,1.109,1.109,0,0,0-1.637-.062l-1.26,1.223-.268-.261,3.188-3.172a.608.608,0,0,0,.135-.809.581.581,0,0,0-.489-.267.56.56,0,0,0-.412.174l-2.894,2.9-.3-.313s3.14-3.149,3.251-3.271a.58.58,0,0,0-.405-.994.671.671,0,0,0-.481.233l-3.226,3.2-.293-.282s2.56-2.59,2.594-2.647a.681.681,0,0,0,.19-.424.583.583,0,0,0-.582-.581.626.626,0,0,0-.454.193l-2.687,2.672-.3-.291s1.588-1.612,1.614-1.654a.559.559,0,0,0,.145-.38.581.581,0,0,0-.578-.583.567.567,0,0,0-.416.175c-.038.023-2.264,2.107-2.835,2.779-.075.089-.146.171-.211.246l0,0a19.779,19.779,0,1,0,33.31,4.172\"\n                                        transform=\"translate(-234.52 41)\" fill=\"#0064b3\"></path>\n                                    <path id=\"Trazado_3\" data-name=\"Trazado 3\"\n                                        d=\"M17.712,316.414h2.506V331.64H28.1v2.281H17.712Z\"\n                                        transform=\"translate(0 -123.071)\" fill=\"#1a1818\"></path>\n                                    <path id=\"Trazado_4\" data-name=\"Trazado 4\"\n                                        d=\"M70.535,315.491a9.413,9.413,0,0,1,6.756,2.569,8.52,8.52,0,0,1,2.7,6.441,8.383,8.383,0,0,1-2.724,6.41,9.685,9.685,0,0,1-6.869,2.538,9.131,9.131,0,0,1-6.593-2.538,8.46,8.46,0,0,1-2.636-6.359,8.648,8.648,0,0,1,2.655-6.491,9.258,9.258,0,0,1,6.712-2.569m.1,2.381a6.794,6.794,0,0,0-4.939,1.88,6.4,6.4,0,0,0-1.935,4.8,6.289,6.289,0,0,0,1.941,4.712,7.2,7.2,0,0,0,9.747-.037,6.408,6.408,0,0,0,1.96-4.775,6.259,6.259,0,0,0-1.96-4.68,6.656,6.656,0,0,0-4.814-1.9\"\n                                        transform=\"translate(-31.65 -122.4)\" fill=\"#1a1818\"></path>\n                                    <path id=\"Trazado_5\" data-name=\"Trazado 5\"\n                                        d=\"M143.785,325.98l-1.9-1.158a8.651,8.651,0,0,1-2.55-2.153,4.083,4.083,0,0,1-.759-2.438,4.307,4.307,0,0,1,1.435-3.359,5.364,5.364,0,0,1,3.728-1.291,7.052,7.052,0,0,1,4.023,1.231v2.844a5.8,5.8,0,0,0-4.073-1.82,3.369,3.369,0,0,0-2.018.568,1.722,1.722,0,0,0-.789,1.454,2.235,2.235,0,0,0,.582,1.472,7.3,7.3,0,0,0,1.87,1.442l1.914,1.133q3.2,1.913,3.2,4.87a4.467,4.467,0,0,1-1.41,3.422,5.158,5.158,0,0,1-3.666,1.315,7.7,7.7,0,0,1-4.724-1.595v-3.183a5.9,5.9,0,0,0,4.7,2.573,2.955,2.955,0,0,0,1.961-.656,2.056,2.056,0,0,0,.783-1.642q0-1.6-2.306-3.032\"\n                                        transform=\"translate(-88.027 -122.466)\" fill=\"#1a1818\"></path>\n                                    <path id=\"Trazado_6\" data-name=\"Trazado 6\"\n                                        d=\"M223.663,316.414h2.506V333.92h-2.506V326.3h-9.838v7.62h-2.506V316.414h2.506v7.57h9.838Z\"\n                                        transform=\"translate(-141.011 -123.071)\" fill=\"#1a1818\"></path>\n                                    <path id=\"Trazado_7\" data-name=\"Trazado 7\"\n                                        d=\"M280.19,316.414h9.925v2.23H282.7v5.339h7.168v2.243H282.7v5.439h7.657v2.23H280.19Z\"\n                                        transform=\"translate(-191.173 -123.071)\" fill=\"#1a1818\"></path>\n                                    <path id=\"Trazado_8\" data-name=\"Trazado 8\"\n                                        d=\"M327.7,333.921V316.414h4.386a6.331,6.331,0,0,1,4.217,1.315,4.415,4.415,0,0,1,1.56,3.56,4.379,4.379,0,0,1-2.958,4.311,7.741,7.741,0,0,1,1.643,1.5,30.266,30.266,0,0,1,2.256,3.321q.915,1.492,1.466,2.243l.928,1.253h-2.983l-.764-1.153c-.025-.042-.075-.113-.149-.214l-.488-.689-.776-1.279-.839-1.367a13.715,13.715,0,0,0-1.422-1.717,5.469,5.469,0,0,0-1.167-.92,3.951,3.951,0,0,0-1.75-.281h-.653v7.619Zm3.258-15.377h-.752v5.527h.952a7.068,7.068,0,0,0,2.613-.326,2.449,2.449,0,0,0,1.1-.983,2.85,2.85,0,0,0,.4-1.5,2.676,2.676,0,0,0-.439-1.5,2.343,2.343,0,0,0-1.234-.946,8.889,8.889,0,0,0-2.638-.276\"\n                                        transform=\"translate(-225.777 -123.072)\" fill=\"#1a1818\"></path>\n                                    <path id=\"Trazado_9\" data-name=\"Trazado 9\"\n                                        d=\"M385.323,315.491a9.412,9.412,0,0,1,6.756,2.569,8.52,8.52,0,0,1,2.7,6.441,8.383,8.383,0,0,1-2.724,6.41,9.685,9.685,0,0,1-6.869,2.538,9.132,9.132,0,0,1-6.594-2.538,8.462,8.462,0,0,1-2.636-6.359,8.647,8.647,0,0,1,2.655-6.491,9.258,9.258,0,0,1,6.712-2.569m.1,2.381a6.793,6.793,0,0,0-4.939,1.88,6.4,6.4,0,0,0-1.935,4.8,6.288,6.288,0,0,0,1.941,4.712,7.2,7.2,0,0,0,9.747-.037,6.408,6.408,0,0,0,1.959-4.775,6.259,6.259,0,0,0-1.959-4.68,6.656,6.656,0,0,0-4.814-1.9\"\n                                        transform=\"translate(-260.923 -122.4)\" fill=\"#1a1818\"></path>\n                                    <path id=\"Trazado_10\" data-name=\"Trazado 10\"\n                                        d=\"M456.589,316.414h9.925v2.23H459.1v5.339h7.169v2.243H459.1v5.439h7.657v2.23H456.589Z\"\n                                        transform=\"translate(-319.651 -123.071)\" fill=\"#1a1818\"></path>\n                                    <path id=\"Trazado_11\" data-name=\"Trazado 11\"\n                                        d=\"M505.807,325.98l-1.905-1.158a8.659,8.659,0,0,1-2.549-2.153,4.085,4.085,0,0,1-.759-2.438,4.308,4.308,0,0,1,1.436-3.359,5.363,5.363,0,0,1,3.727-1.291,7.055,7.055,0,0,1,4.024,1.231v2.844a5.8,5.8,0,0,0-4.073-1.82,3.37,3.37,0,0,0-2.018.568,1.723,1.723,0,0,0-.789,1.454,2.236,2.236,0,0,0,.582,1.472,7.31,7.31,0,0,0,1.87,1.442l1.915,1.133q3.2,1.913,3.2,4.87a4.465,4.465,0,0,1-1.41,3.422,5.158,5.158,0,0,1-3.666,1.315,7.7,7.7,0,0,1-4.724-1.595v-3.183a5.9,5.9,0,0,0,4.7,2.573,2.954,2.954,0,0,0,1.961-.656,2.054,2.054,0,0,0,.783-1.642q0-1.6-2.305-3.032\"\n                                        transform=\"translate(-351.701 -122.466)\" fill=\"#1a1818\"></path>\n                                    <path id=\"Trazado_29\" data-name=\"Trazado 29\"\n                                        d=\"M539.166,374.426l-.208-.363c-.183-.322-.232-.371-.386-.426v-.009a.5.5,0,0,0,.486-.505c0-.287-.182-.5-.568-.5h-.9v1.808h.365v-.739h.069a.354.354,0,0,1,.3.089,1.647,1.647,0,0,1,.247.355l.142.3Zm-1.207-1.03v-.5h.338c.244,0,.374.089.374.246,0,.128-.082.25-.334.25Zm.407-1.25a1.371,1.371,0,1,1-1.37,1.368,1.372,1.372,0,0,1,1.37-1.368m0-.333a1.7,1.7,0,1,0,1.7,1.7,1.7,1.7,0,0,0-1.7-1.7\"\n                                        transform=\"translate(-377.968 -163.42)\" fill=\"#1a1818\" fill-rule=\"evenodd\">\n                                    </path>\n                                </g>\n                            </svg></figure>\n                    </h1>\n                </header>\n                <div class=\"content\">\n                    <div class=\"box-login\">\n                        <div class=\"logo\"><svg xmlns=\"http://www.w3.org/2000/svg\"\n                                xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512\" height=\"512\"\n                                viewBox=\"0 0 512 512\">\n                                <defs>\n                                    <clippath id=\"clip-custom_1\">\n                                        <rect width=\"512\" height=\"512\"></rect>\n                                    </clippath>\n                                </defs>\n                                <g id=\"custom_1\" data-name=\"custom – 1\" clip-path=\"url(#clip-custom_1)\">\n                                    <g id=\"Grupo_1\" data-name=\"Grupo 1\" transform=\"translate(-356 -152)\">\n                                        <g id=\"Grupo_9\" data-name=\"Grupo 9\" transform=\"translate(560.647 322.364)\">\n                                            <path id=\"Trazado_30\" data-name=\"Trazado 30\"\n                                                d=\"M253.893,208.586a17.248,17.248,0,1,0,7.488-23.222,17.243,17.243,0,0,0-7.488,23.222\"\n                                                transform=\"translate(-221.591 -160.677)\" fill=\"#fff\"></path>\n                                            <path id=\"Trazado_31\" data-name=\"Trazado 31\"\n                                                d=\"M305.933,176.569c-8.594-17.912-26.744-28.621-45.9-29.131-2.765.021-9.587.629-9.695.65a1.535,1.535,0,0,0-1.073.495,1.442,1.442,0,0,0,.111,2.079,1.563,1.563,0,0,0,1.021.374c.124.017,6.074-.243,6.074-.243l.039,1.059-9.954.537a1.619,1.619,0,0,0-1.174.532A1.424,1.424,0,0,0,245.5,155a1.836,1.836,0,0,0,1.161.372c.168.017,9.746-.42,9.746-.42l.047,1.041-11.953.663a1.8,1.8,0,0,0-1.3.513,1.443,1.443,0,0,0,.109,2.082,1.641,1.641,0,0,0,1.112.375c.432-.011,12.143-.587,12.143-.587l.069,1.1-10.761.539a1.521,1.521,0,0,0-1.068.488,1.426,1.426,0,0,0-.34,1.375,1.607,1.607,0,0,0,1.83,1.124l11.869-.642-.012.948-4.618.3c-2.1.3-2.648,1.421-2.753,3.207a33.653,33.653,0,0,1,9.934-.7c.421.031.809.055,1.18.072a32.15,32.15,0,0,1,25.854,17.821c7.424,15.5.409,33.865-15.659,41.021s-35.128.4-42.556-15.1A29.98,29.98,0,0,1,233,179.073c.221-.257.458-.544.7-.847a32.25,32.25,0,0,1,7.18-6.661c-1.441-1.12-2.668-1.476-4.311-.158l-3.318,3.106-.707-.662,8.4-8.054a1.506,1.506,0,0,0,.356-2.055,1.546,1.546,0,0,0-1.289-.679,1.5,1.5,0,0,0-1.085.441l-7.622,7.36-.8-.795s8.271-8,8.563-8.3a1.448,1.448,0,0,0,.458-1.047A1.506,1.506,0,0,0,238,159.242a1.792,1.792,0,0,0-1.266.59l-8.5,8.124-.772-.715s6.742-6.577,6.833-6.72a1.7,1.7,0,0,0,.5-1.077,1.508,1.508,0,0,0-1.533-1.476,1.679,1.679,0,0,0-1.2.49l-7.077,6.783-.786-.74s4.181-4.093,4.251-4.2a1.39,1.39,0,0,0,.382-.965,1.5,1.5,0,0,0-1.521-1.481,1.522,1.522,0,0,0-1.095.445c-.1.057-5.963,5.35-7.466,7.057-.2.226-.386.433-.557.625l-.005-.006a48.765,48.765,0,0,0-6.862,52.721c12.073,25.178,43.03,36.157,69.149,24.531s37.508-41.485,25.448-66.658\"\n                                                transform=\"translate(-206.526 -147.438)\" fill=\"#fff\"></path>\n                                        </g>\n                                        <g id=\"Grupo_1-2\" data-name=\"Grupo 1\" transform=\"translate(424.712 444.456)\">\n                                            <path id=\"Trazado_3\" data-name=\"Trazado 3\"\n                                                d=\"M17.712,316.414h6.5v39.512H44.672v5.919H17.712Z\"\n                                                transform=\"translate(-17.712 -315.763)\" fill=\"#fff\"></path>\n                                            <path id=\"Trazado_4\" data-name=\"Trazado 4\"\n                                                d=\"M85.476,315.491q10.529,0,17.533,6.667a22.111,22.111,0,0,1,7,16.715,21.754,21.754,0,0,1-7.069,16.633q-7.068,6.584-17.826,6.585a23.7,23.7,0,0,1-17.11-6.585,21.954,21.954,0,0,1-6.84-16.5,22.441,22.441,0,0,1,6.889-16.845q6.888-6.668,17.419-6.667m.26,6.178a17.629,17.629,0,0,0-12.817,4.879A16.618,16.618,0,0,0,67.9,339a16.321,16.321,0,0,0,5.036,12.227,17.4,17.4,0,0,0,12.607,4.878,17.416,17.416,0,0,0,12.687-4.975,16.63,16.63,0,0,0,5.086-12.391A16.243,16.243,0,0,0,98.228,326.6a17.272,17.272,0,0,0-12.492-4.928\"\n                                                transform=\"translate(-30.533 -315.491)\" fill=\"#fff\"></path>\n                                            <path id=\"Trazado_5\" data-name=\"Trazado 5\"\n                                                d=\"M152.1,342.565l-4.943-3a22.45,22.45,0,0,1-6.616-5.586,10.594,10.594,0,0,1-1.969-6.327,11.175,11.175,0,0,1,3.724-8.715,13.92,13.92,0,0,1,9.674-3.349,18.3,18.3,0,0,1,10.441,3.2v7.381q-4.912-4.723-10.57-4.723a8.743,8.743,0,0,0-5.237,1.475,4.469,4.469,0,0,0-2.048,3.773,5.8,5.8,0,0,0,1.511,3.82,18.945,18.945,0,0,0,4.852,3.743l4.968,2.94q8.312,4.964,8.312,12.639a11.591,11.591,0,0,1-3.658,8.879,13.385,13.385,0,0,1-9.512,3.413,19.971,19.971,0,0,1-12.259-4.138v-8.26q5.267,6.676,12.194,6.676a7.669,7.669,0,0,0,5.09-1.7,5.335,5.335,0,0,0,2.032-4.262q0-4.147-5.984-7.868\"\n                                                transform=\"translate(-53.37 -315.518)\" fill=\"#fff\"></path>\n                                            <path id=\"Trazado_6\" data-name=\"Trazado 6\"\n                                                d=\"M243.352,316.414h6.5v45.431h-6.5V342.072h-25.53v19.773h-6.5V316.414h6.5v19.643h25.53Z\"\n                                                transform=\"translate(-74.833 -315.763)\" fill=\"#fff\"></path>\n                                            <path id=\"Trazado_7\" data-name=\"Trazado 7\"\n                                                d=\"M280.19,316.414h25.755V322.2H286.693v13.855h18.6v5.82h-18.6v14.114h19.869v5.788H280.19Z\"\n                                                transform=\"translate(-95.152 -315.763)\" fill=\"#fff\"></path>\n                                            <path id=\"Trazado_8\" data-name=\"Trazado 8\"\n                                                d=\"M327.7,361.844v-45.43h11.382q6.893,0,10.943,3.414a11.457,11.457,0,0,1,4.049,9.237,11.364,11.364,0,0,1-7.676,11.187,20.094,20.094,0,0,1,4.263,3.9,78.551,78.551,0,0,1,5.853,8.618q2.374,3.871,3.8,5.82l2.407,3.253h-7.74l-1.982-2.993c-.066-.11-.2-.293-.388-.556l-1.267-1.787-2.014-3.318-2.176-3.547a35.6,35.6,0,0,0-3.691-4.455,14.194,14.194,0,0,0-3.027-2.387,10.254,10.254,0,0,0-4.541-.729h-1.694v19.772Zm8.455-39.9h-1.951v14.343h2.471q4.944,0,6.781-.846a6.356,6.356,0,0,0,2.861-2.552A7.4,7.4,0,0,0,347.345,329a6.945,6.945,0,0,0-1.139-3.884,6.079,6.079,0,0,0-3.2-2.456,23.07,23.07,0,0,0-6.845-.717\"\n                                                transform=\"translate(-109.169 -315.763)\" fill=\"#fff\"></path>\n                                            <path id=\"Trazado_9\" data-name=\"Trazado 9\"\n                                                d=\"M400.263,315.491q10.53,0,17.533,6.667a22.111,22.111,0,0,1,7,16.715,21.753,21.753,0,0,1-7.068,16.633q-7.068,6.584-17.826,6.585a23.7,23.7,0,0,1-17.111-6.585,21.959,21.959,0,0,1-6.84-16.5,22.439,22.439,0,0,1,6.89-16.845q6.888-6.668,17.418-6.667m.261,6.178a17.627,17.627,0,0,0-12.817,4.879A16.613,16.613,0,0,0,382.687,339a16.318,16.318,0,0,0,5.036,12.227,18.7,18.7,0,0,0,25.294-.1,16.63,16.63,0,0,0,5.085-12.391,16.242,16.242,0,0,0-5.085-12.146,17.272,17.272,0,0,0-12.492-4.928\"\n                                                transform=\"translate(-123.406 -315.491)\" fill=\"#fff\"></path>\n                                            <path id=\"Trazado_10\" data-name=\"Trazado 10\"\n                                                d=\"M456.589,316.414h25.757V322.2H463.092v13.855h18.6v5.82h-18.6v14.114h19.871v5.788H456.589Z\"\n                                                transform=\"translate(-147.195 -315.763)\" fill=\"#fff\"></path>\n                                            <path id=\"Trazado_11\" data-name=\"Trazado 11\"\n                                                d=\"M514.123,342.565l-4.945-3a22.471,22.471,0,0,1-6.615-5.586,10.6,10.6,0,0,1-1.97-6.327,11.179,11.179,0,0,1,3.726-8.715,13.917,13.917,0,0,1,9.673-3.349,18.307,18.307,0,0,1,10.441,3.2v7.381q-4.913-4.723-10.57-4.723a8.744,8.744,0,0,0-5.237,1.475,4.471,4.471,0,0,0-2.049,3.773,5.8,5.8,0,0,0,1.509,3.82,18.963,18.963,0,0,0,4.852,3.743l4.969,2.94q8.311,4.964,8.313,12.639a11.588,11.588,0,0,1-3.66,8.879,13.387,13.387,0,0,1-9.512,3.413,19.967,19.967,0,0,1-12.259-4.138v-8.26q5.265,6.676,12.194,6.676a7.666,7.666,0,0,0,5.089-1.7,5.33,5.33,0,0,0,2.032-4.262q0-4.147-5.982-7.868\"\n                                                transform=\"translate(-160.178 -315.518)\" fill=\"#fff\"></path>\n                                            <path id=\"Trazado_29\" data-name=\"Trazado 29\"\n                                                d=\"M543.165,378.595l-.54-.941c-.475-.837-.6-.962-1-1.105v-.023a1.291,1.291,0,0,0,1.261-1.311c0-.745-.472-1.31-1.475-1.31h-2.323v4.691h.947v-1.918h.179a.917.917,0,0,1,.77.231,4.257,4.257,0,0,1,.641.921l.369.767Zm-3.132-2.673v-1.287h.876c.632,0,.97.23.97.639,0,.333-.214.648-.867.648Zm1.057-3.245a3.559,3.559,0,1,1-3.554,3.549,3.561,3.561,0,0,1,3.554-3.549m0-.865a4.42,4.42,0,1,0,4.421,4.415,4.417,4.417,0,0,0-4.421-4.415\"\n                                                transform=\"translate(-170.818 -332.107)\" fill=\"#fff\"\n                                                fill-rule=\"evenodd\"></path>\n                                        </g>\n                                    </g>\n                                </g>\n                            </svg></div>\n                        <form class=\"lh__form\">\n                            <h1>Actualización de tramos</h1>\n                            <fieldset class=\"lh-input-text alt_cp_class lh__input-null has-tooltip\"\n                                data-original-title=\"null\"><label for=\"_0mtlrf0fj\">Rut persona</label>\n                                <input placeholder=\"12345678-9\" id=\"_0mtlrf0fj\" type=\"text\" title=\"\" data-toggle=\"tooltip\" id=\"rutPersona\"\n                                    data-placement=\"top\" class=\"lh-input-text\" [(ngModel)]=\"user\" name=\"user\"><span></span></fieldset>\n                            <fieldset class=\"alt_cp_class lh__input-null\">\n                                <label>Contraseña</label>\n                                <input placeholder=\"Su contraseña\"\n                                    id=\"pass\" type=\"password\" class=\"lh-input-text\" [(ngModel)]=\"pass\" name=\"pass\"><span></span></fieldset> <br>\n                            <br>\n                            <div class=\"row row__sb row__ai_ce\"></div>\n                            <div class=\"row row__sb row__ai_ce\"><span></span> \n                                <button (click)=\"login()\">Ingresar</button></div>\n                        </form>\n                    </div>\n                </div>\n                <footer>\n                    <p>EMAIL SOPORTE: atramos@losheroes.cl | TELEFONO SOPORTE: 600 222 77 77 | Horario atención Lu-Vi de\n                        9:00 a 18:00 horas</p>\n                </footer>\n            </div>\n        </div>\n    </div>\n    <script src=\"./login_files/app.js\"></script>\n    <div id=\"ahth4r-D-\" role=\"status\" aria-live=\"polite\" aria-atomic=\"false\"></div>\n\n\n</body>\n\n</html>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resumen-proceso/resumen-proceso.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/resumen-proceso/resumen-proceso.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsResumenProcesoResumenProcesoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<!-- saved from url=(0049)https://devatramos.losheroes.cl/#/proceso/resumen -->\n<html lang=\"es\">\n\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <link rel=\"shortcut icon\" href=\"https://devatramos.losheroes.cl/favicon.ico\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"csrf-token\" content=\"57pTGNY8Dbp2Y6Fl4BKMWXuRihuJ1wiFUcLMc1mU\">\n    <title>Actualización de Tramos</title>\n    <!-- Fonts -->\n\n    <style>\n        .overlay {\n            background-position: 50%;\n            background-repeat: no-repeat;\n            width: 100vw;\n            height: 100vh;\n            left: 0px;\n            top: 0px;\n            position: fixed;\n            background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='145.652' height='145.599' viewBox='0 0 145.652 145.599'><g id='Grupo_1' data-name='Grupo 1' transform='translate(-206.526 -147.438)'><path id='Trazado_1' data-name='Trazado 1' d='M254.273,213.6a20.691,20.691,0,1,0,8.982-27.857,20.684,20.684,0,0,0-8.982,27.857' fill='%23f16112'/><path id='Trazado_2' data-name='Trazado 2' d='M345.454,189.671A72.822,72.822,0,0,0,281.3,147.438c-3.864.031-13.4.912-13.549.943a2.113,2.113,0,0,0-1.5.717,2.127,2.127,0,0,0,1.582,3.557c.173.025,8.489-.353,8.489-.353l.055,1.536-13.912.779a2.227,2.227,0,0,0-1.641.771,2.116,2.116,0,0,0,.164,3.011,2.5,2.5,0,0,0,1.622.54c.235.024,13.621-.609,13.621-.609l.065,1.51-16.7.961a2.471,2.471,0,0,0-1.818.744,2.146,2.146,0,0,0,.152,3.019,2.241,2.241,0,0,0,1.554.544c.6-.016,16.97-.851,16.97-.851l.1,1.589-15.039.782a2.094,2.094,0,0,0-1.493.707,2.122,2.122,0,0,0-.475,1.993,2.244,2.244,0,0,0,2.557,1.629l16.588-.93-.017,1.374-6.454.435c-2.94.434-3.7,2.06-3.847,4.65a45.4,45.4,0,0,1,13.883-1.016c.588.045,1.131.08,1.649.1A44.869,44.869,0,1,1,243.525,193.3c.309-.373.64-.789.977-1.228a45.654,45.654,0,0,1,10.035-9.657c-2.014-1.624-3.729-2.14-6.025-.229l-4.637,4.5-.988-.959,11.737-11.676a2.237,2.237,0,0,0,.5-2.979,2.14,2.14,0,0,0-1.8-.984,2.062,2.062,0,0,0-1.517.639L241.152,181.4l-1.112-1.152s11.559-11.593,11.968-12.04a2.135,2.135,0,0,0-1.491-3.659,2.469,2.469,0,0,0-1.769.856l-11.876,11.778-1.079-1.037s9.423-9.535,9.549-9.743a2.509,2.509,0,0,0,.7-1.562,2.145,2.145,0,0,0-2.142-2.14,2.3,2.3,0,0,0-1.671.71l-9.89,9.834-1.1-1.073s5.844-5.934,5.941-6.088a2.056,2.056,0,0,0,.534-1.4,2.14,2.14,0,0,0-2.126-2.147,2.088,2.088,0,0,0-1.53.645c-.141.083-8.334,7.756-10.435,10.231-.275.327-.539.628-.778.906l-.007-.008a72.809,72.809,0,1,0,122.616,15.357' fill='%230064b3'/></g></svg>\");\n            background-color: rgba(255, 255, 255, .1);\n            z-index: 100;\n            transform: scale(1);\n            animation: pulse 1400ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);\n            opacity: 1;\n        }\n\n        .fade-enter-active {\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n        }\n\n        .fade-leave-active {\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n            will-change: transform, opacity;\n            transform: scale(1);\n        }\n\n        .fade-enter {\n            opacity: 0;\n            transform: scale(0);\n        }\n\n        .fade-leave-to {\n            transform: scale(0);\n            opacity: 0;\n        }\n\n\n        .lightfade-enter-active {\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n        }\n\n        .lightfade-leave-active {\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n            will-change: transform, opacity;\n            transform: scale(1);\n        }\n\n        .lightfade-enter {\n            opacity: 0;\n            transform: scale(0.8);\n        }\n\n        .lightfade-leave-to {\n            transform: scale(0.8);\n            opacity: 0;\n        }\n\n        .show-enter-active,\n        .show-leave-active {\n            transition: opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1);\n        }\n\n        .show-enter,\n        .show-leave-to\n\n        /* .fade-leave-active below version 2.1.8 */\n            {\n            opacity: 0;\n        }\n\n\n        .slide-fade-enter-active {\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n        }\n\n        .slide-fade-leave-active {\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n        }\n\n        .slide-fade-enter {\n            transform: scale(.99);\n            opacity: 0;\n            will-change: transform, opacity;\n            backface-visibility: hidden;\n        }\n\n        .slide-fade-leave-to {\n            transform: scale(.99);\n            opacity: 0;\n            will-change: transform, opacity;\n            backface-visibility: hidden;\n        }\n\n        .fade-enter-active {\n            opacity: 1;\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n        }\n\n        .fade-leave-active {\n            opacity: 1;\n            transition: all 385ms cubic-bezier(0.165, 0.84, 0.44, 1);\n        }\n\n        .fade-enter {\n            opacity: 0;\n            will-change: opacity;\n            backface-visibility: hidden;\n        }\n\n        .fade-leave-to {\n            opacity: 0;\n            will-change: opacity;\n            backface-visibility: hidden;\n        }\n\n\n        .gfade-enter-active,\n        .gfade-leave-active {\n            transition: all .2s;\n        }\n\n        .gfade-enter,\n        .gfade-leave-to {\n            opacity: 0;\n        }\n\n        .gfade-enter-active {\n            transition-delay: .2s;\n        }\n\n        .list-item {\n            display: inline-block;\n            margin-right: 10px;\n        }\n\n        .list-enter-active,\n        .list-leave-active {\n            transition: all 1s;\n        }\n\n        .list-enter,\n        .list-leave-to\n\n        /* .list-leave-active below version 2.1.8 */\n            {\n            opacity: 0;\n            transform: translateY(30px);\n        }\n\n        .buttonSelectEmpresa svg path {\n            fill: #BCBCBD !important;\n        }\n\n        .loginnoshow {\n            opacity: 1 !important;\n        }\n    </style>\n    <script type=\"text/javascript\" async=\"\" src=\"./analytics.js\"></script>\n    <script> window.pathurl = \"https://devatramos.losheroes.cl\" </script>\n    <!-- Global site tag (gtag.js) - Google Analytics -->\n    <script async=\"\" src=\"./js\"></script>\n    <script>\n        window.dataLayer = window.dataLayer || [];\n        function gtag() { dataLayer.push(arguments); }\n        gtag('js', new Date());\n\n        gtag('config', 'UA-143162283-1');\n    </script>\n\n    <style type=\"text/css\">\n        .toasted {\n            padding: 0 20px\n        }\n\n        .toasted.rounded {\n            border-radius: 24px\n        }\n\n        .toasted .primary,\n        .toasted.toasted-primary {\n            border-radius: 2px;\n            min-height: 38px;\n            line-height: 1.1em;\n            background-color: #353535;\n            padding: 6px 20px;\n            font-size: 15px;\n            font-weight: 300;\n            color: #fff;\n            box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)\n        }\n\n        .toasted .primary.success,\n        .toasted.toasted-primary.success {\n            background: #4caf50\n        }\n\n        .toasted .primary.error,\n        .toasted.toasted-primary.error {\n            background: #f44336\n        }\n\n        .toasted .primary.info,\n        .toasted.toasted-primary.info {\n            background: #3f51b5\n        }\n\n        .toasted .primary .action,\n        .toasted.toasted-primary .action {\n            color: #a1c2fa\n        }\n\n        .toasted.bubble {\n            border-radius: 30px;\n            min-height: 38px;\n            line-height: 1.1em;\n            background-color: #ff7043;\n            padding: 0 20px;\n            font-size: 15px;\n            font-weight: 300;\n            color: #fff;\n            box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)\n        }\n\n        .toasted.bubble.success {\n            background: #4caf50\n        }\n\n        .toasted.bubble.error {\n            background: #f44336\n        }\n\n        .toasted.bubble.info {\n            background: #3f51b5\n        }\n\n        .toasted.bubble .action {\n            color: #8e2b0c\n        }\n\n        .toasted.outline {\n            border-radius: 30px;\n            min-height: 38px;\n            line-height: 1.1em;\n            background-color: #fff;\n            border: 1px solid #676767;\n            padding: 0 20px;\n            font-size: 15px;\n            color: #676767;\n            box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);\n            font-weight: 700\n        }\n\n        .toasted.outline.success {\n            color: #4caf50;\n            border-color: #4caf50\n        }\n\n        .toasted.outline.error {\n            color: #f44336;\n            border-color: #f44336\n        }\n\n        .toasted.outline.info {\n            color: #3f51b5;\n            border-color: #3f51b5\n        }\n\n        .toasted.outline .action {\n            color: #607d8b\n        }\n\n        .toasted-container {\n            position: fixed;\n            z-index: 10000\n        }\n\n        .toasted-container,\n        .toasted-container.full-width {\n            display: -ms-flexbox;\n            display: flex;\n            -ms-flex-direction: column;\n            flex-direction: column\n        }\n\n        .toasted-container.full-width {\n            max-width: 86%;\n            width: 100%\n        }\n\n        .toasted-container.full-width.fit-to-screen {\n            min-width: 100%\n        }\n\n        .toasted-container.full-width.fit-to-screen .toasted:first-child {\n            margin-top: 0\n        }\n\n        .toasted-container.full-width.fit-to-screen.top-right {\n            top: 0;\n            right: 0\n        }\n\n        .toasted-container.full-width.fit-to-screen.top-left {\n            top: 0;\n            left: 0\n        }\n\n        .toasted-container.full-width.fit-to-screen.top-center {\n            top: 0;\n            left: 0;\n            -webkit-transform: translateX(0);\n            transform: translateX(0)\n        }\n\n        .toasted-container.full-width.fit-to-screen.bottom-right {\n            right: 0;\n            bottom: 0\n        }\n\n        .toasted-container.full-width.fit-to-screen.bottom-left {\n            left: 0;\n            bottom: 0\n        }\n\n        .toasted-container.full-width.fit-to-screen.bottom-center {\n            left: 0;\n            bottom: 0;\n            -webkit-transform: translateX(0);\n            transform: translateX(0)\n        }\n\n        .toasted-container.top-right {\n            top: 10%;\n            right: 7%\n        }\n\n        .toasted-container.top-left {\n            top: 10%;\n            left: 7%\n        }\n\n        .toasted-container.top-center {\n            top: 10%;\n            left: 50%;\n            -webkit-transform: translateX(-50%);\n            transform: translateX(-50%)\n        }\n\n        .toasted-container.bottom-right {\n            right: 5%;\n            bottom: 7%\n        }\n\n        .toasted-container.bottom-left {\n            left: 5%;\n            bottom: 7%\n        }\n\n        .toasted-container.bottom-center {\n            left: 50%;\n            -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n            bottom: 7%\n        }\n\n        .toasted-container.bottom-left .toasted,\n        .toasted-container.top-left .toasted {\n            float: left\n        }\n\n        .toasted-container.bottom-right .toasted,\n        .toasted-container.top-right .toasted {\n            float: right\n        }\n\n        .toasted-container .toasted {\n            top: 35px;\n            width: auto;\n            clear: both;\n            margin-top: 10px;\n            position: relative;\n            max-width: 100%;\n            height: auto;\n            word-break: normal;\n            display: -ms-flexbox;\n            display: flex;\n            -ms-flex-align: center;\n            align-items: center;\n            -ms-flex-pack: justify;\n            justify-content: space-between;\n            box-sizing: inherit\n        }\n\n        .toasted-container .toasted .fa,\n        .toasted-container .toasted .fab,\n        .toasted-container .toasted .far,\n        .toasted-container .toasted .fas,\n        .toasted-container .toasted .material-icons,\n        .toasted-container .toasted .mdi {\n            margin-right: .5rem;\n            margin-left: -.4rem\n        }\n\n        .toasted-container .toasted .fa.after,\n        .toasted-container .toasted .fab.after,\n        .toasted-container .toasted .far.after,\n        .toasted-container .toasted .fas.after,\n        .toasted-container .toasted .material-icons.after,\n        .toasted-container .toasted .mdi.after {\n            margin-left: .5rem;\n            margin-right: -.4rem\n        }\n\n        .toasted-container .toasted .action {\n            text-decoration: none;\n            font-size: .8rem;\n            padding: 8px;\n            margin: 5px -7px 5px 7px;\n            border-radius: 3px;\n            text-transform: uppercase;\n            letter-spacing: .03em;\n            font-weight: 600;\n            cursor: pointer\n        }\n\n        .toasted-container .toasted .action.icon {\n            padding: 4px;\n            display: -ms-flexbox;\n            display: flex;\n            -ms-flex-align: center;\n            align-items: center;\n            -ms-flex-pack: center;\n            justify-content: center\n        }\n\n        .toasted-container .toasted .action.icon .fa,\n        .toasted-container .toasted .action.icon .material-icons,\n        .toasted-container .toasted .action.icon .mdi {\n            margin-right: 0;\n            margin-left: 4px\n        }\n\n        .toasted-container .toasted .action.icon:hover {\n            text-decoration: none\n        }\n\n        .toasted-container .toasted .action:hover {\n            text-decoration: underline\n        }\n\n        @media only screen and (max-width:600px) {\n            .toasted-container {\n                min-width: 100%\n            }\n\n            .toasted-container .toasted:first-child {\n                margin-top: 0\n            }\n\n            .toasted-container.top-right {\n                top: 0;\n                right: 0\n            }\n\n            .toasted-container.top-left {\n                top: 0;\n                left: 0\n            }\n\n            .toasted-container.top-center {\n                top: 0;\n                left: 0;\n                -webkit-transform: translateX(0);\n                transform: translateX(0)\n            }\n\n            .toasted-container.bottom-right {\n                right: 0;\n                bottom: 0\n            }\n\n            .toasted-container.bottom-left {\n                left: 0;\n                bottom: 0\n            }\n\n            .toasted-container.bottom-center {\n                left: 0;\n                bottom: 0;\n                -webkit-transform: translateX(0);\n                transform: translateX(0)\n            }\n\n            .toasted-container.bottom-center,\n            .toasted-container.top-center {\n                -ms-flex-align: stretch !important;\n                align-items: stretch !important\n            }\n\n            .toasted-container.bottom-left .toasted,\n            .toasted-container.bottom-right .toasted,\n            .toasted-container.top-left .toasted,\n            .toasted-container.top-right .toasted {\n                float: none\n            }\n\n            .toasted-container .toasted {\n                border-radius: 0\n            }\n        }\n    </style>\n    <style type=\"text/css\">\n        .resize-observer[data-v-b329ee4c] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            z-index: -1;\n            width: 100%;\n            height: 100%;\n            border: none;\n            background-color: transparent;\n            pointer-events: none;\n            display: block;\n            overflow: hidden;\n            opacity: 0\n        }\n\n        .resize-observer[data-v-b329ee4c] object {\n            display: block;\n            position: absolute;\n            top: 0;\n            left: 0;\n            height: 100%;\n            width: 100%;\n            overflow: hidden;\n            pointer-events: none;\n            z-index: -1\n        }\n    </style>\n    <style type=\"text/css\">\n        .company-selector {\n            position: fixed;\n            top: 0px;\n            left: 0px;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n            -ms-flex-pack: center;\n            justify-content: center;\n            -webkit-box-align: center;\n            -ms-flex-align: center;\n            align-items: center;\n            width: 100vw;\n            height: 100vh;\n            z-index: 7000;\n            background: rgba(255, 255, 255, 0.8);\n        }\n\n        .company-selector .wrapper-company-selector {\n            width: 100vw;\n            height: 100vh;\n            max-width: 500px;\n            max-height: 200px;\n            border-radius: 8px;\n            -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n            background-color: #fff;\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            padding: 0 20px;\n            -webkit-transition: -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n            transition: -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n            transition: transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n            transition: transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55), -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n        }\n\n        .company-selector .wrapper-company-selector.expand {\n            max-height: 500px;\n        }\n\n        .company-selector .wrapper-company-selector h1 {\n            margin-top: 15px;\n            margin-bottom: 10px;\n        }\n\n        .company-selector .wrapper-company-selector h3 {\n            margin-top: 0px;\n        }\n\n        .company-selector .wrapper-company-selector .controls {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: end;\n            -ms-flex-pack: end;\n            justify-content: flex-end;\n            -webkit-box-align: end;\n            -ms-flex-align: end;\n            align-items: flex-end;\n        }\n\n        .company-selector .wrapper-company-selector .controls .alt_cp_class {\n            padding-bottom: 0px;\n            padding-left: 0px;\n            border: none;\n            max-height: 52px;\n        }\n\n        .company-selector .wrapper-company-selector .controls .alt_cp_class label {\n            font-size: 12px;\n            color: #707070;\n            font-family: 'Open Sans', sans-serif;\n            font-weight: 600;\n            padding-bottom: 4px;\n            display: inline-block;\n        }\n\n        .company-selector .wrapper-company-selector .controls .alt_cp_class input {\n            font-size: 16px;\n            font-weight: 700;\n            border: none;\n            width: 100%;\n            height: 30px;\n            border-bottom: 1px solid rgba(188, 188, 188, 0.45);\n            padding: 0 5px;\n        }\n\n        .company-selector .wrapper-company-selector .controls .alt_cp_class span {\n            font-family: 'Open Sans', sans-serif;\n            display: inline-block;\n            vertical-align: top;\n            padding: 2px 4px;\n            font-size: 12px;\n            font-style: italic;\n            min-height: 21px;\n            color: #F98A31;\n        }\n\n        .company-selector .wrapper-company-selector .companys-finded {\n            height: 280px;\n            overflow-y: auto;\n            margin-top: 20px;\n        }\n\n        .company-selector .wrapper-company-selector .companys-finded ul {\n            list-style: none;\n            padding: 0;\n        }\n\n        .company-selector .wrapper-company-selector .companys-finded ul li {\n            cursor: pointer;\n            font-family: 'Open Sans', sans-serif;\n            font-size: 11px;\n            -webkit-transition: -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n            transition: -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n            transition: transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n            transition: transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55), -webkit-transform 350ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n            padding-bottom: 5px;\n        }\n\n        .company-selector .wrapper-company-selector .companys-finded ul li p {\n            font-size: 12px;\n            margin: 0;\n            width: 100%;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            padding: 0px 10px;\n            font-weight: 600;\n        }\n\n        .company-selector .wrapper-company-selector .companys-finded ul li span {\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            padding: 0px 10px;\n        }\n\n        .company-selector .wrapper-company-selector .companys-finded ul li:hover {\n            background-color: #cfd8dc;\n        }\n\n        .company-selector .wrapper-company-selector .companys-finded ul li+li {\n            margin-top: 5px;\n        }\n    </style>\n    <style type=\"text/css\">\n        .fa-icon {\n            display: inline-block;\n            fill: currentColor;\n        }\n\n        .fa-flip-horizontal {\n            -webkit-transform: scale(-1, 1);\n            transform: scale(-1, 1);\n        }\n\n        .fa-flip-vertical {\n            -webkit-transform: scale(1, -1);\n            transform: scale(1, -1);\n        }\n\n        .fa-spin {\n            -webkit-animation: fa-spin 1s 0s infinite linear;\n            animation: fa-spin 1s 0s infinite linear;\n        }\n\n        .fa-inverse {\n            color: #fff;\n        }\n\n        .fa-pulse {\n            -webkit-animation: fa-spin 1s infinite steps(8);\n            animation: fa-spin 1s infinite steps(8);\n        }\n\n        @-webkit-keyframes fa-spin {\n            0% {\n                -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n            }\n\n            100% {\n                -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n            }\n        }\n\n        @keyframes fa-spin {\n            0% {\n                -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n            }\n\n            100% {\n                -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n            }\n        }\n    </style>\n    <style type=\"text/css\">\n        .vue-tooltip-theme {\n            z-index: 4000;\n        }\n\n        .vue-tooltip-theme .tooltip-inner {\n            background-color: #1F78B4;\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            padding: 5px 8px;\n            margin-top: -10px;\n            color: white;\n            border-radius: 4px;\n            font-family: 'Open Sans', sans-serif;\n            font-weight: 400;\n            font-size: 14px;\n        }\n    </style>\n    <style type=\"text/css\">\n        .dots {\n            width: 3.5em;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n            -webkit-box-align: center;\n            -ms-flex-align: center;\n            align-items: center;\n            -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n            justify-content: space-between;\n        }\n\n        .dots div {\n            width: 0.8em;\n            height: 0.8em;\n            border-radius: 50%;\n            background-color: #F98A31;\n            -webkit-animation: fade 0.8s ease-in-out alternate infinite;\n            animation: fade 0.8s ease-in-out alternate infinite;\n        }\n\n        .dots div:nth-of-type(1) {\n            -webkit-animation-delay: -0.4s;\n            animation-delay: -0.4s;\n        }\n\n        .dots div:nth-of-type(2) {\n            -webkit-animation-delay: -0.2s;\n            animation-delay: -0.2s;\n        }\n\n        @-webkit-keyframes fade {\n            from {\n                opacity: 1;\n            }\n\n            to {\n                opacity: 0;\n            }\n        }\n\n        @keyframes fade {\n            from {\n                opacity: 1;\n            }\n\n            to {\n                opacity: 0;\n            }\n        }\n    </style>\n    <style type=\"text/css\">\n        .actualizardatos .lhReadonly input {\n            border: none !important;\n            outline: none !important;\n        }\n    </style>\n    <style type=\"text/css\">\n        [v-cloak] .v-cloak--hidden {\n            display: none !important;\n        }\n\n        .secondary_icon svg path {\n            fill: #11405C !important;\n        }\n\n        .legend_p {\n            -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n            justify-content: space-between;\n            -webkit-box-align: center;\n            -ms-flex-align: center;\n            align-items: center;\n            text-align: center;\n            font-family: 'Open Sans', sans-serif;\n            font-weight: 400;\n        }\n\n        .legend_container {\n            width: 300px;\n            height: 300px;\n            position: relative;\n            margin-right: 40px;\n        }\n\n        .legend_container .over_chart {\n            position: absolute;\n            left: 0px;\n            top: 0px;\n            width: 100%;\n            height: 100%;\n            z-index: 10;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n            flex-direction: column;\n            -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n            justify-content: space-between;\n            -webkit-box-align: center;\n            -ms-flex-align: center;\n            align-items: center;\n            text-align: center;\n            font-family: 'Open Sans', sans-serif;\n            font-weight: 400;\n            color: #BCBCBD;\n            font-size: 43px;\n            margin-top: -5px;\n        }\n\n        .legend_container .over_chart h3 {\n            text-indent: 30px;\n        }\n\n        .stats_container {\n            width: 280px;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n            flex-direction: column;\n            -webkit-box-align: stretch;\n            -ms-flex-align: stretch;\n            align-items: stretch;\n            -webkit-box-pack: center;\n            -ms-flex-pack: center;\n            justify-content: center;\n            margin-top: 46px;\n        }\n\n        .stats_container .item-stat {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-align: center;\n            -ms-flex-align: center;\n            align-items: center;\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            padding: 10px 0px;\n            padding-left: 18px;\n            min-height: 45px;\n            margin-bottom: 2px;\n        }\n\n        .stats_container .item-stat span {\n            font-family: 'Open Sans', sans-serif;\n            font-weight: 700;\n            font-size: 32px;\n            min-width: 120px;\n        }\n\n        .stats_container .item-stat p {\n            font-family: 'Open Sans', sans-serif;\n            font-weight: 400;\n            color: inherit;\n            margin: 0;\n        }\n\n        .stats_container .item-stat:nth-child(1) {\n            color: black;\n            background-color: #A6CEE3;\n        }\n\n        .stats_container .item-stat:nth-child(2) {\n            color: white;\n            background-color: #1F78B4;\n        }\n\n        .stats_container .item-stat:nth-child(3) {\n            color: white;\n            background-color: #1A237E;\n        }\n\n        .last_change_container {\n            min-width: 452px;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n            flex-direction: column;\n            -webkit-box-pack: stretch;\n            -ms-flex-pack: stretch;\n            justify-content: stretch;\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            padding-left: 30px;\n            padding-right: 20px;\n        }\n\n        .last_change_container h3>span {\n            color: #D5040C;\n        }\n\n        .last_change_container ul {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            list-style: none;\n            margin: 0;\n            padding: 0;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n            flex-direction: column;\n            -webkit-box-pack: stretch;\n            -ms-flex-pack: stretch;\n            justify-content: stretch;\n            margin-top: 26px;\n        }\n\n        .last_change_container ul li {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n            flex-direction: row;\n            -webkit-box-pack: stretch;\n            -ms-flex-pack: stretch;\n            justify-content: stretch;\n            -webkit-box-align: center;\n            -ms-flex-align: center;\n            align-items: center;\n            font-family: 'Open Sans', sans-serif;\n            font-weight: 500;\n            font-size: 16px;\n            color: #222222;\n            margin-bottom: 25px;\n        }\n\n        .last_change_container ul li svg {\n            display: inline-block;\n            margin: 5px;\n            margin-right: 20px;\n        }\n\n        .last_change_container ul li svg path {\n            fill: #BCBCBD !important;\n        }\n\n        .last_change_container ul li span {\n            white-space: nowrap;\n            margin: 0;\n        }\n\n        .last_change_container ul li p {\n            margin: 0px;\n            font-weight: 300;\n        }\n\n        .last_change_container ul li p a {\n            color: inherit;\n        }\n\n        .content_result_upload {\n            border: 1px solid #689F38;\n            border-radius: 8px;\n            width: 90%;\n            height: 0px;\n            margin-top: -20px;\n            -webkit-transition: all 365ms cubic-bezier(0.215, 0.61, 0.355, 1);\n            transition: all 365ms cubic-bezier(0.215, 0.61, 0.355, 1);\n            position: relative;\n            overflow: hidden;\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            padding: 5px 20px;\n            opacity: 0;\n            max-width: 990px;\n            font-family: 'Open Sans', sans-serif;\n        }\n\n        .content_result_upload.ctu_open {\n            height: 135px;\n            opacity: 1;\n        }\n\n        .content_result_upload .col-1 {\n            max-width: 25%;\n        }\n\n        .content_result_upload .col-2 {\n            max-width: 50%;\n        }\n\n        .layout_resultado {\n            display: grid !important;\n            grid-template-columns: 1fr 1.2fr 2fr;\n        }\n\n        .pre_message {\n            margin-top: 0px;\n            -webkit-transition: all 365ms cubic-bezier(0.215, 0.61, 0.355, 1);\n            transition: all 365ms cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n\n        .pre_message.move-message {\n            margin-top: -133px;\n        }\n\n        .post_message h1 {\n            margin: 0;\n            margin-bottom: -10px;\n        }\n\n        .post_message p {\n            margin-top: 0px;\n        }\n\n        .overlay_upload_result_component {\n            background-color: rgba(255, 255, 255, 0.8);\n            display: block;\n            position: absolute;\n            left: 247px;\n            right: 0px;\n            top: 100px;\n            bottom: 0px;\n            z-index: 200;\n        }\n\n        .pos_result_component {\n            margin-top: -180px;\n        }\n\n        .upload_result_component {\n            margin-bottom: 140px;\n            position: absolute;\n            left: 250px;\n            top: 50%;\n            right: 0px;\n            width: auto !important;\n            /*background: white;*/\n            z-index: 200;\n        }\n\n        .upload_result_component .content_result_upload {\n            background-color: white;\n        }\n\n        .vue-tooltip-theme {\n            z-index: 4000;\n        }\n\n        .vue-tooltip-theme .tooltip-inner {\n            background-color: #1F78B4;\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            padding: 5px 8px;\n            margin-top: -20px;\n            color: white;\n            border-radius: 4px;\n            font-family: 'Open Sans', sans-serif;\n            font-weight: 400;\n            font-size: 14px;\n        }\n\n        .items-inicio {\n            position: absolute;\n            left: 251px;\n            top: 104px;\n            width: calc(100% - 257px);\n            height: calc(100% - 90px);\n            z-index: 100;\n            background-color: #ffffff;\n        }\n    </style>\n    <style type=\"text/css\">\n        span {\n            color: inherit;\n            font: inherit;\n            font-size: inherit;\n            font-family: inherit;\n            font-style: inherit;\n            display: inline-block;\n        }\n    </style>\n    <style type=\"text/css\">\n        /* Chart.js */\n        /*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n        @keyframes chartjs-render-animation {\n            from {\n                opacity: 0.99;\n            }\n\n            to {\n                opacity: 1;\n            }\n        }\n\n        .chartjs-render-monitor {\n            animation: chartjs-render-animation 0.001s;\n        }\n\n        /*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n        .chartjs-size-monitor,\n        .chartjs-size-monitor-expand,\n        .chartjs-size-monitor-shrink {\n            position: absolute;\n            direction: ltr;\n            left: 0;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            overflow: hidden;\n            pointer-events: none;\n            visibility: hidden;\n            z-index: -1;\n        }\n\n        .chartjs-size-monitor-expand>div {\n            position: absolute;\n            width: 1000000px;\n            height: 1000000px;\n            left: 0;\n            top: 0;\n        }\n\n        .chartjs-size-monitor-shrink>div {\n            position: absolute;\n            width: 200%;\n            height: 200%;\n            left: 0;\n            top: 0;\n        }\n    </style>\n    <style type=\"text/css\">\n        .column {\n            float: left;\n            width: 50%;\n            max-width: 50% !important;\n            text-align: justify;\n            text-justify: inter-word;\n        }\n\n        .column ul {\n            padding-right: 20px;\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n        }\n\n        .column h3 {\n            font-size: 17px;\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            padding-right: 10px;\n        }\n\n        .row:after {\n            content: \"\";\n            display: table;\n            clear: both;\n        }\n    </style>\n    <style type=\"text/css\">\n        .column {\n            float: left;\n            width: 50%;\n            max-width: 50% !important;\n            text-align: justify;\n            text-justify: inter-word;\n        }\n\n        .column p a {\n            color: #030303;\n        }\n\n        .column ul li a {\n            color: #030303;\n        }\n\n        .row:after {\n            content: \"\";\n            display: table;\n            clear: both;\n        }\n    </style>\n    <style type=\"text/css\">\n        [v-cloak] .v-cloak--hidden {\n            display: none !important;\n        }\n\n        .search_bar {\n            margin-top: 20px;\n        }\n\n        .search {\n            position: relative;\n        }\n\n        .search .icon-enter {\n            position: absolute;\n            right: 50px;\n            top: 11px;\n            -webkit-animation: press 1s infinite;\n            animation: press 1s infinite;\n            opacity: 0;\n            -webkit-transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);\n            transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n\n        .search .icon-enter.press {\n            opacity: 1;\n            right: 60px;\n        }\n\n        .search fieldset {\n            width: 450px;\n            border: none;\n            height: auto;\n            padding: 5px;\n            padding-right: 0px;\n            margin-right: 22px;\n            position: relative;\n        }\n\n        .search fieldset input {\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            font-family: 'Open Sans', sans-serif;\n            font-weight: 600;\n            font-size: 14px;\n            border: 1px solid #BCBCBD;\n            border-radius: 4px;\n            padding: 4px 8px;\n            width: 450px;\n        }\n\n        .search fieldset:after {\n            content: \"\";\n            display: block;\n            position: absolute;\n            background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='%23BCBCBD' d='M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z'/></svg>\");\n            background-size: cover;\n            background-repeat: no-repeat;\n            width: 20px;\n            height: 20px;\n            right: 6px;\n            top: 9px;\n        }\n\n        .list-history {\n            width: 100%;\n        }\n\n        .list-history header {\n            font-family: 'Open Sans', sans-serif;\n            font-weight: 500;\n            color: black;\n            font-size: 18px;\n            background-color: white;\n            position: -webkit-sticky;\n            position: sticky;\n            top: -15px;\n            padding: 10px 0;\n            display: grid;\n            grid-template-columns: 1.05fr 2.2fr 0.7fr 1fr 1fr;\n            grid-gap: 10px;\n        }\n\n        .list-history header span {\n            display: inline-block;\n            text-align: left;\n        }\n\n        .list-history ul {\n            margin: 0;\n            padding: 0;\n            list-style: none;\n        }\n\n        .list-history ul li {\n            font-family: 'Open Sans', sans-serif;\n            font-weight: 400;\n            color: #11405C;\n            font-size: 16px;\n            display: grid;\n            grid-template-columns: 1.05fr 2.2fr 0.7fr 1fr 1fr;\n            grid-gap: 10px;\n            padding: 0 0 10px 0;\n            margin: 10px 0px 0px 0px;\n            border-bottom: 1px solid #11405C;\n        }\n\n        .list-history ul li span a {\n            text-decoration: none;\n            display: inline-block;\n            font-size: 16px;\n            line-height: 16px;\n            color: #11405C;\n        }\n\n        .list-history ul li span a svg {\n            margin-top: -2px;\n            margin-left: 4px;\n            display: inline-block;\n            vertical-align: middle;\n        }\n\n        .list-history p {\n            display: inline-block;\n            vertical-align: top;\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            padding: 20px;\n            text-align: center;\n            width: 100%;\n        }\n    </style>\n</head>\n\n<body>\n    <div id=\"app\">\n        <!---->\n        <div class=\"general_message info\" style=\"display: none;\">\n            <div class=\"wrapper_general_message\">\n                <div class=\"icon\">\n                    <svg aria-hidden=\"true\" width=\"42\" height=\"48\" viewBox=\"0 0 448 512\" focusable=\"false\"\n                        class=\"fa-icon\" style=\"font-size: 3em;\">\n                        <path style=\"fill:currentColor\"\n                            d=\"M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm16 400c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352c8.822 0 16 7.178 16 16v352zm-228-80h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z\">\n                        </path>\n                    </svg>\n                </div>\n                <div class=\"general_message_text\">\n                    <h2>Información</h2>\n                    <p>.</p>\n                </div>\n                <div class=\"close_general_message\">\n                    <button class=\"no-minw ghost\">\n                        <svg aria-hidden=\"true\" width=\"12\" height=\"19.2\" viewBox=\"0 0 320 512\" focusable=\"false\"\n                            class=\"fa-icon\" style=\"font-size: 1.2em;\">\n                            <path style=\"fill:#FFF\"\n                                d=\"M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z\">\n                            </path>\n                        </svg>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"overlay\" style=\"display: none;\"></div>\n        <div class=\"main-container\">\n            <header class=\"loginnoshow\">\n                <div class=\"wrapper-main-header\">\n                    <h1><a href=\"https://devatramos.losheroes.cl/\">\n                            <figure><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"190.096\" height=\"39.554\"\n                                    viewBox=\"0 0 190.096 39.554\">\n                                    <g id=\"Grupo_7\" data-name=\"Grupo 7\" transform=\"translate(27.994 -188.438)\">\n                                        <path id=\"Trazado_1\" data-name=\"Trazado 1\"\n                                            d=\"M252.609,191.656a5.621,5.621,0,1,0,2.44-7.568,5.619,5.619,0,0,0-2.44,7.568\"\n                                            transform=\"translate(-267.632 14.755)\" fill=\"#f16112\"></path>\n                                        <path id=\"Trazado_2\" data-name=\"Trazado 2\"\n                                            d=\"M244.267,158.911a19.783,19.783,0,0,0-17.428-11.473c-1.05.008-3.64.248-3.681.256a.574.574,0,0,0-.407.195.578.578,0,0,0,.43.966c.047.007,2.306-.1,2.306-.1l.015.417-3.779.212a.605.605,0,0,0-.446.209.575.575,0,0,0,.045.818.68.68,0,0,0,.441.147c.064.007,3.7-.165,3.7-.165l.018.41-4.538.261a.671.671,0,0,0-.494.2.583.583,0,0,0,.041.82.609.609,0,0,0,.422.148c.164,0,4.61-.231,4.61-.231l.026.432-4.086.212a.569.569,0,0,0-.406.192.576.576,0,0,0-.129.541.61.61,0,0,0,.695.443l4.506-.253,0,.373-1.753.118c-.8.118-1.005.56-1.045,1.263a12.334,12.334,0,0,1,3.771-.276c.16.012.307.022.448.028a12.189,12.189,0,1,1-10.968,4.816c.084-.1.174-.214.265-.334a12.4,12.4,0,0,1,2.726-2.623,1.109,1.109,0,0,0-1.637-.062l-1.26,1.223-.268-.261,3.188-3.172a.608.608,0,0,0,.135-.809.581.581,0,0,0-.489-.267.56.56,0,0,0-.412.174l-2.894,2.9-.3-.313s3.14-3.149,3.251-3.271a.58.58,0,0,0-.405-.994.671.671,0,0,0-.481.233l-3.226,3.2-.293-.282s2.56-2.59,2.594-2.647a.681.681,0,0,0,.19-.424.583.583,0,0,0-.582-.581.626.626,0,0,0-.454.193l-2.687,2.672-.3-.291s1.588-1.612,1.614-1.654a.559.559,0,0,0,.145-.38.581.581,0,0,0-.578-.583.567.567,0,0,0-.416.175c-.038.023-2.264,2.107-2.835,2.779-.075.089-.146.171-.211.246l0,0a19.779,19.779,0,1,0,33.31,4.172\"\n                                            transform=\"translate(-234.52 41)\" fill=\"#0064b3\"></path>\n                                        <path id=\"Trazado_3\" data-name=\"Trazado 3\"\n                                            d=\"M17.712,316.414h2.506V331.64H28.1v2.281H17.712Z\"\n                                            transform=\"translate(0 -123.071)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_4\" data-name=\"Trazado 4\"\n                                            d=\"M70.535,315.491a9.413,9.413,0,0,1,6.756,2.569,8.52,8.52,0,0,1,2.7,6.441,8.383,8.383,0,0,1-2.724,6.41,9.685,9.685,0,0,1-6.869,2.538,9.131,9.131,0,0,1-6.593-2.538,8.46,8.46,0,0,1-2.636-6.359,8.648,8.648,0,0,1,2.655-6.491,9.258,9.258,0,0,1,6.712-2.569m.1,2.381a6.794,6.794,0,0,0-4.939,1.88,6.4,6.4,0,0,0-1.935,4.8,6.289,6.289,0,0,0,1.941,4.712,7.2,7.2,0,0,0,9.747-.037,6.408,6.408,0,0,0,1.96-4.775,6.259,6.259,0,0,0-1.96-4.68,6.656,6.656,0,0,0-4.814-1.9\"\n                                            transform=\"translate(-31.65 -122.4)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_5\" data-name=\"Trazado 5\"\n                                            d=\"M143.785,325.98l-1.9-1.158a8.651,8.651,0,0,1-2.55-2.153,4.083,4.083,0,0,1-.759-2.438,4.307,4.307,0,0,1,1.435-3.359,5.364,5.364,0,0,1,3.728-1.291,7.052,7.052,0,0,1,4.023,1.231v2.844a5.8,5.8,0,0,0-4.073-1.82,3.369,3.369,0,0,0-2.018.568,1.722,1.722,0,0,0-.789,1.454,2.235,2.235,0,0,0,.582,1.472,7.3,7.3,0,0,0,1.87,1.442l1.914,1.133q3.2,1.913,3.2,4.87a4.467,4.467,0,0,1-1.41,3.422,5.158,5.158,0,0,1-3.666,1.315,7.7,7.7,0,0,1-4.724-1.595v-3.183a5.9,5.9,0,0,0,4.7,2.573,2.955,2.955,0,0,0,1.961-.656,2.056,2.056,0,0,0,.783-1.642q0-1.6-2.306-3.032\"\n                                            transform=\"translate(-88.027 -122.466)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_6\" data-name=\"Trazado 6\"\n                                            d=\"M223.663,316.414h2.506V333.92h-2.506V326.3h-9.838v7.62h-2.506V316.414h2.506v7.57h9.838Z\"\n                                            transform=\"translate(-141.011 -123.071)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_7\" data-name=\"Trazado 7\"\n                                            d=\"M280.19,316.414h9.925v2.23H282.7v5.339h7.168v2.243H282.7v5.439h7.657v2.23H280.19Z\"\n                                            transform=\"translate(-191.173 -123.071)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_8\" data-name=\"Trazado 8\"\n                                            d=\"M327.7,333.921V316.414h4.386a6.331,6.331,0,0,1,4.217,1.315,4.415,4.415,0,0,1,1.56,3.56,4.379,4.379,0,0,1-2.958,4.311,7.741,7.741,0,0,1,1.643,1.5,30.266,30.266,0,0,1,2.256,3.321q.915,1.492,1.466,2.243l.928,1.253h-2.983l-.764-1.153c-.025-.042-.075-.113-.149-.214l-.488-.689-.776-1.279-.839-1.367a13.715,13.715,0,0,0-1.422-1.717,5.469,5.469,0,0,0-1.167-.92,3.951,3.951,0,0,0-1.75-.281h-.653v7.619Zm3.258-15.377h-.752v5.527h.952a7.068,7.068,0,0,0,2.613-.326,2.449,2.449,0,0,0,1.1-.983,2.85,2.85,0,0,0,.4-1.5,2.676,2.676,0,0,0-.439-1.5,2.343,2.343,0,0,0-1.234-.946,8.889,8.889,0,0,0-2.638-.276\"\n                                            transform=\"translate(-225.777 -123.072)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_9\" data-name=\"Trazado 9\"\n                                            d=\"M385.323,315.491a9.412,9.412,0,0,1,6.756,2.569,8.52,8.52,0,0,1,2.7,6.441,8.383,8.383,0,0,1-2.724,6.41,9.685,9.685,0,0,1-6.869,2.538,9.132,9.132,0,0,1-6.594-2.538,8.462,8.462,0,0,1-2.636-6.359,8.647,8.647,0,0,1,2.655-6.491,9.258,9.258,0,0,1,6.712-2.569m.1,2.381a6.793,6.793,0,0,0-4.939,1.88,6.4,6.4,0,0,0-1.935,4.8,6.288,6.288,0,0,0,1.941,4.712,7.2,7.2,0,0,0,9.747-.037,6.408,6.408,0,0,0,1.959-4.775,6.259,6.259,0,0,0-1.959-4.68,6.656,6.656,0,0,0-4.814-1.9\"\n                                            transform=\"translate(-260.923 -122.4)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_10\" data-name=\"Trazado 10\"\n                                            d=\"M456.589,316.414h9.925v2.23H459.1v5.339h7.169v2.243H459.1v5.439h7.657v2.23H456.589Z\"\n                                            transform=\"translate(-319.651 -123.071)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_11\" data-name=\"Trazado 11\"\n                                            d=\"M505.807,325.98l-1.905-1.158a8.659,8.659,0,0,1-2.549-2.153,4.085,4.085,0,0,1-.759-2.438,4.308,4.308,0,0,1,1.436-3.359,5.363,5.363,0,0,1,3.727-1.291,7.055,7.055,0,0,1,4.024,1.231v2.844a5.8,5.8,0,0,0-4.073-1.82,3.37,3.37,0,0,0-2.018.568,1.723,1.723,0,0,0-.789,1.454,2.236,2.236,0,0,0,.582,1.472,7.31,7.31,0,0,0,1.87,1.442l1.915,1.133q3.2,1.913,3.2,4.87a4.465,4.465,0,0,1-1.41,3.422,5.158,5.158,0,0,1-3.666,1.315,7.7,7.7,0,0,1-4.724-1.595v-3.183a5.9,5.9,0,0,0,4.7,2.573,2.954,2.954,0,0,0,1.961-.656,2.054,2.054,0,0,0,.783-1.642q0-1.6-2.305-3.032\"\n                                            transform=\"translate(-351.701 -122.466)\" fill=\"#1a1818\"></path>\n                                        <path id=\"Trazado_29\" data-name=\"Trazado 29\"\n                                            d=\"M539.166,374.426l-.208-.363c-.183-.322-.232-.371-.386-.426v-.009a.5.5,0,0,0,.486-.505c0-.287-.182-.5-.568-.5h-.9v1.808h.365v-.739h.069a.354.354,0,0,1,.3.089,1.647,1.647,0,0,1,.247.355l.142.3Zm-1.207-1.03v-.5h.338c.244,0,.374.089.374.246,0,.128-.082.25-.334.25Zm.407-1.25a1.371,1.371,0,1,1-1.37,1.368,1.372,1.372,0,0,1,1.37-1.368m0-.333a1.7,1.7,0,1,0,1.7,1.7,1.7,1.7,0,0,0-1.7-1.7\"\n                                            transform=\"translate(-377.968 -163.42)\" fill=\"#1a1818\" fill-rule=\"evenodd\">\n                                        </path>\n                                    </g>\n                                </svg></figure>\n                        </a></h1>\n                    <section class=\"usuario\">\n                        <span>\n                            {{user}}\n                        </span>\n                    </section>\n                    <section class=\"empresa\">\n                        <span>\n                            <label>\n                                <p>Empresa:</p><span>{{empresa}}</span>\n                            </label>\n                            <label>\n                                <p>Rut:</p><span>{{rutEmpresa}}</span>\n                            </label>\n                        </span>\n                        <ul class=\"list_empresas\">\n                            <li class=\"\">\n                                <p>MUELLAJE DEL MAIPO S A</p> <span>99506030-2</span>\n                            </li>\n                        </ul>\n                    </section>\n                    <section></section>\n                    <section class=\"menu\"><button (click)=\"salir()\">Salir</button></section>\n                </div>\n                <p class=\"separador-header\"></p>\n            </header>\n            <nav class=\"sidebar loginnoshow\">\n                <ul>\n                    <li><a class=\"router-link-active\"\n                            class-active=\"active\">Actualización de tramos</a> </li>\n                </ul>\n            </nav>\n            <div class=\"inner-container\">\n                <nav class=\"lh__breadcrumb\">\n                    <li><a  class=\"active\">Inicio</a></li>\n                    <li><span>Resumen de proceso</span></li>\n                </nav>\n                <div class=\"overlay_upload_result_component\" style=\"display: none;\"></div>\n                <div class=\"items-inicio\" style=\"display: none;\">\n                    <div class=\"row row__sa\">\n                        <div class=\"dots\">\n                            <div></div>\n                            <div></div>\n                            <div></div>\n                        </div>\n                    </div>\n                </div>\n                <nav class=\"lhLinkTabs\">\n                    <li><a class=\"router-link-exact-active router-link-active\" class-active=\"active\">Resumen\n                            proceso</a></li>\n                    <li><a (click)=mostrarHistorial() class=\"\"\n                            class-active=\"active\">Historial de actualizaciones</a></li>\n                </nav>\n                <div class=\"row pull-f-left\">\n                    <div class=\"col\"><br> <br>\n                        <h4 class=\"no-margin\">Empresa</h4>\n                        <h2>MUELLAJE DEL MAIPO S A</h2>\n                    </div>\n                </div>\n                <div class=\"row no-margin row__sb\" style=\"margin-bottom: 180px !important;\">\n                    <div class=\"col legend_container\" style=\"\">\n                        <div class=\"over_chart\">\n                            <h3 class=\"no-margin\">Progreso de actualización trabajadores vigentes</h3>\n                            <label><span>{{ porcentaje | number:'1.2-2' }}</span>%</label>\n                            <hr style=\"border:2px;\">\n                        </div>\n                        <div class=\"\">\n                            <div class=\"chartjs-size-monitor\">\n                                <div class=\"chartjs-size-monitor-expand\">\n                                    <div class=\"\"></div>\n                                </div>\n                                <div class=\"chartjs-size-monitor-shrink\">\n                                    <div class=\"\"></div>\n                                </div>\n                            </div><canvas id=\"doughnut-chart\" width=\"300\" height=\"300\" class=\"chartjs-render-monitor\"\n                                style=\"display: block; width: 300px; height: 300px;\"></canvas>\n                        </div>\n                    </div>\n                    <div class=\"col stats_container\" style=\"\">\n                        <div class=\"item-stat\"><span><span>{{trabajadoresActualizados}}</span></span>\n                            <p>Trabajadores <br> actualizados</p>\n                        </div>\n                        <div class=\"item-stat\"><span><span>{{trabajadoresPendientes}}</span></span>\n                            <p>Trabajadores <br>pendientes</p>\n                        </div>\n                        <div class=\"item-stat\"><span><span>{{trabajadoresTotal}}</span></span>\n                            <p>Trabajadores en <br>la propuesta</p>\n                        </div>\n                    </div>\n                    <div class=\"col last_change_container\" style=\"\" [hidden]=\"ultimaPropuesta==null\">\n                        <h3 class=\"no-margin\">Última Modificación <span style=\"\">(en proceso)</span></h3>\n                        <ul>\n                            <li><svg aria-hidden=\"true\" width=\"32.199999999999996\" height=\"36.8\" viewBox=\"0 0 448 512\"\n                                    focusable=\"false\" class=\"fa-icon\" style=\"font-size: 2.3em;\">\n                                    <path style=\"fill:#000000;\"\n                                        d=\"M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z\">\n                                    </path>\n                                </svg>\n                                <div class=\"info\"><span>{{ultimaPropuesta?.nameFirst}} {{ultimaPropuesta?.nameLast}} </span>\n                                    <p>{{ultimaPropuesta?.rutAfiliado}}}</p>\n                                </div>\n                            </li>\n                            <li><svg aria-hidden=\"true\" width=\"32.199999999999996\" height=\"36.8\" viewBox=\"0 0 448 512\"\n                                    focusable=\"false\" class=\"fa-icon\" style=\"font-size: 2.3em;\">\n                                    <path style=\"fill:#000000;\"\n                                        d=\"M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z\">\n                                    </path>\n                                </svg>\n                                <div class=\"info\">\n                                    <p>{{ultimaPropuesta?.est1}}</p>\n                                </div>\n                            </li>\n                            <!---->\n                        </ul>\n                    </div>\n                    \n                    <div class=\"start_widget\" style=\"display: none;\">\n                        <h2>No existen registros o movimientos para este periodo. <br>Comience la actualización de tramo\n                            aquí</h2> <button class=\"big\" style=\"\">Comenzar</button> <button class=\"big icon_t\"\n                            style=\"display: none;\"><svg aria-hidden=\"true\" width=\"26.4\" height=\"21.12\"\n                                viewBox=\"0 0 640 512\" focusable=\"false\" class=\"fa-icon\" style=\"font-size: 1.65em;\">\n                                <path style=\"fill:#FFF\"\n                                    d=\"M571.7 238.8c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96zM405.2 254.5c-4.7-4.7-12.3-4.7-17 0L320 322.7V172c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v150.7l-68.2-68.2c-4.7-4.7-12.3-4.7-17 0l-5.7 5.7c-4.7 4.7-4.7 12.3 0 17l98.3 98.3c4.7 4.7 12.3 4.7 17 0l98.3-98.3c4.7-4.7 4.7-12.3 0-17l-5.5-5.7z\">\n                                </path>\n                            </svg>Descargar propuesta</button>\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                        \n                        <label for=\"upload_prop\" class=\"input_button big icon_t has-tooltip\" data-original-title=\"null\"\n                            style=\"display: none;\"><span><svg aria-hidden=\"true\" width=\"26.4\" height=\"21.12\"\n                                    viewBox=\"0 0 640 512\" focusable=\"false\" class=\"fa-icon\" style=\"font-size: 1.65em;\">\n                                    <path style=\"fill:#FFF\"\n                                        d=\"M312.5 168.5c-4.7-4.7-12.3-4.7-17 0l-98.3 98.3c-4.7 4.7-4.7 12.3 0 17l5.7 5.7c4.7 4.7 12.3 4.7 17 0l68.2-68.2V372c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V221.3l68.2 68.2c4.7 4.7 12.3 4.7 17 0l5.7-5.7c4.7-4.7 4.7-12.3 0-17l-98.5-98.3zm259.2 70.3c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96z\">\n                                    </path>\n                                </svg>\n                                Cargar declaración\n\n                            </span>\n                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                            <span>\n                                0%\n                            </span>\n                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                            <span><svg aria-hidden=\"true\" width=\"26.4\" height=\"26.4\" viewBox=\"0 0 512 512\"\n                                    focusable=\"false\" class=\"fa-icon\" style=\"font-size: 1.65em;\">\n                                    <path style=\"fill:#FFF\"\n                                        d=\"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z\">\n                                    </path>\n                                </svg></span> <input id=\"upload_prop\" type=\"file\">\n                                <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n                                <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\"\n                                    [disabled]=\"!uploader.getNotUploadedItems().length\">\n                                    Upload\n                                </button></label>\n                        <p class=\"legend_p\"\n                            style=\"text-align: right; font-size: 12px; line-height: 12px; margin-right: 145px; display: none;\">\n                            Formato obligatorio debe ser CSV</p>\n                        <p class=\"legend_p\"\n                            style=\"text-align: right; font-size: 12px; line-height: 12px; margin-right: 145px; display: none;\">\n                            Formato disponible en la sección <br><a\n                                href=\"https://devatramos.losheroes.cl/#\">Instrucciones de proceso</a></p>\n                    </div>\n                </div>\n                <div class=\"row row__ce upload_result_component\" style=\"margin-bottom: 140px;\">\n                    <div class=\"content_result_upload\">\n                        <div class=\"row layout_resultado\">\n                            <div>\n                                <h3 class=\"no-margin\">Archivo leido</h3> <span>\n                                    <p class=\"no-margin\">Registros totales</p> <strong><span>0</span></strong>\n                                </span> <span>\n                                    <p class=\"no-margin\">Registros con errores</p> <strong><span>0</span></strong>\n                                </span>\n                            </div>\n                            <div>\n                                <h3 class=\"no-margin\">&nbsp;</h3> <span>\n                                    <p class=\"no-margin\">Registros en formato</p> <strong><span>0</span></strong>\n                                </span> <span style=\"margin-top: 15px;\">\n                                    <!----></span>\n                            </div>\n                            <div>\n                                <div class=\"pre_message\">\n                                    <p style=\"margin-top: 2px;\">Este es un resumen de los datos de la propuesta que\n                                        serán actualizados, <strong>si el documento contiene errores, solucionelos antes\n                                            de enviar la propuesta</strong></p>\n                                    <div class=\"row\"><button class=\"icon_t secondary secondary_icon\"><svg\n                                                aria-hidden=\"true\" width=\"19.2\" height=\"15.36\" viewBox=\"0 0 640 512\"\n                                                focusable=\"false\" class=\"fa-icon\" style=\"font-size: 1.2em;\">\n                                                <path style=\"fill:#FFF\"\n                                                    d=\"M571.7 238.8c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96zM405.2 254.5c-4.7-4.7-12.3-4.7-17 0L320 322.7V172c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v150.7l-68.2-68.2c-4.7-4.7-12.3-4.7-17 0l-5.7 5.7c-4.7 4.7-4.7 12.3 0 17l98.3 98.3c4.7 4.7 12.3 4.7 17 0l98.3-98.3c4.7-4.7 4.7-12.3 0-17l-5.5-5.7z\">\n                                                </path>\n                                            </svg>Volver a cargar</button>\n                                        &nbsp;&nbsp;&nbsp;&nbsp;\n                                        <button class=\"icon_t\"><svg aria-hidden=\"true\" width=\"19.2\" height=\"19.2\"\n                                                viewBox=\"0 0 512 512\" focusable=\"false\" class=\"fa-icon\"\n                                                style=\"font-size: 1.2em;\">\n                                                <path style=\"fill:#FFF\"\n                                                    d=\"M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z\">\n                                                </path>\n                                            </svg>Enviar declaración al proceso</button></div>\n                                </div>\n                                <div class=\"post_message\">\n                                    <h1 style=\"color: rgb(104, 159, 56);\">Actualización enviada al sistema</h1>\n                                    <p>Esta actualización aparecerá reflejada en el proceso en las proximas 24 horas.\n                                    </p>\n                                    <div class=\"row\"><button class=\"icon_t\"><svg aria-hidden=\"true\" width=\"19.2\"\n                                                height=\"19.2\" viewBox=\"0 0 512 512\" focusable=\"false\" class=\"fa-icon\"\n                                                style=\"font-size: 1.2em;\">\n                                                <path style=\"fill:#FFF\"\n                                                    d=\"M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z\">\n                                                </path>\n                                            </svg>Ir al resumen</button></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"bottom_nav\" style=\"\">\n                    <div class=\"row row__fe row__ai_ce\" style=\"height: 100%;\"><button  (click)=\"descargarCSV()\" class=\"big icon_t has-tooltip\"\n                            data-original-title=\"null\" style=\"\"><svg aria-hidden=\"true\" width=\"26.4\" height=\"21.12\"\n                                viewBox=\"0 0 640 512\" focusable=\"false\" class=\"fa-icon\" style=\"font-size: 1.65em;\">\n                                <path style=\"fill:#FFF\"\n                                    d=\"M571.7 238.8c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96zM405.2 254.5c-4.7-4.7-12.3-4.7-17 0L320 322.7V172c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v150.7l-68.2-68.2c-4.7-4.7-12.3-4.7-17 0l-5.7 5.7c-4.7 4.7-4.7 12.3 0 17l98.3 98.3c4.7 4.7 12.3 4.7 17 0l98.3-98.3c4.7-4.7 4.7-12.3 0-17l-5.5-5.7z\">\n                                </path>\n                            </svg>Descargue y revise la propuesta aquí</button>\n                        &nbsp;&nbsp;\n                       \n\n                        <label for=\"upload_prop_bottom\" class=\"input_button big icon_t has-tooltip\"\n                            data-original-title=\"null\" style=\"margin-top: -10px;\" (click)=\"mostrarUploader()\">\n                            <span>\n                                <svg aria-hidden=\"true\"\n                                    width=\"26.4\" height=\"21.12\" viewBox=\"0 0 640 512\" focusable=\"false\" class=\"fa-icon\"\n                                    style=\"font-size: 1.65em;\">\n                                    <path style=\"fill:#FFF\"\n                                        d=\"M312.5 168.5c-4.7-4.7-12.3-4.7-17 0l-98.3 98.3c-4.7 4.7-4.7 12.3 0 17l5.7 5.7c4.7 4.7 12.3 4.7 17 0l68.2-68.2V372c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V221.3l68.2 68.2c4.7 4.7 12.3 4.7 17 0l5.7-5.7c4.7-4.7 4.7-12.3 0-17l-98.5-98.3zm259.2 70.3c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96z\">\n                                    </path>\n                                </svg>\n\n                                Cargar declaración\n                                \n                            </span>\n                        </label>\n                    </div>\n                </div>\n                <div class=\"bottom_nav\" [hidden]=\"!showUploader\">\n                        <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n                        <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\"\n                            [disabled]=\"!uploader.getNotUploadedItems().length\">\n                            Upload\n                        </button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <script src=\"./app.js\"></script>\n    <div id=\"a9I_rzRKM\" role=\"status\" aria-live=\"polite\" aria-atomic=\"false\" class=\"toasted-container bottom-right\">\n    </div>\n\n\n</body>\n\n</html>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_resumen_proceso_resumen_proceso_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/resumen-proceso/resumen-proceso.component */
    "./src/app/components/resumen-proceso/resumen-proceso.component.ts");
    /* harmony import */


    var _components_historial_actualizaciones_historial_actualizaciones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/historial-actualizaciones/historial-actualizaciones.component */
    "./src/app/components/historial-actualizaciones/historial-actualizaciones.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'resumen-proceso',
      pathMatch: 'full'
    }, {
      path: 'resumen-proceso',
      component: _components_resumen_proceso_resumen_proceso_component__WEBPACK_IMPORTED_MODULE_3__["ResumenProcesoComponent"]
    }, {
      path: 'historial-actualizaciones',
      component: _components_historial_actualizaciones_historial_actualizaciones_component__WEBPACK_IMPORTED_MODULE_4__["HistorialActualizacionesComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'clhTramosFront';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_resumen_proceso_resumen_proceso_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/resumen-proceso/resumen-proceso.component */
    "./src/app/components/resumen-proceso/resumen-proceso.component.ts");
    /* harmony import */


    var _components_historial_actualizaciones_historial_actualizaciones_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/historial-actualizaciones/historial-actualizaciones.component */
    "./src/app/components/historial-actualizaciones/historial-actualizaciones.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_resumen_proceso_resumen_proceso_component__WEBPACK_IMPORTED_MODULE_6__["ResumenProcesoComponent"], _components_historial_actualizaciones_historial_actualizaciones_component__WEBPACK_IMPORTED_MODULE_7__["HistorialActualizacionesComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/historial-actualizaciones/historial-actualizaciones.component.css":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/historial-actualizaciones/historial-actualizaciones.component.css ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHistorialActualizacionesHistorialActualizacionesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* cyrillic-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OX-hpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }\n/* cyrillic */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OVuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }\n/* greek-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OXuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }\n/* greek */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OUehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n  }\n/* vietnamese */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OXehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n  }\n/* latin-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OXOhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n/* latin */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n/* cyrillic-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }\n/* cyrillic */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }\n/* greek-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }\n/* greek */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n  }\n/* vietnamese */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n  }\n/* latin-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n/* latin */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n/* cyrillic-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOX-hpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }\n/* cyrillic */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOVuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }\n/* greek-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOXuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }\n/* greek */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOUehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n  }\n/* vietnamese */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOXehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n  }\n/* latin-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOXOhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n/* latin */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n/* cyrillic-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOX-hpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }\n/* cyrillic */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOVuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }\n/* greek-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOXuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }\n/* greek */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n  }\n/* vietnamese */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOXehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n  }\n/* latin-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOXOhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n/* latin */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oaXN0b3JpYWwtYWN0dWFsaXphY2lvbmVzL2hpc3RvcmlhbC1hY3R1YWxpemFjaW9uZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakI7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnS0FBZ0s7SUFDaEssc0ZBQXNGO0VBQ3hGO0FBQ0EsYUFBYTtBQUNiO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0tBQWdLO0lBQ2hLLDREQUE0RDtFQUM5RDtBQUNBLGNBQWM7QUFDZDtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdLQUFnSztJQUNoSywwQkFBMEI7RUFDNUI7QUFDQSxVQUFVO0FBQ1Y7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnS0FBZ0s7SUFDaEssMEJBQTBCO0VBQzVCO0FBQ0EsZUFBZTtBQUNmO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0tBQWdLO0lBQ2hLLGdIQUFnSDtFQUNsSDtBQUNBLGNBQWM7QUFDZDtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdLQUFnSztJQUNoSyxtSEFBbUg7RUFDckg7QUFDQSxVQUFVO0FBQ1Y7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4SkFBOEo7SUFDOUoseUtBQXlLO0VBQzNLO0FBQ0EsaUJBQWlCO0FBQ2pCO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0tBQWdLO0lBQ2hLLHNGQUFzRjtFQUN4RjtBQUNBLGFBQWE7QUFDYjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdLQUFnSztJQUNoSyw0REFBNEQ7RUFDOUQ7QUFDQSxjQUFjO0FBQ2Q7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnS0FBZ0s7SUFDaEssMEJBQTBCO0VBQzVCO0FBQ0EsVUFBVTtBQUNWO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0tBQWdLO0lBQ2hLLDBCQUEwQjtFQUM1QjtBQUNBLGVBQWU7QUFDZjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdLQUFnSztJQUNoSyxnSEFBZ0g7RUFDbEg7QUFDQSxjQUFjO0FBQ2Q7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnS0FBZ0s7SUFDaEssbUhBQW1IO0VBQ3JIO0FBQ0EsVUFBVTtBQUNWO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEpBQThKO0lBQzlKLHlLQUF5SztFQUMzSztBQUNBLGlCQUFpQjtBQUNqQjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNLQUFzSztJQUN0SyxzRkFBc0Y7RUFDeEY7QUFDQSxhQUFhO0FBQ2I7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzS0FBc0s7SUFDdEssNERBQTREO0VBQzlEO0FBQ0EsY0FBYztBQUNkO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0tBQXNLO0lBQ3RLLDBCQUEwQjtFQUM1QjtBQUNBLFVBQVU7QUFDVjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNLQUFzSztJQUN0SywwQkFBMEI7RUFDNUI7QUFDQSxlQUFlO0FBQ2Y7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzS0FBc0s7SUFDdEssZ0hBQWdIO0VBQ2xIO0FBQ0EsY0FBYztBQUNkO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0tBQXNLO0lBQ3RLLG1IQUFtSDtFQUNySDtBQUNBLFVBQVU7QUFDVjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9LQUFvSztJQUNwSyx5S0FBeUs7RUFDM0s7QUFDQSxpQkFBaUI7QUFDakI7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4SkFBOEo7SUFDOUosc0ZBQXNGO0VBQ3hGO0FBQ0EsYUFBYTtBQUNiO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEpBQThKO0lBQzlKLDREQUE0RDtFQUM5RDtBQUNBLGNBQWM7QUFDZDtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhKQUE4SjtJQUM5SiwwQkFBMEI7RUFDNUI7QUFDQSxVQUFVO0FBQ1Y7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4SkFBOEo7SUFDOUosMEJBQTBCO0VBQzVCO0FBQ0EsZUFBZTtBQUNmO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEpBQThKO0lBQzlKLGdIQUFnSDtFQUNsSDtBQUNBLGNBQWM7QUFDZDtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhKQUE4SjtJQUM5SixtSEFBbUg7RUFDckg7QUFDQSxVQUFVO0FBQ1Y7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0SkFBNEo7SUFDNUoseUtBQXlLO0VBQzNLIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oaXN0b3JpYWwtYWN0dWFsaXphY2lvbmVzL2hpc3RvcmlhbC1hY3R1YWxpemFjaW9uZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGN5cmlsbGljLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBMaWdodCcpLCBsb2NhbCgnT3BlblNhbnMtTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU5fcjhPWC1ocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswNDYwLTA1MkYsIFUrMUM4MC0xQzg4LCBVKzIwQjQsIFUrMkRFMC0yREZGLCBVK0E2NDAtQTY5RiwgVStGRTJFLUZFMkY7XG4gIH1cbiAgLyogY3lyaWxsaWMgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBMaWdodCcpLCBsb2NhbCgnT3BlblNhbnMtTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU5fcjhPVnVocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xuICB9XG4gIC8qIGdyZWVrLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIExpZ2h0JyksIGxvY2FsKCdPcGVuU2Fucy1MaWdodCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTl9yOE9YdWhwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzFGMDAtMUZGRjtcbiAgfVxuICAvKiBncmVlayAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIExpZ2h0JyksIGxvY2FsKCdPcGVuU2Fucy1MaWdodCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTl9yOE9VZWhwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAzNzAtMDNGRjtcbiAgfVxuICAvKiB2aWV0bmFtZXNlICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgTGlnaHQnKSwgbG9jYWwoJ09wZW5TYW5zLUxpZ2h0JyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVOX3I4T1hlaHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMUVBMC0xRUY5LCBVKzIwQUI7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgTGlnaHQnKSwgbG9jYWwoJ09wZW5TYW5zLUxpZ2h0JyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVOX3I4T1hPaHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBMaWdodCcpLCBsb2NhbCgnT3BlblNhbnMtTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU5fcjhPVXVocEtLU1Rqdy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogY3lyaWxsaWMtZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgUmVndWxhcicpLCBsb2NhbCgnT3BlblNhbnMtUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW04WWFHczEyNk1pWnBCQS1VRldKMGJmOHBrQXA2YS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRiwgVStBNjQwLUE2OUYsIFUrRkUyRS1GRTJGO1xuICB9XG4gIC8qIGN5cmlsbGljICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgUmVndWxhcicpLCBsb2NhbCgnT3BlblNhbnMtUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW04WWFHczEyNk1pWnBCQS1VRlVaMGJmOHBrQXA2YS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcbiAgfVxuICAvKiBncmVlay1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBSZWd1bGFyJyksIGxvY2FsKCdPcGVuU2Fucy1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbThZYUdzMTI2TWlacEJBLVVGV1owYmY4cGtBcDZhLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSsxRjAwLTFGRkY7XG4gIH1cbiAgLyogZ3JlZWsgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBSZWd1bGFyJyksIGxvY2FsKCdPcGVuU2Fucy1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbThZYUdzMTI2TWlacEJBLVVGVnAwYmY4cGtBcDZhLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XG4gIH1cbiAgLyogdmlldG5hbWVzZSAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIFJlZ3VsYXInKSwgbG9jYWwoJ09wZW5TYW5zLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtOFlhR3MxMjZNaVpwQkEtVUZXcDBiZjhwa0FwNmEud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSwgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIFJlZ3VsYXInKSwgbG9jYWwoJ09wZW5TYW5zLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtOFlhR3MxMjZNaVpwQkEtVUZXNTBiZjhwa0FwNmEud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgUmVndWxhcicpLCBsb2NhbCgnT3BlblNhbnMtUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW04WWFHczEyNk1pWnBCQS1VRlZaMGJmOHBrQWcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGN5cmlsbGljLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIFNlbWlCb2xkJyksIGxvY2FsKCdPcGVuU2Fucy1TZW1pQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTmlya09YLWhwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcbiAgfVxuICAvKiBjeXJpbGxpYyAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIFNlbWlCb2xkJyksIGxvY2FsKCdPcGVuU2Fucy1TZW1pQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTmlya09WdWhwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XG4gIH1cbiAgLyogZ3JlZWstZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgU2VtaUJvbGQnKSwgbG9jYWwoJ09wZW5TYW5zLVNlbWlCb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVOaXJrT1h1aHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMUYwMC0xRkZGO1xuICB9XG4gIC8qIGdyZWVrICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgU2VtaUJvbGQnKSwgbG9jYWwoJ09wZW5TYW5zLVNlbWlCb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVOaXJrT1VlaHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGO1xuICB9XG4gIC8qIHZpZXRuYW1lc2UgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBTZW1pQm9sZCcpLCBsb2NhbCgnT3BlblNhbnMtU2VtaUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU5pcmtPWGVocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzAxMjgtMDEyOSwgVSswMTY4LTAxNjksIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSsxRUEwLTFFRjksIFUrMjBBQjtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBTZW1pQm9sZCcpLCBsb2NhbCgnT3BlblNhbnMtU2VtaUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU5pcmtPWE9ocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIFNlbWlCb2xkJyksIGxvY2FsKCdPcGVuU2Fucy1TZW1pQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTmlya09VdWhwS0tTVGp3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBjeXJpbGxpYy1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBCb2xkJyksIGxvY2FsKCdPcGVuU2Fucy1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVON3JnT1gtaHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRiwgVStBNjQwLUE2OUYsIFUrRkUyRS1GRTJGO1xuICB9XG4gIC8qIGN5cmlsbGljICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgQm9sZCcpLCBsb2NhbCgnT3BlblNhbnMtQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTjdyZ09WdWhwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XG4gIH1cbiAgLyogZ3JlZWstZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgQm9sZCcpLCBsb2NhbCgnT3BlblNhbnMtQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTjdyZ09YdWhwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzFGMDAtMUZGRjtcbiAgfVxuICAvKiBncmVlayAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIEJvbGQnKSwgbG9jYWwoJ09wZW5TYW5zLUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU43cmdPVWVocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XG4gIH1cbiAgLyogdmlldG5hbWVzZSAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIEJvbGQnKSwgbG9jYWwoJ09wZW5TYW5zLUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU43cmdPWGVocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzAxMjgtMDEyOSwgVSswMTY4LTAxNjksIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSsxRUEwLTFFRjksIFUrMjBBQjtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBCb2xkJyksIGxvY2FsKCdPcGVuU2Fucy1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVON3JnT1hPaHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBCb2xkJyksIGxvY2FsKCdPcGVuU2Fucy1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVON3JnT1V1aHBLS1NUancud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/historial-actualizaciones/historial-actualizaciones.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/historial-actualizaciones/historial-actualizaciones.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: HistorialActualizacionesComponent */

  /***/
  function srcAppComponentsHistorialActualizacionesHistorialActualizacionesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistorialActualizacionesComponent", function () {
      return HistorialActualizacionesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_propuestas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/propuestas.service */
    "./src/app/services/propuestas.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HistorialActualizacionesComponent = /*#__PURE__*/function () {
      function HistorialActualizacionesComponent(propuestasService, router) {
        _classCallCheck(this, HistorialActualizacionesComponent);

        this.propuestasService = propuestasService;
        this.router = router;
      }

      _createClass(HistorialActualizacionesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.user = localStorage.getItem("user");
          this.pass = localStorage.getItem("password");
          this.rutPersona = localStorage.getItem("rutPersona");
          this.empresa = localStorage.getItem("empresa");
          this.rutEmpresa = localStorage.getItem("rutEmpresa");
          this.propuestas2 = new Array();
          this.propuestasService.getCurrentTask(this.rutEmpresa, this.user, this.pass).subscribe(function (result) {
            console.info(result);
            _this.propuestas = result;
            _this.rutEmpresa = _this.propuestas[0].rutEmpresa;

            var _iterator = _createForOfIteratorHelper(_this.propuestas),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var propuesta = _step.value;
                if (propuesta.est2 == "Declarado") _this.propuestas2.push(propuesta);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
        }
      }, {
        key: "salir",
        value: function salir() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "mostrarResumen",
        value: function mostrarResumen() {
          this.router.navigate(['/resumen-proceso']);
        }
      }]);

      return HistorialActualizacionesComponent;
    }();

    HistorialActualizacionesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_propuestas_service__WEBPACK_IMPORTED_MODULE_2__["PropuestasService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HistorialActualizacionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-historial-actualizaciones',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./historial-actualizaciones.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/historial-actualizaciones/historial-actualizaciones.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./historial-actualizaciones.component.css */
      "./src/app/components/historial-actualizaciones/historial-actualizaciones.component.css"))["default"]]
    })], HistorialActualizacionesComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* cyrillic-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OX-hpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }\n/* cyrillic */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OVuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }\n/* greek-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OXuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }\n/* greek */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OUehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n  }\n/* vietnamese */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OXehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n  }\n/* latin-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OXOhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n/* latin */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n/* cyrillic-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }\n/* cyrillic */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }\n/* greek-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }\n/* greek */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n  }\n/* vietnamese */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n  }\n/* latin-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n/* latin */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n/* cyrillic-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOX-hpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }\n/* cyrillic */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOVuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }\n/* greek-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOXuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }\n/* greek */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOUehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n  }\n/* vietnamese */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOXehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n  }\n/* latin-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOXOhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n/* latin */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n/* cyrillic-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOX-hpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }\n/* cyrillic */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOVuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }\n/* greek-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOXuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }\n/* greek */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n  }\n/* vietnamese */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOXehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n  }\n/* latin-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOXOhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n/* latin */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQUNqQjtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdLQUFnSztJQUNoSyxzRkFBc0Y7RUFDeEY7QUFDQSxhQUFhO0FBQ2I7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnS0FBZ0s7SUFDaEssNERBQTREO0VBQzlEO0FBQ0EsY0FBYztBQUNkO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0tBQWdLO0lBQ2hLLDBCQUEwQjtFQUM1QjtBQUNBLFVBQVU7QUFDVjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdLQUFnSztJQUNoSywwQkFBMEI7RUFDNUI7QUFDQSxlQUFlO0FBQ2Y7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnS0FBZ0s7SUFDaEssZ0hBQWdIO0VBQ2xIO0FBQ0EsY0FBYztBQUNkO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0tBQWdLO0lBQ2hLLG1IQUFtSDtFQUNySDtBQUNBLFVBQVU7QUFDVjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhKQUE4SjtJQUM5Six5S0FBeUs7RUFDM0s7QUFDQSxpQkFBaUI7QUFDakI7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnS0FBZ0s7SUFDaEssc0ZBQXNGO0VBQ3hGO0FBQ0EsYUFBYTtBQUNiO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0tBQWdLO0lBQ2hLLDREQUE0RDtFQUM5RDtBQUNBLGNBQWM7QUFDZDtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdLQUFnSztJQUNoSywwQkFBMEI7RUFDNUI7QUFDQSxVQUFVO0FBQ1Y7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnS0FBZ0s7SUFDaEssMEJBQTBCO0VBQzVCO0FBQ0EsZUFBZTtBQUNmO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0tBQWdLO0lBQ2hLLGdIQUFnSDtFQUNsSDtBQUNBLGNBQWM7QUFDZDtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdLQUFnSztJQUNoSyxtSEFBbUg7RUFDckg7QUFDQSxVQUFVO0FBQ1Y7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4SkFBOEo7SUFDOUoseUtBQXlLO0VBQzNLO0FBQ0EsaUJBQWlCO0FBQ2pCO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0tBQXNLO0lBQ3RLLHNGQUFzRjtFQUN4RjtBQUNBLGFBQWE7QUFDYjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNLQUFzSztJQUN0Syw0REFBNEQ7RUFDOUQ7QUFDQSxjQUFjO0FBQ2Q7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzS0FBc0s7SUFDdEssMEJBQTBCO0VBQzVCO0FBQ0EsVUFBVTtBQUNWO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0tBQXNLO0lBQ3RLLDBCQUEwQjtFQUM1QjtBQUNBLGVBQWU7QUFDZjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNLQUFzSztJQUN0SyxnSEFBZ0g7RUFDbEg7QUFDQSxjQUFjO0FBQ2Q7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzS0FBc0s7SUFDdEssbUhBQW1IO0VBQ3JIO0FBQ0EsVUFBVTtBQUNWO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0tBQW9LO0lBQ3BLLHlLQUF5SztFQUMzSztBQUNBLGlCQUFpQjtBQUNqQjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhKQUE4SjtJQUM5SixzRkFBc0Y7RUFDeEY7QUFDQSxhQUFhO0FBQ2I7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4SkFBOEo7SUFDOUosNERBQTREO0VBQzlEO0FBQ0EsY0FBYztBQUNkO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEpBQThKO0lBQzlKLDBCQUEwQjtFQUM1QjtBQUNBLFVBQVU7QUFDVjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhKQUE4SjtJQUM5SiwwQkFBMEI7RUFDNUI7QUFDQSxlQUFlO0FBQ2Y7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4SkFBOEo7SUFDOUosZ0hBQWdIO0VBQ2xIO0FBQ0EsY0FBYztBQUNkO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEpBQThKO0lBQzlKLG1IQUFtSDtFQUNySDtBQUNBLFVBQVU7QUFDVjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDRKQUE0SjtJQUM1Six5S0FBeUs7RUFDM0siLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjeXJpbGxpYy1leHQgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgTGlnaHQnKSwgbG9jYWwoJ09wZW5TYW5zLUxpZ2h0JyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVOX3I4T1gtaHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRiwgVStBNjQwLUE2OUYsIFUrRkUyRS1GRTJGO1xuICB9XG4gIC8qIGN5cmlsbGljICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgTGlnaHQnKSwgbG9jYWwoJ09wZW5TYW5zLUxpZ2h0JyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVOX3I4T1Z1aHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcbiAgfVxuICAvKiBncmVlay1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBMaWdodCcpLCBsb2NhbCgnT3BlblNhbnMtTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU5fcjhPWHVocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSsxRjAwLTFGRkY7XG4gIH1cbiAgLyogZ3JlZWsgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBMaWdodCcpLCBsb2NhbCgnT3BlblNhbnMtTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU5fcjhPVWVocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XG4gIH1cbiAgLyogdmlldG5hbWVzZSAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIExpZ2h0JyksIGxvY2FsKCdPcGVuU2Fucy1MaWdodCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTl9yOE9YZWhwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSwgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIExpZ2h0JyksIGxvY2FsKCdPcGVuU2Fucy1MaWdodCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTl9yOE9YT2hwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgTGlnaHQnKSwgbG9jYWwoJ09wZW5TYW5zLUxpZ2h0JyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVOX3I4T1V1aHBLS1NUancud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGN5cmlsbGljLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIFJlZ3VsYXInKSwgbG9jYWwoJ09wZW5TYW5zLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtOFlhR3MxMjZNaVpwQkEtVUZXSjBiZjhwa0FwNmEud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcbiAgfVxuICAvKiBjeXJpbGxpYyAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIFJlZ3VsYXInKSwgbG9jYWwoJ09wZW5TYW5zLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtOFlhR3MxMjZNaVpwQkEtVUZVWjBiZjhwa0FwNmEud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XG4gIH1cbiAgLyogZ3JlZWstZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgUmVndWxhcicpLCBsb2NhbCgnT3BlblNhbnMtUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW04WWFHczEyNk1pWnBCQS1VRldaMGJmOHBrQXA2YS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMUYwMC0xRkZGO1xuICB9XG4gIC8qIGdyZWVrICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgUmVndWxhcicpLCBsb2NhbCgnT3BlblNhbnMtUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW04WWFHczEyNk1pWnBCQS1VRlZwMGJmOHBrQXA2YS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGO1xuICB9XG4gIC8qIHZpZXRuYW1lc2UgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBSZWd1bGFyJyksIGxvY2FsKCdPcGVuU2Fucy1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbThZYUdzMTI2TWlacEJBLVVGV3AwYmY4cGtBcDZhLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzAxMjgtMDEyOSwgVSswMTY4LTAxNjksIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSsxRUEwLTFFRjksIFUrMjBBQjtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBSZWd1bGFyJyksIGxvY2FsKCdPcGVuU2Fucy1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbThZYUdzMTI2TWlacEJBLVVGVzUwYmY4cGtBcDZhLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIFJlZ3VsYXInKSwgbG9jYWwoJ09wZW5TYW5zLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtOFlhR3MxMjZNaVpwQkEtVUZWWjBiZjhwa0FnLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBjeXJpbGxpYy1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBTZW1pQm9sZCcpLCBsb2NhbCgnT3BlblNhbnMtU2VtaUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU5pcmtPWC1ocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswNDYwLTA1MkYsIFUrMUM4MC0xQzg4LCBVKzIwQjQsIFUrMkRFMC0yREZGLCBVK0E2NDAtQTY5RiwgVStGRTJFLUZFMkY7XG4gIH1cbiAgLyogY3lyaWxsaWMgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBTZW1pQm9sZCcpLCBsb2NhbCgnT3BlblNhbnMtU2VtaUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU5pcmtPVnVocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xuICB9XG4gIC8qIGdyZWVrLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIFNlbWlCb2xkJyksIGxvY2FsKCdPcGVuU2Fucy1TZW1pQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTmlya09YdWhwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzFGMDAtMUZGRjtcbiAgfVxuICAvKiBncmVlayAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIFNlbWlCb2xkJyksIGxvY2FsKCdPcGVuU2Fucy1TZW1pQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTmlya09VZWhwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAzNzAtMDNGRjtcbiAgfVxuICAvKiB2aWV0bmFtZXNlICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgU2VtaUJvbGQnKSwgbG9jYWwoJ09wZW5TYW5zLVNlbWlCb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVOaXJrT1hlaHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMUVBMC0xRUY5LCBVKzIwQUI7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgU2VtaUJvbGQnKSwgbG9jYWwoJ09wZW5TYW5zLVNlbWlCb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVOaXJrT1hPaHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBTZW1pQm9sZCcpLCBsb2NhbCgnT3BlblNhbnMtU2VtaUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU5pcmtPVXVocEtLU1Rqdy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogY3lyaWxsaWMtZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgQm9sZCcpLCBsb2NhbCgnT3BlblNhbnMtQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTjdyZ09YLWhwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcbiAgfVxuICAvKiBjeXJpbGxpYyAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIEJvbGQnKSwgbG9jYWwoJ09wZW5TYW5zLUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU43cmdPVnVocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xuICB9XG4gIC8qIGdyZWVrLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIEJvbGQnKSwgbG9jYWwoJ09wZW5TYW5zLUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU43cmdPWHVocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSsxRjAwLTFGRkY7XG4gIH1cbiAgLyogZ3JlZWsgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBCb2xkJyksIGxvY2FsKCdPcGVuU2Fucy1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVON3JnT1VlaHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGO1xuICB9XG4gIC8qIHZpZXRuYW1lc2UgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBCb2xkJyksIGxvY2FsKCdPcGVuU2Fucy1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVON3JnT1hlaHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMUVBMC0xRUY5LCBVKzIwQUI7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgQm9sZCcpLCBsb2NhbCgnT3BlblNhbnMtQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTjdyZ09YT2hwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgQm9sZCcpLCBsb2NhbCgnT3BlblNhbnMtQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTjdyZ09VdWhwS0tTVGp3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = "analista1";
          this.empresa = "MUELLAJE DEL MAIPO S A";
          this.rutEmpresa = "99.506.030-2";
          this.rutPersona = "";
        }
      }, {
        key: "login",
        value: function login() {
          localStorage.setItem("user", this.user);
          localStorage.setItem("password", this.pass);
          localStorage.setItem("rutPersona", this.rutPersona);
          localStorage.setItem("empresa", this.empresa);
          localStorage.setItem("rutEmpresa", this.rutEmpresa);
          console.info("user: " + this.rutPersona + " logueado correctamente");
          this.router.navigate(['/resumen-proceso']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/resumen-proceso/resumen-proceso.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/resumen-proceso/resumen-proceso.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsResumenProcesoResumenProcesoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* cyrillic-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OX-hpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }\n/* cyrillic */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OVuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }\n/* greek-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OXuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }\n/* greek */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OUehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n  }\n/* vietnamese */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OXehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n  }\n/* latin-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OXOhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n/* latin */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n/* cyrillic-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }\n/* cyrillic */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }\n/* greek-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }\n/* greek */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n  }\n/* vietnamese */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n  }\n/* latin-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n/* latin */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n/* cyrillic-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOX-hpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }\n/* cyrillic */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOVuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }\n/* greek-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOXuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }\n/* greek */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOUehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n  }\n/* vietnamese */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOXehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n  }\n/* latin-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOXOhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n/* latin */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n/* cyrillic-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOX-hpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }\n/* cyrillic */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOVuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }\n/* greek-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOXuhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }\n/* greek */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n  }\n/* vietnamese */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOXehpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n  }\n/* latin-ext */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOXOhpKKSTj5PW.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n/* latin */\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWVuLXByb2Nlc28vcmVzdW1lbi1wcm9jZXNvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FBQ2pCO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0tBQWdLO0lBQ2hLLHNGQUFzRjtFQUN4RjtBQUNBLGFBQWE7QUFDYjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdLQUFnSztJQUNoSyw0REFBNEQ7RUFDOUQ7QUFDQSxjQUFjO0FBQ2Q7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnS0FBZ0s7SUFDaEssMEJBQTBCO0VBQzVCO0FBQ0EsVUFBVTtBQUNWO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0tBQWdLO0lBQ2hLLDBCQUEwQjtFQUM1QjtBQUNBLGVBQWU7QUFDZjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdLQUFnSztJQUNoSyxnSEFBZ0g7RUFDbEg7QUFDQSxjQUFjO0FBQ2Q7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnS0FBZ0s7SUFDaEssbUhBQW1IO0VBQ3JIO0FBQ0EsVUFBVTtBQUNWO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEpBQThKO0lBQzlKLHlLQUF5SztFQUMzSztBQUNBLGlCQUFpQjtBQUNqQjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdLQUFnSztJQUNoSyxzRkFBc0Y7RUFDeEY7QUFDQSxhQUFhO0FBQ2I7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnS0FBZ0s7SUFDaEssNERBQTREO0VBQzlEO0FBQ0EsY0FBYztBQUNkO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0tBQWdLO0lBQ2hLLDBCQUEwQjtFQUM1QjtBQUNBLFVBQVU7QUFDVjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdLQUFnSztJQUNoSywwQkFBMEI7RUFDNUI7QUFDQSxlQUFlO0FBQ2Y7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnS0FBZ0s7SUFDaEssZ0hBQWdIO0VBQ2xIO0FBQ0EsY0FBYztBQUNkO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0tBQWdLO0lBQ2hLLG1IQUFtSDtFQUNySDtBQUNBLFVBQVU7QUFDVjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhKQUE4SjtJQUM5Six5S0FBeUs7RUFDM0s7QUFDQSxpQkFBaUI7QUFDakI7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzS0FBc0s7SUFDdEssc0ZBQXNGO0VBQ3hGO0FBQ0EsYUFBYTtBQUNiO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0tBQXNLO0lBQ3RLLDREQUE0RDtFQUM5RDtBQUNBLGNBQWM7QUFDZDtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNLQUFzSztJQUN0SywwQkFBMEI7RUFDNUI7QUFDQSxVQUFVO0FBQ1Y7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzS0FBc0s7SUFDdEssMEJBQTBCO0VBQzVCO0FBQ0EsZUFBZTtBQUNmO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0tBQXNLO0lBQ3RLLGdIQUFnSDtFQUNsSDtBQUNBLGNBQWM7QUFDZDtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNLQUFzSztJQUN0SyxtSEFBbUg7RUFDckg7QUFDQSxVQUFVO0FBQ1Y7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvS0FBb0s7SUFDcEsseUtBQXlLO0VBQzNLO0FBQ0EsaUJBQWlCO0FBQ2pCO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEpBQThKO0lBQzlKLHNGQUFzRjtFQUN4RjtBQUNBLGFBQWE7QUFDYjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhKQUE4SjtJQUM5Siw0REFBNEQ7RUFDOUQ7QUFDQSxjQUFjO0FBQ2Q7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4SkFBOEo7SUFDOUosMEJBQTBCO0VBQzVCO0FBQ0EsVUFBVTtBQUNWO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEpBQThKO0lBQzlKLDBCQUEwQjtFQUM1QjtBQUNBLGVBQWU7QUFDZjtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhKQUE4SjtJQUM5SixnSEFBZ0g7RUFDbEg7QUFDQSxjQUFjO0FBQ2Q7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4SkFBOEo7SUFDOUosbUhBQW1IO0VBQ3JIO0FBQ0EsVUFBVTtBQUNWO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNEpBQTRKO0lBQzVKLHlLQUF5SztFQUMzSyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lbi1wcm9jZXNvL3Jlc3VtZW4tcHJvY2Vzby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3lyaWxsaWMtZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIExpZ2h0JyksIGxvY2FsKCdPcGVuU2Fucy1MaWdodCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTl9yOE9YLWhwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcbiAgfVxuICAvKiBjeXJpbGxpYyAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIExpZ2h0JyksIGxvY2FsKCdPcGVuU2Fucy1MaWdodCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTl9yOE9WdWhwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XG4gIH1cbiAgLyogZ3JlZWstZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgTGlnaHQnKSwgbG9jYWwoJ09wZW5TYW5zLUxpZ2h0JyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVOX3I4T1h1aHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMUYwMC0xRkZGO1xuICB9XG4gIC8qIGdyZWVrICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgTGlnaHQnKSwgbG9jYWwoJ09wZW5TYW5zLUxpZ2h0JyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVOX3I4T1VlaHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGO1xuICB9XG4gIC8qIHZpZXRuYW1lc2UgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBMaWdodCcpLCBsb2NhbCgnT3BlblNhbnMtTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU5fcjhPWGVocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzAxMjgtMDEyOSwgVSswMTY4LTAxNjksIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSsxRUEwLTFFRjksIFUrMjBBQjtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBMaWdodCcpLCBsb2NhbCgnT3BlblNhbnMtTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU5fcjhPWE9ocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIExpZ2h0JyksIGxvY2FsKCdPcGVuU2Fucy1MaWdodCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTl9yOE9VdWhwS0tTVGp3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBjeXJpbGxpYy1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBSZWd1bGFyJyksIGxvY2FsKCdPcGVuU2Fucy1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbThZYUdzMTI2TWlacEJBLVVGV0owYmY4cGtBcDZhLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswNDYwLTA1MkYsIFUrMUM4MC0xQzg4LCBVKzIwQjQsIFUrMkRFMC0yREZGLCBVK0E2NDAtQTY5RiwgVStGRTJFLUZFMkY7XG4gIH1cbiAgLyogY3lyaWxsaWMgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBSZWd1bGFyJyksIGxvY2FsKCdPcGVuU2Fucy1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbThZYUdzMTI2TWlacEJBLVVGVVowYmY4cGtBcDZhLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xuICB9XG4gIC8qIGdyZWVrLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIFJlZ3VsYXInKSwgbG9jYWwoJ09wZW5TYW5zLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtOFlhR3MxMjZNaVpwQkEtVUZXWjBiZjhwa0FwNmEud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzFGMDAtMUZGRjtcbiAgfVxuICAvKiBncmVlayAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIFJlZ3VsYXInKSwgbG9jYWwoJ09wZW5TYW5zLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtOFlhR3MxMjZNaVpwQkEtVUZWcDBiZjhwa0FwNmEud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAzNzAtMDNGRjtcbiAgfVxuICAvKiB2aWV0bmFtZXNlICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgUmVndWxhcicpLCBsb2NhbCgnT3BlblNhbnMtUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW04WWFHczEyNk1pWnBCQS1VRldwMGJmOHBrQXA2YS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMUVBMC0xRUY5LCBVKzIwQUI7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgUmVndWxhcicpLCBsb2NhbCgnT3BlblNhbnMtUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW04WWFHczEyNk1pWnBCQS1VRlc1MGJmOHBrQXA2YS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBSZWd1bGFyJyksIGxvY2FsKCdPcGVuU2Fucy1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbThZYUdzMTI2TWlacEJBLVVGVlowYmY4cGtBZy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogY3lyaWxsaWMtZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgU2VtaUJvbGQnKSwgbG9jYWwoJ09wZW5TYW5zLVNlbWlCb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVOaXJrT1gtaHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRiwgVStBNjQwLUE2OUYsIFUrRkUyRS1GRTJGO1xuICB9XG4gIC8qIGN5cmlsbGljICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgU2VtaUJvbGQnKSwgbG9jYWwoJ09wZW5TYW5zLVNlbWlCb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVOaXJrT1Z1aHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcbiAgfVxuICAvKiBncmVlay1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBTZW1pQm9sZCcpLCBsb2NhbCgnT3BlblNhbnMtU2VtaUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU5pcmtPWHVocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSsxRjAwLTFGRkY7XG4gIH1cbiAgLyogZ3JlZWsgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBTZW1pQm9sZCcpLCBsb2NhbCgnT3BlblNhbnMtU2VtaUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU5pcmtPVWVocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XG4gIH1cbiAgLyogdmlldG5hbWVzZSAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIFNlbWlCb2xkJyksIGxvY2FsKCdPcGVuU2Fucy1TZW1pQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTmlya09YZWhwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSwgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIFNlbWlCb2xkJyksIGxvY2FsKCdPcGVuU2Fucy1TZW1pQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTmlya09YT2hwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgU2VtaUJvbGQnKSwgbG9jYWwoJ09wZW5TYW5zLVNlbWlCb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVOaXJrT1V1aHBLS1NUancud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGN5cmlsbGljLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIEJvbGQnKSwgbG9jYWwoJ09wZW5TYW5zLUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU43cmdPWC1ocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswNDYwLTA1MkYsIFUrMUM4MC0xQzg4LCBVKzIwQjQsIFUrMkRFMC0yREZGLCBVK0E2NDAtQTY5RiwgVStGRTJFLUZFMkY7XG4gIH1cbiAgLyogY3lyaWxsaWMgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBCb2xkJyksIGxvY2FsKCdPcGVuU2Fucy1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVON3JnT1Z1aHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcbiAgfVxuICAvKiBncmVlay1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBCb2xkJyksIGxvY2FsKCdPcGVuU2Fucy1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjE3L21lbTVZYUdzMTI2TWlacEJBLVVON3JnT1h1aHBLS1NUajVQVy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMUYwMC0xRkZGO1xuICB9XG4gIC8qIGdyZWVrICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgQm9sZCcpLCBsb2NhbCgnT3BlblNhbnMtQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTjdyZ09VZWhwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAzNzAtMDNGRjtcbiAgfVxuICAvKiB2aWV0bmFtZXNlICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgQm9sZCcpLCBsb2NhbCgnT3BlblNhbnMtQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxNy9tZW01WWFHczEyNk1pWnBCQS1VTjdyZ09YZWhwS0tTVGo1UFcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSwgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIEJvbGQnKSwgbG9jYWwoJ09wZW5TYW5zLUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU43cmdPWE9ocEtLU1RqNVBXLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIEJvbGQnKSwgbG9jYWwoJ09wZW5TYW5zLUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9vcGVuc2Fucy92MTcvbWVtNVlhR3MxMjZNaVpwQkEtVU43cmdPVXVocEtLU1Rqdy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgIl19 */";
    /***/
  },

  /***/
  "./src/app/components/resumen-proceso/resumen-proceso.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/resumen-proceso/resumen-proceso.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ResumenProcesoComponent */

  /***/
  function srcAppComponentsResumenProcesoResumenProcesoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumenProcesoComponent", function () {
      return ResumenProcesoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _services_propuestas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/propuestas.service */
    "./src/app/services/propuestas.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var uploadAPI = 'http://clh-business-api-qa-pam-dm.apps.ocp-esc.losheroes.int/clh-poc-business-api/files'; // better use a service class

    var ResumenProcesoComponent = /*#__PURE__*/function () {
      function ResumenProcesoComponent(propuestasService, router) {
        _classCallCheck(this, ResumenProcesoComponent);

        this.propuestasService = propuestasService;
        this.router = router;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
          url: uploadAPI,
          itemAlias: 'file'
        });
        this.showUploader = false;
      }

      _createClass(ResumenProcesoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.user = localStorage.getItem("user");
          this.pass = localStorage.getItem("password");
          this.rutPersona = localStorage.getItem("rutPersona");
          this.empresa = localStorage.getItem("empresa");
          this.rutEmpresa = localStorage.getItem("rutEmpresa");
          this.porcentaje = 0;
          this.trabajadoresActualizados = 0;

          this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
          };

          this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('FileUpload:uploaded successfully:', item, status, response);
            alert('Declaración cargada correctamente');
            _this2.showUploader = false;

            _this2.propuestasService.completeTask(_this2.rutEmpresa, _this2.user, _this2.pass).subscribe(function (result) {
              console.info(result);
            });
          };

          this.propuestasService.getCurrentTask(this.rutEmpresa, this.user, this.pass).subscribe(function (result) {
            console.info(result);
            _this2.propuestas = result;
            _this2.trabajadoresTotal = _this2.propuestas.length;
            _this2.rutEmpresa = _this2.propuestas[0].rutEmpresa;

            var _iterator2 = _createForOfIteratorHelper(_this2.propuestas),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var propuesta = _step2.value;
                if (propuesta.est2 == "Declarado") _this2.trabajadoresActualizados++;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            _this2.trabajadoresPendientes = _this2.trabajadoresTotal - _this2.trabajadoresActualizados;
            _this2.porcentaje = _this2.trabajadoresActualizados * 100 / _this2.trabajadoresTotal;
            console.log(_this2.porcentaje);
            if (_this2.propuestas[0].est2 == "Declarado") _this2.ultimaPropuesta = _this2.propuestas[0];
          });
        }
      }, {
        key: "mostrarUploader",
        value: function mostrarUploader() {
          console.info("Se muestra uploader");
          this.showUploader = true;
        }
      }, {
        key: "descargarCSV",
        value: function descargarCSV() {
          var _this3 = this;

          this.propuestasService.downloadCSV(this.rutEmpresa, this.user, this.pass).subscribe(function (result) {
            var blob = new Blob([result], {
              type: 'application/octet-stream'
            });
            var url = window.URL.createObjectURL(blob);
            var anchor = document.createElement("a");
            anchor.download = _this3.rutEmpresa + ".csv";
            anchor.href = url;
            anchor.click();
            console.info("descargando archivos");
          });
        }
      }, {
        key: "salir",
        value: function salir() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "mostrarHistorial",
        value: function mostrarHistorial() {
          this.router.navigate(['/historial-actualizaciones']);
        }
      }]);

      return ResumenProcesoComponent;
    }();

    ResumenProcesoComponent.ctorParameters = function () {
      return [{
        type: _services_propuestas_service__WEBPACK_IMPORTED_MODULE_3__["PropuestasService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ResumenProcesoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resumen-proceso',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resumen-proceso.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resumen-proceso/resumen-proceso.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resumen-proceso.component.css */
      "./src/app/components/resumen-proceso/resumen-proceso.component.css"))["default"]]
    })], ResumenProcesoComponent);
    /***/
  },

  /***/
  "./src/app/services/propuestas.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/propuestas.service.ts ***!
    \************************************************/

  /*! exports provided: PropuestasService */

  /***/
  function srcAppServicesPropuestasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropuestasService", function () {
      return PropuestasService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PropuestasService = /*#__PURE__*/function () {
      function PropuestasService(http) {
        _classCallCheck(this, PropuestasService);

        this.http = http;
        this.urlBase = "http://clh-business-api-qa-pam-dm.apps.ocp-esc.losheroes.int/clh-poc-business-api";
      }

      _createClass(PropuestasService, [{
        key: "getCurrentTask",
        value: function getCurrentTask(rutEmpresa, username, pass) {
          return this.http.get(this.urlBase + "/propuesta/bpm?usuario=" + username + "&pass=" + pass);
        }
      }, {
        key: "downloadCSV",
        value: function downloadCSV(rutEmpresa, username, pass) {
          return this.http.get(this.urlBase + "/files/csv?rutEmpresa=" + rutEmpresa + "&user=" + username + "&pass=" + pass, {
            responseType: 'blob'
          });
        }
      }, {
        key: "completeTask",
        value: function completeTask(rutEmpresa, username, pass) {
          return this.http.post(this.urlBase + "/propuesta/bpm/completeTask?user=" + username + "&pass=" + pass + "&rutEmpresa=" + rutEmpresa, null);
        }
      }]);

      return PropuestasService;
    }();

    PropuestasService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PropuestasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PropuestasService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/macbookpro/Documents/fpbSoft/redhat/CLH/front/clhTramosFront/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map