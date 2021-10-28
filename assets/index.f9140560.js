var D=Object.defineProperty,S=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var F=(u,e,t)=>e in u?D(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t,c=(u,e)=>{for(var t in e||(e={}))R.call(e,t)&&F(u,t,e[t]);if(C)for(var t of C(e))U.call(e,t)&&F(u,t,e[t]);return u},h=(u,e)=>S(u,v(e));var E=(u,e,t)=>(F(u,typeof e!="symbol"?e+"":e,t),t);import{l as m,c as M,a as W,u as I,s as i,i as d,j as r,b as w,d as s,F as B,U as j,R as O,P}from"./vendor.71d334c6.js";const G=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}};G();const N=new Map([["\u307E\u3075\u307E\u3075",{category:"UserMatch",description:"\u9AD8\u4F4E\u5DEE\u306E\u3042\u308B\u6B4C\u58F0\u3001\u7E4A\u7D30\u304B\u3064\u5C11\u3005\u96E3\u89E3\u306A\u6B4C\u8A5E\u3001\u72EC\u7279\u306A\u4E16\u754C\u89B3\u306E\u697D\u66F2\u3092\u4F5C\u308B\u3002",username:"uni_mafumafu"}],["\u3053\u308C\u3053\u308C",{category:"UserMatch",description:"\u30CB\u30B3\u30CB\u30B3\u751F\u653E\u9001\u3092\u306F\u3058\u3081\u3001\u591A\u304F\u306E\u5834\u6240\u3067\u6D3B\u52D5\u3057\u3066\u3044\u308B\u914D\u4FE1\u8005\u3002",username:"korekore19"}],["\u308F\u3057\u308F\u3057",{category:"Implicate",cause:"\u3084\u3070\u3044\u30AF\u30EC\u30FC\u30DE\u30FC\u306ESUSURU TV",content:"\u30EF\u30B7\u30EF\u30B7\u3068\u3057\u305F\u98DF\u611F\u306E\u9EBA\u306E\u4E2D\u306B\u306F\u9AEA\u306E\u6BDB\u304C\u5165\u3063\u3066\u304A\u308A\u3001\u3055\u3059\u304C\u306ESUSURU\u3082\u53A8\u623F\u306B\u5165\u3063\u3066\u3044\u3063\u3066\u3057\u307E\u3044\u307E\u3057\u305F\u301C\uFF01",link:"https://twitter.com/susuru_tv/status/1433769424683769858"}],["\u307D\u3053\u307D\u3053",{category:"Implicate",cause:"\u3042\u3041\uFF5E\uFF01\u6C34\u7D20\u306E\u97F3\u30A9\u301C\uFF01\uFF01",content:"\u3053\u306E\u30B9\u30C6\u30A3\u30C3\u30AF\u3092\u304A\u6C34\u306E\u4E2D\u306B\u5165\u308C\u308B\u3060\u3051\u3067\u3001\u307B\u3089\uFF01\uFF8E\uFF9F\uFF7A\uFF6F\u3001\uFF8E\uFF9F\uFF7A\uFF8E\uFF9F\uFF7A\uFF8E\uFF9F\uFF7A\uFF6F\uFF01\u6C34\u7D20\u304C\u51FA\u3066\u304D\u3066\u308B\u306E\u304C\u308F\u304B\u308B\u3067\u3057\u3087\u3046\uFF1F",link:"https://www.nicovideo.jp/watch/sm29003244"}],["\u3057\u308A\u3057\u308A",{category:"Implicate",cause:"\u306E\u306E\u3058 \u30B5\u30E9\u30C0\u304A\u308D\u3057",content:"\u3053\u306E\u5207\u308A\u65B9\u3092\u898B\u3066\u4F55\u304B\u6C17\u306B\u306A\u308A\u307E\u305B\u3093\uFF1F\u601D\u3044\u51FA\u3057\u307E\u3057\u305F\uFF1F\u305D\u3046\uFF01\u6C96\u7E04\u6599\u7406\u3067\u6709\u540D\u306E\u3001\u306B\u3093\u3058\u3093\u3057\u308A\u3057\u308A",link:"https://www.nicovideo.jp/watch/sm22193155"}]]),f={getRandomHiragana(){const u="\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3093\u304C\u304E\u3050\u3052\u3054\u3056\u3058\u305A\u305C\u305E\u3060\u3058\u3065\u3067\u3069\u3070\u3073\u3076\u3079\u307C\u3071\u3074\u3077\u307A\u307D";return this.pickRandomCharacter(u)},getRandomHiraganaWithSmallCharacter(){const u="\u304D\u3057\u3061\u306B\u3072\u307F\u308A\u304E\u3058\u3062\u3073\u3074",e="\u3083\u3085\u3087";return`${this.pickRandomCharacter(u)}${this.pickRandomCharacter(e)}`},pickRandomCharacter(u){return u[Math.floor(Math.random()*u.length)]}};class y{constructor(){E(this,"result","")}generate(e,t){const n={hiragana:[f.getRandomHiragana(),f.getRandomHiragana()],hiraganaWithSmallCharacter:[f.getRandomHiraganaWithSmallCharacter()]};if(e)this.result=e;else if(typeof t=="undefined"&&Math.floor(Math.random()*5)!==0)this.result=`${n.hiragana[0]}${n.hiragana[1]}`.repeat(2);else switch(t!=null?t:Math.floor(Math.random()*6)){case 0:this.result=`${n.hiraganaWithSmallCharacter[0]}${n.hiragana[0]}`.repeat(2);break;case 1:this.result=`${n.hiragana[0]}${n.hiraganaWithSmallCharacter[0]}`.repeat(2);break;case 2:this.result=`${n.hiraganaWithSmallCharacter[0]}\u3063${n.hiraganaWithSmallCharacter[0]}`;break;case 3:this.result=`${n.hiragana[0]}\u3063${n.hiragana[1]}${n.hiragana[0]}${n.hiragana[1]}`;break;case 4:this.result=`${n.hiragana[0]}\u3063${n.hiraganaWithSmallCharacter[0]}${n.hiragana[0]}${n.hiraganaWithSmallCharacter[0]}`;break;case 5:this.result=`${n.hiragana[0]}${n.hiraganaWithSmallCharacter[0]}\u3063`.repeat(2);break;default:throw new Error("Unexpected value")}return this}getSpecialWord(){return N.get(this.result)}}const H=m.parse(location.search,{ignoreQueryPrefix:!0});var b;const z=(b=H.display)==null?void 0:b.toString(),L={gion:[new y().generate(z)],index:0},k=M({initialState:L,name:"gion",reducers:{generateGion:u=>h(c({},u),{gion:[new y().generate(),...u.gion],index:0}),goNext:u=>h(c({},u),{index:u.index-1}),goPrev:u=>h(c({},u),{index:u.index+1})}}),{generateGion:T,goNext:_,goPrev:q}=k.actions,K=W({middleware:u=>u({serializableCheck:!1}),reducer:k.reducer}),g=I,l=i.button`
	box-shadow: hsla(0deg, 0%, 0%, 10%) 0 2px 8px 0px;
	background-color: ${u=>u.primary?"hsl(200, 100%, 50%, 75%)":"hsla(0, 0%, 95%, 75%)"};
	color: ${u=>u.primary?"white":"black"};
	cursor: pointer;
	border-width: 0;
	border-radius: 8px;
	padding: 8px 16px;
`,x="64px",Q=i(l)`
    width: 64px;
    height: 64px;
    position: absolute;
    ${u=>u.direction==="left"?`left: ${x}`:`right: ${x}`};
	${d.lessThan("large")`
		bottom: ${x};
	`}
	&::before {
		content: "";
		display: flex;
		margin: auto;
		width: 24px;
		height: 24px;
		background-image: url(${u=>u.direction==="left"?"./arrow-back-outline.svg":"./arrow-forward-outline.svg"});
	}
`,A=u=>r(Q,{direction:u.direction,onClick:u.onClick}),V=()=>{const u=w(),e=g(t=>t);return s(B,{children:[e.gion[e.index+1]&&r(A,{direction:"left",onClick:()=>u(q())}),e.gion[e.index-1]&&r(A,{direction:"right",onClick:()=>u(_())})]})},J=i(l)`
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: start;
    max-width: 90%;
    padding: 24px;
    gap: 16px;
    top: 32px;
`,X=i.div`
    border-bottom: solid hsla(0, 0%, 0%, 0.025) 2px;
`,Y=i.p`
    font-size: 16px;
    margin-bottom: 8px;
`,Z=i.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 24px;
`,uu=i.img`
    width: 96px;
    height: 96px;
    ${d.lessThan("large")`
        width: 64px;
        height: 64px;
    `}
    border-radius: 50%;
