import { useAuth } from "@/hooks/useAuth"
import Link from "next/link"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

const index = () => {

  const authContext = useAuth()
  const { regis } = authContext

  const defaultValues = {
    username: '',
    password: '',
    phoneNumber: '',
    role: ''
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(defaultValues)

  const onSubmit = useCallback(async (input) => {
    console.log('mashok',input);
    regis(input, () => {
      toast.error('Registrasi Gagal')
    })
  }, [])



  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-screen w-screen flex flex-col justify-center items-center gap-10">

      <h1 className="text-5xl">Login Page</h1>
      <div className="w-[70%]">
        <fieldset className="border-2 border-solid border-main-creme px-5 py-3">
          <legend htmlFor="username" className="p-3 text-xl">
            Username
          </legend>
          <input id="username" {...register("username",)} type="text" placeholder="silahkan isi username" className="w-full outline-none h-full p-5" />
        </fieldset>
        {errors.username && <p className="text-red-600 text-sm">{errors.username.message}</p>}

        <fieldset className="border-2 border-solid border-main-creme px-5 py-3">
          <legend htmlFor="password" className="p-3 text-xl">
            Password
          </legend>
          <input id="password" {...register("password",)} placeholder="silahkan isi password" type="password" className="w-full outline-none h-full p-5" />
        </fieldset>
        {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
        
        <fieldset className="border-2 border-solid border-main-creme px-5 py-3">
          <legend htmlFor="password" className="p-3 text-xl">
            Phone Number
          </legend>
          <input id="phoneNumber" {...register("phoneNumber",)} placeholder="silahkan isi nomor handphone" type="phoneNumber" className="w-full outline-none h-full p-5" />
        </fieldset>
        {errors.phoneNumber && <p className="text-red-600 text-sm">{errors.phoneNumber.message}</p>}
        
        <fieldset className="border-2 border-solid border-main-creme px-5 py-3">
          <legend htmlFor="password" className="p-3 text-xl">
            role
          </legend>
          <input id="role" {...register("role",)} value={'ADMIN'} placeholder="silahkan isi role" type="role" className="w-full outline-none h-full p-5" />
        </fieldset>
        {errors.role && <p className="text-red-600 text-sm">{errors.role.message}</p>}
      </div>
      <h4>Sudah Punya akun? Silahkan Login <Link href={'/login'} className="font-semibold">Disini</Link></h4>

      <button className="p-5 bg-black text-white text-xl rounded-md">
        Login
      </button>
    </form>
  )
}

export default index