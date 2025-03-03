import styled from "styled-components"
import { LargeTitle } from "./FAQ"
import { HiOutlineEllipsisHorizontal, HiOutlineSpeakerXMark } from "react-icons/hi2";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const SingerStyled = styled.section`
    margin-top: 4rem;
    width: 100%;

    @media (max-width: 480px) {
        margin-top: -1rem;
    }
`

export const DescriptionTitle = styled.p`
    width: 50rem;
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--light-grey);
    text-align: center;
    margin: ${({ margin }) => margin === 'large' ? '2rem auto 4rem' : '1rem auto 2rem'};

    @media (max-width: 1280px) {
        width: 45rem;
        margin: 0 auto 2rem;
        font-size: 1.2rem;
    }

    @media (max-width: 480px) {
        width: 100%;
        margin: 0 auto 2rem;
        font-size: 1rem;
        padding-inline: 1rem;
    }
`

const gradientHeight = '40%';

const Singers = styled.div`
    width: 80%;
    margin: 4rem auto 13rem;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 40rem;
    gap: 1rem;
    
    @media (max-width: 1280px) {
        width: 95%;
        grid-template-rows: 28rem;
        margin: 4rem auto 8rem;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, 20rem);
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
            transition: all 0.3s ease-in;
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
                font-size: 0.9rem;
                padding: 0.2rem 0.5rem;
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
                    padding: 0 0 0.1rem .2rem;
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
        margin: 1rem 0 0 1rem;
        border-radius: 0.2rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
        z-index: 2;

        @media (max-width: 1280px) {
            width: 4rem;
            height: 4rem;
            margin: 1.4rem 0 0 1.4rem;
        }

        @media (max-width: 480px) {
            width: 6rem;
            height: 6rem;
        }
    }
`

const Singer1 = styled.div`
    background: url('/images/kendrik-artist.jpeg') no-repeat center center/cover;
`

const ProfileSinger1 = styled.div`
    background: url('/images/kendrik-artist.jpeg') no-repeat center center/cover;
`

const Singer2 = styled.div`
    background: url('/images/drake-artist.jpeg') no-repeat center center/cover;
`

const ProfileSinger2 = styled.div`
    background: url('/images/drake-artist.jpeg') no-repeat center center/cover;
`

const Singer3 = styled.div`
    background: url('/images/veigh-artist.jpeg') no-repeat center center/cover;
`

const ProfileSinger3 = styled.div`
    background: url('/images/veigh-artist.jpeg') no-repeat center center/cover;
`

const Singer4 = styled.div`
    background: url('/images/burna-boy-artist.jpeg') no-repeat center center/cover;
`

const ProfileSinger4 = styled.div`
    background: url('/images/burna-boy-artist.jpeg') no-repeat center center/cover;
`

const SingerInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
    z-index: 2;
`

const SingerText = styled.div`
    display: grid;
    gap: 0.5rem;
    color: white;

    & p {
        display: flex;
        align-items: center;
        gap: 0.2rem;

        & img {
            width: 1rem;
            height: 1rem;
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
    const kendrik = 'https://open.spotify.com/intl-pt/artist/2YZyLoL8N0Wb9xBt1NhZWg?si=6_Bb3b-8StKq1-_yOLrysQ'

    const drake = 'https://open.spotify.com/intl-pt/artist/3TVXtAsR1Inumwj472S9r4?si=lfdgwGmuTWmzb4WBJhg_RQ'

    const veigh = 'https://open.spotify.com/intl-pt/artist/4YqwRbMLqGHRHLS1w2ZKse?si=6ocKu7jRSHmJEbOwKVR0YQ'

    const burnaBoy = 'https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa?si=ZBKRaJUMR1ui9Qco3Sv-Vw'

    return (
        <SingerStyled>
            <LargeTitle>Favorite Singers</LargeTitle>
            <DescriptionTitle>Here are the artists who inspire me most and are part of my daily soundtrack.</DescriptionTitle>

            <Singers>
                <Singer1 className="singer">
                    <SingerInfo>
                        <ProfileSinger1 className="profileSinger"></ProfileSinger1>
                        <SingerText>
                            <h1>Kendrik Lamar</h1>
                            <p>
                                Verified artist
                                <img src="/images/verificado.png" alt="verified" />
                            </p>
                        </SingerText>
                    </SingerInfo>

                    <div className="controls">
                        <span>
                            <HiOutlineSpeakerXMark />
                            Preview
                        </span>

                        <div className="controls__btn">
                            <Link to={kendrik} target="_blank">
                                <HiOutlineEllipsisHorizontal />
                            </Link>

                            <Link to={kendrik} target="_blank">
                                <HiOutlinePlusCircle />
                            </Link>

                            <Link to={kendrik} target="_blank">
                                <div className="controls__btn--play">▶</div>
                            </Link>
                        </div>
                    </div>
                </Singer1>

                <Singer2 className="singer">
                    <SingerInfo>
                        <ProfileSinger2 className="profileSinger"></ProfileSinger2>
                        <SingerText>
                            <h1>Drake</h1>
                            <p>
                                Verified artist
                                <img src="/images/verificado.png" alt="verified" />
                            </p>
                        </SingerText>
                    </SingerInfo>

                    <div className="controls">
                        <span>
                            <HiOutlineSpeakerXMark />
                            Preview
                        </span>

                        <div className="controls__btn">
                            <Link to={drake} target="_blank">
                                <HiOutlineEllipsisHorizontal />
                            </Link>

                            <Link to={drake} target="_blank">
                                <HiOutlinePlusCircle />
                            </Link>

                            <Link to={drake} target="_blank">
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
                                <img src="/images/verificado.png" alt="verified" />
                            </p>
                        </SingerText>
                    </SingerInfo>

                    <div className="controls">
                        <span>
                            <HiOutlineSpeakerXMark />
                            Preview
                        </span>

                        <div className="controls__btn">
                            <Link to={veigh} target="_blank">
                                <HiOutlineEllipsisHorizontal />
                            </Link>

                            <Link to={veigh} target="_blank">
                                <HiOutlinePlusCircle />
                            </Link>

                            <Link to={veigh} target="_blank">
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
                                <img src="/images/verificado.png" alt="verified" />
                            </p>
                        </SingerText>
                    </SingerInfo>

                    <div className="controls">
                        <span>
                            <HiOutlineSpeakerXMark />
                            Preview
                        </span>

                        <div className="controls__btn">
                            <Link to={burnaBoy} target="_blank">
                                <HiOutlineEllipsisHorizontal />
                            </Link>

                            <Link to={burnaBoy} target="_blank">
                                <HiOutlinePlusCircle />
                            </Link>

                            <Link to={burnaBoy} target="_blank">
                                <div className="controls__btn--play">▶</div>
                            </Link>
                        </div>
                    </div>
                </Singer4>
            </Singers>
        </SingerStyled>
    )
}
