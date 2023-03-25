import axios  from "axios";
const apiClient = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials:false,
    headers: {
        accept: "application/json",
        "Content-Type": "application/json"
    },
})

export default {
    getTodoItems(){
        return apiClient.get("/items")
    },
    getItem(id){
        return apiClient.get("/items/"+id);
    }
}
