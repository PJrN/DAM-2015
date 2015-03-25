$("[data-role='collapsible']").collapsible({

    collapse: function( event, ui ) {
        $(this).children().next().slideUp(350);
    },
    expand: function( event, ui ) {
        $(this).children().next().hide();
        $(this).children().next().slideDown(350);
    }

});
