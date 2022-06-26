import React from 'react'
import { CharacterList } from './components/CharacterList'

export const App = () => {

  return (
    <div className='bg-dark text-white'>
      <h2 className='text-center display-1 py-4'>Rick And Morty</h2>
      <CharacterList ></CharacterList>
    </div>
  )
}
