(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{"Y+an":function(n,l,u){"use strict";u.r(l);var o=u("8Y7J");class e{}var t=u("pMnS"),i=u("MKJQ"),r=u("sZkV"),a=u("R/QG"),c=u("lGQG");class s{constructor(n,l,u){this.events=n,this.authService=l,this.router=u}ngOnInit(){this.events.publish("toggleMenu",{})}checklogin_for_package(){this.authService.getToken().then(n=>{this.router.navigateByUrl(null!=n?"/tickets":"/login")})}ourservices(){this.router.navigateByUrl("/our-services")}ionViewWillEnter(){this.events.publish("toggleMenu",{})}}var g=u("iInd"),b=o.nb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:#303030}[_nghost-%COMP%]   ion-title[_ngcontent-%COMP%]{color:#b99044;text-transform:uppercase}[_nghost-%COMP%]   .sc-ion-buttons-md-s[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{--background-hover:currentColor;color:#fff}[_nghost-%COMP%]   .bg-content[_ngcontent-%COMP%]{--background:#ffffff}[_nghost-%COMP%]   .header-inner[_ngcontent-%COMP%]{text-align:left;padding:20px;margin:0}[_nghost-%COMP%]   .header-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#b99044;font-size:18px;font-weight:500;margin-bottom:10px}[_nghost-%COMP%]   .header-inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#303030;font-size:15px;font-weight:500;margin-bottom:10px}[_nghost-%COMP%]   .header-inner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#303030;font-size:13px;font-weight:500;margin-bottom:10px;margin-top:0}[_nghost-%COMP%]   .header-inner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#b99044}[_nghost-%COMP%]   .header-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#303030;font-size:12px;font-weight:400}[_nghost-%COMP%]   .header-services[_ngcontent-%COMP%]{text-align:center;padding:20px;margin:0}[_nghost-%COMP%]   .header-services[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#b99044;font-size:18px;font-weight:500;margin-bottom:10px}[_nghost-%COMP%]   .header-services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#303030;font-size:15px;font-weight:500;margin-bottom:10px}[_nghost-%COMP%]   .header-services[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#303030;font-size:13px;font-weight:500;margin-bottom:10px;margin-top:0}[_nghost-%COMP%]   .header-services[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#b99044}[_nghost-%COMP%]   .header-services[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#303030;font-size:12px;font-weight:400}[_nghost-%COMP%]   .header-team[_ngcontent-%COMP%]{text-align:center;padding:20px;margin:0}[_nghost-%COMP%]   .header-team[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#b99044;font-size:18px;font-weight:500;margin-bottom:10px}[_nghost-%COMP%]   .header-team[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#303030;font-size:15px;font-weight:500;margin-bottom:10px}[_nghost-%COMP%]   .header-team[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#303030;font-size:13px;font-weight:500;margin-bottom:10px;margin-top:0}[_nghost-%COMP%]   .header-team[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#b99044}[_nghost-%COMP%]   .header-team[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#303030;font-size:12px;font-weight:400}[_nghost-%COMP%]   .inner-content[_ngcontent-%COMP%]{padding:0 20px}[_nghost-%COMP%]   .query-btn[_ngcontent-%COMP%]{--background:#0166b3}[_nghost-%COMP%]   .query-btn[_ngcontent-%COMP%]:hover{--background:#ffffff;color:#b99044}[_nghost-%COMP%]   .inner-card[_ngcontent-%COMP%]{background-color:#303030;padding:30px;margin:20px;text-align:left;box-shadow:0 0 20px rgba(0,0,0,.08)}[_nghost-%COMP%]   .inner-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:#b99044;margin-bottom:10px;margin-top:0}[_nghost-%COMP%]   .inner-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px;font-weight:400;color:#fff;margin-bottom:10px;margin-top:0}[_nghost-%COMP%]   .inner-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:300;color:#fff;margin-bottom:10px;margin-top:0}[_nghost-%COMP%]   .inner-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0 0 10px;padding:0 0 0 20px}[_nghost-%COMP%]   .inner-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:12px;font-weight:300;color:#b99044;padding:0 0 5px}[_nghost-%COMP%]   .history-bg[_ngcontent-%COMP%]{background:url(bg.44394eeadab5415dd60e.jpg) 100% 100%/cover no-repeat}[_nghost-%COMP%]   .history[_ngcontent-%COMP%]{padding:10px 20px;margin:0}[_nghost-%COMP%]   .inner-frame[_ngcontent-%COMP%]{background:url(frame1.04f8ff3dbbf715b2af56.png) 100% 100%/cover no-repeat;padding:20px 0;text-align:center}[_nghost-%COMP%]   .inner-frame[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:14px;color:#303030;font-weight:500;margin-top:15px;margin-bottom:10px}[_nghost-%COMP%]   .inner-frame[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:12px;color:#303030;font-weight:500;margin-top:0;margin-bottom:10px}[_nghost-%COMP%]   .frame-cont[_ngcontent-%COMP%]{padding:10px}[_nghost-%COMP%]   .frame-cont[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:14px;color:#303030;font-weight:500;margin-bottom:10px}[_nghost-%COMP%]   .frame-cont[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;color:#303030;font-weight:300;margin-top:0;margin-bottom:10px}[_nghost-%COMP%]   .inner-card-new[_ngcontent-%COMP%]{box-shadow:0 0 20px rgba(0,0,0,.08);padding:20px;margin:10px}[_nghost-%COMP%]   .inner-card-new[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;font-weight:500;margin-bottom:5px;margin-top:0}[_nghost-%COMP%]   .inner-card-new[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:400;margin-bottom:5px;margin-top:0}[_nghost-%COMP%]   .inner-card-new[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:12px;font-weight:400;margin-bottom:5px;margin-top:0;color:#b99044;text-decoration:none}[_nghost-%COMP%]   .mb-10[_ngcontent-%COMP%]{margin-bottom:10px}[_nghost-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:15px;color:#b99044}[_nghost-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .query-block[_ngcontent-%COMP%]{margin:0;padding:10px 0}[_nghost-%COMP%]   .query-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}[_nghost-%COMP%]   .query-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:15px;font-weight:500;margin-bottom:5px;margin-top:0}[_nghost-%COMP%]   .query-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:400;margin-bottom:5px;margin-top:0}[_nghost-%COMP%]   .bg-light-yellow[_ngcontent-%COMP%]{background-color:#fffbf2}[_nghost-%COMP%]   .wrkngprcss[_ngcontent-%COMP%]{width:230px;padding:40px 15px;border:1px solid #000;margin:0 auto;border-radius:100px}[_nghost-%COMP%]   .wrkngprcss[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:15px;font-weight:500;margin-bottom:5px;margin-top:0}[_nghost-%COMP%]   .single-working[_ngcontent-%COMP%]{padding:15px;margin:auto;max-width:180px}[_nghost-%COMP%]   .testinomials[_ngcontent-%COMP%]{margin:0;padding:0 0 10px}[_nghost-%COMP%]   .testinomials[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:400;margin-bottom:5px;margin-top:0}[_nghost-%COMP%]   .testinomials[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:12px;font-weight:500;margin-bottom:5px;margin-top:0}[_nghost-%COMP%]   .testinomials[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px;font-weight:400}"]],data:{}});function p(n){return o.Lb(0,[(n()(),o.pb(0,0,null,null,10,"ion-header",[],null,null,null,i.pb,i.t)),o.ob(1,49152,null,0,r.C,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,i.Rb,i.V)),o.ob(3,49152,null,0,r.Ab,[o.h,o.k,o.x],null,null),(n()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.ab,i.e)),o.ob(5,49152,null,0,r.m,[o.h,o.k,o.x],null,null),(n()(),o.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,i.Bb,i.G)),o.ob(7,49152,null,0,r.S,[o.h,o.k,o.x],null,null),(n()(),o.pb(8,0,null,0,2,"ion-title",[],null,null,null,i.Qb,i.U)),o.ob(9,49152,null,0,r.yb,[o.h,o.k,o.x],null,null),(n()(),o.Jb(-1,0,["Pocket Law"])),(n()(),o.pb(11,0,null,null,151,"ion-content",[["class","bg-content"]],null,null,null,i.jb,i.n)),o.ob(12,49152,null,0,r.v,[o.h,o.k,o.x],null,null),(n()(),o.pb(13,0,null,0,7,"ion-slides",[["pager","true"]],null,[[null,"ionSlideDidChange"]],(function(n,l,u){var e=!0,t=n.component;return"ionSlideDidChange"===l&&(e=!1!==t.SlideDidChange(t.sliderOne,o.Bb(n,14))&&e),e}),i.Jb,i.N)),o.ob(14,49152,[["slideWithNav",4]],0,r.pb,[o.h,o.k,o.x],{options:[0,"options"],pager:[1,"pager"]},null),(n()(),o.pb(15,0,null,0,2,"ion-slide",[],null,null,null,i.Ib,i.M)),o.ob(16,49152,null,0,r.ob,[o.h,o.k,o.x],null,null),(n()(),o.pb(17,0,null,0,0,"img",[["src","assets/img/images/law_banner2.jpg"]],null,null,null,null,null)),(n()(),o.pb(18,0,null,0,2,"ion-slide",[],null,null,null,i.Ib,i.M)),o.ob(19,49152,null,0,r.ob,[o.h,o.k,o.x],null,null),(n()(),o.pb(20,0,null,0,0,"img",[["src","assets/img/images/law_banner1.jpg"]],null,null,null,null,null)),(n()(),o.pb(21,0,null,0,18,"div",[["class","header-inner"]],null,null,null,null,null)),(n()(),o.pb(22,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["About Pocket Law"])),(n()(),o.pb(24,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Expert Second Opinion on Tax & Custom Laws"])),(n()(),o.pb(26,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Through our years of domain experience, we realized a lot of our referral clients have not been properly guided. The fear factors of Tax and Custom laws are making people vulnerable to costly procedures. This is why we dedicatedly focused on offering valuable and fortune saving second opinion for income tax, goods and services or custom law situations."])),(n()(),o.pb(28,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Why Us?"])),(n()(),o.pb(30,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["We dedicatedly focused on offering valuable and fortune saving second opinion for income tax laws, goods and services tax laws or customs law and Companies law situations."])),(n()(),o.pb(32,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Vision"])),(n()(),o.pb(34,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["To be the face who brings the laws into your pocket through our second opinion via connecting our expert knowledge with the latest technology."])),(n()(),o.pb(36,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Mission"])),(n()(),o.pb(38,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["To be the leading Second Opinion provider with a reputation of providing best piece of opinion. By making laws understandable, keep you and your trade free from any penal procedures."])),(n()(),o.pb(40,0,null,0,18,"div",[["class","inner-card"]],null,null,null,null,null)),(n()(),o.pb(41,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["GST & Income Tax Query"])),(n()(),o.pb(43,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Have a query regarding GST or Income Tax ?"])),(n()(),o.pb(45,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["GST and Income Tax related queries are flooding over internet and for each query there are multiple experts \u2013 many of them, however are not even qualified practitioners. At PocketLaw, we have dedicated qualified experts to answer your GST & Income Tax concerns which include;"])),(n()(),o.pb(47,0,null,null,8,"ul",[],null,null,null,null,null)),(n()(),o.pb(48,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["GST and Income Tax related complex issues"])),(n()(),o.pb(50,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Relevant section and case laws citation"])),(n()(),o.pb(52,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Cross questions related to all your fears for the law"])),(n()(),o.pb(54,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Guaranteed Answering of all the queries which are troubling you"])),(n()(),o.pb(56,0,null,null,2,"ion-button",[["class","query-btn"],["shape","round"]],null,[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.checklogin_for_package()&&o),o}),i.Z,i.d)),o.ob(57,49152,null,0,r.l,[o.h,o.k,o.x],{shape:[0,"shape"]},null),(n()(),o.Jb(-1,0,["Ask Your Query"])),(n()(),o.pb(59,0,null,0,4,"div",[["class","header-services"]],null,null,null,null,null)),(n()(),o.pb(60,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Our Services"])),(n()(),o.pb(62,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["We Are Specialized in the Following Services"])),(n()(),o.pb(64,0,null,0,64,"div",[["class","inner-content"]],null,null,null,null,null)),(n()(),o.pb(65,0,null,null,15,"div",[["class","inner-card-new"]],null,null,null,null,null)),(n()(),o.pb(66,0,null,null,14,"ion-row",[],null,null,null,i.Eb,i.I)),o.ob(67,49152,null,0,r.hb,[o.h,o.k,o.x],null,null),(n()(),o.pb(68,0,null,0,2,"ion-col",[["Size","4"]],null,null,null,i.ib,i.m)),o.ob(69,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(70,0,null,0,0,"img",[["alt","Ionic logo"],["src","assets/img/images/icon1.png"]],null,null,null,null,null)),(n()(),o.pb(71,0,null,0,3,"ion-col",[["Size","8"]],null,null,null,i.ib,i.m)),o.ob(72,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(73,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Goods & Services Tax Consultancy"])),(n()(),o.pb(75,0,null,0,5,"ion-col",[["Size","12"]],null,null,null,i.ib,i.m)),o.ob(76,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(77,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["In now a day, GST Laws have replaced many indirect tax laws, which reduced compliance\u2019s huge burden for traders. But at the same time frequent changes in this new law made it difficult for traders to implement it."])),(n()(),o.pb(79,0,null,0,1,"a",[],null,[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.ourservices()&&o),o}),null,null)),(n()(),o.Jb(-1,null,["Read More"])),(n()(),o.pb(81,0,null,null,15,"div",[["class","inner-card-new"]],null,null,null,null,null)),(n()(),o.pb(82,0,null,null,14,"ion-row",[],null,null,null,i.Eb,i.I)),o.ob(83,49152,null,0,r.hb,[o.h,o.k,o.x],null,null),(n()(),o.pb(84,0,null,0,2,"ion-col",[["Size","4"]],null,null,null,i.ib,i.m)),o.ob(85,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(86,0,null,0,0,"img",[["alt","Ionic logo"],["src","assets/img/images/icon3.png"]],null,null,null,null,null)),(n()(),o.pb(87,0,null,0,3,"ion-col",[["Size","8"]],null,null,null,i.ib,i.m)),o.ob(88,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(89,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Customs Law"])),(n()(),o.pb(91,0,null,0,5,"ion-col",[["Size","12"]],null,null,null,i.ib,i.m)),o.ob(92,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(93,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Customs Query are flooding over internet and for each query there are multiple experts \u2013 many of them, however are not even qualified practitioners. "])),(n()(),o.pb(95,0,null,0,1,"a",[],null,[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.ourservices()&&o),o}),null,null)),(n()(),o.Jb(-1,null,["Read More"])),(n()(),o.pb(97,0,null,null,15,"div",[["class","inner-card-new"]],null,null,null,null,null)),(n()(),o.pb(98,0,null,null,14,"ion-row",[],null,null,null,i.Eb,i.I)),o.ob(99,49152,null,0,r.hb,[o.h,o.k,o.x],null,null),(n()(),o.pb(100,0,null,0,2,"ion-col",[["Size","4"]],null,null,null,i.ib,i.m)),o.ob(101,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(102,0,null,0,0,"img",[["alt","Ionic logo"],["src","assets/img/images/income.png"]],null,null,null,null,null)),(n()(),o.pb(103,0,null,0,3,"ion-col",[["Size","8"]],null,null,null,i.ib,i.m)),o.ob(104,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(105,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Income Tax Laws"])),(n()(),o.pb(107,0,null,0,5,"ion-col",[["Size","12"]],null,null,null,i.ib,i.m)),o.ob(108,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(109,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["In recent scenario, Income tax Laws cover a big chunk of the Country, which may or may not be aware of the stringent income tax laws."])),(n()(),o.pb(111,0,null,0,1,"a",[],null,[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.ourservices()&&o),o}),null,null)),(n()(),o.Jb(-1,null,["Read More"])),(n()(),o.pb(113,0,null,null,15,"div",[["class","inner-card-new"]],null,null,null,null,null)),(n()(),o.pb(114,0,null,null,14,"ion-row",[],null,null,null,i.Eb,i.I)),o.ob(115,49152,null,0,r.hb,[o.h,o.k,o.x],null,null),(n()(),o.pb(116,0,null,0,2,"ion-col",[["Size","4"]],null,null,null,i.ib,i.m)),o.ob(117,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(118,0,null,0,0,"img",[["alt","Ionic logo"],["src","assets/img/images/company.png"]],null,null,null,null,null)),(n()(),o.pb(119,0,null,0,3,"ion-col",[["Size","8"]],null,null,null,i.ib,i.m)),o.ob(120,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(121,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Company Law"])),(n()(),o.pb(123,0,null,0,5,"ion-col",[["Size","12"]],null,null,null,i.ib,i.m)),o.ob(124,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(125,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Company Law compliances demand professional opinion, without which fine, penal or prosecutions provisions attract."])),(n()(),o.pb(127,0,null,0,1,"a",[],null,[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.ourservices()&&o),o}),null,null)),(n()(),o.Jb(-1,null,["Read More"])),(n()(),o.pb(129,0,null,0,15,"div",[["class","inner-content bg-light-yellow"]],null,null,null,null,null)),(n()(),o.pb(130,0,null,null,14,"div",[["class","query-block"]],null,null,null,null,null)),(n()(),o.pb(131,0,null,null,13,"ion-row",[],null,null,null,i.Eb,i.I)),o.ob(132,49152,null,0,r.hb,[o.h,o.k,o.x],null,null),(n()(),o.pb(133,0,null,0,2,"ion-col",[["Size","12"]],null,null,null,i.ib,i.m)),o.ob(134,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(135,0,null,0,0,"img",[["alt","Ionic logo"],["src","assets/img/images/gstreturn2.png"]],null,null,null,null,null)),(n()(),o.pb(136,0,null,0,8,"ion-col",[["Size","12"]],null,null,null,i.ib,i.m)),o.ob(137,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(138,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["GST Return"])),(n()(),o.pb(140,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["GST Compliances cost an average business more than 10 man-hours each month. It does not add to the productive time and moreover, your in-house resource has to spend extra time in learning about constant changes to avoid non-compliance and fines. PocketLaw offers you a zero-hassle one stop GST Return filing service, so that you can focus on your core business."])),(n()(),o.pb(142,0,null,0,2,"ion-button",[["class","query-btn"],["shape","round"]],null,[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.checklogin_for_package()&&o),o}),i.Z,i.d)),o.ob(143,49152,null,0,r.l,[o.h,o.k,o.x],{shape:[0,"shape"]},null),(n()(),o.Jb(-1,0,["Ask Your Query "])),(n()(),o.pb(145,0,null,0,15,"div",[["class","inner-content bg-light-yellow"]],null,null,null,null,null)),(n()(),o.pb(146,0,null,null,14,"div",[["class","query-block"]],null,null,null,null,null)),(n()(),o.pb(147,0,null,null,13,"ion-row",[],null,null,null,i.Eb,i.I)),o.ob(148,49152,null,0,r.hb,[o.h,o.k,o.x],null,null),(n()(),o.pb(149,0,null,0,2,"ion-col",[["Size","12"]],null,null,null,i.ib,i.m)),o.ob(150,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(151,0,null,0,0,"img",[["alt","Ionic logo"],["src","assets/img/images/incometaxreturn.png"]],null,null,null,null,null)),(n()(),o.pb(152,0,null,0,8,"ion-col",[["Size","12"]],null,null,null,i.ib,i.m)),o.ob(153,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.pb(154,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Income Tax Return"])),(n()(),o.pb(156,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,["With each passing day, Income Tax laws are becoming stringent. Even for people who are paying their tax with honesty, the laws can get confusing. To avoid any situation of incorrect income tax business filing, connect with our expert CA team at Pocketlaw and benefit from their reliable and profitable income tax return services."])),(n()(),o.pb(158,0,null,0,2,"ion-button",[["class","query-btn"],["shape","round"]],null,[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.checklogin_for_package()&&o),o}),i.Z,i.d)),o.ob(159,49152,null,0,r.l,[o.h,o.k,o.x],{shape:[0,"shape"]},null),(n()(),o.Jb(-1,0,["Ask Your Query "])),(n()(),o.pb(161,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),o.pb(162,0,null,0,0,"br",[],null,null,null,null,null))],(function(n,l){n(l,14,0,l.component.slideOptsOne,"true"),n(l,57,0,"round"),n(l,143,0,"round"),n(l,159,0,"round")}),null)}function h(n){return o.Lb(0,[(n()(),o.pb(0,0,null,null,1,"app-homepage",[],null,null,null,p,b)),o.ob(1,114688,null,0,s,[a.a,c.a,g.m],null,null)],(function(n,l){n(l,1,0)}),null)}var m=o.lb("app-homepage",s,h,{},{},[]),d=u("SVse"),C=u("s7LF");class f{}u.d(l,"HomepagePageModuleNgFactory",(function(){return M}));var M=o.mb(e,[],(function(n){return o.yb([o.zb(512,o.j,o.X,[[8,[t.a,m]],[3,o.j],o.v]),o.zb(4608,d.n,d.m,[o.s,[2,d.w]]),o.zb(4608,C.l,C.l,[]),o.zb(4608,r.c,r.c,[o.x,o.g]),o.zb(4608,r.Fb,r.Fb,[r.c,o.j,o.p]),o.zb(4608,r.Jb,r.Jb,[r.c,o.j,o.p]),o.zb(1073742336,d.b,d.b,[]),o.zb(1073742336,C.k,C.k,[]),o.zb(1073742336,C.b,C.b,[]),o.zb(1073742336,r.Cb,r.Cb,[]),o.zb(1073742336,g.q,g.q,[[2,g.v],[2,g.m]]),o.zb(1073742336,f,f,[]),o.zb(1073742336,e,e,[]),o.zb(1024,g.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);