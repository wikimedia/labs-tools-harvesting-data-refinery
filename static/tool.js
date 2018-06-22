$( document ).ready(function() {
    $('#configuration').submit(function(event) {
        event.preventDefault();
        $.getJSON('api-to-review', {
            property: $('input[name="property"]').val(),
            user: $('input[name="username"]').val(),
            limit: $('input[name="username"]').val(),
        }).then(function(data) {
            $('#values').html("");
            for(var i = 0; i < data.length; i++) {
                $('#values').append('<div class="value" id="value-' + data[i].rev_id + '" data-rev-id="' + data[i].rev_id + '">' + data[i].html + '</div>');
            }
            $('.value').click(function() {
                $.getJSON('api-revert', {
                    rev_id: $( this ).attr('data-rev-id')
                }).then(function(data) {
                    alert("Reverted");
                });
            });
        });
    });
});
