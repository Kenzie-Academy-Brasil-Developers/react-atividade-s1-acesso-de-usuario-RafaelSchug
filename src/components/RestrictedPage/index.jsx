import './style.css';

const RestrictedPage = ({isLoggedIn, user, login, logout}) => {
    return (
        <div>
            {isLoggedIn && 
                <>
                    <h3 className='welcome_user'>Bem vindo, {user}</h3>
                    <button className='logout' onClick={logout}>Logout</button>
                </>
            }
            {!isLoggedIn && 
                <>
                    <h5 className='restrict_page'>Você não pode acessar essa página</h5>
                    <button className='login' onClick={login}>Login</button>
                </>
            }
        </div>
    )
}

export default RestrictedPage;