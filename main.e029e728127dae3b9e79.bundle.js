webpackJsonp([1],{"+h1B":function(l,n,u){"use strict";var t=u("/oeL"),e=u("aR8+"),r=u("wQAS"),s=u("q4dy"),i=u("qbdv"),o=u("fc+i"),c=u("CPp0"),a=u("7XuV");u.d(n,"a",function(){return _});var _=t.b(e.a,[r.a],function(l){return t.c([t.d(512,t.e,t.f,[[8,[s.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,i.a,i.b,[t.h]),t.d(4608,t.j,t.j,[]),t.d(5120,t.k,t.l,[]),t.d(5120,t.m,t.n,[]),t.d(5120,t.o,t.p,[]),t.d(4608,o.b,o.c,[i.c]),t.d(6144,t.q,null,[o.b]),t.d(4608,o.d,o.e,[]),t.d(5120,o.f,function(l,n,u,t){return[new o.g(l),new o.h(n),new o.i(u,t)]},[i.c,i.c,i.c,o.d]),t.d(4608,o.j,o.j,[o.f,t.r]),t.d(135680,o.k,o.k,[i.c]),t.d(4608,o.l,o.l,[o.j,o.k]),t.d(6144,t.s,null,[o.l]),t.d(6144,o.m,null,[o.k]),t.d(4608,t.t,t.t,[t.r]),t.d(4608,o.n,o.n,[i.c]),t.d(4608,o.o,o.o,[i.c]),t.d(4608,c.a,c.a,[]),t.d(4608,c.b,c.c,[]),t.d(5120,c.d,c.e,[]),t.d(4608,c.f,c.f,[c.a,c.b,c.d]),t.d(4608,c.g,c.h,[]),t.d(5120,c.i,c.j,[c.f,c.g]),t.d(4608,a.a,a.a,[c.i]),t.d(512,i.d,i.d,[]),t.d(1024,t.u,o.p,[]),t.d(1024,t.v,function(l,n){return[o.q(l,n)]},[[2,o.r],[2,t.w]]),t.d(512,t.x,t.x,[[2,t.v]]),t.d(131584,t.y,t.y,[t.r,t.z,t.A,t.u,t.e,t.x]),t.d(2048,t.B,null,[t.y]),t.d(512,t.C,t.C,[t.B]),t.d(512,o.s,o.s,[[3,o.s]]),t.d(512,c.k,c.k,[]),t.d(512,e.a,e.a,[])])})},0:function(l,n,u){l.exports=u("cDNt")},"7XuV":function(l,n,u){"use strict";var t=u("CPp0"),e=u("bKpL"),r=(u.n(e),u("p5Ee")),s=u("xpf9"),i=(u.n(s),u("5v8a")),o=(u.n(i),u("S7im"));u.n(o);u.d(n,"a",function(){return c});var c=function(){function l(l){this.http=l,this.headers=new t.l,this.newsApiURL=r.a.apiURL,this.token=r.a.apiToken}return l.prototype.getNews=function(l,n){return this.http.get(this.newsApiURL+"articles?source="+l+"&apiKey="+this.token).catch(this.handleError)},l.prototype.getNewsFromMultipleSources=function(l,n){},l.prototype.getSources=function(){return this.http.get(this.newsApiURL+"sources").catch(this.handleError)},l.prototype.handleError=function(l){return 400==l.status?e.Observable.throw("error"):(l.status,e.Observable.throw("error"))},l.ctorParameters=function(){return[{type:t.i}]},l}()},NhKt:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]},"aR8+":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},cDNt:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("/oeL"),e=u("p5Ee"),r=u("+h1B"),s=u("fc+i");e.a.production&&u.i(t.a)(),u.i(s.a)().bootstrapModuleFactory(r.a)},p5Ee:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t={production:!0,apiURL:" https://newsapi.org/v1/",apiToken:"a7ebc9add8da4bc5b7d2878c7b422100"}},q4dy:function(l,n,u){"use strict";function t(l){return c._12(0,[(l()(),c._13(0,null,null,5,"div",[["class","checkbox"]],null,null,null,null,null)),(l()(),c._14(null,["\n                "])),(l()(),c._13(0,null,null,2,"label",[],null,null,null,null,null)),(l()(),c._13(0,null,null,0,"input",[["name","sources[]"],["type","checkbox"]],[[8,"value",0]],[[null,"change"]],function(l,n,u){var t=!0,e=l.component;if("change"===n){t=!1!==e.onSourceChange(u)&&t}return t},null,null)),(l()(),c._14(null,["",""])),(l()(),c._14(null,["\n              "]))],null,function(l,n){l(n,3,0,c._15(1,"",n.context.$implicit.id,"")),l(n,4,0,n.context.$implicit.name)})}function e(l){return c._12(0,[(l()(),c._13(0,null,null,32,"div",[["class","row row-gap-huge news-card"]],null,null,null,null,null)),(l()(),c._14(null,["\n                "])),(l()(),c._13(0,null,null,6,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),c._14(null,["\n                    "])),(l()(),c._13(0,null,null,3,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),c._14(null,["\n                        "])),(l()(),c._13(0,null,null,0,"img",[["class","img-responsive"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),c._14(null,["\n                    "])),(l()(),c._14(null,["\n                "])),(l()(),c._14(null,["\n                "])),(l()(),c._13(0,null,null,21,"div",[["class","col-md-9"]],null,null,null,null,null)),(l()(),c._14(null,["\n                    "])),(l()(),c._13(0,null,null,4,"h3",[],null,null,null,null,null)),(l()(),c._14(null,["\n                      "])),(l()(),c._13(0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),c._14(null,["",""])),(l()(),c._14(null,["\n                    "])),(l()(),c._14(null,["\n                    "])),(l()(),c._13(0,null,null,7,"h5",[],null,null,null,null,null)),(l()(),c._14(null,["by "])),(l()(),c._13(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),c._14(null,["",""])),(l()(),c._14(null,[" on "])),(l()(),c._13(0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),c._14(null,["",""])),c._16(2),(l()(),c._14(null,["\n                    "])),(l()(),c._13(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),c._14(null,["",""])),(l()(),c._14(null,["\n                    "])),(l()(),c._13(0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),c._14(null,["\n                "])),(l()(),c._14(null,["\n              "]))],null,function(l,n){l(n,4,0,c._15(1,"",n.context.$implicit.url,"")),l(n,6,0,c._15(1,"",n.context.$implicit.urlToImage,""),c._15(1,"",n.context.$implicit.title,"")),l(n,14,0,c._15(1,"",n.context.$implicit.url,"")),l(n,15,0,n.context.$implicit.title),l(n,21,0,n.context.$implicit.author),l(n,24,0,c._17(n,24,0,l(n,25,0,c._18(n.parent.parent,0),n.context.$implicit.publishedAt,"medium"))),l(n,28,0,n.context.$implicit.description)})}function r(l){return c._12(0,[(l()(),c._13(0,null,null,4,"section",[],null,null,null,null,null)),(l()(),c._14(null,["\n              "])),(l()(),c._19(16777216,null,null,1,null,e)),c._20(802816,null,0,a.h,[c._2,c._3,c.m],{ngForOf:[0,"ngForOf"]},null),(l()(),c._14(null,["\n              "]))],function(l,n){l(n,3,0,n.context.$implicit)},null)}function s(l){return c._12(0,[c._21(0,a.i,[c.h]),(l()(),c._14(null,["   "])),(l()(),c._14(null,["\n    "])),(l()(),c._13(0,null,null,25,"nav",[["class","navbar navbar-inverse navbar-fixed-top"],["role","navigation"]],null,null,null,null,null)),(l()(),c._14(null,["\n        "])),(l()(),c._13(0,null,null,21,"div",[["class","container"]],null,null,null,null,null)),(l()(),c._14(null,["\n            "])),(l()(),c._14(null,["\n            "])),(l()(),c._13(0,null,null,16,"div",[["class","navbar-header"]],null,null,null,null,null)),(l()(),c._14(null,["\n                "])),(l()(),c._13(0,null,null,10,"button",[["class","navbar-toggle"],["data-target","#bs-example-navbar-collapse-1"],["data-toggle","collapse"],["type","button"]],null,null,null,null,null)),(l()(),c._14(null,["\n                    "])),(l()(),c._13(0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),c._14(null,["Toggle navigation"])),(l()(),c._14(null,["\n                    "])),(l()(),c._13(0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),c._14(null,["\n                    "])),(l()(),c._13(0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),c._14(null,["\n                    "])),(l()(),c._13(0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),c._14(null,["\n                "])),(l()(),c._14(null,["\n                 "])),(l()(),c._13(0,null,null,1,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(l()(),c._14(null,["My Personal News Stand"])),(l()(),c._14(null,["\n            "])),(l()(),c._14(null,["\n            \n            "])),(l()(),c._14(null,["\n        "])),(l()(),c._14(null,["\n        "])),(l()(),c._14(null,["\n    "])),(l()(),c._14(null,["\n\n    "])),(l()(),c._14(null,["\n    "])),(l()(),c._13(0,null,null,27,"div",[["class","container card"]],null,null,null,null,null)),(l()(),c._14(null,["\n\n        "])),(l()(),c._14(null,["\n        "])),(l()(),c._13(0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),c._14(null,["\n            "])),(l()(),c._13(0,null,null,4,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),c._14(null,["\n                "])),(l()(),c._13(0,null,null,1,"h1",[["class","page-header"]],null,null,null,null,null)),(l()(),c._14(null,["Headlines"])),(l()(),c._14(null,["\n            "])),(l()(),c._14(null,["\n        "])),(l()(),c._14(null,["\n        "])),(l()(),c._14(null,["\n        "])),(l()(),c._13(0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),c._14(null,["\n            "])),(l()(),c._13(0,null,null,4,"div",[["class","col-md-3 source-card"]],null,null,null,null,null)),(l()(),c._14(null,["\n              "])),(l()(),c._19(16777216,null,null,1,null,t)),c._20(802816,null,0,a.h,[c._2,c._3,c.m],{ngForOf:[0,"ngForOf"]},null),(l()(),c._14(null,["\n            "])),(l()(),c._14(null,["\n            "])),(l()(),c._13(0,null,null,4,"div",[["class","col-md-9"]],null,null,null,null,null)),(l()(),c._14(null,["\n              "])),(l()(),c._19(16777216,null,null,1,null,r)),c._20(802816,null,0,a.h,[c._2,c._3,c.m],{ngForOf:[0,"ngForOf"]},null),(l()(),c._14(null,["\n            "])),(l()(),c._14(null,["\n        "])),(l()(),c._14(null,["\n\n       \n\n        "]))],function(l,n){var u=n.component;l(n,49,0,u.sources),l(n,55,0,u.news)},null)}function i(l){return c._12(0,[(l()(),c._13(0,null,null,1,"app-root",[],null,null,null,s,h)),c._20(114688,null,0,_.a,[d.a],null,null)],function(l,n){l(n,1,0)},null)}var o=u("NhKt"),c=u("/oeL"),a=u("qbdv"),_=u("wQAS"),d=u("7XuV");u.d(n,"a",function(){return f});var p=[o.a],h=c._11({encapsulation:0,styles:p,data:{}}),f=c._22("app-root",_.a,i,{},{},[])},qtrl:function(l,n){function u(l){throw new Error("Cannot find module '"+l+"'.")}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="qtrl"},wQAS:function(l,n,u){"use strict";var t=u("7XuV");u.d(n,"a",function(){return e});var e=function(){function l(l){this._newsService=l,this.title="app",this.userSources=[]}return l.prototype.ngOnInit=function(){var l=this;this._newsService.getNews("the-next-web","latest").subscribe(function(n){l.news=JSON.parse(n._body).articles}),this._newsService.getSources().subscribe(function(n){l.sources=JSON.parse(n._body).sources})},l.prototype.onSourceChange=function(l){var n=this;if(l.stopPropagation(),l.target.checked){this.userSources.push(l.target.value),this.news=[],this.userSources=this.userSources.reverse(),console.log(this.userSources);for(var u=0,t=this.userSources;u<t.length;u++){var e=t[u];this._newsService.getNews(e,"latest").subscribe(function(l){n.news.push(JSON.parse(l._body).articles)})}}else{var r=void 0;r=this.userSources.indexOf(l.target.value),this.userSources.splice(r,1),this.userSources=this.userSources.reverse(),this.news=[];for(var s=0,i=this.userSources;s<i.length;s++){var e=i[s];this._newsService.getNews(e,"latest").subscribe(function(l){n.news.push(JSON.parse(l._body).articles)})}}},l.ctorParameters=function(){return[{type:t.a}]},l}()}},[0]);