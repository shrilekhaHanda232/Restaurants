import HeaderComp from "../../Components/Header";
import StickyHeader from "../../Components/StickyHeader";
import RestaurantsContainer from "../RestaurantsContainer";
import "antd/dist/antd.css";
import { Layout, Row, Col } from "antd";

const { Header, Content, Footer } = Layout;
function MainContainer() {
  return (
    <Layout className="top-ramen-body">
      <Header className="top-ramen-header">
        <HeaderComp />
      </Header>
      <Content className="top-ramen-content">
        <Row className="align-center">
          <Col lm={{ span: 24, offset: 0 }} md={{ span: 14, offset: 6 }}>
            <StickyHeader />
            <RestaurantsContainer />
          </Col>
        </Row>
      </Content>
      <Footer className="top-ramen-footer">
        &copy; TopRamen {new Date().getFullYear()}. Demo Porpose Only.
      </Footer>
    </Layout>
  );
}

export default MainContainer;
