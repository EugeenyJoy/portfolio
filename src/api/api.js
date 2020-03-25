import * as axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "a7bfee78-c82a-423f-9358-d79996d76b33"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {

        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data 
            }); 
    },
    follow(userId) {
        return instanse.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instanse.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getProfile(userId) {
        return instanse.get(`profile/2` + userId);
        
    }
}

export const authAPI = {
    me() {
        return instanse.get(`auth/me`)
    }
}


