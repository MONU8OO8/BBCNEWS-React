import React from 'react';
import Footer from './Footer';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import health from './health.jpg'
import entertain from './entertain.jpg'
import sport from './sport.jpg'
import tech from './tech.jpg'

const Home = () => {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img3} style={{ height: '25rem' }} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img1} style={{ height: '25rem' }} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img2} style={{ height: '25rem' }} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container">
            <div className="row my-3">
                <div class="card my-3 mx-4" style={{width: '18rem'}}>
                    <a href="/entertainment"><img src={entertain} class="card-img-top" alt="..."/></a>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                <div class="card my-3 mx-4" style={{width: '18rem'}}>
                    <a href="/sports"><img src={sport} style={{height:'10rem'}} class="card-img-top" alt="..."/></a>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                <div class="card my-3 mx-4" style={{width: '18rem'}}>
                    <a href="/science"><img src={tech} style={{height:'10rem'}} class="card-img-top" alt="..."/></a>
                    {/* <a href="/entertainment"></a> */}
                    {/* <link rel="stylesheet" href="/entertainment" /> */}
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                <div class="card my-3 mx-4" style={{width: '18rem'}}>
                    <a href="/general"><img src="..." style={{height:'10rem'}} class="card-img-top" alt="..."/></a>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                <div class="card my-3 mx-4" style={{width: '18rem'}}>
                    <a href="/health"><img src={health} style={{height:'10rem'}} class="card-img-top" alt="..."/></a>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                <div class="card my-3 mx-4" style={{width: '18rem'}}>
                    <a href="/business"><img src="..." style={{height:'10rem'}} class="card-img-top" alt="..."/></a>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
            </div>
            </div>
            <Footer/> 
        </>
    )
}

export default Home