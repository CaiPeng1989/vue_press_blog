(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{25:function(t,e,n){},39:function(t,e,n){"use strict";var a=n(25);n.n(a).a},40:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a=n(4),s=n(0);const o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={name:"SWUpdatePopup",data:()=>({rawPopupConfig:{message:"发现新内容可用",buttonText:"刷新"},updateEvent:null}),computed:{popupConfig(){return Object(s.g)(this,this.rawPopupConfig)},enabled(){return Boolean(this.popupConfig&&this.updateEvent)},message(){const t=this.popupConfig;return t&&t.message||o["/"].message},buttonText(){const t=this.popupConfig;return t&&t.buttonText||o["/"].buttonText}},created(){a.a.$on("sw-updated",this.onSWUpdated),!0==={message:"发现新内容可用",buttonText:"刷新"}&&(this.rawPopupConfig=o)},methods:{onSWUpdated(t){this.updateEvent=t},reload(){this.updateEvent&&(this.updateEvent.skipWaiting().then(()=>{location.reload(!0)}),this.updateEvent=null)}}},p=(n(39),n(2)),i=Object(p.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)+"\n\n      "),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"03f17113",null);e.default=i.exports},69:function(t,e,n){"use strict";var a=n(40);n.n(a).a},74:function(t,e,n){"use strict";n.r(e);var a={components:{SWUpdatePopup:n(45).default}},s=(n(69),n(2)),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.enabled,s=e.reload,o=e.message,u=e.buttonText;return a?n("div",{staticClass:"my-sw-update-popup"},[t._v("\n    "+t._s(o)),n("br"),t._v(" "),n("button",{on:{click:s}},[t._v(t._s(u))])]):t._e()}}],null,!0)})}),[],!1,null,null,null);e.default=o.exports}}]);