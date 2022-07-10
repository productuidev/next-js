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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst mockCategory = {\n  id: 0,\n  name: '프로그래밍'\n};\nconst mockTags = [{\n  id: 0,\n  title: '평생소장'\n}, {\n  id: 1,\n  title: 'AWS'\n}, {\n  id: 2,\n  title: 'DevOps'\n}];\nconst lecturesData = {\n  lectureList: [{\n    id: 0,\n    category: mockCategory,\n    title: '한 번에 끝내는 AWS 인프라 구축과 DevOps 운영 초격차 패키지',\n    tags: mockTags,\n    description: '개발/운영/아키텍트 전 과정 마스터',\n    thumb: '/thumb.jpg',\n    isHot: true,\n    isNew: true\n  }, {\n    id: 1,\n    category: mockCategory,\n    title: '한 번에 끝내는 프론트엔드 개발 초격차 패키지',\n    tags: mockTags,\n    description: '시간당 1천원 대 수강료 한 번 결제로 평생소장! 프론트엔드 공부, 뭐부터 시작해야 하지?',\n    thumb: '/thumb.jpg',\n    isHot: true,\n    isNew: true\n  }, {\n    id: 2,\n    category: mockCategory,\n    title: 'Next.js 완전 정복 : 확장성 높은 커머스 서비스 구축하기',\n    tags: mockTags,\n    description: '블로그와 커머스 서비스로 개발&서버리스 배포까지',\n    thumb: '/thumb.jpg',\n    isHot: true,\n    isNew: true\n  }, {\n    id: 3,\n    category: mockCategory,\n    title: 'TypeScript를 활용한 함수형 프로그래밍 온보딩',\n    tags: mockTags,\n    description: '국내 최초 실무 맞춤형 함수형 프로그래밍 인강',\n    thumb: '/thumb.jpg',\n    isHot: true,\n    isNew: true\n  }]\n};\nconst lecturesDataScience = {\n  lectureList: [{\n    id: 0,\n    category: mockCategory,\n    title: '딥러닝/머신러닝을 활용한 시계열 데이터 분석',\n    tags: mockTags,\n    description: '시계열 데이터 분석에 딥러닝/머신러닝까지 활용하는 역량을 기를 수 있는 강의',\n    thumb: '/thumb.jpg',\n    isHot: true,\n    isNew: true\n  }, {\n    id: 1,\n    category: mockCategory,\n    title: '세계 3등에게 배우는 실무 밀착 데이터 시각화 올인원 패키지',\n    tags: mockTags,\n    description: '초보자도 30분 만에 코딩 없이 인사이트까지 얻는 대시보드, 이 강의 들으면 나도 가능!',\n    thumb: '/thumb.jpg',\n    isHot: true,\n    isNew: true\n  }, {\n    id: 2,\n    category: mockCategory,\n    title: 'The Red: 딥러닝 뉴럴네트워크 GNN',\n    tags: mockTags,\n    description: '최근 소셜 네트워크나 지식 그래프 등의 발전으로 각광 받고 있는 GNN을 배워보세요',\n    thumb: '/thumb.jpg',\n    isHot: true,\n    isNew: true\n  }]\n};\nfunction handler(req, res) {\n  if (req.query.categories === 'Programming') {\n    //console.log(req.query.categories)\n    res.status(200).json(lecturesData);\n  }\n\n  if (req.query.categories === 'DataScience') {\n    res.status(200).json(lecturesDataScience);\n  }\n\n  res.status(200).json(lecturesData);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsWUFOVDtBQU9FQyxJQUFBQSxLQUFLLEVBQUUsSUFQVDtBQVFFQyxJQUFBQSxLQUFLLEVBQUU7QUFSVCxHQVhZLEVBcUJaO0FBQ0VYLElBQUFBLEVBQUUsRUFBRSxDQUROO0FBRUVNLElBQUFBLFFBQVEsRUFBRVAsWUFGWjtBQUdFSSxJQUFBQSxLQUFLLEVBQUUseUJBSFQ7QUFJRUksSUFBQUEsSUFBSSxFQUFFTCxRQUpSO0FBS0VNLElBQUFBLFdBQVcsRUFBRSxnREFMZjtBQU1FQyxJQUFBQSxLQUFLLEVBQUUsWUFOVDtBQU9FQyxJQUFBQSxLQUFLLEVBQUUsSUFQVDtBQVFFQyxJQUFBQSxLQUFLLEVBQUU7QUFSVCxHQXJCWTtBQURZLENBQTVCO0FBdUNlLFNBQVNFLE9BQVQsQ0FDYkMsR0FEYSxFQUViQyxHQUZhLEVBR2I7QUFDQSxNQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVUMsVUFBVixLQUF5QixhQUE1QixFQUEwQztBQUN4QztBQUNBRixJQUFBQSxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQmYsWUFBckI7QUFDRDs7QUFDRCxNQUFHVSxHQUFHLENBQUNFLEtBQUosQ0FBVUMsVUFBVixLQUF5QixhQUE1QixFQUEwQztBQUN4Q0YsSUFBQUEsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJQLG1CQUFyQjtBQUNEOztBQUNERyxFQUFBQSxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQmYsWUFBckI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMvLi9wYWdlcy9hcGkvbGVjdHVyZXMudHM/M2NhNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxuY29uc3QgbW9ja0NhdGVnb3J5ID0ge1xuICBpZDogMCxcbiAgbmFtZTogJ+2UhOuhnOq3uOuemOuwjScsXG59XG5cbmNvbnN0IG1vY2tUYWdzID0gW1xuICB7IGlkOiAwLCB0aXRsZTogJ+2PieyDneyGjOyepScgfSxcbiAgeyBpZDogMSwgdGl0bGU6ICdBV1MnIH0sXG4gIHsgaWQ6IDIsIHRpdGxlOiAnRGV2T3BzJyB9LFxuXVxuXG5jb25zdCBsZWN0dXJlc0RhdGEgPSB7XG4gIGxlY3R1cmVMaXN0IDogW1xuICAgIHtcbiAgICAgIGlkOiAwLFxuICAgICAgY2F0ZWdvcnk6IG1vY2tDYXRlZ29yeSxcbiAgICAgIHRpdGxlOiAn7ZWcIOuyiOyXkCDrgZ3rgrTripQgQVdTIOyduO2UhOudvCDqtazstpXqs7wgRGV2T3BzIOyatOyYgSDstIjqsqnssKgg7Yyo7YKk7KeAJyxcbiAgICAgIHRhZ3M6IG1vY2tUYWdzLFxuICAgICAgZGVzY3JpcHRpb246ICfqsJzrsJwv7Jq07JiBL+yVhO2CpO2Fje2KuCDsoIQg6rO87KCVIOuniOyKpO2EsCcsXG4gICAgICB0aHVtYjogJy90aHVtYi5qcGcnLFxuICAgICAgaXNIb3Q6IHRydWUsXG4gICAgICBpc05ldzogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgY2F0ZWdvcnk6IG1vY2tDYXRlZ29yeSxcbiAgICAgIHRpdGxlOiAn7ZWcIOuyiOyXkCDrgZ3rgrTripQg7ZSE66Gg7Yq47JeU65OcIOqwnOuwnCDstIjqsqnssKgg7Yyo7YKk7KeAJyxcbiAgICAgIHRhZ3M6IG1vY2tUYWdzLFxuICAgICAgZGVzY3JpcHRpb246ICfsi5zqsITri7kgMeyynOybkCDrjIAg7IiY6rCV66OMIO2VnCDrsogg6rKw7KCc66GcIO2PieyDneyGjOyepSEg7ZSE66Gg7Yq47JeU65OcIOqzteu2gCwg662Q67aA7YSwIOyLnOyeke2VtOyVvCDtlZjsp4A/JyxcbiAgICAgIHRodW1iOiAnL3RodW1iLmpwZycsXG4gICAgICBpc0hvdDogdHJ1ZSxcbiAgICAgIGlzTmV3OiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBjYXRlZ29yeTogbW9ja0NhdGVnb3J5LFxuICAgICAgdGl0bGU6ICdOZXh0LmpzIOyZhOyghCDsoJXrs7UgOiDtmZXsnqXshLEg64aS7J2AIOy7pOuouOyKpCDshJzruYTsiqQg6rWs7LaV7ZWY6riwJyxcbiAgICAgIHRhZ3M6IG1vY2tUYWdzLFxuICAgICAgZGVzY3JpcHRpb246ICfruJTroZzqt7jsmYAg7Luk66i47IqkIOyEnOu5hOyKpOuhnCDqsJzrsJwm7ISc67KE66as7IqkIOuwsO2PrOq5jOyngCcsXG4gICAgICB0aHVtYjogJy90aHVtYi5qcGcnLFxuICAgICAgaXNIb3Q6IHRydWUsXG4gICAgICBpc05ldzogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgY2F0ZWdvcnk6IG1vY2tDYXRlZ29yeSxcbiAgICAgIHRpdGxlOiAnVHlwZVNjcmlwdOulvCDtmZzsmqntlZwg7ZWo7IiY7ZiVIO2UhOuhnOq3uOuemOuwjSDsmKjrs7TrlKknLFxuICAgICAgdGFnczogbW9ja1RhZ3MsXG4gICAgICBkZXNjcmlwdGlvbjogJ+q1reuCtCDstZzstIgg7Iuk66y0IOunnuy2pO2YlSDtlajsiJjtmJUg7ZSE66Gc6re4656Y67CNIOyduOqwlScsXG4gICAgICB0aHVtYjogJy90aHVtYi5qcGcnLFxuICAgICAgaXNIb3Q6IHRydWUsXG4gICAgICBpc05ldzogdHJ1ZSxcbiAgICB9XG4gIF1cbn1cblxuY29uc3QgbGVjdHVyZXNEYXRhU2NpZW5jZSA9IHtcbiAgbGVjdHVyZUxpc3QgOiBbXG4gICAge1xuICAgICAgaWQ6IDAsXG4gICAgICBjYXRlZ29yeTogbW9ja0NhdGVnb3J5LFxuICAgICAgdGl0bGU6ICfrlKXrn6zri50v66i47Iug65+s64ud7J2EIO2ZnOyaqe2VnCDsi5zqs4Tsl7Qg642w7J207YSwIOu2hOyEnScsXG4gICAgICB0YWdzOiBtb2NrVGFncyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn7Iuc6rOE7Je0IOuNsOydtO2EsCDrtoTshJ3sl5Ag65Sl65+s64udL+uouOyLoOufrOuLneq5jOyngCDtmZzsmqntlZjripQg7Jet65+J7J2EIOq4sOulvCDsiJgg7J6I64qUIOqwleydmCcsXG4gICAgICB0aHVtYjogJy90aHVtYi5qcGcnLFxuICAgICAgaXNIb3Q6IHRydWUsXG4gICAgICBpc05ldzogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgY2F0ZWdvcnk6IG1vY2tDYXRlZ29yeSxcbiAgICAgIHRpdGxlOiAn7IS46rOEIDPrk7Hsl5Dqsowg67Cw7Jqw64qUIOyLpOustCDrsIDssKkg642w7J207YSwIOyLnOqwge2ZlCDsmKzsnbjsm5Ag7Yyo7YKk7KeAJyxcbiAgICAgIHRhZ3M6IG1vY2tUYWdzLFxuICAgICAgZGVzY3JpcHRpb246ICfstIjrs7TsnpDrj4QgMzDrtoQg66eM7JeQIOy9lOuUqSDsl4bsnbQg7J247IKs7J207Yq46rmM7KeAIOyWu+uKlCDrjIDsi5zrs7Trk5wsIOydtCDqsJXsnZgg65Ok7Jy866m0IOuCmOuPhCDqsIDriqUhJyxcbiAgICAgIHRodW1iOiAnL3RodW1iLmpwZycsXG4gICAgICBpc0hvdDogdHJ1ZSxcbiAgICAgIGlzTmV3OiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBjYXRlZ29yeTogbW9ja0NhdGVnb3J5LFxuICAgICAgdGl0bGU6ICdUaGUgUmVkOiDrlKXrn6zri50g64m065+064Sk7Yq47JuM7YGsIEdOTicsXG4gICAgICB0YWdzOiBtb2NrVGFncyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn7LWc6re8IOyGjOyFnCDrhKTtirjsm4ztgazrgpgg7KeA7IudIOq3uOuemO2UhCDrk7HsnZgg67Cc7KCE7Jy866GcIOqwgeq0kSDrsJvqs6Ag7J6I64qUIEdOTuydhCDrsLDsm4zrs7TshLjsmpQnLFxuICAgICAgdGh1bWI6ICcvdGh1bWIuanBnJyxcbiAgICAgIGlzSG90OiB0cnVlLFxuICAgICAgaXNOZXc6IHRydWUsXG4gICAgfSxcbiAgXVxufVxuXG50eXBlIERhdGEgPSB7XG4gIG5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZSxcbikge1xuICBpZihyZXEucXVlcnkuY2F0ZWdvcmllcyA9PT0gJ1Byb2dyYW1taW5nJyl7XG4gICAgLy9jb25zb2xlLmxvZyhyZXEucXVlcnkuY2F0ZWdvcmllcylcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihsZWN0dXJlc0RhdGEpO1xuICB9XG4gIGlmKHJlcS5xdWVyeS5jYXRlZ29yaWVzID09PSAnRGF0YVNjaWVuY2UnKXtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihsZWN0dXJlc0RhdGFTY2llbmNlKTtcbiAgfVxuICByZXMuc3RhdHVzKDIwMCkuanNvbihsZWN0dXJlc0RhdGEpXG59XG4iXSwibmFtZXMiOlsibW9ja0NhdGVnb3J5IiwiaWQiLCJuYW1lIiwibW9ja1RhZ3MiLCJ0aXRsZSIsImxlY3R1cmVzRGF0YSIsImxlY3R1cmVMaXN0IiwiY2F0ZWdvcnkiLCJ0YWdzIiwiZGVzY3JpcHRpb24iLCJ0aHVtYiIsImlzSG90IiwiaXNOZXciLCJsZWN0dXJlc0RhdGFTY2llbmNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXJ5IiwiY2F0ZWdvcmllcyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/lectures.ts\n");

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