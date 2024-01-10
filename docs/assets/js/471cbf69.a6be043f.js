"use strict";(self.webpackChunk_rjsf_docs=self.webpackChunk_rjsf_docs||[]).push([[9226],{876:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>g});var i=t(2784);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,i,a=function(e,r){if(null==e)return{};var t,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=i.createContext({}),c=function(e){var r=i.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},m=function(e){var r=c(e.components);return i.createElement(u.Provider,{value:r},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},d=i.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,g=p["".concat(u,".").concat(d)]||p[d]||l[d]||n;return t?i.createElement(g,o(o({ref:r},m),{},{components:t})):i.createElement(g,o({ref:r},m))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4624:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=t(7896),a=(t(2784),t(876));const n={},o="4.x Upgrade Guide",s={unversionedId:"migration-guides/v4.x upgrade guide",id:"migration-guides/v4.x upgrade guide",title:"4.x Upgrade Guide",description:"Breaking changes",source:"@site/docs/migration-guides/v4.x upgrade guide.md",sourceDirName:"migration-guides",slug:"/migration-guides/v4.x upgrade guide",permalink:"/react-jsonschema-form/docs/migration-guides/v4.x upgrade guide",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/migration-guides/v4.x upgrade guide.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"3.x Upgrade Guide",permalink:"/react-jsonschema-form/docs/migration-guides/v3.x upgrade guide"},next:{title:"5.x Upgrade Guide",permalink:"/react-jsonschema-form/docs/migration-guides/v5.x upgrade guide"}},u={},c=[{value:"Breaking changes",id:"breaking-changes",level:2},{value:"React version",id:"react-version",level:3},{value:"@rjsf/material-ui package - Minimum version of material-ui 4",id:"rjsfmaterial-ui-package---minimum-version-of-material-ui-4",level:3}],m={toc:c},p="wrapper";function l(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,i.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"4x-upgrade-guide"},"4.x Upgrade Guide"),(0,a.kt)("h2",{id:"breaking-changes"},"Breaking changes"),(0,a.kt)("h3",{id:"react-version"},"React version"),(0,a.kt)("p",null,"No longer actively supporting React version < 16.3. The minimum supported version of React is now 16.3. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form/pull/2605#discussion_r792685354"},"Discussion can be found here")),(0,a.kt)("h3",{id:"rjsfmaterial-ui-package---minimum-version-of-material-ui-4"},"@rjsf/material-ui package - Minimum version of material-ui 4"),(0,a.kt)("p",null,"If you are using the material-ui 4 theme, @material-ui/core and @material-ui/icons packages should be updated to the latest versions. The minimum versions supported for @material-ui/core and @material-ui/icons are 4.12.0 and 4.11.1 respectively. This change is required for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/material-ui"},"support for the material-ui version 5 theme")))}l.isMDXComponent=!0}}]);