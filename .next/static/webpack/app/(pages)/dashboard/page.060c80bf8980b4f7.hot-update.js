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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovingBorderDemo: function() { return /* binding */ MovingBorderDemo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _moving_border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moving-border */ \"(app-pages-browser)/./app/components/moving-border.tsx\");\n/* harmony import */ var _app_hooks_useTaskModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/hooks/useTaskModal */ \"(app-pages-browser)/./app/hooks/useTaskModal.ts\");\n/* __next_internal_client_entry_do_not_use__ MovingBorderDemo auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction MovingBorderDemo() {\n    _s();\n    const taskModal = (0,_app_hooks_useTaskModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"translate-y-[-3rem]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_moving_border__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            borderRadius: \"10rem\",\n            onClick: taskModal.onOpen,\n            className: \"bg-neutral-900 text-white border-neutral-200 dark:border-slate-800 text-[1.5rem] transition hover:bg-neutral-800\",\n            children: \"New task\"\n        }, void 0, false, {\n            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/NewTask.tsx\",\n            lineNumber: 12,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/NewTask.tsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, this);\n}\n_s(MovingBorderDemo, \"zPELN3c0u1bbDvEmxY4uZ1RolmQ=\", false, function() {\n    return [\n        _app_hooks_useTaskModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = MovingBorderDemo;\nvar _c;\n$RefreshReg$(_c, \"MovingBorderDemo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9OZXdUYXNrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMwQjtBQUVnQjtBQUNVO0FBRTdDLFNBQVNHOztJQUNmLE1BQU1DLFlBQVlGLG1FQUFZQTtJQUU5QixxQkFDQyw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDZCw0RUFBQ0wsa0RBQU1BO1lBQ05NLGNBQWE7WUFDYkMsU0FBU0osVUFBVUssTUFBTTtZQUN6QkgsV0FBVTtzQkFDVjs7Ozs7Ozs7Ozs7QUFLSjtHQWRnQkg7O1FBQ0dELCtEQUFZQTs7O0tBRGZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9OZXdUYXNrLnRzeD8yOGRkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUxvZ2luTW9kYWwgZnJvbSBcIkAvYXBwL2hvb2tzL3VzZUxvZ2luTW9kYWxcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9tb3ZpbmctYm9yZGVyXCI7XG5pbXBvcnQgdXNlVGFza01vZGFsIGZyb20gXCJAL2FwcC9ob29rcy91c2VUYXNrTW9kYWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIE1vdmluZ0JvcmRlckRlbW8oKSB7XG5cdGNvbnN0IHRhc2tNb2RhbCA9IHVzZVRhc2tNb2RhbCgpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0cmFuc2xhdGUteS1bLTNyZW1dXCI+XG5cdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdGJvcmRlclJhZGl1cz1cIjEwcmVtXCJcblx0XHRcdFx0b25DbGljaz17dGFza01vZGFsLm9uT3Blbn1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmctbmV1dHJhbC05MDAgdGV4dC13aGl0ZSBib3JkZXItbmV1dHJhbC0yMDAgZGFyazpib3JkZXItc2xhdGUtODAwIHRleHQtWzEuNXJlbV0gdHJhbnNpdGlvbiBob3ZlcjpiZy1uZXV0cmFsLTgwMFwiXG5cdFx0XHQ+XG5cdFx0XHRcdE5ldyB0YXNrXG5cdFx0XHQ8L0J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsInVzZVRhc2tNb2RhbCIsIk1vdmluZ0JvcmRlckRlbW8iLCJ0YXNrTW9kYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJib3JkZXJSYWRpdXMiLCJvbkNsaWNrIiwib25PcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Dashboard/NewTask.tsx\n"));

/***/ })

});