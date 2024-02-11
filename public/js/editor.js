"use strict";
(self["webpackChunk_roots_bud_sage_sage"] = self["webpackChunk_roots_bud_sage_sage"] || []).push([["editor"],{

/***/ "../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!./styles/editor.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__("./images/svg/icon/caret.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&family=Open+Sans:wght@400;500;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `

/*
! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}::before,
::after {
  --tw-content: '';
}/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
*/html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
}/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/abbr:where([title]) {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}/*
Remove the default font size and weight for headings.
*/h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}/*
Reset links to optimize for opt-in styling instead of opt-out.
*/a {
  color: inherit;
  text-decoration: inherit;
}/*
Add the correct font weight in Edge and Safari.
*/b,
strong {
  font-weight: bolder;
}/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}/*
Add the correct font size in all browsers.
*/small {
  font-size: 80%;
}/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}sub {
  bottom: -0.25em;
}sup {
  top: -0.5em;
}/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}/*
Remove the inheritance of text transform in Edge and Firefox.
*/button,
select {
  text-transform: none;
}/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}/*
Use the modern Firefox focus style for all focusable elements.
*/:-moz-focusring {
  outline: auto;
}/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/:-moz-ui-invalid {
  box-shadow: none;
}/*
Add the correct vertical alignment in Chrome and Firefox.
*/progress {
  vertical-align: baseline;
}/*
Correct the cursor style of increment and decrement buttons in Safari.
*/::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}/*
Remove the inner padding in Chrome and Safari on macOS.
*/::-webkit-search-decoration {
  -webkit-appearance: none;
}/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}/*
Add the correct display in Chrome and Safari.
*/summary {
  display: list-item;
}/*
Removes the default spacing and border for appropriate elements.
*/blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}fieldset {
  margin: 0;
  padding: 0;
}legend {
  padding: 0;
}ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}/*
Reset default styling for dialogs.
*/dialog {
  padding: 0;
}/*
Prevent resizing textareas horizontally by default.
*/textarea {
  resize: vertical;
}/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}/*
Set the default cursor for buttons.
*/button,
[role="button"] {
  cursor: pointer;
}/*
Make sure disabled buttons don't get the pointer cursor.
*/:disabled {
  cursor: default;
}/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/img,
video {
  max-width: 100%;
  height: auto;
}/* Make elements with the HTML hidden attribute stay hidden by default */[hidden] {
  display: none;
}*, ::before, ::after{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}::backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}.container{
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
}@media (min-width: 640px){.container{
    max-width: 640px;
  }
}@media (min-width: 768px){.container{
    max-width: 768px;
  }
}@media (min-width: 1024px){.container{
    max-width: 1024px;
    padding-right: 2rem;
    padding-left: 2rem;
  }
}@media (min-width: 1280px){.container{
    max-width: 1280px;
  }
}@media (min-width: 1536px){.container{
    max-width: 1536px;
  }
}.btn{
  display: inline-block;
  cursor: pointer;
  justify-content: center;
  border-radius: 9999px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.625rem;
  font-family: barlow;
  text-transform: uppercase;
  line-height: 1.25;
  text-decoration-line: none;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.btn-white{
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}.btn-white:hover{
  --tw-bg-opacity: 1;
  background-color: rgba(47, 49, 141, 1);
  background-color: rgba(47, 49, 141, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}.btn-blue{
  --tw-bg-opacity: 1;
  background-color: rgba(47, 49, 141, 1);
  background-color: rgba(47, 49, 141, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}.btn-blue:hover{
  --tw-bg-opacity: 1;
  background-color: rgba(199, 210, 254, 1);
  background-color: rgba(199, 210, 254, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(49, 46, 129, 1);
  color: rgba(49, 46, 129, var(--tw-text-opacity));
}.sr-only{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}.static{
  position: static;
}.fixed{
  position: fixed;
}.absolute{
  position: absolute;
}.relative{
  position: relative;
}.-right-16{
  right: -4rem;
}.-right-6{
  right: -1.5rem;
}.-top-8{
  top: -2rem;
}.left-0{
  left: 0px;
}.left-1\\/2{
  left: 50%;
}.right-4{
  right: 1rem;
}.top-0{
  top: 0px;
}.top-1\\/2{
  top: 50%;
}.z-50{
  z-index: 50;
}.z-10{
  z-index: 10;
}.col-span-1{
  grid-column: span 1 / span 1;
}.col-span-10{
  grid-column: span 10 / span 10;
}.col-span-11{
  grid-column: span 11 / span 11;
}.col-span-12{
  grid-column: span 12 / span 12;
}.col-span-2{
  grid-column: span 2 / span 2;
}.col-span-3{
  grid-column: span 3 / span 3;
}.col-span-4{
  grid-column: span 4 / span 4;
}.col-span-5{
  grid-column: span 5 / span 5;
}.col-span-6{
  grid-column: span 6 / span 6;
}.col-span-7{
  grid-column: span 7 / span 7;
}.col-span-8{
  grid-column: span 8 / span 8;
}.col-span-9{
  grid-column: span 9 / span 9;
}.col-span-full{
  grid-column: 1 / -1;
}.row-span-4{
  grid-row: span 4 / span 4;
}.-m-0{
  margin: -0px;
}.-m-0\\.5{
  margin: -0.125rem;
}.-m-1{
  margin: -0.25rem;
}.-m-1\\.5{
  margin: -0.375rem;
}.-m-10{
  margin: -2.5rem;
}.-m-11{
  margin: -2.75rem;
}.-m-12{
  margin: -3rem;
}.-m-14{
  margin: -3.5rem;
}.-m-15{
  margin: -3.75rem;
}.-m-16{
  margin: -4rem;
}.-m-2{
  margin: -0.5rem;
}.-m-2\\.5{
  margin: -0.625rem;
}.-m-20{
  margin: -5rem;
}.-m-24{
  margin: -6rem;
}.-m-25{
  margin: -6.25rem;
}.-m-28{
  margin: -7rem;
}.-m-3{
  margin: -0.75rem;
}.-m-3\\.5{
  margin: -0.875rem;
}.-m-30{
  margin: -7.5rem;
}.-m-32{
  margin: -8rem;
}.-m-36{
  margin: -9rem;
}.-m-4{
  margin: -1rem;
}.-m-40{
  margin: -10rem;
}.-m-44{
  margin: -11rem;
}.-m-48{
  margin: -12rem;
}.-m-5{
  margin: -1.25rem;
}.-m-52{
  margin: -13rem;
}.-m-56{
  margin: -14rem;
}.-m-6{
  margin: -1.5rem;
}.-m-60{
  margin: -15rem;
}.-m-64{
  margin: -16rem;
}.-m-7{
  margin: -1.75rem;
}.-m-72{
  margin: -18rem;
}.-m-8{
  margin: -2rem;
}.-m-80{
  margin: -20rem;
}.-m-9{
  margin: -2.25rem;
}.-m-96{
  margin: -24rem;
}.-m-px{
  margin: -1px;
}.m-0{
  margin: 0px;
}.m-0\\.5{
  margin: 0.125rem;
}.m-1{
  margin: 0.25rem;
}.m-1\\.5{
  margin: 0.375rem;
}.m-10{
  margin: 2.5rem;
}.m-11{
  margin: 2.75rem;
}.m-12{
  margin: 3rem;
}.m-14{
  margin: 3.5rem;
}.m-15{
  margin: 3.75rem;
}.m-16{
  margin: 4rem;
}.m-2{
  margin: 0.5rem;
}.m-2\\.5{
  margin: 0.625rem;
}.m-20{
  margin: 5rem;
}.m-24{
  margin: 6rem;
}.m-25{
  margin: 6.25rem;
}.m-28{
  margin: 7rem;
}.m-3{
  margin: 0.75rem;
}.m-3\\.5{
  margin: 0.875rem;
}.m-30{
  margin: 7.5rem;
}.m-32{
  margin: 8rem;
}.m-36{
  margin: 9rem;
}.m-4{
  margin: 1rem;
}.m-40{
  margin: 10rem;
}.m-44{
  margin: 11rem;
}.m-48{
  margin: 12rem;
}.m-5{
  margin: 1.25rem;
}.m-52{
  margin: 13rem;
}.m-56{
  margin: 14rem;
}.m-6{
  margin: 1.5rem;
}.m-60{
  margin: 15rem;
}.m-64{
  margin: 16rem;
}.m-7{
  margin: 1.75rem;
}.m-72{
  margin: 18rem;
}.m-8{
  margin: 2rem;
}.m-80{
  margin: 20rem;
}.m-9{
  margin: 2.25rem;
}.m-96{
  margin: 24rem;
}.m-auto{
  margin: auto;
}.m-px{
  margin: 1px;
}.-mx-0{
  margin-left: -0px;
  margin-right: -0px;
}.-mx-0\\.5{
  margin-left: -0.125rem;
  margin-right: -0.125rem;
}.-mx-1{
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}.-mx-1\\.5{
  margin-left: -0.375rem;
  margin-right: -0.375rem;
}.-mx-10{
  margin-left: -2.5rem;
  margin-right: -2.5rem;
}.-mx-11{
  margin-left: -2.75rem;
  margin-right: -2.75rem;
}.-mx-12{
  margin-left: -3rem;
  margin-right: -3rem;
}.-mx-14{
  margin-left: -3.5rem;
  margin-right: -3.5rem;
}.-mx-15{
  margin-left: -3.75rem;
  margin-right: -3.75rem;
}.-mx-16{
  margin-left: -4rem;
  margin-right: -4rem;
}.-mx-2{
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}.-mx-2\\.5{
  margin-left: -0.625rem;
  margin-right: -0.625rem;
}.-mx-20{
  margin-left: -5rem;
  margin-right: -5rem;
}.-mx-24{
  margin-left: -6rem;
  margin-right: -6rem;
}.-mx-25{
  margin-left: -6.25rem;
  margin-right: -6.25rem;
}.-mx-28{
  margin-left: -7rem;
  margin-right: -7rem;
}.-mx-3{
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}.-mx-3\\.5{
  margin-left: -0.875rem;
  margin-right: -0.875rem;
}.-mx-30{
  margin-left: -7.5rem;
  margin-right: -7.5rem;
}.-mx-32{
  margin-left: -8rem;
  margin-right: -8rem;
}.-mx-36{
  margin-left: -9rem;
  margin-right: -9rem;
}.-mx-4{
  margin-left: -1rem;
  margin-right: -1rem;
}.-mx-40{
  margin-left: -10rem;
  margin-right: -10rem;
}.-mx-44{
  margin-left: -11rem;
  margin-right: -11rem;
}.-mx-48{
  margin-left: -12rem;
  margin-right: -12rem;
}.-mx-5{
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}.-mx-52{
  margin-left: -13rem;
  margin-right: -13rem;
}.-mx-56{
  margin-left: -14rem;
  margin-right: -14rem;
}.-mx-6{
  margin-left: -1.5rem;
  margin-right: -1.5rem;
}.-mx-60{
  margin-left: -15rem;
  margin-right: -15rem;
}.-mx-64{
  margin-left: -16rem;
  margin-right: -16rem;
}.-mx-7{
  margin-left: -1.75rem;
  margin-right: -1.75rem;
}.-mx-72{
  margin-left: -18rem;
  margin-right: -18rem;
}.-mx-8{
  margin-left: -2rem;
  margin-right: -2rem;
}.-mx-80{
  margin-left: -20rem;
  margin-right: -20rem;
}.-mx-9{
  margin-left: -2.25rem;
  margin-right: -2.25rem;
}.-mx-96{
  margin-left: -24rem;
  margin-right: -24rem;
}.-mx-px{
  margin-left: -1px;
  margin-right: -1px;
}.-my-0{
  margin-top: -0px;
  margin-bottom: -0px;
}.-my-0\\.5{
  margin-top: -0.125rem;
  margin-bottom: -0.125rem;
}.-my-1{
  margin-top: -0.25rem;
  margin-bottom: -0.25rem;
}.-my-1\\.5{
  margin-top: -0.375rem;
  margin-bottom: -0.375rem;
}.-my-10{
  margin-top: -2.5rem;
  margin-bottom: -2.5rem;
}.-my-11{
  margin-top: -2.75rem;
  margin-bottom: -2.75rem;
}.-my-12{
  margin-top: -3rem;
  margin-bottom: -3rem;
}.-my-14{
  margin-top: -3.5rem;
  margin-bottom: -3.5rem;
}.-my-15{
  margin-top: -3.75rem;
  margin-bottom: -3.75rem;
}.-my-16{
  margin-top: -4rem;
  margin-bottom: -4rem;
}.-my-2{
  margin-top: -0.5rem;
  margin-bottom: -0.5rem;
}.-my-2\\.5{
  margin-top: -0.625rem;
  margin-bottom: -0.625rem;
}.-my-20{
  margin-top: -5rem;
  margin-bottom: -5rem;
}.-my-24{
  margin-top: -6rem;
  margin-bottom: -6rem;
}.-my-25{
  margin-top: -6.25rem;
  margin-bottom: -6.25rem;
}.-my-28{
  margin-top: -7rem;
  margin-bottom: -7rem;
}.-my-3{
  margin-top: -0.75rem;
  margin-bottom: -0.75rem;
}.-my-3\\.5{
  margin-top: -0.875rem;
  margin-bottom: -0.875rem;
}.-my-30{
  margin-top: -7.5rem;
  margin-bottom: -7.5rem;
}.-my-32{
  margin-top: -8rem;
  margin-bottom: -8rem;
}.-my-36{
  margin-top: -9rem;
  margin-bottom: -9rem;
}.-my-4{
  margin-top: -1rem;
  margin-bottom: -1rem;
}.-my-40{
  margin-top: -10rem;
  margin-bottom: -10rem;
}.-my-44{
  margin-top: -11rem;
  margin-bottom: -11rem;
}.-my-48{
  margin-top: -12rem;
  margin-bottom: -12rem;
}.-my-5{
  margin-top: -1.25rem;
  margin-bottom: -1.25rem;
}.-my-52{
  margin-top: -13rem;
  margin-bottom: -13rem;
}.-my-56{
  margin-top: -14rem;
  margin-bottom: -14rem;
}.-my-6{
  margin-top: -1.5rem;
  margin-bottom: -1.5rem;
}.-my-60{
  margin-top: -15rem;
  margin-bottom: -15rem;
}.-my-64{
  margin-top: -16rem;
  margin-bottom: -16rem;
}.-my-7{
  margin-top: -1.75rem;
  margin-bottom: -1.75rem;
}.-my-72{
  margin-top: -18rem;
  margin-bottom: -18rem;
}.-my-8{
  margin-top: -2rem;
  margin-bottom: -2rem;
}.-my-80{
  margin-top: -20rem;
  margin-bottom: -20rem;
}.-my-9{
  margin-top: -2.25rem;
  margin-bottom: -2.25rem;
}.-my-96{
  margin-top: -24rem;
  margin-bottom: -24rem;
}.-my-px{
  margin-top: -1px;
  margin-bottom: -1px;
}.mx-0{
  margin-left: 0px;
  margin-right: 0px;
}.mx-0\\.5{
  margin-left: 0.125rem;
  margin-right: 0.125rem;
}.mx-1{
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}.mx-1\\.5{
  margin-left: 0.375rem;
  margin-right: 0.375rem;
}.mx-10{
  margin-left: 2.5rem;
  margin-right: 2.5rem;
}.mx-11{
  margin-left: 2.75rem;
  margin-right: 2.75rem;
}.mx-12{
  margin-left: 3rem;
  margin-right: 3rem;
}.mx-14{
  margin-left: 3.5rem;
  margin-right: 3.5rem;
}.mx-15{
  margin-left: 3.75rem;
  margin-right: 3.75rem;
}.mx-16{
  margin-left: 4rem;
  margin-right: 4rem;
}.mx-2{
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}.mx-2\\.5{
  margin-left: 0.625rem;
  margin-right: 0.625rem;
}.mx-20{
  margin-left: 5rem;
  margin-right: 5rem;
}.mx-24{
  margin-left: 6rem;
  margin-right: 6rem;
}.mx-25{
  margin-left: 6.25rem;
  margin-right: 6.25rem;
}.mx-28{
  margin-left: 7rem;
  margin-right: 7rem;
}.mx-3{
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}.mx-3\\.5{
  margin-left: 0.875rem;
  margin-right: 0.875rem;
}.mx-30{
  margin-left: 7.5rem;
  margin-right: 7.5rem;
}.mx-32{
  margin-left: 8rem;
  margin-right: 8rem;
}.mx-36{
  margin-left: 9rem;
  margin-right: 9rem;
}.mx-4{
  margin-left: 1rem;
  margin-right: 1rem;
}.mx-40{
  margin-left: 10rem;
  margin-right: 10rem;
}.mx-44{
  margin-left: 11rem;
  margin-right: 11rem;
}.mx-48{
  margin-left: 12rem;
  margin-right: 12rem;
}.mx-5{
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}.mx-52{
  margin-left: 13rem;
  margin-right: 13rem;
}.mx-56{
  margin-left: 14rem;
  margin-right: 14rem;
}.mx-6{
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}.mx-60{
  margin-left: 15rem;
  margin-right: 15rem;
}.mx-64{
  margin-left: 16rem;
  margin-right: 16rem;
}.mx-7{
  margin-left: 1.75rem;
  margin-right: 1.75rem;
}.mx-72{
  margin-left: 18rem;
  margin-right: 18rem;
}.mx-8{
  margin-left: 2rem;
  margin-right: 2rem;
}.mx-80{
  margin-left: 20rem;
  margin-right: 20rem;
}.mx-9{
  margin-left: 2.25rem;
  margin-right: 2.25rem;
}.mx-96{
  margin-left: 24rem;
  margin-right: 24rem;
}.mx-auto{
  margin-left: auto;
  margin-right: auto;
}.mx-px{
  margin-left: 1px;
  margin-right: 1px;
}.my-0{
  margin-top: 0px;
  margin-bottom: 0px;
}.my-0\\.5{
  margin-top: 0.125rem;
  margin-bottom: 0.125rem;
}.my-1{
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}.my-1\\.5{
  margin-top: 0.375rem;
  margin-bottom: 0.375rem;
}.my-10{
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}.my-11{
  margin-top: 2.75rem;
  margin-bottom: 2.75rem;
}.my-12{
  margin-top: 3rem;
  margin-bottom: 3rem;
}.my-14{
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
}.my-15{
  margin-top: 3.75rem;
  margin-bottom: 3.75rem;
}.my-16{
  margin-top: 4rem;
  margin-bottom: 4rem;
}.my-2{
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}.my-2\\.5{
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
}.my-20{
  margin-top: 5rem;
  margin-bottom: 5rem;
}.my-24{
  margin-top: 6rem;
  margin-bottom: 6rem;
}.my-25{
  margin-top: 6.25rem;
  margin-bottom: 6.25rem;
}.my-28{
  margin-top: 7rem;
  margin-bottom: 7rem;
}.my-3{
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}.my-3\\.5{
  margin-top: 0.875rem;
  margin-bottom: 0.875rem;
}.my-30{
  margin-top: 7.5rem;
  margin-bottom: 7.5rem;
}.my-32{
  margin-top: 8rem;
  margin-bottom: 8rem;
}.my-36{
  margin-top: 9rem;
  margin-bottom: 9rem;
}.my-4{
  margin-top: 1rem;
  margin-bottom: 1rem;
}.my-40{
  margin-top: 10rem;
  margin-bottom: 10rem;
}.my-44{
  margin-top: 11rem;
  margin-bottom: 11rem;
}.my-48{
  margin-top: 12rem;
  margin-bottom: 12rem;
}.my-5{
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}.my-52{
  margin-top: 13rem;
  margin-bottom: 13rem;
}.my-56{
  margin-top: 14rem;
  margin-bottom: 14rem;
}.my-6{
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}.my-60{
  margin-top: 15rem;
  margin-bottom: 15rem;
}.my-64{
  margin-top: 16rem;
  margin-bottom: 16rem;
}.my-7{
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;
}.my-72{
  margin-top: 18rem;
  margin-bottom: 18rem;
}.my-8{
  margin-top: 2rem;
  margin-bottom: 2rem;
}.my-80{
  margin-top: 20rem;
  margin-bottom: 20rem;
}.my-9{
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
}.my-96{
  margin-top: 24rem;
  margin-bottom: 24rem;
}.my-auto{
  margin-top: auto;
  margin-bottom: auto;
}.my-px{
  margin-top: 1px;
  margin-bottom: 1px;
}.-mb-0{
  margin-bottom: -0px;
}.-mb-0\\.5{
  margin-bottom: -0.125rem;
}.-mb-1{
  margin-bottom: -0.25rem;
}.-mb-1\\.5{
  margin-bottom: -0.375rem;
}.-mb-10{
  margin-bottom: -2.5rem;
}.-mb-11{
  margin-bottom: -2.75rem;
}.-mb-12{
  margin-bottom: -3rem;
}.-mb-14{
  margin-bottom: -3.5rem;
}.-mb-15{
  margin-bottom: -3.75rem;
}.-mb-16{
  margin-bottom: -4rem;
}.-mb-2{
  margin-bottom: -0.5rem;
}.-mb-2\\.5{
  margin-bottom: -0.625rem;
}.-mb-20{
  margin-bottom: -5rem;
}.-mb-24{
  margin-bottom: -6rem;
}.-mb-25{
  margin-bottom: -6.25rem;
}.-mb-28{
  margin-bottom: -7rem;
}.-mb-3{
  margin-bottom: -0.75rem;
}.-mb-3\\.5{
  margin-bottom: -0.875rem;
}.-mb-30{
  margin-bottom: -7.5rem;
}.-mb-32{
  margin-bottom: -8rem;
}.-mb-36{
  margin-bottom: -9rem;
}.-mb-4{
  margin-bottom: -1rem;
}.-mb-40{
  margin-bottom: -10rem;
}.-mb-44{
  margin-bottom: -11rem;
}.-mb-48{
  margin-bottom: -12rem;
}.-mb-5{
  margin-bottom: -1.25rem;
}.-mb-52{
  margin-bottom: -13rem;
}.-mb-56{
  margin-bottom: -14rem;
}.-mb-6{
  margin-bottom: -1.5rem;
}.-mb-60{
  margin-bottom: -15rem;
}.-mb-64{
  margin-bottom: -16rem;
}.-mb-7{
  margin-bottom: -1.75rem;
}.-mb-72{
  margin-bottom: -18rem;
}.-mb-8{
  margin-bottom: -2rem;
}.-mb-80{
  margin-bottom: -20rem;
}.-mb-9{
  margin-bottom: -2.25rem;
}.-mb-96{
  margin-bottom: -24rem;
}.-mb-px{
  margin-bottom: -1px;
}.-me-0{
  margin-right: -0px;
}.-me-0\\.5{
  margin-right: -0.125rem;
}.-me-1{
  margin-right: -0.25rem;
}.-me-1\\.5{
  margin-right: -0.375rem;
}.-me-10{
  margin-right: -2.5rem;
}.-me-11{
  margin-right: -2.75rem;
}.-me-12{
  margin-right: -3rem;
}.-me-14{
  margin-right: -3.5rem;
}.-me-15{
  margin-right: -3.75rem;
}.-me-16{
  margin-right: -4rem;
}.-me-2{
  margin-right: -0.5rem;
}.-me-2\\.5{
  margin-right: -0.625rem;
}.-me-20{
  margin-right: -5rem;
}.-me-24{
  margin-right: -6rem;
}.-me-25{
  margin-right: -6.25rem;
}.-me-28{
  margin-right: -7rem;
}.-me-3{
  margin-right: -0.75rem;
}.-me-3\\.5{
  margin-right: -0.875rem;
}.-me-30{
  margin-right: -7.5rem;
}.-me-32{
  margin-right: -8rem;
}.-me-36{
  margin-right: -9rem;
}.-me-4{
  margin-right: -1rem;
}.-me-40{
  margin-right: -10rem;
}.-me-44{
  margin-right: -11rem;
}.-me-48{
  margin-right: -12rem;
}.-me-5{
  margin-right: -1.25rem;
}.-me-52{
  margin-right: -13rem;
}.-me-56{
  margin-right: -14rem;
}.-me-6{
  margin-right: -1.5rem;
}.-me-60{
  margin-right: -15rem;
}.-me-64{
  margin-right: -16rem;
}.-me-7{
  margin-right: -1.75rem;
}.-me-72{
  margin-right: -18rem;
}.-me-8{
  margin-right: -2rem;
}.-me-80{
  margin-right: -20rem;
}.-me-9{
  margin-right: -2.25rem;
}.-me-96{
  margin-right: -24rem;
}.-me-px{
  margin-right: -1px;
}.-ml-0{
  margin-left: -0px;
}.-ml-0\\.5{
  margin-left: -0.125rem;
}.-ml-1{
  margin-left: -0.25rem;
}.-ml-1\\.5{
  margin-left: -0.375rem;
}.-ml-10{
  margin-left: -2.5rem;
}.-ml-11{
  margin-left: -2.75rem;
}.-ml-12{
  margin-left: -3rem;
}.-ml-14{
  margin-left: -3.5rem;
}.-ml-15{
  margin-left: -3.75rem;
}.-ml-16{
  margin-left: -4rem;
}.-ml-2{
  margin-left: -0.5rem;
}.-ml-2\\.5{
  margin-left: -0.625rem;
}.-ml-20{
  margin-left: -5rem;
}.-ml-24{
  margin-left: -6rem;
}.-ml-25{
  margin-left: -6.25rem;
}.-ml-28{
  margin-left: -7rem;
}.-ml-3{
  margin-left: -0.75rem;
}.-ml-3\\.5{
  margin-left: -0.875rem;
}.-ml-30{
  margin-left: -7.5rem;
}.-ml-32{
  margin-left: -8rem;
}.-ml-36{
  margin-left: -9rem;
}.-ml-4{
  margin-left: -1rem;
}.-ml-40{
  margin-left: -10rem;
}.-ml-44{
  margin-left: -11rem;
}.-ml-48{
  margin-left: -12rem;
}.-ml-5{
  margin-left: -1.25rem;
}.-ml-52{
  margin-left: -13rem;
}.-ml-56{
  margin-left: -14rem;
}.-ml-6{
  margin-left: -1.5rem;
}.-ml-60{
  margin-left: -15rem;
}.-ml-64{
  margin-left: -16rem;
}.-ml-7{
  margin-left: -1.75rem;
}.-ml-72{
  margin-left: -18rem;
}.-ml-8{
  margin-left: -2rem;
}.-ml-80{
  margin-left: -20rem;
}.-ml-9{
  margin-left: -2.25rem;
}.-ml-96{
  margin-left: -24rem;
}.-ml-px{
  margin-left: -1px;
}.-mr-0{
  margin-right: -0px;
}.-mr-0\\.5{
  margin-right: -0.125rem;
}.-mr-1{
  margin-right: -0.25rem;
}.-mr-1\\.5{
  margin-right: -0.375rem;
}.-mr-10{
  margin-right: -2.5rem;
}.-mr-11{
  margin-right: -2.75rem;
}.-mr-12{
  margin-right: -3rem;
}.-mr-14{
  margin-right: -3.5rem;
}.-mr-15{
  margin-right: -3.75rem;
}.-mr-16{
  margin-right: -4rem;
}.-mr-2{
  margin-right: -0.5rem;
}.-mr-2\\.5{
  margin-right: -0.625rem;
}.-mr-20{
  margin-right: -5rem;
}.-mr-24{
  margin-right: -6rem;
}.-mr-25{
  margin-right: -6.25rem;
}.-mr-28{
  margin-right: -7rem;
}.-mr-3{
  margin-right: -0.75rem;
}.-mr-3\\.5{
  margin-right: -0.875rem;
}.-mr-30{
  margin-right: -7.5rem;
}.-mr-32{
  margin-right: -8rem;
}.-mr-36{
  margin-right: -9rem;
}.-mr-4{
  margin-right: -1rem;
}.-mr-40{
  margin-right: -10rem;
}.-mr-44{
  margin-right: -11rem;
}.-mr-48{
  margin-right: -12rem;
}.-mr-5{
  margin-right: -1.25rem;
}.-mr-52{
  margin-right: -13rem;
}.-mr-56{
  margin-right: -14rem;
}.-mr-6{
  margin-right: -1.5rem;
}.-mr-60{
  margin-right: -15rem;
}.-mr-64{
  margin-right: -16rem;
}.-mr-7{
  margin-right: -1.75rem;
}.-mr-72{
  margin-right: -18rem;
}.-mr-8{
  margin-right: -2rem;
}.-mr-80{
  margin-right: -20rem;
}.-mr-9{
  margin-right: -2.25rem;
}.-mr-96{
  margin-right: -24rem;
}.-mr-px{
  margin-right: -1px;
}.-ms-0{
  margin-left: -0px;
}.-ms-0\\.5{
  margin-left: -0.125rem;
}.-ms-1{
  margin-left: -0.25rem;
}.-ms-1\\.5{
  margin-left: -0.375rem;
}.-ms-10{
  margin-left: -2.5rem;
}.-ms-11{
  margin-left: -2.75rem;
}.-ms-12{
  margin-left: -3rem;
}.-ms-14{
  margin-left: -3.5rem;
}.-ms-15{
  margin-left: -3.75rem;
}.-ms-16{
  margin-left: -4rem;
}.-ms-2{
  margin-left: -0.5rem;
}.-ms-2\\.5{
  margin-left: -0.625rem;
}.-ms-20{
  margin-left: -5rem;
}.-ms-24{
  margin-left: -6rem;
}.-ms-25{
  margin-left: -6.25rem;
}.-ms-28{
  margin-left: -7rem;
}.-ms-3{
  margin-left: -0.75rem;
}.-ms-3\\.5{
  margin-left: -0.875rem;
}.-ms-30{
  margin-left: -7.5rem;
}.-ms-32{
  margin-left: -8rem;
}.-ms-36{
  margin-left: -9rem;
}.-ms-4{
  margin-left: -1rem;
}.-ms-40{
  margin-left: -10rem;
}.-ms-44{
  margin-left: -11rem;
}.-ms-48{
  margin-left: -12rem;
}.-ms-5{
  margin-left: -1.25rem;
}.-ms-52{
  margin-left: -13rem;
}.-ms-56{
  margin-left: -14rem;
}.-ms-6{
  margin-left: -1.5rem;
}.-ms-60{
  margin-left: -15rem;
}.-ms-64{
  margin-left: -16rem;
}.-ms-7{
  margin-left: -1.75rem;
}.-ms-72{
  margin-left: -18rem;
}.-ms-8{
  margin-left: -2rem;
}.-ms-80{
  margin-left: -20rem;
}.-ms-9{
  margin-left: -2.25rem;
}.-ms-96{
  margin-left: -24rem;
}.-ms-px{
  margin-left: -1px;
}.-mt-0{
  margin-top: -0px;
}.-mt-0\\.5{
  margin-top: -0.125rem;
}.-mt-1{
  margin-top: -0.25rem;
}.-mt-1\\.5{
  margin-top: -0.375rem;
}.-mt-10{
  margin-top: -2.5rem;
}.-mt-11{
  margin-top: -2.75rem;
}.-mt-12{
  margin-top: -3rem;
}.-mt-14{
  margin-top: -3.5rem;
}.-mt-15{
  margin-top: -3.75rem;
}.-mt-16{
  margin-top: -4rem;
}.-mt-2{
  margin-top: -0.5rem;
}.-mt-2\\.5{
  margin-top: -0.625rem;
}.-mt-20{
  margin-top: -5rem;
}.-mt-24{
  margin-top: -6rem;
}.-mt-25{
  margin-top: -6.25rem;
}.-mt-28{
  margin-top: -7rem;
}.-mt-3{
  margin-top: -0.75rem;
}.-mt-3\\.5{
  margin-top: -0.875rem;
}.-mt-30{
  margin-top: -7.5rem;
}.-mt-32{
  margin-top: -8rem;
}.-mt-36{
  margin-top: -9rem;
}.-mt-4{
  margin-top: -1rem;
}.-mt-40{
  margin-top: -10rem;
}.-mt-44{
  margin-top: -11rem;
}.-mt-48{
  margin-top: -12rem;
}.-mt-5{
  margin-top: -1.25rem;
}.-mt-52{
  margin-top: -13rem;
}.-mt-56{
  margin-top: -14rem;
}.-mt-6{
  margin-top: -1.5rem;
}.-mt-60{
  margin-top: -15rem;
}.-mt-64{
  margin-top: -16rem;
}.-mt-7{
  margin-top: -1.75rem;
}.-mt-72{
  margin-top: -18rem;
}.-mt-8{
  margin-top: -2rem;
}.-mt-80{
  margin-top: -20rem;
}.-mt-9{
  margin-top: -2.25rem;
}.-mt-96{
  margin-top: -24rem;
}.-mt-px{
  margin-top: -1px;
}.mb-0{
  margin-bottom: 0px;
}.mb-0\\.5{
  margin-bottom: 0.125rem;
}.mb-1{
  margin-bottom: 0.25rem;
}.mb-1\\.5{
  margin-bottom: 0.375rem;
}.mb-10{
  margin-bottom: 2.5rem;
}.mb-11{
  margin-bottom: 2.75rem;
}.mb-12{
  margin-bottom: 3rem;
}.mb-14{
  margin-bottom: 3.5rem;
}.mb-15{
  margin-bottom: 3.75rem;
}.mb-16{
  margin-bottom: 4rem;
}.mb-2{
  margin-bottom: 0.5rem;
}.mb-2\\.5{
  margin-bottom: 0.625rem;
}.mb-20{
  margin-bottom: 5rem;
}.mb-24{
  margin-bottom: 6rem;
}.mb-25{
  margin-bottom: 6.25rem;
}.mb-28{
  margin-bottom: 7rem;
}.mb-3{
  margin-bottom: 0.75rem;
}.mb-3\\.5{
  margin-bottom: 0.875rem;
}.mb-30{
  margin-bottom: 7.5rem;
}.mb-32{
  margin-bottom: 8rem;
}.mb-36{
  margin-bottom: 9rem;
}.mb-4{
  margin-bottom: 1rem;
}.mb-40{
  margin-bottom: 10rem;
}.mb-44{
  margin-bottom: 11rem;
}.mb-48{
  margin-bottom: 12rem;
}.mb-5{
  margin-bottom: 1.25rem;
}.mb-52{
  margin-bottom: 13rem;
}.mb-56{
  margin-bottom: 14rem;
}.mb-6{
  margin-bottom: 1.5rem;
}.mb-60{
  margin-bottom: 15rem;
}.mb-64{
  margin-bottom: 16rem;
}.mb-7{
  margin-bottom: 1.75rem;
}.mb-72{
  margin-bottom: 18rem;
}.mb-8{
  margin-bottom: 2rem;
}.mb-80{
  margin-bottom: 20rem;
}.mb-9{
  margin-bottom: 2.25rem;
}.mb-96{
  margin-bottom: 24rem;
}.mb-auto{
  margin-bottom: auto;
}.mb-px{
  margin-bottom: 1px;
}.me-0{
  margin-right: 0px;
}.me-0\\.5{
  margin-right: 0.125rem;
}.me-1{
  margin-right: 0.25rem;
}.me-1\\.5{
  margin-right: 0.375rem;
}.me-10{
  margin-right: 2.5rem;
}.me-11{
  margin-right: 2.75rem;
}.me-12{
  margin-right: 3rem;
}.me-14{
  margin-right: 3.5rem;
}.me-15{
  margin-right: 3.75rem;
}.me-16{
  margin-right: 4rem;
}.me-2{
  margin-right: 0.5rem;
}.me-2\\.5{
  margin-right: 0.625rem;
}.me-20{
  margin-right: 5rem;
}.me-24{
  margin-right: 6rem;
}.me-25{
  margin-right: 6.25rem;
}.me-28{
  margin-right: 7rem;
}.me-3{
  margin-right: 0.75rem;
}.me-3\\.5{
  margin-right: 0.875rem;
}.me-30{
  margin-right: 7.5rem;
}.me-32{
  margin-right: 8rem;
}.me-36{
  margin-right: 9rem;
}.me-4{
  margin-right: 1rem;
}.me-40{
  margin-right: 10rem;
}.me-44{
  margin-right: 11rem;
}.me-48{
  margin-right: 12rem;
}.me-5{
  margin-right: 1.25rem;
}.me-52{
  margin-right: 13rem;
}.me-56{
  margin-right: 14rem;
}.me-6{
  margin-right: 1.5rem;
}.me-60{
  margin-right: 15rem;
}.me-64{
  margin-right: 16rem;
}.me-7{
  margin-right: 1.75rem;
}.me-72{
  margin-right: 18rem;
}.me-8{
  margin-right: 2rem;
}.me-80{
  margin-right: 20rem;
}.me-9{
  margin-right: 2.25rem;
}.me-96{
  margin-right: 24rem;
}.me-auto{
  margin-right: auto;
}.me-px{
  margin-right: 1px;
}.ml-0{
  margin-left: 0px;
}.ml-0\\.5{
  margin-left: 0.125rem;
}.ml-1{
  margin-left: 0.25rem;
}.ml-1\\.5{
  margin-left: 0.375rem;
}.ml-10{
  margin-left: 2.5rem;
}.ml-11{
  margin-left: 2.75rem;
}.ml-12{
  margin-left: 3rem;
}.ml-14{
  margin-left: 3.5rem;
}.ml-15{
  margin-left: 3.75rem;
}.ml-16{
  margin-left: 4rem;
}.ml-2{
  margin-left: 0.5rem;
}.ml-2\\.5{
  margin-left: 0.625rem;
}.ml-20{
  margin-left: 5rem;
}.ml-24{
  margin-left: 6rem;
}.ml-25{
  margin-left: 6.25rem;
}.ml-28{
  margin-left: 7rem;
}.ml-3{
  margin-left: 0.75rem;
}.ml-3\\.5{
  margin-left: 0.875rem;
}.ml-30{
  margin-left: 7.5rem;
}.ml-32{
  margin-left: 8rem;
}.ml-36{
  margin-left: 9rem;
}.ml-4{
  margin-left: 1rem;
}.ml-40{
  margin-left: 10rem;
}.ml-44{
  margin-left: 11rem;
}.ml-48{
  margin-left: 12rem;
}.ml-5{
  margin-left: 1.25rem;
}.ml-52{
  margin-left: 13rem;
}.ml-56{
  margin-left: 14rem;
}.ml-6{
  margin-left: 1.5rem;
}.ml-60{
  margin-left: 15rem;
}.ml-64{
  margin-left: 16rem;
}.ml-7{
  margin-left: 1.75rem;
}.ml-72{
  margin-left: 18rem;
}.ml-8{
  margin-left: 2rem;
}.ml-80{
  margin-left: 20rem;
}.ml-9{
  margin-left: 2.25rem;
}.ml-96{
  margin-left: 24rem;
}.ml-auto{
  margin-left: auto;
}.ml-px{
  margin-left: 1px;
}.mr-0{
  margin-right: 0px;
}.mr-0\\.5{
  margin-right: 0.125rem;
}.mr-1{
  margin-right: 0.25rem;
}.mr-1\\.5{
  margin-right: 0.375rem;
}.mr-10{
  margin-right: 2.5rem;
}.mr-11{
  margin-right: 2.75rem;
}.mr-12{
  margin-right: 3rem;
}.mr-14{
  margin-right: 3.5rem;
}.mr-15{
  margin-right: 3.75rem;
}.mr-16{
  margin-right: 4rem;
}.mr-2{
  margin-right: 0.5rem;
}.mr-2\\.5{
  margin-right: 0.625rem;
}.mr-20{
  margin-right: 5rem;
}.mr-24{
  margin-right: 6rem;
}.mr-25{
  margin-right: 6.25rem;
}.mr-28{
  margin-right: 7rem;
}.mr-3{
  margin-right: 0.75rem;
}.mr-3\\.5{
  margin-right: 0.875rem;
}.mr-30{
  margin-right: 7.5rem;
}.mr-32{
  margin-right: 8rem;
}.mr-36{
  margin-right: 9rem;
}.mr-4{
  margin-right: 1rem;
}.mr-40{
  margin-right: 10rem;
}.mr-44{
  margin-right: 11rem;
}.mr-48{
  margin-right: 12rem;
}.mr-5{
  margin-right: 1.25rem;
}.mr-52{
  margin-right: 13rem;
}.mr-56{
  margin-right: 14rem;
}.mr-6{
  margin-right: 1.5rem;
}.mr-60{
  margin-right: 15rem;
}.mr-64{
  margin-right: 16rem;
}.mr-7{
  margin-right: 1.75rem;
}.mr-72{
  margin-right: 18rem;
}.mr-8{
  margin-right: 2rem;
}.mr-80{
  margin-right: 20rem;
}.mr-9{
  margin-right: 2.25rem;
}.mr-96{
  margin-right: 24rem;
}.mr-auto{
  margin-right: auto;
}.mr-px{
  margin-right: 1px;
}.ms-0{
  margin-left: 0px;
}.ms-0\\.5{
  margin-left: 0.125rem;
}.ms-1{
  margin-left: 0.25rem;
}.ms-1\\.5{
  margin-left: 0.375rem;
}.ms-10{
  margin-left: 2.5rem;
}.ms-11{
  margin-left: 2.75rem;
}.ms-12{
  margin-left: 3rem;
}.ms-14{
  margin-left: 3.5rem;
}.ms-15{
  margin-left: 3.75rem;
}.ms-16{
  margin-left: 4rem;
}.ms-2{
  margin-left: 0.5rem;
}.ms-2\\.5{
  margin-left: 0.625rem;
}.ms-20{
  margin-left: 5rem;
}.ms-24{
  margin-left: 6rem;
}.ms-25{
  margin-left: 6.25rem;
}.ms-28{
  margin-left: 7rem;
}.ms-3{
  margin-left: 0.75rem;
}.ms-3\\.5{
  margin-left: 0.875rem;
}.ms-30{
  margin-left: 7.5rem;
}.ms-32{
  margin-left: 8rem;
}.ms-36{
  margin-left: 9rem;
}.ms-4{
  margin-left: 1rem;
}.ms-40{
  margin-left: 10rem;
}.ms-44{
  margin-left: 11rem;
}.ms-48{
  margin-left: 12rem;
}.ms-5{
  margin-left: 1.25rem;
}.ms-52{
  margin-left: 13rem;
}.ms-56{
  margin-left: 14rem;
}.ms-6{
  margin-left: 1.5rem;
}.ms-60{
  margin-left: 15rem;
}.ms-64{
  margin-left: 16rem;
}.ms-7{
  margin-left: 1.75rem;
}.ms-72{
  margin-left: 18rem;
}.ms-8{
  margin-left: 2rem;
}.ms-80{
  margin-left: 20rem;
}.ms-9{
  margin-left: 2.25rem;
}.ms-96{
  margin-left: 24rem;
}.ms-auto{
  margin-left: auto;
}.ms-px{
  margin-left: 1px;
}.mt-0{
  margin-top: 0px;
}.mt-0\\.5{
  margin-top: 0.125rem;
}.mt-1{
  margin-top: 0.25rem;
}.mt-1\\.5{
  margin-top: 0.375rem;
}.mt-10{
  margin-top: 2.5rem;
}.mt-11{
  margin-top: 2.75rem;
}.mt-12{
  margin-top: 3rem;
}.mt-14{
  margin-top: 3.5rem;
}.mt-15{
  margin-top: 3.75rem;
}.mt-16{
  margin-top: 4rem;
}.mt-2{
  margin-top: 0.5rem;
}.mt-2\\.5{
  margin-top: 0.625rem;
}.mt-20{
  margin-top: 5rem;
}.mt-24{
  margin-top: 6rem;
}.mt-25{
  margin-top: 6.25rem;
}.mt-28{
  margin-top: 7rem;
}.mt-3{
  margin-top: 0.75rem;
}.mt-3\\.5{
  margin-top: 0.875rem;
}.mt-30{
  margin-top: 7.5rem;
}.mt-32{
  margin-top: 8rem;
}.mt-36{
  margin-top: 9rem;
}.mt-4{
  margin-top: 1rem;
}.mt-40{
  margin-top: 10rem;
}.mt-44{
  margin-top: 11rem;
}.mt-48{
  margin-top: 12rem;
}.mt-5{
  margin-top: 1.25rem;
}.mt-52{
  margin-top: 13rem;
}.mt-56{
  margin-top: 14rem;
}.mt-6{
  margin-top: 1.5rem;
}.mt-60{
  margin-top: 15rem;
}.mt-64{
  margin-top: 16rem;
}.mt-7{
  margin-top: 1.75rem;
}.mt-72{
  margin-top: 18rem;
}.mt-8{
  margin-top: 2rem;
}.mt-80{
  margin-top: 20rem;
}.mt-9{
  margin-top: 2.25rem;
}.mt-96{
  margin-top: 24rem;
}.mt-auto{
  margin-top: auto;
}.mt-px{
  margin-top: 1px;
}.block{
  display: block;
}.flex{
  display: flex;
}.grid{
  display: grid;
}.inline-grid{
  display: inline-grid;
}.contents{
  display: contents;
}.hidden{
  display: none;
}.aspect-square{
  aspect-ratio: 1 / 1;
}.aspect-video{
  aspect-ratio: 16 / 9;
}.h-0{
  height: 0px;
}.h-16{
  height: 4rem;
}.h-24{
  height: 6rem;
}.h-3{
  height: 0.75rem;
}.h-5{
  height: 1.25rem;
}.h-8{
  height: 2rem;
}.h-80{
  height: 20rem;
}.h-full{
  height: 100%;
}.h-screen{
  height: 100vh;
}.h-0\\.5{
  height: 0.125rem;
}.h-2{
  height: 0.5rem;
}.h-2\\.5{
  height: 0.625rem;
}.h-6{
  height: 1.5rem;
}.w-1\\/2{
  width: 50%;
}.w-1\\/3{
  width: 33.333333%;
}.w-1\\/4{
  width: 25%;
}.w-1\\/5{
  width: 20%;
}.w-1\\/6{
  width: 16.666667%;
}.w-24{
  width: 6rem;
}.w-3{
  width: 0.75rem;
}.w-3\\/5{
  width: 60%;
}.w-32{
  width: 8rem;
}.w-5{
  width: 1.25rem;
}.w-5\\/6{
  width: 83.333333%;
}.w-60{
  width: 15rem;
}.w-8{
  width: 2rem;
}.w-full{
  width: 100%;
}.w-screen{
  width: 100vw;
}.w-2{
  width: 0.5rem;
}.w-2\\.5{
  width: 0.625rem;
}.w-6{
  width: 1.5rem;
}.max-w-0{
  max-width: 0rem;
}.max-w-2xl{
  max-width: 42rem;
}.max-w-3xl{
  max-width: 48rem;
}.max-w-4xl{
  max-width: 56rem;
}.max-w-5xl{
  max-width: 64rem;
}.max-w-6xl{
  max-width: 72rem;
}.max-w-7xl{
  max-width: 80rem;
}.max-w-fit{
  max-width: -moz-fit-content;
  max-width: fit-content;
}.max-w-full{
  max-width: 100%;
}.max-w-lg{
  max-width: 32rem;
}.max-w-max{
  max-width: max-content;
}.max-w-md{
  max-width: 28rem;
}.max-w-min{
  max-width: min-content;
}.max-w-none{
  max-width: none;
}.max-w-prose{
  max-width: 65ch;
}.max-w-screen-2xl{
  max-width: 1536px;
}.max-w-screen-lg{
  max-width: 1024px;
}.max-w-screen-md{
  max-width: 768px;
}.max-w-screen-sm{
  max-width: 640px;
}.max-w-screen-xl{
  max-width: 1280px;
}.max-w-sm{
  max-width: 24rem;
}.max-w-xl{
  max-width: 36rem;
}.max-w-xs{
  max-width: 20rem;
}.shrink-0{
  flex-shrink: 0;
}.-translate-x-1\\/2{
  --tw-translate-x: -50%;
  transform: translate(-50%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.-translate-y-1\\/2{
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.-rotate-90{
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(-90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.rotate-90{
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.scale-y-100{
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.transform{
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.cursor-grabbing{
  cursor: grabbing;
}.cursor-pointer{
  cursor: pointer;
}.resize{
  resize: both;
}.list-none{
  list-style-type: none;
}.grid-flow-row{
  grid-auto-flow: row;
}.grid-flow-col{
  grid-auto-flow: column;
}.grid-flow-dense{
  grid-auto-flow: dense;
}.grid-flow-row-dense{
  grid-auto-flow: row dense;
}.grid-flow-col-dense{
  grid-auto-flow: column dense;
}.grid-cols-1{
  grid-template-columns: repeat(1, minmax(0, 1fr));
}.grid-cols-10{
  grid-template-columns: repeat(10, minmax(0, 1fr));
}.grid-cols-11{
  grid-template-columns: repeat(11, minmax(0, 1fr));
}.grid-cols-12{
  grid-template-columns: repeat(12, minmax(0, 1fr));
}.grid-cols-2{
  grid-template-columns: repeat(2, minmax(0, 1fr));
}.grid-cols-3{
  grid-template-columns: repeat(3, minmax(0, 1fr));
}.grid-cols-4{
  grid-template-columns: repeat(4, minmax(0, 1fr));
}.grid-cols-5{
  grid-template-columns: repeat(5, minmax(0, 1fr));
}.grid-cols-6{
  grid-template-columns: repeat(6, minmax(0, 1fr));
}.grid-cols-7{
  grid-template-columns: repeat(7, minmax(0, 1fr));
}.grid-cols-8{
  grid-template-columns: repeat(8, minmax(0, 1fr));
}.grid-cols-9{
  grid-template-columns: repeat(9, minmax(0, 1fr));
}.grid-cols-none{
  grid-template-columns: none;
}.grid-rows-1{
  grid-template-rows: repeat(1, minmax(0, 1fr));
}.grid-rows-2{
  grid-template-rows: repeat(2, minmax(0, 1fr));
}.grid-rows-3{
  grid-template-rows: repeat(3, minmax(0, 1fr));
}.grid-rows-4{
  grid-template-rows: repeat(4, minmax(0, 1fr));
}.grid-rows-5{
  grid-template-rows: repeat(5, minmax(0, 1fr));
}.grid-rows-6{
  grid-template-rows: repeat(6, minmax(0, 1fr));
}.grid-rows-none{
  grid-template-rows: none;
}.flex-row{
  flex-direction: row;
}.flex-col{
  flex-direction: column;
}.flex-wrap{
  flex-wrap: wrap;
}.place-items-start{
  align-items: start;
  justify-items: start;
  place-items: start;
}.place-items-end{
  align-items: end;
  justify-items: end;
  place-items: end;
}.place-items-center{
  align-items: center;
  justify-items: center;
  place-items: center;
}.items-start{
  align-items: flex-start;
}.items-end{
  align-items: flex-end;
}.items-center{
  align-items: center;
}.justify-start{
  justify-content: flex-start;
}.justify-end{
  justify-content: flex-end;
}.justify-center{
  justify-content: center;
}.justify-between{
  justify-content: space-between;
}.justify-items-start{
  justify-items: start;
}.justify-items-end{
  justify-items: end;
}.justify-items-center{
  justify-items: center;
}.gap-0{
  gap: 0px;
}.gap-0\\.5{
  gap: 0.125rem;
}.gap-1{
  gap: 0.25rem;
}.gap-1\\.5{
  gap: 0.375rem;
}.gap-10{
  gap: 2.5rem;
}.gap-11{
  gap: 2.75rem;
}.gap-12{
  gap: 3rem;
}.gap-14{
  gap: 3.5rem;
}.gap-15{
  gap: 3.75rem;
}.gap-16{
  gap: 4rem;
}.gap-2{
  gap: 0.5rem;
}.gap-2\\.5{
  gap: 0.625rem;
}.gap-20{
  gap: 5rem;
}.gap-24{
  gap: 6rem;
}.gap-25{
  gap: 6.25rem;
}.gap-28{
  gap: 7rem;
}.gap-3{
  gap: 0.75rem;
}.gap-3\\.5{
  gap: 0.875rem;
}.gap-30{
  gap: 7.5rem;
}.gap-32{
  gap: 8rem;
}.gap-36{
  gap: 9rem;
}.gap-4{
  gap: 1rem;
}.gap-40{
  gap: 10rem;
}.gap-44{
  gap: 11rem;
}.gap-48{
  gap: 12rem;
}.gap-5{
  gap: 1.25rem;
}.gap-52{
  gap: 13rem;
}.gap-56{
  gap: 14rem;
}.gap-6{
  gap: 1.5rem;
}.gap-60{
  gap: 15rem;
}.gap-64{
  gap: 16rem;
}.gap-7{
  gap: 1.75rem;
}.gap-72{
  gap: 18rem;
}.gap-8{
  gap: 2rem;
}.gap-80{
  gap: 20rem;
}.gap-9{
  gap: 2.25rem;
}.gap-96{
  gap: 24rem;
}.gap-px{
  gap: 1px;
}.gap-x-0{
  -moz-column-gap: 0px;
       column-gap: 0px;
}.gap-x-0\\.5{
  -moz-column-gap: 0.125rem;
       column-gap: 0.125rem;
}.gap-x-1{
  -moz-column-gap: 0.25rem;
       column-gap: 0.25rem;
}.gap-x-1\\.5{
  -moz-column-gap: 0.375rem;
       column-gap: 0.375rem;
}.gap-x-10{
  -moz-column-gap: 2.5rem;
       column-gap: 2.5rem;
}.gap-x-11{
  -moz-column-gap: 2.75rem;
       column-gap: 2.75rem;
}.gap-x-12{
  -moz-column-gap: 3rem;
       column-gap: 3rem;
}.gap-x-14{
  -moz-column-gap: 3.5rem;
       column-gap: 3.5rem;
}.gap-x-15{
  -moz-column-gap: 3.75rem;
       column-gap: 3.75rem;
}.gap-x-16{
  -moz-column-gap: 4rem;
       column-gap: 4rem;
}.gap-x-2{
  -moz-column-gap: 0.5rem;
       column-gap: 0.5rem;
}.gap-x-2\\.5{
  -moz-column-gap: 0.625rem;
       column-gap: 0.625rem;
}.gap-x-20{
  -moz-column-gap: 5rem;
       column-gap: 5rem;
}.gap-x-24{
  -moz-column-gap: 6rem;
       column-gap: 6rem;
}.gap-x-25{
  -moz-column-gap: 6.25rem;
       column-gap: 6.25rem;
}.gap-x-28{
  -moz-column-gap: 7rem;
       column-gap: 7rem;
}.gap-x-3{
  -moz-column-gap: 0.75rem;
       column-gap: 0.75rem;
}.gap-x-3\\.5{
  -moz-column-gap: 0.875rem;
       column-gap: 0.875rem;
}.gap-x-30{
  -moz-column-gap: 7.5rem;
       column-gap: 7.5rem;
}.gap-x-32{
  -moz-column-gap: 8rem;
       column-gap: 8rem;
}.gap-x-36{
  -moz-column-gap: 9rem;
       column-gap: 9rem;
}.gap-x-4{
  -moz-column-gap: 1rem;
       column-gap: 1rem;
}.gap-x-40{
  -moz-column-gap: 10rem;
       column-gap: 10rem;
}.gap-x-44{
  -moz-column-gap: 11rem;
       column-gap: 11rem;
}.gap-x-48{
  -moz-column-gap: 12rem;
       column-gap: 12rem;
}.gap-x-5{
  -moz-column-gap: 1.25rem;
       column-gap: 1.25rem;
}.gap-x-52{
  -moz-column-gap: 13rem;
       column-gap: 13rem;
}.gap-x-56{
  -moz-column-gap: 14rem;
       column-gap: 14rem;
}.gap-x-6{
  -moz-column-gap: 1.5rem;
       column-gap: 1.5rem;
}.gap-x-60{
  -moz-column-gap: 15rem;
       column-gap: 15rem;
}.gap-x-64{
  -moz-column-gap: 16rem;
       column-gap: 16rem;
}.gap-x-7{
  -moz-column-gap: 1.75rem;
       column-gap: 1.75rem;
}.gap-x-72{
  -moz-column-gap: 18rem;
       column-gap: 18rem;
}.gap-x-8{
  -moz-column-gap: 2rem;
       column-gap: 2rem;
}.gap-x-80{
  -moz-column-gap: 20rem;
       column-gap: 20rem;
}.gap-x-9{
  -moz-column-gap: 2.25rem;
       column-gap: 2.25rem;
}.gap-x-96{
  -moz-column-gap: 24rem;
       column-gap: 24rem;
}.gap-x-px{
  -moz-column-gap: 1px;
       column-gap: 1px;
}.gap-y-0{
  row-gap: 0px;
}.gap-y-0\\.5{
  row-gap: 0.125rem;
}.gap-y-1{
  row-gap: 0.25rem;
}.gap-y-1\\.5{
  row-gap: 0.375rem;
}.gap-y-10{
  row-gap: 2.5rem;
}.gap-y-11{
  row-gap: 2.75rem;
}.gap-y-12{
  row-gap: 3rem;
}.gap-y-14{
  row-gap: 3.5rem;
}.gap-y-15{
  row-gap: 3.75rem;
}.gap-y-16{
  row-gap: 4rem;
}.gap-y-2{
  row-gap: 0.5rem;
}.gap-y-2\\.5{
  row-gap: 0.625rem;
}.gap-y-20{
  row-gap: 5rem;
}.gap-y-24{
  row-gap: 6rem;
}.gap-y-25{
  row-gap: 6.25rem;
}.gap-y-28{
  row-gap: 7rem;
}.gap-y-3{
  row-gap: 0.75rem;
}.gap-y-3\\.5{
  row-gap: 0.875rem;
}.gap-y-30{
  row-gap: 7.5rem;
}.gap-y-32{
  row-gap: 8rem;
}.gap-y-36{
  row-gap: 9rem;
}.gap-y-4{
  row-gap: 1rem;
}.gap-y-40{
  row-gap: 10rem;
}.gap-y-44{
  row-gap: 11rem;
}.gap-y-48{
  row-gap: 12rem;
}.gap-y-5{
  row-gap: 1.25rem;
}.gap-y-52{
  row-gap: 13rem;
}.gap-y-56{
  row-gap: 14rem;
}.gap-y-6{
  row-gap: 1.5rem;
}.gap-y-60{
  row-gap: 15rem;
}.gap-y-64{
  row-gap: 16rem;
}.gap-y-7{
  row-gap: 1.75rem;
}.gap-y-72{
  row-gap: 18rem;
}.gap-y-8{
  row-gap: 2rem;
}.gap-y-80{
  row-gap: 20rem;
}.gap-y-9{
  row-gap: 2.25rem;
}.gap-y-96{
  row-gap: 24rem;
}.gap-y-px{
  row-gap: 1px;
}.overflow-hidden{
  overflow: hidden;
}.overflow-y-hidden{
  overflow-y: hidden;
}.whitespace-normal{
  white-space: normal;
}.whitespace-break-spaces{
  white-space: break-spaces;
}.rounded{
  border-radius: 0.25rem;
}.rounded-2xl{
  border-radius: 1rem;
}.rounded-3xl{
  border-radius: 1.5rem;
}.rounded-full{
  border-radius: 9999px;
}.rounded-lg{
  border-radius: 0.5rem;
}.rounded-md{
  border-radius: 0.375rem;
}.rounded-none{
  border-radius: 0px;
}.rounded-sm{
  border-radius: 0.125rem;
}.rounded-xl{
  border-radius: 0.75rem;
}.rounded-b{
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}.rounded-b-2xl{
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
}.rounded-b-3xl{
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}.rounded-b-full{
  border-bottom-right-radius: 9999px;
  border-bottom-left-radius: 9999px;
}.rounded-b-lg{
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}.rounded-b-md{
  border-bottom-right-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}.rounded-b-none{
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}.rounded-b-sm{
  border-bottom-right-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
}.rounded-b-xl{
  border-bottom-right-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}.rounded-e{
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}.rounded-e-2xl{
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}.rounded-e-3xl{
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}.rounded-e-full{
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}.rounded-e-lg{
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}.rounded-e-md{
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}.rounded-e-none{
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}.rounded-e-sm{
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
}.rounded-e-xl{
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}.rounded-l{
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}.rounded-l-2xl{
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}.rounded-l-3xl{
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}.rounded-l-full{
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
}.rounded-l-lg{
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}.rounded-l-md{
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}.rounded-l-none{
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}.rounded-l-sm{
  border-top-left-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
}.rounded-l-xl{
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}.rounded-r{
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}.rounded-r-2xl{
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}.rounded-r-3xl{
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}.rounded-r-full{
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}.rounded-r-lg{
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}.rounded-r-md{
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}.rounded-r-none{
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}.rounded-r-sm{
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
}.rounded-r-xl{
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}.rounded-s{
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}.rounded-s-2xl{
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}.rounded-s-3xl{
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}.rounded-s-full{
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
}.rounded-s-lg{
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}.rounded-s-md{
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}.rounded-s-none{
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}.rounded-s-sm{
  border-top-left-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
}.rounded-s-xl{
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}.rounded-t{
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}.rounded-t-2xl{
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}.rounded-t-3xl{
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}.rounded-t-full{
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
}.rounded-t-lg{
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}.rounded-t-md{
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}.rounded-t-none{
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}.rounded-t-sm{
  border-top-left-radius: 0.125rem;
  border-top-right-radius: 0.125rem;
}.rounded-t-xl{
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}.rounded-bl{
  border-bottom-left-radius: 0.25rem;
}.rounded-bl-2xl{
  border-bottom-left-radius: 1rem;
}.rounded-bl-3xl{
  border-bottom-left-radius: 1.5rem;
}.rounded-bl-full{
  border-bottom-left-radius: 9999px;
}.rounded-bl-lg{
  border-bottom-left-radius: 0.5rem;
}.rounded-bl-md{
  border-bottom-left-radius: 0.375rem;
}.rounded-bl-none{
  border-bottom-left-radius: 0px;
}.rounded-bl-sm{
  border-bottom-left-radius: 0.125rem;
}.rounded-bl-xl{
  border-bottom-left-radius: 0.75rem;
}.rounded-br{
  border-bottom-right-radius: 0.25rem;
}.rounded-br-2xl{
  border-bottom-right-radius: 1rem;
}.rounded-br-3xl{
  border-bottom-right-radius: 1.5rem;
}.rounded-br-full{
  border-bottom-right-radius: 9999px;
}.rounded-br-lg{
  border-bottom-right-radius: 0.5rem;
}.rounded-br-md{
  border-bottom-right-radius: 0.375rem;
}.rounded-br-none{
  border-bottom-right-radius: 0px;
}.rounded-br-sm{
  border-bottom-right-radius: 0.125rem;
}.rounded-br-xl{
  border-bottom-right-radius: 0.75rem;
}.rounded-ee{
  border-bottom-right-radius: 0.25rem;
}.rounded-ee-2xl{
  border-bottom-right-radius: 1rem;
}.rounded-ee-3xl{
  border-bottom-right-radius: 1.5rem;
}.rounded-ee-full{
  border-bottom-right-radius: 9999px;
}.rounded-ee-lg{
  border-bottom-right-radius: 0.5rem;
}.rounded-ee-md{
  border-bottom-right-radius: 0.375rem;
}.rounded-ee-none{
  border-bottom-right-radius: 0px;
}.rounded-ee-sm{
  border-bottom-right-radius: 0.125rem;
}.rounded-ee-xl{
  border-bottom-right-radius: 0.75rem;
}.rounded-es{
  border-bottom-left-radius: 0.25rem;
}.rounded-es-2xl{
  border-bottom-left-radius: 1rem;
}.rounded-es-3xl{
  border-bottom-left-radius: 1.5rem;
}.rounded-es-full{
  border-bottom-left-radius: 9999px;
}.rounded-es-lg{
  border-bottom-left-radius: 0.5rem;
}.rounded-es-md{
  border-bottom-left-radius: 0.375rem;
}.rounded-es-none{
  border-bottom-left-radius: 0px;
}.rounded-es-sm{
  border-bottom-left-radius: 0.125rem;
}.rounded-es-xl{
  border-bottom-left-radius: 0.75rem;
}.rounded-se{
  border-top-right-radius: 0.25rem;
}.rounded-se-2xl{
  border-top-right-radius: 1rem;
}.rounded-se-3xl{
  border-top-right-radius: 1.5rem;
}.rounded-se-full{
  border-top-right-radius: 9999px;
}.rounded-se-lg{
  border-top-right-radius: 0.5rem;
}.rounded-se-md{
  border-top-right-radius: 0.375rem;
}.rounded-se-none{
  border-top-right-radius: 0px;
}.rounded-se-sm{
  border-top-right-radius: 0.125rem;
}.rounded-se-xl{
  border-top-right-radius: 0.75rem;
}.rounded-ss{
  border-top-left-radius: 0.25rem;
}.rounded-ss-2xl{
  border-top-left-radius: 1rem;
}.rounded-ss-3xl{
  border-top-left-radius: 1.5rem;
}.rounded-ss-full{
  border-top-left-radius: 9999px;
}.rounded-ss-lg{
  border-top-left-radius: 0.5rem;
}.rounded-ss-md{
  border-top-left-radius: 0.375rem;
}.rounded-ss-none{
  border-top-left-radius: 0px;
}.rounded-ss-sm{
  border-top-left-radius: 0.125rem;
}.rounded-ss-xl{
  border-top-left-radius: 0.75rem;
}.rounded-tl{
  border-top-left-radius: 0.25rem;
}.rounded-tl-2xl{
  border-top-left-radius: 1rem;
}.rounded-tl-3xl{
  border-top-left-radius: 1.5rem;
}.rounded-tl-full{
  border-top-left-radius: 9999px;
}.rounded-tl-lg{
  border-top-left-radius: 0.5rem;
}.rounded-tl-md{
  border-top-left-radius: 0.375rem;
}.rounded-tl-none{
  border-top-left-radius: 0px;
}.rounded-tl-sm{
  border-top-left-radius: 0.125rem;
}.rounded-tl-xl{
  border-top-left-radius: 0.75rem;
}.rounded-tr{
  border-top-right-radius: 0.25rem;
}.rounded-tr-2xl{
  border-top-right-radius: 1rem;
}.rounded-tr-3xl{
  border-top-right-radius: 1.5rem;
}.rounded-tr-full{
  border-top-right-radius: 9999px;
}.rounded-tr-lg{
  border-top-right-radius: 0.5rem;
}.rounded-tr-md{
  border-top-right-radius: 0.375rem;
}.rounded-tr-none{
  border-top-right-radius: 0px;
}.rounded-tr-sm{
  border-top-right-radius: 0.125rem;
}.rounded-tr-xl{
  border-top-right-radius: 0.75rem;
}.border{
  border-width: 1px;
}.border-b{
  border-bottom-width: 1px;
}.border-none{
  border-style: none;
}.border-white\\/10{
  border-color: rgba(255, 255, 255, 0.1);
}.bg-blue-100{
  --tw-bg-opacity: 1;
  background-color: rgba(219, 234, 254, 1);
  background-color: rgba(219, 234, 254, var(--tw-bg-opacity));
}.bg-blue-500{
  --tw-bg-opacity: 1;
  background-color: rgba(59, 130, 246, 1);
  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));
}.bg-blue-500\\/50{
  background-color: rgba(59, 130, 246, 0.5);
}.bg-ecc-yellow{
  --tw-bg-opacity: 1;
  background-color: rgba(253, 242, 81, 1);
  background-color: rgba(253, 242, 81, var(--tw-bg-opacity));
}.bg-gray-100{
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, 1);
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
}.bg-gray-700{
  --tw-bg-opacity: 1;
  background-color: rgba(55, 65, 81, 1);
  background-color: rgba(55, 65, 81, var(--tw-bg-opacity));
}.bg-green-400{
  --tw-bg-opacity: 1;
  background-color: rgba(74, 222, 128, 1);
  background-color: rgba(74, 222, 128, var(--tw-bg-opacity));
}.bg-indigo-100{
  --tw-bg-opacity: 1;
  background-color: rgba(224, 231, 255, 1);
  background-color: rgba(224, 231, 255, var(--tw-bg-opacity));
}.bg-indigo-400{
  --tw-bg-opacity: 1;
  background-color: rgba(129, 140, 248, 1);
  background-color: rgba(129, 140, 248, var(--tw-bg-opacity));
}.bg-purple-500{
  --tw-bg-opacity: 1;
  background-color: rgba(168, 85, 247, 1);
  background-color: rgba(168, 85, 247, var(--tw-bg-opacity));
}.bg-purple-500\\/50{
  background-color: rgba(168, 85, 247, 0.5);
}.bg-red-200{
  --tw-bg-opacity: 1;
  background-color: rgba(254, 202, 202, 1);
  background-color: rgba(254, 202, 202, var(--tw-bg-opacity));
}.bg-red-400{
  --tw-bg-opacity: 1;
  background-color: rgba(248, 113, 113, 1);
  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));
}.bg-red-500{
  --tw-bg-opacity: 1;
  background-color: rgba(239, 68, 68, 1);
  background-color: rgba(239, 68, 68, var(--tw-bg-opacity));
}.bg-red-500\\/50{
  background-color: rgba(239, 68, 68, 0.5);
}.bg-slate-100{
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}.bg-stone-200{
  --tw-bg-opacity: 1;
  background-color: rgba(231, 229, 228, 1);
  background-color: rgba(231, 229, 228, var(--tw-bg-opacity));
}.bg-white{
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}.bg-yellow-100{
  --tw-bg-opacity: 1;
  background-color: rgba(254, 249, 195, 1);
  background-color: rgba(254, 249, 195, var(--tw-bg-opacity));
}.bg-yellow-200{
  --tw-bg-opacity: 1;
  background-color: rgba(254, 240, 138, 1);
  background-color: rgba(254, 240, 138, var(--tw-bg-opacity));
}.bg-yellow-400{
  --tw-bg-opacity: 1;
  background-color: rgba(250, 204, 21, 1);
  background-color: rgba(250, 204, 21, var(--tw-bg-opacity));
}.bg-zinc-500{
  --tw-bg-opacity: 1;
  background-color: rgba(113, 113, 122, 1);
  background-color: rgba(113, 113, 122, var(--tw-bg-opacity));
}.bg-gray-200{
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, 1);
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
}.bg-blue-400{
  --tw-bg-opacity: 1;
  background-color: rgba(96, 165, 250, 1);
  background-color: rgba(96, 165, 250, var(--tw-bg-opacity));
}.bg-gradient-to-b{
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
}.from-black\\/70{
  --tw-gradient-from: rgba(0, 0, 0, 0.7) var(--tw-gradient-from-position);
  --tw-gradient-to: rgba(0, 0, 0, 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-indigo-400{
  --tw-gradient-from: #818cf8 var(--tw-gradient-from-position);
  --tw-gradient-to: rgba(129, 140, 248, 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.to-black\\/20{
  --tw-gradient-to: rgba(0, 0, 0, 0.2) var(--tw-gradient-to-position);
}.to-violet-800{
  --tw-gradient-to: #5b21b6 var(--tw-gradient-to-position);
}.object-contain{
  object-fit: contain;
}.object-cover{
  object-fit: cover;
}.object-center{
  object-position: center;
}.p-0{
  padding: 0px;
}.p-0\\.5{
  padding: 0.125rem;
}.p-1{
  padding: 0.25rem;
}.p-1\\.5{
  padding: 0.375rem;
}.p-10{
  padding: 2.5rem;
}.p-11{
  padding: 2.75rem;
}.p-12{
  padding: 3rem;
}.p-14{
  padding: 3.5rem;
}.p-15{
  padding: 3.75rem;
}.p-16{
  padding: 4rem;
}.p-2{
  padding: 0.5rem;
}.p-2\\.5{
  padding: 0.625rem;
}.p-20{
  padding: 5rem;
}.p-24{
  padding: 6rem;
}.p-25{
  padding: 6.25rem;
}.p-28{
  padding: 7rem;
}.p-3{
  padding: 0.75rem;
}.p-3\\.5{
  padding: 0.875rem;
}.p-30{
  padding: 7.5rem;
}.p-32{
  padding: 8rem;
}.p-36{
  padding: 9rem;
}.p-4{
  padding: 1rem;
}.p-40{
  padding: 10rem;
}.p-44{
  padding: 11rem;
}.p-48{
  padding: 12rem;
}.p-5{
  padding: 1.25rem;
}.p-52{
  padding: 13rem;
}.p-56{
  padding: 14rem;
}.p-6{
  padding: 1.5rem;
}.p-60{
  padding: 15rem;
}.p-64{
  padding: 16rem;
}.p-7{
  padding: 1.75rem;
}.p-72{
  padding: 18rem;
}.p-8{
  padding: 2rem;
}.p-80{
  padding: 20rem;
}.p-9{
  padding: 2.25rem;
}.p-96{
  padding: 24rem;
}.p-px{
  padding: 1px;
}.px-0{
  padding-left: 0px;
  padding-right: 0px;
}.px-0\\.5{
  padding-left: 0.125rem;
  padding-right: 0.125rem;
}.px-1{
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}.px-1\\.5{
  padding-left: 0.375rem;
  padding-right: 0.375rem;
}.px-10{
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}.px-11{
  padding-left: 2.75rem;
  padding-right: 2.75rem;
}.px-12{
  padding-left: 3rem;
  padding-right: 3rem;
}.px-14{
  padding-left: 3.5rem;
  padding-right: 3.5rem;
}.px-15{
  padding-left: 3.75rem;
  padding-right: 3.75rem;
}.px-16{
  padding-left: 4rem;
  padding-right: 4rem;
}.px-2{
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}.px-2\\.5{
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}.px-20{
  padding-left: 5rem;
  padding-right: 5rem;
}.px-24{
  padding-left: 6rem;
  padding-right: 6rem;
}.px-25{
  padding-left: 6.25rem;
  padding-right: 6.25rem;
}.px-28{
  padding-left: 7rem;
  padding-right: 7rem;
}.px-3{
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}.px-3\\.5{
  padding-left: 0.875rem;
  padding-right: 0.875rem;
}.px-30{
  padding-left: 7.5rem;
  padding-right: 7.5rem;
}.px-32{
  padding-left: 8rem;
  padding-right: 8rem;
}.px-36{
  padding-left: 9rem;
  padding-right: 9rem;
}.px-4{
  padding-left: 1rem;
  padding-right: 1rem;
}.px-40{
  padding-left: 10rem;
  padding-right: 10rem;
}.px-44{
  padding-left: 11rem;
  padding-right: 11rem;
}.px-48{
  padding-left: 12rem;
  padding-right: 12rem;
}.px-5{
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}.px-52{
  padding-left: 13rem;
  padding-right: 13rem;
}.px-56{
  padding-left: 14rem;
  padding-right: 14rem;
}.px-6{
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}.px-60{
  padding-left: 15rem;
  padding-right: 15rem;
}.px-64{
  padding-left: 16rem;
  padding-right: 16rem;
}.px-7{
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}.px-72{
  padding-left: 18rem;
  padding-right: 18rem;
}.px-8{
  padding-left: 2rem;
  padding-right: 2rem;
}.px-80{
  padding-left: 20rem;
  padding-right: 20rem;
}.px-9{
  padding-left: 2.25rem;
  padding-right: 2.25rem;
}.px-96{
  padding-left: 24rem;
  padding-right: 24rem;
}.px-px{
  padding-left: 1px;
  padding-right: 1px;
}.py-0{
  padding-top: 0px;
  padding-bottom: 0px;
}.py-0\\.5{
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}.py-1{
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}.py-1\\.5{
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}.py-10{
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}.py-11{
  padding-top: 2.75rem;
  padding-bottom: 2.75rem;
}.py-12{
  padding-top: 3rem;
  padding-bottom: 3rem;
}.py-14{
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}.py-15{
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;
}.py-16{
  padding-top: 4rem;
  padding-bottom: 4rem;
}.py-2{
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}.py-2\\.5{
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}.py-20{
  padding-top: 5rem;
  padding-bottom: 5rem;
}.py-24{
  padding-top: 6rem;
  padding-bottom: 6rem;
}.py-25{
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
}.py-28{
  padding-top: 7rem;
  padding-bottom: 7rem;
}.py-3{
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}.py-3\\.5{
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}.py-30{
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
}.py-32{
  padding-top: 8rem;
  padding-bottom: 8rem;
}.py-36{
  padding-top: 9rem;
  padding-bottom: 9rem;
}.py-4{
  padding-top: 1rem;
  padding-bottom: 1rem;
}.py-40{
  padding-top: 10rem;
  padding-bottom: 10rem;
}.py-44{
  padding-top: 11rem;
  padding-bottom: 11rem;
}.py-48{
  padding-top: 12rem;
  padding-bottom: 12rem;
}.py-5{
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}.py-52{
  padding-top: 13rem;
  padding-bottom: 13rem;
}.py-56{
  padding-top: 14rem;
  padding-bottom: 14rem;
}.py-6{
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}.py-60{
  padding-top: 15rem;
  padding-bottom: 15rem;
}.py-64{
  padding-top: 16rem;
  padding-bottom: 16rem;
}.py-7{
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
}.py-72{
  padding-top: 18rem;
  padding-bottom: 18rem;
}.py-8{
  padding-top: 2rem;
  padding-bottom: 2rem;
}.py-80{
  padding-top: 20rem;
  padding-bottom: 20rem;
}.py-9{
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
}.py-96{
  padding-top: 24rem;
  padding-bottom: 24rem;
}.py-px{
  padding-top: 1px;
  padding-bottom: 1px;
}.pb-0{
  padding-bottom: 0px;
}.pb-0\\.5{
  padding-bottom: 0.125rem;
}.pb-1{
  padding-bottom: 0.25rem;
}.pb-1\\.5{
  padding-bottom: 0.375rem;
}.pb-10{
  padding-bottom: 2.5rem;
}.pb-11{
  padding-bottom: 2.75rem;
}.pb-12{
  padding-bottom: 3rem;
}.pb-14{
  padding-bottom: 3.5rem;
}.pb-15{
  padding-bottom: 3.75rem;
}.pb-16{
  padding-bottom: 4rem;
}.pb-2{
  padding-bottom: 0.5rem;
}.pb-2\\.5{
  padding-bottom: 0.625rem;
}.pb-20{
  padding-bottom: 5rem;
}.pb-24{
  padding-bottom: 6rem;
}.pb-25{
  padding-bottom: 6.25rem;
}.pb-28{
  padding-bottom: 7rem;
}.pb-3{
  padding-bottom: 0.75rem;
}.pb-3\\.5{
  padding-bottom: 0.875rem;
}.pb-30{
  padding-bottom: 7.5rem;
}.pb-32{
  padding-bottom: 8rem;
}.pb-36{
  padding-bottom: 9rem;
}.pb-4{
  padding-bottom: 1rem;
}.pb-40{
  padding-bottom: 10rem;
}.pb-44{
  padding-bottom: 11rem;
}.pb-48{
  padding-bottom: 12rem;
}.pb-5{
  padding-bottom: 1.25rem;
}.pb-52{
  padding-bottom: 13rem;
}.pb-56{
  padding-bottom: 14rem;
}.pb-6{
  padding-bottom: 1.5rem;
}.pb-60{
  padding-bottom: 15rem;
}.pb-64{
  padding-bottom: 16rem;
}.pb-7{
  padding-bottom: 1.75rem;
}.pb-72{
  padding-bottom: 18rem;
}.pb-8{
  padding-bottom: 2rem;
}.pb-80{
  padding-bottom: 20rem;
}.pb-9{
  padding-bottom: 2.25rem;
}.pb-96{
  padding-bottom: 24rem;
}.pb-px{
  padding-bottom: 1px;
}.pe-0{
  padding-right: 0px;
}.pe-0\\.5{
  padding-right: 0.125rem;
}.pe-1{
  padding-right: 0.25rem;
}.pe-1\\.5{
  padding-right: 0.375rem;
}.pe-10{
  padding-right: 2.5rem;
}.pe-11{
  padding-right: 2.75rem;
}.pe-12{
  padding-right: 3rem;
}.pe-14{
  padding-right: 3.5rem;
}.pe-15{
  padding-right: 3.75rem;
}.pe-16{
  padding-right: 4rem;
}.pe-2{
  padding-right: 0.5rem;
}.pe-2\\.5{
  padding-right: 0.625rem;
}.pe-20{
  padding-right: 5rem;
}.pe-24{
  padding-right: 6rem;
}.pe-25{
  padding-right: 6.25rem;
}.pe-28{
  padding-right: 7rem;
}.pe-3{
  padding-right: 0.75rem;
}.pe-3\\.5{
  padding-right: 0.875rem;
}.pe-30{
  padding-right: 7.5rem;
}.pe-32{
  padding-right: 8rem;
}.pe-36{
  padding-right: 9rem;
}.pe-4{
  padding-right: 1rem;
}.pe-40{
  padding-right: 10rem;
}.pe-44{
  padding-right: 11rem;
}.pe-48{
  padding-right: 12rem;
}.pe-5{
  padding-right: 1.25rem;
}.pe-52{
  padding-right: 13rem;
}.pe-56{
  padding-right: 14rem;
}.pe-6{
  padding-right: 1.5rem;
}.pe-60{
  padding-right: 15rem;
}.pe-64{
  padding-right: 16rem;
}.pe-7{
  padding-right: 1.75rem;
}.pe-72{
  padding-right: 18rem;
}.pe-8{
  padding-right: 2rem;
}.pe-80{
  padding-right: 20rem;
}.pe-9{
  padding-right: 2.25rem;
}.pe-96{
  padding-right: 24rem;
}.pe-px{
  padding-right: 1px;
}.pl-0{
  padding-left: 0px;
}.pl-0\\.5{
  padding-left: 0.125rem;
}.pl-1{
  padding-left: 0.25rem;
}.pl-1\\.5{
  padding-left: 0.375rem;
}.pl-10{
  padding-left: 2.5rem;
}.pl-11{
  padding-left: 2.75rem;
}.pl-12{
  padding-left: 3rem;
}.pl-14{
  padding-left: 3.5rem;
}.pl-15{
  padding-left: 3.75rem;
}.pl-16{
  padding-left: 4rem;
}.pl-2{
  padding-left: 0.5rem;
}.pl-2\\.5{
  padding-left: 0.625rem;
}.pl-20{
  padding-left: 5rem;
}.pl-24{
  padding-left: 6rem;
}.pl-25{
  padding-left: 6.25rem;
}.pl-28{
  padding-left: 7rem;
}.pl-3{
  padding-left: 0.75rem;
}.pl-3\\.5{
  padding-left: 0.875rem;
}.pl-30{
  padding-left: 7.5rem;
}.pl-32{
  padding-left: 8rem;
}.pl-36{
  padding-left: 9rem;
}.pl-4{
  padding-left: 1rem;
}.pl-40{
  padding-left: 10rem;
}.pl-44{
  padding-left: 11rem;
}.pl-48{
  padding-left: 12rem;
}.pl-5{
  padding-left: 1.25rem;
}.pl-52{
  padding-left: 13rem;
}.pl-56{
  padding-left: 14rem;
}.pl-6{
  padding-left: 1.5rem;
}.pl-60{
  padding-left: 15rem;
}.pl-64{
  padding-left: 16rem;
}.pl-7{
  padding-left: 1.75rem;
}.pl-72{
  padding-left: 18rem;
}.pl-8{
  padding-left: 2rem;
}.pl-80{
  padding-left: 20rem;
}.pl-9{
  padding-left: 2.25rem;
}.pl-96{
  padding-left: 24rem;
}.pl-px{
  padding-left: 1px;
}.pr-0{
  padding-right: 0px;
}.pr-0\\.5{
  padding-right: 0.125rem;
}.pr-1{
  padding-right: 0.25rem;
}.pr-1\\.5{
  padding-right: 0.375rem;
}.pr-10{
  padding-right: 2.5rem;
}.pr-11{
  padding-right: 2.75rem;
}.pr-12{
  padding-right: 3rem;
}.pr-14{
  padding-right: 3.5rem;
}.pr-15{
  padding-right: 3.75rem;
}.pr-16{
  padding-right: 4rem;
}.pr-2{
  padding-right: 0.5rem;
}.pr-2\\.5{
  padding-right: 0.625rem;
}.pr-20{
  padding-right: 5rem;
}.pr-24{
  padding-right: 6rem;
}.pr-25{
  padding-right: 6.25rem;
}.pr-28{
  padding-right: 7rem;
}.pr-3{
  padding-right: 0.75rem;
}.pr-3\\.5{
  padding-right: 0.875rem;
}.pr-30{
  padding-right: 7.5rem;
}.pr-32{
  padding-right: 8rem;
}.pr-36{
  padding-right: 9rem;
}.pr-4{
  padding-right: 1rem;
}.pr-40{
  padding-right: 10rem;
}.pr-44{
  padding-right: 11rem;
}.pr-48{
  padding-right: 12rem;
}.pr-5{
  padding-right: 1.25rem;
}.pr-52{
  padding-right: 13rem;
}.pr-56{
  padding-right: 14rem;
}.pr-6{
  padding-right: 1.5rem;
}.pr-60{
  padding-right: 15rem;
}.pr-64{
  padding-right: 16rem;
}.pr-7{
  padding-right: 1.75rem;
}.pr-72{
  padding-right: 18rem;
}.pr-8{
  padding-right: 2rem;
}.pr-80{
  padding-right: 20rem;
}.pr-9{
  padding-right: 2.25rem;
}.pr-96{
  padding-right: 24rem;
}.pr-px{
  padding-right: 1px;
}.ps-0{
  padding-left: 0px;
}.ps-0\\.5{
  padding-left: 0.125rem;
}.ps-1{
  padding-left: 0.25rem;
}.ps-1\\.5{
  padding-left: 0.375rem;
}.ps-10{
  padding-left: 2.5rem;
}.ps-11{
  padding-left: 2.75rem;
}.ps-12{
  padding-left: 3rem;
}.ps-14{
  padding-left: 3.5rem;
}.ps-15{
  padding-left: 3.75rem;
}.ps-16{
  padding-left: 4rem;
}.ps-2{
  padding-left: 0.5rem;
}.ps-2\\.5{
  padding-left: 0.625rem;
}.ps-20{
  padding-left: 5rem;
}.ps-24{
  padding-left: 6rem;
}.ps-25{
  padding-left: 6.25rem;
}.ps-28{
  padding-left: 7rem;
}.ps-3{
  padding-left: 0.75rem;
}.ps-3\\.5{
  padding-left: 0.875rem;
}.ps-30{
  padding-left: 7.5rem;
}.ps-32{
  padding-left: 8rem;
}.ps-36{
  padding-left: 9rem;
}.ps-4{
  padding-left: 1rem;
}.ps-40{
  padding-left: 10rem;
}.ps-44{
  padding-left: 11rem;
}.ps-48{
  padding-left: 12rem;
}.ps-5{
  padding-left: 1.25rem;
}.ps-52{
  padding-left: 13rem;
}.ps-56{
  padding-left: 14rem;
}.ps-6{
  padding-left: 1.5rem;
}.ps-60{
  padding-left: 15rem;
}.ps-64{
  padding-left: 16rem;
}.ps-7{
  padding-left: 1.75rem;
}.ps-72{
  padding-left: 18rem;
}.ps-8{
  padding-left: 2rem;
}.ps-80{
  padding-left: 20rem;
}.ps-9{
  padding-left: 2.25rem;
}.ps-96{
  padding-left: 24rem;
}.ps-px{
  padding-left: 1px;
}.pt-0{
  padding-top: 0px;
}.pt-0\\.5{
  padding-top: 0.125rem;
}.pt-1{
  padding-top: 0.25rem;
}.pt-1\\.5{
  padding-top: 0.375rem;
}.pt-10{
  padding-top: 2.5rem;
}.pt-11{
  padding-top: 2.75rem;
}.pt-12{
  padding-top: 3rem;
}.pt-14{
  padding-top: 3.5rem;
}.pt-15{
  padding-top: 3.75rem;
}.pt-16{
  padding-top: 4rem;
}.pt-2{
  padding-top: 0.5rem;
}.pt-2\\.5{
  padding-top: 0.625rem;
}.pt-20{
  padding-top: 5rem;
}.pt-24{
  padding-top: 6rem;
}.pt-25{
  padding-top: 6.25rem;
}.pt-28{
  padding-top: 7rem;
}.pt-3{
  padding-top: 0.75rem;
}.pt-3\\.5{
  padding-top: 0.875rem;
}.pt-30{
  padding-top: 7.5rem;
}.pt-32{
  padding-top: 8rem;
}.pt-36{
  padding-top: 9rem;
}.pt-4{
  padding-top: 1rem;
}.pt-40{
  padding-top: 10rem;
}.pt-44{
  padding-top: 11rem;
}.pt-48{
  padding-top: 12rem;
}.pt-5{
  padding-top: 1.25rem;
}.pt-52{
  padding-top: 13rem;
}.pt-56{
  padding-top: 14rem;
}.pt-6{
  padding-top: 1.5rem;
}.pt-60{
  padding-top: 15rem;
}.pt-64{
  padding-top: 16rem;
}.pt-7{
  padding-top: 1.75rem;
}.pt-72{
  padding-top: 18rem;
}.pt-8{
  padding-top: 2rem;
}.pt-80{
  padding-top: 20rem;
}.pt-9{
  padding-top: 2.25rem;
}.pt-96{
  padding-top: 24rem;
}.pt-px{
  padding-top: 1px;
}.text-left{
  text-align: left;
}.text-center{
  text-align: center;
}.font-secondary{
  font-family: barlow;
}.text-4xl{
  font-size: 2.25rem;
  line-height: 2.5rem;
}.text-base{
  font-size: 1rem;
  line-height: 1.5rem;
}.text-sm{
  font-size: 0.875rem;
  line-height: 1.25rem;
}.text-xs{
  font-size: 0.75rem;
  line-height: 1rem;
}.text-lg{
  font-size: 1.125rem;
  line-height: 1.75rem;
}.font-bold{
  font-weight: 700;
}.font-normal{
  font-weight: 400;
}.font-semibold{
  font-weight: 600;
}.uppercase{
  text-transform: uppercase;
}.leading-tight{
  line-height: 1.25;
}.leading-none{
  line-height: 1;
}.text-ecc-blue{
  --tw-text-opacity: 1;
  color: rgba(47, 49, 141, 1);
  color: rgba(47, 49, 141, var(--tw-text-opacity));
}.text-gray-400{
  --tw-text-opacity: 1;
  color: rgba(156, 163, 175, 1);
  color: rgba(156, 163, 175, var(--tw-text-opacity));
}.text-green-50{
  --tw-text-opacity: 1;
  color: rgba(240, 253, 244, 1);
  color: rgba(240, 253, 244, var(--tw-text-opacity));
}.text-indigo-50{
  --tw-text-opacity: 1;
  color: rgba(238, 242, 255, 1);
  color: rgba(238, 242, 255, var(--tw-text-opacity));
}.text-red-50{
  --tw-text-opacity: 1;
  color: rgba(254, 242, 242, 1);
  color: rgba(254, 242, 242, var(--tw-text-opacity));
}.text-white{
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}.text-white\\/50{
  color: rgba(255, 255, 255, 0.5);
}.text-yellow-50{
  --tw-text-opacity: 1;
  color: rgba(254, 252, 232, 1);
  color: rgba(254, 252, 232, var(--tw-text-opacity));
}.text-blue-800{
  --tw-text-opacity: 1;
  color: rgba(30, 64, 175, 1);
  color: rgba(30, 64, 175, var(--tw-text-opacity));
}.text-gray-500{
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, 1);
  color: rgba(107, 114, 128, var(--tw-text-opacity));
}.text-gray-900{
  --tw-text-opacity: 1;
  color: rgba(17, 24, 39, 1);
  color: rgba(17, 24, 39, var(--tw-text-opacity));
}.opacity-50{
  opacity: 0.5;
}.outline{
  outline-style: solid;
}.ring-0{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color), 0 0 rgba(0,0,0,0);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));
}.ring-white{
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(255, 255, 255, var(--tw-ring-opacity));
}.filter{
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}.transition-all{
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.duration-300{
  transition-duration: 300ms;
}.glide {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}.glide * {
    box-sizing: inherit;
  }.glide__track {
    overflow: hidden;
  }.glide__slides {
    position: relative;
    width: 100%;
    height: 100%;
    list-style: none;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    touch-action: pan-Y;
    overflow: hidden;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    will-change: transform;
  }.glide__slides--dragging {
      -webkit-user-select: none;
              user-select: none;
    }.glide__slide {
    width: 100%;
    flex-shrink: 0;
    white-space: normal;
    -webkit-user-select: none;
            user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }.glide__slide a {
      -webkit-user-select: none;
              user-select: none;
      -webkit-user-drag: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }.glide__arrows {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
            user-select: none;
  }.glide__bullets {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
            user-select: none;
  }.glide--rtl {
    direction: rtl;
  }.glide__arrow{
  display: inline-block;
  cursor: pointer;
  justify-content: center;
  border-radius: 9999px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.625rem;
  font-family: barlow;
  text-transform: uppercase;
  line-height: 1.25;
  text-decoration-line: none;
  position: absolute;
  top: 50%;
  display: block;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.glide__arrow:hover{
  --tw-bg-opacity: 1;
  background-color: rgba(226, 232, 240, 1);
  background-color: rgba(226, 232, 240, var(--tw-bg-opacity));
}.glide__arrow {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
        background-repeat: no-repeat;
        background-position: center;
        z-index: 2;
        padding: 1rem;
        opacity: 1;
        cursor: pointer;
        line-height: 1;
    }.glide__arrow--left {
            left: -1rem;
            transform: rotate(90deg) translateX(-2rem);
        }.glide__arrow--right {
            right: -1rem;
            transform: rotate(-90deg) translateX(2rem);
        }.glide__arrow--disabled {
            opacity: 0.33;
        }.glide__bullets{
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  z-index: 10;
  --tw-translate-x: -50%;
  transform: translate(-50%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.glide__bullet{
  height: 0.75rem;
  width: 0.75rem;
  cursor: pointer;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  padding: 0px;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.glide__bullet:hover{
  --tw-bg-opacity: 1;
  background-color: rgba(226, 232, 240, 1);
  background-color: rgba(226, 232, 240, var(--tw-bg-opacity));
}.glide__bullet:focus{
  --tw-bg-opacity: 1;
  background-color: rgba(226, 232, 240, 1);
  background-color: rgba(226, 232, 240, var(--tw-bg-opacity));
}.glide__bullet--active{
  --tw-bg-opacity: 1;
  background-color: rgba(203, 213, 225, 1);
  background-color: rgba(203, 213, 225, var(--tw-bg-opacity));
}.mini-calendar-block .carousel__slide{
  padding-right: 1.25rem;
}/* Button block
--------------------------------------------- */.wp-block-button__link{
  display: inline-block;
  cursor: pointer;
  justify-content: center;
  border-radius: 9999px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.625rem;
  font-family: barlow;
  text-transform: uppercase;
  line-height: 1.25;
  text-decoration-line: none;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  --tw-bg-opacity: 1;
  background-color: rgba(47, 49, 141, 1);
  background-color: rgba(47, 49, 141, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}.wp-block-button__link:hover{
  --tw-bg-opacity: 1;
  background-color: rgba(199, 210, 254, 1);
  background-color: rgba(199, 210, 254, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(49, 46, 129, 1);
  color: rgba(49, 46, 129, var(--tw-text-opacity));
}.wp-block-button__link.has-ecc-blue-background-color{
  --tw-bg-opacity: 1;
  background-color: rgba(47, 49, 141, 1);
  background-color: rgba(47, 49, 141, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}.wp-block-button__link.has-ecc-blue-background-color:hover{
  --tw-bg-opacity: 1;
  background-color: rgba(199, 210, 254, 1);
  background-color: rgba(199, 210, 254, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(49, 46, 129, 1);
  color: rgba(49, 46, 129, var(--tw-text-opacity));
}/*
Navigation Component Styles
*/.quick-navigation{
  display: flex;
  align-items: center;
}.quick-navigation > p{
  padding-right: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}.quick-navigation *{
  font-family: barlow;
  font-size: 0.875rem;
  line-height: 1.25rem;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.quick-navigation ul{
  display: flex;
  flex-direction: row;
}.quick-navigation ul >li{
  position: relative;
}.quick-navigation ul >li a{
  display: block;
  height: 100%;
  white-space: nowrap;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
  padding-left: 1.25rem;
  text-transform: uppercase;
  --tw-text-opacity: 1;
  color: rgba(15, 23, 42, 1);
  color: rgba(15, 23, 42, var(--tw-text-opacity));
}.quick-navigation ul >li:hover .caret-icon{
  margin-top: 0.5rem;
}.quick-navigation ul >li:hover >ul{
  left: auto;
  z-index: 50;
  opacity: 1;
}.quick-navigation ul >li >ul{
  position: absolute;
  left: -999em;
  display: grid;
  grid-auto-flow: row;
  --tw-bg-opacity: 1;
  background-color: rgba(253, 242, 81, 1);
  background-color: rgba(253, 242, 81, var(--tw-bg-opacity));
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  opacity: 0;
}.quick-navigation ul >li >ul >li{
  position: relative;
  white-space: nowrap;
}.quick-navigation ul >li >ul >li >a{
  display: flex;
  height: 100%;
  min-width: 15rem;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
}.quick-navigation ul >li >ul >li:hover{
  background-color: rgba(255, 255, 255, 0.5);
}.quick-navigation ul >li:not(.menu-especial).menu-item-has-children::before{
  position: absolute;
  top: 50%;
  right: -1.25rem;
  --tw-translate-y: -50%;
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), -50%) rotate(-90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
                    content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}.quick-navigation ul >li:not(.menu-especial).menu-item-has-children:hover::before{
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.quick-navigation ul li.menu-especial{
  position: static;
}.quick-navigation ul li.menu-especial >a{
  display: flex;
}.quick-navigation ul li.menu-especial >a img{
  margin-left: 0.75rem;
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(-90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.quick-navigation ul li.menu-especial >a:hover img{
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.quick-navigation ul li.menu-especial >ul{
  opacity: 0;
}.quick-navigation ul li.menu-especial:hover>ul{
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
}@media (min-width: 640px){.quick-navigation ul li.menu-especial:hover>ul{
    max-width: 640px;
  }
}@media (min-width: 768px){.quick-navigation ul li.menu-especial:hover>ul{
    max-width: 768px;
  }
}@media (min-width: 1024px){.quick-navigation ul li.menu-especial:hover>ul{
    max-width: 1024px;
    padding-right: 2rem;
    padding-left: 2rem;
  }
}@media (min-width: 1280px){.quick-navigation ul li.menu-especial:hover>ul{
    max-width: 1280px;
  }
}@media (min-width: 1536px){.quick-navigation ul li.menu-especial:hover>ul{
    max-width: 1536px;
  }
}.quick-navigation ul li.menu-especial:hover>ul{
  left: 0px;
  top: auto;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  opacity: 1;
}.quick-navigation ul li.menu-especial:hover>ul >li{
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  padding: 1rem;
  text-align: center;
}.quick-navigation ul li.menu-especial:hover>ul >li:not(:last-child){
  border-right-width: 1px;
  border-color: rgba(47, 49, 141, 0.2);
}.quick-navigation ul li.menu-especial:hover>ul >li a{
  display: inline-block;
  cursor: pointer;
  justify-content: center;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.625rem;
  font-family: barlow;
  text-transform: uppercase;
  line-height: 1.25;
  text-decoration-line: none;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  margin-top: 1.25rem;
  height: auto;
  white-space: normal;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}.quick-navigation ul li.menu-especial:hover>ul >li img{
  aspect-ratio: 1 / 1;
  height: 5rem;
  width: 100%;
  object-fit: contain;
  object-position: center;
}.quick-navigation ul li.menu-especial:hover>ul >li p{
  white-space: normal;
  padding-top: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 1.25;
}/*

PRIMARY MENU

*/.primary-navigation *{
  font-family: barlow;
  font-size: 1rem;
  line-height: 1.5rem;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.primary-navigation ul{
  display: flex;
  flex-direction: row;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}.primary-navigation ul > li{
  position: relative;
}.primary-navigation ul > li.menu-item-has-children{
  padding-right: 1.5rem;
}.primary-navigation ul > li.menu-item-has-children::before{
  position: absolute;
  top: 50%;
  right: 0px;
  --tw-translate-y: -50%;
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), -50%) rotate(-90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  padding-left: 1rem;
  padding-right: 1rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
                    content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}.primary-navigation ul > li.menu-item-has-children:hover::before{
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.primary-navigation ul > li a{
  display: block;
  height: 100%;
  white-space: nowrap;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-transform: uppercase;
}.primary-navigation ul > li:hover{
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, 1);
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
}.primary-navigation ul > li:hover .caret-icon{
  margin-top: 0.5rem;
}.primary-navigation ul > li:hover > ul{
  left: auto;
  z-index: 50;
  opacity: 1;
}.primary-navigation ul > li > ul{
  position: absolute;
  left: -999em;
  display: grid;
  grid-auto-flow: row;
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, 1);
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  opacity: 0;
}.primary-navigation ul > li > ul > li{
  position: relative;
  white-space: nowrap;
}.primary-navigation ul > li > ul > li > a{
  display: flex;
  height: 100%;
  min-width: 15rem;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
}.primary-navigation ul > li > ul > li:hover{
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}.primary-navigation ul > li > ul > li:hover .caret-icon{
  opacity: 1;
}.primary-navigation ul > li > ul > li:hover > ul{
  left: 10rem;
  z-index: 50;
  opacity: 1;
}.primary-navigation ul > li > ul > li > ul{
  position: absolute;
  left: 12rem;
  margin-top: -1.25rem;
  display: grid;
  grid-auto-flow: row;
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, 1);
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  opacity: 0;
}.primary-navigation ul > li > ul > li > ul > li{
  position: relative;
  min-width: 13rem;
}.primary-navigation ul > li > ul > li > ul > li > a{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
}.primary-navigation ul > li > ul > li > ul > li > a .caret-icon{
  margin-top: -0px;
  height: 0.5rem;
  width: 0.5rem;
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(-90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  opacity: 0;
}.primary-navigation ul > li > ul > li > ul > li:hover{
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}.primary-navigation ul > li > ul > li > ul > li:hover .caret-icon{
  z-index: 50;
  opacity: 1;
}/*

FOOTER MENU

*/.footer-navigation{
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}.footer-navigation > div > ul{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -moz-column-gap: 2.5rem;
       column-gap: 2.5rem;
}@media (min-width: 1024px){.footer-navigation > div > ul{
    flex-direction: row;
  }
}.footer-navigation > div > ul > li .caret-icon{
  display: none;
}.footer-navigation > div > ul > li > ul.sub-menu{
  display: grid;
  grid-auto-flow: row;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}.footer-navigation > div > ul > li > ul.sub-menu > li{
  min-width: 10rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}.footer-navigation > div > ul > li > ul.sub-menu > li ul{
  margin-left: 1rem;
}.footer-navigation > div > ul > li > ul.sub-menu > li ul > li{
  min-width: 10rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}.footer-navigation > div > ul > li > a{
  font-weight: 700;
}.footer-navigation > div > ul > li a{
  border-bottom-width: 1px;
  border-color: transparent;
  font-family: barlow;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.footer-navigation > div > ul > li a:hover{
  --tw-border-opacity: 1;
  border-color: rgba(255, 255, 255, 1);
  border-color: rgba(255, 255, 255, var(--tw-border-opacity));
}.footer-navigation .menu-item-112 {
      display: none;
    }/* HAMBURGER MENU */.hamburger {
    cursor: pointer;
    width: 48px;
    height: 48px;
    transition: all 0.25s;
  }.hamburger__top-bun,
  .hamburger__center-bun,
  .hamburger__bottom-bun {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: #000;
    transform: rotate(0);
    transition: all 0.5s;
  }.hamburger:hover [class*='-bun'] {
    background: #333;
  }.hamburger__top-bun {
    transform: translateY(-5px);
  }.hamburger__center-bun {
    transform: translateY(2px);
  }.hamburger__bottom-bun {
    transform: translateY(9px);
  }.open {
    transform: rotate(90deg);
    transform: translateY(-1px);
  }.open .hamburger__top-bun {
    transform: rotate(45deg) translateY(0px);
  }.open .hamburger__bottom-bun {
    transform: rotate(-45deg) translateY(0px);
  }.open .hamburger__center-bun {
    opacity: 0;
  }.tag{
  display: inline-block;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgba(253, 242, 81, 1);
  background-color: rgba(253, 242, 81, var(--tw-bg-opacity));
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.125rem;
  font-size: 0.75rem;
  line-height: 1rem;
  text-transform: uppercase;
}.wp-block-table.is-style-laranja table thead th{
  --tw-border-opacity: 1;
  border-color: rgba(0, 0, 0, 1);
  border-color: rgba(0, 0, 0, var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgba(249, 115, 22, 1);
  background-color: rgba(249, 115, 22, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}.wp-block-table.is-style-laranja table tbody tr:nth-child(even){
  --tw-bg-opacity: 1;
  background-color: rgba(255, 237, 213, 1);
  background-color: rgba(255, 237, 213, var(--tw-bg-opacity));
}.wp-block-table.is-style-laranja table tbody tr:nth-child(odd){
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}.wp-block-table.is-style-verde table thead th{
  --tw-border-opacity: 1;
  border-color: rgba(0, 0, 0, 1);
  border-color: rgba(0, 0, 0, var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgba(5, 150, 105, 1);
  background-color: rgba(5, 150, 105, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}.wp-block-table.is-style-verde table tbody tr:nth-child(even){
  --tw-bg-opacity: 1;
  background-color: rgba(209, 250, 229, 1);
  background-color: rgba(209, 250, 229, var(--tw-bg-opacity));
}.wp-block-table.is-style-verde table tbody tr:nth-child(odd){
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}.wp-block-table.is-style-azul table thead th{
  --tw-border-opacity: 1;
  border-color: rgba(0, 0, 0, 1);
  border-color: rgba(0, 0, 0, var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgba(2, 132, 199, 1);
  background-color: rgba(2, 132, 199, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}.wp-block-table.is-style-azul table tbody tr:nth-child(even){
  --tw-bg-opacity: 1;
  background-color: rgba(224, 242, 254, 1);
  background-color: rgba(224, 242, 254, var(--tw-bg-opacity));
}.wp-block-table.is-style-azul table tbody tr:nth-child(odd){
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}html{
  font-family: open sans;
  font-weight: 400;
}h1,
.heading-1{
  font-family: open sans;
  font-size: 3.75rem;
  font-weight: 500;
  line-height: 1;
}h2,
.heading-2{
  font-family: open sans;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 500;
  line-height: 1;
}h3,
.heading-3{
  font-family: open sans;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  line-height: 1;
}h4,
.heading-4{
  font-family: barlow;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
}.alignright {
    text-align: right;
}.aligncenter {
    text-align: center;
}.alignleft {
    text-align: left;
}.main p:has(+p){
  line-height: 1.625;
}.main h1:has(+p){
  line-height: 1.625;
}.main h2:has(+p){
  line-height: 1.625;
}.main h3:has(+p){
  line-height: 1.625;
}.main h4:has(+p){
  line-height: 1.625;
}.main h5:has(+p){
  line-height: 1.625;
}.main h1,
    .main h2,
    .main h3,
    .main h4,
    .main h5{
  line-height: 1.625;
}.main p:has(+p){
  line-height: 1.625;
}.main h2:has(+h2){
  line-height: 1.625;
}.main p:has(+p) {
        margin-bottom: 1rem;
    }.first-of-type\\:rounded-l-2xl:first-of-type{
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}.last-of-type\\:rounded-r-2xl:last-of-type{
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}.hover\\:-mb-3:hover{
  margin-bottom: -0.75rem;
}.hover\\:-ml-5:hover{
  margin-left: -1.25rem;
}.hover\\:-mr-5:hover{
  margin-right: -1.25rem;
}.hover\\:-mt-3:hover{
  margin-top: -0.75rem;
}.hover\\:w-1\\/2:hover{
  width: 50%;
}.hover\\:scale-y-110:hover{
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(1.1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.hover\\:bg-blue-500:hover{
  --tw-bg-opacity: 1;
  background-color: rgba(59, 130, 246, 1);
  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));
}.hover\\:bg-gray-100:hover{
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, 1);
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
}.hover\\:bg-purple-500:hover{
  --tw-bg-opacity: 1;
  background-color: rgba(168, 85, 247, 1);
  background-color: rgba(168, 85, 247, var(--tw-bg-opacity));
}.hover\\:bg-red-500:hover{
  --tw-bg-opacity: 1;
  background-color: rgba(239, 68, 68, 1);
  background-color: rgba(239, 68, 68, var(--tw-bg-opacity));
}.hover\\:text-gray-600:hover{
  --tw-text-opacity: 1;
  color: rgba(75, 85, 99, 1);
  color: rgba(75, 85, 99, var(--tw-text-opacity));
}.hover\\:opacity-100:hover{
  opacity: 1;
}.focus\\:not-sr-only:focus{
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}@media (prefers-color-scheme: dark){.dark\\:bg-blue-900{
    --tw-bg-opacity: 1;
    background-color: rgba(30, 58, 138, 1);
    background-color: rgba(30, 58, 138, var(--tw-bg-opacity));
  }.dark\\:bg-gray-700{
    --tw-bg-opacity: 1;
    background-color: rgba(55, 65, 81, 1);
    background-color: rgba(55, 65, 81, var(--tw-bg-opacity));
  }.dark\\:bg-gray-500{
    --tw-bg-opacity: 1;
    background-color: rgba(107, 114, 128, 1);
    background-color: rgba(107, 114, 128, var(--tw-bg-opacity));
  }.dark\\:text-blue-300{
    --tw-text-opacity: 1;
    color: rgba(147, 197, 253, 1);
    color: rgba(147, 197, 253, var(--tw-text-opacity));
  }.dark\\:text-gray-400{
    --tw-text-opacity: 1;
    color: rgba(156, 163, 175, 1);
    color: rgba(156, 163, 175, var(--tw-text-opacity));
  }.dark\\:text-gray-500{
    --tw-text-opacity: 1;
    color: rgba(107, 114, 128, 1);
    color: rgba(107, 114, 128, var(--tw-text-opacity));
  }.dark\\:text-white{
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, var(--tw-text-opacity));
  }.dark\\:text-blue-500{
    --tw-text-opacity: 1;
    color: rgba(59, 130, 246, 1);
    color: rgba(59, 130, 246, var(--tw-text-opacity));
  }.dark\\:ring-gray-900{
    --tw-ring-opacity: 1;
    --tw-ring-color: rgba(17, 24, 39, var(--tw-ring-opacity));
  }
}@media (min-width: 640px){.sm\\:mb-0{
    margin-bottom: 0px;
  }.sm\\:flex{
    display: flex;
  }.sm\\:pe-8{
    padding-right: 2rem;
  }.sm\\:ring-8{
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color), 0 0 rgba(0,0,0,0);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));
  }
}@media (min-width: 768px){.md\\:grid-cols-5{
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}@media (min-width: 1024px){.lg\\:col-span-1{
    grid-column: span 1 / span 1;
  }.lg\\:col-span-10{
    grid-column: span 10 / span 10;
  }.lg\\:col-span-11{
    grid-column: span 11 / span 11;
  }.lg\\:col-span-12{
    grid-column: span 12 / span 12;
  }.lg\\:col-span-2{
    grid-column: span 2 / span 2;
  }.lg\\:col-span-3{
    grid-column: span 3 / span 3;
  }.lg\\:col-span-4{
    grid-column: span 4 / span 4;
  }.lg\\:col-span-5{
    grid-column: span 5 / span 5;
  }.lg\\:col-span-6{
    grid-column: span 6 / span 6;
  }.lg\\:col-span-7{
    grid-column: span 7 / span 7;
  }.lg\\:col-span-8{
    grid-column: span 8 / span 8;
  }.lg\\:col-span-9{
    grid-column: span 9 / span 9;
  }.lg\\:col-span-full{
    grid-column: 1 / -1;
  }.lg\\:-m-0{
    margin: -0px;
  }.lg\\:-m-0\\.5{
    margin: -0.125rem;
  }.lg\\:-m-1{
    margin: -0.25rem;
  }.lg\\:-m-1\\.5{
    margin: -0.375rem;
  }.lg\\:-m-10{
    margin: -2.5rem;
  }.lg\\:-m-11{
    margin: -2.75rem;
  }.lg\\:-m-12{
    margin: -3rem;
  }.lg\\:-m-14{
    margin: -3.5rem;
  }.lg\\:-m-15{
    margin: -3.75rem;
  }.lg\\:-m-16{
    margin: -4rem;
  }.lg\\:-m-2{
    margin: -0.5rem;
  }.lg\\:-m-2\\.5{
    margin: -0.625rem;
  }.lg\\:-m-20{
    margin: -5rem;
  }.lg\\:-m-24{
    margin: -6rem;
  }.lg\\:-m-25{
    margin: -6.25rem;
  }.lg\\:-m-28{
    margin: -7rem;
  }.lg\\:-m-3{
    margin: -0.75rem;
  }.lg\\:-m-3\\.5{
    margin: -0.875rem;
  }.lg\\:-m-30{
    margin: -7.5rem;
  }.lg\\:-m-32{
    margin: -8rem;
  }.lg\\:-m-36{
    margin: -9rem;
  }.lg\\:-m-4{
    margin: -1rem;
  }.lg\\:-m-40{
    margin: -10rem;
  }.lg\\:-m-44{
    margin: -11rem;
  }.lg\\:-m-48{
    margin: -12rem;
  }.lg\\:-m-5{
    margin: -1.25rem;
  }.lg\\:-m-52{
    margin: -13rem;
  }.lg\\:-m-56{
    margin: -14rem;
  }.lg\\:-m-6{
    margin: -1.5rem;
  }.lg\\:-m-60{
    margin: -15rem;
  }.lg\\:-m-64{
    margin: -16rem;
  }.lg\\:-m-7{
    margin: -1.75rem;
  }.lg\\:-m-72{
    margin: -18rem;
  }.lg\\:-m-8{
    margin: -2rem;
  }.lg\\:-m-80{
    margin: -20rem;
  }.lg\\:-m-9{
    margin: -2.25rem;
  }.lg\\:-m-96{
    margin: -24rem;
  }.lg\\:-m-px{
    margin: -1px;
  }.lg\\:m-0{
    margin: 0px;
  }.lg\\:m-0\\.5{
    margin: 0.125rem;
  }.lg\\:m-1{
    margin: 0.25rem;
  }.lg\\:m-1\\.5{
    margin: 0.375rem;
  }.lg\\:m-10{
    margin: 2.5rem;
  }.lg\\:m-11{
    margin: 2.75rem;
  }.lg\\:m-12{
    margin: 3rem;
  }.lg\\:m-14{
    margin: 3.5rem;
  }.lg\\:m-15{
    margin: 3.75rem;
  }.lg\\:m-16{
    margin: 4rem;
  }.lg\\:m-2{
    margin: 0.5rem;
  }.lg\\:m-2\\.5{
    margin: 0.625rem;
  }.lg\\:m-20{
    margin: 5rem;
  }.lg\\:m-24{
    margin: 6rem;
  }.lg\\:m-25{
    margin: 6.25rem;
  }.lg\\:m-28{
    margin: 7rem;
  }.lg\\:m-3{
    margin: 0.75rem;
  }.lg\\:m-3\\.5{
    margin: 0.875rem;
  }.lg\\:m-30{
    margin: 7.5rem;
  }.lg\\:m-32{
    margin: 8rem;
  }.lg\\:m-36{
    margin: 9rem;
  }.lg\\:m-4{
    margin: 1rem;
  }.lg\\:m-40{
    margin: 10rem;
  }.lg\\:m-44{
    margin: 11rem;
  }.lg\\:m-48{
    margin: 12rem;
  }.lg\\:m-5{
    margin: 1.25rem;
  }.lg\\:m-52{
    margin: 13rem;
  }.lg\\:m-56{
    margin: 14rem;
  }.lg\\:m-6{
    margin: 1.5rem;
  }.lg\\:m-60{
    margin: 15rem;
  }.lg\\:m-64{
    margin: 16rem;
  }.lg\\:m-7{
    margin: 1.75rem;
  }.lg\\:m-72{
    margin: 18rem;
  }.lg\\:m-8{
    margin: 2rem;
  }.lg\\:m-80{
    margin: 20rem;
  }.lg\\:m-9{
    margin: 2.25rem;
  }.lg\\:m-96{
    margin: 24rem;
  }.lg\\:m-auto{
    margin: auto;
  }.lg\\:m-px{
    margin: 1px;
  }.lg\\:-mx-0{
    margin-left: -0px;
    margin-right: -0px;
  }.lg\\:-mx-0\\.5{
    margin-left: -0.125rem;
    margin-right: -0.125rem;
  }.lg\\:-mx-1{
    margin-left: -0.25rem;
    margin-right: -0.25rem;
  }.lg\\:-mx-1\\.5{
    margin-left: -0.375rem;
    margin-right: -0.375rem;
  }.lg\\:-mx-10{
    margin-left: -2.5rem;
    margin-right: -2.5rem;
  }.lg\\:-mx-11{
    margin-left: -2.75rem;
    margin-right: -2.75rem;
  }.lg\\:-mx-12{
    margin-left: -3rem;
    margin-right: -3rem;
  }.lg\\:-mx-14{
    margin-left: -3.5rem;
    margin-right: -3.5rem;
  }.lg\\:-mx-15{
    margin-left: -3.75rem;
    margin-right: -3.75rem;
  }.lg\\:-mx-16{
    margin-left: -4rem;
    margin-right: -4rem;
  }.lg\\:-mx-2{
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }.lg\\:-mx-2\\.5{
    margin-left: -0.625rem;
    margin-right: -0.625rem;
  }.lg\\:-mx-20{
    margin-left: -5rem;
    margin-right: -5rem;
  }.lg\\:-mx-24{
    margin-left: -6rem;
    margin-right: -6rem;
  }.lg\\:-mx-25{
    margin-left: -6.25rem;
    margin-right: -6.25rem;
  }.lg\\:-mx-28{
    margin-left: -7rem;
    margin-right: -7rem;
  }.lg\\:-mx-3{
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }.lg\\:-mx-3\\.5{
    margin-left: -0.875rem;
    margin-right: -0.875rem;
  }.lg\\:-mx-30{
    margin-left: -7.5rem;
    margin-right: -7.5rem;
  }.lg\\:-mx-32{
    margin-left: -8rem;
    margin-right: -8rem;
  }.lg\\:-mx-36{
    margin-left: -9rem;
    margin-right: -9rem;
  }.lg\\:-mx-4{
    margin-left: -1rem;
    margin-right: -1rem;
  }.lg\\:-mx-40{
    margin-left: -10rem;
    margin-right: -10rem;
  }.lg\\:-mx-44{
    margin-left: -11rem;
    margin-right: -11rem;
  }.lg\\:-mx-48{
    margin-left: -12rem;
    margin-right: -12rem;
  }.lg\\:-mx-5{
    margin-left: -1.25rem;
    margin-right: -1.25rem;
  }.lg\\:-mx-52{
    margin-left: -13rem;
    margin-right: -13rem;
  }.lg\\:-mx-56{
    margin-left: -14rem;
    margin-right: -14rem;
  }.lg\\:-mx-6{
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }.lg\\:-mx-60{
    margin-left: -15rem;
    margin-right: -15rem;
  }.lg\\:-mx-64{
    margin-left: -16rem;
    margin-right: -16rem;
  }.lg\\:-mx-7{
    margin-left: -1.75rem;
    margin-right: -1.75rem;
  }.lg\\:-mx-72{
    margin-left: -18rem;
    margin-right: -18rem;
  }.lg\\:-mx-8{
    margin-left: -2rem;
    margin-right: -2rem;
  }.lg\\:-mx-80{
    margin-left: -20rem;
    margin-right: -20rem;
  }.lg\\:-mx-9{
    margin-left: -2.25rem;
    margin-right: -2.25rem;
  }.lg\\:-mx-96{
    margin-left: -24rem;
    margin-right: -24rem;
  }.lg\\:-mx-px{
    margin-left: -1px;
    margin-right: -1px;
  }.lg\\:-my-0{
    margin-top: -0px;
    margin-bottom: -0px;
  }.lg\\:-my-0\\.5{
    margin-top: -0.125rem;
    margin-bottom: -0.125rem;
  }.lg\\:-my-1{
    margin-top: -0.25rem;
    margin-bottom: -0.25rem;
  }.lg\\:-my-1\\.5{
    margin-top: -0.375rem;
    margin-bottom: -0.375rem;
  }.lg\\:-my-10{
    margin-top: -2.5rem;
    margin-bottom: -2.5rem;
  }.lg\\:-my-11{
    margin-top: -2.75rem;
    margin-bottom: -2.75rem;
  }.lg\\:-my-12{
    margin-top: -3rem;
    margin-bottom: -3rem;
  }.lg\\:-my-14{
    margin-top: -3.5rem;
    margin-bottom: -3.5rem;
  }.lg\\:-my-15{
    margin-top: -3.75rem;
    margin-bottom: -3.75rem;
  }.lg\\:-my-16{
    margin-top: -4rem;
    margin-bottom: -4rem;
  }.lg\\:-my-2{
    margin-top: -0.5rem;
    margin-bottom: -0.5rem;
  }.lg\\:-my-2\\.5{
    margin-top: -0.625rem;
    margin-bottom: -0.625rem;
  }.lg\\:-my-20{
    margin-top: -5rem;
    margin-bottom: -5rem;
  }.lg\\:-my-24{
    margin-top: -6rem;
    margin-bottom: -6rem;
  }.lg\\:-my-25{
    margin-top: -6.25rem;
    margin-bottom: -6.25rem;
  }.lg\\:-my-28{
    margin-top: -7rem;
    margin-bottom: -7rem;
  }.lg\\:-my-3{
    margin-top: -0.75rem;
    margin-bottom: -0.75rem;
  }.lg\\:-my-3\\.5{
    margin-top: -0.875rem;
    margin-bottom: -0.875rem;
  }.lg\\:-my-30{
    margin-top: -7.5rem;
    margin-bottom: -7.5rem;
  }.lg\\:-my-32{
    margin-top: -8rem;
    margin-bottom: -8rem;
  }.lg\\:-my-36{
    margin-top: -9rem;
    margin-bottom: -9rem;
  }.lg\\:-my-4{
    margin-top: -1rem;
    margin-bottom: -1rem;
  }.lg\\:-my-40{
    margin-top: -10rem;
    margin-bottom: -10rem;
  }.lg\\:-my-44{
    margin-top: -11rem;
    margin-bottom: -11rem;
  }.lg\\:-my-48{
    margin-top: -12rem;
    margin-bottom: -12rem;
  }.lg\\:-my-5{
    margin-top: -1.25rem;
    margin-bottom: -1.25rem;
  }.lg\\:-my-52{
    margin-top: -13rem;
    margin-bottom: -13rem;
  }.lg\\:-my-56{
    margin-top: -14rem;
    margin-bottom: -14rem;
  }.lg\\:-my-6{
    margin-top: -1.5rem;
    margin-bottom: -1.5rem;
  }.lg\\:-my-60{
    margin-top: -15rem;
    margin-bottom: -15rem;
  }.lg\\:-my-64{
    margin-top: -16rem;
    margin-bottom: -16rem;
  }.lg\\:-my-7{
    margin-top: -1.75rem;
    margin-bottom: -1.75rem;
  }.lg\\:-my-72{
    margin-top: -18rem;
    margin-bottom: -18rem;
  }.lg\\:-my-8{
    margin-top: -2rem;
    margin-bottom: -2rem;
  }.lg\\:-my-80{
    margin-top: -20rem;
    margin-bottom: -20rem;
  }.lg\\:-my-9{
    margin-top: -2.25rem;
    margin-bottom: -2.25rem;
  }.lg\\:-my-96{
    margin-top: -24rem;
    margin-bottom: -24rem;
  }.lg\\:-my-px{
    margin-top: -1px;
    margin-bottom: -1px;
  }.lg\\:mx-0{
    margin-left: 0px;
    margin-right: 0px;
  }.lg\\:mx-0\\.5{
    margin-left: 0.125rem;
    margin-right: 0.125rem;
  }.lg\\:mx-1{
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }.lg\\:mx-1\\.5{
    margin-left: 0.375rem;
    margin-right: 0.375rem;
  }.lg\\:mx-10{
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }.lg\\:mx-11{
    margin-left: 2.75rem;
    margin-right: 2.75rem;
  }.lg\\:mx-12{
    margin-left: 3rem;
    margin-right: 3rem;
  }.lg\\:mx-14{
    margin-left: 3.5rem;
    margin-right: 3.5rem;
  }.lg\\:mx-15{
    margin-left: 3.75rem;
    margin-right: 3.75rem;
  }.lg\\:mx-16{
    margin-left: 4rem;
    margin-right: 4rem;
  }.lg\\:mx-2{
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }.lg\\:mx-2\\.5{
    margin-left: 0.625rem;
    margin-right: 0.625rem;
  }.lg\\:mx-20{
    margin-left: 5rem;
    margin-right: 5rem;
  }.lg\\:mx-24{
    margin-left: 6rem;
    margin-right: 6rem;
  }.lg\\:mx-25{
    margin-left: 6.25rem;
    margin-right: 6.25rem;
  }.lg\\:mx-28{
    margin-left: 7rem;
    margin-right: 7rem;
  }.lg\\:mx-3{
    margin-left: 0.75rem;
    margin-right: 0.75rem;
  }.lg\\:mx-3\\.5{
    margin-left: 0.875rem;
    margin-right: 0.875rem;
  }.lg\\:mx-30{
    margin-left: 7.5rem;
    margin-right: 7.5rem;
  }.lg\\:mx-32{
    margin-left: 8rem;
    margin-right: 8rem;
  }.lg\\:mx-36{
    margin-left: 9rem;
    margin-right: 9rem;
  }.lg\\:mx-4{
    margin-left: 1rem;
    margin-right: 1rem;
  }.lg\\:mx-40{
    margin-left: 10rem;
    margin-right: 10rem;
  }.lg\\:mx-44{
    margin-left: 11rem;
    margin-right: 11rem;
  }.lg\\:mx-48{
    margin-left: 12rem;
    margin-right: 12rem;
  }.lg\\:mx-5{
    margin-left: 1.25rem;
    margin-right: 1.25rem;
  }.lg\\:mx-52{
    margin-left: 13rem;
    margin-right: 13rem;
  }.lg\\:mx-56{
    margin-left: 14rem;
    margin-right: 14rem;
  }.lg\\:mx-6{
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }.lg\\:mx-60{
    margin-left: 15rem;
    margin-right: 15rem;
  }.lg\\:mx-64{
    margin-left: 16rem;
    margin-right: 16rem;
  }.lg\\:mx-7{
    margin-left: 1.75rem;
    margin-right: 1.75rem;
  }.lg\\:mx-72{
    margin-left: 18rem;
    margin-right: 18rem;
  }.lg\\:mx-8{
    margin-left: 2rem;
    margin-right: 2rem;
  }.lg\\:mx-80{
    margin-left: 20rem;
    margin-right: 20rem;
  }.lg\\:mx-9{
    margin-left: 2.25rem;
    margin-right: 2.25rem;
  }.lg\\:mx-96{
    margin-left: 24rem;
    margin-right: 24rem;
  }.lg\\:mx-auto{
    margin-left: auto;
    margin-right: auto;
  }.lg\\:mx-px{
    margin-left: 1px;
    margin-right: 1px;
  }.lg\\:my-0{
    margin-top: 0px;
    margin-bottom: 0px;
  }.lg\\:my-0\\.5{
    margin-top: 0.125rem;
    margin-bottom: 0.125rem;
  }.lg\\:my-1{
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }.lg\\:my-1\\.5{
    margin-top: 0.375rem;
    margin-bottom: 0.375rem;
  }.lg\\:my-10{
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }.lg\\:my-11{
    margin-top: 2.75rem;
    margin-bottom: 2.75rem;
  }.lg\\:my-12{
    margin-top: 3rem;
    margin-bottom: 3rem;
  }.lg\\:my-14{
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
  }.lg\\:my-15{
    margin-top: 3.75rem;
    margin-bottom: 3.75rem;
  }.lg\\:my-16{
    margin-top: 4rem;
    margin-bottom: 4rem;
  }.lg\\:my-2{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }.lg\\:my-2\\.5{
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
  }.lg\\:my-20{
    margin-top: 5rem;
    margin-bottom: 5rem;
  }.lg\\:my-24{
    margin-top: 6rem;
    margin-bottom: 6rem;
  }.lg\\:my-25{
    margin-top: 6.25rem;
    margin-bottom: 6.25rem;
  }.lg\\:my-28{
    margin-top: 7rem;
    margin-bottom: 7rem;
  }.lg\\:my-3{
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }.lg\\:my-3\\.5{
    margin-top: 0.875rem;
    margin-bottom: 0.875rem;
  }.lg\\:my-30{
    margin-top: 7.5rem;
    margin-bottom: 7.5rem;
  }.lg\\:my-32{
    margin-top: 8rem;
    margin-bottom: 8rem;
  }.lg\\:my-36{
    margin-top: 9rem;
    margin-bottom: 9rem;
  }.lg\\:my-4{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }.lg\\:my-40{
    margin-top: 10rem;
    margin-bottom: 10rem;
  }.lg\\:my-44{
    margin-top: 11rem;
    margin-bottom: 11rem;
  }.lg\\:my-48{
    margin-top: 12rem;
    margin-bottom: 12rem;
  }.lg\\:my-5{
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  }.lg\\:my-52{
    margin-top: 13rem;
    margin-bottom: 13rem;
  }.lg\\:my-56{
    margin-top: 14rem;
    margin-bottom: 14rem;
  }.lg\\:my-6{
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }.lg\\:my-60{
    margin-top: 15rem;
    margin-bottom: 15rem;
  }.lg\\:my-64{
    margin-top: 16rem;
    margin-bottom: 16rem;
  }.lg\\:my-7{
    margin-top: 1.75rem;
    margin-bottom: 1.75rem;
  }.lg\\:my-72{
    margin-top: 18rem;
    margin-bottom: 18rem;
  }.lg\\:my-8{
    margin-top: 2rem;
    margin-bottom: 2rem;
  }.lg\\:my-80{
    margin-top: 20rem;
    margin-bottom: 20rem;
  }.lg\\:my-9{
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
  }.lg\\:my-96{
    margin-top: 24rem;
    margin-bottom: 24rem;
  }.lg\\:my-auto{
    margin-top: auto;
    margin-bottom: auto;
  }.lg\\:my-px{
    margin-top: 1px;
    margin-bottom: 1px;
  }.lg\\:-mb-0{
    margin-bottom: -0px;
  }.lg\\:-mb-0\\.5{
    margin-bottom: -0.125rem;
  }.lg\\:-mb-1{
    margin-bottom: -0.25rem;
  }.lg\\:-mb-1\\.5{
    margin-bottom: -0.375rem;
  }.lg\\:-mb-10{
    margin-bottom: -2.5rem;
  }.lg\\:-mb-11{
    margin-bottom: -2.75rem;
  }.lg\\:-mb-12{
    margin-bottom: -3rem;
  }.lg\\:-mb-14{
    margin-bottom: -3.5rem;
  }.lg\\:-mb-15{
    margin-bottom: -3.75rem;
  }.lg\\:-mb-16{
    margin-bottom: -4rem;
  }.lg\\:-mb-2{
    margin-bottom: -0.5rem;
  }.lg\\:-mb-2\\.5{
    margin-bottom: -0.625rem;
  }.lg\\:-mb-20{
    margin-bottom: -5rem;
  }.lg\\:-mb-24{
    margin-bottom: -6rem;
  }.lg\\:-mb-25{
    margin-bottom: -6.25rem;
  }.lg\\:-mb-28{
    margin-bottom: -7rem;
  }.lg\\:-mb-3{
    margin-bottom: -0.75rem;
  }.lg\\:-mb-3\\.5{
    margin-bottom: -0.875rem;
  }.lg\\:-mb-30{
    margin-bottom: -7.5rem;
  }.lg\\:-mb-32{
    margin-bottom: -8rem;
  }.lg\\:-mb-36{
    margin-bottom: -9rem;
  }.lg\\:-mb-4{
    margin-bottom: -1rem;
  }.lg\\:-mb-40{
    margin-bottom: -10rem;
  }.lg\\:-mb-44{
    margin-bottom: -11rem;
  }.lg\\:-mb-48{
    margin-bottom: -12rem;
  }.lg\\:-mb-5{
    margin-bottom: -1.25rem;
  }.lg\\:-mb-52{
    margin-bottom: -13rem;
  }.lg\\:-mb-56{
    margin-bottom: -14rem;
  }.lg\\:-mb-6{
    margin-bottom: -1.5rem;
  }.lg\\:-mb-60{
    margin-bottom: -15rem;
  }.lg\\:-mb-64{
    margin-bottom: -16rem;
  }.lg\\:-mb-7{
    margin-bottom: -1.75rem;
  }.lg\\:-mb-72{
    margin-bottom: -18rem;
  }.lg\\:-mb-8{
    margin-bottom: -2rem;
  }.lg\\:-mb-80{
    margin-bottom: -20rem;
  }.lg\\:-mb-9{
    margin-bottom: -2.25rem;
  }.lg\\:-mb-96{
    margin-bottom: -24rem;
  }.lg\\:-mb-px{
    margin-bottom: -1px;
  }.lg\\:-me-0{
    margin-right: -0px;
  }.lg\\:-me-0\\.5{
    margin-right: -0.125rem;
  }.lg\\:-me-1{
    margin-right: -0.25rem;
  }.lg\\:-me-1\\.5{
    margin-right: -0.375rem;
  }.lg\\:-me-10{
    margin-right: -2.5rem;
  }.lg\\:-me-11{
    margin-right: -2.75rem;
  }.lg\\:-me-12{
    margin-right: -3rem;
  }.lg\\:-me-14{
    margin-right: -3.5rem;
  }.lg\\:-me-15{
    margin-right: -3.75rem;
  }.lg\\:-me-16{
    margin-right: -4rem;
  }.lg\\:-me-2{
    margin-right: -0.5rem;
  }.lg\\:-me-2\\.5{
    margin-right: -0.625rem;
  }.lg\\:-me-20{
    margin-right: -5rem;
  }.lg\\:-me-24{
    margin-right: -6rem;
  }.lg\\:-me-25{
    margin-right: -6.25rem;
  }.lg\\:-me-28{
    margin-right: -7rem;
  }.lg\\:-me-3{
    margin-right: -0.75rem;
  }.lg\\:-me-3\\.5{
    margin-right: -0.875rem;
  }.lg\\:-me-30{
    margin-right: -7.5rem;
  }.lg\\:-me-32{
    margin-right: -8rem;
  }.lg\\:-me-36{
    margin-right: -9rem;
  }.lg\\:-me-4{
    margin-right: -1rem;
  }.lg\\:-me-40{
    margin-right: -10rem;
  }.lg\\:-me-44{
    margin-right: -11rem;
  }.lg\\:-me-48{
    margin-right: -12rem;
  }.lg\\:-me-5{
    margin-right: -1.25rem;
  }.lg\\:-me-52{
    margin-right: -13rem;
  }.lg\\:-me-56{
    margin-right: -14rem;
  }.lg\\:-me-6{
    margin-right: -1.5rem;
  }.lg\\:-me-60{
    margin-right: -15rem;
  }.lg\\:-me-64{
    margin-right: -16rem;
  }.lg\\:-me-7{
    margin-right: -1.75rem;
  }.lg\\:-me-72{
    margin-right: -18rem;
  }.lg\\:-me-8{
    margin-right: -2rem;
  }.lg\\:-me-80{
    margin-right: -20rem;
  }.lg\\:-me-9{
    margin-right: -2.25rem;
  }.lg\\:-me-96{
    margin-right: -24rem;
  }.lg\\:-me-px{
    margin-right: -1px;
  }.lg\\:-ml-0{
    margin-left: -0px;
  }.lg\\:-ml-0\\.5{
    margin-left: -0.125rem;
  }.lg\\:-ml-1{
    margin-left: -0.25rem;
  }.lg\\:-ml-1\\.5{
    margin-left: -0.375rem;
  }.lg\\:-ml-10{
    margin-left: -2.5rem;
  }.lg\\:-ml-11{
    margin-left: -2.75rem;
  }.lg\\:-ml-12{
    margin-left: -3rem;
  }.lg\\:-ml-14{
    margin-left: -3.5rem;
  }.lg\\:-ml-15{
    margin-left: -3.75rem;
  }.lg\\:-ml-16{
    margin-left: -4rem;
  }.lg\\:-ml-2{
    margin-left: -0.5rem;
  }.lg\\:-ml-2\\.5{
    margin-left: -0.625rem;
  }.lg\\:-ml-20{
    margin-left: -5rem;
  }.lg\\:-ml-24{
    margin-left: -6rem;
  }.lg\\:-ml-25{
    margin-left: -6.25rem;
  }.lg\\:-ml-28{
    margin-left: -7rem;
  }.lg\\:-ml-3{
    margin-left: -0.75rem;
  }.lg\\:-ml-3\\.5{
    margin-left: -0.875rem;
  }.lg\\:-ml-30{
    margin-left: -7.5rem;
  }.lg\\:-ml-32{
    margin-left: -8rem;
  }.lg\\:-ml-36{
    margin-left: -9rem;
  }.lg\\:-ml-4{
    margin-left: -1rem;
  }.lg\\:-ml-40{
    margin-left: -10rem;
  }.lg\\:-ml-44{
    margin-left: -11rem;
  }.lg\\:-ml-48{
    margin-left: -12rem;
  }.lg\\:-ml-5{
    margin-left: -1.25rem;
  }.lg\\:-ml-52{
    margin-left: -13rem;
  }.lg\\:-ml-56{
    margin-left: -14rem;
  }.lg\\:-ml-6{
    margin-left: -1.5rem;
  }.lg\\:-ml-60{
    margin-left: -15rem;
  }.lg\\:-ml-64{
    margin-left: -16rem;
  }.lg\\:-ml-7{
    margin-left: -1.75rem;
  }.lg\\:-ml-72{
    margin-left: -18rem;
  }.lg\\:-ml-8{
    margin-left: -2rem;
  }.lg\\:-ml-80{
    margin-left: -20rem;
  }.lg\\:-ml-9{
    margin-left: -2.25rem;
  }.lg\\:-ml-96{
    margin-left: -24rem;
  }.lg\\:-ml-px{
    margin-left: -1px;
  }.lg\\:-mr-0{
    margin-right: -0px;
  }.lg\\:-mr-0\\.5{
    margin-right: -0.125rem;
  }.lg\\:-mr-1{
    margin-right: -0.25rem;
  }.lg\\:-mr-1\\.5{
    margin-right: -0.375rem;
  }.lg\\:-mr-10{
    margin-right: -2.5rem;
  }.lg\\:-mr-11{
    margin-right: -2.75rem;
  }.lg\\:-mr-12{
    margin-right: -3rem;
  }.lg\\:-mr-14{
    margin-right: -3.5rem;
  }.lg\\:-mr-15{
    margin-right: -3.75rem;
  }.lg\\:-mr-16{
    margin-right: -4rem;
  }.lg\\:-mr-2{
    margin-right: -0.5rem;
  }.lg\\:-mr-2\\.5{
    margin-right: -0.625rem;
  }.lg\\:-mr-20{
    margin-right: -5rem;
  }.lg\\:-mr-24{
    margin-right: -6rem;
  }.lg\\:-mr-25{
    margin-right: -6.25rem;
  }.lg\\:-mr-28{
    margin-right: -7rem;
  }.lg\\:-mr-3{
    margin-right: -0.75rem;
  }.lg\\:-mr-3\\.5{
    margin-right: -0.875rem;
  }.lg\\:-mr-30{
    margin-right: -7.5rem;
  }.lg\\:-mr-32{
    margin-right: -8rem;
  }.lg\\:-mr-36{
    margin-right: -9rem;
  }.lg\\:-mr-4{
    margin-right: -1rem;
  }.lg\\:-mr-40{
    margin-right: -10rem;
  }.lg\\:-mr-44{
    margin-right: -11rem;
  }.lg\\:-mr-48{
    margin-right: -12rem;
  }.lg\\:-mr-5{
    margin-right: -1.25rem;
  }.lg\\:-mr-52{
    margin-right: -13rem;
  }.lg\\:-mr-56{
    margin-right: -14rem;
  }.lg\\:-mr-6{
    margin-right: -1.5rem;
  }.lg\\:-mr-60{
    margin-right: -15rem;
  }.lg\\:-mr-64{
    margin-right: -16rem;
  }.lg\\:-mr-7{
    margin-right: -1.75rem;
  }.lg\\:-mr-72{
    margin-right: -18rem;
  }.lg\\:-mr-8{
    margin-right: -2rem;
  }.lg\\:-mr-80{
    margin-right: -20rem;
  }.lg\\:-mr-9{
    margin-right: -2.25rem;
  }.lg\\:-mr-96{
    margin-right: -24rem;
  }.lg\\:-mr-px{
    margin-right: -1px;
  }.lg\\:-ms-0{
    margin-left: -0px;
  }.lg\\:-ms-0\\.5{
    margin-left: -0.125rem;
  }.lg\\:-ms-1{
    margin-left: -0.25rem;
  }.lg\\:-ms-1\\.5{
    margin-left: -0.375rem;
  }.lg\\:-ms-10{
    margin-left: -2.5rem;
  }.lg\\:-ms-11{
    margin-left: -2.75rem;
  }.lg\\:-ms-12{
    margin-left: -3rem;
  }.lg\\:-ms-14{
    margin-left: -3.5rem;
  }.lg\\:-ms-15{
    margin-left: -3.75rem;
  }.lg\\:-ms-16{
    margin-left: -4rem;
  }.lg\\:-ms-2{
    margin-left: -0.5rem;
  }.lg\\:-ms-2\\.5{
    margin-left: -0.625rem;
  }.lg\\:-ms-20{
    margin-left: -5rem;
  }.lg\\:-ms-24{
    margin-left: -6rem;
  }.lg\\:-ms-25{
    margin-left: -6.25rem;
  }.lg\\:-ms-28{
    margin-left: -7rem;
  }.lg\\:-ms-3{
    margin-left: -0.75rem;
  }.lg\\:-ms-3\\.5{
    margin-left: -0.875rem;
  }.lg\\:-ms-30{
    margin-left: -7.5rem;
  }.lg\\:-ms-32{
    margin-left: -8rem;
  }.lg\\:-ms-36{
    margin-left: -9rem;
  }.lg\\:-ms-4{
    margin-left: -1rem;
  }.lg\\:-ms-40{
    margin-left: -10rem;
  }.lg\\:-ms-44{
    margin-left: -11rem;
  }.lg\\:-ms-48{
    margin-left: -12rem;
  }.lg\\:-ms-5{
    margin-left: -1.25rem;
  }.lg\\:-ms-52{
    margin-left: -13rem;
  }.lg\\:-ms-56{
    margin-left: -14rem;
  }.lg\\:-ms-6{
    margin-left: -1.5rem;
  }.lg\\:-ms-60{
    margin-left: -15rem;
  }.lg\\:-ms-64{
    margin-left: -16rem;
  }.lg\\:-ms-7{
    margin-left: -1.75rem;
  }.lg\\:-ms-72{
    margin-left: -18rem;
  }.lg\\:-ms-8{
    margin-left: -2rem;
  }.lg\\:-ms-80{
    margin-left: -20rem;
  }.lg\\:-ms-9{
    margin-left: -2.25rem;
  }.lg\\:-ms-96{
    margin-left: -24rem;
  }.lg\\:-ms-px{
    margin-left: -1px;
  }.lg\\:-mt-0{
    margin-top: -0px;
  }.lg\\:-mt-0\\.5{
    margin-top: -0.125rem;
  }.lg\\:-mt-1{
    margin-top: -0.25rem;
  }.lg\\:-mt-1\\.5{
    margin-top: -0.375rem;
  }.lg\\:-mt-10{
    margin-top: -2.5rem;
  }.lg\\:-mt-11{
    margin-top: -2.75rem;
  }.lg\\:-mt-12{
    margin-top: -3rem;
  }.lg\\:-mt-14{
    margin-top: -3.5rem;
  }.lg\\:-mt-15{
    margin-top: -3.75rem;
  }.lg\\:-mt-16{
    margin-top: -4rem;
  }.lg\\:-mt-2{
    margin-top: -0.5rem;
  }.lg\\:-mt-2\\.5{
    margin-top: -0.625rem;
  }.lg\\:-mt-20{
    margin-top: -5rem;
  }.lg\\:-mt-24{
    margin-top: -6rem;
  }.lg\\:-mt-25{
    margin-top: -6.25rem;
  }.lg\\:-mt-28{
    margin-top: -7rem;
  }.lg\\:-mt-3{
    margin-top: -0.75rem;
  }.lg\\:-mt-3\\.5{
    margin-top: -0.875rem;
  }.lg\\:-mt-30{
    margin-top: -7.5rem;
  }.lg\\:-mt-32{
    margin-top: -8rem;
  }.lg\\:-mt-36{
    margin-top: -9rem;
  }.lg\\:-mt-4{
    margin-top: -1rem;
  }.lg\\:-mt-40{
    margin-top: -10rem;
  }.lg\\:-mt-44{
    margin-top: -11rem;
  }.lg\\:-mt-48{
    margin-top: -12rem;
  }.lg\\:-mt-5{
    margin-top: -1.25rem;
  }.lg\\:-mt-52{
    margin-top: -13rem;
  }.lg\\:-mt-56{
    margin-top: -14rem;
  }.lg\\:-mt-6{
    margin-top: -1.5rem;
  }.lg\\:-mt-60{
    margin-top: -15rem;
  }.lg\\:-mt-64{
    margin-top: -16rem;
  }.lg\\:-mt-7{
    margin-top: -1.75rem;
  }.lg\\:-mt-72{
    margin-top: -18rem;
  }.lg\\:-mt-8{
    margin-top: -2rem;
  }.lg\\:-mt-80{
    margin-top: -20rem;
  }.lg\\:-mt-9{
    margin-top: -2.25rem;
  }.lg\\:-mt-96{
    margin-top: -24rem;
  }.lg\\:-mt-px{
    margin-top: -1px;
  }.lg\\:mb-0{
    margin-bottom: 0px;
  }.lg\\:mb-0\\.5{
    margin-bottom: 0.125rem;
  }.lg\\:mb-1{
    margin-bottom: 0.25rem;
  }.lg\\:mb-1\\.5{
    margin-bottom: 0.375rem;
  }.lg\\:mb-10{
    margin-bottom: 2.5rem;
  }.lg\\:mb-11{
    margin-bottom: 2.75rem;
  }.lg\\:mb-12{
    margin-bottom: 3rem;
  }.lg\\:mb-14{
    margin-bottom: 3.5rem;
  }.lg\\:mb-15{
    margin-bottom: 3.75rem;
  }.lg\\:mb-16{
    margin-bottom: 4rem;
  }.lg\\:mb-2{
    margin-bottom: 0.5rem;
  }.lg\\:mb-2\\.5{
    margin-bottom: 0.625rem;
  }.lg\\:mb-20{
    margin-bottom: 5rem;
  }.lg\\:mb-24{
    margin-bottom: 6rem;
  }.lg\\:mb-25{
    margin-bottom: 6.25rem;
  }.lg\\:mb-28{
    margin-bottom: 7rem;
  }.lg\\:mb-3{
    margin-bottom: 0.75rem;
  }.lg\\:mb-3\\.5{
    margin-bottom: 0.875rem;
  }.lg\\:mb-30{
    margin-bottom: 7.5rem;
  }.lg\\:mb-32{
    margin-bottom: 8rem;
  }.lg\\:mb-36{
    margin-bottom: 9rem;
  }.lg\\:mb-4{
    margin-bottom: 1rem;
  }.lg\\:mb-40{
    margin-bottom: 10rem;
  }.lg\\:mb-44{
    margin-bottom: 11rem;
  }.lg\\:mb-48{
    margin-bottom: 12rem;
  }.lg\\:mb-5{
    margin-bottom: 1.25rem;
  }.lg\\:mb-52{
    margin-bottom: 13rem;
  }.lg\\:mb-56{
    margin-bottom: 14rem;
  }.lg\\:mb-6{
    margin-bottom: 1.5rem;
  }.lg\\:mb-60{
    margin-bottom: 15rem;
  }.lg\\:mb-64{
    margin-bottom: 16rem;
  }.lg\\:mb-7{
    margin-bottom: 1.75rem;
  }.lg\\:mb-72{
    margin-bottom: 18rem;
  }.lg\\:mb-8{
    margin-bottom: 2rem;
  }.lg\\:mb-80{
    margin-bottom: 20rem;
  }.lg\\:mb-9{
    margin-bottom: 2.25rem;
  }.lg\\:mb-96{
    margin-bottom: 24rem;
  }.lg\\:mb-auto{
    margin-bottom: auto;
  }.lg\\:mb-px{
    margin-bottom: 1px;
  }.lg\\:me-0{
    margin-right: 0px;
  }.lg\\:me-0\\.5{
    margin-right: 0.125rem;
  }.lg\\:me-1{
    margin-right: 0.25rem;
  }.lg\\:me-1\\.5{
    margin-right: 0.375rem;
  }.lg\\:me-10{
    margin-right: 2.5rem;
  }.lg\\:me-11{
    margin-right: 2.75rem;
  }.lg\\:me-12{
    margin-right: 3rem;
  }.lg\\:me-14{
    margin-right: 3.5rem;
  }.lg\\:me-15{
    margin-right: 3.75rem;
  }.lg\\:me-16{
    margin-right: 4rem;
  }.lg\\:me-2{
    margin-right: 0.5rem;
  }.lg\\:me-2\\.5{
    margin-right: 0.625rem;
  }.lg\\:me-20{
    margin-right: 5rem;
  }.lg\\:me-24{
    margin-right: 6rem;
  }.lg\\:me-25{
    margin-right: 6.25rem;
  }.lg\\:me-28{
    margin-right: 7rem;
  }.lg\\:me-3{
    margin-right: 0.75rem;
  }.lg\\:me-3\\.5{
    margin-right: 0.875rem;
  }.lg\\:me-30{
    margin-right: 7.5rem;
  }.lg\\:me-32{
    margin-right: 8rem;
  }.lg\\:me-36{
    margin-right: 9rem;
  }.lg\\:me-4{
    margin-right: 1rem;
  }.lg\\:me-40{
    margin-right: 10rem;
  }.lg\\:me-44{
    margin-right: 11rem;
  }.lg\\:me-48{
    margin-right: 12rem;
  }.lg\\:me-5{
    margin-right: 1.25rem;
  }.lg\\:me-52{
    margin-right: 13rem;
  }.lg\\:me-56{
    margin-right: 14rem;
  }.lg\\:me-6{
    margin-right: 1.5rem;
  }.lg\\:me-60{
    margin-right: 15rem;
  }.lg\\:me-64{
    margin-right: 16rem;
  }.lg\\:me-7{
    margin-right: 1.75rem;
  }.lg\\:me-72{
    margin-right: 18rem;
  }.lg\\:me-8{
    margin-right: 2rem;
  }.lg\\:me-80{
    margin-right: 20rem;
  }.lg\\:me-9{
    margin-right: 2.25rem;
  }.lg\\:me-96{
    margin-right: 24rem;
  }.lg\\:me-auto{
    margin-right: auto;
  }.lg\\:me-px{
    margin-right: 1px;
  }.lg\\:ml-0{
    margin-left: 0px;
  }.lg\\:ml-0\\.5{
    margin-left: 0.125rem;
  }.lg\\:ml-1{
    margin-left: 0.25rem;
  }.lg\\:ml-1\\.5{
    margin-left: 0.375rem;
  }.lg\\:ml-10{
    margin-left: 2.5rem;
  }.lg\\:ml-11{
    margin-left: 2.75rem;
  }.lg\\:ml-12{
    margin-left: 3rem;
  }.lg\\:ml-14{
    margin-left: 3.5rem;
  }.lg\\:ml-15{
    margin-left: 3.75rem;
  }.lg\\:ml-16{
    margin-left: 4rem;
  }.lg\\:ml-2{
    margin-left: 0.5rem;
  }.lg\\:ml-2\\.5{
    margin-left: 0.625rem;
  }.lg\\:ml-20{
    margin-left: 5rem;
  }.lg\\:ml-24{
    margin-left: 6rem;
  }.lg\\:ml-25{
    margin-left: 6.25rem;
  }.lg\\:ml-28{
    margin-left: 7rem;
  }.lg\\:ml-3{
    margin-left: 0.75rem;
  }.lg\\:ml-3\\.5{
    margin-left: 0.875rem;
  }.lg\\:ml-30{
    margin-left: 7.5rem;
  }.lg\\:ml-32{
    margin-left: 8rem;
  }.lg\\:ml-36{
    margin-left: 9rem;
  }.lg\\:ml-4{
    margin-left: 1rem;
  }.lg\\:ml-40{
    margin-left: 10rem;
  }.lg\\:ml-44{
    margin-left: 11rem;
  }.lg\\:ml-48{
    margin-left: 12rem;
  }.lg\\:ml-5{
    margin-left: 1.25rem;
  }.lg\\:ml-52{
    margin-left: 13rem;
  }.lg\\:ml-56{
    margin-left: 14rem;
  }.lg\\:ml-6{
    margin-left: 1.5rem;
  }.lg\\:ml-60{
    margin-left: 15rem;
  }.lg\\:ml-64{
    margin-left: 16rem;
  }.lg\\:ml-7{
    margin-left: 1.75rem;
  }.lg\\:ml-72{
    margin-left: 18rem;
  }.lg\\:ml-8{
    margin-left: 2rem;
  }.lg\\:ml-80{
    margin-left: 20rem;
  }.lg\\:ml-9{
    margin-left: 2.25rem;
  }.lg\\:ml-96{
    margin-left: 24rem;
  }.lg\\:ml-auto{
    margin-left: auto;
  }.lg\\:ml-px{
    margin-left: 1px;
  }.lg\\:mr-0{
    margin-right: 0px;
  }.lg\\:mr-0\\.5{
    margin-right: 0.125rem;
  }.lg\\:mr-1{
    margin-right: 0.25rem;
  }.lg\\:mr-1\\.5{
    margin-right: 0.375rem;
  }.lg\\:mr-10{
    margin-right: 2.5rem;
  }.lg\\:mr-11{
    margin-right: 2.75rem;
  }.lg\\:mr-12{
    margin-right: 3rem;
  }.lg\\:mr-14{
    margin-right: 3.5rem;
  }.lg\\:mr-15{
    margin-right: 3.75rem;
  }.lg\\:mr-16{
    margin-right: 4rem;
  }.lg\\:mr-2{
    margin-right: 0.5rem;
  }.lg\\:mr-2\\.5{
    margin-right: 0.625rem;
  }.lg\\:mr-20{
    margin-right: 5rem;
  }.lg\\:mr-24{
    margin-right: 6rem;
  }.lg\\:mr-25{
    margin-right: 6.25rem;
  }.lg\\:mr-28{
    margin-right: 7rem;
  }.lg\\:mr-3{
    margin-right: 0.75rem;
  }.lg\\:mr-3\\.5{
    margin-right: 0.875rem;
  }.lg\\:mr-30{
    margin-right: 7.5rem;
  }.lg\\:mr-32{
    margin-right: 8rem;
  }.lg\\:mr-36{
    margin-right: 9rem;
  }.lg\\:mr-4{
    margin-right: 1rem;
  }.lg\\:mr-40{
    margin-right: 10rem;
  }.lg\\:mr-44{
    margin-right: 11rem;
  }.lg\\:mr-48{
    margin-right: 12rem;
  }.lg\\:mr-5{
    margin-right: 1.25rem;
  }.lg\\:mr-52{
    margin-right: 13rem;
  }.lg\\:mr-56{
    margin-right: 14rem;
  }.lg\\:mr-6{
    margin-right: 1.5rem;
  }.lg\\:mr-60{
    margin-right: 15rem;
  }.lg\\:mr-64{
    margin-right: 16rem;
  }.lg\\:mr-7{
    margin-right: 1.75rem;
  }.lg\\:mr-72{
    margin-right: 18rem;
  }.lg\\:mr-8{
    margin-right: 2rem;
  }.lg\\:mr-80{
    margin-right: 20rem;
  }.lg\\:mr-9{
    margin-right: 2.25rem;
  }.lg\\:mr-96{
    margin-right: 24rem;
  }.lg\\:mr-auto{
    margin-right: auto;
  }.lg\\:mr-px{
    margin-right: 1px;
  }.lg\\:ms-0{
    margin-left: 0px;
  }.lg\\:ms-0\\.5{
    margin-left: 0.125rem;
  }.lg\\:ms-1{
    margin-left: 0.25rem;
  }.lg\\:ms-1\\.5{
    margin-left: 0.375rem;
  }.lg\\:ms-10{
    margin-left: 2.5rem;
  }.lg\\:ms-11{
    margin-left: 2.75rem;
  }.lg\\:ms-12{
    margin-left: 3rem;
  }.lg\\:ms-14{
    margin-left: 3.5rem;
  }.lg\\:ms-15{
    margin-left: 3.75rem;
  }.lg\\:ms-16{
    margin-left: 4rem;
  }.lg\\:ms-2{
    margin-left: 0.5rem;
  }.lg\\:ms-2\\.5{
    margin-left: 0.625rem;
  }.lg\\:ms-20{
    margin-left: 5rem;
  }.lg\\:ms-24{
    margin-left: 6rem;
  }.lg\\:ms-25{
    margin-left: 6.25rem;
  }.lg\\:ms-28{
    margin-left: 7rem;
  }.lg\\:ms-3{
    margin-left: 0.75rem;
  }.lg\\:ms-3\\.5{
    margin-left: 0.875rem;
  }.lg\\:ms-30{
    margin-left: 7.5rem;
  }.lg\\:ms-32{
    margin-left: 8rem;
  }.lg\\:ms-36{
    margin-left: 9rem;
  }.lg\\:ms-4{
    margin-left: 1rem;
  }.lg\\:ms-40{
    margin-left: 10rem;
  }.lg\\:ms-44{
    margin-left: 11rem;
  }.lg\\:ms-48{
    margin-left: 12rem;
  }.lg\\:ms-5{
    margin-left: 1.25rem;
  }.lg\\:ms-52{
    margin-left: 13rem;
  }.lg\\:ms-56{
    margin-left: 14rem;
  }.lg\\:ms-6{
    margin-left: 1.5rem;
  }.lg\\:ms-60{
    margin-left: 15rem;
  }.lg\\:ms-64{
    margin-left: 16rem;
  }.lg\\:ms-7{
    margin-left: 1.75rem;
  }.lg\\:ms-72{
    margin-left: 18rem;
  }.lg\\:ms-8{
    margin-left: 2rem;
  }.lg\\:ms-80{
    margin-left: 20rem;
  }.lg\\:ms-9{
    margin-left: 2.25rem;
  }.lg\\:ms-96{
    margin-left: 24rem;
  }.lg\\:ms-auto{
    margin-left: auto;
  }.lg\\:ms-px{
    margin-left: 1px;
  }.lg\\:mt-0{
    margin-top: 0px;
  }.lg\\:mt-0\\.5{
    margin-top: 0.125rem;
  }.lg\\:mt-1{
    margin-top: 0.25rem;
  }.lg\\:mt-1\\.5{
    margin-top: 0.375rem;
  }.lg\\:mt-10{
    margin-top: 2.5rem;
  }.lg\\:mt-11{
    margin-top: 2.75rem;
  }.lg\\:mt-12{
    margin-top: 3rem;
  }.lg\\:mt-14{
    margin-top: 3.5rem;
  }.lg\\:mt-15{
    margin-top: 3.75rem;
  }.lg\\:mt-16{
    margin-top: 4rem;
  }.lg\\:mt-2{
    margin-top: 0.5rem;
  }.lg\\:mt-2\\.5{
    margin-top: 0.625rem;
  }.lg\\:mt-20{
    margin-top: 5rem;
  }.lg\\:mt-24{
    margin-top: 6rem;
  }.lg\\:mt-25{
    margin-top: 6.25rem;
  }.lg\\:mt-28{
    margin-top: 7rem;
  }.lg\\:mt-3{
    margin-top: 0.75rem;
  }.lg\\:mt-3\\.5{
    margin-top: 0.875rem;
  }.lg\\:mt-30{
    margin-top: 7.5rem;
  }.lg\\:mt-32{
    margin-top: 8rem;
  }.lg\\:mt-36{
    margin-top: 9rem;
  }.lg\\:mt-4{
    margin-top: 1rem;
  }.lg\\:mt-40{
    margin-top: 10rem;
  }.lg\\:mt-44{
    margin-top: 11rem;
  }.lg\\:mt-48{
    margin-top: 12rem;
  }.lg\\:mt-5{
    margin-top: 1.25rem;
  }.lg\\:mt-52{
    margin-top: 13rem;
  }.lg\\:mt-56{
    margin-top: 14rem;
  }.lg\\:mt-6{
    margin-top: 1.5rem;
  }.lg\\:mt-60{
    margin-top: 15rem;
  }.lg\\:mt-64{
    margin-top: 16rem;
  }.lg\\:mt-7{
    margin-top: 1.75rem;
  }.lg\\:mt-72{
    margin-top: 18rem;
  }.lg\\:mt-8{
    margin-top: 2rem;
  }.lg\\:mt-80{
    margin-top: 20rem;
  }.lg\\:mt-9{
    margin-top: 2.25rem;
  }.lg\\:mt-96{
    margin-top: 24rem;
  }.lg\\:mt-auto{
    margin-top: auto;
  }.lg\\:mt-px{
    margin-top: 1px;
  }.lg\\:block{
    display: block;
  }.lg\\:grid{
    display: grid;
  }.lg\\:inline-grid{
    display: inline-grid;
  }.lg\\:hidden{
    display: none;
  }.lg\\:grid-flow-row{
    grid-auto-flow: row;
  }.lg\\:grid-flow-col{
    grid-auto-flow: column;
  }.lg\\:grid-flow-dense{
    grid-auto-flow: dense;
  }.lg\\:grid-flow-row-dense{
    grid-auto-flow: row dense;
  }.lg\\:grid-flow-col-dense{
    grid-auto-flow: column dense;
  }.lg\\:grid-cols-1{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }.lg\\:grid-cols-10{
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }.lg\\:grid-cols-11{
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }.lg\\:grid-cols-12{
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }.lg\\:grid-cols-2{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }.lg\\:grid-cols-3{
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }.lg\\:grid-cols-4{
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }.lg\\:grid-cols-5{
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }.lg\\:grid-cols-6{
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }.lg\\:grid-cols-7{
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }.lg\\:grid-cols-8{
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }.lg\\:grid-cols-9{
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }.lg\\:grid-cols-none{
    grid-template-columns: none;
  }.lg\\:grid-rows-1{
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }.lg\\:grid-rows-2{
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }.lg\\:grid-rows-3{
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }.lg\\:grid-rows-4{
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }.lg\\:grid-rows-5{
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }.lg\\:grid-rows-6{
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }.lg\\:grid-rows-none{
    grid-template-rows: none;
  }.lg\\:place-items-start{
    align-items: start;
    justify-items: start;
    place-items: start;
  }.lg\\:place-items-end{
    align-items: end;
    justify-items: end;
    place-items: end;
  }.lg\\:place-items-center{
    align-items: center;
    justify-items: center;
    place-items: center;
  }.lg\\:items-start{
    align-items: flex-start;
  }.lg\\:items-end{
    align-items: flex-end;
  }.lg\\:items-center{
    align-items: center;
  }.lg\\:justify-start{
    justify-content: flex-start;
  }.lg\\:justify-end{
    justify-content: flex-end;
  }.lg\\:justify-center{
    justify-content: center;
  }.lg\\:justify-items-start{
    justify-items: start;
  }.lg\\:justify-items-end{
    justify-items: end;
  }.lg\\:justify-items-center{
    justify-items: center;
  }.lg\\:gap-0{
    gap: 0px;
  }.lg\\:gap-0\\.5{
    gap: 0.125rem;
  }.lg\\:gap-1{
    gap: 0.25rem;
  }.lg\\:gap-1\\.5{
    gap: 0.375rem;
  }.lg\\:gap-10{
    gap: 2.5rem;
  }.lg\\:gap-11{
    gap: 2.75rem;
  }.lg\\:gap-12{
    gap: 3rem;
  }.lg\\:gap-14{
    gap: 3.5rem;
  }.lg\\:gap-15{
    gap: 3.75rem;
  }.lg\\:gap-16{
    gap: 4rem;
  }.lg\\:gap-2{
    gap: 0.5rem;
  }.lg\\:gap-2\\.5{
    gap: 0.625rem;
  }.lg\\:gap-20{
    gap: 5rem;
  }.lg\\:gap-24{
    gap: 6rem;
  }.lg\\:gap-25{
    gap: 6.25rem;
  }.lg\\:gap-28{
    gap: 7rem;
  }.lg\\:gap-3{
    gap: 0.75rem;
  }.lg\\:gap-3\\.5{
    gap: 0.875rem;
  }.lg\\:gap-30{
    gap: 7.5rem;
  }.lg\\:gap-32{
    gap: 8rem;
  }.lg\\:gap-36{
    gap: 9rem;
  }.lg\\:gap-4{
    gap: 1rem;
  }.lg\\:gap-40{
    gap: 10rem;
  }.lg\\:gap-44{
    gap: 11rem;
  }.lg\\:gap-48{
    gap: 12rem;
  }.lg\\:gap-5{
    gap: 1.25rem;
  }.lg\\:gap-52{
    gap: 13rem;
  }.lg\\:gap-56{
    gap: 14rem;
  }.lg\\:gap-6{
    gap: 1.5rem;
  }.lg\\:gap-60{
    gap: 15rem;
  }.lg\\:gap-64{
    gap: 16rem;
  }.lg\\:gap-7{
    gap: 1.75rem;
  }.lg\\:gap-72{
    gap: 18rem;
  }.lg\\:gap-8{
    gap: 2rem;
  }.lg\\:gap-80{
    gap: 20rem;
  }.lg\\:gap-9{
    gap: 2.25rem;
  }.lg\\:gap-96{
    gap: 24rem;
  }.lg\\:gap-px{
    gap: 1px;
  }.lg\\:gap-x-0{
    -moz-column-gap: 0px;
         column-gap: 0px;
  }.lg\\:gap-x-0\\.5{
    -moz-column-gap: 0.125rem;
         column-gap: 0.125rem;
  }.lg\\:gap-x-1{
    -moz-column-gap: 0.25rem;
         column-gap: 0.25rem;
  }.lg\\:gap-x-1\\.5{
    -moz-column-gap: 0.375rem;
         column-gap: 0.375rem;
  }.lg\\:gap-x-10{
    -moz-column-gap: 2.5rem;
         column-gap: 2.5rem;
  }.lg\\:gap-x-11{
    -moz-column-gap: 2.75rem;
         column-gap: 2.75rem;
  }.lg\\:gap-x-12{
    -moz-column-gap: 3rem;
         column-gap: 3rem;
  }.lg\\:gap-x-14{
    -moz-column-gap: 3.5rem;
         column-gap: 3.5rem;
  }.lg\\:gap-x-15{
    -moz-column-gap: 3.75rem;
         column-gap: 3.75rem;
  }.lg\\:gap-x-16{
    -moz-column-gap: 4rem;
         column-gap: 4rem;
  }.lg\\:gap-x-2{
    -moz-column-gap: 0.5rem;
         column-gap: 0.5rem;
  }.lg\\:gap-x-2\\.5{
    -moz-column-gap: 0.625rem;
         column-gap: 0.625rem;
  }.lg\\:gap-x-20{
    -moz-column-gap: 5rem;
         column-gap: 5rem;
  }.lg\\:gap-x-24{
    -moz-column-gap: 6rem;
         column-gap: 6rem;
  }.lg\\:gap-x-25{
    -moz-column-gap: 6.25rem;
         column-gap: 6.25rem;
  }.lg\\:gap-x-28{
    -moz-column-gap: 7rem;
         column-gap: 7rem;
  }.lg\\:gap-x-3{
    -moz-column-gap: 0.75rem;
         column-gap: 0.75rem;
  }.lg\\:gap-x-3\\.5{
    -moz-column-gap: 0.875rem;
         column-gap: 0.875rem;
  }.lg\\:gap-x-30{
    -moz-column-gap: 7.5rem;
         column-gap: 7.5rem;
  }.lg\\:gap-x-32{
    -moz-column-gap: 8rem;
         column-gap: 8rem;
  }.lg\\:gap-x-36{
    -moz-column-gap: 9rem;
         column-gap: 9rem;
  }.lg\\:gap-x-4{
    -moz-column-gap: 1rem;
         column-gap: 1rem;
  }.lg\\:gap-x-40{
    -moz-column-gap: 10rem;
         column-gap: 10rem;
  }.lg\\:gap-x-44{
    -moz-column-gap: 11rem;
         column-gap: 11rem;
  }.lg\\:gap-x-48{
    -moz-column-gap: 12rem;
         column-gap: 12rem;
  }.lg\\:gap-x-5{
    -moz-column-gap: 1.25rem;
         column-gap: 1.25rem;
  }.lg\\:gap-x-52{
    -moz-column-gap: 13rem;
         column-gap: 13rem;
  }.lg\\:gap-x-56{
    -moz-column-gap: 14rem;
         column-gap: 14rem;
  }.lg\\:gap-x-6{
    -moz-column-gap: 1.5rem;
         column-gap: 1.5rem;
  }.lg\\:gap-x-60{
    -moz-column-gap: 15rem;
         column-gap: 15rem;
  }.lg\\:gap-x-64{
    -moz-column-gap: 16rem;
         column-gap: 16rem;
  }.lg\\:gap-x-7{
    -moz-column-gap: 1.75rem;
         column-gap: 1.75rem;
  }.lg\\:gap-x-72{
    -moz-column-gap: 18rem;
         column-gap: 18rem;
  }.lg\\:gap-x-8{
    -moz-column-gap: 2rem;
         column-gap: 2rem;
  }.lg\\:gap-x-80{
    -moz-column-gap: 20rem;
         column-gap: 20rem;
  }.lg\\:gap-x-9{
    -moz-column-gap: 2.25rem;
         column-gap: 2.25rem;
  }.lg\\:gap-x-96{
    -moz-column-gap: 24rem;
         column-gap: 24rem;
  }.lg\\:gap-x-px{
    -moz-column-gap: 1px;
         column-gap: 1px;
  }.lg\\:gap-y-0{
    row-gap: 0px;
  }.lg\\:gap-y-0\\.5{
    row-gap: 0.125rem;
  }.lg\\:gap-y-1{
    row-gap: 0.25rem;
  }.lg\\:gap-y-1\\.5{
    row-gap: 0.375rem;
  }.lg\\:gap-y-10{
    row-gap: 2.5rem;
  }.lg\\:gap-y-11{
    row-gap: 2.75rem;
  }.lg\\:gap-y-12{
    row-gap: 3rem;
  }.lg\\:gap-y-14{
    row-gap: 3.5rem;
  }.lg\\:gap-y-15{
    row-gap: 3.75rem;
  }.lg\\:gap-y-16{
    row-gap: 4rem;
  }.lg\\:gap-y-2{
    row-gap: 0.5rem;
  }.lg\\:gap-y-2\\.5{
    row-gap: 0.625rem;
  }.lg\\:gap-y-20{
    row-gap: 5rem;
  }.lg\\:gap-y-24{
    row-gap: 6rem;
  }.lg\\:gap-y-25{
    row-gap: 6.25rem;
  }.lg\\:gap-y-28{
    row-gap: 7rem;
  }.lg\\:gap-y-3{
    row-gap: 0.75rem;
  }.lg\\:gap-y-3\\.5{
    row-gap: 0.875rem;
  }.lg\\:gap-y-30{
    row-gap: 7.5rem;
  }.lg\\:gap-y-32{
    row-gap: 8rem;
  }.lg\\:gap-y-36{
    row-gap: 9rem;
  }.lg\\:gap-y-4{
    row-gap: 1rem;
  }.lg\\:gap-y-40{
    row-gap: 10rem;
  }.lg\\:gap-y-44{
    row-gap: 11rem;
  }.lg\\:gap-y-48{
    row-gap: 12rem;
  }.lg\\:gap-y-5{
    row-gap: 1.25rem;
  }.lg\\:gap-y-52{
    row-gap: 13rem;
  }.lg\\:gap-y-56{
    row-gap: 14rem;
  }.lg\\:gap-y-6{
    row-gap: 1.5rem;
  }.lg\\:gap-y-60{
    row-gap: 15rem;
  }.lg\\:gap-y-64{
    row-gap: 16rem;
  }.lg\\:gap-y-7{
    row-gap: 1.75rem;
  }.lg\\:gap-y-72{
    row-gap: 18rem;
  }.lg\\:gap-y-8{
    row-gap: 2rem;
  }.lg\\:gap-y-80{
    row-gap: 20rem;
  }.lg\\:gap-y-9{
    row-gap: 2.25rem;
  }.lg\\:gap-y-96{
    row-gap: 24rem;
  }.lg\\:gap-y-px{
    row-gap: 1px;
  }.lg\\:p-0{
    padding: 0px;
  }.lg\\:p-0\\.5{
    padding: 0.125rem;
  }.lg\\:p-1{
    padding: 0.25rem;
  }.lg\\:p-1\\.5{
    padding: 0.375rem;
  }.lg\\:p-10{
    padding: 2.5rem;
  }.lg\\:p-11{
    padding: 2.75rem;
  }.lg\\:p-12{
    padding: 3rem;
  }.lg\\:p-14{
    padding: 3.5rem;
  }.lg\\:p-15{
    padding: 3.75rem;
  }.lg\\:p-16{
    padding: 4rem;
  }.lg\\:p-2{
    padding: 0.5rem;
  }.lg\\:p-2\\.5{
    padding: 0.625rem;
  }.lg\\:p-20{
    padding: 5rem;
  }.lg\\:p-24{
    padding: 6rem;
  }.lg\\:p-25{
    padding: 6.25rem;
  }.lg\\:p-28{
    padding: 7rem;
  }.lg\\:p-3{
    padding: 0.75rem;
  }.lg\\:p-3\\.5{
    padding: 0.875rem;
  }.lg\\:p-30{
    padding: 7.5rem;
  }.lg\\:p-32{
    padding: 8rem;
  }.lg\\:p-36{
    padding: 9rem;
  }.lg\\:p-4{
    padding: 1rem;
  }.lg\\:p-40{
    padding: 10rem;
  }.lg\\:p-44{
    padding: 11rem;
  }.lg\\:p-48{
    padding: 12rem;
  }.lg\\:p-5{
    padding: 1.25rem;
  }.lg\\:p-52{
    padding: 13rem;
  }.lg\\:p-56{
    padding: 14rem;
  }.lg\\:p-6{
    padding: 1.5rem;
  }.lg\\:p-60{
    padding: 15rem;
  }.lg\\:p-64{
    padding: 16rem;
  }.lg\\:p-7{
    padding: 1.75rem;
  }.lg\\:p-72{
    padding: 18rem;
  }.lg\\:p-8{
    padding: 2rem;
  }.lg\\:p-80{
    padding: 20rem;
  }.lg\\:p-9{
    padding: 2.25rem;
  }.lg\\:p-96{
    padding: 24rem;
  }.lg\\:p-px{
    padding: 1px;
  }.lg\\:px-0{
    padding-left: 0px;
    padding-right: 0px;
  }.lg\\:px-0\\.5{
    padding-left: 0.125rem;
    padding-right: 0.125rem;
  }.lg\\:px-1{
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }.lg\\:px-1\\.5{
    padding-left: 0.375rem;
    padding-right: 0.375rem;
  }.lg\\:px-10{
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }.lg\\:px-11{
    padding-left: 2.75rem;
    padding-right: 2.75rem;
  }.lg\\:px-12{
    padding-left: 3rem;
    padding-right: 3rem;
  }.lg\\:px-14{
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }.lg\\:px-15{
    padding-left: 3.75rem;
    padding-right: 3.75rem;
  }.lg\\:px-16{
    padding-left: 4rem;
    padding-right: 4rem;
  }.lg\\:px-2{
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }.lg\\:px-2\\.5{
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }.lg\\:px-20{
    padding-left: 5rem;
    padding-right: 5rem;
  }.lg\\:px-24{
    padding-left: 6rem;
    padding-right: 6rem;
  }.lg\\:px-25{
    padding-left: 6.25rem;
    padding-right: 6.25rem;
  }.lg\\:px-28{
    padding-left: 7rem;
    padding-right: 7rem;
  }.lg\\:px-3{
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }.lg\\:px-3\\.5{
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }.lg\\:px-30{
    padding-left: 7.5rem;
    padding-right: 7.5rem;
  }.lg\\:px-32{
    padding-left: 8rem;
    padding-right: 8rem;
  }.lg\\:px-36{
    padding-left: 9rem;
    padding-right: 9rem;
  }.lg\\:px-4{
    padding-left: 1rem;
    padding-right: 1rem;
  }.lg\\:px-40{
    padding-left: 10rem;
    padding-right: 10rem;
  }.lg\\:px-44{
    padding-left: 11rem;
    padding-right: 11rem;
  }.lg\\:px-48{
    padding-left: 12rem;
    padding-right: 12rem;
  }.lg\\:px-5{
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }.lg\\:px-52{
    padding-left: 13rem;
    padding-right: 13rem;
  }.lg\\:px-56{
    padding-left: 14rem;
    padding-right: 14rem;
  }.lg\\:px-6{
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }.lg\\:px-60{
    padding-left: 15rem;
    padding-right: 15rem;
  }.lg\\:px-64{
    padding-left: 16rem;
    padding-right: 16rem;
  }.lg\\:px-7{
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }.lg\\:px-72{
    padding-left: 18rem;
    padding-right: 18rem;
  }.lg\\:px-8{
    padding-left: 2rem;
    padding-right: 2rem;
  }.lg\\:px-80{
    padding-left: 20rem;
    padding-right: 20rem;
  }.lg\\:px-9{
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }.lg\\:px-96{
    padding-left: 24rem;
    padding-right: 24rem;
  }.lg\\:px-px{
    padding-left: 1px;
    padding-right: 1px;
  }.lg\\:py-0{
    padding-top: 0px;
    padding-bottom: 0px;
  }.lg\\:py-0\\.5{
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
  }.lg\\:py-1{
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }.lg\\:py-1\\.5{
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
  }.lg\\:py-10{
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }.lg\\:py-11{
    padding-top: 2.75rem;
    padding-bottom: 2.75rem;
  }.lg\\:py-12{
    padding-top: 3rem;
    padding-bottom: 3rem;
  }.lg\\:py-14{
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }.lg\\:py-15{
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }.lg\\:py-16{
    padding-top: 4rem;
    padding-bottom: 4rem;
  }.lg\\:py-2{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }.lg\\:py-2\\.5{
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }.lg\\:py-20{
    padding-top: 5rem;
    padding-bottom: 5rem;
  }.lg\\:py-24{
    padding-top: 6rem;
    padding-bottom: 6rem;
  }.lg\\:py-25{
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;
  }.lg\\:py-28{
    padding-top: 7rem;
    padding-bottom: 7rem;
  }.lg\\:py-3{
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }.lg\\:py-3\\.5{
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
  }.lg\\:py-30{
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
  }.lg\\:py-32{
    padding-top: 8rem;
    padding-bottom: 8rem;
  }.lg\\:py-36{
    padding-top: 9rem;
    padding-bottom: 9rem;
  }.lg\\:py-4{
    padding-top: 1rem;
    padding-bottom: 1rem;
  }.lg\\:py-40{
    padding-top: 10rem;
    padding-bottom: 10rem;
  }.lg\\:py-44{
    padding-top: 11rem;
    padding-bottom: 11rem;
  }.lg\\:py-48{
    padding-top: 12rem;
    padding-bottom: 12rem;
  }.lg\\:py-5{
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }.lg\\:py-52{
    padding-top: 13rem;
    padding-bottom: 13rem;
  }.lg\\:py-56{
    padding-top: 14rem;
    padding-bottom: 14rem;
  }.lg\\:py-6{
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }.lg\\:py-60{
    padding-top: 15rem;
    padding-bottom: 15rem;
  }.lg\\:py-64{
    padding-top: 16rem;
    padding-bottom: 16rem;
  }.lg\\:py-7{
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
  }.lg\\:py-72{
    padding-top: 18rem;
    padding-bottom: 18rem;
  }.lg\\:py-8{
    padding-top: 2rem;
    padding-bottom: 2rem;
  }.lg\\:py-80{
    padding-top: 20rem;
    padding-bottom: 20rem;
  }.lg\\:py-9{
    padding-top: 2.25rem;
    padding-bottom: 2.25rem;
  }.lg\\:py-96{
    padding-top: 24rem;
    padding-bottom: 24rem;
  }.lg\\:py-px{
    padding-top: 1px;
    padding-bottom: 1px;
  }.lg\\:pb-0{
    padding-bottom: 0px;
  }.lg\\:pb-0\\.5{
    padding-bottom: 0.125rem;
  }.lg\\:pb-1{
    padding-bottom: 0.25rem;
  }.lg\\:pb-1\\.5{
    padding-bottom: 0.375rem;
  }.lg\\:pb-10{
    padding-bottom: 2.5rem;
  }.lg\\:pb-11{
    padding-bottom: 2.75rem;
  }.lg\\:pb-12{
    padding-bottom: 3rem;
  }.lg\\:pb-14{
    padding-bottom: 3.5rem;
  }.lg\\:pb-15{
    padding-bottom: 3.75rem;
  }.lg\\:pb-16{
    padding-bottom: 4rem;
  }.lg\\:pb-2{
    padding-bottom: 0.5rem;
  }.lg\\:pb-2\\.5{
    padding-bottom: 0.625rem;
  }.lg\\:pb-20{
    padding-bottom: 5rem;
  }.lg\\:pb-24{
    padding-bottom: 6rem;
  }.lg\\:pb-25{
    padding-bottom: 6.25rem;
  }.lg\\:pb-28{
    padding-bottom: 7rem;
  }.lg\\:pb-3{
    padding-bottom: 0.75rem;
  }.lg\\:pb-3\\.5{
    padding-bottom: 0.875rem;
  }.lg\\:pb-30{
    padding-bottom: 7.5rem;
  }.lg\\:pb-32{
    padding-bottom: 8rem;
  }.lg\\:pb-36{
    padding-bottom: 9rem;
  }.lg\\:pb-4{
    padding-bottom: 1rem;
  }.lg\\:pb-40{
    padding-bottom: 10rem;
  }.lg\\:pb-44{
    padding-bottom: 11rem;
  }.lg\\:pb-48{
    padding-bottom: 12rem;
  }.lg\\:pb-5{
    padding-bottom: 1.25rem;
  }.lg\\:pb-52{
    padding-bottom: 13rem;
  }.lg\\:pb-56{
    padding-bottom: 14rem;
  }.lg\\:pb-6{
    padding-bottom: 1.5rem;
  }.lg\\:pb-60{
    padding-bottom: 15rem;
  }.lg\\:pb-64{
    padding-bottom: 16rem;
  }.lg\\:pb-7{
    padding-bottom: 1.75rem;
  }.lg\\:pb-72{
    padding-bottom: 18rem;
  }.lg\\:pb-8{
    padding-bottom: 2rem;
  }.lg\\:pb-80{
    padding-bottom: 20rem;
  }.lg\\:pb-9{
    padding-bottom: 2.25rem;
  }.lg\\:pb-96{
    padding-bottom: 24rem;
  }.lg\\:pb-px{
    padding-bottom: 1px;
  }.lg\\:pe-0{
    padding-right: 0px;
  }.lg\\:pe-0\\.5{
    padding-right: 0.125rem;
  }.lg\\:pe-1{
    padding-right: 0.25rem;
  }.lg\\:pe-1\\.5{
    padding-right: 0.375rem;
  }.lg\\:pe-10{
    padding-right: 2.5rem;
  }.lg\\:pe-11{
    padding-right: 2.75rem;
  }.lg\\:pe-12{
    padding-right: 3rem;
  }.lg\\:pe-14{
    padding-right: 3.5rem;
  }.lg\\:pe-15{
    padding-right: 3.75rem;
  }.lg\\:pe-16{
    padding-right: 4rem;
  }.lg\\:pe-2{
    padding-right: 0.5rem;
  }.lg\\:pe-2\\.5{
    padding-right: 0.625rem;
  }.lg\\:pe-20{
    padding-right: 5rem;
  }.lg\\:pe-24{
    padding-right: 6rem;
  }.lg\\:pe-25{
    padding-right: 6.25rem;
  }.lg\\:pe-28{
    padding-right: 7rem;
  }.lg\\:pe-3{
    padding-right: 0.75rem;
  }.lg\\:pe-3\\.5{
    padding-right: 0.875rem;
  }.lg\\:pe-30{
    padding-right: 7.5rem;
  }.lg\\:pe-32{
    padding-right: 8rem;
  }.lg\\:pe-36{
    padding-right: 9rem;
  }.lg\\:pe-4{
    padding-right: 1rem;
  }.lg\\:pe-40{
    padding-right: 10rem;
  }.lg\\:pe-44{
    padding-right: 11rem;
  }.lg\\:pe-48{
    padding-right: 12rem;
  }.lg\\:pe-5{
    padding-right: 1.25rem;
  }.lg\\:pe-52{
    padding-right: 13rem;
  }.lg\\:pe-56{
    padding-right: 14rem;
  }.lg\\:pe-6{
    padding-right: 1.5rem;
  }.lg\\:pe-60{
    padding-right: 15rem;
  }.lg\\:pe-64{
    padding-right: 16rem;
  }.lg\\:pe-7{
    padding-right: 1.75rem;
  }.lg\\:pe-72{
    padding-right: 18rem;
  }.lg\\:pe-8{
    padding-right: 2rem;
  }.lg\\:pe-80{
    padding-right: 20rem;
  }.lg\\:pe-9{
    padding-right: 2.25rem;
  }.lg\\:pe-96{
    padding-right: 24rem;
  }.lg\\:pe-px{
    padding-right: 1px;
  }.lg\\:pl-0{
    padding-left: 0px;
  }.lg\\:pl-0\\.5{
    padding-left: 0.125rem;
  }.lg\\:pl-1{
    padding-left: 0.25rem;
  }.lg\\:pl-1\\.5{
    padding-left: 0.375rem;
  }.lg\\:pl-10{
    padding-left: 2.5rem;
  }.lg\\:pl-11{
    padding-left: 2.75rem;
  }.lg\\:pl-12{
    padding-left: 3rem;
  }.lg\\:pl-14{
    padding-left: 3.5rem;
  }.lg\\:pl-15{
    padding-left: 3.75rem;
  }.lg\\:pl-16{
    padding-left: 4rem;
  }.lg\\:pl-2{
    padding-left: 0.5rem;
  }.lg\\:pl-2\\.5{
    padding-left: 0.625rem;
  }.lg\\:pl-20{
    padding-left: 5rem;
  }.lg\\:pl-24{
    padding-left: 6rem;
  }.lg\\:pl-25{
    padding-left: 6.25rem;
  }.lg\\:pl-28{
    padding-left: 7rem;
  }.lg\\:pl-3{
    padding-left: 0.75rem;
  }.lg\\:pl-3\\.5{
    padding-left: 0.875rem;
  }.lg\\:pl-30{
    padding-left: 7.5rem;
  }.lg\\:pl-32{
    padding-left: 8rem;
  }.lg\\:pl-36{
    padding-left: 9rem;
  }.lg\\:pl-4{
    padding-left: 1rem;
  }.lg\\:pl-40{
    padding-left: 10rem;
  }.lg\\:pl-44{
    padding-left: 11rem;
  }.lg\\:pl-48{
    padding-left: 12rem;
  }.lg\\:pl-5{
    padding-left: 1.25rem;
  }.lg\\:pl-52{
    padding-left: 13rem;
  }.lg\\:pl-56{
    padding-left: 14rem;
  }.lg\\:pl-6{
    padding-left: 1.5rem;
  }.lg\\:pl-60{
    padding-left: 15rem;
  }.lg\\:pl-64{
    padding-left: 16rem;
  }.lg\\:pl-7{
    padding-left: 1.75rem;
  }.lg\\:pl-72{
    padding-left: 18rem;
  }.lg\\:pl-8{
    padding-left: 2rem;
  }.lg\\:pl-80{
    padding-left: 20rem;
  }.lg\\:pl-9{
    padding-left: 2.25rem;
  }.lg\\:pl-96{
    padding-left: 24rem;
  }.lg\\:pl-px{
    padding-left: 1px;
  }.lg\\:pr-0{
    padding-right: 0px;
  }.lg\\:pr-0\\.5{
    padding-right: 0.125rem;
  }.lg\\:pr-1{
    padding-right: 0.25rem;
  }.lg\\:pr-1\\.5{
    padding-right: 0.375rem;
  }.lg\\:pr-10{
    padding-right: 2.5rem;
  }.lg\\:pr-11{
    padding-right: 2.75rem;
  }.lg\\:pr-12{
    padding-right: 3rem;
  }.lg\\:pr-14{
    padding-right: 3.5rem;
  }.lg\\:pr-15{
    padding-right: 3.75rem;
  }.lg\\:pr-16{
    padding-right: 4rem;
  }.lg\\:pr-2{
    padding-right: 0.5rem;
  }.lg\\:pr-2\\.5{
    padding-right: 0.625rem;
  }.lg\\:pr-20{
    padding-right: 5rem;
  }.lg\\:pr-24{
    padding-right: 6rem;
  }.lg\\:pr-25{
    padding-right: 6.25rem;
  }.lg\\:pr-28{
    padding-right: 7rem;
  }.lg\\:pr-3{
    padding-right: 0.75rem;
  }.lg\\:pr-3\\.5{
    padding-right: 0.875rem;
  }.lg\\:pr-30{
    padding-right: 7.5rem;
  }.lg\\:pr-32{
    padding-right: 8rem;
  }.lg\\:pr-36{
    padding-right: 9rem;
  }.lg\\:pr-4{
    padding-right: 1rem;
  }.lg\\:pr-40{
    padding-right: 10rem;
  }.lg\\:pr-44{
    padding-right: 11rem;
  }.lg\\:pr-48{
    padding-right: 12rem;
  }.lg\\:pr-5{
    padding-right: 1.25rem;
  }.lg\\:pr-52{
    padding-right: 13rem;
  }.lg\\:pr-56{
    padding-right: 14rem;
  }.lg\\:pr-6{
    padding-right: 1.5rem;
  }.lg\\:pr-60{
    padding-right: 15rem;
  }.lg\\:pr-64{
    padding-right: 16rem;
  }.lg\\:pr-7{
    padding-right: 1.75rem;
  }.lg\\:pr-72{
    padding-right: 18rem;
  }.lg\\:pr-8{
    padding-right: 2rem;
  }.lg\\:pr-80{
    padding-right: 20rem;
  }.lg\\:pr-9{
    padding-right: 2.25rem;
  }.lg\\:pr-96{
    padding-right: 24rem;
  }.lg\\:pr-px{
    padding-right: 1px;
  }.lg\\:ps-0{
    padding-left: 0px;
  }.lg\\:ps-0\\.5{
    padding-left: 0.125rem;
  }.lg\\:ps-1{
    padding-left: 0.25rem;
  }.lg\\:ps-1\\.5{
    padding-left: 0.375rem;
  }.lg\\:ps-10{
    padding-left: 2.5rem;
  }.lg\\:ps-11{
    padding-left: 2.75rem;
  }.lg\\:ps-12{
    padding-left: 3rem;
  }.lg\\:ps-14{
    padding-left: 3.5rem;
  }.lg\\:ps-15{
    padding-left: 3.75rem;
  }.lg\\:ps-16{
    padding-left: 4rem;
  }.lg\\:ps-2{
    padding-left: 0.5rem;
  }.lg\\:ps-2\\.5{
    padding-left: 0.625rem;
  }.lg\\:ps-20{
    padding-left: 5rem;
  }.lg\\:ps-24{
    padding-left: 6rem;
  }.lg\\:ps-25{
    padding-left: 6.25rem;
  }.lg\\:ps-28{
    padding-left: 7rem;
  }.lg\\:ps-3{
    padding-left: 0.75rem;
  }.lg\\:ps-3\\.5{
    padding-left: 0.875rem;
  }.lg\\:ps-30{
    padding-left: 7.5rem;
  }.lg\\:ps-32{
    padding-left: 8rem;
  }.lg\\:ps-36{
    padding-left: 9rem;
  }.lg\\:ps-4{
    padding-left: 1rem;
  }.lg\\:ps-40{
    padding-left: 10rem;
  }.lg\\:ps-44{
    padding-left: 11rem;
  }.lg\\:ps-48{
    padding-left: 12rem;
  }.lg\\:ps-5{
    padding-left: 1.25rem;
  }.lg\\:ps-52{
    padding-left: 13rem;
  }.lg\\:ps-56{
    padding-left: 14rem;
  }.lg\\:ps-6{
    padding-left: 1.5rem;
  }.lg\\:ps-60{
    padding-left: 15rem;
  }.lg\\:ps-64{
    padding-left: 16rem;
  }.lg\\:ps-7{
    padding-left: 1.75rem;
  }.lg\\:ps-72{
    padding-left: 18rem;
  }.lg\\:ps-8{
    padding-left: 2rem;
  }.lg\\:ps-80{
    padding-left: 20rem;
  }.lg\\:ps-9{
    padding-left: 2.25rem;
  }.lg\\:ps-96{
    padding-left: 24rem;
  }.lg\\:ps-px{
    padding-left: 1px;
  }.lg\\:pt-0{
    padding-top: 0px;
  }.lg\\:pt-0\\.5{
    padding-top: 0.125rem;
  }.lg\\:pt-1{
    padding-top: 0.25rem;
  }.lg\\:pt-1\\.5{
    padding-top: 0.375rem;
  }.lg\\:pt-10{
    padding-top: 2.5rem;
  }.lg\\:pt-11{
    padding-top: 2.75rem;
  }.lg\\:pt-12{
    padding-top: 3rem;
  }.lg\\:pt-14{
    padding-top: 3.5rem;
  }.lg\\:pt-15{
    padding-top: 3.75rem;
  }.lg\\:pt-16{
    padding-top: 4rem;
  }.lg\\:pt-2{
    padding-top: 0.5rem;
  }.lg\\:pt-2\\.5{
    padding-top: 0.625rem;
  }.lg\\:pt-20{
    padding-top: 5rem;
  }.lg\\:pt-24{
    padding-top: 6rem;
  }.lg\\:pt-25{
    padding-top: 6.25rem;
  }.lg\\:pt-28{
    padding-top: 7rem;
  }.lg\\:pt-3{
    padding-top: 0.75rem;
  }.lg\\:pt-3\\.5{
    padding-top: 0.875rem;
  }.lg\\:pt-30{
    padding-top: 7.5rem;
  }.lg\\:pt-32{
    padding-top: 8rem;
  }.lg\\:pt-36{
    padding-top: 9rem;
  }.lg\\:pt-4{
    padding-top: 1rem;
  }.lg\\:pt-40{
    padding-top: 10rem;
  }.lg\\:pt-44{
    padding-top: 11rem;
  }.lg\\:pt-48{
    padding-top: 12rem;
  }.lg\\:pt-5{
    padding-top: 1.25rem;
  }.lg\\:pt-52{
    padding-top: 13rem;
  }.lg\\:pt-56{
    padding-top: 14rem;
  }.lg\\:pt-6{
    padding-top: 1.5rem;
  }.lg\\:pt-60{
    padding-top: 15rem;
  }.lg\\:pt-64{
    padding-top: 16rem;
  }.lg\\:pt-7{
    padding-top: 1.75rem;
  }.lg\\:pt-72{
    padding-top: 18rem;
  }.lg\\:pt-8{
    padding-top: 2rem;
  }.lg\\:pt-80{
    padding-top: 20rem;
  }.lg\\:pt-9{
    padding-top: 2.25rem;
  }.lg\\:pt-96{
    padding-top: 24rem;
  }.lg\\:pt-px{
    padding-top: 1px;
  }
}
`, "",{"version":3,"sources":["webpack://./../node_modules/tailwindcss/base.css","webpack://./../node_modules/tailwindcss/components.css","webpack://./styles/components/_buttons.scss","webpack://./../node_modules/tailwindcss/utilities.css","webpack://./styles/components/glide/glide.core.scss","webpack://./styles/components/_glide.scss","webpack://./styles/components/_nav.scss","webpack://./styles/components/_elements.scss","webpack://./styles/components/_table.scss","webpack://./styles/components/_text.scss","webpack://./styles/editor.css","<no source>"],"names":[],"mappings":"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,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,sBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,sBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,sBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,sBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,gBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,gBAAmB;EAAnB;AAAmB,CAAnB;EAAA,gBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,gBAAmB;EAAnB;AAAmB,CAAnB;EAAA,eAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,gBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,gBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,gBAAmB;EAAnB;AAAmB,CAAnB;EAAA,gBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,gBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,gBAAmB;EAAnB;AAAmB,CAAnB;EAAA,gBAAmB;EAAnB;AAAmB,CAAnB;EAAA,gBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,gBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB;AAAmB,CAAnB;EAAA,iBAAmB;EAAnB;AAAmB,CAAnB;EAAA,gBAAmB;EAAnB;AAAmB,CAAnB;EAAA,eAAmB;EAAnB;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA,2BAAmB;EAAnB;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA,sBAAmB;EAAnB,8KAAmB;EAAnB;AAAmB,CAAnB;EAAA,sBAAmB;EAAnB,8KAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB,qLAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB,oLAAmB;EAAnB;AAAmB,CAAnB;EAAA,eAAmB;EAAnB,+KAAmB;EAAnB;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB,oBAAmB;EAAnB;AAAmB,CAAnB;EAAA,gBAAmB;EAAnB,kBAAmB;EAAnB;AAAmB,CAAnB;EAAA,mBAAmB;EAAnB,qBAAmB;EAAnB;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA,oBAAmB;OAAnB;AAAmB,CAAnB;EAAA,yBAAmB;OAAnB;AAAmB,CAAnB;EAAA,wBAAmB;OAAnB;AAAmB,CAAnB;EAAA,yBAAmB;OAAnB;AAAmB,CAAnB;EAAA,uBAAmB;OAAnB;AAAmB,CAAnB;EAAA,wBAAmB;OAAnB;AAAmB,CAAnB;EAAA,qBAAmB;OAAnB;AAAmB,CAAnB;EAAA,uBAAmB;OAAnB;AAAmB,CAAnB;EAAA,wBAAmB;OAAnB;AAAmB,CAAnB;EAAA,qBAAmB;OAAnB;AAAmB,CAAnB;EAAA,uBAAmB;OAAnB;AAAmB,CAAnB;EAAA,yBAAmB;OAAnB;AAAmB,CAAnB;EAAA,qBAAmB;OAAnB;AAAmB,CAAnB;EAAA,qBAAmB;OAAnB;AAAmB,CAAnB;EAAA,wBAAmB;OAAnB;AAAmB,CAAnB;EAAA,qBAAmB;OAAnB;AAAmB,CAAnB;EAAA,wBAAmB;OAAnB;AAAmB,CAAnB;EAAA,yBAAmB;OAAnB;AAAmB,CAAnB;EAAA,uBAAmB;OAAnB;AAAmB,CAAnB;EAAA,qBAAmB;OAAnB;AAAmB,CAAnB;EAAA,qBAAmB;OAAnB;AAAmB,CAAnB;EAAA,qBAAmB;OAAnB;AAAmB,CAAnB;EAAA,sBAAmB;OAAnB;AAAmB,CAAnB;EAAA,sBAAmB;OAAnB;AAAmB,CAAnB;EAAA,sBAAmB;OAAnB;AAAmB,CAAnB;EAAA,wBAAmB;OAAnB;AAAmB,CAAnB;EAAA,sBAAmB;OAAnB;AAAmB,CAAnB;EAAA,sBAAmB;OAAnB;AAAmB,CAAnB;EAAA,uBAAmB;OAAnB;AAAmB,CAAnB;EAAA,sBAAmB;OAAnB;AAAmB,CAAnB;EAAA,sBAAmB;OAAnB;AAAmB,CAAnB;EAAA,wBAAmB;OAAnB;AAAmB,CAAnB;EAAA,sBAAmB;OAAnB;AAAmB,CAAnB;EAAA,qBAAmB;OAAnB;AAAmB,CAAnB;EAAA,sBAAmB;OAAnB;AAAmB,CAAnB;EAAA,wBAAmB;OAAnB;AAAmB,CAAnB;EAAA,sBAAmB;OAAnB;AAAmB,CAAnB;EAAA,oBAAmB;OAAnB;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CA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CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB,wCAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB,uCAAmB;EAAnB;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB,uCAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB,wCAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB,qCAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB,uCAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB,wCAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB,wCAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB,uCAAmB;EAAnB;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB,wCAAmB;EAAnB;AAAmB,CAAnB;EAAA,kBAAmB;EAAnB,wCAAmB;EAAnB;AAAmB,CAAnB;EAAA,kB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AAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAAmB,CAAnB;EAAA;AAA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,mBCAA;IDAA,sCCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA,yCCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA,8BCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA,8BCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA,8BCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA,8BCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA,6BCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA;CAAA,ADAA,0BAAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA,4GCAA;IDAA,0GCAA;IDAA,2MCAA;IDAA;GCAA;CAAA,ADAA,0BAAA;IAAA;GCAA;CAAA,ADAA,2BAAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,uBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,uBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,uBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,uBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA,gBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA,gBCAA;IDAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA,mBCAA;IDAA,qBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA,mBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA,sBCAA;IDAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA,qBCAA;SDAA;GCAA,ADAA;IAAA,0BCAA;SDAA;GCAA,ADAA;IAAA,yBCAA;SDAA;GCAA,ADAA;IAAA,0BCAA;SDAA;GCAA,ADAA;IAAA,wBCAA;SDAA;GCAA,ADAA;IAAA,yBCAA;SDAA;GCAA,ADAA;IAAA,sBCAA;SDAA;GCAA,ADAA;IAAA,wBCAA;SDAA;GCAA,ADAA;IAAA,yBCAA;SDAA;GCAA,ADAA;IAAA,sBCAA;SDAA;GCAA,ADAA;IAAA,wBCAA;SDAA;GCAA,ADAA;IAAA,0BCAA;SDAA;GCAA,ADAA;IAAA,sBCAA;SDAA;GCAA,ADAA;IAAA,sBCAA;SDAA;GCAA,ADAA;IAAA,yBCAA;SDAA;GCAA,ADAA;IAAA,sBCAA;SDAA;GCAA,ADAA;IAAA,yBCAA;SDAA;GCAA,ADAA;IAAA,0BCAA;SDAA;GCAA,ADAA;IAAA,wBCAA;SDAA;GCAA,ADAA;IAAA,sBCAA;SDAA;GCAA,ADAA;IAAA,sBCAA;SDAA;GCAA,ADAA;IAAA,sBCAA;SDAA;GCAA,ADAA;IAAA,uBCAA;SDAA;GCAA,ADAA;IAAA,uBCAA;SDAA;GCAA,ADAA;IAAA,uBCAA;SDAA;GCAA,ADAA;IAAA,yBCAA;SDAA;GCAA,ADAA;IAAA,uBCAA;SDAA;GCAA,ADAA;IAAA,uBCAA;SDAA;GCAA,ADAA;IAAA,wBCAA;SDAA;GCAA,ADAA;IAAA,uBCAA;SDAA;GCAA,ADAA;IAAA,uBCAA;SDAA;GCAA,ADAA;IAAA,yBCAA;SDAA;GCAA,ADAA;IAAA,uBCAA;SDAA;GCAA,ADAA;IAAA,sBCAA;SDAA;GCAA,ADAA;IAAA,uBCAA;SDAA;GCAA,ADAA;IAAA,yBCAA;SDAA;GCAA,ADAA;IAAA,uBCAA;SDAA;GCAA,ADAA;IAAA,qBCAA;SDAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,uBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,uBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,uBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,uBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,sBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,oBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,kBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,qBCAA;IDAA;GCAA,ADAA;IAAA,mBCAA;IDAA;GCAA,ADAA;IAAA,iBCAA;IDAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA,ADAA;IAAA;GCAA;CAAA","sourcesContent":["@tailwind base;\n","@tailwind components;\n","@layer components {\n    .btn {\n        @apply inline-block justify-center no-underline font-secondary uppercase leading-tight rounded-full pt-2 pb-2.5 px-5 transition-all cursor-pointer;\n    }\n    .btn-white {\n        @apply bg-white hover:text-white hover:bg-ecc-blue;\n    }\n\n    .btn-blue {\n        @apply text-white bg-ecc-blue hover:bg-indigo-200 hover:text-indigo-900;\n    }\n\n    .btn-sm {\n        @apply text-sm py-1 pt-1 pb-1.5 px-2;\n    }\n}\n\n/* Button block\n--------------------------------------------- */\n\n.wp-block-button__link {\n    @apply btn btn-blue;\n    &.has-ecc-blue-background-color {\n        @apply btn-blue;\n    }\n}","@tailwind utilities;\n",".glide {\r\n  position: relative;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n\r\n  * {\r\n    box-sizing: inherit;\r\n  }\r\n\r\n  &__track {\r\n    overflow: hidden;\r\n  }\r\n\r\n  &__slides {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    list-style: none;\r\n    backface-visibility: hidden;\r\n    transform-style: preserve-3d;\r\n    touch-action: pan-Y;\r\n    overflow: hidden;\r\n    margin: 0;\r\n    padding: 0;\r\n    white-space: nowrap;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    will-change: transform;\r\n\r\n    &--dragging {\r\n      user-select: none;\r\n    }\r\n  }\r\n\r\n  &__slide {\r\n    width: 100%;\r\n    flex-shrink: 0;\r\n    white-space: normal;\r\n    user-select: none;\r\n    -webkit-touch-callout: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n\r\n    a {\r\n      user-select: none;\r\n      -webkit-user-drag: none;\r\n      -moz-user-select: none;\r\n      -ms-user-select: none;\r\n    }\r\n  }\r\n\r\n  &__arrows {\r\n    -webkit-touch-callout: none;\r\n    user-select: none;\r\n  }\r\n\r\n  &__bullets {\r\n    -webkit-touch-callout: none;\r\n    user-select: none;\r\n  }\r\n\r\n  &--rtl {\r\n    direction: rtl;\r\n  }\r\n}\r\n","@import \"glide/glide.core.scss\";\n\n.glide {\n    &__arrow {\n        @apply absolute block top-1/2 btn shadow-md bg-white hover:bg-slate-200 transition-all;\n        background-image: url('../images/svg/icon/caret.svg');\n        background-repeat: no-repeat;\n        background-position: center;\n        z-index: 2;\n        padding: 1rem;\n        opacity: 1;\n        cursor: pointer;\n        line-height: 1;\n\n        &--left {\n            left: -1rem;\n            transform: rotate(90deg) translateX(-2rem);\n        }\n\n        &--right {\n            right: -1rem;\n            transform: rotate(-90deg) translateX(2rem);\n        }\n\n        &--disabled {\n            opacity: 0.33;\n        }\n    }\n\n    &__bullets {\n        @apply bottom-2 absolute left-1/2 -translate-x-1/2 z-10;\n    }\n\n    &__bullet {\n        @apply shadow-lg transition-all h-3 w-3 bg-white p-0 cursor-pointer rounded-full transition-all hover:bg-slate-200 focus:bg-slate-200;\n\n        &--active {\n            @apply bg-slate-300;\n        }\n    }\n}\n\n.mini-calendar-block {\n    .carousel__slide {\n        @apply pr-5;\n    }\n}","/*\nNavigation Component Styles\n*/\n\n.quick-navigation {\n    @apply flex items-center;\n    & > p {\n        @apply uppercase font-bold pr-4;\n    }\n\n    * {\n        @apply transition-opacity font-secondary text-sm;\n    }\n\n    ul {\n        @apply flex flex-row;\n\n        >li {\n            @apply relative;\n\n            a {\n                @apply text-slate-900 uppercase block py-2 pr-2 pl-5 h-full whitespace-nowrap;\n            }\n\n            &:hover {\n\n                .caret-icon {\n                    @apply mt-2;\n                }\n\n                >ul {\n                    @apply opacity-100 left-auto z-50;\n                }\n            }\n\n            >ul {\n                @apply absolute grid grid-flow-row bg-ecc-yellow py-2 opacity-0 left-[-999em];\n\n                >li {\n                    @apply relative whitespace-nowrap;\n\n\n                    >a {\n                        @apply px-4 py-2 bg-transparent uppercase h-full flex justify-between items-center min-w-[15rem];\n                    }\n\n                    &:hover {\n                        @apply bg-white/50;\n                    }\n                }\n            }\n        }\n\n        >li:not(.menu-especial) {\n            &.menu-item-has-children {\n                &::before {\n                    @apply absolute top-1/2 -right-5 -translate-y-1/2 px-3 -rotate-90 transition-all;\n                    content: url('../images/svg/icon/caret.svg');\n                }\n                &:hover::before {\n                    @apply rotate-0 transition-all;\n                }\n            }\n        }\n\n        li.menu-especial {\n            @apply static;\n            \n            >a {\n                @apply flex;\n                img {\n                    @apply -rotate-90 transition-all ml-3;\n                }\n                &:hover img {\n                        @apply rotate-0 transition-all;\n                    }\n            }\n    \n            >ul {\n                @apply opacity-0;\n            }\n    \n            &:hover>ul {\n                @apply left-0 top-auto grid grid-flow-col auto-cols-fr container py-0 px-0 opacity-100 py-5;\n    \n                >li {\n                    @apply p-4 block flex-col items-center justify-start text-center bg-transparent;\n    \n                    &:not(:last-child) {\n                        @apply border-r border-ecc-blue/20;\n                    }\n    \n                    a {\n                        @apply btn h-auto whitespace-normal mt-5 bg-white rounded-full;\n                    }\n    \n                    img {\n                        @apply w-full h-20 aspect-square object-contain object-center;\n                    }\n    \n                    p {\n                        @apply pt-4 text-sm leading-tight whitespace-normal;\n                    }\n                }\n            }\n        }\n    }\n}\n\n/*\n\nPRIMARY MENU\n\n*/\n\n.primary-navigation {\n    * {\n        @apply transition-opacity font-secondary text-base;\n    }\n    ul {\n        @apply flex flex-row py-10;\n        > li {\n            @apply relative;\n            &.menu-item-has-children {\n                @apply pr-6;\n                &::before {\n                    @apply absolute top-1/2 right-0 -translate-y-1/2 px-4 -rotate-90 transition-all;\n                    content: url('../images/svg/icon/caret.svg');\n                }\n                &:hover::before {\n                    @apply rotate-0 transition-all;\n                }\n            }\n            a {\n                @apply uppercase block py-5 px-4 h-full whitespace-nowrap;\n            }\n            &:hover {\n                @apply bg-gray-100;\n                .caret-icon {\n                    @apply mt-2;\n                }\n                > ul {\n                    @apply opacity-100 left-auto z-50;\n                }\n            }\n            > ul {\n                @apply absolute grid grid-flow-row bg-gray-100 py-2 opacity-0 left-[-999em];\n                > li {\n                    @apply relative whitespace-nowrap;\n                    > a {\n                        @apply px-4 py-2 bg-transparent uppercase h-full flex justify-between items-center min-w-[15rem];\n                    }\n                    &:hover {\n                        @apply bg-white;\n                        .caret-icon {\n                            @apply opacity-100;\n                        }\n                        > ul {\n                            @apply opacity-100 left-40 z-50;\n                        }\n                    }\n                    > ul {\n                        @apply absolute grid grid-flow-row bg-gray-100 py-2 opacity-0 left-48 -mt-5;\n                        > li {\n                            @apply min-w-[13rem] relative;\n                            > a {\n                                @apply px-4 py-2 bg-transparent uppercase h-full flex justify-between items-center;\n                                .caret-icon {\n                                    @apply h-2 w-2 -rotate-90 -mt-0 opacity-0;\n                                }\n                            }\n                            &:hover {\n                                @apply bg-white;\n                                .caret-icon {\n                                    @apply opacity-100 z-50;\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n  \n/*\n\nFOOTER MENU\n\n*/\n  \n.footer-navigation {\n    @apply py-10;\n    > div > ul {\n      @apply flex flex-col lg:flex-row justify-between gap-x-10;\n      > li {\n        .caret-icon {\n          @apply hidden;\n        }\n        > ul.sub-menu {\n          @apply grid grid-flow-row py-2;\n          > li {\n            @apply min-w-[10rem] py-1;\n            ul {\n                @apply ml-4;\n                > li {\n                    @apply min-w-[10rem] py-1;\n                }\n            }\n          }\n        }\n        & > a {\n          @apply font-bold;\n        }\n        a {\n          @apply text-sm uppercase border-b border-transparent hover:border-white transition-all font-secondary;\n        }\n      }\n    }\n    .menu-item-112 {\n      display: none;\n    }\n  }\n  \n  /* HAMBURGER MENU */\n  \n  .hamburger {\n    cursor: pointer;\n    width: 48px;\n    height: 48px;\n    transition: all 0.25s;\n  }\n  \n  .hamburger__top-bun,\n  .hamburger__center-bun,\n  .hamburger__bottom-bun {\n    content: '';\n    position: absolute;\n    width: 24px;\n    height: 2px;\n    background: #000;\n    transform: rotate(0);\n    transition: all 0.5s;\n  }\n  \n  .hamburger:hover [class*='-bun'] {\n    background: #333;\n  }\n  \n  .hamburger__top-bun {\n    transform: translateY(-5px);\n  }\n  \n  .hamburger__center-bun {\n    transform: translateY(2px);\n  }\n  \n  .hamburger__bottom-bun {\n    transform: translateY(9px);\n  }\n  \n  .open {\n    transform: rotate(90deg);\n    transform: translateY(-1px);\n  }\n  \n  .open .hamburger__top-bun {\n    transform: rotate(45deg) translateY(0px);\n  }\n  \n  .open .hamburger__bottom-bun {\n    transform: rotate(-45deg) translateY(0px);\n  }\n  \n  .open .hamburger__center-bun {\n    opacity: 0;\n  }\n  ",".tag {\n    @apply inline-block bg-ecc-yellow rounded-full text-xs px-3 pt-1 pb-0.5 uppercase;\n}",".wp-block-table {\n    &.is-style-laranja {\n        table {\n            thead th {\n                @apply bg-orange-500 text-white border-black;\n            }\n            tbody tr:nth-child(even) {\n                @apply bg-orange-100;\n            }\n            tbody tr:nth-child(odd) {\n                @apply bg-white;\n            }\n        }\n    }\n\n        &.is-style-verde {\n            table {\n                thead th {\n                    @apply bg-emerald-600 text-white border-black;\n                }\n    \n                tbody tr:nth-child(even) {\n                    @apply bg-emerald-100;\n                }\n    \n                tbody tr:nth-child(odd) {\n                    @apply bg-white;\n                }\n            }\n        }\n\n        &.is-style-azul {\n            table {\n                thead th {\n                    @apply bg-sky-600 text-white border-black;\n                }\n    \n                tbody tr:nth-child(even) {\n                    @apply bg-sky-100;\n                }\n    \n                tbody tr:nth-child(odd) {\n                    @apply bg-white;\n                }\n            }\n        }\n}","html {\n    @apply font-primary font-normal;\n}\n\nh1,\n.heading-1 {\n    @apply font-medium font-primary text-6xl leading-none;\n}\n\nh2,\n.heading-2 {\n    @apply font-medium font-primary text-3xl leading-none;\n}\n\nh3,\n.heading-3 {\n    @apply font-medium font-primary text-2xl leading-none;\n}\n\nh4,\n.heading-4 {\n    @apply font-medium font-secondary text-base leading-none uppercase;\n}\n\n.alignright {\n    text-align: right;\n}.aligncenter {\n    text-align: center;\n}.alignleft {\n    text-align: left;\n}\n\n.main {\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    :is(p, h1, h2, h3, h4, h5):has(+p) {\n        @apply leading-relaxed;\n    }\n    :is(p):has(+p),\n    :is(h2):has(+h2)\n    {\n        @apply leading-relaxed;\n    }\n    p:has(+p) {\n        margin-bottom: 1rem;\n    }\n}","@import 'tailwindcss/base';\n@import 'tailwindcss/components';\n@import 'tailwindcss/utilities';\n\n@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&family=Open+Sans:wght@400;500;600&display=swap');\n\n@import 'components/_glide.scss';\n@import 'components/_buttons.scss';\n@import 'components/_nav.scss';\n@import 'components/_elements.scss';\n@import 'components/_table.scss';\n\n@import 'components/_text.scss';\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./styles/editor.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!./styles/editor.css");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      "../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!./styles/editor.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!./styles/editor.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_editor_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./images/svg/icon/caret.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/svg/icon/caret.svg";

/***/ }),

/***/ "@wordpress/blocks":
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "../node_modules/@glidejs/glide/dist/glide.esm.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Glide)
/* harmony export */ });
/*!
 * Glide.js v3.6.0
 * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

var defaults = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: 'slider',

  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,

  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,

  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,

  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,

  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: false,

  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: true,

  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: true,

  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: false,

  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,

  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,

  /**
   * A number of slides moved on single swipe.
   *
   * Available types:
   * `` - Moves slider by one slide per swipe
   * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)
   *
   * @type {String}
   */
  perSwipe: '',

  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,

  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,

  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,

  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: true,

  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,

  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

  /**
   * Wait for the animation to finish until the next user input can be processed
   *
   * @type {boolean}
   */
  waitForTransition: true,

  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,

  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: 'ltr',

  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,

  /**
   * Defines how many clones of current viewport will be generated.
   *
   * @type {Number}
   */
  cloningRatio: 1,

  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},

  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    swipeable: 'glide--swipeable',
    dragging: 'glide--dragging',
    direction: {
      ltr: 'glide--ltr',
      rtl: 'glide--rtl'
    },
    type: {
      slider: 'glide--slider',
      carousel: 'glide--carousel'
    },
    slide: {
      clone: 'glide__slide--clone',
      active: 'glide__slide--active'
    },
    arrow: {
      disabled: 'glide__arrow--disabled'
    },
    nav: {
      active: 'glide__bullet--active'
    }
  }
};

