import React from 'react'
import ReactMarkdown from 'react-markdown';

const Previewer = ({markdown}) => {
  return (
    <div>
        <h2>Preview</h2>
        <div className='preview'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    </div>
  )
}

export default Previewer