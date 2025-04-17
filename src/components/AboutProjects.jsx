import styled from 'styled-components'

import { LargeTitle } from './FAQ'
import { DescriptionTitle } from './FavoriteSingers'
import { useMediaQuery } from 'react-responsive'

const MyFeatures = styled.main`
    background: linear-gradient(180deg, rgba(24,34,42,1) 11%, rgba(24, 34, 42, 0) 100%);
    margin-top: 10rem;
    display: grid;
    gap: 16rem;
    border-top: var(--light-border);
    padding-top: 6rem;
    
    @media (max-width: 1280px) {
        gap: 12rem;
        padding-top: 4rem;
    }

    @media (max-width: 884px) {
        display: block;
    }

    @media (max-width: 480px) {
        display: block;
        padding-top: 2rem;
        margin-top: 5rem;
    }
`

const TextBlock = styled.div`
    display: grid;
    margin-inline: 7rem;
    gap: 8.5rem;

    @media (max-width: 1280px) {
        gap: 6rem;
    }
    
    @media (max-width: 1280px) {
        margin-inline: 3rem;
    }

    @media (max-width: 480px) {
        margin-inline: 1.5rem;
        gap: 4rem;
    }
`

const Text = styled.div`
    width: 50%;
    display: grid;
    gap: 1rem;
    
    & h1 {
        font-size: 3rem;
        font-weight: 800;
        line-height: 3.8rem;

        @media (max-width: 1280px) {
            font-size: 2rem;
            line-height: 2.6rem;
        }

        @media (max-width: 884px) {
            font-size: 2.3rem;
            line-height: 3.1rem;
        }

        @media (max-width: 480px) {
            font-size: 1.7rem;
            line-height: 2.2rem;
        }
    }

    & p {
        font-size: 1.3rem;

        @media (max-width: 1280px) {
            font-size: 1.1rem;
        }

        & span {
            color: var(--light-blue);
        }

        @media (max-width: 884px) {
            font-size: 1.5rem;
        }

        @media (max-width: 480px) {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 884px) {
        width: 100%;
    }
`

const Techs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & img {
        width: 12rem;
        height: 3rem;
        transition: all .2s ease-in-out;

        @media (max-width: 1280px) {
            width: 7rem;
            height: 1.9rem;
        }


        &:hover {
            transform: rotate(5deg);
        }

        @media (max-width: 884px) {

            &:nth-child(2) {
                justify-self: center;
            }

            &:nth-child(3) {
                justify-self: end;
            }
        }

        @media (max-width: 884px) {
            width: 11rem;
            height: 3rem;
        }

        @media (max-width: 480px) {
            width: 7.3rem;
            height: 2.1rem;
            justify-self: center;

            &:nth-child(3) {
                justify-self: center;
            }
        }
    }

    .imageSize {
        width: 19rem;
        height: 2.9rem;
        justify-self: center;
        
        @media (max-width: 1280px) {
            width: 12rem;
            height: 2.5rem;
        }

        @media (max-width: 884px) {
            width: 15rem;
            height: 4rem;
        }
        
        @media (max-width: 480px) {
            width: 12rem;
            height: 1.9rem;
        }
    }

    @media (max-width: 884px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 3.3rem;
        justify-content: center;
    }
    
    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: auto;
        justify-content: center;
        row-gap: 1.8rem;
    }
`

const ProjectsContainer = styled.section`
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-inline: 6rem;

    @media (max-width: 1280px) {
        margin-inline: 3rem;
    }

    @media (max-width: 884px) {
        margin-top: 10rem;
    }

    @media (max-width: 480px) {
        display: grid;
        justify-content: center;   
        margin-top: 7rem;
        
        & div:first-child {
            display: none;
        }

        & div:last-child {
            justify-self: center;
        }
    }
`

const Website = styled.div`
    position: relative;
    background: ${({ type }) => type === 'first' ? `url('/images/about-projects/page1.webp')` : `url('/images/about-projects/page2.webp')`}  top center/cover;
    width: 34rem;
    height: 48rem;
    border-radius: .4rem .4rem 0 0;

    & img {
        box-shadow: 0 0 8px 4px #0000001c;
    }

    @media (max-width: 1280px) {
        width: 20rem;
        height: 34rem;
    }

    @media (max-width: 884px) {
        height: 25rem;
    }

    ${({ type }) => type === 'first' ? `
        & img {
            position: absolute;
            top: 66%;
            right: -82%;

            @media (max-width: 884px) {
                top: 77%;
                right: -62%;
            }
        }
    ` : `
        & img {
            position: absolute;
            top: 31%; 
            left: -82%;

            @media (max-width: 1280px) {
                top: 41%; 
                left: -82%;
            }

            @media (max-width: 884px) {
                top: 52%;
                left: -62%;
            }

            @media (max-width: 480px) {
                display: none;
            }
        }

        @media (max-width: 480px) {
            margin-right: 0;
        }
    `}

    @media (max-width: 480px) {
        width: 82vw;
        height: 25rem;
    }
`

const Content = styled.div`
    text-align: center;
`

export default function AboutProjects() {
    const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 884 })

    return (
        <MyFeatures>
            <TextBlock>
                <Text>
                    <h1>Continuous Learning to Create Innovative and Modern Solutions</h1>
                    <p>I am always looking for new knowledge and technologies to develop modern and innovative solutions. I believe the combination of continuous learning and modern tools allows you to create scalable, interactive and high performance. My focus is on building <span>Digital Experiences that Go Beyond the Conventional</span>, integrating design, animations and features that make a difference.</p>
                </Text>

                <Techs>
                    <img src='/images/about-projects/next-white.svg'
                        alt='Next JS'
                        loading='lazy'
                    />
                    <img src='/images/about-projects/radix-white.svg'
                        alt='Radix UI'
                        loading='lazy'
                    />
                    <img src='/images/about-projects/framer-motion-white.svg'
                        alt='Framer Motion'
                        loading='lazy'
                    />
                    <img src='/images/about-projects/tailwind-white.svg'
                        alt='Tailwind CSS'
                        className='imageSize'
                        loading='lazy'
                    />

                    {isTablet && <div></div>}

                    <img src='/images/about-projects/headlessui-white.svg'
                        alt=''
                        className='imageSize'
                        loading='lazy'
                    />
                </Techs>
            </TextBlock>

            <ProjectsContainer>
                <Website type='first'>
                    <img src='/images/about-projects/page1-screen.webp' alt='Website' loading='lazy' />
                </Website>

                <Content>
                    <LargeTitle>Become it reality <span>⛏️</span></LargeTitle>
                    <DescriptionTitle noWidth="yes">Contact us and let's make your project idea a reality.</DescriptionTitle>
                </Content>

                <Website type='last'>
                    <img src='/images/about-projects/page2-screen.webp' alt='Website' loading='lazy' />
                </Website>
            </ProjectsContainer>
        </MyFeatures>
    )
}
