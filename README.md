# DataCraft

[![License](https://img.shields.io/github/license/seuusuario/DataCraft)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/seuusuario/DataCraft?style=social)](https://github.com/seuusuario/DataCraft/stargazers)

DataCraft é uma solução poderosa e flexível para visualização, manipulação e exportação de tabelas de dados, inspirada nos melhores repositórios open source.  
DataCraft is a powerful and flexible solution for viewing, manipulating, and exporting data tables, inspired by the best open source repositories.

---

## 🚀 Demonstração / Demo

Veja uma demonstração online:  
See a live demo:  
[https://seuusuario.github.io/DataCraft/exemples/](https://seuusuario.github.io/DataCraft/exemples/)

---

## 📦 Instalação / Installation

### 1. Clone o repositório / Clone the repository

```bash
git clone https://github.com/DanielMarinhoFerreira/DataCraft.git
cd DataCraft
```

### 2. Instale as dependências (opcional) / Install dependencies (optional)

Se necessário, instale dependências para desenvolvimento:  
If needed, install development dependencies:

```bash
npm install
```

### 3. Execute localmente / Run locally

Abra o arquivo de exemplo em seu navegador:  
Open the example file in your browser:

```bash
# Caminho sugerido / Suggested path
file:///caminho/para/DataCraft/exemples/index.html
```

Ou use um servidor local:  
Or use a local server:

```bash
npx serve ./exemples
```

---

## 📝 Como Usar / How to Use

### 1. Inclua os arquivos necessários / Include required files

Adicione os links do Bootstrap, DataTables e DataCraft ao seu HTML:  
Add Bootstrap, DataTables, and DataCraft links to your HTML:

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.3/css/bootstrap.min.css" rel="stylesheet"/>
<link href="https://cdn.datatables.net/v/bs5/jq-3.7.0/jszip-3.10.1/dt-2.3.2/b-3.2.4/b-html5-3.2.4/cc-1.0.7/date-1.5.6/kt-2.12.1/r-3.0.5/rg-1.5.2/sc-2.4.3/datatables.min.css" rel="stylesheet"/>
<link href="css/index.css" rel="stylesheet"/>
```

```html
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script src="https://cdn.datatables.net/v/bs5/jq-3.7.0/jszip-3.10.1/dt-2.3.2/b-3.2.4/b-html5-3.2.4/cc-1.0.7/date-1.5.6/kt-2.12.1/r-3.0.5/rg-1.5.2/sc-2.4.3/datatables.min.js"></script>
<script src="js/index.js"></script>
<script src="src/js/DataTable.js"></script>
```

### 2. Crie sua tabela HTML / Create your HTML table

```html
<table id="DataTable_example_Response" class="table table-striped table-bordered">
  <thead>
    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Office</th>
      <th>Age</th>
      <th>Start date</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    <!-- Seus dados aqui / Your data here -->
  </tbody>
</table>
```

### 3. Inicialize o DataTable / Initialize DataTable

No seu arquivo JS:  
In your JS file:

```js
$(document).ready(function() {
  $('#DataTable_example_Response').DataTable({
    // Opções personalizadas / Custom options
  });
});
```

---

## ⚙️ Funcionalidades / Features

- Ordenação, busca e paginação automáticas  
  Sorting, searching, and automatic pagination
- Exportação para CSV, Excel, PDF  
  Export to CSV, Excel, PDF
- Responsivo e personalizável  
  Responsive and customizable
- Suporte a temas via Bootstrap  
  Theme support via Bootstrap
- Fácil integração  
  Easy integration

---

## 💡 Exemplos / Examples

Veja exemplos completos em `/exemples/`.  
See full examples in `/exemples/`.

---

## 🤝 Contribuindo / Contributing

Contribuições são bem-vindas!  
Contributions are welcome!

1. Fork este repositório / Fork this repository
2. Crie uma branch / Create a branch (`git checkout -b feature/nome`)
3. Commit suas mudanças / Commit your changes (`git commit -am 'Add feature'`)
4. Push para o branch / Push to the branch (`git push origin feature/nome`)
5. Abra um Pull Request / Open a Pull Request

---

## 👥 Colaboradores / Contributors

Os colaboradores deste projeto são listados automaticamente a partir do GitHub.  
Project contributors are listed automatically from GitHub.

---

## 💸 Apoie este projeto / Support this project

Se você gosta do nosso trabalho, considere fazer uma doação:  
If you like our work, consider donating:

[Doar via PayPal / Donate via PayPal](https://www.paypal.com/donate)

---

## 📄 Licença / License

Este projeto está licenciado sob a licença MIT.  
This project is licensed under the MIT License.

---

## 📧 Contato / Contact

Dúvidas ou sugestões?  
Questions or suggestions?

- Email: [seuemail@exemplo.com](mailto:daniel.marinho.ferreira1@exemplo.com)
- GitHub Issues: [https://github.com/DanielMarinhoFerreira/DataCraft/issues](https://github.com/DanielMarinhoFerreira/DataCraft/issues)

---
