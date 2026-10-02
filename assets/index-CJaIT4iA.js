(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=document.createElement(`p`);t.textContent=e[0],t.classList.add(`text-red-800`);function n(){setInterval(()=>{t.textContent=e[Math.floor(Math.random()*e.length)]},6e3)}n(),document.querySelector(`.tip-container`).appendChild(t)}function t(e){if(e.length>0){let t=[];e.map(e=>{let r=n(e.category);t.push(`
  <div class="border shadow-sm shadow-gray-500 bg-[hsl(227,90%,4%)] border-gray-600 max-w-full rounded-xl text-gray-300 dark:text-[hsl(227,75%,5%)] dark:bg-transparent">

    <div class="p-5 gap-2 flex flex-col capitalize">

      <div class="border ${r.border} ${r.background} w-max rounded-sm py-1 px-3 capitalize">
        <p class="${r.text}">${e.category}</p>
      </div>

      <h2 class="text-2xl font-bold">${e.title}</h2>

      <p class="text-gray-400  dark:text-[hsl(227,75%,10%)]">${e.description}</p>

      <div class="flex justify-between text-[12px]">
        <p>difficulty: <span>${e.difficulty}</span></p>

        <div>
          <p><span>${e.duration}</span> min</p>
        </div>
      </div>

    </div>

    <div class="mark-as border-t border-t-gray-500 p-5 flex justify-between items-center">

      <div class="flex gap-2 capitalize items-center ${e.completed?`text-green-600`:``}">

        <div class="text-2xl">
          <i
            class="icon-mark fa-regular cursor-pointer ${e.completed?`fa-circle-check`:`fa-circle`}"
            data-id="${e.id}"
          ></i>
        </div>

        <p>${e.completed?`completed`:`mark complete`}</p>

      </div>

      <div>
        <i
          class="delete-topic text-red-800 cursor-pointer fa-solid fa-trash-can"
          data-id="${e.id}"
        ></i>
      </div>

    </div>

  </div>
`)}),document.querySelector(`.topic-card-container`).innerHTML=t.join(``)}else document.querySelector(`.topic-card-container`).innerHTML=`<p class="text-center">No topics found...</p>`,document.querySelector(`.load-more`).classList.add(`hidden`)}function n(e){switch(e){case`HTML`:return{border:`border-sky-900`,background:`bg-sky-950`,text:`text-sky-600`};case`Css`:return{border:`border-purple-900`,background:`bg-purple-950`,text:`text-purple-600`};case`javascript`:return{border:`border-orange-900`,background:`bg-orange-950`,text:`text-orange-600`};case`backend`:return{border:`border-blue-900`,background:`bg-blue-950`,text:`text-blue-600`};case`Tailwind`:return{border:`border-red-900`,background:`bg-red-950`,text:`text-red-600`};case`react`:return{border:`border-cyan-900`,background:`bg-cyan-950`,text:`text-cyan-600`};case`git`:return{border:`border-green-900`,background:`bg-green-950`,text:`text-green-600`};default:return{border:`border-gray-900`,background:`bg-gray-950`,text:`text-gray-600`}}}function r(e){document.querySelector(`.total-topic`).textContent=e.length}function i(e){document.querySelector(`.completed`).textContent=e.length}function a(e,t){let n=t.length*100/e.length;console.log(n.toFixed(2));let r=document.querySelector(`.progress-bar`);r.style.width=`${n}%`,document.querySelector(`.progress-num`).textContent=n.toFixed(0)+`%`,document.querySelector(`.completion`).textContent=n.toFixed(0)}function o(e){let t=0;t=e.reduce((e,t)=>e+=t.difficulty,0),console.log(t),document.querySelector(`.average-difficulty`).textContent=(t/e.length).toFixed(1)}function s(e){document.querySelector(`.body`).innerHTML=`

    <div class="relative pb-10 h-full mt-48 px-5">
      <p class="text-center"><span class="font-bold">Error...</span>, unable to load topics please try again...${e}</p>

      <div class="w-full mx-auto">
      <button class="bg-blue-700 px-3 py-1 rounded-lg cursor-pointer">Retry</button>
      </div>
    </div>

`}async function c(){try{let[e,t]=await Promise.all([fetch(`../data/topics.json`),fetch(`../data/tip.json`)]);if(!e.ok||!t.ok)throw Error(`Could not load JSON data`);return[await e.json(),await t.json()]}catch(e){s(e)}}var l=document.querySelector(`.side-bar-btn`),u=document.querySelector(`.side-bar`),d=document.querySelector(`.add-topics`),f=document.querySelector(`.add-topics-btn`),p=document.querySelector(`.add-topics-form`),m=document.querySelector(`.side-bar-remover`),h=document.querySelector(`.toogle`),g=document.querySelector(`.catagory-list`),_=document.querySelector(`.sort`),v=document.querySelector(`.search-input`),y=document.querySelector(`.title-input`),b=document.getElementById(`catagory`),x=document.getElementById(`difficulty`),S=document.getElementById(`discription`),C=document.getElementById(`add-topics-to`),w=document.querySelectorAll(`.mark-as`);document.querySelector(`.body`),console.log(w);var T=!1,E=!1,D=!1,[O,k]=await c(),A=JSON.parse(localStorage.getItem(`topics`))||O;console.log(A),console.log(k),e(k),t(A),o(A);function j(){let e=A.filter(e=>e.completed===!0);return i(e),a(A,e),e}_.addEventListener(`input`,()=>{let e=[];_.value==`difficulty`?(e=[...A],console.log(e),t(e.sort((e,t)=>e.difficulty-t.difficulty)),M(),P()):_.value===`duration`?(e=[...A].sort((e,t)=>e.duration-t.duration),console.log(e),t(e),M(),P()):t(A)}),g.addEventListener(`input`,()=>{g.value===`all catagories`?(t(A),M(),P()):(t(A.filter(e=>e.category.toLowerCase()===g.value.toLowerCase())),M(),P())}),v.addEventListener(`input`,()=>{let e=v.value.toLowerCase();console.log(e);let n=A.filter(t=>t.title.toLowerCase().includes(e));console.log(n),t(n),M(),P()}),C.addEventListener(`click`,e=>{e.preventDefault(),y.value&&S.value&&(A.push({id:crypto.randomUUID(),title:y.value,category:b.value,difficulty:Number(x.value),duration:Number(x.value)*10,completed:!1,description:S.value}),p.classList.add(`-right-full`),p.classList.remove(`right-5`),T=!1,t(A),o(A),M(),r(A),localStorage.setItem(`topics`,JSON.stringify(A))),y.value=``,S.value=``;let n=j();console.log(n),a(A,n),P()});function M(){document.querySelectorAll(`.icon-mark`).forEach(e=>{e.addEventListener(`click`,()=>{N(e.dataset.id),localStorage.setItem(`topics`,JSON.stringify(A))})})}function N(e){let n=A.find(t=>t.id===e);console.log(n),n.completed?(n.completed=!1,t(A),M(),j(),P(),localStorage.setItem(`topics`,JSON.stringify(A))):(n.completed=!0,t(A),M(),P(),j(),localStorage.setItem(`topics`,JSON.stringify(A))),console.log(n)}function P(){document.querySelectorAll(`.delete-topic`).forEach(e=>{e.addEventListener(`click`,()=>{F(e.dataset.id),r(A),a(A,j()),localStorage.setItem(`topics`,JSON.stringify(A))})})}function F(e){let n=A.find(t=>t.id==e);A.splice(A.indexOf(n),1),t(A),P(),M(),n.completed===!0&&j(A),console.log(A)}h.addEventListener(`click`,()=>{D?(h.classList.remove(`fa-toggle-off`),h.classList.add(`fa-toggle-on`),document.documentElement.classList.remove(`dark`),D=!1):(h.classList.add(`fa-toggle-off`),h.classList.remove(`fa-toggle-on`),document.documentElement.classList.toggle(`dark`),D=!0)}),f.addEventListener(`mouseover`,()=>{d.classList.remove(`scale-x-0`),d.classList.add(`scale-x-100`)}),f.addEventListener(`mouseout`,()=>{d.classList.add(`scale-x-0`),d.classList.remove(`scale-x-100`)}),f.addEventListener(`click`,()=>{T?(p.classList.add(`-right-full`),p.classList.remove(`right-5`),T=!1):(p.classList.remove(`-right-full`),p.classList.add(`right-5`),T=!0)}),l.addEventListener(`click`,()=>{E||=(u.classList.remove(`-left-full`),u.classList.add(`left-0`),!0)}),m.addEventListener(`click`,()=>{E&&=(u.classList.add(`-left-full`),u.classList.remove(`left-0`),!1)}),j(),M(),P(),r(A);