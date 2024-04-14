package br.fametro.xpto.v1.dto;

import java.util.List;
import java.util.stream.Collectors;

import br.fametro.xpto.v1.model.Aluno;

public class AlunoDtoMapper {

    public static AlunoDto toDto(Aluno xpto) {
        AlunoDto dto = new AlunoDto();
        dto.setId(xpto.getId());
        dto.setValor1(xpto.getValor1());
        dto.setValor2(xpto.getValor2());
        dto.setValor3(xpto.getValor3());
        return dto;
    }
    
    public static Aluno fromDto(AlunoDto dto) {
        Aluno xpto = new Aluno();
        xpto.setId(dto.getId());
        xpto.setValor1(dto.getValor1());
        xpto.setValor2(dto.getValor2());
        xpto.setValor3(dto.getValor3());
        return xpto;
    }

    public static List<AlunoDto> toDtoList(List<Aluno> xptos) {
        return xptos.stream()
                .map(AlunoDtoMapper::toDto)
                .collect(Collectors.toList());
    }

    public static List<Aluno> fromDtoList(List<AlunoDto> dtos) {
        return dtos.stream()
                .map(AlunoDtoMapper::fromDto)
                .collect(Collectors.toList());
    }
}
