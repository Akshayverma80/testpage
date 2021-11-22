"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
;// CONCATENATED MODULE: ./Container/PublicProfile/index.js




function arrayNotNull(array) {
    if (array !== undefined && array !== null && Array.isArray(array) && array.length > 0) {
        return true;
    }
    return false;
}
const PublicProfile = ({ props  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20;
    // const input = {
    //   issuedTo: "",
    //   badgeCriteria: "",
    //   badgeSkill: "",
    //   badgeDescription: "",
    //   issuedBy: "",
    //   issuedDate: "",
    //   expiryDate: "",
    //   logoURL: null
    // };
    // const [state, setState] = useState(input);
    // useEffect(() => {
    //   if (props.data && props.data[0]) {
    //     const { badgeData = null, badgeGraphicData = null, issuerData = null, recipientData = null, issueAt = '', validTo = '' } = props.data && props.data[0];
    //     setState({
    //       ...state,
    //       issuedTo: recipientData ? recipientData.name : "",
    //       badgeCriteria: badgeData ? badgeData.criteria : "",
    //       badgeSkill: badgeData ? badgeData.skill : "",
    //       badgeDescription: badgeData ? badgeData.description : "",
    //       issuedBy: issuerData ? issuerData.name : "",
    //       issuedDate: issueAt ? issueAt : "",
    //       expiryDate: validTo ? validTo : "",
    //       logoURL: badgeGraphicData ? badgeGraphicData.logo : null
    //     });
    //   }
    // }, [props.data]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "parent-public",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "head-style",
                children: "Issued Badge"
            }),
            arrayNotNull(props.data) ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "data-container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "ITIL\xae 4 Foundation: The Guiding Principles • Ajit • DocView\xae Digital Badge: ITIL\xae 4 Foundation: The Guiding Principles"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "title",
                                content: "ITIL\xae 4 Foundation: The Guiding Principles • Ajit • DocView\xae Digital Badge: ITIL\xae 4 Foundation: The Guiding Principles"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "description",
                                content: (ref = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref === void 0 ? void 0 : (ref1 = ref.badgeData) === null || ref1 === void 0 ? void 0 : ref1.description
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "og:type",
                                content: "website"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "og:url",
                                content: `${"http://66.175.217.67:3000"}/?id=${props === null || props === void 0 ? void 0 : props.id}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "og:title",
                                content: "ITIL\xae 4 Foundation: The Guiding Principles • Ajit • DocView\xae Digital Badge: ITIL\xae 4 Foundation: The Guiding Principles"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "og:description",
                                content: (ref2 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.badgeData) === null || ref3 === void 0 ? void 0 : ref3.description
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "og:image",
                                content: `${(ref4 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.badgeGraphicData) === null || ref5 === void 0 ? void 0 : ref5.logo}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "twitter:card",
                                content: "summary_large_image"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "twitter:url",
                                content: `${"http://66.175.217.67:3000"}/?id=${props === null || props === void 0 ? void 0 : props.id}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "twitter:title",
                                content: "ITIL\xae 4 Foundation: The Guiding Principles • Ajit • DocView\xae Digital Badge: ITIL\xae 4 Foundation: The Guiding Principles"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "twitter:description",
                                content: (ref6 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.badgeData) === null || ref7 === void 0 ? void 0 : ref7.description
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "twitter:image",
                                content: `${(ref8 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.badgeGraphicData) === null || ref9 === void 0 ? void 0 : ref9.logo}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: (ref10 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref10 === void 0 ? void 0 : (ref11 = ref10.badgeGraphicData) === null || ref11 === void 0 ? void 0 : ref11.logo,
                        alt: "badge",
                        style: {
                            display: 'table-cell',
                            width: '230px'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "right-container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-60",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-style",
                                        children: "Issued to"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "data-style",
                                        children: (ref12 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref12 === void 0 ? void 0 : ref12.recipientData.name
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-60",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-style",
                                        children: "Issued Date"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "data-style",
                                        children: external_moment_default()((ref13 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref13 === void 0 ? void 0 : ref13.issueAt).format('DD/MM/YYYY')
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-60",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-style",
                                        children: "Issued By"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "data-style",
                                        children: (ref14 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref14 === void 0 ? void 0 : (ref15 = ref14.issuerData) === null || ref15 === void 0 ? void 0 : ref15.name
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-60",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-style",
                                        children: "Badge Criteria"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "data-style",
                                        children: (ref16 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref16 === void 0 ? void 0 : ref16.badgeData.criteria
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-60",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-style",
                                        children: "Badge Skill"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "data-style",
                                        children: (ref17 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref17 === void 0 ? void 0 : ref17.badgeData.skill
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-60",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-style",
                                        children: "Expiry Date"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "data-style",
                                        children: external_moment_default()((ref18 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref18 === void 0 ? void 0 : ref18.validTo).format('DD/MM/YYYY')
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "description",
                                children: "Description"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "desc-data",
                                children: (ref19 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref19 === void 0 ? void 0 : (ref20 = ref19.badgeData) === null || ref20 === void 0 ? void 0 : ref20.description
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "data-container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "expire-message",
                    children: `Badge doesn't exist. Please contact to administrator.`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "public-copyright",
                children: "Copyright @2021"
            })
        ]
    }));
};
/* harmony default export */ const Container_PublicProfile = (PublicProfile);

;// CONCATENATED MODULE: ./pages/index.js




const Index = (props)=>{
    // console.log("props",props)
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "ITIL\xae 4 Foundation: The Guiding Principles • Ajit • DocView\xae Digital Badge: ITIL\xae 4 Foundation: The Guiding Principles"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container_PublicProfile, {
                props: props
            })
        ]
    }));
};
async function getServerSideProps(context) {
    var ref, ref1;
    const id = ((ref = context.query) === null || ref === void 0 ? void 0 : ref.id) ? (ref1 = context.query) === null || ref1 === void 0 ? void 0 : ref1.id : "612e199db2b8994e246fc3ce";
    const res = await fetch(`http://66.175.217.67:8181/api/v1/badge-association/public-profile?id=${id}`);
    const json = await res.json();
    return {
        props: {
            data: json.data,
            id
        }
    };
}
/* harmony default export */ const pages = (Index);


/***/ }),

/***/ 689:
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
var __webpack_exports__ = (__webpack_exec__(788));
module.exports = __webpack_exports__;

})();