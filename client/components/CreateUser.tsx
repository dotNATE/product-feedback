import { useState } from 'react';
import { CREATE_USER } from '../graphql/Mutation';
import { useMutation } from '@apollo/client';

export const CreateUser = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const [createUser] = useMutation(CREATE_USER);
  
    return (
      <div>
        <h1>Create a User</h1>
        <div className='createUser'>
          <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
          <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={() => createUser({ 
            variables: {
              name,
              username,
              password
            },
          })}>Create User</button>
        </div>
      </div>
    )
}