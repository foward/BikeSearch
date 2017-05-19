var drop = (function() {

    return {
        func1: function() {
            $(".ui.dropdown").dropdown({
                allowAdditions: true
            });
            alert("worked");
        },
        func2: function() {

        }
    }

})(drop || {})