

$(() => {


    const noSuccess = () => {
        $("#head").text(":(");
        setTimeout(10000);
    }
    function myRandom() {
        return Math.floor(Math.random() * 20);

    }

    var myArr = ["It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
        "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
        "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
        "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

    $("#ball").submit(() => {
        const gg = {
            qt: myArr[myRandom()],
        };
        console.log(myArr[myRandom()])
        $.post({
            url: "/ball",
            data: JSON.stringify(gg),
            contentType: "application/json; charset=utf-8"
        }).done(() => {
            $("#label").text("Answer");
            $("#texter").val(gg.qt);

            setTimeout(() => { $("#label").text("Question") }, 4000);
            $("#texter").focus();

        })
            .fail(noSuccess);

        return false;


    });

});