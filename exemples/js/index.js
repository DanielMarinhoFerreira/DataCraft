document.addEventListener('DOMContentLoaded', function () {
    let cols = $($($($('#DataTable_example_Response')[0].childNodes)[1].childNodes)[1])[0].children.length;
    
    CreateDataTable(
        "DataTable_example_Response",
        cols,
        true, 
        [{ responsivePriority: 1, targets: [0,1,2,3,4,5] },
        { responsivePriority: 2, targets: [5] }], 
        [[2, "desc"]],
        5
    )
});

