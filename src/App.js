import './App.css';
import { useEffect, useState } from 'react';
import { UserData } from './pages/userData';
import { TailSpin } from 'react-loader-spinner'
import { LoginInput } from './pages/loginInput';
import { Route, Routes } from 'react-router';
import { UserView } from './component/UserView';
import { NavigationHeader } from './pages/navigationHeader';
import { useSelector, useDispatch } from 'react-redux';
import { deleteData } from './store/data/data.action'


function App() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const { data } = useSelector( store => ({
    data: store.dataReducer.data
  }) )

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])

  if (isLoading) {
    return (
      <div className="loading-cont">
        <TailSpin
          height="80"
          width="80"
          color="#25A3B8"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <div className="App">
      <div className='Wrapper'>
      <NavigationHeader/>
        <Routes>
          <Route path="/" element={<LoginInput/>}/>
          <Route path='/userData' element={
            <UserData 
              List={data}
              onDelete={(userData) => {
                dispatch(deleteData(data.filter((elem) => elem.id !== userData.id)));
              }}
            />
          }/>
          <Route path='/UserView/:id/' element={<UserView List={data}/>}/>
          <Route path='/navigationHeader' element={<NavigationHeader/>}/>       
          <Route path='/loginInput' element={<LoginInput/>}/> 
          <Route path='*' element={<h1>404</h1>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