/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */
function warn(msg) {
  console.error("[Glide warn]: ".concat(msg));
}

/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toInt(value) {
  return parseInt(value);
}
/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */

function toFloat(value) {
  return parseFloat(value);
}
/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */

function isString(value) {
  return typeof value === 'string';
}
/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */

function isObject(value) {
  var type = _typeof(value);

  return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
}
/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */

function isFunction(value) {
  return typeof value === 'function';
}
/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */

function isUndefined(value) {
  return typeof value === 'undefined';
}
/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */

function isArray(value) {
  return value.constructor === Array;
}

/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */

function mount(glide, extensions, events) {
  var components = {};

  for (var name in extensions) {
    if (isFunction(extensions[name])) {
      components[name] = extensions[name](glide, components, events);
    } else {
      warn('Extension must be a function');
    }
  }

  for (var _name in components) {
    if (isFunction(components[_name].mount)) {
      components[_name].mount();
    }
  }

  return components;
}

/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */
function define(obj, prop, definition) {
  Object.defineProperty(obj, prop, definition);
}
/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
 */

function sortKeys(obj) {
  return Object.keys(obj).sort().reduce(function (r, k) {
    r[k] = obj[k];
    return r[k], r;
  }, {});
}
/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */

function mergeOptions(defaults, settings) {
  var options = Object.assign({}, defaults, settings); // `Object.assign` do not deeply merge objects, so we
  // have to do it manually for every nested object
  // in options. Although it does not look smart,
  // it's smaller and faster than some fancy
  // merging deep-merge algorithm script.

  if (settings.hasOwnProperty('classes')) {
    options.classes = Object.assign({}, defaults.classes, settings.classes);

    if (settings.classes.hasOwnProperty('direction')) {
      options.classes.direction = Object.assign({}, defaults.classes.direction, settings.classes.direction);
    }

    if (settings.classes.hasOwnProperty('type')) {
      options.classes.type = Object.assign({}, defaults.classes.type, settings.classes.type);
    }

    if (settings.classes.hasOwnProperty('slide')) {
      options.classes.slide = Object.assign({}, defaults.classes.slide, settings.classes.slide);
    }

    if (settings.classes.hasOwnProperty('arrow')) {
      options.classes.arrow = Object.assign({}, defaults.classes.arrow, settings.classes.arrow);
    }

    if (settings.classes.hasOwnProperty('nav')) {
      options.classes.nav = Object.assign({}, defaults.classes.nav, settings.classes.nav);
    }
  }

  if (settings.hasOwnProperty('breakpoints')) {
    options.breakpoints = Object.assign({}, defaults.breakpoints, settings.breakpoints);
  }

  return options;
}

