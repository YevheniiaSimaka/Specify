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

/***/ "(app-pages-browser)/./app/components/Dashboard/Dashboard.tsx":
/*!************************************************!*\
  !*** ./app/components/Dashboard/Dashboard.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_hooks_useTaskModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/hooks/useTaskModal */ \"(app-pages-browser)/./app/hooks/useTaskModal.ts\");\n/* harmony import */ var _AnimatedBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AnimatedBackground */ \"(app-pages-browser)/./app/components/AnimatedBackground.tsx\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Item */ \"(app-pages-browser)/./app/components/Dashboard/Item.tsx\");\n/* harmony import */ var _NewTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewTask */ \"(app-pages-browser)/./app/components/Dashboard/NewTask.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Dashboard = (param)=>{\n    let { tasks } = param;\n    _s();\n    const taskModal = (0,_app_hooks_useTaskModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    if (tasks.length == 0) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedBackground__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: 200\n            }, void 0, false, {\n                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/Dashboard.tsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen flex items-center justify-center flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-white text-[5rem] jura translate-y-[-5rem]\",\n                        children: \"No tasks yet.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/Dashboard.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewTask__WEBPACK_IMPORTED_MODULE_4__.MovingBorderDemo, {}, void 0, false, {\n                        fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/Dashboard.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/Dashboard.tsx\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen pb-20 xl:pb-10 z-[5]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[95vw] xl:w-[90vw] mx-auto p-4 xl:p-8 rounded-xl bg-black shadow-xl mt-28 z-[5]\",\n            children: tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            task: task,\n                            isLast: tasks.length == i\n                        }, task.id, false, {\n                            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/Dashboard.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: i\n                        }, void 0, false, {\n                            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/Dashboard.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true))\n        }, void 0, false, {\n            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/Dashboard.tsx\",\n            lineNumber: 26,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/Dashboard.tsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Dashboard, \"zPELN3c0u1bbDvEmxY4uZ1RolmQ=\", false, function() {\n    return [\n        _app_hooks_useTaskModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ29EO0FBQ0c7QUFDN0I7QUFFbUI7QUFFN0MsTUFBTUksWUFBWTtRQUFDLEVBQUVDLEtBQUssRUFBa0I7O0lBQzNDLE1BQU1DLFlBQVlOLG1FQUFZQTtJQUU5QixJQUFJSyxNQUFNRSxNQUFNLElBQUksR0FDbkIscUJBQ0M7OzBCQUNDLDhEQUFDTiwyREFBa0JBO2dCQUFDTyxPQUFPOzs7Ozs7MEJBQzNCLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2QsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFrRDs7Ozs7O2tDQUdoRSw4REFBQ1Asc0RBQWdCQTs7Ozs7Ozs7Ozs7OztJQUtyQixxQkFDQyw4REFBQ007UUFBSUMsV0FBVTtrQkFDZCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYkwsTUFBTU8sR0FBRyxDQUFDLENBQUNDLHFCQUNYOztzQ0FDQyw4REFBQ1gsNkNBQUlBOzRCQUFDVyxNQUFNQTs0QkFBb0JDLFFBQVFULE1BQU1FLE1BQU0sSUFBSVE7MkJBQWpDRixLQUFLRyxFQUFFOzs7OztzQ0FDOUIsOERBQUNDO3NDQUFHRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVY7R0E1Qk1YOztRQUNhSiwrREFBWUE7OztLQUR6Qkk7QUE4Qk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZC50c3g/NmZhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB1c2VUYXNrTW9kYWwgZnJvbSBcIkAvYXBwL2hvb2tzL3VzZVRhc2tNb2RhbFwiO1xuaW1wb3J0IEFuaW1hdGVkQmFja2dyb3VuZCBmcm9tIFwiLi4vQW5pbWF0ZWRCYWNrZ3JvdW5kXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5pbXBvcnQgZ2V0VGFza3MgZnJvbSBcIkAvYXBwL2FjdGlvbnMvZ2V0VGFza3NcIjtcbmltcG9ydCB7IE1vdmluZ0JvcmRlckRlbW8gfSBmcm9tIFwiLi9OZXdUYXNrXCI7XG5cbmNvbnN0IERhc2hib2FyZCA9ICh7IHRhc2tzIH06IHsgdGFza3M6IGFueSB9KSA9PiB7XG5cdGNvbnN0IHRhc2tNb2RhbCA9IHVzZVRhc2tNb2RhbCgpO1xuXG5cdGlmICh0YXNrcy5sZW5ndGggPT0gMClcblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PEFuaW1hdGVkQmFja2dyb3VuZCB2YWx1ZT17MjAwfSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbFwiPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtWzVyZW1dIGp1cmEgdHJhbnNsYXRlLXktWy01cmVtXVwiPlxuXHRcdFx0XHRcdFx0Tm8gdGFza3MgeWV0LlxuXHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdFx0PE1vdmluZ0JvcmRlckRlbW8gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcGItMjAgeGw6cGItMTAgei1bNV1cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1bOTV2d10geGw6dy1bOTB2d10gbXgtYXV0byBwLTQgeGw6cC04IHJvdW5kZWQteGwgYmctYmxhY2sgc2hhZG93LXhsIG10LTI4IHotWzVdXCI+XG5cdFx0XHRcdHt0YXNrcy5tYXAoKHRhc2s6IGFueSkgPT4gKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8SXRlbSB0YXNrPXt0YXNrfSBrZXk9e3Rhc2suaWR9IGlzTGFzdD17dGFza3MubGVuZ3RoID09IGl9IC8+XG5cdFx0XHRcdFx0XHQ8cD57aX08L3A+XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iXSwibmFtZXMiOlsidXNlVGFza01vZGFsIiwiQW5pbWF0ZWRCYWNrZ3JvdW5kIiwiSXRlbSIsIk1vdmluZ0JvcmRlckRlbW8iLCJEYXNoYm9hcmQiLCJ0YXNrcyIsInRhc2tNb2RhbCIsImxlbmd0aCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJ0YXNrIiwiaXNMYXN0IiwiaSIsImlkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Dashboard/Dashboard.tsx\n"));

/***/ })

});