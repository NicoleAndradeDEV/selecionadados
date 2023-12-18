function separarDados() {
    const inputData = document.getElementById('inputData').value;
    const resultadoDiv = document.getElementById('resultado');

    // Limpar resultado anterior
    resultadoDiv.innerHTML = '';

    const linhas = inputData.split('\n');
    const boletos = [];

    for (const linha of linhas) {
        if (linha.trim() !== '') {
            const data = `${linha.slice(0, 2)}/${linha.slice(2, 4)}/${linha.slice(4, 8)}`;
            const nome = linha.slice(8, 50).trim();
            const telefone = linha.slice(50, 61).trim();
            const valor = `${parseFloat(linha.slice(61)).toFixed(2)}`;

            const boleto = {
                'Data': data,
                'Nome': nome,
                'Telefone': telefone,
                'Valor do Boleto': valor
            };

            boletos.push(boleto);
        }
    }

    // Exibir resultado na página
    boletos.forEach(boleto => {
        const boletoDiv = document.createElement('div');
        boletoDiv.innerHTML = `<p><strong>Data:</strong> ${boleto['Data']}, <strong>Nome:</strong> ${boleto['Nome']}, <strong>Telefone:</strong> ${boleto['Telefone']}, <strong>Valor do Boleto:</strong> R$ ${boleto['Valor do Boleto']}</p>`;
        resultadoDiv.appendChild(boletoDiv);
    });
}
