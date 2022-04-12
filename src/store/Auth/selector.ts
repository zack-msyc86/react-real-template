import { selector } from "recoil"
import { authAtom } from "./atom"

export const isLogInSelector = selector<boolean>({
  key: "AuthisLogIn",
  get: ({ get }) => {
    return !!get(authAtom).token
  },
})