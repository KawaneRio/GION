var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,i=(e,i)=>{for(var a in i||(i={}))r.call(i,a)&&o(e,a,i[a]);if(t)for(var a of t(i))n.call(i,a)&&o(e,a,i[a]);return e};"undefined"!=typeof require&&require;import{s as a,u as c,a as l,R as s,U as u,c as d,b as p,d as f,P as m}from"./vendor.d01bce3d.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const h=a.button`
	box-shadow: hsla(0deg, 0%, 0%, 10%) 0 2px 8px 0px;
	background-color: ${e=>e.primary?"hsl(200, 100%, 50%, 75%)":"hsla(0, 0%, 95%, 75%)"};
	color: ${e=>e.primary?"white":"black"};
	cursor: pointer;
	border-width: 0;
	border-radius: 8px;
	padding: 8px 16px;
`,g=e=>e[Math.floor(Math.random()*e.length)],y=()=>g("あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだじづでどばびぶべぼぱぴぷぺぽ"),b=e=>{const t=[y(),y()],r=`${g("きしちにひみりぎじぢびぴ")}${g("ゃゅょ")}`;if(void 0===e&&1!==Math.floor(5*Math.random()))return`${t[0]}${t[1]}`.repeat(2);switch(null!=e?e:Math.floor(6*Math.random())){case 0:return`${r}${t[0]}`.repeat(2);case 1:return`${t[0]}${r}`.repeat(2);case 2:return`${r}っ${r}`;case 3:return`${t[0]}っ${t[1]}${t[0]}${t[1]}`;case 4:return`${t[0]}っ${r}${t[0]}${r}`;case 5:return`${t[0]}${r}っ`.repeat(2);default:return""}},$=a.div`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	justify-content: center;
`,w=()=>{const e=c(),t=l((e=>e));return s.createElement($,null,s.createElement(h,{primary:!0,onClick:()=>e({payload:{content:b()},type:"GION_GENERATION"})},"再生成"),s.createElement(h,{onClick:()=>window.open(`https://twitter.com/intent/tweet?hashtags=擬音ジェネレーター&url=https://hijiki02.github.io/GION/&text=${t.gion.content}`)},"ツイートする"),s.createElement(h,{onClick:()=>window.open("https://github.com/hijiki02/GION")},"GitHub"))},x=a.div`
	color: white;
	text-align: center;
	font-size: min(10vw, 96px);
`,E=()=>{const e=l((e=>e));return s.createElement(x,null,e.gion.content)},k=u`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`,O=a.section`
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
	animation: ${k} 15s ease infinite;
`,v=()=>s.createElement(O,null,s.createElement(E,null),s.createElement(w,null)),N={content:b()};const j=d(p({gion:(e=N,t)=>{switch(t.type){case"GION_GENERATION":return i(i({},e),t.payload);default:return e}}}));f.render(s.createElement(m,{store:j},s.createElement(v,null)),document.querySelector("#root"));
