// MainPage.js

import React from 'react';
import Main3D from './3D/Main3D';
import Demo from './JSX/Demo'


const MainPage = () => {
  return (
    <>
    {/* <div style={{overflow: "hidden"}}>  */}
      {/* UI */}
      <Main3D/>
      <Demo/>
    {/* </div> */}
    </>
  );
}

export default MainPage;
