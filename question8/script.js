async function fetchPosts(userId) {
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    try {
        const response = await fetch(postsUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch posts. Status: ${response.status}`);
            
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        return [];
    }
}

async function fetchcomments(postId) {
    const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    try {
        const response = await fetch(commentsUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch posts. Status: ${response.status}`);
            
        }
        const comments = await response.json();
        return comments;
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        return [];
    }
}

