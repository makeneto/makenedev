import styled from 'styled-components'

import { professionalCertificates, academicCertificates } from '../data/certificateData'
import Certificate from './ui/Certificate'
import { LargeTitle } from './FAQ'
import { DescriptionTitle } from './FavoriteSingers'
import { useState } from 'react'

const CertificatesStyled = styled.article`
    display: grid;
    gap: 1.2rem;
    margin: 9rem 0 15rem;

    @media (max-width: 1919px){
        margin: 7rem 0 11rem;

    }

    @media (max-width: 1280px) {
        margin: 5rem 0 11rem;
    }

    @media (max-width: 480px) {
        margin: 3.6rem 0 7rem;
    }
`

const CertificatesContainer = styled.ul`
    width: 90% !important;
    margin: 1.6rem auto 0;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 25.4rem !important;
    gap: 1.5rem;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
    
    @media (max-width: 480px) {
        width: 92% !important;
        grid-auto-columns: 22rem !important;
    }

    @media (max-width: 884px) {
        grid-auto-columns: 22rem;
    }

    @media (max-width: 1280px) {
        width: 95%;
        grid-auto-columns: 23.5rem;
    }
    
    @media (max-width: 1919px){
        width: 90%;
        grid-auto-columns: 27rem;
    }



`

const NavCertificates = styled.nav`
    display: flex;
    align-items: center;
    width: fit-content;
    margin-inline: auto;
    gap: .5rem;
    padding: .5rem .5rem;
    font-size: .9rem;
    border-radius: .4rem;
    
    background: var(--weak-blue);
    -webkit-backdrop-filter: blur(17px);
    backdrop-filter: blur(17px);
    
    & button{
        cursor: pointer;
    }
    
    .active {
        padding: .4rem .7rem;
        background-color: var(--light-blue);
        border-radius: .4rem;
    }
    
    .inactive {
        color: white;
        padding: .4rem .7rem;
        border-radius: .4rem;
        transition: all .2s ease-in;
        &:hover {
            background-color: var(--weak-blue);
        }
    }
`


export default function Certificates() {
    const [professional, setProfessional] = useState(true)

    const isProfessional = professional ? professionalCertificates : academicCertificates

    function chooseProfessional() {
        setProfessional(!professional)
    }

    const totalCertificates = professionalCertificates.length + academicCertificates.length

    return (
        <CertificatesStyled>
            <div>
                <LargeTitle>
                    Certificates
                    <div>{totalCertificates}</div>
                </LargeTitle>
                <DescriptionTitle>Here you'll find all the certificates won throughout my journey.</DescriptionTitle>

                <NavCertificates>
                    <button
                        className={`${professional ? 'active' : 'inactive'}`}
                        onClick={() => chooseProfessional()}
                        disabled={professional}
                        aria-label="Professional certificates"
                    >
                        Professional
                    </button>
                    <button
                        className={`${!professional ? 'active' : 'inactive'}`}
                        onClick={() => chooseProfessional()}
                        disabled={!professional}
                        aria-label="Academic certificates"
                    >
                        Academic
                    </button>
                </NavCertificates>
            </div>

            <CertificatesContainer>
                {isProfessional.map((data) => (
                    <Certificate key={data.id} ObjData={data} />
                ))}
            </CertificatesContainer>
        </CertificatesStyled>
    )
}