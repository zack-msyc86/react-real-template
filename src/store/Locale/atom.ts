import { atom } from "recoil"

type Locale = 'ja'| 'en' | 'vi'

export const localeAtom = atom<Locale>({
  key: 'locale',
  default: 'en'
})