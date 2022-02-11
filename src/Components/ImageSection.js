import React, {useRef} from 'react'
import styled from 'styled-components';
import resume from '../img/about5.jpg';
import PrimaryButton from './PrimaryButton';


function ImageSection() {

    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Diyor Hasanov</span></h4>
                <p className="paragraph">I'm also very interested in conferences and meetups, often participating in forums, discussions in the Telegram chat rooms and Stack Overflow. In my spare time, I study browser principles, page rendering, DOM model, etc.
                </p>
                <div  className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Hasanov Diyor</p>
                        <p>: 24</p>
                        <p>: Uzbek </p>
                        <p>: Uzbek, Russian, English </p>
                        <p>: Tashkent, Chilonzor 7</p>
                        <p>: Frontend</p>
                    </div>
                </div>
                <PrimaryButton  title={'Download Cv'} />
                
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
