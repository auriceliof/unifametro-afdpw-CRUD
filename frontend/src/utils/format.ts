// Função para formatar data e hora no formato Brazil "dd/mm/yyyy"
export function formatDateBR(dataHora: any) {
    const data = new Date(dataHora);
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    return `${dia}/${mes}/${ano}`;
}

// Função para formatar data e hora no formato UTC "2023-01-20T20:38:12Z"
export function formatDateUTC(dataHora: any) {
    const data = new Date(dataHora);
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    const hora = String(data.getHours()).padStart(2, '0');
    const minuto = String(data.getMinutes()).padStart(2, '0');
    const segundo = String(data.getSeconds()).padStart(2, '0');
    return `${ano}-${mes}-${dia}T${hora}:${minuto}:${segundo}Z`;
}
