import styled from "styled-components"
import { Link } from "react-router-dom"
import { HiOutlineEllipsisHorizontal, HiOutlineSpeakerXMark } from "react-icons/hi2";
import { HiOutlinePlusCircle } from "react-icons/hi";

import { LargeTitle } from "./FAQ"
import useSingers from "../hooks/useSingers";

const SingerStyled = styled.section`
    margin-top: 10rem;
    width: 100%;

    @media (max-width: 1280px) {
        margin-top: 10rem;
    }

    @media (max-width: 480px) {
        margin-top: 6rem;
    }
`

export const DescriptionTitle = styled.p`
    width: ${({ noWidth }) => noWidth === 'yes' ? '32rem' : '50rem'};
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--light-grey);
    text-align: center;
    margin: ${({ margin }) => margin === 'large' ? '2rem auto 4rem' : '1rem auto 2rem'};

    @media (max-width: 1919px){
        margin: 0 auto 2rem;
    }

    @media (max-width: 1280px) {
        width: ${({ noWidth }) => noWidth === 'yes' ? '32rem' : '45rem'};
        margin: 0 auto 2rem;
        font-size: 1.2rem;
    }
    
    @media (max-width: 884px) {
        width: ${({ noWidth }) => noWidth === 'yes' ? '16rem;' : ''};
    }

    @media (max-width: 480px) {
        width: ${({ noWidth }) => noWidth === 'yes' ? '95%' : '95%'};
        margin: 0 auto 2rem;
        font-size: 1rem;
        padding-inline: 1rem;
    }
`

const gradientHeight = '40%';

const Singers = styled.div`
    width: 80%;
    margin: 4rem auto 13rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 40rem;
    gap: 1rem;

    @media (max-width: 1281px) and (max-width: 1919px){
        width: 90%;
        grid-template-rows: 32rem;
    }

    @media (min-width: 885px) and (max-width: 1280px) {
        width: 95%;
        grid-template-rows: 28rem;
        margin: 4rem auto 11rem;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 26rem);
    }

    @media (max-width: 480px) {
        width: 92%;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, 20rem);
        gap: 1.3rem;
        margin: 4rem auto 7rem;
    }

    .singer {
        height: 100%;
        position: relative;
        overflow: hidden;

        &:hover {
            & .controls {
                opacity: 1;
                bottom: 2%;
                
                @media (max-width: 1280px) {
                    bottom: 2.5%;
                }

                @media (max-width: 480px) {
                    bottom: 4%;
                }
            }
        }

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: ${gradientHeight};
            background: linear-gradient(to bottom, rgb(0, 0, 0), transparent);
            z-index: 1;

            @media (max-width: 480px) {
                height: 10rem;
                background: linear-gradient(to bottom, rgb(0, 0, 0), transparent);
            }
        }

        .controls {
            opacity: 0;
            transition: all .3s ease-in;
            width: 100%;
            position: absolute;
            bottom: -8%;
            padding: 0 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            & span {
                background-color: rgba(0, 0, 0, 0.41);
                color: white;
                font-size: .9rem;
                padding: .2rem .5rem;
                border-radius: 22rem;
                display: flex;
                align-items: center;
                gap: .2rem;
                animation: colorOscillation 2s infinite;

                @keyframes colorOscillation {
                    0%, 100% {
                        color: white;
                    }
                    50% {
                        color: rgb(191, 191, 191);
                    }
                }

                & svg {
                    width: 1.1rem;
                    height: 1.1rem;
                }
            }

            &__btn {
                display: flex;
                align-items: center;
                gap: 1.1rem;

                & a {
                    text-decoration: none;
                }

                & svg {
                    font-size: 2rem;
                    color: white;
                    cursor: pointer;

                    @media (max-width: 1280px) {
                        font-size: 1.7rem;
                    }
                }

                &--play {
                    background-color: white;
                    color: black;
                    width: 2.6rem;
                    height: 2.6rem;
                    padding: 0 0 .1rem .2rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                    border-radius: 50%;
                    cursor: pointer;

                    @media (max-width: 1280px) {
                        width: 2.2rem;
                        height: 2.2rem;
                        font-size: 1rem;
                        padding: 0 0 0 .2rem;
                    }
                }

                @media (max-width: 1280px) {
                    gap: .8rem;
                }
            }
        }
    }

    .profileSinger {
        width: 6rem;
        height: 6rem;
        border-radius: .2rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
        z-index: 2;

        @media (max-width: 1280px) {
            width: 4rem;
            height: 4rem;
        }

        @media (max-width: 480px) {
            width: 6rem;
            height: 6rem;
        }
    }
`

const Singer1 = styled.div`
    background: url('/assets/singers/drake-artist.webp') no-repeat center center/cover;
`

const ProfileSinger1 = styled.div`
    background: url('/assets/singers/drake-artist.webp') no-repeat center center/cover;
`

const Singer2 = styled.div`
    background: url('/assets/singers/omah-lay-artist.webp') no-repeat center center/cover;
`

const ProfileSinger2 = styled.div`
    background: url('/assets/singers/omah-lay-artist.webp') no-repeat center center/cover;
`

const Singer3 = styled.div`
    background: url('/assets/singers/veigh-artist.webp') no-repeat center center/cover;
`

const ProfileSinger3 = styled.div`
    background: url('/assets/singers/veigh-artist.webp') no-repeat center center/cover;
`

const Singer4 = styled.div`
    background: url('/assets/singers/burna-boy-artist.webp') no-repeat center center/cover;
`

