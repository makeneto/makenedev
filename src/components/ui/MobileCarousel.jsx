import styled from "styled-components"
import { useCarousel } from "../../hooks/useCarousel"
import { useMediaQuery } from "react-responsive"

const CarouselContainer = styled.div`
  display: grid;
  gap: 1.1rem;
`

const CarouselScreens = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;
  text-align: center;
  background-color: var(--hover-blue);
  border-radius: 1rem;
  padding-block: 1.6rem;
  padding-inline: 1.3rem;
  position: relative;

  & header {
    display: flex;
    justify-content: flex-end;
    opacity: ${({ $hovered }) => ($hovered ? 1 : 0)};
    transition: opacity 0.3s ease;
  }
`

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const CarouselImages = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`

const CarouselItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;

  img {
    width: 60%;
    height: auto;
    margin: auto;
    border-radius: 1rem;
    user-select: none;
  }
`

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  font-size: 1.1rem;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 2;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  opacity: ${({ $hovered }) => ($hovered ? 1 : 0)};
  transition: opacity 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 480px) {
    display: none;
  }
`

const ArrowLeft = styled(Arrow)`
  left: 0;
`

const ArrowRight = styled(Arrow)`
  right: 0;
`

const IndicatorDot = styled.div`
  display: flex;
  align-items: center;
  gap: 0.254rem;
`

const Dot = styled.span`
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  background: ${({ active }) => (active ? "var(--light-grey)" : "var(--dark-blue)")};
  border-radius: 50%;
  cursor: pointer;
`

const Content = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  & img {
    width: 2.89rem;
    height: auto;
    border-radius: 0.7rem;

    @media (max-width: 1024px) {
      width: 2.5rem;
    }
  }

  & h1 {
    font-size: 1.1rem;
    font-weight: 500;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
  
  & p {
    color: var(--light-grey);
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`

export default function MobileCarousel({ project }) {
  const {
    currentIndex,
    setCurrentIndex,
    hovered,
    setHovered,
    prevSlide,
    nextSlide,
    handleTouchStart,
    handleTouchEnd,
    handleMouseDown,
    handleMouseUp
  } = useCarousel(project.screenshots.length)
  const isMobile = useMediaQuery({ maxWidth: 480 })

  return (
    <CarouselContainer>
      <CarouselScreens
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        $hovered={hovered}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <header>
          <IndicatorDot style={{
            display: isMobile ? 'none' : 'flex',
            justifyContent: 'center',
            marginBottom: '0.5rem'
          }}>
            {project.screenshots.map((_, idx) => (
              <Dot
                key={idx}
                active={idx === currentIndex}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </IndicatorDot>
        </header>

        <CarouselWrapper>
          {currentIndex > 0 && (
            <ArrowLeft onClick={prevSlide} $hovered={hovered}>
              ❮
            </ArrowLeft>
          )}

          <CarouselImages
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {project.screenshots.map(shot => (
              <CarouselItem key={shot.id}>
                <img
                  src={shot.imageUrl}
                  alt={shot.description}
                  loading="lazy"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </CarouselItem>
            ))}
          </CarouselImages>

          {currentIndex < project.screenshots.length - 1 && (
            <ArrowRight onClick={nextSlide} $hovered={hovered}>
              ❯
            </ArrowRight>
          )}
        </CarouselWrapper>

        <IndicatorDot style={{
          display: isMobile ? 'flex' : 'none',
          justifyContent: 'center',
          marginTop: '1rem'
        }}>
          {project.screenshots.map((_, idx) => (
            <Dot
              key={idx}
              active={idx === currentIndex}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </IndicatorDot>
      </CarouselScreens>

      <Content>
        <img
          src={project.logo}
          alt={`${project.title} logo`}
          onContextMenu={(e) => e.preventDefault()}
        />
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </Content>
    </CarouselContainer>
  )
}
