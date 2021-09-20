var dataTable;

$(document).ready(function () {
    cargarDatatable();
});


function cargarDatatable() {
    dataTable = $("#tblCategorias").DataTable({
        "ajax": { 
            "url": "/Admin/Categorias/GetAll",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "id", "width": "5%" },
            { "data": "nombre", "width": "50%" },
        { "data": "orden", "width": "20%" },
        {
            "data": "id",
            "render": function (data) {
                console.log(data);
                return `< div class="text-center">
                         <a href='/Admin/Categorias/Edit/${data}' class='btn btn-succes text-white' style='cursor:pointer; width: 100px; '>
                         <i class='fas fa-edit'></i> Editar
                         </a>
                          &nbsp;
                           <a onclick=Delete("/Admin/Categorias/Delete/${data}") class='btn btn-danger  text-white' style='cursor:pointer; width:100px;'>
                    <i class='fas fa-edit'></i> Borrar
                    </a>     
                    ;`
            }, "width": "30%"             
         }

        ],
        "languaje": {
            "empyTable": "No hay registros"
        },
        "width": "100%"                
    });
}

function Delete(url) {
    swal({
        title: "Esta seguro de borrar?",
        text: "Este contenido no se puede recuperar!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6855",
        confirmButtonText: "Si, borrar!",
        closeOnconfirm: true
    }, function () {
        $.ajax({
            type: 'DELETE',
            url: url,
            succes: function (data) {
                if (data.succes) {
                    toastr.success(data.message);
                    dataTable.ajax.reload();
                }
                else {
                    toastr.success(data.message);
                    
                }
            }
        });
    });
  }