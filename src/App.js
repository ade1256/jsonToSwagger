import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Config/Router";
import { Layout } from "antd";
import { AppWrapper, ContentCenter } from "./index.style";
const { Header, Footer, Content } = Layout;

const App = () => (
  <BrowserRouter>
    <AppWrapper>
      <Layout>
        <Header>
          <h1>JSON to Swagger</h1>
        </Header>
        <Content>
          <ContentCenter>
            <Router />
          </ContentCenter>
        </Content>
        <Footer>All right reserved &copy; 2020</Footer>
      </Layout>
    </AppWrapper>
  </BrowserRouter>
);

export default App;
