import { Container, Logo } from "./styles";
import { CaretLeft } from "phosphor-react-native";

import logoImg from "../../../assets/Logo.png";
export function Header() {
  return (
    <Container>
      <CaretLeft color="#FFF" size={32} />
      <Logo source={logoImg} />
    </Container>
  );
}
