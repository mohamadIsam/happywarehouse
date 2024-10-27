import{$a as b,Aa as o,Ea as z,Ga as D,Ha as d,Hb as A,Ib as h,Lb as X,P as S,Q as m,Qa as Z,S as N,U as g,aa as O,ba as u,f as ie,ha as W,i as ne,ka as x,n as re,nb as _,oa as V,ra as q,t as se,yb as oe}from"./chunk-6HVPCAXH.js";import{a as l,b as c}from"./chunk-2VMXMS7J.js";var me=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(o(z),o(q))}}static{this.\u0275dir=u({type:i})}}return i})(),Q=(()=>{class i extends me{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=x(i)))(r||i)}})()}static{this.\u0275dir=u({type:i,features:[d]})}}return i})(),H=new g(""),Te={provide:H,useExisting:m(()=>je),multi:!0},je=(()=>{class i extends Q{writeValue(t){this.setProperty("checked",t)}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=x(i)))(r||i)}})()}static{this.\u0275dir=u({type:i,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,r){n&1&&b("change",function(a){return r.onChange(a.target.checked)})("blur",function(){return r.onTouched()})},features:[_([Te]),d]})}}return i})(),Be={provide:H,useExisting:m(()=>_e),multi:!0};function Ue(){let i=X()?X().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var He=new g(""),_e=(()=>{class i extends me{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ue())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(o(z),o(q),o(He,8))}}static{this.\u0275dir=u({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&b("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},features:[_([Be]),d]})}}return i})();function f(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function ve(i){return i!=null&&typeof i.length=="number"}var ye=new g(""),Ce=new g(""),Le=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ae=class{static min(e){return $e(e)}static max(e){return We(e)}static required(e){return qe(e)}static requiredTrue(e){return ze(e)}static email(e){return Ze(e)}static minLength(e){return Xe(e)}static maxLength(e){return Ye(e)}static pattern(e){return Ke(e)}static nullValidator(e){return Ve(e)}static compose(e){return Fe(e)}static composeAsync(e){return Ie(e)}};function $e(i){return e=>{if(f(e.value)||f(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function We(i){return e=>{if(f(e.value)||f(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function qe(i){return f(i.value)?{required:!0}:null}function ze(i){return i.value===!0?null:{required:!0}}function Ze(i){return f(i.value)||Le.test(i.value)?null:{email:!0}}function Xe(i){return e=>f(e.value)||!ve(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function Ye(i){return e=>ve(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function Ke(i){if(!i)return Ve;let e,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(f(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function Ve(i){return null}function De(i){return i!=null}function be(i){return oe(i)?ne(i):i}function Ae(i){let e={};return i.forEach(t=>{e=t!=null?l(l({},e),t):e}),Object.keys(e).length===0?null:e}function Me(i,e){return e.map(t=>t(i))}function Je(i){return!i.validate}function Ee(i){return i.map(e=>Je(e)?e:t=>e.validate(t))}function Fe(i){if(!i)return null;let e=i.filter(De);return e.length==0?null:function(t){return Ae(Me(t,e))}}function we(i){return i!=null?Fe(Ee(i)):null}function Ie(i){if(!i)return null;let e=i.filter(De);return e.length==0?null:function(t){let n=Me(t,e).map(be);return se(n).pipe(re(Ae))}}function Se(i){return i!=null?Ie(Ee(i)):null}function le(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Ne(i){return i._rawValidators}function Oe(i){return i._rawAsyncValidators}function Y(i){return i?Array.isArray(i)?i:[i]:[]}function k(i,e){return Array.isArray(i)?i.includes(e):i===e}function ue(i,e){let t=Y(e);return Y(i).forEach(r=>{k(t,r)||t.push(r)}),t}function ce(i,e){return Y(e).filter(t=>!k(i,t))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=we(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Se(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},C=class extends G{get formDirective(){return null}get path(){return null}},I=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},R=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Qe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},zt=c(l({},Qe),{"[class.ng-submitted]":"isSubmitted"}),Zt=(()=>{class i extends R{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(I,2))}}static{this.\u0275dir=u({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[d]})}}return i})(),Xt=(()=>{class i extends R{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(C,10))}}static{this.\u0275dir=u({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&Z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[d]})}}return i})();var M="VALID",P="INVALID",v="PENDING",E="DISABLED",p=class{},T=class extends p{constructor(e,t){super(),this.value=e,this.source=t}},F=class extends p{constructor(e,t){super(),this.pristine=e,this.source=t}},w=class extends p{constructor(e,t){super(),this.touched=e,this.source=t}},y=class extends p{constructor(e,t){super(),this.status=e,this.source=t}},K=class extends p{constructor(e){super(),this.source=e}},J=class extends p{constructor(e){super(),this.source=e}};function xe(i){return(L(i)?i.validators:i)||null}function et(i){return Array.isArray(i)?we(i):i||null}function Pe(i,e){return(L(e)?e.asyncValidators:i)||null}function tt(i){return Array.isArray(i)?Se(i):i||null}function L(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function it(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new S(1e3,"");if(!n[t])throw new S(1001,"")}function nt(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new S(1002,"")})}var j=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=A(()=>this.statusReactive()),this.statusReactive=D(void 0),this._pristine=A(()=>this.pristineReactive()),this.pristineReactive=D(!0),this._touched=A(()=>this.touchedReactive()),this.touchedReactive=D(!1),this._events=new ie,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return h(this.statusReactive)}set status(e){h(()=>this.statusReactive.set(e))}get valid(){return this.status===M}get invalid(){return this.status===P}get pending(){return this.status==v}get disabled(){return this.status===E}get enabled(){return this.status!==E}get pristine(){return h(this.pristineReactive)}set pristine(e){h(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return h(this.touchedReactive)}set touched(e){h(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ue(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ue(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ce(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ce(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(c(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new w(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new w(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(c(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new F(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new F(!0,n))}markAsPending(e={}){this.status=v;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new y(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(c(l({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=E,this.errors=null,this._forEachChild(r=>{r.disable(c(l({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new T(this.value,n)),this._events.next(new y(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(c(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=M,this._forEachChild(n=>{n.enable(c(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(c(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===v)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new T(this.value,t)),this._events.next(new y(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(c(l({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=be(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new y(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new V,this.statusChanges=new V}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(P)?P:M}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new F(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new w(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){L(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=et(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=tt(this._rawAsyncValidators)}},de=class extends j{constructor(e,t,n){super(xe(t),Pe(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){nt(this,!0,e),Object.keys(e).forEach(n=>{it(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ee=new g("CallSetDisabledState",{providedIn:"root",factory:()=>$}),$="always";function rt(i,e){return[...e.path,i]}function he(i,e,t=$){te(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),ot(i,e),lt(i,e),at(i,e),st(i,e)}function fe(i,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),U(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function B(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function st(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function te(i,e){let t=Ne(i);e.validator!==null?i.setValidators(le(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=Oe(i);e.asyncValidator!==null?i.setAsyncValidators(le(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();B(e._rawValidators,r),B(e._rawAsyncValidators,r)}function U(i,e){let t=!1;if(i!==null){if(e.validator!==null){let r=Ne(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(t=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=Oe(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(t=!0,i.setAsyncValidators(s))}}}let n=()=>{};return B(e._rawValidators,n),B(e._rawAsyncValidators,n),t}function ot(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&ke(i,e)})}function at(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&ke(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function ke(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function lt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function ut(i,e){i==null,te(i,e)}function ct(i,e){return U(i,e)}function dt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function ht(i){return Object.getPrototypeOf(i.constructor)===Q}function ft(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function pt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===_e?t=s:ht(s)?n=s:r=s}),r||n||t||null}function gt(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function pe(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function ge(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var mt=class extends j{constructor(e=null,t,n){super(xe(t),Pe(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ge(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){pe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){pe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ge(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var _t=i=>i instanceof mt;var Kt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=u({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})(),vt={provide:H,useExisting:m(()=>yt),multi:!0},yt=(()=>{class i extends Q{writeValue(t){let n=t??"";this.setProperty("value",n)}registerOnChange(t){this.onChange=n=>{t(n==""?null:parseFloat(n))}}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=x(i)))(r||i)}})()}static{this.\u0275dir=u({type:i,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,r){n&1&&b("input",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},features:[_([vt]),d]})}}return i})();var Ge=new g("");var Ct={provide:C,useExisting:m(()=>Vt)},Vt=(()=>{class i extends C{get submitted(){return h(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=A(()=>this._submittedReactive()),this._submittedReactive=D(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new V,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(U(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return he(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){fe(t.control||null,t,!1),gt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),ft(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new K(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new J(this.form))}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,r=this.form.get(t.path);n!==r&&(fe(n||null,t),_t(r)&&(he(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);ut(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&ct(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){te(this.form,this),this._oldForm&&U(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(o(ye,10),o(Ce,10),o(ee,8))}}static{this.\u0275dir=u({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&b("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[_([Ct]),d,W]})}}return i})();var Dt={provide:I,useExisting:m(()=>bt)},bt=(()=>{class i extends I{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,n,r,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new V,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=pt(this,s)}ngOnChanges(t){this._added||this._setUpControl(),dt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return rt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(o(C,13),o(ye,10),o(Ce,10),o(H,10),o(Ge,8))}}static{this.\u0275dir=u({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[_([Dt]),d,W]})}}return i})();var Re=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=O({type:i})}static{this.\u0275inj=N({})}}return i})();var Jt=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:ee,useValue:t.callSetDisabledState??$}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=O({type:i})}static{this.\u0275inj=N({imports:[Re]})}}return i})(),Qt=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Ge,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:ee,useValue:t.callSetDisabledState??$}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=O({type:i})}static{this.\u0275inj=N({imports:[Re]})}}return i})();export{H as a,je as b,_e as c,ae as d,Zt as e,Xt as f,de as g,mt as h,Kt as i,yt as j,Vt as k,bt as l,Jt as m,Qt as n};
