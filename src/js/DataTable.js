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

/*   
 * Autor: Daniel Marinho Ferreira de Souza 
 * 
 * Data: 2025/09/04
 * 
 * Totos os direitos reservados 
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
 */
function CreateDataTable(NomeTabela, QtdColunas, targets, Table_responsive = true, responsiveCols = [], order = [[1, "desc"]]) {

    // Monta dinamicamente a configuração de cada coluna (por padrão todas ordenáveis)
    let cols = [];
    for (let i = 0; i < QtdColunas; i++) {
        cols.push({ orderable: true });
    }

    // Configuração base da DataTable
    let config = {
        colReorder: { columns: ':not(:first-child, :last-child)' }, // permite reordenar colunas (exceto a primeira e última)
        columnControl: ['order', ['searchList']],                  // ativa controles de coluna (ordenação e pesquisa)
        
        ordering: {
            indicators: false, // remove indicadores visuais de ordenação
            handler: false     // desabilita reordenação por arrastar
        },

        layout: {
            topEnd: {
                search: {
                    placeholder: 'Pesquise aqui',
                    text: 'Pesquisa : _INPUT_'
                }
            }
        },

        language: {
            info: "_START_ até _END_ de _TOTAL_", // texto de paginação
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            },
            lengthMenu: 'Exibir <select class="custom-select custom-select-sm ml-1 mr-1">' +
                        '<option value="10">10</option>' +
                        '<option value="25">25</option>' +
                        '<option value="-1">Tudo</option>' +
                        '</select> registros',
        },

        pageLength: 10,        // número padrão de registros por página
        columns: cols,         // array de colunas configuradas dinamicamente
        select: { style: "multi" }, // permite seleção múltipla de linhas
        order: order,               // ordenação inicial definida por parâmetro

        drawCallback: function () {
            // adiciona estilo customizado na paginação após cada render
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
        },

        initComplete: function () {
            // estiliza o campo de busca após inicialização
            $('#dt-search-0').addClass('border border-radius-xl');
        }
    };

    // Caso a tabela seja responsiva
    if (Table_responsive) {
        config.responsive = {
            details: { type: 'column', target: 0 } // coloca botão "+" na primeira coluna para expandir detalhes
        };

        // Se o usuário passou prioridades específicas de colunas, aplica
        if (responsiveCols.length > 0) {
            config.columnDefs = responsiveCols;
        }
    }

    // Inicializa a DataTable na tabela indicada
    $("#" + NomeTabela).DataTable(config);
}