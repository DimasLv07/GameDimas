



var toogled = $("#blok").html('<span oncopy="winner" id="main-block">H<span class="n-1">i</span><span class="n-2">l</span><span class="n-3">a</span><span class="n-4">n</span><span class="n-1">g</span> </span><span class="n-3">o</span></span><span class="n-1">t</span></span><span class="n-4">a</span></span><span class="n-1">k</span></span><span class="n-3">n</span></span><span class="n-2">y</span></span><span class="n-1">a</span></span>')
var background = $("#blok").css("background-color", "Beige")

function changeText(text) {
    var toogledText = text
    var winText = 'H<span class="n-1">i</span><span class="n-2">l</span><span class="n-3">a</span><span class="n-4">n</span><span class="n-1">g</span> </span><span class="n-3">o</span></span><span class="n-1">t</span></span><span class="n-4">a</span></span><span class="n-1">k</span></span><span class="n-3">n</span></span><span class="n-2">y</span></span><span class="n-1">a</span>'
    toogled = $("#blok").html(text)
    if (toogledText === winText) {
        $("#blok").on("copy", function (){
            $("body").css("background-color", "green")
           $("#judul").html('Mantab <span class="n-1">Bang!</span>')
           $("h2").html("Good")
           $("h3").html("Bang Jago")
           $("a").css("display", "block")
       }) 
    } else {
        $("#blok").on("copy", function (){
            $("body").css("background-color", "red")
           $("#judul").html('Kampang')
           $("h2").html("Noob")
           $("h3").html('<a href="">Salah Cok</a>')
           $("a").css("display", "block")
        // $(document).html(dataPage)
       })
    }
}

$(".btn-1").on("click mouseover", () =>  {
    changeText('G<span class="n-1">o</span><span class="n-2">o</span><span class="n-3">d</span>')
});

$(".btn-2").on("click mouseover",  () => {
    changeText('Hi<span class="n-1">B</span><span class="n-2">ro</span>')
});

$(".btn-3").on("click mouseover", () => {
    changeText('S<span class="n-1">e</span><span class="n-2">arch it</span>')
})

$(".btn-4").on("click mouseover",  () => {
    changeText('Y<span class="n-1">o</span><span class="n-2">u</span> <span class="n-3">m</span><span class="n-4">a</span><span class="n-5">d</span> <span class="n-2">B</span><span class="n-4">r</span><span class="n-1">o</span><span class="n-2">?</span>')
})

$(".btn-5").on("click mouseover",  () => {
    changeText('H<span class="n-1">i</span><span class="n-2">l</span><span class="n-3">a</span><span class="n-4">n</span><span class="n-1">g</span> </span><span class="n-3">o</span></span><span class="n-1">t</span></span><span class="n-4">a</span></span><span class="n-1">k</span></span><span class="n-3">n</span></span><span class="n-2">y</span></span><span class="n-1">a</span>')
})

$("#blok").on("copy", function (){
     $("body").css("background-color", "green")
    $("#judul").html('Mantab <span class="n-1">Bang!</span>')
    $("h2").html("Good")
    $("h3").html("Bang Jago")
    $("a").css("display", "block")
})




$(document).on("keypress", function (event) {
    switch (event.key) {
        case "a":
            changeText('G<span class="n-1">o</span><span class="n-2">o</span><span class="n-3">d</span>')
            break;
        case "s":
            changeText('Hi<span class="n-1">B</span><span class="n-2">ro</span>')
            break;
        case "d":
            changeText('S<span class="n-1">e</span><span class="n-2">arch it</span>')
            break;
        case "f":
            changeText('Y<span class="n-1">o</span><span class="n-2">u</span> <span class="n-3">m</span><span class="n-4">a</span><span class="n-5">d</span> <span class="n-2">B</span><span class="n-4">r</span><span class="n-1">o</span><span class="n-2">?</span>')
            break;
        case "g":
            changeText('H<span class="n-1">i</span><span class="n-2">l</span><span class="n-3">a</span><span class="n-4">n</span><span class="n-1">g</span> </span><span class="n-3">o</span></span><span class="n-1">t</span></span><span class="n-4">a</span></span><span class="n-1">k</span></span><span class="n-3">n</span></span><span class="n-2">y</span></span><span class="n-1">a</span>')
            break;
        default:
            break;
    }
})




// Data

