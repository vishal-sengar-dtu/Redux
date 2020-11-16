import React, { useState } from 'react';

function Postform() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    let post = {
      title: title,
      body: body
    }

    fetch('https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        header: { 'content-type': 'application/json' },
        body: JSON.stringify(post)
      })
      .then(res => res.json())
      .then(data => console.log(data))

    setTitle('');
    setBody('');
  }

  return (
    <div style={{ 'textAlign': 'left', 'marginLeft': '10px' }}>
      <h2>Post Form</h2>
      <form onSubmit={submitHandler}>
        <div style={{'display': 'flex', 'flexDirection': 'column', 'margin': '10px'}}>
          <label>Title: </label>
          <textarea
            style={{'width': '200px'}}
            name='title'
            value={title}
            placeholder='Title...'
            onChange={ ({target}) => setTitle(target.value) }
          />
        </div>
        <div style={{'display': 'flex', 'flexDirection': 'column', 'margin': '10px'}}>
          <label>Description: </label>
          <textarea
            style={{'width': '300px'}}
            name='body'
            value={body}
            placeholder='Description...'
            onChange={ ({target}) => setBody(target.value) }
          />
        </div>
        <button
          style={{ 'marginLeft': '10px' }}
          type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Postform
