document.addEventListener('DOMContentLoaded',(event)=>{
    let searchbtn=document.getElementById('searchbtn');
    let hero=document.getElementById('character');
    let r=document.getElementById('rt');
    let line=r.children[0];
    var result=document.getElementById('result');
    let h1=document.getElementsByTagName('h1');
    let httpRequest;

    //when search button is clicked
    searchbtn.addEventListener('click',e=>{
        e.preventDefault();

        result.innerHTML=''; //clear result container after each search
        
        let q=hero.value; //get input value from search bar

        //AJAX GET Request
        httpRequest=new XMLHttpRequest();
        var url='http://localhost/info2180-lab4/superheroes.php'
        httpRequest.onreadystatechange=loadResults;
        url+="?query="+q;
        httpRequest.open('GET',url);
        httpRequest.send();
    });

    //Function to retrieve info from php file
    function loadResults()
    {
        //console.log('http status is '+httpRequest.readyState)
        if (httpRequest.readyState===XMLHttpRequest.DONE)
        {
            if (httpRequest.status===200)
            {
                var response=httpRequest.responseText;

                if (!(response.includes("[")))  //if the response is not an array in the form of a string
                    {
                        r.classList.add('line');
                        r.innerHTML='RESULT';
                        result.innerHTML=response; 
                    }
                else if (response.includes("["))
                    {
                        var response=JSON.parse(httpRequest.responseText);
                        r.classList.add('line');
                        r.innerHTML='RESULT';
                        let alias= document.createElement('h3');
                        alias.textContent=response[2].toUpperCase();
                        let name=document.createElement('h4');
                        name.textContent='A.K.A '+response[1].toUpperCase();
                        let descr=document.createElement('p');
                        descr.textContent=response[3];
                        
                        result.appendChild(alias);
                        result.appendChild(name);
                        result.appendChild(descr);
                    }
            }
            else
            {
                alert('There is a problem with the request.');
            }
        }
    }

    
});