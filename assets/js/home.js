document.addEventListener("keydown", function (event) {
    var keyValue = event.key;
    if(keyValue=="Enter")
        this.forms.submit();
});


