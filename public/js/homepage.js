function goToPost(e) {
    const postPreview = e.target.closest('.post-preview');
    if (!postPreview) { return; }
    
    const id = postPreview.getAttribute('data-id');
    if (id) {
        document.location.replace(`/posts/${id}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('post-preview-list')
        .addEventListener('click', goToPost);
});