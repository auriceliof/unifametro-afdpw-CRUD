import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary';
import './styles.css';
import { Link } from 'react-router-dom';

export default function NewForm() {

    return (
        <main>
            <section id="product-form-section" className="pag-container">
                <div className="pag-product-form-container">
                    <form className="pag-card pag-form" >
                        <h2>Dados do Aluno</h2>
                        <div className="pag-form-controls-container">
                            <div>
                                <input className="pag-form-control" type="text" placeholder="Nome"/>
                            </div>                                
                            <div>
                                <input className="pag-form-control" type="text" placeholder="cpf"/>
                            </div>
                        </div>

                        <div className="pag-product-form-buttons">
                            <Link to="/catalogs">
                                <ButtonSecondary name='Cancelar'/>
                            </Link>
                                <ButtonPrimary name='Salvar' />
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
