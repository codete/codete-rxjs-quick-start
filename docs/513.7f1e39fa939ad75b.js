"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[513],{1513:(Q,d,n)=>{n.r(d),n.d(d,{ListOfIdsToFullModelsComponent:()=>T,ListOfIdsToFullModelsModule:()=>x});var a=n(7357),p=n(4839),h=n(2777),F=n(6568),u=n(3718),M=n(7635),v=n(2915),L=n(4750),Z=n(304),I=n(8221);function f(...s){const e=(0,I.jO)(s);return e?(0,Z.z)(f(...s),(0,L.Z)(e)):(0,M.e)((o,l)=>{(0,u.l)([o,...(0,v.k)(s)])(l)})}function y(...s){return f(...s)}var t=n(105),O=n(4227);let g=(()=>{class s{constructor(o){this.http=o}getHamsterOwners(){return this.http.get(`${a.ho}/api/hamsters/owners`)}getHamsterById(o){return this.http.get(`${a.ho}/api/hamster/${o}`)}}return s.\u0275fac=function(o){return new(o||s)(t.LFG(O.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac}),s})();var m=n(1380),A=n(348),C=n(355);function $(s,e){if(1&s&&(t.TgZ(0,"mat-card"),t._UZ(1,"app-hamster",1),t.qZA()),2&s){const o=e.$implicit;t.xp6(1),t.Q6J("hamster",o)}}function H(s,e){if(1&s&&(t.TgZ(0,"li"),t._UZ(1,"app-hamster",1),t.qZA()),2&s){const o=e.$implicit;t.xp6(1),t.Q6J("hamster",o)}}function U(s,e){if(1&s&&(t.TgZ(0,"mat-card")(1,"h3"),t._uU(2),t.qZA(),t.TgZ(3,"h4"),t._uU(4,"owned hamsters:"),t.qZA(),t.TgZ(5,"ul"),t.YNc(6,H,2,1,"li",0),t.qZA()()),2&s){const o=e.$implicit;t.xp6(2),t.hij(" ",o.name," "),t.xp6(4),t.Q6J("ngForOf",o.hamsters)}}let T=(()=>{class s{constructor(o){this.api=o,this.owners$=this.api.getHamsterOwners().pipe((0,p.B)()),this.allHamsters$=this.owners$.pipe((0,h.U)(l=>l.reduce((r,c)=>r.concat(c.hamsters),[])),(0,F.z)(l=>{const i=l.map(r=>this.api.getHamsterById(r));return(0,u.a)(i)}),(0,p.B)()),this.ownersWithHamsters$=this.owners$.pipe(y(this.allHamsters$),(0,h.U)(([l,i])=>l.map(r=>(r.hamsters=r.hamsters.map(c=>i.find(({id:z})=>z===c)),r))))}ngOnInit(){}}return s.\u0275fac=function(o){return new(o||s)(t.Y36(g))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-list-of-ids-to-full-models"]],features:[t._Bn([g])],decls:8,vars:6,consts:[[4,"ngFor","ngForOf"],[3,"hamster"]],template:function(o,l){1&o&&(t.TgZ(0,"h2"),t._uU(1," All hamsters\n"),t.qZA(),t.YNc(2,$,2,1,"mat-card",0),t.ALo(3,"async"),t.TgZ(4,"h2"),t._uU(5," Owners and hamsters\n"),t.qZA(),t.YNc(6,U,7,2,"mat-card",0),t.ALo(7,"async")),2&o&&(t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,2,l.allHamsters$)),t.xp6(4),t.Q6J("ngForOf",t.lcZ(7,4,l.ownersWithHamsters$)))},directives:[m.sg,A.a8,C.L],pipes:[m.Ov],styles:["ul[_ngcontent-%COMP%]{list-style:none}li[_ngcontent-%COMP%]{display:inline-block}mat-card[_ngcontent-%COMP%]{display:inline-block;margin:10px}"]}),s})();var B=n(6983);const J=[{path:"",component:T}];let x=(()=>{class s{}return s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[m.ez,a.qX,O.JF,a.o0,B.Bz.forChild(J)]]}),s})()}}]);