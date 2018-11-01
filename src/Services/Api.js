import { BASE_URL,BASE_URL_KECAMATAN }  from '../constants'
import axios from 'axios'

export const fetchTask = async () => {
    try {
        return await axios.get(BASE_URL)

    } catch (error) {
        console.log(error)
    }
}

export const fetchKecamatan= async () => {
    try {
        return await axios.get(BASE_URL_KECAMATAN)
    } catch (error) {
        console.log(error)
    }
}

