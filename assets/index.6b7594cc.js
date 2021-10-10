var e,t=Object.defineProperty,r=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,c=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&l(e,r,t[r]);if(i)for(var r of i(t))a.call(t,r)&&l(e,r,t[r]);return e},s=(e,t)=>r(e,n(t));"undefined"!=typeof require&&require;import{l as u,c as d,a as p,u as m,s as g,i as h,R as f,b as x,U as b,d as w,P as y}from"./vendor.56610d3b.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const k=new Map([["まふまふ",{category:"UserMatch",description:"高低差のある歌声、繊細かつ少々難解な歌詞、独特な世界観の楽曲を作る。",username:"uni_mafumafu"}],["わしわし",{category:"Implicate",cause:"やばいクレーマーのSUSURU TV",content:"ワシワシとした食感の麺の中には髪の毛が入っており、さすがのSUSURUも厨房に入っていってしまいました〜！",link:"https://twitter.com/susuru_tv/status/1433769424683769858"}],["ぽこぽこ",{category:"Implicate",cause:"あぁ～！水素の音ォ〜！！",content:"このスティックをお水の中に入れるだけで、ほら！ﾎﾟｺｯ、ﾎﾟｺﾎﾟｺﾎﾟｺｯ！水素が出てきてるのがわかるでしょう？",link:"https://www.nicovideo.jp/watch/sm29003244"}],["しりしり",{category:"Implicate",cause:"ののじ サラダおろし",content:"この切り方を見て何か気になりません？思い出しました？そう！沖縄料理で有名の、にんじんしりしり",link:"https://www.nicovideo.jp/watch/sm22193155"}]]),E=e=>e[Math.floor(Math.random()*e.length)],$=()=>E("あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだじづでどばびぶべぼぱぴぷぺぽ");class v{constructor(){var e;l(this,"symbol"!=typeof(e="result")?e+"":e,"")}generate(e,t){const r=[$(),$()],n=`${E("きしちにひみりぎじぢびぴ")}${E("ゃゅょ")}`;if(void 0!==e)this.result=e;else if(void 0===t&&1!==Math.floor(5*Math.random()))this.result=`${r[0]}${r[1]}`.repeat(2);else switch(null!=t?t:Math.floor(6*Math.random())){case 0:this.result=`${n}${r[0]}`.repeat(2);break;case 1:this.result=`${r[0]}${n}`.repeat(2);break;case 2:this.result=`${n}っ${n}`;break;case 3:this.result=`${r[0]}っ${r[1]}${r[0]}${r[1]}`;break;case 4:this.result=`${r[0]}っ${n}${r[0]}${n}`;break;case 5:this.result=`${r[0]}${n}っ`.repeat(2);break;default:throw new Error("Unexpected value")}return this}getSpecialWord(){return k.get(this.result)}}const O=null==(e=u.parse(location.search,{ignoreQueryPrefix:!0}).display)?void 0:e.toString(),j=d({initialState:{gion:[(new v).generate(O)],index:0},name:"gion",reducers:{generateGion:e=>s(c({},e),{gion:[(new v).generate(),...e.gion],index:0}),goNext:e=>s(c({},e),{index:e.index-1}),goPrev:e=>s(c({},e),{index:e.index+1})}}),{generateGion:P,goNext:C,goPrev:I}=j.actions,M=p({middleware:e=>e({serializableCheck:!1}),reducer:j.reducer}),S=m,U=g.button`
	box-shadow: hsla(0deg, 0%, 0%, 10%) 0 2px 8px 0px;
	background-color: ${e=>e.primary?"hsl(200, 100%, 50%, 75%)":"hsla(0, 0%, 95%, 75%)"};
	color: ${e=>e.primary?"white":"black"};
	cursor: pointer;
	border-width: 0;
	border-radius: 8px;
	padding: 8px 16px;
`,N=g(U)`
    width: 64px;
    height: 64px;
    position: absolute;
    ${e=>"left"===e.direction?"left: 64px":"right: 64px"};
	${h.lessThan("large")`
		bottom: ${"64px"};
	`}
`,z=e=>{switch(e.direction){case"left":return f.createElement(N,{direction:"left",onClick:e.onClick},"<");case"right":return f.createElement(N,{direction:"right",onClick:e.onClick},">");default:return f.createElement(f.Fragment,null)}},G=()=>{const e=x(),t=S((e=>e));return f.createElement(f.Fragment,null,t.gion[t.index+1]&&f.createElement(z,{direction:"left",onClick:()=>e(I())}),t.gion[t.index-1]&&f.createElement(z,{direction:"right",onClick:()=>e(C())}))},R=g(U)`
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: start;
    max-width: 90%;
    padding: 24px;
    gap: 16px;
    top: 32px;
`,T=g.div`
    border-bottom: solid hsla(0, 0%, 0%, 0.025) 2px;
`,q=g.p`
    font-size: 16px;
    margin-bottom: 8px;
`,L=g.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 24px;
`,F=g.img`
    width: 96px;
    height: 96px;
    ${h.lessThan("large")`
        width: 64px;
        height: 64px;
    `}
    border-radius: 100%;
`,W=g.div`
`,_=g.p`
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
`,A=g.p`
    font-size: 18px;
    ${h.lessThan("large")`
        display: none;
    `}
`,D=e=>f.createElement(R,{onClick:()=>window.open(e.link)},f.createElement(T,null,f.createElement(q,null,e.category)),f.createElement(L,null,e.iconPath&&f.createElement(F,{src:e.iconPath}),f.createElement(W,null,f.createElement(_,null,e.title),f.createElement(A,null,e.description)))),H=e=>f.createElement(D,{category:"GION Implicate",link:e.link,title:e.cause,description:e.content}),K=e=>f.createElement(D,{category:"GION UserMatch",iconPath:`https://unavatar.io/twitter/${e.username}`,link:`https://twitter.com/${e.username}`,title:e.username,description:e.description}),Q=()=>{const e=S((e=>e)),t=e.gion[e.index].getSpecialWord();switch(null==t?void 0:t.category){case"UserMatch":return f.createElement(K,c({},t));case"Implicate":return f.createElement(H,c({},t));default:return f.createElement(f.Fragment,null)}},V=g.div`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	justify-content: center;
`,B=()=>{const e=x(),t=S((e=>e));return f.createElement(V,null,f.createElement(U,{primary:!0,onClick:()=>e(P())},"再生成"),f.createElement(U,{onClick:()=>window.open(`https://twitter.com/intent/tweet?hashtags=擬音ジェネレーター&url=https://hijiki02.github.io/GION/&text=${t.gion[t.index].result}`)},"ツイートする"),f.createElement(U,{onClick:()=>window.open("https://github.com/hijiki02/GION")},"GitHub"))},J=g.div`
	color: white;
	text-align: center;
	font-size: min(10vw, 96px);
`,X=()=>{const e=S((e=>e));return f.createElement(J,null,e.gion[e.index].result)},Y=b`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`,Z=g.section`
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
	animation: ${Y} 15s ease infinite;
`,ee=()=>f.createElement(Z,null,f.createElement(G,null),f.createElement(Q,null),f.createElement(X,null),f.createElement(B,null));w.render(f.createElement(y,{store:M},f.createElement(ee,null)),document.querySelector("#root"));
