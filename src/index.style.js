import styled from "styled-components";

const AppWrapper = styled.div`
  position: relative;

  .ant-layout-header {
    background: #2196f3;
    color: #ffffff;
    font-size: 24px;
    h1 {
      color: #ffffff;
    }
  }

  .ant-layout-content {
    min-height: 100vh;
  }

  .ant-layout-footer {
    text-align: center;
  }
`;

const ContentCenter = styled.div`
  position: relative;
  margin: 0 35px;
`;

export { AppWrapper, ContentCenter };
