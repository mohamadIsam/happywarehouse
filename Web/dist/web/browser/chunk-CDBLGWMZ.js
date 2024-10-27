import{a as g}from"./chunk-2G5LAZZT.js";import"./chunk-HNYYVXMR.js";import{c as T,d as H,e as E,f as N,h as j}from"./chunk-7Q4JSMIS.js";import{$ as m,$a as u,Aa as c,La as k,Pa as S,Qa as O,Sa as P,Vb as I,Wa as e,Xa as i,Xb as C,Ya as r,hc as _,ic as x,kb as l,lb as f,mb as b,ob as v,qb as y,tb as p,ub as d,za as o}from"./chunk-6HVPCAXH.js";import"./chunk-2VMXMS7J.js";var z=t=>({show:t}),M=class t{constructor(s,n){this.router=s;this.tokenHelperService=n}show=!1;userName;showNavbarMenu=!1;ngOnInit(){this.userName=this.tokenHelperService.name}showMenu(){this.show=!this.show}showNavbar(){this.showNavbarMenu=!this.showNavbarMenu}navigateToHome(){this.router.navigateByUrl("")}navigateToAccountSettigs(){this.router.navigateByUrl("dashboard/user")}logout(){localStorage.clear(),this.router.navigateByUrl("login")}static \u0275fac=function(n){return new(n||t)(c(H),c(g))};static \u0275cmp=m({type:t,selectors:[["app-header"]],standalone:!0,features:[v],decls:24,vars:15,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg-white"],["href","javascript:void(0)","href","javascript:void(0)",1,"navbar-brand",3,"click"],["src","warehousing-icon.svg","alt","Company",1,"client-logo"],["type","button","data-toggle","collapse","data-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler",3,"click"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse","justify-content-end"],[1,"form-inline","my-2","my-lg-0","d-flex","justify-content-end"],[1,"dropdown"],["type","button","id","dropdownMenuButton","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","dropdown-toggle","d-flex","align-items-center","justify-content-between",3,"click"],[1,"user-name"],[1,"fa","fa-user-o","userIcon"],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu",3,"ngClass"],["href","javascript:void(0)",1,"dropdown-item",3,"click"],[1,"fa","fa-cog","userIcon"],[1,"fa","fa-sign-out","userIcon"]],template:function(n,a){n&1&&(e(0,"nav",0)(1,"a",1),u("click",function(){return a.navigateToHome()}),r(2,"img",2),e(3,"p"),l(4),p(5,"translate"),i()(),e(6,"button",3),u("click",function(){return a.showNavbar()}),r(7,"span",4),i(),e(8,"div",5)(9,"form",6)(10,"div",7)(11,"button",8),u("click",function(){return a.showMenu()}),e(12,"div",9),r(13,"i",10),l(14),i()(),e(15,"div",11)(16,"a",12),u("click",function(){return a.navigateToAccountSettigs()}),r(17,"i",13),l(18),p(19,"translate"),i(),e(20,"a",12),u("click",function(){return a.logout()}),r(21,"i",14),l(22),p(23,"translate"),i()()()()()()),n&2&&(o(4),f(d(5,7,"app.title")),o(4),O("show",a.showNavbarMenu),o(6),b(" ",a.userName," "),o(),S("ngClass",y(13,z,a.show)),o(3),b(" ",d(19,9,"header.account-settings")," "),o(4),b(" ",d(23,11,"header.logout")," "))},dependencies:[x,_,C,I],styles:["#dropdownMenuButton[_ngcontent-%COMP%]{width:220px;border:1px solid #E0E0E0}.user-name[_ngcontent-%COMP%]{max-width:200px;overflow:hidden;text-overflow:ellipsis;margin-right:8px}nav.navbar[_ngcontent-%COMP%]{position:fixed;width:100%;z-index:9;border-bottom:1px solid #E0E0E0;padding:10px 20px}.navbar-brand[_ngcontent-%COMP%]{display:flex}.navbar-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-inline-start:10px}.dropDownPosition[_ngcontent-%COMP%]{margin-left:68rem}.userIcon[_ngcontent-%COMP%]{margin-right:.5rem;color:#3c3fff}.dropdown-menu[_ngcontent-%COMP%]{width:220px}.logo-div[_ngcontent-%COMP%]{z-index:10}.client-logo[_ngcontent-%COMP%]{display:block;height:35px}"]})};function U(t,s){t&1&&(e(0,"a",5)(1,"span"),l(2),p(3,"translate"),i()()),t&2&&(o(2),f(d(3,1,"side-menu.log")))}var w=class t{constructor(s){this.tokenService=s}ngOnInit(){}static \u0275fac=function(n){return new(n||t)(c(g))};static \u0275cmp=m({type:t,selectors:[["app-side-menu"]],standalone:!0,features:[v],decls:12,vars:7,consts:[[1,"bg-white","h-100","d-flex"],[1,"sidebar"],[1,"nav","flex-column"],["routerLink","./warehouses","routerLinkActive","active","href","javascript:void(0)",1,"nav-link"],["routerLink","./users","routerLinkActive","active","href","javascript:void(0)",1,"nav-link"],["routerLink","./log","routerLinkActive","active","href","javascript:void(0)",1,"nav-link"]],template:function(n,a){n&1&&(e(0,"div",0)(1,"div",1)(2,"nav",2)(3,"a",3)(4,"span"),l(5),p(6,"translate"),i()(),e(7,"a",4)(8,"span"),l(9),p(10,"translate"),i()(),k(11,U,4,3,"a",5),i()()()),n&2&&(o(5),f(d(6,3,"side-menu.warehouses")),o(4),f(d(10,5,"side-menu.users")),o(2),P(a.tokenService.isAdmin?11:-1))},dependencies:[x,_,j,E,N,C],styles:['.sidebar[_ngcontent-%COMP%]{height:100vh;padding-top:1rem;padding-inline-end:10px;width:250px;transition:width .3s;margin-left:14px}.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:#7f7f7f}.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#3c3fff;background-color:#ececff;border-radius:5px}.content[_ngcontent-%COMP%]{margin-left:250px;padding:1rem}.sidebar-collapse[_ngcontent-%COMP%]{padding:5px;width:fit-content;height:fit-content}.sidebar-collapse[_ngcontent-%COMP%]:after{content:" ";border-left:2px solid #000}.sidebar-collapse[_ngcontent-%COMP%]:before{content:" ";border-left:2px solid #000;margin-inline-end:3px}@media only screen and (max-width: 768px){.sidebar[_ngcontent-%COMP%]{display:none}.bg-white[_ngcontent-%COMP%]{position:absolute;z-index:9999}}.show[_ngcontent-%COMP%]{display:block}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.bg-white[_ngcontent-%COMP%]{position:fixed;top:64px;height:100%!important;z-index:9}']})};var A=class t{constructor(s){this.tokenService=s}isOpen=!1;ngOnInit(){this.tokenService.decodeJwt()}static \u0275fac=function(n){return new(n||t)(c(g))};static \u0275cmp=m({type:t,selectors:[["app-dashboard"]],standalone:!0,features:[v],decls:7,vars:0,consts:[[1,"position-relative"],[1,"d-flex"],[1,"d-flex","justify-content-center","w-100"],[1,"container"]],template:function(n,a){n&1&&(r(0,"app-header"),e(1,"div",0)(2,"div",1),r(3,"app-side-menu"),e(4,"div",2)(5,"div",3),r(6,"router-outlet"),i()()()())},dependencies:[T,M,w],styles:[".container[_ngcontent-%COMP%]{padding:0;border-radius:25px;background-color:#fcfcfc;margin:10rem 4rem 4rem 20rem}@media only screen and (max-width: 425px){.container[_ngcontent-%COMP%]{margin-left:2rem;min-width:90%}}"]})};export{A as DashboardComponent};