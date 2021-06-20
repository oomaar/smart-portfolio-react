import styled from "styled-components/macro";

export const ProjectBackground = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.firstColor};
  padding-top: 3rem;
`;

export const ProjectContainer = styled.div`
  .project__btn {
    width: fit-content;
    justify-self: center;
  }
`;

export const ProjectTitle = styled.h2`
  color: #fff;
  font-size: ${({ theme }) => theme.typography.h2FontSize};
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_0_75};
`;

export const ProjectSubtitle = styled.p`
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_1_5};
  color: #fff;
`;

export const ProjectImage = styled.img`
  width: 232px;
  justify-self: center;

  @media screen and (max-width: 350px) {
    width: 200px;
  }
`;