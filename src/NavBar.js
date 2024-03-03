import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        < header class="p-3 text-bg-dark" >
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" class="nav-link px-2 text-secondary">Navbar</a></li>
                        <li><a href="#" class="nav-link px-2 text-white">Home</a></li>
                        <li><a href="#" class="nav-link px-2 text-white">About</a></li>
                        <li><a href="#" class="nav-link px-2 text-white">Contact</a></li>
                    </ul>

                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                    </form>
                </div>
            </div>
        </header >
    );
}

export default Navbar;