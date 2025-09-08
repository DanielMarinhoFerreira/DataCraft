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
 * Totos os direitos reservados https://github.com/DanielMarinhoFerreira/DataCraft 
 * 
 * Cria e inicializa uma DataTable de forma genérica e reutilizável.
 * Agora com suporte a exportação CSV, Excel e PDF via DataTables Buttons.
 *
 * @param {string} NomeTabela - O ID da tabela HTML que será transformada em DataTable.
 * @param {number} QtdColunas - Quantidade total de colunas da tabela.
 * @param {number|Array} targets - Índice ou índices das colunas para configurações específicas.
 * @param {boolean} [Table_responsive=true] - Define se a tabela será responsiva.
 * @param {Array} [responsiveCols=[]] - Definições de prioridade de colunas para responsividade.
 * @param {Array} [order=[[1, "desc"]]] - Ordenação inicial da tabela.
 * @param {boolean} [enableExport=false] - Ativa os botões de exportação (CSV, Excel, PDF).
 */
function CreateDataTable(
    NomeTabela,
    QtdColunas,
    targets,
    Table_responsive = true,
    responsiveCols = [],
    order = [[1, "desc"]],
    enableExport = false // NOVO parâmetro para exportação
) {
    // Monta dinamicamente a configuração de cada coluna (por padrão todas ordenáveis)
    let cols = [];
    for (let i = 0; i < QtdColunas; i++) {
        cols.push({ orderable: true });
    }

    // Configuração base da DataTable
    let config = {
        colReorder: { columns: ':not(:first-child, :last-child)' },
        columnControl: ['order', ['searchList']],
        ordering: {
            indicators: false,
            handler: false
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
            info: "_START_ até _END_ de _TOTAL_",
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
        pageLength: 10,
        columns: cols,
        select: { style: "multi" },
        order: order,
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
        },
        initComplete: function () {
            $('#dt-search-0').addClass('border border-radius-xl');
        }
    };

    // Exportação: adiciona botões se solicitado
    if (enableExport) {
        config.dom = 'Bfrtip';
        config.buttons = [
            {
                extend: 'csvHtml5',
                text: 'Exportar CSV',
                className: 'btn btn-outline-primary'
            },
            {
                extend: 'excelHtml5',
                text: 'Exportar Excel',
                className: 'btn btn-outline-success'
            },
            {
                extend: 'pdfHtml5',
                text: 'Exportar PDF',
                className: 'btn btn-outline-danger'
            }
        ];
    }

    // Responsividade
    if (Table_responsive) {
        config.responsive = {
            details: { type: 'column', target: 0 }
        };
        if (responsiveCols.length > 0) {
            config.columnDefs = responsiveCols;
        }
    }

    // Inicializa a DataTable na tabela indicada
    $("#" + NomeTabela).DataTable(config);
}