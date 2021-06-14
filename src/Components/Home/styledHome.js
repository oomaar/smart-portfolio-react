import styled from "styled-components/macro";

export const HomeContaier = styled.div`
  gap: 1rem;
`;

export const HomeContent = styled.div`
  grid-template-columns: 0.5fr 3fr;
  padding-top: 3.5rem;
  align-items: center;
`;

export const HomeSocial = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;
`;

export const SocialIcon = styled.a`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.firstColor};

  :hover {
    color: ${({ theme }) => theme.colors.firstColorAlt};
  }
`;

export const HomeImage = styled.div``;

export const HomeBlob = styled.svg`
  width: 200px;
  fill: ${({ theme }) => theme.colors.firstColor};
`;

export const BlobImage = styled.img`
  width: 170px;
`;

export const HomeData = styled.div`
  grid-column: 1/3;
`;

export const HomeTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.bigFontSize};
`;

export const HomeSubtitle = styled.h3`
  font-size:  ${({ theme }) => theme.typography.h3FontSize};
  color: var(--text-color);
  margin-bottom:  ${({ theme }) => theme.marginBottom.mb_0_75};
`;

export const HomeDescription = styled.p`
  margin-bottom:  ${({ theme }) => theme.marginBottom.mb_2};
`

export const HomeScroll = styled.div`
  /* display: none; */
`;

export const ScrollButton = styled.a`
  color: ${({ theme }) => theme.colors.firstColor};
  transition: 0.3s;

  :hover {
    transform: translateY(0.25rem);
  }

  .scroll__mouse {
    font-size: 2rem;
  }

  .scroll__arrow {
    font-size: 1.25rem;
  }
`;

export const ScrollButtonText = styled.span`
  font-size: ${({ theme }) => theme.typography.smallFontSize};
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
  margin-right: ${({ theme }) => theme.marginBottom.mb_0_25};
`;