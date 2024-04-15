import './styles.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ButtonSecondary from '../../components/ButtonSecondary';
import FormInput from '../../components/FormInput';
import * as forms from '../../utils/forms';
import * as studentService from '../../service/student-service';

export default function NewForm() {

    const params = useParams();

    const isEditing = params.studentId !== 'created';

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
        },
        cpf: {
            value: "",
            id: "cpf",
            name: "cpf",
            type: "text",
            placeholder: "CPF",
        },
    });

    useEffect(() => {

        if (isEditing) {
            studentService.findById(Number(params.studentId))
                .then(response => {
                    const newFormData = forms.updateAll(formData, response.data);
                    setFormData(newFormData);
                })
        }
    }, []);

    function handleInputChange(event: any) {
        const dataUpdated = forms.update(formData, event.target.name, event.target.value);
        const dataValidated = forms.validate(dataUpdated, event.target.name)
        setFormData(dataUpdated);
    }

    return (
        <main>
            <section id="product-form-section" className="pag-container">
                <div className="pag-product-form-container">
                    <form className="pag-card pag-form" >
                        <h2>Dados do Aluno</h2>
                        <div className="pag-form-controls-container">
                            <div>
                                <FormInput 
                                    { ...formData.name }
                                    className="pag-form-control" 
                                    onChange={handleInputChange}
                                />
                                <div className="pag-form-error">{formData.name.message}</div>
                            </div>                                
                            <div>
                                <FormInput
                                    { ...formData.cpf }
                                    className="pag-form-control" 
                                    onChange={handleInputChange}
                                />
                                <div className="pag-form-error">{formData.cpf.message}</div>
                            </div>
                        </div>

                        <div className="pag-product-form-buttons">
                            <Link to="/catalogs">
                                <ButtonSecondary name='Cancelar'/>
                            </Link>
                            <button type="submit" className="pag-btn-primary">Salvar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
