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
exports.id = "app/api/userConversations/route";
exports.ids = ["app/api/userConversations/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FuserConversations%2Froute&page=%2Fapi%2FuserConversations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FuserConversations%2Froute.ts&appDir=%2FUsers%2Fsydneysanders%2FDesktop%2FCodeProjects%2FAI_Agent_App%2FCEOYUNG%2Fmy-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsydneysanders%2FDesktop%2FCodeProjects%2FAI_Agent_App%2FCEOYUNG%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FuserConversations%2Froute&page=%2Fapi%2FuserConversations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FuserConversations%2Froute.ts&appDir=%2FUsers%2Fsydneysanders%2FDesktop%2FCodeProjects%2FAI_Agent_App%2FCEOYUNG%2Fmy-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsydneysanders%2FDesktop%2FCodeProjects%2FAI_Agent_App%2FCEOYUNG%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_sydneysanders_Desktop_CodeProjects_AI_Agent_App_CEOYUNG_my_app_src_app_api_userConversations_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/userConversations/route.ts */ \"(rsc)/./src/app/api/userConversations/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/userConversations/route\",\n        pathname: \"/api/userConversations\",\n        filename: \"route\",\n        bundlePath: \"app/api/userConversations/route\"\n    },\n    resolvedPagePath: \"/Users/sydneysanders/Desktop/CodeProjects/AI_Agent_App/CEOYUNG/my-app/src/app/api/userConversations/route.ts\",\n    nextConfigOutput,\n    userland: _Users_sydneysanders_Desktop_CodeProjects_AI_Agent_App_CEOYUNG_my_app_src_app_api_userConversations_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyQ29udmVyc2F0aW9ucyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlckNvbnZlcnNhdGlvbnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VyQ29udmVyc2F0aW9ucyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnN5ZG5leXNhbmRlcnMlMkZEZXNrdG9wJTJGQ29kZVByb2plY3RzJTJGQUlfQWdlbnRfQXBwJTJGQ0VPWVVORyUyRm15LWFwcCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZzeWRuZXlzYW5kZXJzJTJGRGVza3RvcCUyRkNvZGVQcm9qZWN0cyUyRkFJX0FnZW50X0FwcCUyRkNFT1lVTkclMkZteS1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzREO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8/YzExNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3N5ZG5leXNhbmRlcnMvRGVza3RvcC9Db2RlUHJvamVjdHMvQUlfQWdlbnRfQXBwL0NFT1lVTkcvbXktYXBwL3NyYy9hcHAvYXBpL3VzZXJDb252ZXJzYXRpb25zL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2VyQ29udmVyc2F0aW9ucy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXJDb252ZXJzYXRpb25zXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2VyQ29udmVyc2F0aW9ucy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9zeWRuZXlzYW5kZXJzL0Rlc2t0b3AvQ29kZVByb2plY3RzL0FJX0FnZW50X0FwcC9DRU9ZVU5HL215LWFwcC9zcmMvYXBwL2FwaS91c2VyQ29udmVyc2F0aW9ucy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FuserConversations%2Froute&page=%2Fapi%2FuserConversations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FuserConversations%2Froute.ts&appDir=%2FUsers%2Fsydneysanders%2FDesktop%2FCodeProjects%2FAI_Agent_App%2FCEOYUNG%2Fmy-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsydneysanders%2FDesktop%2FCodeProjects%2FAI_Agent_App%2FCEOYUNG%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/lib/db.tsx":
/*!********************************!*\
  !*** ./src/app/api/lib/db.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prisma = globalThis.prismaGlobal ?? prismaClientSingleton();\nconst db = prisma;\nif (true) globalThis.prismaGlobal = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9saWIvZGIudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyx3QkFBd0I7SUFDNUIsT0FBTyxJQUFJRCx3REFBWUE7QUFDekI7QUFNQSxNQUFNRSxTQUFTQyxXQUFXQyxZQUFZLElBQUlIO0FBRW5DLE1BQU1JLEtBQUtILE9BQU07QUFFeEIsSUFBSUksSUFBcUMsRUFBRUgsV0FBV0MsWUFBWSxHQUFHRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYXBpL2xpYi9kYi50c3g/YjIzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuY29uc3QgcHJpc21hQ2xpZW50U2luZ2xldG9uID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByaXNtYUNsaWVudCgpXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYUdsb2JhbDogdW5kZWZpbmVkIHwgUmV0dXJuVHlwZTx0eXBlb2YgcHJpc21hQ2xpZW50U2luZ2xldG9uPlxufVxuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWxUaGlzLnByaXNtYUdsb2JhbCA/PyBwcmlzbWFDbGllbnRTaW5nbGV0b24oKVxuXG5leHBvcnQgY29uc3QgZGIgPSBwcmlzbWFcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbFRoaXMucHJpc21hR2xvYmFsID0gcHJpc21hXG5cblxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYUNsaWVudFNpbmdsZXRvbiIsInByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWFHbG9iYWwiLCJkYiIsInByb2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/lib/db.tsx\n");

/***/ }),

