import './App.css';
import { useQuery, gql } from '@apollo/client';

const USERS_QUERY = gql`
  query {
    users {
      id
      name
      age
      location
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error...</h3>;
  }

  return (
    <>
      {data.users.map(user => (
        <pre key={user.id}>
          {JSON.stringify(user)}
        </pre>
      ))}
    </>
  );
}

export default App;
