$logoutBtn = document.querySelector("#logout")


if($logoutBtn){
    $logoutBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('/api/users/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error('Logout failed');
            }
    
            // Redirect to the home page after successful logout
            window.location.href = '/';
        } catch (error) {
            console.error('Logout error:', error.message);
        }
    });
}
