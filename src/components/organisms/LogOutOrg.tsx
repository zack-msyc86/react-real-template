import { authAtom, logOutMutator } from "@/store/Auth"
import { useSetRecoilState } from "recoil"
import Button from "../atoms/Button"

export default () => {
  const setAuth = useSetRecoilState(authAtom)
  const signOutHandler = () => {
    logOutMutator().then(auth => {
      setAuth(auth)
    })
  }
  return (
    <Button onClick={() => signOutHandler()}>Log Out</Button>
  )
}