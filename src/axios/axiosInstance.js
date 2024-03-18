import axios from "axios"
const userInstance = axios.create({baseURL:"http://localhost:8000/"})
const adminInatance = axios.create({baseURL:"http://localhost:8000/admin"})
export {userInstance,adminInatance}