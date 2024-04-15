import './styles.css';

type Props = {
    name?: string;
    cpf?: string;
    income?: number;
}

export default function ResultStudent({name, cpf, income}: Props) {

    return (
        <div className="pag-resultrepo-container">
            <div className="pag-resultrepo-card">
                <div className="pag-resultrepo-information">
                    <div className="pag-resultgit-content">
                        <h5>Nome: </h5>
                        <h6>{name}</h6> 
                    </div>
                    <div className="pag-resultgit-content">
                        <h5>CPF: </h5>
                        <h6>{cpf}</h6> 
                    </div>
                    <div className="pag-resultgit-content">
                        <h5>income: </h5>
                        <h6>{income}</h6> 
                    </div>
                </div>
            </div>
        </div>
    );
}
