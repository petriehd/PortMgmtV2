import { Outlet } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import AuthContext from '../context/authProvider'
// useRefreshToken

const PersistLogin = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useContext(AuthContext)

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      }
      catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false);
      }
    }
    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, [])

  useEffect(() => {
    console.log(`isloading ${isLoading},     ${JSON.stringify(auth)}`)
  }, [isLoading])


  return ( 
    <>
      {isLoading
        ? <p>Loading...</p>
        : <Outlet/>

      }
    </>
  )
}

export default PersistLogin