import { useEffect, useState } from 'react';
import './styles.css';
import { StudentDTO } from '../../models/student';
import * as studentService from '../../service/student-service';

type QueryParams = {
    page: number;
    name: string;
  }

export default function Catalog() {

    const [students, setStudents] = useState<StudentDTO[]>([]);

    const [queryParams, setQueryParam] = useState<QueryParams>({
        page: 0,
        name: ""
      });

      useEffect(() => {

        studentService.findPageRequest(queryParams.page, queryParams.name)
            .then(response => {
                console.log(response.data)
                setStudents(response.data);
            });

        }, [queryParams]);

    return (
       <main>
            <section id="pag-catalog-section" className="pag-container">
                <div>
                    <h2>Listagem de Alunos</h2>
                </div>

                <table className="pag-table pag-mb20 pag-mt20">
                    <thead>
                        <tr>
                        <th className="pag-tb576">ID</th>
                        <th className="pag-tb768">NOME</th>
                        <th className="pag-txt-left">CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td className="pag-tb576">1</td>
                            <td className="pag-tb768">Auricelio</td>
                            <td className="pag-txt-left">12345645600</td>
                        </tr>
                            
                        
                    </tbody>
                </table>
            </section>
       </main>
    );
}
