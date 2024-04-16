@AUTHOR: Auricelio Freitas

DATA: 16/04/2024

-----------------------------------------------------------
BACKEND

- DEPENDÊNCIAS 

    O projeto será implementado conforme abaixo: 
    
      IDE: Spring Tool Suite 4 (STS)

      Banco de Dados: H2

      Gerenciador de Dependências: Maven

      Linguagem: Java

      Versionamento: Git e GitHub

      Testes da API: Postman



- CASO

    Uma Universidade precisa cadastrar os seus alunos, conforme segue abaixo:
  
      NOME
  
      CPF
  
      DATA DE NASCIMENTO
  
      RENDA 


- TESTES A SEREM REALIZADOS NO POSTMAN

    BUSCA PAGINADA DE ALUNOS
    
      GET /students?page=0&sort=name,asc
    
    BUSCA DE ALUNO POR ID
    
      GET /students/1
    
    INSERIR NOVO ALUNO
    
      POST /students
      {
        "name": "Auricelio Freitas",
        "cpf": "12345678901",
        "birthDate": "1982-08-28T10:30:00Z",
        "income": 15089.0,
      }
  
    ATUALIZAR ALUNO
    
      PUT /students/1
      {
        "name": "Auricelio Moreira",
        "cpf": "12345678901",
        "birthDate": "1982-08-28T10:30:00Z",
        "income": 15089.0,
      }
  
    DELETAR ALUNO
    
       DELETE /clients/1


-----------------------------------------------------------
FRONTEND

- DEPENDÊNCIAS 

    O projeto será implementado conforme abaixo: 
    
      IDE: Visual Studio Code (v. 1.88.1)
      
      Gerenciador de Dependências: Node (v. 18.19) / Yarn (v. 1.22.21)

      Linguagem: JavaScript/TypeScript

      Versionamento: Git e GitHub

      Projeto: VITE



- CASO

    O Administrador do Sistema deve visualizar todos os alunos na tela e conseguir realizar as ações de CRUD.

  
  
- TESTES A SEREM REALIZADOS NO SISTEMA WEB

  VISUALIZAR TODOS OS ALUNOS NUMA TABELA 
    
  INSERIR UM NOVO ALUNO

  EDITAR UM ALUNO EXISTENTE

  DELETAR UM ALUNO EXISTENTE

OBS: Não será possível inserir um formulário vazio, bem como todos os campos devem serem preenchidos conforme regras de validação.

  

- INTERFACES

  TELA INICIAL

![image](https://github.com/auriceliof/unifametro-afdpw-CRUD/assets/4201131/272f7283-8d7a-4c9b-806b-1e7d5ffb2c00)


  TELA DE CATÁLOGO DE ALUNOS

![image](https://github.com/auriceliof/unifametro-afdpw-CRUD/assets/4201131/a7bacc3b-0c4b-497d-ab75-fbe95b34167c)


  TELA PARA INSERIR NOVO ALUNO

![image](https://github.com/auriceliof/unifametro-afdpw-CRUD/assets/4201131/cf03b344-53db-44af-8835-42ad1382c3a8)


