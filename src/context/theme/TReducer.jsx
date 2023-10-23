import {SETTHEME} from '../type'

const TReducer = (state, dispatch) => {
  const {type, payload, changeValue} = dispatch;
  switch(type){
    case SETTHEME:
      return {
        ...state,
        theme: payload,
        changeTheme: changeValue
      }
  }
}

export default TReducer;