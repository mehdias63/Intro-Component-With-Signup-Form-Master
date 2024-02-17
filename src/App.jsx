import React from "react";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <main className="flex flex-col md:flex-row bg-pink px-6 py-16 bg-[url(/images/bg-intro-mobile.png)] md:bg-[url(/images/bg-intro-desktop.png)] bg-no-repeat bg-cover min-h-screen font-pop text-white">
      <div className="md:w-1/2 md:flex flex-col justify-center p-6 md:pl-12 gap-8 ">
        <h1 className="text-[1.75rem] font-bold lg:text-[3.125rem] leading-9 md:leading-[3.4375rem] tracking-[-0.01825rem] md:tracking-[-0.03256rem]">
          Learn to code by watching others
        </h1>
        <p className="text-base font-medium leading-[1.625rem]">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="flex flex-col gap-4 md:py-10">
        <div className="bg-purple p-6 rounded-xl">
          <p className="text-center text-[0.9375rem] font-bold leading-[1.625rem] tracking-[0.01675rem]">
            Try it free 7 days{" "}
            <span className="font-normal">then $20/mo. thereafter</span>
          </p>
        </div>
        <FormComponent />
      </div>
    </main>
  );
}

export default App;
