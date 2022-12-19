import React, { useState } from 'react';

function CreatePost() {
  const [markdown, setMarkdown] = useState('Add post title');

  const handleOnChange = () => {
    setMarkdown();
  };
  return (
    <main>
      <input value={markdown} onChange={handleOnChange} />
    </main>
  );
}

export default CreatePost;
