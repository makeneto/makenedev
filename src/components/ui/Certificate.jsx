import styled from 'styled-components'
import { HiOutlineExternalLink } from "react-icons/hi"

import { formatDate } from '../../helpers/utils'

const CertificateStyled = styled.a`
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;

    &:hover{
        .link{
            text-decoration: underline;
        }
    } 

    & img {
        margin: .8rem 0 1.4rem;
    }

    & h5 {
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
    top: 3.1%;
    right: 3%;
    padding: 1.3rem .2rem .9rem;
    border-radius: 1rem 1rem 0 0;
    font-size: .9rem;
    background-color: var(--light-blue);
    writing-mode: sideways-lr;
    transform: rotate(180deg);

    @media (max-width: 480px) {
        top: 3.6%;
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

    const isNew = (date) => {
        const now = new Date();
        const certificateDate = new Date(date);
        const threeMonthsAgo = new Date(now.setMonth(now.getMonth() - 3));
        return certificateDate >= threeMonthsAgo;
    }

    return (
        <CertificateStyled href={link}>
            {isNew(date) && <New>New</New>}
            <img src={image} alt={title} loading="lazy" />
            <h5>{title}</h5>

            <Details>
                {link &&
                    <span className="link">
                        Learn more
                        <HiOutlineExternalLink />
                    </span>
                }

                <span>{formatDate(date)}</span>
            </Details>
        </CertificateStyled>
    )
}
