document.querySelector('.button').addEventListener('click', process);

function process(){
    let xhr = new XMLHttpRequest();
    let number = document.querySelector('.number').value;
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    
    xhr.onload = function(){
        data = JSON.parse(xhr.responseText);
        jokes = data.value;
        console.log(jokes);
        
        let output = "<ol>";
        jokes.forEach(function(item){
            output+=`<li>${item.joke}</li>`
        });

        output+="<ol>";
        document.querySelector('.output').innerHTML=output;
    }

    xhr.send();
}