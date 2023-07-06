const formSendMessage = $('#sendMessageForm')[0];
const alertContainer = $('.alert-container')[0];

$(formSendMessage).submit(function (event) {
    event.preventDefault();

    if (formSendMessage.checkValidity() === false) {
        event.stopPropagation();
    } else {
        var formData = new FormData(formSendMessage);
        $('#btnSubmit').prop("disabled", true);
        sendFormData(formData);
    }
});

function sendFormData(formData) {
    $.ajax({
        type: "POST",
        url: "./index.php",
        data: formData,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 60000,
        success: function (data) {
            alertContainer.innerHTML = data;
            setTimeout(naturalMessageRemoval, 5000);
        }
    });
    $("#sendMessageForm").trigger("reset");
}

