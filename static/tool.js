function loadValues() {
    $.getJSON('api-to-review', {
        property: $('input[name="property"]').val(),
        username: $('input[name="username"]').val(),
    }).then(function(data) {
        console.log(data);
        
    })
}