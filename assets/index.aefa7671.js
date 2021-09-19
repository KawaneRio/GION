var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,l=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&a(e,r,t[r]);if(n)for(var r of n(t))o.call(t,r)&&a(e,r,t[r]);return e},c=(e,n)=>t(e,r(n));"undefined"!=typeof require&&require;import{c as s,a as d,u,s as p,i as g,b as m,R as f,U as h,d as x,P as b}from"./vendor.c34449f9.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const y=e=>e[Math.floor(Math.random()*e.length)],$=()=>y("あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだじづでどばびぶべぼぱぴぷぺぽ"),w=e=>{const t=[$(),$()],r=`${y("きしちにひみりぎじぢびぴ")}${y("ゃゅょ")}`;if(void 0===e&&1!==Math.floor(5*Math.random()))return`${t[0]}${t[1]}`.repeat(2);switch(null!=e?e:Math.floor(6*Math.random())){case 0:return`${r}${t[0]}`.repeat(2);case 1:return`${t[0]}${r}`.repeat(2);case 2:return`${r}っ${r}`;case 3:return`${t[0]}っ${t[1]}${t[0]}${t[1]}`;case 4:return`${t[0]}っ${r}${t[0]}${r}`;case 5:return`${t[0]}${r}っ`.repeat(2);default:return""}},E=s({initialState:{gion:[w()],index:0},name:"gion",reducers:{generateGion:e=>c(l({},e),{gion:[w(),...e.gion]}),goNext:e=>c(l({},e),{index:e.index-1}),goPrev:e=>c(l({},e),{index:e.index+1}),resetIndex:e=>c(l({},e),{index:0})}}),{generateGion:k,goNext:v,goPrev:O,resetIndex:j}=E.actions,P=d({reducer:E.reducer}),M=u,N=p.button`
	box-shadow: hsla(0deg, 0%, 0%, 10%) 0 2px 8px 0px;
	background-color: ${e=>e.primary?"hsl(200, 100%, 50%, 75%)":"hsla(0, 0%, 95%, 75%)"};
	color: ${e=>e.primary?"white":"black"};
	cursor: pointer;
	border-width: 0;
	border-radius: 8px;
	padding: 8px 16px;
`,I=p(N)`
    width: 64px;
    height: 64px;
    position: absolute;
    ${e=>"left"===e.direction?"left: 64px":"right: 64px"};
	${g.lessThan("large")`
		bottom: ${"64px"};
	`}
`,C=e=>{const t=m(),r=M((e=>e));return"left"===e.direction&&void 0!==r.gion[r.index+1]?f.createElement(I,{direction:"left",onClick:()=>t(O())},"<"):"right"===e.direction&&void 0!==r.gion[r.index-1]?f.createElement(I,{direction:"right",onClick:()=>t(v())},">"):f.createElement(f.Fragment,null)},G=p.div`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	justify-content: center;
`,q=()=>{const e=m(),t=M((e=>e));return f.createElement(G,null,f.createElement(N,{primary:!0,onClick:()=>{e(k()),e(j())}},"再生成"),f.createElement(N,{onClick:()=>window.open(`https://twitter.com/intent/tweet?hashtags=擬音ジェネレーター&url=https://hijiki02.github.io/GION/&text=${t.gion}`)},"ツイートする"),f.createElement(N,{onClick:()=>window.open("https://github.com/hijiki02/GION")},"GitHub"))},L=p.div`
	color: white;
	text-align: center;
	font-size: min(10vw, 96px);
`,S=()=>{const e=M((e=>e));return f.createElement(L,null,e.gion[e.index])},R=h`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`,z=p.section`
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
	animation: ${R} 15s ease infinite;
`,F=()=>f.createElement(z,null,f.createElement(f.Fragment,null,f.createElement(C,{direction:"left"}),f.createElement(C,{direction:"right"})),f.createElement(S,null),f.createElement(q,null));x.render(f.createElement(b,{store:P},f.createElement(F,null)),document.querySelector("#root"));
