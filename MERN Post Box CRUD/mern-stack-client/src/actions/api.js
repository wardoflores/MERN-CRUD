// Module to make a HTTP request. Using axios API and not postman [7]

import axios from "axios";

const databaseurl = 'http://localhost:4000/'

export default {
    postMessage(url=databaseurl+'Postmessages/')
    {
        return {
            fetchAll: () => axios.get(url),
            fetchbyid: id => axios.get(url+id),
            create: newrecord => axios.post(url, newrecord),
            update: (id, updatedrecord) => axios.put(url + id, updatedrecord),
            delete: id => axios.delete(url + id)
        }
    }
}