import React from 'react';
import Footer from './Footer';
// import img1 from './img1.jpg'
// import img2 from './img2.jpg'
import health from './health.jpg'
import entertain from './entertain.jpg'
import sport from './sport.jpg'
import tech from './tech.jpg'
import science from './science.jpg'
// import img2 from './tech.jpg'

const Home = () => {
    return (
        <>
             
            <div className="col-md-12 col-12 col-lg-12 box border border-dark col-xs-12 col-sm-12 mx-auto" >
                <div className="card" >
                    <img style={{height: "20rem"}} src="https://media.giphy.com/media/2yxkSUWYzgnsPje3X8/giphy.gif" alt="" />
                </div>
            </div>
          
            
            <div className="container">
                <div className="row my-3">
                    <div className="card my-3 mx-4" style={{ width: '18rem' }}>
                        <a href="/entertainment"><img src={entertain} className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card my-3 mx-4" style={{ width: '18rem' }}>
                        <a href="/sports"><img src={sport} style={{ height: '10rem' }} className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card my-3 mx-4" style={{ width: '18rem' }}>
                        <a href="/science"><img src={tech} style={{ height: '10rem' }} className="card-img-top" alt="..." /></a>
                        {/* <a href="/entertainment"></a> */}
                        {/* <link rel="stylesheet" href="/entertainment" /> */}
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card my-3 mx-4" style={{ width: '18rem' }}>
                        <a href="/general"><img src={science} style={{ height: '10rem' }} className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card my-3 mx-4" style={{ width: '18rem' }}>
                        <a href="/health"><img src={health} style={{ height: '10rem' }} className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card my-3 mx-4" style={{ width: '18rem' }}>
                        <a href="/business"><img src={health} style={{ height: '10rem' }} className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home