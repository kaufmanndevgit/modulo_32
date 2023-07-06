import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Eduardo Bressane Stubbert',
      email: 'edbstu@gmail.com',
      telefone: '(31) 98820-7879'
    },
    {
      id: 2,
      nome: 'Luiza Azeredo Senra',
      email: 'luizasenra@gmail.com',
      telefone: '(31) 98312-8884'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id == action.payload.id
      )
      indexDoContato >= 0 && (state.itens[indexDoContato] = action.payload)
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Este contato já foi cadastrado!')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    },
  }
})

export const { remover, editar, cadastrar } =
contatosSlice.actions

export default contatosSlice.reducer
