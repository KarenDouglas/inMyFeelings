const $editEntryForm = document.querySelector('#editEntry');
const $editTitleInput = document.querySelector('#editTitle');
const $editSelectCategoryInput = document.querySelector('#editSelect');
const $editPostTextInput = document.querySelector('#editPost');
const $userIdInput = document.querySelector('#userId'); // Get the hidden input field
const $postIdInput = document.querySelector('#postId'); // Get the hidden input field



async function getPost(){
    try{
        const response = await fetch(`/api/posts/${$postIdInput.value}`)
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log(responseData)
        return responseData.data

    }catch(err){
        console.error(err)
    }
}

async function renderForm (){
try{
    const formData = await getPost()
    $editTitleInput.value = formData.title
    $editSelectCategoryInput.value = formData.category
    $editPostTextInput.value = formData.post_text
}catch(err){
    console.error(err)
}
}
async function editEntryHandler(e) {
    e.preventDefault();

    const postData = {
        title: $editTitleInput.value,
        post_text: $editPostTextInput.value,
        category: $editSelectCategoryInput.value,
        user_id: $userIdInput.value 
    };
    console.log(postData);
    try {
        const response = await fetch(`/api/posts/${$postIdInput.value}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log(responseData.data.id);
        // Redirect to another page if needed
         window.location.href = `/dashboard/${$userIdInput.value}`;
    } catch (err) {
        console.error(err);
    }
}

renderForm()
$editEntryForm.addEventListener('submit', editEntryHandler);
