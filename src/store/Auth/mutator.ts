import { useCallback } from "react"
import { useSetRecoilState } from "recoil"
import { authAtom } from "./atom"
import { Auth } from "./type"

export type UserCredential = {id: string, password: string}
export const useLogInMutator = () => {
  const setState = useSetRecoilState(authAtom)
  
  const logIn = useCallback((credentials: UserCredential) => {
    return _logInImplementation(credentials).then(auth => {
      setState(auth)
    })
  }, [setState])

  return logIn
}



export const logOutMutator = (): Promise<Auth> => {
  return _logOutImplementation()
}
export const useLogOutMutator = () => {
  const setState = useSetRecoilState(authAtom)
  
  const logOut = useCallback(() => {
    return _logOutImplementation().then(auth => {
      setState(auth)
    })
  }, [setState])

  return logOut
}


const _logInImplementation = (credentials: UserCredential): Promise<Auth> => {
  return new Promise((resolve, reject) => {
    if(credentials.id == 'valid' && credentials.password == 'password'){
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