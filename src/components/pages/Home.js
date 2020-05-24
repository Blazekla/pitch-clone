import React from "react";
import Layout from "./Layout";

import SignUp from "../Main/SignUp";
import Container from "../Main/Container";
import Hero from "../Main/Hero/Hero";

function Home() {
  return (
    <Layout>
      <Hero />
      <Container />
      <SignUp />
    </Layout>
  );
}

export default Home;
