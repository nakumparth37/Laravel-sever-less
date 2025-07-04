/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/productDetails.js":
/*!****************************************!*\
  !*** ./resources/js/productDetails.js ***!
  \****************************************/
/***/ (() => {

eval("function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nvar imgs = document.querySelectorAll('.img-select a');\nvar imgBtns = _toConsumableArray(imgs);\nvar imgId = 1;\nimgBtns.forEach(function (imgItem) {\n  imgItem.addEventListener('click', function (event) {\n    event.preventDefault();\n    imgId = imgItem.dataset.id;\n    slideImage();\n  });\n});\nfunction slideImage() {\n  var _document$querySelect;\n  var displayWidth = (_document$querySelect = document.querySelector('.img-showcase img:first-child')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.clientWidth;\n  document.querySelector('.img-showcase').style.transform = \"translateX(\".concat(-(imgId - 1) * displayWidth, \"px)\");\n}\nwindow.addEventListener('resize', slideImage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcHJvZHVjdERldGFpbHMuanMiLCJuYW1lcyI6WyJpbWdzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW1nQnRucyIsIl90b0NvbnN1bWFibGVBcnJheSIsImltZ0lkIiwiZm9yRWFjaCIsImltZ0l0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFzZXQiLCJpZCIsInNsaWRlSW1hZ2UiLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCJkaXNwbGF5V2lkdGgiLCJxdWVyeVNlbGVjdG9yIiwiY2xpZW50V2lkdGgiLCJzdHlsZSIsInRyYW5zZm9ybSIsImNvbmNhdCIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3Byb2R1Y3REZXRhaWxzLmpzPzgwNzciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWctc2VsZWN0IGEnKTtcbmNvbnN0IGltZ0J0bnMgPSBbLi4uaW1nc107XG5sZXQgaW1nSWQgPSAxO1xuXG5pbWdCdG5zLmZvckVhY2goKGltZ0l0ZW0pID0+IHtcbiAgICBpbWdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGltZ0lkID0gaW1nSXRlbS5kYXRhc2V0LmlkO1xuICAgICAgICBzbGlkZUltYWdlKCk7XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gc2xpZGVJbWFnZSgpe1xuICAgIGNvbnN0IGRpc3BsYXlXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctc2hvd2Nhc2UgaW1nOmZpcnN0LWNoaWxkJyk/LmNsaWVudFdpZHRoO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctc2hvd2Nhc2UnKS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey0gKGltZ0lkIC0gMSkgKiBkaXNwbGF5V2lkdGh9cHgpYDtcbn1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzbGlkZUltYWdlKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztBQUN2RCxJQUFNQyxPQUFPLEdBQUFDLGtCQUFBLENBQU9KLElBQUksQ0FBQztBQUN6QixJQUFJSyxLQUFLLEdBQUcsQ0FBQztBQUViRixPQUFPLENBQUNHLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUs7RUFDekJBLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztJQUN6Q0EsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUN0QkwsS0FBSyxHQUFHRSxPQUFPLENBQUNJLE9BQU8sQ0FBQ0MsRUFBRTtJQUMxQkMsVUFBVSxDQUFDLENBQUM7RUFDaEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUYsU0FBU0EsVUFBVUEsQ0FBQSxFQUFFO0VBQUEsSUFBQUMscUJBQUE7RUFDakIsSUFBTUMsWUFBWSxJQUFBRCxxQkFBQSxHQUFHYixRQUFRLENBQUNlLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQyxjQUFBRixxQkFBQSx1QkFBdkRBLHFCQUFBLENBQXlERyxXQUFXO0VBQ3pGaEIsUUFBUSxDQUFDZSxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUNFLEtBQUssQ0FBQ0MsU0FBUyxpQkFBQUMsTUFBQSxDQUFpQixFQUFHZixLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUdVLFlBQVksUUFBSztBQUM3RztBQUNBTSxNQUFNLENBQUNiLGdCQUFnQixDQUFDLFFBQVEsRUFBRUssVUFBVSxDQUFDIiwiaWdub3JlTGlzdCI6W119\n//# sourceURL=webpack-internal:///./resources/js/productDetails.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/productDetails.js"]();
/******/ 	
/******/ })()
;