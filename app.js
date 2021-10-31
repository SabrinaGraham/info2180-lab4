document.addEventListener('DOMContentLoaded',(event)=>{
    let searchbtn=document.getElementById('searchbtn');
    console.log(searchbtn);
    let httpRequest;
    //when search button is clicked

    function loadResults()
    {
        //console.log('http status is '+httpRequest.readyState)
        if (httpRequest.readyState===XMLHttpRequest.DONE)
        {
            console.log('http status is '+httpRequest.status);
            //console.log('http response is '+httpRequest.onreadystatechange);
            if (httpRequest.status===200)
            {
                console.log('status 200');
                var response=httpRequest.responseText;
                alert(response);
                //var result=document.getElementById('result');
                //result.innerHTML=response;
                
            }
            else
            {
                alert('There is a problem with the request.');
            }
        }
    }
    
    searchbtn.addEventListener('click',e=>{
        e.preventDefault();

        //AJAX GET Request
        console.log('AJAX');
        httpRequest=new XMLHttpRequest();
        var url='http://localhost/info2180-lab4/superheroes.php'
        httpRequest.onreadystatechange=loadResults;
        httpRequest.open('GET',url);
        httpRequest.send();
        //console.log(url);
    });

    
});