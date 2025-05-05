import axios from "axios";

export const registerUser = async(user) => {
    try {
        const filteredData = {
            name: user.firstName+ ' '+user.lastName,
            email: user.email,
            password: user.password
        }
        console.log(filteredData)
        const res = await axios.post('http://localhost:3000/api/v1/user/signup', filteredData)
        return res.data
    } catch(err) {
        throw err.response?.data || 'Something went wrong!!';
    }
}

export const login = async(email,password) => {
    try {
        const res = await axios.post('http://localhost:3000/api/v1/user/login', {email,password})
        return res.data
    } catch(err) {
        throw err.response?.data || 'Something went wrong!!';
    }
}

export const scanUrl = async(url,token) => {
    try {
        const res = await axios.post('http://localhost:3000/api/v1/analysis/scan', {url}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch(err) {
        throw err.response?.data || 'Something went wrong!!';
    }
}

export const searchHistory = async(token) => {
    try {
        const res = await axios.get('http://localhost:3000/api/v1/user/searchHistory', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch(err) {
        throw err.response?.data || 'Something went wrong!!';
    }
}

export const downloadPdf = async(id,token) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/v1/analysis/report/${id}/pdf`, {
            responseType: 'blob',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res
    } catch(err) {
        throw err.response?.data || 'Something went wrong!!';
    }
}