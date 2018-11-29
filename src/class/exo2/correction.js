class User {
    constructor({ firstname = '', lastname = '' }) {
        this.firstname = firstname
        this.lastname = lastname
    }

    get fullname() {
        const ucfirst = (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }

        return ucfirst(this.firstname.toLowerCase()) + ' ' + this.lastname.toUpperCase()
    }
}

export default User
