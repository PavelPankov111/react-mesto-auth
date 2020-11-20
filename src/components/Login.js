import React from 'react';
import { api } from '../utils/Api';
import { useHistory } from 'react-router-dom'
import union2 from '../images/union2.svg'
import InfoTooltip from './InfoTooltip';

function Login(props) {
    const [email, setEmail] = React.useState('')

    const [password, setPassword] = React.useState('')

    const [img, setimg] = React.useState('')

    const [title, setTitle] = React.useState('')

    const [isPopupInfotooltipOpen, setIsPopupInfotooltipOpen] = React.useState(false)

    const history = useHistory()

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleClose(){
        setIsPopupInfotooltipOpen(false)
    }

    function handleSubmit(e) {
        e.preventDefault()

        api.login(email, password).then((res) => {
            console.log(res)

            if (res.token) {
                console.log('true')
                localStorage.setItem('jwt', res.token)
                props.token()
                props.handleLog()
                props.logger(email)
                history.push('/')

            }
        })
            .catch(() => {
                console.log('catch')
                setimg(union2)
                setTitle('Что-то пошло не так! Попробуйте ещё раз.')
                setIsPopupInfotooltipOpen(true)
            })
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1 className="login__title">Вход</h1>
                <div className="login__input-list">
                    <input type="Email" autoComplete="off" placeholder="Email" value={email} className="login__input-email" required minLength="2" maxLength="100" onChange={handleEmail} />
                    <input type="password" autoComplete="off" placeholder="Пароль" value={password} className="login__input-password" required minLength="2" maxLength="100" onChange={handlePassword} />
                </div>
                <button type="submit" className="login__button">
                    Войти
        </button>
            </form>
            <InfoTooltip namePopup="-infotooltip" isOpen={isPopupInfotooltipOpen} close={handleClose} image={img} title={title} />
        </div>
    )
}

export default Login 