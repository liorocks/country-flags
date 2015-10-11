(function() {

    // declare variables
    var list = document.querySelectorAll('li'),
        code = document.querySelector('pre'),
        length = list.length,
        i = 0;

    // attach text select function to pre tag
    code.onclick = textSelect;


    // loop through list items
    for(i; i < length; i++) {
        list[i].onclick = function() {
            code.innerHTML = convertHTML(this.innerHTML);
        }
    }

    // convert html into entities
    function convertHTML(input)
    {
        input = input.replace(/>/g, '&gt;');
        input = input.replace(/</g, '&lt;');

        return input;
    }

    // select text on click
    function textSelect() {
        if (this.select) {
            this.select();
        }
        else if (document.selection) {
            var range = document.body.createTextRange();
            range.moveToElementText(this);
            range.select();
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(this);
            window.getSelection().addRange(range);
        }
    }

})();