"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/lectures";
exports.ids = ["pages/api/lectures"];
exports.modules = {

/***/ "(api)/./pages/api/lectures.ts":
/*!*******************************!*\
  !*** ./pages/api/lectures.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst mockCategory = {\n  id: 0,\n  name: '프로그래밍'\n};\nconst mockTags = [{\n  id: 0,\n  title: '평생소장'\n}, {\n  id: 1,\n  title: 'AWS'\n}, {\n  id: 2,\n  title: 'DevOps'\n}];\nconst lecturesData = {\n  lectureList: [{\n    id: 0,\n    category: mockCategory,\n    title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',\n    tags: mockTags,\n    description: '개발/운영/아키텍트 전 과정 마스터',\n    thumb: '/thumb.jpg',\n    isHot: true,\n    isNew: true\n  }]\n};\nfunction handler(req, res) {\n  res.status(200).json(lecturesData);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGVjdHVyZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBR0EsTUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxFQUFBQSxFQUFFLEVBQUUsQ0FEZTtBQUVuQkMsRUFBQUEsSUFBSSxFQUFFO0FBRmEsQ0FBckI7QUFLQSxNQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUFFRixFQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTRyxFQUFBQSxLQUFLLEVBQUU7QUFBaEIsQ0FEZSxFQUVmO0FBQUVILEVBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNHLEVBQUFBLEtBQUssRUFBRTtBQUFoQixDQUZlLEVBR2Y7QUFBRUgsRUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0csRUFBQUEsS0FBSyxFQUFFO0FBQWhCLENBSGUsQ0FBakI7QUFNQSxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLEVBQUFBLFdBQVcsRUFBRyxDQUNaO0FBQ0VMLElBQUFBLEVBQUUsRUFBRSxDQUROO0FBRUVNLElBQUFBLFFBQVEsRUFBRVAsWUFGWjtBQUdFSSxJQUFBQSxLQUFLLEVBQUUsMENBSFQ7QUFJRUksSUFBQUEsSUFBSSxFQUFFTCxRQUpSO0FBS0VNLElBQUFBLFdBQVcsRUFBRSxxQkFMZjtBQU1FQyxJQUFBQSxLQUFLLEVBQUUsWUFOVDtBQU9FQyxJQUFBQSxLQUFLLEVBQUUsSUFQVDtBQVFFQyxJQUFBQSxLQUFLLEVBQUU7QUFSVCxHQURZO0FBREssQ0FBckI7QUFtQmUsU0FBU0MsT0FBVCxDQUNiQyxHQURhLEVBRWJDLEdBRmEsRUFHYjtBQUNBQSxFQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQlosWUFBckI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMvLi9wYWdlcy9hcGkvbGVjdHVyZXMudHM/M2NhNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxuY29uc3QgbW9ja0NhdGVnb3J5ID0ge1xuICBpZDogMCxcbiAgbmFtZTogJ+2UhOuhnOq3uOuemOuwjScsXG59XG5cbmNvbnN0IG1vY2tUYWdzID0gW1xuICB7IGlkOiAwLCB0aXRsZTogJ+2PieyDneyGjOyepScgfSxcbiAgeyBpZDogMSwgdGl0bGU6ICdBV1MnIH0sXG4gIHsgaWQ6IDIsIHRpdGxlOiAnRGV2T3BzJyB9LFxuXVxuXG5jb25zdCBsZWN0dXJlc0RhdGEgPSB7XG4gIGxlY3R1cmVMaXN0IDogW1xuICAgIHtcbiAgICAgIGlkOiAwLFxuICAgICAgY2F0ZWdvcnk6IG1vY2tDYXRlZ29yeSxcbiAgICAgIHRpdGxlOiAn7LSI6rKp7LCoIO2MqO2CpOyngCA6IO2VnCDrsojsl5Ag64Gd64K064qUIEFXUyDsnbjtlITrnbwg6rWs7LaV6rO8IERldk9wcyDsmrTsmIEnLFxuICAgICAgdGFnczogbW9ja1RhZ3MsXG4gICAgICBkZXNjcmlwdGlvbjogJ+qwnOuwnC/smrTsmIEv7JWE7YKk7YWN7Yq4IOyghCDqs7zsoJUg66eI7Iqk7YSwJyxcbiAgICAgIHRodW1iOiAnL3RodW1iLmpwZycsXG4gICAgICBpc0hvdDogdHJ1ZSxcbiAgICAgIGlzTmV3OiB0cnVlLFxuICAgIH1cbiAgXVxufVxuXG50eXBlIERhdGEgPSB7XG4gIG5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZSxcbikge1xuICByZXMuc3RhdHVzKDIwMCkuanNvbihsZWN0dXJlc0RhdGEpXG59XG4iXSwibmFtZXMiOlsibW9ja0NhdGVnb3J5IiwiaWQiLCJuYW1lIiwibW9ja1RhZ3MiLCJ0aXRsZSIsImxlY3R1cmVzRGF0YSIsImxlY3R1cmVMaXN0IiwiY2F0ZWdvcnkiLCJ0YWdzIiwiZGVzY3JpcHRpb24iLCJ0aHVtYiIsImlzSG90IiwiaXNOZXciLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/lectures.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/lectures.ts"));
module.exports = __webpack_exports__;

})();