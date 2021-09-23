var e,t=Object.defineProperty,r=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,s=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&l(e,r,t[r]);if(i)for(var r of i(t))a.call(t,r)&&l(e,r,t[r]);return e},c=(e,t)=>r(e,n(t));"undefined"!=typeof require&&require;import{l as d,c as p,a as u,u as m,s as g,i as h,R as f,b as x,U as b,d as w,P as y}from"./vendor.76e61cdf.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const k=new Map([["まふまふ",{description:"高低差のある歌声、繊細かつ少々難解な歌詞、独特な世界観の楽曲を作る。",username:"uni_mafumafu"}]]),$=e=>e[Math.floor(Math.random()*e.length)],E=()=>$("あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだじづでどばびぶべぼぱぴぷぺぽ");class v{constructor(){var e;l(this,"symbol"!=typeof(e="result")?e+"":e,"")}generate(e,t){const r=[E(),E()],n=`${$("きしちにひみりぎじぢびぴ")}${$("ゃゅょ")}`;if(void 0!==e)this.result=e;else if(void 0===t&&1!==Math.floor(5*Math.random()))this.result=`${r[0]}${r[1]}`.repeat(2);else switch(null!=t?t:Math.floor(6*Math.random())){case 0:this.result=`${n}${r[0]}`.repeat(2);break;case 1:this.result=`${r[0]}${n}`.repeat(2);break;case 2:this.result=`${n}っ${n}`;break;case 3:this.result=`${r[0]}っ${r[1]}${r[0]}${r[1]}`;break;case 4:this.result=`${r[0]}っ${n}${r[0]}${n}`;break;case 5:this.result=`${r[0]}${n}っ`.repeat(2);break;default:throw new Error("Unexpected value")}return this}getSpecialWord(e){switch(e){case"UserMatch":return k.get(this.result);default:throw new Error("Invalid category")}}}const O=null==(e=d.parse(location.search,{ignoreQueryPrefix:!0}).display)?void 0:e.toString(),j=p({initialState:{gion:[(new v).generate(O)],index:0},name:"gion",reducers:{generateGion:e=>c(s({},e),{gion:[(new v).generate(),...e.gion],index:0}),goNext:e=>c(s({},e),{index:e.index-1}),goPrev:e=>c(s({},e),{index:e.index+1})}}),{generateGion:P,goNext:C,goPrev:M}=j.actions,N=u({middleware:e=>e({serializableCheck:!1}),reducer:j.reducer}),z=m,S=g.button`
	box-shadow: hsla(0deg, 0%, 0%, 10%) 0 2px 8px 0px;
	background-color: ${e=>e.primary?"hsl(200, 100%, 50%, 75%)":"hsla(0, 0%, 95%, 75%)"};
	color: ${e=>e.primary?"white":"black"};
	cursor: pointer;
	border-width: 0;
	border-radius: 8px;
	padding: 8px 16px;
`,G=g(S)`
    width: 64px;
    height: 64px;
    position: absolute;
    ${e=>"left"===e.direction?"left: 64px":"right: 64px"};
	${h.lessThan("large")`
		bottom: ${"64px"};
	`}
`,I=e=>"left"===e.direction?f.createElement(G,{direction:"left",onClick:e.onClick},"<"):"right"===e.direction?f.createElement(G,{direction:"right",onClick:e.onClick},">"):f.createElement(f.Fragment,null),U=g.div`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	justify-content: center;
`,q=()=>{const e=x(),t=z((e=>e));return f.createElement(U,null,f.createElement(S,{primary:!0,onClick:()=>e(P())},"再生成"),f.createElement(S,{onClick:()=>window.open(`https://twitter.com/intent/tweet?hashtags=擬音ジェネレーター&url=https://hijiki02.github.io/GION/&text=${t.gion[t.index].result}`)},"ツイートする"),f.createElement(S,{onClick:()=>window.open("https://github.com/hijiki02/GION")},"GitHub"))},L=g.div`
	color: white;
	text-align: center;
	font-size: min(10vw, 96px);
`,T=()=>{const e=z((e=>e));return f.createElement(L,null,e.gion[e.index].result)},R=g(S)`
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: start;
    max-width: 90%;
    padding: 24px;
    gap: 16px;
    top: 32px;
`,F=g.div`
    border-bottom: solid hsla(0, 0%, 0%, 0.025) 2px;
`,W=g.p`
    font-size: 16px;
    margin-bottom: 8px;
`,A=g.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 24px;
`,D=g.img`
    width: 96px;
    height: 96px;
    ${h.lessThan("large")`
        width: 64px;
        height: 64px;
    `}
    border-radius: 100%;
`,H=g.div`
`,K=g.p`
    display: flex;
    font-size: 24px;
    ${h.lessThan("large")`
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
`,Q=g.p`
    font-size: 18px;
    ${h.lessThan("large")`
        display: none;
    `}
`,_=e=>f.createElement(R,{onClick:()=>window.open(e.link)},f.createElement(F,null,f.createElement(W,null,e.category)),f.createElement(A,null,f.createElement(D,{src:e.iconPath}),f.createElement(H,null,f.createElement(K,null,e.title),f.createElement(Q,null,e.description)))),B=e=>f.createElement(_,{category:"GION UserMatch",iconPath:`https://unavatar.io/twitter/${e.username}`,link:`https://twitter.com/${e.username}`,title:e.username,description:e.description}),J=b`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`,V=g.section`
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
	animation: ${J} 15s ease infinite;
`,X=()=>{const e=x(),t=z((e=>e)),r=t.gion[t.index].getSpecialWord("UserMatch");return f.createElement(V,null,f.createElement(f.Fragment,null,t.gion[t.index+1]&&f.createElement(I,{direction:"left",onClick:()=>e(M())}),t.gion[t.index-1]&&f.createElement(I,{direction:"right",onClick:()=>e(C())})),r&&f.createElement(B,{username:r.username,description:r.description}),f.createElement(T,null),f.createElement(q,null))};w.render(f.createElement(y,{store:N},f.createElement(X,null)),document.querySelector("#root"));
