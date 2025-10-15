import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HiOutlineExternalLink } from "react-icons/hi"

import { formatDate } from '../../helpers/utils'
import { isNew } from '../../js/isNew'

const CertificateStyled = styled(Link)`
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;

    &:hover {
        .link {
            text-decoration: underline;
        }
    } 

    & img {
        margin: .8rem 0 1.4rem;
        height: 22rem;
        
        @media (max-width: 480px) {
            height: 16rem;
        }

        @media (min-width: 481px) and (max-width: 768px) {
            height: 14rem;   
        }
        
        @media (min-width: 1025px) and (max-width: 1440px) {
            height: 17rem;   
        }
    }

    & h1 {
        font-size: 1.4rem;
        margin-bottom: 1.4rem;
        font-weight: 500;
        
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (max-width: 1280px) {
            font-size: 1.2rem;
        }
    }
`

const New = styled.span`
    position: absolute;
    top: 2.5%;
    right: 3%;
    padding: 1.3rem .2rem .9rem;
    border-radius: 1rem 1rem 0 0;
    font-size: .9rem;
    background-color: var(--light-blue);
    writing-mode: sideways-lr;
    transform: rotate(180deg);

    @media (max-width: 480px) {
        top: 3.3%;
    }
    
    @media (min-width: 481px) and (max-width: 768px) {
        top: 3.2%;
        right: 6%
    }
`

const Details = styled.div`
    display: flex;
    justify-content: space-between;

    & span {
        font-size: .9rem;   
        font-weight: 300;
    }

    & span:first-child {
        display: flex;
        align-items: center;
        gap: .3rem;
    }

    & span:last-child {
        color: var(--light-grey);
        font-size: .9rem;
    }
`

export default function Certificate({ ObjData }) {
    const { date, image, title, link } = ObjData

    return (
        <li>
            <CertificateStyled
                to={link}
                target='_blank'
                aria-label={`Certificate for ${title}`}
            >
                {isNew(date) && <New>New</New>}
                <img
                    src={image}
                    alt={`Image for certificate titled ${title}`}
                    loading="lazy"
                    onContextMenu={(e) => e.preventDefault()}
                />
                <h1>{title}</h1>
                <Details>
                    {link && (
                        <span className="link">
                            Learn more
                            <HiOutlineExternalLink />
                        </span>
                    )}
                    <span>{formatDate(date)}</span>
                </Details>
            </CertificateStyled>
        </li>
    )
}
