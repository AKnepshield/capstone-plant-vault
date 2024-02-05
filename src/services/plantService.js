export const getAllPlants = () => {
  return fetch(`http://localhost:8088/plants`).then((res) => res.json());
};

export const getPlantInfo = (plantId) => {
  return fetch(
    `http://localhost:8088/plants/${plantId}?_expand=room&_expand=user`
  ).then((res) => res.json());
};

export const getPlantsByUserId = (userId) => {
  return fetch(
    `http://localhost:8088/plants?_expand=user&_expand=room&userId=${userId}`
  ).then((res) => res.json());
};

export const updatePlant = async (plantObj) => {
  return await fetch(`http://localhost:8088/plants/${plantObj.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plantObj),
  }).then((res) => res.json());
};
// updatePlant is not saving the updated information

export const deletePlant = (plantId) => {
  return fetch(`http://localhost:8088/plants/${plantId}`, {
    method: "DELETE",
  }).then((res) => res.json());
};
