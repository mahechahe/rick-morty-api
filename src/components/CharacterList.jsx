import React, {useState, useEffect} from 'react'
import { Character } from './Character'


export const CharacterList = () => {

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  const NavPage = ({page, setPage}) => {
    return (
        <header className='d-flex justify-content-between align-items-center'>
            <p>Page: {page}</p>
            <button onClick={() => setPage(page + 1)} className='btn btn-primary btn-sm'>
                Page {page + 1}
            </button>
        </header>
    )
  }

  useEffect(() => {

    (async() => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await response.json()
      setCharacters(data.results)
      setLoading(false)
    })()

  }, [page])

  if(loading){
    return <h1>Loading....</h1>
  }

  return (
    <div className='container py-4'>

        <NavPage page={page} setPage={setPage}></NavPage>
        {
            loading 
            ? <h1>Cargando...</h1>
            :  (
                <div className='row'>
                    {
                    characters?.map(character => (
                        <div key={character.id} className='col-md-4'>
                            <Character character={character}></Character>
                        </div>
                    ))
                    }
                </div>
            )
        }
        <NavPage page={page} setPage={setPage}></NavPage>
    </div>
  )
}
