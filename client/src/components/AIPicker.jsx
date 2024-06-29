import React from 'react'

import CustomButton from './CustomButton';
const AIPicker = ({prompt , setPrompt , geeneratingImg , handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea 
      placeholder='Ask AI..'
      rows={5}
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {geeneratingImg ? (
          <CustomButton 
          type='outline'
          title='Askin AI...'
          customStyles="text-xs"
          /> 
        ) : (
          <>
          <CustomButton type='filled'
          title="AI Full"
          handleClick={() => handleSubmit("full")}
          customStyles="text-xs"
          />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker