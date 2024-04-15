import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
    
    return (
        <header className="pag-header">
            <nav className="pag-container">
                <div className="pag-header-navbar">
                    <Link to="/">
                        <h1>APIRESTful</h1>
                    </Link>
                    <div>
                        <Link to="/">
                            <a href="#">Entrar</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
