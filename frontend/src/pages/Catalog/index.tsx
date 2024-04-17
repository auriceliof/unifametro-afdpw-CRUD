import './styles.css';
import { useEffect, useState } from 'react';
import { StudentDTO } from '../../models/student';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';
import * as studentService from '../../service/student-service';
import ButtonPrimary from '../../components/ButtonPrimary';
import { useNavigate } from 'react-router-dom';
import DialogInfo from '../../components/DialogInfo';
import DialogConfirmation from '../../components/DialogConfirmation';
import { formatDateBR } from '../../utils/format';

type QueryParams = {
    page: number;
    name: string;
  }

export default function Catalog() {

    const navigate = useNavigate();

    const [dialogInfoData, setDialogInfoData] = useState({
        visible: false,
        message: "Operação com sucesso!"
    })

    const [dialogConfirmationData, setDialogConfirmationData] = useState({
        visible: false,
        id: 0,
        message: "Tem certeza?"
    })

    const [students, setStudents] = useState<StudentDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: ""
      });

      useEffect(() => {

        studentService.findPageRequest(queryParams.page, queryParams.name)
            .then(response => {
                setStudents(response.data.content);
            });

        }, [queryParams]);

        function handleNewStudentClick() {
            navigate("/catalogs/create");
        } 
        
        function handleDialogInfoClose() {
            setDialogInfoData({ ...dialogInfoData, visible: false});
        }

        function handleUpdateClick(studentId: number) {
            navigate(`/catalogs/${studentId}`)
        }

        function handleDeleteClick(studentId: number) {
            setDialogConfirmationData({ ...dialogConfirmationData, id: studentId, visible: true});
        }

        function handleDialogConfirmationAnswer(answer: boolean, studentId: number) {
            if (answer) {
                studentService.deleteById(studentId)
                    .then(() => {
                        setStudents([]);
                        setQueryParams({ ...queryParams, page: 0});
                    })
            }
            setDialogConfirmationData({ ...dialogConfirmationData, visible: false});
        }       

    return (
       <main>
            <section id="pag-catalog-section" className="pag-container">
                <div>
                    <h2>Listagem de Alunos</h2>
                </div>

                <div className="pag-mt40 pag-mb20">
                    <div className="pag-catalog-btn" onClick={handleNewStudentClick}>
                        <ButtonPrimary name='Novo' />
                    </div>
                </div>

                <table className="pag-table pag-mb20 pag-mt20">
                    <thead>
                        <tr>
                            <th className="pag-tb576">ID</th>
                            <th className="pag-tb768">NOME</th>
                            <th className="pag-txt-left">CPF</th>
                            <th className="pag-txt-left">DATA DE NASCIMENTO</th>
                            <th className="pag-txt-left">SALARIO</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            students.map(student => (
                                <tr key={student.id}>
                                    <td className="pag-tb576">{student.id}</td>
                                    <td className="pag-tb768">{student.name}</td>
                                    <td className="pag-txt-left">{student.cpf}</td>
                                    <td className="pag-txt-left">{formatDateBR(student.birthDate)}</td>
                                    <td className="pag-txt-left">R$ {student.income}</td>                                    
                                    <td><img onClick={() => handleUpdateClick(student.id)}className="pag-catalog-listing-btn" src={editIcon} alt="Editar" /></td>
                                    <td><img onClick={() => handleDeleteClick(student.id)} className="pag-catalog-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                                </tr>        
                            ))
                        }                       
                    </tbody>
                </table>
            </section>
            {
                dialogInfoData.visible &&
                <DialogInfo 
                    message={dialogInfoData.message}
                    onDialogClose={handleDialogInfoClose}
                />
            }
            {
                dialogConfirmationData.visible &&
                <DialogConfirmation
                    id={dialogConfirmationData.id}
                    message={dialogConfirmationData.message}
                    onDialogAnswer={handleDialogConfirmationAnswer}
                />
            }
       </main>
    );
}