var EventsBus = /*#__PURE__*/function () {
  /**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */
  function EventsBus() {
    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, EventsBus);

    this.events = events;
    this.hop = events.hasOwnProperty;
  }
  /**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */


  _createClass(EventsBus, [{
    key: "on",
    value: function on(event, handler) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.on(event[i], handler);
        }

        return;
      } // Create the event's object if not yet created


      if (!this.hop.call(this.events, event)) {
        this.events[event] = [];
      } // Add the handler to queue


      var index = this.events[event].push(handler) - 1; // Provide handle back for removal of event

      return {
        remove: function remove() {
          delete this.events[event][index];
        }
      };
    }
    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */

  }, {
    key: "emit",
    value: function emit(event, context) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.emit(event[i], context);
        }

        return;
      } // If the event doesn't exist, or there's no handlers in queue, just leave


      if (!this.hop.call(this.events, event)) {
        return;
      } // Cycle through events queue, fire!


      this.events[event].forEach(function (item) {
        item(context || {});
      });
    }
  }]);

  return EventsBus;
}();

var Glide$1 = /*#__PURE__*/function () {
  /**
   * Construct glide.
   *
   * @param  {String} selector
   * @param  {Object} options
   */
  function Glide(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Glide);

    this._c = {};
    this._t = [];
    this._e = new EventsBus();
    this.disabled = false;
    this.selector = selector;
    this.settings = mergeOptions(defaults, options);
    this.index = this.settings.startAt;
  }
  /**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */


  _createClass(Glide, [{
    key: "mount",
    value: function mount$1() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._e.emit('mount.before');

      if (isObject(extensions)) {
        this._c = mount(this, extensions, this._e);
      } else {
        warn('You need to provide a object on `mount()`');
      }

      this._e.emit('mount.after');

      return this;
    }
    /**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */

  }, {
    key: "mutate",
    value: function mutate() {
      var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (isArray(transformers)) {
        this._t = transformers;
      } else {
        warn('You need to provide a array on `mutate()`');
      }

      return this;
    }
    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */

  }, {
    key: "update",
    value: function update() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.settings = mergeOptions(this.settings, settings);

      if (settings.hasOwnProperty('startAt')) {
        this.index = settings.startAt;
      }

      this._e.emit('update');

      return this;
    }
    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     * `|>` - Move one viewport forward
     * `|<` - Move one viewport backward
     *
     * @param {String} pattern
     * @return {Glide}
     */

  }, {
    key: "go",
    value: function go(pattern) {
      this._c.Run.make(pattern);

      return this;
    }
    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */

  }, {
    key: "move",
    value: function move(distance) {
      this._c.Transition.disable();

      this._c.Move.make(distance);

      return this;
    }
    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._e.emit('destroy');

      return this;
    }
    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */

  }, {
    key: "play",
    value: function play() {
      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (interval) {
        this.settings.autoplay = interval;
      }

      this._e.emit('play');

      return this;
    }
    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */

  }, {
    key: "pause",
    value: function pause() {
      this._e.emit('pause');

      return this;
    }
    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */

  }, {
    key: "disable",
    value: function disable() {
      this.disabled = true;
      return this;
    }
    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */

  }, {
    key: "enable",
    value: function enable() {
      this.disabled = false;
      return this;
    }
    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */

  }, {
    key: "on",
    value: function on(event, handler) {
      this._e.on(event, handler);

      return this;
    }
    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */

  }, {
    key: "isType",
    value: function isType(name) {
      return this.settings.type === name;
    }
    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */

  }, {
    key: "settings",
    get: function get() {
      return this._o;
    }
    /**
     * Sets value of the core options.
     *
     * @param  {Object} o
     * @return {Void}
     */
    ,
    set: function set(o) {
      if (isObject(o)) {
        this._o = o;
      } else {
        warn('Options must be an `object` instance.');
      }
    }
    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */

  }, {
    key: "index",
    get: function get() {
      return this._i;
    }
    /**
     * Sets current index a slider.
     *
     * @return {Object}
     */
    ,
    set: function set(i) {
      this._i = toInt(i);
    }
    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */

  }, {
    key: "type",
    get: function get() {
      return this.settings.type;
    }
    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */

  }, {
    key: "disabled",
    get: function get() {
      return this._d;
    }
    /**
     * Sets value of the idle status.
     *
     * @return {Boolean}
     */
    ,
    set: function set(status) {
      this._d = !!status;
    }
  }]);

  return Glide;
}();

