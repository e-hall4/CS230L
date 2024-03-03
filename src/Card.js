import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Card() {
    return (
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-dark">
            <div class="card-header py-3 text-bg-dark border-light">
              <h4 class="my-0 fw-normal">One Ring</h4>
            </div>
            <div class="card-body text-bg-dark">
              <p class="mt-3 mb-4 text-white">To rule them all.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-dark">
            <div class="card-header py-3 text-bg-dark border-light">
              <h4 class="my-0 fw-normal text-warning">One Ring</h4>
            </div>
            <div class="card-body text-bg-dark">
              <p class="mt-3 mb-4 text-warning">To find them.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-dark">
            <div class="card-header py-3 text-bg-dark border-light">
              <h4 class="my-0 fw-normal text-danger">One Ring</h4>
            </div>
            <div class="card-body text-bg-dark">
              <p class="mt-3 mb-4 text-danger">To bring them all and in the darkness bind them.</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card;