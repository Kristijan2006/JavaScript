$(document).ready(function() {
    let inputText=$('#text');
    let inputColor=$('#color');
    let generateBtn=$('#generatebtn');
    let header1=$('#header1');
    let header3=$('#header3');

    generateBtn.click(function() {
        let text=inputText.val();
        let color=inputColor.val();

        if (inputText.val() === '' || inputColor.val() === ''){
            header3.text( 'Please enter both text and color!');
            header3.css('color', 'red');
            return
        }
        header3.text('');

        header1.text(text);
        header1.css('color', color);
         });
    });
    
