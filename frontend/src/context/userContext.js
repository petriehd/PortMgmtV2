import React, { useState, useContext } from 'react'

const UserIdContext = React.createContext();
const UpdateUserContext = React.createContext();

export const useUserId = () => {
  return useContext(UserIdContext)
}

export const useUpdateUserId = () => {
  return useContext(UpdateUserContext)
}

export const UserProvider = ({ value, children }) => {
  const [userId, SetUserId] = useState(value)
  return (
    <UserIdContext.Provider value={userId}>
      <UpdateUserContext.Provider value={SetUserId}>
        {children}
      </UpdateUserContext.Provider>
    </UserIdContext.Provider>
  )
}