// Função para formatar data e hora no formato Brazil "dd/mm/yyyy"
export function formatDateBR(dataHora: any) {
    const data = new Date(dataHora);
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    
    const dataBR = `${dia}/${mes}/${ano}`
     
        if (dataBR === "31/12/1969") {
            return " "
        }
        
    return dataBR;
}
