import { Link } from "react-router-dom"
import styled from "styled-components"

import { UseUserContext } from "../context/UserContext"
import { useMediaQuery } from "react-responsive"
import { Overlay } from "./ui/Overlay"
import { useEffect } from "react"

const ReadmeStyled = styled.article`
    z-index: 888;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: var(--dark-blue-v2);
    width: 63%;
    height: 70dvh;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 2.2rem 3rem;
    font-weight: 400;
    color: white;
    transition: all .2s ease-in-out;

    opacity: ${({ show }) => show ? '1' : '0'};
    visibility: ${({ show }) => show ? 'visible' : 'hidden'};

    &::-webkit-scrollbar { 
        display: none;
    }

    & a:hover {
        text-decoration: underline;
    }

    & h1 {
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 1rem;

        @media (max-width: 480px) {
            font-size: 1.8rem;
        }

        & span {
            display: inline-block;
            animation: wave 9s infinite;
        }


        @keyframes wave {
            0% { transform: rotate(0deg); }
            10% { transform: rotate(14deg); }
            20% { transform: rotate(-8deg); }
            30% { transform: rotate(14deg); }
            40% { transform: rotate(-4deg); }
            50% { transform: rotate(10deg); }
            60% { transform: rotate(-8deg); }
            70% { transform: rotate(14deg); }
            80% { transform: rotate(-4deg); }
            90% { transform: rotate(10deg); }
            100% { transform: rotate(0deg); }
        }
    }


    & h2 {
        font-size: 1.5rem;
        width: 100%;
        padding-bottom: .3rem;
        margin: 2.5rem 0 2rem;
        border-bottom: var(--light-border);
    }

    @media (max-width: 480px) {
        width: 90%;
        height: 76dvh;
        padding: 1.5rem 1.8rem;
    }
`

const ReadmeLink = styled.p`
    font-size: .8rem;
    color: var(--light-grey);
    margin-bottom: .7rem;  
    position: relative;
`

const ReadMeList = styled.ul`
    display: grid;
    gap: .4rem;
    text-indent: 2rem;
    list-style-type: none;
    margin: 1.5rem 0 2rem;

    @media (max-width: 480px) {
        gap: .8rem;
        text-indent: 0;
        font-size: 1rem;
        padding-left: 1.8rem;
    }

    & li > a {
        color: rgb(69, 69, 228);
    }
`

const Techs = styled.div`
    & img {
        width: 100%;
    }
`

export default function ReadMe() {
    const { showReadeMe } = UseUserContext()
    const isMobile = useMediaQuery({ maxWidth: 480 })

    useEffect(() => {
        if (showReadeMe) {
            document.body.style.overflow = "hidden"
        }
        else {
            document.body.style.overflow = ""
        }
    }, [showReadeMe])

    return (
        <>
            <Overlay show={showReadeMe} />
            <ReadmeStyled show={showReadeMe}>
                <ReadmeLink>
                    <span>
                        <Link to="https://github.com/makeneto">makeneto</Link> / README.md
                    </span>
                </ReadmeLink>

                <h1>Hi, <span>👋</span> my name's Makene Neto</h1>

                <ReadMeList>
                    <li>💓 I've been addicted to programming since <b>2020</b></li>
                    <li>🛠️ I constantly work to improve my skills as a <b>Full-Stack Developer</b>.</li>
                    <li>🔍 Always looking for new challenges to expand my knowledge</li>
                    <li>🌍 I dream of contributing to big projects that have a global impact.</li>
                    <li> 🌐 You can contact me on
                        <Link to="https://www.instagram.com/makenedev" target="_blank">
                            <b> Instagram </b>
                        </Link>
                        or
                        <Link to="mailto:cmp.1a.makeneto17@gmailcom" target="_blank">
                            <b> GMAIL </b>
                        </Link>
                        🤝🏾
                    </li>
                    <li>🦖 And... Obviously, it's me🙈</li>
                </ReadMeList>

                <h2>🛠️ Technology Stack</h2>
                <Techs>
                    <p>
                        <img
                            width="100%"
                            src="https://skillicons.dev/icons?i=windows,git,github,figma,c,cpp,cs,java,py,html,css,sass,js,styledcomponents,tailwindcss,react,redux,supabase,nextjs"
                            alt="Tech Stack"
                        />
                    </p>
                </Techs>

                <h2>⚙️ GitHub Analysis</h2>
                <div style={{ display: `${isMobile ? "grid" : "flex"}`, justifyContent: "center", gap: "10px" }}>
                    <img
                        width={isMobile ? "100%" : "60%"}
                        height="220px"
                        src="https://github-readme-stats.vercel.app/api?username=makeneto&show_icons=true&count_private=true&hide_border=true&title_color=949494&text_color=ffffff&bg_color=000000"
                        alt="Makene Neto github Status"
                    />
                    <img
                        width={isMobile ? "100%" : "54%"}
                        height="220px"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=makeneto&layout=compact&hide_border=true&title_color=949494&text_color=949494&bg_color=000000"
                        alt="Top Languages"
                    />
                </div>

                <h2>📊 Graph</h2>
                <a href="https://github.com/ashutosh00710/github-readme-activity-graph">
                    <img
                        src="https://github-readme-activity-graph.vercel.app/graph?username=makeneto&bg_color=000000&color=ffffff&line=ffffff&point=949494&area=true&hide_border=true"
                        alt="GitHub Activity Graph"
                    />
                </a>
            </ReadmeStyled>
        </>
    )
}
