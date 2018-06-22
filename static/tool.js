$('#configuration').submit(function(event) {
    event.preventDefault();
    $.getJSON('api-to-review', {
        property: $('input[name="property"]').val(),
        user: $('input[name="username"]').val(),
    }).then(function(data) {
        for(var i = 0; i < data.length; i++) {
            $('#values').append("<div>" + data[i].html + "</div>");
        }
    });
})