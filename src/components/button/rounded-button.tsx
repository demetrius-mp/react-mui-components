import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const RoundedButton = styled(Button)<ButtonProps>(() => ({
  borderRadius: "20px",
}));
