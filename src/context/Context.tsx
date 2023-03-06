import React from 'react'

export const MainContext = React.createContext({} as any)

export default function Context({children}) {

  function toTitle(str) {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  return (
    <MainContext.Provider value={{toTitle}}>
        {children}
    </MainContext.Provider>
  )
}
