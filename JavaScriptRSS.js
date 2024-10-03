    <script>
        
        function changePageTitle() { // changing the Page title from 'Webpage' to "Change Page Title"
            var newPageTitle = 'The Title has changed';
            document.querySelector('title').textContent = newPageTitle;

       }
        function changeDescription(){
           // document.getElementById("description").innerHTML = description;
                
        

        const RssURL2= 'https://rss.app/feeds/bhKNteodkzid4dJT.xml';// sports rss feed from reddit
        const RssURL='https:rss.app/feeds/fbw1cC3PTPDhp8dt.xmlv';//rss feed supplied for the lesson
            fetch(RssURL2) // Fethcing URL fom given set of URL's available
            .then(response=>response.text())//converting response with text
            //turns out that this link gives xml format instead of json so we have to use xml
                //dataContainer.innerHTML =
            .then(str=> {//alert(str));
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(str, 'text/xml');//load the text into xml object
                const items = xmlDoc.querySelectorAll('item');// select all item and load into list 
              
                items.forEach(item => {
                                                var title = item.querySelector('title').textContent;
                                                document.getElementById("title").innerHTML = title;
                                                var link = item.querySelector('link').textContent;
                                                //document.getElementById("link").innerHTML = link;     
                                                document.getElementById("description").innerHTML = description;                          
                                                var description = item.querySelector('description').textContent;
                                                console.log(description);
                                                
                
                    //document.getElementById("description").innerHTML= item.querySelector('desription').textContent;
                    // html.ElementToBe("Element id").text = xml.ElementFrom("Element name").text;
                     }
                    )
                }) 
            }

            //.catch(error=>)
                    //console.error("Fetch Failed:",error);

               
                    

                

    
            //var div= myjson.item[0].description;
            /*var dataContainer = document.getElementById('RSSfeed');*/
            /*var response = awaitfetch(RssURL);
            var str = (response.text);*/
           


        //var bt = document.getElementById("button1");
        //bt.addEventListener("click", dataValadation());
        
        function dataValadation() // a function for data valadation
        {

        var ageString = document.getElementById("age").value; //having the string reconised as a word before number

        alert(ageString); //having an alert to say if the number is within the parameters of 0 and 200
        var age = parseInt(ageString);
            if(age>200||age<=0)
                {alert("Data entry invalide");  //creates an alert if it is below or above 200                  
                }
        }
        
        



    </script>
