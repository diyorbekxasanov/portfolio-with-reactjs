import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Diyor Hasanov</span></h1>
                <p>Welcome to my personal portfolio , I'm a frontend developer. I can build JavaScript , React Js and Next Js web applications from the ground up. I plan to develop skills of Angular and Vue in the near future. Build appealing websites throuhg CSS frameworks such as SCSS, BootStrap and Styled Components.</p>
                <div className="icons">
                    <a href="https://www.facebook.com/diyor.xasanov.125/" target='_blank' className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/diyorbekxasanov" target='_blank' className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://t.me/diyego347" target='_blank' className="icon i-telegram">
                        <TelegramIcon/>
                    </a>
                    <a href="https://instagram.com/d.xasanov347" target='_blank' className="icon i-instagram">
                        <InstagramIcon/>
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
            .i-instagram{
                &:hover{
                    border:2px solid #db492c;
                    color:#db492c
                }
            }

        }
    }
`;

export default HomePage;