const ProfileSinger4 = styled.div`
    background: url('/assets/singers/burna-boy-artist.webp') no-repeat center center/cover;
`

const SingerInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
    z-index: 2;
    margin: 1.4rem 0 0 1.4rem;
`

const SingerText = styled.div`
    display: grid;
    gap: .1rem;
    color: white;
    
    & h1 {
        font-weight: 500;
        font-size: 1.7rem;
        
        @media (max-width: 1280px) {
            font-size: 1.3rem;
        }

        @media (max-width: 884px) {
            font-size: 1.8rem;
        }

        @media (max-width: 480px) {
            font-size: 1.4rem;
        }
    }

    & p {
        display: flex;
        align-items: center;
        gap: .2rem;

        & img {
            width: 1rem;
            height: 1rem;

            @media (max-width: 1280px) {
                width: .8rem;
                height: .8rem;
            }
        }

        @media (max-width: 480px) {
            font-weight: 500;
        }
    }

    @media (max-width: 1280px) {
        font-size: .8rem;
    }

    @media (max-width: 480px) {
        font-size: .9rem;
    }
`

export default function FavoriteSingers() {
    const { omahLay,
        drake,
        veigh,
        burnaBoy } = useSingers()

    return (
        <SingerStyled>
            <LargeTitle>Favorite Singers</LargeTitle>
            <DescriptionTitle>Here are the artists who inspire me most and are part of my daily soundtrack.</DescriptionTitle>

            <Singers>
                <Singer1 className="singer">
                    <SingerInfo>
                        <ProfileSinger1 className="profileSinger"></ProfileSinger1>
                        <SingerText>
                            <h1>Drake</h1>
                            <p>
                                Verified artist
                                <img
                                    src="/assets/singers/verificado.webp"
                                    alt="verified"
                                    loading="lazy"
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            </p>
                        </SingerText>
                    </SingerInfo>

                    <div className="controls">
                        <span>
                            <HiOutlineSpeakerXMark />
                            Preview
                        </span>

                        <div className="controls__btn">
                            <Link to={drake} target="_blank" aria-label="More options">
                                <HiOutlineEllipsisHorizontal />
                            </Link>

                            <Link to={drake} target="_blank" aria-label="Add to playlist">
                                <HiOutlinePlusCircle />
                            </Link>

                            <Link to={drake} target="_blank" aria-label="Play">
                                <div className="controls__btn--play">▶</div>
                            </Link>
                        </div>
                    </div>
                </Singer1>

                <Singer2 className="singer">
                    <SingerInfo>
                        <ProfileSinger2 className="profileSinger"></ProfileSinger2>
                        <SingerText>
                            <h1>Omah Lay</h1>
                            <p>
                                Verified artist
                                <img
                                    src="/assets/singers/verificado.webp"
                                    alt="verified"
                                    loading="lazy"
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            </p>
                        </SingerText>
                    </SingerInfo>

                    <div className="controls">
                        <span>
                            <HiOutlineSpeakerXMark />
                            Preview
                        </span>

                        <div className="controls__btn">
                            <Link to={omahLay} target="_blank" aria-label="More options">
                                <HiOutlineEllipsisHorizontal />
                            </Link>

                            <Link to={omahLay} target="_blank" aria-label="Add to playlist">
                                <HiOutlinePlusCircle />
                            </Link>

                            <Link to={omahLay} target="_blank" aria-label="Play">
                                <div className="controls__btn--play">▶</div>
                            </Link>
                        </div>
                    </div>
                </Singer2>

                <Singer3 className="singer">
                    <SingerInfo>
                        <ProfileSinger3 className="profileSinger"></ProfileSinger3>
                        <SingerText>
                            <h1>Veigh</h1>
                            <p>
                                Verified artist
                                <img
                                    src="/assets/singers/verificado.webp"
                                    alt="verified"
                                    loading="lazy"
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            </p>
                        </SingerText>
                    </SingerInfo>

                    <div className="controls">
                        <span>
                            <HiOutlineSpeakerXMark />
                            Preview
                        </span>

                        <div className="controls__btn">
                            <Link to={veigh} target="_blank" aria-label="More options">
                                <HiOutlineEllipsisHorizontal />
                            </Link>

                            <Link to={veigh} target="_blank" aria-label="Add to playlist">
                                <HiOutlinePlusCircle />
                            </Link>

                            <Link to={veigh} target="_blank" aria-label="Play">
                                <div className="controls__btn--play">▶</div>
                            </Link>
                        </div>
                    </div>
                </Singer3>

                <Singer4 className="singer">
                    <SingerInfo>
                        <ProfileSinger4 className="profileSinger"></ProfileSinger4>
                        <SingerText>
                            <h1>Burna Boy</h1>
                            <p>
                                Verified artist
                                <img
                                    src="/assets/singers/verificado.webp"
                                    alt="verified"
                                    loading="lazy"
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            </p>
                        </SingerText>
                    </SingerInfo>

                    <div className="controls">
                        <span>
                            <HiOutlineSpeakerXMark />
                            Preview
                        </span>

                        <div className="controls__btn">
                            <Link to={burnaBoy} target="_blank" aria-label="More options">
                                <HiOutlineEllipsisHorizontal />
                            </Link>

                            <Link to={burnaBoy} target="_blank" aria-label="Add to playlist">
                                <HiOutlinePlusCircle />
                            </Link>

                            <Link to={burnaBoy} target="_blank" aria-label="Play">
                                <div className="controls__btn--play">▶</div>
                            </Link>
                        </div>
                    </div>
                </Singer4>
            </Singers>
        </SingerStyled>
    )
}
