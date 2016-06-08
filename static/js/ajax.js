function Ajax() {
    $.ajax({
        url: "http://localhost:3000",
        data: { action: "first" },
        type: "POST",
        success: function (data) {
            var obj = JSON.parse(data);
            console.log(obj);

            obj.albumy.forEach(function (img) {
                $("#albumy").append("<img id=" + img + " src='static/jpg/" + img + ".jpg' onclick='zmiana(this.id)'/>");
                console.log(img)
            });

            obj.piosenkiAlbum0.forEach(function (img) {
                $("#listapiosenek").append("<div id='" + img + "' onclick='onPlay(this.id)'>" + img + "</div><br />");
            });
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        }
    });
    $("#audio").bind("timeupdate", function () {
        var width = ($("#audio").prop("currentTime") / $("#audio").prop("duration")) * 100
        //console.log(width)
        $("#bar").css({ "width": width + "%" }) //$("#audio").prop("currentTime")
    });

}