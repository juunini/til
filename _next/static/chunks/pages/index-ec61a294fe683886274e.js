_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"23aj":function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t("dFpu"),o=t("XGAF"),a=function(e){return{href:e,contents:e,postfix:"\ub144"}},c=!0;function u(e){var n=e.years;return Object(r.jsx)(o.a,{props:n.map(a)})}},"92+x":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},Bbxu:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("dFpu"),o=t("jwKN"),a=t.n(o);function c(e){var n=e.href,t=e.contents,o=e.postfix,c=void 0===o?"":o;return Object(r.jsx)(a.a,{href:"/til/"+n,children:t+c})}},"J+VY":function(e,n,t){"use strict";var r=t("8c/l"),o=t("SeWo");n.__esModule=!0,n.default=void 0;var a=o(t("RaGI")),c=t("ZDzb"),u=t("D29E"),i=t("ZtFd"),f={};function s(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var l=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",l=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=l.href,p=l.as,v=e.children,h=e.replace,b=e.shallow,_=e.scroll,w=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=a.Children.only(v),j=y&&"object"===typeof y&&y.ref,x=(0,i.useIntersection)({rootMargin:"200px"}),E=r(x,2),m=E[0],g=E[1],L=a.default.useCallback((function(e){m(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,m]);(0,a.useEffect)((function(){var e=g&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof w?w:t&&t.locale,o=f[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(t,d,p,{locale:r})}),[p,d,g,w,n,t]);var M={ref:L,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,t,d,p,h,b,_,w)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),s(t,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var N="undefined"!==typeof w?w:t&&t.locale,k=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,N,t&&t.locales,t&&t.domainLocales);M.href=k||(0,c.addBasePath)((0,c.addLocale)(p,N,t&&t.defaultLocale))}return a.default.cloneElement(y,M)};n.default=l},XGAF:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("dFpu"),o=t("Bbxu");function a(e){var n=e.props;return Object(r.jsx)("ul",{children:n.map((function(e){var n=e.href,t=e.contents,a=e.postfix;return Object(r.jsx)("li",{children:Object(r.jsx)(o.a,{href:n,contents:t,postfix:a})},n)}))})}},ZtFd:function(e,n,t){"use strict";var r=t("8c/l");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=(0,o.useRef)(),f=(0,o.useState)(!1),s=r(f,2),l=s[0],d=s[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||l||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,l]);return(0,o.useEffect)((function(){if(!c&&!l){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[l]),[p,l]};var o=t("RaGI"),a=t("m5vH"),c="undefined"!==typeof IntersectionObserver;var u=new Map},jwKN:function(e,n,t){e.exports=t("J+VY")}},[["92+x",0,2,1]]]);