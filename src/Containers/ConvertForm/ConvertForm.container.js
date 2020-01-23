import React, { useEffect } from "react";
import ConvertFormComponent from "./ConvertForm.component";
import { Form } from "antd";
import { SwaggerService } from "../../Services";

const ConvertFormContainer = props => {
  const fields = [
    {
      label: "Paste your schema json",
      field_name: "schema",
      required: true
    }
  ];

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        await SwaggerService.POST_CONVERT(values.schema).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        });
      }
    });
  };

  useEffect(() => {
    const _pingServer = () => {
      SwaggerService.GET_PING()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    };
    _pingServer();
  }, []);
  return (
    <div>
      <ConvertFormComponent
        handleSubmit={handleSubmit}
        fields={fields}
        {...props}
      />
    </div>
  );
};

const WrapConvertFormContainer = Form.create({
  name: "ConvertFormContainer"
})(ConvertFormContainer);

export default WrapConvertFormContainer;
