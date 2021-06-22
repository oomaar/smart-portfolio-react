import styled from "styled-components/macro";

export const QualificationTabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_2};

  .btn-active {
    color: ${({ theme }) => theme.colors.firstColor};
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;

export const QualificationButton = styled.div`
  font-size: ${({ theme }) => theme.typography.h3FontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
  cursor: pointer;
  display: flex;

  :hover {
    color: ${({ theme }) => theme.colors.firstColor};
  }

  .qualification__icon {
    font-size: 1.8rem;
    margin: 0 ${({ theme }) => theme.marginBottom.mb_0_25} 0 ${({ theme }) => theme.marginBottom.mb_0_25};
  }

  @media screen and (min-width: 768px) {
    margin: 0 ${({ theme }) => theme.marginBottom.mb_1};
  }
`;

export const QualificationSections = styled.div`
  @media screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: 0.6fr;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 0.5fr;
  }
`;

export const QualificationContent = styled.div`
  &[data-content] {
      display: none;
  }

  &.qualification__active[data-content] {
      display: block;
  }
`;

export const QualificationData = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;

  @media screen and (max-width: 350px) {
    gap: 0.5rem;
  }
`;

export const QualificationTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.normalFontSize};
  margin-right: ${({ theme }) => theme.typography.fontWeight.fontMedium};
`;

export const QualificationSubtitle = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.smallFontSize};
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_1};
`;

export const QualificationCalendar = styled.div`
  font-size: ${({ theme }) => theme.typography.smallerFontSize};
  color: ${({ theme }) => theme.colors.textColorLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100px;
`;

export const QualificationRounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: ${({ theme }) => theme.colors.firstColor};
  border-radius: 50%;
`;

export const QualificationLine = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.firstColor};
  transform: translate(6px, -7px);
`;
