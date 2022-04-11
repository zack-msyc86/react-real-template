import { isLogInSelector } from "@/store/Auth"
import { Typography } from "@mui/material"
import { useRecoilValue } from "recoil"
import LogInOrg from "../organisms/LogInOrg"
import LogOutOrg from "../organisms/LogOutOrg"

export default () => {
  const isLogIn = useRecoilValue(isLogInSelector)

  return (
    <>
      <h1>Test</h1>
      <Typography>{isLogIn && '(^^)'}</Typography>
      <LogInOrg/>
      <LogOutOrg/>
    </>
  )
}