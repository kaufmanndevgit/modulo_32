import { FormEvent, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { cadastrar } from '../../store/reducers/contatos'

import { Telefone } from '../../styles'

import { BotaoCadastrar, Campo, Container, TituloFormulario } from '../../styles'
import * as S from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, SetNome] = useState('')
  const [email, SetEmail] = useState('')
  const [telefone, SetTelefone] = useState('')
  const [initialError, SetInitialError] = useState(false)
  const [errorNome, SetErrorNome] = useState(true)
  const [errorEmail, SetErrorEmail] = useState(true)
  const [errorTelefone, SetErrorTelefone] = useState(true)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    SetInitialError(true)
    if (errorNome == false && errorEmail == false && errorTelefone == false) {
      dispatch(
        cadastrar({
          nome,
          email,
          telefone
        })
      )
      navigate('/')
    }
  }

  function mudancaNome(value: string) {
    SetNome(value);
    if (value == "") {
      SetErrorNome(true);
    }
    else {
      SetErrorNome(false);
    }
  }

  function mudancaEmail(value: string) {
    SetEmail(value);
    if (value == "") {
      SetErrorEmail(true);
    }
    else {
      SetErrorEmail(false);
    }
  }

  function mudancaTelefone(value: string) {
    SetTelefone(value);
    console.log(value.length);
    if (value.length < 15) {
      SetErrorTelefone(true);
    }
    else {
      SetErrorTelefone(false);
    }
  }

  return (
    <Container>
      <TituloFormulario>Novo Contato:</TituloFormulario>
      <S.FormType onSubmit={cadastrarContato}>
        <S.divForm>
          <label htmlFor={'campo-nome'}>Nome Completo:</label>
          <Campo
            id="campo-nome"
            value={nome}
            onChange={(evento: ChangeEvent<HTMLInputElement>) => mudancaNome(evento.target.value)}
            type="text"
          />
        </S.divForm>
        {initialError == true && errorNome == true && (
              <S.errorText>Por favor, preencha o nome corretamente!</S.errorText>
        )}
        <S.divForm>
          <label htmlFor={'campo-email'}>E-mail:</label>
          <Campo
            id="campo-email"
            value={email}
            onChange={(evento: ChangeEvent<HTMLInputElement>) => mudancaEmail(evento.target.value)}
            type="text"
          />
        </S.divForm>
        {initialError == true && errorEmail == true && (
              <S.errorText>Por favor, preencha o e-mail corretamente!</S.errorText>
        )}
        <S.divForm>
          <label htmlFor={'campo-telefone'}>Telefone:</label>
          <Telefone
            mask={"(99) 99999-9999"}
            maskPlaceholder={""}
            id="campo-telefone"
            value={telefone}
            onChange={(evento: ChangeEvent<HTMLInputElement>) => mudancaTelefone(evento.target.value)}
            type="text"
          />
        </S.divForm>
        {initialError == true && errorTelefone == true && (
              <S.errorText>Por favor, preencha o telefone corretamente!</S.errorText>
        )}
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </S.FormType>
    </Container>
  )
}

export default Formulario
