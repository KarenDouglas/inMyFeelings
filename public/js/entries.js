const $entries = document.querySelector('.entries')


//gets all entries from all users
async function getEntries (){
    try{
        const response = await fetch('/api/posts')
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        return responseData.data

    }catch(err){
        console.error(err)
    }
}
getEntries()


async function renderEntries(){
    
    const entries = await getEntries()
    

    for(let i = 0 ; i < entries.length; i++){
       const entry = entries[i]
       const comments = entries[i].comments
       console.log(entry)
    $entries.innerHTML +=
    `<a href="/post/${entry.id}">
    <section id="" class="entry-container">  
        <h2>${entry.title}</h2>

        <p>${entry.post_text}</p>
        <section class="entry-footer">
            <p>${entry.updatedAt}</p>
            <p>comments: ${comments.length}</p>
        <p>${entry.category}</p>
        </section>
    </section>
</a>`



   }
}
renderEntries()
//renders each entry
















