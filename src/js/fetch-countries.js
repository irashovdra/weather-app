// Отримати список користувачів з GitHub API Опис:
// Використайте публічне API GitHub для отримання списку користувачів.
// Зробіть GET - запит
// за адресою https://api.github.com/users та перегляньте
// отримані дані щодо користувачів.

const body = document.querySelector("body");

const users = fetch("https://api.github.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    body.insertAdjacentHTML("afterbegin", createUsersList(data));
  });

const createUserCard = (user) => {
  const userCard = `<div class="userCard">
    <h2 class="user__login">${user.login}</h2>
    <img src="${user.avatar_url}}" alt="photo">
      <p class="user__id">${user.id}</p>
      <p class="user__node-id">${user.node_id}</p>
  </div>`;
  return userCard;
};

const createUsersList = (users) => {
  return users
    .map((user) => {
      return createUserCard(user);
    })
    .join("");
};
