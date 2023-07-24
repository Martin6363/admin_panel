import './App.css';
import { useEffect, useState } from 'react';
import { UserData } from './pages/userData';
import { Input } from './component/input';

function App() {
  const [data, setData] = useState([
    {
      name: 'Ramesh',
      lastName: 'Fadatare',
      email: 'ram@gmail.com',
      id: Math.random() 
    },
    {
      name: 'John',
      lastName: 'Cena',
      email: 'jon@gmail.com',
      id: Math.random() 
    },
    {
      name: 'Tom',
      lastName: 'Crusie',
      email: 'tom@gmail.com',
      id: Math.random() 
    },
    {
      name: 'Admin',
      lastName: 'Admin',
      email: 'admin@gmail.com',
      id: Math.random() 
    },
  ])
  return (
    <div className="App">
      <div className='Wrapper'>
        <Input AddData={(name, lastName, email) => {
          setData([
            ...data,
            {
              name: name,
              lastName: lastName,
              email: email,
              id: data?.length + 1
            }
          ])
        }}/>
        <UserData 
          List={data}
          onDelete={(userData) => {
            setData(data.filter((elem) => elem.id !== userData.id));
          }}
        />
      </div>
    </div>
  );
}

export default App;
