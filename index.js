var btn1 = document.getElementById('btn1');

btn1.addEventListener('click', async () => {
    
     let res = await fetch(`https://corona.lmao.ninja/v2/countries`);

     let data = await res.json();

     console.log(data);

     append(data);

})

function append(data){
    var results = document.getElementById('results');
    var template = `
            <h4 class="mt-4">Covid Cases</h4>
        `
        data.forEach((element) => {
            template += `
                <ul class="list-group mb-4">
                    <li class="list-group-item"><strong>Country: ${element.country}</strong></li>
                    <li class="list-group-item"><strong>Cases: </strong> ${element.cases}</li>
                    <li class="list-group-item"><strong>Deaths: </strong> ${element.deaths}</li>
                </ul>
            `
        })

        results.innerHTML = template;
    
}