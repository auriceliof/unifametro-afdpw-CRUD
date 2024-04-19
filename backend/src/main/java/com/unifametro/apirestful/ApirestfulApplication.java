package com.unifametro.apirestful;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Swagger OpenIpi", version = "1", description = "API Documentation Endpoints"))
@EnableScheduling
public class ApirestfulApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApirestfulApplication.class, args);
	}

}
