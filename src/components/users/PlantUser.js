export const PlantUser = ({ currentUser }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {currentUser.name}</p>
      <p>Email: {currentUser.email}</p>
    </div>
  );
};
