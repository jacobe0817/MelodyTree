;$(function() {

    if ( $(".display-name").data('expire') == true ) {

        var $modal = $('<div class="account-expiring">');

        $modal.load('/renew');

        $modal.css({
            position: 'fixed',
            'overflow-y': 'auto',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            'background-color': 'rgba(0, 0, 0, 0.93)',
            'z-index': 20000
        });

        function update_renew ( days ) {

            days = days || 0;
            $.get( protocol + urlSubdomain + '.allmusic.com/renew-update/'+days);
        }

        $modal.on({
            click: function ( e ) {

                if( e.target.className == 'modal-frame' || e.target.className == 'account-expiring') {
                    update_renew(7);
                    $(this).remove();
                }

                if( e.target.className == 'close-button' ) {
                    update_renew(7);
                    $(this).remove();
                }

                if( e.target.className.indexOf('renew-button') >= 0 ) {
                    window.location = "/user/paid-subscription";
                }

                if( e.target.className.indexOf('remind-button') >= 0 ) {
                    update_renew(7);
                    $(this).remove();
                }

                if( e.target.className == 'no-show' ) {
                    update_renew(0);
                    $(this).remove();
                }
            },
            keydown: function (e) {
                // if user hits ESC, close/remove the modal
                if (e.which == 27) {
                    update_renew(7);
                    $(this).remove();
                }
            }
        });

        $('body').append($modal);

    }
});