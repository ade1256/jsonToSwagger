import React, { useEffect, useState } from "react";
import ConvertFormComponent from "./ConvertForm.component";
import { Form, message } from "antd";
import { SwaggerService } from "../../Services";

const ConvertFormContainer = props => {
  const [swaggerJson, setSwaggerJson] = useState(null);
  const fields = [
    {
      label: "Paste your schema json",
      field_name: "schema",
      required: true,
      size: 12
    }
  ];

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        message.info("Converting...")
        await SwaggerService.POST_CONVERT(JSON.parse(values.schema))
          .then(res => {
            message.success("Your schema successfully converted.")
            setSwaggerJson(res);
          })
          .catch(err => {
            message.error(
              "Error converting, please check again your schema. It must be JSON formatted !"
            );
          });
      }
    });
  };

  useEffect(() => {
    const _pingServer = async () => {
      message.info("Checking server ...");
      await SwaggerService.GET_PING()
        .then(() => {
          message.success("Server 200 OK");
        })
        .catch(() => {
          message.error(
            "Server didn't respond. Please refresh this page again.."
          );
        });
    };
    _pingServer();
  }, []);
  return (
    <div>
      <ConvertFormComponent
        handleSubmit={handleSubmit}
        fields={fields}
        swaggerJson={swaggerJson}
        {...props}
      />
    </div>
  );
};

const WrapConvertFormContainer = Form.create({
  name: "ConvertFormContainer"
})(ConvertFormContainer);

export default WrapConvertFormContainer;
