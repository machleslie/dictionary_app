
function dict(enteredword){
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+enteredword;
    fetch(url,{
        method:'GET',
        headers: {
            'X-RapidAPI-Key': '0046f1dc5dmsh948408ab8ad5d37p1dc58ajsnc6de8958e54b',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.error){
            document.getElementById('word').innerHTML = "Word not found";
            document.getElementById('definition').innerHTML = data.error;
            return;
        }
        else if (data.valid == false){
            document.getElementById('word').innerHTML = "Word not found";
            document.getElementById('definition').innerHTML = "Word not found";
            return;
        }
        else{
        document.getElementById('word').innerHTML = enteredword;
        document.getElementById('definition').innerHTML = data.definition.replace("2.","<br>2.").replace('3.','<br>3.').replace('4.','<br>4.').replace('5.','<br>5.').replace('6.','<br>6.').replace('7.','<br>7.');
        }
    })
    .catch(err => { 
        console.log(err);
    })
    }
search=document.getElementById('search');
search.addEventListener("click",(e)=>{
    e.preventdefult;
    console.log("clicked")
    dict(document.getElementById('input').value);
})
// dict("word")

