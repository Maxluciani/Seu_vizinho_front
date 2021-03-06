import React from 'react'
import { useCreateUserContext } from '../CreateUser'
import { Section } from './styles'
import { Label } from '../../../../ui'

const CreateUserResume = ({ ...rest }) => {
  const {
    name,
    email,
    password

  } = useCreateUserContext()

  return (
    <Section {...rest}>
      <div>
        <Label>Nome:</Label>
        <p>{name}</p>
      </div>
      <div>
        <Label>Email:</Label>
        <p>{email}</p>
      </div>
      <div>
        <Label>Senha:</Label>
        <p>{password}</p>
      </div>
      
    </Section>
  )
}

export default CreateUserResume