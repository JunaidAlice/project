import React, { useState } from "react";
const message = [
  "this is your pen1 ",
  "this is your pen2 ",
  "this is your pen 3",
];

const Header = () => {
  const [step, setStep] = useState(1);
  // const [num, setnum] = useState(1);
  const [open, setisOpen] = useState(true);

  function handleOpen() {
    setisOpen(!open);
  }
  // console.log(handleOpen);
  function handleClick() {
    if (step < 3) setStep(step + 1);
  }
  function handleClickNext() {
    if (step > 1) setStep(step - 1);
  }


 
  // const style = { color: "red", backgroundColor: "blue" };


  return (
    <>
      <button className="p-2 bg-slate-700 rounded-full rounded-tr-none absolute right-0 " onClick={handleOpen}>{open ? "x" : "v"}</button>

      {open && (
        <div className="text-center  border-blue-500 p-2   border-4 rounded-xl bg-orange-400">
          <div className="flex justify-evenly">
            <div className={step >= 1 ? "bg-blue-400 p-2 rounded-full py-1":''}>1 </div>
            <div className={step >= 2 ? "bg-blue-600  p-2 rounded-full py-1":''}>2 </div>
            <div className={step >= 3 ? "bg-blue-500  p-2 rounded-full py-1":''}>3 </div>
          </div>

          <p>
            <strong>
              Step {step}:{message[step - 1]}
            </strong>
          </p>
          <div className="mt-4 flex justify-center gap-9">
            <div>
            
            <button onClick={handleClickNext} className="px-2 p-1 border-blue-950 border bg-zinc-950 text-stone-50 rounded-xl"><strong>next</strong></button></div>
 <div>
            <button  className="px-2 p-1 border-blue-950 border bg-zinc-950 text-stone-50 rounded-xl" onClick={handleClick}> <strong> previous</strong></button></div>
          </div>
        </div>
      )}

    
    </>
  );
};

export default Header;
