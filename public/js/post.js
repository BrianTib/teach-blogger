const newPostForm = document.getElementById('new-post-form');
if (newPostForm) {
    newPostForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const title = newPostForm.querySelector('#post-title').value.trim();
        const content = newPostForm.querySelector('#post-content').value.trim();
    
        if (title && content) {
            const response = await fetch('/api/posts', {
                method: 'POST',
                body: JSON.stringify({ title, content }),
                headers: { 'Content-Type': 'application/json' },
            });
    
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to create post');
            }
        }
    });
}

const editPostForm = document.getElementById('edit-post-form');
if (editPostForm) {
    editPostForm.querySelector('#delete-post-btn')
        .addEventListener('click', async (event) => {
            event.preventDefault();
    
            const id = editPostForm.getAttribute('data-id');
            if (!id) { return; }
    
            const response = await fetch(`/api/posts/${id}`, {
                method: 'DELETE',
            });
    
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to delete post');
            }
        });

    editPostForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const title = editPostForm.querySelector('#post-title').value.trim();
        const content = editPostForm.querySelector('#post-content').value.trim();
        const id = editPostForm.getAttribute('data-id');
        if (!id) { return; }
    
        if (title && content) {
            const response = await fetch(`/api/posts/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, content }),
                headers: { 'Content-Type': 'application/json' },
            });
    
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to update post');
            }
        }
    });
}