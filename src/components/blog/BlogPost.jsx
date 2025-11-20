import Content from './Content.jsx';
import Comments from './Comments.jsx';
function BlogPost() {
    const postContent = {
    title: "My First Blog Post",
    content: "This is the content of my first blog post. Welcome to my blog! Hope you enjoy reading it.",
    author: "John Doe",
    date: "2023-10-01",
    };
    return (
        <div className="blog-container">
            <Content
                title={postContent.title}
                content={postContent.content}
                date={postContent.date}
                author={postContent.author}
            />
            <Comments />
        </div>
        
    )
}

export default BlogPost;