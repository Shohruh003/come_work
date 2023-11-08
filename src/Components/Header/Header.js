import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'
function Header() {
    return (
        <div className="header">
            <div className='container'>
                <div className='header-inner'>
                <nav>
                    <ul className='header-list'>
                    <li>
                        <Link className='header-link' to='/'>Рабочие</Link>
                    </li>

                    <li>
                        <Link className='header-link' to='/day'>За день</Link>
                    </li>

                    <li>
                        <Link className='header-link'  to='/month'>За месяц</Link>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;