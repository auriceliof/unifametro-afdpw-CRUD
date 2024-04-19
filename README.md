Pós-Graduação em Engenharia de Software, Devops e Computação em Nuvem

Disciplina de Arquitetura e Frameworks para Desenvolvimento Web

Projeto CRUD

Equipe: 
    - Auricelio Freitas
    - Miguel Soares
    - Rafael Sales
    - Matheus Marques

DATA: 19/04/2024

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

      Documentação: Swagger OpenApi



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


- SWAGGER OPENAPI

  Link de acesso ao Swagger: http://localhost:8080/swagger-ui/index.html#
  
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

  
-----------------------------------------------------------
- INTERFACES

  HOME

![image](https://github.com/auriceliof/unifametro-afdpw-CRUD/assets/4201131/9af51f33-9746-4470-85d6-13b8f358beb2)



  CATÁLOGO DE ALUNOS

![image](https://github.com/auriceliof/unifametro-afdpw-CRUD/assets/4201131/51a4b706-52fd-48de-900e-c08989c79953)



  CADASTRAR NOVO ALUNO

![image](https://github.com/auriceliof/unifametro-afdpw-CRUD/assets/4201131/7af8c082-c428-4355-83f7-27a65fccd935)


  SWAGGER OPENAPI
  
![image](https://github.com/auriceliof/unifametro-afdpw-CRUD/assets/4201131/212eb08a-9600-4aa7-81e2-1c2d796a9ea7)

    
