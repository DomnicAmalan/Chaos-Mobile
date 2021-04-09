import React, {createContext, useState} from 'react';

const PreferencePageContext = createContext();

const PreferenceProvider = ({children}) => {

  return <PreferencePageContext.Provider>{children}</PreferencePageContext.Provider>
} 

export { PreferenceProvider, PreferencePageContext }