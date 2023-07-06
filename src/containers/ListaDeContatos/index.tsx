import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Contato from '../../components/Contato'
import { Titulo, Container, BotaoLink2 } from '../../styles/'
import * as S from './styles'


const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)



  const mensagemContatos = (quantidadeContatos: number) => {
    if (quantidadeContatos == 0) {
      return "Você não possui contatos cadastrados no momento"
    } else {
      return "Lista de Contatos Cadastrados:"
    }
  }
  const ativar = itens.length > 0
  const mensagem: string = mensagemContatos(itens.length)

  return (
    <Container>
      <Titulo as={'p'} ativo={!ativar}>{mensagem}</Titulo>
      <S.ListaCards>
        {itens.map((t) => (
          <S.CardTemplate key={t.id}>
            <Contato
              id={t.id}
              nome={t.nome}
              email={t.email}
              telefone={t.telefone}
            />
          </S.CardTemplate>
        ))}
      </S.ListaCards>
      <BotaoLink2 className={'botaoCadastrar'} pageActive={false} to={'/cadastro'}>Cadastrar novo contato</BotaoLink2>
    </Container>
  )
}

export default ListaDeContatos
