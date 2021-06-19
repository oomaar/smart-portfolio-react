import styled from "styled-components/macro";

export const TestimonialContainer = styled.div`
  .testimonial__icon-star {
    color: ${({ theme }) => theme.colors.firstColor};
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.firstColor};
  }
`;

export const TestimonialData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_1};
`;

export const TestimonialHeader = styled.div`
  display: flex;
`;

export const TestimonialImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.marginBottom.mb_0_75};
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

`;