package br.fametro.xpto.v1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.fametro.xpto.v1.model.Aluno;

public interface RepositorioAluno extends JpaRepository<Aluno, Long> {
    // Métodos customizados podem ser declarados aqui
}
