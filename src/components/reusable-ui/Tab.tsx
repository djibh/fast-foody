import styled from "styled-components";
import { theme } from "../../theme";
import { ReactElement } from "react";

type TabProps = {
    Icon: ReactElement
}
export default function Tab({Icon}: TabProps) {
  return (
    <TabStyled>
        <div className="icon">
            { Icon }
        </div>
    </TabStyled>
  )
}

const TabStyled = styled.button`
  position: relative;
  left: 5%;
  top: 1px;
  height: 43px;
  padding: 0 22px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};

  // font
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  // border
  border-top-left-radius: ${theme.borderRadius.round};
  border-top-right-radius: ${theme.borderRadius.round};
  border-top: 1px solid ${theme.colors.greyLight};
  border-right: 1px solid ${theme.colors.greyLight};
  border-bottom: 2px solid ${theme.colors.greyLight};
  border-left: 1px solid ${theme.colors.greyLight};

  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
  }

  .icon {
    display: flex;
  }
`;