function Run (Glide, Components, Events) {
  var Run = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function mount() {
      this._o = false;
    },

    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function make(move) {
      var _this = this;

      if (!Glide.disabled) {
        !Glide.settings.waitForTransition || Glide.disable();
        this.move = move;
        Events.emit('run.before', this.move);
        this.calculate();
        Events.emit('run', this.move);
        Components.Transition.after(function () {
          if (_this.isStart()) {
            Events.emit('run.start', _this.move);
          }

          if (_this.isEnd()) {
            Events.emit('run.end', _this.move);
          }

          if (_this.isOffset()) {
            _this._o = false;
            Events.emit('run.offset', _this.move);
          }

          Events.emit('run.after', _this.move);
          Glide.enable();
        });
      }
    },

    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function calculate() {
      var move = this.move,
          length = this.length;
      var steps = move.steps,
          direction = move.direction; // By default assume that size of view is equal to one slide

      var viewSize = 1; // While direction is `=` we want jump to
      // a specified index described in steps.

      if (direction === '=') {
        // Check if bound is true, 
        // as we want to avoid whitespaces.
        if (Glide.settings.bound && toInt(steps) > length) {
          Glide.index = length;
          return;
        }

        Glide.index = steps;
        return;
      } // When pattern is equal to `>>` we want
      // fast forward to the last slide.


      if (direction === '>' && steps === '>') {
        Glide.index = length;
        return;
      } // When pattern is equal to `<<` we want
      // fast forward to the first slide.


      if (direction === '<' && steps === '<') {
        Glide.index = 0;
        return;
      } // pagination movement


      if (direction === '|') {
        viewSize = Glide.settings.perView || 1;
      } // we are moving forward


      if (direction === '>' || direction === '|' && steps === '>') {
        var index = calculateForwardIndex(viewSize);

        if (index > length) {
          this._o = true;
        }

        Glide.index = normalizeForwardIndex(index, viewSize);
        return;
      } // we are moving backward


      if (direction === '<' || direction === '|' && steps === '<') {
        var _index = calculateBackwardIndex(viewSize);

        if (_index < 0) {
          this._o = true;
        }

        Glide.index = normalizeBackwardIndex(_index, viewSize);
        return;
      }

      warn("Invalid direction pattern [".concat(direction).concat(steps, "] has been used"));
    },

    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function isStart() {
      return Glide.index <= 0;
    },

    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function isEnd() {
      return Glide.index >= this.length;
    },

    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function isOffset() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      if (!direction) {
        return this._o;
      }

      if (!this._o) {
        return false;
      } // did we view to the right?


      if (direction === '|>') {
        return this.move.direction === '|' && this.move.steps === '>';
      } // did we view to the left?


      if (direction === '|<') {
        return this.move.direction === '|' && this.move.steps === '<';
      }

      return this.move.direction === direction;
    },

    /**
     * Checks if bound mode is active
     *
     * @return {Boolean}
     */
    isBound: function isBound() {
      return Glide.isType('slider') && Glide.settings.focusAt !== 'center' && Glide.settings.bound;
    }
  };
  /**
   * Returns index value to move forward/to the right
   *
   * @param viewSize
   * @returns {Number}
   */

  function calculateForwardIndex(viewSize) {
    var index = Glide.index;

    if (Glide.isType('carousel')) {
      return index + viewSize;
    }

    return index + (viewSize - index % viewSize);
  }
  /**
   * Normalizes the given forward index based on glide settings, preventing it to exceed certain boundaries
   *
   * @param index
   * @param length
   * @param viewSize
   * @returns {Number}
   */


  function normalizeForwardIndex(index, viewSize) {
    var length = Run.length;

    if (index <= length) {
      return index;
    }

    if (Glide.isType('carousel')) {
      return index - (length + 1);
    }

    if (Glide.settings.rewind) {
      // bound does funny things with the length, therefor we have to be certain
      // that we are on the last possible index value given by bound
      if (Run.isBound() && !Run.isEnd()) {
        return length;
      }

      return 0;
    }

    if (Run.isBound()) {
      return length;
    }

    return Math.floor(length / viewSize) * viewSize;
  }
  /**
   * Calculates index value to move backward/to the left
   *
   * @param viewSize
   * @returns {Number}
   */


  function calculateBackwardIndex(viewSize) {
    var index = Glide.index;

    if (Glide.isType('carousel')) {
      return index - viewSize;
    } // ensure our back navigation results in the same index as a forward navigation
    // to experience a homogeneous paging


    var view = Math.ceil(index / viewSize);
    return (view - 1) * viewSize;
  }
  /**
   * Normalizes the given backward index based on glide settings, preventing it to exceed certain boundaries
   *
   * @param index
   * @param length
   * @param viewSize
   * @returns {*}
   */


  function normalizeBackwardIndex(index, viewSize) {
    var length = Run.length;

    if (index >= 0) {
      return index;
    }

    if (Glide.isType('carousel')) {
      return index + (length + 1);
    }

    if (Glide.settings.rewind) {
      // bound does funny things with the length, therefor we have to be certain
      // that we are on first possible index value before we to rewind to the length given by bound
      if (Run.isBound() && Run.isStart()) {
        return length;
      }

      return Math.floor(length / viewSize) * viewSize;
    }

    return 0;
  }

  define(Run, 'move', {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function get() {
      return this._m;
    },

    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function set(value) {
      var step = value.substr(1);
      this._m = {
        direction: value.substr(0, 1),
        steps: step ? toInt(step) ? toInt(step) : step : 0
      };
    }
  });
  define(Run, 'length', {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;
      var length = Components.Html.slides.length; // If the `bound` option is active, a maximum running distance should be
      // reduced by `perView` and `focusAt` settings. Running distance
      // should end before creating an empty space after instance.

      if (this.isBound()) {
        return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
      }

      return length - 1;
    }
  });
  define(Run, 'offset', {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function get() {
      return this._o;
    }
  });
  return Run;
}

