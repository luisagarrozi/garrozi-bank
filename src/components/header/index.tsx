import logoImg from '../../assets/logo.png'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
        <img src={logoImg} alt="garrozi money" />
        <button type="button">
            Nova transação
        </button>
        </Content>
        </Container>
    )
}