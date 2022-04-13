import { selector, useRecoilValue } from "recoil"
import { authAtom } from "./atom"

export const useIsLogInSelector = () => {
  return useRecoilValue(selector<boolean>({
    key: "AuthisLogIn",
    get: ({ get }) => {
      return !!get(authAtom).token
    },
  }))
}