import React, { Component } from "react";

export const Carrusel = () => (
    <>
	<div class="d-flex justify-content-center">
    <div id="carouselExampleCaptions" class="d-flex carousel slide w-75 p-3 h-75">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="https://th.bing.com/th/id/OIP.jwHHNqr-BqTNq1OY6mAzCQHaDt?pid=ImgDet&rs=1" class="d-block w-100 " alt="..." width="1000"
            height="500" />
            <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="https://th.bing.com/th/id/OIP._yrS-1wvF4066Ln55Sws_wHaDt?pid=ImgDet&rs=1" class="d-block w-100" alt="..." width="1000"
            height="500"/>
            <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
            </div>
        </div>
        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    </div>
    </>
);