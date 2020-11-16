import React, {useState, useEffect} from 'react'

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div style={{'textAlign': 'left', 'marginLeft': '10px'}}>
      <h2>Daily Posts</h2>
      {
        posts.map(post => (
          <div key={post.id}>
            <h4>{`${post.id}. ${post.title}`}</h4>
            <p>{ post.body }</p>
          </div>
        ))
      }
    </div>
  )
}

export default Posts
