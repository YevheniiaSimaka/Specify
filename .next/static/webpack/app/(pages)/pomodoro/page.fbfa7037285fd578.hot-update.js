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

/***/ "(app-pages-browser)/./app/components/Timer.tsx":
/*!**********************************!*\
  !*** ./app/components/Timer.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_Pomodoro_PauseButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/Pomodoro/PauseButton */ \"(app-pages-browser)/./app/components/Pomodoro/PauseButton.tsx\");\n/* harmony import */ var _app_components_Pomodoro_PlayButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Pomodoro/PlayButton */ \"(app-pages-browser)/./app/components/Pomodoro/PlayButton.tsx\");\n/* harmony import */ var _app_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/SettingsContext */ \"(app-pages-browser)/./app/contexts/SettingsContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-circular-progressbar */ \"(app-pages-browser)/./node_modules/react-circular-progressbar/dist/index.esm.js\");\n/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ \"(app-pages-browser)/./node_modules/react-circular-progressbar/dist/styles.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Timer = ()=>{\n    _s();\n    const settingsInfo = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const [isPaused, setIsPaused] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"work\"); // work/break/null\n    const [secondsLeft, setSecondsLeft] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const secondsLeftRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(secondsLeft);\n    const isPausedRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(isPaused);\n    const modeRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(mode);\n    function tick() {\n        secondsLeftRef.current--;\n        setSecondsLeft(secondsLeftRef.current);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        function switchMode() {\n            const nextMode = modeRef.current === \"work\" ? \"break\" : \"work\";\n            const nextSeconds = (nextMode === \"work\" ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;\n            setMode(nextMode);\n            modeRef.current = nextMode;\n            setSecondsLeft(nextSeconds);\n            secondsLeftRef.current = nextSeconds;\n        }\n        secondsLeftRef.current = settingsInfo.workMinutes * 60;\n        setSecondsLeft(secondsLeftRef.current);\n        const interval = setInterval(()=>{\n            if (isPausedRef.current) {\n                return;\n            }\n            if (secondsLeftRef.current === 0) {\n                return switchMode();\n            }\n            tick();\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        settingsInfo\n    ]);\n    const totalSeconds = mode === \"work\" ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;\n    const percentage = Math.round(secondsLeft / totalSeconds * 100);\n    const minutes = Math.floor(secondsLeft / 60);\n    let seconds = secondsLeft % 60;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-screen w-full flex items-center justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] xl:w-[35vw]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5__.CircularProgressbarWithChildren, {\n                    className: \"bg-black/[15%] backdrop-blur-[10px] p-4 xl:p-8 rounded-full relative\",\n                    value: percentage,\n                    strokeWidth: 5,\n                    styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5__.buildStyles)({\n                        textColor: \"#fff\",\n                        pathColor: \"rgb(225, 225, 225)\",\n                        trailColor: \"rgb(50, 50, 50, 0.6)\"\n                    }),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"absolute top-[20%] w-full text-center text-[1.35rem] xl:text-[2rem] jura select-none text-white font-light\",\n                            children: mode === \"work\" ? \"Work\" : \"Break\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Timer.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-[4rem] md:text-[4rem] lg:text-[3.5rem] xl:text-[6.5rem] font-semibold text-white/[90%] select-none jura\",\n                            children: [\n                                minutes,\n                                \":\",\n                                seconds < 10 ? \"0\" : null,\n                                seconds\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Timer.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 7\n                        }, undefined),\n                        isPaused ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Pomodoro_PlayButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            onClick: ()=>{\n                                setIsPaused(false);\n                                isPausedRef.current = false;\n                            },\n                            className: \"select-none text-white text-xl transition-[1s] bg-neutral-800 hover:bg-neutral-700/[80%] backdrop-blur-md py-3 xl:py-3 px-6 xl:px-10 rounded-full overflow-hidden cursor-pointer flex items-center justify-center gap-3\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Timer.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 8\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Pomodoro_PauseButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            onClick: ()=>{\n                                setIsPaused(true);\n                                isPausedRef.current = true;\n                            },\n                            className: \"select-none text-white text-xl transition-[1s] bg-neutral-800 hover:bg-neutral-700/[80%] backdrop-blur-md py-3 xl:py-3 px-6 xl:px-10 rounded-full overflow-hidden cursor-pointer flex items-center justify-center gap-3\"\n                        }, void 0, false, {\n                            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Timer.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 8\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Timer.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Timer.tsx\",\n                lineNumber: 74,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Timer.tsx\",\n            lineNumber: 73,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(Timer, \"qbDDvLhfSBzd+sXN+6DGwZsyaS4=\");\n_c = Timer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\nvar _c;\n$RefreshReg$(_c, \"Timer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RpbWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVnRTtBQUNGO0FBRUQ7QUFDVTtBQUluQztBQUNnQjtBQUVwRCxNQUFNVSxRQUFROztJQUNiLE1BQU1DLGVBQWVQLGlEQUFVQSxDQUFDRixxRUFBZUE7SUFFL0MsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQyxTQUFTLGtCQUFrQjtJQUM1RCxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVcsaUJBQWlCWiw2Q0FBTUEsQ0FBQ1U7SUFDOUIsTUFBTUcsY0FBY2IsNkNBQU1BLENBQUNNO0lBQzNCLE1BQU1RLFVBQVVkLDZDQUFNQSxDQUFDUTtJQUV2QixTQUFTTztRQUNSSCxlQUFlSSxPQUFPO1FBQ3RCTCxlQUFlQyxlQUFlSSxPQUFPO0lBQ3RDO0lBRUFqQixnREFBU0EsQ0FBQztRQUNULFNBQVNrQjtZQUNSLE1BQU1DLFdBQVdKLFFBQVFFLE9BQU8sS0FBSyxTQUFTLFVBQVU7WUFDeEQsTUFBTUcsY0FDTCxDQUFDRCxhQUFhLFNBQ1hiLGFBQWFlLFdBQVcsR0FDeEJmLGFBQWFnQixZQUFZLElBQUk7WUFFakNaLFFBQVFTO1lBQ1JKLFFBQVFFLE9BQU8sR0FBR0U7WUFFbEJQLGVBQWVRO1lBQ2ZQLGVBQWVJLE9BQU8sR0FBR0c7UUFDMUI7UUFFQVAsZUFBZUksT0FBTyxHQUFHWCxhQUFhZSxXQUFXLEdBQUc7UUFDcERULGVBQWVDLGVBQWVJLE9BQU87UUFFckMsTUFBTU0sV0FBV0MsWUFBWTtZQUM1QixJQUFJVixZQUFZRyxPQUFPLEVBQUU7Z0JBQ3hCO1lBQ0Q7WUFDQSxJQUFJSixlQUFlSSxPQUFPLEtBQUssR0FBRztnQkFDakMsT0FBT0M7WUFDUjtZQUVBRjtRQUNELEdBQUc7UUFFSCxPQUFPLElBQU1TLGNBQWNGO0lBQzVCLEdBQUc7UUFBQ2pCO0tBQWE7SUFFakIsTUFBTW9CLGVBQ0xqQixTQUFTLFNBQ05ILGFBQWFlLFdBQVcsR0FBRyxLQUMzQmYsYUFBYWdCLFlBQVksR0FBRztJQUNoQyxNQUFNSyxhQUFhQyxLQUFLQyxLQUFLLENBQUMsY0FBZUgsZUFBZ0I7SUFFN0QsTUFBTUksVUFBVUYsS0FBS0csS0FBSyxDQUFDcEIsY0FBYztJQUN6QyxJQUFJcUIsVUFBVXJCLGNBQWM7SUFFNUIscUJBQ0M7a0JBQ0MsNEVBQUNzQjtZQUFJQyxXQUFVO3NCQUNkLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDZCw0RUFBQy9CLHVGQUErQkE7b0JBQy9CK0IsV0FBVTtvQkFDVkMsT0FBT1I7b0JBQ1BTLGFBQWE7b0JBQ2JDLFFBQVFqQyx1RUFBV0EsQ0FBQzt3QkFDbkJrQyxXQUFXO3dCQUNYQyxXQUFXO3dCQUNYQyxZQUFZO29CQUNiOztzQ0FFQSw4REFBQ0M7NEJBQUtQLFdBQVU7c0NBQ2R6QixTQUFTLFNBQVMsU0FBUzs7Ozs7O3NDQUU3Qiw4REFBQ2lDOzRCQUFHUixXQUFVOztnQ0FDWko7Z0NBQVE7Z0NBQUVFLFVBQVUsS0FBSyxNQUFNO2dDQUMvQkE7Ozs7Ozs7d0JBRUR6Qix5QkFDQSw4REFBQ1gsMkVBQVVBOzRCQUNWK0MsU0FBUztnQ0FDUm5DLFlBQVk7Z0NBQ1pNLFlBQVlHLE9BQU8sR0FBRzs0QkFDdkI7NEJBQ0FpQixXQUFVOzs7OztzREFHWCw4REFBQ3ZDLDRFQUFXQTs0QkFDWGdELFNBQVM7Z0NBQ1JuQyxZQUFZO2dDQUNaTSxZQUFZRyxPQUFPLEdBQUc7NEJBQ3ZCOzRCQUNBaUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbEI7R0FwR003QjtLQUFBQTtBQXNHTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9UaW1lci50c3g/NmVkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBBbmltYXRlZEJhY2tncm91bmQgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvQW5pbWF0ZWRCYWNrZ3JvdW5kXCI7XG5pbXBvcnQgUGF1c2VCdXR0b24gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvUG9tb2Rvcm8vUGF1c2VCdXR0b25cIjtcbmltcG9ydCBQbGF5QnV0dG9uIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL1BvbW9kb3JvL1BsYXlCdXR0b25cIjtcbmltcG9ydCBTZXRTZXR0aW5nc0J1dHRvbiBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Qb21vZG9yby9TZXRTZXR0aW5nc0J1dHRvblwiO1xuaW1wb3J0IFNldHRpbmdzQ29udGV4dCBmcm9tIFwiQC9hcHAvY29udGV4dHMvU2V0dGluZ3NDb250ZXh0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHRDaXJjdWxhclByb2dyZXNzYmFyV2l0aENoaWxkcmVuLFxuXHRidWlsZFN0eWxlcyxcbn0gZnJvbSBcInJlYWN0LWNpcmN1bGFyLXByb2dyZXNzYmFyXCI7XG5pbXBvcnQgXCJyZWFjdC1jaXJjdWxhci1wcm9ncmVzc2Jhci9kaXN0L3N0eWxlcy5jc3NcIjtcblxuY29uc3QgVGltZXIgPSAoKSA9PiB7XG5cdGNvbnN0IHNldHRpbmdzSW5mbyA9IHVzZUNvbnRleHQoU2V0dGluZ3NDb250ZXh0KTtcblxuXHRjb25zdCBbaXNQYXVzZWQsIHNldElzUGF1c2VkXSA9IHVzZVN0YXRlKHRydWUpO1xuXHRjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZShcIndvcmtcIik7IC8vIHdvcmsvYnJlYWsvbnVsbFxuXHRjb25zdCBbc2Vjb25kc0xlZnQsIHNldFNlY29uZHNMZWZ0XSA9IHVzZVN0YXRlKDApO1xuXG5cdGNvbnN0IHNlY29uZHNMZWZ0UmVmID0gdXNlUmVmKHNlY29uZHNMZWZ0KTtcblx0Y29uc3QgaXNQYXVzZWRSZWYgPSB1c2VSZWYoaXNQYXVzZWQpO1xuXHRjb25zdCBtb2RlUmVmID0gdXNlUmVmKG1vZGUpO1xuXG5cdGZ1bmN0aW9uIHRpY2soKSB7XG5cdFx0c2Vjb25kc0xlZnRSZWYuY3VycmVudC0tO1xuXHRcdHNldFNlY29uZHNMZWZ0KHNlY29uZHNMZWZ0UmVmLmN1cnJlbnQpO1xuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmdW5jdGlvbiBzd2l0Y2hNb2RlKCkge1xuXHRcdFx0Y29uc3QgbmV4dE1vZGUgPSBtb2RlUmVmLmN1cnJlbnQgPT09IFwid29ya1wiID8gXCJicmVha1wiIDogXCJ3b3JrXCI7XG5cdFx0XHRjb25zdCBuZXh0U2Vjb25kcyA9XG5cdFx0XHRcdChuZXh0TW9kZSA9PT0gXCJ3b3JrXCJcblx0XHRcdFx0XHQ/IHNldHRpbmdzSW5mby53b3JrTWludXRlc1xuXHRcdFx0XHRcdDogc2V0dGluZ3NJbmZvLmJyZWFrTWludXRlcykgKiA2MDtcblxuXHRcdFx0c2V0TW9kZShuZXh0TW9kZSk7XG5cdFx0XHRtb2RlUmVmLmN1cnJlbnQgPSBuZXh0TW9kZTtcblxuXHRcdFx0c2V0U2Vjb25kc0xlZnQobmV4dFNlY29uZHMpO1xuXHRcdFx0c2Vjb25kc0xlZnRSZWYuY3VycmVudCA9IG5leHRTZWNvbmRzO1xuXHRcdH1cblxuXHRcdHNlY29uZHNMZWZ0UmVmLmN1cnJlbnQgPSBzZXR0aW5nc0luZm8ud29ya01pbnV0ZXMgKiA2MDtcblx0XHRzZXRTZWNvbmRzTGVmdChzZWNvbmRzTGVmdFJlZi5jdXJyZW50KTtcblxuXHRcdGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYgKGlzUGF1c2VkUmVmLmN1cnJlbnQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlY29uZHNMZWZ0UmVmLmN1cnJlbnQgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHN3aXRjaE1vZGUoKTtcblx0XHRcdH1cblxuXHRcdFx0dGljaygpO1xuXHRcdH0sIDEwMDApO1xuXG5cdFx0cmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHR9LCBbc2V0dGluZ3NJbmZvXSk7XG5cblx0Y29uc3QgdG90YWxTZWNvbmRzID1cblx0XHRtb2RlID09PSBcIndvcmtcIlxuXHRcdFx0PyBzZXR0aW5nc0luZm8ud29ya01pbnV0ZXMgKiA2MFxuXHRcdFx0OiBzZXR0aW5nc0luZm8uYnJlYWtNaW51dGVzICogNjA7XG5cdGNvbnN0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKChzZWNvbmRzTGVmdCAvIHRvdGFsU2Vjb25kcykgKiAxMDApO1xuXG5cdGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHNMZWZ0IC8gNjApO1xuXHRsZXQgc2Vjb25kcyA9IHNlY29uZHNMZWZ0ICUgNjA7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1bOTB2d10gc206dy1bNjB2d10gbWQ6dy1bNTB2d10gbGc6dy1bMzB2d10geGw6dy1bMzV2d11cIj5cblx0XHRcdFx0XHQ8Q2lyY3VsYXJQcm9ncmVzc2JhcldpdGhDaGlsZHJlblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmctYmxhY2svWzE1JV0gYmFja2Ryb3AtYmx1ci1bMTBweF0gcC00IHhsOnAtOCByb3VuZGVkLWZ1bGwgcmVsYXRpdmVcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e3BlcmNlbnRhZ2V9XG5cdFx0XHRcdFx0XHRzdHJva2VXaWR0aD17NX1cblx0XHRcdFx0XHRcdHN0eWxlcz17YnVpbGRTdHlsZXMoe1xuXHRcdFx0XHRcdFx0XHR0ZXh0Q29sb3I6IFwiI2ZmZlwiLFxuXHRcdFx0XHRcdFx0XHRwYXRoQ29sb3I6IFwicmdiKDIyNSwgMjI1LCAyMjUpXCIsXG5cdFx0XHRcdFx0XHRcdHRyYWlsQ29sb3I6IFwicmdiKDUwLCA1MCwgNTAsIDAuNilcIixcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1bMjAlXSB3LWZ1bGwgdGV4dC1jZW50ZXIgdGV4dC1bMS4zNXJlbV0geGw6dGV4dC1bMnJlbV0ganVyYSBzZWxlY3Qtbm9uZSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHRcIj5cblx0XHRcdFx0XHRcdFx0e21vZGUgPT09IFwid29ya1wiID8gXCJXb3JrXCIgOiBcIkJyZWFrXCJ9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC1bNHJlbV0gbWQ6dGV4dC1bNHJlbV0gbGc6dGV4dC1bMy41cmVtXSB4bDp0ZXh0LVs2LjVyZW1dIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZS9bOTAlXSBzZWxlY3Qtbm9uZSBqdXJhXCI+XG5cdFx0XHRcdFx0XHRcdHttaW51dGVzfTp7c2Vjb25kcyA8IDEwID8gXCIwXCIgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHR7c2Vjb25kc31cblx0XHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdFx0XHR7aXNQYXVzZWQgPyAoXG5cdFx0XHRcdFx0XHRcdDxQbGF5QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0SXNQYXVzZWQoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aXNQYXVzZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2VsZWN0LW5vbmUgdGV4dC13aGl0ZSB0ZXh0LXhsIHRyYW5zaXRpb24tWzFzXSBiZy1uZXV0cmFsLTgwMCBob3ZlcjpiZy1uZXV0cmFsLTcwMC9bODAlXSBiYWNrZHJvcC1ibHVyLW1kIHB5LTMgeGw6cHktMyBweC02IHhsOnB4LTEwIHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW4gY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTNcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PFBhdXNlQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0SXNQYXVzZWQodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRpc1BhdXNlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInNlbGVjdC1ub25lIHRleHQtd2hpdGUgdGV4dC14bCB0cmFuc2l0aW9uLVsxc10gYmctbmV1dHJhbC04MDAgaG92ZXI6YmctbmV1dHJhbC03MDAvWzgwJV0gYmFja2Ryb3AtYmx1ci1tZCBweS0zIHhsOnB5LTMgcHgtNiB4bDpweC0xMCByb3VuZGVkLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0zXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9DaXJjdWxhclByb2dyZXNzYmFyV2l0aENoaWxkcmVuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZXI7XG4iXSwibmFtZXMiOlsiUGF1c2VCdXR0b24iLCJQbGF5QnV0dG9uIiwiU2V0dGluZ3NDb250ZXh0IiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDaXJjdWxhclByb2dyZXNzYmFyV2l0aENoaWxkcmVuIiwiYnVpbGRTdHlsZXMiLCJUaW1lciIsInNldHRpbmdzSW5mbyIsImlzUGF1c2VkIiwic2V0SXNQYXVzZWQiLCJtb2RlIiwic2V0TW9kZSIsInNlY29uZHNMZWZ0Iiwic2V0U2Vjb25kc0xlZnQiLCJzZWNvbmRzTGVmdFJlZiIsImlzUGF1c2VkUmVmIiwibW9kZVJlZiIsInRpY2siLCJjdXJyZW50Iiwic3dpdGNoTW9kZSIsIm5leHRNb2RlIiwibmV4dFNlY29uZHMiLCJ3b3JrTWludXRlcyIsImJyZWFrTWludXRlcyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidG90YWxTZWNvbmRzIiwicGVyY2VudGFnZSIsIk1hdGgiLCJyb3VuZCIsIm1pbnV0ZXMiLCJmbG9vciIsInNlY29uZHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsInN0cm9rZVdpZHRoIiwic3R5bGVzIiwidGV4dENvbG9yIiwicGF0aENvbG9yIiwidHJhaWxDb2xvciIsInNwYW4iLCJoMSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Timer.tsx\n"));

/***/ })

});