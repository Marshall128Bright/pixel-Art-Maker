// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$(function makeGrid() {

    let colorPicker = $("#colorPicker");
    let heightInput = $("#inputHeight");
    let widthInput = $("#inputWidth");
    const canvas = $("#pixelCanvas");

    function buildGrid() {
        canvas.find("tbody").remove();
        let row = heightInput.val();
        let col = widthInput.val();

        canvas.append("<tbody></tbody>");
        
        let canvasBody = canvas.find("tbody");

        for (let i = 0 ; i < row ; i++) {
            canvasBody.append("<tr></tr>");
        }
        for (let i = 0 ; i < col ; i++) {
            canvas.find("tr").append('<td class="tableBox"></td>');
        }

    }

    $(document).ready(function () {
        $('input[type="submit"]').on('click' , function (e) {
            e.preventDefault();
            buildGrid();
        });

        $("#pixelCanvas").on('click' , "td" , function (e) {
            let color = colorPicker.val();
            let currentColor = $(this).css('background-color');
            console.log(currentColor + " color:" + color);

            if($(this).hasClass("tableBox")){
                $(this).toggleClass("tableBox");
                $(this).css("background-color" , color);
            } else{
                $(this).toggleClass("tableBox");
                $(this).css("background-color" , "tableBox");
            }

        })

    });

});
