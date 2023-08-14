
const $DisplayPrev = document.querySelector('.display_result_prev');
const $Displayinput = document.querySelector('.display_result_input');
const $Buttons = document.querySelector('.btn_area');

const Data = {
    Prev : '',
    Curr : '',
    Operator : undefined
}

$Buttons.addEventListener('click',(e)=> {
    const Target = e.target;

    if(Target.tagName !== 'BUTTON'){return;}

    if(Target.id == 'btn_reset'){
        reset_data();
        return;}

    if(Target.classList.contains('btn_num')){
        on_num(Data.Operator, Target)
        console.log('click\nData.Operator : ',Data.Operator, '\nTarget : ', Target);
    }

});

window.addEventListener('keydown', (e) => {
    // const KeyData = ;

    if (isNaN(e.key) !== true){
        console.log('keydown\ne.key = ', e.key, '\nKeyData : ', KeyData);
    }

    if (e.key === '+'){
        console.log(e.key);
    }

    if (e.key === '-'){
        console.log(e.key);
    }

    if (e.key === '*'){
        console.log(e.key);
    }

    if (e.key === '/'){
        console.log(e.key);
    }

    if (e.key === '='){
        console.log(e.key);
    }

});

function on_num(Bool,Target){
    const Val = Target.dataset.val
    const PrevOrCurr = Bool ? 'Curr' : 'Prev' ;
    if(Val=='-1'){
        Data[PrevOrCurr] = String(Number(Data[PrevOrCurr]) * -1)
    }
    else{
        Data[PrevOrCurr] += Val;
    }
    $Displayinput.textContent = Data[PrevOrCurr];
    console.log('on_num log\nVal : ',Val,'\n PrevOrCurr : ', PrevOrCurr)
}

function reset_data(){
    console.log('function reset_data()');
    Data.Prev = '';
    Data.Curr = '';
    $DisplayPrev.textContent = '&nbsp'
    $DisplayPrev.classList.add('prev_off');
    $Displayinput.textContent = '0';
    Data.Operator = undefined;
}

function noFunc(){
    alert('지원하지 않는 기능입니다.')
};
