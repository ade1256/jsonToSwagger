import React from "react";
import { Form, Button, Row, Col } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Result, WrapperForm } from "./ConvertForm.style";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ConvertFormComponent = props => {
  const { handleSubmit, fields, swaggerJson } = props;
  const { isFieldTouched, getFieldDecorator, getFieldError } = props.form;

  const _form = () => (
    <Form layout="vertical" onSubmit={handleSubmit}>
      {_mappingField()}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Convert now
        </Button>
      </Form.Item>
    </Form>
  );

  const validateField = fieldName =>
    isFieldTouched(fieldName) && getFieldError(fieldName);

  const _mappingField = () => (
    <Row gutter={8}>
      {fields.map(item => (
        <Col span={item.size}>
          <Form.Item
            label={item.label}
            validateStatus={validateField(item.field_name) ? "error" : ""}
            help={validateField(item.field_name) || ""}
          >
            {getFieldDecorator(item.field_name, {
              rules: [
                {
                  required: item.required,
                  message: `Please input ${item.field_name}`
                }
              ]
            })(<TextArea rows={12} />)}
          </Form.Item>
        </Col>
      ))}
      <Col span={12}>
        <Result>
          <label>Result</label> 
          <TextArea rows={12} value={swaggerJson} />
        </Result>
        <CopyToClipboard text={swaggerJson}>
            <Button type="primary">Copy</Button>
        </CopyToClipboard>
      </Col>
    </Row>
  );
  return <WrapperForm>{_form()}</WrapperForm>;
};

export default ConvertFormComponent;
