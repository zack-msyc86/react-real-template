import { atom } from "recoil";

type Locale = 'ja'| 'en' | 'vi'

export default atom<Locale>({
  key: 'locale',
  default: 'en'
})