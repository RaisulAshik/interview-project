import axios from 'axios';
import Common from './Common';
export default {

    create(data){
        return axios.post(Common.api+'login',data);
    }
}