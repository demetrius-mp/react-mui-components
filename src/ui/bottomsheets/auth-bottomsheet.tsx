import { Stack, SxProps, Typography } from "@mui/material";

import { Bottomsheet } from "@/components/bottomsheet";
import { RoundedButton } from "@/components/button/rounded-button";
import { getAssetUrl } from "@/constants/assets";
import { useAuthBottomsheetIsOpenState } from "@/states/auth-bottomsheet-is-open-state";

function SignInButton({
  assetUrl,
  label,
  sx,
}: {
  assetUrl: string;
  label: string;
  sx?: SxProps;
}) {
  return (
    <RoundedButton
      fullWidth
      variant="outlined"
      startIcon={<img width={16} src={assetUrl} />}
      sx={sx}
    >
      {label}
    </RoundedButton>
  );
}

export function AuthBottomsheet() {
  const [isOpen, setIsOpen] = useAuthBottomsheetIsOpenState();

  return (
    <Bottomsheet open={isOpen} setOpen={setIsOpen}>
      <Stack alignItems="center" justifyContent="center" p={4}>
        <img height={48} src={getAssetUrl("logos:vitejs")} />

        <Stack mt={2}>
          <Typography
            textAlign="center"
            fontSize={20}
            lineHeight={1.4}
            fontWeight={800}
            fontFamily="sans-serif"
          >
            Unificando suas finanças
          </Typography>

          <Typography
            textAlign="center"
            variant="body1"
            fontSize={16}
            lineHeight={1.4}
          >
            Facilitando sua gestão financeira digitalmente
          </Typography>
        </Stack>

        <Stack width="100%" gap={4} mt={4}>
          <SignInButton
            assetUrl={getAssetUrl("logos:google-icon")}
            label="Entrar com o google"
          />

          <SignInButton
            assetUrl={getAssetUrl("logos:github-icon")}
            label="Entrar com o GitHub"
          />

          <SignInButton
            assetUrl={getAssetUrl("mdi:at")}
            label="Entrar com e-mail"
          />
        </Stack>
      </Stack>
    </Bottomsheet>
  );
}
