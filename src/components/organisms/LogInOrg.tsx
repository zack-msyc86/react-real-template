import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { authAtom, UserCredential, logInMutator } from "@/store/Auth"
import TextField from "../atoms/TextField"
import Button from "../atoms/Button"

export default () => {
  const [credential, setCredential] = useState<UserCredential>({id: '', password: ''})
  const setAuth = useSetRecoilState(authAtom)
  const logInHandler = () => {
    console.log('submit', credential)
    logInMutator(credential).then(auth => {
      setAuth(auth)
    }).catch(() => {
    })
  }
  return (
    <>
      <TextField label="ID" onChange={event => setCredential({...credential, id: event.target.value})}/>
      <TextField label="Password" type="password" onChange={event => setCredential({...credential, password: event.target.value})}/>
      <Button onClick={() => logInHandler()}>Log In</Button>
    </>
  )
}