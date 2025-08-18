import { Link } from 'react-router-dom'
import { ValidationError } from '@formspree/react'
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import styled from 'styled-components'
import { HiOutlinePaperAirplane } from 'react-icons/hi2'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import useContactMe from '../hooks/useContactMe'
import SpinnerMini from '../components/ui/SpinnerMini'
import { LargeTitle } from '../components/FAQ'
import { DescriptionTitle } from '../components/FavoriteSingers'
import MessageSent from '../components/ui/MessageSent'

const Contact = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 2rem;
    margin: 6rem auto 11rem;

    & h1 {
        font-size: 1.4rem;
    }

    @media (max-width: 1281px) and (max-width: 1919px){
        width: 60%;
    }

    @media (min-width: 885px) and (max-width: 1280px) {
        width: 70%;
        margin: 4rem auto 9rem;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        width: 100%;
        padding: 0 5%;
        margin: 2rem auto 6rem;
    }
    
    @media (max-width: 480px) {
        width: 94%;
        grid-template-columns: repeat(1, 1fr);
        margin: 2rem auto 6rem;
    }
`;

const ContactInfo = styled.div`
    color: var(--dark-green);
    display: grid;
    gap: 2rem;
    background-color: transparent;
    border-radius: .5rem;
    padding: 2rem 0;

    & main {
        display: grid;
        gap: 1.5rem;

        & article {
            display: flex;
            align-items: center;
            gap: 1.4rem;

            & span {
                background-color: var(--weak-blue);
                color: var(--light-blue);
                padding: 0.6rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.6rem;
                border-radius: .3rem;
            }

            & div {
                display: grid;
                gap: .2rem;

                & p {
                    font-size: .9rem;
                    color: var(--light-grey);
                }

                & h6 > a {
                    font-size: 1rem;
                    font-weight: 400;
                    color: var(--dark-green);
                    text-decoration: none;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        padding: 2rem 2.3rem;
    }
`;

const MessageContainer = styled.div`
    display: block;
    padding: 2rem 2.3rem;
    height: fit-content;
    border-radius: .6rem;

    & h1 {
        margin-bottom: 2rem;
    }
`

const ContactForm = styled.form`
    display: grid;
    gap: 1.2rem;
    height: fit-content;
    overflow: hidden;
    
    & label {
        display: grid;
        gap: .2rem;
        
        & h1 {
            color: var(--dark-green);
            margin-bottom: 2rem;
            font-size:  1.4rem;;
        }

        & input {
            border: 2px solid transparent;
            outline: none;
            padding: .8rem 1rem;
            border-radius: .4rem;
            color: white;
            font-family: inherit;
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: .3rem;
            background-color: var(--weak-blue);
            transition: border .1s ease-out;

            &::placeholder {
                color: var(--light-grey);
                font-weight: 500;
            }

            &:focus {
                border: 2px solid var(--light-grey);
            }
        }

        & textarea{
            border: 2px solid transparent;
            outline: none;
            padding: .8rem 1rem;
            border-radius: .4rem;
            color: white;
            font-family: inherit;
            font-size: 1rem;
            font-weight: 500;
            height: 150px;
            resize: none;
            overflow: auto;
            margin-bottom: .3rem;
            background-color: var(--weak-blue);
            transition: border .1s ease-out;

            &::placeholder {
                color: var(--light-grey);
                font-weight: 500;
            }

            &:focus {
                border: 2px solid var(--light-grey);
            }
        }

        & p {
            color: #F20F38;
            font-size: .8rem;
            font-weight: 400;
        }
    }
`;

const Buttons = styled.div`
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BackButton = styled.button`
    background-color: transparent;
    color: ${({ obsolete }) => obsolete === 'true' ? 'var(--weak-blue)' : 'var(--dark-green)'};
    padding: .6rem 1.4rem;
    font-size: 1rem;
    border-radius: .5rem;
    transition: all .2s ease-in;

    &:hover {
        background-color: ${({ obsolete }) => obsolete === 'false' && 'var(--weak-blue)'};
    }
`;

const NextButton = styled.button`
    background-color: var(--light-blue);
    color: var(--dark-green);
    padding: .6rem 1.4rem;
    font-size: 1rem;
    border-radius: .5rem;
`;

const SendButton = styled.button`
    background-color: var(--light-blue);
    color: var(--dark-green);
    padding: .6rem 1.4rem;
    font-size: 1rem;
    border-radius: .5rem;

    display: flex;
    align-items: center;
    gap: .5rem;

    & svg {
        width: 1.1rem;
        height: 1.1rem;
    }
`;

const Stepper = styled.div`
    width: 34%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    margin-bottom: 1.5rem;

    & div {
        width: .6rem;
        height: .6rem;
        background-color: var(--light-grey);
        border-radius: 5px;
        transition: all 0.3s ease-in;
        
        &.active {
            width: 2.6rem;
            height: .7rem;
            background-color: var(--light-blue);
        }
    }
`;

export default function ContactPage() {
    const {
        state,
        isValid,
        step,
        isMobile,
        prevStep,
        sent,
        register,
        onSubmit,
        nextStep,
        handleSubmitHookForm,
        hookFormErrors
    } = useContactMe()

    return (
        <article style={{ marginTop: "9%" }}>
            <LargeTitle>Let's Connect<span>👋</span></LargeTitle>
            <DescriptionTitle>Choose your preferred way to reach out</DescriptionTitle>

            <Contact>
                <ContactInfo>
                    {!isMobile && <h1>Contact Information</h1>}
                    <main>
                        <article>
                            <span>
                                <HiOutlineMail />
                            </span>
                            <div>
                                <p>Email</p>
                                <h2>
                                    <Link to="mailto:makenedev@gmail.com" target='_blank' aria-label="Access the email">
                                        makenedev@gmail.com
                                    </Link>
                                </h2>
                            </div>
                        </article>
                        <article>
                            <span>
                                <HiOutlinePhone />
                            </span>
                            <div>
                                <p>Phone</p>
                                <h2>
                                    <Link to="tel:+244945336003" target='_blank' aria-label="Access the phone number">
                                        +244 945 336 003
                                    </Link>
                                </h2>
                            </div>
                        </article>
                        <article>
                            <span>
                                <HiOutlineLocationMarker />
                            </span>
                            <div>
                                <p>Location</p>
                                <h2>
                                    <Link to="https://www.google.com/maps/place/Zango+0,+Luanda,+Angola"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Access the location"
                                    >
                                        Luanda, Angola
                                    </Link>
                                </h2>
                            </div>
                        </article>
                    </main>
                </ContactInfo>

                <MessageContainer>
                    {sent ? (
                        <MessageSent />
                    ) : (
                        <>
                            <ContactForm onSubmit={handleSubmitHookForm(onSubmit)}>
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {step === 1 && (
                                        <div>
                                            <label htmlFor="name">
                                                <h1>What's your name?</h1>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    placeholder='Enter your name'
                                                    {...register('Name', { required: `Wow! No name, no email! Even AI needs to know who you are talking to. 🤖` })}
                                                    autoComplete='off'
                                                />
                                                <ValidationError
                                                    prefix="Name"
                                                    field="Name"
                                                    errors={state.errors}
                                                />
                                                {hookFormErrors.Name && <p>{hookFormErrors.Name.message}</p>}
                                            </label>
                                            <Buttons>
                                                <BackButton type="button" onClick={prevStep} disabled obsolete="true">Back</BackButton>
                                                {isValid && (
                                                    <NextButton type="button" onClick={nextStep}>Next</NextButton>
                                                )}
                                            </Buttons>
                                        </div>
                                    )}
                                    {step === 2 && (
                                        <div>
                                            <label htmlFor="email">
                                                <h1>What's your email?</h1>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    placeholder='your@email.com'
                                                    {...register('Email', {
                                                        required: 'Hmm... try to send an email without email? Is this magic or a bug? 🪄📧',
                                                        pattern: {
                                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                            message: 'Hmm... try to send an email without email? Is this magic or a bug? 🪄📧'
                                                        }
                                                    })}
                                                    autoComplete='off'
                                                />
                                                <ValidationError
                                                    prefix="Email"
                                                    field="Email"
                                                    errors={state.errors}
                                                />
                                                {hookFormErrors.Email && <p>{hookFormErrors.Email.message}</p>}
                                            </label>
                                            <Buttons>
                                                <BackButton type="button" onClick={prevStep} obsolete="false">Back</BackButton>
                                                {isValid && (
                                                    <NextButton type="button" onClick={nextStep}>
                                                        Next
                                                    </NextButton>
                                                )}
                                            </Buttons>
                                        </div>
                                    )}
                                    {step === 3 && (
                                        <div>
                                            <label htmlFor="about">
                                                <h1>What's this about?</h1>
                                                <input
                                                    id="about"
                                                    type="text"
                                                    name="about"
                                                    placeholder='Subject of discussion'
                                                    {...register('About', { required: 'Have you ever wondered if the movies were like this? Now we present... nothing! Insert a theme, please.🎬' })}
                                                    autoComplete='off'
                                                />
                                                <ValidationError
                                                    prefix="About"
                                                    field="About"
                                                    errors={state.errors}
                                                />
                                                {hookFormErrors.About && <p>{hookFormErrors.About.message}</p>}
                                            </label>
                                            <Buttons>
                                                <BackButton type="button" onClick={prevStep} obsolete="false">Back</BackButton>
                                                {isValid && (
                                                    <NextButton type="button" onClick={nextStep}>Next</NextButton>
                                                )}
                                            </Buttons>
                                        </div>
                                    )}
                                    {step === 4 && (
                                        <div>
                                            <label htmlFor="message">
                                                <h1>Your message</h1>
                                                <textarea
                                                    id="message"
                                                    type="text"
                                                    name="message"
                                                    placeholder='Type your message here...'
                                                    {...register('Message', { required: 'We really wanted to answer, but there is nothing to read! 🤷‍♂️' })}
                                                    autoComplete='off'
                                                />
                                                <ValidationError
                                                    prefix="Message"
                                                    field="Message"
                                                    errors={state.errors}
                                                />
                                                {hookFormErrors.Message && <p>{hookFormErrors.Message.message}</p>}
                                            </label>
                                            <Buttons>
                                                <BackButton type="button" onClick={prevStep} obsolete="false">Back</BackButton>
                                                {isValid && (
                                                    <SendButton type="submit" disabled={state.submitting}>
                                                        {!state.submitting ? (
                                                            <>
                                                                Send
                                                                <HiOutlinePaperAirplane />
                                                            </>
                                                        ) : (
                                                            <SpinnerMini />
                                                        )}
                                                    </SendButton>
                                                )}
                                            </Buttons>
                                        </div>
                                    )}
                                </motion.div>
                            </ContactForm>

                            <Stepper>
                                <div className={step === 1 ? 'active' : ''}></div>
                                <div className={step === 2 ? 'active' : ''}></div>
                                <div className={step === 3 ? 'active' : ''}></div>
                                <div className={step === 4 ? 'active' : ''}></div>
                            </Stepper>
                        </>
                    )}
                </MessageContainer>
            </Contact>
        </article>
    );
}