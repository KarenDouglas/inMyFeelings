const $userEntries = document.querySelector('.userEntries')
const $userId = document.querySelector('.userIdOnDashboard').id


async function deleteEntryHandler(e){
    if(e.target.id.includes('deleteBtn')){
        const postId = parseInt(e.target.id.split('deleteBtn-')[1])
        try {
            const response = await fetch(`/api/posts/${postId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                    // Add any other headers as needed
                }
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const responseData = await response.json();
            // Handle the response data if needed
            window.location.href=`/dashboard/${$userId}`
    console.log(responseData)
            return responseData; // Optional: Return the response data
        } catch (error) {
            console.error('Error:', error);
            // Handle errors here
        }

    }
}

$userEntries.addEventListener('click', deleteEntryHandler)