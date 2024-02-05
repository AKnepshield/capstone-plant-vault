export const getRoomId = () => {
  return fetch(`http://localhost:8088/plants?_expand=room`);
};

export const getAllRooms = () => {
  return fetch(`http://localhost:8088/rooms`).then((res) => res.json());
};
