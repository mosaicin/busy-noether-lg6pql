import { useState } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  comments: Comment[];
}

interface Comment {
  id: number;
  postId: number;
  content: string;
}

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <p>Welcome to our blog!</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p>This is a blog about various topics.</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p>Get in touch with us at example@example.com</p>
    </div>
  );
};

const Blog = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post 1', content: 'This is post 1', comments: [] },
    { id: 2, title: 'Post 2', content: 'This is post 2', comments: [] },
    { id: 3, title: 'Post 3', content: 'This is post 3', comments: [] },
  ]);

  const [activePost, setActivePost] = useState(null);
  const [newComment, setNewComment] = useState('');

  const handlePostClick = (post) => {
    setActivePost(post);
  };

  const handleAddComment = (post) => {
    const newCommentObject = { id: Math.random(), postId: post.id, content: newComment };
    const updatedPost = { ...post, comments: [...post.comments, newCommentObject] };
    const updatedPosts = posts.map((p) => (p.id === post.id ? updatedPost : p));
    setPosts(updatedPosts);
    setNewComment('');
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="cursor-pointer" onClick={() => handlePostClick(post)}>
            <h2 className="text-lg font-medium mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
          </div>
        ))}
      </div>
      {activePost && (
        <div className="mt-4">
          <h2 className="text-lg font-medium mb-2">{activePost.title}</h2>
          <p className="text-gray-600">{activePost.content}</p>
          <h3 className="text-lg font-medium mb-2">Comments:</h3>
          <ul>
            {activePost.comments.map((comment) => (
              <li key={comment.id}>{comment.content}</li>
            ))}
          </ul>
          <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} className="form-control" placeholder="Add a comment" />
          <button className="btn btn-primary" onClick={() => handleAddComment(activePost)}>Add Comment</button>
        </div>
      )}
    </div>
  );
};

const Photos = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Photos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 md:h-64 lg:h-80" />
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 md:h-64 lg:h-80" />
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 md:h-64 lg:h-80" />
      </div>
    </div>
  );
};

const Videos = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <video className="w-full h-48 md:h-64 lg:h-80" controls />
        <video className="w-full h-48 md:h-64 lg:h-80" controls />
        <video className="w-full h-48 md:h-64 lg:h-80" controls />
      </div>
    </div>
  );
};

const Alphabet = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Alphabet</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {letters.map((letter) => (
          <button key={letter} className="btn btn-primary">{letter}</button>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Blog</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#" onClick={() => handlePageChange('home')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handlePageChange('about')}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handlePageChange('contact')}>Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handlePageChange('blog')}>Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handlePageChange('photos')}>Photos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handlePageChange('videos')}>Videos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handlePageChange('alphabet')}>Alphabet</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'blog' && <Blog />}
      {currentPage === 'photos' && <Photos />}
      {currentPage === 'videos' && <Videos />}
      {currentPage === 'alphabet' && <Alphabet />}
    </div>
  );
};

export default App;