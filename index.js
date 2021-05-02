class Authentication {
    _userName = "admin";
    _password = "admin";

    authenticate(userName, password) {
        if (userName === this._userName && password === this._password) {
            console.log("Welcome User.");
        } else {
            throw new Error("Invalid Credential.");
        }
    }
}

module.exports = Authentication;

const auth = new Authentication();

auth.authenticate("admin", "admin");