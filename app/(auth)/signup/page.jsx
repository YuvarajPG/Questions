import Link from "next/link";
import Button from "../../../components/ui/button.jsx";
import Input from "../../../components/ui/input.jsx";
const signup = () => {
  return (
    <>
      <div className="bg-auto h-[90vh] flex justify-center items-center ">
        <form action="" className="">
          <div className="relative">
            <Input autoComplete={'off'} type={'text'} id={'email'}/>
            <label
              htmlFor="email"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-sm transition-all pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 text-black peer-focus:text-white peer-focus:top-0 peer-focus:-translate-y-6 peer-focus:scale-90 origin-left font-semibold">
              email
            </label>
          </div>
          <div className="relative mt-7">
            <Input autoComplete={'off'} type={'password'} id={'password'} />

            <label
              htmlFor="password"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-sm transition-all pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 text-black peer-focus:text-white peer-focus:top-0 peer-focus:-translate-y-6 peer-focus:scale-90 origin-left font-semibold">
              password
            </label>
          </div>

          <div className="relative mt-7">
            <Input autoComplete={'off'} type={'password'} id={'confirm-password'} />
            <label
              htmlFor="confirm-password"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-sm transition-all pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 text-black peer-focus:text-white peer-focus:top-0 peer-focus:-translate-y-6 peer-focus:scale-90 origin-left font-semibold">
              confirm password
            </label>
          </div>

          <Button input={"Sign Up"} color={"green"} margin="marginTop" />
          <br />
          <span className="mt-10"> already have an account?</span> &nbsp;
          <Link href={"/login"}>login</Link>
        </form>
      </div>
    </>
  )
}

export default signup