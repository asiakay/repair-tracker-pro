exports.id = 744;
exports.ids = [744];
exports.modules = {

/***/ 1922:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "NavigationBar_navbar__GLORr",
	"navbar-links": "NavigationBar_navbar-links__67_IM",
	"navbar-link": "NavigationBar_navbar-link__TSZ2_",
	"mobile-menu": "NavigationBar_mobile-menu__wvAcx",
	"navbar-brand": "NavigationBar_navbar-brand__9rvBO",
	"navbar-brand-link": "NavigationBar_navbar-brand-link__8bNVV",
	"mobile-menu-link": "NavigationBar_mobile-menu-link__gNU_k"
};


/***/ }),

/***/ 8744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/styles/NavigationBar.module.css
var NavigationBar_module = __webpack_require__(1922);
var NavigationBar_module_default = /*#__PURE__*/__webpack_require__.n(NavigationBar_module);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./src/components/NavigationBar.js







const NavigationBar = ()=>{
    const [showMenu, setShowMenu] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const handleClick = (event)=>{
        event.preventDefault();
        router.push("/new-repair-request");
    };
    const toggleMenu = ()=>{
        setShowMenu(!showMenu);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: (NavigationBar_module_default()).navbar,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (NavigationBar_module_default())["navbar-brand"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/repair-icon.png",
                        alt: "Repair Tracker Pro",
                        width: 30,
                        height: 30
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: (NavigationBar_module_default())["navbar-brand-link"],
                        children: "Repair Tracker Pro"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (NavigationBar_module_default())["navbar-links"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: (NavigationBar_module_default())["navbar-link"],
                        children: "Home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/repair-list",
                        className: (NavigationBar_module_default())["navbar-link"],
                        children: "Repairs"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/new-repair-request",
                        className: (NavigationBar_module_default())["navbar-link"],
                        children: "New Request"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/login",
                        className: (NavigationBar_module_default())["navbar-link"],
                        children: "Login"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: showMenu ? (NavigationBar_module_default())["mobile-menu"] : (NavigationBar_module_default())["mobile-menu-hidden"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: (NavigationBar_module_default())["mobile-menu-link"],
                        children: "Home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/repair-list",
                        className: (NavigationBar_module_default())["mobile-menu-link"],
                        children: "Repairs"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/new-repair-request",
                        className: (NavigationBar_module_default())["mobile-menu-link"],
                        children: "New Request"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/login",
                        className: (NavigationBar_module_default())["mobile-menu-link"],
                        children: "Login"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_NavigationBar = (NavigationBar);

;// CONCATENATED MODULE: ./src/components/Layout.js



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_NavigationBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                children: "Copyright \xa9 Repair Tracker Pro"
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;