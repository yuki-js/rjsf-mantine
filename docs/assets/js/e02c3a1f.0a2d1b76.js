"use strict";(self.webpackChunk_rjsf_docs=self.webpackChunk_rjsf_docs||[]).push([[5422],{876:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),l=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(m.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,h=p["".concat(m,".").concat(d)]||p[d]||u[d]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9757:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(7896),r=(t(2784),t(876));const i={},o="Arrays",s={unversionedId:"usage/arrays",id:"version-4.2.3/usage/arrays",title:"Arrays",description:"Arrays are defined with a type equal to array, and array items' schemas are specified in the items keyword.",source:"@site/versioned_docs/version-4.2.3/usage/arrays.md",sourceDirName:"usage",slug:"/usage/arrays",permalink:"/react-jsonschema-form/docs/version-4.2.3/usage/arrays",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/versioned_docs/version-4.2.3/usage/arrays.md",tags:[],version:"4.2.3",frontMatter:{},sidebar:"docs",previous:{title:"Usage and Customization",permalink:"/react-jsonschema-form/docs/version-4.2.3/usage/"},next:{title:"Schema definitions and references",permalink:"/react-jsonschema-form/docs/version-4.2.3/usage/definitions"}},m={},l=[{value:"Arrays of a single field",id:"arrays-of-a-single-field",level:2},{value:"Arrays of objects",id:"arrays-of-objects",level:2},{value:"uiSchema for array items",id:"uischema-for-array-items",level:2},{value:"The <code>additionalItems</code> keyword",id:"the-additionalitems-keyword",level:2},{value:"Array item options",id:"array-item-options",level:2},{value:"<code>orderable</code> option",id:"orderable-option",level:3},{value:"<code>addable</code> option",id:"addable-option",level:3},{value:"<code>removable</code> option",id:"removable-option",level:3},{value:"Multiple-choice list",id:"multiple-choice-list",level:2},{value:"Custom widgets",id:"custom-widgets",level:2},{value:"Specifying the minimum or maximum number of items",id:"specifying-the-minimum-or-maximum-number-of-items",level:2},{value:"Inline checkboxes",id:"inline-checkboxes",level:2}],c={toc:l},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"arrays"},"Arrays"),(0,r.kt)("p",null,"Arrays are defined with a type equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"array"),", and array items' schemas are specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," keyword."),(0,r.kt)("h2",{id:"arrays-of-a-single-field"},"Arrays of a single field"),(0,r.kt)("p",null,"Arrays of a single field type can be specified as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "array",\n  items: {\n    type: "string"\n  }\n};\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,r.kt)("h2",{id:"arrays-of-objects"},"Arrays of objects"),(0,r.kt)("p",null,"Arrays of objects can be specified as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "array",\n  items: {\n    type: "object",\n    properties: {\n        name: {\n            type: "string"\n        }\n    }\n  }\n};\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,r.kt)("h2",{id:"uischema-for-array-items"},"uiSchema for array items"),(0,r.kt)("p",null,"To specify a uiSchema that applies to array items, specify the uiSchema value within the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "array",\n  items: {\n    type: "string"\n  }\n};\n\nconst uiSchema = {\n  items: {\n    "ui:widget": "textarea"\n  }\n};\n\nrender((\n  <Form schema={schema} uiSchema={uiSchema} />\n), document.getElementById("app"));\n')),(0,r.kt)("h2",{id:"the-additionalitems-keyword"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"additionalItems")," keyword"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalItems")," keyword allows the user to add additional items of a given schema. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "array",\n  items: {\n    type: "string"\n  },\n  additionalItems: {\n    type: "boolean"\n  }\n};\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,r.kt)("h2",{id:"array-item-options"},"Array item options"),(0,r.kt)("h3",{id:"orderable-option"},(0,r.kt)("inlineCode",{parentName:"h3"},"orderable")," option"),(0,r.kt)("p",null,"Array items are orderable by default, and react-jsonschema-form renders move up/down buttons alongside them. The uiSchema ",(0,r.kt)("inlineCode",{parentName:"p"},"orderable")," options allows you to disable ordering:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "array",\n  items: {\n    type: "string"\n  }\n};\n\nconst uiSchema = {\n  "ui:options":  {\n    orderable: false\n  }\n};\n\nrender((\n  <Form schema={schema} uiSchema={uiSchema} />\n), document.getElementById("app"));\n')),(0,r.kt)("h3",{id:"addable-option"},(0,r.kt)("inlineCode",{parentName:"h3"},"addable")," option"),(0,r.kt)("p",null,"If either ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalItems")," contains a schema object, an add button for new items is shown by default. You can turn this off with the ",(0,r.kt)("inlineCode",{parentName:"p"},"addable")," option in ",(0,r.kt)("inlineCode",{parentName:"p"},"uiSchema"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "array",\n  items: {\n    type: "string"\n  }\n};\n\nconst uiSchema = {\n  "ui:options":  {\n    addable: false\n  }\n};\n\nrender((\n  <Form schema={schema} uiSchema={uiSchema} />\n), document.getElementById("app"));\n')),(0,r.kt)("h3",{id:"removable-option"},(0,r.kt)("inlineCode",{parentName:"h3"},"removable")," option"),(0,r.kt)("p",null,"A remove button is shown by default for an item if ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," contains a schema object, or the item is an ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalItems")," instance. You can turn this off with the ",(0,r.kt)("inlineCode",{parentName:"p"},"removable")," option in ",(0,r.kt)("inlineCode",{parentName:"p"},"uiSchema"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "array",\n  items: {\n    type: "string"\n  }\n};\n\nconst uiSchema = {\n  "ui:options":  {\n    removable: false\n  }\n};\n\nrender((\n  <Form schema={schema} uiSchema={uiSchema} />\n), document.getElementById("app"));\n')),(0,r.kt)("h2",{id:"multiple-choice-list"},"Multiple-choice list"),(0,r.kt)("p",null,"The default behavior for array fields is a list of text inputs with add/remove buttons. There are two alternative widgets for picking multiple elements from a list of choices. Typically this applies when a schema has an ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," list for the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," property of an ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," field, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"uniqueItems")," property set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "array",\n  title: "A multiple-choice list",\n  items: {\n    type: "string",\n    enum: ["foo", "bar", "fuzz", "qux"],\n  },\n  uniqueItems: true\n};\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,r.kt)("p",null,"By default, this will render a multiple select box. If you prefer a list of checkboxes, just set the uiSchema ",(0,r.kt)("inlineCode",{parentName:"p"},"ui:widget")," directive to ",(0,r.kt)("inlineCode",{parentName:"p"},"checkboxes")," for that field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const schema = {\n  type: "array",\n  title: "A multiple-choice list",\n  items: {\n    type: "string",\n    enum: ["foo", "bar", "fuzz", "qux"],\n  },\n  uniqueItems: true\n};\n\nconst uiSchema = {\n  "ui:widget": "checkboxes"\n};\n\nrender((\n  <Form schema={schema} uiSchema={uiSchema} />\n), document.getElementById("app"));\n')),(0,r.kt)("h2",{id:"custom-widgets"},"Custom widgets"),(0,r.kt)("p",null,"In addition to ",(0,r.kt)("a",{parentName:"p",href:"/react-jsonschema-form/docs/version-4.2.3/advanced-customization/custom-templates#arrayfieldtemplate"},"ArrayFieldTemplate")," you use your own widget by providing it to the uiSchema with the property of ",(0,r.kt)("inlineCode",{parentName:"p"},"ui:widget"),". "),(0,r.kt)("p",null,"Example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const CustomSelectComponent = props => {\n  return (\n    <select>\n      {props.value.map((item, index) => (\n        <option key={index} id="custom-select">\n          {item}\n        </option>\n      ))}\n    </select>\n  );\n};\n\nconst schema = {\n  type: "array",\n  title: "A multiple-choice list",\n  items: {\n    type: "string",\n  },\n};\n\nconst uiSchema = {\n  "ui:widget": "CustomSelect"\n};\n\nconst widgets = {\n  CustomSelect: CustomSelectComponent,\n},\n\nrender((<Form schema={schema} uiSchema={uiSchema} widgets={widgets} />), document.getElementById("app"));\n')),(0,r.kt)("h2",{id:"specifying-the-minimum-or-maximum-number-of-items"},"Specifying the minimum or maximum number of items"),(0,r.kt)("p",null,"Note that when an array property is marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"required"),", an empty array is considered valid. If the array needs to be populated, you can specify the minimum number of items using the ",(0,r.kt)("inlineCode",{parentName:"p"},"minItems")," property."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "array",\n  minItems: 2,\n  title: "A multiple-choice list",\n  items: {\n    type: "string",\n    enum: ["foo", "bar", "fuzz", "qux"],\n  },\n  uniqueItems: true\n};\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,r.kt)("p",null,"You can also specify the maximum number of items in an array using the ",(0,r.kt)("inlineCode",{parentName:"p"},"maxItems")," property."),(0,r.kt)("h2",{id:"inline-checkboxes"},"Inline checkboxes"),(0,r.kt)("p",null,"By default, checkboxes are stacked. If you prefer them inline, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"inline")," property to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const schema = {\n  type: "array",\n  minItems: 2,\n  title: "A multiple-choice list",\n  items: {\n    type: "string",\n    enum: ["foo", "bar", "fuzz", "qux"],\n  },\n  uniqueItems: true\n};\n\nconst uiSchema = {\n  "ui:widget": "checkboxes",\n  "ui:options": {\n    inline: true\n  }\n};\n\nrender((\n  <Form schema={schema} uiSchema={uiSchema} />\n), document.getElementById("app"));\n')))}u.isMDXComponent=!0}}]);