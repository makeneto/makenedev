import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { formatDate, formatNameProject } from "../../helpers/utils";
import { Link } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectStyled = styled(Link)`
    text-decoration: none;
    list-style: none;
    display: grid;
    gap: .8rem;
    border-radius: .4rem;
    color: var(--dark-green);
    cursor: pointer;

    & date {
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
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: calc(1.2em * 7);
        line-height: 1.2em;
        position: relative;
        color: var(--dark-grey);
        margin-bottom: 1rem;
        font-weight: 400;


        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 10rem;
            background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
        }
    }

    &:hover a {
        text-decoration: underline;
    }
`;

const ProjectLink = styled(Link)`
    width: fit-content;
    font-size: .9rem;
    text-decoration: none;
    font-weight: 400;
    color: var(--dark-green);
    display: flex;
    align-items: center;
    gap: .2rem;
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

        fetchImageUrl();
    }, [name]);

    return (
        <ProjectStyled to={homepage ? homepage : `${introUrl}${name}`}>
            <date>{formatDate(created_at)}</date>
            <img src={imageUrl} alt={`${name} pic`} />
            <h4>{formatNameProject(name)}</h4>
            <p>{description}</p>
            <ProjectLink>
                Explore
                <HiOutlineExternalLink />
            </ProjectLink>
        </ProjectStyled>
    );
}
