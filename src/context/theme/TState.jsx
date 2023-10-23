import { useEffect, useReducer } from 'react';
import TContext from './TContext';
import { SETTHEME } from '../type';
import TReducer from './TReducer';

const TState = (props) => {
  const LTheme = localStorage.getItem('theme');

  useEffect( ()  => {
    LTheme ? setTheme(LTheme) : setTheme('light');
  }, [LTheme])

  const initialState = {
    theme: LTheme === null ? 'light' : LTheme,
    changeTheme: null
  }

  const [state, dispatch] = useReducer(TReducer, initialState);

  const setTheme = (value) => {
    let changeValue; 
    switch(value){
      case 'dark':
        changeValue = 'light';
        break;
      case 'light':
        changeValue = 'dark';
        break;
      default:
        break;
    }
    dispatch({
      type: SETTHEME,
      payload: value,
      changeValue: changeValue
    })

    localStorage.setItem('theme', value);
  }

  return (
    <TContext.Provider value={{
      theme: state.theme,
      changeTheme: state.changeTheme,
      setTheme
    }}>
      {props.children}
    </TContext.Provider>
  );
}

export default TState