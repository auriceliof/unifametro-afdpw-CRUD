package br.fametro.xpto.v1.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.fametro.xpto.v1.model.Aluno;
import br.fametro.xpto.v1.repository.RepositorioAluno;

@Service
public class ServicoAluno {

	private RepositorioAluno repositorioXpto;

	public ServicoAluno(RepositorioAluno repositorioXpto) {
		this.repositorioXpto = repositorioXpto;
	}

	public List<Aluno> listarXptos() {
		List<Aluno> xptos = repositorioXpto.findAll();
		if (xptos.isEmpty()) {
			throw new NegocioException("Nenhuma xpto encontrada.");
		}
		return xptos;
	}

	public Aluno criarXpto(Aluno novaXpto) {
		return repositorioXpto.save(novaXpto);
	}

	public Aluno atualizarXpto(Aluno xpto) {
		repositorioXpto.save(xpto);
		return buscarXptoPorId(xpto.getId());
	}
		
	public void removerXpto(Aluno xpto) {
		//Xpto xptoExistente = this.buscarXptoPorId(xpto.getId());
		repositorioXpto.deleteById(xpto.getId());
	}
	
	public Aluno buscarXptoPorId(Long id) {
        return repositorioXpto.findById(id).orElseThrow(() -> new NegocioException("Xpto não encontrada."));
    }

}
