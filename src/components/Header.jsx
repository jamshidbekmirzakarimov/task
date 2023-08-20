import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Modal from "./Modal";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-teal-600 py-[25px]">
        <div className="w-[100%] max-w-[1100px] mx-auto">
          <div className="flex items-center justify-between">
            <Button
              className={
                "bg-sky-700 rounded-md py-[10px] px-[15px] text-base text-white"
              }
              onClick={() => setOpen((prev) => !prev)}
            >
              Open
            </Button>

            <Link to="/">
              <h2 className="text-white text-xl">Home</h2>
            </Link>
          </div>
        </div>
      </header>

      <Modal open={open} setOpen={setOpen}>
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-xl font-medium mb-5">Modal</h3>
          <Button
            className={
              "bg-sky-700 rounded-md py-[10px] px-[15px] text-base text-white"
            }
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Header;
