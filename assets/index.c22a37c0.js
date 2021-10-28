var S=Object.defineProperty,v=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var F=(u,e,t)=>e in u?S(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t,c=(u,e)=>{for(var t in e||(e={}))U.call(e,t)&&F(u,t,e[t]);if(E)for(var t of E(e))W.call(e,t)&&F(u,t,e[t]);return u},h=(u,e)=>v(u,R(e));var w=(u,e,t)=>(F(u,typeof e!="symbol"?e+"":e,t),t);import{l as m,c as M,a as I,u as j,s as a,i as d,j as n,F as f,b as k,d as s,U as O,R as P,P as G}from"./vendor.71d334c6.js";const N=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}};N();const H=new Map([["\u307E\u3075\u307E\u3075",{category:"UserMatch",description:"\u9AD8\u4F4E\u5DEE\u306E\u3042\u308B\u6B4C\u58F0\u3001\u7E4A\u7D30\u304B\u3064\u5C11\u3005\u96E3\u89E3\u306A\u6B4C\u8A5E\u3001\u72EC\u7279\u306A\u4E16\u754C\u89B3\u306E\u697D\u66F2\u3092\u4F5C\u308B\u3002",username:"uni_mafumafu"}],["\u308F\u3057\u308F\u3057",{category:"Implicate",cause:"\u3084\u3070\u3044\u30AF\u30EC\u30FC\u30DE\u30FC\u306ESUSURU TV",content:"\u30EF\u30B7\u30EF\u30B7\u3068\u3057\u305F\u98DF\u611F\u306E\u9EBA\u306E\u4E2D\u306B\u306F\u9AEA\u306E\u6BDB\u304C\u5165\u3063\u3066\u304A\u308A\u3001\u3055\u3059\u304C\u306ESUSURU\u3082\u53A8\u623F\u306B\u5165\u3063\u3066\u3044\u3063\u3066\u3057\u307E\u3044\u307E\u3057\u305F\u301C\uFF01",link:"https://twitter.com/susuru_tv/status/1433769424683769858"}],["\u307D\u3053\u307D\u3053",{category:"Implicate",cause:"\u3042\u3041\uFF5E\uFF01\u6C34\u7D20\u306E\u97F3\u30A9\u301C\uFF01\uFF01",content:"\u3053\u306E\u30B9\u30C6\u30A3\u30C3\u30AF\u3092\u304A\u6C34\u306E\u4E2D\u306B\u5165\u308C\u308B\u3060\u3051\u3067\u3001\u307B\u3089\uFF01\uFF8E\uFF9F\uFF7A\uFF6F\u3001\uFF8E\uFF9F\uFF7A\uFF8E\uFF9F\uFF7A\uFF8E\uFF9F\uFF7A\uFF6F\uFF01\u6C34\u7D20\u304C\u51FA\u3066\u304D\u3066\u308B\u306E\u304C\u308F\u304B\u308B\u3067\u3057\u3087\u3046\uFF1F",link:"https://www.nicovideo.jp/watch/sm29003244"}],["\u3057\u308A\u3057\u308A",{category:"Implicate",cause:"\u306E\u306E\u3058 \u30B5\u30E9\u30C0\u304A\u308D\u3057",content:"\u3053\u306E\u5207\u308A\u65B9\u3092\u898B\u3066\u4F55\u304B\u6C17\u306B\u306A\u308A\u307E\u305B\u3093\uFF1F\u601D\u3044\u51FA\u3057\u307E\u3057\u305F\uFF1F\u305D\u3046\uFF01\u6C96\u7E04\u6599\u7406\u3067\u6709\u540D\u306E\u3001\u306B\u3093\u3058\u3093\u3057\u308A\u3057\u308A",link:"https://www.nicovideo.jp/watch/sm22193155"}]]),x={getRandomHiragana(){const u="\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3093\u304C\u304E\u3050\u3052\u3054\u3056\u3058\u305A\u305C\u305E\u3060\u3058\u3065\u3067\u3069\u3070\u3073\u3076\u3079\u307C\u3071\u3074\u3077\u307A\u307D";return this.pickRandomCharacter(u)},getRandomHiraganaWithSmallCharacter(){const u="\u304D\u3057\u3061\u306B\u3072\u307F\u308A\u304E\u3058\u3062\u3073\u3074",e="\u3083\u3085\u3087";return`${this.pickRandomCharacter(u)}${this.pickRandomCharacter(e)}`},pickRandomCharacter(u){return u[Math.floor(Math.random()*u.length)]}};class y{constructor(){w(this,"result","")}generate(e,t){const i={hiragana:[x.getRandomHiragana(),x.getRandomHiragana()],hiraganaWithSmallCharacter:[x.getRandomHiraganaWithSmallCharacter()]};if(e)this.result=e;else if(typeof t=="undefined"&&Math.floor(Math.random()*5)!==0)this.result=`${i.hiragana[0]}${i.hiragana[1]}`.repeat(2);else switch(t!=null?t:Math.floor(Math.random()*6)){case 0:this.result=`${i.hiraganaWithSmallCharacter[0]}${i.hiragana[0]}`.repeat(2);break;case 1:this.result=`${i.hiragana[0]}${i.hiraganaWithSmallCharacter[0]}`.repeat(2);break;case 2:this.result=`${i.hiraganaWithSmallCharacter[0]}\u3063${i.hiraganaWithSmallCharacter[0]}`;break;case 3:this.result=`${i.hiragana[0]}\u3063${i.hiragana[1]}${i.hiragana[0]}${i.hiragana[1]}`;break;case 4:this.result=`${i.hiragana[0]}\u3063${i.hiraganaWithSmallCharacter[0]}${i.hiragana[0]}${i.hiraganaWithSmallCharacter[0]}`;break;case 5:this.result=`${i.hiragana[0]}${i.hiraganaWithSmallCharacter[0]}\u3063`.repeat(2);break;default:throw new Error("Unexpected value")}return this}getSpecialWord(){return H.get(this.result)}}const z=m.parse(location.search,{ignoreQueryPrefix:!0});var D;const L=(D=z.display)==null?void 0:D.toString(),T={gion:[new y().generate(L)],index:0},A=M({initialState:T,name:"gion",reducers:{generateGion:u=>h(c({},u),{gion:[new y().generate(),...u.gion],index:0}),goNext:u=>h(c({},u),{index:u.index-1}),goPrev:u=>h(c({},u),{index:u.index+1})}}),{generateGion:_,goNext:q,goPrev:K}=A.actions,Q=I({middleware:u=>u({serializableCheck:!1}),reducer:A.reducer}),g=j,l=a.button`
	box-shadow: hsla(0deg, 0%, 0%, 10%) 0 2px 8px 0px;
	background-color: ${u=>u.primary?"hsl(200, 100%, 50%, 75%)":"hsla(0, 0%, 95%, 75%)"};
	color: ${u=>u.primary?"white":"black"};
	cursor: pointer;
	border-width: 0;
	border-radius: 8px;
	padding: 8px 16px;
`,C="64px",$=a(l)`
    width: 64px;
    height: 64px;
    position: absolute;
    ${u=>u.direction==="left"?`left: ${C}`:`right: ${C}`};
	${d.lessThan("large")`
		bottom: ${C};
	`}
	&::before {
		content: "";
		display: flex;
		margin: auto;
		width: 24px;
		height: 24px;
		background-image: url(${u=>u.direction==="left"?"./arrow-back-outline.svg":"./arrow-forward-outline.svg"});
	}
`,B=u=>{switch(u.direction){case"left":return n($,{direction:"left",onClick:u.onClick});case"right":return n($,{direction:"right",onClick:u.onClick});default:return n(f,{})}},V=()=>{const u=k(),e=g(t=>t);return s(f,{children:[e.gion[e.index+1]&&n(B,{direction:"left",onClick:()=>u(K())}),e.gion[e.index-1]&&n(B,{direction:"right",onClick:()=>u(q())})]})},J=a(l)`
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: start;
    max-width: 90%;
    padding: 24px;
    gap: 16px;
    top: 32px;
`,X=a.div`
    border-bottom: solid hsla(0, 0%, 0%, 0.025) 2px;
`,Y=a.p`
    font-size: 16px;
    margin-bottom: 8px;
`,Z=a.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 24px;
`,uu=a.img`
    width: 96px;
    height: 96px;
    ${d.lessThan("large")`
        width: 64px;
        height: 64px;
    `}
    border-radius: 50%;
