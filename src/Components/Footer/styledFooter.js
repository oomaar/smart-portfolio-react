import styled from "styled-components/macro";

export const FooterContainer = styled.footer`
  padding-top: 2rem;
`;

export const FooterBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.firstColorSecond};
  padding: 2rem 0 3rem;
`;

export const FooterSubContainer = styled.div`
  row-gap: 3.5rem;
`;

export const FooterTitle = styled.h1`
  color: #fff;
  font-size: ${({ theme }) => theme.typography.h1FontSize};
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_0_25};
`;

export const FooterSubTitle = styled.span`
  color: #fff;
  font-size: ${({ theme }) => theme.typography.smallFontSize};
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

export const FooterLink = styled.a`
  color: #fff;

  :hover {
      color: ${({ theme }) => theme.colors.firstColorLighter};
  }
`;

export const FooterSocials = styled.div``;

export const FooterSocial = styled.a`
  font-size: 1.25rem;
  margin-right: ${({ theme }) => theme.marginBottom.mb_1_5};
  color: #fff;

  :hover {
    color: ${({ theme }) => theme.colors.firstColorLighter};
  }
`;

export const FooterCopy = styled.p`
  font-size: ${({ theme }) => theme.typography.smallerFontSize};
  text-align: center;
  color: ${({ theme }) => theme.colors.textColorLight};
  margin-top: ${({ theme }) => theme.marginBottom.mb_3};
`;