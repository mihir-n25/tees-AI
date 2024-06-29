import React from 'react'

const FilePicker = () => {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input
        id='file-upload'
        type='file'
        accept='image/*'
        onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      
    </div>
  )
}

export default FilePicker