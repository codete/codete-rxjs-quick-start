"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[306],{85306:(v,m,e)=>{e.r(m),e.d(m,{BackendDataIntoTemplateComponent:()=>d,BackendDataIntoTemplateModule:()=>C});var p=e(15718),h=e(28477),r=e(6638),i=e(52779),t=e(38687),u=e(17314),s=e(18205),g=e(76707);function f(o,a){if(1&o&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&o){const n=a.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function T(o,a){if(1&o&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&o){const n=a.$implicit;t.xp6(1),t.hij(" ",n.title," ")}}function Z(o,a){if(1&o&&(t.TgZ(0,"ul"),t.YNc(1,T,2,1,"li",0),t.qZA()),2&o){const n=a.$implicit;t.xp6(1),t.Q6J("ngForOf",n)}}function A(o,a){1&o&&(t.TgZ(0,"h4"),t._uU(1,"\xa0\xa0loading books..."),t.qZA())}function B(o,a){if(1&o&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&o){const n=a.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}let d=(()=>{class o{constructor(n){this.http=n,this.authors$=this.http.get(`${p.ho}/api/authors`).pipe((0,h.B)()),this.books$=this.http.get(`${p.ho}/api/books`).pipe((0,r.g)(1e3)),this.authors$=p.S3.ctrl.getAuhtors().received.observable.pipe((0,i.U)(l=>l.body.rawJson),(0,h.B)()),this.books$=p.fy.ctrl.getBooks().received.observable.pipe((0,i.U)(l=>l.body.rawJson),(0,r.g)(1e3)),this.authorsWithAtLeastOneBook$=this.authors$.pipe((0,i.U)(l=>l.filter(({books:c})=>c.length>=2)))}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(u.eN))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-backend-data-into-template"]],decls:19,vars:10,consts:[[4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["elseLoadingTemplate",""]],template:function(n,l){if(1&n&&(t.TgZ(0,"h3"),t._uU(1,"Authors:"),t.qZA(),t.TgZ(2,"mat-card")(3,"ul"),t.YNc(4,f,2,1,"li",0),t.ALo(5,"async"),t.qZA()(),t.TgZ(6,"h3"),t._uU(7,"Books:"),t.qZA(),t.TgZ(8,"mat-card"),t.YNc(9,Z,2,1,"ul",1),t.ALo(10,"async"),t.qZA(),t.YNc(11,A,2,0,"ng-template",null,2,t.W1O),t.TgZ(13,"h3"),t._uU(14,"Authors with at least two book:"),t.qZA(),t.TgZ(15,"mat-card")(16,"ul"),t.YNc(17,B,2,1,"li",0),t.ALo(18,"async"),t.qZA()()),2&n){const c=t.MAs(12);t.xp6(4),t.Q6J("ngForOf",t.lcZ(5,4,l.authors$)),t.xp6(5),t.Q6J("ngIf",t.lcZ(10,6,l.books$))("ngIfElse",c),t.xp6(8),t.Q6J("ngForOf",t.lcZ(18,8,l.authorsWithAtLeastOneBook$))}},dependencies:[s.sg,s.O5,g.a8,s.Ov],styles:["[_nghost-%COMP%]{padding:20px}h3[_ngcontent-%COMP%]{color:#fff;text-align:center}h3[_ngcontent-%COMP%]:first-of-type{margin-top:0}"]}),o})();var k=e(42363);const I=[{path:"",component:d}];let C=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,k.Bz.forChild(I),u.JF,p.qX]}),o})()}}]);