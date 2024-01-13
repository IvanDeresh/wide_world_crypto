"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FormEventHandler } from "react";

const FormSignin = () => {
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res && !res.error) {
      router.push("/pages/profile");
    } else {
      alert("Incorrect data");
    }
  };
  return (
    <form
      className="text-white flex flex-col gap-[30px] items-center justify-center w-full"
      onSubmit={handleSubmit}
    >
      <h1 className="text-[30px] underline-offset-[15px] underline decoration-dotted">
        Sign in
      </h1>
      <div className="flex flex-col w-full items-center  gap-[30px]">
        <input
          className="h-[50px] w-[300px] text-black rounded-full focus:outline-none"
          type="email"
          placeholder="       email"
          name="email"
        />
        <input
          className="h-[50px] w-[300px] text-black rounded-full focus:outline-none"
          type="password"
          name="password"
          placeholder="       password"
        />
      </div>
      <button
        className="bg-green-500 w-[150px] h-[50px] rounded-full "
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
export default FormSignin;
