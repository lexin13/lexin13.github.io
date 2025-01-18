"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[984],{"./src/shared/common/language/LanguageProvider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sample:()=>Sample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _layout_Layout__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/common/layout/Layout.tsx"),_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/common/language/LanguageSwitcher.tsx"),_LanguageProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/common/language/LanguageProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Common/LanguageSwitcher",component:_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_2__.W,tags:["autodocs"],decorators:[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{marginTop:"3em"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_LanguageProvider__WEBPACK_IMPORTED_MODULE_3__.i,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Story,{})})})}]};var LanguageProviderExample=function LanguageProviderExample(){var _useLanguageContext=(0,_LanguageProvider__WEBPACK_IMPORTED_MODULE_3__.Q)(),language=_useLanguageContext.language,t=(_useLanguageContext.toggleLanguage,_useLanguageContext.translations[language]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_layout_Layout__WEBPACK_IMPORTED_MODULE_1__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:t.lorem1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:t.lorem2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:t.lorem3})]})})};LanguageProviderExample.displayName="LanguageProviderExample";var Sample={args:{},render:function render(_ref){Object.assign({},(function _objectDestructuringEmpty(t){if(null==t)throw new TypeError("Cannot destructure "+t)}(_ref),_ref));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LanguageProviderExample,{})}};Sample.parameters={...Sample.parameters,docs:{...Sample.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: ({\n    ...args\n  }) => {\n    return <LanguageProviderExample />;\n  }\n}",...Sample.parameters?.docs?.source}}};const __namedExportsOrder=["Sample"]},"./src/shared/common/layout/Layout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Layout});__webpack_require__("./node_modules/react/index.js");var Header=__webpack_require__("./src/shared/common/header/Header.tsx"),ThemeProvider=__webpack_require__("./src/shared/common/theme/ThemeProvider.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),layout_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/common/layout/layout.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(layout_module.Z,options);const layout_layout_module=layout_module.Z&&layout_module.Z.locals?layout_module.Z.locals:void 0;var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Layout=function Layout(_ref){var _cn,children=_ref.children,themeContext=(0,ThemeProvider.TC)();return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)((_cn={},_defineProperty(_cn,layout_layout_module.dark,themeContext.theme===ThemeProvider.Q2.dark),_defineProperty(_cn,layout_layout_module.light,themeContext.theme===ThemeProvider.Q2.light),_cn)),children:[(0,jsx_runtime.jsx)(Header.h,{}),children]})};Layout.displayName="Layout";try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/common/layout/Layout.tsx#Layout"]={docgenInfo:Layout.__docgenInfo,name:"Layout",path:"src/shared/common/layout/Layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/common/layout/layout.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".MWuoON6KYhfYMsJM0ub5 div,.MWuoON6KYhfYMsJM0ub5 p{background-color:#fff;color:#000}.Dmf1xx0u96hOYDKvxq5Y div,.Dmf1xx0u96hOYDKvxq5Y p{background-color:#333;color:#fff}","",{version:3,sources:["webpack://./src/shared/common/layout/layout.module.scss"],names:[],mappings:"AAiBI,kDANA,qBAAA,CACA,UAAA,CAaA,kDAdA,qBAAA,CACA,UAAA",sourcesContent:["$light-theme: (\n    background-color: #fff,\n    color: #000\n);\n\n$dark-theme: (\n    background-color: #333,\n    color: #fff\n);\n\n@mixin theme($theme) {\n    background-color: map-get($theme, background-color);\n    color: map-get($theme, color);\n}\n\n.light {\n\n    div,\n    p {\n        @include theme($light-theme);\n    }\n}\n\n.dark {\n\n    div,\n    p {\n        @include theme($dark-theme);\n    }\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={light:"MWuoON6KYhfYMsJM0ub5",dark:"Dmf1xx0u96hOYDKvxq5Y"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);