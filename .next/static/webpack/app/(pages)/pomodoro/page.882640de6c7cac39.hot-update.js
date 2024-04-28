"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/pomodoro/page",{

/***/ "(app-pages-browser)/./app/(pages)/pomodoro/page.tsx":
/*!***************************************!*\
  !*** ./app/(pages)/pomodoro/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_AnimatedBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/AnimatedBackground */ \"(app-pages-browser)/./app/components/AnimatedBackground.tsx\");\n/* harmony import */ var _app_components_Pomodoro_PauseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Pomodoro/PauseButton */ \"(app-pages-browser)/./app/components/Pomodoro/PauseButton.tsx\");\n/* harmony import */ var _app_components_Pomodoro_PlayButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Pomodoro/PlayButton */ \"(app-pages-browser)/./app/components/Pomodoro/PlayButton.tsx\");\n/* harmony import */ var _app_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/contexts/SettingsContext */ \"(app-pages-browser)/./app/contexts/SettingsContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-circular-progressbar */ \"(app-pages-browser)/./node_modules/react-circular-progressbar/dist/index.esm.js\");\n/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ \"(app-pages-browser)/./node_modules/react-circular-progressbar/dist/styles.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const settingsInfo = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_app_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const [isPaused, setIsPaused] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"work\"); // work/break/null\n    const [secondsLeft, setSecondsLeft] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const secondsLeftRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(secondsLeft);\n    const isPausedRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(isPaused);\n    const modeRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(mode);\n    function tick() {\n        secondsLeftRef.current--;\n        setSecondsLeft(secondsLeftRef.current);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        function switchMode() {\n            const nextMode = modeRef.current === \"work\" ? \"break\" : \"work\";\n            const nextSeconds = (nextMode === \"work\" ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;\n            setMode(nextMode);\n            modeRef.current = nextMode;\n            setSecondsLeft(nextSeconds);\n            secondsLeftRef.current = nextSeconds;\n        }\n        secondsLeftRef.current = settingsInfo.workMinutes * 60;\n        setSecondsLeft(secondsLeftRef.current);\n        const interval = setInterval(()=>{\n            if (isPausedRef.current) {\n                return;\n            }\n            if (secondsLeftRef.current === 0) {\n                return switchMode();\n            }\n            tick();\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        settingsInfo\n    ]);\n    const totalSeconds = mode === \"work\" ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;\n    const percentage = Math.round(secondsLeft / totalSeconds * 100);\n    const minutes = Math.floor(secondsLeft / 60);\n    let seconds = secondsLeft % 60;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_AnimatedBackground__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                value: 300\n            }, void 0, false, {\n                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/(pages)/pomodoro/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen w-full flex items-center justify-center\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] xl:w-[35vw]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_6__.CircularProgressbarWithChildren, {\n                            className: \"bg-black/[15%] backdrop-blur-[10px] p-4 xl:p-8 rounded-full relative\",\n                            value: percentage,\n                            strokeWidth: 5,\n                            styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_6__.buildStyles)({\n                                textColor: \"#fff\",\n                                pathColor: \"rgb(225, 225, 225)\",\n                                trailColor: \"rgb(50, 50, 50, 0.6)\"\n                            }),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute top-[20%] w-full text-center text-[1.35rem] xl:text-[2rem] jura select-none text-white font-light\",\n                                    children: mode === \"work\" ? \"Work\" : \"Break\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/(pages)/pomodoro/page.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-[4rem] md:text-[4rem] lg:text-[3.5rem] xl:text-[6.5rem] font-semibold text-white/[90%] select-none jura\",\n                                    children: [\n                                        minutes,\n                                        \":\",\n                                        seconds < 10 ? \"0\" : null,\n                                        seconds\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/(pages)/pomodoro/page.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 7\n                                }, undefined),\n                                isPaused ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Pomodoro_PlayButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    onClick: ()=>{\n                                        setIsPaused(false);\n                                        isPausedRef.current = false;\n                                    },\n                                    className: \"select-none text-white text-xl transition-[1s] bg-neutral-800 hover:bg-neutral-700/[80%] backdrop-blur-md py-3 xl:py-3 px-6 xl:px-10 rounded-full overflow-hidden cursor-pointer flex items-center justify-center gap-3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/(pages)/pomodoro/page.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 8\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Pomodoro_PauseButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: ()=>{\n                                        setIsPaused(true);\n                                        isPausedRef.current = true;\n                                    },\n                                    className: \"select-none text-white text-xl transition-[1s] bg-neutral-800 hover:bg-neutral-700/[80%] backdrop-blur-md py-3 xl:py-3 px-6 xl:px-10 rounded-full overflow-hidden cursor-pointer flex items-center justify-center gap-3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/(pages)/pomodoro/page.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 8\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/(pages)/pomodoro/page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/(pages)/pomodoro/page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/(pages)/pomodoro/page.tsx\",\n                lineNumber: 74,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"qbDDvLhfSBzd+sXN+6DGwZsyaS4=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocGFnZXMpL3BvbW9kb3JvL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNxRTtBQUNMO0FBQ0Y7QUFFRDtBQUNVO0FBSW5DO0FBQ2dCO0FBRXBELE1BQU1XLE9BQU87O0lBQ1osTUFBTUMsZUFBZVAsaURBQVVBLENBQUNGLHFFQUFlQTtJQUUvQyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLFNBQVMsa0JBQWtCO0lBQzVELE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNVyxpQkFBaUJaLDZDQUFNQSxDQUFDVTtJQUM5QixNQUFNRyxjQUFjYiw2Q0FBTUEsQ0FBQ007SUFDM0IsTUFBTVEsVUFBVWQsNkNBQU1BLENBQUNRO0lBRXZCLFNBQVNPO1FBQ1JILGVBQWVJLE9BQU87UUFDdEJMLGVBQWVDLGVBQWVJLE9BQU87SUFDdEM7SUFFQWpCLGdEQUFTQSxDQUFDO1FBQ1QsU0FBU2tCO1lBQ1IsTUFBTUMsV0FBV0osUUFBUUUsT0FBTyxLQUFLLFNBQVMsVUFBVTtZQUN4RCxNQUFNRyxjQUNMLENBQUNELGFBQWEsU0FDWGIsYUFBYWUsV0FBVyxHQUN4QmYsYUFBYWdCLFlBQVksSUFBSTtZQUVqQ1osUUFBUVM7WUFDUkosUUFBUUUsT0FBTyxHQUFHRTtZQUVsQlAsZUFBZVE7WUFDZlAsZUFBZUksT0FBTyxHQUFHRztRQUMxQjtRQUVBUCxlQUFlSSxPQUFPLEdBQUdYLGFBQWFlLFdBQVcsR0FBRztRQUNwRFQsZUFBZUMsZUFBZUksT0FBTztRQUVyQyxNQUFNTSxXQUFXQyxZQUFZO1lBQzVCLElBQUlWLFlBQVlHLE9BQU8sRUFBRTtnQkFDeEI7WUFDRDtZQUNBLElBQUlKLGVBQWVJLE9BQU8sS0FBSyxHQUFHO2dCQUNqQyxPQUFPQztZQUNSO1lBRUFGO1FBQ0QsR0FBRztRQUVILE9BQU8sSUFBTVMsY0FBY0Y7SUFDNUIsR0FBRztRQUFDakI7S0FBYTtJQUVqQixNQUFNb0IsZUFDTGpCLFNBQVMsU0FDTkgsYUFBYWUsV0FBVyxHQUFHLEtBQzNCZixhQUFhZ0IsWUFBWSxHQUFHO0lBQ2hDLE1BQU1LLGFBQWFDLEtBQUtDLEtBQUssQ0FBQyxjQUFlSCxlQUFnQjtJQUU3RCxNQUFNSSxVQUFVRixLQUFLRyxLQUFLLENBQUNwQixjQUFjO0lBQ3pDLElBQUlxQixVQUFVckIsY0FBYztJQUU1QixxQkFDQzs7MEJBQ0MsOERBQUNqQiwwRUFBa0JBO2dCQUFDdUMsT0FBTzs7Ozs7OzBCQUMzQiw4REFBQ0M7Z0JBQUlDLFdBQVU7O29CQUVUO2tDQUNMLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDZCw0RUFBQ2hDLHVGQUErQkE7NEJBQy9CZ0MsV0FBVTs0QkFDVkYsT0FBT047NEJBQ1BTLGFBQWE7NEJBQ2JDLFFBQVFqQyx1RUFBV0EsQ0FBQztnQ0FDbkJrQyxXQUFXO2dDQUNYQyxXQUFXO2dDQUNYQyxZQUFZOzRCQUNiOzs4Q0FFQSw4REFBQ0M7b0NBQUtOLFdBQVU7OENBQ2QxQixTQUFTLFNBQVMsU0FBUzs7Ozs7OzhDQUU3Qiw4REFBQ2lDO29DQUFHUCxXQUFVOzt3Q0FDWkw7d0NBQVE7d0NBQUVFLFVBQVUsS0FBSyxNQUFNO3dDQUMvQkE7Ozs7Ozs7Z0NBRUR6Qix5QkFDQSw4REFBQ1gsMkVBQVVBO29DQUNWK0MsU0FBUzt3Q0FDUm5DLFlBQVk7d0NBQ1pNLFlBQVlHLE9BQU8sR0FBRztvQ0FDdkI7b0NBQ0FrQixXQUFVOzs7Ozs4REFHWCw4REFBQ3hDLDRFQUFXQTtvQ0FDWGdELFNBQVM7d0NBQ1JuQyxZQUFZO3dDQUNaTSxZQUFZRyxPQUFPLEdBQUc7b0NBQ3ZCO29DQUNBa0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFsQjtHQXZHTTlCO0tBQUFBO0FBeUdOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocGFnZXMpL3BvbW9kb3JvL3BhZ2UudHN4Pzk2OGQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgQW5pbWF0ZWRCYWNrZ3JvdW5kIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0FuaW1hdGVkQmFja2dyb3VuZFwiO1xuaW1wb3J0IFBhdXNlQnV0dG9uIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL1BvbW9kb3JvL1BhdXNlQnV0dG9uXCI7XG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Qb21vZG9yby9QbGF5QnV0dG9uXCI7XG5pbXBvcnQgU2V0U2V0dGluZ3NCdXR0b24gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvUG9tb2Rvcm8vU2V0U2V0dGluZ3NCdXR0b25cIjtcbmltcG9ydCBTZXR0aW5nc0NvbnRleHQgZnJvbSBcIkAvYXBwL2NvbnRleHRzL1NldHRpbmdzQ29udGV4dFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcblx0Q2lyY3VsYXJQcm9ncmVzc2JhcldpdGhDaGlsZHJlbixcblx0YnVpbGRTdHlsZXMsXG59IGZyb20gXCJyZWFjdC1jaXJjdWxhci1wcm9ncmVzc2JhclwiO1xuaW1wb3J0IFwicmVhY3QtY2lyY3VsYXItcHJvZ3Jlc3NiYXIvZGlzdC9zdHlsZXMuY3NzXCI7XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG5cdGNvbnN0IHNldHRpbmdzSW5mbyA9IHVzZUNvbnRleHQoU2V0dGluZ3NDb250ZXh0KTtcblxuXHRjb25zdCBbaXNQYXVzZWQsIHNldElzUGF1c2VkXSA9IHVzZVN0YXRlKHRydWUpO1xuXHRjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZShcIndvcmtcIik7IC8vIHdvcmsvYnJlYWsvbnVsbFxuXHRjb25zdCBbc2Vjb25kc0xlZnQsIHNldFNlY29uZHNMZWZ0XSA9IHVzZVN0YXRlKDApO1xuXG5cdGNvbnN0IHNlY29uZHNMZWZ0UmVmID0gdXNlUmVmKHNlY29uZHNMZWZ0KTtcblx0Y29uc3QgaXNQYXVzZWRSZWYgPSB1c2VSZWYoaXNQYXVzZWQpO1xuXHRjb25zdCBtb2RlUmVmID0gdXNlUmVmKG1vZGUpO1xuXG5cdGZ1bmN0aW9uIHRpY2soKSB7XG5cdFx0c2Vjb25kc0xlZnRSZWYuY3VycmVudC0tO1xuXHRcdHNldFNlY29uZHNMZWZ0KHNlY29uZHNMZWZ0UmVmLmN1cnJlbnQpO1xuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmdW5jdGlvbiBzd2l0Y2hNb2RlKCkge1xuXHRcdFx0Y29uc3QgbmV4dE1vZGUgPSBtb2RlUmVmLmN1cnJlbnQgPT09IFwid29ya1wiID8gXCJicmVha1wiIDogXCJ3b3JrXCI7XG5cdFx0XHRjb25zdCBuZXh0U2Vjb25kcyA9XG5cdFx0XHRcdChuZXh0TW9kZSA9PT0gXCJ3b3JrXCJcblx0XHRcdFx0XHQ/IHNldHRpbmdzSW5mby53b3JrTWludXRlc1xuXHRcdFx0XHRcdDogc2V0dGluZ3NJbmZvLmJyZWFrTWludXRlcykgKiA2MDtcblxuXHRcdFx0c2V0TW9kZShuZXh0TW9kZSk7XG5cdFx0XHRtb2RlUmVmLmN1cnJlbnQgPSBuZXh0TW9kZTtcblxuXHRcdFx0c2V0U2Vjb25kc0xlZnQobmV4dFNlY29uZHMpO1xuXHRcdFx0c2Vjb25kc0xlZnRSZWYuY3VycmVudCA9IG5leHRTZWNvbmRzO1xuXHRcdH1cblxuXHRcdHNlY29uZHNMZWZ0UmVmLmN1cnJlbnQgPSBzZXR0aW5nc0luZm8ud29ya01pbnV0ZXMgKiA2MDtcblx0XHRzZXRTZWNvbmRzTGVmdChzZWNvbmRzTGVmdFJlZi5jdXJyZW50KTtcblxuXHRcdGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYgKGlzUGF1c2VkUmVmLmN1cnJlbnQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlY29uZHNMZWZ0UmVmLmN1cnJlbnQgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHN3aXRjaE1vZGUoKTtcblx0XHRcdH1cblxuXHRcdFx0dGljaygpO1xuXHRcdH0sIDEwMDApO1xuXG5cdFx0cmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHR9LCBbc2V0dGluZ3NJbmZvXSk7XG5cblx0Y29uc3QgdG90YWxTZWNvbmRzID1cblx0XHRtb2RlID09PSBcIndvcmtcIlxuXHRcdFx0PyBzZXR0aW5nc0luZm8ud29ya01pbnV0ZXMgKiA2MFxuXHRcdFx0OiBzZXR0aW5nc0luZm8uYnJlYWtNaW51dGVzICogNjA7XG5cdGNvbnN0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKChzZWNvbmRzTGVmdCAvIHRvdGFsU2Vjb25kcykgKiAxMDApO1xuXG5cdGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHNMZWZ0IC8gNjApO1xuXHRsZXQgc2Vjb25kcyA9IHNlY29uZHNMZWZ0ICUgNjA7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEFuaW1hdGVkQmFja2dyb3VuZCB2YWx1ZT17MzAwfSAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG5cdFx0XHRcdHsvKiBcdFx0XHQ8U2V0U2V0dGluZ3NCdXR0b24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLVsxcmVtXSBsZWZ0LVsxcmVtXSBtZDpsZWZ0LVsycmVtXSBzZWxlY3Qtbm9uZSB0cmFuc2l0aW9uLVsxc10gYmctbmV1dHJhbC05MDAvWzYwJV0gaG92ZXI6YmctbmV1dHJhbC05MDAvWzgwJV0gYmFja2Ryb3AtYmx1ci1tZCBwLTQgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgLz5cblx0XHRcdFx0ICovfXtcIiBcIn1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LVs5MHZ3XSBzbTp3LVs2MHZ3XSBtZDp3LVs1MHZ3XSBsZzp3LVszMHZ3XSB4bDp3LVszNXZ3XVwiPlxuXHRcdFx0XHRcdDxDaXJjdWxhclByb2dyZXNzYmFyV2l0aENoaWxkcmVuXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJiZy1ibGFjay9bMTUlXSBiYWNrZHJvcC1ibHVyLVsxMHB4XSBwLTQgeGw6cC04IHJvdW5kZWQtZnVsbCByZWxhdGl2ZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17cGVyY2VudGFnZX1cblx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPXs1fVxuXHRcdFx0XHRcdFx0c3R5bGVzPXtidWlsZFN0eWxlcyh7XG5cdFx0XHRcdFx0XHRcdHRleHRDb2xvcjogXCIjZmZmXCIsXG5cdFx0XHRcdFx0XHRcdHBhdGhDb2xvcjogXCJyZ2IoMjI1LCAyMjUsIDIyNSlcIixcblx0XHRcdFx0XHRcdFx0dHJhaWxDb2xvcjogXCJyZ2IoNTAsIDUwLCA1MCwgMC42KVwiLFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLVsyMCVdIHctZnVsbCB0ZXh0LWNlbnRlciB0ZXh0LVsxLjM1cmVtXSB4bDp0ZXh0LVsycmVtXSBqdXJhIHNlbGVjdC1ub25lIHRleHQtd2hpdGUgZm9udC1saWdodFwiPlxuXHRcdFx0XHRcdFx0XHR7bW9kZSA9PT0gXCJ3b3JrXCIgPyBcIldvcmtcIiA6IFwiQnJlYWtcIn1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LVs0cmVtXSBtZDp0ZXh0LVs0cmVtXSBsZzp0ZXh0LVszLjVyZW1dIHhsOnRleHQtWzYuNXJlbV0gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlL1s5MCVdIHNlbGVjdC1ub25lIGp1cmFcIj5cblx0XHRcdFx0XHRcdFx0e21pbnV0ZXN9OntzZWNvbmRzIDwgMTAgPyBcIjBcIiA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdHtzZWNvbmRzfVxuXHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdHtpc1BhdXNlZCA/IChcblx0XHRcdFx0XHRcdFx0PFBsYXlCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRJc1BhdXNlZChmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRpc1BhdXNlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzZWxlY3Qtbm9uZSB0ZXh0LXdoaXRlIHRleHQteGwgdHJhbnNpdGlvbi1bMXNdIGJnLW5ldXRyYWwtODAwIGhvdmVyOmJnLW5ldXRyYWwtNzAwL1s4MCVdIGJhY2tkcm9wLWJsdXItbWQgcHktMyB4bDpweS0zIHB4LTYgeGw6cHgtMTAgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlbiBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtM1wiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8UGF1c2VCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRJc1BhdXNlZCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlzUGF1c2VkUmVmLmN1cnJlbnQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2VsZWN0LW5vbmUgdGV4dC13aGl0ZSB0ZXh0LXhsIHRyYW5zaXRpb24tWzFzXSBiZy1uZXV0cmFsLTgwMCBob3ZlcjpiZy1uZXV0cmFsLTcwMC9bODAlXSBiYWNrZHJvcC1ibHVyLW1kIHB5LTMgeGw6cHktMyBweC02IHhsOnB4LTEwIHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW4gY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTNcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L0NpcmN1bGFyUHJvZ3Jlc3NiYXJXaXRoQ2hpbGRyZW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbIkFuaW1hdGVkQmFja2dyb3VuZCIsIlBhdXNlQnV0dG9uIiwiUGxheUJ1dHRvbiIsIlNldHRpbmdzQ29udGV4dCIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2lyY3VsYXJQcm9ncmVzc2JhcldpdGhDaGlsZHJlbiIsImJ1aWxkU3R5bGVzIiwiUGFnZSIsInNldHRpbmdzSW5mbyIsImlzUGF1c2VkIiwic2V0SXNQYXVzZWQiLCJtb2RlIiwic2V0TW9kZSIsInNlY29uZHNMZWZ0Iiwic2V0U2Vjb25kc0xlZnQiLCJzZWNvbmRzTGVmdFJlZiIsImlzUGF1c2VkUmVmIiwibW9kZVJlZiIsInRpY2siLCJjdXJyZW50Iiwic3dpdGNoTW9kZSIsIm5leHRNb2RlIiwibmV4dFNlY29uZHMiLCJ3b3JrTWludXRlcyIsImJyZWFrTWludXRlcyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidG90YWxTZWNvbmRzIiwicGVyY2VudGFnZSIsIk1hdGgiLCJyb3VuZCIsIm1pbnV0ZXMiLCJmbG9vciIsInNlY29uZHMiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsInN0cm9rZVdpZHRoIiwic3R5bGVzIiwidGV4dENvbG9yIiwicGF0aENvbG9yIiwidHJhaWxDb2xvciIsInNwYW4iLCJoMSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(pages)/pomodoro/page.tsx\n"));

/***/ })

});