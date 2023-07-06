class Contato {
  nome: string
  email: string
  telefone: string
  id: number

  constructor(
    nome: string,
    email: string,
    telefone: number,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.telefone = `(${(telefone.toString()).slice(0, 2)}) ${(telefone.toString()).slice(3)}`
    this.id = id
  }
}

export default Contato
