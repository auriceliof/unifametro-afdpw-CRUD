package com.unifametro.apirestful.dto;

import java.io.Serializable;
import java.time.Instant;

import com.unifametro.apirestful.entities.Student;

public class StudentDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private String cpf;
	
	public StudentDTO() {
		
	}

	public StudentDTO(Long id, String name, String cpf) {
		this.id = id;
		this.name = name;
		this.cpf = cpf;
	}
	
	public StudentDTO(Student entity) {
		id = entity.getId();
		name = entity.getName();
		cpf = entity.getCpf();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
}
























