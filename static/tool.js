function loadValues() {
    $.getJSON('api-to-review', {
        property: $('#property').val(),
        username: $('#username').val(),
    }).then(function(data) {
        console.log(data);
        
    })
}