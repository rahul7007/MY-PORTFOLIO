import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const insertProjectData = payload => api.post(`/insert`, payload)
export const displayData = () => api.get(`/display`)
export const getProjectsId = () => api.get(`/getAllProjectsId`)


const apis = {
    insertProjectData,
    displayData,
    getProjectsId
}

export default apis