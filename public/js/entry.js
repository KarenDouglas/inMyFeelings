const $postContainer = document.querySelector('.post-container')
const $commentsContainer = document.querySelector('#comments')
const $commentForm = document.querySelector('#postComment')
const $commentTextArea =document.querySelector('#commentTextArea')
const $userInfo = $commentForm.querySelector('h2')
// gets comments from post
async function getComments (){
    try{
        const response = await fetch(`/api/posts/${$postContainer.id}`)
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log(responseData.data.comments)
        return responseData.data.comments

    }catch(err){
        console.error(err)
    }
}


// render comments from post
async function renderComments (){
    $commentsContainer.innerHTML = ''
    const comments = await getComments()
    for(let i = 0; i< comments.length; i++){
        $commentsContainer.innerHTML +=
        `<section class ="comment-container">${comments[i].comment_text}</section>
        `
    }
    
}
getComments()
renderComments()
async function submitCommentHandler(e){
    e.preventDefault()
    postData ={
        comment_text: $commentTextArea.value
    }

    if($userInfo.id){
        try{
            const response = await fetch(`/api/comments/${$userInfo.id}/${$postContainer.id}`,{
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
            await renderComments()
        }catch(err){
            console.error(err)
        }
        

    }else{
        alert('must be logged in')
        window.location.href = '/login'
    }
    console.log(postData)
}

$commentForm.addEventListener('submit', submitCommentHandler)