let $displayPrev = document.querySelector('.display_result_prev')
let $display = document.querySelector('.display_result_input');
let $area_btn = document.querySelector('.numpad');

let data = {
  prev : '',
  curr : '',
  op : undefined,
  pressedResult : false
}

$area_btn.addEventListener('click', (e)=>{
  let target = e.target;
  if(target.tagName !== 'BUTTON'){
    return;}

  if(target.id == 'btn_reset'){
    console.log(e.target);
    reset_data();
    return;}

  if(target.classList.contains('btn_num')){
    console.log('Press num');
    on_num(data.op, target);}

  if(target.classList.contains('btn_op')){
    console.log('Press op');
    op_ops(target);}

  if(target.id == 'btn_result'){
    console.log('Press Result');
    show_result();}

  target.blur();
})

window.addEventListener('keydown', (e) => {
  let target = e.target;

  if(isNaN(e.key) === false){
    console.log(e);
    on_num(data.op, target);
  } 

  if(e.key === "="){
    console.log(e.key);
  }

  if(e.key === "+"){
    console.log(e.key);
  }

  if(e.key === "-"){
    console.log(e.key);
  }

  if(e.key === "*"){
    console.log(e.key);
  }

  if(e.key === "/"){
    console.log(e.key);
  }
  
});

function nofunc(){
    alert('눌러봤자의미없음..')
}

function on_num(bool,target){
  let val = target.dataset.val;
  let PrevOrCurr = bool ? 'curr' : 'prev';
  if(val == "-1"){
    data[PrevOrCurr] = String(Number(data[PrevOrCurr]) * -1);
  }else{
    data[PrevOrCurr] += val;
  }
  $display.textContent = data[PrevOrCurr]
  }

function reset_data(){
  data.prev = '';
  data.curr = '';
  $displayPrev.textContent = '&nbsp';
  $displayPrev.classList.add('off');
  $display.textContent = '0';
  data.operator = undefined;
  data.pressedResult = true;
}