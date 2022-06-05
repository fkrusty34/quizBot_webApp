let webapp = window.Telegram.WebApp;

webapp.MainButton.setParams({text: "Отправить", color: "#64bb00", text_color: "#ffffff",
    is_active: true, is_visible: true});

//webapp.ready();

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    let chb1 = document.getElementById("chb1").value;
    let chb2 = document.getElementById("chb2").value;
    let chb3 = document.getElementById("chb3").value;
    let comment = document.getElementById("data").value;
    let data = chb1 + "|" + chb2 + "|" + chb3 + "|";

    while (true) {
        if (data === "0|0|0|") break;
        if (comment.indexOf("|") > -1) {
            alert("Комментарий содержит недопустимый символ '|'");
            break;
        }

        if (comment.trim() !== "")
            data += comment;
        else
            data += " ";

        webapp.sendData(data);

        break;
    }
});