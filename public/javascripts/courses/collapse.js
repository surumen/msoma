// add trigger icons to the panel headers
$('.panel-collapsable .panel-heading').append('<span class="panel-collapsable-trigger"/>');

// when headers are clicked, toggle the contents
$('.panel-collapsable .panel-heading').on('click', function (e) {
    e.preventDefault();

    // toggle this panel
    $(this).parent('.panel-collapsable').toggleClass('is-expanded').find('.panel-content').slideToggle();

    // if we're in a group, trigger the "toggled" event
    $(this).parents('.collapsables').trigger('toggle');

});

if ($('#SelectedLectureId').val() <= 0) {
    // expand the first panel in a group by default
    $('.collapsables').find('.panel-collapsable:first').addClass('is-expanded').find('.panel-content').show();
} else {
    // find the current course week with is-expanded class and show
    $('.collapsables').find('.is-expanded').find('.panel-content').show();
}

// "show all": a link with rel=collapsables, using the DOM ID of the .collapsables container
// default behavior will be to "Show All". If all are visible, THEN toggle over to "Hide All" mode
$('a[rel=collapsables]').on('click', function (e) {
    e.preventDefault();

    var $ele = $($(this).attr('href'));

    // are there any not-expanded panels in the group?
    var panels = $ele.find('.panel-collapsable');
    var expanded = panels.filter('.is-expanded');

    // if all are visible, hide them all
    if (expanded.length === panels.length) {
        panels.removeClass('is-expanded').find('.panel-content').slideUp();
        expanded = false;
        // if some/none are visible, show them all
    } else {
        panels.addClass('is-expanded').find('.panel-content').slideDown();
        expanded = true;
    }

    // after panels have been toggled, send the event to the container
    $ele.trigger('toggle');
});


// update "show all" text when the state of the group changes
$('.collapsables').on('toggle', function () {
    var id = $(this).attr('id');
    var trigger = $('a[rel=collapsables][href=#' + id + ']');

    // does this group have an ID and a connected trigger?
    if (id && trigger) {
        var panels = $(this).find('.panel-collapsable');
        var expanded = panels.filter('.is-expanded');

        // are there any not expanded panels in this group?
        var txt = (expanded.length === panels.length) ? 'Hide All' : 'Show All';
        trigger.text(txt);
    }
});

$.fn.stacktable = function (options) {
    var $tables = this,
      defaults = {
          classname: 'stacktable',
          hideOriginal: false,
          title: 'st-title',
          key: 'st-key',
          val: 'st-val'
      },
      settings = $.extend({}, defaults, options);

    return $tables.each(function () {
        var $stacktable = $('<table class="' + settings.classname + '"></table>'),
          markup = '',
          $table = $(this),
          $header = $table.find('thead').eq(0).find('tr').eq(0);

        $table.find('tbody').find('tr').each(function (index) {
            markup += '<tbody>';
            $(this).find('td').each(function (index) {
                if ($(this).html() !== '') {
                    markup += '<tr>';
                    if ($header.find('td,th').eq(index).html()) {
                        markup += '<td class="' + settings.key + '">' + $header.find('td,th').eq(index).html() + '</td>';
                    } else {
                        markup += '<td class="' + settings.key + '"></td>';
                    }
                    markup += '<td class="' + settings.val + '">' + $(this).html() + '</td>';
                    markup += '</tr>';
                }
            });
            markup += '</tbody>';
        });

        $stacktable.append($(markup));
        $table.before($stacktable);

    });
};

(function ($) {

    $('.table').stacktable({
        classname: 'stacktable table'
    });

})(jQuery);