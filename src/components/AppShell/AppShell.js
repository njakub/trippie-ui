import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function AppShell(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default AppShell;
