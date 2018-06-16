function loadValues() {
    $.getJSON('api-to-review', {
        property: $('input[name="property"]').val(),
        user: $('input[name="username"]').val(),
    }).then(function(data) {
        console.log(data);
        
    })
}