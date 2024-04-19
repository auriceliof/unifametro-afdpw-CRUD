package com.unifametro.apirestful.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.unifametro.apirestful.dto.StudentDTO;
import com.unifametro.apirestful.services.StudentService;

import io.swagger.v3.oas.annotations.Operation;


@RestController
@RequestMapping(value = "/students")
public class StudentController {
	
	@Autowired
	private StudentService service;
	
	
	@Operation(summary = "Busca todos os alunos", method = "GET")
	@GetMapping()
	public ResponseEntity<Page<StudentDTO>> findAll(Pageable pageable){
		
		Page<StudentDTO> list = service.findAllPaged(pageable);
		
		return ResponseEntity.ok().body(list);
	}
	
	@Operation(summary = "Busca alunos po ID", method = "GET")
	@GetMapping(value = "/{id}")
	public ResponseEntity<StudentDTO> findById(@PathVariable Long id){
		
		StudentDTO dto = service.findById(id);
		
		return ResponseEntity.ok().body(dto);
	}
	
	@Operation(summary = "Cadastra novos alunos", method = "POST")
	@PostMapping
	public ResponseEntity<StudentDTO> insert(@RequestBody StudentDTO dto){
		
		dto = service.insert(dto);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("{/id}").buildAndExpand(dto.getId()).toUri(); 
		
		return ResponseEntity.created(uri).body(dto);
	}
	
	@Operation(summary = "Atualiza aluno existente", method = "PUT")
	@PutMapping(value = "/{id}")
	public ResponseEntity<StudentDTO> update(@PathVariable Long id, @RequestBody StudentDTO dto){
		
		dto = service.update(id, dto);
		
		return ResponseEntity.ok().body(dto);
	}
	
	@Operation(summary = "Deleta aluno existente", method = "DELETE")
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<StudentDTO> delete(@PathVariable Long id){
		
		service.delete(id);
		
		return ResponseEntity.noContent().build();
	}
}

















