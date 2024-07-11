const newPostForm = document.getElementById('new-post-form');

console.log(newPostForm);
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