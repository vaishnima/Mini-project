import { userInstance } from "../axios/axiosInstance"

export const signup = (value) =>{
    return userInstance.post('/signup',{...value})
}
