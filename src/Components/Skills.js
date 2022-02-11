import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'BOOTSTRAP'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'SASS'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'JavaScript'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'JQuery'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'React Hooks'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Redux'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'Git'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'GitHub'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'Next JS'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'Webpack'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'Material UI'}
                            width={'70%'}
                            text={'70%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
