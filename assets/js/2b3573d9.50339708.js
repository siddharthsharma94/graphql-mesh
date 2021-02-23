(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{114:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return b}));var t=r(3),a=r(7),o=(r(0),r(299)),i={id:"rename",title:"Rename Transform",sidebar_label:"Rename"},l={unversionedId:"transforms/rename",id:"transforms/rename",isDocsHomePage:!1,title:"Rename Transform",description:"The rename transform allow you rename GraphQL types and GraphQL fields easily.",source:"@site/docs/transforms/rename.md",slug:"/transforms/rename",permalink:"/docs/transforms/rename",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/transforms/rename.md",version:"current",sidebar_label:"Rename",sidebar:"sidebar",previous:{title:"Neo4j",permalink:"/docs/handlers/neo4j"},next:{title:"Prefix Transform",permalink:"/docs/transforms/prefix"}},p=[{value:"How to use?",id:"how-to-use",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],c={toc:p};function b(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"rename")," transform allow you rename GraphQL types and GraphQL fields easily. "),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"yarn add @graphql-mesh/transform-rename\n")),Object(o.b)("h2",{id:"how-to-use"},"How to use?"),Object(o.b)("p",null,"Add the following configuration to your Mesh config file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"transforms:\n  - rename:\n      mode: bare | wrap\n      renames:\n        - from:\n            type: ApiUser\n          to:\n            type: User\n        - from:\n            type: Query\n            field: apiUser\n          to:\n            type: Query\n            field: user\n")),Object(o.b)("p",null,"or you can use regular expressions to rename multiple types, fields or both"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  - rename:\n      mode: bare | wrap\n      renames:\n        - from:\n            type: Api(.*)\n          to:\n            type: $1\n          useRegExpForTypes: true\n\n        - from:\n            type: Query\n            field: api(.*)\n          to:\n            type: Query\n            field: $1\n          useRegExpForFields: true\n\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'For information about "bare" and "wrap" modes, please read the ',Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://graphql-mesh.com/docs/getting-started/mesh-transforms#two-different-modes"}),"dedicated section"),".")),Object(o.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(o.b)("p",null,Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mode")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String (bare | wrap)"),") - Specify to apply rename transforms to bare schema or by wrapping original schema"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"renames")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Array of Object"),", required) - Array of rename rules: ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"from")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Object"),", required): ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"type")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"field")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),")"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"to")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Object"),", required): ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"type")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"field")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),")"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"useRegExpForTypes")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Boolean"),") - Use Regular Expression for type names"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"useRegExpForFields")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Boolean"),") - Use Regular Expression for field names"))))))}b.isMDXComponent=!0},299:function(e,n,r){"use strict";r.d(n,"a",(function(){return m})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),b=function(e){var n=a.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},m=function(e){var n=b(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=b(r),u=t,d=m["".concat(i,".").concat(u)]||m[u]||s[u]||o;return r?a.a.createElement(d,l(l({ref:n},c),{},{components:r})):a.a.createElement(d,l({ref:n},c))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);