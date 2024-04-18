import { Link } from 'react-router-dom';
import ButtonPrimary from '../../components/ButtonPrimary';
import './styles.css';

export default function Home() {

    return (
        <main>
            <section className="pag-container ">
                <div className="pag-mb40 pag-mt40">
                    <h1>Pós-Graduação em Engenharia de Software, Devops e Computação em Nuvem</h1>
                </div>
                <div className="pag-mb40 pag-home-content">
                    <h2>Disciplina de Arquitetura e Frameworks para Desenvolvimento Web</h2>
                </div>
                <div className="pag-mb40 pag-home-content">
                    <h3>Projeto CRUD</h3>
                </div>
                <div className="pag-home-btn">
                    <Link to="/catalogs">
                        <ButtonPrimary name="Entrar" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
