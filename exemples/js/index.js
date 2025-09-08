document.addEventListener('DOMContentLoaded', function () {
    let cols = $($($($('#DataTable_example_Response')[0].childNodes)[1].childNodes)[1])[0].children.length;
    
    CreateDataTable("DataTable_example_Response",cols, 2,
        { responsivePriority: 1, targets: [0,1,2,3,4,5,6,7,8,9,10] },
        { responsivePriority: 2, targets: [11] }, [[2, "desc"]])
});

