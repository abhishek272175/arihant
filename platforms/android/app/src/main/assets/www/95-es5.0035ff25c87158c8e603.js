function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{dl67:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),o=function n(){_classCallCheck(this,n)},u=e("pMnS"),i=e("MKJQ"),r=e("sZkV"),a=e("iInd"),s=e("SVse"),c=e("s7LF"),b=e("lGQG"),g=e("3LUQ"),p=e("X+KH"),d=e("t8sF"),h=e("Pn9U"),f=e("Yttj"),m=function(){function n(l,e,t,o,u,i,r,a,s,c,b){_classCallCheck(this,n),this.file=l,this.camera=e,this.DomSanitizer=t,this.webview=o,this.authService=u,this.navCtrl=i,this.alertService=r,this.modalCtrl=a,this.router=s,this.storage=c,this.userData=b,this.signup={message:"",subject:"",documentId:"",status:"",created_by:""},this.submitted=!1,this.optionss={quality:80,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,sourceType:this.camera.PictureSourceType.CAMERA,correctOrientation:!0,targetWidth:800,targetHeight:800}}return _createClass(n,[{key:"takePicture",value:function(){var n=this;this.camera.getPicture(this.optionss).then((function(l){n.selectedImage=n.webview.convertFileSrc(l),n.file.resolveLocalFilesystemUrl(l).then((function(l){l.file((function(l){console.log(l),n.documentimg=l}))}))}),(function(n){}))}},{key:"ngOnInit",value:function(){}},{key:"onSignup",value:function(){var n=this;if(this.submitted=!0,""!=this.signup.message&&""!=this.signup.subject){var l=this.documentimg;this.documentimg?this.authService.getToken().then((function(e){if(null!=e){n.storage.get("user_id").then((function(l){n.utype=l}));var t=new FileReader;t.readAsArrayBuffer(l),t.onloadend=function(){var e=new Blob([t.result],{type:l.type}),o=new FormData;o.append("documentId",e,l.name),o.append("message",n.signup.message),o.append("subject",n.signup.subject),o.append("status","Open"),o.append("created_by",n.utype),n.alertService.presentLoading(),n.authService.add_request(o).subscribe((function(l){n.apiresponse=l,1==n.apiresponse.status?(n.router.navigateByUrl("/tickets"),n.alertService.presentToast(n.apiresponse.message),n.alertService.removeLoading()):(n.alertService.presentToast(n.apiresponse.message),n.alertService.removeLoading())}),(function(l){console.log(l),n.alertService.removeLoading()}),(function(){}))}}})):this.storage.get("user_id").then((function(l){n.utype=l;var e=new FormData;e.append("message",n.signup.message),e.append("subject",n.signup.subject),e.append("status","Open"),e.append("created_by",n.utype),n.alertService.presentLoading(),n.authService.add_request(e).subscribe((function(l){n.apiresponse=l,1==n.apiresponse.status?(n.router.navigateByUrl("/tickets"),n.alertService.presentToast(n.apiresponse.message),n.alertService.removeLoading()):(n.alertService.presentToast(n.apiresponse.message),n.alertService.removeLoading())}),(function(l){console.log(l),n.alertService.removeLoading()}),(function(){}))}))}}}]),n}(),C=e("cUpR"),k=e("xgBC"),v=t.nb({encapsulation:0,styles:[["[_nghost-%COMP%]{--ion-color-secondary:#b99044;--ion-color-light:#303030;--ion-color-light2:#b99044}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:#303030}[_nghost-%COMP%]   ion-title[_ngcontent-%COMP%]{color:#b99044}[_nghost-%COMP%]   .sc-ion-buttons-md-s[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{--background-hover:currentColor;color:#fff}[_nghost-%COMP%]   .bg-content[_ngcontent-%COMP%]{--background:#ffffff}[_nghost-%COMP%]   .header-inner[_ngcontent-%COMP%]{text-align:center;padding:0;margin:0}[_nghost-%COMP%]   .header-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#b99044;font-size:20px;font-weight:500;margin-bottom:20px}[_nghost-%COMP%]   .header-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#303030;font-size:12px;font-weight:400}[_nghost-%COMP%]   .inner-page[_ngcontent-%COMP%]{margin:0 20px;padding:0}[_nghost-%COMP%]   .bg-yellow[_ngcontent-%COMP%]{background-color:#b99044}[_nghost-%COMP%]   .mb-30[_ngcontent-%COMP%]{margin-bottom:30px}[_nghost-%COMP%]   .mt-30[_ngcontent-%COMP%]{margin-top:30px}[_nghost-%COMP%]   .content-bg[_ngcontent-%COMP%]{background-color:#303030;margin:20px;padding:20px;box-shadow:4px 4px 10px 0 rgba(0,0,0,.5);width:90%;min-height:330px}[_nghost-%COMP%]   .label-floating.sc-ion-label-md-h[_ngcontent-%COMP%], [_nghost-%COMP%]   .label-stacked.sc-ion-label-md-h[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .native-input.sc-ion-input-md[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   ion-input[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   ion-textarea[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .sent-btn[_ngcontent-%COMP%]{border:1px solid #b99044;height:45px;background:#b99044;color:#fff;font-weight:500;text-transform:uppercase;font-size:16px;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}[_nghost-%COMP%]   .sent-btn[_ngcontent-%COMP%]:hover{background:#fff;color:#b99044}[_nghost-%COMP%]   .register-btn[_ngcontent-%COMP%]{border:1px solid #b99044;height:45px;background:#fff;color:#b99044;font-weight:500;text-transform:uppercase;font-size:16px;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}[_nghost-%COMP%]   .register-btn[_ngcontent-%COMP%]:hover{background:#b99044;color:#fff}[_nghost-%COMP%]   .btn-box[_ngcontent-%COMP%]{padding:20px 0}[_nghost-%COMP%]   .mt-15[_ngcontent-%COMP%]{margin-top:15px}[_nghost-%COMP%]   .btn-create[_ngcontent-%COMP%]{height:48px;color:#fff;margin-bottom:30px;background-color:#b99044}"]],data:{}});function _(n){return t.Lb(0,[(n()(),t.pb(0,0,null,null,0,"img",[["style","height: 50px; width: 70px;"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){var e=l.component;n(l,0,0,e.DomSanitizer.bypassSecurityTrustUrl(e.selectedImage))}))}function P(n){return t.Lb(0,[(n()(),t.pb(0,0,null,null,10,"ion-header",[],null,null,null,i.pb,i.t)),t.ob(1,49152,null,0,r.C,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,i.Rb,i.V)),t.ob(3,49152,null,0,r.Ab,[t.h,t.k,t.x],null,null),(n()(),t.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.ab,i.e)),t.ob(5,49152,null,0,r.m,[t.h,t.k,t.x],null,null),(n()(),t.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,i.Bb,i.G)),t.ob(7,49152,null,0,r.S,[t.h,t.k,t.x],null,null),(n()(),t.pb(8,0,null,0,2,"ion-title",[],null,null,null,i.Qb,i.U)),t.ob(9,49152,null,0,r.yb,[t.h,t.k,t.x],null,null),(n()(),t.Jb(-1,0,["Create Ticket"])),(n()(),t.pb(11,0,null,null,66,"ion-content",[["class","bg-content"]],null,null,null,i.jb,i.n)),t.ob(12,49152,null,0,r.v,[t.h,t.k,t.x],null,null),(n()(),t.pb(13,0,null,0,5,"div",[["class","inner-page mt-15"]],null,null,null,null,null)),(n()(),t.pb(14,0,null,null,4,"ion-button",[["class","btn-create"],["color","light2"],["expand","block"],["routerDirection","forward"],["routerLink","/tickets"],["type","submit"]],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t.Bb(n,16).onClick()&&o),"click"===l&&(o=!1!==t.Bb(n,17).onClick(e)&&o),o}),i.Z,i.d)),t.ob(15,49152,null,0,r.l,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],routerDirection:[2,"routerDirection"],type:[3,"type"]},null),t.ob(16,16384,null,0,a.n,[a.m,a.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.ob(17,737280,null,0,r.Kb,[s.h,r.Gb,t.k,a.m,[2,a.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),t.Jb(-1,0,["All Tickets"])),(n()(),t.pb(19,0,null,0,58,"div",[["class","content-bg"]],null,null,null,null,null)),(n()(),t.pb(20,0,null,null,2,"div",[["class","header-inner"]],null,null,null,null,null)),(n()(),t.pb(21,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["Create new ticket"])),(n()(),t.pb(23,0,null,null,54,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,e){var o=!0;return"submit"===l&&(o=!1!==t.Bb(n,25).onSubmit(e)&&o),"reset"===l&&(o=!1!==t.Bb(n,25).onReset()&&o),o}),null,null)),t.ob(24,16384,null,0,c.m,[],null,null),t.ob(25,4210688,[["signupForm",4]],0,c.h,[[8,null],[8,null]],null,null),t.Gb(2048,null,c.a,null,[c.h]),t.ob(27,16384,null,0,c.g,[[4,c.a]],null,null),(n()(),t.pb(28,0,null,null,36,"ion-list",[["class","ion-no-margin ion-no-padding"],["lines","full"]],null,null,null,i.Ab,i.D)),t.ob(29,49152,null,0,r.P,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.pb(30,0,null,0,13,"ion-item",[["color","light"]],null,null,null,i.xb,i.w)),t.ob(31,49152,null,0,r.I,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.pb(32,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.yb,i.C)),t.ob(33,49152,null,0,r.O,[t.h,t.k,t.x],{position:[0,"position"]},null),(n()(),t.Jb(-1,0,["Ticket Subject"])),(n()(),t.pb(35,0,null,0,8,"ion-input",[["autocapitalize","off"],["name","subject"],["required",""],["spellcheck","false"],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t.Bb(n,38)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t.Bb(n,38)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(u.signup.subject=e)&&o),o}),i.rb,i.v)),t.ob(36,16384,null,0,c.j,[],{required:[0,"required"]},null),t.Gb(1024,null,c.c,(function(n){return[n]}),[c.j]),t.ob(38,16384,null,0,r.Mb,[t.k],null,null),t.Gb(1024,null,c.d,(function(n){return[n]}),[r.Mb]),t.ob(40,671744,[["subject",4]],0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,c.e,null,[c.i]),t.ob(42,16384,null,0,c.f,[[4,c.e]],null,null),t.ob(43,49152,null,0,r.H,[t.h,t.k,t.x],{autocapitalize:[0,"autocapitalize"],name:[1,"name"],required:[2,"required"],spellcheck:[3,"spellcheck"],type:[4,"type"]},null),(n()(),t.pb(44,0,null,0,13,"ion-item",[["color","light"]],null,null,null,i.xb,i.w)),t.ob(45,49152,null,0,r.I,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.pb(46,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.yb,i.C)),t.ob(47,49152,null,0,r.O,[t.h,t.k,t.x],{position:[0,"position"]},null),(n()(),t.Jb(-1,0,["Ticket Message"])),(n()(),t.pb(49,0,null,0,8,"ion-textarea",[["autocapitalize","off"],["name","message"],["required",""],["spellcheck","false"],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t.Bb(n,52)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t.Bb(n,52)._handleInputEvent(e.target)&&o),"ngModelChange"===l&&(o=!1!==(u.signup.message=e)&&o),o}),i.Pb,i.T)),t.ob(50,16384,null,0,c.j,[],{required:[0,"required"]},null),t.Gb(1024,null,c.c,(function(n){return[n]}),[c.j]),t.ob(52,16384,null,0,r.Mb,[t.k],null,null),t.Gb(1024,null,c.d,(function(n){return[n]}),[r.Mb]),t.ob(54,671744,[["message",4]],0,c.i,[[2,c.a],[6,c.c],[8,null],[6,c.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,c.e,null,[c.i]),t.ob(56,16384,null,0,c.f,[[4,c.e]],null,null),t.ob(57,49152,null,0,r.wb,[t.h,t.k,t.x],{autocapitalize:[0,"autocapitalize"],name:[1,"name"],required:[2,"required"],spellcheck:[3,"spellcheck"]},null),(n()(),t.pb(58,0,null,0,6,"ion-item",[["class","light"]],null,null,null,i.xb,i.w)),t.ob(59,49152,null,0,r.I,[t.h,t.k,t.x],null,null),(n()(),t.pb(60,0,null,0,2,"ion-button",[["color","primary"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.takePicture()&&t),t}),i.Z,i.d)),t.ob(61,49152,null,0,r.l,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.Jb(-1,0,["Upload File"])),(n()(),t.eb(16777216,null,0,1,null,_)),t.ob(64,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(65,0,null,null,12,"div",[["class","btn-box"]],null,null,null,null,null)),(n()(),t.pb(66,0,null,null,11,"ion-row",[],null,null,null,i.Eb,i.I)),t.ob(67,49152,null,0,r.hb,[t.h,t.k,t.x],null,null),(n()(),t.pb(68,0,null,0,4,"ion-col",[],null,null,null,i.ib,i.m)),t.ob(69,49152,null,0,r.u,[t.h,t.k,t.x],null,null),(n()(),t.pb(70,0,null,0,2,"ion-button",[["class","sent-btn"],["color","light2"],["expand","block"],["type","submit"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.onSignup()&&t),t}),i.Z,i.d)),t.ob(71,49152,null,0,r.l,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],type:[2,"type"]},null),(n()(),t.Jb(-1,0,["Create"])),(n()(),t.pb(73,0,null,0,4,"ion-col",[],null,null,null,i.ib,i.m)),t.ob(74,49152,null,0,r.u,[t.h,t.k,t.x],null,null),(n()(),t.pb(75,0,null,0,2,"ion-button",[["class","register-btn"],["color","light3"],["expand","block"]],null,null,null,i.Z,i.d)),t.ob(76,49152,null,0,r.l,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),t.Jb(-1,0,["Cancel"]))],(function(n,l){var e=l.component;n(l,15,0,"light2","block","forward","submit"),n(l,16,0,"/tickets"),n(l,17,0,"forward"),n(l,29,0,"full"),n(l,31,0,"light"),n(l,33,0,"floating"),n(l,36,0,""),n(l,40,0,"subject",e.signup.subject),n(l,43,0,"off","subject","","false","text"),n(l,45,0,"light"),n(l,47,0,"floating"),n(l,50,0,""),n(l,54,0,"message",e.signup.message),n(l,57,0,"off","message","","false"),n(l,61,0,"primary"),n(l,64,0,e.selectedImage),n(l,71,0,"light2","block","submit"),n(l,76,0,"light3","block")}),(function(n,l){n(l,23,0,t.Bb(l,27).ngClassUntouched,t.Bb(l,27).ngClassTouched,t.Bb(l,27).ngClassPristine,t.Bb(l,27).ngClassDirty,t.Bb(l,27).ngClassValid,t.Bb(l,27).ngClassInvalid,t.Bb(l,27).ngClassPending),n(l,35,0,t.Bb(l,36).required?"":null,t.Bb(l,42).ngClassUntouched,t.Bb(l,42).ngClassTouched,t.Bb(l,42).ngClassPristine,t.Bb(l,42).ngClassDirty,t.Bb(l,42).ngClassValid,t.Bb(l,42).ngClassInvalid,t.Bb(l,42).ngClassPending),n(l,49,0,t.Bb(l,50).required?"":null,t.Bb(l,56).ngClassUntouched,t.Bb(l,56).ngClassTouched,t.Bb(l,56).ngClassPristine,t.Bb(l,56).ngClassDirty,t.Bb(l,56).ngClassValid,t.Bb(l,56).ngClassInvalid,t.Bb(l,56).ngClassPending)}))}var x=t.lb("app-create-ticket",m,(function(n){return t.Lb(0,[(n()(),t.pb(0,0,null,null,1,"app-create-ticket",[],null,null,null,P,v)),t.ob(1,114688,null,0,m,[d.a,h.a,C.b,f.a,b.a,r.Gb,g.a,r.Fb,a.m,k.b,p.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),M=function n(){_classCallCheck(this,n)};e.d(l,"CreateTicketPageModuleNgFactory",(function(){return O}));var O=t.mb(o,[],(function(n){return t.yb([t.zb(512,t.j,t.X,[[8,[u.a,x]],[3,t.j],t.v]),t.zb(4608,s.n,s.m,[t.s,[2,s.w]]),t.zb(4608,c.l,c.l,[]),t.zb(4608,r.c,r.c,[t.x,t.g]),t.zb(4608,r.Fb,r.Fb,[r.c,t.j,t.p]),t.zb(4608,r.Jb,r.Jb,[r.c,t.j,t.p]),t.zb(1073742336,s.b,s.b,[]),t.zb(1073742336,c.k,c.k,[]),t.zb(1073742336,c.b,c.b,[]),t.zb(1073742336,r.Cb,r.Cb,[]),t.zb(1073742336,a.q,a.q,[[2,a.v],[2,a.m]]),t.zb(1073742336,M,M,[]),t.zb(1073742336,o,o,[]),t.zb(1024,a.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);