import { BotaoLink } from '../../styles'
import * as S from './styles'
import HeaderClass from '../../models/header'

const Header = ({
  page,
}: HeaderClass) => {
  const paginaAtual = page;

  return (
  <S.Header>
    <S.DivHeader>
      <S.TitleHeader>Agenda de Contatos</S.TitleHeader>
      {
        paginaAtual == 'home'?
        (
          <>
            <BotaoLink pageActive={true} to="/">Exibir</BotaoLink>
            <BotaoLink className={'botaoCadastrar'} pageActive={false} to="/cadastro">Cadastrar</BotaoLink>
          </>
        ) : (
          <>
            <BotaoLink pageActive={false} to="/">Exibir</BotaoLink>
            <BotaoLink className={'botaoCadastrar'} pageActive={true} to="/cadastro">Cadastrar</BotaoLink>
          </>
        )
      }
    </S.DivHeader>
  </S.Header>
  )
}

export default Header
