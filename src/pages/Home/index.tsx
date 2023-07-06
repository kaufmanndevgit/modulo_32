import Header from '../../containers/Header'
import { Container } from '../../styles'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <Header page="home" />
    <Container>
      <ListaDeContatos />
    </Container>
  </>
)

export default Home
