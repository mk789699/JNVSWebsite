$( document ).ready(function() {
    addNavigation();
});



function addNavigation(){
    $.ajax({
        type: "GET",
        async: true,
        url: "/nav.html",
        datatype: "JSON",
        success: function (data) {
        console.log(data);
            document.getElementById('navbarSupportedContent').innerHTML = data;
            
            var currentPage = window.location.href.split('/')[3];
            var x = $('#navList li a');
            $.each(x, function( index, value ) {
              console.log( index + ": " + value );
              if(window.location.href == value)
                $('#navList li')[index].addClass = "active";
            });

        },
        failure: function (error) {
            console.log(error.message);
        }
    });
}

