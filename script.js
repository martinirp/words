(function(){
    'use strict';
	
	let $cpf = document.getElementById("content_cpf");
    let $quadro = document.getElementById("content");
    let $clear_button = document.getElementById("clearButton");
    let $uppercaseButton = document.getElementById("uppercaseButton");
    let $lowercaseButton = document.getElementById("lowercaseButton");
	let $cleanCPFButton = document.getElementById("cpfButton");

    $clear_button.addEventListener('click', clean);
    $uppercaseButton.addEventListener('click', upper_case);
    $lowercaseButton.addEventListener('click', lower_case);
	$cleanCPFButton.addEventListener('click', cpf_clean);

    function clean(){
        $quadro.value = '';
    };

    function upper_case(){
        $quadro.value = $quadro.value.toUpperCase();
		$quadro.select();
		document.execCommand('copy');
    };    

    function lower_case(){
        $quadro.value = $quadro.value.toLowerCase();
		$quadro.select();
		document.execCommand('copy');
    };
	
	function cpf_clean(){
		$cpf.value = $cpf.value.replace(/[^\d]/gi,'');
		$cpf.select();
		document.execCommand('copy');
	};
})();
