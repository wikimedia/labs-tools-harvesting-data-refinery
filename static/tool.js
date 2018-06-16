function loadValues() {
    $.getJSON('api-to-review', {
        property: $('#property').val()
    }).then(function(data) {
        console.log(data);
        
    })
}