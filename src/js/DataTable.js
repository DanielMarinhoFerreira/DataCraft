/*
 * Copyright 2025 Daniel Marinho Ferreira de Souza
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * 
 * */

/**    
 * @author Daniel Marinho Ferreira de Souza 
 * @Email daniel.marinho.ferreira1@gmail.com
 * @github https://github.com/DanielMarinhoFerreira/DataCraft
 * 
 * Cria e inicializa uma DataTable de forma genérica e reutilizável.
 *
 * @param {string} NomeTabela - O ID da tabela HTML que será transformada em DataTable.
 * @param {number} QtdColunas - Quantidade total de colunas da tabela (usado para montar o array de configurações).
 * @param {number|Array} targets - Índice ou índices das colunas que receberão configurações específicas (ex: ocultar/ajustar).
 * @param {boolean} [Table_responsive=true] - Define se a tabela será responsiva (true) ou não (false).
 * @param {Array} [responsiveCols=[]] - Lista de definições de prioridade de colunas para o modo responsivo.
 *      Exemplo: [
 *          { responsivePriority: 1, targets: 0 },  // coluna mais importante
 *          { responsivePriority: 2, targets: 3 }   // segunda a ser exibida
 *      ]
 * @param {Array} [order=[[1, "desc"]]] - Define a ordenação inicial da tabela.
 *      - O índice da coluna começa em 0.
 *      - "asc" → ordem crescente (do menor para o maior).
 *      - "desc" → ordem decrescente (do maior para o menor).
 *
 * Exemplo de uso:
 * CreateDataTable("MinhaTabela", 12, 0, true, [
 *      { responsivePriority: 1, targets: [0,1] },
 *      { responsivePriority: 2, targets: [5] }
 * ], [[3, "desc"]]);
 * @param {number} [pageLen=5] -  número padrão de registros por página
 *      - O numero de pagina é 5, 10 ou 25
 */
function CreateDataTable(NomeTabela, QtdColunas, Table_responsive = true, responsiveCols = [], order = [[1, "desc"]], pageLen = 5) {
    // Configuração das colunas
    let cols = [];
    for (let i = 0; i < QtdColunas; i++) {
        cols.push({ orderable: true });
    }

    // Configuração DataTable 1.x
    let config = {
        paging: true,              // Paginação
        searching: true,           // Habilita campo de busca
        pageLength: pageLen,       // Quantidade de registros por página
        order: order,              // Ordenação inicial
        columns: cols,             // Colunas configuradas
        responsive: Table_responsive, // Responsividade básica
        columnDefs: responsiveCols,   // Prioridade de colunas responsivas
        colReorder: { columns: ':not(:first-child, :last-child)' },
        columnControl: ['order', ['searchList']],
        ordering: {             // Ordenação de colunas
            indicators: false, // remove indicadores visuais de ordenação
            handler: false     // desabilita reordenação por arrastar
        },
        language: {
            info: "_START_ até _END_ de _TOTAL_ registros",
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            },
            lengthMenu: 'Exibir <select>' +
                '<option value="5">5</option>' +
                '<option value="10">10</option>' +
                '<option value="25">25</option>' +
                '<option value="-1">Tudo</option>' +
                '</select> registros'
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
        }
    };

    DataTable.type('num', 'className', 'dt-body-right');
    DataTable.type('num-fmt', 'className', 'dt-body-right');
    DataTable.type('date', 'className', 'dt-body-right');

    $("#" + NomeTabela).DataTable(config);
}