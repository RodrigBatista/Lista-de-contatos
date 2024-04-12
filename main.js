const form = document.getElementById('form-contatos');
const nomes = [];
const numeros = [];
const email = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault(); //Quando acontecer o submit não irá reiniciar a página

    adicionalLinha();
    atualizaTabela()
});

function adicionalLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    const inputEmailContato = document.getElementById('email-contato')

    if(numeros.includes(inputNumeroContato.value)) {
        alert(`O número ${inputNumeroContato.value} já foi inserido anteriormente`);
    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);
        email.push(inputEmailContato.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${inputEmailContato.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
    inputEmailContato.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}