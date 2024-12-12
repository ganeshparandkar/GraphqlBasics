import './App.css'
import { useQuery, gql } from '@apollo/client';

const query = gql`
query GetTodos {
  getTodos {
    id
    title
    completed
    userId
    user {
      id
      name
      username
      email
    }
  }
}
`

function App() {

  const { loading, error, data } = useQuery(query);
  if (loading) return <h1>Loading...</h1>
  return (
    <>
        {
          data.getTodos.map((todo)=>{

            return (
              
              <div key={todo.id} className="maindiv border m-2 flex gap-10">
              <h3 className='text-lg font-semibold'>Title: {todo.title}</h3>
              <p>User: {todo.user.name}</p>
              </div>
            
            )

          })
        }
        {JSON.stringify(data.getTodos)}
    </>
  )
}

export default App
