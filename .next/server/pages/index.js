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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./Container/PublicProfile/index.js




function arrayNotNull(array) {
    if (array !== undefined && array !== null && Array.isArray(array) && array.length > 0) {
        return true;
    }
    return false;
}
const PublicProfile = ({ props  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29, ref30, ref31, ref32, ref33;
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
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                                children: [
                                    "Congratulations! Here is your certified badge for ",
                                    (ref = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref === void 0 ? void 0 : ref.badgeData.criteria,
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "title",
                                content: `Congratulations! Here is your certified badge for ${(ref1 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref1 === void 0 ? void 0 : ref1.badgeData.criteria}.`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "description",
                                content: `Hi ${(ref2 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref2 === void 0 ? void 0 : ref2.recipientData.name}, We congrats you on receiving the badge for ${(ref3 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref3 === void 0 ? void 0 : ref3.badgeData.skill} issued by ${(ref4 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.issuerData) === null || ref5 === void 0 ? void 0 : ref5.name} and  valid till ${external_moment_default()((ref6 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref6 === void 0 ? void 0 : ref6.validTo).format('DD/MM/YYYY')}.`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "og:type",
                                content: "website"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "og:url",
                                content: `${"https://testpage-tau.vercel.app"}/?id=${props === null || props === void 0 ? void 0 : props.id}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "og:title",
                                content: `Congratulations! Here is your certified badge for ${(ref7 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref7 === void 0 ? void 0 : ref7.badgeData.criteria}.`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "og:description",
                                content: `Hi ${(ref8 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref8 === void 0 ? void 0 : ref8.recipientData.name}, We congrats you on receiving the badge for ${(ref9 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref9 === void 0 ? void 0 : ref9.badgeData.skill} issued by ${(ref10 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref10 === void 0 ? void 0 : (ref11 = ref10.issuerData) === null || ref11 === void 0 ? void 0 : ref11.name} and  valid till ${external_moment_default()((ref12 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref12 === void 0 ? void 0 : ref12.validTo).format('DD/MM/YYYY')}.`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "og:image",
                                content: `${(ref13 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref13 === void 0 ? void 0 : (ref14 = ref13.badgeGraphicData) === null || ref14 === void 0 ? void 0 : ref14.logo}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "twitter:card",
                                content: "summary_large_image"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "twitter:url",
                                content: `${"https://testpage-tau.vercel.app"}/?id=${props === null || props === void 0 ? void 0 : props.id}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "twitter:title",
                                content: `Congratulations! Here is your certified badge for ${(ref15 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref15 === void 0 ? void 0 : ref15.badgeData.criteria}.`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "twitter:description",
                                content: `Hi ${(ref16 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref16 === void 0 ? void 0 : ref16.recipientData.name}, We congrats you on receiving the badge for ${(ref17 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref17 === void 0 ? void 0 : ref17.badgeData.skill} issued by ${(ref18 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref18 === void 0 ? void 0 : (ref19 = ref18.issuerData) === null || ref19 === void 0 ? void 0 : ref19.name} and  valid till ${external_moment_default()((ref20 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref20 === void 0 ? void 0 : ref20.validTo).format('DD/MM/YYYY')}.`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                property: "twitter:image",
                                content: `${(ref21 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref21 === void 0 ? void 0 : (ref22 = ref21.badgeGraphicData) === null || ref22 === void 0 ? void 0 : ref22.logo}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: (ref23 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref23 === void 0 ? void 0 : (ref24 = ref23.badgeGraphicData) === null || ref24 === void 0 ? void 0 : ref24.logo,
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
                                        children: (ref25 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref25 === void 0 ? void 0 : ref25.recipientData.name
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
                                        children: external_moment_default()((ref26 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref26 === void 0 ? void 0 : ref26.issueAt).format('DD/MM/YYYY')
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
                                        children: (ref27 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref27 === void 0 ? void 0 : (ref28 = ref27.issuerData) === null || ref28 === void 0 ? void 0 : ref28.name
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
                                        children: (ref29 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref29 === void 0 ? void 0 : ref29.badgeData.criteria
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
                                        children: (ref30 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref30 === void 0 ? void 0 : ref30.badgeData.skill
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
                                        children: external_moment_default()((ref31 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref31 === void 0 ? void 0 : ref31.validTo).format('DD/MM/YYYY')
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "description",
                                children: "Description"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "desc-data",
                                children: (ref32 = props === null || props === void 0 ? void 0 : props.data[0]) === null || ref32 === void 0 ? void 0 : (ref33 = ref32.badgeData) === null || ref33 === void 0 ? void 0 : ref33.description
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
    return(/*#__PURE__*/ jsx_runtime_.jsx(Container_PublicProfile, {
        props: props
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