/**
 * Returns a current time.
 *
 * @return {Number}
 */
function now() {
  return new Date().getTime();
}

/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */

function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function later() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function throttled() {
    var at = now();
    if (!previous && options.leading === false) previous = at;
    var remaining = wait - (at - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = at;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

var MARGIN_TYPE = {
  ltr: ['marginLeft', 'marginRight'],
  rtl: ['marginRight', 'marginLeft']
};
function Gaps (Glide, Components, Events) {
  var Gaps = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function apply(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;
        var direction = Components.Direction.value;

        if (i !== 0) {
          style[MARGIN_TYPE[direction][0]] = "".concat(this.value / 2, "px");
        } else {
          style[MARGIN_TYPE[direction][0]] = '';
        }

        if (i !== slides.length - 1) {
          style[MARGIN_TYPE[direction][1]] = "".concat(this.value / 2, "px");
        } else {
          style[MARGIN_TYPE[direction][1]] = '';
        }
      }
    },

    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function remove(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;
        style.marginLeft = '';
        style.marginRight = '';
      }
    }
  };
  define(Gaps, 'value', {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function get() {
      return toInt(Glide.settings.gap);
    }
  });
  define(Gaps, 'grow', {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function get() {
      return Gaps.value * Components.Sizes.length;
    }
  });
  define(Gaps, 'reductor', {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function get() {
      var perView = Glide.settings.perView;
      return Gaps.value * (perView - 1) / perView;
    }
  });
  /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */

  Events.on(['build.after', 'update'], throttle(function () {
    Gaps.apply(Components.Html.wrapper.children);
  }, 30));
  /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */

  Events.on('destroy', function () {
    Gaps.remove(Components.Html.wrapper.children);
  });
  return Gaps;
}

