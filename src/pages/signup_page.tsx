import {Link} from "react-router-dom"
import {Formik,Form,Field,ErrorMessage} from "formik"
import {useUser} from "../hooks/userHook"

type Values = {
  name:string,
  email:string,
  password:string
}


const initialValues:Values = {
  name:"",
  email:"",
  password:""
}

const Signup_page = ()=>{
   const {register} = useUser()
   
  return(
    <> 
    <div className="md:flex md:flex-col md:justify-center md:items-center md:bg-gray-100 md:bg-opacity-60 md:h-screen">
    <Formik 
    initialValues={initialValues}
    validate={(values:Values)=>{
      const errors = {} as Values;
      if(!values.name){
      errors.name="Name is required please !"
      }
      if(!values.password){
        errors.password = "Password is required"
      } else if(values.password.length<=5){errors.password="Password must contain at least 6 characters !"}; 
      if (!values.email) {
          errors.email = "Email is required !"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address'
        } 
        return errors;
    }} 
    
    onSubmit={async (values, { setSubmitting }) => {
  
     register(values);
       setSubmitting(false);
}}
>
    {
      ({isSubmitting})=>(
        <Form className="w-screen p-4 md:w-[566px] bg-white md:p-7 ">  
          <div className=" opacity-75 font-sans text-center text-3xl p-6 font-bold">Create your account</div>
         <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-800">
              Full Name *
            </label> 
        <Field type="text" name="name" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 my-1"/>
        <ErrorMessage name="name" component="div" className="text-red-500 text-sm font-bold"/>
        
         <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-800">
              Email *
            </label> 
        <Field type="text" name="email" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 my-1"/>
        <ErrorMessage name="email" component="div" className="text-red-500 text-sm font-bold"/> 
        
         <label htmlFor="password" className="block text-sm font-semibold mb-2 text-gray-800">
              Password *
            </label> 
        <Field type="text" name="password" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 my-1"/>
        <ErrorMessage name="password" component="div" className="text-red-500 text-sm font-bold"/> 
        
        <button type="submit" disabled={isSubmitting} className="bg-green-600 text-white w-full py-2 rounded hover:bg-opacity-60 focus:outline-none mt-4 mb-2">Register</button>  <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">
            Already have account ? {'  '}
            <Link to="/signin" className="text-blue-500">
              sign in.
            </Link>
          </p>
        </div> 
        </Form>  
      )
    }
    </Formik> 
</div>
    </>
    )
} 

export default Signup_page