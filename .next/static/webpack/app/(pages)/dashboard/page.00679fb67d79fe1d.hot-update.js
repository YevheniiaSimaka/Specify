"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/dashboard/page",{

/***/ "(app-pages-browser)/./app/components/Dashboard/NewTask.tsx":
/*!**********************************************!*\
  !*** ./app/components/Dashboard/NewTask.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovingBorderDemo: function() { return /* binding */ MovingBorderDemo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/hooks/useLoginModal */ \"(app-pages-browser)/./app/hooks/useLoginModal.ts\");\n/* harmony import */ var _moving_border__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moving-border */ \"(app-pages-browser)/./app/components/moving-border.tsx\");\n/* __next_internal_client_entry_do_not_use__ MovingBorderDemo auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction MovingBorderDemo() {\n    _s();\n    const loginModal = (0,_app_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"translate-y-[-3rem]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_moving_border__WEBPACK_IMPORTED_MODULE_3__.Button, {\n            borderRadius: \"10rem\",\n            onClick: loginModal.onOpen,\n            className: \"bg-neutral-900 text-white border-neutral-200 dark:border-slate-800 text-[1.5rem] transition hover:bg-neutral-800\",\n            children: \"New task\"\n        }, void 0, false, {\n            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/NewTask.tsx\",\n            lineNumber: 11,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/NewTask.tsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, this);\n}\n_s(MovingBorderDemo, \"x4AsbKlG0X6fBw+YbPDE2WjDo5M=\", false, function() {\n    return [\n        _app_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = MovingBorderDemo;\nvar _c;\n$RefreshReg$(_c, \"MovingBorderDemo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9OZXdUYXNrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMwQjtBQUM0QjtBQUNaO0FBRW5DLFNBQVNHOztJQUNmLE1BQU1DLGFBQWFILG9FQUFhQTtJQUVoQyxxQkFDQyw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDZCw0RUFBQ0osa0RBQU1BO1lBQ05LLGNBQWE7WUFDYkMsU0FBU0osV0FBV0ssTUFBTTtZQUMxQkgsV0FBVTtzQkFDVjs7Ozs7Ozs7Ozs7QUFLSjtHQWRnQkg7O1FBQ0lGLGdFQUFhQTs7O0tBRGpCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvTmV3VGFzay50c3g/MjhkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VMb2dpbk1vZGFsIGZyb20gXCJAL2FwcC9ob29rcy91c2VMb2dpbk1vZGFsXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vbW92aW5nLWJvcmRlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gTW92aW5nQm9yZGVyRGVtbygpIHtcblx0Y29uc3QgbG9naW5Nb2RhbCA9IHVzZUxvZ2luTW9kYWwoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidHJhbnNsYXRlLXktWy0zcmVtXVwiPlxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRib3JkZXJSYWRpdXM9XCIxMHJlbVwiXG5cdFx0XHRcdG9uQ2xpY2s9e2xvZ2luTW9kYWwub25PcGVufVxuXHRcdFx0XHRjbGFzc05hbWU9XCJiZy1uZXV0cmFsLTkwMCB0ZXh0LXdoaXRlIGJvcmRlci1uZXV0cmFsLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS04MDAgdGV4dC1bMS41cmVtXSB0cmFuc2l0aW9uIGhvdmVyOmJnLW5ldXRyYWwtODAwXCJcblx0XHRcdD5cblx0XHRcdFx0TmV3IHRhc2tcblx0XHRcdDwvQnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTG9naW5Nb2RhbCIsIkJ1dHRvbiIsIk1vdmluZ0JvcmRlckRlbW8iLCJsb2dpbk1vZGFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiYm9yZGVyUmFkaXVzIiwib25DbGljayIsIm9uT3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Dashboard/NewTask.tsx\n"));

/***/ })

});