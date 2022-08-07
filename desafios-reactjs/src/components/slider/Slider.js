import React from "react"
import logoslide1 from "../../Assets/slide-01.jpg"
import logoslide2 from "../../Assets/slide-02.jpg"
import logoslide3 from "../../Assets/slide-03.jpg"

const slider = () => {
    return (
      <div class="container">   
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner .container-md">
                  <div class="carousel-item active">
                    <img src={logoslide1} class="d-block w-100" alt="portada1"/>
                  </div>
                  <div class="carousel-item">
                    <img src={logoslide2} class="d-block w-100" alt="portada2"/>
                  </div>
                  <div class="carousel-item">
                    <img src={logoslide3} class="d-block w-100" alt="portada3"/>
                  </div>
              </div>
          </div>
      </div>
    );
};
export default slider;

