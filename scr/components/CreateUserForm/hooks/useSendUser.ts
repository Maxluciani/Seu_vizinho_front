import { FormEvent } from 'react'
import { useCreateUserContext } from '../components/CreateUser'
import { post } from '/api'

// separada regra de negócio dentro de um hook customizado
const useSendUser = () => {
  const {
    name,
    email,
    password
  } = useCreateUserContext()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    post(
      'users',
      { name, email, password }
    )
  }

  return onSubmit
}

export default useSendUser