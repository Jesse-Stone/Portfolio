import {db, signInWithGoogle, logOut} from '../../firebase-config'


const Login = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}> fuc kthis </button>
    </div>
  )
}

export default Login
