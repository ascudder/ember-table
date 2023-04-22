/*! For license information please see chunk.892.a2b086db8174f8e6282c.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[892],{6319:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{Exception:()=>a,PrintVisitor:()=>w,Visitor:()=>f,WhitespaceControl:()=>v,parse:()=>R,parseWithoutProcessing:()=>P,parser:()=>y,print:()=>b})
var n={}
r.r(n),r.d(n,{SourceLocation:()=>D,id:()=>A,prepareBlock:()=>N,prepareMustache:()=>T,preparePartialBlock:()=>L,preparePath:()=>C,prepareProgram:()=>O,prepareRawBlock:()=>S,stripComment:()=>k,stripFlags:()=>_})
var i=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"]
function o(e,t){var r,n,a,s,u=t&&t.loc
u&&(r=u.start.line,n=u.end.line,a=u.start.column,s=u.end.column,e+=" - "+r+":"+a)
for(var l=Error.prototype.constructor.call(this,e),c=0;c<i.length;c++)this[i[c]]=l[i[c]]
Error.captureStackTrace&&Error.captureStackTrace(this,o)
try{u&&(this.lineNumber=r,this.endLineNumber=n,Object.defineProperty?(Object.defineProperty(this,"column",{value:a,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=a,this.endColumn=s))}catch(e){}}o.prototype=new Error
const a=o
function s(){this.parents=[]}function u(e){this.acceptRequired(e,"path"),this.acceptArray(e.params),this.acceptKey(e,"hash")}function l(e){u.call(this,e),this.acceptKey(e,"program"),this.acceptKey(e,"inverse")}function c(e){this.acceptRequired(e,"name"),this.acceptArray(e.params),this.acceptKey(e,"hash")}s.prototype={constructor:s,mutating:!1,acceptKey:function(e,t){var r=this.accept(e[t])
if(this.mutating){if(r&&!s.prototype[r.type])throw new a('Unexpected node type "'+r.type+'" found when accepting '+t+" on "+e.type)
e[t]=r}},acceptRequired:function(e,t){if(this.acceptKey(e,t),!e[t])throw new a(e.type+" requires "+t)},acceptArray:function(e){for(var t=0,r=e.length;t<r;t++)this.acceptKey(e,t),e[t]||(e.splice(t,1),t--,r--)},accept:function(e){if(e){if(!this[e.type])throw new a("Unknown type: "+e.type,e)
this.current&&this.parents.unshift(this.current),this.current=e
var t=this[e.type](e)
return this.current=this.parents.shift(),!this.mutating||t?t:!1!==t?e:void 0}},Program:function(e){this.acceptArray(e.body)},MustacheStatement:u,Decorator:u,BlockStatement:l,DecoratorBlock:l,PartialStatement:c,PartialBlockStatement:function(e){c.call(this,e),this.acceptKey(e,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:u,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(e){this.acceptArray(e.pairs)},HashPair:function(e){this.acceptRequired(e,"value")}}
const f=s
function p(e){void 0===e&&(e={}),this.options=e}function d(e,t,r){void 0===t&&(t=e.length)
var n=e[t-1],i=e[t-2]
return n?"ContentStatement"===n.type?(i||!r?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(n.original):void 0:r}function h(e,t,r){void 0===t&&(t=-1)
var n=e[t+1],i=e[t+2]
return n?"ContentStatement"===n.type?(i||!r?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(n.original):void 0:r}function g(e,t,r){var n=e[null==t?0:t+1]
if(n&&"ContentStatement"===n.type&&(r||!n.rightStripped)){var i=n.value
n.value=n.value.replace(r?/^\s+/:/^[ \t]*\r?\n?/,""),n.rightStripped=n.value!==i}}function m(e,t,r){var n=e[null==t?e.length-1:t-1]
if(n&&"ContentStatement"===n.type&&(r||!n.leftStripped)){var i=n.value
return n.value=n.value.replace(r?/\s+$/:/[ \t]+$/,""),n.leftStripped=n.value!==i,n.leftStripped}}p.prototype=new f,p.prototype.Program=function(e){var t=!this.options.ignoreStandalone,r=!this.isRootSeen
this.isRootSeen=!0
for(var n=e.body,i=0,o=n.length;i<o;i++){var a=n[i],s=this.accept(a)
if(s){var u=d(n,i,r),l=h(n,i,r),c=s.openStandalone&&u,f=s.closeStandalone&&l,p=s.inlineStandalone&&u&&l
s.close&&g(n,i,!0),s.open&&m(n,i,!0),t&&p&&(g(n,i),m(n,i)&&"PartialStatement"===a.type&&(a.indent=/([ \t]+$)/.exec(n[i-1].original)[1])),t&&c&&(g((a.program||a.inverse).body),m(n,i)),t&&f&&(g(n,i),m((a.inverse||a.program).body))}}return e},p.prototype.BlockStatement=p.prototype.DecoratorBlock=p.prototype.PartialBlockStatement=function(e){this.accept(e.program),this.accept(e.inverse)
var t=e.program||e.inverse,r=e.program&&e.inverse,n=r,i=r
if(r&&r.chained)for(n=r.body[0].program;i.chained;)i=i.body[i.body.length-1].program
var o={open:e.openStrip.open,close:e.closeStrip.close,openStandalone:h(t.body),closeStandalone:d((n||t).body)}
if(e.openStrip.close&&g(t.body,null,!0),r){var a=e.inverseStrip
a.open&&m(t.body,null,!0),a.close&&g(n.body,null,!0),e.closeStrip.open&&m(i.body,null,!0),!this.options.ignoreStandalone&&d(t.body)&&h(n.body)&&(m(t.body),g(n.body))}else e.closeStrip.open&&m(t.body,null,!0)
return o},p.prototype.Decorator=p.prototype.MustacheStatement=function(e){return e.strip},p.prototype.PartialStatement=p.prototype.CommentStatement=function(e){var t=e.strip||{}
return{inlineStandalone:!0,open:t.open,close:t.close}}
const v=p,y=function(){var e=function(e,t,r,n){for(r=r||{},n=e.length;n--;r[e[n]]=t);return r},t=[2,45],r=[1,20],n=[5,14,15,19,29,34,39,44,47,48,52,56,60],i=[1,35],o=[1,38],a=[1,30],s=[1,31],u=[1,32],l=[1,33],c=[1,34],f=[1,37],p=[14,15,19,29,34,39,44,47,48,52,56,60],d=[14,15,19,29,34,44,47,48,52,56,60],h=[15,18],g=[14,15,19,29,34,47,48,52,56,60],m=[33,64,71,79,80,81,82,83,84],v=[23,33,55,64,67,71,74,79,80,81,82,83,84],y=[1,51],b=[1,53],w=[23,33,55,64,67,71,74,79,80,81,82,83,84,86],x=[2,44],E=[55,64,71,79,80,81,82,83,84],D=[1,60],A=[1,61],_=[1,68],k=[33,64,71,74,79,80,81,82,83,84],C=[23,64,71,79,80,81,82,83,84],T=[1,78],S=[64,67,71,79,80,81,82,83,84],N=[33,74],O=[23,33,55,67,71,74],L=[1,109],F=[1,121],q=[71,76],P={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,expr:49,mustache_repetition0:50,mustache_option0:51,OPEN_UNESCAPED:52,mustache_repetition1:53,mustache_option1:54,CLOSE_UNESCAPED:55,OPEN_PARTIAL:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,sexpr:63,OPEN_SEXPR:64,sexpr_repetition0:65,sexpr_option0:66,CLOSE_SEXPR:67,hash:68,hash_repetition_plus0:69,hashSegment:70,ID:71,EQUALS:72,blockParams:73,OPEN_BLOCK_PARAMS:74,blockParams_repetition_plus0:75,CLOSE_BLOCK_PARAMS:76,path:77,dataName:78,STRING:79,NUMBER:80,BOOLEAN:81,UNDEFINED:82,NULL:83,DATA:84,pathSegments:85,SEP:86,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",52:"OPEN_UNESCAPED",55:"CLOSE_UNESCAPED",56:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",64:"OPEN_SEXPR",67:"CLOSE_SEXPR",71:"ID",72:"EQUALS",74:"OPEN_BLOCK_PARAMS",76:"CLOSE_BLOCK_PARAMS",79:"STRING",80:"NUMBER",81:"BOOLEAN",82:"UNDEFINED",83:"NULL",84:"DATA",86:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[49,1],[49,1],[63,5],[68,1],[70,3],[73,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[78,2],[77,3],[77,1],[85,3],[85,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[50,0],[50,2],[51,0],[51,1],[53,0],[53,2],[54,0],[54,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[65,0],[65,2],[66,0],[66,1],[69,1],[69,2],[75,1],[75,2]],performAction:function(e,t,r,n,i,o,a){var s=o.length-1
switch(i){case 1:return o[s-1]
case 2:this.$=n.prepareProgram(o[s])
break
case 3:case 4:case 5:case 6:case 7:case 8:case 20:case 27:case 28:case 33:case 34:this.$=o[s]
break
case 9:this.$={type:"CommentStatement",value:n.stripComment(o[s]),strip:n.stripFlags(o[s],o[s]),loc:n.locInfo(this._$)}
break
case 10:this.$={type:"ContentStatement",original:o[s],value:o[s],loc:n.locInfo(this._$)}
break
case 11:this.$=n.prepareRawBlock(o[s-2],o[s-1],o[s],this._$)
break
case 12:this.$={path:o[s-3],params:o[s-2],hash:o[s-1]}
break
case 13:this.$=n.prepareBlock(o[s-3],o[s-2],o[s-1],o[s],!1,this._$)
break
case 14:this.$=n.prepareBlock(o[s-3],o[s-2],o[s-1],o[s],!0,this._$)
break
case 15:this.$={open:o[s-5],path:o[s-4],params:o[s-3],hash:o[s-2],blockParams:o[s-1],strip:n.stripFlags(o[s-5],o[s])}
break
case 16:case 17:this.$={path:o[s-4],params:o[s-3],hash:o[s-2],blockParams:o[s-1],strip:n.stripFlags(o[s-5],o[s])}
break
case 18:this.$={strip:n.stripFlags(o[s-1],o[s-1]),program:o[s]}
break
case 19:var u=n.prepareBlock(o[s-2],o[s-1],o[s],o[s],!1,this._$),l=n.prepareProgram([u],o[s-1].loc)
l.chained=!0,this.$={strip:o[s-2].strip,program:l,chain:!0}
break
case 21:this.$={path:o[s-1],strip:n.stripFlags(o[s-2],o[s])}
break
case 22:case 23:this.$=n.prepareMustache(o[s-3],o[s-2],o[s-1],o[s-4],n.stripFlags(o[s-4],o[s]),this._$)
break
case 24:this.$={type:"PartialStatement",name:o[s-3],params:o[s-2],hash:o[s-1],indent:"",strip:n.stripFlags(o[s-4],o[s]),loc:n.locInfo(this._$)}
break
case 25:this.$=n.preparePartialBlock(o[s-2],o[s-1],o[s],this._$)
break
case 26:this.$={path:o[s-3],params:o[s-2],hash:o[s-1],strip:n.stripFlags(o[s-4],o[s])}
break
case 29:this.$={type:"SubExpression",path:o[s-3],params:o[s-2],hash:o[s-1],loc:n.locInfo(this._$)}
break
case 30:this.$={type:"Hash",pairs:o[s],loc:n.locInfo(this._$)}
break
case 31:this.$={type:"HashPair",key:n.id(o[s-2]),value:o[s],loc:n.locInfo(this._$)}
break
case 32:this.$=n.id(o[s-1])
break
case 35:this.$={type:"StringLiteral",value:o[s],original:o[s],loc:n.locInfo(this._$)}
break
case 36:this.$={type:"NumberLiteral",value:Number(o[s]),original:Number(o[s]),loc:n.locInfo(this._$)}
break
case 37:this.$={type:"BooleanLiteral",value:"true"===o[s],original:"true"===o[s],loc:n.locInfo(this._$)}
break
case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:n.locInfo(this._$)}
break
case 39:this.$={type:"NullLiteral",original:null,value:null,loc:n.locInfo(this._$)}
break
case 40:this.$=n.preparePath(!0,!1,o[s],this._$)
break
case 41:this.$=n.preparePath(!1,o[s-2],o[s],this._$)
break
case 42:this.$=n.preparePath(!1,!1,o[s],this._$)
break
case 43:o[s-2].push({part:n.id(o[s]),original:o[s],separator:o[s-1]}),this.$=o[s-2]
break
case 44:this.$=[{part:n.id(o[s]),original:o[s]}]
break
case 45:case 47:case 49:case 57:case 63:case 69:case 77:case 81:case 85:case 89:case 93:this.$=[]
break
case 46:case 48:case 50:case 58:case 64:case 70:case 78:case 82:case 86:case 90:case 94:case 98:case 100:o[s-1].push(o[s])
break
case 97:case 99:this.$=[o[s]]}},table:[e([5,14,15,19,29,34,48,52,56,60],t,{3:1,4:2,6:3}),{1:[3]},{5:[1,4]},e([5,39,44,47],[2,2],{7:5,8:6,9:7,10:8,11:9,12:10,13:11,24:15,27:16,16:17,59:19,14:[1,12],15:r,19:[1,23],29:[1,21],34:[1,22],48:[1,13],52:[1,14],56:[1,18],60:[1,24]}),{1:[2,1]},e(n,[2,46]),e(n,[2,3]),e(n,[2,4]),e(n,[2,5]),e(n,[2,6]),e(n,[2,7]),e(n,[2,8]),e(n,[2,9]),{20:26,49:25,63:27,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},{20:26,49:39,63:27,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},e(p,t,{6:3,4:40}),e(d,t,{6:3,4:41}),e(h,[2,47],{17:42}),{20:26,49:43,63:27,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},e(g,t,{6:3,4:44}),e([5,14,15,18,19,29,34,39,44,47,48,52,56,60],[2,10]),{20:45,63:46,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},{20:47,63:46,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},{20:48,63:46,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},{20:26,49:49,63:27,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},e(m,[2,77],{50:50}),e(v,[2,27]),e(v,[2,28],{86:y}),e(v,[2,33]),e(v,[2,34]),e(v,[2,35]),e(v,[2,36]),e(v,[2,37]),e(v,[2,38]),e(v,[2,39]),{20:26,49:52,63:27,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},e(v,[2,42],{86:b}),{71:o,85:54},e(w,x),e(E,[2,81],{53:55}),{25:56,38:58,39:D,43:59,44:A,45:57,47:[2,53]},{28:62,43:63,44:A,47:[2,55]},{13:65,15:r,18:[1,64]},e(m,[2,85],{57:66}),{26:67,47:_},e(k,[2,57],{30:69}),{86:y},e(k,[2,63],{35:70}),e(C,[2,49],{21:71}),e(m,[2,89],{61:72}),{20:26,33:[2,79],49:74,51:73,63:27,64:i,68:75,69:76,70:77,71:T,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},{71:o,85:79},e(S,[2,93],{65:80}),{71:[1,81]},e(v,[2,40],{86:b}),{20:26,49:83,54:82,55:[2,83],63:27,64:i,68:84,69:76,70:77,71:T,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},{26:85,47:_},{47:[2,54]},e(p,t,{6:3,4:86}),{47:[2,20]},{20:87,63:46,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},e(g,t,{6:3,4:88}),{26:89,47:_},{47:[2,56]},e(n,[2,11]),e(h,[2,48]),{20:26,33:[2,87],49:91,58:90,63:27,64:i,68:92,69:76,70:77,71:T,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},e(n,[2,25]),{20:93,63:46,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},e(N,[2,59],{20:26,63:27,77:28,78:29,85:36,69:76,70:77,31:94,49:95,68:96,64:i,71:T,79:a,80:s,81:u,82:l,83:c,84:f}),e(N,[2,65],{20:26,63:27,77:28,78:29,85:36,69:76,70:77,36:97,49:98,68:99,64:i,71:T,79:a,80:s,81:u,82:l,83:c,84:f}),{20:26,22:100,23:[2,51],49:101,63:27,64:i,68:102,69:76,70:77,71:T,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},{20:26,33:[2,91],49:104,62:103,63:27,64:i,68:105,69:76,70:77,71:T,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},{33:[1,106]},e(m,[2,78]),{33:[2,80]},e([23,33,55,67,74],[2,30],{70:107,71:[1,108]}),e(O,[2,97]),e(w,x,{72:L}),e(v,[2,41],{86:b}),{20:26,49:111,63:27,64:i,66:110,67:[2,95],68:112,69:76,70:77,71:T,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},e(w,[2,43]),{55:[1,113]},e(E,[2,82]),{55:[2,84]},e(n,[2,13]),{38:58,39:D,43:59,44:A,45:115,46:114,47:[2,75]},e(k,[2,69],{40:116}),{47:[2,18]},e(n,[2,14]),{33:[1,117]},e(m,[2,86]),{33:[2,88]},{33:[1,118]},{32:119,33:[2,61],73:120,74:F},e(k,[2,58]),e(N,[2,60]),{33:[2,67],37:122,73:123,74:F},e(k,[2,64]),e(N,[2,66]),{23:[1,124]},e(C,[2,50]),{23:[2,52]},{33:[1,125]},e(m,[2,90]),{33:[2,92]},e(n,[2,22]),e(O,[2,98]),{72:L},{20:26,49:126,63:27,64:i,71:o,77:28,78:29,79:a,80:s,81:u,82:l,83:c,84:f,85:36},{67:[1,127]},e(S,[2,94]),{67:[2,96]},e(n,[2,23]),{47:[2,19]},{47:[2,76]},e(N,[2,71],{20:26,63:27,77:28,78:29,85:36,69:76,70:77,41:128,49:129,68:130,64:i,71:T,79:a,80:s,81:u,82:l,83:c,84:f}),e(n,[2,24]),e(n,[2,21]),{33:[1,131]},{33:[2,62]},{71:[1,133],75:132},{33:[1,134]},{33:[2,68]},e(h,[2,12]),e(g,[2,26]),e(O,[2,31]),e(w,[2,29]),{33:[2,73],42:135,73:136,74:F},e(k,[2,70]),e(N,[2,72]),e(p,[2,15]),{71:[1,138],76:[1,137]},e(q,[2,99]),e(d,[2,16]),{33:[1,139]},{33:[2,74]},{33:[2,32]},e(q,[2,100]),e(p,[2,17])],defaultActions:{4:[2,1],57:[2,54],59:[2,20],63:[2,56],75:[2,80],84:[2,84],88:[2,18],92:[2,88],102:[2,52],105:[2,92],112:[2,96],114:[2,19],115:[2,76],120:[2,62],123:[2,68],136:[2,74],137:[2,32]},parseError:function(e,t){if(!t.recoverable){var r=new Error(e)
throw r.hash=t,r}this.trace(e)},parse:function(e){var t=[0],r=[null],n=[],i=this.table,o="",a=0,s=0,u=0,l=n.slice.call(arguments,1),c=Object.create(this.lexer),f={yy:{}}
for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(f.yy[p]=this.yy[p])
c.setInput(e,f.yy),f.yy.lexer=c,f.yy.parser=this,void 0===c.yylloc&&(c.yylloc={})
var d=c.yylloc
n.push(d)
var h,g=c.options&&c.options.ranges
"function"==typeof f.yy.parseError?this.parseError=f.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError
for(var m,v,y,b,w,x,E,D,A,_={};;){if(y=t[t.length-1],this.defaultActions[y]?b=this.defaultActions[y]:(null==m&&(h=void 0,"number"!=typeof(h=c.lex()||1)&&(h=this.symbols_[h]||h),m=h),b=i[y]&&i[y][m]),void 0===b||!b.length||!b[0]){var k
for(x in A=[],i[y])this.terminals_[x]&&x>2&&A.push("'"+this.terminals_[x]+"'")
k=c.showPosition?"Parse error on line "+(a+1)+":\n"+c.showPosition()+"\nExpecting "+A.join(", ")+", got '"+(this.terminals_[m]||m)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==m?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(k,{text:c.match,token:this.terminals_[m]||m,line:c.yylineno,loc:d,expected:A})}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+y+", token: "+m)
switch(b[0]){case 1:t.push(m),r.push(c.yytext),n.push(c.yylloc),t.push(b[1]),m=null,v?(m=v,v=null):(s=c.yyleng,o=c.yytext,a=c.yylineno,d=c.yylloc,u>0&&u--)
break
case 2:if(E=this.productions_[b[1]][1],_.$=r[r.length-E],_._$={first_line:n[n.length-(E||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(E||1)].first_column,last_column:n[n.length-1].last_column},g&&(_._$.range=[n[n.length-(E||1)].range[0],n[n.length-1].range[1]]),void 0!==(w=this.performAction.apply(_,[o,s,a,f.yy,b[1],r,n].concat(l))))return w
E&&(t=t.slice(0,-1*E*2),r=r.slice(0,-1*E),n=n.slice(0,-1*E)),t.push(this.productions_[b[1]][0]),r.push(_.$),n.push(_._$),D=i[t[t.length-2]][t[t.length-1]],t.push(D)
break
case 3:return!0}}return!0}},R={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e)
this.yy.parser.parseError(e,t)},setInput:function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0]
return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,r=e.split(/(?:\r\n?|\n)/g)
this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t
var n=this.match.split(/(?:\r\n?|\n)/g)
this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1)
var i=this.yylloc.range
return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===n.length?this.yylloc.first_column:0)+n[n.length-r.length].length-r[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length)
return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match
return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-")
return e+this.upcomingInput()+"\n"+t+"^"},test_match:function(e,t){var r,n,i
if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),(n=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],r=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r
if(this._backtrack){for(var o in i)this[o]=i[o]
return!1}return!1},next:function(){if(this.done)return this.EOF
var e,t,r,n
this._input||(this.done=!0),this._more||(this.yytext="",this.match="")
for(var i=this._currentRules(),o=0;o<i.length;o++)if((r=this._input.match(this.rules[i[o]]))&&(!t||r[0].length>t[0].length)){if(t=r,n=o,this.options.backtrack_lexer){if(!1!==(e=this.test_match(r,i[o])))return e
if(this._backtrack){t=!1
continue}return!1}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,i[n]))&&e:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(e,t,r,n){function i(e,r){return t.yytext=t.yytext.substring(e,t.yyleng-r+e)}switch(r){case 0:if("\\\\"===t.yytext.slice(-2)?(i(0,1),this.begin("mu")):"\\"===t.yytext.slice(-1)?(i(0,1),this.begin("emu")):this.begin("mu"),t.yytext)return 15
break
case 1:case 5:return 15
case 2:return this.popState(),15
case 3:return this.begin("raw"),15
case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(i(5,9),18)
case 6:case 22:return this.popState(),14
case 7:return 64
case 8:return 67
case 9:return 19
case 10:return this.popState(),this.begin("raw"),23
case 11:return 56
case 12:return 60
case 13:return 29
case 14:return 47
case 15:case 16:return this.popState(),44
case 17:return 34
case 18:return 39
case 19:return 52
case 20:case 23:return 48
case 21:this.unput(t.yytext),this.popState(),this.begin("com")
break
case 24:return 72
case 25:case 26:case 41:return 71
case 27:return 86
case 28:break
case 29:return this.popState(),55
case 30:return this.popState(),33
case 31:return t.yytext=i(1,2).replace(/\\"/g,'"'),79
case 32:return t.yytext=i(1,2).replace(/\\'/g,"'"),79
case 33:return 84
case 34:case 35:return 81
case 36:return 82
case 37:return 83
case 38:return 80
case 39:return 74
case 40:return 76
case 42:return t.yytext=t.yytext.replace(/\\([\\\]])/g,"$1"),71
case 43:return"INVALID"
case 44:return 5}},rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}}}
function B(){this.yy={}}return P.lexer=R,B.prototype=P,P.Parser=B,new B}()
function b(e){return(new w).accept(e)}function w(){this.padding=0}w.prototype=new f,w.prototype.pad=function(e){for(var t="",r=0,n=this.padding;r<n;r++)t+="  "
return t+(e+"\n")},w.prototype.Program=function(e){var t,r,n="",i=e.body
if(e.blockParams){var o="BLOCK PARAMS: ["
for(t=0,r=e.blockParams.length;t<r;t++)o+=" "+e.blockParams[t]
o+=" ]",n+=this.pad(o)}for(t=0,r=i.length;t<r;t++)n+=this.accept(i[t])
return this.padding--,n},w.prototype.MustacheStatement=function(e){return this.pad("{{ "+this.SubExpression(e)+" }}")},w.prototype.Decorator=function(e){return this.pad("{{ DIRECTIVE "+this.SubExpression(e)+" }}")},w.prototype.BlockStatement=w.prototype.DecoratorBlock=function(e){var t=""
return t+=this.pad(("DecoratorBlock"===e.type?"DIRECTIVE ":"")+"BLOCK:"),this.padding++,t+=this.pad(this.SubExpression(e)),e.program&&(t+=this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--),e.inverse&&(e.program&&this.padding++,t+=this.pad("{{^}}"),this.padding++,t+=this.accept(e.inverse),this.padding--,e.program&&this.padding--),this.padding--,t},w.prototype.PartialStatement=function(e){var t="PARTIAL:"+e.name.original
return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),this.pad("{{> "+t+" }}")},w.prototype.PartialBlockStatement=function(e){var t="PARTIAL BLOCK:"+e.name.original
return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),t+=" "+this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--,this.pad("{{> "+t+" }}")},w.prototype.ContentStatement=function(e){return this.pad("CONTENT[ '"+e.value+"' ]")},w.prototype.CommentStatement=function(e){return this.pad("{{! '"+e.value+"' }}")},w.prototype.SubExpression=function(e){for(var t,r=e.params,n=[],i=0,o=r.length;i<o;i++)n.push(this.accept(r[i]))
return r="["+n.join(", ")+"]",t=e.hash?" "+this.accept(e.hash):"",this.accept(e.path)+" "+r+t},w.prototype.PathExpression=function(e){var t=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length
var n=Array(e),i=0
for(t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a]
return n}(["string"==typeof e.head?e.head:"["+this.accept(e.head)+"]"],e.tail).join("/")
return(e.data?"@":"")+"PATH:"+t},w.prototype.StringLiteral=function(e){return'"'+e.value+'"'},w.prototype.NumberLiteral=function(e){return"NUMBER{"+e.value+"}"},w.prototype.BooleanLiteral=function(e){return"BOOLEAN{"+e.value+"}"},w.prototype.UndefinedLiteral=function(){return"UNDEFINED"},w.prototype.NullLiteral=function(){return"NULL"},w.prototype.Hash=function(e){for(var t=e.pairs,r=[],n=0,i=t.length;n<i;n++)r.push(this.accept(t[n]))
return"HASH{"+r.join(", ")+"}"},w.prototype.HashPair=function(e){return e.key+"="+this.accept(e.value)}
var x=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length
var n=Array(e),i=0
for(t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a]
return n}
function E(e,t){if(t=t.path?t.path.original:t,e.path.original!==t){var r={loc:e.path.loc}
throw new a(e.path.original+" doesn't match "+t,r)}}function D(e,t){this.source=e,this.start={line:t.first_line,column:t.first_column},this.end={line:t.last_line,column:t.last_column}}function A(e){return/^\[.*\]$/.test(e)?e.substring(1,e.length-1):e}function _(e,t){return{open:"~"===e.charAt(2),close:"~"===t.charAt(t.length-3)}}function k(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function C(e,t,r,n){var i
n=this.locInfo(n),i=e?"@":t?t.original+".":""
for(var o=[],s=0,u=0,l=r.length;u<l;u++){var c=r[u].part,f=r[u].original!==c
if(i+=(r[u].separator||"")+c,f||".."!==c&&"."!==c&&"this"!==c)o.push(c)
else{if(o.length>0)throw new a("Invalid path: "+i,{loc:n})
".."===c&&s++}}var p=t||o.shift()
return{type:"PathExpression",data:e,depth:s,head:p,tail:o,parts:x([p],o),original:i,loc:n}}function T(e,t,r,n,i,o){var a=n.charAt(3)||n.charAt(2),s="{"!==a&&"&"!==a
return{type:/\*/.test(n)?"Decorator":"MustacheStatement",path:e,params:t,hash:r,escaped:s,strip:i,loc:this.locInfo(o)}}function S(e,t,r,n){E(e,r)
var i={type:"Program",body:t,strip:{},loc:n=this.locInfo(n)}
return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:i,openStrip:{},inverseStrip:{},closeStrip:{},loc:n}}function N(e,t,r,n,i,o){n&&n.path&&E(e,n)
var s,u,l=/\*/.test(e.open)
if(t.blockParams=e.blockParams,r){if(l)throw new a("Unexpected inverse block on decorator",r)
r.chain&&(r.program.body[0].closeStrip=n.strip),u=r.strip,s=r.program}return i&&(i=s,s=t,t=i),{type:l?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:t,inverse:s,openStrip:e.strip,inverseStrip:u,closeStrip:n&&n.strip,loc:this.locInfo(o)}}function O(e,t){if(!t&&e.length){var r=e[0].loc,n=e[e.length-1].loc
r&&n&&(t={source:r.source,start:{line:r.start.line,column:r.start.column},end:{line:n.end.line,column:n.end.column}})}return{type:"Program",body:e,strip:{},loc:t}}function L(e,t,r,n){return E(e,r),{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:t,openStrip:e.strip,closeStrip:r&&r.strip,loc:this.locInfo(n)}}var F={}
for(var q in n)Object.prototype.hasOwnProperty.call(n,q)&&(F[q]=n[q])
function P(e,t){return"Program"===e.type?e:(y.yy=F,y.yy.locInfo=function(e){return new D(t&&t.srcName,e)},y.parse(e))}function R(e,t){var r=P(e,t)
return new v(t).accept(r)}},348:(e,t,r)=>{"use strict"
function n(e){return e&&e.isDescriptor?"descriptor":null===e?"null":typeof e}function i(e,t,r,i){var o={configurable:!0,enumerable:!0}
"undefined"!==n(i)?o.get=i:(o.writable=!1,o.value=r),Object.defineProperty(e,t,o)}function o(e,t){delete e.__parentTreeNode,t&&Object.defineProperty(e,"__parentTreeNode",{value:t,configurable:!0,enumerable:!1})}function a(e,t){this.blueprint=e,this.builders=t}r.d(t,{Z:()=>u}),a.prototype={builderFor:function(e){return this.builders[n(e)]||this.builders.default},build:function(e){var t,r={}
return this.processNode({root:this.blueprint},r),o(t=r.root,e),t},processNode:function(e,t,r){var i=Object.keys(e),a=this
return i.forEach((function(r){var i,o,u,l=e[r]
i=a.builderFor(l),o=s[n(l)]||s.default,(u=i(t,r,l,o))&&a.processNode(u[1],u[0],t)})),o(t,r),t}}
const s={descriptor:function(e,t,r){"function"==typeof r.setup&&r.setup(e,t),r.value?i(e,t,r.value):i(e,t,void 0,(function(){return r.get.call(this,t)}))},object:function(e,t,r){var n,o,a={}
return i(e,t,a),n=a,o=t,Object.defineProperty(n,"__meta",{value:{key:o,type:"node"},configurable:!1,enumerable:!1}),[a,r]},default:function(e,t,r){i(e,t,r)}},u={defineProperty:i,create:function(e,t){var r=function(){for(var e,t=arguments[0],r=Array.prototype.slice.call(arguments,1),n=0;n<r.length;n++)if(e=r[n])for(var i in e)void 0!==e[i]&&(t[i]=e[i])
return t}({},s,(t=t||{}).builder)
return new a(e,r).build(t.parent)},parent:function(e){return function(e){if("object"==typeof e&&null!==e)return e.__parentTreeNode}(e)},meta:function(e){return function(e){if("object"==typeof e&&null!==e)return e.__meta}(e)}}},7544:e=>{e.exports={trueFunc:function(){return!0},falseFunc:function(){return!1}}},2993:function(e){var t
t=function(){return function(){var e={686:function(e,t,r){"use strict"
r.d(t,{default:function(){return w}})
var n=r(279),i=r.n(n),o=r(370),a=r.n(o),s=r(817),u=r.n(s)
function l(e){try{return document.execCommand(e)}catch(e){return!1}}var c=function(e){var t=u()(e)
return l("cut"),t},f=function(e,t){var r=function(e){var t="rtl"===document.documentElement.getAttribute("dir"),r=document.createElement("textarea")
r.style.fontSize="12pt",r.style.border="0",r.style.padding="0",r.style.margin="0",r.style.position="absolute",r.style[t?"right":"left"]="-9999px"
var n=window.pageYOffset||document.documentElement.scrollTop
return r.style.top="".concat(n,"px"),r.setAttribute("readonly",""),r.value=e,r}(e)
t.container.appendChild(r)
var n=u()(r)
return l("copy"),r.remove(),n},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},r=""
return"string"==typeof e?r=f(e,t):e instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==e?void 0:e.type)?r=f(e.value,t):(r=u()(e),l("copy")),r}
function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function y(e,t){var r="data-clipboard-".concat(e)
if(t.hasAttribute(r))return t.getAttribute(r)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(u,e)
var t,r,n,i,o,s=(i=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(i)
if(o){var r=v(this).constructor
e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments)
return function(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}(this,e)})
function u(e,t){var r
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=s.call(this)).resolveOptions(t),r.listenClick(e),r}return t=u,r=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this
this.listener=a()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget,r=this.action(t)||"copy",n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.action,r=void 0===t?"copy":t,n=e.container,i=e.target,o=e.text
if("copy"!==r&&"cut"!==r)throw new Error('Invalid "action" value, use either "copy" or "cut"')
if(void 0!==i){if(!i||"object"!==d(i)||1!==i.nodeType)throw new Error('Invalid "target" value, use a valid Element')
if("copy"===r&&i.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute')
if("cut"===r&&(i.hasAttribute("readonly")||i.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return o?p(o,{container:n}):i?"cut"===r?c(i):p(i,{container:n}):void 0}({action:r,container:this.container,target:this.target(t),text:this.text(t)})
this.emit(n?"success":"error",{action:r,text:n,trigger:t,clearSelection:function(){t&&t.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(e){return y("action",e)}},{key:"defaultTarget",value:function(e){var t=y("target",e)
if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return y("text",e)}},{key:"destroy",value:function(){this.listener.destroy()}}],n=[{key:"copy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body}
return p(e,t)}},{key:"cut",value:function(e){return c(e)}},{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,r=!!document.queryCommandSupported
return t.forEach((function(e){r=r&&!!document.queryCommandSupported(e)})),r}}],r&&g(t.prototype,r),n&&g(t,n),u}(i()),w=b},828:function(e){if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype
t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e
e=e.parentNode}}},438:function(e,t,r){var n=r(828)
function i(e,t,r,n,i){var a=o.apply(this,arguments)
return e.addEventListener(r,a,i),{destroy:function(){e.removeEventListener(r,a,i)}}}function o(e,t,r,i){return function(r){r.delegateTarget=n(r.target,t),r.delegateTarget&&i.call(e,r)}}e.exports=function(e,t,r,n,o){return"function"==typeof e.addEventListener?i.apply(null,arguments):"function"==typeof r?i.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return i(e,t,r,n,o)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var r=Object.prototype.toString.call(e)
return void 0!==e&&("[object NodeList]"===r||"[object HTMLCollection]"===r)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,r){var n=r(879),i=r(438)
e.exports=function(e,t,r){if(!e&&!t&&!r)throw new Error("Missing required arguments")
if(!n.string(t))throw new TypeError("Second argument must be a String")
if(!n.fn(r))throw new TypeError("Third argument must be a Function")
if(n.node(e))return function(e,t,r){return e.addEventListener(t,r),{destroy:function(){e.removeEventListener(t,r)}}}(e,t,r)
if(n.nodeList(e))return function(e,t,r){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,r)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,r)}))}}}(e,t,r)
if(n.string(e))return function(e,t,r){return i(document.body,e,t,r)}(e,t,r)
throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(e){e.exports=function(e){var t
if("SELECT"===e.nodeName)e.focus(),t=e.value
else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var r=e.hasAttribute("readonly")
r||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),r||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus()
var n=window.getSelection(),i=document.createRange()
i.selectNodeContents(e),n.removeAllRanges(),n.addRange(i),t=n.toString()}return t}},279:function(e){function t(){}t.prototype={on:function(e,t,r){var n=this.e||(this.e={})
return(n[e]||(n[e]=[])).push({fn:t,ctx:r}),this},once:function(e,t,r){var n=this
function i(){n.off(e,i),t.apply(r,arguments)}return i._=t,this.on(e,i,r)},emit:function(e){for(var t=[].slice.call(arguments,1),r=((this.e||(this.e={}))[e]||[]).slice(),n=0,i=r.length;n<i;n++)r[n].fn.apply(r[n].ctx,t)
return this},off:function(e,t){var r=this.e||(this.e={}),n=r[e],i=[]
if(n&&t)for(var o=0,a=n.length;o<a;o++)n[o].fn!==t&&n[o].fn._!==t&&i.push(n[o])
return i.length?r[e]=i:delete r[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={}
function r(n){if(t[n])return t[n].exports
var i=t[n]={exports:{}}
return e[n](i,i.exports,r),i.exports}return r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r(686)}().default},e.exports=t()},8221:function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.attributeRules=void 0
var i=n(r(7544)),o=/[-[\]{}()*+?.,\\^$|#\s]/g
function a(e){return e.replace(o,"\\$&")}var s=new Set(["accept","accept-charset","align","alink","axis","bgcolor","charset","checked","clear","codetype","color","compact","declare","defer","dir","direction","disabled","enctype","face","frame","hreflang","http-equiv","lang","language","link","media","method","multiple","nohref","noresize","noshade","nowrap","readonly","rel","rev","rules","scope","scrolling","selected","shape","target","text","type","valign","valuetype","vlink"])
function u(e,t){return"boolean"==typeof e.ignoreCase?e.ignoreCase:"quirks"===e.ignoreCase?!!t.quirksMode:!t.xmlMode&&s.has(e.name)}t.attributeRules={equals:function(e,t,r){var n=r.adapter,i=t.name,o=t.value
return u(t,r)?(o=o.toLowerCase(),function(t){var r=n.getAttributeValue(t,i)
return null!=r&&r.length===o.length&&r.toLowerCase()===o&&e(t)}):function(t){return n.getAttributeValue(t,i)===o&&e(t)}},hyphen:function(e,t,r){var n=r.adapter,i=t.name,o=t.value,a=o.length
return u(t,r)?(o=o.toLowerCase(),function(t){var r=n.getAttributeValue(t,i)
return null!=r&&(r.length===a||"-"===r.charAt(a))&&r.substr(0,a).toLowerCase()===o&&e(t)}):function(t){var r=n.getAttributeValue(t,i)
return null!=r&&(r.length===a||"-"===r.charAt(a))&&r.substr(0,a)===o&&e(t)}},element:function(e,t,r){var n=r.adapter,o=t.name,s=t.value
if(/\s/.test(s))return i.default.falseFunc
var l=new RegExp("(?:^|\\s)".concat(a(s),"(?:$|\\s)"),u(t,r)?"i":"")
return function(t){var r=n.getAttributeValue(t,o)
return null!=r&&r.length>=s.length&&l.test(r)&&e(t)}},exists:function(e,t,r){var n=t.name,i=r.adapter
return function(t){return i.hasAttrib(t,n)&&e(t)}},start:function(e,t,r){var n=r.adapter,o=t.name,a=t.value,s=a.length
return 0===s?i.default.falseFunc:u(t,r)?(a=a.toLowerCase(),function(t){var r=n.getAttributeValue(t,o)
return null!=r&&r.length>=s&&r.substr(0,s).toLowerCase()===a&&e(t)}):function(t){var r
return!!(null===(r=n.getAttributeValue(t,o))||void 0===r?void 0:r.startsWith(a))&&e(t)}},end:function(e,t,r){var n=r.adapter,o=t.name,a=t.value,s=-a.length
return 0===s?i.default.falseFunc:u(t,r)?(a=a.toLowerCase(),function(t){var r
return(null===(r=n.getAttributeValue(t,o))||void 0===r?void 0:r.substr(s).toLowerCase())===a&&e(t)}):function(t){var r
return!!(null===(r=n.getAttributeValue(t,o))||void 0===r?void 0:r.endsWith(a))&&e(t)}},any:function(e,t,r){var n=r.adapter,o=t.name,s=t.value
if(""===s)return i.default.falseFunc
if(u(t,r)){var l=new RegExp(a(s),"i")
return function(t){var r=n.getAttributeValue(t,o)
return null!=r&&r.length>=s.length&&l.test(r)&&e(t)}}return function(t){var r
return!!(null===(r=n.getAttributeValue(t,o))||void 0===r?void 0:r.includes(s))&&e(t)}},not:function(e,t,r){var n=r.adapter,i=t.name,o=t.value
return""===o?function(t){return!!n.getAttributeValue(t,i)&&e(t)}:u(t,r)?(o=o.toLowerCase(),function(t){var r=n.getAttributeValue(t,i)
return(null==r||r.length!==o.length||r.toLowerCase()!==o)&&e(t)}):function(t){return n.getAttributeValue(t,i)!==o&&e(t)}}}},3999:function(e,t,r){"use strict"
var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var i=Object.getOwnPropertyDescriptor(t,r)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.compileToken=t.compileUnsafe=t.compile=void 0
var s=r(8938),u=a(r(7544)),l=o(r(1766)),c=r(7849),f=r(457)
function p(e,t,r){return v("string"==typeof e?(0,s.parse)(e):e,t,r)}function d(e){return e.type===s.SelectorType.Pseudo&&("scope"===e.name||Array.isArray(e.data)&&e.data.some((function(e){return e.some(d)})))}t.compile=function(e,t,r){var n=p(e,t,r)
return(0,f.ensureIsTag)(n,t.adapter)},t.compileUnsafe=p
var h={type:s.SelectorType.Descendant},g={type:"_flexibleDescendant"},m={type:s.SelectorType.Pseudo,name:"scope",data:null}
function v(e,t,r){var n
e.forEach(l.default),r=null!==(n=t.context)&&void 0!==n?n:r
var i=Array.isArray(r),o=r&&(Array.isArray(r)?r:[r])
if(!1!==t.relativeSelector)!function(e,t,r){for(var n=t.adapter,i=!!(null==r?void 0:r.every((function(e){var t=n.isTag(e)&&n.getParent(e)
return e===f.PLACEHOLDER_ELEMENT||t&&n.isTag(t)}))),o=0,a=e;o<a.length;o++){var u=a[o]
if(u.length>0&&(0,l.isTraversal)(u[0])&&u[0].type!==s.SelectorType.Descendant);else{if(!i||u.some(d))continue
u.unshift(h)}u.unshift(m)}}(e,t,o)
else if(e.some((function(e){return e.length>0&&(0,l.isTraversal)(e[0])})))throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled")
var a=!1,p=e.map((function(e){if(e.length>=2){var r=e[0],n=e[1]
r.type!==s.SelectorType.Pseudo||"scope"!==r.name||(i&&n.type===s.SelectorType.Descendant?e[1]=g:n.type!==s.SelectorType.Adjacent&&n.type!==s.SelectorType.Sibling||(a=!0))}return function(e,t,r){var n
return e.reduce((function(e,n){return e===u.default.falseFunc?u.default.falseFunc:(0,c.compileGeneralSelector)(e,n,t,r,v)}),null!==(n=t.rootFunc)&&void 0!==n?n:u.default.trueFunc)}(e,t,o)})).reduce(y,u.default.falseFunc)
return p.shouldTestNextSiblings=a,p}function y(e,t){return t===u.default.falseFunc||e===u.default.trueFunc?e:e===u.default.falseFunc||t===u.default.trueFunc?t:function(r){return e(r)||t(r)}}t.compileToken=v},7849:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.compileGeneralSelector=void 0
var n=r(8221),i=r(8896),o=r(8938)
function a(e,t){var r=t.getParent(e)
return r&&t.isTag(r)?r:null}t.compileGeneralSelector=function(e,t,r,s,u){var l=r.adapter,c=r.equals
switch(t.type){case o.SelectorType.PseudoElement:throw new Error("Pseudo-elements are not supported by css-select")
case o.SelectorType.ColumnCombinator:throw new Error("Column combinators are not yet supported by css-select")
case o.SelectorType.Attribute:if(null!=t.namespace)throw new Error("Namespaced attributes are not yet supported by css-select")
return r.xmlMode&&!r.lowerCaseAttributeNames||(t.name=t.name.toLowerCase()),n.attributeRules[t.action](e,t,r)
case o.SelectorType.Pseudo:return(0,i.compilePseudoSelector)(e,t,r,s,u)
case o.SelectorType.Tag:if(null!=t.namespace)throw new Error("Namespaced tag names are not yet supported by css-select")
var f=t.name
return r.xmlMode&&!r.lowerCaseTags||(f=f.toLowerCase()),function(t){return l.getName(t)===f&&e(t)}
case o.SelectorType.Descendant:if(!1===r.cacheResults||"undefined"==typeof WeakSet)return function(t){for(var r=t;r=a(r,l);)if(e(r))return!0
return!1}
var p=new WeakSet
return function(t){for(var r=t;r=a(r,l);)if(!p.has(r)){if(l.isTag(r)&&e(r))return!0
p.add(r)}return!1}
case"_flexibleDescendant":return function(t){var r=t
do{if(e(r))return!0}while(r=a(r,l))
return!1}
case o.SelectorType.Parent:return function(t){return l.getChildren(t).some((function(t){return l.isTag(t)&&e(t)}))}
case o.SelectorType.Child:return function(t){var r=l.getParent(t)
return null!=r&&l.isTag(r)&&e(r)}
case o.SelectorType.Sibling:return function(t){for(var r=l.getSiblings(t),n=0;n<r.length;n++){var i=r[n]
if(c(t,i))break
if(l.isTag(i)&&e(i))return!0}return!1}
case o.SelectorType.Adjacent:return l.prevElementSibling?function(t){var r=l.prevElementSibling(t)
return null!=r&&e(r)}:function(t){for(var r,n=l.getSiblings(t),i=0;i<n.length;i++){var o=n[i]
if(c(t,o))break
l.isTag(o)&&(r=o)}return!!r&&e(r)}
case o.SelectorType.Universal:if(null!=t.namespace&&"*"!==t.namespace)throw new Error("Namespaced universal selectors are not yet supported by css-select")
return e}}},7133:function(e,t,r){"use strict"
var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var i=Object.getOwnPropertyDescriptor(t,r)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.aliases=t.pseudos=t.filters=t.is=t.selectOne=t.selectAll=t.prepareContext=t._compileToken=t._compileUnsafe=t.compile=void 0
var s=o(r(5511)),u=a(r(7544)),l=r(3999),c=r(457),f=function(e,t){return e===t},p={adapter:s,equals:f}
function d(e){var t,r,n,i,o=null!=e?e:p
return null!==(t=o.adapter)&&void 0!==t||(o.adapter=s),null!==(r=o.equals)&&void 0!==r||(o.equals=null!==(i=null===(n=o.adapter)||void 0===n?void 0:n.equals)&&void 0!==i?i:f),o}function h(e){return function(t,r,n){var i=d(r)
return e(t,i,n)}}function g(e){return function(t,r,n){var i=d(n)
"function"!=typeof t&&(t=(0,l.compileUnsafe)(t,i,r))
var o=m(r,i.adapter,t.shouldTestNextSiblings)
return e(t,o,i)}}function m(e,t,r){return void 0===r&&(r=!1),r&&(e=function(e,t){for(var r=Array.isArray(e)?e.slice(0):[e],n=r.length,i=0;i<n;i++){var o=(0,c.getNextSiblings)(r[i],t)
r.push.apply(r,o)}return r}(e,t)),Array.isArray(e)?t.removeSubsets(e):t.getChildren(e)}t.compile=h(l.compile),t._compileUnsafe=h(l.compileUnsafe),t._compileToken=h(l.compileToken),t.prepareContext=m,t.selectAll=g((function(e,t,r){return e!==u.default.falseFunc&&t&&0!==t.length?r.adapter.findAll(e,t):[]})),t.selectOne=g((function(e,t,r){return e!==u.default.falseFunc&&t&&0!==t.length?r.adapter.findOne(e,t):null})),t.is=function(e,t,r){var n=d(r)
return("function"==typeof t?t:(0,l.compile)(t,n))(e)},t.default=t.selectAll
var v=r(8896)
Object.defineProperty(t,"filters",{enumerable:!0,get:function(){return v.filters}}),Object.defineProperty(t,"pseudos",{enumerable:!0,get:function(){return v.pseudos}}),Object.defineProperty(t,"aliases",{enumerable:!0,get:function(){return v.aliases}})},4473:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.aliases=void 0,t.aliases={"any-link":":is(a, area, link)[href]",link:":any-link:not(:visited)",disabled:":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",enabled:":not(:disabled)",checked:":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",required:":is(input, select, textarea)[required]",optional:":is(input, select, textarea):not([required])",selected:"option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",checkbox:"[type=checkbox]",file:"[type=file]",password:"[type=password]",radio:"[type=radio]",reset:"[type=reset]",image:"[type=image]",submit:"[type=submit]",parent:":not(:empty)",header:":is(h1, h2, h3, h4, h5, h6)",button:":is(button, input[type=button])",input:":is(input, textarea, select, button)",text:"input:is(:not([type!='']), [type=text])"}},6636:function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.filters=void 0
var i=n(r(1316)),o=n(r(7544))
function a(e,t){return function(r){var n=t.getParent(r)
return null!=n&&t.isTag(n)&&e(r)}}function s(e){return function(t,r,n){var i=n.adapter[e]
return"function"!=typeof i?o.default.falseFunc:function(e){return i(e)&&t(e)}}}t.filters={contains:function(e,t,r){var n=r.adapter
return function(r){return e(r)&&n.getText(r).includes(t)}},icontains:function(e,t,r){var n=r.adapter,i=t.toLowerCase()
return function(t){return e(t)&&n.getText(t).toLowerCase().includes(i)}},"nth-child":function(e,t,r){var n=r.adapter,s=r.equals,u=(0,i.default)(t)
return u===o.default.falseFunc?o.default.falseFunc:u===o.default.trueFunc?a(e,n):function(t){for(var r=n.getSiblings(t),i=0,o=0;o<r.length&&!s(t,r[o]);o++)n.isTag(r[o])&&i++
return u(i)&&e(t)}},"nth-last-child":function(e,t,r){var n=r.adapter,s=r.equals,u=(0,i.default)(t)
return u===o.default.falseFunc?o.default.falseFunc:u===o.default.trueFunc?a(e,n):function(t){for(var r=n.getSiblings(t),i=0,o=r.length-1;o>=0&&!s(t,r[o]);o--)n.isTag(r[o])&&i++
return u(i)&&e(t)}},"nth-of-type":function(e,t,r){var n=r.adapter,s=r.equals,u=(0,i.default)(t)
return u===o.default.falseFunc?o.default.falseFunc:u===o.default.trueFunc?a(e,n):function(t){for(var r=n.getSiblings(t),i=0,o=0;o<r.length;o++){var a=r[o]
if(s(t,a))break
n.isTag(a)&&n.getName(a)===n.getName(t)&&i++}return u(i)&&e(t)}},"nth-last-of-type":function(e,t,r){var n=r.adapter,s=r.equals,u=(0,i.default)(t)
return u===o.default.falseFunc?o.default.falseFunc:u===o.default.trueFunc?a(e,n):function(t){for(var r=n.getSiblings(t),i=0,o=r.length-1;o>=0;o--){var a=r[o]
if(s(t,a))break
n.isTag(a)&&n.getName(a)===n.getName(t)&&i++}return u(i)&&e(t)}},root:function(e,t,r){var n=r.adapter
return function(t){var r=n.getParent(t)
return(null==r||!n.isTag(r))&&e(t)}},scope:function(e,r,n,i){var o=n.equals
return i&&0!==i.length?1===i.length?function(t){return o(i[0],t)&&e(t)}:function(t){return i.includes(t)&&e(t)}:t.filters.root(e,r,n)},hover:s("isHovered"),visited:s("isVisited"),active:s("isActive")}},8896:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.compilePseudoSelector=t.aliases=t.pseudos=t.filters=void 0
var n=r(8938),i=r(6636)
Object.defineProperty(t,"filters",{enumerable:!0,get:function(){return i.filters}})
var o=r(7191)
Object.defineProperty(t,"pseudos",{enumerable:!0,get:function(){return o.pseudos}})
var a=r(4473)
Object.defineProperty(t,"aliases",{enumerable:!0,get:function(){return a.aliases}})
var s=r(457)
t.compilePseudoSelector=function(e,t,r,u,l){var c,f=t.name,p=t.data
if(Array.isArray(p)){if(!(f in s.subselects))throw new Error("Unknown pseudo-class :".concat(f,"(").concat(p,")"))
return s.subselects[f](e,p,r,u,l)}var d=null===(c=r.pseudos)||void 0===c?void 0:c[f],h="string"==typeof d?d:a.aliases[f]
if("string"==typeof h){if(null!=p)throw new Error("Pseudo ".concat(f," doesn't have any arguments"))
var g=(0,n.parse)(h)
return s.subselects.is(e,g,r,u,l)}if("function"==typeof d)return(0,o.verifyPseudoArgs)(d,f,p,1),function(t){return d(t,p)&&e(t)}
if(f in i.filters)return i.filters[f](e,p,r,u)
if(f in o.pseudos){var m=o.pseudos[f]
return(0,o.verifyPseudoArgs)(m,f,p,2),function(t){return m(t,r,p)&&e(t)}}throw new Error("Unknown pseudo-class :".concat(f))}},7191:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.verifyPseudoArgs=t.pseudos=void 0,t.pseudos={empty:function(e,t){var r=t.adapter
return!r.getChildren(e).some((function(e){return r.isTag(e)||""!==r.getText(e)}))},"first-child":function(e,t){var r=t.adapter,n=t.equals
if(r.prevElementSibling)return null==r.prevElementSibling(e)
var i=r.getSiblings(e).find((function(e){return r.isTag(e)}))
return null!=i&&n(e,i)},"last-child":function(e,t){for(var r=t.adapter,n=t.equals,i=r.getSiblings(e),o=i.length-1;o>=0;o--){if(n(e,i[o]))return!0
if(r.isTag(i[o]))break}return!1},"first-of-type":function(e,t){for(var r=t.adapter,n=t.equals,i=r.getSiblings(e),o=r.getName(e),a=0;a<i.length;a++){var s=i[a]
if(n(e,s))return!0
if(r.isTag(s)&&r.getName(s)===o)break}return!1},"last-of-type":function(e,t){for(var r=t.adapter,n=t.equals,i=r.getSiblings(e),o=r.getName(e),a=i.length-1;a>=0;a--){var s=i[a]
if(n(e,s))return!0
if(r.isTag(s)&&r.getName(s)===o)break}return!1},"only-of-type":function(e,t){var r=t.adapter,n=t.equals,i=r.getName(e)
return r.getSiblings(e).every((function(t){return n(e,t)||!r.isTag(t)||r.getName(t)!==i}))},"only-child":function(e,t){var r=t.adapter,n=t.equals
return r.getSiblings(e).every((function(t){return n(e,t)||!r.isTag(t)}))}},t.verifyPseudoArgs=function(e,t,r,n){if(null===r){if(e.length>n)throw new Error("Pseudo-class :".concat(t," requires an argument"))}else if(e.length===n)throw new Error("Pseudo-class :".concat(t," doesn't have any arguments"))}},457:function(e,t,r){"use strict"
var n=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i])
return e.concat(n||Array.prototype.slice.call(t))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.subselects=t.getNextSiblings=t.ensureIsTag=t.PLACEHOLDER_ELEMENT=void 0
var o=i(r(7544)),a=r(1766)
function s(e,t){return e===o.default.falseFunc?o.default.falseFunc:function(r){return t.isTag(r)&&e(r)}}function u(e,t){var r=t.getSiblings(e)
if(r.length<=1)return[]
var n=r.indexOf(e)
return n<0||n===r.length-1?[]:r.slice(n+1).filter(t.isTag)}function l(e){return{xmlMode:!!e.xmlMode,lowerCaseAttributeNames:!!e.lowerCaseAttributeNames,lowerCaseTags:!!e.lowerCaseTags,quirksMode:!!e.quirksMode,cacheResults:!!e.cacheResults,pseudos:e.pseudos,adapter:e.adapter,equals:e.equals}}t.PLACEHOLDER_ELEMENT={},t.ensureIsTag=s,t.getNextSiblings=u
var c=function(e,t,r,n,i){var a=i(t,l(r),n)
return a===o.default.trueFunc?e:a===o.default.falseFunc?o.default.falseFunc:function(t){return a(t)&&e(t)}}
t.subselects={is:c,matches:c,where:c,not:function(e,t,r,n,i){var a=i(t,l(r),n)
return a===o.default.falseFunc?e:a===o.default.trueFunc?o.default.falseFunc:function(t){return!a(t)&&e(t)}},has:function(e,r,i,c,f){var p=i.adapter,d=l(i)
d.relativeSelector=!0
var h=r.some((function(e){return e.some(a.isTraversal)}))?[t.PLACEHOLDER_ELEMENT]:void 0,g=f(r,d,h)
if(g===o.default.falseFunc)return o.default.falseFunc
var m=s(g,p)
if(h&&g!==o.default.trueFunc){var v=g.shouldTestNextSiblings,y=void 0!==v&&v
return function(t){if(!e(t))return!1
h[0]=t
var r=p.getChildren(t),i=y?n(n([],r,!0),u(t,p),!0):r
return p.existsOne(m,i)}}return function(t){return e(t)&&p.existsOne(m,p.getChildren(t))}}}},1766:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.isTraversal=void 0
var n=r(8938),i=new Map([[n.SelectorType.Universal,50],[n.SelectorType.Tag,30],[n.SelectorType.Attribute,1],[n.SelectorType.Pseudo,0]])
t.isTraversal=function(e){return!i.has(e.type)}
var o=new Map([[n.AttributeAction.Exists,10],[n.AttributeAction.Equals,8],[n.AttributeAction.Not,7],[n.AttributeAction.Start,6],[n.AttributeAction.End,6],[n.AttributeAction.Any,5]])
function a(e){var t,r,s=null!==(t=i.get(e.type))&&void 0!==t?t:-1
return e.type===n.SelectorType.Attribute?(s=null!==(r=o.get(e.action))&&void 0!==r?r:4,e.action===n.AttributeAction.Equals&&"id"===e.name&&(s=9),e.ignoreCase&&(s>>=1)):e.type===n.SelectorType.Pseudo&&(e.data?"has"===e.name||"contains"===e.name?s=0:Array.isArray(e.data)?(s=Math.min.apply(Math,e.data.map((function(e){return Math.min.apply(Math,e.map(a))}))))<0&&(s=0):s=2:s=3),s}t.default=function(e){for(var t=e.map(a),r=1;r<e.length;r++){var n=t[r]
if(!(n<0))for(var i=r-1;i>=0&&n<t[i];i--){var o=e[i+1]
e[i+1]=e[i],e[i]=o,t[i+1]=t[i],t[i]=n}}}},8938:(e,t,r)=>{"use strict"
var n
r.r(t),r.d(t,{AttributeAction:()=>o,IgnoreCaseMode:()=>i,SelectorType:()=>n,isTraversal:()=>c,parse:()=>m,stringify:()=>D}),function(e){e.Attribute="attribute",e.Pseudo="pseudo",e.PseudoElement="pseudo-element",e.Tag="tag",e.Universal="universal",e.Adjacent="adjacent",e.Child="child",e.Descendant="descendant",e.Parent="parent",e.Sibling="sibling",e.ColumnCombinator="column-combinator"}(n||(n={}))
const i={Unknown:null,QuirksMode:"quirks",IgnoreCase:!0,CaseSensitive:!1}
var o
!function(e){e.Any="any",e.Element="element",e.End="end",e.Equals="equals",e.Exists="exists",e.Hyphen="hyphen",e.Not="not",e.Start="start"}(o||(o={}))
const a=/^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,s=/\\([\da-f]{1,6}\s?|(\s)|.)/gi,u=new Map([[126,o.Element],[94,o.Start],[36,o.End],[42,o.Any],[33,o.Not],[124,o.Hyphen]]),l=new Set(["has","not","matches","is","where","host","host-context"])
function c(e){switch(e.type){case n.Adjacent:case n.Child:case n.Descendant:case n.Parent:case n.Sibling:case n.ColumnCombinator:return!0
default:return!1}}const f=new Set(["contains","icontains"])
function p(e,t,r){const n=parseInt(t,16)-65536
return n!=n||r?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)}function d(e){return e.replace(s,p)}function h(e){return 39===e||34===e}function g(e){return 32===e||9===e||10===e||12===e||13===e}function m(e){const t=[],r=v(t,`${e}`,0)
if(r<e.length)throw new Error(`Unmatched selector: ${e.slice(r)}`)
return t}function v(e,t,r){let i=[]
function s(e){const n=t.slice(r+e).match(a)
if(!n)throw new Error(`Expected name, found ${t.slice(r)}`)
const[i]=n
return r+=e+i.length,d(i)}function p(e){for(r+=e;r<t.length&&g(t.charCodeAt(r));)r++}function m(){const e=r+=1
let n=1
for(;n>0&&r<t.length;r++)40!==t.charCodeAt(r)||y(r)?41!==t.charCodeAt(r)||y(r)||n--:n++
if(n)throw new Error("Parenthesis not matched")
return d(t.slice(e,r-1))}function y(e){let r=0
for(;92===t.charCodeAt(--e);)r++
return 1==(1&r)}function b(){if(i.length>0&&c(i[i.length-1]))throw new Error("Did not expect successive traversals.")}function w(e){i.length>0&&i[i.length-1].type===n.Descendant?i[i.length-1].type=e:(b(),i.push({type:e}))}function x(e,t){i.push({type:n.Attribute,name:e,action:t,value:s(1),namespace:null,ignoreCase:"quirks"})}function E(){if(i.length&&i[i.length-1].type===n.Descendant&&i.pop(),0===i.length)throw new Error("Empty sub-selector")
e.push(i)}if(p(0),t.length===r)return r
e:for(;r<t.length;){const e=t.charCodeAt(r)
switch(e){case 32:case 9:case 10:case 12:case 13:0!==i.length&&i[0].type===n.Descendant||(b(),i.push({type:n.Descendant})),p(1)
break
case 62:w(n.Child),p(1)
break
case 60:w(n.Parent),p(1)
break
case 126:w(n.Sibling),p(1)
break
case 43:w(n.Adjacent),p(1)
break
case 46:x("class",o.Element)
break
case 35:x("id",o.Equals)
break
case 91:{let e
p(1)
let a=null
124===t.charCodeAt(r)?e=s(1):t.startsWith("*|",r)?(a="*",e=s(2)):(e=s(0),124===t.charCodeAt(r)&&61!==t.charCodeAt(r+1)&&(a=e,e=s(1))),p(0)
let l=o.Exists
const c=u.get(t.charCodeAt(r))
if(c){if(l=c,61!==t.charCodeAt(r+1))throw new Error("Expected `=`")
p(2)}else 61===t.charCodeAt(r)&&(l=o.Equals,p(1))
let f="",m=null
if("exists"!==l){if(h(t.charCodeAt(r))){const e=t.charCodeAt(r)
let n=r+1
for(;n<t.length&&(t.charCodeAt(n)!==e||y(n));)n+=1
if(t.charCodeAt(n)!==e)throw new Error("Attribute value didn't end")
f=d(t.slice(r+1,n)),r=n+1}else{const e=r
for(;r<t.length&&(!g(t.charCodeAt(r))&&93!==t.charCodeAt(r)||y(r));)r+=1
f=d(t.slice(e,r))}p(0)
const e=32|t.charCodeAt(r)
115===e?(m=!1,p(1)):105===e&&(m=!0,p(1))}if(93!==t.charCodeAt(r))throw new Error("Attribute selector didn't terminate")
r+=1
const v={type:n.Attribute,name:e,action:l,value:f,namespace:a,ignoreCase:m}
i.push(v)
break}case 58:{if(58===t.charCodeAt(r+1)){i.push({type:n.PseudoElement,name:s(2).toLowerCase(),data:40===t.charCodeAt(r)?m():null})
continue}const e=s(1).toLowerCase()
let o=null
if(40===t.charCodeAt(r))if(l.has(e)){if(h(t.charCodeAt(r+1)))throw new Error(`Pseudo-selector ${e} cannot be quoted`)
if(o=[],r=v(o,t,r+1),41!==t.charCodeAt(r))throw new Error(`Missing closing parenthesis in :${e} (${t})`)
r+=1}else{if(o=m(),f.has(e)){const e=o.charCodeAt(0)
e===o.charCodeAt(o.length-1)&&h(e)&&(o=o.slice(1,-1))}o=d(o)}i.push({type:n.Pseudo,name:e,data:o})
break}case 44:E(),i=[],p(1)
break
default:{if(t.startsWith("/*",r)){const e=t.indexOf("*/",r+2)
if(e<0)throw new Error("Comment was not terminated")
r=e+2,0===i.length&&p(0)
break}let o,u=null
if(42===e)r+=1,o="*"
else if(124===e){if(o="",124===t.charCodeAt(r+1)){w(n.ColumnCombinator),p(2)
break}}else{if(!a.test(t.slice(r)))break e
o=s(0)}124===t.charCodeAt(r)&&124!==t.charCodeAt(r+1)&&(u=o,42===t.charCodeAt(r+1)?(o="*",r+=2):o=s(1)),i.push("*"===o?{type:n.Universal,namespace:u}:{type:n.Tag,name:o,namespace:u})}}}return E(),r}const y=["\\",'"'],b=[...y,"(",")"],w=new Set(y.map((e=>e.charCodeAt(0)))),x=new Set(b.map((e=>e.charCodeAt(0)))),E=new Set([...b,"~","^","$","*","+","!","|",":","[","]"," ","."].map((e=>e.charCodeAt(0))))
function D(e){return e.map((e=>e.map(A).join(""))).join(", ")}function A(e,t,r){switch(e.type){case n.Child:return 0===t?"> ":" > "
case n.Parent:return 0===t?"< ":" < "
case n.Sibling:return 0===t?"~ ":" ~ "
case n.Adjacent:return 0===t?"+ ":" + "
case n.Descendant:return" "
case n.ColumnCombinator:return 0===t?"|| ":" || "
case n.Universal:return"*"===e.namespace&&t+1<r.length&&"name"in r[t+1]?"":`${k(e.namespace)}*`
case n.Tag:return _(e)
case n.PseudoElement:return`::${C(e.name,E)}${null===e.data?"":`(${C(e.data,x)})`}`
case n.Pseudo:return`:${C(e.name,E)}${null===e.data?"":`(${"string"==typeof e.data?C(e.data,x):D(e.data)})`}`
case n.Attribute:{if("id"===e.name&&e.action===o.Equals&&"quirks"===e.ignoreCase&&!e.namespace)return`#${C(e.value,E)}`
if("class"===e.name&&e.action===o.Element&&"quirks"===e.ignoreCase&&!e.namespace)return`.${C(e.value,E)}`
const t=_(e)
return e.action===o.Exists?`[${t}]`:`[${t}${function(e){switch(e){case o.Equals:return""
case o.Element:return"~"
case o.Start:return"^"
case o.End:return"$"
case o.Any:return"*"
case o.Not:return"!"
case o.Hyphen:return"|"
case o.Exists:throw new Error("Shouldn't be here")}}(e.action)}="${C(e.value,w)}"${null===e.ignoreCase?"":e.ignoreCase?" i":" s"}]`}}}function _(e){return`${k(e.namespace)}${C(e.name,E)}`}function k(e){return null!==e?`${"*"===e?"*":C(e,E)}|`:""}function C(e,t){let r=0,n=""
for(let i=0;i<e.length;i++)t.has(e.charCodeAt(i))&&(n+=`${e.slice(r,i)}\\${e.charAt(i)}`,r=i+1)
return n.length>0?n+e.slice(r):e}},3117:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.attributeNames=t.elementNames=void 0,t.elementNames=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map((function(e){return[e.toLowerCase(),e]}))),t.attributeNames=new Map(["definitionURL","attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map((function(e){return[e.toLowerCase(),e]})))},1671:function(e,t,r){"use strict"
var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},n.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var i=Object.getOwnPropertyDescriptor(t,r)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r)
return o(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0
var s=a(r(7304)),u=r(7531),l=r(3117),c=new Set(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])
function f(e){return e.replace(/"/g,"&quot;")}var p=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"])
function d(e,t){void 0===t&&(t={})
for(var r=("length"in e?e:[e]),n="",i=0;i<r.length;i++)n+=h(r[i],t)
return n}function h(e,t){switch(e.type){case s.Root:return d(e.children,t)
case s.Doctype:case s.Directive:return"<".concat(e.data,">")
case s.Comment:return"\x3c!--".concat(e.data,"--\x3e")
case s.CDATA:return function(e){return"<![CDATA[".concat(e.children[0].data,"]]>")}(e)
case s.Script:case s.Style:case s.Tag:return function(e,t){var r
"foreign"===t.xmlMode&&(e.name=null!==(r=l.elementNames.get(e.name))&&void 0!==r?r:e.name,e.parent&&g.has(e.parent.name)&&(t=n(n({},t),{xmlMode:!1}))),!t.xmlMode&&m.has(e.name)&&(t=n(n({},t),{xmlMode:"foreign"}))
var i="<".concat(e.name),o=function(e,t){var r
if(e){var n=!1===(null!==(r=t.encodeEntities)&&void 0!==r?r:t.decodeEntities)?f:t.xmlMode||"utf8"!==t.encodeEntities?u.encodeXML:u.escapeAttribute
return Object.keys(e).map((function(r){var i,o,a=null!==(i=e[r])&&void 0!==i?i:""
return"foreign"===t.xmlMode&&(r=null!==(o=l.attributeNames.get(r))&&void 0!==o?o:r),t.emptyAttrs||t.xmlMode||""!==a?"".concat(r,'="').concat(n(a),'"'):r})).join(" ")}}(e.attribs,t)
return o&&(i+=" ".concat(o)),0===e.children.length&&(t.xmlMode?!1!==t.selfClosingTags:t.selfClosingTags&&p.has(e.name))?(t.xmlMode||(i+=" "),i+="/>"):(i+=">",e.children.length>0&&(i+=d(e.children,t)),!t.xmlMode&&p.has(e.name)||(i+="</".concat(e.name,">"))),i}(e,t)
case s.Text:return function(e,t){var r,n=e.data||""
return!1===(null!==(r=t.encodeEntities)&&void 0!==r?r:t.decodeEntities)||!t.xmlMode&&e.parent&&c.has(e.parent.name)||(n=t.xmlMode||"utf8"!==t.encodeEntities?(0,u.encodeXML)(n):(0,u.escapeText)(n)),n}(e,t)}}t.render=d,t.default=d
var g=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"]),m=new Set(["svg","math"])},7304:(e,t)=>{"use strict"
var r
Object.defineProperty(t,"__esModule",{value:!0}),t.Doctype=t.CDATA=t.Tag=t.Style=t.Script=t.Comment=t.Directive=t.Text=t.Root=t.isTag=t.ElementType=void 0,function(e){e.Root="root",e.Text="text",e.Directive="directive",e.Comment="comment",e.Script="script",e.Style="style",e.Tag="tag",e.CDATA="cdata",e.Doctype="doctype"}(r=t.ElementType||(t.ElementType={})),t.isTag=function(e){return e.type===r.Tag||e.type===r.Script||e.type===r.Style},t.Root=r.Root,t.Text=r.Text,t.Directive=r.Directive,t.Comment=r.Comment,t.Script=r.Script,t.Style=r.Style,t.Tag=r.Tag,t.CDATA=r.CDATA,t.Doctype=r.Doctype},1363:function(e,t,r){"use strict"
var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var i=Object.getOwnPropertyDescriptor(t,r)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)}
Object.defineProperty(t,"__esModule",{value:!0}),t.DomHandler=void 0
var o=r(7304),a=r(5653)
i(r(5653),t)
var s={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},u=function(){function e(e,t,r){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,"function"==typeof t&&(r=t,t=s),"object"==typeof e&&(t=e,e=void 0),this.callback=null!=e?e:null,this.options=null!=t?t:s,this.elementCB=null!=r?r:null}return e.prototype.onparserinit=function(e){this.parser=e},e.prototype.onreset=function(){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},e.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},e.prototype.onerror=function(e){this.handleCallback(e)},e.prototype.onclosetag=function(){this.lastNode=null
var e=this.tagStack.pop()
this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(e)},e.prototype.onopentag=function(e,t){var r=this.options.xmlMode?o.ElementType.Tag:void 0,n=new a.Element(e,t,void 0,r)
this.addNode(n),this.tagStack.push(n)},e.prototype.ontext=function(e){var t=this.lastNode
if(t&&t.type===o.ElementType.Text)t.data+=e,this.options.withEndIndices&&(t.endIndex=this.parser.endIndex)
else{var r=new a.Text(e)
this.addNode(r),this.lastNode=r}},e.prototype.oncomment=function(e){if(this.lastNode&&this.lastNode.type===o.ElementType.Comment)this.lastNode.data+=e
else{var t=new a.Comment(e)
this.addNode(t),this.lastNode=t}},e.prototype.oncommentend=function(){this.lastNode=null},e.prototype.oncdatastart=function(){var e=new a.Text(""),t=new a.CDATA([e])
this.addNode(t),e.parent=t,this.lastNode=e},e.prototype.oncdataend=function(){this.lastNode=null},e.prototype.onprocessinginstruction=function(e,t){var r=new a.ProcessingInstruction(e,t)
this.addNode(r)},e.prototype.handleCallback=function(e){if("function"==typeof this.callback)this.callback(e,this.dom)
else if(e)throw e},e.prototype.addNode=function(e){var t=this.tagStack[this.tagStack.length-1],r=t.children[t.children.length-1]
this.options.withStartIndices&&(e.startIndex=this.parser.startIndex),this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),t.children.push(e),r&&(e.prev=r,r.next=e),e.parent=t,this.lastNode=null},e}()
t.DomHandler=u,t.default=u},5653:function(e,t,r){"use strict"
var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)}
Object.defineProperty(t,"__esModule",{value:!0}),t.cloneNode=t.hasChildren=t.isDocument=t.isDirective=t.isComment=t.isText=t.isCDATA=t.isTag=t.Element=t.Document=t.CDATA=t.NodeWithChildren=t.ProcessingInstruction=t.Comment=t.Text=t.DataNode=t.Node=void 0
var a=r(7304),s=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(e){return void 0===e&&(e=!1),E(this,e)},e}()
t.Node=s
var u=function(e){function t(t){var r=e.call(this)||this
return r.data=t,r}return i(t,e),Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(e){this.data=e},enumerable:!1,configurable:!0}),t}(s)
t.DataNode=u
var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.type=a.ElementType.Text,t}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(u)
t.Text=l
var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.type=a.ElementType.Comment,t}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(u)
t.Comment=c
var f=function(e){function t(t,r){var n=e.call(this,r)||this
return n.name=t,n.type=a.ElementType.Directive,n}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(u)
t.ProcessingInstruction=f
var p=function(e){function t(t){var r=e.call(this)||this
return r.children=t,r}return i(t,e),Object.defineProperty(t.prototype,"firstChild",{get:function(){var e
return null!==(e=this.children[0])&&void 0!==e?e:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(e){this.children=e},enumerable:!1,configurable:!0}),t}(s)
t.NodeWithChildren=p
var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.type=a.ElementType.CDATA,t}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}(p)
t.CDATA=d
var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.type=a.ElementType.Root,t}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}(p)
t.Document=h
var g=function(e){function t(t,r,n,i){void 0===n&&(n=[]),void 0===i&&(i="script"===t?a.ElementType.Script:"style"===t?a.ElementType.Style:a.ElementType.Tag)
var o=e.call(this,n)||this
return o.name=t,o.attribs=r,o.type=i,o}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(e){this.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var e=this
return Object.keys(this.attribs).map((function(t){var r,n
return{name:t,value:e.attribs[t],namespace:null===(r=e["x-attribsNamespace"])||void 0===r?void 0:r[t],prefix:null===(n=e["x-attribsPrefix"])||void 0===n?void 0:n[t]}}))},enumerable:!1,configurable:!0}),t}(p)
function m(e){return(0,a.isTag)(e)}function v(e){return e.type===a.ElementType.CDATA}function y(e){return e.type===a.ElementType.Text}function b(e){return e.type===a.ElementType.Comment}function w(e){return e.type===a.ElementType.Directive}function x(e){return e.type===a.ElementType.Root}function E(e,t){var r
if(void 0===t&&(t=!1),y(e))r=new l(e.data)
else if(b(e))r=new c(e.data)
else if(m(e)){var n=t?D(e.children):[],i=new g(e.name,o({},e.attribs),n)
n.forEach((function(e){return e.parent=i})),null!=e.namespace&&(i.namespace=e.namespace),e["x-attribsNamespace"]&&(i["x-attribsNamespace"]=o({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(i["x-attribsPrefix"]=o({},e["x-attribsPrefix"])),r=i}else if(v(e)){n=t?D(e.children):[]
var a=new d(n)
n.forEach((function(e){return e.parent=a})),r=a}else if(x(e)){n=t?D(e.children):[]
var s=new h(n)
n.forEach((function(e){return e.parent=s})),e["x-mode"]&&(s["x-mode"]=e["x-mode"]),r=s}else{if(!w(e))throw new Error("Not implemented yet: ".concat(e.type))
var u=new f(e.name,e.data)
null!=e["x-name"]&&(u["x-name"]=e["x-name"],u["x-publicId"]=e["x-publicId"],u["x-systemId"]=e["x-systemId"]),r=u}return r.startIndex=e.startIndex,r.endIndex=e.endIndex,null!=e.sourceCodeLocation&&(r.sourceCodeLocation=e.sourceCodeLocation),r}function D(e){for(var t=e.map((function(e){return E(e,!0)})),r=1;r<t.length;r++)t[r].prev=t[r-1],t[r-1].next=t[r]
return t}t.Element=g,t.isTag=m,t.isCDATA=v,t.isText=y,t.isComment=b,t.isDirective=w,t.isDocument=x,t.hasChildren=function(e){return Object.prototype.hasOwnProperty.call(e,"children")},t.cloneNode=E},3625:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getFeed=void 0
var n=r(3633),i=r(7344)
t.getFeed=function(e){var t=u(f,e)
return t?"feed"===t.name?function(e){var t,r=e.children,n={type:"atom",items:(0,i.getElementsByTagName)("entry",r).map((function(e){var t,r=e.children,n={media:s(r)}
c(n,"id","id",r),c(n,"title","title",r)
var i=null===(t=u("link",r))||void 0===t?void 0:t.attribs.href
i&&(n.link=i)
var o=l("summary",r)||l("content",r)
o&&(n.description=o)
var a=l("updated",r)
return a&&(n.pubDate=new Date(a)),n}))}
c(n,"id","id",r),c(n,"title","title",r)
var o=null===(t=u("link",r))||void 0===t?void 0:t.attribs.href
o&&(n.link=o),c(n,"description","subtitle",r)
var a=l("updated",r)
return a&&(n.updated=new Date(a)),c(n,"author","email",r,!0),n}(t):function(e){var t,r,n=null!==(r=null===(t=u("channel",e.children))||void 0===t?void 0:t.children)&&void 0!==r?r:[],o={type:e.name.substr(0,3),id:"",items:(0,i.getElementsByTagName)("item",e.children).map((function(e){var t=e.children,r={media:s(t)}
c(r,"id","guid",t),c(r,"title","title",t),c(r,"link","link",t),c(r,"description","description",t)
var n=l("pubDate",t)
return n&&(r.pubDate=new Date(n)),r}))}
c(o,"title","title",n),c(o,"link","link",n),c(o,"description","description",n)
var a=l("lastBuildDate",n)
return a&&(o.updated=new Date(a)),c(o,"author","managingEditor",n,!0),o}(t):null}
var o=["url","type","lang"],a=["fileSize","bitrate","framerate","samplingrate","channels","duration","height","width"]
function s(e){return(0,i.getElementsByTagName)("media:content",e).map((function(e){for(var t=e.attribs,r={medium:t.medium,isDefault:!!t.isDefault},n=0,i=o;n<i.length;n++)t[l=i[n]]&&(r[l]=t[l])
for(var s=0,u=a;s<u.length;s++){var l
t[l=u[s]]&&(r[l]=parseInt(t[l],10))}return t.expression&&(r.expression=t.expression),r}))}function u(e,t){return(0,i.getElementsByTagName)(e,t,!0,1)[0]}function l(e,t,r){return void 0===r&&(r=!1),(0,n.textContent)((0,i.getElementsByTagName)(e,t,r,1)).trim()}function c(e,t,r,n,i){void 0===i&&(i=!1)
var o=l(r,n,i)
o&&(e[t]=o)}function f(e){return"rss"===e||"feed"===e||"rdf:RDF"===e}},3757:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.uniqueSort=t.compareDocumentPosition=t.DocumentPosition=t.removeSubsets=void 0
var n,i=r(1363)
function o(e,t){var r=[],o=[]
if(e===t)return 0
for(var a=(0,i.hasChildren)(e)?e:e.parent;a;)r.unshift(a),a=a.parent
for(a=(0,i.hasChildren)(t)?t:t.parent;a;)o.unshift(a),a=a.parent
for(var s=Math.min(r.length,o.length),u=0;u<s&&r[u]===o[u];)u++
if(0===u)return n.DISCONNECTED
var l=r[u-1],c=l.children,f=r[u],p=o[u]
return c.indexOf(f)>c.indexOf(p)?l===t?n.FOLLOWING|n.CONTAINED_BY:n.FOLLOWING:l===e?n.PRECEDING|n.CONTAINS:n.PRECEDING}t.removeSubsets=function(e){for(var t=e.length;--t>=0;){var r=e[t]
if(t>0&&e.lastIndexOf(r,t-1)>=0)e.splice(t,1)
else for(var n=r.parent;n;n=n.parent)if(e.includes(n)){e.splice(t,1)
break}}return e},function(e){e[e.DISCONNECTED=1]="DISCONNECTED",e[e.PRECEDING=2]="PRECEDING",e[e.FOLLOWING=4]="FOLLOWING",e[e.CONTAINS=8]="CONTAINS",e[e.CONTAINED_BY=16]="CONTAINED_BY"}(n=t.DocumentPosition||(t.DocumentPosition={})),t.compareDocumentPosition=o,t.uniqueSort=function(e){return(e=e.filter((function(e,t,r){return!r.includes(e,t+1)}))).sort((function(e,t){var r=o(e,t)
return r&n.PRECEDING?-1:r&n.FOLLOWING?1:0})),e}},5511:function(e,t,r){"use strict"
var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var i=Object.getOwnPropertyDescriptor(t,r)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)}
Object.defineProperty(t,"__esModule",{value:!0}),t.hasChildren=t.isDocument=t.isComment=t.isText=t.isCDATA=t.isTag=void 0,i(r(3633),t),i(r(6530),t),i(r(1833),t),i(r(7062),t),i(r(7344),t),i(r(3757),t),i(r(3625),t)
var o=r(1363)
Object.defineProperty(t,"isTag",{enumerable:!0,get:function(){return o.isTag}}),Object.defineProperty(t,"isCDATA",{enumerable:!0,get:function(){return o.isCDATA}}),Object.defineProperty(t,"isText",{enumerable:!0,get:function(){return o.isText}}),Object.defineProperty(t,"isComment",{enumerable:!0,get:function(){return o.isComment}}),Object.defineProperty(t,"isDocument",{enumerable:!0,get:function(){return o.isDocument}}),Object.defineProperty(t,"hasChildren",{enumerable:!0,get:function(){return o.hasChildren}})},7344:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getElementsByTagType=t.getElementsByTagName=t.getElementById=t.getElements=t.testElement=void 0
var n=r(1363),i=r(7062),o={tag_name:function(e){return"function"==typeof e?function(t){return(0,n.isTag)(t)&&e(t.name)}:"*"===e?n.isTag:function(t){return(0,n.isTag)(t)&&t.name===e}},tag_type:function(e){return"function"==typeof e?function(t){return e(t.type)}:function(t){return t.type===e}},tag_contains:function(e){return"function"==typeof e?function(t){return(0,n.isText)(t)&&e(t.data)}:function(t){return(0,n.isText)(t)&&t.data===e}}}
function a(e,t){return"function"==typeof t?function(r){return(0,n.isTag)(r)&&t(r.attribs[e])}:function(r){return(0,n.isTag)(r)&&r.attribs[e]===t}}function s(e,t){return function(r){return e(r)||t(r)}}function u(e){var t=Object.keys(e).map((function(t){var r=e[t]
return Object.prototype.hasOwnProperty.call(o,t)?o[t](r):a(t,r)}))
return 0===t.length?null:t.reduce(s)}t.testElement=function(e,t){var r=u(e)
return!r||r(t)},t.getElements=function(e,t,r,n){void 0===n&&(n=1/0)
var o=u(e)
return o?(0,i.filter)(o,t,r,n):[]},t.getElementById=function(e,t,r){return void 0===r&&(r=!0),Array.isArray(t)||(t=[t]),(0,i.findOne)(a("id",e),t,r)},t.getElementsByTagName=function(e,t,r,n){return void 0===r&&(r=!0),void 0===n&&(n=1/0),(0,i.filter)(o.tag_name(e),t,r,n)},t.getElementsByTagType=function(e,t,r,n){return void 0===r&&(r=!0),void 0===n&&(n=1/0),(0,i.filter)(o.tag_type(e),t,r,n)}},1833:(e,t)=>{"use strict"
function r(e){if(e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e.parent){var t=e.parent.children
t.splice(t.lastIndexOf(e),1)}}Object.defineProperty(t,"__esModule",{value:!0}),t.prepend=t.prependChild=t.append=t.appendChild=t.replaceElement=t.removeElement=void 0,t.removeElement=r,t.replaceElement=function(e,t){var r=t.prev=e.prev
r&&(r.next=t)
var n=t.next=e.next
n&&(n.prev=t)
var i=t.parent=e.parent
if(i){var o=i.children
o[o.lastIndexOf(e)]=t,e.parent=null}},t.appendChild=function(e,t){if(r(t),t.next=null,t.parent=e,e.children.push(t)>1){var n=e.children[e.children.length-2]
n.next=t,t.prev=n}else t.prev=null},t.append=function(e,t){r(t)
var n=e.parent,i=e.next
if(t.next=i,t.prev=e,e.next=t,t.parent=n,i){if(i.prev=t,n){var o=n.children
o.splice(o.lastIndexOf(i),0,t)}}else n&&n.children.push(t)},t.prependChild=function(e,t){if(r(t),t.parent=e,t.prev=null,1!==e.children.unshift(t)){var n=e.children[1]
n.prev=t,t.next=n}else t.next=null},t.prepend=function(e,t){r(t)
var n=e.parent
if(n){var i=n.children
i.splice(i.indexOf(e),0,t)}e.prev&&(e.prev.next=t),t.parent=n,t.prev=e.prev,t.next=e,e.prev=t}},7062:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.findAll=t.existsOne=t.findOne=t.findOneChild=t.find=t.filter=void 0
var n=r(1363)
function i(e,t,r,o){for(var a=[],s=0,u=t;s<u.length;s++){var l=u[s]
if(e(l)&&(a.push(l),--o<=0))break
if(r&&(0,n.hasChildren)(l)&&l.children.length>0){var c=i(e,l.children,r,o)
if(a.push.apply(a,c),(o-=c.length)<=0)break}}return a}t.filter=function(e,t,r,n){return void 0===r&&(r=!0),void 0===n&&(n=1/0),Array.isArray(t)||(t=[t]),i(e,t,r,n)},t.find=i,t.findOneChild=function(e,t){return t.find(e)},t.findOne=function e(t,r,i){void 0===i&&(i=!0)
for(var o=null,a=0;a<r.length&&!o;a++){var s=r[a];(0,n.isTag)(s)&&(t(s)?o=s:i&&s.children.length>0&&(o=e(t,s.children,!0)))}return o},t.existsOne=function e(t,r){return r.some((function(r){return(0,n.isTag)(r)&&(t(r)||r.children.length>0&&e(t,r.children))}))},t.findAll=function(e,t){for(var r,i,o=[],a=t.filter(n.isTag);i=a.shift();){var s=null===(r=i.children)||void 0===r?void 0:r.filter(n.isTag)
s&&s.length>0&&a.unshift.apply(a,s),e(i)&&o.push(i)}return o}},3633:function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.innerText=t.textContent=t.getText=t.getInnerHTML=t.getOuterHTML=void 0
var i=r(1363),o=n(r(1671)),a=r(7304)
function s(e,t){return(0,o.default)(e,t)}t.getOuterHTML=s,t.getInnerHTML=function(e,t){return(0,i.hasChildren)(e)?e.children.map((function(e){return s(e,t)})).join(""):""},t.getText=function e(t){return Array.isArray(t)?t.map(e).join(""):(0,i.isTag)(t)?"br"===t.name?"\n":e(t.children):(0,i.isCDATA)(t)?e(t.children):(0,i.isText)(t)?t.data:""},t.textContent=function e(t){return Array.isArray(t)?t.map(e).join(""):(0,i.hasChildren)(t)&&!(0,i.isComment)(t)?e(t.children):(0,i.isText)(t)?t.data:""},t.innerText=function e(t){return Array.isArray(t)?t.map(e).join(""):(0,i.hasChildren)(t)&&(t.type===a.ElementType.Tag||(0,i.isCDATA)(t))?e(t.children):(0,i.isText)(t)?t.data:""}},6530:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.prevElementSibling=t.nextElementSibling=t.getName=t.hasAttrib=t.getAttributeValue=t.getSiblings=t.getParent=t.getChildren=void 0
var n=r(1363)
function i(e){return(0,n.hasChildren)(e)?e.children:[]}function o(e){return e.parent||null}t.getChildren=i,t.getParent=o,t.getSiblings=function(e){var t=o(e)
if(null!=t)return i(t)
for(var r=[e],n=e.prev,a=e.next;null!=n;)r.unshift(n),n=n.prev
for(;null!=a;)r.push(a),a=a.next
return r},t.getAttributeValue=function(e,t){var r
return null===(r=e.attribs)||void 0===r?void 0:r[t]},t.hasAttrib=function(e,t){return null!=e.attribs&&Object.prototype.hasOwnProperty.call(e.attribs,t)&&null!=e.attribs[t]},t.getName=function(e){return e.name},t.nextElementSibling=function(e){for(var t=e.next;null!==t&&!(0,n.isTag)(t);)t=t.next
return t},t.prevElementSibling=function(e){for(var t=e.prev;null!==t&&!(0,n.isTag)(t);)t=t.prev
return t}},7800:(e,t,r)=>{"use strict"
r.d(t,{CP:()=>a,VS:()=>s,u4:()=>o})
var n=r(348),i=r(4554)
const o="Element not found."
function a(e,t,r){const n=(0,i.KM)(e,t.selector,t)
s(e,t.pageObjectKey,r,{selector:n})}function s(e,t,r){let i,{selector:o}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=[t],s=r instanceof Error?r.message:r.toString()
for(i=e;i;i=n.Z.parent(i))a.unshift(n.Z.meta(i).key)
a[0]="page",a.length>0&&(s+=`\n\nPageObject: '${a.join(".")}'`),"string"==typeof o&&o.trim().length>0&&(s=`${s}\n  Selector: '${o}'`)
const u=new Error(s)
throw r instanceof Error&&"stack"in r&&(u.stack=r.stack),console.error(u.message),u}},304:(e,t,r)=>{"use strict"
r.d(t,{U:()=>a,y:()=>o})
var n=r(348),i=r(4554)
function o(e){return!(0,i.yj)(e)._chainedTree}function a(e){if(o(e))return e
let t,r=[]
for(t=e;t;t=n.Z.parent(t))r.unshift(n.Z.meta(t).key)
return r.shift(),t=(0,i.yj)(e)._chainedTree,r.forEach((e=>{t=function(e,t){let r
if(r=/\[(\d+)\]$/.exec(t)){let[n,i]=r
return e[t.slice(0,-n.length)].objectAt(parseInt(i,10))}return e[t]}(t,e)})),t}},5964:(e,t,r)=>{"use strict"
r.d(t,{X3:()=>u,Yv:()=>l,bl:()=>s,cw:()=>c})
var n=r(4554),i=r(4385),o=r(7800)
function a(e,t){return t.testContainer||(0,n.wK)(e,"testContainer")||(0,i.u)().testContainer}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const i=(0,n.KM)(e,t,r),s=a(e,r),u=(0,n.$)(i,s).toArray()
return(0,n.fP)(u,i),0===u.length&&(0,o.VS)(e,r.pageObjectKey,o.u4,{selector:i}),u[0]}function u(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const i=(0,n.KM)(e,t,r),o=a(e,r)
return(0,n.$)(i,o).toArray()}function l(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const i=(0,n.KM)(e,t,r),s=a(e,r)
let u=(0,n.$)(i,s)
return(0,n.fP)(u,i,r.multiple),0===u.length&&(0,o.VS)(e,r.pageObjectKey,o.u4,{selector:i}),u}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const i=(0,n.KM)(e,t,r),o=a(e,r)
let s=(0,n.$)(i,o)
return(0,n.fP)(s,i,r.multiple),s}r(348),r(8823),r(5550)},4554:(e,t,r)=>{"use strict"
r.d(t,{$:()=>i,KM:()=>l,wK:()=>p,Rs:()=>f,yj:()=>c,fP:()=>u})
var n=r(348)
let i
if(window.jQuery)i=window.jQuery
else{const e=(o=r(7339),o?.__esModule?o:{default:o})
i=e.default}var o
function a(e){return void 0!==e}class s{constructor(e,t,r,n){this.targetNode=e,this.targetScope=t||"",this.targetSelector=r||"",this.targetFilters=n}toString(){let e,t
if(e=this.targetFilters.resetScope?this.targetScope:this.calculateScope(this.targetNode,this.targetScope),`${e} ${this.targetSelector}`.indexOf(",")>-1)throw new Error("Usage of comma separated selectors is not supported. Please make sure your selector targets a single selector.")
t=this.calculateFilters(this.targetFilters)
let r=`${e} ${this.targetSelector}${t}`.trim()
return r.length||(r=":first"),r}calculateFilters(){let e=[]
return this.targetFilters.visible&&e.push(":visible"),this.targetFilters.contains&&e.push(`:contains("${this.targetFilters.contains}")`),"number"==typeof this.targetFilters.at?e.push(`:eq(${this.targetFilters.at})`):this.targetFilters.last&&e.push(":last"),e.join("")}calculateScope(e,t){let r=this.getScopes(e)
return r.reverse(),r.push(t),r.join(" ").trim()}getScopes(e){let t=[]
return e.scope&&t.push(e.scope),!e.resetScope&&n.Z.parent(e)&&(t=t.concat(this.calculateScope(n.Z.parent(e)))),t}}function u(e,t,r){if(e.length>1&&!r)throw new Error(`"${t}" matched more than one element. If you want to select many elements, use collections instead.`)}function l(e,t,r){return new s(e,r.scope,t,r).toString()}function c(e){let t=n.Z.parent(e),r=e
for(;t;)r=t,t=n.Z.parent(t)
return r}function f(e){let t=function(e,t){let r=e,i=[]
for(;a(r);)a(r[t])&&i.push(r[t]),r=n.Z.parent(r)
return i}(e,"scope")
return t.reverse().join(" ")}function p(e,t){if(a(e[t]))return e[t]
let r=n.Z.parent(e)
return a(r)?p(r,t):void 0}},4385:(e,t,r)=>{"use strict"
r.d(t,{u:()=>o})
var n=r(8823)
let i
function o(){return i||new n.Z}r(5550)},8823:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>o})
var n=r(5550)
class i{get testContainer(){throw new Error("`testContainer` is not implemented for the adapter")}visit(){throw new Error("`visit` is not implemented for the adapter")}click(){throw new Error("`click` is not implemented for the adapter")}fillIn(){throw new Error("`fillIn` is not implemented for the adapter")}triggerEvent(){throw new Error("`triggerEvent` is not implemented for the adapter")}focus(){throw new Error("`focus` is not implemented for the adapter")}blur(){throw new Error("`blur` is not implemented for the adapter")}}class o extends i{get testContainer(){return(0,n.getRootElement)()}visit(e){return(0,n.visit)(e)}click(e){return(0,n.click)(e)}fillIn(e,t){return(0,n.fillIn)(e,t)}triggerEvent(e,t,r){if(void 0!==r.key||void 0!==r.keyCode){const i=r.key||r.keyCode
return(0,n.triggerKeyEvent)(e,t,i,r)}return(0,n.triggerEvent)(e,t,r)}focus(e){return(0,n.focus)(e)}blur(e){return(0,n.blur)(e)}}},6490:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{buildSelector:()=>i.KM,findElement:()=>n.cw,findElementWithAssert:()=>n.Yv,findMany:()=>n.X3,findOne:()=>n.bl,fullScope:()=>i.Rs})
var n=r(5964),i=r(4554)
r(4385),r(8823),r(5550),r(7800),r(348)},8621:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{attribute:()=>Ce,blurrable:()=>ce,buildSelector:()=>s.KM,clickOnText:()=>pe,clickable:()=>fe,collection:()=>Se,contains:()=>de,count:()=>Te,create:()=>ke,default:()=>Be,fillable:()=>he,findElement:()=>ue.cw,findElementWithAssert:()=>ue.Yv,focusable:()=>ge,hasClass:()=>Oe,isHidden:()=>me,isPresent:()=>ve,isVisible:()=>ye,notHasClass:()=>Le,property:()=>Fe,selectable:()=>Re,text:()=>we,triggerable:()=>qe,value:()=>Ee,visitable:()=>Pe})
var n=r(348)
function i(e){if(e&&"object"==typeof e){let t=n.Z.meta(e)
return Boolean(t&&t.__poDef__)}return!1}function o(e){if(i(e))return n.Z.meta(e).__poDef__
throw new Error("cannot get the page object definition from a node that is not a page object")}var a=r(7800),s=r(4554),u=r(358)
function l(e){var t=e._promiseCallbacks
return t||(t=e._promiseCallbacks={}),t}var c={mixin:function(e){return e.on=this.on,e.off=this.off,e.trigger=this.trigger,e._promiseCallbacks=void 0,e},on:function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function")
var r=l(this),n=r[e]
n||(n=r[e]=[]),-1===n.indexOf(t)&&n.push(t)},off:function(e,t){var r=l(this)
if(t){var n=r[e],i=n.indexOf(t);-1!==i&&n.splice(i,1)}else r[e]=[]},trigger:function(e,t,r){var n=l(this)[e]
if(n)for(var i=0;i<n.length;i++)(0,n[i])(t,r)}},f={instrument:!1}
c.mixin(f)
var p=[]
function d(e,t,r){1===p.push({name:e,payload:{key:t._guidKey,id:t._id,eventName:e,detail:t._result,childId:r&&r._id,label:t._label,timeStamp:Date.now(),error:f["instrument-with-stack"]?new Error(t._label):null}})&&setTimeout((function(){for(var e=0;e<p.length;e++){var t=p[e],r=t.payload
r.guid=r.key+r.id,r.childGuid=r.key+r.childId,r.error&&(r.stack=r.error.stack),f.trigger(t.name,t.payload)}p.length=0}),50)}function h(e,t){if(e&&"object"==typeof e&&e.constructor===this)return e
var r=new this(g,t)
return _(r,e),r}function g(){}var m=void 0,v=1,y=2,b={error:null}
function w(e){try{return e.then}catch(e){return b.error=e,b}}var x=void 0
function E(){try{var e=x
return x=null,e.apply(this,arguments)}catch(e){return b.error=e,b}}function D(e){return x=e,E}function A(e,t,r){if(t.constructor===e.constructor&&r===L&&e.constructor.resolve===h)!function(e,t){t._state===v?C(e,t._result):t._state===y?(t._onError=null,T(e,t._result)):S(t,void 0,(function(r){t===r?C(e,r):_(e,r)}),(function(t){return T(e,t)}))}(e,t)
else if(r===b){var n=b.error
b.error=null,T(e,n)}else"function"==typeof r?function(e,t,r){f.async((function(e){var n=!1,i=D(r).call(t,(function(r){n||(n=!0,t===r?C(e,r):_(e,r))}),(function(t){n||(n=!0,T(e,t))}),"Settle: "+(e._label||" unknown promise"))
if(!n&&i===b){n=!0
var o=b.error
b.error=null,T(e,o)}}),e)}(e,t,r):C(e,t)}function _(e,t){var r,n
e===t?C(e,t):(n=typeof(r=t),null===r||"object"!==n&&"function"!==n?C(e,t):A(e,t,w(t)))}function k(e){e._onError&&e._onError(e._result),N(e)}function C(e,t){e._state===m&&(e._result=t,e._state=v,0===e._subscribers.length?f.instrument&&d("fulfilled",e):f.async(N,e))}function T(e,t){e._state===m&&(e._state=y,e._result=t,f.async(k,e))}function S(e,t,r,n){var i=e._subscribers,o=i.length
e._onError=null,i[o]=t,i[o+v]=r,i[o+y]=n,0===o&&e._state&&f.async(N,e)}function N(e){var t=e._subscribers,r=e._state
if(f.instrument&&d(r===v?"fulfilled":"rejected",e),0!==t.length){for(var n=void 0,i=void 0,o=e._result,a=0;a<t.length;a+=3)n=t[a],i=t[a+r],n?O(r,n,i,o):i(o)
e._subscribers.length=0}}function O(e,t,r,n){var i,o="function"==typeof r
if(i=o?D(r)(n):n,t._state!==m);else if(i===t)T(t,new TypeError("A promises callback cannot return that same promise."))
else if(i===b){var a=b.error
b.error=null,T(t,a)}else o?_(t,i):e===v?C(t,i):e===y&&T(t,i)}function L(e,t,r){var n=this,i=n._state
if(i===v&&!e||i===y&&!t)return f.instrument&&d("chained",n,n),n
n._onError=null
var o=new n.constructor(g,r),a=n._result
if(f.instrument&&d("chained",n,o),i===m)S(n,o,e,t)
else{var s=i===v?e:t
f.async((function(){return O(i,o,s,a)}))}return o}var F=function(){function e(e,t,r,n){this._instanceConstructor=e,this.promise=new e(g,n),this._abortOnReject=r,this._isUsingOwnPromise=e===B,this._isUsingOwnResolve=e.resolve===h,this._init.apply(this,arguments)}return e.prototype._init=function(e,t){var r=t.length||0
this.length=r,this._remaining=r,this._result=new Array(r),this._enumerate(t)},e.prototype._enumerate=function(e){for(var t=this.length,r=this.promise,n=0;r._state===m&&n<t;n++)this._eachEntry(e[n],n,!0)
this._checkFullfillment()},e.prototype._checkFullfillment=function(){if(0===this._remaining){var e=this._result
C(this.promise,e),this._result=null}},e.prototype._settleMaybeThenable=function(e,t,r){var n=this._instanceConstructor
if(this._isUsingOwnResolve){var i=w(e)
if(i===L&&e._state!==m)e._onError=null,this._settledAt(e._state,t,e._result,r)
else if("function"!=typeof i)this._settledAt(v,t,e,r)
else if(this._isUsingOwnPromise){var o=new n(g)
A(o,e,i),this._willSettleAt(o,t,r)}else this._willSettleAt(new n((function(t){return t(e)})),t,r)}else this._willSettleAt(n.resolve(e),t,r)},e.prototype._eachEntry=function(e,t,r){null!==e&&"object"==typeof e?this._settleMaybeThenable(e,t,r):this._setResultAt(v,t,e,r)},e.prototype._settledAt=function(e,t,r,n){var i=this.promise
i._state===m&&(this._abortOnReject&&e===y?T(i,r):(this._setResultAt(e,t,r,n),this._checkFullfillment()))},e.prototype._setResultAt=function(e,t,r,n){this._remaining--,this._result[t]=r},e.prototype._willSettleAt=function(e,t,r){var n=this
S(e,void 0,(function(e){return n._settledAt(v,t,e,r)}),(function(e){return n._settledAt(y,t,e,r)}))},e}()
function q(e,t,r){this._remaining--,this._result[t]=e===v?{state:"fulfilled",value:r}:{state:"rejected",reason:r}}var P="rsvp_"+Date.now()+"-",R=0,B=function(){function e(t,r){this._id=R++,this._label=r,this._state=void 0,this._result=void 0,this._subscribers=[],f.instrument&&d("created",this),g!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){var r=!1
try{t((function(t){r||(r=!0,_(e,t))}),(function(t){r||(r=!0,T(e,t))}))}catch(t){T(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype._onError=function(e){var t=this
f.after((function(){t._onError&&f.trigger("error",e,t._label)}))},e.prototype.catch=function(e,t){return this.then(void 0,e,t)},e.prototype.finally=function(e,t){var r=this,n=r.constructor
return"function"==typeof e?r.then((function(t){return n.resolve(e()).then((function(){return t}))}),(function(t){return n.resolve(e()).then((function(){throw t}))})):r.then(e,e)},e}()
B.cast=h,B.all=function(e,t){return Array.isArray(e)?new F(this,e,!0,t).promise:this.reject(new TypeError("Promise.all must be called with an array"),t)},B.race=function(e,t){var r=new this(g,t)
if(!Array.isArray(e))return T(r,new TypeError("Promise.race must be called with an array")),r
for(var n=0;r._state===m&&n<e.length;n++)S(this.resolve(e[n]),void 0,(function(e){return _(r,e)}),(function(e){return T(r,e)}))
return r},B.resolve=h,B.reject=function(e,t){var r=new this(g,t)
return T(r,e),r},B.prototype._guidKey=P,B.prototype.then=L,function(e){function t(t,r,n){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,!1,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(F).prototype._setResultAt=q,function(e){function t(t,r,n){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,!1,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(function(e){function t(t,r){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3]
return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,n,i))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t){this._result={},this._enumerate(t)},t.prototype._enumerate=function(e){var t=Object.keys(e),r=t.length,n=this.promise
this._remaining=r
for(var i=void 0,o=void 0,a=0;n._state===m&&a<r;a++)o=e[i=t[a]],this._eachEntry(o,i,!0)
this._checkFullfillment()},t}(F)).prototype._setResultAt=q
var j=function(e){function t(t,r,n,i){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,!0,i,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t,r,n,i){var o=t.length||0
this.length=o,this._remaining=o,this._result=new Array(o),this._mapFn=i,this._enumerate(t)},t.prototype._setResultAt=function(e,t,r,n){if(n){var i=D(this._mapFn)(r,t)
i===b?this._settledAt(y,t,i.error,!1):this._eachEntry(i,t,!1)}else this._remaining--,this._result[t]=r},t}(F),I={}
!function(e){function t(){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,e),t.prototype._checkFullfillment=function(){if(0===this._remaining&&null!==this._result){var e=this._result.filter((function(e){return e!==I}))
C(this.promise,e),this._result=null}},t.prototype._setResultAt=function(e,t,r,n){if(n){this._result[t]=r
var i=D(this._mapFn)(r,t)
i===b?this._settledAt(y,t,i.error,!1):this._eachEntry(i,t,!1)}else this._remaining--,r||(this._result[t]=I)}}(j)
var M=0,U=void 0,H="undefined"!=typeof window?window:void 0,$=H||{},z=$.MutationObserver||$.WebKitMutationObserver,V="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),G="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function W(){return function(){return setTimeout(K,1)}}var Q=new Array(1e3)
function K(){for(var e=0;e<M;e+=2)(0,Q[e])(Q[e+1]),Q[e]=void 0,Q[e+1]=void 0
M=0}var Z,X,Y,J,ee,te,re=void 0
function ne(){f.on.apply(f,arguments)}if(V?(ee=process.nextTick,te=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/),Array.isArray(te)&&"0"===te[1]&&"10"===te[2]&&(ee=setImmediate),re=function(){return ee(K)}):z?(X=0,Y=new z(K),J=document.createTextNode(""),Y.observe(J,{characterData:!0}),re=function(){return J.data=X=++X%2}):G?((Z=new MessageChannel).port1.onmessage=K,re=function(){return Z.port2.postMessage(0)}):re=void 0===H?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(U=e.runOnLoop||e.runOnContext)?function(){U(K)}:W()}catch(e){return W()}}():W(),f.async=function(e,t){Q[M]=e,Q[M+1]=t,2===(M+=2)&&re()},f.after=function(e){return setTimeout(e,0)},"undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var ie=window.__PROMISE_INSTRUMENTATION__
for(var oe in function(e,t){if(2!==arguments.length)return f[e]
f[e]=t}("instrument",!0),ie)ie.hasOwnProperty(oe)&&ne(oe,ie[oe])}var ae=r(304)
function se(e,t){return(0,u.Y)((function(r){return function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o]
return({options:e,cb:t}=function(e,t,r,n){const i=`${e}(${n.length?`"${n.map((e=>String(e))).join('", "')}"`:""})`
return"function"==typeof t?(r=t,t={pageObjectKey:i}):t={...t,pageObjectKey:i},{options:t,cb:r}}(r,e,t,i)),function(e,t){const r=(0,s.yj)(e)
return(0,ae.y)(e)?(r._promise=function(e,t){return B.resolve(e,void 0)}(r._promise).then((()=>t())),e):(r._chainedTree._promise=t(),(0,ae.U)(e))}(this,(()=>{try{const r=t.bind(this)(...i)
return Promise.resolve(r).catch((t=>{(0,a.CP)(this,e,t)}))}catch(t){(0,a.CP)(this,e,t)}}))}}))}var ue=r(5964),le=r(4385)
function ce(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return se({...t,selector:e},(function(){const r=(0,ue.bl)(this,e,t)
return(0,le.u)().blur(r)}))}function fe(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return se({...t,selector:e},(function(){const r=(0,ue.bl)(this,e,t)
return(0,le.u)().click(r)}))}function pe(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return se({...t,selector:e},(function(r){const n={...t,contains:r,last:!0},i=`${e||""} *`,o=(0,ue.X3)(this,i,n).length?i:e,a=(0,ue.bl)(this,o,n)
return(0,le.u)().click(a)}))}function de(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,u.Y)((function(r){return function(n){let i={pageObjectKey:`${r}("${n}")`,...t}
return(0,s.$)((0,ue.bl)(this,e,i)).text().indexOf(n)>-1}}))}function he(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return se({...t,selector:e},(function(r,n){let i
void 0===n?n=r:i=r
let o=e
if(i&&(o=function(e,t,r,n){return["input","textarea","select","[contenteditable]"].map((e=>[`${e}[data-test="${n}"]`,`${e}[aria-label="${n}"]`,`${e}[placeholder="${n}"]`,`${e}[name="${n}"]`,`${e}#${n}`])).reduce(((e,t)=>e.concat(t)),[]).find((n=>(0,ue.X3)(e,`${t} ${n}`,r)[0]))}(this,e,t,i),!o))throw new Error(`Can not find element by clue: "${i}".`)
const a=(0,ue.bl)(this,o,t)
return(0,le.u)().fillIn(a,n)}))}function ge(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},selector:e}
return se(t,(function(){const r=(0,ue.bl)(this,e,t)
return(0,le.u)().focus(r)}))}function me(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,u.Y)((function(r){let n={pageObjectKey:r,...t},i=(0,ue.X3)(this,e,n)
return(0,s.fP)(i,e),0===i.length||(0,s.$)(i[0]).is(":hidden")}))}function ve(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,u.Y)((function(r){let n={pageObjectKey:r,...t},i=(0,ue.X3)(this,e,n)
return(0,s.fP)(i,e),1===i.length}))}function ye(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,u.Y)((function(r){let n={pageObjectKey:r,...t},i=(0,ue.X3)(this,e,n)
return(0,s.fP)(i,e,n.multiple),1===i.length&&(0,s.$)(i[0]).is(":visible")}))}function be(e){return e}function we(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,u.Y)((function(r){let n={pageObjectKey:r,...t}
return(!1===n.normalize?be:xe)((0,s.$)((0,ue.bl)(this,e,n)).text())}))}function xe(e){return e.trim().replace(/\n/g," ").replace(/\s\s*/g," ")}function Ee(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,u.Y)((function(r){let n={pageObjectKey:r,...t}
const i=(0,ue.bl)(this,e,n)
return i.hasAttribute("contenteditable")?(0,s.$)(i).html():(0,s.$)(i).val()}))}const De={isDescriptor:!0,value(){const e=(0,s.yj)(this)
return(e._chainedTree||e)._promise.then(...arguments)}},Ae={as:function(e){return e(this),this},blur:ce(),click:fe(),clickOn:pe(),contains:de(),fillIn:he(),focus:ge(),isHidden:me(),isPresent:ve(),isVisible:ye(),select:he(),text:we(),then:De,value:Ee()}
function _e(e,t,r,a){let s
i(r)?s=o(r):(Object.getOwnPropertyNames(r).forEach((e=>{const{get:t,value:n}=Object.getOwnPropertyDescriptor(r,e)
if("function"==typeof t)Object.defineProperty(r,e,{value:(0,u.Y)(t)})
else if("string"==typeof n&&!["scope","testContainer"].includes(e))throw new Error(`string values are not supported in page object definitions\n\nKey: "${e}"`)})),s=r)
let l={...s}
l._chainedTree&&delete l._chainedTree,r={...Ae,...s}
const[c,f]=a(e,t,r,a)
return function(e,t){n.Z.meta(e).__poDef__=t}(c,l),[c,f]}function ke(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if("string"==typeof e)throw new Error("Definition can not be a string")
var r,a
if(e=i(e)?{...o(e)}:(r={},a=e,Object.getOwnPropertyNames(a).forEach((e=>{const t=Object.getOwnPropertyDescriptor(a,e)
Object.defineProperty(r,e,t)})),r),e.context)throw new Error('"context" key is not allowed to be passed at definition root.')
let s={object:_e},l=n.Z.create(e,{builder:s,...t})
e._chainedTree=(0,u.Y)((function(){return l}))
let c={object:_e}
return n.Z.create(e,{builder:c,...t})}function Ce(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return(0,u.Y)((function(n){let i={pageObjectKey:n,...r}
return(0,s.$)((0,ue.bl)(this,t,i)).attr(e)}))}function Te(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,u.Y)((function(r){let n={pageObjectKey:r,...t}
return(0,ue.X3)(this,e,n).length}))}function Se(e,t){if("string"!=typeof e)throw new Error("collection requires `scope` as the first argument")
i(t)&&(t=o(t))
let r={isDescriptor:!0,setup(n,i){var o
r.value=(o=new Ne(e,t,n,i),window.Proxy?new window.Proxy(o,{get:function(e,t){if("number"==typeof t||"string"==typeof t){let r=parseInt(t,10)
if(!isNaN(r))return e.objectAt(r)}return e[t]}}):o)}}
return r}r(8823),r(5550)
class Ne{constructor(e,t,r,n){this.scope=e,this.definition=t||{},this.parent=r,this.key=n,this._itemCounter=ke({count:Te(e,{resetScope:this.definition.resetScope,testContainer:this.definition.testContainer})},{parent:r}),this._items=[]}get length(){return this._itemCounter.count}objectAt(e){let{key:t}=this
if(void 0===this._items[e]){let{scope:r,definition:i,parent:o}=this,a=(0,s.KM)({},r,{at:e}),u={...i}
u.scope=a
let l=ke(u,{parent:o})
n.Z.meta(l).key=`${t}[${e}]`,this._items[e]=l}return this._items[e]}filter(){return this.toArray().filter(...arguments)}filterBy(e,t){return this.toArray().filter((r=>void 0!==t?r[e]===t:Boolean(r[e])))}forEach(){return this.toArray().forEach(...arguments)}map(){return this.toArray().map(...arguments)}mapBy(e){return this.toArray().map((t=>t[e]))}findOneBy(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
const n=this.filterBy(...t)
return this._assertFoundElements(n,...t),n[0]}findOne(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
const n=this.filter(...t)
return this._assertFoundElements(n,...t),n[0]}_assertFoundElements(e){const t=1==(arguments.length<=1?0:arguments.length-1)?"condition":`${arguments.length<=1?void 0:arguments[1]}: "${arguments.length<=2?void 0:arguments[2]}"`
e.length>1&&(0,a.VS)(this.parent,this.key,`${e.length} elements found by ${t}, but expected 1`),0===e.length&&(0,a.VS)(this.parent,this.key,`cannot find element by ${t}`)}toArray(){let{length:e}=this,t=[]
for(let r=0;r<e;r++)t.push(this.objectAt(r))
return t}}function Oe(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return(0,u.Y)((function(n){let i={pageObjectKey:n,...r}
return(0,ue.bl)(this,t,i).classList.contains(e)}))}function Le(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return(0,u.Y)((function(n){let i={pageObjectKey:n,...r}
return!(0,ue.bl)(this,t,i).classList.contains(e)}))}function Fe(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return(0,u.Y)((function(n){let i={pageObjectKey:n,...r}
return(0,s.$)((0,ue.bl)(this,t,i)).prop(e)}))}function qe(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const{eventProperties:n}=r
return se({...r,selector:t},(function(){const i={...n,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}},o=(0,ue.bl)(this,t,r)
return(0,le.u)().triggerEvent(o,e,i)}))}function Pe(e){return se((function(){let t={...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}},r=function(e,t){return e.split("/").map((function(e){let r=e.match(/^:(.+)$/)
if(r){let[,e]=r,n=t[e]
if(void 0===n)throw new Error(`Missing parameter for '${e}'`)
return delete t[e],encodeURIComponent(n)}return e})).join("/")}(e,t)
return r=function(e,t){return Object.keys(t).length&&(e+=`?${s.$.param(t)}`),e}(r,t),(0,le.u)().visit(r).catch((()=>{throw new Error(`Failed to visit URL '${r}'`)}))}))}"undefined"!=typeof Symbol&&Symbol.iterator&&(Ne.prototype[Symbol.iterator]=function(){let e=0,t=this.toArray()
return{next:()=>({done:e>=t.length,value:t[e++]})}})
const Re=he
var Be={attribute:Ce,blurrable:ce,clickOnText:pe,clickable:fe,collection:Se,contains:de,count:Te,create:ke,fillable:he,focusable:ge,hasClass:Oe,isHidden:me,isPresent:ve,isVisible:ye,notHasClass:Le,property:Fe,selectable:he,text:we,value:Ee,visitable:Pe,triggerable:qe}},358:(e,t,r)=>{"use strict"
r.d(t,{Y:()=>o})
var n=r(7800)
r(348),r(4554)
const i="Argument passed to `getter` must be a function."
function o(e){return{isDescriptor:!0,get(t){return"function"!=typeof e&&(0,n.VS)(this,t,i),e.call(this,t)}}}},9075:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{alias:()=>s,getter:()=>n.Y})
var n=r(358),i=r(7800),o=r(304)
r(348),r(4554)
const a="PageObject does not contain aliased property"
function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,n.Y)((function(r){try{const r=function(e,t){const r=t.split(".")
let n,i=e
for(;r.length>0;){const e=r.shift()
if(null===i||"object"!=typeof i||!Object.prototype.hasOwnProperty.call(i,e))throw new Error(`${a} \`${t}\`.`)
r.length?i=i[e]:n=i[e]}return"function"==typeof n?n.bind(i):n}(this,e)
return"function"==typeof r&&t.chainable?function(){return r(...arguments),(0,o.U)(this)}:r}catch(e){(0,i.VS)(this,r,e)}}))}},9402:(e,t,r)=>{"use strict"
function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function o(e,t,r,n,i){var o={}
return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}r.d(t,{_:()=>n,a:()=>o,b:()=>i})},6154:(e,t,r)=>{"use strict"
r.d(t,{Bq:()=>i,sd:()=>o,zA:()=>n})
const n={A:"a",B:"b",C:"c",D:"d",E:"e",F:"f",G:"g",H:"h",I:"i",J:"j",K:"k",L:"l",M:"m",N:"n",O:"o",P:"p",Q:"q",R:"r",S:"s",T:"t",U:"u",V:"v",W:"w",X:"x",Y:"y",Z:"z","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","<":",",">":".","?":"/",":":";",'"':"'","~":"`","{":"[","}":"]","|":"\\"},i={"å":"a",b:"b","ç":"c","∂":"d","ƒ":"f","©":"g","˙":"h","∆":"j","˚":"k","¬":"l","µ":"m","ø":"o","π":"p","œ":"q","®":"r","ß":"s","†":"t","√":"v","∑":"w","≈":"x","¥":"y","Ω":"z","¡":"1","™":"2","£":"3","¢":"4","∞":"5","§":"6","¶":"7","•":"8","ª":"9","º":"0","–":"-","≠":"=","≤":",","≥":".","÷":"/","…":";","æ":"'","“":"[","‘":"]","«":"\\"},o={"Å":"a","ı":"b","Î":"d","Ï":"f","˝":"g","Ó":"h","ˆ":"i","Ô":"j","":"k","Ò":"l","Â":"m","˜":"n","Ø":"o","Œ":"q","‰":"r","Í":"s","ˇ":"t","¨":"u","◊":"v","„":"w","˛":"x","Á":"y","¸":"z","⁄":"1","€":"2","‹":"3","›":"4","ﬁ":"5","ﬂ":"6","‡":"7","°":"8","·":"9","‚":"0","—":"-","±":"=","¯":",","˘":".","¿":"/","Ú":";","Æ":"'","`":"`","”":"[","’":"]","»":"\\"}},8167:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>n})
var n=["alt","ctrl","meta","shift","cmd"]},1966:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>s})
var n=r(8797),i=r(3353),o=r(2737),a=r(9825),s=(r(5811),r(4596),r(6154),r(893),r(1866),(0,n.helper)((function(e){let[t,r]=e
return function(e){(0,i.assert)("ember-keyboard: You must pass a function as the second argument to the `if-key` helper","function"==typeof r),(0,i.assert)("ember-keyboard: The `if-key` helper expects to be invoked with a KeyboardEvent",e instanceof KeyboardEvent),(0,o.Z)((0,a.Z)(e.type,t),e)&&r(e)}})))},1686:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>f})
var n,i,o=r(9402),a=r(8797),s=r.n(a),u=r(3353),l=r(8574),c=r(9825)
let f=(n=class extends(s()){constructor(){super(...arguments),(0,o.b)(this,"keyboard",i,this),(0,o._)(this,"keyCombo",void 0),(0,o._)(this,"callback",void 0),(0,o._)(this,"keyboardActivated",!0),(0,o._)(this,"keyboardPriority",0),(0,o._)(this,"eventName","keydown"),(0,o._)(this,"keyboardHandlers",void 0)}compute(e,t){let[r,n]=e,{event:i="keydown",activated:o=!0,priority:a=0}=t;(0,u.assert)("ember-keyboard: You must pass a function as the second argument to the `on-key` helper","function"==typeof n),this.keyCombo=r,this.callback=n,this.eventName=i,this.keyboardActivated=o,this.keyboardPriority=a,this.keyboardHandlers={},this.keyboardHandlers[(0,c.Z)(i,r)]=n,this.keyboard.register(this)}willDestroy(){this.keyboard.unregister(this),super.willDestroy(...arguments)}},i=(0,o.a)(n.prototype,"keyboard",[l.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n)},9465:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{click:()=>v,getCode:()=>T,getKeyCode:()=>S,getMouseCode:()=>i,keyDown:()=>d.QG,keyPress:()=>d.W0,keyResponder:()=>u,keyUp:()=>d.yR,mouseDown:()=>y,mouseUp:()=>b,onKey:()=>f,touchEnd:()=>x,touchStart:()=>E,triggerKeyDown:()=>_,triggerKeyPress:()=>k,triggerKeyUp:()=>C})
var n=r(1866)
function i(e){if(!(0,n.isNone)(e))switch(e){case"left":return 0
case"middle":return 1
case"right":return 2}}var o=r(9402),a=r(8574),s=r(9341)
function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t=function(t){var r,n,i
return void 0===e.priority&&(e.priority=0),void 0===e.activated&&(e.activated=!0),i=class extends t{get keyboardPriority(){return void 0===super.keyboardPriority?e.priority:super.keyboardPriority}set keyboardPriority(e){super.keyboardPriority=e}get keyboardActivated(){return void 0===super.keyboardActivated?e.activated:super.keyboardActivated}set keyboardActivated(e){super.keyboardActivated=e}constructor(){super(...arguments),(0,o.b)(this,"keyboard",n,this),function(e){if(e.keyboardHandlers=e.keyboardHandlers||{},!e.keyboardHandlerNames){e.keyboardHandlerNames={}
for(let t in e){let r=e[t]
if("function"==typeof r&&r._emberKeyboardOnKeyDecoratorData)for(let n of r._emberKeyboardOnKeyDecoratorData.listenerNames||[])e.keyboardHandlerNames[n]=t}}for(let[t,r]of Object.entries(e.keyboardHandlerNames||{}))e.keyboardHandlers[t]=e[r].bind(e)}(this),this.keyboard.register(this),(0,s.registerDestructor)(this,(()=>{this.keyboard.unregister(this)}))}},(0,o._)(i,"name",`${t.name}WithKeyResponder`),r=i,n=(0,o.a)(r.prototype,"keyboard",[a.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r}
return"function"==typeof e?t(e):function(e){return t(e)}}var l=r(9825)
const c="keydown"
function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return"function"==typeof arguments[1]?p(e,{event:c},arguments[1]):(t.event||(t.event=c),"function"==typeof arguments[2]?p(e,t,arguments[2]):function(e,t){return function(r,n,i){if(!Object.prototype.hasOwnProperty.call(r,"keyboardHandlerNames")){let e=r.parentKeyboardHandlerNames
r.keyboardHandlerNames=e?Object.assign({},e):{}}return r.keyboardHandlerNames[(0,l.Z)(t.event,e)]=n,i}}(e,t))}function p(e,t,r){return r._emberKeyboardOnKeyDecoratorData||(r._emberKeyboardOnKeyDecoratorData={listenerNames:[]}),r._emberKeyboardOnKeyDecoratorData.listenerNames.push((0,l.Z)(t.event,e)),r}var d=r(3032),h=r(8167)
const g=["left","middle","right"].concat(h.Z),m=function(e,t){const r=void 0!==t?t.split("+"):[]
return function(e){e.forEach((e=>{-1===g.indexOf(e)&&console.error(`\`${e}\` is not a valid key name`)}))}(r),(0,l.Z)(e,r)}
function v(e){return m("click",e)}function y(e){return m("mousedown",e)}function b(e){return m("mouseup",e)}const w=function(e,t){return function(e){(void 0!==e?e.split("+"):[]).forEach((e=>{-1===h.Z.indexOf(e)&&console.error(`\`${e}\` is not a valid key name`)}))}(t),(0,l.Z)(e,t)}
function x(e){return w("touchEnd",e)}function E(e){return w("touchstart",e)}var D=r(5811)
r(4596),r(3353)
const A=function(e,t,r){const n=D.Z.parse(`${e}:${t}`).createMatchingKeyboardEvent()
r.dispatchEvent(n)},_=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document
A("keydown",e,t)},k=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document
A("keypress",e,t)},C=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document
A("keyup",e,t)}
function T(){throw new Error("ember-keyboard: `getCode` has been removed. There is no longer a need for this function as you can directly specify `key` and/or `code` values")}function S(){throw new Error("ember-keyboard: `getKeyCode` has been removed. There is no longer a need for this function as you can directly specify `key` and/or `code` values")}},3032:(e,t,r)=>{"use strict"
r.d(t,{QG:()=>i,W0:()=>o,yR:()=>a})
var n=r(9825)
function i(e){return(0,n.Z)("keydown",e)}function o(e){return(0,n.Z)("keypress",e)}function a(e){return(0,n.Z)("keyup",e)}},1054:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>y})
var n=r(9402),i=r(1292),o=r(4927),a=r(9341)
function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class u{constructor(e){this.owner=e,s(this,"capabilities",(0,o.capabilities)("3.22"))}createModifier(e,t){return{instance:new e(this.owner,t),element:null}}installModifier(e,t,r){const n=function(e,t){const r=e
return r.element=t,r}(e,t)
n.instance.modify(t,r.positional,r.named)}updateModifier(e,t){e.instance.modify(e.element,t.positional,t.named)}destroyModifier(e){let{instance:t}=e;(0,a.destroy)(t)}}class l{constructor(e,t){(0,i.setOwner)(this,e)}modify(e,t,r){}}(0,o.setModifierManager)((e=>new u(e)),l),new class{constructor(){s(this,"capabilities",(0,o.capabilities)("3.22"))}createModifier(e){return{element:null,instance:e}}installModifier(e,t,r){const n=function(e,t){const r=e
return r.element=t,r}(e,t),{positional:i,named:o}=r,a=e.instance(t,i,o)
"function"==typeof a&&(n.teardown=a)}updateModifier(e,t){"function"==typeof e.teardown&&e.teardown()
const r=e.instance(e.element,t.positional,t.named)
"function"==typeof r&&(e.teardown=r)}destroyModifier(e){"function"==typeof e.teardown&&e.teardown()}}
var c=r(8574),f=r(7219),p=r(9825),d=r(2737)
r(5811),r(4596),r(3353),r(6154),r(893),r(1866)
const h=["input","select","textarea"]
let g
var m,v
m=class extends l{constructor(e,t){super(e,t),(0,n.b)(this,"keyboard",v,this),(0,n._)(this,"element",void 0),(0,n._)(this,"keyboardPriority",0),(0,n._)(this,"activatedParamValue",!0),(0,n._)(this,"eventName","keydown"),(0,n._)(this,"onlyWhenFocused",!0),(0,n._)(this,"listenerName",void 0),(0,n._)(this,"removeEventListeners",(()=>{this.onlyWhenFocused&&(this.element.removeEventListener("click",this.onFocus,!0),this.element.removeEventListener("focus",this.onFocus,!0),this.element.removeEventListener("focusout",this.onFocusOut,!0))})),this.keyboard.register(this),(0,a.registerDestructor)(this,(()=>{this.removeEventListeners(),this.keyboard.unregister(this)}))}modify(e,t,r){this.element=e,this.removeEventListeners(),this.setupProperties(t,r),this.onlyWhenFocused&&this.addEventListeners()}setupProperties(e,t){let[r,n]=e,{activated:i,event:o,priority:a,onlyWhenFocused:s}=t
this.keyCombo=r,this.callback=n,this.eventName=o||"keydown",this.activatedParamValue="activated"in t?!!i:void 0,this.keyboardPriority=a?parseInt(a,10):0,this.listenerName=(0,p.Z)(this.eventName,this.keyCombo),this.onlyWhenFocused=void 0!==s?s:h.includes(this.element.tagName.toLowerCase())}addEventListeners(){this.element.addEventListener("click",this.onFocus,!0),this.element.addEventListener("focus",this.onFocus,!0),this.element.addEventListener("focusout",this.onFocusOut,!0)}onFocus(){this.isFocused=!0}onFocusOut(){this.isFocused=!1}get keyboardActivated(){return!1!==this.activatedParamValue&&(!this.onlyWhenFocused||this.isFocused)}get keyboardFirstResponder(){return!!this.onlyWhenFocused&&this.isFocused}canHandleKeyboardEvent(e){return(0,d.Z)(this.listenerName,e)}handleKeyboardEvent(e,t){(0,d.Z)(this.listenerName,e)&&(this.callback?this.callback(e,t):this.element.click())}},v=(0,n.a)(m.prototype,"keyboard",[c.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,n.a)(m.prototype,"onFocus",[f.action],Object.getOwnPropertyDescriptor(m.prototype,"onFocus"),m.prototype),(0,n.a)(m.prototype,"onFocusOut",[f.action],Object.getOwnPropertyDescriptor(m.prototype,"onFocusOut"),m.prototype),g=m
var y=g},4161:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>d})
var n,i=r(9402),o=r(8574),a=r.n(o),s=r(1292),u=r(7219),l=r(8773),c=r(3032),f=r(2737)
function p(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(e.handleKeyboardEvent){if(e.canHandleKeyboardEvent&&!e.canHandleKeyboardEvent(t))return
e.handleKeyboardEvent(t,r)}else{if(!e.keyboardHandlers)throw new Error("A responder registered with the ember-keyboard service must implement either `keyboardHandlers` (property returning a dictionary of listenerNames to handler functions), or `handleKeyboardEvent(event)`)")
Object.keys(e.keyboardHandlers).forEach((n=>{(0,f.Z)(n,t)&&(r?e.keyboardHandlers[n](t,r):e.keyboardHandlers[n](t))}))}}r(5811),r(4596),r(3353),r(6154),r(893),r(1866)
let d=(n=class extends(a()){get activeResponders(){let{registeredResponders:e}=this
return Array.from(e).filter((e=>e.keyboardActivated))}get sortedResponders(){return this.activeResponders.sort(((e,t)=>function(e,t,r){return function(e,t,r,n){return function(e,t){let r=e-t
return(r>0)-(r<0)}(n?n((0,u.get)(e,r)):(0,u.get)(e,r),n?n((0,u.get)(t,r)):(0,u.get)(t,r))}(t,e,r,arguments.length>3&&void 0!==arguments[3]?arguments[3]:null)}(e,t,"keyboardPriority")))}get firstResponders(){return this.sortedResponders.filter((e=>e.keyboardFirstResponder))}get normalResponders(){return this.sortedResponders.filter((e=>!e.keyboardFirstResponder))}constructor(){if(super(...arguments),(0,i._)(this,"registeredResponders",new Set),"undefined"!=typeof FastBoot)return
let e=((0,s.getOwner)(this).resolveRegistration("config:environment")||{}).emberKeyboard||{}
e.disableOnInputFields&&(this._disableOnInput=!0),this._listeners=e.listeners||["keyUp","keyDown","keyPress"],this._listeners=this._listeners.map((e=>e.toLowerCase())),this._listeners.forEach((e=>{document.addEventListener(e,this._respond)}))}willDestroy(){super.willDestroy(...arguments),"undefined"==typeof FastBoot&&this._listeners.forEach((e=>{document.removeEventListener(e,this._respond)}))}_respond(e){if(this._disableOnInput&&e.target){const t=e.composedPath()[0]??e.target,r=t.tagName
if(t.getAttribute&&null!=t.getAttribute("contenteditable")||"TEXTAREA"===r||"INPUT"===r)return}(0,l.run)((()=>{let{firstResponders:t,normalResponders:r}=this
!function(e,t){let{firstResponders:r,normalResponders:n}=t,i=!1,o=!1
const a={stopImmediatePropagation(){i=!0},stopPropagation(){o=!0}}
for(const u of r)if(p(u,e,a),i)break
if(o)return
i=!1
let s=Number.POSITIVE_INFINITY
for(const u of n){const t=Number(u.keyboardPriority)
if(!i||t!==s){if(t<s){if(o)return
i=!1,s=t}p(u,e,a)}}}(e,{firstResponders:t,normalResponders:r})}))}register(e){this.registeredResponders.add(e)}unregister(e){this.registeredResponders.delete(e)}keyDown(){return(0,c.QG)(...arguments)}keyPress(){return(0,c.W0)(...arguments)}keyUp(){return(0,c.yR)(...arguments)}},(0,i.a)(n.prototype,"_respond",[u.action],Object.getOwnPropertyDescriptor(n.prototype,"_respond"),n.prototype),n)},893:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>i})
var n=r(1866)
function i(e){if(!(0,n.isNone)(e))switch(e){case 0:return"left"
case 1:return"middle"
case 2:return"right"}}},2737:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>l})
var n=r(5811),i=r(4596),o=r(6154),a=r(8167),s=r(893)
r(3353),r(1866)
const u="_all"
function l(e,t){let r,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,i.Z)()
if(e instanceof n.Z)r=e
else{if("string"!=typeof e)throw new Error("Expected a `string` or `KeyCombo` as `keyComboOrKeyComboString` argument to `isKey`")
r=n.Z.parse(e,a)}return r.type===t.type&&(!!function(e){return e.keyOrCode===u&&!1===e.altKey&&!1===e.ctrlKey&&!1===e.metaKey&&!1===e.shiftKey}(r)||!(!function(e,t){return e.type===t.type&&e.altKey===t.altKey&&e.ctrlKey===t.ctrlKey&&e.metaKey===t.metaKey&&e.shiftKey===t.shiftKey}(r,t)||!function(e,t){return t instanceof KeyboardEvent&&(e.keyOrCode===u||e.keyOrCode===t.code||e.keyOrCode===t.key)}(r,t)&&!function(e,t){return t instanceof MouseEvent&&(e.keyOrCode===u||e.keyOrCode===(0,s.Z)(t.button))}(r,t))||function(e,t,r){return f([],e)&&f(["shift"],t)?t.key===e.keyOrCode:f(["shift"],e)&&f(["shift"],t)?(n=t.key,(o.zA[n]||n)===e.keyOrCode):"Macintosh"===r&&f(["alt"],e)&&f(["alt"],t)?function(e){return o.Bq[e]||e}(t.key)===e.keyOrCode:!("Macintosh"!==r||!f(["shift","alt"],e)||!f(["shift","alt"],t))&&function(e){return o.sd[e]||e}(t.key)===e.keyOrCode
var n}(r,t,a))}const c=a.Z.filter((e=>"cmd"!=e))
function f(e,t){for(let r of c){if(e.includes(r)&&!t[`${r}Key`])return!1
if(!e.includes(r)&&t[`${r}Key`])return!1}return!0}},5811:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>c})
var n=r(9402),i=r(4596)
r(3353)
const o=/^alt$/i,a=/^shift$/i,s=/^ctrl$/i,u=/^meta$/i,l=/^cmd$/i
class c{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,i.Z)();(0,n._)(this,"type",void 0),(0,n._)(this,"altKey",!1),(0,n._)(this,"ctrlKey",!1),(0,n._)(this,"shiftKey",!1),(0,n._)(this,"metaKey",!1),(0,n._)(this,"keyOrCode",void 0),(0,n._)(this,"platform",void 0),this.platform=e}static parse(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,i.Z)(),r=new c(t),[n,f]=e.split(":")
return r.type=n,"+"===f?(r.keyOrCode=f,r):(f.split("+").forEach((e=>{o.test(e)?r.altKey=!0:s.test(e)?r.ctrlKey=!0:u.test(e)?r.metaKey=!0:a.test(e)?r.shiftKey=!0:l.test(e)?t.indexOf("Mac")>-1?r.metaKey=!0:r.ctrlKey=!0:r.keyOrCode=e})),r)}createMatchingKeyboardEvent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return new KeyboardEvent(this.type,Object.assign({key:this.keyOrCode,code:this.keyOrCode,altKey:this.altKey,ctrlKey:this.ctrlKey,metaKey:this.metaKey,shiftKey:this.shiftKey},e))}}},9825:(e,t,r)=>{"use strict"
function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=t
"string"==typeof t&&(r=t.split("+")),r.indexOf("cmd")>-1&&(r[r.indexOf("cmd")]=function(e){if("undefined"==typeof FastBoot)return void 0===e&&(e=navigator.platform),e.indexOf("Mac")>-1?"meta":"ctrl"}())
let n=function(e){return e.sort().join("+")}(r||[])
return""===n&&(n="_all"),`${e}:${n}`}r.d(t,{Z:()=>n})},4596:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>o})
var n=r(3353)
let i
function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent
if((0,n.runInDebug)((()=>{i=null})),!i){let t="Unknown OS";-1!=e.indexOf("Win")&&(t="Windows"),-1!=e.indexOf("Mac")&&(t="Macintosh"),-1!=e.indexOf("Linux")&&(t="Linux"),-1!=e.indexOf("Android")&&(t="Android"),-1!=e.indexOf("like Mac")&&(t="iOS"),i=t}return i}},6347:function(e,t,r){"use strict"
var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var i=Object.getOwnPropertyDescriptor(t,r)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.decodeXML=t.decodeHTMLStrict=t.decodeHTMLAttribute=t.decodeHTML=t.determineBranch=t.EntityDecoder=t.DecodingMode=t.BinTrieFlags=t.fromCodePoint=t.replaceCodePoint=t.decodeCodePoint=t.xmlDecodeTree=t.htmlDecodeTree=void 0
var s=a(r(2934))
t.htmlDecodeTree=s.default
var u=a(r(7334))
t.xmlDecodeTree=u.default
var l=o(r(8271))
t.decodeCodePoint=l.default
var c,f,p,d,h=r(8271)
function g(e){return e>=c.ZERO&&e<=c.NINE}Object.defineProperty(t,"replaceCodePoint",{enumerable:!0,get:function(){return h.replaceCodePoint}}),Object.defineProperty(t,"fromCodePoint",{enumerable:!0,get:function(){return h.fromCodePoint}}),function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"}(c||(c={})),function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"}(f=t.BinTrieFlags||(t.BinTrieFlags={})),function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"}(p||(p={})),function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"}(d=t.DecodingMode||(t.DecodingMode={}))
var m=function(){function e(e,t,r){this.decodeTree=e,this.emitCodePoint=t,this.errors=r,this.state=p.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=d.Strict}return e.prototype.startEntity=function(e){this.decodeMode=e,this.state=p.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1},e.prototype.write=function(e,t){switch(this.state){case p.EntityStart:return e.charCodeAt(t)===c.NUM?(this.state=p.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=p.NamedEntity,this.stateNamedEntity(e,t))
case p.NumericStart:return this.stateNumericStart(e,t)
case p.NumericDecimal:return this.stateNumericDecimal(e,t)
case p.NumericHex:return this.stateNumericHex(e,t)
case p.NamedEntity:return this.stateNamedEntity(e,t)}},e.prototype.stateNumericStart=function(e,t){return t>=e.length?-1:(32|e.charCodeAt(t))===c.LOWER_X?(this.state=p.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=p.NumericDecimal,this.stateNumericDecimal(e,t))},e.prototype.addToNumericResult=function(e,t,r,n){if(t!==r){var i=r-t
this.result=this.result*Math.pow(n,i)+parseInt(e.substr(t,i),n),this.consumed+=i}},e.prototype.stateNumericHex=function(e,t){for(var r,n=t;t<e.length;){var i=e.charCodeAt(t)
if(!(g(i)||(r=i,r>=c.UPPER_A&&r<=c.UPPER_F||r>=c.LOWER_A&&r<=c.LOWER_F)))return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(i,3)
t+=1}return this.addToNumericResult(e,n,t,16),-1},e.prototype.stateNumericDecimal=function(e,t){for(var r=t;t<e.length;){var n=e.charCodeAt(t)
if(!g(n))return this.addToNumericResult(e,r,t,10),this.emitNumericEntity(n,2)
t+=1}return this.addToNumericResult(e,r,t,10),-1},e.prototype.emitNumericEntity=function(e,t){var r
if(this.consumed<=t)return null===(r=this.errors)||void 0===r||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0
if(e===c.SEMI)this.consumed+=1
else if(this.decodeMode===d.Strict)return 0
return this.emitCodePoint((0,l.replaceCodePoint)(this.result),this.consumed),this.errors&&(e!==c.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed},e.prototype.stateNamedEntity=function(e,t){for(var r=this.decodeTree,n=r[this.treeIndex],i=(n&f.VALUE_LENGTH)>>14;t<e.length;t++,this.excess++){var o=e.charCodeAt(t)
if(this.treeIndex=y(r,n,this.treeIndex+Math.max(1,i),o),this.treeIndex<0)return 0===this.result||this.decodeMode===d.Attribute&&(0===i||(a=o)===c.EQUALS||function(e){return e>=c.UPPER_A&&e<=c.UPPER_Z||e>=c.LOWER_A&&e<=c.LOWER_Z||g(e)}(a))?0:this.emitNotTerminatedNamedEntity()
if(0!=(i=((n=r[this.treeIndex])&f.VALUE_LENGTH)>>14)){if(o===c.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess)
this.decodeMode!==d.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}var a
return-1},e.prototype.emitNotTerminatedNamedEntity=function(){var e,t=this.result,r=(this.decodeTree[t]&f.VALUE_LENGTH)>>14
return this.emitNamedEntityData(t,r,this.consumed),null===(e=this.errors)||void 0===e||e.missingSemicolonAfterCharacterReference(),this.consumed},e.prototype.emitNamedEntityData=function(e,t,r){var n=this.decodeTree
return this.emitCodePoint(1===t?n[e]&~f.VALUE_LENGTH:n[e+1],r),3===t&&this.emitCodePoint(n[e+2],r),r},e.prototype.end=function(){var e
switch(this.state){case p.NamedEntity:return 0===this.result||this.decodeMode===d.Attribute&&this.result!==this.treeIndex?0:this.emitNotTerminatedNamedEntity()
case p.NumericDecimal:return this.emitNumericEntity(0,2)
case p.NumericHex:return this.emitNumericEntity(0,3)
case p.NumericStart:return null===(e=this.errors)||void 0===e||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0
case p.EntityStart:return 0}},e}()
function v(e){var t="",r=new m(e,(function(e){return t+=(0,l.fromCodePoint)(e)}))
return function(e,n){for(var i=0,o=0;(o=e.indexOf("&",o))>=0;){t+=e.slice(i,o),r.startEntity(n)
var a=r.write(e,o+1)
if(a<0){i=o+r.end()
break}i=o+a,o=0===a?i+1:i}var s=t+e.slice(i)
return t="",s}}function y(e,t,r,n){var i=(t&f.BRANCH_LENGTH)>>7,o=t&f.JUMP_TABLE
if(0===i)return 0!==o&&n===o?r:-1
if(o){var a=n-o
return a<0||a>=i?-1:e[r+a]-1}for(var s=r,u=s+i-1;s<=u;){var l=s+u>>>1,c=e[l]
if(c<n)s=l+1
else{if(!(c>n))return e[l+i]
u=l-1}}return-1}t.EntityDecoder=m,t.determineBranch=y
var b=v(s.default),w=v(u.default)
t.decodeHTML=function(e,t){return void 0===t&&(t=d.Legacy),b(e,t)},t.decodeHTMLAttribute=function(e){return b(e,d.Attribute)},t.decodeHTMLStrict=function(e){return b(e,d.Strict)},t.decodeXML=function(e){return w(e,d.Strict)}},8271:(e,t)=>{"use strict"
var r
Object.defineProperty(t,"__esModule",{value:!0}),t.replaceCodePoint=t.fromCodePoint=void 0
var n=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]])
function i(e){var t
return e>=55296&&e<=57343||e>1114111?65533:null!==(t=n.get(e))&&void 0!==t?t:e}t.fromCodePoint=null!==(r=String.fromCodePoint)&&void 0!==r?r:function(e){var t=""
return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|1023&e),t+String.fromCharCode(e)},t.replaceCodePoint=i,t.default=function(e){return(0,t.fromCodePoint)(i(e))}},3393:function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.encodeNonAsciiHTML=t.encodeHTML=void 0
var i=n(r(4008)),o=r(7529),a=/[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g
function s(e,t){for(var r,n="",a=0;null!==(r=e.exec(t));){var s=r.index
n+=t.substring(a,s)
var u=t.charCodeAt(s),l=i.default.get(u)
if("object"==typeof l){if(s+1<t.length){var c=t.charCodeAt(s+1),f="number"==typeof l.n?l.n===c?l.o:void 0:l.n.get(c)
if(void 0!==f){n+=f,a=e.lastIndex+=1
continue}}l=l.v}if(void 0!==l)n+=l,a=s+1
else{var p=(0,o.getCodePoint)(t,s)
n+="&#x".concat(p.toString(16),";"),a=e.lastIndex+=Number(p!==u)}}return n+t.substr(a)}t.encodeHTML=function(e){return s(a,e)},t.encodeNonAsciiHTML=function(e){return s(o.xmlReplacer,e)}},7529:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.escapeText=t.escapeAttribute=t.escapeUTF8=t.escape=t.encodeXML=t.getCodePoint=t.xmlReplacer=void 0,t.xmlReplacer=/["&'<>$\x80-\uFFFF]/g
var r=new Map([[34,"&quot;"],[38,"&amp;"],[39,"&apos;"],[60,"&lt;"],[62,"&gt;"]])
function n(e){for(var n,i="",o=0;null!==(n=t.xmlReplacer.exec(e));){var a=n.index,s=e.charCodeAt(a),u=r.get(s)
void 0!==u?(i+=e.substring(o,a)+u,o=a+1):(i+="".concat(e.substring(o,a),"&#x").concat((0,t.getCodePoint)(e,a).toString(16),";"),o=t.xmlReplacer.lastIndex+=Number(55296==(64512&s)))}return i+e.substr(o)}function i(e,t){return function(r){for(var n,i=0,o="";n=e.exec(r);)i!==n.index&&(o+=r.substring(i,n.index)),o+=t.get(n[0].charCodeAt(0)),i=n.index+1
return o+r.substring(i)}}t.getCodePoint=null!=String.prototype.codePointAt?function(e,t){return e.codePointAt(t)}:function(e,t){return 55296==(64512&e.charCodeAt(t))?1024*(e.charCodeAt(t)-55296)+e.charCodeAt(t+1)-56320+65536:e.charCodeAt(t)},t.encodeXML=n,t.escape=n,t.escapeUTF8=i(/[&<>'"]/g,r),t.escapeAttribute=i(/["&\u00A0]/g,new Map([[34,"&quot;"],[38,"&amp;"],[160,"&nbsp;"]])),t.escapeText=i(/[&<>\u00A0]/g,new Map([[38,"&amp;"],[60,"&lt;"],[62,"&gt;"],[160,"&nbsp;"]]))},2934:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((function(e){return e.charCodeAt(0)})))},7334:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=new Uint16Array("Ȁaglq\tɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((function(e){return e.charCodeAt(0)})))},4008:(e,t)=>{"use strict"
function r(e){for(var t=1;t<e.length;t++)e[t][0]+=e[t-1][0]+1
return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=new Map(r([[9,"&Tab;"],[0,"&NewLine;"],[22,"&excl;"],[0,"&quot;"],[0,"&num;"],[0,"&dollar;"],[0,"&percnt;"],[0,"&amp;"],[0,"&apos;"],[0,"&lpar;"],[0,"&rpar;"],[0,"&ast;"],[0,"&plus;"],[0,"&comma;"],[1,"&period;"],[0,"&sol;"],[10,"&colon;"],[0,"&semi;"],[0,{v:"&lt;",n:8402,o:"&nvlt;"}],[0,{v:"&equals;",n:8421,o:"&bne;"}],[0,{v:"&gt;",n:8402,o:"&nvgt;"}],[0,"&quest;"],[0,"&commat;"],[26,"&lbrack;"],[0,"&bsol;"],[0,"&rbrack;"],[0,"&Hat;"],[0,"&lowbar;"],[0,"&DiacriticalGrave;"],[5,{n:106,o:"&fjlig;"}],[20,"&lbrace;"],[0,"&verbar;"],[0,"&rbrace;"],[34,"&nbsp;"],[0,"&iexcl;"],[0,"&cent;"],[0,"&pound;"],[0,"&curren;"],[0,"&yen;"],[0,"&brvbar;"],[0,"&sect;"],[0,"&die;"],[0,"&copy;"],[0,"&ordf;"],[0,"&laquo;"],[0,"&not;"],[0,"&shy;"],[0,"&circledR;"],[0,"&macr;"],[0,"&deg;"],[0,"&PlusMinus;"],[0,"&sup2;"],[0,"&sup3;"],[0,"&acute;"],[0,"&micro;"],[0,"&para;"],[0,"&centerdot;"],[0,"&cedil;"],[0,"&sup1;"],[0,"&ordm;"],[0,"&raquo;"],[0,"&frac14;"],[0,"&frac12;"],[0,"&frac34;"],[0,"&iquest;"],[0,"&Agrave;"],[0,"&Aacute;"],[0,"&Acirc;"],[0,"&Atilde;"],[0,"&Auml;"],[0,"&angst;"],[0,"&AElig;"],[0,"&Ccedil;"],[0,"&Egrave;"],[0,"&Eacute;"],[0,"&Ecirc;"],[0,"&Euml;"],[0,"&Igrave;"],[0,"&Iacute;"],[0,"&Icirc;"],[0,"&Iuml;"],[0,"&ETH;"],[0,"&Ntilde;"],[0,"&Ograve;"],[0,"&Oacute;"],[0,"&Ocirc;"],[0,"&Otilde;"],[0,"&Ouml;"],[0,"&times;"],[0,"&Oslash;"],[0,"&Ugrave;"],[0,"&Uacute;"],[0,"&Ucirc;"],[0,"&Uuml;"],[0,"&Yacute;"],[0,"&THORN;"],[0,"&szlig;"],[0,"&agrave;"],[0,"&aacute;"],[0,"&acirc;"],[0,"&atilde;"],[0,"&auml;"],[0,"&aring;"],[0,"&aelig;"],[0,"&ccedil;"],[0,"&egrave;"],[0,"&eacute;"],[0,"&ecirc;"],[0,"&euml;"],[0,"&igrave;"],[0,"&iacute;"],[0,"&icirc;"],[0,"&iuml;"],[0,"&eth;"],[0,"&ntilde;"],[0,"&ograve;"],[0,"&oacute;"],[0,"&ocirc;"],[0,"&otilde;"],[0,"&ouml;"],[0,"&div;"],[0,"&oslash;"],[0,"&ugrave;"],[0,"&uacute;"],[0,"&ucirc;"],[0,"&uuml;"],[0,"&yacute;"],[0,"&thorn;"],[0,"&yuml;"],[0,"&Amacr;"],[0,"&amacr;"],[0,"&Abreve;"],[0,"&abreve;"],[0,"&Aogon;"],[0,"&aogon;"],[0,"&Cacute;"],[0,"&cacute;"],[0,"&Ccirc;"],[0,"&ccirc;"],[0,"&Cdot;"],[0,"&cdot;"],[0,"&Ccaron;"],[0,"&ccaron;"],[0,"&Dcaron;"],[0,"&dcaron;"],[0,"&Dstrok;"],[0,"&dstrok;"],[0,"&Emacr;"],[0,"&emacr;"],[2,"&Edot;"],[0,"&edot;"],[0,"&Eogon;"],[0,"&eogon;"],[0,"&Ecaron;"],[0,"&ecaron;"],[0,"&Gcirc;"],[0,"&gcirc;"],[0,"&Gbreve;"],[0,"&gbreve;"],[0,"&Gdot;"],[0,"&gdot;"],[0,"&Gcedil;"],[1,"&Hcirc;"],[0,"&hcirc;"],[0,"&Hstrok;"],[0,"&hstrok;"],[0,"&Itilde;"],[0,"&itilde;"],[0,"&Imacr;"],[0,"&imacr;"],[2,"&Iogon;"],[0,"&iogon;"],[0,"&Idot;"],[0,"&imath;"],[0,"&IJlig;"],[0,"&ijlig;"],[0,"&Jcirc;"],[0,"&jcirc;"],[0,"&Kcedil;"],[0,"&kcedil;"],[0,"&kgreen;"],[0,"&Lacute;"],[0,"&lacute;"],[0,"&Lcedil;"],[0,"&lcedil;"],[0,"&Lcaron;"],[0,"&lcaron;"],[0,"&Lmidot;"],[0,"&lmidot;"],[0,"&Lstrok;"],[0,"&lstrok;"],[0,"&Nacute;"],[0,"&nacute;"],[0,"&Ncedil;"],[0,"&ncedil;"],[0,"&Ncaron;"],[0,"&ncaron;"],[0,"&napos;"],[0,"&ENG;"],[0,"&eng;"],[0,"&Omacr;"],[0,"&omacr;"],[2,"&Odblac;"],[0,"&odblac;"],[0,"&OElig;"],[0,"&oelig;"],[0,"&Racute;"],[0,"&racute;"],[0,"&Rcedil;"],[0,"&rcedil;"],[0,"&Rcaron;"],[0,"&rcaron;"],[0,"&Sacute;"],[0,"&sacute;"],[0,"&Scirc;"],[0,"&scirc;"],[0,"&Scedil;"],[0,"&scedil;"],[0,"&Scaron;"],[0,"&scaron;"],[0,"&Tcedil;"],[0,"&tcedil;"],[0,"&Tcaron;"],[0,"&tcaron;"],[0,"&Tstrok;"],[0,"&tstrok;"],[0,"&Utilde;"],[0,"&utilde;"],[0,"&Umacr;"],[0,"&umacr;"],[0,"&Ubreve;"],[0,"&ubreve;"],[0,"&Uring;"],[0,"&uring;"],[0,"&Udblac;"],[0,"&udblac;"],[0,"&Uogon;"],[0,"&uogon;"],[0,"&Wcirc;"],[0,"&wcirc;"],[0,"&Ycirc;"],[0,"&ycirc;"],[0,"&Yuml;"],[0,"&Zacute;"],[0,"&zacute;"],[0,"&Zdot;"],[0,"&zdot;"],[0,"&Zcaron;"],[0,"&zcaron;"],[19,"&fnof;"],[34,"&imped;"],[63,"&gacute;"],[65,"&jmath;"],[142,"&circ;"],[0,"&caron;"],[16,"&breve;"],[0,"&DiacriticalDot;"],[0,"&ring;"],[0,"&ogon;"],[0,"&DiacriticalTilde;"],[0,"&dblac;"],[51,"&DownBreve;"],[127,"&Alpha;"],[0,"&Beta;"],[0,"&Gamma;"],[0,"&Delta;"],[0,"&Epsilon;"],[0,"&Zeta;"],[0,"&Eta;"],[0,"&Theta;"],[0,"&Iota;"],[0,"&Kappa;"],[0,"&Lambda;"],[0,"&Mu;"],[0,"&Nu;"],[0,"&Xi;"],[0,"&Omicron;"],[0,"&Pi;"],[0,"&Rho;"],[1,"&Sigma;"],[0,"&Tau;"],[0,"&Upsilon;"],[0,"&Phi;"],[0,"&Chi;"],[0,"&Psi;"],[0,"&ohm;"],[7,"&alpha;"],[0,"&beta;"],[0,"&gamma;"],[0,"&delta;"],[0,"&epsi;"],[0,"&zeta;"],[0,"&eta;"],[0,"&theta;"],[0,"&iota;"],[0,"&kappa;"],[0,"&lambda;"],[0,"&mu;"],[0,"&nu;"],[0,"&xi;"],[0,"&omicron;"],[0,"&pi;"],[0,"&rho;"],[0,"&sigmaf;"],[0,"&sigma;"],[0,"&tau;"],[0,"&upsi;"],[0,"&phi;"],[0,"&chi;"],[0,"&psi;"],[0,"&omega;"],[7,"&thetasym;"],[0,"&Upsi;"],[2,"&phiv;"],[0,"&piv;"],[5,"&Gammad;"],[0,"&digamma;"],[18,"&kappav;"],[0,"&rhov;"],[3,"&epsiv;"],[0,"&backepsilon;"],[10,"&IOcy;"],[0,"&DJcy;"],[0,"&GJcy;"],[0,"&Jukcy;"],[0,"&DScy;"],[0,"&Iukcy;"],[0,"&YIcy;"],[0,"&Jsercy;"],[0,"&LJcy;"],[0,"&NJcy;"],[0,"&TSHcy;"],[0,"&KJcy;"],[1,"&Ubrcy;"],[0,"&DZcy;"],[0,"&Acy;"],[0,"&Bcy;"],[0,"&Vcy;"],[0,"&Gcy;"],[0,"&Dcy;"],[0,"&IEcy;"],[0,"&ZHcy;"],[0,"&Zcy;"],[0,"&Icy;"],[0,"&Jcy;"],[0,"&Kcy;"],[0,"&Lcy;"],[0,"&Mcy;"],[0,"&Ncy;"],[0,"&Ocy;"],[0,"&Pcy;"],[0,"&Rcy;"],[0,"&Scy;"],[0,"&Tcy;"],[0,"&Ucy;"],[0,"&Fcy;"],[0,"&KHcy;"],[0,"&TScy;"],[0,"&CHcy;"],[0,"&SHcy;"],[0,"&SHCHcy;"],[0,"&HARDcy;"],[0,"&Ycy;"],[0,"&SOFTcy;"],[0,"&Ecy;"],[0,"&YUcy;"],[0,"&YAcy;"],[0,"&acy;"],[0,"&bcy;"],[0,"&vcy;"],[0,"&gcy;"],[0,"&dcy;"],[0,"&iecy;"],[0,"&zhcy;"],[0,"&zcy;"],[0,"&icy;"],[0,"&jcy;"],[0,"&kcy;"],[0,"&lcy;"],[0,"&mcy;"],[0,"&ncy;"],[0,"&ocy;"],[0,"&pcy;"],[0,"&rcy;"],[0,"&scy;"],[0,"&tcy;"],[0,"&ucy;"],[0,"&fcy;"],[0,"&khcy;"],[0,"&tscy;"],[0,"&chcy;"],[0,"&shcy;"],[0,"&shchcy;"],[0,"&hardcy;"],[0,"&ycy;"],[0,"&softcy;"],[0,"&ecy;"],[0,"&yucy;"],[0,"&yacy;"],[1,"&iocy;"],[0,"&djcy;"],[0,"&gjcy;"],[0,"&jukcy;"],[0,"&dscy;"],[0,"&iukcy;"],[0,"&yicy;"],[0,"&jsercy;"],[0,"&ljcy;"],[0,"&njcy;"],[0,"&tshcy;"],[0,"&kjcy;"],[1,"&ubrcy;"],[0,"&dzcy;"],[7074,"&ensp;"],[0,"&emsp;"],[0,"&emsp13;"],[0,"&emsp14;"],[1,"&numsp;"],[0,"&puncsp;"],[0,"&ThinSpace;"],[0,"&hairsp;"],[0,"&NegativeMediumSpace;"],[0,"&zwnj;"],[0,"&zwj;"],[0,"&lrm;"],[0,"&rlm;"],[0,"&dash;"],[2,"&ndash;"],[0,"&mdash;"],[0,"&horbar;"],[0,"&Verbar;"],[1,"&lsquo;"],[0,"&CloseCurlyQuote;"],[0,"&lsquor;"],[1,"&ldquo;"],[0,"&CloseCurlyDoubleQuote;"],[0,"&bdquo;"],[1,"&dagger;"],[0,"&Dagger;"],[0,"&bull;"],[2,"&nldr;"],[0,"&hellip;"],[9,"&permil;"],[0,"&pertenk;"],[0,"&prime;"],[0,"&Prime;"],[0,"&tprime;"],[0,"&backprime;"],[3,"&lsaquo;"],[0,"&rsaquo;"],[3,"&oline;"],[2,"&caret;"],[1,"&hybull;"],[0,"&frasl;"],[10,"&bsemi;"],[7,"&qprime;"],[7,{v:"&MediumSpace;",n:8202,o:"&ThickSpace;"}],[0,"&NoBreak;"],[0,"&af;"],[0,"&InvisibleTimes;"],[0,"&ic;"],[72,"&euro;"],[46,"&tdot;"],[0,"&DotDot;"],[37,"&complexes;"],[2,"&incare;"],[4,"&gscr;"],[0,"&hamilt;"],[0,"&Hfr;"],[0,"&Hopf;"],[0,"&planckh;"],[0,"&hbar;"],[0,"&imagline;"],[0,"&Ifr;"],[0,"&lagran;"],[0,"&ell;"],[1,"&naturals;"],[0,"&numero;"],[0,"&copysr;"],[0,"&weierp;"],[0,"&Popf;"],[0,"&Qopf;"],[0,"&realine;"],[0,"&real;"],[0,"&reals;"],[0,"&rx;"],[3,"&trade;"],[1,"&integers;"],[2,"&mho;"],[0,"&zeetrf;"],[0,"&iiota;"],[2,"&bernou;"],[0,"&Cayleys;"],[1,"&escr;"],[0,"&Escr;"],[0,"&Fouriertrf;"],[1,"&Mellintrf;"],[0,"&order;"],[0,"&alefsym;"],[0,"&beth;"],[0,"&gimel;"],[0,"&daleth;"],[12,"&CapitalDifferentialD;"],[0,"&dd;"],[0,"&ee;"],[0,"&ii;"],[10,"&frac13;"],[0,"&frac23;"],[0,"&frac15;"],[0,"&frac25;"],[0,"&frac35;"],[0,"&frac45;"],[0,"&frac16;"],[0,"&frac56;"],[0,"&frac18;"],[0,"&frac38;"],[0,"&frac58;"],[0,"&frac78;"],[49,"&larr;"],[0,"&ShortUpArrow;"],[0,"&rarr;"],[0,"&darr;"],[0,"&harr;"],[0,"&updownarrow;"],[0,"&nwarr;"],[0,"&nearr;"],[0,"&LowerRightArrow;"],[0,"&LowerLeftArrow;"],[0,"&nlarr;"],[0,"&nrarr;"],[1,{v:"&rarrw;",n:824,o:"&nrarrw;"}],[0,"&Larr;"],[0,"&Uarr;"],[0,"&Rarr;"],[0,"&Darr;"],[0,"&larrtl;"],[0,"&rarrtl;"],[0,"&LeftTeeArrow;"],[0,"&mapstoup;"],[0,"&map;"],[0,"&DownTeeArrow;"],[1,"&hookleftarrow;"],[0,"&hookrightarrow;"],[0,"&larrlp;"],[0,"&looparrowright;"],[0,"&harrw;"],[0,"&nharr;"],[1,"&lsh;"],[0,"&rsh;"],[0,"&ldsh;"],[0,"&rdsh;"],[1,"&crarr;"],[0,"&cularr;"],[0,"&curarr;"],[2,"&circlearrowleft;"],[0,"&circlearrowright;"],[0,"&leftharpoonup;"],[0,"&DownLeftVector;"],[0,"&RightUpVector;"],[0,"&LeftUpVector;"],[0,"&rharu;"],[0,"&DownRightVector;"],[0,"&dharr;"],[0,"&dharl;"],[0,"&RightArrowLeftArrow;"],[0,"&udarr;"],[0,"&LeftArrowRightArrow;"],[0,"&leftleftarrows;"],[0,"&upuparrows;"],[0,"&rightrightarrows;"],[0,"&ddarr;"],[0,"&leftrightharpoons;"],[0,"&Equilibrium;"],[0,"&nlArr;"],[0,"&nhArr;"],[0,"&nrArr;"],[0,"&DoubleLeftArrow;"],[0,"&DoubleUpArrow;"],[0,"&DoubleRightArrow;"],[0,"&dArr;"],[0,"&DoubleLeftRightArrow;"],[0,"&DoubleUpDownArrow;"],[0,"&nwArr;"],[0,"&neArr;"],[0,"&seArr;"],[0,"&swArr;"],[0,"&lAarr;"],[0,"&rAarr;"],[1,"&zigrarr;"],[6,"&larrb;"],[0,"&rarrb;"],[15,"&DownArrowUpArrow;"],[7,"&loarr;"],[0,"&roarr;"],[0,"&hoarr;"],[0,"&forall;"],[0,"&comp;"],[0,{v:"&part;",n:824,o:"&npart;"}],[0,"&exist;"],[0,"&nexist;"],[0,"&empty;"],[1,"&Del;"],[0,"&Element;"],[0,"&NotElement;"],[1,"&ni;"],[0,"&notni;"],[2,"&prod;"],[0,"&coprod;"],[0,"&sum;"],[0,"&minus;"],[0,"&MinusPlus;"],[0,"&dotplus;"],[1,"&Backslash;"],[0,"&lowast;"],[0,"&compfn;"],[1,"&radic;"],[2,"&prop;"],[0,"&infin;"],[0,"&angrt;"],[0,{v:"&ang;",n:8402,o:"&nang;"}],[0,"&angmsd;"],[0,"&angsph;"],[0,"&mid;"],[0,"&nmid;"],[0,"&DoubleVerticalBar;"],[0,"&NotDoubleVerticalBar;"],[0,"&and;"],[0,"&or;"],[0,{v:"&cap;",n:65024,o:"&caps;"}],[0,{v:"&cup;",n:65024,o:"&cups;"}],[0,"&int;"],[0,"&Int;"],[0,"&iiint;"],[0,"&conint;"],[0,"&Conint;"],[0,"&Cconint;"],[0,"&cwint;"],[0,"&ClockwiseContourIntegral;"],[0,"&awconint;"],[0,"&there4;"],[0,"&becaus;"],[0,"&ratio;"],[0,"&Colon;"],[0,"&dotminus;"],[1,"&mDDot;"],[0,"&homtht;"],[0,{v:"&sim;",n:8402,o:"&nvsim;"}],[0,{v:"&backsim;",n:817,o:"&race;"}],[0,{v:"&ac;",n:819,o:"&acE;"}],[0,"&acd;"],[0,"&VerticalTilde;"],[0,"&NotTilde;"],[0,{v:"&eqsim;",n:824,o:"&nesim;"}],[0,"&sime;"],[0,"&NotTildeEqual;"],[0,"&cong;"],[0,"&simne;"],[0,"&ncong;"],[0,"&ap;"],[0,"&nap;"],[0,"&ape;"],[0,{v:"&apid;",n:824,o:"&napid;"}],[0,"&backcong;"],[0,{v:"&asympeq;",n:8402,o:"&nvap;"}],[0,{v:"&bump;",n:824,o:"&nbump;"}],[0,{v:"&bumpe;",n:824,o:"&nbumpe;"}],[0,{v:"&doteq;",n:824,o:"&nedot;"}],[0,"&doteqdot;"],[0,"&efDot;"],[0,"&erDot;"],[0,"&Assign;"],[0,"&ecolon;"],[0,"&ecir;"],[0,"&circeq;"],[1,"&wedgeq;"],[0,"&veeeq;"],[1,"&triangleq;"],[2,"&equest;"],[0,"&ne;"],[0,{v:"&Congruent;",n:8421,o:"&bnequiv;"}],[0,"&nequiv;"],[1,{v:"&le;",n:8402,o:"&nvle;"}],[0,{v:"&ge;",n:8402,o:"&nvge;"}],[0,{v:"&lE;",n:824,o:"&nlE;"}],[0,{v:"&gE;",n:824,o:"&ngE;"}],[0,{v:"&lnE;",n:65024,o:"&lvertneqq;"}],[0,{v:"&gnE;",n:65024,o:"&gvertneqq;"}],[0,{v:"&ll;",n:new Map(r([[824,"&nLtv;"],[7577,"&nLt;"]]))}],[0,{v:"&gg;",n:new Map(r([[824,"&nGtv;"],[7577,"&nGt;"]]))}],[0,"&between;"],[0,"&NotCupCap;"],[0,"&nless;"],[0,"&ngt;"],[0,"&nle;"],[0,"&nge;"],[0,"&lesssim;"],[0,"&GreaterTilde;"],[0,"&nlsim;"],[0,"&ngsim;"],[0,"&LessGreater;"],[0,"&gl;"],[0,"&NotLessGreater;"],[0,"&NotGreaterLess;"],[0,"&pr;"],[0,"&sc;"],[0,"&prcue;"],[0,"&sccue;"],[0,"&PrecedesTilde;"],[0,{v:"&scsim;",n:824,o:"&NotSucceedsTilde;"}],[0,"&NotPrecedes;"],[0,"&NotSucceeds;"],[0,{v:"&sub;",n:8402,o:"&NotSubset;"}],[0,{v:"&sup;",n:8402,o:"&NotSuperset;"}],[0,"&nsub;"],[0,"&nsup;"],[0,"&sube;"],[0,"&supe;"],[0,"&NotSubsetEqual;"],[0,"&NotSupersetEqual;"],[0,{v:"&subne;",n:65024,o:"&varsubsetneq;"}],[0,{v:"&supne;",n:65024,o:"&varsupsetneq;"}],[1,"&cupdot;"],[0,"&UnionPlus;"],[0,{v:"&sqsub;",n:824,o:"&NotSquareSubset;"}],[0,{v:"&sqsup;",n:824,o:"&NotSquareSuperset;"}],[0,"&sqsube;"],[0,"&sqsupe;"],[0,{v:"&sqcap;",n:65024,o:"&sqcaps;"}],[0,{v:"&sqcup;",n:65024,o:"&sqcups;"}],[0,"&CirclePlus;"],[0,"&CircleMinus;"],[0,"&CircleTimes;"],[0,"&osol;"],[0,"&CircleDot;"],[0,"&circledcirc;"],[0,"&circledast;"],[1,"&circleddash;"],[0,"&boxplus;"],[0,"&boxminus;"],[0,"&boxtimes;"],[0,"&dotsquare;"],[0,"&RightTee;"],[0,"&dashv;"],[0,"&DownTee;"],[0,"&bot;"],[1,"&models;"],[0,"&DoubleRightTee;"],[0,"&Vdash;"],[0,"&Vvdash;"],[0,"&VDash;"],[0,"&nvdash;"],[0,"&nvDash;"],[0,"&nVdash;"],[0,"&nVDash;"],[0,"&prurel;"],[1,"&LeftTriangle;"],[0,"&RightTriangle;"],[0,{v:"&LeftTriangleEqual;",n:8402,o:"&nvltrie;"}],[0,{v:"&RightTriangleEqual;",n:8402,o:"&nvrtrie;"}],[0,"&origof;"],[0,"&imof;"],[0,"&multimap;"],[0,"&hercon;"],[0,"&intcal;"],[0,"&veebar;"],[1,"&barvee;"],[0,"&angrtvb;"],[0,"&lrtri;"],[0,"&bigwedge;"],[0,"&bigvee;"],[0,"&bigcap;"],[0,"&bigcup;"],[0,"&diam;"],[0,"&sdot;"],[0,"&sstarf;"],[0,"&divideontimes;"],[0,"&bowtie;"],[0,"&ltimes;"],[0,"&rtimes;"],[0,"&leftthreetimes;"],[0,"&rightthreetimes;"],[0,"&backsimeq;"],[0,"&curlyvee;"],[0,"&curlywedge;"],[0,"&Sub;"],[0,"&Sup;"],[0,"&Cap;"],[0,"&Cup;"],[0,"&fork;"],[0,"&epar;"],[0,"&lessdot;"],[0,"&gtdot;"],[0,{v:"&Ll;",n:824,o:"&nLl;"}],[0,{v:"&Gg;",n:824,o:"&nGg;"}],[0,{v:"&leg;",n:65024,o:"&lesg;"}],[0,{v:"&gel;",n:65024,o:"&gesl;"}],[2,"&cuepr;"],[0,"&cuesc;"],[0,"&NotPrecedesSlantEqual;"],[0,"&NotSucceedsSlantEqual;"],[0,"&NotSquareSubsetEqual;"],[0,"&NotSquareSupersetEqual;"],[2,"&lnsim;"],[0,"&gnsim;"],[0,"&precnsim;"],[0,"&scnsim;"],[0,"&nltri;"],[0,"&NotRightTriangle;"],[0,"&nltrie;"],[0,"&NotRightTriangleEqual;"],[0,"&vellip;"],[0,"&ctdot;"],[0,"&utdot;"],[0,"&dtdot;"],[0,"&disin;"],[0,"&isinsv;"],[0,"&isins;"],[0,{v:"&isindot;",n:824,o:"&notindot;"}],[0,"&notinvc;"],[0,"&notinvb;"],[1,{v:"&isinE;",n:824,o:"&notinE;"}],[0,"&nisd;"],[0,"&xnis;"],[0,"&nis;"],[0,"&notnivc;"],[0,"&notnivb;"],[6,"&barwed;"],[0,"&Barwed;"],[1,"&lceil;"],[0,"&rceil;"],[0,"&LeftFloor;"],[0,"&rfloor;"],[0,"&drcrop;"],[0,"&dlcrop;"],[0,"&urcrop;"],[0,"&ulcrop;"],[0,"&bnot;"],[1,"&profline;"],[0,"&profsurf;"],[1,"&telrec;"],[0,"&target;"],[5,"&ulcorn;"],[0,"&urcorn;"],[0,"&dlcorn;"],[0,"&drcorn;"],[2,"&frown;"],[0,"&smile;"],[9,"&cylcty;"],[0,"&profalar;"],[7,"&topbot;"],[6,"&ovbar;"],[1,"&solbar;"],[60,"&angzarr;"],[51,"&lmoustache;"],[0,"&rmoustache;"],[2,"&OverBracket;"],[0,"&bbrk;"],[0,"&bbrktbrk;"],[37,"&OverParenthesis;"],[0,"&UnderParenthesis;"],[0,"&OverBrace;"],[0,"&UnderBrace;"],[2,"&trpezium;"],[4,"&elinters;"],[59,"&blank;"],[164,"&circledS;"],[55,"&boxh;"],[1,"&boxv;"],[9,"&boxdr;"],[3,"&boxdl;"],[3,"&boxur;"],[3,"&boxul;"],[3,"&boxvr;"],[7,"&boxvl;"],[7,"&boxhd;"],[7,"&boxhu;"],[7,"&boxvh;"],[19,"&boxH;"],[0,"&boxV;"],[0,"&boxdR;"],[0,"&boxDr;"],[0,"&boxDR;"],[0,"&boxdL;"],[0,"&boxDl;"],[0,"&boxDL;"],[0,"&boxuR;"],[0,"&boxUr;"],[0,"&boxUR;"],[0,"&boxuL;"],[0,"&boxUl;"],[0,"&boxUL;"],[0,"&boxvR;"],[0,"&boxVr;"],[0,"&boxVR;"],[0,"&boxvL;"],[0,"&boxVl;"],[0,"&boxVL;"],[0,"&boxHd;"],[0,"&boxhD;"],[0,"&boxHD;"],[0,"&boxHu;"],[0,"&boxhU;"],[0,"&boxHU;"],[0,"&boxvH;"],[0,"&boxVh;"],[0,"&boxVH;"],[19,"&uhblk;"],[3,"&lhblk;"],[3,"&block;"],[8,"&blk14;"],[0,"&blk12;"],[0,"&blk34;"],[13,"&square;"],[8,"&blacksquare;"],[0,"&EmptyVerySmallSquare;"],[1,"&rect;"],[0,"&marker;"],[2,"&fltns;"],[1,"&bigtriangleup;"],[0,"&blacktriangle;"],[0,"&triangle;"],[2,"&blacktriangleright;"],[0,"&rtri;"],[3,"&bigtriangledown;"],[0,"&blacktriangledown;"],[0,"&dtri;"],[2,"&blacktriangleleft;"],[0,"&ltri;"],[6,"&loz;"],[0,"&cir;"],[32,"&tridot;"],[2,"&bigcirc;"],[8,"&ultri;"],[0,"&urtri;"],[0,"&lltri;"],[0,"&EmptySmallSquare;"],[0,"&FilledSmallSquare;"],[8,"&bigstar;"],[0,"&star;"],[7,"&phone;"],[49,"&female;"],[1,"&male;"],[29,"&spades;"],[2,"&clubs;"],[1,"&hearts;"],[0,"&diamondsuit;"],[3,"&sung;"],[2,"&flat;"],[0,"&natural;"],[0,"&sharp;"],[163,"&check;"],[3,"&cross;"],[8,"&malt;"],[21,"&sext;"],[33,"&VerticalSeparator;"],[25,"&lbbrk;"],[0,"&rbbrk;"],[84,"&bsolhsub;"],[0,"&suphsol;"],[28,"&LeftDoubleBracket;"],[0,"&RightDoubleBracket;"],[0,"&lang;"],[0,"&rang;"],[0,"&Lang;"],[0,"&Rang;"],[0,"&loang;"],[0,"&roang;"],[7,"&longleftarrow;"],[0,"&longrightarrow;"],[0,"&longleftrightarrow;"],[0,"&DoubleLongLeftArrow;"],[0,"&DoubleLongRightArrow;"],[0,"&DoubleLongLeftRightArrow;"],[1,"&longmapsto;"],[2,"&dzigrarr;"],[258,"&nvlArr;"],[0,"&nvrArr;"],[0,"&nvHarr;"],[0,"&Map;"],[6,"&lbarr;"],[0,"&bkarow;"],[0,"&lBarr;"],[0,"&dbkarow;"],[0,"&drbkarow;"],[0,"&DDotrahd;"],[0,"&UpArrowBar;"],[0,"&DownArrowBar;"],[2,"&Rarrtl;"],[2,"&latail;"],[0,"&ratail;"],[0,"&lAtail;"],[0,"&rAtail;"],[0,"&larrfs;"],[0,"&rarrfs;"],[0,"&larrbfs;"],[0,"&rarrbfs;"],[2,"&nwarhk;"],[0,"&nearhk;"],[0,"&hksearow;"],[0,"&hkswarow;"],[0,"&nwnear;"],[0,"&nesear;"],[0,"&seswar;"],[0,"&swnwar;"],[8,{v:"&rarrc;",n:824,o:"&nrarrc;"}],[1,"&cudarrr;"],[0,"&ldca;"],[0,"&rdca;"],[0,"&cudarrl;"],[0,"&larrpl;"],[2,"&curarrm;"],[0,"&cularrp;"],[7,"&rarrpl;"],[2,"&harrcir;"],[0,"&Uarrocir;"],[0,"&lurdshar;"],[0,"&ldrushar;"],[2,"&LeftRightVector;"],[0,"&RightUpDownVector;"],[0,"&DownLeftRightVector;"],[0,"&LeftUpDownVector;"],[0,"&LeftVectorBar;"],[0,"&RightVectorBar;"],[0,"&RightUpVectorBar;"],[0,"&RightDownVectorBar;"],[0,"&DownLeftVectorBar;"],[0,"&DownRightVectorBar;"],[0,"&LeftUpVectorBar;"],[0,"&LeftDownVectorBar;"],[0,"&LeftTeeVector;"],[0,"&RightTeeVector;"],[0,"&RightUpTeeVector;"],[0,"&RightDownTeeVector;"],[0,"&DownLeftTeeVector;"],[0,"&DownRightTeeVector;"],[0,"&LeftUpTeeVector;"],[0,"&LeftDownTeeVector;"],[0,"&lHar;"],[0,"&uHar;"],[0,"&rHar;"],[0,"&dHar;"],[0,"&luruhar;"],[0,"&ldrdhar;"],[0,"&ruluhar;"],[0,"&rdldhar;"],[0,"&lharul;"],[0,"&llhard;"],[0,"&rharul;"],[0,"&lrhard;"],[0,"&udhar;"],[0,"&duhar;"],[0,"&RoundImplies;"],[0,"&erarr;"],[0,"&simrarr;"],[0,"&larrsim;"],[0,"&rarrsim;"],[0,"&rarrap;"],[0,"&ltlarr;"],[1,"&gtrarr;"],[0,"&subrarr;"],[1,"&suplarr;"],[0,"&lfisht;"],[0,"&rfisht;"],[0,"&ufisht;"],[0,"&dfisht;"],[5,"&lopar;"],[0,"&ropar;"],[4,"&lbrke;"],[0,"&rbrke;"],[0,"&lbrkslu;"],[0,"&rbrksld;"],[0,"&lbrksld;"],[0,"&rbrkslu;"],[0,"&langd;"],[0,"&rangd;"],[0,"&lparlt;"],[0,"&rpargt;"],[0,"&gtlPar;"],[0,"&ltrPar;"],[3,"&vzigzag;"],[1,"&vangrt;"],[0,"&angrtvbd;"],[6,"&ange;"],[0,"&range;"],[0,"&dwangle;"],[0,"&uwangle;"],[0,"&angmsdaa;"],[0,"&angmsdab;"],[0,"&angmsdac;"],[0,"&angmsdad;"],[0,"&angmsdae;"],[0,"&angmsdaf;"],[0,"&angmsdag;"],[0,"&angmsdah;"],[0,"&bemptyv;"],[0,"&demptyv;"],[0,"&cemptyv;"],[0,"&raemptyv;"],[0,"&laemptyv;"],[0,"&ohbar;"],[0,"&omid;"],[0,"&opar;"],[1,"&operp;"],[1,"&olcross;"],[0,"&odsold;"],[1,"&olcir;"],[0,"&ofcir;"],[0,"&olt;"],[0,"&ogt;"],[0,"&cirscir;"],[0,"&cirE;"],[0,"&solb;"],[0,"&bsolb;"],[3,"&boxbox;"],[3,"&trisb;"],[0,"&rtriltri;"],[0,{v:"&LeftTriangleBar;",n:824,o:"&NotLeftTriangleBar;"}],[0,{v:"&RightTriangleBar;",n:824,o:"&NotRightTriangleBar;"}],[11,"&iinfin;"],[0,"&infintie;"],[0,"&nvinfin;"],[4,"&eparsl;"],[0,"&smeparsl;"],[0,"&eqvparsl;"],[5,"&blacklozenge;"],[8,"&RuleDelayed;"],[1,"&dsol;"],[9,"&bigodot;"],[0,"&bigoplus;"],[0,"&bigotimes;"],[1,"&biguplus;"],[1,"&bigsqcup;"],[5,"&iiiint;"],[0,"&fpartint;"],[2,"&cirfnint;"],[0,"&awint;"],[0,"&rppolint;"],[0,"&scpolint;"],[0,"&npolint;"],[0,"&pointint;"],[0,"&quatint;"],[0,"&intlarhk;"],[10,"&pluscir;"],[0,"&plusacir;"],[0,"&simplus;"],[0,"&plusdu;"],[0,"&plussim;"],[0,"&plustwo;"],[1,"&mcomma;"],[0,"&minusdu;"],[2,"&loplus;"],[0,"&roplus;"],[0,"&Cross;"],[0,"&timesd;"],[0,"&timesbar;"],[1,"&smashp;"],[0,"&lotimes;"],[0,"&rotimes;"],[0,"&otimesas;"],[0,"&Otimes;"],[0,"&odiv;"],[0,"&triplus;"],[0,"&triminus;"],[0,"&tritime;"],[0,"&intprod;"],[2,"&amalg;"],[0,"&capdot;"],[1,"&ncup;"],[0,"&ncap;"],[0,"&capand;"],[0,"&cupor;"],[0,"&cupcap;"],[0,"&capcup;"],[0,"&cupbrcap;"],[0,"&capbrcup;"],[0,"&cupcup;"],[0,"&capcap;"],[0,"&ccups;"],[0,"&ccaps;"],[2,"&ccupssm;"],[2,"&And;"],[0,"&Or;"],[0,"&andand;"],[0,"&oror;"],[0,"&orslope;"],[0,"&andslope;"],[1,"&andv;"],[0,"&orv;"],[0,"&andd;"],[0,"&ord;"],[1,"&wedbar;"],[6,"&sdote;"],[3,"&simdot;"],[2,{v:"&congdot;",n:824,o:"&ncongdot;"}],[0,"&easter;"],[0,"&apacir;"],[0,{v:"&apE;",n:824,o:"&napE;"}],[0,"&eplus;"],[0,"&pluse;"],[0,"&Esim;"],[0,"&Colone;"],[0,"&Equal;"],[1,"&ddotseq;"],[0,"&equivDD;"],[0,"&ltcir;"],[0,"&gtcir;"],[0,"&ltquest;"],[0,"&gtquest;"],[0,{v:"&leqslant;",n:824,o:"&nleqslant;"}],[0,{v:"&geqslant;",n:824,o:"&ngeqslant;"}],[0,"&lesdot;"],[0,"&gesdot;"],[0,"&lesdoto;"],[0,"&gesdoto;"],[0,"&lesdotor;"],[0,"&gesdotol;"],[0,"&lap;"],[0,"&gap;"],[0,"&lne;"],[0,"&gne;"],[0,"&lnap;"],[0,"&gnap;"],[0,"&lEg;"],[0,"&gEl;"],[0,"&lsime;"],[0,"&gsime;"],[0,"&lsimg;"],[0,"&gsiml;"],[0,"&lgE;"],[0,"&glE;"],[0,"&lesges;"],[0,"&gesles;"],[0,"&els;"],[0,"&egs;"],[0,"&elsdot;"],[0,"&egsdot;"],[0,"&el;"],[0,"&eg;"],[2,"&siml;"],[0,"&simg;"],[0,"&simlE;"],[0,"&simgE;"],[0,{v:"&LessLess;",n:824,o:"&NotNestedLessLess;"}],[0,{v:"&GreaterGreater;",n:824,o:"&NotNestedGreaterGreater;"}],[1,"&glj;"],[0,"&gla;"],[0,"&ltcc;"],[0,"&gtcc;"],[0,"&lescc;"],[0,"&gescc;"],[0,"&smt;"],[0,"&lat;"],[0,{v:"&smte;",n:65024,o:"&smtes;"}],[0,{v:"&late;",n:65024,o:"&lates;"}],[0,"&bumpE;"],[0,{v:"&PrecedesEqual;",n:824,o:"&NotPrecedesEqual;"}],[0,{v:"&sce;",n:824,o:"&NotSucceedsEqual;"}],[2,"&prE;"],[0,"&scE;"],[0,"&precneqq;"],[0,"&scnE;"],[0,"&prap;"],[0,"&scap;"],[0,"&precnapprox;"],[0,"&scnap;"],[0,"&Pr;"],[0,"&Sc;"],[0,"&subdot;"],[0,"&supdot;"],[0,"&subplus;"],[0,"&supplus;"],[0,"&submult;"],[0,"&supmult;"],[0,"&subedot;"],[0,"&supedot;"],[0,{v:"&subE;",n:824,o:"&nsubE;"}],[0,{v:"&supE;",n:824,o:"&nsupE;"}],[0,"&subsim;"],[0,"&supsim;"],[2,{v:"&subnE;",n:65024,o:"&varsubsetneqq;"}],[0,{v:"&supnE;",n:65024,o:"&varsupsetneqq;"}],[2,"&csub;"],[0,"&csup;"],[0,"&csube;"],[0,"&csupe;"],[0,"&subsup;"],[0,"&supsub;"],[0,"&subsub;"],[0,"&supsup;"],[0,"&suphsub;"],[0,"&supdsub;"],[0,"&forkv;"],[0,"&topfork;"],[0,"&mlcp;"],[8,"&Dashv;"],[1,"&Vdashl;"],[0,"&Barv;"],[0,"&vBar;"],[0,"&vBarv;"],[1,"&Vbar;"],[0,"&Not;"],[0,"&bNot;"],[0,"&rnmid;"],[0,"&cirmid;"],[0,"&midcir;"],[0,"&topcir;"],[0,"&nhpar;"],[0,"&parsim;"],[9,{v:"&parsl;",n:8421,o:"&nparsl;"}],[44343,{n:new Map(r([[56476,"&Ascr;"],[1,"&Cscr;"],[0,"&Dscr;"],[2,"&Gscr;"],[2,"&Jscr;"],[0,"&Kscr;"],[2,"&Nscr;"],[0,"&Oscr;"],[0,"&Pscr;"],[0,"&Qscr;"],[1,"&Sscr;"],[0,"&Tscr;"],[0,"&Uscr;"],[0,"&Vscr;"],[0,"&Wscr;"],[0,"&Xscr;"],[0,"&Yscr;"],[0,"&Zscr;"],[0,"&ascr;"],[0,"&bscr;"],[0,"&cscr;"],[0,"&dscr;"],[1,"&fscr;"],[1,"&hscr;"],[0,"&iscr;"],[0,"&jscr;"],[0,"&kscr;"],[0,"&lscr;"],[0,"&mscr;"],[0,"&nscr;"],[1,"&pscr;"],[0,"&qscr;"],[0,"&rscr;"],[0,"&sscr;"],[0,"&tscr;"],[0,"&uscr;"],[0,"&vscr;"],[0,"&wscr;"],[0,"&xscr;"],[0,"&yscr;"],[0,"&zscr;"],[52,"&Afr;"],[0,"&Bfr;"],[1,"&Dfr;"],[0,"&Efr;"],[0,"&Ffr;"],[0,"&Gfr;"],[2,"&Jfr;"],[0,"&Kfr;"],[0,"&Lfr;"],[0,"&Mfr;"],[0,"&Nfr;"],[0,"&Ofr;"],[0,"&Pfr;"],[0,"&Qfr;"],[1,"&Sfr;"],[0,"&Tfr;"],[0,"&Ufr;"],[0,"&Vfr;"],[0,"&Wfr;"],[0,"&Xfr;"],[0,"&Yfr;"],[1,"&afr;"],[0,"&bfr;"],[0,"&cfr;"],[0,"&dfr;"],[0,"&efr;"],[0,"&ffr;"],[0,"&gfr;"],[0,"&hfr;"],[0,"&ifr;"],[0,"&jfr;"],[0,"&kfr;"],[0,"&lfr;"],[0,"&mfr;"],[0,"&nfr;"],[0,"&ofr;"],[0,"&pfr;"],[0,"&qfr;"],[0,"&rfr;"],[0,"&sfr;"],[0,"&tfr;"],[0,"&ufr;"],[0,"&vfr;"],[0,"&wfr;"],[0,"&xfr;"],[0,"&yfr;"],[0,"&zfr;"],[0,"&Aopf;"],[0,"&Bopf;"],[1,"&Dopf;"],[0,"&Eopf;"],[0,"&Fopf;"],[0,"&Gopf;"],[1,"&Iopf;"],[0,"&Jopf;"],[0,"&Kopf;"],[0,"&Lopf;"],[0,"&Mopf;"],[1,"&Oopf;"],[3,"&Sopf;"],[0,"&Topf;"],[0,"&Uopf;"],[0,"&Vopf;"],[0,"&Wopf;"],[0,"&Xopf;"],[0,"&Yopf;"],[1,"&aopf;"],[0,"&bopf;"],[0,"&copf;"],[0,"&dopf;"],[0,"&eopf;"],[0,"&fopf;"],[0,"&gopf;"],[0,"&hopf;"],[0,"&iopf;"],[0,"&jopf;"],[0,"&kopf;"],[0,"&lopf;"],[0,"&mopf;"],[0,"&nopf;"],[0,"&oopf;"],[0,"&popf;"],[0,"&qopf;"],[0,"&ropf;"],[0,"&sopf;"],[0,"&topf;"],[0,"&uopf;"],[0,"&vopf;"],[0,"&wopf;"],[0,"&xopf;"],[0,"&yopf;"],[0,"&zopf;"]]))}],[8906,"&fflig;"],[0,"&filig;"],[0,"&fllig;"],[0,"&ffilig;"],[0,"&ffllig;"]]))},7531:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.decodeXMLStrict=t.decodeHTML5Strict=t.decodeHTML4Strict=t.decodeHTML5=t.decodeHTML4=t.decodeHTMLAttribute=t.decodeHTMLStrict=t.decodeHTML=t.decodeXML=t.DecodingMode=t.EntityDecoder=t.encodeHTML5=t.encodeHTML4=t.encodeNonAsciiHTML=t.encodeHTML=t.escapeText=t.escapeAttribute=t.escapeUTF8=t.escape=t.encodeXML=t.encode=t.decodeStrict=t.decode=t.EncodingMode=t.EntityLevel=void 0
var n,i,o=r(6347),a=r(3393),s=r(7529)
function u(e,t){if(void 0===t&&(t=n.XML),("number"==typeof t?t:t.level)===n.HTML){var r="object"==typeof t?t.mode:void 0
return(0,o.decodeHTML)(e,r)}return(0,o.decodeXML)(e)}!function(e){e[e.XML=0]="XML",e[e.HTML=1]="HTML"}(n=t.EntityLevel||(t.EntityLevel={})),function(e){e[e.UTF8=0]="UTF8",e[e.ASCII=1]="ASCII",e[e.Extensive=2]="Extensive",e[e.Attribute=3]="Attribute",e[e.Text=4]="Text"}(i=t.EncodingMode||(t.EncodingMode={})),t.decode=u,t.decodeStrict=function(e,t){var r
void 0===t&&(t=n.XML)
var i="number"==typeof t?{level:t}:t
return null!==(r=i.mode)&&void 0!==r||(i.mode=o.DecodingMode.Strict),u(e,i)},t.encode=function(e,t){void 0===t&&(t=n.XML)
var r="number"==typeof t?{level:t}:t
return r.mode===i.UTF8?(0,s.escapeUTF8)(e):r.mode===i.Attribute?(0,s.escapeAttribute)(e):r.mode===i.Text?(0,s.escapeText)(e):r.level===n.HTML?r.mode===i.ASCII?(0,a.encodeNonAsciiHTML)(e):(0,a.encodeHTML)(e):(0,s.encodeXML)(e)}
var l=r(7529)
Object.defineProperty(t,"encodeXML",{enumerable:!0,get:function(){return l.encodeXML}}),Object.defineProperty(t,"escape",{enumerable:!0,get:function(){return l.escape}}),Object.defineProperty(t,"escapeUTF8",{enumerable:!0,get:function(){return l.escapeUTF8}}),Object.defineProperty(t,"escapeAttribute",{enumerable:!0,get:function(){return l.escapeAttribute}}),Object.defineProperty(t,"escapeText",{enumerable:!0,get:function(){return l.escapeText}})
var c=r(3393)
Object.defineProperty(t,"encodeHTML",{enumerable:!0,get:function(){return c.encodeHTML}}),Object.defineProperty(t,"encodeNonAsciiHTML",{enumerable:!0,get:function(){return c.encodeNonAsciiHTML}}),Object.defineProperty(t,"encodeHTML4",{enumerable:!0,get:function(){return c.encodeHTML}}),Object.defineProperty(t,"encodeHTML5",{enumerable:!0,get:function(){return c.encodeHTML}})
var f=r(6347)
Object.defineProperty(t,"EntityDecoder",{enumerable:!0,get:function(){return f.EntityDecoder}}),Object.defineProperty(t,"DecodingMode",{enumerable:!0,get:function(){return f.DecodingMode}}),Object.defineProperty(t,"decodeXML",{enumerable:!0,get:function(){return f.decodeXML}}),Object.defineProperty(t,"decodeHTML",{enumerable:!0,get:function(){return f.decodeHTML}}),Object.defineProperty(t,"decodeHTMLStrict",{enumerable:!0,get:function(){return f.decodeHTMLStrict}}),Object.defineProperty(t,"decodeHTMLAttribute",{enumerable:!0,get:function(){return f.decodeHTMLAttribute}}),Object.defineProperty(t,"decodeHTML4",{enumerable:!0,get:function(){return f.decodeHTML}}),Object.defineProperty(t,"decodeHTML5",{enumerable:!0,get:function(){return f.decodeHTML}}),Object.defineProperty(t,"decodeHTML4Strict",{enumerable:!0,get:function(){return f.decodeHTMLStrict}}),Object.defineProperty(t,"decodeHTML5Strict",{enumerable:!0,get:function(){return f.decodeHTMLStrict}}),Object.defineProperty(t,"decodeXMLStrict",{enumerable:!0,get:function(){return f.decodeXML}})},39:function(e,t,r){var n
e=r.nmd(e),function(i){var o=(e&&e.exports,"object"==typeof global&&global)
o.global!==o&&o.window
var a=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,s=/[\x01-\x7F]/g,u=/[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,l=/<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,c={"­":"shy","‌":"zwnj","‍":"zwj","‎":"lrm","⁣":"ic","⁢":"it","⁡":"af","‏":"rlm","​":"ZeroWidthSpace","⁠":"NoBreak","̑":"DownBreve","⃛":"tdot","⃜":"DotDot","\t":"Tab","\n":"NewLine"," ":"puncsp"," ":"MediumSpace"," ":"thinsp"," ":"hairsp"," ":"emsp13"," ":"ensp"," ":"emsp14"," ":"emsp"," ":"numsp"," ":"nbsp","  ":"ThickSpace","‾":"oline",_:"lowbar","‐":"dash","–":"ndash","—":"mdash","―":"horbar",",":"comma",";":"semi","⁏":"bsemi",":":"colon","⩴":"Colone","!":"excl","¡":"iexcl","?":"quest","¿":"iquest",".":"period","‥":"nldr","…":"mldr","·":"middot","'":"apos","‘":"lsquo","’":"rsquo","‚":"sbquo","‹":"lsaquo","›":"rsaquo",'"':"quot","“":"ldquo","”":"rdquo","„":"bdquo","«":"laquo","»":"raquo","(":"lpar",")":"rpar","[":"lsqb","]":"rsqb","{":"lcub","}":"rcub","⌈":"lceil","⌉":"rceil","⌊":"lfloor","⌋":"rfloor","⦅":"lopar","⦆":"ropar","⦋":"lbrke","⦌":"rbrke","⦍":"lbrkslu","⦎":"rbrksld","⦏":"lbrksld","⦐":"rbrkslu","⦑":"langd","⦒":"rangd","⦓":"lparlt","⦔":"rpargt","⦕":"gtlPar","⦖":"ltrPar","⟦":"lobrk","⟧":"robrk","⟨":"lang","⟩":"rang","⟪":"Lang","⟫":"Rang","⟬":"loang","⟭":"roang","❲":"lbbrk","❳":"rbbrk","‖":"Vert","§":"sect","¶":"para","@":"commat","*":"ast","/":"sol",undefined:null,"&":"amp","#":"num","%":"percnt","‰":"permil","‱":"pertenk","†":"dagger","‡":"Dagger","•":"bull","⁃":"hybull","′":"prime","″":"Prime","‴":"tprime","⁗":"qprime","‵":"bprime","⁁":"caret","`":"grave","´":"acute","˜":"tilde","^":"Hat","¯":"macr","˘":"breve","˙":"dot","¨":"die","˚":"ring","˝":"dblac","¸":"cedil","˛":"ogon","ˆ":"circ","ˇ":"caron","°":"deg","©":"copy","®":"reg","℗":"copysr","℘":"wp","℞":"rx","℧":"mho","℩":"iiota","←":"larr","↚":"nlarr","→":"rarr","↛":"nrarr","↑":"uarr","↓":"darr","↔":"harr","↮":"nharr","↕":"varr","↖":"nwarr","↗":"nearr","↘":"searr","↙":"swarr","↝":"rarrw","↝̸":"nrarrw","↞":"Larr","↟":"Uarr","↠":"Rarr","↡":"Darr","↢":"larrtl","↣":"rarrtl","↤":"mapstoleft","↥":"mapstoup","↦":"map","↧":"mapstodown","↩":"larrhk","↪":"rarrhk","↫":"larrlp","↬":"rarrlp","↭":"harrw","↰":"lsh","↱":"rsh","↲":"ldsh","↳":"rdsh","↵":"crarr","↶":"cularr","↷":"curarr","↺":"olarr","↻":"orarr","↼":"lharu","↽":"lhard","↾":"uharr","↿":"uharl","⇀":"rharu","⇁":"rhard","⇂":"dharr","⇃":"dharl","⇄":"rlarr","⇅":"udarr","⇆":"lrarr","⇇":"llarr","⇈":"uuarr","⇉":"rrarr","⇊":"ddarr","⇋":"lrhar","⇌":"rlhar","⇐":"lArr","⇍":"nlArr","⇑":"uArr","⇒":"rArr","⇏":"nrArr","⇓":"dArr","⇔":"iff","⇎":"nhArr","⇕":"vArr","⇖":"nwArr","⇗":"neArr","⇘":"seArr","⇙":"swArr","⇚":"lAarr","⇛":"rAarr","⇝":"zigrarr","⇤":"larrb","⇥":"rarrb","⇵":"duarr","⇽":"loarr","⇾":"roarr","⇿":"hoarr","∀":"forall","∁":"comp","∂":"part","∂̸":"npart","∃":"exist","∄":"nexist","∅":"empty","∇":"Del","∈":"in","∉":"notin","∋":"ni","∌":"notni","϶":"bepsi","∏":"prod","∐":"coprod","∑":"sum","+":"plus","±":"pm","÷":"div","×":"times","<":"lt","≮":"nlt","<⃒":"nvlt","=":"equals","≠":"ne","=⃥":"bne","⩵":"Equal",">":"gt","≯":"ngt",">⃒":"nvgt","¬":"not","|":"vert","¦":"brvbar","−":"minus","∓":"mp","∔":"plusdo","⁄":"frasl","∖":"setmn","∗":"lowast","∘":"compfn","√":"Sqrt","∝":"prop","∞":"infin","∟":"angrt","∠":"ang","∠⃒":"nang","∡":"angmsd","∢":"angsph","∣":"mid","∤":"nmid","∥":"par","∦":"npar","∧":"and","∨":"or","∩":"cap","∩︀":"caps","∪":"cup","∪︀":"cups","∫":"int","∬":"Int","∭":"tint","⨌":"qint","∮":"oint","∯":"Conint","∰":"Cconint","∱":"cwint","∲":"cwconint","∳":"awconint","∴":"there4","∵":"becaus","∶":"ratio","∷":"Colon","∸":"minusd","∺":"mDDot","∻":"homtht","∼":"sim","≁":"nsim","∼⃒":"nvsim","∽":"bsim","∽̱":"race","∾":"ac","∾̳":"acE","∿":"acd","≀":"wr","≂":"esim","≂̸":"nesim","≃":"sime","≄":"nsime","≅":"cong","≇":"ncong","≆":"simne","≈":"ap","≉":"nap","≊":"ape","≋":"apid","≋̸":"napid","≌":"bcong","≍":"CupCap","≭":"NotCupCap","≍⃒":"nvap","≎":"bump","≎̸":"nbump","≏":"bumpe","≏̸":"nbumpe","≐":"doteq","≐̸":"nedot","≑":"eDot","≒":"efDot","≓":"erDot","≔":"colone","≕":"ecolon","≖":"ecir","≗":"cire","≙":"wedgeq","≚":"veeeq","≜":"trie","≟":"equest","≡":"equiv","≢":"nequiv","≡⃥":"bnequiv","≤":"le","≰":"nle","≤⃒":"nvle","≥":"ge","≱":"nge","≥⃒":"nvge","≦":"lE","≦̸":"nlE","≧":"gE","≧̸":"ngE","≨︀":"lvnE","≨":"lnE","≩":"gnE","≩︀":"gvnE","≪":"ll","≪̸":"nLtv","≪⃒":"nLt","≫":"gg","≫̸":"nGtv","≫⃒":"nGt","≬":"twixt","≲":"lsim","≴":"nlsim","≳":"gsim","≵":"ngsim","≶":"lg","≸":"ntlg","≷":"gl","≹":"ntgl","≺":"pr","⊀":"npr","≻":"sc","⊁":"nsc","≼":"prcue","⋠":"nprcue","≽":"sccue","⋡":"nsccue","≾":"prsim","≿":"scsim","≿̸":"NotSucceedsTilde","⊂":"sub","⊄":"nsub","⊂⃒":"vnsub","⊃":"sup","⊅":"nsup","⊃⃒":"vnsup","⊆":"sube","⊈":"nsube","⊇":"supe","⊉":"nsupe","⊊︀":"vsubne","⊊":"subne","⊋︀":"vsupne","⊋":"supne","⊍":"cupdot","⊎":"uplus","⊏":"sqsub","⊏̸":"NotSquareSubset","⊐":"sqsup","⊐̸":"NotSquareSuperset","⊑":"sqsube","⋢":"nsqsube","⊒":"sqsupe","⋣":"nsqsupe","⊓":"sqcap","⊓︀":"sqcaps","⊔":"sqcup","⊔︀":"sqcups","⊕":"oplus","⊖":"ominus","⊗":"otimes","⊘":"osol","⊙":"odot","⊚":"ocir","⊛":"oast","⊝":"odash","⊞":"plusb","⊟":"minusb","⊠":"timesb","⊡":"sdotb","⊢":"vdash","⊬":"nvdash","⊣":"dashv","⊤":"top","⊥":"bot","⊧":"models","⊨":"vDash","⊭":"nvDash","⊩":"Vdash","⊮":"nVdash","⊪":"Vvdash","⊫":"VDash","⊯":"nVDash","⊰":"prurel","⊲":"vltri","⋪":"nltri","⊳":"vrtri","⋫":"nrtri","⊴":"ltrie","⋬":"nltrie","⊴⃒":"nvltrie","⊵":"rtrie","⋭":"nrtrie","⊵⃒":"nvrtrie","⊶":"origof","⊷":"imof","⊸":"mumap","⊹":"hercon","⊺":"intcal","⊻":"veebar","⊽":"barvee","⊾":"angrtvb","⊿":"lrtri","⋀":"Wedge","⋁":"Vee","⋂":"xcap","⋃":"xcup","⋄":"diam","⋅":"sdot","⋆":"Star","⋇":"divonx","⋈":"bowtie","⋉":"ltimes","⋊":"rtimes","⋋":"lthree","⋌":"rthree","⋍":"bsime","⋎":"cuvee","⋏":"cuwed","⋐":"Sub","⋑":"Sup","⋒":"Cap","⋓":"Cup","⋔":"fork","⋕":"epar","⋖":"ltdot","⋗":"gtdot","⋘":"Ll","⋘̸":"nLl","⋙":"Gg","⋙̸":"nGg","⋚︀":"lesg","⋚":"leg","⋛":"gel","⋛︀":"gesl","⋞":"cuepr","⋟":"cuesc","⋦":"lnsim","⋧":"gnsim","⋨":"prnsim","⋩":"scnsim","⋮":"vellip","⋯":"ctdot","⋰":"utdot","⋱":"dtdot","⋲":"disin","⋳":"isinsv","⋴":"isins","⋵":"isindot","⋵̸":"notindot","⋶":"notinvc","⋷":"notinvb","⋹":"isinE","⋹̸":"notinE","⋺":"nisd","⋻":"xnis","⋼":"nis","⋽":"notnivc","⋾":"notnivb","⌅":"barwed","⌆":"Barwed","⌌":"drcrop","⌍":"dlcrop","⌎":"urcrop","⌏":"ulcrop","⌐":"bnot","⌒":"profline","⌓":"profsurf","⌕":"telrec","⌖":"target","⌜":"ulcorn","⌝":"urcorn","⌞":"dlcorn","⌟":"drcorn","⌢":"frown","⌣":"smile","⌭":"cylcty","⌮":"profalar","⌶":"topbot","⌽":"ovbar","⌿":"solbar","⍼":"angzarr","⎰":"lmoust","⎱":"rmoust","⎴":"tbrk","⎵":"bbrk","⎶":"bbrktbrk","⏜":"OverParenthesis","⏝":"UnderParenthesis","⏞":"OverBrace","⏟":"UnderBrace","⏢":"trpezium","⏧":"elinters","␣":"blank","─":"boxh","│":"boxv","┌":"boxdr","┐":"boxdl","└":"boxur","┘":"boxul","├":"boxvr","┤":"boxvl","┬":"boxhd","┴":"boxhu","┼":"boxvh","═":"boxH","║":"boxV","╒":"boxdR","╓":"boxDr","╔":"boxDR","╕":"boxdL","╖":"boxDl","╗":"boxDL","╘":"boxuR","╙":"boxUr","╚":"boxUR","╛":"boxuL","╜":"boxUl","╝":"boxUL","╞":"boxvR","╟":"boxVr","╠":"boxVR","╡":"boxvL","╢":"boxVl","╣":"boxVL","╤":"boxHd","╥":"boxhD","╦":"boxHD","╧":"boxHu","╨":"boxhU","╩":"boxHU","╪":"boxvH","╫":"boxVh","╬":"boxVH","▀":"uhblk","▄":"lhblk","█":"block","░":"blk14","▒":"blk12","▓":"blk34","□":"squ","▪":"squf","▫":"EmptyVerySmallSquare","▭":"rect","▮":"marker","▱":"fltns","△":"xutri","▴":"utrif","▵":"utri","▸":"rtrif","▹":"rtri","▽":"xdtri","▾":"dtrif","▿":"dtri","◂":"ltrif","◃":"ltri","◊":"loz","○":"cir","◬":"tridot","◯":"xcirc","◸":"ultri","◹":"urtri","◺":"lltri","◻":"EmptySmallSquare","◼":"FilledSmallSquare","★":"starf","☆":"star","☎":"phone","♀":"female","♂":"male","♠":"spades","♣":"clubs","♥":"hearts","♦":"diams","♪":"sung","✓":"check","✗":"cross","✠":"malt","✶":"sext","❘":"VerticalSeparator","⟈":"bsolhsub","⟉":"suphsol","⟵":"xlarr","⟶":"xrarr","⟷":"xharr","⟸":"xlArr","⟹":"xrArr","⟺":"xhArr","⟼":"xmap","⟿":"dzigrarr","⤂":"nvlArr","⤃":"nvrArr","⤄":"nvHarr","⤅":"Map","⤌":"lbarr","⤍":"rbarr","⤎":"lBarr","⤏":"rBarr","⤐":"RBarr","⤑":"DDotrahd","⤒":"UpArrowBar","⤓":"DownArrowBar","⤖":"Rarrtl","⤙":"latail","⤚":"ratail","⤛":"lAtail","⤜":"rAtail","⤝":"larrfs","⤞":"rarrfs","⤟":"larrbfs","⤠":"rarrbfs","⤣":"nwarhk","⤤":"nearhk","⤥":"searhk","⤦":"swarhk","⤧":"nwnear","⤨":"toea","⤩":"tosa","⤪":"swnwar","⤳":"rarrc","⤳̸":"nrarrc","⤵":"cudarrr","⤶":"ldca","⤷":"rdca","⤸":"cudarrl","⤹":"larrpl","⤼":"curarrm","⤽":"cularrp","⥅":"rarrpl","⥈":"harrcir","⥉":"Uarrocir","⥊":"lurdshar","⥋":"ldrushar","⥎":"LeftRightVector","⥏":"RightUpDownVector","⥐":"DownLeftRightVector","⥑":"LeftUpDownVector","⥒":"LeftVectorBar","⥓":"RightVectorBar","⥔":"RightUpVectorBar","⥕":"RightDownVectorBar","⥖":"DownLeftVectorBar","⥗":"DownRightVectorBar","⥘":"LeftUpVectorBar","⥙":"LeftDownVectorBar","⥚":"LeftTeeVector","⥛":"RightTeeVector","⥜":"RightUpTeeVector","⥝":"RightDownTeeVector","⥞":"DownLeftTeeVector","⥟":"DownRightTeeVector","⥠":"LeftUpTeeVector","⥡":"LeftDownTeeVector","⥢":"lHar","⥣":"uHar","⥤":"rHar","⥥":"dHar","⥦":"luruhar","⥧":"ldrdhar","⥨":"ruluhar","⥩":"rdldhar","⥪":"lharul","⥫":"llhard","⥬":"rharul","⥭":"lrhard","⥮":"udhar","⥯":"duhar","⥰":"RoundImplies","⥱":"erarr","⥲":"simrarr","⥳":"larrsim","⥴":"rarrsim","⥵":"rarrap","⥶":"ltlarr","⥸":"gtrarr","⥹":"subrarr","⥻":"suplarr","⥼":"lfisht","⥽":"rfisht","⥾":"ufisht","⥿":"dfisht","⦚":"vzigzag","⦜":"vangrt","⦝":"angrtvbd","⦤":"ange","⦥":"range","⦦":"dwangle","⦧":"uwangle","⦨":"angmsdaa","⦩":"angmsdab","⦪":"angmsdac","⦫":"angmsdad","⦬":"angmsdae","⦭":"angmsdaf","⦮":"angmsdag","⦯":"angmsdah","⦰":"bemptyv","⦱":"demptyv","⦲":"cemptyv","⦳":"raemptyv","⦴":"laemptyv","⦵":"ohbar","⦶":"omid","⦷":"opar","⦹":"operp","⦻":"olcross","⦼":"odsold","⦾":"olcir","⦿":"ofcir","⧀":"olt","⧁":"ogt","⧂":"cirscir","⧃":"cirE","⧄":"solb","⧅":"bsolb","⧉":"boxbox","⧍":"trisb","⧎":"rtriltri","⧏":"LeftTriangleBar","⧏̸":"NotLeftTriangleBar","⧐":"RightTriangleBar","⧐̸":"NotRightTriangleBar","⧜":"iinfin","⧝":"infintie","⧞":"nvinfin","⧣":"eparsl","⧤":"smeparsl","⧥":"eqvparsl","⧫":"lozf","⧴":"RuleDelayed","⧶":"dsol","⨀":"xodot","⨁":"xoplus","⨂":"xotime","⨄":"xuplus","⨆":"xsqcup","⨍":"fpartint","⨐":"cirfnint","⨑":"awint","⨒":"rppolint","⨓":"scpolint","⨔":"npolint","⨕":"pointint","⨖":"quatint","⨗":"intlarhk","⨢":"pluscir","⨣":"plusacir","⨤":"simplus","⨥":"plusdu","⨦":"plussim","⨧":"plustwo","⨩":"mcomma","⨪":"minusdu","⨭":"loplus","⨮":"roplus","⨯":"Cross","⨰":"timesd","⨱":"timesbar","⨳":"smashp","⨴":"lotimes","⨵":"rotimes","⨶":"otimesas","⨷":"Otimes","⨸":"odiv","⨹":"triplus","⨺":"triminus","⨻":"tritime","⨼":"iprod","⨿":"amalg","⩀":"capdot","⩂":"ncup","⩃":"ncap","⩄":"capand","⩅":"cupor","⩆":"cupcap","⩇":"capcup","⩈":"cupbrcap","⩉":"capbrcup","⩊":"cupcup","⩋":"capcap","⩌":"ccups","⩍":"ccaps","⩐":"ccupssm","⩓":"And","⩔":"Or","⩕":"andand","⩖":"oror","⩗":"orslope","⩘":"andslope","⩚":"andv","⩛":"orv","⩜":"andd","⩝":"ord","⩟":"wedbar","⩦":"sdote","⩪":"simdot","⩭":"congdot","⩭̸":"ncongdot","⩮":"easter","⩯":"apacir","⩰":"apE","⩰̸":"napE","⩱":"eplus","⩲":"pluse","⩳":"Esim","⩷":"eDDot","⩸":"equivDD","⩹":"ltcir","⩺":"gtcir","⩻":"ltquest","⩼":"gtquest","⩽":"les","⩽̸":"nles","⩾":"ges","⩾̸":"nges","⩿":"lesdot","⪀":"gesdot","⪁":"lesdoto","⪂":"gesdoto","⪃":"lesdotor","⪄":"gesdotol","⪅":"lap","⪆":"gap","⪇":"lne","⪈":"gne","⪉":"lnap","⪊":"gnap","⪋":"lEg","⪌":"gEl","⪍":"lsime","⪎":"gsime","⪏":"lsimg","⪐":"gsiml","⪑":"lgE","⪒":"glE","⪓":"lesges","⪔":"gesles","⪕":"els","⪖":"egs","⪗":"elsdot","⪘":"egsdot","⪙":"el","⪚":"eg","⪝":"siml","⪞":"simg","⪟":"simlE","⪠":"simgE","⪡":"LessLess","⪡̸":"NotNestedLessLess","⪢":"GreaterGreater","⪢̸":"NotNestedGreaterGreater","⪤":"glj","⪥":"gla","⪦":"ltcc","⪧":"gtcc","⪨":"lescc","⪩":"gescc","⪪":"smt","⪫":"lat","⪬":"smte","⪬︀":"smtes","⪭":"late","⪭︀":"lates","⪮":"bumpE","⪯":"pre","⪯̸":"npre","⪰":"sce","⪰̸":"nsce","⪳":"prE","⪴":"scE","⪵":"prnE","⪶":"scnE","⪷":"prap","⪸":"scap","⪹":"prnap","⪺":"scnap","⪻":"Pr","⪼":"Sc","⪽":"subdot","⪾":"supdot","⪿":"subplus","⫀":"supplus","⫁":"submult","⫂":"supmult","⫃":"subedot","⫄":"supedot","⫅":"subE","⫅̸":"nsubE","⫆":"supE","⫆̸":"nsupE","⫇":"subsim","⫈":"supsim","⫋︀":"vsubnE","⫋":"subnE","⫌︀":"vsupnE","⫌":"supnE","⫏":"csub","⫐":"csup","⫑":"csube","⫒":"csupe","⫓":"subsup","⫔":"supsub","⫕":"subsub","⫖":"supsup","⫗":"suphsub","⫘":"supdsub","⫙":"forkv","⫚":"topfork","⫛":"mlcp","⫤":"Dashv","⫦":"Vdashl","⫧":"Barv","⫨":"vBar","⫩":"vBarv","⫫":"Vbar","⫬":"Not","⫭":"bNot","⫮":"rnmid","⫯":"cirmid","⫰":"midcir","⫱":"topcir","⫲":"nhpar","⫳":"parsim","⫽":"parsl","⫽⃥":"nparsl","♭":"flat","♮":"natur","♯":"sharp","¤":"curren","¢":"cent",$:"dollar","£":"pound","¥":"yen","€":"euro","¹":"sup1","½":"half","⅓":"frac13","¼":"frac14","⅕":"frac15","⅙":"frac16","⅛":"frac18","²":"sup2","⅔":"frac23","⅖":"frac25","³":"sup3","¾":"frac34","⅗":"frac35","⅜":"frac38","⅘":"frac45","⅚":"frac56","⅝":"frac58","⅞":"frac78","𝒶":"ascr","𝕒":"aopf","𝔞":"afr","𝔸":"Aopf","𝔄":"Afr","𝒜":"Ascr","ª":"ordf","á":"aacute","Á":"Aacute","à":"agrave","À":"Agrave","ă":"abreve","Ă":"Abreve","â":"acirc","Â":"Acirc","å":"aring","Å":"angst","ä":"auml","Ä":"Auml","ã":"atilde","Ã":"Atilde","ą":"aogon","Ą":"Aogon","ā":"amacr","Ā":"Amacr","æ":"aelig","Æ":"AElig","𝒷":"bscr","𝕓":"bopf","𝔟":"bfr","𝔹":"Bopf","ℬ":"Bscr","𝔅":"Bfr","𝔠":"cfr","𝒸":"cscr","𝕔":"copf","ℭ":"Cfr","𝒞":"Cscr","ℂ":"Copf","ć":"cacute","Ć":"Cacute","ĉ":"ccirc","Ĉ":"Ccirc","č":"ccaron","Č":"Ccaron","ċ":"cdot","Ċ":"Cdot","ç":"ccedil","Ç":"Ccedil","℅":"incare","𝔡":"dfr","ⅆ":"dd","𝕕":"dopf","𝒹":"dscr","𝒟":"Dscr","𝔇":"Dfr","ⅅ":"DD","𝔻":"Dopf","ď":"dcaron","Ď":"Dcaron","đ":"dstrok","Đ":"Dstrok","ð":"eth","Ð":"ETH","ⅇ":"ee","ℯ":"escr","𝔢":"efr","𝕖":"eopf","ℰ":"Escr","𝔈":"Efr","𝔼":"Eopf","é":"eacute","É":"Eacute","è":"egrave","È":"Egrave","ê":"ecirc","Ê":"Ecirc","ě":"ecaron","Ě":"Ecaron","ë":"euml","Ë":"Euml","ė":"edot","Ė":"Edot","ę":"eogon","Ę":"Eogon","ē":"emacr","Ē":"Emacr","𝔣":"ffr","𝕗":"fopf","𝒻":"fscr","𝔉":"Ffr","𝔽":"Fopf","ℱ":"Fscr","ﬀ":"fflig","ﬃ":"ffilig","ﬄ":"ffllig","ﬁ":"filig",fj:"fjlig","ﬂ":"fllig","ƒ":"fnof","ℊ":"gscr","𝕘":"gopf","𝔤":"gfr","𝒢":"Gscr","𝔾":"Gopf","𝔊":"Gfr","ǵ":"gacute","ğ":"gbreve","Ğ":"Gbreve","ĝ":"gcirc","Ĝ":"Gcirc","ġ":"gdot","Ġ":"Gdot","Ģ":"Gcedil","𝔥":"hfr","ℎ":"planckh","𝒽":"hscr","𝕙":"hopf","ℋ":"Hscr","ℌ":"Hfr","ℍ":"Hopf","ĥ":"hcirc","Ĥ":"Hcirc","ℏ":"hbar","ħ":"hstrok","Ħ":"Hstrok","𝕚":"iopf","𝔦":"ifr","𝒾":"iscr","ⅈ":"ii","𝕀":"Iopf","ℐ":"Iscr","ℑ":"Im","í":"iacute","Í":"Iacute","ì":"igrave","Ì":"Igrave","î":"icirc","Î":"Icirc","ï":"iuml","Ï":"Iuml","ĩ":"itilde","Ĩ":"Itilde","İ":"Idot","į":"iogon","Į":"Iogon","ī":"imacr","Ī":"Imacr","ĳ":"ijlig","Ĳ":"IJlig","ı":"imath","𝒿":"jscr","𝕛":"jopf","𝔧":"jfr","𝒥":"Jscr","𝔍":"Jfr","𝕁":"Jopf","ĵ":"jcirc","Ĵ":"Jcirc","ȷ":"jmath","𝕜":"kopf","𝓀":"kscr","𝔨":"kfr","𝒦":"Kscr","𝕂":"Kopf","𝔎":"Kfr","ķ":"kcedil","Ķ":"Kcedil","𝔩":"lfr","𝓁":"lscr","ℓ":"ell","𝕝":"lopf","ℒ":"Lscr","𝔏":"Lfr","𝕃":"Lopf","ĺ":"lacute","Ĺ":"Lacute","ľ":"lcaron","Ľ":"Lcaron","ļ":"lcedil","Ļ":"Lcedil","ł":"lstrok","Ł":"Lstrok","ŀ":"lmidot","Ŀ":"Lmidot","𝔪":"mfr","𝕞":"mopf","𝓂":"mscr","𝔐":"Mfr","𝕄":"Mopf","ℳ":"Mscr","𝔫":"nfr","𝕟":"nopf","𝓃":"nscr","ℕ":"Nopf","𝒩":"Nscr","𝔑":"Nfr","ń":"nacute","Ń":"Nacute","ň":"ncaron","Ň":"Ncaron","ñ":"ntilde","Ñ":"Ntilde","ņ":"ncedil","Ņ":"Ncedil","№":"numero","ŋ":"eng","Ŋ":"ENG","𝕠":"oopf","𝔬":"ofr","ℴ":"oscr","𝒪":"Oscr","𝔒":"Ofr","𝕆":"Oopf","º":"ordm","ó":"oacute","Ó":"Oacute","ò":"ograve","Ò":"Ograve","ô":"ocirc","Ô":"Ocirc","ö":"ouml","Ö":"Ouml","ő":"odblac","Ő":"Odblac","õ":"otilde","Õ":"Otilde","ø":"oslash","Ø":"Oslash","ō":"omacr","Ō":"Omacr","œ":"oelig","Œ":"OElig","𝔭":"pfr","𝓅":"pscr","𝕡":"popf","ℙ":"Popf","𝔓":"Pfr","𝒫":"Pscr","𝕢":"qopf","𝔮":"qfr","𝓆":"qscr","𝒬":"Qscr","𝔔":"Qfr","ℚ":"Qopf","ĸ":"kgreen","𝔯":"rfr","𝕣":"ropf","𝓇":"rscr","ℛ":"Rscr","ℜ":"Re","ℝ":"Ropf","ŕ":"racute","Ŕ":"Racute","ř":"rcaron","Ř":"Rcaron","ŗ":"rcedil","Ŗ":"Rcedil","𝕤":"sopf","𝓈":"sscr","𝔰":"sfr","𝕊":"Sopf","𝔖":"Sfr","𝒮":"Sscr","Ⓢ":"oS","ś":"sacute","Ś":"Sacute","ŝ":"scirc","Ŝ":"Scirc","š":"scaron","Š":"Scaron","ş":"scedil","Ş":"Scedil","ß":"szlig","𝔱":"tfr","𝓉":"tscr","𝕥":"topf","𝒯":"Tscr","𝔗":"Tfr","𝕋":"Topf","ť":"tcaron","Ť":"Tcaron","ţ":"tcedil","Ţ":"Tcedil","™":"trade","ŧ":"tstrok","Ŧ":"Tstrok","𝓊":"uscr","𝕦":"uopf","𝔲":"ufr","𝕌":"Uopf","𝔘":"Ufr","𝒰":"Uscr","ú":"uacute","Ú":"Uacute","ù":"ugrave","Ù":"Ugrave","ŭ":"ubreve","Ŭ":"Ubreve","û":"ucirc","Û":"Ucirc","ů":"uring","Ů":"Uring","ü":"uuml","Ü":"Uuml","ű":"udblac","Ű":"Udblac","ũ":"utilde","Ũ":"Utilde","ų":"uogon","Ų":"Uogon","ū":"umacr","Ū":"Umacr","𝔳":"vfr","𝕧":"vopf","𝓋":"vscr","𝔙":"Vfr","𝕍":"Vopf","𝒱":"Vscr","𝕨":"wopf","𝓌":"wscr","𝔴":"wfr","𝒲":"Wscr","𝕎":"Wopf","𝔚":"Wfr","ŵ":"wcirc","Ŵ":"Wcirc","𝔵":"xfr","𝓍":"xscr","𝕩":"xopf","𝕏":"Xopf","𝔛":"Xfr","𝒳":"Xscr","𝔶":"yfr","𝓎":"yscr","𝕪":"yopf","𝒴":"Yscr","𝔜":"Yfr","𝕐":"Yopf","ý":"yacute","Ý":"Yacute","ŷ":"ycirc","Ŷ":"Ycirc","ÿ":"yuml","Ÿ":"Yuml","𝓏":"zscr","𝔷":"zfr","𝕫":"zopf","ℨ":"Zfr","ℤ":"Zopf","𝒵":"Zscr","ź":"zacute","Ź":"Zacute","ž":"zcaron","Ž":"Zcaron","ż":"zdot","Ż":"Zdot","Ƶ":"imped","þ":"thorn","Þ":"THORN","ŉ":"napos","α":"alpha","Α":"Alpha","β":"beta","Β":"Beta","γ":"gamma","Γ":"Gamma","δ":"delta","Δ":"Delta","ε":"epsi","ϵ":"epsiv","Ε":"Epsilon","ϝ":"gammad","Ϝ":"Gammad","ζ":"zeta","Ζ":"Zeta","η":"eta","Η":"Eta","θ":"theta","ϑ":"thetav","Θ":"Theta","ι":"iota","Ι":"Iota","κ":"kappa","ϰ":"kappav","Κ":"Kappa","λ":"lambda","Λ":"Lambda","μ":"mu","µ":"micro","Μ":"Mu","ν":"nu","Ν":"Nu","ξ":"xi","Ξ":"Xi","ο":"omicron","Ο":"Omicron","π":"pi","ϖ":"piv","Π":"Pi","ρ":"rho","ϱ":"rhov","Ρ":"Rho","σ":"sigma","Σ":"Sigma","ς":"sigmaf","τ":"tau","Τ":"Tau","υ":"upsi","Υ":"Upsilon","ϒ":"Upsi","φ":"phi","ϕ":"phiv","Φ":"Phi","χ":"chi","Χ":"Chi","ψ":"psi","Ψ":"Psi","ω":"omega","Ω":"ohm","а":"acy","А":"Acy","б":"bcy","Б":"Bcy","в":"vcy","В":"Vcy","г":"gcy","Г":"Gcy","ѓ":"gjcy","Ѓ":"GJcy","д":"dcy","Д":"Dcy","ђ":"djcy","Ђ":"DJcy","е":"iecy","Е":"IEcy","ё":"iocy","Ё":"IOcy","є":"jukcy","Є":"Jukcy","ж":"zhcy","Ж":"ZHcy","з":"zcy","З":"Zcy","ѕ":"dscy","Ѕ":"DScy","и":"icy","И":"Icy","і":"iukcy","І":"Iukcy","ї":"yicy","Ї":"YIcy","й":"jcy","Й":"Jcy","ј":"jsercy","Ј":"Jsercy","к":"kcy","К":"Kcy","ќ":"kjcy","Ќ":"KJcy","л":"lcy","Л":"Lcy","љ":"ljcy","Љ":"LJcy","м":"mcy","М":"Mcy","н":"ncy","Н":"Ncy","њ":"njcy","Њ":"NJcy","о":"ocy","О":"Ocy","п":"pcy","П":"Pcy","р":"rcy","Р":"Rcy","с":"scy","С":"Scy","т":"tcy","Т":"Tcy","ћ":"tshcy","Ћ":"TSHcy","у":"ucy","У":"Ucy","ў":"ubrcy","Ў":"Ubrcy","ф":"fcy","Ф":"Fcy","х":"khcy","Х":"KHcy","ц":"tscy","Ц":"TScy","ч":"chcy","Ч":"CHcy","џ":"dzcy","Џ":"DZcy","ш":"shcy","Ш":"SHcy","щ":"shchcy","Щ":"SHCHcy","ъ":"hardcy","Ъ":"HARDcy","ы":"ycy","Ы":"Ycy","ь":"softcy","Ь":"SOFTcy","э":"ecy","Э":"Ecy","ю":"yucy","Ю":"YUcy","я":"yacy","Я":"YAcy","ℵ":"aleph","ℶ":"beth","ℷ":"gimel","ℸ":"daleth"},f=/["&'<>`]/g,p={'"':"&quot;","&":"&amp;","'":"&#x27;","<":"&lt;",">":"&gt;","`":"&#x60;"},d=/&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,h=/[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,g=/&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,m={aacute:"á",Aacute:"Á",abreve:"ă",Abreve:"Ă",ac:"∾",acd:"∿",acE:"∾̳",acirc:"â",Acirc:"Â",acute:"´",acy:"а",Acy:"А",aelig:"æ",AElig:"Æ",af:"⁡",afr:"𝔞",Afr:"𝔄",agrave:"à",Agrave:"À",alefsym:"ℵ",aleph:"ℵ",alpha:"α",Alpha:"Α",amacr:"ā",Amacr:"Ā",amalg:"⨿",amp:"&",AMP:"&",and:"∧",And:"⩓",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",aogon:"ą",Aogon:"Ą",aopf:"𝕒",Aopf:"𝔸",ap:"≈",apacir:"⩯",ape:"≊",apE:"⩰",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",aring:"å",Aring:"Å",ascr:"𝒶",Ascr:"𝒜",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",atilde:"ã",Atilde:"Ã",auml:"ä",Auml:"Ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",barwed:"⌅",Barwed:"⌆",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",Bcy:"Б",bdquo:"„",becaus:"∵",because:"∵",Because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",beta:"β",Beta:"Β",beth:"ℶ",between:"≬",bfr:"𝔟",Bfr:"𝔅",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bNot:"⫭",bopf:"𝕓",Bopf:"𝔹",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxdl:"┐",boxdL:"╕",boxDl:"╖",boxDL:"╗",boxdr:"┌",boxdR:"╒",boxDr:"╓",boxDR:"╔",boxh:"─",boxH:"═",boxhd:"┬",boxhD:"╥",boxHd:"╤",boxHD:"╦",boxhu:"┴",boxhU:"╨",boxHu:"╧",boxHU:"╩",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxul:"┘",boxuL:"╛",boxUl:"╜",boxUL:"╝",boxur:"└",boxuR:"╘",boxUr:"╙",boxUR:"╚",boxv:"│",boxV:"║",boxvh:"┼",boxvH:"╪",boxVh:"╫",boxVH:"╬",boxvl:"┤",boxvL:"╡",boxVl:"╢",boxVL:"╣",boxvr:"├",boxvR:"╞",boxVr:"╟",boxVR:"╠",bprime:"‵",breve:"˘",Breve:"˘",brvbar:"¦",bscr:"𝒷",Bscr:"ℬ",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpe:"≏",bumpE:"⪮",bumpeq:"≏",Bumpeq:"≎",cacute:"ć",Cacute:"Ć",cap:"∩",Cap:"⋒",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",ccaron:"č",Ccaron:"Č",ccedil:"ç",Ccedil:"Ç",ccirc:"ĉ",Ccirc:"Ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",Cdot:"Ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",CenterDot:"·",cfr:"𝔠",Cfr:"ℭ",chcy:"ч",CHcy:"Ч",check:"✓",checkmark:"✓",chi:"χ",Chi:"Χ",cir:"○",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cire:"≗",cirE:"⧃",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",colon:":",Colon:"∷",colone:"≔",Colone:"⩴",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",conint:"∮",Conint:"∯",ContourIntegral:"∮",copf:"𝕔",Copf:"ℂ",coprod:"∐",Coproduct:"∐",copy:"©",COPY:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",cross:"✗",Cross:"⨯",cscr:"𝒸",Cscr:"𝒞",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",Cup:"⋓",cupbrcap:"⩈",cupcap:"⩆",CupCap:"≍",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dagger:"†",Dagger:"‡",daleth:"ℸ",darr:"↓",dArr:"⇓",Darr:"↡",dash:"‐",dashv:"⊣",Dashv:"⫤",dbkarow:"⤏",dblac:"˝",dcaron:"ď",Dcaron:"Ď",dcy:"д",Dcy:"Д",dd:"ⅆ",DD:"ⅅ",ddagger:"‡",ddarr:"⇊",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",delta:"δ",Delta:"Δ",demptyv:"⦱",dfisht:"⥿",dfr:"𝔡",Dfr:"𝔇",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",diamond:"⋄",Diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",DJcy:"Ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"𝕕",Dopf:"𝔻",dot:"˙",Dot:"¨",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",downarrow:"↓",Downarrow:"⇓",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"𝒹",Dscr:"𝒟",dscy:"ѕ",DScy:"Ѕ",dsol:"⧶",dstrok:"đ",Dstrok:"Đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",DZcy:"Џ",dzigrarr:"⟿",eacute:"é",Eacute:"É",easter:"⩮",ecaron:"ě",Ecaron:"Ě",ecir:"≖",ecirc:"ê",Ecirc:"Ê",ecolon:"≕",ecy:"э",Ecy:"Э",eDDot:"⩷",edot:"ė",eDot:"≑",Edot:"Ė",ee:"ⅇ",efDot:"≒",efr:"𝔢",Efr:"𝔈",eg:"⪚",egrave:"è",Egrave:"È",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",Emacr:"Ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp:" ",emsp13:" ",emsp14:" ",eng:"ŋ",ENG:"Ŋ",ensp:" ",eogon:"ę",Eogon:"Ę",eopf:"𝕖",Eopf:"𝔼",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",Epsilon:"Ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",escr:"ℯ",Escr:"ℰ",esdot:"≐",esim:"≂",Esim:"⩳",eta:"η",Eta:"Η",eth:"ð",ETH:"Ð",euml:"ë",Euml:"Ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",exponentiale:"ⅇ",ExponentialE:"ⅇ",fallingdotseq:"≒",fcy:"ф",Fcy:"Ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"𝔣",Ffr:"𝔉",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"𝕗",Fopf:"𝔽",forall:"∀",ForAll:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",Fscr:"ℱ",gacute:"ǵ",gamma:"γ",Gamma:"Γ",gammad:"ϝ",Gammad:"Ϝ",gap:"⪆",gbreve:"ğ",Gbreve:"Ğ",Gcedil:"Ģ",gcirc:"ĝ",Gcirc:"Ĝ",gcy:"г",Gcy:"Г",gdot:"ġ",Gdot:"Ġ",ge:"≥",gE:"≧",gel:"⋛",gEl:"⪌",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"𝔤",Gfr:"𝔊",gg:"≫",Gg:"⋙",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",GJcy:"Ѓ",gl:"≷",gla:"⪥",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gnE:"≩",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"𝕘",Gopf:"𝔾",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",gscr:"ℊ",Gscr:"𝒢",gsim:"≳",gsime:"⪎",gsiml:"⪐",gt:">",Gt:"≫",GT:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",hardcy:"ъ",HARDcy:"Ъ",harr:"↔",hArr:"⇔",harrcir:"⥈",harrw:"↭",Hat:"^",hbar:"ℏ",hcirc:"ĥ",Hcirc:"Ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",Hfr:"ℌ",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",Hopf:"ℍ",horbar:"―",HorizontalLine:"─",hscr:"𝒽",Hscr:"ℋ",hslash:"ℏ",hstrok:"ħ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",iacute:"í",Iacute:"Í",ic:"⁣",icirc:"î",Icirc:"Î",icy:"и",Icy:"И",Idot:"İ",iecy:"е",IEcy:"Е",iexcl:"¡",iff:"⇔",ifr:"𝔦",Ifr:"ℑ",igrave:"ì",Igrave:"Ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",IJlig:"Ĳ",Im:"ℑ",imacr:"ī",Imacr:"Ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",Implies:"⇒",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",Int:"∬",intcal:"⊺",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",iocy:"ё",IOcy:"Ё",iogon:"į",Iogon:"Į",iopf:"𝕚",Iopf:"𝕀",iota:"ι",Iota:"Ι",iprod:"⨼",iquest:"¿",iscr:"𝒾",Iscr:"ℐ",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",Itilde:"Ĩ",iukcy:"і",Iukcy:"І",iuml:"ï",Iuml:"Ï",jcirc:"ĵ",Jcirc:"Ĵ",jcy:"й",Jcy:"Й",jfr:"𝔧",Jfr:"𝔍",jmath:"ȷ",jopf:"𝕛",Jopf:"𝕁",jscr:"𝒿",Jscr:"𝒥",jsercy:"ј",Jsercy:"Ј",jukcy:"є",Jukcy:"Є",kappa:"κ",Kappa:"Κ",kappav:"ϰ",kcedil:"ķ",Kcedil:"Ķ",kcy:"к",Kcy:"К",kfr:"𝔨",Kfr:"𝔎",kgreen:"ĸ",khcy:"х",KHcy:"Х",kjcy:"ќ",KJcy:"Ќ",kopf:"𝕜",Kopf:"𝕂",kscr:"𝓀",Kscr:"𝒦",lAarr:"⇚",lacute:"ĺ",Lacute:"Ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",Lambda:"Λ",lang:"⟨",Lang:"⟪",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",larr:"←",lArr:"⇐",Larr:"↞",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",lAtail:"⤛",late:"⪭",lates:"⪭︀",lbarr:"⤌",lBarr:"⤎",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",Lcaron:"Ľ",lcedil:"ļ",Lcedil:"Ļ",lceil:"⌈",lcub:"{",lcy:"л",Lcy:"Л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",lE:"≦",LeftAngleBracket:"⟨",leftarrow:"←",Leftarrow:"⇐",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",Leftrightarrow:"⇔",LeftRightArrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",leg:"⋚",lEg:"⪋",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"𝔩",Lfr:"𝔏",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",LJcy:"Љ",ll:"≪",Ll:"⋘",llarr:"⇇",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",lmidot:"ŀ",Lmidot:"Ŀ",lmoust:"⎰",lmoustache:"⎰",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lnE:"≨",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",Longleftarrow:"⟸",LongLeftArrow:"⟵",longleftrightarrow:"⟷",Longleftrightarrow:"⟺",LongLeftRightArrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",Longrightarrow:"⟹",LongRightArrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"𝕝",Lopf:"𝕃",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",Lscr:"ℒ",lsh:"↰",Lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",Lstrok:"Ł",lt:"<",Lt:"≪",LT:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",map:"↦",Map:"⤅",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",Mcy:"М",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",mfr:"𝔪",Mfr:"𝔐",mho:"℧",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"𝕞",Mopf:"𝕄",mp:"∓",mscr:"𝓂",Mscr:"ℳ",mstpos:"∾",mu:"μ",Mu:"Μ",multimap:"⊸",mumap:"⊸",nabla:"∇",nacute:"ń",Nacute:"Ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",Ncaron:"Ň",ncedil:"ņ",Ncedil:"Ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",Ncy:"Н",ndash:"–",ne:"≠",nearhk:"⤤",nearr:"↗",neArr:"⇗",nearrow:"↗",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",nexist:"∄",nexists:"∄",nfr:"𝔫",Nfr:"𝔑",nge:"≱",ngE:"≧̸",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",ngt:"≯",nGt:"≫⃒",ngtr:"≯",nGtv:"≫̸",nharr:"↮",nhArr:"⇎",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",NJcy:"Њ",nlarr:"↚",nlArr:"⇍",nldr:"‥",nle:"≰",nlE:"≦̸",nleftarrow:"↚",nLeftarrow:"⇍",nleftrightarrow:"↮",nLeftrightarrow:"⇎",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nlt:"≮",nLt:"≪⃒",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",nopf:"𝕟",Nopf:"ℕ",not:"¬",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrarr:"↛",nrArr:"⇏",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nRightarrow:"⇏",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"𝓃",Nscr:"𝒩",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsube:"⊈",nsubE:"⫅̸",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupe:"⊉",nsupE:"⫆̸",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntilde:"ñ",Ntilde:"Ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",Nu:"Ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nvdash:"⊬",nvDash:"⊭",nVdash:"⊮",nVDash:"⊯",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwarr:"↖",nwArr:"⇖",nwarrow:"↖",nwnear:"⤧",oacute:"ó",Oacute:"Ó",oast:"⊛",ocir:"⊚",ocirc:"ô",Ocirc:"Ô",ocy:"о",Ocy:"О",odash:"⊝",odblac:"ő",Odblac:"Ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",OElig:"Œ",ofcir:"⦿",ofr:"𝔬",Ofr:"𝔒",ogon:"˛",ograve:"ò",Ograve:"Ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",Omacr:"Ō",omega:"ω",Omega:"Ω",omicron:"ο",Omicron:"Ο",omid:"⦶",ominus:"⊖",oopf:"𝕠",Oopf:"𝕆",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",or:"∨",Or:"⩔",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",oscr:"ℴ",Oscr:"𝒪",oslash:"ø",Oslash:"Ø",osol:"⊘",otilde:"õ",Otilde:"Õ",otimes:"⊗",Otimes:"⨷",otimesas:"⨶",ouml:"ö",Ouml:"Ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",par:"∥",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",pcy:"п",Pcy:"П",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"𝔭",Pfr:"𝔓",phi:"φ",Phi:"Φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",Pi:"Π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",popf:"𝕡",Popf:"ℙ",pound:"£",pr:"≺",Pr:"⪻",prap:"⪷",prcue:"≼",pre:"⪯",prE:"⪳",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",Prime:"″",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportion:"∷",Proportional:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"𝓅",Pscr:"𝒫",psi:"ψ",Psi:"Ψ",puncsp:" ",qfr:"𝔮",Qfr:"𝔔",qint:"⨌",qopf:"𝕢",Qopf:"ℚ",qprime:"⁗",qscr:"𝓆",Qscr:"𝒬",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',QUOT:'"',rAarr:"⇛",race:"∽̱",racute:"ŕ",Racute:"Ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",Rang:"⟫",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarr:"→",rArr:"⇒",Rarr:"↠",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",Rarrtl:"⤖",rarrw:"↝",ratail:"⤚",rAtail:"⤜",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rBarr:"⤏",RBarr:"⤐",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",Rcaron:"Ř",rcedil:"ŗ",Rcedil:"Ŗ",rceil:"⌉",rcub:"}",rcy:"р",Rcy:"Р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",Re:"ℜ",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",reg:"®",REG:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",Rfr:"ℜ",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",Rho:"Ρ",rhov:"ϱ",RightAngleBracket:"⟩",rightarrow:"→",Rightarrow:"⇒",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",Ropf:"ℝ",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",rscr:"𝓇",Rscr:"ℛ",rsh:"↱",Rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",sacute:"ś",Sacute:"Ś",sbquo:"‚",sc:"≻",Sc:"⪼",scap:"⪸",scaron:"š",Scaron:"Š",sccue:"≽",sce:"⪰",scE:"⪴",scedil:"ş",Scedil:"Ş",scirc:"ŝ",Scirc:"Ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",Scy:"С",sdot:"⋅",sdotb:"⊡",sdote:"⩦",searhk:"⤥",searr:"↘",seArr:"⇘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"𝔰",Sfr:"𝔖",sfrown:"⌢",sharp:"♯",shchcy:"щ",SHCHcy:"Щ",shcy:"ш",SHcy:"Ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",sigma:"σ",Sigma:"Σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",SOFTcy:"Ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"𝕤",Sopf:"𝕊",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squf:"▪",srarr:"→",sscr:"𝓈",Sscr:"𝒮",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",Star:"⋆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",Sub:"⋐",subdot:"⪽",sube:"⊆",subE:"⫅",subedot:"⫃",submult:"⫁",subne:"⊊",subnE:"⫋",subplus:"⪿",subrarr:"⥹",subset:"⊂",Subset:"⋐",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",sum:"∑",Sum:"∑",sung:"♪",sup:"⊃",Sup:"⋑",sup1:"¹",sup2:"²",sup3:"³",supdot:"⪾",supdsub:"⫘",supe:"⊇",supE:"⫆",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supne:"⊋",supnE:"⫌",supplus:"⫀",supset:"⊃",Supset:"⋑",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swarr:"↙",swArr:"⇙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"\t",target:"⌖",tau:"τ",Tau:"Τ",tbrk:"⎴",tcaron:"ť",Tcaron:"Ť",tcedil:"ţ",Tcedil:"Ţ",tcy:"т",Tcy:"Т",tdot:"⃛",telrec:"⌕",tfr:"𝔱",Tfr:"𝔗",there4:"∴",therefore:"∴",Therefore:"∴",theta:"θ",Theta:"Θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",thinsp:" ",ThinSpace:" ",thkap:"≈",thksim:"∼",thorn:"þ",THORN:"Þ",tilde:"˜",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"𝕥",Topf:"𝕋",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",TRADE:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"𝓉",Tscr:"𝒯",tscy:"ц",TScy:"Ц",tshcy:"ћ",TSHcy:"Ћ",tstrok:"ŧ",Tstrok:"Ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uacute:"ú",Uacute:"Ú",uarr:"↑",uArr:"⇑",Uarr:"↟",Uarrocir:"⥉",ubrcy:"ў",Ubrcy:"Ў",ubreve:"ŭ",Ubreve:"Ŭ",ucirc:"û",Ucirc:"Û",ucy:"у",Ucy:"У",udarr:"⇅",udblac:"ű",Udblac:"Ű",udhar:"⥮",ufisht:"⥾",ufr:"𝔲",Ufr:"𝔘",ugrave:"ù",Ugrave:"Ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",Umacr:"Ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",uogon:"ų",Uogon:"Ų",uopf:"𝕦",Uopf:"𝕌",uparrow:"↑",Uparrow:"⇑",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",updownarrow:"↕",Updownarrow:"⇕",UpDownArrow:"↕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",upsi:"υ",Upsi:"ϒ",upsih:"ϒ",upsilon:"υ",Upsilon:"Υ",UpTee:"⊥",UpTeeArrow:"↥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",Uring:"Ů",urtri:"◹",uscr:"𝓊",Uscr:"𝒰",utdot:"⋰",utilde:"ũ",Utilde:"Ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uuml:"ü",Uuml:"Ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",vArr:"⇕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vBar:"⫨",Vbar:"⫫",vBarv:"⫩",vcy:"в",Vcy:"В",vdash:"⊢",vDash:"⊨",Vdash:"⊩",VDash:"⊫",Vdashl:"⫦",vee:"∨",Vee:"⋁",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",Verbar:"‖",vert:"|",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",vfr:"𝔳",Vfr:"𝔙",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"𝕧",Vopf:"𝕍",vprop:"∝",vrtri:"⊳",vscr:"𝓋",Vscr:"𝒱",vsubne:"⊊︀",vsubnE:"⫋︀",vsupne:"⊋︀",vsupnE:"⫌︀",Vvdash:"⊪",vzigzag:"⦚",wcirc:"ŵ",Wcirc:"Ŵ",wedbar:"⩟",wedge:"∧",Wedge:"⋀",wedgeq:"≙",weierp:"℘",wfr:"𝔴",Wfr:"𝔚",wopf:"𝕨",Wopf:"𝕎",wp:"℘",wr:"≀",wreath:"≀",wscr:"𝓌",Wscr:"𝒲",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"𝔵",Xfr:"𝔛",xharr:"⟷",xhArr:"⟺",xi:"ξ",Xi:"Ξ",xlarr:"⟵",xlArr:"⟸",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"𝕩",Xopf:"𝕏",xoplus:"⨁",xotime:"⨂",xrarr:"⟶",xrArr:"⟹",xscr:"𝓍",Xscr:"𝒳",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacute:"ý",Yacute:"Ý",yacy:"я",YAcy:"Я",ycirc:"ŷ",Ycirc:"Ŷ",ycy:"ы",Ycy:"Ы",yen:"¥",yfr:"𝔶",Yfr:"𝔜",yicy:"ї",YIcy:"Ї",yopf:"𝕪",Yopf:"𝕐",yscr:"𝓎",Yscr:"𝒴",yucy:"ю",YUcy:"Ю",yuml:"ÿ",Yuml:"Ÿ",zacute:"ź",Zacute:"Ź",zcaron:"ž",Zcaron:"Ž",zcy:"з",Zcy:"З",zdot:"ż",Zdot:"Ż",zeetrf:"ℨ",ZeroWidthSpace:"​",zeta:"ζ",Zeta:"Ζ",zfr:"𝔷",Zfr:"ℨ",zhcy:"ж",ZHcy:"Ж",zigrarr:"⇝",zopf:"𝕫",Zopf:"ℤ",zscr:"𝓏",Zscr:"𝒵",zwj:"‍",zwnj:"‌"},v={aacute:"á",Aacute:"Á",acirc:"â",Acirc:"Â",acute:"´",aelig:"æ",AElig:"Æ",agrave:"à",Agrave:"À",amp:"&",AMP:"&",aring:"å",Aring:"Å",atilde:"ã",Atilde:"Ã",auml:"ä",Auml:"Ä",brvbar:"¦",ccedil:"ç",Ccedil:"Ç",cedil:"¸",cent:"¢",copy:"©",COPY:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",Eacute:"É",ecirc:"ê",Ecirc:"Ê",egrave:"è",Egrave:"È",eth:"ð",ETH:"Ð",euml:"ë",Euml:"Ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",GT:">",iacute:"í",Iacute:"Í",icirc:"î",Icirc:"Î",iexcl:"¡",igrave:"ì",Igrave:"Ì",iquest:"¿",iuml:"ï",Iuml:"Ï",laquo:"«",lt:"<",LT:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",Ntilde:"Ñ",oacute:"ó",Oacute:"Ó",ocirc:"ô",Ocirc:"Ô",ograve:"ò",Ograve:"Ò",ordf:"ª",ordm:"º",oslash:"ø",Oslash:"Ø",otilde:"õ",Otilde:"Õ",ouml:"ö",Ouml:"Ö",para:"¶",plusmn:"±",pound:"£",quot:'"',QUOT:'"',raquo:"»",reg:"®",REG:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",THORN:"Þ",times:"×",uacute:"ú",Uacute:"Ú",ucirc:"û",Ucirc:"Û",ugrave:"ù",Ugrave:"Ù",uml:"¨",uuml:"ü",Uuml:"Ü",yacute:"ý",Yacute:"Ý",yen:"¥",yuml:"ÿ"},y={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"},b=[1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65e3,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111],w=String.fromCharCode,x={}.hasOwnProperty,E=function(e,t){return x.call(e,t)},D=function(e,t){if(!e)return t
var r,n={}
for(r in t)n[r]=E(e,r)?e[r]:t[r]
return n},A=function(e,t){var r=""
return e>=55296&&e<=57343||e>1114111?(t&&C("character reference outside the permissible Unicode range"),"�"):E(y,e)?(t&&C("disallowed character reference"),y[e]):(t&&function(e,t){for(var r=-1,n=e.length;++r<n;)if(e[r]==t)return!0
return!1}(b,e)&&C("disallowed character reference"),e>65535&&(r+=w((e-=65536)>>>10&1023|55296),e=56320|1023&e),r+=w(e))},_=function(e){return"&#x"+e.toString(16).toUpperCase()+";"},k=function(e){return"&#"+e+";"},C=function(e){throw Error("Parse error: "+e)},T=function(e,t){(t=D(t,T.options)).strict&&h.test(e)&&C("forbidden code point")
var r=t.encodeEverything,n=t.useNamedReferences,i=t.allowUnsafeSymbols,o=t.decimal?k:_,p=function(e){return o(e.charCodeAt(0))}
return r?(e=e.replace(s,(function(e){return n&&E(c,e)?"&"+c[e]+";":p(e)})),n&&(e=e.replace(/&gt;\u20D2/g,"&nvgt;").replace(/&lt;\u20D2/g,"&nvlt;").replace(/&#x66;&#x6A;/g,"&fjlig;")),n&&(e=e.replace(l,(function(e){return"&"+c[e]+";"})))):n?(i||(e=e.replace(f,(function(e){return"&"+c[e]+";"}))),e=(e=e.replace(/&gt;\u20D2/g,"&nvgt;").replace(/&lt;\u20D2/g,"&nvlt;")).replace(l,(function(e){return"&"+c[e]+";"}))):i||(e=e.replace(f,p)),e.replace(a,(function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1)
return o(1024*(t-55296)+r-56320+65536)})).replace(u,p)}
T.options={allowUnsafeSymbols:!1,encodeEverything:!1,strict:!1,useNamedReferences:!1,decimal:!1}
var S=function(e,t){var r=(t=D(t,S.options)).strict
return r&&d.test(e)&&C("malformed character reference"),e.replace(g,(function(e,n,i,o,a,s,u,l,c){var f,p,d,h,g,y
return n?m[g=n]:i?(g=i,(y=o)&&t.isAttributeValue?(r&&"="==y&&C("`&` did not start a character reference"),e):(r&&C("named character reference was not terminated by a semicolon"),v[g]+(y||""))):a?(d=a,p=s,r&&!p&&C("character reference was not terminated by a semicolon"),f=parseInt(d,10),A(f,r)):u?(h=u,p=l,r&&!p&&C("character reference was not terminated by a semicolon"),f=parseInt(h,16),A(f,r)):(r&&C("named character reference was not terminated by a semicolon"),e)}))}
S.options={isAttributeValue:!1,strict:!1}
var N={version:"1.2.0",encode:T,decode:S,escape:function(e){return e.replace(f,(function(e){return p[e]}))},unescape:S}
void 0===(n=function(){return N}.call(t,r,t,e))||(e.exports=n)}()},9484:e=>{var t={}.toString
e.exports=Array.isArray||function(e){return"[object Array]"==t.call(e)}},7339:function(e,t){var r
!function(t,r){"use strict"
"object"==typeof e.exports?e.exports=t.document?r(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return r(e)}:r(t)}("undefined"!=typeof window?window:this,(function(n,i){"use strict"
var o=[],a=Object.getPrototypeOf,s=o.slice,u=o.flat?function(e){return o.flat.call(e)}:function(e){return o.concat.apply([],e)},l=o.push,c=o.indexOf,f={},p=f.toString,d=f.hasOwnProperty,h=d.toString,g=h.call(Object),m={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},b=n.document,w={type:!0,src:!0,nonce:!0,noModule:!0}
function x(e,t,r){var n,i,o=(r=r||b).createElement("script")
if(o.text=e,t)for(n in w)(i=t[n]||t.getAttribute&&t.getAttribute(n))&&o.setAttribute(n,i)
r.head.appendChild(o).parentNode.removeChild(o)}function E(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[p.call(e)]||"object":typeof e}var D="3.6.4",A=function(e,t){return new A.fn.init(e,t)}
function _(e){var t=!!e&&"length"in e&&e.length,r=E(e)
return!v(e)&&!y(e)&&("array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e)}A.fn=A.prototype={jquery:D,constructor:A,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=A.merge(this.constructor(),e)
return t.prevObject=this,t},each:function(e){return A.each(this,e)},map:function(e){return this.pushStack(A.map(this,(function(t,r){return e.call(t,r,t)})))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(A.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(A.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,r=+e+(e<0?t:0)
return this.pushStack(r>=0&&r<t?[this[r]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:o.sort,splice:o.splice},A.extend=A.fn.extend=function(){var e,t,r,n,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1
for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=e[t],"__proto__"!==t&&a!==n&&(l&&n&&(A.isPlainObject(n)||(i=Array.isArray(n)))?(r=a[t],o=i&&!Array.isArray(r)?[]:i||A.isPlainObject(r)?r:{},i=!1,a[t]=A.extend(l,o,n)):void 0!==n&&(a[t]=n))
return a},A.extend({expando:"jQuery"+(D+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,r
return!(!e||"[object Object]"!==p.call(e)||(t=a(e))&&("function"!=typeof(r=d.call(t,"constructor")&&t.constructor)||h.call(r)!==g))},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},globalEval:function(e,t,r){x(e,{nonce:t&&t.nonce},r)},each:function(e,t){var r,n=0
if(_(e))for(r=e.length;n<r&&!1!==t.call(e[n],n,e[n]);n++);else for(n in e)if(!1===t.call(e[n],n,e[n]))break
return e},makeArray:function(e,t){var r=t||[]
return null!=e&&(_(Object(e))?A.merge(r,"string"==typeof e?[e]:e):l.call(r,e)),r},inArray:function(e,t,r){return null==t?-1:c.call(t,e,r)},merge:function(e,t){for(var r=+t.length,n=0,i=e.length;n<r;n++)e[i++]=t[n]
return e.length=i,e},grep:function(e,t,r){for(var n=[],i=0,o=e.length,a=!r;i<o;i++)!t(e[i],i)!==a&&n.push(e[i])
return n},map:function(e,t,r){var n,i,o=0,a=[]
if(_(e))for(n=e.length;o<n;o++)null!=(i=t(e[o],o,r))&&a.push(i)
else for(o in e)null!=(i=t(e[o],o,r))&&a.push(i)
return u(a)},guid:1,support:m}),"function"==typeof Symbol&&(A.fn[Symbol.iterator]=o[Symbol.iterator]),A.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){f["[object "+t+"]"]=t.toLowerCase()}))
var k=function(e){var t,r,n,i,o,a,s,u,l,c,f,p,d,h,g,m,v,y,b,w="sizzle"+1*new Date,x=e.document,E=0,D=0,A=ue(),_=ue(),k=ue(),C=ue(),T=function(e,t){return e===t&&(f=!0),0},S={}.hasOwnProperty,N=[],O=N.pop,L=N.push,F=N.push,q=N.slice,P=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r
return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",B="[\\x20\\t\\r\\n\\f]",j="(?:\\\\[\\da-fA-F]{1,6}"+B+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",I="\\["+B+"*("+j+")(?:"+B+"*([*^$|!~]?=)"+B+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+j+"))|)"+B+"*\\]",M=":("+j+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",U=new RegExp(B+"+","g"),H=new RegExp("^"+B+"+|((?:^|[^\\\\])(?:\\\\.)*)"+B+"+$","g"),$=new RegExp("^"+B+"*,"+B+"*"),z=new RegExp("^"+B+"*([>+~]|"+B+")"+B+"*"),V=new RegExp(B+"|>"),G=new RegExp(M),W=new RegExp("^"+j+"$"),Q={ID:new RegExp("^#("+j+")"),CLASS:new RegExp("^\\.("+j+")"),TAG:new RegExp("^("+j+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+M),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+B+"*(even|odd|(([+-]|)(\\d*)n|)"+B+"*(?:([+-]|)"+B+"*(\\d+)|))"+B+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+B+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+B+"*((?:-\\d)?\\d*)"+B+"*\\)|)(?=[^-]|$)","i")},K=/HTML$/i,Z=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+B+"?|\\\\([^\\r\\n\\f])","g"),re=function(e,t){var r="0x"+e.slice(1)-65536
return t||(r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320))},ne=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){p()},ae=we((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"})
try{F.apply(N=q.call(x.childNodes),x.childNodes),N[x.childNodes.length].nodeType}catch(e){F={apply:N.length?function(e,t){L.apply(e,q.call(t))}:function(e,t){for(var r=e.length,n=0;e[r++]=t[n++];);e.length=r-1}}}function se(e,t,n,i){var o,s,l,c,f,h,v,y=t&&t.ownerDocument,x=t?t.nodeType:9
if(n=n||[],"string"!=typeof e||!e||1!==x&&9!==x&&11!==x)return n
if(!i&&(p(t),t=t||d,g)){if(11!==x&&(f=J.exec(e)))if(o=f[1]){if(9===x){if(!(l=t.getElementById(o)))return n
if(l.id===o)return n.push(l),n}else if(y&&(l=y.getElementById(o))&&b(t,l)&&l.id===o)return n.push(l),n}else{if(f[2])return F.apply(n,t.getElementsByTagName(e)),n
if((o=f[3])&&r.getElementsByClassName&&t.getElementsByClassName)return F.apply(n,t.getElementsByClassName(o)),n}if(r.qsa&&!C[e+" "]&&(!m||!m.test(e))&&(1!==x||"object"!==t.nodeName.toLowerCase())){if(v=e,y=t,1===x&&(V.test(e)||z.test(e))){for((y=ee.test(e)&&ve(t.parentNode)||t)===t&&r.scope||((c=t.getAttribute("id"))?c=c.replace(ne,ie):t.setAttribute("id",c=w)),s=(h=a(e)).length;s--;)h[s]=(c?"#"+c:":scope")+" "+be(h[s])
v=h.join(",")}try{return F.apply(n,y.querySelectorAll(v)),n}catch(t){C(e,!0)}finally{c===w&&t.removeAttribute("id")}}}return u(e.replace(H,"$1"),t,n,i)}function ue(){var e=[]
return function t(r,i){return e.push(r+" ")>n.cacheLength&&delete t[e.shift()],t[r+" "]=i}}function le(e){return e[w]=!0,e}function ce(e){var t=d.createElement("fieldset")
try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){for(var r=e.split("|"),i=r.length;i--;)n.attrHandle[r[i]]=t}function pe(e,t){var r=t&&e,n=r&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex
if(n)return n
if(r)for(;r=r.nextSibling;)if(r===t)return-1
return e?1:-1}function de(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function he(e){return function(t){var r=t.nodeName.toLowerCase()
return("input"===r||"button"===r)&&t.type===e}}function ge(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ae(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function me(e){return le((function(t){return t=+t,le((function(r,n){for(var i,o=e([],r.length,t),a=o.length;a--;)r[i=o[a]]&&(r[i]=!(n[i]=r[i]))}))}))}function ve(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in r=se.support={},o=se.isXML=function(e){var t=e&&e.namespaceURI,r=e&&(e.ownerDocument||e).documentElement
return!K.test(t||r&&r.nodeName||"HTML")},p=se.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:x
return a!=d&&9===a.nodeType&&a.documentElement?(h=(d=a).documentElement,g=!o(d),x!=d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",oe,!1):i.attachEvent&&i.attachEvent("onunload",oe)),r.scope=ce((function(e){return h.appendChild(e).appendChild(d.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),r.cssHas=ce((function(){try{return d.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}})),r.attributes=ce((function(e){return e.className="i",!e.getAttribute("className")})),r.getElementsByTagName=ce((function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length})),r.getElementsByClassName=Y.test(d.getElementsByClassName),r.getById=ce((function(e){return h.appendChild(e).id=w,!d.getElementsByName||!d.getElementsByName(w).length})),r.getById?(n.filter.ID=function(e){var t=e.replace(te,re)
return function(e){return e.getAttribute("id")===t}},n.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var r=t.getElementById(e)
return r?[r]:[]}}):(n.filter.ID=function(e){var t=e.replace(te,re)
return function(e){var r=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return r&&r.value===t}},n.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var r,n,i,o=t.getElementById(e)
if(o){if((r=o.getAttributeNode("id"))&&r.value===e)return[o]
for(i=t.getElementsByName(e),n=0;o=i[n++];)if((r=o.getAttributeNode("id"))&&r.value===e)return[o]}return[]}}),n.find.TAG=r.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):r.qsa?t.querySelectorAll(e):void 0}:function(e,t){var r,n=[],i=0,o=t.getElementsByTagName(e)
if("*"===e){for(;r=o[i++];)1===r.nodeType&&n.push(r)
return n}return o},n.find.CLASS=r.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],m=[],(r.qsa=Y.test(d.querySelectorAll))&&(ce((function(e){var t
h.appendChild(e).innerHTML="<a id='"+w+"'></a><select id='"+w+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+B+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+B+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+w+"-]").length||m.push("~="),(t=d.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\["+B+"*name"+B+"*="+B+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+w+"+*").length||m.push(".#.+[+~]"),e.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")})),ce((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
var t=d.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+B+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")}))),(r.matchesSelector=Y.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ce((function(e){r.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),v.push("!=",M)})),r.cssHas||m.push(":has"),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),t=Y.test(h.compareDocumentPosition),b=t||Y.test(h.contains)?function(e,t){var r=9===e.nodeType&&e.documentElement||e,n=t&&t.parentNode
return e===n||!(!n||1!==n.nodeType||!(r.contains?r.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},T=t?function(e,t){if(e===t)return f=!0,0
var n=!e.compareDocumentPosition-!t.compareDocumentPosition
return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!r.sortDetached&&t.compareDocumentPosition(e)===n?e==d||e.ownerDocument==x&&b(x,e)?-1:t==d||t.ownerDocument==x&&b(x,t)?1:c?P(c,e)-P(c,t):0:4&n?-1:1)}:function(e,t){if(e===t)return f=!0,0
var r,n=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t]
if(!i||!o)return e==d?-1:t==d?1:i?-1:o?1:c?P(c,e)-P(c,t):0
if(i===o)return pe(e,t)
for(r=e;r=r.parentNode;)a.unshift(r)
for(r=t;r=r.parentNode;)s.unshift(r)
for(;a[n]===s[n];)n++
return n?pe(a[n],s[n]):a[n]==x?-1:s[n]==x?1:0},d):d},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(p(e),r.matchesSelector&&g&&!C[t+" "]&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var n=y.call(e,t)
if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){C(t,!0)}return se(t,d,null,[e]).length>0},se.contains=function(e,t){return(e.ownerDocument||e)!=d&&p(e),b(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=d&&p(e)
var i=n.attrHandle[t.toLowerCase()],o=i&&S.call(n.attrHandle,t.toLowerCase())?i(e,t,!g):void 0
return void 0!==o?o:r.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},se.escape=function(e){return(e+"").replace(ne,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],i=0,o=0
if(f=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(T),f){for(;t=e[o++];)t===e[o]&&(i=n.push(o))
for(;i--;)e.splice(n[i],1)}return c=null,e},i=se.getText=function(e){var t,r="",n=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)r+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[n++];)r+=i(t)
return r},n=se.selectors={cacheLength:50,createPseudo:le,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,re),e[3]=(e[3]||e[4]||e[5]||"").replace(te,re),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,r=!e[6]&&e[2]
return Q.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":r&&G.test(r)&&(t=a(r,!0))&&(t=r.indexOf(")",r.length-t)-r.length)&&(e[0]=e[0].slice(0,t),e[2]=r.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,re).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=A[e+" "]
return t||(t=new RegExp("(^|"+B+")"+e+"("+B+"|$)"))&&A(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,r){return function(n){var i=se.attr(n,e)
return null==i?"!="===t:!t||(i+="","="===t?i===r:"!="===t?i!==r:"^="===t?r&&0===i.indexOf(r):"*="===t?r&&i.indexOf(r)>-1:"$="===t?r&&i.slice(-r.length)===r:"~="===t?(" "+i.replace(U," ")+" ").indexOf(r)>-1:"|="===t&&(i===r||i.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,r,n,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t
return 1===n&&0===i?function(e){return!!e.parentNode}:function(t,r,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!u&&!s,b=!1
if(m){if(o){for(;g;){for(p=t;p=p[g];)if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1
h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&y){for(b=(d=(l=(c=(f=(p=m)[w]||(p[w]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===E&&l[1])&&l[2],p=d&&m.childNodes[d];p=++d&&p&&p[g]||(b=d=0)||h.pop();)if(1===p.nodeType&&++b&&p===t){c[e]=[E,d,b]
break}}else if(y&&(b=d=(l=(c=(f=(p=t)[w]||(p[w]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===E&&l[1]),!1===b)for(;(p=++d&&p&&p[g]||(b=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++b||(y&&((c=(f=p[w]||(p[w]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[E,b]),p!==t)););return(b-=i)===n||b%n==0&&b/n>=0}}},PSEUDO:function(e,t){var r,i=n.pseudos[e]||n.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e)
return i[w]?i(t):i.length>1?(r=[e,e,"",t],n.setFilters.hasOwnProperty(e.toLowerCase())?le((function(e,r){for(var n,o=i(e,t),a=o.length;a--;)e[n=P(e,o[a])]=!(r[n]=o[a])})):function(e){return i(e,0,r)}):i}},pseudos:{not:le((function(e){var t=[],r=[],n=s(e.replace(H,"$1"))
return n[w]?le((function(e,t,r,i){for(var o,a=n(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))})):function(e,i,o){return t[0]=e,n(t,null,o,r),t[0]=null,!r.pop()}})),has:le((function(e){return function(t){return se(e,t).length>0}})),contains:le((function(e){return e=e.replace(te,re),function(t){return(t.textContent||i(t)).indexOf(e)>-1}})),lang:le((function(e){return W.test(e||"")||se.error("unsupported lang: "+e),e=e.replace(te,re).toLowerCase(),function(t){var r
do{if(r=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(r=r.toLowerCase())===e||0===r.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(t){var r=e.location&&e.location.hash
return r&&r.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!n.pseudos.empty(e)},header:function(e){return X.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:me((function(){return[0]})),last:me((function(e,t){return[t-1]})),eq:me((function(e,t,r){return[r<0?r+t:r]})),even:me((function(e,t){for(var r=0;r<t;r+=2)e.push(r)
return e})),odd:me((function(e,t){for(var r=1;r<t;r+=2)e.push(r)
return e})),lt:me((function(e,t,r){for(var n=r<0?r+t:r>t?t:r;--n>=0;)e.push(n)
return e})),gt:me((function(e,t,r){for(var n=r<0?r+t:r;++n<t;)e.push(n)
return e}))}},n.pseudos.nth=n.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[t]=de(t)
for(t in{submit:!0,reset:!0})n.pseudos[t]=he(t)
function ye(){}function be(e){for(var t=0,r=e.length,n="";t<r;t++)n+=e[t].value
return n}function we(e,t,r){var n=t.dir,i=t.next,o=i||n,a=r&&"parentNode"===o,s=D++
return t.first?function(t,r,i){for(;t=t[n];)if(1===t.nodeType||a)return e(t,r,i)
return!1}:function(t,r,u){var l,c,f,p=[E,s]
if(u){for(;t=t[n];)if((1===t.nodeType||a)&&e(t,r,u))return!0}else for(;t=t[n];)if(1===t.nodeType||a)if(c=(f=t[w]||(t[w]={}))[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[n]||t
else{if((l=c[o])&&l[0]===E&&l[1]===s)return p[2]=l[2]
if(c[o]=p,p[2]=e(t,r,u))return!0}return!1}}function xe(e){return e.length>1?function(t,r,n){for(var i=e.length;i--;)if(!e[i](t,r,n))return!1
return!0}:e[0]}function Ee(e,t,r,n,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(r&&!r(o,n,i)||(a.push(o),l&&t.push(s)))
return a}function De(e,t,r,n,i,o){return n&&!n[w]&&(n=De(n)),i&&!i[w]&&(i=De(i,o)),le((function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||function(e,t,r){for(var n=0,i=t.length;n<i;n++)se(e,t[n],r)
return r}(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:Ee(g,p,e,s,u),v=r?i||(o?e:h||n)?[]:a:m
if(r&&r(m,v,s,u),n)for(l=Ee(v,d),n(l,[],s,u),c=l.length;c--;)(f=l[c])&&(v[d[c]]=!(m[d[c]]=f))
if(o){if(i||e){if(i){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(m[c]=f)
i(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=i?P(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=Ee(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):F.apply(a,v)}))}function Ae(e){for(var t,r,i,o=e.length,a=n.relative[e[0].type],s=a||n.relative[" "],u=a?1:0,c=we((function(e){return e===t}),s,!0),f=we((function(e){return P(t,e)>-1}),s,!0),p=[function(e,r,n){var i=!a&&(n||r!==l)||((t=r).nodeType?c(e,r,n):f(e,r,n))
return t=null,i}];u<o;u++)if(r=n.relative[e[u].type])p=[we(xe(p),r)]
else{if((r=n.filter[e[u].type].apply(null,e[u].matches))[w]){for(i=++u;i<o&&!n.relative[e[i].type];i++);return De(u>1&&xe(p),u>1&&be(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(H,"$1"),r,u<i&&Ae(e.slice(u,i)),i<o&&Ae(e=e.slice(i)),i<o&&be(e))}p.push(r)}return xe(p)}return ye.prototype=n.filters=n.pseudos,n.setFilters=new ye,a=se.tokenize=function(e,t){var r,i,o,a,s,u,l,c=_[e+" "]
if(c)return t?0:c.slice(0)
for(s=e,u=[],l=n.preFilter;s;){for(a in r&&!(i=$.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=z.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(H," ")}),s=s.slice(r.length)),n.filter)!(i=Q[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length))
if(!r)break}return t?s.length:s?se.error(e):_(e,u).slice(0)},s=se.compile=function(e,t){var r,i=[],o=[],s=k[e+" "]
if(!s){for(t||(t=a(e)),r=t.length;r--;)(s=Ae(t[r]))[w]?i.push(s):o.push(s)
s=k(e,function(e,t){var r=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,m,v=0,y="0",b=o&&[],w=[],x=l,D=o||i&&n.find.TAG("*",c),A=E+=null==x?1:Math.random()||.1,_=D.length
for(c&&(l=a==d||a||c);y!==_&&null!=(f=D[y]);y++){if(i&&f){for(h=0,a||f.ownerDocument==d||(p(f),s=!g);m=e[h++];)if(m(f,a||d,s)){u.push(f)
break}c&&(E=A)}r&&((f=!m&&f)&&v--,o&&b.push(f))}if(v+=y,r&&y!==v){for(h=0;m=t[h++];)m(b,w,a,s)
if(o){if(v>0)for(;y--;)b[y]||w[y]||(w[y]=O.call(u))
w=Ee(w)}F.apply(u,w),c&&!o&&w.length>0&&v+t.length>1&&se.uniqueSort(u)}return c&&(E=A,l=x),b}
return r?le(o):o}(o,i)),s.selector=e}return s},u=se.select=function(e,t,r,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e)
if(r=r||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&n.relative[u[1].type]){if(!(t=(n.find.ID(l.matches[0].replace(te,re),t)||[])[0]))return r
p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}for(o=Q.needsContext.test(e)?0:u.length;o--&&(l=u[o],!n.relative[c=l.type]);)if((f=n.find[c])&&(i=f(l.matches[0].replace(te,re),ee.test(u[0].type)&&ve(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&be(u)))return F.apply(r,i),r
break}}return(p||s(e,d))(i,t,!g,r,!t||ee.test(e)&&ve(t.parentNode)||t),r},r.sortStable=w.split("").sort(T).join("")===w,r.detectDuplicates=!!f,p(),r.sortDetached=ce((function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))})),ce((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||fe("type|href|height|width",(function(e,t,r){if(!r)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),r.attributes&&ce((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||fe("value",(function(e,t,r){if(!r&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),ce((function(e){return null==e.getAttribute("disabled")}))||fe(R,(function(e,t,r){var n
if(!r)return!0===e[t]?t.toLowerCase():(n=e.getAttributeNode(t))&&n.specified?n.value:null})),se}(n)
A.find=k,A.expr=k.selectors,A.expr[":"]=A.expr.pseudos,A.uniqueSort=A.unique=k.uniqueSort,A.text=k.getText,A.isXMLDoc=k.isXML,A.contains=k.contains,A.escapeSelector=k.escape
var C=function(e,t,r){for(var n=[],i=void 0!==r;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&A(e).is(r))break
n.push(e)}return n},T=function(e,t){for(var r=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&r.push(e)
return r},S=A.expr.match.needsContext
function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var O=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
function L(e,t,r){return v(t)?A.grep(e,(function(e,n){return!!t.call(e,n,e)!==r})):t.nodeType?A.grep(e,(function(e){return e===t!==r})):"string"!=typeof t?A.grep(e,(function(e){return c.call(t,e)>-1!==r})):A.filter(t,e,r)}A.filter=function(e,t,r){var n=t[0]
return r&&(e=":not("+e+")"),1===t.length&&1===n.nodeType?A.find.matchesSelector(n,e)?[n]:[]:A.find.matches(e,A.grep(t,(function(e){return 1===e.nodeType})))},A.fn.extend({find:function(e){var t,r,n=this.length,i=this
if("string"!=typeof e)return this.pushStack(A(e).filter((function(){for(t=0;t<n;t++)if(A.contains(i[t],this))return!0})))
for(r=this.pushStack([]),t=0;t<n;t++)A.find(e,i[t],r)
return n>1?A.uniqueSort(r):r},filter:function(e){return this.pushStack(L(this,e||[],!1))},not:function(e){return this.pushStack(L(this,e||[],!0))},is:function(e){return!!L(this,"string"==typeof e&&S.test(e)?A(e):e||[],!1).length}})
var F,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(A.fn.init=function(e,t,r){var n,i
if(!e)return this
if(r=r||F,"string"==typeof e){if(!(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:q.exec(e))||!n[1]&&t)return!t||t.jquery?(t||r).find(e):this.constructor(t).find(e)
if(n[1]){if(t=t instanceof A?t[0]:t,A.merge(this,A.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:b,!0)),O.test(n[1])&&A.isPlainObject(t))for(n in t)v(this[n])?this[n](t[n]):this.attr(n,t[n])
return this}return(i=b.getElementById(n[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==r.ready?r.ready(e):e(A):A.makeArray(e,this)}).prototype=A.fn,F=A(b)
var P=/^(?:parents|prev(?:Until|All))/,R={children:!0,contents:!0,next:!0,prev:!0}
function B(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}A.fn.extend({has:function(e){var t=A(e,this),r=t.length
return this.filter((function(){for(var e=0;e<r;e++)if(A.contains(this,t[e]))return!0}))},closest:function(e,t){var r,n=0,i=this.length,o=[],a="string"!=typeof e&&A(e)
if(!S.test(e))for(;n<i;n++)for(r=this[n];r&&r!==t;r=r.parentNode)if(r.nodeType<11&&(a?a.index(r)>-1:1===r.nodeType&&A.find.matchesSelector(r,e))){o.push(r)
break}return this.pushStack(o.length>1?A.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?c.call(A(e),this[0]):c.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(A.uniqueSort(A.merge(this.get(),A(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),A.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return C(e,"parentNode")},parentsUntil:function(e,t,r){return C(e,"parentNode",r)},next:function(e){return B(e,"nextSibling")},prev:function(e){return B(e,"previousSibling")},nextAll:function(e){return C(e,"nextSibling")},prevAll:function(e){return C(e,"previousSibling")},nextUntil:function(e,t,r){return C(e,"nextSibling",r)},prevUntil:function(e,t,r){return C(e,"previousSibling",r)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&a(e.contentDocument)?e.contentDocument:(N(e,"template")&&(e=e.content||e),A.merge([],e.childNodes))}},(function(e,t){A.fn[e]=function(r,n){var i=A.map(this,t,r)
return"Until"!==e.slice(-5)&&(n=r),n&&"string"==typeof n&&(i=A.filter(n,i)),this.length>1&&(R[e]||A.uniqueSort(i),P.test(e)&&i.reverse()),this.pushStack(i)}}))
var j=/[^\x20\t\r\n\f]+/g
function I(e){return e}function M(e){throw e}function U(e,t,r,n){var i
try{e&&v(i=e.promise)?i.call(e).done(t).fail(r):e&&v(i=e.then)?i.call(e,t,r):t.apply(void 0,[e].slice(n))}catch(e){r.apply(void 0,[e])}}A.Callbacks=function(e){e="string"==typeof e?function(e){var t={}
return A.each(e.match(j)||[],(function(e,r){t[r]=!0})),t}(e):A.extend({},e)
var t,r,n,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,n=t=!0;a.length;s=-1)for(r=a.shift();++s<o.length;)!1===o[s].apply(r[0],r[1])&&e.stopOnFalse&&(s=o.length,r=!1)
e.memory||(r=!1),t=!1,i&&(o=r?[]:"")},l={add:function(){return o&&(r&&!t&&(s=o.length-1,a.push(r)),function t(r){A.each(r,(function(r,n){v(n)?e.unique&&l.has(n)||o.push(n):n&&n.length&&"string"!==E(n)&&t(n)}))}(arguments),r&&!t&&u()),this},remove:function(){return A.each(arguments,(function(e,t){for(var r;(r=A.inArray(t,o,r))>-1;)o.splice(r,1),r<=s&&s--})),this},has:function(e){return e?A.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=r="",this},disabled:function(){return!o},lock:function(){return i=a=[],r||t||(o=r=""),this},locked:function(){return!!i},fireWith:function(e,r){return i||(r=[e,(r=r||[]).slice?r.slice():r],a.push(r),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!n}}
return l},A.extend({Deferred:function(e){var t=[["notify","progress",A.Callbacks("memory"),A.Callbacks("memory"),2],["resolve","done",A.Callbacks("once memory"),A.Callbacks("once memory"),0,"resolved"],["reject","fail",A.Callbacks("once memory"),A.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments
return A.Deferred((function(r){A.each(t,(function(t,n){var i=v(e[n[4]])&&e[n[4]]
o[n[1]]((function(){var e=i&&i.apply(this,arguments)
e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[n[0]+"With"](this,i?[e]:arguments)}))})),e=null})).promise()},then:function(e,r,i){var o=0
function a(e,t,r,i){return function(){var s=this,u=arguments,l=function(){var n,l
if(!(e<o)){if((n=r.apply(s,u))===t.promise())throw new TypeError("Thenable self-resolution")
l=n&&("object"==typeof n||"function"==typeof n)&&n.then,v(l)?i?l.call(n,a(o,t,I,i),a(o,t,M,i)):(o++,l.call(n,a(o,t,I,i),a(o,t,M,i),a(o,t,I,t.notifyWith))):(r!==I&&(s=void 0,u=[n]),(i||t.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(n){A.Deferred.exceptionHook&&A.Deferred.exceptionHook(n,c.stackTrace),e+1>=o&&(r!==M&&(s=void 0,u=[n]),t.rejectWith(s,u))}}
e?c():(A.Deferred.getStackHook&&(c.stackTrace=A.Deferred.getStackHook()),n.setTimeout(c))}}return A.Deferred((function(n){t[0][3].add(a(0,n,v(i)?i:I,n.notifyWith)),t[1][3].add(a(0,n,v(e)?e:I)),t[2][3].add(a(0,n,v(r)?r:M))})).promise()},promise:function(e){return null!=e?A.extend(e,i):i}},o={}
return A.each(t,(function(e,n){var a=n[2],s=n[5]
i[n[1]]=a.add,s&&a.add((function(){r=s}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),a.add(n[3].fire),o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},o[n[0]+"With"]=a.fireWith})),i.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,r=t,n=Array(r),i=s.call(arguments),o=A.Deferred(),a=function(e){return function(r){n[e]=this,i[e]=arguments.length>1?s.call(arguments):r,--t||o.resolveWith(n,i)}}
if(t<=1&&(U(e,o.done(a(r)).resolve,o.reject,!t),"pending"===o.state()||v(i[r]&&i[r].then)))return o.then()
for(;r--;)U(i[r],a(r),o.reject)
return o.promise()}})
var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
A.Deferred.exceptionHook=function(e,t){n.console&&n.console.warn&&e&&H.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},A.readyException=function(e){n.setTimeout((function(){throw e}))}
var $=A.Deferred()
function z(){b.removeEventListener("DOMContentLoaded",z),n.removeEventListener("load",z),A.ready()}A.fn.ready=function(e){return $.then(e).catch((function(e){A.readyException(e)})),this},A.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--A.readyWait:A.isReady)||(A.isReady=!0,!0!==e&&--A.readyWait>0||$.resolveWith(b,[A]))}}),A.ready.then=$.then,"complete"===b.readyState||"loading"!==b.readyState&&!b.documentElement.doScroll?n.setTimeout(A.ready):(b.addEventListener("DOMContentLoaded",z),n.addEventListener("load",z))
var V=function(e,t,r,n,i,o,a){var s=0,u=e.length,l=null==r
if("object"===E(r))for(s in i=!0,r)V(e,t,s,r[s],!0,o,a)
else if(void 0!==n&&(i=!0,v(n)||(a=!0),l&&(a?(t.call(e,n),t=null):(l=t,t=function(e,t,r){return l.call(A(e),r)})),t))for(;s<u;s++)t(e[s],r,a?n:n.call(e[s],s,t(e[s],r)))
return i?e:l?t.call(e):u?t(e[0],r):o},G=/^-ms-/,W=/-([a-z])/g
function Q(e,t){return t.toUpperCase()}function K(e){return e.replace(G,"ms-").replace(W,Q)}var Z=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}
function X(){this.expando=A.expando+X.uid++}X.uid=1,X.prototype={cache:function(e){var t=e[this.expando]
return t||(t={},Z(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,r){var n,i=this.cache(e)
if("string"==typeof t)i[K(t)]=r
else for(n in t)i[K(n)]=t[n]
return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][K(t)]},access:function(e,t,r){return void 0===t||t&&"string"==typeof t&&void 0===r?this.get(e,t):(this.set(e,t,r),void 0!==r?r:t)},remove:function(e,t){var r,n=e[this.expando]
if(void 0!==n){if(void 0!==t){r=(t=Array.isArray(t)?t.map(K):(t=K(t))in n?[t]:t.match(j)||[]).length
for(;r--;)delete n[t[r]]}(void 0===t||A.isEmptyObject(n))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando]
return void 0!==t&&!A.isEmptyObject(t)}}
var Y=new X,J=new X,ee=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,te=/[A-Z]/g
function re(e,t,r){var n
if(void 0===r&&1===e.nodeType)if(n="data-"+t.replace(te,"-$&").toLowerCase(),"string"==typeof(r=e.getAttribute(n))){try{r=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ee.test(e)?JSON.parse(e):e)}(r)}catch(e){}J.set(e,t,r)}else r=void 0
return r}A.extend({hasData:function(e){return J.hasData(e)||Y.hasData(e)},data:function(e,t,r){return J.access(e,t,r)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,r){return Y.access(e,t,r)},_removeData:function(e,t){Y.remove(e,t)}}),A.fn.extend({data:function(e,t){var r,n,i,o=this[0],a=o&&o.attributes
if(void 0===e){if(this.length&&(i=J.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){for(r=a.length;r--;)a[r]&&0===(n=a[r].name).indexOf("data-")&&(n=K(n.slice(5)),re(o,n,i[n]))
Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each((function(){J.set(this,e)})):V(this,(function(t){var r
if(o&&void 0===t)return void 0!==(r=J.get(o,e))||void 0!==(r=re(o,e))?r:void 0
this.each((function(){J.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){J.remove(this,e)}))}}),A.extend({queue:function(e,t,r){var n
if(e)return t=(t||"fx")+"queue",n=Y.get(e,t),r&&(!n||Array.isArray(r)?n=Y.access(e,t,A.makeArray(r)):n.push(r)),n||[]},dequeue:function(e,t){t=t||"fx"
var r=A.queue(e,t),n=r.length,i=r.shift(),o=A._queueHooks(e,t)
"inprogress"===i&&(i=r.shift(),n--),i&&("fx"===t&&r.unshift("inprogress"),delete o.stop,i.call(e,(function(){A.dequeue(e,t)}),o)),!n&&o&&o.empty.fire()},_queueHooks:function(e,t){var r=t+"queueHooks"
return Y.get(e,r)||Y.access(e,r,{empty:A.Callbacks("once memory").add((function(){Y.remove(e,[t+"queue",r])}))})}}),A.fn.extend({queue:function(e,t){var r=2
return"string"!=typeof e&&(t=e,e="fx",r--),arguments.length<r?A.queue(this[0],e):void 0===t?this:this.each((function(){var r=A.queue(this,e,t)
A._queueHooks(this,e),"fx"===e&&"inprogress"!==r[0]&&A.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){A.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var r,n=1,i=A.Deferred(),o=this,a=this.length,s=function(){--n||i.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(r=Y.get(o[a],e+"queueHooks"))&&r.empty&&(n++,r.empty.add(s))
return s(),i.promise(t)}})
var ne=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+ne+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=b.documentElement,se=function(e){return A.contains(e.ownerDocument,e)},ue={composed:!0}
ae.getRootNode&&(se=function(e){return A.contains(e.ownerDocument,e)||e.getRootNode(ue)===e.ownerDocument})
var le=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&se(e)&&"none"===A.css(e,"display")}
function ce(e,t,r,n){var i,o,a=20,s=n?function(){return n.cur()}:function(){return A.css(e,t,"")},u=s(),l=r&&r[3]||(A.cssNumber[t]?"":"px"),c=e.nodeType&&(A.cssNumber[t]||"px"!==l&&+u)&&ie.exec(A.css(e,t))
if(c&&c[3]!==l){for(u/=2,l=l||c[3],c=+u||1;a--;)A.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o
c*=2,A.style(e,t,c+l),r=r||[]}return r&&(c=+c||+u||0,i=r[1]?c+(r[1]+1)*r[2]:+r[2],n&&(n.unit=l,n.start=c,n.end=i)),i}var fe={}
function pe(e){var t,r=e.ownerDocument,n=e.nodeName,i=fe[n]
return i||(t=r.body.appendChild(r.createElement(n)),i=A.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),fe[n]=i,i)}function de(e,t){for(var r,n,i=[],o=0,a=e.length;o<a;o++)(n=e[o]).style&&(r=n.style.display,t?("none"===r&&(i[o]=Y.get(n,"display")||null,i[o]||(n.style.display="")),""===n.style.display&&le(n)&&(i[o]=pe(n))):"none"!==r&&(i[o]="none",Y.set(n,"display",r)))
for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o])
return e}A.fn.extend({show:function(){return de(this,!0)},hide:function(){return de(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){le(this)?A(this).show():A(this).hide()}))}})
var he,ge,me=/^(?:checkbox|radio)$/i,ve=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ye=/^$|^module$|\/(?:java|ecma)script/i
he=b.createDocumentFragment().appendChild(b.createElement("div")),(ge=b.createElement("input")).setAttribute("type","radio"),ge.setAttribute("checked","checked"),ge.setAttribute("name","t"),he.appendChild(ge),m.checkClone=he.cloneNode(!0).cloneNode(!0).lastChild.checked,he.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!he.cloneNode(!0).lastChild.defaultValue,he.innerHTML="<option></option>",m.option=!!he.lastChild
var be={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
function we(e,t){var r
return r=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?A.merge([e],r):r}function xe(e,t){for(var r=0,n=e.length;r<n;r++)Y.set(e[r],"globalEval",!t||Y.get(t[r],"globalEval"))}be.tbody=be.tfoot=be.colgroup=be.caption=be.thead,be.th=be.td,m.option||(be.optgroup=be.option=[1,"<select multiple='multiple'>","</select>"])
var Ee=/<|&#?\w+;/
function De(e,t,r,n,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===E(o))A.merge(p,o.nodeType?[o]:o)
else if(Ee.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(ve.exec(o)||["",""])[1].toLowerCase(),u=be[s]||be._default,a.innerHTML=u[1]+A.htmlPrefilter(o)+u[2],c=u[0];c--;)a=a.lastChild
A.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o))
for(f.textContent="",d=0;o=p[d++];)if(n&&A.inArray(o,n)>-1)i&&i.push(o)
else if(l=se(o),a=we(f.appendChild(o),"script"),l&&xe(a),r)for(c=0;o=a[c++];)ye.test(o.type||"")&&r.push(o)
return f}var Ae=/^([^.]*)(?:\.(.+)|)/
function _e(){return!0}function ke(){return!1}function Ce(e,t){return e===function(){try{return b.activeElement}catch(e){}}()==("focus"===t)}function Te(e,t,r,n,i,o){var a,s
if("object"==typeof t){for(s in"string"!=typeof r&&(n=n||r,r=void 0),t)Te(e,s,r,n,t[s],o)
return e}if(null==n&&null==i?(i=r,n=r=void 0):null==i&&("string"==typeof r?(i=n,n=void 0):(i=n,n=r,r=void 0)),!1===i)i=ke
else if(!i)return e
return 1===o&&(a=i,i=function(e){return A().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=A.guid++)),e.each((function(){A.event.add(this,t,i,n,r)}))}function Se(e,t,r){r?(Y.set(e,t,!1),A.event.add(e,t,{namespace:!1,handler:function(e){var n,i,o=Y.get(this,t)
if(1&e.isTrigger&&this[t]){if(o.length)(A.event.special[t]||{}).delegateType&&e.stopPropagation()
else if(o=s.call(arguments),Y.set(this,t,o),n=r(this,t),this[t](),o!==(i=Y.get(this,t))||n?Y.set(this,t,!1):i={},o!==i)return e.stopImmediatePropagation(),e.preventDefault(),i&&i.value}else o.length&&(Y.set(this,t,{value:A.event.trigger(A.extend(o[0],A.Event.prototype),o.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,t)&&A.event.add(e,t,_e)}A.event={global:{},add:function(e,t,r,n,i){var o,a,s,u,l,c,f,p,d,h,g,m=Y.get(e)
if(Z(e))for(r.handler&&(r=(o=r).handler,i=o.selector),i&&A.find.matchesSelector(ae,i),r.guid||(r.guid=A.guid++),(u=m.events)||(u=m.events=Object.create(null)),(a=m.handle)||(a=m.handle=function(t){return void 0!==A&&A.event.triggered!==t.type?A.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(j)||[""]).length;l--;)d=g=(s=Ae.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=A.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=A.event.special[d]||{},c=A.extend({type:d,origType:g,data:n,handler:r,guid:r.guid,selector:i,needsContext:i&&A.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,n,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=r.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),A.event.global[d]=!0)},remove:function(e,t,r,n,i){var o,a,s,u,l,c,f,p,d,h,g,m=Y.hasData(e)&&Y.get(e)
if(m&&(u=m.events)){for(l=(t=(t||"").match(j)||[""]).length;l--;)if(d=g=(s=Ae.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=A.event.special[d]||{},p=u[d=(n?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||r&&r.guid!==c.guid||s&&!s.test(c.namespace)||n&&n!==c.selector&&("**"!==n||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c))
a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,m.handle)||A.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)A.event.remove(e,d+t[l],r,n,!0)
A.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,r,n,i,o,a,s=new Array(arguments.length),u=A.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=A.event.special[u.type]||{}
for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t]
if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){for(a=A.event.handlers.call(this,u,l),t=0;(i=a[t++])&&!u.isPropagationStopped();)for(u.currentTarget=i.elem,r=0;(o=i.handlers[r++])&&!u.isImmediatePropagationStopped();)u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(n=((A.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=n)&&(u.preventDefault(),u.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var r,n,i,o,a,s=[],u=t.delegateCount,l=e.target
if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},r=0;r<u;r++)void 0===a[i=(n=t[r]).selector+" "]&&(a[i]=n.needsContext?A(i,this).index(l)>-1:A.find(i,this,null,[l]).length),a[i]&&o.push(n)
o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(A.Event.prototype,e,{enumerable:!0,configurable:!0,get:v(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[A.expando]?e:new A.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e
return me.test(t.type)&&t.click&&N(t,"input")&&Se(t,"click",_e),!1},trigger:function(e){var t=this||e
return me.test(t.type)&&t.click&&N(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target
return me.test(t.type)&&t.click&&N(t,"input")&&Y.get(t,"click")||N(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},A.removeEvent=function(e,t,r){e.removeEventListener&&e.removeEventListener(t,r)},A.Event=function(e,t){if(!(this instanceof A.Event))return new A.Event(e,t)
e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?_e:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&A.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[A.expando]=!0},A.Event.prototype={constructor:A.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=_e,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=_e,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=_e,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},A.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},A.event.addProp),A.each({focus:"focusin",blur:"focusout"},(function(e,t){A.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(t){return Y.get(t.target,e)},delegateType:t}})),A.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){A.event.special[e]={delegateType:t,bindType:t,handle:function(e){var r,n=e.relatedTarget,i=e.handleObj
return n&&(n===this||A.contains(this,n))||(e.type=i.origType,r=i.handler.apply(this,arguments),e.type=t),r}}})),A.fn.extend({on:function(e,t,r,n){return Te(this,e,t,r,n)},one:function(e,t,r,n){return Te(this,e,t,r,n,1)},off:function(e,t,r){var n,i
if(e&&e.preventDefault&&e.handleObj)return n=e.handleObj,A(e.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this
if("object"==typeof e){for(i in e)this.off(i,t,e[i])
return this}return!1!==t&&"function"!=typeof t||(r=t,t=void 0),!1===r&&(r=ke),this.each((function(){A.event.remove(this,e,r,t)}))}})
var Ne=/<script|<style|<link/i,Oe=/checked\s*(?:[^=]|=\s*.checked.)/i,Le=/^\s*<!\[CDATA\[|\]\]>\s*$/g
function Fe(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")&&A(e).children("tbody")[0]||e}function qe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Pe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Re(e,t){var r,n,i,o,a,s
if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(r=0,n=s[i].length;r<n;r++)A.event.add(t,i,s[i][r])
J.hasData(e)&&(o=J.access(e),a=A.extend({},o),J.set(t,a))}}function Be(e,t){var r=t.nodeName.toLowerCase()
"input"===r&&me.test(e.type)?t.checked=e.checked:"input"!==r&&"textarea"!==r||(t.defaultValue=e.defaultValue)}function je(e,t,r,n){t=u(t)
var i,o,a,s,l,c,f=0,p=e.length,d=p-1,h=t[0],g=v(h)
if(g||p>1&&"string"==typeof h&&!m.checkClone&&Oe.test(h))return e.each((function(i){var o=e.eq(i)
g&&(t[0]=h.call(this,i,o.html())),je(o,t,r,n)}))
if(p&&(o=(i=De(t,e[0].ownerDocument,!1,e,n)).firstChild,1===i.childNodes.length&&(i=o),o||n)){for(s=(a=A.map(we(i,"script"),qe)).length;f<p;f++)l=i,f!==d&&(l=A.clone(l,!0,!0),s&&A.merge(a,we(l,"script"))),r.call(e[f],l,f)
if(s)for(c=a[a.length-1].ownerDocument,A.map(a,Pe),f=0;f<s;f++)l=a[f],ye.test(l.type||"")&&!Y.access(l,"globalEval")&&A.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?A._evalUrl&&!l.noModule&&A._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},c):x(l.textContent.replace(Le,""),l,c))}return e}function Ie(e,t,r){for(var n,i=t?A.filter(t,e):e,o=0;null!=(n=i[o]);o++)r||1!==n.nodeType||A.cleanData(we(n)),n.parentNode&&(r&&se(n)&&xe(we(n,"script")),n.parentNode.removeChild(n))
return e}A.extend({htmlPrefilter:function(e){return e},clone:function(e,t,r){var n,i,o,a,s=e.cloneNode(!0),u=se(e)
if(!(m.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||A.isXMLDoc(e)))for(a=we(s),n=0,i=(o=we(e)).length;n<i;n++)Be(o[n],a[n])
if(t)if(r)for(o=o||we(e),a=a||we(s),n=0,i=o.length;n<i;n++)Re(o[n],a[n])
else Re(e,s)
return(a=we(s,"script")).length>0&&xe(a,!u&&we(e,"script")),s},cleanData:function(e){for(var t,r,n,i=A.event.special,o=0;void 0!==(r=e[o]);o++)if(Z(r)){if(t=r[Y.expando]){if(t.events)for(n in t.events)i[n]?A.event.remove(r,n):A.removeEvent(r,n,t.handle)
r[Y.expando]=void 0}r[J.expando]&&(r[J.expando]=void 0)}}}),A.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return V(this,(function(e){return void 0===e?A.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return je(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Fe(this,e).appendChild(e)}))},prepend:function(){return je(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Fe(this,e)
t.insertBefore(e,t.firstChild)}}))},before:function(){return je(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return je(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(A.cleanData(we(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return A.clone(this,e,t)}))},html:function(e){return V(this,(function(e){var t=this[0]||{},r=0,n=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!Ne.test(e)&&!be[(ve.exec(e)||["",""])[1].toLowerCase()]){e=A.htmlPrefilter(e)
try{for(;r<n;r++)1===(t=this[r]||{}).nodeType&&(A.cleanData(we(t,!1)),t.innerHTML=e)
t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[]
return je(this,arguments,(function(t){var r=this.parentNode
A.inArray(this,e)<0&&(A.cleanData(we(this)),r&&r.replaceChild(t,this))}),e)}}),A.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){A.fn[e]=function(e){for(var r,n=[],i=A(e),o=i.length-1,a=0;a<=o;a++)r=a===o?this:this.clone(!0),A(i[a])[t](r),l.apply(n,r.get())
return this.pushStack(n)}}))
var Me=new RegExp("^("+ne+")(?!px)[a-z%]+$","i"),Ue=/^--/,He=function(e){var t=e.ownerDocument.defaultView
return t&&t.opener||(t=n),t.getComputedStyle(e)},$e=function(e,t,r){var n,i,o={}
for(i in t)o[i]=e.style[i],e.style[i]=t[i]
for(i in n=r.call(e),t)e.style[i]=o[i]
return n},ze=new RegExp(oe.join("|"),"i"),Ve="[\\x20\\t\\r\\n\\f]",Ge=new RegExp("^"+Ve+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Ve+"+$","g")
function We(e,t,r){var n,i,o,a,s=Ue.test(t),u=e.style
return(r=r||He(e))&&(a=r.getPropertyValue(t)||r[t],s&&a&&(a=a.replace(Ge,"$1")||void 0),""!==a||se(e)||(a=A.style(e,t)),!m.pixelBoxStyles()&&Me.test(a)&&ze.test(t)&&(n=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=r.width,u.width=n,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Qe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments)
delete this.get}}}!function(){function e(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ae.appendChild(l).appendChild(c)
var e=n.getComputedStyle(c)
r="1%"!==e.top,u=12===t(e.marginLeft),c.style.right="60%",a=36===t(e.right),i=36===t(e.width),c.style.position="absolute",o=12===t(c.offsetWidth/3),ae.removeChild(l),c=null}}function t(e){return Math.round(parseFloat(e))}var r,i,o,a,s,u,l=b.createElement("div"),c=b.createElement("div")
c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===c.style.backgroundClip,A.extend(m,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),a},pixelPosition:function(){return e(),r},reliableMarginLeft:function(){return e(),u},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var e,t,r,i
return null==s&&(e=b.createElement("table"),t=b.createElement("tr"),r=b.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",r.style.height="9px",r.style.display="block",ae.appendChild(e).appendChild(t).appendChild(r),i=n.getComputedStyle(t),s=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===t.offsetHeight,ae.removeChild(e)),s}}))}()
var Ke=["Webkit","Moz","ms"],Ze=b.createElement("div").style,Xe={}
function Ye(e){return A.cssProps[e]||Xe[e]||(e in Ze?e:Xe[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),r=Ke.length;r--;)if((e=Ke[r]+t)in Ze)return e}(e)||e)}var Je=/^(none|table(?!-c[ea]).+)/,et={position:"absolute",visibility:"hidden",display:"block"},tt={letterSpacing:"0",fontWeight:"400"}
function rt(e,t,r){var n=ie.exec(t)
return n?Math.max(0,n[2]-(r||0))+(n[3]||"px"):t}function nt(e,t,r,n,i,o){var a="width"===t?1:0,s=0,u=0
if(r===(n?"border":"content"))return 0
for(;a<4;a+=2)"margin"===r&&(u+=A.css(e,r+oe[a],!0,i)),n?("content"===r&&(u-=A.css(e,"padding"+oe[a],!0,i)),"margin"!==r&&(u-=A.css(e,"border"+oe[a]+"Width",!0,i))):(u+=A.css(e,"padding"+oe[a],!0,i),"padding"!==r?u+=A.css(e,"border"+oe[a]+"Width",!0,i):s+=A.css(e,"border"+oe[a]+"Width",!0,i))
return!n&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function it(e,t,r){var n=He(e),i=(!m.boxSizingReliable()||r)&&"border-box"===A.css(e,"boxSizing",!1,n),o=i,a=We(e,t,n),s="offset"+t[0].toUpperCase()+t.slice(1)
if(Me.test(a)){if(!r)return a
a="auto"}return(!m.boxSizingReliable()&&i||!m.reliableTrDimensions()&&N(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===A.css(e,"display",!1,n))&&e.getClientRects().length&&(i="border-box"===A.css(e,"boxSizing",!1,n),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+nt(e,t,r||(i?"border":"content"),o,n,a)+"px"}function ot(e,t,r,n,i){return new ot.prototype.init(e,t,r,n,i)}A.extend({cssHooks:{opacity:{get:function(e,t){if(t){var r=We(e,"opacity")
return""===r?"1":r}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,r,n){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=K(t),u=Ue.test(t),l=e.style
if(u||(t=Ye(s)),a=A.cssHooks[t]||A.cssHooks[s],void 0===r)return a&&"get"in a&&void 0!==(i=a.get(e,!1,n))?i:l[t]
"string"==(o=typeof r)&&(i=ie.exec(r))&&i[1]&&(r=ce(e,t,i),o="number"),null!=r&&r==r&&("number"!==o||u||(r+=i&&i[3]||(A.cssNumber[s]?"":"px")),m.clearCloneStyle||""!==r||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(r=a.set(e,r,n))||(u?l.setProperty(t,r):l[t]=r))}},css:function(e,t,r,n){var i,o,a,s=K(t)
return Ue.test(t)||(t=Ye(s)),(a=A.cssHooks[t]||A.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,r)),void 0===i&&(i=We(e,t,n)),"normal"===i&&t in tt&&(i=tt[t]),""===r||r?(o=parseFloat(i),!0===r||isFinite(o)?o||0:i):i}}),A.each(["height","width"],(function(e,t){A.cssHooks[t]={get:function(e,r,n){if(r)return!Je.test(A.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?it(e,t,n):$e(e,et,(function(){return it(e,t,n)}))},set:function(e,r,n){var i,o=He(e),a=!m.scrollboxSize()&&"absolute"===o.position,s=(a||n)&&"border-box"===A.css(e,"boxSizing",!1,o),u=n?nt(e,t,n,s,o):0
return s&&a&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-nt(e,t,"border",!1,o)-.5)),u&&(i=ie.exec(r))&&"px"!==(i[3]||"px")&&(e.style[t]=r,r=A.css(e,t)),rt(0,r,u)}}})),A.cssHooks.marginLeft=Qe(m.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-$e(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),A.each({margin:"",padding:"",border:"Width"},(function(e,t){A.cssHooks[e+t]={expand:function(r){for(var n=0,i={},o="string"==typeof r?r.split(" "):[r];n<4;n++)i[e+oe[n]+t]=o[n]||o[n-2]||o[0]
return i}},"margin"!==e&&(A.cssHooks[e+t].set=rt)})),A.fn.extend({css:function(e,t){return V(this,(function(e,t,r){var n,i,o={},a=0
if(Array.isArray(t)){for(n=He(e),i=t.length;a<i;a++)o[t[a]]=A.css(e,t[a],!1,n)
return o}return void 0!==r?A.style(e,t,r):A.css(e,t)}),e,t,arguments.length>1)}}),A.Tween=ot,ot.prototype={constructor:ot,init:function(e,t,r,n,i,o){this.elem=e,this.prop=r,this.easing=i||A.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=n,this.unit=o||(A.cssNumber[r]?"":"px")},cur:function(){var e=ot.propHooks[this.prop]
return e&&e.get?e.get(this):ot.propHooks._default.get(this)},run:function(e){var t,r=ot.propHooks[this.prop]
return this.options.duration?this.pos=t=A.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),r&&r.set?r.set(this):ot.propHooks._default.set(this),this}},ot.prototype.init.prototype=ot.prototype,ot.propHooks={_default:{get:function(e){var t
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=A.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){A.fx.step[e.prop]?A.fx.step[e.prop](e):1!==e.elem.nodeType||!A.cssHooks[e.prop]&&null==e.elem.style[Ye(e.prop)]?e.elem[e.prop]=e.now:A.style(e.elem,e.prop,e.now+e.unit)}}},ot.propHooks.scrollTop=ot.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},A.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},A.fx=ot.prototype.init,A.fx.step={}
var at,st,ut=/^(?:toggle|show|hide)$/,lt=/queueHooks$/
function ct(){st&&(!1===b.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(ct):n.setTimeout(ct,A.fx.interval),A.fx.tick())}function ft(){return n.setTimeout((function(){at=void 0})),at=Date.now()}function pt(e,t){var r,n=0,i={height:e}
for(t=t?1:0;n<4;n+=2-t)i["margin"+(r=oe[n])]=i["padding"+r]=e
return t&&(i.opacity=i.width=e),i}function dt(e,t,r){for(var n,i=(ht.tweeners[t]||[]).concat(ht.tweeners["*"]),o=0,a=i.length;o<a;o++)if(n=i[o].call(r,t,e))return n}function ht(e,t,r){var n,i,o=0,a=ht.prefilters.length,s=A.Deferred().always((function(){delete u.elem})),u=function(){if(i)return!1
for(var t=at||ft(),r=Math.max(0,l.startTime+l.duration-t),n=1-(r/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(n)
return s.notifyWith(e,[l,n,r]),n<1&&a?r:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:A.extend({},t),opts:A.extend(!0,{specialEasing:{},easing:A.easing._default},r),originalProperties:t,originalOptions:r,startTime:at||ft(),duration:r.duration,tweens:[],createTween:function(t,r){var n=A.Tween(e,l.opts,t,r,l.opts.specialEasing[t]||l.opts.easing)
return l.tweens.push(n),n},stop:function(t){var r=0,n=t?l.tweens.length:0
if(i)return this
for(i=!0;r<n;r++)l.tweens[r].run(1)
return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props
for(function(e,t){var r,n,i,o,a
for(r in e)if(i=t[n=K(r)],o=e[r],Array.isArray(o)&&(i=o[1],o=e[r]=o[0]),r!==n&&(e[n]=o,delete e[r]),(a=A.cssHooks[n])&&"expand"in a)for(r in o=a.expand(o),delete e[n],o)r in e||(e[r]=o[r],t[r]=i)
else t[n]=i}(c,l.opts.specialEasing);o<a;o++)if(n=ht.prefilters[o].call(l,e,c,l.opts))return v(n.stop)&&(A._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n
return A.map(c,dt,l),v(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),A.fx.timer(A.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}A.Animation=A.extend(ht,{tweeners:{"*":[function(e,t){var r=this.createTween(e,t)
return ce(r.elem,e,ie.exec(t),r),r}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(j)
for(var r,n=0,i=e.length;n<i;n++)r=e[n],ht.tweeners[r]=ht.tweeners[r]||[],ht.tweeners[r].unshift(t)},prefilters:[function(e,t,r){var n,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&le(e),m=Y.get(e,"fxshow")
for(n in r.queue||(null==(a=A._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always((function(){p.always((function(){a.unqueued--,A.queue(e,"fx").length||a.empty.fire()}))}))),t)if(i=t[n],ut.test(i)){if(delete t[n],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[n])continue
g=!0}d[n]=m&&m[n]||A.style(e,n)}if((u=!A.isEmptyObject(t))||!A.isEmptyObject(d))for(n in f&&1===e.nodeType&&(r.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=m&&m.display)&&(l=Y.get(e,"display")),"none"===(c=A.css(e,"display"))&&(l?c=l:(de([e],!0),l=e.style.display||l,c=A.css(e,"display"),de([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===A.css(e,"float")&&(u||(p.done((function(){h.display=l})),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),r.overflow&&(h.overflow="hidden",p.always((function(){h.overflow=r.overflow[0],h.overflowX=r.overflow[1],h.overflowY=r.overflow[2]}))),u=!1,d)u||(m?"hidden"in m&&(g=m.hidden):m=Y.access(e,"fxshow",{display:l}),o&&(m.hidden=!g),g&&de([e],!0),p.done((function(){for(n in g||de([e]),Y.remove(e,"fxshow"),d)A.style(e,n,d[n])}))),u=dt(g?m[n]:0,n,p),n in m||(m[n]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ht.prefilters.unshift(e):ht.prefilters.push(e)}}),A.speed=function(e,t,r){var n=e&&"object"==typeof e?A.extend({},e):{complete:r||!r&&t||v(e)&&e,duration:e,easing:r&&t||t&&!v(t)&&t}
return A.fx.off?n.duration=0:"number"!=typeof n.duration&&(n.duration in A.fx.speeds?n.duration=A.fx.speeds[n.duration]:n.duration=A.fx.speeds._default),null!=n.queue&&!0!==n.queue||(n.queue="fx"),n.old=n.complete,n.complete=function(){v(n.old)&&n.old.call(this),n.queue&&A.dequeue(this,n.queue)},n},A.fn.extend({fadeTo:function(e,t,r,n){return this.filter(le).css("opacity",0).show().end().animate({opacity:t},e,r,n)},animate:function(e,t,r,n){var i=A.isEmptyObject(e),o=A.speed(t,r,n),a=function(){var t=ht(this,A.extend({},e),o);(i||Y.get(this,"finish"))&&t.stop(!0)}
return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,r){var n=function(e){var t=e.stop
delete e.stop,t(r)}
return"string"!=typeof e&&(r=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",o=A.timers,a=Y.get(this)
if(i)a[i]&&a[i].stop&&n(a[i])
else for(i in a)a[i]&&a[i].stop&&lt.test(i)&&n(a[i])
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(r),t=!1,o.splice(i,1))
!t&&r||A.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,r=Y.get(this),n=r[e+"queue"],i=r[e+"queueHooks"],o=A.timers,a=n?n.length:0
for(r.finish=!0,A.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;t<a;t++)n[t]&&n[t].finish&&n[t].finish.call(this)
delete r.finish}))}}),A.each(["toggle","show","hide"],(function(e,t){var r=A.fn[t]
A.fn[t]=function(e,n,i){return null==e||"boolean"==typeof e?r.apply(this,arguments):this.animate(pt(t,!0),e,n,i)}})),A.each({slideDown:pt("show"),slideUp:pt("hide"),slideToggle:pt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){A.fn[e]=function(e,r,n){return this.animate(t,e,r,n)}})),A.timers=[],A.fx.tick=function(){var e,t=0,r=A.timers
for(at=Date.now();t<r.length;t++)(e=r[t])()||r[t]!==e||r.splice(t--,1)
r.length||A.fx.stop(),at=void 0},A.fx.timer=function(e){A.timers.push(e),A.fx.start()},A.fx.interval=13,A.fx.start=function(){st||(st=!0,ct())},A.fx.stop=function(){st=null},A.fx.speeds={slow:600,fast:200,_default:400},A.fn.delay=function(e,t){return e=A.fx&&A.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,r){var i=n.setTimeout(t,e)
r.stop=function(){n.clearTimeout(i)}}))},function(){var e=b.createElement("input"),t=b.createElement("select").appendChild(b.createElement("option"))
e.type="checkbox",m.checkOn=""!==e.value,m.optSelected=t.selected,(e=b.createElement("input")).value="t",e.type="radio",m.radioValue="t"===e.value}()
var gt,mt=A.expr.attrHandle
A.fn.extend({attr:function(e,t){return V(this,A.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){A.removeAttr(this,e)}))}}),A.extend({attr:function(e,t,r){var n,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?A.prop(e,t,r):(1===o&&A.isXMLDoc(e)||(i=A.attrHooks[t.toLowerCase()]||(A.expr.match.bool.test(t)?gt:void 0)),void 0!==r?null===r?void A.removeAttr(e,t):i&&"set"in i&&void 0!==(n=i.set(e,r,t))?n:(e.setAttribute(t,r+""),r):i&&"get"in i&&null!==(n=i.get(e,t))?n:null==(n=A.find.attr(e,t))?void 0:n)},attrHooks:{type:{set:function(e,t){if(!m.radioValue&&"radio"===t&&N(e,"input")){var r=e.value
return e.setAttribute("type",t),r&&(e.value=r),t}}}},removeAttr:function(e,t){var r,n=0,i=t&&t.match(j)
if(i&&1===e.nodeType)for(;r=i[n++];)e.removeAttribute(r)}}),gt={set:function(e,t,r){return!1===t?A.removeAttr(e,r):e.setAttribute(r,r),r}},A.each(A.expr.match.bool.source.match(/\w+/g),(function(e,t){var r=mt[t]||A.find.attr
mt[t]=function(e,t,n){var i,o,a=t.toLowerCase()
return n||(o=mt[a],mt[a]=i,i=null!=r(e,t,n)?a:null,mt[a]=o),i}}))
var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i
function bt(e){return(e.match(j)||[]).join(" ")}function wt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(j)||[]}A.fn.extend({prop:function(e,t){return V(this,A.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[A.propFix[e]||e]}))}}),A.extend({prop:function(e,t,r){var n,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return 1===o&&A.isXMLDoc(e)||(t=A.propFix[t]||t,i=A.propHooks[t]),void 0!==r?i&&"set"in i&&void 0!==(n=i.set(e,r,t))?n:e[t]=r:i&&"get"in i&&null!==(n=i.get(e,t))?n:e[t]},propHooks:{tabIndex:{get:function(e){var t=A.find.attr(e,"tabindex")
return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),m.optSelected||(A.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode
t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),A.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){A.propFix[this.toLowerCase()]=this})),A.fn.extend({addClass:function(e){var t,r,n,i,o,a
return v(e)?this.each((function(t){A(this).addClass(e.call(this,t,wt(this)))})):(t=xt(e)).length?this.each((function(){if(n=wt(this),r=1===this.nodeType&&" "+bt(n)+" "){for(o=0;o<t.length;o++)i=t[o],r.indexOf(" "+i+" ")<0&&(r+=i+" ")
a=bt(r),n!==a&&this.setAttribute("class",a)}})):this},removeClass:function(e){var t,r,n,i,o,a
return v(e)?this.each((function(t){A(this).removeClass(e.call(this,t,wt(this)))})):arguments.length?(t=xt(e)).length?this.each((function(){if(n=wt(this),r=1===this.nodeType&&" "+bt(n)+" "){for(o=0;o<t.length;o++)for(i=t[o];r.indexOf(" "+i+" ")>-1;)r=r.replace(" "+i+" "," ")
a=bt(r),n!==a&&this.setAttribute("class",a)}})):this:this.attr("class","")},toggleClass:function(e,t){var r,n,i,o,a=typeof e,s="string"===a||Array.isArray(e)
return v(e)?this.each((function(r){A(this).toggleClass(e.call(this,r,wt(this),t),t)})):"boolean"==typeof t&&s?t?this.addClass(e):this.removeClass(e):(r=xt(e),this.each((function(){if(s)for(o=A(this),i=0;i<r.length;i++)n=r[i],o.hasClass(n)?o.removeClass(n):o.addClass(n)
else void 0!==e&&"boolean"!==a||((n=wt(this))&&Y.set(this,"__className__",n),this.setAttribute&&this.setAttribute("class",n||!1===e?"":Y.get(this,"__className__")||""))})))},hasClass:function(e){var t,r,n=0
for(t=" "+e+" ";r=this[n++];)if(1===r.nodeType&&(" "+bt(wt(r))+" ").indexOf(t)>-1)return!0
return!1}})
var Et=/\r/g
A.fn.extend({val:function(e){var t,r,n,i=this[0]
return arguments.length?(n=v(e),this.each((function(r){var i
1===this.nodeType&&(null==(i=n?e.call(this,r,A(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=A.map(i,(function(e){return null==e?"":e+""}))),(t=A.valHooks[this.type]||A.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=A.valHooks[i.type]||A.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(r=t.get(i,"value"))?r:"string"==typeof(r=i.value)?r.replace(Et,""):null==r?"":r:void 0}}),A.extend({valHooks:{option:{get:function(e){var t=A.find.attr(e,"value")
return null!=t?t:bt(A.text(e))}},select:{get:function(e){var t,r,n,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length
for(n=o<0?u:a?o:0;n<u;n++)if(((r=i[n]).selected||n===o)&&!r.disabled&&(!r.parentNode.disabled||!N(r.parentNode,"optgroup"))){if(t=A(r).val(),a)return t
s.push(t)}return s},set:function(e,t){for(var r,n,i=e.options,o=A.makeArray(t),a=i.length;a--;)((n=i[a]).selected=A.inArray(A.valHooks.option.get(n),o)>-1)&&(r=!0)
return r||(e.selectedIndex=-1),o}}}}),A.each(["radio","checkbox"],(function(){A.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=A.inArray(A(e).val(),t)>-1}},m.checkOn||(A.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),m.focusin="onfocusin"in n
var Dt=/^(?:focusinfocus|focusoutblur)$/,At=function(e){e.stopPropagation()}
A.extend(A.event,{trigger:function(e,t,r,i){var o,a,s,u,l,c,f,p,h=[r||b],g=d.call(e,"type")?e.type:e,m=d.call(e,"namespace")?e.namespace.split("."):[]
if(a=p=s=r=r||b,3!==r.nodeType&&8!==r.nodeType&&!Dt.test(g+A.event.triggered)&&(g.indexOf(".")>-1&&(m=g.split("."),g=m.shift(),m.sort()),l=g.indexOf(":")<0&&"on"+g,(e=e[A.expando]?e:new A.Event(g,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=m.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),t=null==t?[e]:A.makeArray(t,[e]),f=A.event.special[g]||{},i||!f.trigger||!1!==f.trigger.apply(r,t))){if(!i&&!f.noBubble&&!y(r)){for(u=f.delegateType||g,Dt.test(u+g)||(a=a.parentNode);a;a=a.parentNode)h.push(a),s=a
s===(r.ownerDocument||b)&&h.push(s.defaultView||s.parentWindow||n)}for(o=0;(a=h[o++])&&!e.isPropagationStopped();)p=a,e.type=o>1?u:f.bindType||g,(c=(Y.get(a,"events")||Object.create(null))[e.type]&&Y.get(a,"handle"))&&c.apply(a,t),(c=l&&a[l])&&c.apply&&Z(a)&&(e.result=c.apply(a,t),!1===e.result&&e.preventDefault())
return e.type=g,i||e.isDefaultPrevented()||f._default&&!1!==f._default.apply(h.pop(),t)||!Z(r)||l&&v(r[g])&&!y(r)&&((s=r[l])&&(r[l]=null),A.event.triggered=g,e.isPropagationStopped()&&p.addEventListener(g,At),r[g](),e.isPropagationStopped()&&p.removeEventListener(g,At),A.event.triggered=void 0,s&&(r[l]=s)),e.result}},simulate:function(e,t,r){var n=A.extend(new A.Event,r,{type:e,isSimulated:!0})
A.event.trigger(n,null,t)}}),A.fn.extend({trigger:function(e,t){return this.each((function(){A.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var r=this[0]
if(r)return A.event.trigger(e,t,r,!0)}}),m.focusin||A.each({focus:"focusin",blur:"focusout"},(function(e,t){var r=function(e){A.event.simulate(t,e.target,A.event.fix(e))}
A.event.special[t]={setup:function(){var n=this.ownerDocument||this.document||this,i=Y.access(n,t)
i||n.addEventListener(e,r,!0),Y.access(n,t,(i||0)+1)},teardown:function(){var n=this.ownerDocument||this.document||this,i=Y.access(n,t)-1
i?Y.access(n,t,i):(n.removeEventListener(e,r,!0),Y.remove(n,t))}}}))
var _t=n.location,kt={guid:Date.now()},Ct=/\?/
A.parseXML=function(e){var t,r
if(!e||"string"!=typeof e)return null
try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){}return r=t&&t.getElementsByTagName("parsererror")[0],t&&!r||A.error("Invalid XML: "+(r?A.map(r.childNodes,(function(e){return e.textContent})).join("\n"):e)),t}
var Tt=/\[\]$/,St=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i
function Lt(e,t,r,n){var i
if(Array.isArray(t))A.each(t,(function(t,i){r||Tt.test(e)?n(e,i):Lt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,r,n)}))
else if(r||"object"!==E(t))n(e,t)
else for(i in t)Lt(e+"["+i+"]",t[i],r,n)}A.param=function(e,t){var r,n=[],i=function(e,t){var r=v(t)?t():t
n[n.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==r?"":r)}
if(null==e)return""
if(Array.isArray(e)||e.jquery&&!A.isPlainObject(e))A.each(e,(function(){i(this.name,this.value)}))
else for(r in e)Lt(r,e[r],t,i)
return n.join("&")},A.fn.extend({serialize:function(){return A.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=A.prop(this,"elements")
return e?A.makeArray(e):this})).filter((function(){var e=this.type
return this.name&&!A(this).is(":disabled")&&Ot.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!me.test(e))})).map((function(e,t){var r=A(this).val()
return null==r?null:Array.isArray(r)?A.map(r,(function(e){return{name:t.name,value:e.replace(St,"\r\n")}})):{name:t.name,value:r.replace(St,"\r\n")}})).get()}})
var Ft=/%20/g,qt=/#.*$/,Pt=/([?&])_=[^&]*/,Rt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Bt=/^(?:GET|HEAD)$/,jt=/^\/\//,It={},Mt={},Ut="*/".concat("*"),Ht=b.createElement("a")
function $t(e){return function(t,r){"string"!=typeof t&&(r=t,t="*")
var n,i=0,o=t.toLowerCase().match(j)||[]
if(v(r))for(;n=o[i++];)"+"===n[0]?(n=n.slice(1)||"*",(e[n]=e[n]||[]).unshift(r)):(e[n]=e[n]||[]).push(r)}}function zt(e,t,r,n){var i={},o=e===Mt
function a(s){var u
return i[s]=!0,A.each(e[s]||[],(function(e,s){var l=s(t,r,n)
return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)})),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function Vt(e,t){var r,n,i=A.ajaxSettings.flatOptions||{}
for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r])
return n&&A.extend(!0,e,n),e}Ht.href=_t.href,A.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_t.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ut,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":A.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Vt(Vt(e,A.ajaxSettings),t):Vt(A.ajaxSettings,e)},ajaxPrefilter:$t(It),ajaxTransport:$t(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{}
var r,i,o,a,s,u,l,c,f,p,d=A.ajaxSetup({},t),h=d.context||d,g=d.context&&(h.nodeType||h.jquery)?A(h):A.event,m=A.Deferred(),v=A.Callbacks("once memory"),y=d.statusCode||{},w={},x={},E="canceled",D={readyState:0,getResponseHeader:function(e){var t
if(l){if(!a)for(a={};t=Rt.exec(o);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2])
t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return l?o:null},setRequestHeader:function(e,t){return null==l&&(e=x[e.toLowerCase()]=x[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==l&&(d.mimeType=e),this},statusCode:function(e){var t
if(e)if(l)D.always(e[D.status])
else for(t in e)y[t]=[y[t],e[t]]
return this},abort:function(e){var t=e||E
return r&&r.abort(t),_(0,t),this}}
if(m.promise(D),d.url=((e||d.url||_t.href)+"").replace(jt,_t.protocol+"//"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=(d.dataType||"*").toLowerCase().match(j)||[""],null==d.crossDomain){u=b.createElement("a")
try{u.href=d.url,u.href=u.href,d.crossDomain=Ht.protocol+"//"+Ht.host!=u.protocol+"//"+u.host}catch(e){d.crossDomain=!0}}if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=A.param(d.data,d.traditional)),zt(It,d,t,D),l)return D
for(f in(c=A.event&&d.global)&&0==A.active++&&A.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!Bt.test(d.type),i=d.url.replace(qt,""),d.hasContent?d.data&&d.processData&&0===(d.contentType||"").indexOf("application/x-www-form-urlencoded")&&(d.data=d.data.replace(Ft,"+")):(p=d.url.slice(i.length),d.data&&(d.processData||"string"==typeof d.data)&&(i+=(Ct.test(i)?"&":"?")+d.data,delete d.data),!1===d.cache&&(i=i.replace(Pt,"$1"),p=(Ct.test(i)?"&":"?")+"_="+kt.guid+++p),d.url=i+p),d.ifModified&&(A.lastModified[i]&&D.setRequestHeader("If-Modified-Since",A.lastModified[i]),A.etag[i]&&D.setRequestHeader("If-None-Match",A.etag[i])),(d.data&&d.hasContent&&!1!==d.contentType||t.contentType)&&D.setRequestHeader("Content-Type",d.contentType),D.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Ut+"; q=0.01":""):d.accepts["*"]),d.headers)D.setRequestHeader(f,d.headers[f])
if(d.beforeSend&&(!1===d.beforeSend.call(h,D,d)||l))return D.abort()
if(E="abort",v.add(d.complete),D.done(d.success),D.fail(d.error),r=zt(Mt,d,t,D)){if(D.readyState=1,c&&g.trigger("ajaxSend",[D,d]),l)return D
d.async&&d.timeout>0&&(s=n.setTimeout((function(){D.abort("timeout")}),d.timeout))
try{l=!1,r.send(w,_)}catch(e){if(l)throw e
_(-1,e)}}else _(-1,"No Transport")
function _(e,t,a,u){var f,p,b,w,x,E=t
l||(l=!0,s&&n.clearTimeout(s),r=void 0,o=u||"",D.readyState=e>0?4:0,f=e>=200&&e<300||304===e,a&&(w=function(e,t,r){for(var n,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===n&&(n=e.mimeType||t.getResponseHeader("Content-Type"))
if(n)for(i in s)if(s[i]&&s[i].test(n)){u.unshift(i)
break}if(u[0]in r)o=u[0]
else{for(i in r){if(!u[0]||e.converters[i+" "+u[0]]){o=i
break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),r[o]}(d,D,a)),!f&&A.inArray("script",d.dataTypes)>-1&&A.inArray("json",d.dataTypes)<0&&(d.converters["text script"]=function(){}),w=function(e,t,r,n){var i,o,a,s,u,l={},c=e.dataTypes.slice()
if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a]
for(o=c.shift();o;)if(e.responseFields[o]&&(r[e.responseFields[o]]=t),!u&&n&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u
else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]))
break}if(!0!==a)if(a&&e.throws)t=a(t)
else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(d,w,D,f),f?(d.ifModified&&((x=D.getResponseHeader("Last-Modified"))&&(A.lastModified[i]=x),(x=D.getResponseHeader("etag"))&&(A.etag[i]=x)),204===e||"HEAD"===d.type?E="nocontent":304===e?E="notmodified":(E=w.state,p=w.data,f=!(b=w.error))):(b=E,!e&&E||(E="error",e<0&&(e=0))),D.status=e,D.statusText=(t||E)+"",f?m.resolveWith(h,[p,E,D]):m.rejectWith(h,[D,E,b]),D.statusCode(y),y=void 0,c&&g.trigger(f?"ajaxSuccess":"ajaxError",[D,d,f?p:b]),v.fireWith(h,[D,E]),c&&(g.trigger("ajaxComplete",[D,d]),--A.active||A.event.trigger("ajaxStop")))}return D},getJSON:function(e,t,r){return A.get(e,t,r,"json")},getScript:function(e,t){return A.get(e,void 0,t,"script")}}),A.each(["get","post"],(function(e,t){A[t]=function(e,r,n,i){return v(r)&&(i=i||n,n=r,r=void 0),A.ajax(A.extend({url:e,type:t,dataType:i,data:r,success:n},A.isPlainObject(e)&&e))}})),A.ajaxPrefilter((function(e){var t
for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),A._evalUrl=function(e,t,r){return A.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){A.globalEval(e,t,r)}})},A.fn.extend({wrapAll:function(e){var t
return this[0]&&(v(e)&&(e=e.call(this[0])),t=A(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e})).append(this)),this},wrapInner:function(e){return v(e)?this.each((function(t){A(this).wrapInner(e.call(this,t))})):this.each((function(){var t=A(this),r=t.contents()
r.length?r.wrapAll(e):t.append(e)}))},wrap:function(e){var t=v(e)
return this.each((function(r){A(this).wrapAll(t?e.call(this,r):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){A(this).replaceWith(this.childNodes)})),this}}),A.expr.pseudos.hidden=function(e){return!A.expr.pseudos.visible(e)},A.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},A.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}}
var Gt={0:200,1223:204},Wt=A.ajaxSettings.xhr()
m.cors=!!Wt&&"withCredentials"in Wt,m.ajax=Wt=!!Wt,A.ajaxTransport((function(e){var t,r
if(m.cors||Wt&&!e.crossDomain)return{send:function(i,o){var a,s=e.xhr()
if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)s[a]=e.xhrFields[a]
for(a in e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(a,i[a])
t=function(e){return function(){t&&(t=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Gt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=t(),r=s.onerror=s.ontimeout=t("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&n.setTimeout((function(){t&&r()}))},t=t("abort")
try{s.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}})),A.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),A.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return A.globalEval(e),e}}}),A.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),A.ajaxTransport("script",(function(e){var t,r
if(e.crossDomain||e.scriptAttrs)return{send:function(n,i){t=A("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",r=function(e){t.remove(),r=null,e&&i("error"===e.type?404:200,e.type)}),b.head.appendChild(t[0])},abort:function(){r&&r()}}}))
var Qt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/
A.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||A.expando+"_"+kt.guid++
return this[e]=!0,e}}),A.ajaxPrefilter("json jsonp",(function(e,t,r){var i,o,a,s=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data")
if(s||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Zt,"$1"+i):!1!==e.jsonp&&(e.url+=(Ct.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return a||A.error(i+" was not called"),a[0]},e.dataTypes[0]="json",o=n[i],n[i]=function(){a=arguments},r.always((function(){void 0===o?A(n).removeProp(i):n[i]=o,e[i]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(i)),a&&v(o)&&o(a[0]),a=o=void 0})),"script"})),m.createHTMLDocument=((Qt=b.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Qt.childNodes.length),A.parseHTML=function(e,t,r){return"string"!=typeof e?[]:("boolean"==typeof t&&(r=t,t=!1),t||(m.createHTMLDocument?((n=(t=b.implementation.createHTMLDocument("")).createElement("base")).href=b.location.href,t.head.appendChild(n)):t=b),o=!r&&[],(i=O.exec(e))?[t.createElement(i[1])]:(i=De([e],t,o),o&&o.length&&A(o).remove(),A.merge([],i.childNodes)))
var n,i,o},A.fn.load=function(e,t,r){var n,i,o,a=this,s=e.indexOf(" ")
return s>-1&&(n=bt(e.slice(s)),e=e.slice(0,s)),v(t)?(r=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&A.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){o=arguments,a.html(n?A("<div>").append(A.parseHTML(e)).find(n):e)})).always(r&&function(e,t){a.each((function(){r.apply(this,o||[e.responseText,t,e])}))}),this},A.expr.pseudos.animated=function(e){return A.grep(A.timers,(function(t){return e===t.elem})).length},A.offset={setOffset:function(e,t,r){var n,i,o,a,s,u,l=A.css(e,"position"),c=A(e),f={}
"static"===l&&(e.style.position="relative"),s=c.offset(),o=A.css(e,"top"),u=A.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(a=(n=c.position()).top,i=n.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,r,A.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},A.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){A.offset.setOffset(this,e,t)}))
var t,r,n=this[0]
return n?n.getClientRects().length?(t=n.getBoundingClientRect(),r=n.ownerDocument.defaultView,{top:t.top+r.pageYOffset,left:t.left+r.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,r,n=this[0],i={top:0,left:0}
if("fixed"===A.css(n,"position"))t=n.getBoundingClientRect()
else{for(t=this.offset(),r=n.ownerDocument,e=n.offsetParent||r.documentElement;e&&(e===r.body||e===r.documentElement)&&"static"===A.css(e,"position");)e=e.parentNode
e&&e!==n&&1===e.nodeType&&((i=A(e).offset()).top+=A.css(e,"borderTopWidth",!0),i.left+=A.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-A.css(n,"marginTop",!0),left:t.left-i.left-A.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===A.css(e,"position");)e=e.offsetParent
return e||ae}))}}),A.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var r="pageYOffset"===t
A.fn[e]=function(n){return V(this,(function(e,n,i){var o
if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[n]
o?o.scrollTo(r?o.pageXOffset:i,r?i:o.pageYOffset):e[n]=i}),e,n,arguments.length)}})),A.each(["top","left"],(function(e,t){A.cssHooks[t]=Qe(m.pixelPosition,(function(e,r){if(r)return r=We(e,t),Me.test(r)?A(e).position()[t]+"px":r}))})),A.each({Height:"height",Width:"width"},(function(e,t){A.each({padding:"inner"+e,content:t,"":"outer"+e},(function(r,n){A.fn[n]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(!0===i||!0===o?"margin":"border")
return V(this,(function(t,r,i){var o
return y(t)?0===n.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?A.css(t,r,s):A.style(t,r,i,s)}),t,a?i:void 0,a)}}))})),A.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){A.fn[t]=function(e){return this.on(t,e)}})),A.fn.extend({bind:function(e,t,r){return this.on(e,null,t,r)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,r,n){return this.on(t,e,r,n)},undelegate:function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),A.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){A.fn[t]=function(e,r){return arguments.length>0?this.on(t,null,e,r):this.trigger(t)}}))
var Xt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g
A.proxy=function(e,t){var r,n,i
if("string"==typeof t&&(r=e[t],t=e,e=r),v(e))return n=s.call(arguments,2),i=function(){return e.apply(t||this,n.concat(s.call(arguments)))},i.guid=e.guid=e.guid||A.guid++,i},A.holdReady=function(e){e?A.readyWait++:A.ready(!0)},A.isArray=Array.isArray,A.parseJSON=JSON.parse,A.nodeName=N,A.isFunction=v,A.isWindow=y,A.camelCase=K,A.type=E,A.now=Date.now,A.isNumeric=function(e){var t=A.type(e)
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},A.trim=function(e){return null==e?"":(e+"").replace(Xt,"$1")},void 0===(r=function(){return A}.apply(t,[]))||(e.exports=r)
var Yt=n.jQuery,Jt=n.$
return A.noConflict=function(e){return n.$===A&&(n.$=Jt),e&&n.jQuery===A&&(n.jQuery=Yt),A},void 0===i&&(n.jQuery=n.$=A),A}))},9789:(e,t,r)=>{"use strict"
var n=r(9484),i=r(8156)
function o(e,t){if(!(this instanceof o))return"number"==typeof t?new o(e).fromIndex(t):new o(e,t)
this.str=e||"",this.lineToIndex=function(e){for(var t=e.split("\n"),r=new Array(t.length),n=0,i=0,o=t.length;i<o;i++)r[i]=n,n+=t[i].length+1
return r}(this.str),t=t||{},this.origin=void 0===t.origin?1:t.origin}Array.prototype.slice,e.exports=o,o.prototype.fromIndex=function(e){if(e<0||e>=this.str.length||isNaN(e))return null
var t=function(e,t){if(e>=t[t.length-1])return t.length-1
for(var r,n=0,i=t.length-2;n<i;)if(e<t[r=n+(i-n>>1)])i=r-1
else{if(!(e>=t[r+1])){n=r
break}n=r+1}return n}(e,this.lineToIndex)
return{line:t+this.origin,col:e-this.lineToIndex[t]+this.origin}},o.prototype.toIndex=function(e,t){if(void 0===t)return n(e)&&e.length>=2?this.toIndex(e[0],e[1]):i(e)&&"line"in e&&("col"in e||"column"in e)?this.toIndex(e.line,"col"in e?e.col:e.column):-1
if(isNaN(e)||isNaN(t))return-1
if(e-=this.origin,t-=this.origin,e>=0&&t>=0&&e<this.lineToIndex.length){var r=this.lineToIndex[e]
if(t<(e===this.lineToIndex.length-1?this.str.length:this.lineToIndex[e+1])-r)return r+t}return-1}},8156:(e,t,r)=>{"use strict"
var n=r(9484)
e.exports=function(e){return null!=e&&"object"==typeof e&&!1===n(e)}},2077:function(e,t,r){var n
e=r.nmd(e),function(){var i,o="Expected a function",a="__lodash_hash_undefined__",s="__lodash_placeholder__",u=32,l=128,c=1/0,f=9007199254740991,p=NaN,d=4294967295,h=[["ary",l],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",u],["partialRight",64],["rearg",256]],g="[object Arguments]",m="[object Array]",v="[object Boolean]",y="[object Date]",b="[object Error]",w="[object Function]",x="[object GeneratorFunction]",E="[object Map]",D="[object Number]",A="[object Object]",_="[object Promise]",k="[object RegExp]",C="[object Set]",T="[object String]",S="[object Symbol]",N="[object WeakMap]",O="[object ArrayBuffer]",L="[object DataView]",F="[object Float32Array]",q="[object Float64Array]",P="[object Int8Array]",R="[object Int16Array]",B="[object Int32Array]",j="[object Uint8Array]",I="[object Uint8ClampedArray]",M="[object Uint16Array]",U="[object Uint32Array]",H=/\b__p \+= '';/g,$=/\b(__p \+=) '' \+/g,z=/(__e\(.*?\)|\b__t\)) \+\n'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,G=/[&<>"']/g,W=RegExp(V.source),Q=RegExp(G.source),K=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,X=/<%=([\s\S]+?)%>/g,Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,J=/^\w*$/,ee=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/[\\^$.*+?()[\]{}|]/g,re=RegExp(te.source),ne=/^\s+/,ie=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ae=/\{\n\/\* \[wrapped with (.+)\] \*/,se=/,? & /,ue=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,fe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,pe=/\w*$/,de=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,ge=/^\[object .+?Constructor\]$/,me=/^0o[0-7]+$/i,ve=/^(?:0|[1-9]\d*)$/,ye=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,be=/($^)/,we=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",Ee="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",De="\\u2700-\\u27bf",Ae="a-z\\xdf-\\xf6\\xf8-\\xff",_e="A-Z\\xc0-\\xd6\\xd8-\\xde",ke="\\ufe0e\\ufe0f",Ce="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Te="["+xe+"]",Se="["+Ce+"]",Ne="["+Ee+"]",Oe="\\d+",Le="["+De+"]",Fe="["+Ae+"]",qe="[^"+xe+Ce+Oe+De+Ae+_e+"]",Pe="\\ud83c[\\udffb-\\udfff]",Re="[^"+xe+"]",Be="(?:\\ud83c[\\udde6-\\uddff]){2}",je="[\\ud800-\\udbff][\\udc00-\\udfff]",Ie="["+_e+"]",Me="\\u200d",Ue="(?:"+Fe+"|"+qe+")",He="(?:"+Ie+"|"+qe+")",$e="(?:['’](?:d|ll|m|re|s|t|ve))?",ze="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ve="(?:"+Ne+"|"+Pe+")?",Ge="["+ke+"]?",We=Ge+Ve+"(?:"+Me+"(?:"+[Re,Be,je].join("|")+")"+Ge+Ve+")*",Qe="(?:"+[Le,Be,je].join("|")+")"+We,Ke="(?:"+[Re+Ne+"?",Ne,Be,je,Te].join("|")+")",Ze=RegExp("['’]","g"),Xe=RegExp(Ne,"g"),Ye=RegExp(Pe+"(?="+Pe+")|"+Ke+We,"g"),Je=RegExp([Ie+"?"+Fe+"+"+$e+"(?="+[Se,Ie,"$"].join("|")+")",He+"+"+ze+"(?="+[Se,Ie+Ue,"$"].join("|")+")",Ie+"?"+Ue+"+"+$e,Ie+"+"+ze,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Oe,Qe].join("|"),"g"),et=RegExp("["+Me+xe+Ee+ke+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,rt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],nt=-1,it={}
it[F]=it[q]=it[P]=it[R]=it[B]=it[j]=it[I]=it[M]=it[U]=!0,it[g]=it[m]=it[O]=it[v]=it[L]=it[y]=it[b]=it[w]=it[E]=it[D]=it[A]=it[k]=it[C]=it[T]=it[N]=!1
var ot={}
ot[g]=ot[m]=ot[O]=ot[L]=ot[v]=ot[y]=ot[F]=ot[q]=ot[P]=ot[R]=ot[B]=ot[E]=ot[D]=ot[A]=ot[k]=ot[C]=ot[T]=ot[S]=ot[j]=ot[I]=ot[M]=ot[U]=!0,ot[b]=ot[w]=ot[N]=!1
var at={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},st=parseFloat,ut=parseInt,lt="object"==typeof global&&global&&global.Object===Object&&global,ct="object"==typeof self&&self&&self.Object===Object&&self,ft=lt||ct||Function("return this")(),pt=t&&!t.nodeType&&t,dt=pt&&e&&!e.nodeType&&e,ht=dt&&dt.exports===pt,gt=ht&&lt.process,mt=function(){try{return dt&&dt.require&&dt.require("util").types||gt&&gt.binding&&gt.binding("util")}catch(e){}}(),vt=mt&&mt.isArrayBuffer,yt=mt&&mt.isDate,bt=mt&&mt.isMap,wt=mt&&mt.isRegExp,xt=mt&&mt.isSet,Et=mt&&mt.isTypedArray
function Dt(e,t,r){switch(r.length){case 0:return e.call(t)
case 1:return e.call(t,r[0])
case 2:return e.call(t,r[0],r[1])
case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function At(e,t,r,n){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i]
t(n,a,r(a),e)}return n}function _t(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function kt(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Ct(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1
return!0}function Tt(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r]
t(a,r,e)&&(o[i++]=a)}return o}function St(e,t){return!(null==e||!e.length)&&It(e,t,0)>-1}function Nt(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0
return!1}function Ot(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e)
return i}function Lt(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r]
return e}function Ft(e,t,r,n){var i=-1,o=null==e?0:e.length
for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e)
return r}function qt(e,t,r,n){var i=null==e?0:e.length
for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e)
return r}function Pt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0
return!1}var Rt=$t("length")
function Bt(e,t,r){var n
return r(e,(function(e,r,i){if(t(e,r,i))return n=r,!1})),n}function jt(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o
return-1}function It(e,t,r){return t==t?function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n
return-1}(e,t,r):jt(e,Ut,r)}function Mt(e,t,r,n){for(var i=r-1,o=e.length;++i<o;)if(n(e[i],t))return i
return-1}function Ut(e){return e!=e}function Ht(e,t){var r=null==e?0:e.length
return r?Gt(e,t)/r:p}function $t(e){return function(t){return null==t?i:t[e]}}function zt(e){return function(t){return null==e?i:e[t]}}function Vt(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r}function Gt(e,t){for(var r,n=-1,o=e.length;++n<o;){var a=t(e[n])
a!==i&&(r=r===i?a:r+a)}return r}function Wt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r)
return n}function Qt(e){return e?e.slice(0,cr(e)+1).replace(ne,""):e}function Kt(e){return function(t){return e(t)}}function Zt(e,t){return Ot(t,(function(t){return e[t]}))}function Xt(e,t){return e.has(t)}function Yt(e,t){for(var r=-1,n=e.length;++r<n&&It(t,e[r],0)>-1;);return r}function Jt(e,t){for(var r=e.length;r--&&It(t,e[r],0)>-1;);return r}var er=zt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tr=zt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})
function rr(e){return"\\"+at[e]}function nr(e){return et.test(e)}function ir(e){var t=-1,r=Array(e.size)
return e.forEach((function(e,n){r[++t]=[n,e]})),r}function or(e,t){return function(r){return e(t(r))}}function ar(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var a=e[r]
a!==t&&a!==s||(e[r]=s,o[i++]=r)}return o}function sr(e){var t=-1,r=Array(e.size)
return e.forEach((function(e){r[++t]=e})),r}function ur(e){return nr(e)?function(e){for(var t=Ye.lastIndex=0;Ye.test(e);)++t
return t}(e):Rt(e)}function lr(e){return nr(e)?function(e){return e.match(Ye)||[]}(e):function(e){return e.split("")}(e)}function cr(e){for(var t=e.length;t--&&ie.test(e.charAt(t)););return t}var fr=zt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pr=function e(t){var r,n=(t=null==t?ft:pr.defaults(ft.Object(),t,pr.pick(ft,rt))).Array,ie=t.Date,xe=t.Error,Ee=t.Function,De=t.Math,Ae=t.Object,_e=t.RegExp,ke=t.String,Ce=t.TypeError,Te=n.prototype,Se=Ee.prototype,Ne=Ae.prototype,Oe=t["__core-js_shared__"],Le=Se.toString,Fe=Ne.hasOwnProperty,qe=0,Pe=(r=/[^.]+$/.exec(Oe&&Oe.keys&&Oe.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",Re=Ne.toString,Be=Le.call(Ae),je=ft._,Ie=_e("^"+Le.call(Fe).replace(te,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Me=ht?t.Buffer:i,Ue=t.Symbol,He=t.Uint8Array,$e=Me?Me.allocUnsafe:i,ze=or(Ae.getPrototypeOf,Ae),Ve=Ae.create,Ge=Ne.propertyIsEnumerable,We=Te.splice,Qe=Ue?Ue.isConcatSpreadable:i,Ke=Ue?Ue.iterator:i,Ye=Ue?Ue.toStringTag:i,et=function(){try{var e=so(Ae,"defineProperty")
return e({},"",{}),e}catch(e){}}(),at=t.clearTimeout!==ft.clearTimeout&&t.clearTimeout,lt=ie&&ie.now!==ft.Date.now&&ie.now,ct=t.setTimeout!==ft.setTimeout&&t.setTimeout,pt=De.ceil,dt=De.floor,gt=Ae.getOwnPropertySymbols,mt=Me?Me.isBuffer:i,Rt=t.isFinite,zt=Te.join,dr=or(Ae.keys,Ae),hr=De.max,gr=De.min,mr=ie.now,vr=t.parseInt,yr=De.random,br=Te.reverse,wr=so(t,"DataView"),xr=so(t,"Map"),Er=so(t,"Promise"),Dr=so(t,"Set"),Ar=so(t,"WeakMap"),_r=so(Ae,"create"),kr=Ar&&new Ar,Cr={},Tr=Ro(wr),Sr=Ro(xr),Nr=Ro(Er),Or=Ro(Dr),Lr=Ro(Ar),Fr=Ue?Ue.prototype:i,qr=Fr?Fr.valueOf:i,Pr=Fr?Fr.toString:i
function Rr(e){if(Ja(e)&&!Ha(e)&&!(e instanceof Mr)){if(e instanceof Ir)return e
if(Fe.call(e,"__wrapped__"))return Bo(e)}return new Ir(e)}var Br=function(){function e(){}return function(t){if(!Ya(t))return{}
if(Ve)return Ve(t)
e.prototype=t
var r=new e
return e.prototype=i,r}}()
function jr(){}function Ir(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=i}function Mr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=d,this.__views__=[]}function Ur(e){var t=-1,r=null==e?0:e.length
for(this.clear();++t<r;){var n=e[t]
this.set(n[0],n[1])}}function Hr(e){var t=-1,r=null==e?0:e.length
for(this.clear();++t<r;){var n=e[t]
this.set(n[0],n[1])}}function $r(e){var t=-1,r=null==e?0:e.length
for(this.clear();++t<r;){var n=e[t]
this.set(n[0],n[1])}}function zr(e){var t=-1,r=null==e?0:e.length
for(this.__data__=new $r;++t<r;)this.add(e[t])}function Vr(e){var t=this.__data__=new Hr(e)
this.size=t.size}function Gr(e,t){var r=Ha(e),n=!r&&Ua(e),i=!r&&!n&&Ga(e),o=!r&&!n&&!i&&ss(e),a=r||n||i||o,s=a?Wt(e.length,ke):[],u=s.length
for(var l in e)!t&&!Fe.call(e,l)||a&&("length"==l||i&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||go(l,u))||s.push(l)
return s}function Wr(e){var t=e.length
return t?e[zn(0,t-1)]:i}function Qr(e,t){return Oo(_i(e),nn(t,0,e.length))}function Kr(e){return Oo(_i(e))}function Zr(e,t,r){(r!==i&&!ja(e[t],r)||r===i&&!(t in e))&&tn(e,t,r)}function Xr(e,t,r){var n=e[t]
Fe.call(e,t)&&ja(n,r)&&(r!==i||t in e)||tn(e,t,r)}function Yr(e,t){for(var r=e.length;r--;)if(ja(e[r][0],t))return r
return-1}function Jr(e,t,r,n){return ln(e,(function(e,i,o){t(n,e,r(e),o)})),n}function en(e,t){return e&&ki(t,Ss(t),e)}function tn(e,t,r){"__proto__"==t&&et?et(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function rn(e,t){for(var r=-1,o=t.length,a=n(o),s=null==e;++r<o;)a[r]=s?i:As(e,t[r])
return a}function nn(e,t,r){return e==e&&(r!==i&&(e=e<=r?e:r),t!==i&&(e=e>=t?e:t)),e}function on(e,t,r,n,o,a){var s,u=1&t,l=2&t,c=4&t
if(r&&(s=o?r(e,n,o,a):r(e)),s!==i)return s
if(!Ya(e))return e
var f=Ha(e)
if(f){if(s=function(e){var t=e.length,r=new e.constructor(t)
return t&&"string"==typeof e[0]&&Fe.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(e),!u)return _i(e,s)}else{var p=co(e),d=p==w||p==x
if(Ga(e))return bi(e,u)
if(p==A||p==g||d&&!o){if(s=l||d?{}:po(e),!u)return l?function(e,t){return ki(e,lo(e),t)}(e,function(e,t){return e&&ki(t,Ns(t),e)}(s,e)):function(e,t){return ki(e,uo(e),t)}(e,en(s,e))}else{if(!ot[p])return o?e:{}
s=function(e,t,r){var n,i=e.constructor
switch(t){case O:return wi(e)
case v:case y:return new i(+e)
case L:return function(e,t){var r=t?wi(e.buffer):e.buffer
return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r)
case F:case q:case P:case R:case B:case j:case I:case M:case U:return xi(e,r)
case E:return new i
case D:case T:return new i(e)
case k:return function(e){var t=new e.constructor(e.source,pe.exec(e))
return t.lastIndex=e.lastIndex,t}(e)
case C:return new i
case S:return n=e,qr?Ae(qr.call(n)):{}}}(e,p,u)}}a||(a=new Vr)
var h=a.get(e)
if(h)return h
a.set(e,s),is(e)?e.forEach((function(n){s.add(on(n,t,r,n,e,a))})):es(e)&&e.forEach((function(n,i){s.set(i,on(n,t,r,i,e,a))}))
var m=f?i:(c?l?eo:Ji:l?Ns:Ss)(e)
return _t(m||e,(function(n,i){m&&(n=e[i=n]),Xr(s,i,on(n,t,r,i,e,a))})),s}function an(e,t,r){var n=r.length
if(null==e)return!n
for(e=Ae(e);n--;){var o=r[n],a=t[o],s=e[o]
if(s===i&&!(o in e)||!a(s))return!1}return!0}function sn(e,t,r){if("function"!=typeof e)throw new Ce(o)
return Co((function(){e.apply(i,r)}),t)}function un(e,t,r,n){var i=-1,o=St,a=!0,s=e.length,u=[],l=t.length
if(!s)return u
r&&(t=Ot(t,Kt(r))),n?(o=Nt,a=!1):t.length>=200&&(o=Xt,a=!1,t=new zr(t))
e:for(;++i<s;){var c=e[i],f=null==r?c:r(c)
if(c=n||0!==c?c:0,a&&f==f){for(var p=l;p--;)if(t[p]===f)continue e
u.push(c)}else o(t,f,n)||u.push(c)}return u}Rr.templateSettings={escape:K,evaluate:Z,interpolate:X,variable:"",imports:{_:Rr}},Rr.prototype=jr.prototype,Rr.prototype.constructor=Rr,Ir.prototype=Br(jr.prototype),Ir.prototype.constructor=Ir,Mr.prototype=Br(jr.prototype),Mr.prototype.constructor=Mr,Ur.prototype.clear=function(){this.__data__=_r?_r(null):{},this.size=0},Ur.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e]
return this.size-=t?1:0,t},Ur.prototype.get=function(e){var t=this.__data__
if(_r){var r=t[e]
return r===a?i:r}return Fe.call(t,e)?t[e]:i},Ur.prototype.has=function(e){var t=this.__data__
return _r?t[e]!==i:Fe.call(t,e)},Ur.prototype.set=function(e,t){var r=this.__data__
return this.size+=this.has(e)?0:1,r[e]=_r&&t===i?a:t,this},Hr.prototype.clear=function(){this.__data__=[],this.size=0},Hr.prototype.delete=function(e){var t=this.__data__,r=Yr(t,e)
return!(r<0||(r==t.length-1?t.pop():We.call(t,r,1),--this.size,0))},Hr.prototype.get=function(e){var t=this.__data__,r=Yr(t,e)
return r<0?i:t[r][1]},Hr.prototype.has=function(e){return Yr(this.__data__,e)>-1},Hr.prototype.set=function(e,t){var r=this.__data__,n=Yr(r,e)
return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},$r.prototype.clear=function(){this.size=0,this.__data__={hash:new Ur,map:new(xr||Hr),string:new Ur}},$r.prototype.delete=function(e){var t=oo(this,e).delete(e)
return this.size-=t?1:0,t},$r.prototype.get=function(e){return oo(this,e).get(e)},$r.prototype.has=function(e){return oo(this,e).has(e)},$r.prototype.set=function(e,t){var r=oo(this,e),n=r.size
return r.set(e,t),this.size+=r.size==n?0:1,this},zr.prototype.add=zr.prototype.push=function(e){return this.__data__.set(e,a),this},zr.prototype.has=function(e){return this.__data__.has(e)},Vr.prototype.clear=function(){this.__data__=new Hr,this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e)
return this.size=t.size,r},Vr.prototype.get=function(e){return this.__data__.get(e)},Vr.prototype.has=function(e){return this.__data__.has(e)},Vr.prototype.set=function(e,t){var r=this.__data__
if(r instanceof Hr){var n=r.__data__
if(!xr||n.length<199)return n.push([e,t]),this.size=++r.size,this
r=this.__data__=new $r(n)}return r.set(e,t),this.size=r.size,this}
var ln=Si(vn),cn=Si(yn,!0)
function fn(e,t){var r=!0
return ln(e,(function(e,n,i){return r=!!t(e,n,i)})),r}function pn(e,t,r){for(var n=-1,o=e.length;++n<o;){var a=e[n],s=t(a)
if(null!=s&&(u===i?s==s&&!as(s):r(s,u)))var u=s,l=a}return l}function dn(e,t){var r=[]
return ln(e,(function(e,n,i){t(e,n,i)&&r.push(e)})),r}function hn(e,t,r,n,i){var o=-1,a=e.length
for(r||(r=ho),i||(i=[]);++o<a;){var s=e[o]
t>0&&r(s)?t>1?hn(s,t-1,r,n,i):Lt(i,s):n||(i[i.length]=s)}return i}var gn=Ni(),mn=Ni(!0)
function vn(e,t){return e&&gn(e,t,Ss)}function yn(e,t){return e&&mn(e,t,Ss)}function bn(e,t){return Tt(t,(function(t){return Ka(e[t])}))}function wn(e,t){for(var r=0,n=(t=gi(t,e)).length;null!=e&&r<n;)e=e[Po(t[r++])]
return r&&r==n?e:i}function xn(e,t,r){var n=t(e)
return Ha(e)?n:Lt(n,r(e))}function En(e){return null==e?e===i?"[object Undefined]":"[object Null]":Ye&&Ye in Ae(e)?function(e){var t=Fe.call(e,Ye),r=e[Ye]
try{e[Ye]=i
var n=!0}catch(e){}var o=Re.call(e)
return n&&(t?e[Ye]=r:delete e[Ye]),o}(e):function(e){return Re.call(e)}(e)}function Dn(e,t){return e>t}function An(e,t){return null!=e&&Fe.call(e,t)}function _n(e,t){return null!=e&&t in Ae(e)}function kn(e,t,r){for(var o=r?Nt:St,a=e[0].length,s=e.length,u=s,l=n(s),c=1/0,f=[];u--;){var p=e[u]
u&&t&&(p=Ot(p,Kt(t))),c=gr(p.length,c),l[u]=!r&&(t||a>=120&&p.length>=120)?new zr(u&&p):i}p=e[0]
var d=-1,h=l[0]
e:for(;++d<a&&f.length<c;){var g=p[d],m=t?t(g):g
if(g=r||0!==g?g:0,!(h?Xt(h,m):o(f,m,r))){for(u=s;--u;){var v=l[u]
if(!(v?Xt(v,m):o(e[u],m,r)))continue e}h&&h.push(m),f.push(g)}}return f}function Cn(e,t,r){var n=null==(e=Ao(e,t=gi(t,e)))?e:e[Po(Qo(t))]
return null==n?i:Dt(n,e,r)}function Tn(e){return Ja(e)&&En(e)==g}function Sn(e,t,r,n,o){return e===t||(null==e||null==t||!Ja(e)&&!Ja(t)?e!=e&&t!=t:function(e,t,r,n,o,a){var s=Ha(e),u=Ha(t),l=s?m:co(e),c=u?m:co(t),f=(l=l==g?A:l)==A,p=(c=c==g?A:c)==A,d=l==c
if(d&&Ga(e)){if(!Ga(t))return!1
s=!0,f=!1}if(d&&!f)return a||(a=new Vr),s||ss(e)?Xi(e,t,r,n,o,a):function(e,t,r,n,i,o,a){switch(r){case L:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1
e=e.buffer,t=t.buffer
case O:return!(e.byteLength!=t.byteLength||!o(new He(e),new He(t)))
case v:case y:case D:return ja(+e,+t)
case b:return e.name==t.name&&e.message==t.message
case k:case T:return e==t+""
case E:var s=ir
case C:var u=1&n
if(s||(s=sr),e.size!=t.size&&!u)return!1
var l=a.get(e)
if(l)return l==t
n|=2,a.set(e,t)
var c=Xi(s(e),s(t),n,i,o,a)
return a.delete(e),c
case S:if(qr)return qr.call(e)==qr.call(t)}return!1}(e,t,l,r,n,o,a)
if(!(1&r)){var h=f&&Fe.call(e,"__wrapped__"),w=p&&Fe.call(t,"__wrapped__")
if(h||w){var x=h?e.value():e,_=w?t.value():t
return a||(a=new Vr),o(x,_,r,n,a)}}return!!d&&(a||(a=new Vr),function(e,t,r,n,o,a){var s=1&r,u=Ji(e),l=u.length
if(l!=Ji(t).length&&!s)return!1
for(var c=l;c--;){var f=u[c]
if(!(s?f in t:Fe.call(t,f)))return!1}var p=a.get(e),d=a.get(t)
if(p&&d)return p==t&&d==e
var h=!0
a.set(e,t),a.set(t,e)
for(var g=s;++c<l;){var m=e[f=u[c]],v=t[f]
if(n)var y=s?n(v,m,f,t,e,a):n(m,v,f,e,t,a)
if(!(y===i?m===v||o(m,v,r,n,a):y)){h=!1
break}g||(g="constructor"==f)}if(h&&!g){var b=e.constructor,w=t.constructor
b==w||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w||(h=!1)}return a.delete(e),a.delete(t),h}(e,t,r,n,o,a))}(e,t,r,n,Sn,o))}function Nn(e,t,r,n){var o=r.length,a=o,s=!n
if(null==e)return!a
for(e=Ae(e);o--;){var u=r[o]
if(s&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){var l=(u=r[o])[0],c=e[l],f=u[1]
if(s&&u[2]){if(c===i&&!(l in e))return!1}else{var p=new Vr
if(n)var d=n(c,f,l,e,t,p)
if(!(d===i?Sn(f,c,3,n,p):d))return!1}}return!0}function On(e){return!(!Ya(e)||(t=e,Pe&&Pe in t))&&(Ka(e)?Ie:ge).test(Ro(e))
var t}function Ln(e){return"function"==typeof e?e:null==e?tu:"object"==typeof e?Ha(e)?Bn(e[0],e[1]):Rn(e):cu(e)}function Fn(e){if(!wo(e))return dr(e)
var t=[]
for(var r in Ae(e))Fe.call(e,r)&&"constructor"!=r&&t.push(r)
return t}function qn(e,t){return e<t}function Pn(e,t){var r=-1,i=za(e)?n(e.length):[]
return ln(e,(function(e,n,o){i[++r]=t(e,n,o)})),i}function Rn(e){var t=ao(e)
return 1==t.length&&t[0][2]?Eo(t[0][0],t[0][1]):function(r){return r===e||Nn(r,e,t)}}function Bn(e,t){return vo(e)&&xo(t)?Eo(Po(e),t):function(r){var n=As(r,e)
return n===i&&n===t?_s(r,e):Sn(t,n,3)}}function jn(e,t,r,n,o){e!==t&&gn(t,(function(a,s){if(o||(o=new Vr),Ya(a))!function(e,t,r,n,o,a,s){var u=_o(e,r),l=_o(t,r),c=s.get(l)
if(c)Zr(e,r,c)
else{var f=a?a(u,l,r+"",e,t,s):i,p=f===i
if(p){var d=Ha(l),h=!d&&Ga(l),g=!d&&!h&&ss(l)
f=l,d||h||g?Ha(u)?f=u:Va(u)?f=_i(u):h?(p=!1,f=bi(l,!0)):g?(p=!1,f=xi(l,!0)):f=[]:rs(l)||Ua(l)?(f=u,Ua(u)?f=gs(u):Ya(u)&&!Ka(u)||(f=po(l))):p=!1}p&&(s.set(l,f),o(f,l,n,a,s),s.delete(l)),Zr(e,r,f)}}(e,t,s,r,jn,n,o)
else{var u=n?n(_o(e,s),a,s+"",e,t,o):i
u===i&&(u=a),Zr(e,s,u)}}),Ns)}function In(e,t){var r=e.length
if(r)return go(t+=t<0?r:0,r)?e[t]:i}function Mn(e,t,r){t=t.length?Ot(t,(function(e){return Ha(e)?function(t){return wn(t,1===e.length?e[0]:e)}:e})):[tu]
var n=-1
t=Ot(t,Kt(io()))
var i=Pn(e,(function(e,r,i){var o=Ot(t,(function(t){return t(e)}))
return{criteria:o,index:++n,value:e}}))
return function(e,t){var n=e.length
for(e.sort((function(e,t){return function(e,t,r){for(var n=-1,i=e.criteria,o=t.criteria,a=i.length,s=r.length;++n<a;){var u=Ei(i[n],o[n])
if(u)return n>=s?u:u*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}));n--;)e[n]=e[n].value
return e}(i)}function Un(e,t,r){for(var n=-1,i=t.length,o={};++n<i;){var a=t[n],s=wn(e,a)
r(s,a)&&Kn(o,gi(a,e),s)}return o}function Hn(e,t,r,n){var i=n?Mt:It,o=-1,a=t.length,s=e
for(e===t&&(t=_i(t)),r&&(s=Ot(e,Kt(r)));++o<a;)for(var u=0,l=t[o],c=r?r(l):l;(u=i(s,c,u,n))>-1;)s!==e&&We.call(s,u,1),We.call(e,u,1)
return e}function $n(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r]
if(r==n||i!==o){var o=i
go(i)?We.call(e,i,1):si(e,i)}}return e}function zn(e,t){return e+dt(yr()*(t-e+1))}function Vn(e,t){var r=""
if(!e||t<1||t>f)return r
do{t%2&&(r+=e),(t=dt(t/2))&&(e+=e)}while(t)
return r}function Gn(e,t){return To(Do(e,t,tu),e+"")}function Wn(e){return Wr(js(e))}function Qn(e,t){var r=js(e)
return Oo(r,nn(t,0,r.length))}function Kn(e,t,r,n){if(!Ya(e))return e
for(var o=-1,a=(t=gi(t,e)).length,s=a-1,u=e;null!=u&&++o<a;){var l=Po(t[o]),c=r
if("__proto__"===l||"constructor"===l||"prototype"===l)return e
if(o!=s){var f=u[l];(c=n?n(f,l,u):i)===i&&(c=Ya(f)?f:go(t[o+1])?[]:{})}Xr(u,l,c),u=u[l]}return e}var Zn=kr?function(e,t){return kr.set(e,t),e}:tu,Xn=et?function(e,t){return et(e,"toString",{configurable:!0,enumerable:!1,value:Ys(t),writable:!0})}:tu
function Yn(e){return Oo(js(e))}function Jn(e,t,r){var i=-1,o=e.length
t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0
for(var a=n(o);++i<o;)a[i]=e[i+t]
return a}function ei(e,t){var r
return ln(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}function ti(e,t,r){var n=0,i=null==e?n:e.length
if("number"==typeof t&&t==t&&i<=2147483647){for(;n<i;){var o=n+i>>>1,a=e[o]
null!==a&&!as(a)&&(r?a<=t:a<t)?n=o+1:i=o}return i}return ri(e,t,tu,r)}function ri(e,t,r,n){var o=0,a=null==e?0:e.length
if(0===a)return 0
for(var s=(t=r(t))!=t,u=null===t,l=as(t),c=t===i;o<a;){var f=dt((o+a)/2),p=r(e[f]),d=p!==i,h=null===p,g=p==p,m=as(p)
if(s)var v=n||g
else v=c?g&&(n||d):u?g&&d&&(n||!h):l?g&&d&&!h&&(n||!m):!h&&!m&&(n?p<=t:p<t)
v?o=f+1:a=f}return gr(a,4294967294)}function ni(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var a=e[r],s=t?t(a):a
if(!r||!ja(s,u)){var u=s
o[i++]=0===a?0:a}}return o}function ii(e){return"number"==typeof e?e:as(e)?p:+e}function oi(e){if("string"==typeof e)return e
if(Ha(e))return Ot(e,oi)+""
if(as(e))return Pr?Pr.call(e):""
var t=e+""
return"0"==t&&1/e==-1/0?"-0":t}function ai(e,t,r){var n=-1,i=St,o=e.length,a=!0,s=[],u=s
if(r)a=!1,i=Nt
else if(o>=200){var l=t?null:Vi(e)
if(l)return sr(l)
a=!1,i=Xt,u=new zr}else u=t?[]:s
e:for(;++n<o;){var c=e[n],f=t?t(c):c
if(c=r||0!==c?c:0,a&&f==f){for(var p=u.length;p--;)if(u[p]===f)continue e
t&&u.push(f),s.push(c)}else i(u,f,r)||(u!==s&&u.push(f),s.push(c))}return s}function si(e,t){return null==(e=Ao(e,t=gi(t,e)))||delete e[Po(Qo(t))]}function ui(e,t,r,n){return Kn(e,t,r(wn(e,t)),n)}function li(e,t,r,n){for(var i=e.length,o=n?i:-1;(n?o--:++o<i)&&t(e[o],o,e););return r?Jn(e,n?0:o,n?o+1:i):Jn(e,n?o+1:0,n?i:o)}function ci(e,t){var r=e
return r instanceof Mr&&(r=r.value()),Ft(t,(function(e,t){return t.func.apply(t.thisArg,Lt([e],t.args))}),r)}function fi(e,t,r){var i=e.length
if(i<2)return i?ai(e[0]):[]
for(var o=-1,a=n(i);++o<i;)for(var s=e[o],u=-1;++u<i;)u!=o&&(a[o]=un(a[o]||s,e[u],t,r))
return ai(hn(a,1),t,r)}function pi(e,t,r){for(var n=-1,o=e.length,a=t.length,s={};++n<o;){var u=n<a?t[n]:i
r(s,e[n],u)}return s}function di(e){return Va(e)?e:[]}function hi(e){return"function"==typeof e?e:tu}function gi(e,t){return Ha(e)?e:vo(e,t)?[e]:qo(ms(e))}var mi=Gn
function vi(e,t,r){var n=e.length
return r=r===i?n:r,!t&&r>=n?e:Jn(e,t,r)}var yi=at||function(e){return ft.clearTimeout(e)}
function bi(e,t){if(t)return e.slice()
var r=e.length,n=$e?$e(r):new e.constructor(r)
return e.copy(n),n}function wi(e){var t=new e.constructor(e.byteLength)
return new He(t).set(new He(e)),t}function xi(e,t){var r=t?wi(e.buffer):e.buffer
return new e.constructor(r,e.byteOffset,e.length)}function Ei(e,t){if(e!==t){var r=e!==i,n=null===e,o=e==e,a=as(e),s=t!==i,u=null===t,l=t==t,c=as(t)
if(!u&&!c&&!a&&e>t||a&&s&&l&&!u&&!c||n&&s&&l||!r&&l||!o)return 1
if(!n&&!a&&!c&&e<t||c&&r&&o&&!n&&!a||u&&r&&o||!s&&o||!l)return-1}return 0}function Di(e,t,r,i){for(var o=-1,a=e.length,s=r.length,u=-1,l=t.length,c=hr(a-s,0),f=n(l+c),p=!i;++u<l;)f[u]=t[u]
for(;++o<s;)(p||o<a)&&(f[r[o]]=e[o])
for(;c--;)f[u++]=e[o++]
return f}function Ai(e,t,r,i){for(var o=-1,a=e.length,s=-1,u=r.length,l=-1,c=t.length,f=hr(a-u,0),p=n(f+c),d=!i;++o<f;)p[o]=e[o]
for(var h=o;++l<c;)p[h+l]=t[l]
for(;++s<u;)(d||o<a)&&(p[h+r[s]]=e[o++])
return p}function _i(e,t){var r=-1,i=e.length
for(t||(t=n(i));++r<i;)t[r]=e[r]
return t}function ki(e,t,r,n){var o=!r
r||(r={})
for(var a=-1,s=t.length;++a<s;){var u=t[a],l=n?n(r[u],e[u],u,r,e):i
l===i&&(l=e[u]),o?tn(r,u,l):Xr(r,u,l)}return r}function Ci(e,t){return function(r,n){var i=Ha(r)?At:Jr,o=t?t():{}
return i(r,e,io(n,2),o)}}function Ti(e){return Gn((function(t,r){var n=-1,o=r.length,a=o>1?r[o-1]:i,s=o>2?r[2]:i
for(a=e.length>3&&"function"==typeof a?(o--,a):i,s&&mo(r[0],r[1],s)&&(a=o<3?i:a,o=1),t=Ae(t);++n<o;){var u=r[n]
u&&e(t,u,n,a)}return t}))}function Si(e,t){return function(r,n){if(null==r)return r
if(!za(r))return e(r,n)
for(var i=r.length,o=t?i:-1,a=Ae(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}function Ni(e){return function(t,r,n){for(var i=-1,o=Ae(t),a=n(t),s=a.length;s--;){var u=a[e?s:++i]
if(!1===r(o[u],u,o))break}return t}}function Oi(e){return function(t){var r=nr(t=ms(t))?lr(t):i,n=r?r[0]:t.charAt(0),o=r?vi(r,1).join(""):t.slice(1)
return n[e]()+o}}function Li(e){return function(t){return Ft(Ks(Us(t).replace(Ze,"")),e,"")}}function Fi(e){return function(){var t=arguments
switch(t.length){case 0:return new e
case 1:return new e(t[0])
case 2:return new e(t[0],t[1])
case 3:return new e(t[0],t[1],t[2])
case 4:return new e(t[0],t[1],t[2],t[3])
case 5:return new e(t[0],t[1],t[2],t[3],t[4])
case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5])
case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Br(e.prototype),n=e.apply(r,t)
return Ya(n)?n:r}}function qi(e){return function(t,r,n){var o=Ae(t)
if(!za(t)){var a=io(r,3)
t=Ss(t),r=function(e){return a(o[e],e,o)}}var s=e(t,r,n)
return s>-1?o[a?t[s]:s]:i}}function Pi(e){return Yi((function(t){var r=t.length,n=r,a=Ir.prototype.thru
for(e&&t.reverse();n--;){var s=t[n]
if("function"!=typeof s)throw new Ce(o)
if(a&&!u&&"wrapper"==ro(s))var u=new Ir([],!0)}for(n=u?n:r;++n<r;){var l=ro(s=t[n]),c="wrapper"==l?to(s):i
u=c&&yo(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?u[ro(c[0])].apply(u,c[3]):1==s.length&&yo(s)?u[l]():u.thru(s)}return function(){var e=arguments,n=e[0]
if(u&&1==e.length&&Ha(n))return u.plant(n).value()
for(var i=0,o=r?t[i].apply(this,e):n;++i<r;)o=t[i].call(this,o)
return o}}))}function Ri(e,t,r,o,a,s,u,c,f,p){var d=t&l,h=1&t,g=2&t,m=24&t,v=512&t,y=g?i:Fi(e)
return function l(){for(var b=arguments.length,w=n(b),x=b;x--;)w[x]=arguments[x]
if(m)var E=no(l),D=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n
return n}(w,E)
if(o&&(w=Di(w,o,a,m)),s&&(w=Ai(w,s,u,m)),b-=D,m&&b<p){var A=ar(w,E)
return $i(e,t,Ri,l.placeholder,r,w,A,c,f,p-b)}var _=h?r:this,k=g?_[e]:e
return b=w.length,c?w=function(e,t){for(var r=e.length,n=gr(t.length,r),o=_i(e);n--;){var a=t[n]
e[n]=go(a,r)?o[a]:i}return e}(w,c):v&&b>1&&w.reverse(),d&&f<b&&(w.length=f),this&&this!==ft&&this instanceof l&&(k=y||Fi(k)),k.apply(_,w)}}function Bi(e,t){return function(r,n){return function(e,t,r,n){return vn(e,(function(e,i,o){t(n,r(e),i,o)})),n}(r,e,t(n),{})}}function ji(e,t){return function(r,n){var o
if(r===i&&n===i)return t
if(r!==i&&(o=r),n!==i){if(o===i)return n
"string"==typeof r||"string"==typeof n?(r=oi(r),n=oi(n)):(r=ii(r),n=ii(n)),o=e(r,n)}return o}}function Ii(e){return Yi((function(t){return t=Ot(t,Kt(io())),Gn((function(r){var n=this
return e(t,(function(e){return Dt(e,n,r)}))}))}))}function Mi(e,t){var r=(t=t===i?" ":oi(t)).length
if(r<2)return r?Vn(t,e):t
var n=Vn(t,pt(e/ur(t)))
return nr(t)?vi(lr(n),0,e).join(""):n.slice(0,e)}function Ui(e){return function(t,r,o){return o&&"number"!=typeof o&&mo(t,r,o)&&(r=o=i),t=fs(t),r===i?(r=t,t=0):r=fs(r),function(e,t,r,i){for(var o=-1,a=hr(pt((t-e)/(r||1)),0),s=n(a);a--;)s[i?a:++o]=e,e+=r
return s}(t,r,o=o===i?t<r?1:-1:fs(o),e)}}function Hi(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=hs(t),r=hs(r)),e(t,r)}}function $i(e,t,r,n,o,a,s,l,c,f){var p=8&t
t|=p?u:64,4&(t&=~(p?64:u))||(t&=-4)
var d=[e,t,o,p?a:i,p?s:i,p?i:a,p?i:s,l,c,f],h=r.apply(i,d)
return yo(e)&&ko(h,d),h.placeholder=n,So(h,e,t)}function zi(e){var t=De[e]
return function(e,r){if(e=hs(e),(r=null==r?0:gr(ps(r),292))&&Rt(e)){var n=(ms(e)+"e").split("e")
return+((n=(ms(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Vi=Dr&&1/sr(new Dr([,-0]))[1]==c?function(e){return new Dr(e)}:au
function Gi(e){return function(t){var r=co(t)
return r==E?ir(t):r==C?function(e){var t=-1,r=Array(e.size)
return e.forEach((function(e){r[++t]=[e,e]})),r}(t):function(e,t){return Ot(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Wi(e,t,r,a,c,f,p,d){var h=2&t
if(!h&&"function"!=typeof e)throw new Ce(o)
var g=a?a.length:0
if(g||(t&=-97,a=c=i),p=p===i?p:hr(ps(p),0),d=d===i?d:ps(d),g-=c?c.length:0,64&t){var m=a,v=c
a=c=i}var y=h?i:to(e),b=[e,t,r,a,c,m,v,f,p,d]
if(y&&function(e,t){var r=e[1],n=t[1],i=r|n,o=i<131,a=n==l&&8==r||n==l&&256==r&&e[7].length<=t[8]||384==n&&t[7].length<=t[8]&&8==r
if(!o&&!a)return e
1&n&&(e[2]=t[2],i|=1&r?0:4)
var u=t[3]
if(u){var c=e[3]
e[3]=c?Di(c,u,t[4]):u,e[4]=c?ar(e[3],s):t[4]}(u=t[5])&&(c=e[5],e[5]=c?Ai(c,u,t[6]):u,e[6]=c?ar(e[5],s):t[6]),(u=t[7])&&(e[7]=u),n&l&&(e[8]=null==e[8]?t[8]:gr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(b,y),e=b[0],t=b[1],r=b[2],a=b[3],c=b[4],!(d=b[9]=b[9]===i?h?0:e.length:hr(b[9]-g,0))&&24&t&&(t&=-25),t&&1!=t)w=8==t||16==t?function(e,t,r){var o=Fi(e)
return function a(){for(var s=arguments.length,u=n(s),l=s,c=no(a);l--;)u[l]=arguments[l]
var f=s<3&&u[0]!==c&&u[s-1]!==c?[]:ar(u,c)
return(s-=f.length)<r?$i(e,t,Ri,a.placeholder,i,u,f,i,i,r-s):Dt(this&&this!==ft&&this instanceof a?o:e,this,u)}}(e,t,d):t!=u&&33!=t||c.length?Ri.apply(i,b):function(e,t,r,i){var o=1&t,a=Fi(e)
return function t(){for(var s=-1,u=arguments.length,l=-1,c=i.length,f=n(c+u),p=this&&this!==ft&&this instanceof t?a:e;++l<c;)f[l]=i[l]
for(;u--;)f[l++]=arguments[++s]
return Dt(p,o?r:this,f)}}(e,t,r,a)
else var w=function(e,t,r){var n=1&t,i=Fi(e)
return function t(){return(this&&this!==ft&&this instanceof t?i:e).apply(n?r:this,arguments)}}(e,t,r)
return So((y?Zn:ko)(w,b),e,t)}function Qi(e,t,r,n){return e===i||ja(e,Ne[r])&&!Fe.call(n,r)?t:e}function Ki(e,t,r,n,o,a){return Ya(e)&&Ya(t)&&(a.set(t,e),jn(e,t,i,Ki,a),a.delete(t)),e}function Zi(e){return rs(e)?i:e}function Xi(e,t,r,n,o,a){var s=1&r,u=e.length,l=t.length
if(u!=l&&!(s&&l>u))return!1
var c=a.get(e),f=a.get(t)
if(c&&f)return c==t&&f==e
var p=-1,d=!0,h=2&r?new zr:i
for(a.set(e,t),a.set(t,e);++p<u;){var g=e[p],m=t[p]
if(n)var v=s?n(m,g,p,t,e,a):n(g,m,p,e,t,a)
if(v!==i){if(v)continue
d=!1
break}if(h){if(!Pt(t,(function(e,t){if(!Xt(h,t)&&(g===e||o(g,e,r,n,a)))return h.push(t)}))){d=!1
break}}else if(g!==m&&!o(g,m,r,n,a)){d=!1
break}}return a.delete(e),a.delete(t),d}function Yi(e){return To(Do(e,i,$o),e+"")}function Ji(e){return xn(e,Ss,uo)}function eo(e){return xn(e,Ns,lo)}var to=kr?function(e){return kr.get(e)}:au
function ro(e){for(var t=e.name+"",r=Cr[t],n=Fe.call(Cr,t)?r.length:0;n--;){var i=r[n],o=i.func
if(null==o||o==e)return i.name}return t}function no(e){return(Fe.call(Rr,"placeholder")?Rr:e).placeholder}function io(){var e=Rr.iteratee||ru
return e=e===ru?Ln:e,arguments.length?e(arguments[0],arguments[1]):e}function oo(e,t){var r,n,i=e.__data__
return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function ao(e){for(var t=Ss(e),r=t.length;r--;){var n=t[r],i=e[n]
t[r]=[n,i,xo(i)]}return t}function so(e,t){var r=function(e,t){return null==e?i:e[t]}(e,t)
return On(r)?r:i}var uo=gt?function(e){return null==e?[]:(e=Ae(e),Tt(gt(e),(function(t){return Ge.call(e,t)})))}:du,lo=gt?function(e){for(var t=[];e;)Lt(t,uo(e)),e=ze(e)
return t}:du,co=En
function fo(e,t,r){for(var n=-1,i=(t=gi(t,e)).length,o=!1;++n<i;){var a=Po(t[n])
if(!(o=null!=e&&r(e,a)))break
e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Xa(i)&&go(a,i)&&(Ha(e)||Ua(e))}function po(e){return"function"!=typeof e.constructor||wo(e)?{}:Br(ze(e))}function ho(e){return Ha(e)||Ua(e)||!!(Qe&&e&&e[Qe])}function go(e,t){var r=typeof e
return!!(t=null==t?f:t)&&("number"==r||"symbol"!=r&&ve.test(e))&&e>-1&&e%1==0&&e<t}function mo(e,t,r){if(!Ya(r))return!1
var n=typeof t
return!!("number"==n?za(r)&&go(t,r.length):"string"==n&&t in r)&&ja(r[t],e)}function vo(e,t){if(Ha(e))return!1
var r=typeof e
return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!as(e))||J.test(e)||!Y.test(e)||null!=t&&e in Ae(t)}function yo(e){var t=ro(e),r=Rr[t]
if("function"!=typeof r||!(t in Mr.prototype))return!1
if(e===r)return!0
var n=to(r)
return!!n&&e===n[0]}(wr&&co(new wr(new ArrayBuffer(1)))!=L||xr&&co(new xr)!=E||Er&&co(Er.resolve())!=_||Dr&&co(new Dr)!=C||Ar&&co(new Ar)!=N)&&(co=function(e){var t=En(e),r=t==A?e.constructor:i,n=r?Ro(r):""
if(n)switch(n){case Tr:return L
case Sr:return E
case Nr:return _
case Or:return C
case Lr:return N}return t})
var bo=Oe?Ka:hu
function wo(e){var t=e&&e.constructor
return e===("function"==typeof t&&t.prototype||Ne)}function xo(e){return e==e&&!Ya(e)}function Eo(e,t){return function(r){return null!=r&&r[e]===t&&(t!==i||e in Ae(r))}}function Do(e,t,r){return t=hr(t===i?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=hr(i.length-t,0),s=n(a);++o<a;)s[o]=i[t+o]
o=-1
for(var u=n(t+1);++o<t;)u[o]=i[o]
return u[t]=r(s),Dt(e,this,u)}}function Ao(e,t){return t.length<2?e:wn(e,Jn(t,0,-1))}function _o(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var ko=No(Zn),Co=ct||function(e,t){return ft.setTimeout(e,t)},To=No(Xn)
function So(e,t,r){var n=t+""
return To(e,function(e,t){var r=t.length
if(!r)return e
var n=r-1
return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return _t(h,(function(r){var n="_."+r[0]
t&r[1]&&!St(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ae)
return t?t[1].split(se):[]}(n),r)))}function No(e){var t=0,r=0
return function(){var n=mr(),o=16-(n-r)
if(r=n,o>0){if(++t>=800)return arguments[0]}else t=0
return e.apply(i,arguments)}}function Oo(e,t){var r=-1,n=e.length,o=n-1
for(t=t===i?n:t;++r<t;){var a=zn(r,o),s=e[a]
e[a]=e[r],e[r]=s}return e.length=t,e}var Lo,Fo,qo=(Lo=La((function(e){var t=[]
return 46===e.charCodeAt(0)&&t.push(""),e.replace(ee,(function(e,r,n,i){t.push(n?i.replace(ce,"$1"):r||e)})),t}),(function(e){return 500===Fo.size&&Fo.clear(),e})),Fo=Lo.cache,Lo)
function Po(e){if("string"==typeof e||as(e))return e
var t=e+""
return"0"==t&&1/e==-1/0?"-0":t}function Ro(e){if(null!=e){try{return Le.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Bo(e){if(e instanceof Mr)return e.clone()
var t=new Ir(e.__wrapped__,e.__chain__)
return t.__actions__=_i(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var jo=Gn((function(e,t){return Va(e)?un(e,hn(t,1,Va,!0)):[]})),Io=Gn((function(e,t){var r=Qo(t)
return Va(r)&&(r=i),Va(e)?un(e,hn(t,1,Va,!0),io(r,2)):[]})),Mo=Gn((function(e,t){var r=Qo(t)
return Va(r)&&(r=i),Va(e)?un(e,hn(t,1,Va,!0),i,r):[]}))
function Uo(e,t,r){var n=null==e?0:e.length
if(!n)return-1
var i=null==r?0:ps(r)
return i<0&&(i=hr(n+i,0)),jt(e,io(t,3),i)}function Ho(e,t,r){var n=null==e?0:e.length
if(!n)return-1
var o=n-1
return r!==i&&(o=ps(r),o=r<0?hr(n+o,0):gr(o,n-1)),jt(e,io(t,3),o,!0)}function $o(e){return null!=e&&e.length?hn(e,1):[]}function zo(e){return e&&e.length?e[0]:i}var Vo=Gn((function(e){var t=Ot(e,di)
return t.length&&t[0]===e[0]?kn(t):[]})),Go=Gn((function(e){var t=Qo(e),r=Ot(e,di)
return t===Qo(r)?t=i:r.pop(),r.length&&r[0]===e[0]?kn(r,io(t,2)):[]})),Wo=Gn((function(e){var t=Qo(e),r=Ot(e,di)
return(t="function"==typeof t?t:i)&&r.pop(),r.length&&r[0]===e[0]?kn(r,i,t):[]}))
function Qo(e){var t=null==e?0:e.length
return t?e[t-1]:i}var Ko=Gn(Zo)
function Zo(e,t){return e&&e.length&&t&&t.length?Hn(e,t):e}var Xo=Yi((function(e,t){var r=null==e?0:e.length,n=rn(e,t)
return $n(e,Ot(t,(function(e){return go(e,r)?+e:e})).sort(Ei)),n}))
function Yo(e){return null==e?e:br.call(e)}var Jo=Gn((function(e){return ai(hn(e,1,Va,!0))})),ea=Gn((function(e){var t=Qo(e)
return Va(t)&&(t=i),ai(hn(e,1,Va,!0),io(t,2))})),ta=Gn((function(e){var t=Qo(e)
return t="function"==typeof t?t:i,ai(hn(e,1,Va,!0),i,t)}))
function ra(e){if(!e||!e.length)return[]
var t=0
return e=Tt(e,(function(e){if(Va(e))return t=hr(e.length,t),!0})),Wt(t,(function(t){return Ot(e,$t(t))}))}function na(e,t){if(!e||!e.length)return[]
var r=ra(e)
return null==t?r:Ot(r,(function(e){return Dt(t,i,e)}))}var ia=Gn((function(e,t){return Va(e)?un(e,t):[]})),oa=Gn((function(e){return fi(Tt(e,Va))})),aa=Gn((function(e){var t=Qo(e)
return Va(t)&&(t=i),fi(Tt(e,Va),io(t,2))})),sa=Gn((function(e){var t=Qo(e)
return t="function"==typeof t?t:i,fi(Tt(e,Va),i,t)})),ua=Gn(ra),la=Gn((function(e){var t=e.length,r=t>1?e[t-1]:i
return r="function"==typeof r?(e.pop(),r):i,na(e,r)}))
function ca(e){var t=Rr(e)
return t.__chain__=!0,t}function fa(e,t){return t(e)}var pa=Yi((function(e){var t=e.length,r=t?e[0]:0,n=this.__wrapped__,o=function(t){return rn(t,e)}
return!(t>1||this.__actions__.length)&&n instanceof Mr&&go(r)?((n=n.slice(r,+r+(t?1:0))).__actions__.push({func:fa,args:[o],thisArg:i}),new Ir(n,this.__chain__).thru((function(e){return t&&!e.length&&e.push(i),e}))):this.thru(o)})),da=Ci((function(e,t,r){Fe.call(e,r)?++e[r]:tn(e,r,1)})),ha=qi(Uo),ga=qi(Ho)
function ma(e,t){return(Ha(e)?_t:ln)(e,io(t,3))}function va(e,t){return(Ha(e)?kt:cn)(e,io(t,3))}var ya=Ci((function(e,t,r){Fe.call(e,r)?e[r].push(t):tn(e,r,[t])})),ba=Gn((function(e,t,r){var i=-1,o="function"==typeof t,a=za(e)?n(e.length):[]
return ln(e,(function(e){a[++i]=o?Dt(t,e,r):Cn(e,t,r)})),a})),wa=Ci((function(e,t,r){tn(e,r,t)}))
function xa(e,t){return(Ha(e)?Ot:Pn)(e,io(t,3))}var Ea=Ci((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),Da=Gn((function(e,t){if(null==e)return[]
var r=t.length
return r>1&&mo(e,t[0],t[1])?t=[]:r>2&&mo(t[0],t[1],t[2])&&(t=[t[0]]),Mn(e,hn(t,1),[])})),Aa=lt||function(){return ft.Date.now()}
function _a(e,t,r){return t=r?i:t,t=e&&null==t?e.length:t,Wi(e,l,i,i,i,i,t)}function ka(e,t){var r
if("function"!=typeof t)throw new Ce(o)
return e=ps(e),function(){return--e>0&&(r=t.apply(this,arguments)),e<=1&&(t=i),r}}var Ca=Gn((function(e,t,r){var n=1
if(r.length){var i=ar(r,no(Ca))
n|=u}return Wi(e,n,t,r,i)})),Ta=Gn((function(e,t,r){var n=3
if(r.length){var i=ar(r,no(Ta))
n|=u}return Wi(t,n,e,r,i)}))
function Sa(e,t,r){var n,a,s,u,l,c,f=0,p=!1,d=!1,h=!0
if("function"!=typeof e)throw new Ce(o)
function g(t){var r=n,o=a
return n=a=i,f=t,u=e.apply(o,r)}function m(e){var r=e-c
return c===i||r>=t||r<0||d&&e-f>=s}function v(){var e=Aa()
if(m(e))return y(e)
l=Co(v,function(e){var r=t-(e-c)
return d?gr(r,s-(e-f)):r}(e))}function y(e){return l=i,h&&n?g(e):(n=a=i,u)}function b(){var e=Aa(),r=m(e)
if(n=arguments,a=this,c=e,r){if(l===i)return function(e){return f=e,l=Co(v,t),p?g(e):u}(c)
if(d)return yi(l),l=Co(v,t),g(c)}return l===i&&(l=Co(v,t)),u}return t=hs(t)||0,Ya(r)&&(p=!!r.leading,s=(d="maxWait"in r)?hr(hs(r.maxWait)||0,t):s,h="trailing"in r?!!r.trailing:h),b.cancel=function(){l!==i&&yi(l),f=0,n=c=a=l=i},b.flush=function(){return l===i?u:y(Aa())},b}var Na=Gn((function(e,t){return sn(e,1,t)})),Oa=Gn((function(e,t,r){return sn(e,hs(t)||0,r)}))
function La(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Ce(o)
var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache
if(o.has(i))return o.get(i)
var a=e.apply(this,n)
return r.cache=o.set(i,a)||o,a}
return r.cache=new(La.Cache||$r),r}function Fa(e){if("function"!=typeof e)throw new Ce(o)
return function(){var t=arguments
switch(t.length){case 0:return!e.call(this)
case 1:return!e.call(this,t[0])
case 2:return!e.call(this,t[0],t[1])
case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}La.Cache=$r
var qa=mi((function(e,t){var r=(t=1==t.length&&Ha(t[0])?Ot(t[0],Kt(io())):Ot(hn(t,1),Kt(io()))).length
return Gn((function(n){for(var i=-1,o=gr(n.length,r);++i<o;)n[i]=t[i].call(this,n[i])
return Dt(e,this,n)}))})),Pa=Gn((function(e,t){var r=ar(t,no(Pa))
return Wi(e,u,i,t,r)})),Ra=Gn((function(e,t){var r=ar(t,no(Ra))
return Wi(e,64,i,t,r)})),Ba=Yi((function(e,t){return Wi(e,256,i,i,i,t)}))
function ja(e,t){return e===t||e!=e&&t!=t}var Ia=Hi(Dn),Ma=Hi((function(e,t){return e>=t})),Ua=Tn(function(){return arguments}())?Tn:function(e){return Ja(e)&&Fe.call(e,"callee")&&!Ge.call(e,"callee")},Ha=n.isArray,$a=vt?Kt(vt):function(e){return Ja(e)&&En(e)==O}
function za(e){return null!=e&&Xa(e.length)&&!Ka(e)}function Va(e){return Ja(e)&&za(e)}var Ga=mt||hu,Wa=yt?Kt(yt):function(e){return Ja(e)&&En(e)==y}
function Qa(e){if(!Ja(e))return!1
var t=En(e)
return t==b||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!rs(e)}function Ka(e){if(!Ya(e))return!1
var t=En(e)
return t==w||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Za(e){return"number"==typeof e&&e==ps(e)}function Xa(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=f}function Ya(e){var t=typeof e
return null!=e&&("object"==t||"function"==t)}function Ja(e){return null!=e&&"object"==typeof e}var es=bt?Kt(bt):function(e){return Ja(e)&&co(e)==E}
function ts(e){return"number"==typeof e||Ja(e)&&En(e)==D}function rs(e){if(!Ja(e)||En(e)!=A)return!1
var t=ze(e)
if(null===t)return!0
var r=Fe.call(t,"constructor")&&t.constructor
return"function"==typeof r&&r instanceof r&&Le.call(r)==Be}var ns=wt?Kt(wt):function(e){return Ja(e)&&En(e)==k},is=xt?Kt(xt):function(e){return Ja(e)&&co(e)==C}
function os(e){return"string"==typeof e||!Ha(e)&&Ja(e)&&En(e)==T}function as(e){return"symbol"==typeof e||Ja(e)&&En(e)==S}var ss=Et?Kt(Et):function(e){return Ja(e)&&Xa(e.length)&&!!it[En(e)]},us=Hi(qn),ls=Hi((function(e,t){return e<=t}))
function cs(e){if(!e)return[]
if(za(e))return os(e)?lr(e):_i(e)
if(Ke&&e[Ke])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value)
return r}(e[Ke]())
var t=co(e)
return(t==E?ir:t==C?sr:js)(e)}function fs(e){return e?(e=hs(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=fs(e),r=t%1
return t==t?r?t-r:t:0}function ds(e){return e?nn(ps(e),0,d):0}function hs(e){if("number"==typeof e)return e
if(as(e))return p
if(Ya(e)){var t="function"==typeof e.valueOf?e.valueOf():e
e=Ya(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e
e=Qt(e)
var r=he.test(e)
return r||me.test(e)?ut(e.slice(2),r?2:8):de.test(e)?p:+e}function gs(e){return ki(e,Ns(e))}function ms(e){return null==e?"":oi(e)}var vs=Ti((function(e,t){if(wo(t)||za(t))ki(t,Ss(t),e)
else for(var r in t)Fe.call(t,r)&&Xr(e,r,t[r])})),ys=Ti((function(e,t){ki(t,Ns(t),e)})),bs=Ti((function(e,t,r,n){ki(t,Ns(t),e,n)})),ws=Ti((function(e,t,r,n){ki(t,Ss(t),e,n)})),xs=Yi(rn),Es=Gn((function(e,t){e=Ae(e)
var r=-1,n=t.length,o=n>2?t[2]:i
for(o&&mo(t[0],t[1],o)&&(n=1);++r<n;)for(var a=t[r],s=Ns(a),u=-1,l=s.length;++u<l;){var c=s[u],f=e[c];(f===i||ja(f,Ne[c])&&!Fe.call(e,c))&&(e[c]=a[c])}return e})),Ds=Gn((function(e){return e.push(i,Ki),Dt(Ls,i,e)}))
function As(e,t,r){var n=null==e?i:wn(e,t)
return n===i?r:n}function _s(e,t){return null!=e&&fo(e,t,_n)}var ks=Bi((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),e[t]=r}),Ys(tu)),Cs=Bi((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),Fe.call(e,t)?e[t].push(r):e[t]=[r]}),io),Ts=Gn(Cn)
function Ss(e){return za(e)?Gr(e):Fn(e)}function Ns(e){return za(e)?Gr(e,!0):function(e){if(!Ya(e))return function(e){var t=[]
if(null!=e)for(var r in Ae(e))t.push(r)
return t}(e)
var t=wo(e),r=[]
for(var n in e)("constructor"!=n||!t&&Fe.call(e,n))&&r.push(n)
return r}(e)}var Os=Ti((function(e,t,r){jn(e,t,r)})),Ls=Ti((function(e,t,r,n){jn(e,t,r,n)})),Fs=Yi((function(e,t){var r={}
if(null==e)return r
var n=!1
t=Ot(t,(function(t){return t=gi(t,e),n||(n=t.length>1),t})),ki(e,eo(e),r),n&&(r=on(r,7,Zi))
for(var i=t.length;i--;)si(r,t[i])
return r})),qs=Yi((function(e,t){return null==e?{}:function(e,t){return Un(e,t,(function(t,r){return _s(e,r)}))}(e,t)}))
function Ps(e,t){if(null==e)return{}
var r=Ot(eo(e),(function(e){return[e]}))
return t=io(t),Un(e,r,(function(e,r){return t(e,r[0])}))}var Rs=Gi(Ss),Bs=Gi(Ns)
function js(e){return null==e?[]:Zt(e,Ss(e))}var Is=Li((function(e,t,r){return t=t.toLowerCase(),e+(r?Ms(t):t)}))
function Ms(e){return Qs(ms(e).toLowerCase())}function Us(e){return(e=ms(e))&&e.replace(ye,er).replace(Xe,"")}var Hs=Li((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),$s=Li((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),zs=Oi("toLowerCase"),Vs=Li((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),Gs=Li((function(e,t,r){return e+(r?" ":"")+Qs(t)})),Ws=Li((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Qs=Oi("toUpperCase")
function Ks(e,t,r){return e=ms(e),(t=r?i:t)===i?function(e){return tt.test(e)}(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.match(ue)||[]}(e):e.match(t)||[]}var Zs=Gn((function(e,t){try{return Dt(e,i,t)}catch(e){return Qa(e)?e:new xe(e)}})),Xs=Yi((function(e,t){return _t(t,(function(t){t=Po(t),tn(e,t,Ca(e[t],e))})),e}))
function Ys(e){return function(){return e}}var Js=Pi(),eu=Pi(!0)
function tu(e){return e}function ru(e){return Ln("function"==typeof e?e:on(e,1))}var nu=Gn((function(e,t){return function(r){return Cn(r,e,t)}})),iu=Gn((function(e,t){return function(r){return Cn(e,r,t)}}))
function ou(e,t,r){var n=Ss(t),i=bn(t,n)
null!=r||Ya(t)&&(i.length||!n.length)||(r=t,t=e,e=this,i=bn(t,Ss(t)))
var o=!(Ya(r)&&"chain"in r&&!r.chain),a=Ka(e)
return _t(i,(function(r){var n=t[r]
e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__
if(o||t){var r=e(this.__wrapped__)
return(r.__actions__=_i(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Lt([this.value()],arguments))})})),e}function au(){}var su=Ii(Ot),uu=Ii(Ct),lu=Ii(Pt)
function cu(e){return vo(e)?$t(Po(e)):function(e){return function(t){return wn(t,e)}}(e)}var fu=Ui(),pu=Ui(!0)
function du(){return[]}function hu(){return!1}var gu,mu=ji((function(e,t){return e+t}),0),vu=zi("ceil"),yu=ji((function(e,t){return e/t}),1),bu=zi("floor"),wu=ji((function(e,t){return e*t}),1),xu=zi("round"),Eu=ji((function(e,t){return e-t}),0)
return Rr.after=function(e,t){if("function"!=typeof t)throw new Ce(o)
return e=ps(e),function(){if(--e<1)return t.apply(this,arguments)}},Rr.ary=_a,Rr.assign=vs,Rr.assignIn=ys,Rr.assignInWith=bs,Rr.assignWith=ws,Rr.at=xs,Rr.before=ka,Rr.bind=Ca,Rr.bindAll=Xs,Rr.bindKey=Ta,Rr.castArray=function(){if(!arguments.length)return[]
var e=arguments[0]
return Ha(e)?e:[e]},Rr.chain=ca,Rr.chunk=function(e,t,r){t=(r?mo(e,t,r):t===i)?1:hr(ps(t),0)
var o=null==e?0:e.length
if(!o||t<1)return[]
for(var a=0,s=0,u=n(pt(o/t));a<o;)u[s++]=Jn(e,a,a+=t)
return u},Rr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var o=e[t]
o&&(i[n++]=o)}return i},Rr.concat=function(){var e=arguments.length
if(!e)return[]
for(var t=n(e-1),r=arguments[0],i=e;i--;)t[i-1]=arguments[i]
return Lt(Ha(r)?_i(r):[r],hn(t,1))},Rr.cond=function(e){var t=null==e?0:e.length,r=io()
return e=t?Ot(e,(function(e){if("function"!=typeof e[1])throw new Ce(o)
return[r(e[0]),e[1]]})):[],Gn((function(r){for(var n=-1;++n<t;){var i=e[n]
if(Dt(i[0],this,r))return Dt(i[1],this,r)}}))},Rr.conforms=function(e){return function(e){var t=Ss(e)
return function(r){return an(r,e,t)}}(on(e,1))},Rr.constant=Ys,Rr.countBy=da,Rr.create=function(e,t){var r=Br(e)
return null==t?r:en(r,t)},Rr.curry=function e(t,r,n){var o=Wi(t,8,i,i,i,i,i,r=n?i:r)
return o.placeholder=e.placeholder,o},Rr.curryRight=function e(t,r,n){var o=Wi(t,16,i,i,i,i,i,r=n?i:r)
return o.placeholder=e.placeholder,o},Rr.debounce=Sa,Rr.defaults=Es,Rr.defaultsDeep=Ds,Rr.defer=Na,Rr.delay=Oa,Rr.difference=jo,Rr.differenceBy=Io,Rr.differenceWith=Mo,Rr.drop=function(e,t,r){var n=null==e?0:e.length
return n?Jn(e,(t=r||t===i?1:ps(t))<0?0:t,n):[]},Rr.dropRight=function(e,t,r){var n=null==e?0:e.length
return n?Jn(e,0,(t=n-(t=r||t===i?1:ps(t)))<0?0:t):[]},Rr.dropRightWhile=function(e,t){return e&&e.length?li(e,io(t,3),!0,!0):[]},Rr.dropWhile=function(e,t){return e&&e.length?li(e,io(t,3),!0):[]},Rr.fill=function(e,t,r,n){var o=null==e?0:e.length
return o?(r&&"number"!=typeof r&&mo(e,t,r)&&(r=0,n=o),function(e,t,r,n){var o=e.length
for((r=ps(r))<0&&(r=-r>o?0:o+r),(n=n===i||n>o?o:ps(n))<0&&(n+=o),n=r>n?0:ds(n);r<n;)e[r++]=t
return e}(e,t,r,n)):[]},Rr.filter=function(e,t){return(Ha(e)?Tt:dn)(e,io(t,3))},Rr.flatMap=function(e,t){return hn(xa(e,t),1)},Rr.flatMapDeep=function(e,t){return hn(xa(e,t),c)},Rr.flatMapDepth=function(e,t,r){return r=r===i?1:ps(r),hn(xa(e,t),r)},Rr.flatten=$o,Rr.flattenDeep=function(e){return null!=e&&e.length?hn(e,c):[]},Rr.flattenDepth=function(e,t){return null!=e&&e.length?hn(e,t=t===i?1:ps(t)):[]},Rr.flip=function(e){return Wi(e,512)},Rr.flow=Js,Rr.flowRight=eu,Rr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t]
n[i[0]]=i[1]}return n},Rr.functions=function(e){return null==e?[]:bn(e,Ss(e))},Rr.functionsIn=function(e){return null==e?[]:bn(e,Ns(e))},Rr.groupBy=ya,Rr.initial=function(e){return null!=e&&e.length?Jn(e,0,-1):[]},Rr.intersection=Vo,Rr.intersectionBy=Go,Rr.intersectionWith=Wo,Rr.invert=ks,Rr.invertBy=Cs,Rr.invokeMap=ba,Rr.iteratee=ru,Rr.keyBy=wa,Rr.keys=Ss,Rr.keysIn=Ns,Rr.map=xa,Rr.mapKeys=function(e,t){var r={}
return t=io(t,3),vn(e,(function(e,n,i){tn(r,t(e,n,i),e)})),r},Rr.mapValues=function(e,t){var r={}
return t=io(t,3),vn(e,(function(e,n,i){tn(r,n,t(e,n,i))})),r},Rr.matches=function(e){return Rn(on(e,1))},Rr.matchesProperty=function(e,t){return Bn(e,on(t,1))},Rr.memoize=La,Rr.merge=Os,Rr.mergeWith=Ls,Rr.method=nu,Rr.methodOf=iu,Rr.mixin=ou,Rr.negate=Fa,Rr.nthArg=function(e){return e=ps(e),Gn((function(t){return In(t,e)}))},Rr.omit=Fs,Rr.omitBy=function(e,t){return Ps(e,Fa(io(t)))},Rr.once=function(e){return ka(2,e)},Rr.orderBy=function(e,t,r,n){return null==e?[]:(Ha(t)||(t=null==t?[]:[t]),Ha(r=n?i:r)||(r=null==r?[]:[r]),Mn(e,t,r))},Rr.over=su,Rr.overArgs=qa,Rr.overEvery=uu,Rr.overSome=lu,Rr.partial=Pa,Rr.partialRight=Ra,Rr.partition=Ea,Rr.pick=qs,Rr.pickBy=Ps,Rr.property=cu,Rr.propertyOf=function(e){return function(t){return null==e?i:wn(e,t)}},Rr.pull=Ko,Rr.pullAll=Zo,Rr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Hn(e,t,io(r,2)):e},Rr.pullAllWith=function(e,t,r){return e&&e.length&&t&&t.length?Hn(e,t,i,r):e},Rr.pullAt=Xo,Rr.range=fu,Rr.rangeRight=pu,Rr.rearg=Ba,Rr.reject=function(e,t){return(Ha(e)?Tt:dn)(e,Fa(io(t,3)))},Rr.remove=function(e,t){var r=[]
if(!e||!e.length)return r
var n=-1,i=[],o=e.length
for(t=io(t,3);++n<o;){var a=e[n]
t(a,n,e)&&(r.push(a),i.push(n))}return $n(e,i),r},Rr.rest=function(e,t){if("function"!=typeof e)throw new Ce(o)
return Gn(e,t=t===i?t:ps(t))},Rr.reverse=Yo,Rr.sampleSize=function(e,t,r){return t=(r?mo(e,t,r):t===i)?1:ps(t),(Ha(e)?Qr:Qn)(e,t)},Rr.set=function(e,t,r){return null==e?e:Kn(e,t,r)},Rr.setWith=function(e,t,r,n){return n="function"==typeof n?n:i,null==e?e:Kn(e,t,r,n)},Rr.shuffle=function(e){return(Ha(e)?Kr:Yn)(e)},Rr.slice=function(e,t,r){var n=null==e?0:e.length
return n?(r&&"number"!=typeof r&&mo(e,t,r)?(t=0,r=n):(t=null==t?0:ps(t),r=r===i?n:ps(r)),Jn(e,t,r)):[]},Rr.sortBy=Da,Rr.sortedUniq=function(e){return e&&e.length?ni(e):[]},Rr.sortedUniqBy=function(e,t){return e&&e.length?ni(e,io(t,2)):[]},Rr.split=function(e,t,r){return r&&"number"!=typeof r&&mo(e,t,r)&&(t=r=i),(r=r===i?d:r>>>0)?(e=ms(e))&&("string"==typeof t||null!=t&&!ns(t))&&!(t=oi(t))&&nr(e)?vi(lr(e),0,r):e.split(t,r):[]},Rr.spread=function(e,t){if("function"!=typeof e)throw new Ce(o)
return t=null==t?0:hr(ps(t),0),Gn((function(r){var n=r[t],i=vi(r,0,t)
return n&&Lt(i,n),Dt(e,this,i)}))},Rr.tail=function(e){var t=null==e?0:e.length
return t?Jn(e,1,t):[]},Rr.take=function(e,t,r){return e&&e.length?Jn(e,0,(t=r||t===i?1:ps(t))<0?0:t):[]},Rr.takeRight=function(e,t,r){var n=null==e?0:e.length
return n?Jn(e,(t=n-(t=r||t===i?1:ps(t)))<0?0:t,n):[]},Rr.takeRightWhile=function(e,t){return e&&e.length?li(e,io(t,3),!1,!0):[]},Rr.takeWhile=function(e,t){return e&&e.length?li(e,io(t,3)):[]},Rr.tap=function(e,t){return t(e),e},Rr.throttle=function(e,t,r){var n=!0,i=!0
if("function"!=typeof e)throw new Ce(o)
return Ya(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Sa(e,t,{leading:n,maxWait:t,trailing:i})},Rr.thru=fa,Rr.toArray=cs,Rr.toPairs=Rs,Rr.toPairsIn=Bs,Rr.toPath=function(e){return Ha(e)?Ot(e,Po):as(e)?[e]:_i(qo(ms(e)))},Rr.toPlainObject=gs,Rr.transform=function(e,t,r){var n=Ha(e),i=n||Ga(e)||ss(e)
if(t=io(t,4),null==r){var o=e&&e.constructor
r=i?n?new o:[]:Ya(e)&&Ka(o)?Br(ze(e)):{}}return(i?_t:vn)(e,(function(e,n,i){return t(r,e,n,i)})),r},Rr.unary=function(e){return _a(e,1)},Rr.union=Jo,Rr.unionBy=ea,Rr.unionWith=ta,Rr.uniq=function(e){return e&&e.length?ai(e):[]},Rr.uniqBy=function(e,t){return e&&e.length?ai(e,io(t,2)):[]},Rr.uniqWith=function(e,t){return t="function"==typeof t?t:i,e&&e.length?ai(e,i,t):[]},Rr.unset=function(e,t){return null==e||si(e,t)},Rr.unzip=ra,Rr.unzipWith=na,Rr.update=function(e,t,r){return null==e?e:ui(e,t,hi(r))},Rr.updateWith=function(e,t,r,n){return n="function"==typeof n?n:i,null==e?e:ui(e,t,hi(r),n)},Rr.values=js,Rr.valuesIn=function(e){return null==e?[]:Zt(e,Ns(e))},Rr.without=ia,Rr.words=Ks,Rr.wrap=function(e,t){return Pa(hi(t),e)},Rr.xor=oa,Rr.xorBy=aa,Rr.xorWith=sa,Rr.zip=ua,Rr.zipObject=function(e,t){return pi(e||[],t||[],Xr)},Rr.zipObjectDeep=function(e,t){return pi(e||[],t||[],Kn)},Rr.zipWith=la,Rr.entries=Rs,Rr.entriesIn=Bs,Rr.extend=ys,Rr.extendWith=bs,ou(Rr,Rr),Rr.add=mu,Rr.attempt=Zs,Rr.camelCase=Is,Rr.capitalize=Ms,Rr.ceil=vu,Rr.clamp=function(e,t,r){return r===i&&(r=t,t=i),r!==i&&(r=(r=hs(r))==r?r:0),t!==i&&(t=(t=hs(t))==t?t:0),nn(hs(e),t,r)},Rr.clone=function(e){return on(e,4)},Rr.cloneDeep=function(e){return on(e,5)},Rr.cloneDeepWith=function(e,t){return on(e,5,t="function"==typeof t?t:i)},Rr.cloneWith=function(e,t){return on(e,4,t="function"==typeof t?t:i)},Rr.conformsTo=function(e,t){return null==t||an(e,t,Ss(t))},Rr.deburr=Us,Rr.defaultTo=function(e,t){return null==e||e!=e?t:e},Rr.divide=yu,Rr.endsWith=function(e,t,r){e=ms(e),t=oi(t)
var n=e.length,o=r=r===i?n:nn(ps(r),0,n)
return(r-=t.length)>=0&&e.slice(r,o)==t},Rr.eq=ja,Rr.escape=function(e){return(e=ms(e))&&Q.test(e)?e.replace(G,tr):e},Rr.escapeRegExp=function(e){return(e=ms(e))&&re.test(e)?e.replace(te,"\\$&"):e},Rr.every=function(e,t,r){var n=Ha(e)?Ct:fn
return r&&mo(e,t,r)&&(t=i),n(e,io(t,3))},Rr.find=ha,Rr.findIndex=Uo,Rr.findKey=function(e,t){return Bt(e,io(t,3),vn)},Rr.findLast=ga,Rr.findLastIndex=Ho,Rr.findLastKey=function(e,t){return Bt(e,io(t,3),yn)},Rr.floor=bu,Rr.forEach=ma,Rr.forEachRight=va,Rr.forIn=function(e,t){return null==e?e:gn(e,io(t,3),Ns)},Rr.forInRight=function(e,t){return null==e?e:mn(e,io(t,3),Ns)},Rr.forOwn=function(e,t){return e&&vn(e,io(t,3))},Rr.forOwnRight=function(e,t){return e&&yn(e,io(t,3))},Rr.get=As,Rr.gt=Ia,Rr.gte=Ma,Rr.has=function(e,t){return null!=e&&fo(e,t,An)},Rr.hasIn=_s,Rr.head=zo,Rr.identity=tu,Rr.includes=function(e,t,r,n){e=za(e)?e:js(e),r=r&&!n?ps(r):0
var i=e.length
return r<0&&(r=hr(i+r,0)),os(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&It(e,t,r)>-1},Rr.indexOf=function(e,t,r){var n=null==e?0:e.length
if(!n)return-1
var i=null==r?0:ps(r)
return i<0&&(i=hr(n+i,0)),It(e,t,i)},Rr.inRange=function(e,t,r){return t=fs(t),r===i?(r=t,t=0):r=fs(r),function(e,t,r){return e>=gr(t,r)&&e<hr(t,r)}(e=hs(e),t,r)},Rr.invoke=Ts,Rr.isArguments=Ua,Rr.isArray=Ha,Rr.isArrayBuffer=$a,Rr.isArrayLike=za,Rr.isArrayLikeObject=Va,Rr.isBoolean=function(e){return!0===e||!1===e||Ja(e)&&En(e)==v},Rr.isBuffer=Ga,Rr.isDate=Wa,Rr.isElement=function(e){return Ja(e)&&1===e.nodeType&&!rs(e)},Rr.isEmpty=function(e){if(null==e)return!0
if(za(e)&&(Ha(e)||"string"==typeof e||"function"==typeof e.splice||Ga(e)||ss(e)||Ua(e)))return!e.length
var t=co(e)
if(t==E||t==C)return!e.size
if(wo(e))return!Fn(e).length
for(var r in e)if(Fe.call(e,r))return!1
return!0},Rr.isEqual=function(e,t){return Sn(e,t)},Rr.isEqualWith=function(e,t,r){var n=(r="function"==typeof r?r:i)?r(e,t):i
return n===i?Sn(e,t,i,r):!!n},Rr.isError=Qa,Rr.isFinite=function(e){return"number"==typeof e&&Rt(e)},Rr.isFunction=Ka,Rr.isInteger=Za,Rr.isLength=Xa,Rr.isMap=es,Rr.isMatch=function(e,t){return e===t||Nn(e,t,ao(t))},Rr.isMatchWith=function(e,t,r){return r="function"==typeof r?r:i,Nn(e,t,ao(t),r)},Rr.isNaN=function(e){return ts(e)&&e!=+e},Rr.isNative=function(e){if(bo(e))throw new xe("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.")
return On(e)},Rr.isNil=function(e){return null==e},Rr.isNull=function(e){return null===e},Rr.isNumber=ts,Rr.isObject=Ya,Rr.isObjectLike=Ja,Rr.isPlainObject=rs,Rr.isRegExp=ns,Rr.isSafeInteger=function(e){return Za(e)&&e>=-9007199254740991&&e<=f},Rr.isSet=is,Rr.isString=os,Rr.isSymbol=as,Rr.isTypedArray=ss,Rr.isUndefined=function(e){return e===i},Rr.isWeakMap=function(e){return Ja(e)&&co(e)==N},Rr.isWeakSet=function(e){return Ja(e)&&"[object WeakSet]"==En(e)},Rr.join=function(e,t){return null==e?"":zt.call(e,t)},Rr.kebabCase=Hs,Rr.last=Qo,Rr.lastIndexOf=function(e,t,r){var n=null==e?0:e.length
if(!n)return-1
var o=n
return r!==i&&(o=(o=ps(r))<0?hr(n+o,0):gr(o,n-1)),t==t?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n
return n}(e,t,o):jt(e,Ut,o,!0)},Rr.lowerCase=$s,Rr.lowerFirst=zs,Rr.lt=us,Rr.lte=ls,Rr.max=function(e){return e&&e.length?pn(e,tu,Dn):i},Rr.maxBy=function(e,t){return e&&e.length?pn(e,io(t,2),Dn):i},Rr.mean=function(e){return Ht(e,tu)},Rr.meanBy=function(e,t){return Ht(e,io(t,2))},Rr.min=function(e){return e&&e.length?pn(e,tu,qn):i},Rr.minBy=function(e,t){return e&&e.length?pn(e,io(t,2),qn):i},Rr.stubArray=du,Rr.stubFalse=hu,Rr.stubObject=function(){return{}},Rr.stubString=function(){return""},Rr.stubTrue=function(){return!0},Rr.multiply=wu,Rr.nth=function(e,t){return e&&e.length?In(e,ps(t)):i},Rr.noConflict=function(){return ft._===this&&(ft._=je),this},Rr.noop=au,Rr.now=Aa,Rr.pad=function(e,t,r){e=ms(e)
var n=(t=ps(t))?ur(e):0
if(!t||n>=t)return e
var i=(t-n)/2
return Mi(dt(i),r)+e+Mi(pt(i),r)},Rr.padEnd=function(e,t,r){e=ms(e)
var n=(t=ps(t))?ur(e):0
return t&&n<t?e+Mi(t-n,r):e},Rr.padStart=function(e,t,r){e=ms(e)
var n=(t=ps(t))?ur(e):0
return t&&n<t?Mi(t-n,r)+e:e},Rr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),vr(ms(e).replace(ne,""),t||0)},Rr.random=function(e,t,r){if(r&&"boolean"!=typeof r&&mo(e,t,r)&&(t=r=i),r===i&&("boolean"==typeof t?(r=t,t=i):"boolean"==typeof e&&(r=e,e=i)),e===i&&t===i?(e=0,t=1):(e=fs(e),t===i?(t=e,e=0):t=fs(t)),e>t){var n=e
e=t,t=n}if(r||e%1||t%1){var o=yr()
return gr(e+o*(t-e+st("1e-"+((o+"").length-1))),t)}return zn(e,t)},Rr.reduce=function(e,t,r){var n=Ha(e)?Ft:Vt,i=arguments.length<3
return n(e,io(t,4),r,i,ln)},Rr.reduceRight=function(e,t,r){var n=Ha(e)?qt:Vt,i=arguments.length<3
return n(e,io(t,4),r,i,cn)},Rr.repeat=function(e,t,r){return t=(r?mo(e,t,r):t===i)?1:ps(t),Vn(ms(e),t)},Rr.replace=function(){var e=arguments,t=ms(e[0])
return e.length<3?t:t.replace(e[1],e[2])},Rr.result=function(e,t,r){var n=-1,o=(t=gi(t,e)).length
for(o||(o=1,e=i);++n<o;){var a=null==e?i:e[Po(t[n])]
a===i&&(n=o,a=r),e=Ka(a)?a.call(e):a}return e},Rr.round=xu,Rr.runInContext=e,Rr.sample=function(e){return(Ha(e)?Wr:Wn)(e)},Rr.size=function(e){if(null==e)return 0
if(za(e))return os(e)?ur(e):e.length
var t=co(e)
return t==E||t==C?e.size:Fn(e).length},Rr.snakeCase=Vs,Rr.some=function(e,t,r){var n=Ha(e)?Pt:ei
return r&&mo(e,t,r)&&(t=i),n(e,io(t,3))},Rr.sortedIndex=function(e,t){return ti(e,t)},Rr.sortedIndexBy=function(e,t,r){return ri(e,t,io(r,2))},Rr.sortedIndexOf=function(e,t){var r=null==e?0:e.length
if(r){var n=ti(e,t)
if(n<r&&ja(e[n],t))return n}return-1},Rr.sortedLastIndex=function(e,t){return ti(e,t,!0)},Rr.sortedLastIndexBy=function(e,t,r){return ri(e,t,io(r,2),!0)},Rr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=ti(e,t,!0)-1
if(ja(e[r],t))return r}return-1},Rr.startCase=Gs,Rr.startsWith=function(e,t,r){return e=ms(e),r=null==r?0:nn(ps(r),0,e.length),t=oi(t),e.slice(r,r+t.length)==t},Rr.subtract=Eu,Rr.sum=function(e){return e&&e.length?Gt(e,tu):0},Rr.sumBy=function(e,t){return e&&e.length?Gt(e,io(t,2)):0},Rr.template=function(e,t,r){var n=Rr.templateSettings
r&&mo(e,t,r)&&(t=i),e=ms(e),t=bs({},t,n,Qi)
var o,a,s=bs({},t.imports,n.imports,Qi),u=Ss(s),l=Zt(s,u),c=0,f=t.interpolate||be,p="__p += '",d=_e((t.escape||be).source+"|"+f.source+"|"+(f===X?fe:be).source+"|"+(t.evaluate||be).source+"|$","g"),h="//# sourceURL="+(Fe.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++nt+"]")+"\n"
e.replace(d,(function(t,r,n,i,s,u){return n||(n=i),p+=e.slice(c,u).replace(we,rr),r&&(o=!0,p+="' +\n__e("+r+") +\n'"),s&&(a=!0,p+="';\n"+s+";\n__p += '"),n&&(p+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),c=u+t.length,t})),p+="';\n"
var g=Fe.call(t,"variable")&&t.variable
if(g){if(le.test(g))throw new xe("Invalid `variable` option passed into `_.template`")}else p="with (obj) {\n"+p+"\n}\n"
p=(a?p.replace(H,""):p).replace($,"$1").replace(z,"$1;"),p="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}"
var m=Zs((function(){return Ee(u,h+"return "+p).apply(i,l)}))
if(m.source=p,Qa(m))throw m
return m},Rr.times=function(e,t){if((e=ps(e))<1||e>f)return[]
var r=d,n=gr(e,d)
t=io(t),e-=d
for(var i=Wt(n,t);++r<e;)t(r)
return i},Rr.toFinite=fs,Rr.toInteger=ps,Rr.toLength=ds,Rr.toLower=function(e){return ms(e).toLowerCase()},Rr.toNumber=hs,Rr.toSafeInteger=function(e){return e?nn(ps(e),-9007199254740991,f):0===e?e:0},Rr.toString=ms,Rr.toUpper=function(e){return ms(e).toUpperCase()},Rr.trim=function(e,t,r){if((e=ms(e))&&(r||t===i))return Qt(e)
if(!e||!(t=oi(t)))return e
var n=lr(e),o=lr(t)
return vi(n,Yt(n,o),Jt(n,o)+1).join("")},Rr.trimEnd=function(e,t,r){if((e=ms(e))&&(r||t===i))return e.slice(0,cr(e)+1)
if(!e||!(t=oi(t)))return e
var n=lr(e)
return vi(n,0,Jt(n,lr(t))+1).join("")},Rr.trimStart=function(e,t,r){if((e=ms(e))&&(r||t===i))return e.replace(ne,"")
if(!e||!(t=oi(t)))return e
var n=lr(e)
return vi(n,Yt(n,lr(t))).join("")},Rr.truncate=function(e,t){var r=30,n="..."
if(Ya(t)){var o="separator"in t?t.separator:o
r="length"in t?ps(t.length):r,n="omission"in t?oi(t.omission):n}var a=(e=ms(e)).length
if(nr(e)){var s=lr(e)
a=s.length}if(r>=a)return e
var u=r-ur(n)
if(u<1)return n
var l=s?vi(s,0,u).join(""):e.slice(0,u)
if(o===i)return l+n
if(s&&(u+=l.length-u),ns(o)){if(e.slice(u).search(o)){var c,f=l
for(o.global||(o=_e(o.source,ms(pe.exec(o))+"g")),o.lastIndex=0;c=o.exec(f);)var p=c.index
l=l.slice(0,p===i?u:p)}}else if(e.indexOf(oi(o),u)!=u){var d=l.lastIndexOf(o)
d>-1&&(l=l.slice(0,d))}return l+n},Rr.unescape=function(e){return(e=ms(e))&&W.test(e)?e.replace(V,fr):e},Rr.uniqueId=function(e){var t=++qe
return ms(e)+t},Rr.upperCase=Ws,Rr.upperFirst=Qs,Rr.each=ma,Rr.eachRight=va,Rr.first=zo,ou(Rr,(gu={},vn(Rr,(function(e,t){Fe.call(Rr.prototype,t)||(gu[t]=e)})),gu),{chain:!1}),Rr.VERSION="4.17.21",_t(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Rr[e].placeholder=Rr})),_t(["drop","take"],(function(e,t){Mr.prototype[e]=function(r){r=r===i?1:hr(ps(r),0)
var n=this.__filtered__&&!t?new Mr(this):this.clone()
return n.__filtered__?n.__takeCount__=gr(r,n.__takeCount__):n.__views__.push({size:gr(r,d),type:e+(n.__dir__<0?"Right":"")}),n},Mr.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),_t(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r
Mr.prototype[e]=function(e){var t=this.clone()
return t.__iteratees__.push({iteratee:io(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),_t(["head","last"],(function(e,t){var r="take"+(t?"Right":"")
Mr.prototype[e]=function(){return this[r](1).value()[0]}})),_t(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right")
Mr.prototype[e]=function(){return this.__filtered__?new Mr(this):this[r](1)}})),Mr.prototype.compact=function(){return this.filter(tu)},Mr.prototype.find=function(e){return this.filter(e).head()},Mr.prototype.findLast=function(e){return this.reverse().find(e)},Mr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Mr(this):this.map((function(r){return Cn(r,e,t)}))})),Mr.prototype.reject=function(e){return this.filter(Fa(io(e)))},Mr.prototype.slice=function(e,t){e=ps(e)
var r=this
return r.__filtered__&&(e>0||t<0)?new Mr(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==i&&(r=(t=ps(t))<0?r.dropRight(-t):r.take(t-e)),r)},Mr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Mr.prototype.toArray=function(){return this.take(d)},vn(Mr.prototype,(function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),n=/^(?:head|last)$/.test(t),o=Rr[n?"take"+("last"==t?"Right":""):t],a=n||/^find/.test(t)
o&&(Rr.prototype[t]=function(){var t=this.__wrapped__,s=n?[1]:arguments,u=t instanceof Mr,l=s[0],c=u||Ha(t),f=function(e){var t=o.apply(Rr,Lt([e],s))
return n&&p?t[0]:t}
c&&r&&"function"==typeof l&&1!=l.length&&(u=c=!1)
var p=this.__chain__,d=!!this.__actions__.length,h=a&&!p,g=u&&!d
if(!a&&c){t=g?t:new Mr(this)
var m=e.apply(t,s)
return m.__actions__.push({func:fa,args:[f],thisArg:i}),new Ir(m,p)}return h&&g?e.apply(this,s):(m=this.thru(f),h?n?m.value()[0]:m.value():m)})})),_t(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Te[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e)
Rr.prototype[e]=function(){var e=arguments
if(n&&!this.__chain__){var i=this.value()
return t.apply(Ha(i)?i:[],e)}return this[r]((function(r){return t.apply(Ha(r)?r:[],e)}))}})),vn(Mr.prototype,(function(e,t){var r=Rr[t]
if(r){var n=r.name+""
Fe.call(Cr,n)||(Cr[n]=[]),Cr[n].push({name:t,func:r})}})),Cr[Ri(i,2).name]=[{name:"wrapper",func:i}],Mr.prototype.clone=function(){var e=new Mr(this.__wrapped__)
return e.__actions__=_i(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=_i(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=_i(this.__views__),e},Mr.prototype.reverse=function(){if(this.__filtered__){var e=new Mr(this)
e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1
return e},Mr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ha(e),n=t<0,i=r?e.length:0,o=function(e,t,r){for(var n=-1,i=r.length;++n<i;){var o=r[n],a=o.size
switch(o.type){case"drop":e+=a
break
case"dropRight":t-=a
break
case"take":t=gr(t,e+a)
break
case"takeRight":e=hr(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,u=s-a,l=n?s:a-1,c=this.__iteratees__,f=c.length,p=0,d=gr(u,this.__takeCount__)
if(!r||!n&&i==u&&d==u)return ci(e,this.__actions__)
var h=[]
e:for(;u--&&p<d;){for(var g=-1,m=e[l+=t];++g<f;){var v=c[g],y=v.iteratee,b=v.type,w=y(m)
if(2==b)m=w
else if(!w){if(1==b)continue e
break e}}h[p++]=m}return h},Rr.prototype.at=pa,Rr.prototype.chain=function(){return ca(this)},Rr.prototype.commit=function(){return new Ir(this.value(),this.__chain__)},Rr.prototype.next=function(){this.__values__===i&&(this.__values__=cs(this.value()))
var e=this.__index__>=this.__values__.length
return{done:e,value:e?i:this.__values__[this.__index__++]}},Rr.prototype.plant=function(e){for(var t,r=this;r instanceof jr;){var n=Bo(r)
n.__index__=0,n.__values__=i,t?o.__wrapped__=n:t=n
var o=n
r=r.__wrapped__}return o.__wrapped__=e,t},Rr.prototype.reverse=function(){var e=this.__wrapped__
if(e instanceof Mr){var t=e
return this.__actions__.length&&(t=new Mr(this)),(t=t.reverse()).__actions__.push({func:fa,args:[Yo],thisArg:i}),new Ir(t,this.__chain__)}return this.thru(Yo)},Rr.prototype.toJSON=Rr.prototype.valueOf=Rr.prototype.value=function(){return ci(this.__wrapped__,this.__actions__)},Rr.prototype.first=Rr.prototype.head,Ke&&(Rr.prototype[Ke]=function(){return this}),Rr}()
ft._=pr,(n=function(){return pr}.call(t,r,t,e))===i||(e.exports=n)}.call(this)},347:(e,t,r)=>{var n,i
!function(){var o,a,s,u,l,c,f,p,d,h,g,m,v,y,b,w,x,E,D,A,_,k,C,T,S,N,O,L,F,q=function(e){var t=new q.Builder
return t.pipeline.add(q.trimmer,q.stopWordFilter,q.stemmer),t.searchPipeline.add(q.stemmer),e.call(t,t),t.build()}
q.version="2.3.9",q.utils={},q.utils.warn=function(e){return function(t){e.console&&console.warn&&console.warn(t)}}(this),q.utils.asString=function(e){return null==e?"":e.toString()},q.utils.clone=function(e){if(null==e)return e
for(var t=Object.create(null),r=Object.keys(e),n=0;n<r.length;n++){var i=r[n],o=e[i]
if(Array.isArray(o))t[i]=o.slice()
else{if("string"!=typeof o&&"number"!=typeof o&&"boolean"!=typeof o)throw new TypeError("clone is not deep and does not support nested objects")
t[i]=o}}return t},q.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r},q.FieldRef.joiner="/",q.FieldRef.fromString=function(e){var t=e.indexOf(q.FieldRef.joiner)
if(-1===t)throw"malformed field ref string"
var r=e.slice(0,t),n=e.slice(t+1)
return new q.FieldRef(n,r,e)},q.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+q.FieldRef.joiner+this.docRef),this._stringValue},q.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length
for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},q.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},q.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},q.Set.prototype.contains=function(e){return!!this.elements[e]},q.Set.prototype.intersect=function(e){var t,r,n,i=[]
if(e===q.Set.complete)return this
if(e===q.Set.empty)return e
this.length<e.length?(t=this,r=e):(t=e,r=this),n=Object.keys(t.elements)
for(var o=0;o<n.length;o++){var a=n[o]
a in r.elements&&i.push(a)}return new q.Set(i)},q.Set.prototype.union=function(e){return e===q.Set.complete?q.Set.complete:e===q.Set.empty?this:new q.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},q.idf=function(e,t){var r=0
for(var n in e)"_index"!=n&&(r+=Object.keys(e[n]).length)
var i=(t-r+.5)/(r+.5)
return Math.log(1+Math.abs(i))},q.Token=function(e,t){this.str=e||"",this.metadata=t||{}},q.Token.prototype.toString=function(){return this.str},q.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},q.Token.prototype.clone=function(e){return e=e||function(e){return e},new q.Token(e(this.str,this.metadata),this.metadata)},q.tokenizer=function(e,t){if(null==e||null==e)return[]
if(Array.isArray(e))return e.map((function(e){return new q.Token(q.utils.asString(e).toLowerCase(),q.utils.clone(t))}))
for(var r=e.toString().toLowerCase(),n=r.length,i=[],o=0,a=0;o<=n;o++){var s=o-a
if(r.charAt(o).match(q.tokenizer.separator)||o==n){if(s>0){var u=q.utils.clone(t)||{}
u.position=[a,s],u.index=i.length,i.push(new q.Token(r.slice(a,o),u))}a=o+1}}return i},q.tokenizer.separator=/[\s\-]+/,q.Pipeline=function(){this._stack=[]},q.Pipeline.registeredFunctions=Object.create(null),q.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&q.utils.warn("Overwriting existing registered function: "+t),e.label=t,q.Pipeline.registeredFunctions[e.label]=e},q.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||q.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},q.Pipeline.load=function(e){var t=new q.Pipeline
return e.forEach((function(e){var r=q.Pipeline.registeredFunctions[e]
if(!r)throw new Error("Cannot load unregistered function: "+e)
t.add(r)})),t},q.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach((function(e){q.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)}),this)},q.Pipeline.prototype.after=function(e,t){q.Pipeline.warnIfFunctionNotRegistered(t)
var r=this._stack.indexOf(e)
if(-1==r)throw new Error("Cannot find existingFn")
r+=1,this._stack.splice(r,0,t)},q.Pipeline.prototype.before=function(e,t){q.Pipeline.warnIfFunctionNotRegistered(t)
var r=this._stack.indexOf(e)
if(-1==r)throw new Error("Cannot find existingFn")
this._stack.splice(r,0,t)},q.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},q.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){for(var n=this._stack[r],i=[],o=0;o<e.length;o++){var a=n(e[o],o,e)
if(null!=a&&""!==a)if(Array.isArray(a))for(var s=0;s<a.length;s++)i.push(a[s])
else i.push(a)}e=i}return e},q.Pipeline.prototype.runString=function(e,t){var r=new q.Token(e,t)
return this.run([r]).map((function(e){return e.toString()}))},q.Pipeline.prototype.reset=function(){this._stack=[]},q.Pipeline.prototype.toJSON=function(){return this._stack.map((function(e){return q.Pipeline.warnIfFunctionNotRegistered(e),e.label}))},q.Vector=function(e){this._magnitude=0,this.elements=e||[]},q.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0
for(var t=0,r=this.elements.length/2,n=r-t,i=Math.floor(n/2),o=this.elements[2*i];n>1&&(o<e&&(t=i),o>e&&(r=i),o!=e);)n=r-t,i=t+Math.floor(n/2),o=this.elements[2*i]
return o==e||o>e?2*i:o<e?2*(i+1):void 0},q.Vector.prototype.insert=function(e,t){this.upsert(e,t,(function(){throw"duplicate index"}))},q.Vector.prototype.upsert=function(e,t,r){this._magnitude=0
var n=this.positionForIndex(e)
this.elements[n]==e?this.elements[n+1]=r(this.elements[n+1],t):this.elements.splice(n,0,e,t)},q.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude
for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var n=this.elements[r]
e+=n*n}return this._magnitude=Math.sqrt(e)},q.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,n=e.elements,i=r.length,o=n.length,a=0,s=0,u=0,l=0;u<i&&l<o;)(a=r[u])<(s=n[l])?u+=2:a>s?l+=2:a==s&&(t+=r[u+1]*n[l+1],u+=2,l+=2)
return t},q.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},q.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t]
return e},q.Vector.prototype.toJSON=function(){return this.elements},q.stemmer=(o={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},a={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},c="^("+(u="[^aeiou][^aeiouy]*")+")?"+(l=(s="[aeiouy]")+"[aeiou]*")+u+"("+l+")?$",f="^("+u+")?"+l+u+l+u,p="^("+u+")?"+s,d=new RegExp("^("+u+")?"+l+u),h=new RegExp(f),g=new RegExp(c),m=new RegExp(p),v=/^(.+?)(ss|i)es$/,y=/^(.+?)([^s])s$/,b=/^(.+?)eed$/,w=/^(.+?)(ed|ing)$/,x=/.$/,E=/(at|bl|iz)$/,D=new RegExp("([^aeiouylsz])\\1$"),A=new RegExp("^"+u+s+"[^aeiouwxy]$"),_=/^(.+?[^aeiou])y$/,k=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,C=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,T=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,S=/^(.+?)(s|t)(ion)$/,N=/^(.+?)e$/,O=/ll$/,L=new RegExp("^"+u+s+"[^aeiouwxy]$"),F=function(e){var t,r,n,i,s,u,l
if(e.length<3)return e
if("y"==(n=e.substr(0,1))&&(e=n.toUpperCase()+e.substr(1)),s=y,(i=v).test(e)?e=e.replace(i,"$1$2"):s.test(e)&&(e=e.replace(s,"$1$2")),s=w,(i=b).test(e)){var c=i.exec(e);(i=d).test(c[1])&&(i=x,e=e.replace(i,""))}else s.test(e)&&(t=(c=s.exec(e))[1],(s=m).test(t)&&(u=D,l=A,(s=E).test(e=t)?e+="e":u.test(e)?(i=x,e=e.replace(i,"")):l.test(e)&&(e+="e")))
return(i=_).test(e)&&(e=(t=(c=i.exec(e))[1])+"i"),(i=k).test(e)&&(t=(c=i.exec(e))[1],r=c[2],(i=d).test(t)&&(e=t+o[r])),(i=C).test(e)&&(t=(c=i.exec(e))[1],r=c[2],(i=d).test(t)&&(e=t+a[r])),s=S,(i=T).test(e)?(t=(c=i.exec(e))[1],(i=h).test(t)&&(e=t)):s.test(e)&&(t=(c=s.exec(e))[1]+c[2],(s=h).test(t)&&(e=t)),(i=N).test(e)&&(t=(c=i.exec(e))[1],s=g,u=L,((i=h).test(t)||s.test(t)&&!u.test(t))&&(e=t)),s=h,(i=O).test(e)&&s.test(e)&&(i=x,e=e.replace(i,"")),"y"==n&&(e=n.toLowerCase()+e.substr(1)),e},function(e){return e.update(F)}),q.Pipeline.registerFunction(q.stemmer,"stemmer"),q.generateStopWordFilter=function(e){var t=e.reduce((function(e,t){return e[t]=t,e}),{})
return function(e){if(e&&t[e.toString()]!==e.toString())return e}},q.stopWordFilter=q.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),q.Pipeline.registerFunction(q.stopWordFilter,"stopWordFilter"),q.trimmer=function(e){return e.update((function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")}))},q.Pipeline.registerFunction(q.trimmer,"trimmer"),q.TokenSet=function(){this.final=!1,this.edges={},this.id=q.TokenSet._nextId,q.TokenSet._nextId+=1},q.TokenSet._nextId=1,q.TokenSet.fromArray=function(e){for(var t=new q.TokenSet.Builder,r=0,n=e.length;r<n;r++)t.insert(e[r])
return t.finish(),t.root},q.TokenSet.fromClause=function(e){return"editDistance"in e?q.TokenSet.fromFuzzyString(e.term,e.editDistance):q.TokenSet.fromString(e.term)},q.TokenSet.fromFuzzyString=function(e,t){for(var r=new q.TokenSet,n=[{node:r,editsRemaining:t,str:e}];n.length;){var i=n.pop()
if(i.str.length>0){var o,a=i.str.charAt(0)
a in i.node.edges?o=i.node.edges[a]:(o=new q.TokenSet,i.node.edges[a]=o),1==i.str.length&&(o.final=!0),n.push({node:o,editsRemaining:i.editsRemaining,str:i.str.slice(1)})}if(0!=i.editsRemaining){if("*"in i.node.edges)var s=i.node.edges["*"]
else s=new q.TokenSet,i.node.edges["*"]=s
if(0==i.str.length&&(s.final=!0),n.push({node:s,editsRemaining:i.editsRemaining-1,str:i.str}),i.str.length>1&&n.push({node:i.node,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)}),1==i.str.length&&(i.node.final=!0),i.str.length>=1){if("*"in i.node.edges)var u=i.node.edges["*"]
else u=new q.TokenSet,i.node.edges["*"]=u
1==i.str.length&&(u.final=!0),n.push({node:u,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)})}if(i.str.length>1){var l,c=i.str.charAt(0),f=i.str.charAt(1)
f in i.node.edges?l=i.node.edges[f]:(l=new q.TokenSet,i.node.edges[f]=l),1==i.str.length&&(l.final=!0),n.push({node:l,editsRemaining:i.editsRemaining-1,str:c+i.str.slice(2)})}}}return r},q.TokenSet.fromString=function(e){for(var t=new q.TokenSet,r=t,n=0,i=e.length;n<i;n++){var o=e[n],a=n==i-1
if("*"==o)t.edges[o]=t,t.final=a
else{var s=new q.TokenSet
s.final=a,t.edges[o]=s,t=s}}return r},q.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),n=Object.keys(r.node.edges),i=n.length
r.node.final&&(r.prefix.charAt(0),e.push(r.prefix))
for(var o=0;o<i;o++){var a=n[o]
t.push({prefix:r.prefix.concat(a),node:r.node.edges[a]})}}return e},q.TokenSet.prototype.toString=function(){if(this._str)return this._str
for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,n=0;n<r;n++){var i=t[n]
e=e+i+this.edges[i].id}return e},q.TokenSet.prototype.intersect=function(e){for(var t=new q.TokenSet,r=void 0,n=[{qNode:e,output:t,node:this}];n.length;){r=n.pop()
for(var i=Object.keys(r.qNode.edges),o=i.length,a=Object.keys(r.node.edges),s=a.length,u=0;u<o;u++)for(var l=i[u],c=0;c<s;c++){var f=a[c]
if(f==l||"*"==l){var p=r.node.edges[f],d=r.qNode.edges[l],h=p.final&&d.final,g=void 0
f in r.output.edges?(g=r.output.edges[f]).final=g.final||h:((g=new q.TokenSet).final=h,r.output.edges[f]=g),n.push({qNode:d,output:g,node:p})}}}return t},q.TokenSet.Builder=function(){this.previousWord="",this.root=new q.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},q.TokenSet.Builder.prototype.insert=function(e){var t,r=0
if(e<this.previousWord)throw new Error("Out of order word insertion")
for(var n=0;n<e.length&&n<this.previousWord.length&&e[n]==this.previousWord[n];n++)r++
for(this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child,n=r;n<e.length;n++){var i=new q.TokenSet,o=e[n]
t.edges[o]=i,this.uncheckedNodes.push({parent:t,char:o,child:i}),t=i}t.final=!0,this.previousWord=e},q.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},q.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],n=r.child.toString()
n in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[n]:(r.child._str=n,this.minimizedNodes[n]=r.child),this.uncheckedNodes.pop()}},q.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},q.Index.prototype.search=function(e){return this.query((function(t){new q.QueryParser(e,t).parse()}))},q.Index.prototype.query=function(e){for(var t=new q.Query(this.fields),r=Object.create(null),n=Object.create(null),i=Object.create(null),o=Object.create(null),a=Object.create(null),s=0;s<this.fields.length;s++)n[this.fields[s]]=new q.Vector
for(e.call(t,t),s=0;s<t.clauses.length;s++){var u,l=t.clauses[s],c=q.Set.empty
u=l.usePipeline?this.pipeline.runString(l.term,{fields:l.fields}):[l.term]
for(var f=0;f<u.length;f++){var p=u[f]
l.term=p
var d=q.TokenSet.fromClause(l),h=this.tokenSet.intersect(d).toArray()
if(0===h.length&&l.presence===q.Query.presence.REQUIRED){for(var g=0;g<l.fields.length;g++)o[O=l.fields[g]]=q.Set.empty
break}for(var m=0;m<h.length;m++){var v=h[m],y=this.invertedIndex[v],b=y._index
for(g=0;g<l.fields.length;g++){var w=y[O=l.fields[g]],x=Object.keys(w),E=v+"/"+O,D=new q.Set(x)
if(l.presence==q.Query.presence.REQUIRED&&(c=c.union(D),void 0===o[O]&&(o[O]=q.Set.complete)),l.presence!=q.Query.presence.PROHIBITED){if(n[O].upsert(b,l.boost,(function(e,t){return e+t})),!i[E]){for(var A=0;A<x.length;A++){var _,k=x[A],C=new q.FieldRef(k,O),T=w[k]
void 0===(_=r[C])?r[C]=new q.MatchData(v,O,T):_.add(v,O,T)}i[E]=!0}}else void 0===a[O]&&(a[O]=q.Set.empty),a[O]=a[O].union(D)}}}if(l.presence===q.Query.presence.REQUIRED)for(g=0;g<l.fields.length;g++)o[O=l.fields[g]]=o[O].intersect(c)}var S=q.Set.complete,N=q.Set.empty
for(s=0;s<this.fields.length;s++){var O
o[O=this.fields[s]]&&(S=S.intersect(o[O])),a[O]&&(N=N.union(a[O]))}var L=Object.keys(r),F=[],P=Object.create(null)
if(t.isNegated())for(L=Object.keys(this.fieldVectors),s=0;s<L.length;s++){C=L[s]
var R=q.FieldRef.fromString(C)
r[C]=new q.MatchData}for(s=0;s<L.length;s++){var B=(R=q.FieldRef.fromString(L[s])).docRef
if(S.contains(B)&&!N.contains(B)){var j,I=this.fieldVectors[R],M=n[R.fieldName].similarity(I)
if(void 0!==(j=P[B]))j.score+=M,j.matchData.combine(r[R])
else{var U={ref:B,score:M,matchData:r[R]}
P[B]=U,F.push(U)}}}return F.sort((function(e,t){return t.score-e.score}))},q.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map((function(e){return[e,this.invertedIndex[e]]}),this),t=Object.keys(this.fieldVectors).map((function(e){return[e,this.fieldVectors[e].toJSON()]}),this)
return{version:q.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},q.Index.load=function(e){var t={},r={},n=e.fieldVectors,i=Object.create(null),o=e.invertedIndex,a=new q.TokenSet.Builder,s=q.Pipeline.load(e.pipeline)
e.version!=q.version&&q.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+q.version+"' does not match serialized index '"+e.version+"'")
for(var u=0;u<n.length;u++){var l=(f=n[u])[0],c=f[1]
r[l]=new q.Vector(c)}for(u=0;u<o.length;u++){var f,p=(f=o[u])[0],d=f[1]
a.insert(p),i[p]=d}return a.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=i,t.tokenSet=a.root,t.pipeline=s,new q.Index(t)},q.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=q.tokenizer,this.pipeline=new q.Pipeline,this.searchPipeline=new q.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},q.Builder.prototype.ref=function(e){this._ref=e},q.Builder.prototype.field=function(e,t){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'")
this._fields[e]=t||{}},q.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},q.Builder.prototype.k1=function(e){this._k1=e},q.Builder.prototype.add=function(e,t){var r=e[this._ref],n=Object.keys(this._fields)
this._documents[r]=t||{},this.documentCount+=1
for(var i=0;i<n.length;i++){var o=n[i],a=this._fields[o].extractor,s=a?a(e):e[o],u=this.tokenizer(s,{fields:[o]}),l=this.pipeline.run(u),c=new q.FieldRef(r,o),f=Object.create(null)
this.fieldTermFrequencies[c]=f,this.fieldLengths[c]=0,this.fieldLengths[c]+=l.length
for(var p=0;p<l.length;p++){var d=l[p]
if(null==f[d]&&(f[d]=0),f[d]+=1,null==this.invertedIndex[d]){var h=Object.create(null)
h._index=this.termIndex,this.termIndex+=1
for(var g=0;g<n.length;g++)h[n[g]]=Object.create(null)
this.invertedIndex[d]=h}null==this.invertedIndex[d][o][r]&&(this.invertedIndex[d][o][r]=Object.create(null))
for(var m=0;m<this.metadataWhitelist.length;m++){var v=this.metadataWhitelist[m],y=d.metadata[v]
null==this.invertedIndex[d][o][r][v]&&(this.invertedIndex[d][o][r][v]=[]),this.invertedIndex[d][o][r][v].push(y)}}}},q.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},n={},i=0;i<t;i++){var o=q.FieldRef.fromString(e[i]),a=o.fieldName
n[a]||(n[a]=0),n[a]+=1,r[a]||(r[a]=0),r[a]+=this.fieldLengths[o]}var s=Object.keys(this._fields)
for(i=0;i<s.length;i++){var u=s[i]
r[u]=r[u]/n[u]}this.averageFieldLength=r},q.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,n=Object.create(null),i=0;i<r;i++){for(var o=q.FieldRef.fromString(t[i]),a=o.fieldName,s=this.fieldLengths[o],u=new q.Vector,l=this.fieldTermFrequencies[o],c=Object.keys(l),f=c.length,p=this._fields[a].boost||1,d=this._documents[o.docRef].boost||1,h=0;h<f;h++){var g,m,v,y=c[h],b=l[y],w=this.invertedIndex[y]._index
void 0===n[y]?(g=q.idf(this.invertedIndex[y],this.documentCount),n[y]=g):g=n[y],m=g*((this._k1+1)*b)/(this._k1*(1-this._b+this._b*(s/this.averageFieldLength[a]))+b),m*=p,m*=d,v=Math.round(1e3*m)/1e3,u.insert(w,v)}e[o]=u}this.fieldVectors=e},q.Builder.prototype.createTokenSet=function(){this.tokenSet=q.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},q.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new q.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},q.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1)
t.unshift(this),e.apply(this,t)},q.MatchData=function(e,t,r){for(var n=Object.create(null),i=Object.keys(r||{}),o=0;o<i.length;o++){var a=i[o]
n[a]=r[a].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=n)},q.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var n=t[r],i=Object.keys(e.metadata[n])
null==this.metadata[n]&&(this.metadata[n]=Object.create(null))
for(var o=0;o<i.length;o++){var a=i[o],s=Object.keys(e.metadata[n][a])
null==this.metadata[n][a]&&(this.metadata[n][a]=Object.create(null))
for(var u=0;u<s.length;u++){var l=s[u]
null==this.metadata[n][a][l]?this.metadata[n][a][l]=e.metadata[n][a][l]:this.metadata[n][a][l]=this.metadata[n][a][l].concat(e.metadata[n][a][l])}}}},q.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=r)
if(t in this.metadata[e])for(var n=Object.keys(r),i=0;i<n.length;i++){var o=n[i]
o in this.metadata[e][t]?this.metadata[e][t][o]=this.metadata[e][t][o].concat(r[o]):this.metadata[e][t][o]=r[o]}else this.metadata[e][t]=r},q.Query=function(e){this.clauses=[],this.allFields=e},q.Query.wildcard=new String("*"),q.Query.wildcard.NONE=0,q.Query.wildcard.LEADING=1,q.Query.wildcard.TRAILING=2,q.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},q.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=q.Query.wildcard.NONE),e.wildcard&q.Query.wildcard.LEADING&&e.term.charAt(0)!=q.Query.wildcard&&(e.term="*"+e.term),e.wildcard&q.Query.wildcard.TRAILING&&e.term.slice(-1)!=q.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=q.Query.presence.OPTIONAL),this.clauses.push(e),this},q.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=q.Query.presence.PROHIBITED)return!1
return!0},q.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach((function(e){this.term(e,q.utils.clone(t))}),this),this
var r=t||{}
return r.term=e.toString(),this.clause(r),this},q.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},q.QueryParseError.prototype=new Error,q.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},q.QueryLexer.prototype.run=function(){for(var e=q.QueryLexer.lexText;e;)e=e(this)},q.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,n=0;n<this.escapeCharPositions.length;n++)r=this.escapeCharPositions[n],e.push(this.str.slice(t,r)),t=r+1
return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},q.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},q.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},q.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return q.QueryLexer.EOS
var e=this.str.charAt(this.pos)
return this.pos+=1,e},q.QueryLexer.prototype.width=function(){return this.pos-this.start},q.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},q.QueryLexer.prototype.backup=function(){this.pos-=1},q.QueryLexer.prototype.acceptDigitRun=function(){var e,t
do{t=(e=this.next()).charCodeAt(0)}while(t>47&&t<58)
e!=q.QueryLexer.EOS&&this.backup()},q.QueryLexer.prototype.more=function(){return this.pos<this.length},q.QueryLexer.EOS="EOS",q.QueryLexer.FIELD="FIELD",q.QueryLexer.TERM="TERM",q.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",q.QueryLexer.BOOST="BOOST",q.QueryLexer.PRESENCE="PRESENCE",q.QueryLexer.lexField=function(e){return e.backup(),e.emit(q.QueryLexer.FIELD),e.ignore(),q.QueryLexer.lexText},q.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(q.QueryLexer.TERM)),e.ignore(),e.more())return q.QueryLexer.lexText},q.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(q.QueryLexer.EDIT_DISTANCE),q.QueryLexer.lexText},q.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(q.QueryLexer.BOOST),q.QueryLexer.lexText},q.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(q.QueryLexer.TERM)},q.QueryLexer.termSeparator=q.tokenizer.separator,q.QueryLexer.lexText=function(e){for(;;){var t=e.next()
if(t==q.QueryLexer.EOS)return q.QueryLexer.lexEOS
if(92!=t.charCodeAt(0)){if(":"==t)return q.QueryLexer.lexField
if("~"==t)return e.backup(),e.width()>0&&e.emit(q.QueryLexer.TERM),q.QueryLexer.lexEditDistance
if("^"==t)return e.backup(),e.width()>0&&e.emit(q.QueryLexer.TERM),q.QueryLexer.lexBoost
if("+"==t&&1===e.width())return e.emit(q.QueryLexer.PRESENCE),q.QueryLexer.lexText
if("-"==t&&1===e.width())return e.emit(q.QueryLexer.PRESENCE),q.QueryLexer.lexText
if(t.match(q.QueryLexer.termSeparator))return q.QueryLexer.lexTerm}else e.escapeCharacter()}},q.QueryParser=function(e,t){this.lexer=new q.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},q.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes
for(var e=q.QueryParser.parseClause;e;)e=e(this)
return this.query},q.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},q.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme()
return this.lexemeIdx+=1,e},q.QueryParser.prototype.nextClause=function(){var e=this.currentClause
this.query.clause(e),this.currentClause={}},q.QueryParser.parseClause=function(e){var t=e.peekLexeme()
if(null!=t)switch(t.type){case q.QueryLexer.PRESENCE:return q.QueryParser.parsePresence
case q.QueryLexer.FIELD:return q.QueryParser.parseField
case q.QueryLexer.TERM:return q.QueryParser.parseTerm
default:var r="expected either a field or a term, found "+t.type
throw t.str.length>=1&&(r+=" with value '"+t.str+"'"),new q.QueryParseError(r,t.start,t.end)}},q.QueryParser.parsePresence=function(e){var t=e.consumeLexeme()
if(null!=t){switch(t.str){case"-":e.currentClause.presence=q.Query.presence.PROHIBITED
break
case"+":e.currentClause.presence=q.Query.presence.REQUIRED
break
default:var r="unrecognised presence operator'"+t.str+"'"
throw new q.QueryParseError(r,t.start,t.end)}var n=e.peekLexeme()
if(null==n)throw r="expecting term or field, found nothing",new q.QueryParseError(r,t.start,t.end)
switch(n.type){case q.QueryLexer.FIELD:return q.QueryParser.parseField
case q.QueryLexer.TERM:return q.QueryParser.parseTerm
default:throw r="expecting term or field, found '"+n.type+"'",new q.QueryParseError(r,n.start,n.end)}}},q.QueryParser.parseField=function(e){var t=e.consumeLexeme()
if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map((function(e){return"'"+e+"'"})).join(", "),n="unrecognised field '"+t.str+"', possible fields: "+r
throw new q.QueryParseError(n,t.start,t.end)}e.currentClause.fields=[t.str]
var i=e.peekLexeme()
if(null==i)throw n="expecting term, found nothing",new q.QueryParseError(n,t.start,t.end)
if(i.type===q.QueryLexer.TERM)return q.QueryParser.parseTerm
throw n="expecting term, found '"+i.type+"'",new q.QueryParseError(n,i.start,i.end)}},q.QueryParser.parseTerm=function(e){var t=e.consumeLexeme()
if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1)
var r=e.peekLexeme()
if(null!=r)switch(r.type){case q.QueryLexer.TERM:return e.nextClause(),q.QueryParser.parseTerm
case q.QueryLexer.FIELD:return e.nextClause(),q.QueryParser.parseField
case q.QueryLexer.EDIT_DISTANCE:return q.QueryParser.parseEditDistance
case q.QueryLexer.BOOST:return q.QueryParser.parseBoost
case q.QueryLexer.PRESENCE:return e.nextClause(),q.QueryParser.parsePresence
default:var n="Unexpected lexeme type '"+r.type+"'"
throw new q.QueryParseError(n,r.start,r.end)}else e.nextClause()}},q.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme()
if(null!=t){var r=parseInt(t.str,10)
if(isNaN(r)){var n="edit distance must be numeric"
throw new q.QueryParseError(n,t.start,t.end)}e.currentClause.editDistance=r
var i=e.peekLexeme()
if(null!=i)switch(i.type){case q.QueryLexer.TERM:return e.nextClause(),q.QueryParser.parseTerm
case q.QueryLexer.FIELD:return e.nextClause(),q.QueryParser.parseField
case q.QueryLexer.EDIT_DISTANCE:return q.QueryParser.parseEditDistance
case q.QueryLexer.BOOST:return q.QueryParser.parseBoost
case q.QueryLexer.PRESENCE:return e.nextClause(),q.QueryParser.parsePresence
default:throw n="Unexpected lexeme type '"+i.type+"'",new q.QueryParseError(n,i.start,i.end)}else e.nextClause()}},q.QueryParser.parseBoost=function(e){var t=e.consumeLexeme()
if(null!=t){var r=parseInt(t.str,10)
if(isNaN(r)){var n="boost must be numeric"
throw new q.QueryParseError(n,t.start,t.end)}e.currentClause.boost=r
var i=e.peekLexeme()
if(null!=i)switch(i.type){case q.QueryLexer.TERM:return e.nextClause(),q.QueryParser.parseTerm
case q.QueryLexer.FIELD:return e.nextClause(),q.QueryParser.parseField
case q.QueryLexer.EDIT_DISTANCE:return q.QueryParser.parseEditDistance
case q.QueryLexer.BOOST:return q.QueryParser.parseBoost
case q.QueryLexer.PRESENCE:return e.nextClause(),q.QueryParser.parsePresence
default:throw n="Unexpected lexeme type '"+i.type+"'",new q.QueryParseError(n,i.start,i.end)}else e.nextClause()}},void 0===(i="function"==typeof(n=function(){return q})?n.call(t,r,t,e):n)||(e.exports=i)}()},7016:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e[e.length-1]}},6906:function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.NodeType=t.TextNode=t.Node=t.valid=t.CommentNode=t.HTMLElement=t.parse=void 0
var i=n(r(8893))
t.CommentNode=i.default
var o=n(r(9191))
t.HTMLElement=o.default
var a=n(r(6222))
t.Node=a.default
var s=n(r(8623))
t.TextNode=s.default
var u=n(r(5166))
t.NodeType=u.default
var l=n(r(4074)),c=n(r(9083))
function f(e,t){return void 0===t&&(t={}),(0,l.default)(e,t)}t.valid=c.default,t.default=f,t.parse=f,f.parse=l.default,f.HTMLElement=o.default,f.CommentNode=i.default,f.valid=c.default,f.Node=a.default,f.TextNode=s.default,f.NodeType=u.default},4952:function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(r(5166))
function o(e){return e&&e.nodeType===i.default.ELEMENT_NODE}function a(e,t){return o(e)?e.getAttribute(t):void 0}function s(e){return e&&e.childNodes}function u(e){return e?e.parentNode:null}t.default={isTag:o,getAttributeValue:a,getName:function(e){return(e&&e.rawTagName||"").toLowerCase()},getChildren:s,getParent:u,getText:function(e){return e.text},removeSubsets:function(e){for(var t,r,n,i=e.length;--i>-1;){for(t=r=e[i],e[i]=null,n=!0;r;){if(e.indexOf(r)>-1){n=!1,e.splice(i,1)
break}r=u(r)}n&&(e[i]=t)}return e},existsOne:function e(t,r){return r.some((function(r){return!!o(r)&&(t(r)||e(t,s(r)))}))},getSiblings:function(e){var t=u(e)
return t?s(t):[]},hasAttrib:function(e,t){return void 0!==a(e,t)},findOne:function e(t,r){for(var n=null,i=0,o=null==r?void 0:r.length;i<o&&!n;i++){var a=r[i]
if(t(a))n=a
else{var u=s(a)
u&&u.length>0&&(n=e(t,u))}}return n},findAll:function e(t,r){for(var n=[],i=0,a=r.length;i<a;i++)if(o(r[i])){t(r[i])&&n.push(r[i])
var u=s(r[i])
u&&(n=n.concat(e(t,u)))}return n}}},8893:function(e,t,r){"use strict"
var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
var a=o(r(6222)),s=o(r(5166)),u=function(e){function t(t,r,n){var i=e.call(this,r,n)||this
return i.rawText=t,i.nodeType=s.default.COMMENT_NODE,i}return i(t,e),t.prototype.clone=function(){return new t(this.rawText,null)},Object.defineProperty(t.prototype,"text",{get:function(){return this.rawText},enumerable:!1,configurable:!0}),t.prototype.toString=function(){return"\x3c!--".concat(this.rawText,"--\x3e")},t}(a.default)
t.default=u},9191:function(e,t,r){"use strict"
var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)},a=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i])
return e.concat(n||Array.prototype.slice.call(t))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.parse=t.base_parse=void 0
var u=r(7133),l=s(r(39)),c=s(r(7016)),f=s(r(4952)),p=s(r(817)),d=s(r(8893)),h=s(r(6222)),g=s(r(8623)),m=s(r(5166))
function v(e){return JSON.parse(JSON.stringify(l.default.decode(e)))}var y=new Set
!function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=function(e){for(var t=0;t<e.length;t++){var r=e[t]
y.add(r),y.add(r.toUpperCase())}},n=0,i=e;n<i.length;n++)r(i[n])}(["h1","h2","h3","h4","h5","h6","header","hgroup"],["details","dialog","dd","div","dt"],["fieldset","figcaption","figure","footer","form"],["table","td","tr"],["address","article","aside","blockquote","br","hr","li","main","nav","ol","p","pre","section","ul"])
var b=function(){function e(e,t){void 0===e&&(e=[]),void 0===t&&(t=function(){return null}),this._set=new Set(e),this._afterUpdate=t}return e.prototype._validate=function(e){if(/\s/.test(e))throw new Error("DOMException in DOMTokenList.add: The token '".concat(e,"' contains HTML space characters, which are not valid in tokens."))},e.prototype.add=function(e){this._validate(e),this._set.add(e),this._afterUpdate(this)},e.prototype.replace=function(e,t){this._validate(t),this._set.delete(e),this._set.add(t),this._afterUpdate(this)},e.prototype.remove=function(e){this._set.delete(e)&&this._afterUpdate(this)},e.prototype.toggle=function(e){this._validate(e),this._set.has(e)?this._set.delete(e):this._set.add(e),this._afterUpdate(this)},e.prototype.contains=function(e){return this._set.has(e)},Object.defineProperty(e.prototype,"length",{get:function(){return this._set.size},enumerable:!1,configurable:!0}),e.prototype.values=function(){return this._set.values()},Object.defineProperty(e.prototype,"value",{get:function(){return Array.from(this._set.values())},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return Array.from(this._set.values()).join(" ")},e}(),w=function(e){function t(t,r,n,i,o,a,s){void 0===n&&(n=""),void 0===a&&(a=new p.default),void 0===s&&(s={})
var u=e.call(this,i,o)||this
if(u.rawAttrs=n,u.voidTag=a,u.nodeType=m.default.ELEMENT_NODE,u.rawTagName=t,u.rawAttrs=n||"",u.id=r.id||"",u.childNodes=[],u._parseOptions=s,u.classList=new b(r.class?r.class.split(/\s+/):[],(function(e){return u.setAttribute("class",e.toString())})),r.id&&(n||(u.rawAttrs='id="'.concat(r.id,'"'))),r.class&&!n){var l='class="'.concat(u.classList.toString(),'"')
u.rawAttrs?u.rawAttrs+=" ".concat(l):u.rawAttrs=l}return u}return i(t,e),t.prototype.quoteAttribute=function(e){return null==e?"null":JSON.stringify(e.replace(/"/g,"&quot;"))},t.prototype.removeChild=function(e){return this.childNodes=this.childNodes.filter((function(t){return t!==e})),this},t.prototype.exchangeChild=function(e,t){var r=this.childNodes
return this.childNodes=r.map((function(r){return r===e?t:r})),this},Object.defineProperty(t.prototype,"tagName",{get:function(){return this.rawTagName?this.rawTagName.toUpperCase():this.rawTagName},set:function(e){this.rawTagName=e.toLowerCase()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"localName",{get:function(){return this.rawTagName.toLowerCase()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isVoidElement",{get:function(){return this.voidTag.isVoidElement(this.localName)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rawText",{get:function(){return this.childNodes.reduce((function(e,t){return e+t.rawText}),"")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"textContent",{get:function(){return v(this.rawText)},set:function(e){var t=[new g.default(e,this)]
this.childNodes=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"text",{get:function(){return v(this.rawText)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"structuredText",{get:function(){var e=[],t=[e]
return function r(n){if(n.nodeType===m.default.ELEMENT_NODE)y.has(n.rawTagName)?(e.length>0&&t.push(e=[]),n.childNodes.forEach(r),e.length>0&&t.push(e=[])):n.childNodes.forEach(r)
else if(n.nodeType===m.default.TEXT_NODE)if(n.isWhitespace)e.prependWhitespace=!0
else{var i=n.trimmedText
e.prependWhitespace&&(i=" ".concat(i),e.prependWhitespace=!1),e.push(i)}}(this),t.map((function(e){return e.join("").replace(/\s{2,}/g," ")})).join("\n").replace(/\s+$/,"")},enumerable:!1,configurable:!0}),t.prototype.toString=function(){var e=this.rawTagName
if(e){var t=this.rawAttrs?" ".concat(this.rawAttrs):""
return this.voidTag.formatNode(e,t,this.innerHTML)}return this.innerHTML},Object.defineProperty(t.prototype,"innerHTML",{get:function(){return this.childNodes.map((function(e){return e.toString()})).join("")},set:function(e){var t=T(e,this._parseOptions),r=t.childNodes.length?t.childNodes:[new g.default(e,this)]
S(r,this),S(this.childNodes,null),this.childNodes=r},enumerable:!1,configurable:!0}),t.prototype.set_content=function(e,t){if(void 0===t&&(t={}),e instanceof h.default)e=[e]
else if("string"==typeof e){var r=T(e,t=o(o({},this._parseOptions),t))
e=r.childNodes.length?r.childNodes:[new g.default(r.innerHTML,this)]}return S(this.childNodes,null),S(e,this),this.childNodes=e,this},t.prototype.replaceWith=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
var n=this.parentNode,i=t.map((function(t){if(t instanceof h.default)return[t]
if("string"==typeof t){var r=T(t,e._parseOptions)
return r.childNodes.length?r.childNodes:[new g.default(t,e)]}return[]})).flat(),o=n.childNodes.findIndex((function(t){return t===e}))
return S([this],null),n.childNodes=a(a(a([],n.childNodes.slice(0,o),!0),S(i,n),!0),n.childNodes.slice(o+1),!0),this},Object.defineProperty(t.prototype,"outerHTML",{get:function(){return this.toString()},enumerable:!1,configurable:!0}),t.prototype.trimRight=function(e){for(var t=0;t<this.childNodes.length;t++){var r=this.childNodes[t]
if(r.nodeType===m.default.ELEMENT_NODE)r.trimRight(e)
else{var n=r.rawText.search(e)
n>-1&&(r.rawText=r.rawText.substr(0,n),this.childNodes.length=t+1)}}return this},Object.defineProperty(t.prototype,"structure",{get:function(){var e=[],t=0
function r(r){e.push("  ".repeat(t)+r)}return function e(n){var i=n.id?"#".concat(n.id):"",o=n.classList.length?".".concat(n.classList.value.join(".")):""
r("".concat(n.rawTagName).concat(i).concat(o)),t++,n.childNodes.forEach((function(t){t.nodeType===m.default.ELEMENT_NODE?e(t):t.nodeType===m.default.TEXT_NODE&&(t.isWhitespace||r("#text"))})),t--}(this),e.join("\n")},enumerable:!1,configurable:!0}),t.prototype.removeWhitespace=function(){var e=this,t=0
return this.childNodes.forEach((function(r){if(r.nodeType===m.default.TEXT_NODE){if(r.isWhitespace)return
r.rawText=r.trimmedRawText}else r.nodeType===m.default.ELEMENT_NODE&&r.removeWhitespace()
e.childNodes[t++]=r})),this.childNodes.length=t,this},t.prototype.querySelectorAll=function(e){return(0,u.selectAll)(e,this,{xmlMode:!0,adapter:f.default})},t.prototype.querySelector=function(e){return(0,u.selectOne)(e,this,{xmlMode:!0,adapter:f.default})},t.prototype.getElementsByTagName=function(e){for(var t=e.toUpperCase(),r=[],n=[],i=this,o=0;void 0!==o;){var a=void 0
do{a=i.childNodes[o++]}while(o<i.childNodes.length&&void 0===a)
void 0!==a?a.nodeType===m.default.ELEMENT_NODE&&("*"!==e&&a.tagName!==t||r.push(a),a.childNodes.length>0&&(n.push(o),i=a,o=0)):(i=i.parentNode,o=n.pop())}return r},t.prototype.getElementById=function(e){for(var t=[],r=this,n=0;void 0!==n;){var i=void 0
do{i=r.childNodes[n++]}while(n<r.childNodes.length&&void 0===i)
if(void 0!==i){if(i.nodeType===m.default.ELEMENT_NODE){if(i.id===e)return i
i.childNodes.length>0&&(t.push(n),r=i,n=0)}}else r=r.parentNode,n=t.pop()}return null},t.prototype.closest=function(e){var t=new Map,r=this,n=null
function i(e,r){for(var n=null,o=0,a=r.length;o<a&&!n;o++){var s=r[o]
if(e(s))n=s
else{var u=t.get(s)
u&&(n=i(e,[u]))}}return n}for(;r;)t.set(r,n),n=r,r=r.parentNode
for(r=this;r;){var a=(0,u.selectOne)(e,r,{xmlMode:!0,adapter:o(o({},f.default),{getChildren:function(e){var r=t.get(e)
return r&&[r]},getSiblings:function(e){return[e]},findOne:i,findAll:function(){return[]}})})
if(a)return a
r=r.parentNode}return null},t.prototype.appendChild=function(e){return e.remove(),this.childNodes.push(e),e.parentNode=this,e},Object.defineProperty(t.prototype,"firstChild",{get:function(){return this.childNodes[0]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return(0,c.default)(this.childNodes)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attrs",{get:function(){if(this._attrs)return this._attrs
this._attrs={}
var e=this.rawAttributes
for(var t in e){var r=e[t]||""
this._attrs[t.toLowerCase()]=v(r)}return this._attrs},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var e={},t=this.rawAttributes
for(var r in t){var n=t[r]||""
e[r]=v(n)}return e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rawAttributes",{get:function(){if(this._rawAttrs)return this._rawAttrs
var e={}
if(this.rawAttrs)for(var t=/([a-zA-Z()[\]#@$.?:][a-zA-Z0-9-_:()[\]#]*)(?:\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+))?/g,r=void 0;r=t.exec(this.rawAttrs);){var n=r[1],i=r[2]||null
!i||"'"!==i[0]&&'"'!==i[0]||(i=i.slice(1,i.length-1)),e[n]=e[n]||i}return this._rawAttrs=e,e},enumerable:!1,configurable:!0}),t.prototype.removeAttribute=function(e){var t=this.rawAttributes
return delete t[e],this._attrs&&delete this._attrs[e],this.rawAttrs=Object.keys(t).map((function(e){var r=JSON.stringify(t[e])
return void 0===r||"null"===r?e:"".concat(e,"=").concat(r)})).join(" "),"id"===e&&(this.id=""),this},t.prototype.hasAttribute=function(e){return e.toLowerCase()in this.attrs},t.prototype.getAttribute=function(e){return this.attrs[e.toLowerCase()]},t.prototype.setAttribute=function(e,t){var r=this
if(arguments.length<2)throw new Error("Failed to execute 'setAttribute' on 'Element'")
var n=e.toLowerCase(),i=this.rawAttributes
for(var o in i)if(o.toLowerCase()===n){e=o
break}return i[e]=String(t),this._attrs&&(this._attrs[n]=v(i[e])),this.rawAttrs=Object.keys(i).map((function(e){var t=r.quoteAttribute(i[e])
return"null"===t||'""'===t?e:"".concat(e,"=").concat(t)})).join(" "),"id"===e&&(this.id=t),this},t.prototype.setAttributes=function(e){var t=this
return this._attrs&&delete this._attrs,this._rawAttrs&&delete this._rawAttrs,this.rawAttrs=Object.keys(e).map((function(r){var n=e[r]
return"null"===n||'""'===n?r:"".concat(r,"=").concat(t.quoteAttribute(String(n)))})).join(" "),this},t.prototype.insertAdjacentHTML=function(e,t){var r,n,i,o=this
if(arguments.length<2)throw new Error("2 arguments required")
var s=T(t,this._parseOptions)
if("afterend"===e){var u=this.parentNode.childNodes.findIndex((function(e){return e===o}))
S(s.childNodes,this.parentNode),(r=this.parentNode.childNodes).splice.apply(r,a([u+1,0],s.childNodes,!1))}else if("afterbegin"===e)S(s.childNodes,this),(n=this.childNodes).unshift.apply(n,s.childNodes)
else if("beforeend"===e)s.childNodes.forEach((function(e){o.appendChild(e)}))
else{if("beforebegin"!==e)throw new Error("The value provided ('".concat(e,"') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'"))
u=this.parentNode.childNodes.findIndex((function(e){return e===o})),S(s.childNodes,this.parentNode),(i=this.parentNode.childNodes).splice.apply(i,a([u,0],s.childNodes,!1))}return this},Object.defineProperty(t.prototype,"nextSibling",{get:function(){if(this.parentNode){for(var e=this.parentNode.childNodes,t=0;t<e.length;)if(this===e[t++])return e[t]||null
return null}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nextElementSibling",{get:function(){if(this.parentNode){for(var e=this.parentNode.childNodes,r=0,n=!1;r<e.length;){var i=e[r++]
if(n){if(i instanceof t)return i||null}else this===i&&(n=!0)}return null}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"previousSibling",{get:function(){if(this.parentNode){for(var e=this.parentNode.childNodes,t=e.length;t>0;)if(this===e[--t])return e[t-1]||null
return null}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"previousElementSibling",{get:function(){if(this.parentNode){for(var e=this.parentNode.childNodes,r=e.length,n=!1;r>0;){var i=e[--r]
if(n){if(i instanceof t)return i||null}else this===i&&(n=!0)}return null}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"classNames",{get:function(){return this.classList.toString()},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return T(this.toString(),this._parseOptions).firstChild},t}(h.default)
t.default=w
var x=/<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g,E=/(?:^|\s)(id|class)\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+)/gi,D={area:!0,AREA:!0,base:!0,BASE:!0,br:!0,BR:!0,col:!0,COL:!0,hr:!0,HR:!0,img:!0,IMG:!0,input:!0,INPUT:!0,link:!0,LINK:!0,meta:!0,META:!0,source:!0,SOURCE:!0,embed:!0,EMBED:!0,param:!0,PARAM:!0,track:!0,TRACK:!0,wbr:!0,WBR:!0},A={li:{li:!0,LI:!0},LI:{li:!0,LI:!0},p:{p:!0,div:!0,P:!0,DIV:!0},P:{p:!0,div:!0,P:!0,DIV:!0},b:{div:!0,DIV:!0},B:{div:!0,DIV:!0},td:{td:!0,th:!0,TD:!0,TH:!0},TD:{td:!0,th:!0,TD:!0,TH:!0},th:{td:!0,th:!0,TD:!0,TH:!0},TH:{td:!0,th:!0,TD:!0,TH:!0},h1:{h1:!0,H1:!0},H1:{h1:!0,H1:!0},h2:{h2:!0,H2:!0},H2:{h2:!0,H2:!0},h3:{h3:!0,H3:!0},H3:{h3:!0,H3:!0},h4:{h4:!0,H4:!0},H4:{h4:!0,H4:!0},h5:{h5:!0,H5:!0},H5:{h5:!0,H5:!0},h6:{h6:!0,H6:!0},H6:{h6:!0,H6:!0}},_={li:{ul:!0,ol:!0,UL:!0,OL:!0},LI:{ul:!0,ol:!0,UL:!0,OL:!0},a:{div:!0,DIV:!0},A:{div:!0,DIV:!0},b:{div:!0,DIV:!0},B:{div:!0,DIV:!0},i:{div:!0,DIV:!0},I:{div:!0,DIV:!0},p:{div:!0,DIV:!0},P:{div:!0,DIV:!0},td:{tr:!0,table:!0,TR:!0,TABLE:!0},TD:{tr:!0,table:!0,TR:!0,TABLE:!0},th:{tr:!0,table:!0,TR:!0,TABLE:!0},TH:{tr:!0,table:!0,TR:!0,TABLE:!0}},k="documentfragmentcontainer"
function C(e,t){var r,n
void 0===t&&(t={})
var i=new p.default(null===(r=null==t?void 0:t.voidTag)||void 0===r?void 0:r.closingSlash,null===(n=null==t?void 0:t.voidTag)||void 0===n?void 0:n.tags),o=t.blockTextElements||{script:!0,noscript:!0,style:!0,pre:!0},a=Object.keys(o),s=a.map((function(e){return new RegExp("^".concat(e,"$"),"i")})),u=a.filter((function(e){return o[e]})).map((function(e){return new RegExp("^".concat(e,"$"),"i")}))
function l(e){return u.some((function(t){return t.test(e)}))}function f(e){return s.some((function(t){return t.test(e)}))}var h,m=function(e,t){return[e-L,t-L]},v=new w(null,{},"",null,[0,e.length],i,t),y=v,b=[v],C=-1,T=void 0
e="<".concat(k,">").concat(e,"</").concat(k,">")
for(var S=t.lowerCaseTagName,N=t.fixNestedATags,O=e.length-(k.length+2),L=k.length+2;h=x.exec(e);){var F=h[0],q=h[1],P=h[2],R=h[3],B=h[4],j=F.length,I=x.lastIndex-j,M=x.lastIndex
if(C>-1&&C+j<M){var U=e.substring(C,I)
y.appendChild(new g.default(U,y,m(C,I)))}if(C=x.lastIndex,P!==k)if("!"!==F[1]){if(S&&(P=P.toLowerCase()),!q){for(var H={},$=void 0;$=E.exec(R);){var z=$[1],V=$[2],G="'"===V[0]||'"'===V[0]
H[z.toLowerCase()]=G?V.slice(1,V.length-1):V}var W=y.rawTagName
!B&&A[W]&&A[W][P]&&(b.pop(),y=(0,c.default)(b)),!N||"a"!==P&&"A"!==P||(void 0!==T&&(b.splice(T),y=(0,c.default)(b)),T=b.length)
var Q=x.lastIndex,K=Q-j
if(y=y.appendChild(new w(P,H,R.slice(1),null,m(K,Q),i,t)),b.push(y),f(P)){var Z="</".concat(P,">"),X=S?e.toLocaleLowerCase().indexOf(Z,x.lastIndex):e.indexOf(Z,x.lastIndex),Y=-1===X?O:X
l(P)&&(U=e.substring(Q,Y)).length>0&&/\S/.test(U)&&y.appendChild(new g.default(U,y,m(Q,Y))),-1===X?C=x.lastIndex=e.length+1:(C=x.lastIndex=X+Z.length,q="/")}}if(q||B||D[P])for(;;){if(null==T||"a"!==P&&"A"!==P||(T=void 0),y.rawTagName===P){y.range[1]=m(-1,Math.max(C,M))[1],b.pop(),y=(0,c.default)(b)
break}if(W=y.tagName,!_[W]||!_[W][P])break
b.pop(),y=(0,c.default)(b)}}else t.comment&&(U=e.substring(I+4,M-3),y.appendChild(new d.default(U,y,m(I,M))))}return b}function T(e,t){void 0===t&&(t={})
for(var r=C(e,t),n=r[0],i=function(){var e=r.pop(),n=(0,c.default)(r)
e.parentNode&&e.parentNode.parentNode&&(e.parentNode===n&&e.tagName===n.tagName?!0!==t.parseNoneClosedTags&&(n.removeChild(e),e.childNodes.forEach((function(e){n.parentNode.appendChild(e)})),r.pop()):!0!==t.parseNoneClosedTags&&(n.removeChild(e),e.childNodes.forEach((function(e){n.appendChild(e)}))))};r.length>1;)i()
return n}function S(e,t){return e.map((function(e){return e.parentNode=t,e}))}t.base_parse=C,t.parse=T},6222:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=r(39),i=function(){function e(e,t){void 0===e&&(e=null),this.parentNode=e,this.childNodes=[],Object.defineProperty(this,"range",{enumerable:!1,writable:!0,configurable:!0,value:null!=t?t:[-1,-1]})}return e.prototype.remove=function(){var e=this
if(this.parentNode){var t=this.parentNode.childNodes
this.parentNode.childNodes=t.filter((function(t){return e!==t})),this.parentNode=null}return this},Object.defineProperty(e.prototype,"innerText",{get:function(){return this.rawText},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textContent",{get:function(){return(0,n.decode)(this.rawText)},set:function(e){this.rawText=(0,n.encode)(e)},enumerable:!1,configurable:!0}),e}()
t.default=i},8623:function(e,t,r){"use strict"
var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
var a=r(39),s=o(r(6222)),u=o(r(5166)),l=function(e){function t(t,r,n){var i=e.call(this,r,n)||this
return i.nodeType=u.default.TEXT_NODE,i._rawText=t,i}return i(t,e),t.prototype.clone=function(){return new t(this._rawText,null)},Object.defineProperty(t.prototype,"rawText",{get:function(){return this._rawText},set:function(e){this._rawText=e,this._trimmedRawText=void 0,this._trimmedText=void 0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"trimmedRawText",{get:function(){return void 0!==this._trimmedRawText||(this._trimmedRawText=c(this.rawText)),this._trimmedRawText},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"trimmedText",{get:function(){return void 0!==this._trimmedText||(this._trimmedText=c(this.text)),this._trimmedText},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"text",{get:function(){return(0,a.decode)(this.rawText)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isWhitespace",{get:function(){return/^(\s|&nbsp;)*$/.test(this.rawText)},enumerable:!1,configurable:!0}),t.prototype.toString=function(){return this.rawText},t}(s.default)
function c(e){for(var t,r,n=0;n>=0&&n<e.length;)/\S/.test(e[n])&&(void 0===t?(t=n,n=e.length):(r=n,n=void 0)),void 0===t?n++:n--
void 0===t&&(t=0),void 0===r&&(r=e.length-1)
var i=t>0&&/[^\S\r\n]/.test(e[t-1]),o=r<e.length-1&&/[^\S\r\n]/.test(e[r+1])
return(i?" ":"")+e.slice(t,r+1)+(o?" ":"")}t.default=l},5166:(e,t)=>{"use strict"
var r
Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.ELEMENT_NODE=1]="ELEMENT_NODE",e[e.TEXT_NODE=3]="TEXT_NODE",e[e.COMMENT_NODE=8]="COMMENT_NODE"}(r||(r={})),t.default=r},4074:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var n=r(9191)
Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.parse}})},9083:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=r(9191)
t.default=function(e,t){void 0===t&&(t={})
var r=(0,n.base_parse)(e,t)
return Boolean(1===r.length)}},817:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){void 0===e&&(e=!1),this.addClosingSlash=e,Array.isArray(t)?this.voidTags=t.reduce((function(e,t){return e.add(t.toLowerCase())}),new Set):this.voidTags=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].reduce((function(e,t){return e.add(t)}),new Set)}return e.prototype.formatNode=function(e,t,r){var n=this.addClosingSlash,i=n&&t&&!t.endsWith(" ")?" ":"",o=n?"".concat(i,"/"):""
return this.isVoidElement(e.toLowerCase())?"<".concat(e).concat(t).concat(o,">"):"<".concat(e).concat(t,">").concat(r,"</").concat(e,">")},e.prototype.isVoidElement=function(e){return this.voidTags.has(e)},e}()
t.default=r},1289:function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.generate=t.compile=void 0
var i=n(r(7544))
t.compile=function(e){var t=e[0],r=e[1]-1
if(r<0&&t<=0)return i.default.falseFunc
if(-1===t)return function(e){return e<=r}
if(0===t)return function(e){return e===r}
if(1===t)return r<0?i.default.trueFunc:function(e){return e>=r}
var n=Math.abs(t),o=(r%n+n)%n
return t>1?function(e){return e>=r&&e%n===o}:function(e){return e<=r&&e%n===o}},t.generate=function(e){var t=e[0],r=e[1]-1,n=0
if(t<0){var i=-t,o=(r%i+i)%i
return function(){var e=o+i*n++
return e>r?null:e}}return 0===t?r<0?function(){return null}:function(){return 0==n++?r:null}:(r<0&&(r+=t*Math.ceil(-r/t)),function(){return t*n+++r})}},1316:(e,t,r)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.sequence=t.generate=t.compile=t.parse=void 0
var n=r(9922)
Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return n.parse}})
var i=r(1289)
Object.defineProperty(t,"compile",{enumerable:!0,get:function(){return i.compile}}),Object.defineProperty(t,"generate",{enumerable:!0,get:function(){return i.generate}}),t.default=function(e){return(0,i.compile)((0,n.parse)(e))},t.sequence=function(e){return(0,i.generate)((0,n.parse)(e))}},9922:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.parse=void 0
var r=new Set([9,10,12,13,32]),n="0".charCodeAt(0),i="9".charCodeAt(0)
t.parse=function(e){if("even"===(e=e.trim().toLowerCase()))return[2,0]
if("odd"===e)return[2,1]
var t=0,o=0,a=u(),s=l()
if(t<e.length&&"n"===e.charAt(t)&&(t++,o=a*(null!=s?s:1),c(),t<e.length?(a=u(),c(),s=l()):a=s=0),null===s||t<e.length)throw new Error("n-th rule couldn't be parsed ('".concat(e,"')"))
return[o,a*s]
function u(){return"-"===e.charAt(t)?(t++,-1):("+"===e.charAt(t)&&t++,1)}function l(){for(var r=t,o=0;t<e.length&&e.charCodeAt(t)>=n&&e.charCodeAt(t)<=i;)o=10*o+(e.charCodeAt(t)-n),t++
return t===r?null:o}function c(){for(;t<e.length&&r.has(e.charCodeAt(t));)t++}}},2158:function(e,t){var r,n
r=function(){"use strict"
var e=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()
function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=void 0
void 0===r&&(r={modules:[]})
var n=null
function i(e){var t=e.getBoundingClientRect(),r={}
for(var n in t)r[n]=t[n]
try{if(e.ownerDocument!==document){var o=e.ownerDocument.defaultView.frameElement
if(o){var a=i(o)
r.top+=a.top,r.bottom+=a.top,r.left+=a.left,r.right+=a.left}}}catch(e){}return r}function o(e){var t=(getComputedStyle(e)||{}).position,r=[]
if("fixed"===t)return[e]
for(var n=e;(n=n.parentNode)&&n&&1===n.nodeType;){var i=void 0
try{i=getComputedStyle(n)}catch(e){}if(null==i)return r.push(n),r
var o=i,a=o.overflow,s=o.overflowX,u=o.overflowY;/(auto|scroll|overlay)/.test(a+u+s)&&("absolute"!==t||["relative","absolute","fixed"].indexOf(i.position)>=0)&&r.push(n)}return r.push(e.ownerDocument.body),e.ownerDocument!==document&&r.push(e.ownerDocument.defaultView),r}var a,s=(a=0,function(){return++a}),u={},l=function(){var e=n
e&&document.body.contains(e)||((e=document.createElement("div")).setAttribute("data-tether-id",s()),g(e.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(e),n=e)
var t=e.getAttribute("data-tether-id")
return void 0===u[t]&&(u[t]=i(e),D((function(){delete u[t]}))),u[t]}
function c(){n&&document.body.removeChild(n),n=null}function f(e){var t=void 0
e===document?(t=document,e=document.documentElement):t=e.ownerDocument
var r=t.documentElement,n=i(e),o=l()
return n.top-=o.top,n.left-=o.left,void 0===n.width&&(n.width=document.body.scrollWidth-n.left-n.right),void 0===n.height&&(n.height=document.body.scrollHeight-n.top-n.bottom),n.top=n.top-r.clientTop,n.left=n.left-r.clientLeft,n.right=t.body.clientWidth-n.width-n.left,n.bottom=t.body.clientHeight-n.height-n.top,n}function p(e){return e.offsetParent||document.documentElement}var d=null
function h(){if(d)return d
var e=document.createElement("div")
e.style.width="100%",e.style.height="200px"
var t=document.createElement("div")
g(t.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t)
var r=e.offsetWidth
t.style.overflow="scroll"
var n=e.offsetWidth
r===n&&(n=t.clientWidth),document.body.removeChild(t)
var i=r-n
return d={width:i,height:i}}function g(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=[]
return Array.prototype.push.apply(t,arguments),t.slice(1).forEach((function(t){if(t)for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])})),e}function m(e,t){if(void 0!==e.classList)t.split(" ").forEach((function(t){t.trim()&&e.classList.remove(t)}))
else{var r=new RegExp("(^| )"+t.split(" ").join("|")+"( |$)","gi"),n=b(e).replace(r," ")
w(e,n)}}function v(e,t){if(void 0!==e.classList)t.split(" ").forEach((function(t){t.trim()&&e.classList.add(t)}))
else{m(e,t)
var r=b(e)+" "+t
w(e,r)}}function y(e,t){if(void 0!==e.classList)return e.classList.contains(t)
var r=b(e)
return new RegExp("(^| )"+t+"( |$)","gi").test(r)}function b(e){return e.className instanceof e.ownerDocument.defaultView.SVGAnimatedString?e.className.baseVal:e.className}function w(e,t){e.setAttribute("class",t)}function x(e,t,r){r.forEach((function(r){-1===t.indexOf(r)&&y(e,r)&&m(e,r)})),t.forEach((function(t){y(e,t)||v(e,t)}))}var E=[],D=function(e){E.push(e)},A=function(){for(var e=void 0;e=E.pop();)e()},_=function(){function r(){t(this,r)}return e(r,[{key:"on",value:function(e,t,r){var n=!(arguments.length<=3||void 0===arguments[3])&&arguments[3]
void 0===this.bindings&&(this.bindings={}),void 0===this.bindings[e]&&(this.bindings[e]=[]),this.bindings[e].push({handler:t,ctx:r,once:n})}},{key:"once",value:function(e,t,r){this.on(e,t,r,!0)}},{key:"off",value:function(e,t){if(void 0!==this.bindings&&void 0!==this.bindings[e])if(void 0===t)delete this.bindings[e]
else for(var r=0;r<this.bindings[e].length;)this.bindings[e][r].handler===t?this.bindings[e].splice(r,1):++r}},{key:"trigger",value:function(e){if(void 0!==this.bindings&&this.bindings[e]){for(var t=0,r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i]
for(;t<this.bindings[e].length;){var o=this.bindings[e][t],a=o.handler,s=o.ctx,u=o.once,l=s
void 0===l&&(l=this),a.apply(l,n),u?this.bindings[e].splice(t,1):++t}}}}]),r}()
r.Utils={getActualBoundingClientRect:i,getScrollParents:o,getBounds:f,getOffsetParent:p,extend:g,addClass:v,removeClass:m,hasClass:y,updateClasses:x,defer:D,flush:A,uniqueId:s,Evented:_,getScrollBarSize:h,removeUtilElements:c}
var k=function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0
try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(e,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=(e=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),function(e,t,r){for(var n=!0;n;){var i=e,o=t,a=r
n=!1,null===i&&(i=Function.prototype)
var s=Object.getOwnPropertyDescriptor(i,o)
if(void 0!==s){if("value"in s)return s.value
var u=s.get
if(void 0===u)return
return u.call(a)}var l=Object.getPrototypeOf(i)
if(null===l)return
e=l,t=o,r=a,n=!0,s=l=void 0}})
function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}if(void 0===r)throw new Error("You must include the utils.js file before tether.js")
var o=(Q=r.Utils).getScrollParents,p=(f=Q.getBounds,Q.getOffsetParent),v=(g=Q.extend,Q.addClass),m=Q.removeClass,h=(x=Q.updateClasses,D=Q.defer,A=Q.flush,Q.getScrollBarSize),c=Q.removeUtilElements
function T(e,t){var r=arguments.length<=2||void 0===arguments[2]?1:arguments[2]
return e+r>=t&&t>=e-r}var S,N,O,L,F=function(){if("undefined"==typeof document)return""
for(var e=document.createElement("div"),t=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],r=0;r<t.length;++r){var n=t[r]
if(void 0!==e.style[n])return n}}(),q=[],P=function(){q.forEach((function(e){e.position(!1)})),A()}
function R(){return"object"==typeof performance&&"function"==typeof performance.now?performance.now():+new Date}S=null,N=null,O=null,L=function e(){if(void 0!==N&&N>16)return N=Math.min(N-16,250),void(O=setTimeout(e,250))
void 0!==S&&R()-S<10||(null!=O&&(clearTimeout(O),O=null),S=R(),P(),N=R()-S)},"undefined"!=typeof window&&void 0!==window.addEventListener&&["resize","scroll","touchmove"].forEach((function(e){window.addEventListener(e,L)}))
var B={center:"center",left:"right",right:"left"},j={middle:"middle",top:"bottom",bottom:"top"},I={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},M=function(e){var t=e.left,r=e.top
return void 0!==I[e.left]&&(t=I[e.left]),void 0!==I[e.top]&&(r=I[e.top]),{left:t,top:r}}
function U(){for(var e={top:0,left:0},t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n]
return r.forEach((function(t){var r=t.top,n=t.left
"string"==typeof r&&(r=parseFloat(r,10)),"string"==typeof n&&(n=parseFloat(n,10)),e.top+=r,e.left+=n})),e}function H(e,t){return"string"==typeof e.left&&-1!==e.left.indexOf("%")&&(e.left=parseFloat(e.left,10)/100*t.width),"string"==typeof e.top&&-1!==e.top.indexOf("%")&&(e.top=parseFloat(e.top,10)/100*t.height),e}var $=function(e){var t=e.split(" "),r=k(t,2)
return{top:r[0],left:r[1]}},z=$,V=function(n){function i(e){var n=this
t(this,i),C(Object.getPrototypeOf(i.prototype),"constructor",this).call(this),this.position=this.position.bind(this),q.push(this),this.history=[],this.setOptions(e,!1),r.modules.forEach((function(e){void 0!==e.initialize&&e.initialize.call(n)})),this.position()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,n),e(i,[{key:"getClass",value:function(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=this.options.classes
return void 0!==t&&t[e]?this.options.classes[e]:this.options.classPrefix?this.options.classPrefix+"-"+e:e}},{key:"setOptions",value:function(e){var t=this,r=arguments.length<=1||void 0===arguments[1]||arguments[1]
this.options=g({offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"},e)
var n=this.options,i=n.element,a=n.target,s=n.targetModifier
if(this.element=i,this.target=a,this.targetModifier=s,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach((function(e){if(void 0===t[e])throw new Error("Tether Error: Both element and target must be defined")
void 0!==t[e].jquery?t[e]=t[e][0]:"string"==typeof t[e]&&(t[e]=document.querySelector(t[e]))})),v(this.element,this.getClass("element")),!1!==this.options.addTargetClasses&&v(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment")
this.targetAttachment=z(this.options.targetAttachment),this.attachment=z(this.options.attachment),this.offset=$(this.options.offset),this.targetOffset=$(this.options.targetOffset),void 0!==this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=o(this.target),!1!==this.options.enabled&&this.enable(r)}},{key:"getTargetBounds",value:function(){if(void 0===this.targetModifier)return f(this.target)
if("visible"===this.targetModifier)return this.target===document.body?{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth}:((o={height:(e=f(this.target)).height,width:e.width,top:e.top,left:e.left}).height=Math.min(o.height,e.height-(pageYOffset-e.top)),o.height=Math.min(o.height,e.height-(e.top+e.height-(pageYOffset+innerHeight))),o.height=Math.min(innerHeight,o.height),o.height-=2,o.width=Math.min(o.width,e.width-(pageXOffset-e.left)),o.width=Math.min(o.width,e.width-(e.left+e.width-(pageXOffset+innerWidth))),o.width=Math.min(innerWidth,o.width),o.width-=2,o.top<pageYOffset&&(o.top=pageYOffset),o.left<pageXOffset&&(o.left=pageXOffset),o)
if("scroll-handle"===this.targetModifier){var e=void 0,t=this.target
t===document.body?(t=document.documentElement,e={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):e=f(t)
var r=getComputedStyle(t),n=0;(t.scrollWidth>t.clientWidth||[r.overflow,r.overflowX].indexOf("scroll")>=0||this.target!==document.body)&&(n=15)
var i=e.height-parseFloat(r.borderTopWidth)-parseFloat(r.borderBottomWidth)-n,o={width:15,height:.975*i*(i/t.scrollHeight),left:e.left+e.width-parseFloat(r.borderLeftWidth)-15},a=0
i<408&&this.target===document.body&&(a=-11e-5*Math.pow(i,2)-.00727*i+22.58),this.target!==document.body&&(o.height=Math.max(o.height,24))
var s=this.target.scrollTop/(t.scrollHeight-i)
return o.top=s*(i-o.height-a)+e.top+parseFloat(r.borderTopWidth),this.target===document.body&&(o.height=Math.max(o.height,24)),o}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(e,t){return void 0===this._cache&&(this._cache={}),void 0===this._cache[e]&&(this._cache[e]=t.call(this)),this._cache[e]}},{key:"enable",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]||arguments[0]
!1!==this.options.addTargetClasses&&v(this.target,this.getClass("enabled")),v(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach((function(t){t!==e.target.ownerDocument&&t.addEventListener("scroll",e.position)})),t&&this.position()}},{key:"disable",value:function(){var e=this
m(this.target,this.getClass("enabled")),m(this.element,this.getClass("enabled")),this.enabled=!1,void 0!==this.scrollParents&&this.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.position)}))}},{key:"destroy",value:function(){var e=this
this.disable(),q.forEach((function(t,r){t===e&&q.splice(r,1)})),0===q.length&&c()}},{key:"updateAttachClasses",value:function(e,t){var r=this
e=e||this.attachment,t=t||this.targetAttachment,void 0!==this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),void 0===this._addAttachClasses&&(this._addAttachClasses=[])
var n=this._addAttachClasses
e.top&&n.push(this.getClass("element-attached")+"-"+e.top),e.left&&n.push(this.getClass("element-attached")+"-"+e.left),t.top&&n.push(this.getClass("target-attached")+"-"+t.top),t.left&&n.push(this.getClass("target-attached")+"-"+t.left)
var i=[];["left","top","bottom","right","middle","center"].forEach((function(e){i.push(r.getClass("element-attached")+"-"+e),i.push(r.getClass("target-attached")+"-"+e)})),D((function(){void 0!==r._addAttachClasses&&(x(r.element,r._addAttachClasses,i),!1!==r.options.addTargetClasses&&x(r.target,r._addAttachClasses,i),delete r._addAttachClasses)}))}},{key:"position",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]||arguments[0]
if(this.enabled){this.clearCache()
var n=function(e,t){var r=e.left,n=e.top
return"auto"===r&&(r=B[t.left]),"auto"===n&&(n=j[t.top]),{left:r,top:n}}(this.targetAttachment,this.attachment)
this.updateAttachClasses(this.attachment,n)
var i=this.cache("element-bounds",(function(){return f(e.element)})),o=i.width,a=i.height
if(0===o&&0===a&&void 0!==this.lastSize){var s=this.lastSize
o=s.width,a=s.height}else this.lastSize={width:o,height:a}
var u=this.cache("target-bounds",(function(){return e.getTargetBounds()})),l=u,c=H(M(this.attachment),{width:o,height:a}),d=H(M(n),l),g=H(this.offset,{width:o,height:a}),m=H(this.targetOffset,l)
c=U(c,g),d=U(d,m)
for(var v=u.left+d.left-c.left,y=u.top+d.top-c.top,b=0;b<r.modules.length;++b){var w=r.modules[b].position.call(this,{left:v,top:y,targetAttachment:n,targetPos:u,elementPos:i,offset:c,targetOffset:d,manualOffset:g,manualTargetOffset:m,scrollbarSize:_,attachment:this.attachment})
if(!1===w)return!1
void 0!==w&&"object"==typeof w&&(y=w.top,v=w.left)}var x={page:{top:y,left:v},viewport:{top:y-pageYOffset,bottom:pageYOffset-y-a+innerHeight,left:v-pageXOffset,right:pageXOffset-v-o+innerWidth}},E=this.target.ownerDocument,D=E.defaultView,_=void 0
return D.innerHeight>E.documentElement.clientHeight&&(_=this.cache("scrollbar-size",h),x.viewport.bottom-=_.height),D.innerWidth>E.documentElement.clientWidth&&(_=this.cache("scrollbar-size",h),x.viewport.right-=_.width),-1!==["","static"].indexOf(E.body.style.position)&&-1!==["","static"].indexOf(E.body.parentElement.style.position)||(x.page.bottom=E.body.scrollHeight-y-a,x.page.right=E.body.scrollWidth-v-o),void 0!==this.options.optimizations&&!1!==this.options.optimizations.moveElement&&void 0===this.targetModifier&&function(){var t=e.cache("target-offsetparent",(function(){return p(e.target)})),r=e.cache("target-offsetparent-bounds",(function(){return f(t)})),n=getComputedStyle(t),i=r,o={}
if(["Top","Left","Bottom","Right"].forEach((function(e){o[e.toLowerCase()]=parseFloat(n["border"+e+"Width"])})),r.right=E.body.scrollWidth-r.left-i.width+o.right,r.bottom=E.body.scrollHeight-r.top-i.height+o.bottom,x.page.top>=r.top+o.top&&x.page.bottom>=r.bottom&&x.page.left>=r.left+o.left&&x.page.right>=r.right){var a=t.scrollTop,s=t.scrollLeft
x.offset={top:x.page.top-r.top+a-o.top,left:x.page.left-r.left+s-o.left}}}(),this.move(x),this.history.unshift(x),this.history.length>3&&this.history.pop(),t&&A(),!0}}},{key:"move",value:function(e){var t,r,n=this
if(void 0!==this.element.parentNode){var i={}
for(var o in e)for(var a in i[o]={},e[o]){for(var s=!1,u=0;u<this.history.length;++u){var l=this.history[u]
if(void 0!==l[o]&&!T(l[o][a],e[o][a])){s=!0
break}}s||(i[o][a]=!0)}var c={top:"",left:"",right:"",bottom:""},f=function(e,t){if(!1!==(void 0!==n.options.optimizations?n.options.optimizations.gpu:null)){var r=void 0,i=void 0
e.top?(c.top=0,r=t.top):(c.bottom=0,r=-t.bottom),e.left?(c.left=0,i=t.left):(c.right=0,i=-t.right),"number"==typeof window.devicePixelRatio&&devicePixelRatio%1==0&&(i=Math.round(i*devicePixelRatio)/devicePixelRatio,r=Math.round(r*devicePixelRatio)/devicePixelRatio),c[F]="translateX("+i+"px) translateY("+r+"px)","msTransform"!==F&&(c[F]+=" translateZ(0)")}else e.top?c.top=t.top+"px":c.bottom=t.bottom+"px",e.left?c.left=t.left+"px":c.right=t.right+"px"},d=!1
if((i.page.top||i.page.bottom)&&(i.page.left||i.page.right)?(c.position="absolute",f(i.page,e.page)):(i.viewport.top||i.viewport.bottom)&&(i.viewport.left||i.viewport.right)?(c.position="fixed",f(i.viewport,e.viewport)):void 0!==i.offset&&i.offset.top&&i.offset.left?function(){c.position="absolute"
var t=n.cache("target-offsetparent",(function(){return p(n.target)}))
p(n.element)!==t&&D((function(){n.element.parentNode.removeChild(n.element),t.appendChild(n.element)})),f(i.offset,e.offset),d=!0}():(c.position="absolute",f({top:!0,left:!0},e.page)),!d)if(this.options.bodyElement)this.element.parentNode!==this.options.bodyElement&&this.options.bodyElement.appendChild(this.element)
else{for(var h=!0,m=this.element.parentNode;m&&1===m.nodeType&&"BODY"!==m.tagName&&(void 0,((r=(t=m).ownerDocument).fullscreenElement||r.webkitFullscreenElement||r.mozFullScreenElement||r.msFullscreenElement)!==t);){if("static"!==getComputedStyle(m).position){h=!1
break}m=m.parentNode}h||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var v={},y=!1
for(var a in c){var b=c[a]
this.element.style[a]!==b&&(y=!0,v[a]=b)}y&&D((function(){g(n.element.style,v),n.trigger("repositioned")}))}}}]),i}(_)
V.modules=[],r.position=P
var G=g(V,r)
k=function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0
try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(e,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")},f=(Q=r.Utils).getBounds
var g=Q.extend,W=(x=Q.updateClasses,D=Q.defer,["left","top","right","bottom"])
r.modules.push({position:function(e){var t=this,r=e.top,n=e.left,i=e.targetAttachment
if(!this.options.constraints)return!0
var o=this.cache("element-bounds",(function(){return f(t.element)})),a=o.height,s=o.width
if(0===s&&0===a&&void 0!==this.lastSize){var u=this.lastSize
s=u.width,a=u.height}var l=this.cache("target-bounds",(function(){return t.getTargetBounds()})),c=l.height,p=l.width,d=[this.getClass("pinned"),this.getClass("out-of-bounds")]
this.options.constraints.forEach((function(e){var t=e.outOfBoundsClass,r=e.pinnedClass
t&&d.push(t),r&&d.push(r)})),d.forEach((function(e){["left","top","right","bottom"].forEach((function(t){d.push(e+"-"+t)}))}))
var h=[],m=g({},i),v=g({},this.attachment)
return this.options.constraints.forEach((function(e){var o=e.to,u=e.attachment,l=e.pin
void 0===u&&(u="")
var d=void 0,g=void 0
if(u.indexOf(" ")>=0){var y=u.split(" "),b=k(y,2)
g=b[0],d=b[1]}else d=g=u
var w=function(e,t){return"scrollParent"===t?t=e.scrollParents[0]:"window"===t&&(t=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),t===document&&(t=t.documentElement),void 0!==t.nodeType&&function(){var e=t,r=f(t),n=r,i=getComputedStyle(t)
if(t=[n.left,n.top,r.width+n.left,r.height+n.top],e.ownerDocument!==document){var o=e.ownerDocument.defaultView
t[0]+=o.pageXOffset,t[1]+=o.pageYOffset,t[2]+=o.pageXOffset,t[3]+=o.pageYOffset}W.forEach((function(e,r){"Top"===(e=e[0].toUpperCase()+e.substr(1))||"Left"===e?t[r]+=parseFloat(i["border"+e+"Width"]):t[r]-=parseFloat(i["border"+e+"Width"])}))}(),t}(t,o)
"target"!==g&&"both"!==g||(r<w[1]&&"top"===m.top&&(r+=c,m.top="bottom"),r+a>w[3]&&"bottom"===m.top&&(r-=c,m.top="top")),"together"===g&&("top"===m.top&&("bottom"===v.top&&r<w[1]?(r+=c,m.top="bottom",r+=a,v.top="top"):"top"===v.top&&r+a>w[3]&&r-(a-c)>=w[1]&&(r-=a-c,m.top="bottom",v.top="bottom")),"bottom"===m.top&&("top"===v.top&&r+a>w[3]?(r-=c,m.top="top",r-=a,v.top="bottom"):"bottom"===v.top&&r<w[1]&&r+(2*a-c)<=w[3]&&(r+=a-c,m.top="top",v.top="top")),"middle"===m.top&&(r+a>w[3]&&"top"===v.top?(r-=a,v.top="bottom"):r<w[1]&&"bottom"===v.top&&(r+=a,v.top="top"))),"target"!==d&&"both"!==d||(n<w[0]&&"left"===m.left&&(n+=p,m.left="right"),n+s>w[2]&&"right"===m.left&&(n-=p,m.left="left")),"together"===d&&(n<w[0]&&"left"===m.left?"right"===v.left?(n+=p,m.left="right",n+=s,v.left="left"):"left"===v.left&&(n+=p,m.left="right",n-=s,v.left="right"):n+s>w[2]&&"right"===m.left?"left"===v.left?(n-=p,m.left="left",n-=s,v.left="right"):"right"===v.left&&(n-=p,m.left="left",n+=s,v.left="left"):"center"===m.left&&(n+s>w[2]&&"left"===v.left?(n-=s,v.left="right"):n<w[0]&&"right"===v.left&&(n+=s,v.left="left"))),"element"!==g&&"both"!==g||(r<w[1]&&"bottom"===v.top&&(r+=a,v.top="top"),r+a>w[3]&&"top"===v.top&&(r-=a,v.top="bottom")),"element"!==d&&"both"!==d||(n<w[0]&&("right"===v.left?(n+=s,v.left="left"):"center"===v.left&&(n+=s/2,v.left="left")),n+s>w[2]&&("left"===v.left?(n-=s,v.left="right"):"center"===v.left&&(n-=s/2,v.left="right"))),"string"==typeof l?l=l.split(",").map((function(e){return e.trim()})):!0===l&&(l=["top","left","right","bottom"]),l=l||[]
var x,E,D=[],A=[]
r<w[1]&&(l.indexOf("top")>=0?(r=w[1],D.push("top")):A.push("top")),r+a>w[3]&&(l.indexOf("bottom")>=0?(r=w[3]-a,D.push("bottom")):A.push("bottom")),n<w[0]&&(l.indexOf("left")>=0?(n=w[0],D.push("left")):A.push("left")),n+s>w[2]&&(l.indexOf("right")>=0?(n=w[2]-s,D.push("right")):A.push("right")),D.length&&(x=void 0!==t.options.pinnedClass?t.options.pinnedClass:t.getClass("pinned"),h.push(x),D.forEach((function(e){h.push(x+"-"+e)}))),A.length&&(E=void 0!==t.options.outOfBoundsClass?t.options.outOfBoundsClass:t.getClass("out-of-bounds"),h.push(E),A.forEach((function(e){h.push(E+"-"+e)}))),(D.indexOf("left")>=0||D.indexOf("right")>=0)&&(v.left=m.left=!1),(D.indexOf("top")>=0||D.indexOf("bottom")>=0)&&(v.top=m.top=!1),m.top===i.top&&m.left===i.left&&v.top===t.attachment.top&&v.left===t.attachment.left||(t.updateAttachClasses(v,m),t.trigger("update",{attachment:v,targetAttachment:m}))})),D((function(){!1!==t.options.addTargetClasses&&x(t.target,h,d),x(t.element,h,d)})),{top:r,left:n}}})
var Q,f=(Q=r.Utils).getBounds,x=Q.updateClasses
return D=Q.defer,r.modules.push({position:function(e){var t=this,r=e.top,n=e.left,i=this.cache("element-bounds",(function(){return f(t.element)})),o=i.height,a=i.width,s=this.getTargetBounds(),u=r+o,l=n+a,c=[]
r<=s.bottom&&u>=s.top&&["left","right"].forEach((function(e){var t=s[e]
t!==n&&t!==l||c.push(e)})),n<=s.right&&l>=s.left&&["top","bottom"].forEach((function(e){var t=s[e]
t!==r&&t!==u||c.push(e)}))
var p=[],d=[]
return p.push(this.getClass("abutted")),["left","top","right","bottom"].forEach((function(e){p.push(t.getClass("abutted")+"-"+e)})),c.length&&d.push(this.getClass("abutted")),c.forEach((function(e){d.push(t.getClass("abutted")+"-"+e)})),D((function(){!1!==t.options.addTargetClasses&&x(t.target,d,p),x(t.element,d,p)})),!0}}),k=function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0
try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(e,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")},r.modules.push({position:function(e){var t=e.top,r=e.left
if(this.options.shift){var n=this.options.shift
"function"==typeof this.options.shift&&(n=this.options.shift.call(this,{top:t,left:r}))
var i=void 0,o=void 0
if("string"==typeof n){(n=n.split(" "))[1]=n[1]||n[0]
var a=k(n,2)
i=a[0],o=a[1],i=parseFloat(i,10),o=parseFloat(o,10)}else i=n.top,o=n.left
return{top:t+=i,left:r+=o}}}}),G},void 0===(n=r.apply(t,[]))||(e.exports=n)},2173:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{cached:()=>b,dedupeTracked:()=>w,localCopy:()=>v,trackedReset:()=>y})
var n,i,o=r(3353),a=r(7219),s=r(5521),u=r(6173)
function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let c=(n=class{constructor(){var e
l(this,"prevRemote",void 0),l(this,"peek",void 0),(e=i)&&Object.defineProperty(this,"value",{enumerable:e.enumerable,configurable:e.configurable,writable:e.writable,value:e.initializer?e.initializer.call(this):void 0})}},f=n.prototype,p="value",d=[s.tracked],h={configurable:!0,enumerable:!0,writable:!0,initializer:null},g={},Object.keys(h).forEach((function(e){g[e]=h[e]})),g.enumerable=!!g.enumerable,g.configurable=!!g.configurable,("value"in g||g.initializer)&&(g.writable=!0),void 0===(g=d.slice().reverse().reduce((function(e,t){return t(f,p,e)||e}),g)).initializer&&(Object.defineProperty(f,p,g),g=null),i=g,n)
var f,p,d,h,g
function m(e,t,r){let n=t.get(e)
return void 0===n&&(n=new c,t.set(e,n),n.value=n.peek="function"==typeof r?r.call(e):r),n}function v(e,t){(0,o.assert)(`@localCopy() must be given a memo path as its first argument, received \`${String(e)}\``,"string"==typeof e)
let r=new WeakMap
return()=>{let n=t=>(0,a.get)(t,e)
return{get(){let e=m(this,r,t),{prevRemote:i}=e,o=n(this)
return i!==o&&(e.value=e.prevRemote=o),e.value},set(e){if(!r.has(this)){let i=m(this,r,t)
return i.prevRemote=n(this),void(i.value=e)}m(this,r,t).value=e}}}}function y(e){(0,o.assert)(`@trackedReset() must be given a memo path, a memo function, or config object with a memo path or function as its first argument, received \`${String(e)}\``,"string"==typeof e||"function"==typeof e||"object"==typeof e&&null!==e&&void 0!==e.memo)
let t=new WeakMap
return(r,n,i)=>{let o,s,u=i.initializer??(()=>{})
"object"==typeof e?(o=e.memo,s=e.update??u):(o=e,s=u)
let l="function"==typeof o?(e,t)=>o.call(e,e,n,t):e=>(0,a.get)(e,o)
return{get(){let e=m(this,t,u),{prevRemote:r}=e,i=l(this,r)
return i!==r&&(e.prevRemote=i,e.value=e.peek=s.call(this,this,n,e.peek)),e.value},set(e){m(this,t,u).value=e}}}}function b(e,t,r){(0,o.assert)("@cached can only be used on getters",r&&r.get)
let{get:n,set:i}=r,a=new WeakMap
return{get(){let e=a.get(this)
return void 0===e&&(e=(0,u.createCache)(n.bind(this)),a.set(this,e)),(0,u.getValue)(e)},set:i}}function w(){let e
const t=function(t,r,n){let{initializer:i}=n,{get:o,set:a}=(0,s.tracked)(t,r,n),u=new WeakMap
return{get(){if(!u.has(this)){let e=i?.call(this)
u.set(this,e),a.call(this,e)}return o.call(this)},set(t){u.has(this)&&e(t,u.get(this))||(u.set(this,t),a.call(this,t))}}}
return 3===arguments.length?(e=(e,t)=>e===t,t(...arguments)):1===arguments.length&&"function"==typeof arguments[0]?(e=arguments[0],t):void(0,o.assert)(`@dedupeTracked() can either be invoked without arguments or with one comparator function, received \`${String(arguments)}\``,!1)}},2404:e=>{var t={exports:{}}
function r(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var n=e[t]
"object"!=typeof n||Object.isFrozen(n)||r(n)})),e}t.exports=r,t.exports.default=r
class n{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function i(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function o(e){const t=Object.create(null)
for(const o in e)t[o]=e[o]
for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i]
return n.forEach((function(e){for(const r in e)t[r]=e[r]})),t}const a=e=>!!e.scope||e.sublanguage&&e.language
class s{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=i(e)}openNode(e){if(!a(e))return
let t=""
t=e.sublanguage?`language-${e.language}`:((e,t)=>{let{prefix:r}=t
if(e.includes(".")){const t=e.split(".")
return[`${r}${t.shift()}`,...t.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")}return`${r}${e}`})(e.scope,{prefix:this.classPrefix}),this.span(t)}closeNode(e){a(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t={children:[]}
return Object.assign(t,e),t}
class l{constructor(){this.rootNode=u(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t=u({scope:e})
this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{l._collapse(e)})))}}class c extends l{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const r=e.root
r.sublanguage=!0,r.language=t,this.add(r)}toHTML(){return new s(this,this.options).value()}finalize(){return!0}}function f(e){return e?"string"==typeof e?e:e.source:null}function p(e){return g("(?=",e,")")}function d(e){return g("(?:",e,")*")}function h(e){return g("(?:",e,")?")}function g(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return t.map((e=>f(e))).join("")}function m(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
const n=function(e){const t=e[e.length-1]
return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}(t)
return"("+(n.capture?"":"?:")+t.map((e=>f(e))).join("|")+")"}function v(e){return new RegExp(e.toString()+"|").exec("").length-1}const y=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
function b(e,t){let{joinWith:r}=t,n=0
return e.map((e=>{n+=1
const t=n
let r=f(e),i=""
for(;r.length>0;){const e=y.exec(r)
if(!e){i+=r
break}i+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+String(Number(e[1])+t):(i+=e[0],"("===e[0]&&n++)}return i})).map((e=>`(${e})`)).join(r)}const w="[a-zA-Z]\\w*",x="[a-zA-Z_]\\w*",E="\\b\\d+(\\.\\d+)?",D="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",A="\\b(0b[01]+)",_={begin:"\\\\[\\s\\S]",relevance:0},k={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[_]},C={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[_]},T=function(e,t){const r=o({scope:"comment",begin:e,end:t,contains:[]},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})
r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
const n=m("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
return r.contains.push({begin:g(/[ ]+/,"(",n,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},S=T("//","$"),N=T("/\\*","\\*/"),O=T("#","$"),L={scope:"number",begin:E,relevance:0},F={scope:"number",begin:D,relevance:0},q={scope:"number",begin:A,relevance:0},P={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[_,{begin:/\[/,end:/\]/,relevance:0,contains:[_]}]}]},R={scope:"title",begin:w,relevance:0},B={scope:"title",begin:x,relevance:0},j={begin:"\\.\\s*"+x,relevance:0}
var I=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:w,UNDERSCORE_IDENT_RE:x,NUMBER_RE:E,C_NUMBER_RE:D,BINARY_NUMBER_RE:A,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t=/^#![ ]*\//
return e.binary&&(e.begin=g(t,/.*\b/,e.binary,/\b.*/)),o({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:_,APOS_STRING_MODE:k,QUOTE_STRING_MODE:C,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:T,C_LINE_COMMENT_MODE:S,C_BLOCK_COMMENT_MODE:N,HASH_COMMENT_MODE:O,NUMBER_MODE:L,C_NUMBER_MODE:F,BINARY_NUMBER_MODE:q,REGEXP_MODE:P,TITLE_MODE:R,UNDERSCORE_TITLE_MODE:B,METHOD_GUARD:j,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}})
function M(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function U(e,t){void 0!==e.className&&(e.scope=e.className,delete e.className)}function H(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=M,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function $(e,t){Array.isArray(e.illegal)&&(e.illegal=m(...e.illegal))}function z(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match")
e.begin=e.match,delete e.match}}function V(e,t){void 0===e.relevance&&(e.relevance=1)}const G=(e,t)=>{if(!e.beforeMatch)return
if(e.starts)throw new Error("beforeMatch cannot be used with starts")
const r=Object.assign({},e)
Object.keys(e).forEach((t=>{delete e[t]})),e.keywords=r.keywords,e.begin=g(r.beforeMatch,p(r.begin)),e.starts={relevance:0,contains:[Object.assign(r,{endsParent:!0})]},e.relevance=0,delete r.beforeMatch},W=["of","and","for","in","not","or","if","then","parent","list","value"],Q="keyword"
function K(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Q
const n=Object.create(null)
return"string"==typeof e?i(r,e.split(" ")):Array.isArray(e)?i(r,e):Object.keys(e).forEach((function(r){Object.assign(n,K(e[r],t,r))})),n
function i(e,r){t&&(r=r.map((e=>e.toLowerCase()))),r.forEach((function(t){const r=t.split("|")
n[r[0]]=[e,Z(r[0],r[1])]}))}}function Z(e,t){return t?Number(t):function(e){return W.includes(e.toLowerCase())}(e)?0:1}const X={},Y=e=>{console.error(e)},J=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
console.log(`WARN: ${e}`,...r)},ee=(e,t)=>{X[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),X[`${e}/${t}`]=!0)},te=new Error
function re(e,t,r){let{key:n}=r,i=0
const o=e[n],a={},s={}
for(let u=1;u<=t.length;u++)s[u+i]=o[u],a[u+i]=!0,i+=v(t[u-1])
e[n]=s,e[n]._emit=a,e[n]._multi=!0}function ne(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Y("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),te
if("object"!=typeof e.beginScope||null===e.beginScope)throw Y("beginScope must be object"),te
re(e,e.begin,{key:"beginScope"}),e.begin=b(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Y("skip, excludeEnd, returnEnd not compatible with endScope: {}"),te
if("object"!=typeof e.endScope||null===e.endScope)throw Y("endScope must be object"),te
re(e,e.end,{key:"endScope"}),e.end=b(e.end,{joinWith:""})}}(e)}function ie(e){function t(t,r){return new RegExp(f(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=v(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
const e=this.regexes.map((e=>e[1]))
this.matcherRe=t(b(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
const t=this.matcherRe.exec(e)
if(!t)return null
const r=t.findIndex(((e,t)=>t>0&&void 0!==e)),n=this.matchIndexes[r]
return t.splice(0,r),Object.assign(t,n)}}class n{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e]
const t=new r
return this.rules.slice(e).forEach((e=>{let[r,n]=e
return t.addRule(r,n)})),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex)
t.lastIndex=this.lastIndex
let r=t.exec(e)
if(this.resumingScanAtSamePosition())if(r&&r.index===this.lastIndex);else{const t=this.getMatcher(0)
t.lastIndex=this.lastIndex+1,r=t.exec(e)}return r&&(this.regexIndex+=r.position+1,this.regexIndex===this.count&&this.considerAll()),r}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
return e.classNameAliases=o(e.classNameAliases||{}),function r(i,a){const s=i
if(i.isCompiled)return s;[U,z,ne,G].forEach((e=>e(i,a))),e.compilerExtensions.forEach((e=>e(i,a))),i.__beforeBegin=null,[H,$,V].forEach((e=>e(i,a))),i.isCompiled=!0
let u=null
return"object"==typeof i.keywords&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),u=i.keywords.$pattern,delete i.keywords.$pattern),u=u||/\w+/,i.keywords&&(i.keywords=K(i.keywords,e.case_insensitive)),s.keywordPatternRe=t(u,!0),a&&(i.begin||(i.begin=/\B|\b/),s.beginRe=t(s.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(s.endRe=t(s.end)),s.terminatorEnd=f(s.end)||"",i.endsWithParent&&a.terminatorEnd&&(s.terminatorEnd+=(i.end?"|":"")+a.terminatorEnd)),i.illegal&&(s.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map((function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return o(e,{variants:null},t)}))),e.cachedVariants?e.cachedVariants:oe(e)?o(e,{starts:e.starts?o(e.starts):null}):Object.isFrozen(e)?o(e):e}("self"===e?i:e)}))),i.contains.forEach((function(e){r(e,s)})),i.starts&&r(i.starts,a),s.matcher=function(e){const t=new n
return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(s),s}(e)}function oe(e){return!!e&&(e.endsWithParent||oe(e.starts))}class ae extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const se=i,ue=o,le=Symbol("nomatch")
var ce=function(e){const r=Object.create(null),i=Object.create(null),o=[]
let a=!0
const s="Could not find the language '{}', did you forget to load/include a language module?",u={disableAutodetect:!0,name:"Plain text",contains:[]}
let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:c}
function f(e){return l.noHighlightRe.test(e)}function v(e,t,r){let n="",i=""
"object"==typeof t?(n=e,r=t.ignoreIllegals,i=t.language):(ee("10.7.0","highlight(lang, code, ...args) has been deprecated."),ee("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),i=e,n=t),void 0===r&&(r=!0)
const o={code:n,language:i}
k("before:highlight",o)
const a=o.result?o.result:y(o.language,o.code,r)
return a.code=o.code,k("after:highlight",a),a}function y(e,t,i,o){const u=Object.create(null)
function c(){if(!A.keywords)return void k.addText(C)
let e=0
A.keywordPatternRe.lastIndex=0
let t=A.keywordPatternRe.exec(C),r=""
for(;t;){r+=C.substring(e,t.index)
const i=w.case_insensitive?t[0].toLowerCase():t[0],o=(n=i,A.keywords[n])
if(o){const[e,n]=o
if(k.addText(r),r="",u[i]=(u[i]||0)+1,u[i]<=7&&(T+=n),e.startsWith("_"))r+=t[0]
else{const r=w.classNameAliases[e]||e
k.addKeyword(t[0],r)}}else r+=t[0]
e=A.keywordPatternRe.lastIndex,t=A.keywordPatternRe.exec(C)}var n
r+=C.substring(e),k.addText(r)}function f(){null!=A.subLanguage?function(){if(""===C)return
let e=null
if("string"==typeof A.subLanguage){if(!r[A.subLanguage])return void k.addText(C)
e=y(A.subLanguage,C,!0,_[A.subLanguage]),_[A.subLanguage]=e._top}else e=b(C,A.subLanguage.length?A.subLanguage:null)
A.relevance>0&&(T+=e.relevance),k.addSublanguage(e._emitter,e.language)}():c(),C=""}function p(e,t){let r=1
const n=t.length-1
for(;r<=n;){if(!e._emit[r]){r++
continue}const n=w.classNameAliases[e[r]]||e[r],i=t[r]
n?k.addKeyword(i,n):(C=i,c(),C=""),r++}}function d(e,t){return e.scope&&"string"==typeof e.scope&&k.openNode(w.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(k.addKeyword(C,w.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),C=""):e.beginScope._multi&&(p(e.beginScope,t),C="")),A=Object.create(e,{parent:{value:A}}),A}function h(e,t,r){let i=function(e,t){const r=e&&e.exec(t)
return r&&0===r.index}(e.endRe,r)
if(i){if(e["on:end"]){const r=new n(e)
e["on:end"](t,r),r.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent
return e}}if(e.endsWithParent)return h(e.parent,t,r)}function g(e){return 0===A.matcher.regexIndex?(C+=e[0],1):(O=!0,0)}let m={}
function v(r,o){const s=o&&o[0]
if(C+=r,null==s)return f(),0
if("begin"===m.type&&"end"===o.type&&m.index===o.index&&""===s){if(C+=t.slice(o.index,o.index+1),!a){const t=new Error(`0 width match regex (${e})`)
throw t.languageName=e,t.badRule=m.rule,t}return 1}if(m=o,"begin"===o.type)return function(e){const t=e[0],r=e.rule,i=new n(r),o=[r.__beforeBegin,r["on:begin"]]
for(const n of o)if(n&&(n(e,i),i.isMatchIgnored))return g(t)
return r.skip?C+=t:(r.excludeBegin&&(C+=t),f(),r.returnBegin||r.excludeBegin||(C=t)),d(r,e),r.returnBegin?0:t.length}(o)
if("illegal"===o.type&&!i){const e=new Error('Illegal lexeme "'+s+'" for mode "'+(A.scope||"<unnamed>")+'"')
throw e.mode=A,e}if("end"===o.type){const e=function(e){const r=e[0],n=t.substring(e.index),i=h(A,e,n)
if(!i)return le
const o=A
A.endScope&&A.endScope._wrap?(f(),k.addKeyword(r,A.endScope._wrap)):A.endScope&&A.endScope._multi?(f(),p(A.endScope,e)):o.skip?C+=r:(o.returnEnd||o.excludeEnd||(C+=r),f(),o.excludeEnd&&(C=r))
do{A.scope&&k.closeNode(),A.skip||A.subLanguage||(T+=A.relevance),A=A.parent}while(A!==i.parent)
return i.starts&&d(i.starts,e),o.returnEnd?0:r.length}(o)
if(e!==le)return e}if("illegal"===o.type&&""===s)return 1
if(N>1e5&&N>3*o.index)throw new Error("potential infinite loop, way more iterations than matches")
return C+=s,s.length}const w=D(e)
if(!w)throw Y(s.replace("{}",e)),new Error('Unknown language: "'+e+'"')
const x=ie(w)
let E="",A=o||x
const _={},k=new l.__emitter(l)
!function(){const e=[]
for(let t=A;t!==w;t=t.parent)t.scope&&e.unshift(t.scope)
e.forEach((e=>k.openNode(e)))}()
let C="",T=0,S=0,N=0,O=!1
try{for(A.matcher.considerAll();;){N++,O?O=!1:A.matcher.considerAll(),A.matcher.lastIndex=S
const e=A.matcher.exec(t)
if(!e)break
const r=v(t.substring(S,e.index),e)
S=e.index+r}return v(t.substring(S)),k.closeAllNodes(),k.finalize(),E=k.toHTML(),{language:e,value:E,relevance:T,illegal:!1,_emitter:k,_top:A}}catch(r){if(r.message&&r.message.includes("Illegal"))return{language:e,value:se(t),illegal:!0,relevance:0,_illegalBy:{message:r.message,index:S,context:t.slice(S-100,S+100),mode:r.mode,resultSoFar:E},_emitter:k}
if(a)return{language:e,value:se(t),illegal:!1,relevance:0,errorRaised:r,_emitter:k,_top:A}
throw r}}function b(e,t){t=t||l.languages||Object.keys(r)
const n=function(e){const t={value:se(e),illegal:!1,relevance:0,_top:u,_emitter:new l.__emitter(l)}
return t._emitter.addText(e),t}(e),i=t.filter(D).filter(_).map((t=>y(t,e,!1)))
i.unshift(n)
const o=i.sort(((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance
if(e.language&&t.language){if(D(e.language).supersetOf===t.language)return 1
if(D(t.language).supersetOf===e.language)return-1}return 0})),[a,s]=o,c=a
return c.secondBest=s,c}function w(e){let t=null
const r=function(e){let t=e.className+" "
t+=e.parentNode?e.parentNode.className:""
const r=l.languageDetectRe.exec(t)
if(r){const t=D(r[1])
return t||(J(s.replace("{}",r[1])),J("Falling back to no-highlight mode for this block.",e)),t?r[1]:"no-highlight"}return t.split(/\s+/).find((e=>f(e)||D(e)))}(e)
if(f(r))return
if(k("before:highlightElement",{el:e,language:r}),e.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),l.throwUnescapedHTML))throw new ae("One of your code blocks includes unescaped HTML.",e.innerHTML)
t=e
const n=t.textContent,o=r?v(n,{language:r,ignoreIllegals:!0}):b(n)
e.innerHTML=o.value,function(e,t,r){const n=t&&i[t]||r
e.classList.add("hljs"),e.classList.add(`language-${n}`)}(e,r,o.language),e.result={language:o.language,re:o.relevance,relevance:o.relevance},o.secondBest&&(e.secondBest={language:o.secondBest.language,relevance:o.secondBest.relevance}),k("after:highlightElement",{el:e,result:o,text:n})}let x=!1
function E(){"loading"!==document.readyState?document.querySelectorAll(l.cssSelector).forEach(w):x=!0}function D(e){return e=(e||"").toLowerCase(),r[e]||r[i[e]]}function A(e,t){let{languageName:r}=t
"string"==typeof e&&(e=[e]),e.forEach((e=>{i[e.toLowerCase()]=r}))}function _(e){const t=D(e)
return t&&!t.disableAutodetect}function k(e,t){const r=e
o.forEach((function(e){e[r]&&e[r](t)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){x&&E()}),!1),Object.assign(e,{highlight:v,highlightAuto:b,highlightAll:E,highlightElement:w,highlightBlock:function(e){return ee("10.7.0","highlightBlock will be removed entirely in v12.0"),ee("10.7.0","Please use highlightElement now."),w(e)},configure:function(e){l=ue(l,e)},initHighlighting:()=>{E(),ee("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){E(),ee("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(t,n){let i=null
try{i=n(e)}catch(e){if(Y("Language definition for '{}' could not be registered.".replace("{}",t)),!a)throw e
Y(e),i=u}i.name||(i.name=t),r[t]=i,i.rawDefinition=n.bind(null,e),i.aliases&&A(i.aliases,{languageName:t})},unregisterLanguage:function(e){delete r[e]
for(const t of Object.keys(i))i[t]===e&&delete i[t]},listLanguages:function(){return Object.keys(r)},getLanguage:D,registerAliases:A,autoDetection:_,inherit:ue,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}(e),o.push(e)}}),e.debugMode=function(){a=!1},e.safeMode=function(){a=!0},e.versionString="11.7.0",e.regex={concat:g,lookahead:p,either:m,optional:h,anyNumberOfTimes:d}
for(const n in I)"object"==typeof I[n]&&t.exports(I[n])
return Object.assign(e,I),e}({})
e.exports=ce,ce.HighlightJS=ce,ce.default=ce},1367:e=>{const t=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],r=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],n=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],o=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse()
e.exports=function(e){const a=e.regex,s=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}))(e),u=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[s.BLOCK_COMMENT,{begin:/-(webkit|moz|ms|o)-(?=[a-z])/},s.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\.[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},s.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+n.join("|")+")"},{begin:":(:)?("+i.join("|")+")"}]},s.CSS_VARIABLE,{className:"attribute",begin:"\\b("+o.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[s.BLOCK_COMMENT,s.HEXCOLOR,s.IMPORTANT,s.CSS_NUMBER_MODE,...u,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...u,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},s.FUNCTION_DISPATCH]},{begin:a.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:/@-?\w[\w]*(-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:"and or not only",attribute:r.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...u,s.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+t.join("|")+")\\b"}]}}},365:e=>{e.exports=function(e){const t=e.regex
return{name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,match:t.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)},{className:"comment",variants:[{begin:t.either(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,end:/$/}]}}},370:e=>{e.exports=function(e){const t=e.regex,r={$pattern:/[\w.\/]+/,built_in:["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},n=/\[\]|\[[^\]]+\]/,i=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,o=t.either(/""|"[^"]+"/,/''|'[^']+'/,n,i),a=t.concat(t.optional(/\.|\.\/|\//),o,t.anyNumberOfTimes(t.concat(/(\.|\/)/,o))),s=t.concat("(",n,"|",i,")(?==)"),u={begin:a},l=e.inherit(u,{keywords:{$pattern:/[\w.\/]+/,literal:["true","false","undefined","null"]}}),c={begin:/\(/,end:/\)/},f={className:"attr",begin:s,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,l,c]}}},p={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},f,l,c],returnEnd:!0},d=e.inherit(u,{className:"name",keywords:r,starts:e.inherit(p,{end:/\)/})})
c.contains=[d]
const h=e.inherit(u,{keywords:r,className:"name",starts:e.inherit(p,{end:/\}\}/})}),g=e.inherit(u,{keywords:r,className:"name"}),m=e.inherit(u,{className:"name",keywords:r,starts:e.inherit(p,{end:/\}\}/})})
return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[h],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[g]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[h]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[g]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[m]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[m]}]}}},979:e=>{const t="[A-Za-z$_][0-9A-Za-z$_]*",r=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],n=["true","false","null","undefined","NaN","Infinity"],i=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],o=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],a=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],s=["arguments","this","super","console","window","document","localStorage","module","global"],u=[].concat(a,i,o)
e.exports=function(e){const l=e.regex,c=t,f={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{const r=e[0].length+e.index,n=e.input[r]
if("<"===n||","===n)return void t.ignoreMatch()
let i
">"===n&&(((e,t)=>{let{after:r}=t
const n="</"+e[0].slice(1)
return-1!==e.input.indexOf(n,r)})(e,{after:r})||t.ignoreMatch())
const o=e.input.substring(r);((i=o.match(/^\s*=/))||(i=o.match(/^\s+extends\s+/))&&0===i.index)&&t.ignoreMatch()}},p={$pattern:t,keyword:r,literal:n,built_in:u,"variable.language":s},d="[0-9](_?[0-9])*",h=`\\.(${d})`,g="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${g})((${h})|\\.)?|(${h}))[eE][+-]?(${d})\\b`},{begin:`\\b(${g})\\b((${h})\\b|\\.)?|(${h})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},v={className:"subst",begin:"\\$\\{",end:"\\}",keywords:p,contains:[]},y={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,v],subLanguage:"xml"}},b={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,v],subLanguage:"css"}},w={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,v]},x={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},E=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,b,w,{match:/\$\d+/},m]
v.contains=E.concat({begin:/\{/,end:/\}/,keywords:p,contains:["self"].concat(E)})
const D=[].concat(x,v.contains),A=D.concat([{begin:/\(/,end:/\)/,keywords:p,contains:["self"].concat(D)}]),_={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:p,contains:A},k={variants:[{match:[/class/,/\s+/,c,/\s+/,/extends/,/\s+/,l.concat(c,"(",l.concat(/\./,c),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,c],scope:{1:"keyword",3:"title.class"}}]},C={relevance:0,match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...i,...o]}},T={variants:[{match:[/function/,/\s+/,c,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[_],illegal:/%/},S={match:l.concat(/\b/,(N=[...a,"super","import"],l.concat("(?!",N.join("|"),")")),c,l.lookahead(/\(/)),className:"title.function",relevance:0}
var N
const O={begin:l.concat(/\./,l.lookahead(l.concat(c,/(?![0-9A-Za-z$_(])/))),end:c,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},L={match:[/get|set/,/\s+/,c,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},_]},F="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",q={match:[/const|var|let/,/\s+/,c,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(F)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[_]}
return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:p,exports:{PARAMS_CONTAINS:A,CLASS_REFERENCE:C},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,b,w,x,{match:/\$\d+/},m,C,{className:"attr",begin:c+l.lookahead(":"),relevance:0},q,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[x,e.REGEXP_MODE,{className:"function",begin:F,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:p,contains:A}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:f.begin,"on:begin":f.isTrulyOpeningTag,end:f.end}],subLanguage:"xml",contains:[{begin:f.begin,end:f.end,skip:!0,contains:["self"]}]}]},T,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[_,e.inherit(e.TITLE_MODE,{begin:c,className:"title.function"})]},{match:/\.\.\./,relevance:0},O,{match:"\\$"+c,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[_]},S,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},k,L,{match:/\$[(.]/}]}}},7366:e=>{e.exports=function(e){const t=["true","false","null"],r={scope:"literal",beginKeywords:t.join(" ")}
return{name:"JSON",keywords:{literal:t},contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},e.QUOTE_STRING_MODE,r,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}},8591:e=>{e.exports=function(e){return{name:"Shell Session",aliases:["console","shellsession"],contains:[{className:"meta.prompt",begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}}},636:e=>{const t="[A-Za-z$_][0-9A-Za-z$_]*",r=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],n=["true","false","null","undefined","NaN","Infinity"],i=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],o=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],a=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],s=["arguments","this","super","console","window","document","localStorage","module","global"],u=[].concat(a,i,o)
function l(e){const l=e.regex,c=t,f={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{const r=e[0].length+e.index,n=e.input[r]
if("<"===n||","===n)return void t.ignoreMatch()
let i
">"===n&&(((e,t)=>{let{after:r}=t
const n="</"+e[0].slice(1)
return-1!==e.input.indexOf(n,r)})(e,{after:r})||t.ignoreMatch())
const o=e.input.substring(r);((i=o.match(/^\s*=/))||(i=o.match(/^\s+extends\s+/))&&0===i.index)&&t.ignoreMatch()}},p={$pattern:t,keyword:r,literal:n,built_in:u,"variable.language":s},d="[0-9](_?[0-9])*",h=`\\.(${d})`,g="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${g})((${h})|\\.)?|(${h}))[eE][+-]?(${d})\\b`},{begin:`\\b(${g})\\b((${h})\\b|\\.)?|(${h})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},v={className:"subst",begin:"\\$\\{",end:"\\}",keywords:p,contains:[]},y={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,v],subLanguage:"xml"}},b={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,v],subLanguage:"css"}},w={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,v]},x={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},E=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,b,w,{match:/\$\d+/},m]
v.contains=E.concat({begin:/\{/,end:/\}/,keywords:p,contains:["self"].concat(E)})
const D=[].concat(x,v.contains),A=D.concat([{begin:/\(/,end:/\)/,keywords:p,contains:["self"].concat(D)}]),_={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:p,contains:A},k={variants:[{match:[/class/,/\s+/,c,/\s+/,/extends/,/\s+/,l.concat(c,"(",l.concat(/\./,c),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,c],scope:{1:"keyword",3:"title.class"}}]},C={relevance:0,match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...i,...o]}},T={variants:[{match:[/function/,/\s+/,c,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[_],illegal:/%/},S={match:l.concat(/\b/,(N=[...a,"super","import"],l.concat("(?!",N.join("|"),")")),c,l.lookahead(/\(/)),className:"title.function",relevance:0}
var N
const O={begin:l.concat(/\./,l.lookahead(l.concat(c,/(?![0-9A-Za-z$_(])/))),end:c,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},L={match:[/get|set/,/\s+/,c,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},_]},F="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",q={match:[/const|var|let/,/\s+/,c,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(F)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[_]}
return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:p,exports:{PARAMS_CONTAINS:A,CLASS_REFERENCE:C},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,b,w,x,{match:/\$\d+/},m,C,{className:"attr",begin:c+l.lookahead(":"),relevance:0},q,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[x,e.REGEXP_MODE,{className:"function",begin:F,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:p,contains:A}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:f.begin,"on:begin":f.isTrulyOpeningTag,end:f.end}],subLanguage:"xml",contains:[{begin:f.begin,end:f.end,skip:!0,contains:["self"]}]}]},T,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[_,e.inherit(e.TITLE_MODE,{begin:c,className:"title.function"})]},{match:/\.\.\./,relevance:0},O,{match:"\\$"+c,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[_]},S,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},k,L,{match:/\$[(.]/}]}}e.exports=function(e){const i=l(e),o=t,a=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],c={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[i.exports.CLASS_REFERENCE]},f={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:a},contains:[i.exports.CLASS_REFERENCE]},p={$pattern:t,keyword:r.concat(["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"]),literal:n,built_in:u.concat(a),"variable.language":s},d={className:"meta",begin:"@"+o},h=(e,t,r)=>{const n=e.contains.findIndex((e=>e.label===t))
if(-1===n)throw new Error("can not find mode to replace")
e.contains.splice(n,1,r)}
return Object.assign(i.keywords,p),i.exports.PARAMS_CONTAINS.push(d),i.contains=i.contains.concat([d,c,f]),h(i,"shebang",e.SHEBANG()),h(i,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),i.contains.find((e=>"func.def"===e.label)).relevance=0,Object.assign(i,{name:"TypeScript",aliases:["ts","tsx"]}),i}},7181:e=>{e.exports=function(e){const t=e.regex,r=t.concat(/[\p{L}_]/u,t.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),n={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},i={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=e.inherit(i,{begin:/\(/,end:/\)/}),a=e.inherit(e.APOS_STRING_MODE,{className:"string"}),s=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),u={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[\p{L}0-9._:-]+/u,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[n]},{begin:/'/,end:/'/,contains:[n]},{begin:/[^\s"'=<>`]+/}]}]}]}
return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[i,s,a,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[i,o,s,a]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},n,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[s]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[u],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[u],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t.concat(/</,t.lookahead(t.concat(r,t.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:u}]},{className:"tag",begin:t.concat(/<\//,t.lookahead(t.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}},970:(e,t)=>{"use strict"
function r(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,"symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key))?i:String(i),n)}var i}function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}function i(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(r)return(r=r.call(e)).next.bind(r)
if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return i(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0
return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}t.defaults={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}
var s=/[&<>"']/,u=new RegExp(s.source,"g"),l=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,c=new RegExp(l.source,"g"),f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p=function(e){return f[e]}
function d(e,t){if(t){if(s.test(e))return e.replace(u,p)}else if(l.test(e))return e.replace(c,p)
return e}var h=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
function g(e){return e.replace(h,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var m=/(^|[^\[])\^/g
function v(e,t){e="string"==typeof e?e:e.source,t=t||""
var r={replace:function(t,n){return n=(n=n.source||n).replace(m,"$1"),e=e.replace(t,n),r},getRegex:function(){return new RegExp(e,t)}}
return r}var y=/[^\w:]/g,b=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
function w(e,t,r){if(e){var n
try{n=decodeURIComponent(g(r)).replace(y,"").toLowerCase()}catch(e){return null}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return null}t&&!b.test(r)&&(r=function(e,t){x[" "+e]||(E.test(e)?x[" "+e]=e+"/":x[" "+e]=C(e,"/",!0))
var r=-1===(e=x[" "+e]).indexOf(":")
return"//"===t.substring(0,2)?r?t:e.replace(D,"$1")+t:"/"===t.charAt(0)?r?t:e.replace(A,"$1")+t:e+t}(t,r))
try{r=encodeURI(r).replace(/%25/g,"%")}catch(e){return null}return r}var x={},E=/^[^:]+:\/*[^/]*$/,D=/^([^:]+:)[\s\S]*$/,A=/^([^:]+:\/*[^/]*)[\s\S]*$/,_={exec:function(){}}
function k(e,t){var r=e.replace(/\|/g,(function(e,t,r){for(var n=!1,i=t;--i>=0&&"\\"===r[i];)n=!n
return n?"|":" |"})).split(/ \|/),n=0
if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>t)r.splice(t)
else for(;r.length<t;)r.push("")
for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|")
return r}function C(e,t,r){var n=e.length
if(0===n)return""
for(var i=0;i<n;){var o=e.charAt(n-i-1)
if(o!==t||r){if(o===t||!r)break
i++}else i++}return e.slice(0,n-i)}function T(e,t){if(t<1)return""
for(var r="";t>1;)1&t&&(r+=e),t>>=1,e+=e
return r+e}function S(e,t,r,n){var i=t.href,o=t.title?d(t.title):null,a=e[1].replace(/\\([\[\]])/g,"$1")
if("!"!==e[0].charAt(0)){n.state.inLink=!0
var s={type:"link",raw:r,href:i,title:o,text:a,tokens:n.inlineTokens(a)}
return n.state.inLink=!1,s}return{type:"image",raw:r,href:i,title:o,text:d(a)}}var N=function(){function e(e){this.options=e||t.defaults}var r=e.prototype
return r.space=function(e){var t=this.rules.block.newline.exec(e)
if(t&&t[0].length>0)return{type:"space",raw:t[0]}},r.code=function(e){var t=this.rules.block.code.exec(e)
if(t){var r=t[0].replace(/^ {1,4}/gm,"")
return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:C(r,"\n")}}},r.fences=function(e){var t=this.rules.block.fences.exec(e)
if(t){var r=t[0],n=function(e,t){var r=e.match(/^(\s+)(?:```)/)
if(null===r)return t
var n=r[1]
return t.split("\n").map((function(e){var t=e.match(/^\s+/)
return null===t?e:t[0].length>=n.length?e.slice(n.length):e})).join("\n")}(r,t[3]||"")
return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:n}}},r.heading=function(e){var t=this.rules.block.heading.exec(e)
if(t){var r=t[2].trim()
if(/#$/.test(r)){var n=C(r,"#")
this.options.pedantic?r=n.trim():n&&!/ $/.test(n)||(r=n.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}},r.hr=function(e){var t=this.rules.block.hr.exec(e)
if(t)return{type:"hr",raw:t[0]}},r.blockquote=function(e){var t=this.rules.block.blockquote.exec(e)
if(t){var r=t[0].replace(/^ *>[ \t]?/gm,""),n=this.lexer.state.top
this.lexer.state.top=!0
var i=this.lexer.blockTokens(r)
return this.lexer.state.top=n,{type:"blockquote",raw:t[0],tokens:i,text:r}}},r.list=function(e){var t=this.rules.block.list.exec(e)
if(t){var r,n,i,o,a,s,u,l,c,f,p,d,h=t[1].trim(),g=h.length>1,m={type:"list",raw:"",ordered:g,start:g?+h.slice(0,-1):"",loose:!1,items:[]}
h=g?"\\d{1,9}\\"+h.slice(-1):"\\"+h,this.options.pedantic&&(h=g?h:"[*+-]")
for(var v=new RegExp("^( {0,3}"+h+")((?:[\t ][^\\n]*)?(?:\\n|$))");e&&(d=!1,t=v.exec(e))&&!this.rules.block.hr.test(e);){if(r=t[0],e=e.substring(r.length),l=t[2].split("\n",1)[0].replace(/^\t+/,(function(e){return" ".repeat(3*e.length)})),c=e.split("\n",1)[0],this.options.pedantic?(o=2,p=l.trimLeft()):(o=(o=t[2].search(/[^ ]/))>4?1:o,p=l.slice(o),o+=t[1].length),s=!1,!l&&/^ *$/.test(c)&&(r+=c+"\n",e=e.substring(c.length+1),d=!0),!d)for(var y=new RegExp("^ {0,"+Math.min(3,o-1)+"}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))"),b=new RegExp("^ {0,"+Math.min(3,o-1)+"}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"),w=new RegExp("^ {0,"+Math.min(3,o-1)+"}(?:```|~~~)"),x=new RegExp("^ {0,"+Math.min(3,o-1)+"}#");e&&(c=f=e.split("\n",1)[0],this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!w.test(c))&&!x.test(c)&&!y.test(c)&&!b.test(e);){if(c.search(/[^ ]/)>=o||!c.trim())p+="\n"+c.slice(o)
else{if(s)break
if(l.search(/[^ ]/)>=4)break
if(w.test(l))break
if(x.test(l))break
if(b.test(l))break
p+="\n"+c}s||c.trim()||(s=!0),r+=f+"\n",e=e.substring(f.length+1),l=c.slice(o)}m.loose||(u?m.loose=!0:/\n *\n *$/.test(r)&&(u=!0)),this.options.gfm&&(n=/^\[[ xX]\] /.exec(p))&&(i="[ ] "!==n[0],p=p.replace(/^\[[ xX]\] +/,"")),m.items.push({type:"list_item",raw:r,task:!!n,checked:i,loose:!1,text:p}),m.raw+=r}m.items[m.items.length-1].raw=r.trimRight(),m.items[m.items.length-1].text=p.trimRight(),m.raw=m.raw.trimRight()
var E=m.items.length
for(a=0;a<E;a++)if(this.lexer.state.top=!1,m.items[a].tokens=this.lexer.blockTokens(m.items[a].text,[]),!m.loose){var D=m.items[a].tokens.filter((function(e){return"space"===e.type})),A=D.length>0&&D.some((function(e){return/\n.*\n/.test(e.raw)}))
m.loose=A}if(m.loose)for(a=0;a<E;a++)m.items[a].loose=!0
return m}},r.html=function(e){var t=this.rules.block.html.exec(e)
if(t){var r={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]}
if(this.options.sanitize){var n=this.options.sanitizer?this.options.sanitizer(t[0]):d(t[0])
r.type="paragraph",r.text=n,r.tokens=this.lexer.inline(n)}return r}},r.def=function(e){var t=this.rules.block.def.exec(e)
if(t){var r=t[1].toLowerCase().replace(/\s+/g," "),n=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3]
return{type:"def",tag:r,raw:t[0],href:n,title:i}}},r.table=function(e){var t=this.rules.block.table.exec(e)
if(t){var r={type:"table",header:k(t[1]).map((function(e){return{text:e}})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]}
if(r.header.length===r.align.length){r.raw=t[0]
var n,i,o,a,s=r.align.length
for(n=0;n<s;n++)/^ *-+: *$/.test(r.align[n])?r.align[n]="right":/^ *:-+: *$/.test(r.align[n])?r.align[n]="center":/^ *:-+ *$/.test(r.align[n])?r.align[n]="left":r.align[n]=null
for(s=r.rows.length,n=0;n<s;n++)r.rows[n]=k(r.rows[n],r.header.length).map((function(e){return{text:e}}))
for(s=r.header.length,i=0;i<s;i++)r.header[i].tokens=this.lexer.inline(r.header[i].text)
for(s=r.rows.length,i=0;i<s;i++)for(a=r.rows[i],o=0;o<a.length;o++)a[o].tokens=this.lexer.inline(a[o].text)
return r}}},r.lheading=function(e){var t=this.rules.block.lheading.exec(e)
if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}},r.paragraph=function(e){var t=this.rules.block.paragraph.exec(e)
if(t){var r="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]
return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}},r.text=function(e){var t=this.rules.block.text.exec(e)
if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}},r.escape=function(e){var t=this.rules.inline.escape.exec(e)
if(t)return{type:"escape",raw:t[0],text:d(t[1])}},r.tag=function(e){var t=this.rules.inline.tag.exec(e)
if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):d(t[0]):t[0]}},r.link=function(e){var t=this.rules.inline.link.exec(e)
if(t){var r=t[2].trim()
if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return
var n=C(r.slice(0,-1),"\\")
if((r.length-n.length)%2==0)return}else{var i=function(e,t){if(-1===e.indexOf(t[1]))return-1
for(var r=e.length,n=0,i=0;i<r;i++)if("\\"===e[i])i++
else if(e[i]===t[0])n++
else if(e[i]===t[1]&&--n<0)return i
return-1}(t[2],"()")
if(i>-1){var o=(0===t[0].indexOf("!")?5:4)+t[1].length+i
t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,o).trim(),t[3]=""}}var a=t[2],s=""
if(this.options.pedantic){var u=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a)
u&&(a=u[1],s=u[3])}else s=t[3]?t[3].slice(1,-1):""
return a=a.trim(),/^</.test(a)&&(a=this.options.pedantic&&!/>$/.test(r)?a.slice(1):a.slice(1,-1)),S(t,{href:a?a.replace(this.rules.inline._escapes,"$1"):a,title:s?s.replace(this.rules.inline._escapes,"$1"):s},t[0],this.lexer)}},r.reflink=function(e,t){var r
if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){var n=(r[2]||r[1]).replace(/\s+/g," ")
if(!(n=t[n.toLowerCase()])){var i=r[0].charAt(0)
return{type:"text",raw:i,text:i}}return S(r,n,r[0],this.lexer)}},r.emStrong=function(e,t,r){void 0===r&&(r="")
var n=this.rules.inline.emStrong.lDelim.exec(e)
if(n&&(!n[3]||!r.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))){var i=n[1]||n[2]||""
if(!i||i&&(""===r||this.rules.inline.punctuation.exec(r))){var o,a,s=n[0].length-1,u=s,l=0,c="*"===n[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd
for(c.lastIndex=0,t=t.slice(-1*e.length+s);null!=(n=c.exec(t));)if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6])if(a=o.length,n[3]||n[4])u+=a
else if(!((n[5]||n[6])&&s%3)||(s+a)%3){if(!((u-=a)>0)){a=Math.min(a,a+u+l)
var f=e.slice(0,s+n.index+(n[0].length-o.length)+a)
if(Math.min(s,a)%2){var p=f.slice(1,-1)
return{type:"em",raw:f,text:p,tokens:this.lexer.inlineTokens(p)}}var d=f.slice(2,-2)
return{type:"strong",raw:f,text:d,tokens:this.lexer.inlineTokens(d)}}}else l+=a}}},r.codespan=function(e){var t=this.rules.inline.code.exec(e)
if(t){var r=t[2].replace(/\n/g," "),n=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r)
return n&&i&&(r=r.substring(1,r.length-1)),r=d(r,!0),{type:"codespan",raw:t[0],text:r}}},r.br=function(e){var t=this.rules.inline.br.exec(e)
if(t)return{type:"br",raw:t[0]}},r.del=function(e){var t=this.rules.inline.del.exec(e)
if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}},r.autolink=function(e,t){var r,n,i=this.rules.inline.autolink.exec(e)
if(i)return n="@"===i[2]?"mailto:"+(r=d(this.options.mangle?t(i[1]):i[1])):r=d(i[1]),{type:"link",raw:i[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}},r.url=function(e,t){var r
if(r=this.rules.inline.url.exec(e)){var n,i
if("@"===r[2])i="mailto:"+(n=d(this.options.mangle?t(r[0]):r[0]))
else{var o
do{o=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0]}while(o!==r[0])
n=d(r[0]),i="www."===r[1]?"http://"+r[0]:r[0]}return{type:"link",raw:r[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}},r.inlineText=function(e,t){var r,n=this.rules.inline.text.exec(e)
if(n)return r=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):d(n[0]):n[0]:d(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:r}},e}(),O={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:_,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/}
O.def=v(O.def).replace("label",O._label).replace("title",O._title).getRegex(),O.bullet=/(?:[*+-]|\d{1,9}[.)])/,O.listItemStart=v(/^( *)(bull) */).replace("bull",O.bullet).getRegex(),O.list=v(O.list).replace(/bull/g,O.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+O.def.source+")").getRegex(),O._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",O._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,O.html=v(O.html,"i").replace("comment",O._comment).replace("tag",O._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),O.paragraph=v(O._paragraph).replace("hr",O.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",O._tag).getRegex(),O.blockquote=v(O.blockquote).replace("paragraph",O.paragraph).getRegex(),O.normal=n({},O),O.gfm=n({},O.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),O.gfm.table=v(O.gfm.table).replace("hr",O.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",O._tag).getRegex(),O.gfm.paragraph=v(O._paragraph).replace("hr",O.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",O.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",O._tag).getRegex(),O.pedantic=n({},O.normal,{html:v("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",O._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:_,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:v(O.normal._paragraph).replace("hr",O.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",O.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()})
var L={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:_,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:_,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/}
function F(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function q(e){var t,r,n="",i=e.length
for(t=0;t<i;t++)r=e.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),n+="&#"+r+";"
return n}L._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",L.punctuation=v(L.punctuation).replace(/punctuation/g,L._punctuation).getRegex(),L.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,L.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,L._comment=v(O._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),L.emStrong.lDelim=v(L.emStrong.lDelim).replace(/punct/g,L._punctuation).getRegex(),L.emStrong.rDelimAst=v(L.emStrong.rDelimAst,"g").replace(/punct/g,L._punctuation).getRegex(),L.emStrong.rDelimUnd=v(L.emStrong.rDelimUnd,"g").replace(/punct/g,L._punctuation).getRegex(),L._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,L._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,L._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,L.autolink=v(L.autolink).replace("scheme",L._scheme).replace("email",L._email).getRegex(),L._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,L.tag=v(L.tag).replace("comment",L._comment).replace("attribute",L._attribute).getRegex(),L._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,L._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,L._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,L.link=v(L.link).replace("label",L._label).replace("href",L._href).replace("title",L._title).getRegex(),L.reflink=v(L.reflink).replace("label",L._label).replace("ref",O._label).getRegex(),L.nolink=v(L.nolink).replace("ref",O._label).getRegex(),L.reflinkSearch=v(L.reflinkSearch,"g").replace("reflink",L.reflink).replace("nolink",L.nolink).getRegex(),L.normal=n({},L),L.pedantic=n({},L.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:v(/^!?\[(label)\]\((.*?)\)/).replace("label",L._label).getRegex(),reflink:v(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",L._label).getRegex()}),L.gfm=n({},L.normal,{escape:v(L.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),L.gfm.url=v(L.gfm.url,"i").replace("email",L.gfm._extended_email).getRegex(),L.breaks=n({},L.gfm,{br:v(L.br).replace("{2,}","*").getRegex(),text:v(L.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()})
var P=function(){function e(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||t.defaults,this.options.tokenizer=this.options.tokenizer||new N,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0}
var r={block:O.normal,inline:L.normal}
this.options.pedantic?(r.block=O.pedantic,r.inline=L.pedantic):this.options.gfm&&(r.block=O.gfm,this.options.breaks?r.inline=L.breaks:r.inline=L.gfm),this.tokenizer.rules=r}e.lex=function(t,r){return new e(r).lex(t)},e.lexInline=function(t,r){return new e(r).inlineTokens(t)}
var n,i,o=e.prototype
return o.lex=function(e){var t
for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens)
return this.tokens},o.blockTokens=function(e,t){var r,n,i,o,a=this
for(void 0===t&&(t=[]),e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,(function(e,t,r){return t+"    ".repeat(r.length)}));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((function(n){return!!(r=n.call({lexer:a},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)}))))if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),1===r.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(r)
else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),!(n=t[t.length-1])||"paragraph"!==n.type&&"text"!==n.type?t.push(r):(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text)
else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.list(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.def(e))e=e.substring(r.raw.length),!(n=t[t.length-1])||"paragraph"!==n.type&&"text"!==n.type?this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}):(n.raw+="\n"+r.raw,n.text+="\n"+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text)
else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r)
else if(i=e,this.options.extensions&&this.options.extensions.startBlock&&function(){var t=1/0,r=e.slice(1),n=void 0
a.options.extensions.startBlock.forEach((function(e){"number"==typeof(n=e.call({lexer:this},r))&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(i=e.substring(0,t+1))}(),this.state.top&&(r=this.tokenizer.paragraph(i)))n=t[t.length-1],o&&"paragraph"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r),o=i.length!==e.length,e=e.substring(r.raw.length)
else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),(n=t[t.length-1])&&"text"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r)
else if(e){var s="Infinite loop on byte: "+e.charCodeAt(0)
if(this.options.silent){console.error(s)
break}throw new Error(s)}return this.state.top=!0,t},o.inline=function(e,t){return void 0===t&&(t=[]),this.inlineQueue.push({src:e,tokens:t}),t},o.inlineTokens=function(e,t){var r,n,i,o=this
void 0===t&&(t=[])
var a,s,u,l=e
if(this.tokens.links){var c=Object.keys(this.tokens.links)
if(c.length>0)for(;null!=(a=this.tokenizer.rules.inline.reflinkSearch.exec(l));)c.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,a.index)+"["+T("a",a[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(a=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,a.index)+"["+T("a",a[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)
for(;null!=(a=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,a.index+a[0].length-2)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--
for(;e;)if(s||(u=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((function(n){return!!(r=n.call({lexer:o},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)}))))if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.tag(e))e=e.substring(r.raw.length),(n=t[t.length-1])&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r)
else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),(n=t[t.length-1])&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r)
else if(r=this.tokenizer.emStrong(e,l,u))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.autolink(e,q))e=e.substring(r.raw.length),t.push(r)
else if(this.state.inLink||!(r=this.tokenizer.url(e,q))){if(i=e,this.options.extensions&&this.options.extensions.startInline&&function(){var t=1/0,r=e.slice(1),n=void 0
o.options.extensions.startInline.forEach((function(e){"number"==typeof(n=e.call({lexer:this},r))&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(i=e.substring(0,t+1))}(),r=this.tokenizer.inlineText(i,F))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(u=r.raw.slice(-1)),s=!0,(n=t[t.length-1])&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r)
else if(e){var f="Infinite loop on byte: "+e.charCodeAt(0)
if(this.options.silent){console.error(f)
break}throw new Error(f)}}else e=e.substring(r.raw.length),t.push(r)
return t},n=e,(i=[{key:"rules",get:function(){return{block:O,inline:L}}}])&&r(n,i),Object.defineProperty(n,"prototype",{writable:!1}),e}(),R=function(){function e(e){this.options=e||t.defaults}var r=e.prototype
return r.code=function(e,t,r){var n=(t||"").match(/\S*/)[0]
if(this.options.highlight){var i=this.options.highlight(e,n)
null!=i&&i!==e&&(r=!0,e=i)}return e=e.replace(/\n$/,"")+"\n",n?'<pre><code class="'+this.options.langPrefix+d(n)+'">'+(r?e:d(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:d(e,!0))+"</code></pre>\n"},r.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},r.html=function(e){return e},r.heading=function(e,t,r,n){return this.options.headerIds?"<h"+t+' id="'+(this.options.headerPrefix+n.slug(r))+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},r.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},r.list=function(e,t,r){var n=t?"ol":"ul"
return"<"+n+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+n+">\n"},r.listitem=function(e){return"<li>"+e+"</li>\n"},r.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},r.paragraph=function(e){return"<p>"+e+"</p>\n"},r.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},r.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},r.tablecell=function(e,t){var r=t.header?"th":"td"
return(t.align?"<"+r+' align="'+t.align+'">':"<"+r+">")+e+"</"+r+">\n"},r.strong=function(e){return"<strong>"+e+"</strong>"},r.em=function(e){return"<em>"+e+"</em>"},r.codespan=function(e){return"<code>"+e+"</code>"},r.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.del=function(e){return"<del>"+e+"</del>"},r.link=function(e,t,r){if(null===(e=w(this.options.sanitize,this.options.baseUrl,e)))return r
var n='<a href="'+e+'"'
return t&&(n+=' title="'+t+'"'),n+">"+r+"</a>"},r.image=function(e,t,r){if(null===(e=w(this.options.sanitize,this.options.baseUrl,e)))return r
var n='<img src="'+e+'" alt="'+r+'"'
return t&&(n+=' title="'+t+'"'),n+(this.options.xhtml?"/>":">")},r.text=function(e){return e},e}(),B=function(){function e(){}var t=e.prototype
return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,r){return""+r},t.image=function(e,t,r){return""+r},t.br=function(){return""},e}(),j=function(){function e(){this.seen={}}var t=e.prototype
return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var r=e,n=0
if(this.seen.hasOwnProperty(r)){n=this.seen[e]
do{r=e+"-"+ ++n}while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=n,this.seen[r]=0),r},t.slug=function(e,t){void 0===t&&(t={})
var r=this.serialize(e)
return this.getNextSafeSlug(r,t.dryrun)},e}(),I=function(){function e(e){this.options=e||t.defaults,this.options.renderer=this.options.renderer||new R,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new B,this.slugger=new j}e.parse=function(t,r){return new e(r).parse(t)},e.parseInline=function(t,r){return new e(r).parseInline(t)}
var r=e.prototype
return r.parse=function(e,t){void 0===t&&(t=!0)
var r,n,i,o,a,s,u,l,c,f,p,d,h,m,v,y,b,w,x,E="",D=e.length
for(r=0;r<D;r++)if(f=e[r],!(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type])||!1===(x=this.options.extensions.renderers[f.type].call({parser:this},f))&&["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type))switch(f.type){case"space":continue
case"hr":E+=this.renderer.hr()
continue
case"heading":E+=this.renderer.heading(this.parseInline(f.tokens),f.depth,g(this.parseInline(f.tokens,this.textRenderer)),this.slugger)
continue
case"code":E+=this.renderer.code(f.text,f.lang,f.escaped)
continue
case"table":for(l="",u="",o=f.header.length,n=0;n<o;n++)u+=this.renderer.tablecell(this.parseInline(f.header[n].tokens),{header:!0,align:f.align[n]})
for(l+=this.renderer.tablerow(u),c="",o=f.rows.length,n=0;n<o;n++){for(u="",a=(s=f.rows[n]).length,i=0;i<a;i++)u+=this.renderer.tablecell(this.parseInline(s[i].tokens),{header:!1,align:f.align[i]})
c+=this.renderer.tablerow(u)}E+=this.renderer.table(l,c)
continue
case"blockquote":c=this.parse(f.tokens),E+=this.renderer.blockquote(c)
continue
case"list":for(p=f.ordered,d=f.start,h=f.loose,o=f.items.length,c="",n=0;n<o;n++)y=(v=f.items[n]).checked,b=v.task,m="",v.task&&(w=this.renderer.checkbox(y),h?v.tokens.length>0&&"paragraph"===v.tokens[0].type?(v.tokens[0].text=w+" "+v.tokens[0].text,v.tokens[0].tokens&&v.tokens[0].tokens.length>0&&"text"===v.tokens[0].tokens[0].type&&(v.tokens[0].tokens[0].text=w+" "+v.tokens[0].tokens[0].text)):v.tokens.unshift({type:"text",text:w}):m+=w),m+=this.parse(v.tokens,h),c+=this.renderer.listitem(m,b,y)
E+=this.renderer.list(c,p,d)
continue
case"html":E+=this.renderer.html(f.text)
continue
case"paragraph":E+=this.renderer.paragraph(this.parseInline(f.tokens))
continue
case"text":for(c=f.tokens?this.parseInline(f.tokens):f.text;r+1<D&&"text"===e[r+1].type;)c+="\n"+((f=e[++r]).tokens?this.parseInline(f.tokens):f.text)
E+=t?this.renderer.paragraph(c):c
continue
default:var A='Token with "'+f.type+'" type was not found.'
if(this.options.silent)return void console.error(A)
throw new Error(A)}else E+=x||""
return E},r.parseInline=function(e,t){t=t||this.renderer
var r,n,i,o="",a=e.length
for(r=0;r<a;r++)if(n=e[r],!(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[n.type])||!1===(i=this.options.extensions.renderers[n.type].call({parser:this},n))&&["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type))switch(n.type){case"escape":case"text":o+=t.text(n.text)
break
case"html":o+=t.html(n.text)
break
case"link":o+=t.link(n.href,n.title,this.parseInline(n.tokens,t))
break
case"image":o+=t.image(n.href,n.title,n.text)
break
case"strong":o+=t.strong(this.parseInline(n.tokens,t))
break
case"em":o+=t.em(this.parseInline(n.tokens,t))
break
case"codespan":o+=t.codespan(n.text)
break
case"br":o+=t.br()
break
case"del":o+=t.del(this.parseInline(n.tokens,t))
break
default:var s='Token with "'+n.type+'" type was not found.'
if(this.options.silent)return void console.error(s)
throw new Error(s)}else o+=i||""
return o},e}(),M=function(){function e(e){this.options=e||t.defaults}var r=e.prototype
return r.preprocess=function(e){return e},r.postprocess=function(e){return e},e}()
function U(e,t){return function(r,i,o){"function"==typeof i&&(o=i,i=null)
var a=n({},i),s=function(e,t,r){return function(n){if(n.message+="\nPlease report this to https://github.com/markedjs/marked.",e){var i="<p>An error occurred:</p><pre>"+d(n.message+"",!0)+"</pre>"
return t?Promise.resolve(i):r?void r(null,i):i}if(t)return Promise.reject(n)
if(!r)throw n
r(n)}}((i=n({},H.defaults,a)).silent,i.async,o)
if(null==r)return s(new Error("marked(): input parameter is undefined or null"))
if("string"!=typeof r)return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"))
if(function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}(i),i.hooks&&(i.hooks.options=i),o){var u,l=i.highlight
try{i.hooks&&(r=i.hooks.preprocess(r)),u=e(r,i)}catch(e){return s(e)}var c=function(e){var r
if(!e)try{i.walkTokens&&H.walkTokens(u,i.walkTokens),r=t(u,i),i.hooks&&(r=i.hooks.postprocess(r))}catch(t){e=t}return i.highlight=l,e?s(e):o(null,r)}
if(!l||l.length<3)return c()
if(delete i.highlight,!u.length)return c()
var f=0
return H.walkTokens(u,(function(e){"code"===e.type&&(f++,setTimeout((function(){l(e.text,e.lang,(function(t,r){if(t)return c(t)
null!=r&&r!==e.text&&(e.text=r,e.escaped=!0),0==--f&&c()}))}),0))})),void(0===f&&c())}if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(r):r).then((function(t){return e(t,i)})).then((function(e){return i.walkTokens?Promise.all(H.walkTokens(e,i.walkTokens)).then((function(){return e})):e})).then((function(e){return t(e,i)})).then((function(e){return i.hooks?i.hooks.postprocess(e):e})).catch(s)
try{i.hooks&&(r=i.hooks.preprocess(r))
var p=e(r,i)
i.walkTokens&&H.walkTokens(p,i.walkTokens)
var h=t(p,i)
return i.hooks&&(h=i.hooks.postprocess(h)),h}catch(e){return s(e)}}}function H(e,t,r){return U(P.lex,I.parse)(e,t,r)}M.passThroughHooks=new Set(["preprocess","postprocess"]),H.options=H.setOptions=function(e){var r
return H.defaults=n({},H.defaults,e),r=H.defaults,t.defaults=r,H},H.getDefaults=a,H.defaults=t.defaults,H.use=function(){for(var e=H.defaults.extensions||{renderers:{},childTokens:{}},t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i]
r.forEach((function(t){var r=n({},t)
if(r.async=H.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach((function(t){if(!t.name)throw new Error("extension name required")
if(t.renderer){var r=e.renderers[t.name]
e.renderers[t.name]=r?function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i]
var o=t.renderer.apply(this,n)
return!1===o&&(o=r.apply(this,n)),o}:t.renderer}if(t.tokenizer){if(!t.level||"block"!==t.level&&"inline"!==t.level)throw new Error("extension level must be 'block' or 'inline'")
e[t.level]?e[t.level].unshift(t.tokenizer):e[t.level]=[t.tokenizer],t.start&&("block"===t.level?e.startBlock?e.startBlock.push(t.start):e.startBlock=[t.start]:"inline"===t.level&&(e.startInline?e.startInline.push(t.start):e.startInline=[t.start]))}t.childTokens&&(e.childTokens[t.name]=t.childTokens)})),r.extensions=e),t.renderer&&function(){var e=H.defaults.renderer||new R,n=function(r){var n=e[r]
e[r]=function(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a]
var s=t.renderer[r].apply(e,o)
return!1===s&&(s=n.apply(e,o)),s}}
for(var i in t.renderer)n(i)
r.renderer=e}(),t.tokenizer&&function(){var e=H.defaults.tokenizer||new N,n=function(r){var n=e[r]
e[r]=function(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a]
var s=t.tokenizer[r].apply(e,o)
return!1===s&&(s=n.apply(e,o)),s}}
for(var i in t.tokenizer)n(i)
r.tokenizer=e}(),t.hooks&&function(){var e=H.defaults.hooks||new M,n=function(r){var n=e[r]
M.passThroughHooks.has(r)?e[r]=function(i){if(H.defaults.async)return Promise.resolve(t.hooks[r].call(e,i)).then((function(t){return n.call(e,t)}))
var o=t.hooks[r].call(e,i)
return n.call(e,o)}:e[r]=function(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a]
var s=t.hooks[r].apply(e,o)
return!1===s&&(s=n.apply(e,o)),s}}
for(var i in t.hooks)n(i)
r.hooks=e}(),t.walkTokens){var i=H.defaults.walkTokens
r.walkTokens=function(e){var r=[]
return r.push(t.walkTokens.call(this,e)),i&&(r=r.concat(i.call(this,e))),r}}H.setOptions(r)}))},H.walkTokens=function(e,t){for(var r,n=[],i=function(){var e=r.value
switch(n=n.concat(t.call(H,e)),e.type){case"table":for(var i,a=o(e.header);!(i=a()).done;){var s=i.value
n=n.concat(H.walkTokens(s.tokens,t))}for(var u,l=o(e.rows);!(u=l()).done;)for(var c,f=o(u.value);!(c=f()).done;){var p=c.value
n=n.concat(H.walkTokens(p.tokens,t))}break
case"list":n=n.concat(H.walkTokens(e.items,t))
break
default:H.defaults.extensions&&H.defaults.extensions.childTokens&&H.defaults.extensions.childTokens[e.type]?H.defaults.extensions.childTokens[e.type].forEach((function(r){n=n.concat(H.walkTokens(e[r],t))})):e.tokens&&(n=n.concat(H.walkTokens(e.tokens,t)))}},a=o(e);!(r=a()).done;)i()
return n},H.parseInline=U(P.lexInline,I.parseInline),H.Parser=I,H.parser=I.parse,H.Renderer=R,H.TextRenderer=B,H.Lexer=P,H.lexer=P.lex,H.Tokenizer=N,H.Slugger=j,H.Hooks=M,H.parse=H
var $=H.options,z=H.setOptions,V=H.use,G=H.walkTokens,W=H.parseInline,Q=H,K=I.parse,Z=P.lex
t.Hooks=M,t.Lexer=P,t.Parser=I,t.Renderer=R,t.Slugger=j,t.TextRenderer=B,t.Tokenizer=N,t.getDefaults=a,t.lexer=Z,t.marked=H,t.options=$,t.parse=Q,t.parseInline=W,t.parser=K,t.setOptions=z,t.use=V,t.walkTokens=G}}])