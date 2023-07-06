import styled from 'styled-components'
import { Cores } from '../../styles/variaveis'

export const FormType = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
  font-weight: bold;
  font-size: 14px;
  color: ${Cores.corCinzaA};
  align-items: center;

`

export const divForm = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 80px;

  label {
    width: 300px;
    padding-right: 30px;
    text-align: end;
  }
`

export const errorText = styled.p`
  color: red;
  font-size: 10px;
  margin-top: -6px;
  padding-left: 95px;
`

