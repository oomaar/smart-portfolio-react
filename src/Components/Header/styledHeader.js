import styled from "styled-components/macro";

export const HeaderTag = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.zFixed};
  background-color: ${({ theme }) => theme.colors.bodyColor};

  @media screen and (min-width: 768px) {
    top: 0;
    bottom: initial;
    padding: 0 1rem;
  }
`;

export const Nav = styled.nav`
  max-width: 968px;
  height: ${({ theme }) => theme.HeaderHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav__icon {
    font-size: 1.2rem;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  /* show menu */
  .show-menu {
    /* bottom: 0; */
  }
  /* Active link */
  .active-link {
    ${({ theme }) => theme.colors.firstColor};
  }

  @media screen and (min-width: 768) {
    height: calc(var(--header-height) + 1.5rem);
    column-gap: 1rem;
  }
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};

  &:hover {
    color: ${({ theme }) => theme.colors.firstColor};
  }
`;

export const NavMenu = styled.div`

  .nav__close {
    position: absolute;
    right: 1.3rem;
    bottom: 0.5rem;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.firstColor};
    transition: 0.3s ease;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
      position: fixed;
      bottom: ${({ toggleShow }) => toggleShow ? '0' : '-100%'};
      left: 0;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.bodyColor};
      padding: 2rem 1.5rem 4rem;
      box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
      border-radius: 1.5rem 1.5rem 0 0;
      transition: 0.3s;
  }

  @media screen and (max-width: 350px) {
    padding: 2rem 0.25rem 4rem;
  }

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

export const NavList = styled.ul`
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 350px) {
    column-gap: 0;
  }
  
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 2rem;
  }
`;

export const ListItem = styled.li``;

export const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.colors.bodyColor};
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};

  :hover {
    color: ${({ theme }) => theme.colors.firstColor};
  }
`;

export const NavBtns = styled.div`
  display: flex;
  align-items: center;

  .change-theme {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.titleColor};
    margin-right: ${({ theme }) => theme.marginBottom.mb_1};
    cursor: pointer;
    
    @media screen and (min-width: 768px) {
      margin: 0;
      margin-left: ${({ theme }) => theme.marginBottom.mb_1};
    }
  }

  .change-theme:hover {
    color: ${({ theme }) => theme.colors.firstColor};
  }
`;

export const NavToggle = styled.div`
  font-size: 1.1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
  margin-left: 1rem;

  :hover {
    color: ${({ theme }) => theme.colors.firstColor};
  }
`;