import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { HiOutlineExternalLink } from "react-icons/hi";
import styled from "styled-components";

import { formatDate, formatNameProject } from "../../helpers/utils";

const ProjectStyled = styled(Link)`
    text-decoration: none;
    list-style: none;
    display: grid;
    gap: .8rem;
    border-radius: .4rem;
    color: var(--dark-green);
    cursor: pointer;

    & span {
        font-weight: 400;
        font-size: .9rem;
        color: var(--light-grey);
    }

    & img{
        width: 100%;
        height: auto;
    }

    & h4 {
        font-weight: 600;
        font-size: 1.4rem;
    }

    & p {
        color: white;
        margin-bottom: 1rem;
        font-weight: 400;
    }

    &:hover .hovered {
        text-decoration: underline;
    }
`;

const ProjectLink = styled.aside`
    width: 100%;
    font-size: .9rem;
    text-decoration: none;
    font-weight: 400;
    color: white !important;
    display: flex;
    align-items: center;
    justify-content: space-between;

    
    & div {
        display: flex;
        align-items: center !important;
        gap: .2rem !important;

        & span {
            color: white 
        }
    }

`;

export default function Project({ projectObj }) {
    const { homepage, created_at, name, description } = projectObj;
    const [imageUrl, setImageUrl] = useState("");
    const introUrl = 'https://github.com/makeneto/'

    useEffect(() => {
        async function fetchImageUrl() {
            try {
                const response = await fetch(`https://api.github.com/repos/makeneto/${name}/issues`);
                const issues = await response.json();
                if (issues.length > 0) {
                    const issueBody = issues[0].body;
                    const imageUrlMatch = issueBody.match(/!\[Image\]\((.*?)\)/);
                    if (imageUrlMatch) {
                        setImageUrl(imageUrlMatch[1]);
                    }
                }
            } catch (error) {
                console.error("Error when seeking the image URL:", error);
            }
        }

        fetchImageUrl()
    }, [name])

    return (
        <ProjectStyled to={homepage ? homepage : `${introUrl}${name}`}>
            <img
                src={imageUrl ? imageUrl : '/images/projects/clean-code.png'}
                alt={`${name} pic`}
            />
            <h4 translate="no">{formatNameProject(name)}</h4>
            <p>{description}</p>

            <ProjectLink>
                <div>
                    <span className="hovered">Explore</span>
                    <HiOutlineExternalLink />
                </div>
                <span>{formatDate(created_at)}</span>
            </ProjectLink>
        </ProjectStyled>
    );
}
