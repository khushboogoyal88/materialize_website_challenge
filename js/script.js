const counters = document.querySelectorAll('.counter');

// Function for incrementing numbers
counters.forEach(counter=>{
    counter.innerText = '0'
    
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        
        const increment = target/200;
        
        if(c < target){
            counter.innerText = `${Math.ceil(c+ increment)}`;
            setTimeout(updateCounter, 1);
        }else{
            counter.innerText = target;
        }
    }
    updateCounter()
    
})


// Function to open modal at news letter supscription and save the email id in local storage
const form = document.getElementById('newsletter-form');
const email = document.getElementById('email');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let visitor_email = email.value;
    
    // Checks if array already exists, if not sets up an array of messages
    let emailArr = JSON.parse(localStorage.getItem('emailArr')) || [];
    
    emailArr.push(visitor_email)
    
    // Adds email address to the local storage
    localStorage.setItem('emailArr', JSON.stringify(emailArr));
    
    // Clears fields after submission.
    document.getElementById('email').value='';
    
    // Work around to make jquery open the modal, after form is submitted.
    jQuery(document).ready(function () {
        jQuery('#modal1').modal();
        jQuery(document).ready(function () {
            jQuery('#modal1').modal('open');
        });
    });
});

