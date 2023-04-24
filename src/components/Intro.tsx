import React from 'react'
//@ts-ignore
import section from '../assets/bg-img.jpg';

export default function Intro() {
    return (
        <div className="section-1">
            <div className="img" style={{
                background: `url(${section}) no-repeat center center fixed`,
                backgroundSize: 'cover'
            }}>
                <div className="text-1" id="home">
                    <h1 style={{ marginLeft: '4rem' }}>Bulding India's Future</h1>
                    <br />
                    <p className="head-p">Alic is a Construction business in India, dedicated to providing high-quality services
                        in
                        the construction of residential, commercial and industrial projects. We provide innovative and
                        cost-effective solutions, ensuring customer satisfaction with our commitment to delivering quality
                        workmanship.</p>
                    <br />
                    <button className="btn-section duration-150">Contact</button>
                </div>
            </div>
        </div>
    )
}
