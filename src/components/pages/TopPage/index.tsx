import { useIsLogInSelector } from "@/store/Auth"
import { Typography } from "@mui/material"
import { useState } from "react"
import Autocomplete from "../../molecules/Autocomplete"
import LogInOrg from "../../organisms/LogInOrg"
import LogOutOrg from "../../organisms/LogOutOrg"

export default () => {
  const isLogIn = useIsLogInSelector()
  const [acValue, setAcValue] = useState<string | null>('a')
  const acOptions = [
    {value: 'a', label: 'aaa'},
    {value: 'b', label: 'bbb'},
    {value: 'c', label: 'ccc'},
    {value: 'd', label: 'ddd'},
  ]
  return (
    <>
      <h1>Test</h1>
      <Typography>{isLogIn && '(^^)'}</Typography>
      <LogInOrg/>
      <LogOutOrg/>
      <Autocomplete<string> options={acOptions} onChange={val => setAcValue(val)} value={acValue}/>
    </>
  )
}