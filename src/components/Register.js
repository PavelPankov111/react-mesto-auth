/* eslint-disable no-restricted-globals */
import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { api } from '../utils/Api';

function Register() {
    const [email, setEmail] = React.useState('')

    const [password, setPassword] = React.useState('')

    const history = useHistory()

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        api.register(email, password).then((res) => {
            console.log(res)
            if (res.statusCode !== 400) {
                history.push('/sing-in');
            } 
        })
    }

    return (
        <div className="register">
            <form onSubmit={handleSubmit} noValidate>
                <h1 className="register__title">Регистрация</h1>
                <div className="register__input-list">
                    <input name="email" type="Email" autoComplete="off" placeholder="Email" className="register__input-email" value={email} required minLength="2" maxLength="100" onChange={handleEmail} />
                    <input name="password" type="password" autoComplete="off" placeholder="Пароль" className="register__input-password" value={password} required minLength="2" maxLength="100" onChange={handlePassword} />
                </div>
                <button type="submit" className="register__button">
                    Зарегистрироваться
               </button>
                <div className="register__sing-in">
                    <p className="register__text">Уже зарегистрированы?</p>
                    <Link className="register__link" to="/sing-in">Войти</Link>
                </div>
            </form>
        </div>
    )
}

export default Register