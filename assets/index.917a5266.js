const e=()=>{const e="あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだじづでどばびぶべぼぱぴぷぺぽ";return e[Math.floor(Math.random()*e.length)]},t=()=>`${e()}${e()}`.repeat(2),n=document.querySelector("#content"),o=document.querySelector("#regenerate"),i=document.querySelector("#tweet"),r=document.querySelector("#github"),c=()=>n.innerHTML=t();document.addEventListener("DOMContentLoaded",c),o.addEventListener("click",c),i.addEventListener("click",(()=>window.open(`https://twitter.com/intent/tweet?hashtags=擬音ジェネレーター&url=https://hijiki02.github.io/GION/&text=${n.innerHTML}`))),r.addEventListener("click",(()=>window.open("https://github.com/hijiki02/GION")));