/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */
function siblings(node) {
  if (node && node.parentNode) {
    var n = node.parentNode.firstChild;
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== node) {
        matched.push(n);
      }
    }

    return matched;
  }

  return [];
}
/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
 */

function exist(node) {
  if (node && node instanceof window.HTMLElement) {
    return true;
  }

  return false;
}
/**
 * Coerces a NodeList to an Array.
 *
 * @param  {NodeList} nodeList
 * @return {Array}
 */

function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
}

var TRACK_SELECTOR = '[data-glide-el="track"]';
function Html (Glide, Components, Events) {
  var Html = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function mount() {
      this.root = Glide.selector;
      this.track = this.root.querySelector(TRACK_SELECTOR);
      this.collectSlides();
    },

    /**
     * Collect slides
     */
    collectSlides: function collectSlides() {
      this.slides = toArray(this.wrapper.children).filter(function (slide) {
        return !slide.classList.contains(Glide.settings.classes.slide.clone);
      });
    }
  };
  define(Html, 'root', {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._r;
    },

    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function set(r) {
      if (isString(r)) {
        r = document.querySelector(r);
      }

      if (exist(r)) {
        Html._r = r;
      } else {
        warn('Root element must be a existing Html node');
      }
    }
  });
  define(Html, 'track', {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._t;
    },

    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function set(t) {
      if (exist(t)) {
        Html._t = t;
      } else {
        warn("Could not find track element. Please use ".concat(TRACK_SELECTOR, " attribute."));
      }
    }
  });
  define(Html, 'wrapper', {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function get() {
      return Html.track.children[0];
    }
  });
  /**
   * Add/remove/reorder dynamic slides
   */

  Events.on('update', function () {
    Html.collectSlides();
  });
  return Html;
}

