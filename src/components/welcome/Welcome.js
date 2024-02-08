// import "./Welcome.css";

export const Welcome = () => {
  return (
    <div
      className="welcome-container"
      style={{ backgroundImage: `url(/images/cover.webp)` }}
    >
      <h1>
        <span>Welcome To</span>
        <span>The Plant Vault</span>
      </h1>
      <div className="plant-pics"></div>
    </div>
  );
};
