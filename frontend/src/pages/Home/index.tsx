import { Link } from 'react-router-dom';
import ButtonPrimary from '../../components/ButtonPrimary';
import './styles.css';

export default function Home() {

    return (
        <div className="pag-container ">
            <div className="pag-mb40 pag-mt40">
                <h1>Projeto CRUD</h1>
            </div>
            <div className="pag-mb20 pag-home-content">
                <h4>Projeto de Pós-Graduação da Unifametro</h4>
            </div>
            <div className="pag-mb40 pag-home-content">
                <h5>Disciplina de Fremeworks Web</h5>
            </div>
            <div>
                <Link to="/catalogs">
                    <ButtonPrimary name="Começar" />
                </Link>
            </div>
        </div>
    );
}
