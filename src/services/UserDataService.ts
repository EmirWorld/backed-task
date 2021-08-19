import http from "../http-common";

/*
* User CRUD service
* */

class UserDataService {
    getAll() {
        return http.get("/users")
    }

    get(id: string) {
        return http.get('/users/' + id)
    }

    create(data: any) {
        return http.post("/users", data)
    }

    update(id: string, data: any) {
        return http.put('/users/' + id, data)
    }

    delete(id: string) {
        return http.delete('/users/' + id,)
    }

    deleteAll() {
        return http.delete('/users',)
    }

    findByFirstName(firstName: string) {
        return http.get('/users?firstName=' + firstName)
    }

}

export default new UserDataService()
