import { useState } from "react"
import { UserCredential, useLogInMutator } from "@/store/Auth"
import TextField from "../atoms/TextField"
import Button from "../atoms/Button"

export default () => {
  const [credential, setCredential] = useState<UserCredential>({id: '', password: ''})
  const logInMutator = useLogInMutator()

  return (
    <>
      <TextField label="ID" onChange={event => setCredential({...credential, id: event.target.value})}/>
      <TextField label="Password" type="password" onChange={event => setCredential({...credential, password: event.target.value})}/>
      <Button onClick={() => logInMutator(credential)}>Log In</Button>
    </>
  )
}