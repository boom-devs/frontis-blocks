document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.fb-post-meta-main-wrapper');

    blocks.forEach(block => {
        const postId = block.getAttribute('data-post-id');
        const metaTerms = JSON.parse(block.getAttribute('data-meta-terms'));
        const colorStyle = block.getAttribute('data-meta-color');

        if (!postId) return;

        fetch(`${window.location.origin}/wp-json/wp/v2/posts/${postId}`)
            .then(res => res.json())
            .then(post => {
                const listItems = block.querySelectorAll('.fb-post-meta-item');
                listItems.forEach((li, index) => {
                    const term = metaTerms[index];
                    if (!term) return;

                    let value = '';
                    switch(term.metaType) {
                        case 'title':
                            value = post.title.rendered;
                            break;
                        case 'author':
                            // Optional: fetch author name from post.author
                            value = post._embedded?.author?.[0]?.name || 'Author';
                            break;
                        case 'date':
                            value = new Date(post.date).toLocaleDateString();
                            break;
                        case 'category':
                            value = post.categories_names?.join(', ') || '';
                            break;
                        case 'custom':
                            value = term.metaLabel || '';
                            break;
                    }

                    li.textContent = value;
                    if (colorStyle) li.style.color = colorStyle;
                });
            })
            .catch(err => console.error('Error fetching post meta:', err));
    });
});
