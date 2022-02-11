import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import {PrimaryButtonSend} from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
import   {toast}  from 'react-toastify';

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()

    // const [nameInput, setName] = useState('')
    // const [emailInput, setEmail] = useState('')
    // const [phoneInput, setPhone] = useState('')
    // const [textInput, setText] = useState('')

    const SubmitData = () => {

        if (ref1.current.value==='' || ref2.current.value==='' || ref3.current.value==='') {
            toast.error("please enter the message in full")
        }else{
            const a = {
                nameInput: ref1,
                emailInput: ref2,
                phoneInput: ref3,
                textInput: ref4
            }
            toast.success("successfully")
            ref1.current.value = ''
            ref2.current.value = ''
            ref3.current.value = ''
            ref4.current.value = ''
        }



    }



    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled >
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className="form" >
                            <div className="form-field">
                                <label htmlFor="name"  >Enter your name*</label>
                                <input type="text" id="name" ref={ref1} required="sass" autoComplete="off" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email"  >Enter your phone</label>
                                <input type="email" id="email" ref={ref2} required="sasas" autoComplete='off' />
                            </div>
                            <div className="form-field">
                                <label htmlFor="phone"  >Enter your email*</label>
                                <input type="text" id="phone" ref={ref3} required="sasasa" autoComplete='off' />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter your Message*</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10" ref={ref4} required="sdsds"></textarea>
                            </div>
                            <div className="form-field f-button" onClick={SubmitData}>
                                <PrimaryButtonSend title={'Send Email'}  />
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem title={'Phone'} icon={phone} cont1={'+998 99 552 02 97'} />
                        <ContactItem title={'Email'} icon={email} cont1={'diyorxasanov75@gmail.com'} />
                        <ContactItem title={'Address'} icon={location} cont1={'Chilonzor 7, Tashkent, Uzbekistan'} />
                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);

            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            .form-field{
                margin-top: 2rem;
                position: relative;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }

            
        }
    }
`;

export default ContactPage
