import { useFetch } from '../../hooks/useFetch'

//styles
import './Home.css'

//components
import RecipesList from '../../components/RecipeList'


export default function Home() {
  const { data, isPending, error} = useFetch('http://localhost:3000/recipes')

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipesList recipes={data} />}
    </div>
  )
}