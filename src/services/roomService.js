export const getRoomId = () => {
  return fetch(`http://localhost:8088/plants?_expand=room`);
};
