import styled from "styled-components/macro";

export const TestimonialContainer = styled.div`
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.firstColor};
  }
`;

export const TestimonialData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_1};
  
  @media screen and (max-width: 350px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const TestimonialHeader = styled.div`
  display: flex;

  @media screen and (max-width: 350px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TestimonialIconStar = styled.div`
  color: ${({ theme }) => theme.colors.firstColor};
  font-size: 1.5rem;
`;

export const TestimonialImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.marginBottom.mb_0_75};

  @media screen and (max-width: 350px) {
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.marginBottom.mb_0_25};
  }
`;

export const TestimonialName = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3FontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
`;

export const TestimonialClient = styled.span`
  font-size: ${({ theme }) => theme.typography.smallerFontSize};
  color: ${({ theme }) => theme.colors.textColorLight};
`;

export const TestimonialDesc = styled.p`
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_2_5};

  @media screen and (max-width: 350px) {
    text-align: center;
  }
`;
