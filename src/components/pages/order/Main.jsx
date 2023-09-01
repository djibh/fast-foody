import { styled } from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return (
    <MainStyled></MainStyled>
  )
}

const MainStyled = styled.main`
    background: ${theme.colors.background_white};
    flex: 1;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;