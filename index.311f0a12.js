const s=document.querySelector("body");fetch("https://api.github.com/users").then(s=>s.json()).then(e=>{console.log(e),s.insertAdjacentHTML("afterbegin",o(e))});const e=s=>`<div class="userCard">
    <h2 class="user__login">${s.login}</h2>
    <img src="${s.avatar_url}}" alt="photo">
      <p class="user__id">${s.id}</p>
      <p class="user__node-id">${s.node_id}</p>
  </div>`,o=s=>s.map(s=>e(s)).join("");
//# sourceMappingURL=index.311f0a12.js.map
