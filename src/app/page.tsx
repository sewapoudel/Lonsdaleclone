"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/header/header";
import Homepage from "../components/homepage/homepage";
import Registerpage from "../components/registerpage/registerpage";
import Footer from "../components/footer/footer";

import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Homepage />
      <Registerpage />
      <Footer />
     </React.Fragment>
  );
}