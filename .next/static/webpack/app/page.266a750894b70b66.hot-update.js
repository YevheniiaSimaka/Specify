"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/LandingPage/GetStrartedButton.tsx":
/*!**********************************************************!*\
  !*** ./app/components/LandingPage/GetStrartedButton.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovingBorderDemo: function() { return /* binding */ MovingBorderDemo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _moving_border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moving-border */ \"(app-pages-browser)/./app/components/moving-border.tsx\");\n/* harmony import */ var _app_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/hooks/useLoginModal */ \"(app-pages-browser)/./app/hooks/useLoginModal.ts\");\n/* __next_internal_client_entry_do_not_use__ MovingBorderDemo auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction MovingBorderDemo() {\n    _s();\n    const loginModal = (0,_app_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_moving_border__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            borderRadius: \"10rem\",\n            onClick: loginModal.onOpen,\n            className: \"bg-neutral-900/75 text-white border-neutral-200 dark:border-slate-800 text-[1.5rem] transition hover:bg-neutral-800 \",\n            children: \"Start now\"\n        }, void 0, false, {\n            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/LandingPage/GetStrartedButton.tsx\",\n            lineNumber: 11,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/LandingPage/GetStrartedButton.tsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, this);\n}\n_s(MovingBorderDemo, \"x4AsbKlG0X6fBw+YbPDE2WjDo5M=\", false, function() {\n    return [\n        _app_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = MovingBorderDemo;\nvar _c;\n$RefreshReg$(_c, \"MovingBorderDemo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0xhbmRpbmdQYWdlL0dldFN0cmFydGVkQnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMwQjtBQUNnQjtBQUNZO0FBRS9DLFNBQVNHOztJQUNmLE1BQU1DLGFBQWFGLG9FQUFhQTtJQUVoQyxxQkFDQyw4REFBQ0c7a0JBQ0EsNEVBQUNKLGtEQUFNQTtZQUNOSyxjQUFhO1lBQ2JDLFNBQVNILFdBQVdJLE1BQU07WUFDMUJDLFdBQVU7c0JBQ1Y7Ozs7Ozs7Ozs7O0FBS0o7R0FkZ0JOOztRQUNJRCxnRUFBYUE7OztLQURqQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTGFuZGluZ1BhZ2UvR2V0U3RyYXJ0ZWRCdXR0b24udHN4P2YzYWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vbW92aW5nLWJvcmRlclwiO1xuaW1wb3J0IHVzZUxvZ2luTW9kYWwgZnJvbSBcIkAvYXBwL2hvb2tzL3VzZUxvZ2luTW9kYWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIE1vdmluZ0JvcmRlckRlbW8oKSB7XG5cdGNvbnN0IGxvZ2luTW9kYWwgPSB1c2VMb2dpbk1vZGFsKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRib3JkZXJSYWRpdXM9XCIxMHJlbVwiXG5cdFx0XHRcdG9uQ2xpY2s9e2xvZ2luTW9kYWwub25PcGVufVxuXHRcdFx0XHRjbGFzc05hbWU9XCJiZy1uZXV0cmFsLTkwMC83NSB0ZXh0LXdoaXRlIGJvcmRlci1uZXV0cmFsLTIwMCBkYXJrOmJvcmRlci1zbGF0ZS04MDAgdGV4dC1bMS41cmVtXSB0cmFuc2l0aW9uIGhvdmVyOmJnLW5ldXRyYWwtODAwIFwiXG5cdFx0XHQ+XG5cdFx0XHRcdFN0YXJ0IG5vd1xuXHRcdFx0PC9CdXR0b24+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJ1c2VMb2dpbk1vZGFsIiwiTW92aW5nQm9yZGVyRGVtbyIsImxvZ2luTW9kYWwiLCJkaXYiLCJib3JkZXJSYWRpdXMiLCJvbkNsaWNrIiwib25PcGVuIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/LandingPage/GetStrartedButton.tsx\n"));

/***/ })

});