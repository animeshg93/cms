import React from 'react'

const AppContext = React.createContext()

export const UserProvider = AppContext.Provider
export const UserConsumer = AppContext.Consumer

export default AppContext