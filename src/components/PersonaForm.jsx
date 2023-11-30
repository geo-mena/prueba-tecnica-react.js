import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Alert } from "antd";
import CedulaValidator from "../utils/CedulaValidator";

const PersonaForm = ({ addPersona }) => {
  const [form] = Form.useForm();
  const [error, setError] = useState("");

  const handleSubmit = (values) => {
    const { nombre, apellido, edad, cedula } = values;

    if (CedulaValidator(cedula)) {
      addPersona({ nombre, apellido, edad, cedula });
      form.resetFields();
      setError("");
    } else {
      setError("La cédula debe tener exactamente 10 dígitos.");
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item
            label="Nombre"
            name="nombre"
            rules={[
              { required: true, message: "Por favor, ingresa el nombre." },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Apellido"
            name="apellido"
            rules={[
              { required: true, message: "Por favor, ingresa el apellido." },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Edad"
            name="edad"
            rules={[{ required: true, message: "Por favor, ingresa la edad." }]}
          >
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Cédula"
            name="cedula"
            rules={[
              { required: true, message: "Por favor, ingresa la cédula." },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Agregar Persona
        </Button>
      </Form.Item>
      {error && <Alert message={error} type="error" showIcon />}
    </Form>
  );
};

export default PersonaForm;
