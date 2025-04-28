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