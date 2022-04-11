import { atom, selector } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist()

export type Auth = {
  client: string,
  uid: string,
  token: string,
  tokenType: string,
  expiry: string,
}

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

export const isLogInSelector = selector<boolean>({
  key: "isLogIn",
  get: ({ get }) => {
    return !!get(authAtom).token
  },
})

export type UserCredential = {id: string, password: string}
export const logInMutator = (credentials: UserCredential): Promise<Auth> => {
  return _logInImplementation(credentials)
}

const _logInImplementation = (credentials: UserCredential): Promise<Auth> => {
  return new Promise((resolve, reject) => {
    if(credentials.id == 'valid' && credentials.password == 'password'){
      console.log('valid credential')
      const rtval: Auth = {
        client: 'aaa',
        uid: 'aaa',
        token: 'aaa',
        tokenType: 'aaa',
        expiry: '1234567890',
      }
      resolve(rtval)
    }else{
      reject()
    }
  });
}

export const logOutMutator = (): Promise<Auth> => {
  return _logOutImplementation()
}

const _logOutImplementation = (): Promise<Auth> => {
  return new Promise((resolve, reject) => {
    const rtval: Auth = {
      client: '',
      uid: '',
      token: '',
      tokenType: '',
      expiry: '',
    }
    resolve(rtval)
  });
}