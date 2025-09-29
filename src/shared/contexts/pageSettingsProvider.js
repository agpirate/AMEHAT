// settingsContext.js
import React, { createContext, useReducer } from 'react';

const initialState = {
  theme: 'light',
  language: 'en',
  notifications: true,
  fontSize: 'medium',

  scrollYEvent:0,
};

function settingsReducer(state, action) {
    switch (action.type) {
      case 'SET_THEME':
        return { ...state, theme: action.payload };
      case 'SET_LANGUAGE':
        return { ...state, language: action.payload };
      case 'SET_SCROLLYEvent':
        return { ...state, scrollYEvent: action.payload };
      // Add other cases
      default:
        return state;
    }
  }
  
const PageSettingsContext = createContext(); // provides a reactive_value(state_obj) && function to update the value (dispatch or normal function)

export function PageSettingsProvider({ children }) {
    const [pageSetting, pageSettingComputor] = useReducer(settingsReducer, initialState); 
     // useReducer( updator_function(new_stateObj+actions,old_stateObj), initialState_Obj)
     //returns the updated_StateObj and ( the updator_function reduced to receive new_stateObj+actions ) = dispatcher

    return (
      <PageSettingsContext.Provider value={{ pageSetting, pageSettingComputor }}>
        {children}
      </PageSettingsContext.Provider>
    );
  }


export const usePageSettings = () => React.useContext(PageSettingsContext);
