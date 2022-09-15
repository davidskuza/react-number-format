"use strict";(self.webpackChunkreact_number_format=self.webpackChunkreact_number_format||[]).push([[497],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>m,metadata:()=>s,toc:()=>c});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],m={title:"Customization",sidebar_position:5},l=void 0,s={unversionedId:"customization",id:"customization",title:"Customization",description:"Concept",source:"@site/docs/customization.md",sourceDirName:".",slug:"/customization",permalink:"/react-number-format/docs/customization",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/customization.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Customization",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Pattern Format",permalink:"/react-number-format/docs/pattern_format"},next:{title:"Migration guide",permalink:"/react-number-format/docs/migration"}},u={},c=[{value:"Concept",id:"concept",level:2},{value:"Examples",id:"examples",level:2},{value:"Intl.NumberFormat based formatting",id:"intlnumberformat-based-formatting",level:3},{value:"Card expiry field",id:"card-expiry-field",level:3},{value:"Card expiry field with usePatternFormat",id:"card-expiry-field-with-usepatternformat",level:3},{value:"Custom numeral example",id:"custom-numeral-example",level:3}],p={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"concept"},"Concept"),(0,o.kt)("p",null,"React Number Format v5 is a complete rewrite with a goal of keeping it fully customizable to support all the custom case different product can have."),(0,o.kt)("p",null,"The primary thing which react number format controls is apply formatting in place (in the input) while managing correct caret position. It tries to understand what user is trying to do, add number, cut/paste, delete, and manage cursor position accordingly."),(0,o.kt)("p",null,"At the core of React number format lies NumberFormatBase, which works on three main props controlled from parent."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"format"),": A format function which can turn any numeric string to a formatted string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"removeFormatting"),": A function to removing formatting from a formatted string and return numeric string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"getCaretBoundary"),": A function given a formatted string, returns boundaries of valid cursor position. basically an array of boolean, where index of specify caret position. true at a index signifies user can put their caret at the position, false means the caret position is not allowed and the caret will move to closet allowed position.")),(0,o.kt)("p",null,"Most of the time you don't have to define getCaretBoundary, as the default one is enough, but in case you need to define, it looks something like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function caretUnknownFormatBoundary(formattedValue) {\n  const boundaryAry = Array.from({ length: formattedValue.length + 1 }).map(() => true);\n\n  for (let i = 0, ln = boundaryAry.length; i < ln; i++) {\n    // consider caret to be in boundary if it is before or after numeric value\n    boundaryAry[i] = Boolean(\n      formattedValue[i].match(/\\d/) || formattedValue[i - 1].match(/\\d/);,\n    );\n  }\n\n  return boundaryAry;\n}\n")),(0,o.kt)("p",null,"Apart from this prop some key handling are required depending on use case which can be done using native events, onKeyDown/onKeyUp etc."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"To give an example a basic implementation of number formatting if we have simple use case to format number without decimals and negative number support."),(0,o.kt)("h3",{id:"intlnumberformat-based-formatting"},"Intl.NumberFormat based formatting"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NumberFormatBase } from 'react-number-format';\n\nfunction MyCustomNumberFormat(props) {\n  const format = (numStr) => {\n    if (numStr === '') return '';\n    return new Intl.NumberFormat('en-US', {\n      style: 'currency',\n      currency: 'USD',\n      maximumFractionDigits: 0,\n    }).format(numStr);\n  };\n\n  return <NumberFormatBase {...props} format={format} />;\n}\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/custom-numeric-format-ovl6km?fontsize=14&hidenavigation=1&theme=dark&view=preview",title:"Custom Numeric Format",className:"csb",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("p",null,"Another example of card expiry field."),(0,o.kt)("h3",{id:"card-expiry-field"},"Card expiry field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NumberFormatBase } from 'react-number-format';\n\nfunction CardExpiry(props) {\n  const format = (val) => {\n    if (val === '') return '';\n    let month = val.substring(0, 2);\n    const year = val.substring(2, 4);\n\n    if (month.length === 1 && month[0] > 1) {\n      month = `0${month[0]}`;\n    } else if (month.length === 2) {\n      // set the lower and upper boundary\n      if (Number(month) === 0) {\n        month = `01`;\n      } else if (Number(month) > 12) {\n        month = '12';\n      }\n    }\n\n    return `${month}/${year}`;\n  };\n\n  return <NumberFormatBase {...props} format={format} />;\n}\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/card-expiry-field-eovgoh?fontsize=14&hidenavigation=1&theme=dark&view=preview",title:"Card Expiry Field",className:"csb",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("p",null,"A couple of time we want to get all the features of NumericFormat or PatterFormat, and apply some customization on top of it. Well NumberFormat allows to do that as well. It provides\n",(0,o.kt)("inlineCode",{parentName:"p"},"usePatternFormat")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useNumericFormat")," hook which can be used in conjunction with NumberFormatBase."),(0,o.kt)("p",null,"Let's take the same example of Card Expiry field."),(0,o.kt)("h3",{id:"card-expiry-field-with-usepatternformat"},"Card expiry field with usePatternFormat"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function CardExpiry(props) {\n  /**\n   * usePatternFormat, returns all the props required for NumberFormatBase\n   * which we can extend in between\n   */\n  const { format, ...rest } = usePatternFormat({ ...props, format: '##/##' });\n\n  const _format = (val) => {\n    let month = val.substring(0, 2);\n    const year = val.substring(2, 4);\n\n    if (month.length === 1 && month[0] > 1) {\n      month = `0${month[0]}`;\n    } else if (month.length === 2) {\n      // set the lower and upper boundary\n      if (Number(month) === 0) {\n        month = `01`;\n      } else if (Number(month) > 12) {\n        month = '12';\n      }\n    }\n\n    return format(`${month}${year}`);\n  };\n\n  return <NumberFormatBase format={_format} {...rest} />;\n}\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/card-expiry-field-pattern-format-3yzksf?fontsize=14&hidenavigation=1&theme=dark&view=preview",title:"Card Expiry Field (Pattern Format)",className:"csb",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("p",null,"Another example for NumericFormat could be support for custom numerals."),(0,o.kt)("h3",{id:"custom-numeral-example"},"Custom numeral example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const persianNumeral = ['\u06f0', '\u06f1', '\u06f2', '\u06f3', '\u06f4', '\u06f5', '\u06f6', '\u06f7', '\u06f8', '\u06f9'];\n\nfunction CustomNumeralNumericFormat(props) {\n  const { format, removeFormatting, ...rest } = useNumericFormat(props);\n\n  const _format = (val) => {\n    const _val = format(val);\n    return _val.replace(/\\d/g, ($1) => persianNumeral[Number($1)]);\n  };\n\n  const _removeFormatting = (val) => {\n    const _val = val.replace(new RegExp(persianNumeral.join('|'), 'g'), ($1) =>\n      persianNumeral.indexOf($1),\n    );\n\n    return removeFormatting(_val);\n  };\n\n  return <NumberFormatBase format={_format} removeFormatting={_removeFormatting} {...rest} />;\n}\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/custom-numeral-numer-format-forked-s8e1s4?fontsize=14&hidenavigation=1&theme=dark&view=preview",title:"Custom Numeral (Numer Format)",className:"csb",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})))}d.isMDXComponent=!0}}]);