import './styles.css';
import { useEffect, useState } from 'react';
import ResultStudent from '../../components/ResultStudent';
import { StudentDTO } from '../../models/student';
import * as studentService from '../../service/student-service';

type QueryParams = {
    page: number;
    name: string;
  }

export default function SearchPage() {

    const [ student, setStudent ] = useState<StudentDTO[]>([]);

    const [queryParams, setQueryParam] = useState<QueryParams>({
        page: 0,
        name: ""
      });

    useEffect(() => {
       studentService.findPageRequest(queryParams.page, queryParams.name)
            .then((response) => {
                console.log(response.data)
                setStudent(response.data);
                setQueryParam({ ...queryParams, page: 0, name: ''})
            })

    }, [])

    return (
        <div className="pag-gitsearch-container">
            <form>
                <div className="pag-mt20 pag-gitsearch-resultRepos-card">
                    <h4>Alunos</h4>
                    {student.map((student) =>  (
                        <div key={student.id} className="pag-mt20">
                            <ResultStudent
                                name={student?.name}
                                cpf={student?.cpf}
                                income={student?.income}                                             
                            />
                        </div>             
                    ))}
                </div>
            </form>
        </div>
    );
}
