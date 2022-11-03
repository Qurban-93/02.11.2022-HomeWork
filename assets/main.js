const btn = document.querySelector('.btn');
const inputs = document.querySelectorAll('.inputs input')
const table = document.querySelector('.table')



const inputFirst = {};



const thead = () => {
	table.innerHTML = `
	  <thead>
		  <tr>
			  <th scope="col">#</th>
			  <th scope="col">Ad</th>
			  <th scope="col">Soyad</th>
			  <th scope="col">Yaş</th>
		  </tr>
	  </thead>
	`;
  };


btn.addEventListener('click',function(){


	
	inputs.forEach(element => {
		if(element.className =='name')
		{
			inputFirst.name = element.value;
		}
		else if(element.className == 'surname')
		{
			inputFirst.surname = element.value;
		}
		else if(element.className == 'age'){
			inputFirst.age = element.value;
		}
	});

    const fetched1 = fetch("https://6363b0578a3337d9a2e48d82.mockapi.io/userscontent/qurban");
	let fetc = fetched1.then((item)=>{item.json}).then((data)=>console.log(data))

	 
	// const fetched = fetch('https://6363b0578a3337d9a2e48d82.mockapi.io/userscontent/qurban',{
	// 	method:"POST",
	// 	headers:{
			
	// 	}
	// })

})

