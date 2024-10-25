import nicePic from "../../images/cover.webp";
import birdOfImage from "../../images/BoP.jpg";
import fiddleFigImage from "../../images/Fiddle-Leaf-Fig-1.jpg";
import haworthiaImage from "../../images/haworthia2.jpg";

export const Welcome = () => {
  return (
    <div>
      <h1 className="welcome-banner text-white text-center fs-1 fw-bold">
        Welcome To PlantVault!"
      </h1>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={nicePic}
              class="d-block w-100"
              style={{ height: "auto" }}
              alt="Plants in a house in the sun"
            />
          </div>
          <div class="carousel-item">
            <img
              src={birdOfImage}
              class="d-block w-100"
              style={{ height: "auto" }}
              alt="Bird Of Paradise"
            />
          </div>
          <div class="carousel-item">
            <img
              src={fiddleFigImage}
              class="d-block w-100"
              style={{ height: "auto" }}
              alt="Fiddle Leaf Fig"
            />
          </div>
          <div class="carousel-item">
            <img
              src={haworthiaImage}
              class="d-block w-100"
              style={{ height: "auto" }}
              alt="Succulent"
            />
          </div>
          <div class="carousel-item">
            <img
              src={fiddleFigImage}
              class="d-block w-100"
              style={{ height: "auto" }}
              alt="Fiddle Leaf Fig"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