`,eu=i.div`
`,tu=i.p`
    display: flex;
    font-size: 24px;
    ${d.lessThan("large")`
        font-size: 16px;
    `}
    margin-bottom: 8px;

    &::after {
        content: "";
        background-image: url("./open-outline.svg");
        width: 24px;
        height: 24px;
        margin: auto 8px;
    }
`,nu=i.p`
    font-size: 18px;
    ${d.lessThan("large")`
        display: none;
    `}
`,$=u=>s(J,{onClick:()=>window.open(u.link),children:[r(X,{children:r(Y,{children:u.category})}),s(Z,{children:[u.iconPath&&r(uu,{src:u.iconPath}),s(eu,{children:[r(tu,{children:u.title}),r(nu,{children:u.description})]})]})]}),ru=u=>r($,{category:"GION Implicate",link:u.link,title:u.cause,description:u.content}),au=u=>r($,{category:"GION UserMatch",iconPath:`https://unavatar.io/twitter/${u.username}`,link:`https://twitter.com/${u.username}`,title:u.username,description:u.description}),iu=()=>{const u=g(t=>t),e=u.gion[u.index].getSpecialWord();switch(e==null?void 0:e.category){case"UserMatch":return r(au,c({},e));case"Implicate":return r(ru,c({},e));default:return r(B,{})}},ou=i.div`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	justify-content: center;
`,cu=()=>{const u=w(),e=g(a=>a),{result:t}=e.gion[e.index],n=`https://twitter.com/intent/tweet?${m.stringify({hashtags:"\u64EC\u97F3\u30B8\u30A7\u30CD\u30EC\u30FC\u30BF\u30FC",text:t,url:`https://hijiki02.github.io/GION?${m.stringify({display:t})}`})}`;return s(ou,{children:[r(l,{primary:!0,onClick:()=>u(T()),children:"\u518D\u751F\u6210"}),r(l,{onClick:()=>window.open(n),children:"\u30C4\u30A4\u30FC\u30C8\u3059\u308B"}),r(l,{onClick:()=>window.open("https://github.com/hijiki02/GION"),children:"GitHub"})]})},su=i.div`
	color: white;
	text-align: center;
	font-size: min(10vw, 96px);
`,lu=()=>{const u=g(e=>e);return r(su,{children:u.gion[u.index].result})},hu=j`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`,du=i.section`
	font-family: "RocknRoll One", sans-serif;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 32px;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: ${hu} 15s ease infinite;
`,gu=()=>s(du,{children:[r(V,{}),r(iu,{}),r(lu,{}),r(cu,{})]});O.render(r(P,{store:K,children:r(gu,{})}),document.querySelector("#root"));
