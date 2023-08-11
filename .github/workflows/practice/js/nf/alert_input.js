function alert_input_reaction(){
    var input_value = document.getElementById('alert_input_text').value;
        if(input_value == ''){
            alert('입력안하냐?')
        }
        if(input_value != ''){
        alert(input_value);
        }
}