import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            
                        At <b>Trend Bazzar</b>, we believe in more than just selling products; we're here to create an experience, a community, and a destination for all your needs. Our journey began with a simple idea: to provide high-quality products that enhance your life.

                        Our mission is to empower and inspire individuals to enhance their lives through a curated selection of high-quality products that blend style, functionality, and innovation. Whether it's delivering the latest trends, providing essential everyday items, or offering unique and handcrafted pieces, we are dedicated to exceeding your expectations.
                        
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
