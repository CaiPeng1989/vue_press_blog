(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{18:function(t,e,n){},32:function(t,e,n){"use strict";var a=n(18);n.n(a).a},33:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(3),s=n(0);const o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={data:()=>({rawPopupConfig:{message:"发现新内容可用",buttonText:"刷新"},updateEvent:null}),created(){a.a.$on("sw-updated",this.onSWUpdated),!0==={message:"发现新内容可用",buttonText:"刷新"}&&(this.rawPopupConfig=o)},computed:{popupConfig(){return Object(s.g)(this,this.rawPopupConfig)},enabled(){return Boolean(this.popupConfig&&this.updateEvent)},message(){const t=this.popupConfig;return t&&t.message||o["/"].message},buttonText(){const t=this.popupConfig;return t&&t.buttonText||o["/"].buttonText}},methods:{onSWUpdated(t){this.updateEvent=t},reload(){this.updateEvent&&(this.updateEvent.skipWaiting().then(()=>{location.reload(!0)}),this.updateEvent=null)}}},p=(n(32),n(2)),i=Object(p.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"ef6a919a",null);e.default=i.exports},62:function(t,e,n){"use strict";var a=n(33);n.n(a).a},66:function(t,e,n){"use strict";n.r(e);var a={components:{SWUpdatePopup:n(38).default}},s=(n(62),n(2)),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){e.enabled;var a=e.reload,s=e.message,o=e.buttonText;return n("div",{staticClass:"my-sw-update-popup"},[t._v("\n    "+t._s(s)),n("br"),t._v(" "),n("button",{on:{click:a}},[t._v(t._s(o))])])}}])})}),[],!1,null,null,null);e.default=o.exports}}]);