(function($) {

    $.fn.insertAtCaret = function(myValue) {
        var startPos = $(this)[0].selectionStart;
        var endPos = $(this)[0].selectionEnd;
        var scrollTop = $(this)[0].scrollTop;
        $(this).val($(this).val().substring(0, startPos) + myValue + $(this).val().substring(endPos,$(this).val().length));
        $(this).focus();
        $(this)[0].selectionStart = startPos + myValue.length;
        $(this)[0].selectionEnd = startPos + myValue.length;
        $(this)[0].scrollTop = scrollTop;
    };

})(jQuery);