`,eu=a.div`
`,tu=a.p`
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
`,nu=a.p`
    font-size: 18px;
    ${d.lessThan("large")`
        display: none;
    `}
`,b=u=>s(J,{onClick:()=>window.open(u.link),children:[n(X,{children:n(Y,{children:u.category})}),s(Z,{children:[u.iconPath&&n(uu,{src:u.iconPath}),s(eu,{children:[n(tu,{children:u.title}),n(nu,{children:u.description})]})]})]}),iu=u=>n(b,{category:"GION Implicate",link:u.link,title:u.cause,description:u.content}),ru=u=>n(b,{category:"GION UserMatch",iconPath:`https://unavatar.io/twitter/${u.username}`,link:`https://twitter.com/${u.username}`,title:u.username,description:u.description}),au=()=>{const u=g(t=>t),e=u.gion[u.index].getSpecialWord();switch(e==null?void 0:e.category){case"UserMatch":return n(ru,c({},e));case"Implicate":return n(iu,c({},e));default:return n(f,{})}},ou=a.div`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	justify-content: center;
`,cu=()=>{const u=k(),e=g(r=>r),{result:t}=e.gion[e.index],i=`https://twitter.com/intent/tweet?${m.stringify({hashtags:"\u64EC\u97F3\u30B8\u30A7\u30CD\u30EC\u30FC\u30BF\u30FC",text:t,url:`https://hijiki02.github.io/GION?${m.stringify({display:t})}`})}`;return s(ou,{children:[n(l,{primary:!0,onClick:()=>u(_()),children:"\u518D\u751F\u6210"}),n(l,{onClick:()=>window.open(i),children:"\u30C4\u30A4\u30FC\u30C8\u3059\u308B"}),n(l,{onClick:()=>window.open("https://github.com/hijiki02/GION"),children:"GitHub"})]})},su=a.div`
	color: white;
	text-align: center;
	font-size: min(10vw, 96px);
`,lu=()=>{const u=g(e=>e);return n(su,{children:u.gion[u.index].result})},hu=O`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`,du=a.section`
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
`,gu=()=>s(du,{children:[n(V,{}),n(au,{}),n(lu,{}),n(cu,{})]});P.render(n(G,{store:Q,children:n(gu,{})}),document.querySelector("#root"));
