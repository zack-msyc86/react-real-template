import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"
import { Auth } from "./type"

const { persistAtom } = recoilPersist()

export const authAtom = atom<Auth>({
  key: 'authAtom',
  default: {
    client: '',
    uid: '',
    token: '',
    tokenType: '',
    expiry: '',
  },
  effects_UNSTABLE: [persistAtom]
})
