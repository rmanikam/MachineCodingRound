import React from 'react'

const Editor = ({markdown, setMarkDown}) => {
  return (
    <div>
        <textarea
            value={markdown}
            onChange={(e) => setMarkDown(e.target.value)}
            placeholder ="Enter Markdown here"
        />
    </div>
  )
}

export default Editor