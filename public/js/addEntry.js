const $addEntryForm = document.querySelector('#addEntry');
const $AddTitleInput = document.querySelector('#addTitle');
const $selectCategoryInput = document.querySelector('#mySelect');
const $addPostTextInput = document.querySelector('#addPost');
const $userIdInput = document.querySelector('#userId'); // Get the hidden input field

async function addEntryHandler(e) {
    e.preventDefault();
    const postData = {
        title: $AddTitleInput.value,
        post_text: $addPostTextInput.value,
        category: $selectCategoryInput.value,
        user_id: $userIdInput.value // Get the userID from the hidden input field
    };
    console.log(postData);
    try {
        const response = await fetch(`/api/posts/${$userIdInput.value}`, {
            method: 'POST',
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
        //console.error(err);
    }
}

$addEntryForm.addEventListener('submit', addEntryHandler);
