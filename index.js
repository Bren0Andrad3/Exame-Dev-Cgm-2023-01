axios.get('http://localhost:3000/resources')
    .then(response => {
        console.log(response.data)
        const dados = response.data;
        const table = document.getElementById('tabela');
        dados.forEach(item => {
            const row = table.insertRow();
            const nomeCell = row.insertCell(0);
            const idadeCell = row.insertCell(1);
            const emailCell = row.insertCell(2);
            const telefoneCell = row.insertCell(3);
            const enderecoCell = row.insertCell(4);
            const cepCell = row.insertCell(5);
            nomeCell.innerHTML = item.nome;
            idadeCell.innerHTML = item.idade;
            emailCell.innerHTML = item.email;
            telefoneCell.innerHTML = item.telefone;
            enderecoCell.innerHTML = item.endereco;
            cepCell.innerHTML = item.cep;
        });
    })
    .catch(error => {
        console.log(error);
    });