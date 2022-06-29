import { Link } from 'react-router-dom'
//import logo from '../../../logo.svg';
const Header = () => {
    return (
        <header className="App-header">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        {/* <a className="navbar-brand" href="#"><img src={logo} className="App-logo" alt="logo" /></a> */}
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/product'>Product</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header