import React from "react";
import Basic from "@/components/Basic";
import Hook from "../components/Hook";

const App:React.FC = ()=> {

  return (
    <>
      <h1>Wellcome To IT.BRU</h1>
      <p>Hello Typecript</p>

      <Basic initVal="1" gender="Male" />

      <Hook initHook={Number(5)} />
    </>
  );
};

export default App;