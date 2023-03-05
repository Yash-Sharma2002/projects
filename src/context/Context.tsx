import React from 'react'

export const MainContext = React.createContext({} as any)

export default function Context({children}) {
  return (
    <MainContext.Provider value={{}}>
        {children}
    </MainContext.Provider>
  )
}
