$( document ).ready(function() {
    $('#configuration').submit(function(event) {
        event.preventDefault();
        $.getJSON('api-to-review', {
            property: $('input[name="property"]').val(),
            user: $('input[name="username"]').val(),
            limit: $('input[name="limit"]').val(),
        }).then(function(data) {
            $('#values').html('<div class="row">');
            for(var i = 0; i < data.length; i++) {
                if(i < 0 && i % 2 == 0) $('#values').append('</div><div class="row">');
                $('#values').append('<div class="value" id="value-' + data[i].rev_id + '" data-rev-id="' + data[i].rev_id + '">' + data[i].html + '</div>');
            }
            $('#values').append('</div>');
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
