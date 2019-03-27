import React from 'react'
import axios from 'axios'

const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

export class AuthProvider extends React.Component {
    state = { user: null}

    handleRegister = (user, history) => {
        axios.post("/api/auth", user)
            .then( response => {
                this.setState({ user: response.data.data, })
                history.push("/")
            })
            .catch( response => {
                console.log(response)
            })
    }

    handleLogin = (user, history) => {
        axios.post("api/auth/sign_in", user)
            .then( response => {
                this.setState({ user: response.data.data, })
                history.push("/")
            })
            .catch( response => {
                console.log(response)
            })
    }

    handleLogout = () => {
        this.debugger
    }
}