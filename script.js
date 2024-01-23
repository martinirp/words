(function(){
    'use strict';

    let $quadro = document.getElementById("content");
    let $clear_button = document.getElementById("clearButton");
    let $uppercaseButton = document.getElementById("uppercaseButton");
    let $lowercaseButton = document.getElementById("lowercaseButton");

    $clear_button.addEventListener('click', clean);
    $uppercaseButton.addEventListener('click', upper_case);
    $lowercaseButton.addEventListener('click', lower_case);

    function clean(){
        $quadro.value = ''
    };

    function upper_case(){
        $quadro.value = $quadro.value.toUpperCase()
    };    

    function lower_case(){
        $quadro.value = $quadro.value.toLowerCase()
    };
})();
