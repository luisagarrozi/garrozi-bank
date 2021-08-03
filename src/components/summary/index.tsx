import { Container } from "./styles";
import entradaImg from "../../assets/Entradas.svg"
import saidasImg from "../../assets/Saídas.svg";
import totalImg from "../../assets/Total.svg";

export function Summary() {
    return (
  <Container>
      <div>
          <header>
              <p>Entradas</p>
              <img src={entradaImg} alt="Entradas" />
          </header>
          <strong>R$1000,00</strong>
      </div>
      <div>
          <header>
              <p>Entradas</p>
              <img src={saidasImg} alt="Saídas" />
          </header>
          <strong>-R$500,00</strong>
      </div>
      <div>
          <header>
              <p>Entradas</p>
              <img src={totalImg} alt="Total" />
          </header>
          <strong>R$500,00</strong>
      </div>
  </Container>
    )
}