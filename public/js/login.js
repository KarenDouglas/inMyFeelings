const $loginForm = document.querySelector('#loginForm')
const $userNameInput = document.querySelector('#userNameInput')
const $userPasswordInput = document.querySelector('#userPasswordInput')

async function submitLoginHandler (e){
    e.preventDefault()
    postData = {
        user_name: $userNameInput.value,
        password: $userPasswordInput.value
    }
    try{
        const response = await fetch('/api/users/login',{
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
         console.log(responseData.data.id)
         window.location.href = `/dashboard/${responseData.data.id}`
    }catch(err){
        console.error(err)
    }
    
    
    
    
} 


$loginForm.addEventListener('submit', submitLoginHandler)