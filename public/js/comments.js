const commentForm = document.getElementById('new-comment-form');
if (commentForm) {
    commentForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const id = commentForm.getAttribute('data-id');
        const content = commentForm.querySelector('#post-content').value.trim();
        if (!id) { return; }
    
        if (content) {
            const response = await fetch(`/api/comments/${id}`, {
                method: 'POST',
                body: JSON.stringify({ content }),
                headers: { 'Content-Type': 'application/json' },
            });
    
            if (response.ok) {
                document.location.reload();
            } else {
                alert('Failed to create post');
            }
        }
    });
}