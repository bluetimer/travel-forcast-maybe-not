//declaring var//
var message1;
var message2=".response2"+17;
var message3;
//generates output after clicking button//
$("button").click(function() {
    message1 = $(".response1").val();
    message2 = $(".response2").val();
    message2 =parseInt(message2)+17;

    message3 = $(".response3").val();
    $(".output").append("<div class='aComment'> In 50 years,  "+ message1+"  will travel to  "+message2 + "  counties.   "+message1+ "   would travel to  "+message3 +" every year.");
});
