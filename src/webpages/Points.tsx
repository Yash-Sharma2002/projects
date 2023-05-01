import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Top from "../components/Top";
import { LoginContext } from "../context/Context";

export default function Points() {
  const { user } = React.useContext(LoginContext);
  return (
    <>
      <Header />
      <Top
        img={
          "https://img.freepik.com/free-vector/grades-concept-illustration_114360-628.jpg?size=626&ext=jpg&ga=GA1.2.1798755424.1682915885&semt=ais"
        }
        headtext={user.total_point ? "Your Points - " + user.total_point : "Login to see your points"}
      />
      <Footer />
    </>
  );
}
