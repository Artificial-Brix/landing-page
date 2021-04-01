import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import demoImage from '../../assets/placeholder image.jpg';
import './TeamMembers.css'

const TeamMembers = () => {

    const responsiveObject = {
        0: {
            items: 1,
        },
        450: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
        },
    }

    return (
        <section className='team-member'>
            <h3 className>OUR CORE TEAM MEMBERS</h3>
            <OwlCarousel responsive={responsiveObject} items={4} dots={false} center autoplay autoplaySpeed={1000} slidetransition={'linear'} autoplayTimeout={4000} loop mouseDrag margin={10}>
                <div className='item'>
                    <div className='carousel-item'>
                        <img src={demoImage} alt="" />
                        <p>Sayantan Kirtaniya</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='carousel-item'>
                        <img src={demoImage} alt="" />
                        <p>Sayantan Kirtaniya</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='carousel-item'>
                        <img src={demoImage} alt="" />
                        <p>Sayantan Kirtaniya</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='carousel-item'>
                        <img src={demoImage} alt="" />
                        <p>Sayantan Kirtaniya</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='carousel-item'>
                        <img src={demoImage} alt="" />
                        <p>Sayantan Kirtaniya</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='carousel-item'>
                        <img src={demoImage} alt="" />
                        <p>Sayantan Kirtaniya</p>
                    </div>
                </div>
            </OwlCarousel>;
        </section>
    );
};

export default TeamMembers;