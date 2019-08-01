import React from 'reactn'
import { Fade } from 'react-slideshow-image';

import wear from '../assets/imgs/wear.svg'
import wearcopy4 from '../assets/imgs/wearcopy4.svg'
import wearcopy5 from '../assets/imgs/wearcopy5.svg'
import wearcopy6 from '../assets/imgs/wearcopy6.svg'
import wearcopy7 from '../assets/imgs/wearcopy7.svg'

const fadeImages = [
    wear,
    wearcopy4,
    wearcopy5,
    wearcopy6,
    wearcopy7
];

const fadeProperties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
}

const Slideshow = () => {
    return (
        <Fade {...fadeProperties}>
            <div className="each-fade">
                <div className="image-container">
                    <img src={fadeImages[0]} />
                </div>
            </div>
            <div className="each-fade">
                <div className="image-container">
                    <img src={fadeImages[1]} />
                </div>
            </div>
            <div className="each-fade">
                <div className="image-container">
                    <img src={fadeImages[2]} />
                </div>
            </div>
            <div className="each-fade">
                <div className="image-container">
                    <img src={fadeImages[3]} />
                </div>
            </div>
            <div className="each-fade">
                <div className="image-container">
                    <img src={fadeImages[4]} />
                </div>
            </div>
        </Fade>
    )
}

export default Slideshow