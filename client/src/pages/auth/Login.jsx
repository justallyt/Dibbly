import "../../css/auth.css"
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../redux/slices/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/slices/auth/authUtilSlice";
import { useNavigate } from "react-router-dom"

const Login = () => {
     const { register, handleSubmit } = useForm();
     const [ login, { isLoading }] = useLoginUserMutation();
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const loginUser = async (data) => {
          try {
              const res = await login(data).unwrap();

              if(res){
                   dispatch(setCredentials({...res}));
                   navigate(`/${res.role}/${res.id}/websites`)
              }
          } catch (error) {
               console.error(error.data.message)
          }
     }
  return (
    <div className="auth-wrapper">
            <form onSubmit={handleSubmit(loginUser)}>
                       <label htmlFor="">Email Address</label>
                       <input type="email" { ...register("email", { required: "Email address required"})} placeholder="Username" />
                       <label htmlFor="password">Password</label>
                       <input type="password" { ...register("password", { required: "Password is required"})} placeholder="*********" />

                       <button>{isLoading ? "Loggin in..." : "Login"}</button>
            </form>
    </div>
  )
}

export default Login