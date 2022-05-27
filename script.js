webapp = window.Telegram.WebApp;
idu = webapp.initDataUnsafe;

webapp.MainButton.setParams({text: "Отправить", color: "#000000", text_color: "#FFFFFF",
    is_active: true, is_visible:true});

webapp.ready();

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    webapp.sendData("TestData");
});



