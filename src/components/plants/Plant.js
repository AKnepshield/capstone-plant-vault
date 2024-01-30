export const Plant = ({ plant }) => {
  return (
    <section className="plant">
      <header className="plant-info">
        {plant.type}
        <div>
          - Room: {plant.roomId}- Water Level: {plant.waterLevel}, - Light
          Needed: {plant.lightNeeded}, - Planted on: {plant.datePlanted}{" "}
        </div>
        <br></br>
      </header>
    </section>
  );
};
