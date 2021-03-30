import React from 'react';

const data = {
    name: 'admin',
    password: '123'
}
class LoginPage extends React.Component {
    state = {
        valuePassword: '',
        valueLogin: '',
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (data.name === this.state.valueLogin && data.password === this.state.valuePassword) {
            console.log('login');
            this.setState({
                valuePassword: '',
                valueLogin: '',
            })
        }


    }
    handleLogin = (e) => {
        console.log(this.state.valueLogin);

        this.setState({
            valueLogin: e.target.value
        })
    }
    handlePassword = (e) => {
        this.setState({
            valuePassword: e.target.value
        })

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Podaj login <input type="text" onChange={this.handleLogin} /></label>
                <label htmlFor="" >Podaj hasło <input type="password" onChange={this.handlePassword} /></label>
                <button>Zaloguj</button>
            </form>
        );
    }
}

export default LoginPage;