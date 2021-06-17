import styled from "styled-components/macro";
export const SkillContainer = styled.div``;

export const SkillContent = styled.div`
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_2_5};
`;

export const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_2_5};
  cursor: pointer;

  .skill__arrow {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.firstColor};
      margin: 0 ${({ theme }) => theme.marginBottom.mb_0_75} 0 ${({ theme }) => theme.marginBottom.mb_0_75};
      transition: 0.3s;
  }

  .skill__arrow-open {
    transform: rotate(-180deg);
  }
`;

export const SkillIcon = styled.div`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.firstColor};
    margin: 0 ${({ theme }) => theme.marginBottom.mb_0_75} 0 ${({ theme }) => theme.marginBottom.mb_0_75};
`;

export const SkillTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3FontSize};
`;

export const SkillSubTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.smallFontSize};
  color: ${({ theme }) => theme.colors.textColorLight};
`;

export const SkillList = styled.div`
  row-gap: 1.5rem;
  padding-left: 2.7rem;
`;


export const SkillData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_0_5};
`;

export const SkillName = styled.h3`
  font-size: ${({ theme }) => theme.typography.normalFontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
`;

export const SkillNumber = styled.span``;

export const SkillBar = styled.span`
  height: 5px;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.firstColorLighter};
`;

export const SkillPercentage = styled.div`
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.firstColor};
  width: ${({ width }) => `${width}%`};
  height: 5px;
`;

