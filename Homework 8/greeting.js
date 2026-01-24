$(document).ready(function() {
    let greetBtn=$('#greetbtn');
    let header=$('#header');

        greetBtn.click(function() {
        header.text('Hello there Petko!');
    });

    });