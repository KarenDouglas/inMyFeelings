const $signupForm = document.querySelector('#signupForm')
const $newUserNameInput = document.querySelector('#newUserNameInput')
const $newUserPasswordInput = document.querySelector('#newUserPasswordInput')

async function submitLoginHandler (e){
    e.preventDefault()
    postData = {
        user_name: $newUserNameInput.value,
        password: $newUserPasswordInput.value
    }
    try{
        const response = await fetch('/api/users/signup',{
            method: 'POST', 
            headers: {
             'Content-Type': 'application/json', // Specify content type as JSON
             // Add any other headers as needed
           },
           body: JSON.stringify(postData)
         })
         if(!response.ok){
             throw new Error('Network response was not ok');
         }
         const responseData = await response.json();
         console.log(responseData)
         alert(`${postData.user_name} is now signed... please log in with new credentials`)
         window.location.href = '/login'
    }catch(err){
        console.error(err)
    }
    
    
    
    
} 


$signupForm.addEventListener('submit', submitLoginHandler)