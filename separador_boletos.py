def separar_dados(entrada):
    linhas = entrada.split('\n')
    boletos = []

        for linha in linhas:
        if linha.strip():
            data = f"{linha[0:2]}/{linha[2:4]}/{linha[4:8]}"
            nome = linha[8:50].strip()  
            telefone = linha[50:61].strip()
            valor = f"{linha[61:]}"

            boleto = {
                'Data': data,
                'Nome': nome,
                'Telefone': telefone,
                'Valor do Boleto': valor
            }

            boletos.append(boleto)

    return boletos

def main():
    # Dados de entrada
    dados_entrada = """18122023Maria da silva14991719343149.18
                      17122023Jose de Souza 149987956822400.00
                      30122023Maria Fulaninha17998785236182.90"""

    # Separar os dados
    boletos = separar_dados(dados_entrada)

    # Exibir os resultados
    for boleto in boletos:
        print(f"Data: {boleto['data']}, Nome: {boleto['nome']}, Telefone: {boleto['telefone']}, Valor do Boleto: {boleto['valor']}")

if __name__ == "__main__":
    main()
