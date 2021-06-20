import styled from "styled-components/macro";

export const AboutContainer = styled.div`
  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AboutImage = styled.img`
    width: 200px;
    border-radius: 0.5rem;
    justify-self: center;
    align-self: center;
`;

export const AboutData = styled.div``;

export const AboutDescription = styled.p`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.marginBottom.mb_2_5};
`;

export const AboutInfo = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const InfoTitle = styled.span`
    font-size: ${({ theme }) => theme.typography.h2FontSize};
    font-weight: ${({ theme }) => theme.typography.fontWeight.fontSemiBold};
    color: ${({ theme }) => theme.colors.titleColor};
    display: block;
    text-align: center;
`;

export const InfoName = styled.span`
  font-size: ${({ theme }) => theme.typography.smallerFontSize};
  display: block;
  text-align: center;
`;

export const AboutBtns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
