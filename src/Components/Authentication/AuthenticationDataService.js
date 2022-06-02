import axios from 'axios'

class AthenticationDataService{

    getUser(userId){
        return axios.get(`http://localhost:8070/user/get/${userId}`);
    }

}

export default new AthenticationDataService();