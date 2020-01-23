import React from "react";
import { Form, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";

const ConvertFormComponent = props => {
  const { handleSubmit, fields } = props;
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
    <div>
      {fields.map(item => (
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
      ))}
    </div>
  );
  return <div>{_form()}</div>;
};

export default ConvertFormComponent;
