let customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true},
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com'},
  { id: 4, name: 'shep', email: 'shep@gmail.com'},
 ];

 const name = document.querySelector('.nameBox');
 const email = document.querySelector('.emailBox');
 const isVIP = document.querySelector('.checkBox');
 const button = document.querySelector('.create');
 const list = document.querySelector('#customerList');
 const deleteButton = document.querySelectorAll('.deleteButton')
 const numVIP = document.querySelector('#numVIP');
 const nameError = document.querySelector('#nameError');
 const emailError = document.querySelector('#emailError');




const render = () => {
  let counter=0;
  const html = customers.map( customer =>{
    if(customer.isVIP){
      special = 'vip';
      counter++;
    }
    else{
      special='no';
    }

    return `<div class='${special}'>
    ${customer.name}
    (${customer.email})
    <button class='deleteButton'>Destroy</button>
    </div><br>`
  }).join('');
  list.innerHTML = html;
  numVIP.innerHTML = `${counter} VIPS`
}

render();

button.addEventListener('click', (ev)=>{
  ev.preventDefault();
  let person = {};
  person.name = name.value
  person.email = email.value
  if(isVIP.checked){
    person.isVIP = true;
  }
  customers.push(person);

  render();
})

let counter=0
const vip= customers.map( customer =>{
  if(customer.isVIP){
    counter++;
  }
});


name.addEventListener('keyup', ev =>{
  if(ev.target.value ===''){
    nameError.innerHTML = 'name required';
  }

})

email.addEventListener('keyup', ev =>{
  if(ev.target.value ===''){
    emailError.innerHTML = 'email required';
  }

})

/*I can not get the delete button to work */
deleteButton.addEventListener('click', (ev) => {
  console.log(ev.target)
  console.log(ev.target.parentNode)
});


