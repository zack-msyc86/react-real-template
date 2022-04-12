import { useLogOutMutator } from "@/store/Auth"
import Button from "../atoms/Button"

export default () => {
  const logOutMutator = useLogOutMutator()

  return (
    <Button onClick={() => logOutMutator()}>Log Out</Button>
  )
}