package com.unifametro.apirestful;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Projeto Swagger", version = "1", description = "Documentação para os Endpoints do Projeto CRUD"))
public class ApirestfulApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApirestfulApplication.class, args);
	}

}