function Peek (Glide, Components, Events) {
  var Peek = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.peek;
    }
  };
  define(Peek, 'value', {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function get() {
      return Peek._v;
    },

    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function set(value) {
      if (isObject(value)) {
        value.before = toInt(value.before);
        value.after = toInt(value.after);
      } else {
        value = toInt(value);
      }

      Peek._v = value;
    }
  });
  define(Peek, 'reductor', {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function get() {
      var value = Peek.value;
      var perView = Glide.settings.perView;

      if (isObject(value)) {
        return value.before / perView + value.after / perView;
      }

      return value * 2 / perView;
    }
  });
  /**
   * Recalculate peeking sizes on:
   * - when resizing window to update to proper percents
   */

  Events.on(['resize', 'update'], function () {
    Peek.mount();
  });
  return Peek;
}

function Move (Glide, Components, Events) {
  var Move = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      this._o = 0;
    },

    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function make() {
      var _this = this;

      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.offset = offset;
      Events.emit('move', {
        movement: this.value
      });
      Components.Transition.after(function () {
        Events.emit('move.after', {
          movement: _this.value
        });
      });
    }
  };
  define(Move, 'offset', {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function get() {
      return Move._o;
    },

    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function set(value) {
      Move._o = !isUndefined(value) ? toInt(value) : 0;
    }
  });
  define(Move, 'translate', {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Sizes.slideWidth * Glide.index;
    }
  });
  define(Move, 'value', {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function get() {
      var offset = this.offset;
      var translate = this.translate;

      if (Components.Direction.is('rtl')) {
        return translate + offset;
      }

      return translate - offset;
    }
  });
  /**
   * Make movement to proper slide on:
   * - before build, so glide will start at `startAt` index
   * - on each standard run to move to newly calculated index
   */

  Events.on(['build.before', 'run'], function () {
    Move.make();
  });
  return Move;
}

function Sizes (Glide, Components, Events) {
  var Sizes = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function setupSlides() {
      var width = "".concat(this.slideWidth, "px");
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = width;
      }
    },

    /**
     * Setups dimensions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function setupWrapper() {
      Components.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
    },

    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function remove() {
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = '';
      }

      Components.Html.wrapper.style.width = '';
    }
  };
  define(Sizes, 'length', {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.slides.length;
    }
  });
  define(Sizes, 'width', {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.track.offsetWidth;
    }
  });
  define(Sizes, 'wrapperSize', {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
    }
  });
  define(Sizes, 'slideWidth', {
    /**
     * Gets width value of a single slide.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
    }
  });
  /**
   * Apply calculated glide's dimensions:
   * - before building, so other dimensions (e.g. translate) will be calculated propertly
   * - when resizing window to recalculate sildes dimensions
   * - on updating via API, to calculate dimensions based on new options
   */

  Events.on(['build.before', 'resize', 'update'], function () {
    Sizes.setupSlides();
    Sizes.setupWrapper();
  });
  /**
   * Remove calculated glide's dimensions:
   * - on destoting to bring markup to its inital state
   */

  Events.on('destroy', function () {
    Sizes.remove();
  });
  return Sizes;
}

function Build (Glide, Components, Events) {
  var Build = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function mount() {
      Events.emit('build.before');
      this.typeClass();
      this.activeClass();
      Events.emit('build.after');
    },

    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function typeClass() {
      Components.Html.root.classList.add(Glide.settings.classes.type[Glide.settings.type]);
    },

    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function activeClass() {
      var classes = Glide.settings.classes;
      var slide = Components.Html.slides[Glide.index];

      if (slide) {
        slide.classList.add(classes.slide.active);
        siblings(slide).forEach(function (sibling) {
          sibling.classList.remove(classes.slide.active);
        });
      }
    },

    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function removeClasses() {
      var _Glide$settings$class = Glide.settings.classes,
          type = _Glide$settings$class.type,
          slide = _Glide$settings$class.slide;
      Components.Html.root.classList.remove(type[Glide.settings.type]);
      Components.Html.slides.forEach(function (sibling) {
        sibling.classList.remove(slide.active);
      });
    }
  };
  /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */

  Events.on(['destroy', 'update'], function () {
    Build.removeClasses();
  });
  /**
   * Remount component:
   * - on resizing of the window to calculate new dimensions
   * - on updating settings via API
   */

  Events.on(['resize', 'update'], function () {
    Build.mount();
  });
  /**
   * Swap active class of current slide:
   * - after each move to the new index
   */

  Events.on('move.after', function () {
    Build.activeClass();
  });
  return Build;
}

function Clones (Glide, Components, Events) {
  var Clones = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function mount() {
      this.items = [];

      if (Glide.isType('carousel')) {
        this.items = this.collect();
      }
    },

    /**
     * Collect clones with pattern.
     *
     * @return {[]}
     */
    collect: function collect() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var slides = Components.Html.slides;
      var _Glide$settings = Glide.settings,
          perView = _Glide$settings.perView,
          classes = _Glide$settings.classes,
          cloningRatio = _Glide$settings.cloningRatio;

      if (slides.length !== 0) {
        var peekIncrementer = +!!Glide.settings.peek;
        var cloneCount = perView + peekIncrementer + Math.round(perView / 2);
        var append = slides.slice(0, cloneCount).reverse();
        var prepend = slides.slice(cloneCount * -1);

        for (var r = 0; r < Math.max(cloningRatio, Math.floor(perView / slides.length)); r++) {
          for (var i = 0; i < append.length; i++) {
            var clone = append[i].cloneNode(true);
            clone.classList.add(classes.slide.clone);
            items.push(clone);
          }

          for (var _i = 0; _i < prepend.length; _i++) {
            var _clone = prepend[_i].cloneNode(true);

            _clone.classList.add(classes.slide.clone);

            items.unshift(_clone);
          }
        }
      }

      return items;
    },

    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function append() {
      var items = this.items;
      var _Components$Html = Components.Html,
          wrapper = _Components$Html.wrapper,
          slides = _Components$Html.slides;
      var half = Math.floor(items.length / 2);
      var prepend = items.slice(0, half).reverse();
      var append = items.slice(half * -1).reverse();
      var width = "".concat(Components.Sizes.slideWidth, "px");

      for (var i = 0; i < append.length; i++) {
        wrapper.appendChild(append[i]);
      }

      for (var _i2 = 0; _i2 < prepend.length; _i2++) {
        wrapper.insertBefore(prepend[_i2], slides[0]);
      }

      for (var _i3 = 0; _i3 < items.length; _i3++) {
        items[_i3].style.width = width;
      }
    },

    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function remove() {
      var items = this.items;

      for (var i = 0; i < items.length; i++) {
        Components.Html.wrapper.removeChild(items[i]);
      }
    }
  };
  define(Clones, 'grow', {
    /**
     * Gets additional dimensions value caused by clones.
     *
     * @return {Number}
     */
    get: function get() {
      return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
    }
  });
  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */

  Events.on('update', function () {
    Clones.remove();
    Clones.mount();
    Clones.append();
  });
  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */

  Events.on('build.before', function () {
    if (Glide.isType('carousel')) {
      Clones.append();
    }
  });
  /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */

  Events.on('destroy', function () {
    Clones.remove();
  });
  return Clones;
}

var EventsBinder = /*#__PURE__*/function () {
  /**
   * Construct a EventsBinder instance.
   */
  function EventsBinder() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, EventsBinder);

    this.listeners = listeners;
  }
  /**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @param  {Boolean|Object} capture
   * @return {Void}
   */


  _createClass(EventsBinder, [{
    key: "on",
    value: function on(events, el, closure) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        this.listeners[events[i]] = closure;
        el.addEventListener(events[i], this.listeners[events[i]], capture);
      }
    }
    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */

  }, {
    key: "off",
    value: function off(events, el) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        el.removeEventListener(events[i], this.listeners[events[i]], capture);
      }
    }
    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      delete this.listeners;
    }
  }]);

  return EventsBinder;
}();

function Resize (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var Resize = {
    /**
     * Initializes window bindings.
     */
    mount: function mount() {
      this.bind();
    },

    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('resize', window, throttle(function () {
        Events.emit('resize');
      }, Glide.settings.throttle));
    },

    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('resize', window);
    }
  };
  /**
   * Remove bindings from window:
   * - on destroying, to remove added EventListener
   */

  Events.on('destroy', function () {
    Resize.unbind();
    Binder.destroy();
  });
  return Resize;
}

var VALID_DIRECTIONS = ['ltr', 'rtl'];
var FLIPED_MOVEMENTS = {
  '>': '<',
  '<': '>',
  '=': '='
};
function Direction (Glide, Components, Events) {
  var Direction = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.direction;
    },

    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function resolve(pattern) {
      var token = pattern.slice(0, 1);

      if (this.is('rtl')) {
        return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
      }

      return pattern;
    },

    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function is(direction) {
      return this.value === direction;
    },

    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function addClass() {
      Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
    },

    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function removeClass() {
      Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
    }
  };
  define(Direction, 'value', {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function get() {
      return Direction._v;
    },

    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function set(value) {
      if (VALID_DIRECTIONS.indexOf(value) > -1) {
        Direction._v = value;
      } else {
        warn('Direction value must be `ltr` or `rtl`');
      }
    }
  });
  /**
   * Clear direction class:
   * - on destroy to bring HTML to its initial state
   * - on update to remove class before reappling bellow
   */

  Events.on(['destroy', 'update'], function () {
    Direction.removeClass();
  });
  /**
   * Remount component:
   * - on update to reflect changes in direction value
   */

  Events.on('update', function () {
    Direction.mount();
  });
  /**
   * Apply direction class:
   * - before building to apply class for the first time
   * - on updating to reapply direction class that may changed
   */

  Events.on(['build.before', 'update'], function () {
    Direction.addClass();
  });
  return Direction;
}

/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Rtl (Glide, Components) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Components.Direction.is('rtl')) {
        return -translate;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Gap (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      var multiplier = Math.floor(translate / Components.Sizes.slideWidth);
      return translate + Components.Gaps.value * multiplier;
    }
  };
}

/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Grow (Glide, Components) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Clones.grow / 2;
    }
  };
}

/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */

function Peeking (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Glide.settings.focusAt >= 0) {
        var peek = Components.Peek.value;

        if (isObject(peek)) {
          return translate - peek.before;
        }

        return translate - peek;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Focusing (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      var gap = Components.Gaps.value;
      var width = Components.Sizes.width;
      var focusAt = Glide.settings.focusAt;
      var slideWidth = Components.Sizes.slideWidth;

      if (focusAt === 'center') {
        return translate - (width / 2 - slideWidth / 2);
      }

      return translate - slideWidth * focusAt - gap * focusAt;
    }
  };
}

/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */

function mutator (Glide, Components, Events) {
  /**
   * Merge instance transformers with collection of default transformers.
   * It's important that the Rtl component be last on the list,
   * so it reflects all previous transformations.
   *
   * @type {Array}
   */
  var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function mutate(translate) {
      for (var i = 0; i < TRANSFORMERS.length; i++) {
        var transformer = TRANSFORMERS[i];

        if (isFunction(transformer) && isFunction(transformer().modify)) {
          translate = transformer(Glide, Components, Events).modify(translate);
        } else {
          warn('Transformer should be a function that returns an object with `modify()` method');
        }
      }

      return translate;
    }
  };
}

function Translate (Glide, Components, Events) {
  var Translate = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function set(value) {
      var transform = mutator(Glide, Components).mutate(value);
      var translate3d = "translate3d(".concat(-1 * transform, "px, 0px, 0px)");
      Components.Html.wrapper.style.mozTransform = translate3d; // needed for supported Firefox 10-15

      Components.Html.wrapper.style.webkitTransform = translate3d; // needed for supported Chrome 10-35, Safari 5.1-8, and Opera 15-22

      Components.Html.wrapper.style.transform = translate3d;
    },

    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transform = '';
    },

    /**
     * @return {number}
     */
    getStartIndex: function getStartIndex() {
      var length = Components.Sizes.length;
      var index = Glide.index;
      var perView = Glide.settings.perView;

      if (Components.Run.isOffset('>') || Components.Run.isOffset('|>')) {
        return length + (index - perView);
      } // "modulo length" converts an index that equals length to zero


      return (index + perView) % length;
    },

    /**
     * @return {number}
     */
    getTravelDistance: function getTravelDistance() {
      var travelDistance = Components.Sizes.slideWidth * Glide.settings.perView;

      if (Components.Run.isOffset('>') || Components.Run.isOffset('|>')) {
        // reverse travel distance so that we don't have to change subtract operations
        return travelDistance * -1;
      }

      return travelDistance;
    }
  };
  /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */

  Events.on('move', function (context) {
    if (!Glide.isType('carousel') || !Components.Run.isOffset()) {
      return Translate.set(context.movement);
    }

    Components.Transition.after(function () {
      Events.emit('translate.jump');
      Translate.set(Components.Sizes.slideWidth * Glide.index);
    });
    var startWidth = Components.Sizes.slideWidth * Components.Translate.getStartIndex();
    return Translate.set(startWidth - Components.Translate.getTravelDistance());
  });
  /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */

  Events.on('destroy', function () {
    Translate.remove();
  });
  return Translate;
}

function Transition (Glide, Components, Events) {
  /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */
  var disabled = false;
  var Transition = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function compose(property) {
      var settings = Glide.settings;

      if (!disabled) {
        return "".concat(property, " ").concat(this.duration, "ms ").concat(settings.animationTimingFunc);
      }

      return "".concat(property, " 0ms ").concat(settings.animationTimingFunc);
    },

    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function set() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
      Components.Html.wrapper.style.transition = this.compose(property);
    },

    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transition = '';
    },

    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function after(callback) {
      setTimeout(function () {
        callback();
      }, this.duration);
    },

    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function enable() {
      disabled = false;
      this.set();
    },

    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function disable() {
      disabled = true;
      this.set();
    }
  };
  define(Transition, 'duration', {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;

      if (Glide.isType('slider') && Components.Run.offset) {
        return settings.rewindDuration;
      }

      return settings.animationDuration;
    }
  });
  /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */

  Events.on('move', function () {
    Transition.set();
  });
  /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimensions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */

  Events.on(['build.before', 'resize', 'translate.jump'], function () {
    Transition.disable();
  });
  /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */

  Events.on('run', function () {
    Transition.enable();
  });
  /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */

  Events.on('destroy', function () {
    Transition.remove();
  });
  return Transition;
}

/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */
var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

var supportsPassive$1 = supportsPassive;

var START_EVENTS = ['touchstart', 'mousedown'];
var MOVE_EVENTS = ['touchmove', 'mousemove'];
var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
function Swipe (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var swipeSin = 0;
  var swipeStartX = 0;
  var swipeStartY = 0;
  var disabled = false;
  var capture = supportsPassive$1 ? {
    passive: true
  } : false;
  var Swipe = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bindSwipeStart();
    },

    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start: function start(event) {
      if (!disabled && !Glide.disabled) {
        this.disable();
        var swipe = this.touches(event);
        swipeSin = null;
        swipeStartX = toInt(swipe.pageX);
        swipeStartY = toInt(swipe.pageY);
        this.bindSwipeMove();
        this.bindSwipeEnd();
        Events.emit('swipe.start');
      }
    },

    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function move(event) {
      if (!Glide.disabled) {
        var _Glide$settings = Glide.settings,
            touchAngle = _Glide$settings.touchAngle,
            touchRatio = _Glide$settings.touchRatio,
            classes = _Glide$settings.classes;
        var swipe = this.touches(event);
        var subExSx = toInt(swipe.pageX) - swipeStartX;
        var subEySy = toInt(swipe.pageY) - swipeStartY;
        var powEX = Math.abs(subExSx << 2);
        var powEY = Math.abs(subEySy << 2);
        var swipeHypotenuse = Math.sqrt(powEX + powEY);
        var swipeCathetus = Math.sqrt(powEY);
        swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

        if (swipeSin * 180 / Math.PI < touchAngle) {
          event.stopPropagation();
          Components.Move.make(subExSx * toFloat(touchRatio));
          Components.Html.root.classList.add(classes.dragging);
          Events.emit('swipe.move');
        } else {
          return false;
        }
      }
    },

    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end: function end(event) {
      if (!Glide.disabled) {
        var _Glide$settings2 = Glide.settings,
            perSwipe = _Glide$settings2.perSwipe,
            touchAngle = _Glide$settings2.touchAngle,
            classes = _Glide$settings2.classes;
        var swipe = this.touches(event);
        var threshold = this.threshold(event);
        var swipeDistance = swipe.pageX - swipeStartX;
        var swipeDeg = swipeSin * 180 / Math.PI;
        this.enable();

        if (swipeDistance > threshold && swipeDeg < touchAngle) {
          Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")));
        } else if (swipeDistance < -threshold && swipeDeg < touchAngle) {
          Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")));
        } else {
          // While swipe don't reach distance apply previous transform.
          Components.Move.make();
        }

        Components.Html.root.classList.remove(classes.dragging);
        this.unbindSwipeMove();
        this.unbindSwipeEnd();
        Events.emit('swipe.end');
      }
    },

    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function bindSwipeStart() {
      var _this = this;

      var _Glide$settings3 = Glide.settings,
          swipeThreshold = _Glide$settings3.swipeThreshold,
          dragThreshold = _Glide$settings3.dragThreshold;

      if (swipeThreshold) {
        Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }

      if (dragThreshold) {
        Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }
    },

    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function unbindSwipeStart() {
      Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
      Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
    },

    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function bindSwipeMove() {
      var _this2 = this;

      Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
        _this2.move(event);
      }, Glide.settings.throttle), capture);
    },

    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function unbindSwipeMove() {
      Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
    },

    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function bindSwipeEnd() {
      var _this3 = this;

      Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
        _this3.end(event);
      });
    },

    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function unbindSwipeEnd() {
      Binder.off(END_EVENTS, Components.Html.wrapper);
    },

    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function touches(event) {
      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return event;
      }

      return event.touches[0] || event.changedTouches[0];
    },

    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function threshold(event) {
      var settings = Glide.settings;

      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return settings.dragThreshold;
      }

      return settings.swipeThreshold;
    },

    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function enable() {
      disabled = false;
      Components.Transition.enable();
      return this;
    },

    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function disable() {
      disabled = true;
      Components.Transition.disable();
      return this;
    }
  };
  /**
   * Add component class:
   * - after initial building
   */

  Events.on('build.after', function () {
    Components.Html.root.classList.add(Glide.settings.classes.swipeable);
  });
  /**
   * Remove swiping bindings:
   * - on destroying, to remove added EventListeners
   */

  Events.on('destroy', function () {
    Swipe.unbindSwipeStart();
    Swipe.unbindSwipeMove();
    Swipe.unbindSwipeEnd();
    Binder.destroy();
  });
  return Swipe;
}

