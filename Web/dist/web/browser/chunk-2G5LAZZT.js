import{b as a}from"./chunk-HNYYVXMR.js";import{R as i,W as n}from"./chunk-6HVPCAXH.js";var c=class t{constructor(e){this.jwtHelperService=e;this.decodeJwt()}token;decodeJwt(){let e=localStorage.getItem("token");e&&(this.token=this.jwtHelperService.decodeToken(e))}get userId(){return this.token?this.token.sid:""}get name(){return this.token?this.token.name:""}get email(){return this.token?this.token.email:""}get tokenType(){return this.token.TokenType}get isAdmin(){return this.token.role=="Admin"}get isExpired(){let e=localStorage.getItem("token"),r=60;if(e){let s=new Date,o=this.jwtHelperService.getTokenExpirationDate(e),p=new Date(s.getTime()+r*1e3);return!(o&&o>p)}return!1}static \u0275fac=function(r){return new(r||t)(n(a))};static \u0275prov=i({token:t,factory:t.\u0275fac,providedIn:"root"})};export{c as a};
