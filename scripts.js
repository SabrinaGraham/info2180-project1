/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded',(event)=>{
    let buttons=[...document.getElementsByTagName('button')]; //get all button elements and store in array
    let submit; //variable to store submit button

    //get the submit button from array
    buttons.forEach((elem,index)=>
    {
        if (elem.type=='submit')
        {
            submit=elem;
        }
    });

    let email=document.getElementById('email'); // get input element that has id 'email'
    let message=document.getElementsByClassName('message'); // get div with class name 'message'
    let ptag=document.createElement("p") //create a paragraph element;

    //when the input box is clicked, clear its contents and that of the paragraph element
    email.addEventListener('click',e=>
        {
            e.preventDefault;
            email.value='';
            ptag.textContent='';
        });

    //when submit button is clicked, display appropriate message
    submit.addEventListener('click', e=>
        {
            e.preventDefault();
            if(email.value==='') // If match is -1 then no other cell can be selected to show either x or o
                {
                    let text='Please enter a valid email address';
                    ptag.textContent=text;
                    message[0].appendChild(ptag);  
                }
            if(email.value.includes('@'))
                {
                    let text='Thank you! Your email address '+ email.value+ ' has been added to our mailing list!';
                    ptag.textContent=text;
                    message[0].appendChild(ptag);
                }
            else 
                {
                    let text='Please enter a valid email address';
                    ptag.textContent=text;
                    message[0].appendChild(ptag);
                }   
        });
});