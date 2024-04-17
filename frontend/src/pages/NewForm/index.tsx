import './styles.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ButtonSecondary from '../../components/ButtonSecondary';
import FormInput from '../../components/FormInput';
import * as forms from '../../utils/forms';
import * as studentService from '../../service/student-service';
import ButtonPrimary from '../../components/ButtonPrimary';

export default function NewForm() {

    const navigate = useNavigate();

    const params = useParams();

    const isEditing = params.studentId !== 'create';

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
            validation: function(value: string) {
                return value.length >= 3 && value.length <= 50;
            },
            message: "Favor informar um nome de 3 a 80 caracteres"
        },
        cpf: {
            value: "",
            id: "cpf",
            name: "cpf",
            type: "text",
            placeholder: "CPF",
            validation: function(value: string) {
                return /^(([0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}))$/.test(value);
            },
            message: "Favor informar um CPF válido"
        },
        birthDate: {
            value: "",
            id: "birthDate",
            name: "birthDate",
            type: "datetime-local",
            placeholder: "Data de Nascimento",

        },
        income: {
            value: 0,
            id: "income",
            name: "income",
            type: "number",
            placeholder: "Salário",
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
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
    }

    function handleSubmit(event: any) {
        event.preventDefault();

        const formDataValidated = forms.dirtyAndValidateAll(formData);
        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }

        const requestBody = forms.toValues(formData);
        if (isEditing) {
            requestBody.id = params.studentId;
        }

        const request = isEditing
            ? studentService.updateRequest(requestBody)
            : studentService.insertRequest(requestBody)
            console.log(requestBody)
        
        request
            .then(() => {
                navigate("/catalogs");
            });
    }

    // Função para formatar data e hora no formato "2023-01-20T20:38:12"
    function formatarDataHora(dataHora: any) {
        const data = new Date(dataHora);
        const ano = data.getFullYear();
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const dia = String(data.getDate()).padStart(2, '0');
        const hora = String(data.getHours()).padStart(2, '0');
        const minuto = String(data.getMinutes()).padStart(2, '0');
        const segundo = String(data.getSeconds()).padStart(2, '0');
        return `${ano}-${mes}-${dia}T${hora}:${minuto}:${segundo}Z`;
    }

    return (
        <main>
            <section id="product-form-section" className="pag-container">
                <div className="pag-product-form-container">
                    <form className="pag-card pag-form" onSubmit={handleSubmit}>
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
                            <div>
                                <FormInput
                                    { ...formData.birthDate }
                                    className="pag-form-control" 
                                    onChange={handleInputChange}

                                />                                
                                <div className="pag-form-error">{formData.birthDate.message}</div>
                            </div>
                            <div>
                                <FormInput
                                    { ...formData.income }
                                    className="pag-form-control" 
                                    onChange={handleInputChange}
                                />
                                <div className="pag-form-error">{formData.income.message}</div>
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
