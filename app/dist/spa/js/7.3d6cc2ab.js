(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"17d7":function(t,e,a){},6707:function(t,e,a){"use strict";a("17d7")},"8b93":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("fb6a"),a("ddb0");var i=a("2f62");const s=function(t,e){const a=Object(i.b)(t,e),s={};for(const[e,i]of Object.entries(a))s[e]={get:i},s[e].set=function(a){const i="set"+((s=e).charAt(0).toUpperCase()+s.slice(1));var s;this.$store.commit(t+"/"+i,a)};return s}},dff9:function(t,e,a){"use strict";a.r(e);var i=a("ded3"),s=a.n(i),c=a("bd4c"),n=a("9e62"),r=a("8b93"),l={name:"PageSaveHarvest",data:()=>({imageBaseURL:"http://localhost:3030/api/"}),methods:{save:function(){if(console.group("save harvest log entry"),this.crateSelected._id&&this.cropSelected._id&&this.placeSelected._id&&this.scaleStable){new(0,this.$FeathersVuex.api.Harvest)({crate:this.crateSelected,crop:this.cropSelected,place:this.placeSelected,crateTareWeight:this.crateSelected.tareWeight,cropText:this.cropSelected.text,placeText:this.placeSelected.text,weight:this.currentWeight,scaleUnit:this.scaleUnit,createdAt:new Date}).save()}else this.$q.notify({color:"negative",message:"Please Check that all requirements are filled.",icon:"report_problem"});console.groupEnd()}},computed:s()(s()({currentWeight:function(){let t=this.totalWeight;return t&&!isNaN(t)?this.crateSelected&&this.crateSelected.tareWeight&&(t-=this.crateSelected.tareWeight,t=t.toFixed(2)):t=0,t}},Object(r.a)("localconfig",["btnSize","btnSpace","crateSelected","cropSelected","placeSelected","totalWeight","scaleStable","scaleUnit"])),{},{harvestParams:()=>({query:{$limit:5,$sort:{createdAt:-1}}}),lang:function(){let t=this.$q.lang.isoName;return t||(t="de"),t}}),mixins:[Object(n.b)({service:"harvest"})],filters:{formatWeight:(t,e="de")=>t.toLocaleString(e,{minimumFractionDigits:2,maximumFractionDigits:2}),formatdate:(t,e="HH:mm:ss DD.MM.YYYY")=>c.a.formatDate(new Date(t),e),toLocal:(t,e="de")=>new Date(t).toLocaleString(e)},components:{}},o=(a("6707"),a("2877")),d=a("9989"),h=a("27f9"),u=a("1c1c"),m=a("66e5"),f=a("4074"),p=a("cb32"),g=a("9c40"),b=a("eebe"),v=a.n(b),_=Object(o.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"fit"},[a("section",{staticClass:"fit column no-wrap justify-between items-stretch content-stretch"},[a("div",{staticClass:"q-mt-md"},[a("q-input",{staticClass:"weight_display",attrs:{"input-class":"text-right",filled:"","hide-bottom-space":"","item-aligned":"","label-slot":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.save()}},scopedSlots:t._u([{key:"label",fn:function(){return[a("div",{staticClass:"row justify-between items-start content-start",staticStyle:{"font-size":"2em","line-height":"2em"}},[a("div",{},[t._v("\n                            "+t._s(t.$t("weight"))+"\n                        ")]),a("div",{staticStyle:{"font-size":"0.8em"}},[t._v("\n                            "+t._s(t._f("formatWeight")(t.totalWeight,t.lang))+" "+t._s(t.scaleUnit)+" "+t._s(t.$t("scale"))+" -\n                            Tare: "+t._s(t._f("formatWeight")(t.crateSelected.tareWeight,t.lang))+" "+t._s(t.scaleUnit)+"\n                        ")])])]},proxy:!0},{key:"append",fn:function(){return[t._v("\n                    "+t._s(t.scaleUnit)+"\n                ")]},proxy:!0}]),model:{value:t.currentWeight,callback:function(e){t.currentWeight=e},expression:"currentWeight"}})],1),a("section",{staticClass:"row justify-between items-stretch content-stretch"},[a("div",{staticStyle:{flex:"1 1 auto",padding:"1em"}},[a("q-list",t._l(t.harvest,(function(e){return a("q-item",{key:e._id},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{rounded:""}},[a("img",{attrs:{src:t.imageBaseURL+e.crop.image}})])],1),a("q-item-section",[t._v("\n                            "+t._s(e.crop.text)+" "),a("br"),t._v("\n                            "+t._s(e.place.text)+" |\n                            "+t._s(e.weight)+" "+t._s(e.scaleUnit)+"\n                            "),t._v("\n                            "+t._s(t._f("toLocal")(e.createdAt,t.lang))+"\n                        ")])],1)})),1)],1),a("q-btn",{staticStyle:{width:"80mm",height:"80mm",flex:"0 1 auto","margin-right":"0.2em"},attrs:{label:t.$t("save"),disable:!t.scaleStable,icon:"mdi-database-plus",ripple:{early:!0,color:"orange"},stack:"",size:"20mm"},on:{click:function(e){return t.save()}}})],1)])])}),[],!1,null,"78f3ef0a",null);e.default=_.exports;v()(_,"components",{QPage:d.a,QInput:h.a,QList:u.a,QItem:m.a,QItemSection:f.a,QAvatar:p.a,QBtn:g.a})}}]);
//# sourceMappingURL=7.3d6cc2ab.js.map