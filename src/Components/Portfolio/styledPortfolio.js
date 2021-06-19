import styled from "styled-components/macro";

export const PortfolioContainer = styled.div`
  overflow: initial;
  position: relative;

  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0;
    /* bottom: -2.5rem; */
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.firstColor};
  }

  .swiper-button-prev,
  .swiper-button-next,
  .swiper-pagination-bullet {
    outline: none;
  }
`;

export const PortfolioContent = styled.div`
  padding: 0 1.5rem;
`;

export const PortfolioImage = styled.img`
  width: 265px;
  border-radius: 0.5rem;
  justify-self: center;
`;

export const PortfolioData = styled.div`
   margin: 30px 0;

  .portfolio__button {
    :hover .button__icon {
           transform: translateX(0.25rem);
        }
    }
`;

export const PortfolioTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3FontSize};
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_5};
`;

export const PortfolioDesc = styled.p`
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_0_75};
`;

export const ArrowNext = styled.div`
  right: -0.5rem;

  .swiper-portfolio-icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.firstColor};
    cursor: pointer;
  }

    ::after {
      content: '';
    }
`;

export const ArrowPrev = styled.div`
  left: -0.5rem;

  .swiper-portfolio-icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.firstColor};
    cursor: pointer;
  }

  ::after {
    content: '';
  }
`;