function Images (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var Images = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bind();
    },

    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
    },

    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('dragstart', Components.Html.wrapper);
    },

    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function dragstart(event) {
      event.preventDefault();
    }
  };
  /**
   * Remove bindings from images:
   * - on destroying, to remove added EventListeners
   */

  Events.on('destroy', function () {
    Images.unbind();
    Binder.destroy();
  });
  return Images;
}

function Anchors (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  /**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */

  var detached = false;
  /**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */

  var prevented = false;
  var Anchors = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      /**
       * Holds collection of anchors elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._a = Components.Html.wrapper.querySelectorAll('a');
      this.bind();
    },

    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('click', Components.Html.wrapper, this.click);
    },

    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('click', Components.Html.wrapper);
    },

    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function click(event) {
      if (prevented) {
        event.stopPropagation();
        event.preventDefault();
      }
    },

    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function detach() {
      prevented = true;

      if (!detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = false;
        }

        detached = true;
      }

      return this;
    },

    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function attach() {
      prevented = false;

      if (detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = true;
        }

        detached = false;
      }

      return this;
    }
  };
  define(Anchors, 'items', {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Anchors._a;
    }
  });
  /**
   * Detach anchors inside slides:
   * - on swiping, so they won't redirect to its `href` attributes
   */

  Events.on('swipe.move', function () {
    Anchors.detach();
  });
  /**
   * Attach anchors inside slides:
   * - after swiping and transitions ends, so they can redirect after click again
   */

  Events.on('swipe.end', function () {
    Components.Transition.after(function () {
      Anchors.attach();
    });
  });
  /**
   * Unbind anchors inside slides:
   * - on destroying, to bring anchors to its initial state
   */

  Events.on('destroy', function () {
    Anchors.attach();
    Anchors.unbind();
    Binder.destroy();
  });
  return Anchors;
}

var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';
var PREVIOUS_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, " [data-glide-dir*=\"<\"]");
var NEXT_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, " [data-glide-dir*=\">\"]");
function Controls (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var capture = supportsPassive$1 ? {
    passive: true
  } : false;
  var Controls = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function mount() {
      /**
       * Collection of navigation HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);
      /**
       * Collection of controls HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */

      this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);
      /**
       * Collection of arrow control HTML elements.
       *
       * @private
       * @type {Object}
       */

      this._arrowControls = {
        previous: Components.Html.root.querySelectorAll(PREVIOUS_CONTROLS_SELECTOR),
        next: Components.Html.root.querySelectorAll(NEXT_CONTROLS_SELECTOR)
      };
      this.addBindings();
    },

    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function setActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.addClass(this._n[i].children);
      }
    },

    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function removeActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.removeClass(this._n[i].children);
      }
    },

    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function addClass(controls) {
      var settings = Glide.settings;
      var item = controls[Glide.index];

      if (!item) {
        return;
      }

      if (item) {
        item.classList.add(settings.classes.nav.active);
        siblings(item).forEach(function (sibling) {
          sibling.classList.remove(settings.classes.nav.active);
        });
      }
    },

    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function removeClass(controls) {
      var item = controls[Glide.index];

      if (item) {
        item.classList.remove(Glide.settings.classes.nav.active);
      }
    },

    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function setArrowState() {
      if (Glide.settings.rewind) {
        return;
      }

      var next = Controls._arrowControls.next;
      var previous = Controls._arrowControls.previous;
      this.resetArrowState(next, previous);

      if (Glide.index === 0) {
        this.disableArrow(previous);
      }

      if (Glide.index === Components.Run.length) {
        this.disableArrow(next);
      }
    },

    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function resetArrowState() {
      var settings = Glide.settings;

      for (var _len = arguments.length, lists = new Array(_len), _key = 0; _key < _len; _key++) {
        lists[_key] = arguments[_key];
      }

      lists.forEach(function (list) {
        toArray(list).forEach(function (element) {
          element.classList.remove(settings.classes.arrow.disabled);
        });
      });
    },

    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function disableArrow() {
      var settings = Glide.settings;

      for (var _len2 = arguments.length, lists = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        lists[_key2] = arguments[_key2];
      }

      lists.forEach(function (list) {
        toArray(list).forEach(function (element) {
          element.classList.add(settings.classes.arrow.disabled);
        });
      });
    },

    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function addBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.bind(this._c[i].children);
      }
    },

    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function removeBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.unbind(this._c[i].children);
      }
    },

    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function bind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.on('click', elements[i], this.click);
        Binder.on('touchstart', elements[i], this.click, capture);
      }
    },

    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function unbind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.off(['click', 'touchstart'], elements[i]);
      }
    },

    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function click(event) {
      if (!supportsPassive$1 && event.type === 'touchstart') {
        event.preventDefault();
      }

      var direction = event.currentTarget.getAttribute('data-glide-dir');
      Components.Run.make(Components.Direction.resolve(direction));
    }
  };
  define(Controls, 'items', {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Controls._c;
    }
  });
  /**
   * Swap active class of current navigation item:
   * - after mounting to set it to initial index
   * - after each move to the new index
   */

  Events.on(['mount.after', 'move.after'], function () {
    Controls.setActive();
  });
  /**
   * Add or remove disabled class of arrow elements
   */

  Events.on(['mount.after', 'run'], function () {
    Controls.setArrowState();
  });
  /**
   * Remove bindings and HTML Classes:
   * - on destroying, to bring markup to its initial state
   */

  Events.on('destroy', function () {
    Controls.removeBindings();
    Controls.removeActive();
    Binder.destroy();
  });
  return Controls;
}

function Keyboard (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var Keyboard = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function mount() {
      if (Glide.settings.keyboard) {
        this.bind();
      }
    },

    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('keyup', document, this.press);
    },

    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('keyup', document);
    },

    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function press(event) {
      var perSwipe = Glide.settings.perSwipe;

      if (event.code === 'ArrowRight') {
        Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")));
      }

      if (event.code === 'ArrowLeft') {
        Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")));
      }
    }
  };
  /**
   * Remove bindings from keyboard:
   * - on destroying to remove added events
   * - on updating to remove events before remounting
   */

  Events.on(['destroy', 'update'], function () {
    Keyboard.unbind();
  });
  /**
   * Remount component
   * - on updating to reflect potential changes in settings
   */

  Events.on('update', function () {
    Keyboard.mount();
  });
  /**
   * Destroy binder:
   * - on destroying to remove listeners
   */

  Events.on('destroy', function () {
    Binder.destroy();
  });
  return Keyboard;
}

function Autoplay (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var Autoplay = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.enable();
      this.start();

      if (Glide.settings.hoverpause) {
        this.bind();
      }
    },

    /**
     * Enables autoplaying
     *
     * @returns {Void}
     */
    enable: function enable() {
      this._e = true;
    },

    /**
     * Disables autoplaying.
     *
     * @returns {Void}
     */
    disable: function disable() {
      this._e = false;
    },

    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start: function start() {
      var _this = this;

      if (!this._e) {
        return;
      }

      this.enable();

      if (Glide.settings.autoplay) {
        if (isUndefined(this._i)) {
          this._i = setInterval(function () {
            _this.stop();

            Components.Run.make('>');

            _this.start();

            Events.emit('autoplay');
          }, this.time);
        }
      }
    },

    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop: function stop() {
      this._i = clearInterval(this._i);
    },

    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind: function bind() {
      var _this2 = this;

      Binder.on('mouseover', Components.Html.root, function () {
        if (_this2._e) {
          _this2.stop();
        }
      });
      Binder.on('mouseout', Components.Html.root, function () {
        if (_this2._e) {
          _this2.start();
        }
      });
    },

    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function unbind() {
      Binder.off(['mouseover', 'mouseout'], Components.Html.root);
    }
  };
  define(Autoplay, 'time', {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function get() {
      var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

      if (autoplay) {
        return toInt(autoplay);
      }

      return toInt(Glide.settings.autoplay);
    }
  });
  /**
   * Stop autoplaying and unbind events:
   * - on destroying, to clear defined interval
   * - on updating via API to reset interval that may changed
   */

  Events.on(['destroy', 'update'], function () {
    Autoplay.unbind();
  });
  /**
   * Stop autoplaying:
   * - before each run, to restart autoplaying
   * - on pausing via API
   * - on destroying, to clear defined interval
   * - while starting a swipe
   * - on updating via API to reset interval that may changed
   */

  Events.on(['run.before', 'swipe.start', 'update'], function () {
    Autoplay.stop();
  });
  Events.on(['pause', 'destroy'], function () {
    Autoplay.disable();
    Autoplay.stop();
  });
  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */

  Events.on(['run.after', 'swipe.end'], function () {
    Autoplay.start();
  });
  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */

  Events.on(['play'], function () {
    Autoplay.enable();
    Autoplay.start();
  });
  /**
   * Remount autoplaying:
   * - on updating via API to reset interval that may changed
   */

  Events.on('update', function () {
    Autoplay.mount();
  });
  /**
   * Destroy a binder:
   * - on destroying glide instance to clearup listeners
   */

  Events.on('destroy', function () {
    Binder.destroy();
  });
  return Autoplay;
}

/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
 */

function sortBreakpoints(points) {
  if (isObject(points)) {
    return sortKeys(points);
  } else {
    warn("Breakpoints option must be an object");
  }

  return {};
}

function Breakpoints (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  /**
   * Holds reference to settings.
   *
   * @type {Object}
   */

  var settings = Glide.settings;
  /**
   * Holds reference to breakpoints object in settings. Sorts breakpoints
   * from smaller to larger. It is required in order to proper
   * matching currently active breakpoint settings.
   *
   * @type {Object}
   */

  var points = sortBreakpoints(settings.breakpoints);
  /**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */

  var defaults = Object.assign({}, settings);
  var Breakpoints = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function match(points) {
      if (typeof window.matchMedia !== 'undefined') {
        for (var point in points) {
          if (points.hasOwnProperty(point)) {
            if (window.matchMedia("(max-width: ".concat(point, "px)")).matches) {
              return points[point];
            }
          }
        }
      }

      return defaults;
    }
  };
  /**
   * Overwrite instance settings with currently matching breakpoint settings.
   * This happens right after component initialization.
   */

  Object.assign(settings, Breakpoints.match(points));
  /**
   * Update glide with settings of matched brekpoint:
   * - window resize to update slider
   */

  Binder.on('resize', window, throttle(function () {
    Glide.settings = mergeOptions(settings, Breakpoints.match(points));
  }, Glide.settings.throttle));
  /**
   * Resort and update default settings:
   * - on reinit via API, so breakpoint matching will be performed with options
   */

  Events.on('update', function () {
    points = sortBreakpoints(points);
    defaults = Object.assign({}, settings);
  });
  /**
   * Unbind resize listener:
   * - on destroying, to bring markup to its initial state
   */

  Events.on('destroy', function () {
    Binder.off('resize', window);
  });
  return Breakpoints;
}

var COMPONENTS = {
  // Required
  Html: Html,
  Translate: Translate,
  Transition: Transition,
  Direction: Direction,
  Peek: Peek,
  Sizes: Sizes,
  Gaps: Gaps,
  Move: Move,
  Clones: Clones,
  Resize: Resize,
  Build: Build,
  Run: Run,
  // Optional
  Swipe: Swipe,
  Images: Images,
  Anchors: Anchors,
  Controls: Controls,
  Keyboard: Keyboard,
  Autoplay: Autoplay,
  Breakpoints: Breakpoints
};

var Glide = /*#__PURE__*/function (_Core) {
  _inherits(Glide, _Core);

  var _super = _createSuper(Glide);

  function Glide() {
    _classCallCheck(this, Glide);

    return _super.apply(this, arguments);
  }

  _createClass(Glide, [{
    key: "mount",
    value: function mount() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _get(_getPrototypeOf(Glide.prototype), "mount", this).call(this, Object.assign({}, COMPONENTS, extensions));
    }
  }]);

  return Glide;
}(Glide$1);




/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/dom-ready.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const domReady = onReady => {
    window.requestAnimationFrame(async function check() {
        document.body ? await onReady() : window.requestAnimationFrame(check);
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domReady);


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/client.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   client: () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/index.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/events.js");
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/log.js");
/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/options.js");
/* eslint-disable no-console */
/* global __resourceQuery */
/* global __webpack_hash__ */




/**
 * Initializes bud.js HMR handling
 */
const client = async (queryString, webpackHot) => {
    /* Guard: EventSource browser support */
    if (typeof window?.EventSource === `undefined`) {
        console.error(`[bud] hot module reload requires EventSource to work. https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools`);
        return false;
    }
    /* Guard: webpackHot api availability */
    if (!webpackHot) {
        console.error(`[bud] hot module reload requires the webpack hot api to be available`);
        return false;
    }
    /* Set client options from URL params */
    const options = _options_js__WEBPACK_IMPORTED_MODULE_3__.setFromParameters(queryString);
    /* Setup logger */
    const logger = (0,_log_js__WEBPACK_IMPORTED_MODULE_2__.makeLogger)(options);
    if (typeof window.bud === `undefined`) {
        window.bud = {
            controllers: [],
            current: {},
            hmr: {},
            listeners: {},
        };
    }
    if (!window.bud.current[options.name]) {
        window.bud.current[options.name] = null;
    }
    const isStale = (hash) => {
        if (hash)
            window.bud.current[options.name] = hash;
        return __webpack_require__.h() === window.bud.current[options.name];
    };
    /**
     * Webpack HMR check handler
     */
    const check = async () => {
        if (webpackHot.status() === `idle`) {
            await webpackHot.check(false);
            requestAnimationFrame(async function whenReady() {
                if (webpackHot.status() === `ready`) {
                    await update();
                }
                else {
                    requestAnimationFrame(whenReady);
                }
            });
        }
    };
    /**
     * Webpack HMR unaccepted module handler
     */
    const onUnacceptedOrDeclined = (info) => {
        console.warn(`[${options.name}] ${info.type}`, info);
        options.reload && window.location.reload();
    };
    /**
     * Webpack HMR error handler
     */
    const onErrored = (error) => {
        window.bud.controllers.map(controller => controller?.update({
            errors: [error],
        }));
    };
    /**
     * Webpack HMR update handler
     */
    const update = async () => {
        try {
            await webpackHot.apply({
                ignoreDeclined: true,
                ignoreErrored: true,
                ignoreUnaccepted: true,
                onDeclined: onUnacceptedOrDeclined,
                onErrored,
                onUnaccepted: onUnacceptedOrDeclined,
            });
            if (!isStale())
                await check();
        }
        catch (error) {
            logger.error(error);
        }
    };
    /* Instantiate indicator, overlay */
    try {
        await _components_index_js__WEBPACK_IMPORTED_MODULE_0__.make(options);
    }
    catch (error) { }
    /* Instantiate eventSource */
    const events = (0,_events_js__WEBPACK_IMPORTED_MODULE_1__.injectEvents)(EventSource).make(options);
    if (!window.bud.listeners?.[options.name]) {
        window.bud.listeners[options.name] = async (payload) => {
            if (!payload)
                return;
            if (options.reload && payload.action === `reload`)
                return window.location.reload();
            if (payload.name !== options.name)
                return;
            window.bud.controllers.map(controller => controller?.update(payload));
            if (payload.errors?.length > 0)
                return;
            if (payload.action === `built` || payload.action === `sync`) {
                if (isStale(payload.hash))
                    return;
                if (payload.action === `built`) {
                    logger.log(`built in ${payload.time}ms`);
                }
                await check();
            }
        };
        /*
         * Instantiate HMR event source
         * and register client listeners
         */
        events.addListener(window.bud.listeners[options.name]);
    }
};


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   make: () => (/* binding */ make)
/* harmony export */ });
/* harmony import */ var _indicator_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/indicator/index.js");
/* harmony import */ var _overlay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/overlay/index.js");


const make = async (options) => {
    if (options.indicator && !customElements.get(`bud-activity-indicator`)) {
        maybePushController(_indicator_index_js__WEBPACK_IMPORTED_MODULE_0__.make());
    }
    if (options.overlay && !customElements.get(`bud-error`)) {
        maybePushController(_overlay_index_js__WEBPACK_IMPORTED_MODULE_1__.make());
    }
    return window.bud.controllers;
};
const maybePushController = (controller) => {
    if (!controller)
        return;
    window.bud.controllers.push(controller);
};


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/indicator/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   make: () => (/* binding */ make)
/* harmony export */ });
/* harmony import */ var _indicator_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.component.js");
/* harmony import */ var _indicator_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.controller.js");


const make = () => {
    if (customElements.get(`bud-activity-indicator`))
        return;
    customElements.define(`bud-activity-indicator`, _indicator_component_js__WEBPACK_IMPORTED_MODULE_0__.Component);
    return new _indicator_controller_js__WEBPACK_IMPORTED_MODULE_1__.Controller();
};


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.component.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _indicator_pulse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.pulse.js");

/**
 * Indicator web component
 */
class Component extends HTMLElement {
    /**
     * Class constructor
     */
    constructor() {
        super();
        /**
         * Status indicator colors
         */
        this.colors = {
            error: [220, 38, 38, 1],
            pending: [59, 130, 246, 1],
            success: [4, 120, 87, 1],
            warn: [252, 211, 77, 1],
        };
        /**
         * Component name
         */
        this.name = `bud-activity-indicator`;
        this.renderShadow();
    }
    static get observedAttributes() {
        return [`has-errors`, `has-warnings`, `action`];
    }
    attributeChangedCallback() {
        if (this.hasAttribute(`has-errors`))
            return this.onError();
        if (this.hasAttribute(`has-warnings`))
            return this.onWarning();
        if (!this.hasAttribute(`has-errors`) &&
            !this.hasAttribute(`has-warnings`) &&
            this.getAttribute(`action`) === `built`)
            return this.onSuccess();
        if (this.getAttribute(`action`) == `building` ||
            this.getAttribute(`action`) == `sync`)
            return this.onPending();
    }
    /**
     * Get accessor: has errors
     */
    get hasErrors() {
        return this.getAttribute(`has-errors`) == `true`;
    }
    /**
     * Get accessor: has warnings
     */
    get hasWarnings() {
        return this.getAttribute(`has-warnings`) == `true`;
    }
    /**
     * Hide status indicator
     */
    hide() {
        this.hideTimeout = setTimeout(() => {
            this.shadowRoot.querySelector(this.selector).classList.remove(`show`);
        }, 2000);
    }
    /**
     * Status is error
     */
    onError() {
        this.show();
        this.shadowRoot
            .querySelector(this.selector)
            .classList.remove(`warning`, `success`, `pending`);
        this.shadowRoot.querySelector(this.selector).classList.add(`error`);
    }
    /**
     * Status is pending
     */
    onPending() {
        this.show();
        this.shadowRoot
            .querySelector(this.selector)
            .classList.remove(`error`, `warning`, `success`);
        this.shadowRoot.querySelector(this.selector).classList.add(`pending`);
        this.hide();
    }
    /**
     * Status is success
     */
    onSuccess() {
        this.show();
        this.shadowRoot
            .querySelector(this.selector)
            .classList.remove(`error`, `warning`, `pending`);
        this.shadowRoot.querySelector(this.selector).classList.add(`success`);
        this.hide();
    }
    /**
     * Status is warning
     */
    onWarning() {
        this.show();
        this.shadowRoot
            .querySelector(this.selector)
            .classList.remove(`error`, `success`, `pending`);
        this.shadowRoot.querySelector(this.selector).classList.add(`warning`);
    }
    /**
     * Render status indicator
     */
    renderShadow() {
        const container = document.createElement(`div`);
        container.classList.add(this.name);
        container.innerHTML = `
    <style>
    .bud-activity-indicator {
      position: fixed;
      width: 10px;
      height: 10px;
      left: 10px;
      bottom: 10px;
      z-index: 9999;
      margin: 5px;
      padding: 5px;
      -webkit-transition:
        all .6s ease-in-out,
      transition:
        all .6s ease-in-out;
      animation-fill-mode: forwards;
      pointer-events: none;
      border-radius: 50%;
      transform: scale(0);
      opacity: 0;
    }

    .show {
      opacity: 1;
      background-color: rgba(255, 255, 255, 1);
      transform: scale(1);
      transition:
        all .6s ease-in-out;
    }

    ${(0,_indicator_pulse_js__WEBPACK_IMPORTED_MODULE_0__.pulse)(`success`, this.colors.success)}
    ${(0,_indicator_pulse_js__WEBPACK_IMPORTED_MODULE_0__.pulse)(`error`, this.colors.error)}
    ${(0,_indicator_pulse_js__WEBPACK_IMPORTED_MODULE_0__.pulse)(`warning`, this.colors.warn)}
    ${(0,_indicator_pulse_js__WEBPACK_IMPORTED_MODULE_0__.pulse)(`pending`, this.colors.pending)}

    </style>
    `;
        this.attachShadow({ mode: `open` }).appendChild(container);
    }
    /**
     * Root div querySelector selector
     */
    get selector() {
        return `.${this.name}`;
    }
    /**
     * Show status indicator
     */
    show() {
        this.hideTimeout && clearTimeout(this.hideTimeout);
        this.shadowRoot.querySelector(this.selector).classList.add(`show`);
    }
}


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.controller.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controller: () => (/* binding */ Controller)
/* harmony export */ });
/**
 * Activity indicator controller
 */
class Controller {
    /**
     * Initialization
     */
    constructor() {
        /**
         * Active WHM payload
         */
        this.payload = null;
        this.node = document.createElement(`bud-activity-indicator`);
        this.update = this.update.bind(this);
    }
    /**
     * Append `bud-error` element to the DOM
     */
    addNode() {
        if (document.body.querySelector(`bud-activity-indicator`)) {
            if (typeof this.timer.unref === `function`)
                this.timer.unref();
            this.removeNode();
        }
        document.body?.appendChild(this.node);
        this.timer = setTimeout(this.removeNode, 3000);
    }
    /**
     * Remove `bud-error` element from the DOM (if present)
     */
    removeNode() {
        document.body.querySelector(`bud-activity-indicator`)?.remove();
    }
    /**
     * Update activity indicator
     */
    update(payload) {
        this.node.toggleAttribute(`has-errors`, payload.errors?.length ? true : false);
        this.node.toggleAttribute(`has-warnings`, payload.warnings?.length ? true : false);
        this.node.setAttribute(`action`, payload.action);
        this.addNode();
    }
}


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/indicator/indicator.pulse.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pulse: () => (/* binding */ pulse)
/* harmony export */ });
/**
 * CSS animation for reload indicator
 */
const pulse = (name, color) => `
  .${name} {
    box-shadow: 0 0 0 0 rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]});
    animation: ${name}__pulse 2s infinite;
    transition: all 0.4s ease-in-out;
  }

  .${name}:not(.show) {
    background-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, 0);
  }

  .${name}.show {
    background-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]});
  }

  @keyframes ${name}__pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(${color[0]}, ${color[1]}, ${color[2]}, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(${color[0]}, ${color[1]}, ${color[2]}, 0);
    }
  }
`;


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/overlay/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   make: () => (/* binding */ make)
/* harmony export */ });
/* harmony import */ var _overlay_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/overlay/overlay.component.js");
/* harmony import */ var _overlay_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/components/overlay/overlay.controller.js");


const make = () => {
    if (customElements.get(`bud-error`))
        return;
    customElements.define(`bud-error`, _overlay_component_js__WEBPACK_IMPORTED_MODULE_0__.Component);
    return new _overlay_controller_js__WEBPACK_IMPORTED_MODULE_1__.Controller();
};


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/overlay/overlay.component.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component)
/* harmony export */ });
/**
 * Component container
 */
class Component extends HTMLElement {
    constructor() {
        super();
        this.name = `bud-overlay`;
        this.renderShadow();
    }
    static get observedAttributes() {
        return [`message`];
    }
    attributeChangedCallback() {
        if (!this.documentBodyStyle)
            this.documentBodyStyle = document.body?.style;
        if (this.getAttribute(`message`)) {
            document.body.style.overflow = `hidden`;
            this.shadowRoot.querySelector(`.overlay`).classList.add(`visible`);
            this.shadowRoot.querySelector(`.messages`).innerHTML =
                this.getAttribute(`message`);
            return;
        }
        if (this.documentBodyStyle?.overflow && document?.body?.style) {
            document.body.style.overflow = this.documentBodyStyle.overflow;
        }
        this.shadowRoot.querySelector(`.overlay`).classList.remove(`visible`);
    }
    connectedCallback() {
        if (document.body?.style)
            this.documentBodyStyle = document.body.style;
    }
    get message() {
        return this.getAttribute(`message`);
    }
    renderShadow() {
        const container = document.createElement(`div`);
        container.classList.add(`overlay`);
        container.innerHTML = `
      <style>
        .overlay {
          width: 100vw;
          backdrop-filter: blur(10px);
          display: flex;
          height: 100vh;
          border-top: 2px solid transparent;
          overflow-x: hidden;
          overflow-y: scroll;
          position: absolute;
          top: -1000px;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.2s ease-in-out, border 0.4s ease-in-out;
          justify-content: center;
        }

        .visible {
          position: fixed;
          top: 0;
          z-index: 9998;
          opacity: 1;
          border-top: 5px solid red;
          transition: opacity 0.2s ease-in-out, border 0.4s ease-in-out;
          max-width: 100vw;
        }

        .messages {
          background-color: white;
          border-radius: 5px;
          filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
          display: flex;
          align-self: center;
          width: 800px;
          max-width: 90vw;
          margin-left: auto;
          margin-right: auto;
          flex-direction: column;
          flex-wrap: wrap;
          align-items: center;
          align-content: center;
          padding: 2rem 2rem 0rem 2rem;
        }

        .visible .messages > div {
          position: relative;
          top: 0;
          opacity: 1;
          transition: all: 0.2s ease-in-out;
        }

        .messages > div {
          position: relative;
          top: 20px;
          opacity: 0;
          transition: all: 0.2s ease-in-out;
          align-items: center;
          align-content: center;
          color: rgba(0, 0, 0, 0.87);
          flex-direction: column;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          padding: 0rem 2rem 2rem 2rem;
          width: 100%;
          max-width:95vw;
        }

        .messages > div > pre {
          font-weight: 300;
          font-size: 0.8rem;
          overflow-x: scroll;
        }

        pre {
          background: #303030;
          color: #f1f1f1;
          padding: 10px 16px;
          border-radius: 2px;
          border-top: 4px solid #dd0303;
          -moz-box-shadow: inset 0 0 10px #000;
          box-shadow: inset 0 0 10px #000;
          counter-reset: line;
        }

        pre span {
          display: block;
          line-height: 1.5rem;
        }

        pre span:before {
          counter-increment: line;
          content: counter(line);
          display: inline-block;
          border-right: 1px solid #ddd;
          padding: 0 .5em;
          margin-right: .5em;
          color: #888;
          width: 30px;
        }
      </style>
      <div class="messages"></div>
    `;
        this.attachShadow({ mode: `open` }).appendChild(container);
    }
}


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/components/overlay/overlay.controller.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controller: () => (/* binding */ Controller)
/* harmony export */ });
const ansiPattern = [
    `[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)`,
    `(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))`,
].join(`|`);
const stripAnsi = (body) => body?.replace?.(new RegExp(ansiPattern, `g`), ``) ?? body;
/**
 * Overlay controller
 */
class Controller {
    /**
     * Class constructor
     */
    constructor() {
        this.update = this.update.bind(this);
        this.element = document.createElement(`bud-error`);
    }
    /**
     * Append `bud-error` element to the DOM
     */
    createError() {
        !document.body.querySelector(`bud-error`) &&
            document.body?.appendChild(this.element);
    }
    /**
     * Formatted error message
     */
    get message() {
        return this.payload.errors?.reduce((a, c) => {
            const msg = c?.message ?? c?.error ?? c;
            if (!msg)
                return a;
            return `${a}
        <div>
          <pre>${stripAnsi(msg)}</pre>
        </div>`;
        }, ``);
    }
    /**
     * Remove `bud-error` element from the DOM (if present)
     */
    removeError() {
        document.body.querySelector(`bud-error`)?.remove();
    }
    /**
     * Update DOM
     */
    update(payload) {
        this.payload = payload;
        this.element.setAttribute(`message`, this.message ?? ``);
        if (this.payload.errors?.length > 0) {
            return this.createError();
        }
        this.removeError();
    }
}


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/events.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   injectEvents: () => (/* binding */ injectEvents)
/* harmony export */ });
const injectEvents = (eventSource) => {
    /**
     * EventSource wrapper
     *
     * @remarks
     * wraps EventSource in a function to allow for
     * mocking in tests
     */
    return class Events extends eventSource {
        /**
         * Class constructor
         *
         * @remarks
         * Singleton interface, so this is private.
         *
         */
        constructor(options) {
            super(options.path);
            this.options = options;
            /**
             * Registered listeners
             */
            this.listeners = new Set();
            /**
             * EventSource `onmessage` handler
             */
            this.onmessage = async function (payload) {
                if (!payload?.data || payload.data == `\uD83D\uDC93`) {
                    return;
                }
                try {
                    const data = JSON.parse(payload.data);
                    if (!data)
                        return;
                    await Promise.all([...this.listeners].map(async (listener) => {
                        return await listener(data);
                    }));
                }
                catch (ex) { }
            };
            /**
             * EventSource `onopen` handler
             */
            this.onopen = function () { };
            this.onopen = this.onopen.bind(this);
            this.onmessage = this.onmessage.bind(this);
            this.addListener = this.addListener.bind(this);
        }
        /**
         * Singleton constructor
         *
         */
        static make(options) {
            if (typeof window.bud.hmr[options.name] === `undefined`)
                Object.assign(window.bud.hmr, {
                    [options.name]: new Events(options),
                });
            return window.bud.hmr[options.name];
        }
        /**
         * EventSource `addMessageListener` handler
         */
        addListener(listener) {
            this.listeners.add(listener);
            return this;
        }
    };
};


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/index.js?indicator=true&name=sage&overlay=true&reload=true":
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

var __resourceQuery = "?indicator=true&name=sage&overlay=true&reload=true";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/bud-client/lib/hot/client.js");
/* eslint-disable no-console */
/* global __resourceQuery */
/* global module */

(async function () {
    try {
        await (0,_client_js__WEBPACK_IMPORTED_MODULE_0__.client)(__resourceQuery, __webpack_module__.hot);
    }
    catch (err) {
        console.error(err);
    }
})();


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/log.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeError: () => (/* binding */ makeError),
/* harmony export */   makeInfo: () => (/* binding */ makeInfo),
/* harmony export */   makeLog: () => (/* binding */ makeLog),
/* harmony export */   makeLogger: () => (/* binding */ makeLogger),
/* harmony export */   makeWarn: () => (/* binding */ makeWarn)
/* harmony export */ });
/* eslint-disable no-console */
const makeLogger = (options) => {
    return {
        error: makeError(options),
        info: makeInfo(options),
        log: makeLog(options),
        warn: makeWarn(options),
    };
};
const makeLog = (options) => {
    return (...args) => {
        if (options.log) {
            console.log(`[${options.name}]`, ...args);
        }
    };
};
const makeInfo = (options) => {
    return (...args) => {
        if (options.log) {
            console.info(`[${options.name}]`, ...args);
        }
    };
};
const makeError = (options) => {
    return (...args) => {
        console.error(`[${options.name}]`, ...args);
    };
};
const makeWarn = (options) => {
    return (...args) => {
        console.warn(`[${options.name}]`, ...args);
    };
};


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/options.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   data: () => (/* binding */ data),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   setFromParameters: () => (/* binding */ setFromParameters)
/* harmony export */ });
/**
 * Client options
 */
let data = {
    debug: true,
    indicator: true,
    log: true,
    name: `@roots/bud-client`,
    overlay: true,
    path: `/bud/hot`,
    reload: true,
    timeout: 2000,
};
/**
 * Get client option
 */
const get = (name, key) => key ? data[name][key] : data[name];
/**
 * Set client data based on URL parameters
 */
const setFromParameters = (query) => {
    let parsedParams = {};
    new window.URLSearchParams(query).forEach((value, key) => {
        parsedParams[key] =
            value === `true` ? true : value === `false` ? false : value;
    });
    data[parsedParams.name] = { ...data, ...parsedParams };
    return data[parsedParams.name];
};



/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/intercept/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const intercept = (...args) => {
    args.every(arg => typeof arg === `string`) &&
        setInterval(() => [
            [document.getElementsByTagName(`a`), `href`],
            [document.getElementsByTagName(`link`), `href`],
        ]
            .map(([elements, attribute]) => [Array.from(elements), attribute])
            .forEach(([elements, attribute]) => elements
            .filter(el => el.hasAttribute(attribute))
            .filter(el => !el.hasAttribute(`__bud_processed`))
            .filter(el => el.getAttribute(attribute).startsWith(args[0]))
            .map(el => {
            const value = el.getAttribute(attribute).replace(...args);
            el.setAttribute(attribute, value);
            el.toggleAttribute(`__bud_processed`);
        })), 1000);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intercept);


/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/intercept/proxy-click-interceptor.js?replace=%2F&search=http%3A%2F%2F0.0.0.0%2F":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var __resourceQuery = "?replace=%2F&search=http%3A%2F%2F0.0.0.0%2F";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/bud-client/lib/intercept/index.js");
/* eslint-disable no-console */
/* global __resourceQuery */

window.requestAnimationFrame(async function ready() {
    if (false)
        {}
    const params = new URLSearchParams(__resourceQuery);
    if (!params || !params.has(`search`) || !params.has(`replace`))
        return;
    const search = decodeURI(params.get(`search`));
    const replace = decodeURI(params.get(`replace`));
    return document.body
        ? (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(search, replace)
        : window.requestAnimationFrame(ready);
});


/***/ }),

/***/ "../node_modules/@roots/sage/lib/client/dom-ready.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _roots_bud_client_dom_ready__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _roots_bud_client_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/bud-client/lib/dom-ready.js");



/***/ }),

/***/ "./scripts/editor.js":
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _roots_sage_client_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@roots/sage/lib/client/dom-ready.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@wordpress/blocks");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@glidejs/glide/dist/glide.esm.js");




/**
 * Editor entrypoint
 */
(0,_roots_sage_client_dom_ready__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unregisterBlockStyle)('core/button', 'outline');
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockStyle)('core/button', {
    name: 'outline',
    label: 'Outline'
  });
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockStyle)('core/table', {
    name: 'laranja',
    label: 'Laranja'
  });
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockStyle)('core/table', {
    name: 'verde',
    label: 'Verde'
  });
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockStyle)('core/table', {
    name: 'azul',
    label: 'Azul'
  });
  new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.glide', {
    autoplay: 3000
  }).mount();
  wp.blocks.unregisterBlockStyle('core/button', 'default');
  wp.blocks.unregisterBlockStyle('core/button', 'outline');
  wp.blocks.unregisterBlockStyle('core/button', 'squared');
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
__webpack_module__.hot.accept(console.error);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./scripts/editor.js"), __webpack_exec__("./styles/editor.css"), __webpack_exec__("../node_modules/@roots/bud-client/lib/hot/index.js?indicator=true&name=sage&overlay=true&reload=true"), __webpack_exec__("../node_modules/@roots/bud-client/lib/intercept/proxy-click-interceptor.js?replace=%2F&search=http%3A%2F%2F0.0.0.0%2F"));
/******/ }
]);
//# sourceMappingURL=editor.js.map