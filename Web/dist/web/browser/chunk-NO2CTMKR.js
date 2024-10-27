import{a as z}from"./chunk-FGCV3IXA.js";import{c as M,d as k}from"./chunk-XMZP254X.js";import{e as P}from"./chunk-7Q4JSMIS.js";import"./chunk-QFX2EMHE.js";import{$ as u,$a as y,Aa as h,La as x,Pa as v,Sa as b,Ta as w,Ua as C,Va as _,Wa as n,Xa as t,Ya as d,Za as S,ab as m,eb as I,hc as E,ia as f,ic as R,ja as g,kb as o,lb as s,mb as W,ob as L,tb as p,ub as l,za as i}from"./chunk-6HVPCAXH.js";import"./chunk-2VMXMS7J.js";function N(a,r){if(a&1&&(n(0,"div",6)(1,"div",8)(2,"div",9)(3,"div",10)(4,"div"),d(5,"i",11),t(),n(6,"div",12)(7,"div",13)(8,"div")(9,"p",14)(10,"span"),o(11),t()()(),n(12,"span",15),o(13),t()(),n(14,"div")(15,"p",14)(16,"span"),o(17),p(18,"translate"),t()(),n(19,"span",15),o(20),t()()()(),n(21,"div",16)(22,"span")(23,"span",17)(24,"button",18),o(25),p(26,"translate"),t()(),d(27,"br"),t()()()()()),a&2){let e=r.$implicit;i(11),s(e.name),i(2),s(e.address),i(4),s(l(18,7,"warehouse.total-items")),i(3),s(e.totalItems),i(3),I("routerLink","../warehouse/",e.id,""),i(2),s(l(26,9,"action.edit"))}}function j(a,r){if(a&1){let e=S();C(0,N,28,11,"div",6,w),n(2,"ngb-pagination",7),y("pageChange",function(T){f(e);let B=m();return g(B.getWarehouses(T))}),t()}if(a&2){let e=m();_(e.paginatedResponse.data),i(2),v("collectionSize",e.paginatedResponse.totalCount)("page",e.paginatedResponse.pageNumber)("maxSize",e.paginatedResponse.pageSize)("rotate",!0)("ellipses",!1)("boundaryLinks",!0)}}var O=class a{constructor(r){this.userService=r}paginatedResponse;ngOnInit(){this.getWarehouses()}getWarehouses(r=1){this.userService.getWarehouses(r).subscribe(e=>this.paginatedResponse=e)}static \u0275fac=function(e){return new(e||a)(h(z))};static \u0275cmp=u({type:a,selectors:[["app-users-list"]],standalone:!0,features:[L],decls:10,vars:7,consts:[[1,"p-5"],[1,"row"],[1,"mb-4","d-flex","flex-row","justify-content-between"],[1,"fs-5","fw-bold"],["routerLink","../warehouse",1,"btn","btn-primary"],[3,"collectionSize","page","maxSize","rotate","ellipses","boundaryLinks"],[1,"cursor-pointer","pb-2","borderBottom","mb-3"],[3,"pageChange","collectionSize","page","maxSize","rotate","ellipses","boundaryLinks"],[1,"d-flex","flex-column"],[1,"d-flex","justify-content-between"],[1,"d-flex","align-items-center","w-100"],[1,"h3","p-2","rounded-pill","t-icon-request","white","fa","fa-street-view"],[1,"d-flex","justify-content-between","w-75"],[1,"ms-lg-4"],[1,"fs-5","fw-bolder","m-0","mx-width"],[1,"fs-12"],[1,"d-flex","flex-row"],[3,"routerLink"],[1,"action"]],template:function(e,c){e&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),o(4),p(5,"translate"),t(),n(6,"button",4),o(7),p(8,"translate"),t()()(),x(9,j,3,6,"ngb-pagination",5),t()),e&2&&(i(4),s(l(5,3,"warehouse-list.title")),i(3),W(" ",l(8,5,"warehouse-list.new")," "),i(2),b(c.paginatedResponse?9:-1))},dependencies:[R,E,P,k,M],styles:["p[_ngcontent-%COMP%]{line-height:1}i[_ngcontent-%COMP%]{font-size:30px;color:#3142c4}.btn[_ngcontent-%COMP%]{height:fit-content}.fa[_ngcontent-%COMP%]{margin-inline-end:5px}.sub-title[_ngcontent-%COMP%]{opacity:.5}"]})};export{O as WarehouseListComponent};