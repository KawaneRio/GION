const t=()=>{const t="あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだじづでどばびぶべぼぱぴぷぺぽ";return t[Math.floor(Math.random()*t.length)]},e=()=>{const t="っゃゅょ";return t[Math.floor(Math.random()*t.length)]},n=()=>Math.random()<.8?`${t()}${t()}`.repeat(2):Math.random()<.5?`${t()}${e()}${t()}`.repeat(2):`${t()}${t()}${e()}`.repeat(2),r=document.querySelector("#content"),o=document.querySelector("#regenerate"),i=document.querySelector("#tweet"),a=document.querySelector("#github"),c=()=>r.innerHTML=n();document.addEventListener("DOMContentLoaded",c),o.addEventListener("click",c),i.addEventListener("click",(()=>window.open(`https://twitter.com/intent/tweet?hashtags=擬音ジェネレーター&url=https://hijiki02.github.io/GION/&text=${r.innerHTML}`))),a.addEventListener("click",(()=>window.open("https://github.com/hijiki02/GION")));
