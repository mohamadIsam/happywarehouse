import{a as L,m as R}from"./chunk-QFX2EMHE.js";import{$ as g,$a as a,Aa as _,Eb as B,Pa as w,Q as f,Qa as b,Ta as k,Ua as O,Va as E,Wa as s,Xa as l,Ya as V,Za as h,ab as m,ba as v,fb as S,ha as C,hb as D,ia as c,ib as F,ja as d,kb as x,mb as M,nb as P,oa as y,ob as T,za as p}from"./chunk-6HVPCAXH.js";var N=["dropdownList"],u=class i{elements;blockscreen;onClickHandler(e){e.stopPropagation(),this.elements.forEach(t=>{let n=t.nativeElement;n.className.includes("show")?(n.classList.remove("show"),this.hideBlockscreen()):(n.classList.add("show"),this.showBlockscreen(n))})}showBlockscreen(e){let t=e;this.blockscreen=document.createElement("div"),this.blockscreen.className="white-blockscreen",this.blockscreen.addEventListener("click",n=>this.hideBlockscreen()),t.appendChild(this.blockscreen)}hideBlockscreen(){this.blockscreen.parentElement.removeChild(this.blockscreen)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","app-dropdown",""]],contentQueries:function(t,n,r){if(t&1&&S(r,N,5),t&2){let o;D(o=F())&&(n.elements=o)}},hostBindings:function(t,n){t&1&&a("click",function(o){return n.onClickHandler(o)})},standalone:!0})};function Q(i,e){if(i&1){let t=h();s(0,"li",8),a("click",function(){let r=c(t).$implicit,o=m();return d(o.onSelect(r))}),x(1),l()}if(i&2){let t=e.$implicit,n=m();p(),M(" ",n.getValue(t)," ")}}var I=class i{constructor(e){this.cdr=e}placeholder="";id="";options=[];key="id";name="value";allowFilter=!1;invalid=!1;value;changeValue=new y;onChange=()=>{};onTouched=()=>{};filter;filterdOptions=[];ngOnChanges(e){this.filterdOptions=this.options,e&&typeof this.value=="number"&&(this.value=this.options?.find(t=>t[this.key]==this.value))}get currentValue(){return this.value!=null&&typeof this.value=="object"?this.value[this.name]:this.value?this.value:null}filterOptions(){this.filterdOptions=this.options.filter(e=>this.getValue(e).includes(this.filter)),this.cdr.detectChanges()}getValue(e){return this.isObject(e)?e[this.name]:e}isObject(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}writeValue(e){this.value=e}onInput(e){this.filter=e.target.value}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){}onSelect(e){this.value=e,this.onChange(e[this.key]),this.onTouched(),this.changeValue.emit(this.value),this.cdr.detectChanges()}static \u0275fac=function(t){return new(t||i)(_(B))};static \u0275cmp=g({type:i,selectors:[["app-select"]],inputs:{placeholder:"placeholder",id:"id",options:"options",key:"key",name:"name",allowFilter:"allowFilter",invalid:"invalid",value:"value"},outputs:{changeValue:"changeValue"},standalone:!0,features:[P([{provide:L,useExisting:f(()=>i),multi:!0}]),C,T],decls:9,vars:6,consts:[["dropdownList",""],["app-dropdown","",1,"form-group","dropdown","relative"],[1,"search-field"],["type","text","autocomplete","off",1,"form-control",3,"input","id","placeholder","value","readonly"],[1,"dropdown-btn"],[1,"fa","fa-angle-down"],[1,"items","position-absolute","w-100","bg-white"],[1,"item"],[1,"item",3,"click"]],template:function(t,n){if(t&1){let r=h();s(0,"div",1)(1,"div",2)(2,"input",3),a("input",function(A){return c(r),d(n.onInput(A))})("input",function(){return c(r),d(n.filterOptions())}),l(),s(3,"span",4),V(4,"i",5),l()(),s(5,"ul",6,0),O(7,Q,2,1,"li",7,k),l()()}t&2&&(p(2),b("is-invalid",n.invalid),w("id",n.id)("placeholder",n.placeholder)("value",n.currentValue)("readonly",!n.allowFilter),p(5),E(n.filterdOptions))},dependencies:[u,R],styles:[".search-field[_ngcontent-%COMP%]{display:flex}.dropdown-btn[_ngcontent-%COMP%]{position:relative;right:20px;top:5px}.items[_ngcontent-%COMP%]{display:none;margin-inline-end:.5rem;z-index:999;padding:0;max-height:150px;overflow:auto}.show[_ngcontent-%COMP%]{display:block}.items[_ngcontent-%COMP%]{border:1px solid #ccc;padding:auto}.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:10px}.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{background-color:#eee;cursor:pointer}.item[_ngcontent-%COMP%]{list-style:none;margin:0}.above[_ngcontent-%COMP%]{bottom:20px}"]})};export{I as a};