/***/ "(rsc)/./src/app/api/userConversations/route.ts":
/*!************************************************!*\
  !*** ./src/app/api/userConversations/route.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _app_api_lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/api/lib/db */ \"(rsc)/./src/app/api/lib/db.tsx\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n// pages/api/userConversations.js\n\n\n\nconst userIdSchema = zod__WEBPACK_IMPORTED_MODULE_2__.object({\n    userId: zod__WEBPACK_IMPORTED_MODULE_2__.string().uuid()\n});\nasync function GET(request) {\n    try {\n        // Extract userId from searchParams instead of query\n        const { searchParams } = new URL(request.url);\n        const userId = searchParams.get('userId');\n        // Validate the userId\n        const { userId: validatedUserId } = userIdSchema.parse({\n            userId\n        });\n        // Fetch all conversations associated with the user\n        const userConversations = await _app_api_lib_db__WEBPACK_IMPORTED_MODULE_0__.db.userConversations.findMany({\n            where: {\n                userId: validatedUserId\n            },\n            include: {\n                conversation: true // Include the associated Conversation details\n            }\n        });\n        // Prepare data to send back, including titles\n        const conversations = userConversations.filter((uc)=>uc.conversation !== null) // Filter out null conversations\n        .map((uc)=>({\n                conversationId: uc.conversationId,\n                title: uc.conversation.title,\n                createdAt: uc.conversation.createdAt,\n                updatedAt: uc.conversation.updatedAt\n            }));\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(conversations);\n    } catch (error) {\n        console.error(\"Failed to fetch user conversations:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Failed to fetch user conversations\",\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2VyQ29udmVyc2F0aW9ucy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsaUNBQWlDO0FBR0s7QUFDYjtBQUMrQjtBQUd4RCxNQUFNRyxlQUFlRix1Q0FBUSxDQUFDO0lBQzVCSSxRQUFRSix1Q0FBUSxHQUFHTSxJQUFJO0FBQ3pCO0FBRU8sZUFBZUMsSUFBSUMsT0FBb0I7SUFDNUMsSUFBSTtRQUNGLG9EQUFvRDtRQUNwRCxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLFFBQVFHLEdBQUc7UUFDNUMsTUFBTVAsU0FBU0ssYUFBYUcsR0FBRyxDQUFDO1FBRWhDLHNCQUFzQjtRQUN0QixNQUFNLEVBQUVSLFFBQVFTLGVBQWUsRUFBRSxHQUFHWCxhQUFhWSxLQUFLLENBQUM7WUFBRVY7UUFBTztRQUVoRSxtREFBbUQ7UUFDbkQsTUFBTVcsb0JBQW9CLE1BQU1oQiwrQ0FBRUEsQ0FBQ2dCLGlCQUFpQixDQUFDQyxRQUFRLENBQUM7WUFDNURDLE9BQU87Z0JBQUViLFFBQVFTO1lBQWdCO1lBQ2pDSyxTQUFTO2dCQUNQQyxjQUFjLEtBQU0sOENBQThDO1lBQ3BFO1FBQ0Y7UUFFQSw4Q0FBOEM7UUFDOUMsTUFBTUMsZ0JBQWdCTCxrQkFDbkJNLE1BQU0sQ0FBQ0MsQ0FBQUEsS0FBTUEsR0FBR0gsWUFBWSxLQUFLLE1BQU8sZ0NBQWdDO1NBQ3hFSSxHQUFHLENBQUNELENBQUFBLEtBQU87Z0JBQ1ZFLGdCQUFnQkYsR0FBR0UsY0FBYztnQkFDakNDLE9BQU9ILEdBQUdILFlBQVksQ0FBQ00sS0FBSztnQkFDNUJDLFdBQVdKLEdBQUdILFlBQVksQ0FBQ08sU0FBUztnQkFDcENDLFdBQVdMLEdBQUdILFlBQVksQ0FBQ1EsU0FBUztZQUN0QztRQUVGLE9BQU8xQixxREFBWUEsQ0FBQzJCLElBQUksQ0FBQ1I7SUFDM0IsRUFBRSxPQUFPUyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx1Q0FBdUNBO1FBQ3JELE9BQU81QixxREFBWUEsQ0FBQzJCLElBQUksQ0FDdEI7WUFBRUcsU0FBUztZQUFzQ0YsT0FBTyxNQUFpQkUsT0FBTztRQUFDLEdBQ2pGO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcGkvdXNlckNvbnZlcnNhdGlvbnMvcm91dGUudHM/Yzc1MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvdXNlckNvbnZlcnNhdGlvbnMuanNcblxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2FwcC9hcGkvbGliL2RiXCI7XG5pbXBvcnQgKiBhcyB6IGZyb20gJ3pvZCc7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG5cbmNvbnN0IHVzZXJJZFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXNlcklkOiB6LnN0cmluZygpLnV1aWQoKSwgLy8gRW5zdXJlIHRoZSB1c2VySWQgaXMgYSB2YWxpZCBVVUlEXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkgeyAgICAgXG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCB1c2VySWQgZnJvbSBzZWFyY2hQYXJhbXMgaW5zdGVhZCBvZiBxdWVyeVxuICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICBjb25zdCB1c2VySWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCd1c2VySWQnKTtcblxuICAgIC8vIFZhbGlkYXRlIHRoZSB1c2VySWRcbiAgICBjb25zdCB7IHVzZXJJZDogdmFsaWRhdGVkVXNlcklkIH0gPSB1c2VySWRTY2hlbWEucGFyc2UoeyB1c2VySWQgfSk7XG5cbiAgICAvLyBGZXRjaCBhbGwgY29udmVyc2F0aW9ucyBhc3NvY2lhdGVkIHdpdGggdGhlIHVzZXJcbiAgICBjb25zdCB1c2VyQ29udmVyc2F0aW9ucyA9IGF3YWl0IGRiLnVzZXJDb252ZXJzYXRpb25zLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7IHVzZXJJZDogdmFsaWRhdGVkVXNlcklkIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIGNvbnZlcnNhdGlvbjogdHJ1ZSAgLy8gSW5jbHVkZSB0aGUgYXNzb2NpYXRlZCBDb252ZXJzYXRpb24gZGV0YWlsc1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUHJlcGFyZSBkYXRhIHRvIHNlbmQgYmFjaywgaW5jbHVkaW5nIHRpdGxlc1xuICAgIGNvbnN0IGNvbnZlcnNhdGlvbnMgPSB1c2VyQ29udmVyc2F0aW9uc1xuICAgICAgLmZpbHRlcih1YyA9PiB1Yy5jb252ZXJzYXRpb24gIT09IG51bGwpICAvLyBGaWx0ZXIgb3V0IG51bGwgY29udmVyc2F0aW9uc1xuICAgICAgLm1hcCh1YyA9PiAoe1xuICAgICAgICBjb252ZXJzYXRpb25JZDogdWMuY29udmVyc2F0aW9uSWQsXG4gICAgICAgIHRpdGxlOiB1Yy5jb252ZXJzYXRpb24udGl0bGUsXG4gICAgICAgIGNyZWF0ZWRBdDogdWMuY29udmVyc2F0aW9uLmNyZWF0ZWRBdCxcbiAgICAgICAgdXBkYXRlZEF0OiB1Yy5jb252ZXJzYXRpb24udXBkYXRlZEF0XG4gICAgICB9KSk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oY29udmVyc2F0aW9ucyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1c2VyIGNvbnZlcnNhdGlvbnM6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGZldGNoIHVzZXIgY29udmVyc2F0aW9uc1wiLCBlcnJvcjogKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZGIiLCJ6IiwiTmV4dFJlc3BvbnNlIiwidXNlcklkU2NoZW1hIiwib2JqZWN0IiwidXNlcklkIiwic3RyaW5nIiwidXVpZCIsIkdFVCIsInJlcXVlc3QiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJnZXQiLCJ2YWxpZGF0ZWRVc2VySWQiLCJwYXJzZSIsInVzZXJDb252ZXJzYXRpb25zIiwiZmluZE1hbnkiLCJ3aGVyZSIsImluY2x1ZGUiLCJjb252ZXJzYXRpb24iLCJjb252ZXJzYXRpb25zIiwiZmlsdGVyIiwidWMiLCJtYXAiLCJjb252ZXJzYXRpb25JZCIsInRpdGxlIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/userConversations/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FuserConversations%2Froute&page=%2Fapi%2FuserConversations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FuserConversations%2Froute.ts&appDir=%2FUsers%2Fsydneysanders%2FDesktop%2FCodeProjects%2FAI_Agent_App%2FCEOYUNG%2Fmy-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsydneysanders%2FDesktop%2FCodeProjects%2FAI_Agent_App%2FCEOYUNG%2Fmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();