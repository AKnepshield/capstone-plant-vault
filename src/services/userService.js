export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}&_embed=plants`).then(
    (res) => res.json()
  );
};

export const getUser = (userId) => {
  return fetch(`http://localhost:8088/users/${userId}?_embed=plants`).then(
    (res) => res.json()
  );
};

export const getPlantsByUserId = (userId) => {
  return fetch(
    `http://localhost:8088/plants?userId=${userId}&_expand=user&_expand=room`
  ).then((res) => res.json());
};

export const createUser = (user) => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};
