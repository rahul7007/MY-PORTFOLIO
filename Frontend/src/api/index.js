import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const insertProjectData = payload => api.post(`/insert`, payload)
export const displayProjectData = () => api.get(`/display`)
export const getProjectsId = () => api.get(`/getAllProjectsId`)
export const sendTextMessage = payload => api.post(`/sendMessage`, payload)


const apis = {
    insertProjectData,
    displayProjectData,
    getProjectsId,
    sendTextMessage
}

export default apis