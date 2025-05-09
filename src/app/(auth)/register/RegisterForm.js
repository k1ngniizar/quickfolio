import React from "react";

export const RegisterForm = () => {
  return (
    <div className="h-screen  w-full p-2 flex items-center justify-center bg-[#0b0c10]/90 ">
      <div className="p-5 h-[45vh] w-[40vw] rounded-2xl flex-col flex items-start justify-center gap-4 shadow-sm shadow-gray-400 text-white">
        <h4 className="font-black text-[#66fcf1] text-2xl">Create account</h4>
        <form className="flex flex-col w-full">
          <label className="font-semibold">
            Fullname: <br />
            <input
              placeholder="Enter your name"
              className="border  border-[#c5c6c7] h-[30px] p-2 rounded-lg text-[12px] w-full"
            />
          </label>
          <label className="font-semibold">
            Email: <br />
            <input
              placeholder="Enter your email"
              className="border border-[#c5c6c7] h-[30px] p-2 rounded-lg text-[12px] w-full"
            />
          </label>
          <label className="font-semibold">
            Password: <br />
            <input
              placeholder="Enter a password"
              type="password"
              className="border border-[#c5c6c7] h-[30px] p-2 rounded-lg text-[12px] w-full"
            />
          </label>
        </form>
        <button className="w-fit p-2 rounded-lg bg-[#66fcf1] font-bold">
          Submit
        </button>
      </div>
    </div>
  );
};
