import { Link } from "react-router-dom"
import { IoLogoLinkedin, IoDocumentText, IoLogoGithub } from 'react-icons/io5'
import { FaCode } from "react-icons/fa"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import styled from 'styled-components'

import useSubNav from "../hooks/useSubNav"

const SubMenu = styled.aside`
    width: fit-content;
    position: fixed;
    left: 50%;
    bottom: -2%;
    transform: translate(-50%, -50%);
    padding: .6rem;
    border-radius: .6rem;
    background: rgb(99 161 242 / 19%) !important;;
    -webkit-backdrop-filter: blur(17px);
    backdrop-filter: blur(17px) !important;
    display: flex;
    align-items: center;
    gap: 1rem;
    z-index: 9999;
    transition: bottom 0.3s ease-in-out;

    svg {
        background: var(--light-blue) !important;
        -webkit-backdrop-filter: blur(17px);
        backdrop-filter: blur(17px) !important;
        cursor: pointer;
        width: 2.7rem;
        height: 2.7rem;
        color: var(--dark-blue);
        padding: 0.4rem;
        border-radius: 0.6rem;

        @media (max-width: 480px) {
            width: 2.8rem;
            height: 2.8rem;
            padding: 0.5rem;
        }  

        @media (min-width: 481px) and (max-width: 884px) {
            padding: .7rem;     
            width: 3.4rem;
            height: 3.4rem;
        }

        @media (max-width: 1280px) {
            padding: .4rem;     
            width: 2.4rem;
            height: 2.4rem;
        }
    }

    @media (max-width: 480px) {
        bottom: -2%;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        bottom: 0;
    }
`;

const MenuBottom = styled(Link)`
    position: relative;

    & span {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: -2rem;
        left: 50%;
        transform: translateX(-50%);
        background: var(--weak-blue);
        padding: 0.2rem 0.4rem;
        border-radius: 0.4rem;
        color: white;
        font-weight: 600;
        font-size: 0.6rem;
        transition: all 0.2s ease-in-out;
    }

    &:hover span {
        opacity: 1;
        visibility: visible;
    }
`

const MenuButton = styled.button`
    all: unset;
    position: relative;
    cursor: pointer;

    & span {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: -2rem;
        left: 50%;
        transform: translateX(-50%);
        background: var(--weak-blue);
        padding: 0.2rem 0.4rem;
        border-radius: 0.4rem;
        color: white;
        font-weight: 600;
        font-size: 0.6rem;
        transition: all 0.2s ease-in-out;
    }

    &:hover span {
        opacity: 1;
        visibility: visible;
    }
`

const iconVariants = {
    initial: { y: 0, scale: 1 },
    hover: {
        y: -7,
        scale: 1.3,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
        },
    },
    exit: {
        y: [0, 3, -2, 0],
        scale: 1,
        transition: {
            duration: 0.4,
            ease: "easeInOut",
        },
    },
}

export default function SubNav() {
    const { linkedInLink, makeneResume, handleCloseSkills } = useSubNav()

    return (
        <SubMenu>
            <MenuBottom
                to={linkedInLink}
                target='_blank'
                aria-label="LinkedIn profile"
            >
                <motion.div
                    initial="initial"
                    whileHover="hover"
                    onHoverEnd={(e) => e.target.style.animation = "none"}
                    variants={iconVariants}
                >
                    <span>LinkedIn</span>
                    <IoLogoLinkedin />
                </motion.div>
            </MenuBottom>

            <MenuBottom
                to={makeneResume}
                target="_blank"
                aria-label="Makene Resume"
            >
                <motion.div
                    initial="initial"
                    whileHover="hover"
                    onHoverEnd={(e) => e.target.style.animation = "none"}
                    variants={iconVariants}
                >
                    <span>Resume</span>
                    <IoDocumentText />
                </motion.div>
            </MenuBottom>

            <MenuBottom
                onClick={handleCloseSkills}
                aria-label="Open/Close skills"
            >
                <motion.div
                    initial="initial"
                    whileHover="hover"
                    onHoverEnd={(e) => e.target.style.animation = "none"}
                    variants={iconVariants}
                >
                    <span>Skills</span>
                    <FaCode />
                </motion.div>
            </MenuBottom>
        </SubMenu>
    )
}