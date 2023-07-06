import styled from 'styled-components'
import { Cores } from '../../styles/variaveis'
import InputMask from "react-input-mask";

export type CustomInput = {
  widthInput: number;
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.9);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const DivInput = styled.div`
  margin-bottom: 10px;

  label {
    color: ${Cores.corCinzaB};
    font-size: 16px;
  }
`

export const Nome = styled.input<CustomInput>`
  font-size: 17px;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
  width: 240px;
  border: 2px solid ${Cores.corPreta};
  border-radius: 4px;
  padding-left: 4px;

  &:disabled {
    border: none;
    text-align: center;
    color: ${Cores.corPreta};
    width: ${({ widthInput }) => widthInput * 9.3}px;
  }
`

export const Email = styled.input<CustomInput>`
  font-size: 16px;
  font-weight: normal;
  margin-left: 2px;
  margin-right: 10px;
  width: 190px;
  border: 2px solid ${Cores.corPreta};
  border-radius: 4px;
  padding-left: 4px;
  margin-left: 4px;

  &:disabled {
    border: none;
    text-align: center;
    color: ${Cores.corPreta};
    width: ${({ widthInput }) => widthInput * 9}px;
    margin-left: 0;
  }
`

export const Telefone = styled(InputMask)<CustomInput>`
  font-size: 16px;
  font-weight: normal;
  margin-left: 2px;
  margin-right: 10px;
  width: 130px;
  padding-left: 4px;
  border: 2px solid ${Cores.corPreta};
  border-radius: 4px;
  margin-left: 4px;

  &:disabled {
    border: none;
    text-align: center;
    color: ${Cores.corPreta};
    width: ${({ widthInput }) => widthInput * 9}px;
    margin-left: 0;
  }
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  padding-top: 16px;
`

export const TextoEditando = styled.em`
  padding-left: 55px;
  font-size: 20px;
`

export const ErrorTextNome = styled.p`
  color: red;
  font-size: 10px;
  padding-right: 160px;
`

export const ErrorTextEMail = styled.p`
  color: red;
  font-size: 10px;
  padding-right: 100px;
`

export const ErrorTextTelefone = styled.p`
  color: red;
  font-size: 10px;
  padding-right: 120px;
`
