"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Menu"
var Menu_ = __webpack_require__(8125);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const icons_material_Menu_namespaceObject = require("@mui/icons-material/Menu");
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Container"
const Container_namespaceObject = require("@mui/material/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./pages/_app.js














const pages = [
    "蓝筹指数",
    "新兴指数",
    "Top 600"
];
const pages_url = {
    蓝筹指数: "/",
    新兴指数: "/potential",
    "Top 600": "/top600"
};
const settings = (/* unused pure expression or super */ null && ([
    "Profile",
    "Account",
    "Dashboard",
    "Logout"
]));
const ResponsiveAppBar = ({ Component , pageProps  })=>{
    const [anchorElNav, setAnchorElNav] = external_react_.useState(null);
    const [anchorElUser, setAnchorElUser] = external_react_.useState(null);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = ()=>{
        setAnchorElUser(null);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "static",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                    maxWidth: "xl",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                        disableGutters: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                noWrap: true,
                                component: "div",
                                sx: {
                                    mr: 2,
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    }
                                },
                                children: "财神道"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    flexGrow: 1,
                                    display: {
                                        xs: "flex",
                                        md: "none"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        size: "large",
                                        "aria-label": "account of current user",
                                        "aria-controls": "menu-appbar",
                                        "aria-haspopup": "true",
                                        onClick: handleOpenNavMenu,
                                        color: "inherit",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((icons_material_Menu_default()), {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                        id: "menu-appbar",
                                        anchorEl: anchorElNav,
                                        anchorOrigin: {
                                            vertical: "bottom",
                                            horizontal: "left"
                                        },
                                        keepMounted: true,
                                        transformOrigin: {
                                            vertical: "top",
                                            horizontal: "left"
                                        },
                                        open: Boolean(anchorElNav),
                                        onClose: handleCloseNavMenu,
                                        sx: {
                                            display: {
                                                xs: "block",
                                                md: "none"
                                            }
                                        },
                                        children: pages.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: pages_url[page],
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    onClick: handleCloseNavMenu,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        textAlign: "center",
                                                        children: page
                                                    })
                                                }, `${page}_item`)
                                            }, `${page}_menu`)
                                        )
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                noWrap: true,
                                component: "div",
                                sx: {
                                    flexGrow: 1,
                                    display: {
                                        xs: "flex",
                                        md: "none"
                                    }
                                },
                                children: "财神道"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                sx: {
                                    flexGrow: 1,
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    }
                                },
                                children: pages.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: pages_url[page],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            onClick: handleCloseNavMenu,
                                            sx: {
                                                my: 2,
                                                color: "white",
                                                display: "block"
                                            },
                                            children: page
                                        })
                                    }, `${page}_item_main_top`)
                                )
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
};
/* harmony default export */ const _app = (ResponsiveAppBar);


/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(7885)));
module.exports = __webpack_exports__;

})();