(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0808":function(e,t,a){},"86c1":function(e,t,a){"use strict";a("0808")},"8b93":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("fb6a"),a("ddb0");var s=a("2f62");const i=function(e,t){const a=Object(s.b)(e,t),i={};for(const[t,s]of Object.entries(a))i[t]={get:s},i[t].set=function(a){const s="set"+((i=t).charAt(0).toUpperCase()+i.slice(1));var i;this.$store.commit(e+"/"+s,a)};return i}},dff9:function(e,t,a){"use strict";a.r(t);var s=a("ded3"),i=a.n(s),c=a("bd4c"),n=a("9e62"),l=a("8b93"),o={name:"PageSaveHarvest",data:()=>({imageBaseURL:"http://localhost:3030/api/"}),methods:{save:function(){if(console.group("save harvest log entry"),console.log("crateSelected",this.crateSelected),console.log("cropSelected",this.cropSelected),console.log("placeSelected",this.placeSelected),console.log("totalWeight",this.totalWeight),console.log("currentWeight",this.currentWeight),console.log("scaleStable",this.scaleStable),console.log("scaleUnit",this.scaleUnit),this.crateSelected._id&&this.cropSelected._id&&this.placeSelected._id&&this.scaleStable){new(0,this.$FeathersVuex.api.Harvest)({crate:this.crateSelected,crop:this.cropSelected,place:this.placeSelected,weight:this.currentWeight,scaleUnit:this.scaleUnit,createdAt:new Date}).save()}else this.$q.notify({color:"negative",message:"Please Check that all requirements are filled.",icon:"report_problem"});console.groupEnd()}},computed:i()(i()({currentWeight:function(){let e=this.totalWeight;return!isNaN(e)&&this.crateSelected&&this.crateSelected.tareWeight&&(e-=this.crateSelected.tareWeight,e=e.toFixed(2)),e}},Object(l.a)("localconfig",["btnSize","btnSpace","crateSelected","cropSelected","placeSelected","totalWeight","scaleStable","scaleUnit"])),{},{harvestParams:()=>({query:{$limit:5,$sort:{createdAt:-1}}}),lang:function(){return this.$q.lang.isoName}}),mixins:[Object(n.b)({service:"harvest"})],filters:{formatWeight:(e,t="de")=>e.toLocaleString(t,{minimumFractionDigits:2,maximumFractionDigits:2}),formatdate:(e,t="HH:mm:ss DD.MM.YYYY")=>c.a.formatDate(new Date(e),t),toLocal:(e,t="de")=>new Date(e).toLocaleString(t)},components:{}},r=(a("86c1"),a("2877")),h=a("9989"),d=a("27f9"),u=a("1c1c"),g=a("66e5"),m=a("4074"),p=a("cb32"),f=a("9c40"),b=a("eebe"),S=a.n(b),v=Object(r.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"fit"},[a("section",{staticClass:"fit column no-wrap justify-between items-stretch content-stretch"},[a("div",{staticClass:"q-mt-md"},[a("q-input",{staticClass:"weight_display",attrs:{"input-class":"text-right",filled:"","hide-bottom-space":"","item-aligned":"","label-slot":"",debounce:"500"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.save()}},scopedSlots:e._u([{key:"label",fn:function(){return[a("div",{staticClass:"row justify-between items-start content-start",staticStyle:{"font-size":"2em","line-height":"2em"}},[a("div",{},[e._v("\n                            "+e._s(e.$t("weight"))+"\n                        ")]),a("div",{staticStyle:{"font-size":"0.8em"}},[e._v("\n                            "+e._s(e._f("formatWeight")(e.totalWeight,e.lang))+" "+e._s(e.scaleUnit)+" "+e._s(e.$t("scale"))+" -\n                            Tare: "+e._s(e._f("formatWeight")(e.crateSelected.tareWeight,e.lang))+" "+e._s(e.scaleUnit)+"\n                        ")])])]},proxy:!0},{key:"append",fn:function(){return[e._v("\n                    "+e._s(e.scaleUnit)+"\n                ")]},proxy:!0}]),model:{value:e.currentWeight,callback:function(t){e.currentWeight=t},expression:"currentWeight"}})],1),a("section",{staticClass:"row justify-between items-stretch content-stretch"},[a("div",{staticStyle:{flex:"1 1 auto",padding:"1em"}},[a("q-list",e._l(e.harvest,(function(t){return a("q-item",{key:t._id},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{rounded:""}},[a("img",{attrs:{src:e.imageBaseURL+t.crop.image}})])],1),a("q-item-section",[e._v("\n                            "+e._s(t.crop.text)+" "),a("br"),e._v("\n                            "+e._s(t.place.text)+" |\n                            "+e._s(t.weight)+" "+e._s(t.scaleUnit)+"\n                            "),e._v("\n                            "+e._s(e._f("toLocal")(t.createdAt,e.lang))+"\n                        ")])],1)})),1)],1),a("q-btn",{staticStyle:{width:"80mm",height:"80mm",flex:"0 1 auto","margin-right":"0.2em"},attrs:{label:e.$t("save"),disable:!e.scaleStable,icon:"mdi-database-plus",ripple:{early:!0,color:"orange"},stack:"",size:"20mm"},on:{click:function(t){return e.save()}}})],1)])])}),[],!1,null,"ae540bb6",null);t.default=v.exports;S()(v,"components",{QPage:h.a,QInput:d.a,QList:u.a,QItem:g.a,QItemSection:m.a,QAvatar:p.a,QBtn:f.a})}}]);
//# sourceMappingURL=7.4e89f1fc.js.map