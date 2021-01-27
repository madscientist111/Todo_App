$("#add_task").submit(function(event){
    alert("Data Inserted Successfully!")
})

$("#update_task").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    //console.log(unindexed_array);
    var data = {};

    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    //console.log(data);

    var request = {
        "url": `http://localhost:3000/api/tasks/${data.id}`,
        "method": "PUT",
        "data": data
    }
    $.ajax(request).done(function(response){
        alert("Data updated successfully!")
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id");

        var request = {
            "url": `http://localhost:3000/api/tasks/${id}`,
            "method": "DELETE",
        }

        if(confirm("It will delete this task. Are you sure?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    })
}