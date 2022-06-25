import React from "react"
import logoslide1 from "../../Assets/slide-01.jpg"
import logoslide2 from "../../Assets/slide-02.jpg"
import logoslide3 from "../../Assets/slide-03.jpg"

const slider = () => {
    return (
        <div id="carouselExampleInterval" class="carousel slide" data-mdb-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-mdb-interval="10000">
            <img src={logoslide1} class="d-block w-100" alt="clothes 1 "/>
          </div>
          <div class="carousel-item" data-mdb-interval="2000">
            <img src={logoslide2} class="d-block w-100" alt="clothes 2"/>
          </div>
          <div class="carousel-item">
            <img src={logoslide3} class="d-block w-100" alt="clothes 1"/>
          </div>
        </div>
        <button class="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
};
export default slider;