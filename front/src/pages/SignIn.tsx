import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import HeronIcon from "../components/icons/HeronIcon";

const Wrapper = styled("div")({
  display: "flex",
  height: "100vh",
});

const LeftBlock = styled("section")({
  backgroundColor: "#1DA1F2",
  flex: "0 0 50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const LeftBlockListInfo = styled("ul")({
  listStyle: "none",
  width: 380,
  padding: 0,
  margin: 0,
  "& h6": {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: 600,
  },
});

const LoginBlock = styled("section")({
  flex: "0 0 50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const LoginTitle = styled(Typography)({
  fontSize: 32,
  fontWeight: 800,
  marginTop: 20,
  marginBottom: 45,
});

const ButtonsBlock = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& button": {
    display: "block",
    marginBottom: 25,
  },
});

export const SignIn: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <LeftBlock>
        <LeftBlockListInfo>
          <li>
            <Typography variant="h6">Братишка! Братишка!</Typography>
          </li>
          <li>
            <Typography variant="h6">Как поспал, братишка?</Typography>
          </li>
          <li>
            <Typography variant="h6">
              Проголодался наверное, братишка?
            </Typography>
          </li>
        </LeftBlockListInfo>
      </LeftBlock>
      <LoginBlock>
        <div>
          <HeronIcon width={100} height={100} />
          <LoginTitle variant="h4">Хочешь постоять, как цапля?</LoginTitle>
          <Typography>
            <b>Начни курлыкать прямо сейчас!</b>
          </Typography>
          <br />
          <ButtonsBlock>
            <Button
              variant="contained"
              color="primary"
            >
              Зарегистрироваться
            </Button>
            <Button
              variant="outlined"
              color="primary"
            >
              Войти
            </Button>
          </ButtonsBlock>
        </div>
      </LoginBlock>
    </Wrapper>
  );
};
