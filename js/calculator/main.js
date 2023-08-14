
const $DisplaySteps = document.querySelector('.display_result_steps');
const $DisplayInput = document.querySelector('.display_result_input');
const $Buttons = document.querySelector('.btn_area');

let Data = {
  Prev : '',
  Curr : '',
  Operator : undefined,
  PressedResult : false
}

$Buttons.addEventListener('click',(e)=> {
  const Target = e.target;
  // console.log(Target);

  if(Target.tagName !== 'BUTTON'){
    return;
  }

  if(Target.id == 'btn_reset'){
    reset_data();
    return;
  }

  if(Target.classList.contains('btn_num')){
    on_num(Data.Operator, Target)
  }

  if(Target.classList.contains('btn_op')){
    on_ops(Target);
    // console.log('click\nTarget : ', Target);
  }

  if(Target.id == 'btn_result'){
    op_result();
  }

  Target.blur;
});

window.addEventListener('keydown', (e) => {
  const KeyData = $Buttons.querySelector('[data-val="'+e.key+'"]');

  if (isNaN(e.key) !== true){
    console.log('keydown\ne.key : ', e.key, '\nKeyData : ', KeyData);
    on_num(Data.Operator, KeyData);
  }

  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
    on_ops(KeyData);
  }

  if (e.key === '=' || e.key === 'Enter'){
    op_result();
    console.log(e.key);
  }

  // if (e.key === 'Backspace' || e.key === 'Delete'){
  //   // console.log('keydown\ne.key : ', e.key, '\nKeyData : ', KeyFunc);
  //   on_num(Data.Operator, KeyData);
  // }

  if(e.key === 'Escape'){
    reset_data();
    return;
  }
});

function on_num(Bool,Target){
  const Val = Target.dataset.val;
  const PrevOrCurr = Bool ? 'Curr' : 'Prev' ;

  if(Val=='-1'){
    Data[PrevOrCurr] = String(Number(Data[PrevOrCurr]) * -1)
  } 
  else if(Val=='.'){
    console.log(`. 입력`);
    if(Data[PrevOrCurr].includes('.')){
      console.log(`.이 이미 있을 때 무시`)
      return;
    }else if(Data[PrevOrCurr] == ''){
      Data[PrevOrCurr] += '0.'
    }else{
      Data[PrevOrCurr] += Val;
    }
  }
  else if(Val=='0'){
    console.log(`0 입력`);
    if(Data[PrevOrCurr].indexOf('0')==0 && Data[PrevOrCurr].indexOf('.')!==1){
      console.log('0이 1번째, .이 2번째가 아님')
      return;
    }else{
      Data[PrevOrCurr] += Val;
    }
  }
  else if(Data[PrevOrCurr].indexOf('0')==0){
    if(Data[PrevOrCurr].indexOf('.')==1){
      Data[PrevOrCurr] += Val;
    }else{
    Data[PrevOrCurr] = '';
    Data[PrevOrCurr] += Val;}
  }
  // else if(Val == 'Backspace' || Val == 'Delete'){
  //   console.log('ㅇㅇ');
  //   Data[PrevOrCurr] -= 1
  // }
  else{
    Data[PrevOrCurr] += Val;
  }

  $DisplayInput.textContent = Data[PrevOrCurr];
  console.log('on_num log\nVal : ',Val,'\nData : ', Data,'\nPrevOrCurr : ',PrevOrCurr,'\n0위치',Data[PrevOrCurr].indexOf('0'))
}

function on_ops(Target){
  const ValOp = Target.dataset.val;
  $DisplaySteps.classList.remove('steps_off');
  Data.Operator = ValOp;

  if(Data.Prev == undefined){
    return;
  }
  
  if (Data.Prev.charAt(Data.Prev.length - 1) == '.' || Data.Curr.charAt(Data.Curr.length - 1) == '.' ){
    Data.Prev.slice(0, -1);
    Data.Curr.slice(0, -1);
    console.log('ㅇㅅㅇ')
  }
  
  if(!Data.PressedResult && Data.Curr.length != 0){
    op_result();
  }

  Show_MiddleStep();
  Data.Curr = '';
  Data.PressedResult = false;
  $DisplayInput.textContent = '0'

  // console.log('on_ops log\nVal : ',ValOp,'\nData : ', Data)
}

function op_result(){

  // $DisplaySteps.classList.remove('steps_off');
  // if(Data.Prev.length=='0' || Data.Prev.indexOf('0') == 0){
  //   Show_ResultCaseA();
  //   console.log('Show ResultCaseA')
  //   return;
  // }
  // else if(Data.Prev.indexOf('')>=0 && !Data.Curr){
  //   Show_ResultCaseB();
  //   console.log('Show ResultCaseB');
  //   return;
  // }else 

  if(Data.Prev == undefined || Data.Curr == undefined || !Data.Operator){
    return;
  }

  Data.PressedResult = true;

  Show_FinalStep()
 
  console.log('op_result log\nVal : =','\nData : ', Data);
  Data.Prev = CalcSwitch();
  $DisplayInput.textContent = Data.Prev;
}

function CalcSwitch(){
  const {Prev, Curr, Operator} = Data;
  switch (Operator){
    case '+' :
      return Number(Prev) + Number(Curr);
    case '-' :
      return Number(Prev) - Number(Curr);
    case '*' :
      return Number(Prev) * Number(Curr);
    case '/' :
      return Number(Prev) / Number(Curr);  
  }
}

// function Show_ResultCaseA(){
//   $DisplaySteps.textContent = '0 ='
// }

// function Show_ResultCaseB(){
//   $DisplaySteps.textContent = `${Data.Prev} =`
// }

function Show_MiddleStep(){
  let MiddleStepString = `${Data.Prev} ${Data.Operator}`
  $DisplaySteps.textContent = MiddleStepString
}

function Show_FinalStep(){
  let FinalStepString = `${Data.Prev} ${Data.Operator} ${Data.Curr}`

  if (Data.Curr==''){
    FinalStepString = `${Data.Prev} ${Data.Operator} 0`
  }

  $DisplaySteps.textContent = `${FinalStepString} =`
}

function reset_data(){
  console.log('function reset_data()');
  Data.Prev = '';
  Data.Curr = '';
  $DisplaySteps.textContent = '0'
  $DisplaySteps.classList.add('steps_off');
  $DisplayInput.textContent = '0';
  Data.Operator = undefined;
}

// 구현할 기능
// 1. Data.Prev 없이 Ops 눌렀을 때 0이 추가되는 것
// 2. Data.Prev 입력 > Ops 클릭 > Data.Curr 입력 > Ops 클릭 시 최근 사칙연산 기호가 적용되는 것
// 3. Data.Curr 없이 Result 눌렀을 때 Data.Prev Data.Oprator 보이는 것
// 4. 0. 일때 Ops 눌러지는 것 

function noFunc(){
  alert('지원하지 않는 기능입니다.')
};
