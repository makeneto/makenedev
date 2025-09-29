import styled from 'styled-components'
import { LargeTitle } from './FAQ';
import { DescriptionTitle } from './FavoriteSingers';
import { books } from '../data/books';

const BooksStyled = styled.section`
    background: linear-gradient(180deg, rgba(24,34,42,1) 11%, rgba(24, 34, 42, 0) 100%);
    width: 100%;
    padding: 5.6rem 6rem;
    margin-bottom: 5rem;
    border-top: var(--light-border);

    @media (min-width: 885px) and (max-width: 1280px) {
        padding: 5.6rem 2rem 0;
        margin-bottom: 4rem;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        padding: 5.6rem 3rem;
    }

    @media (max-width: 480px) {
        padding: 4rem 0rem 1.8rem;
        margin-top: -7rem;
        margin-bottom: 4.3rem;
    }
`

const BookList = styled.ul`
    display: flex;
    gap: 2rem;
    overflow-x: auto;
    margin-top: 5rem;

    &::-webkit-scrollbar {
        display: none;
    }
    
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    @media (min-width: 885px) and (max-width: 1280px) {
        margin-top: 3.2rem;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        margin-top: 4rem;
    }

    @media (max-width: 480px) {
        gap: 1.6rem;
        padding: 0 1rem;
        margin-top: 4.3rem;
    }
`

const Cover = styled.div`
    position: relative;
    width: 19.3rem;
    height: 28.4rem;

    @media (min-width: 885px) and (max-width: 1280px) {
        width: 16rem;
        height: 24rem;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        width: 13.5rem;
        height: 20.4rem;
    }

    @media (max-width: 480px) {
        width: 11.3rem;
        height: 17.4rem;
    }
`

const CoverSpan = styled.span`
    position: absolute;
    top: 3%;
    right: 3%;
    background-color: ${({ isCompleted }) => isCompleted === 100 ? '#6ace05' : 'var(--light-blue)'};
    font-size: 0.9rem;
    padding: 0.2rem .7rem;
    border-radius: 666rem;

    @media (max-width: 480px) {
        font-size: 0.7rem;
        padding: 0.2rem .5rem;
    }

    @media (min-width: 885px) and (max-width: 1280px) {
        font-size: 0.7rem;
    }
`

const CoverImage = styled.img`
    width: 100%;
    height: ${({ isCompleted }) => isCompleted === 100 ? '100%' : '99.4%'};
    object-fit: cover;
    border-radius: ${({ isCompleted }) => isCompleted === 100 ? '0.6rem' : '0.6rem 0.6rem 0 0'};
`

const ContentBook = styled.div`
    text-align: center;

    & h1 {
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 500;
        margin-top: 1rem;
        line-height: 1.3;

        @media (min-width: 885px) and (max-width: 1280px) {
            font-size: 0.8rem;
            margin-bottom: .2rem;
        }

        @media (min-width: 481px) and (max-width: 884px) {
            font-size: 0.9rem;
            margin-bottom: .2rem;
        }

        @media (max-width: 480px) {
            font-size: 0.8rem;
            margin-bottom: .1rem;
        }

    }

    & p {
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--light-grey);

        @media (min-width: 885px) and (max-width: 1280px) {
            font-size: 0.7rem;
            font-size: 0.8rem;
        }

        @media (min-width: 481px) and (max-width: 884px) {
            font-size: 0.9rem;
            font-weight: 500;
        }

        @media (max-width: 480px) {
            font-size: 0.8rem;
            font-weight: 500;
        }

    }
`

const ProgressBar = styled.div`
    position: relative;
    width: 100%;
    height: 0.345rem;
    background-color: var(--dark-grey);
    border-radius: 0 0 0.5rem 0.5rem;
    overflow: hidden;
    margin-top: -0.1rem;

    & > div {
        height: 100%;
        background-color: var(--light-blue);
        border-radius: 0 0.25rem 0.25rem 0.25rem;
        transition: width 0.3s ease-in-out;
    }

`

export default function Books() {
    return (
        <BooksStyled>
            <LargeTitle>When I'm Not Coding</LargeTitle>
            <DescriptionTitle>Exploring books that expand my vision, strengthen my skills and feed my creativity</DescriptionTitle>

            <BookList>
                {books.map((book, index) => (
                    <li key={index}>
                        <Cover>
                            <CoverSpan isCompleted={book.completed * 100}>
                                {(book.completed * 100) < 100 ? 'Reading' : 'Completed'}
                            </CoverSpan>

                            <CoverImage isCompleted={book.completed * 100} src={book.cover} alt={book.title} />

                            {(book.completed * 100) < 100 && (
                                <ProgressBar>
                                    <div style={{ width: `${book.completed * 100}%` }}></div>
                                </ProgressBar>
                            )}
                        </Cover>

                        <ContentBook>
                            <h1>{book.title}</h1>
                            <p>{book.author}</p>
                        </ContentBook>
                    </li>
                ))}
            </BookList>
        </BooksStyled>
    )
}
