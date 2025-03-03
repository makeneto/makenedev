import { Link } from 'react-router-dom';
import styled from 'styled-components'

const SubMenu = styled.aside`
    width: fit-content;
    position: fixed;
    left: 50%;
    bottom: -2%;
    transform: translate(-50%, -50%);
    padding: .5rem .5rem .3rem;
    border-radius: .6rem;
    
    background: rgba(125, 232, 101, 0.28) !important;
    -webkit-backdrop-filter: blur(17px);
    backdrop-filter: blur(17px) !important;
    display: flex;
    align-items: center;
    gap: 1rem;
    z-index: 9999;

    ion-icon {
        background:rgba(125, 232, 101, 0.55) !important;
        -webkit-backdrop-filter: blur(17px);
        backdrop-filter: blur(17px) !important;
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        color: #003720;
        padding: 0.4rem;
        border-radius: 0.6rem;
        border: 1px solid rgb(211 220 217);
    }

    @media (max-width: 480px) {
        bottom: 0;
    }
`

const MenuBottom = styled(Link)`
        position: relative;

        & span {
            opacity: 0;
            visibility: hidden;
            position: absolute;
            top: -2.2rem;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(125, 232, 101, 0.55);
            padding: 0.2rem 0.4rem;
            border-radius: 0.4rem;
            color: #003720;
            font-weight: 600;
            font-size: 0.8rem;
            transition: all 0.2s ease-in-out;
        }

        &:hover {
            & span {
                opacity: 1;
                visibility: visible;
            }
        }
`

export default function SubNav() {
    const handlePdfClick = () => {
        window.open('/docs/makenes-curriculum.pdf', '_blank');
    }

    const linkedInLink = 'https://linkedin.com/in/makene-neto'
    const githubLink = 'https://github.com/makeneto'

    return (
        <SubMenu>
            <MenuBottom to={linkedInLink} target='_blank'>
                <span>LinkedIn</span>
                <ion-icon name="logo-linkedin" className="asideIcon"></ion-icon>
            </MenuBottom>

            <MenuBottom onClick={handlePdfClick}>
                <span>Curriculum</span>
                <ion-icon name="document-text" className="asideIcon"></ion-icon>
            </MenuBottom>

            <MenuBottom to={githubLink} target='_blank'>
                <span>Github</span>
                <ion-icon name="logo-github" className="asideIcon"></ion-icon>
            </MenuBottom>
        </SubMenu>
    )
}
