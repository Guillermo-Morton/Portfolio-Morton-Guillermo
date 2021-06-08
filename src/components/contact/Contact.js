import React, { Fragment, useState } from "react";

import { Form, FormControl, Label, Input, Flex, TextArea, Title, Btn } from "./ContactElements";

import Swal from "sweetalert2";
import emailjs from 'emailjs-com';
import { init } from "emailjs-com";
init("user_iyqHcH4ERBxkxOuuTmb3T");



const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [consulta, setConsulta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendEmail();
  };
  const sendEmail = () => {
    emailjs.send("service_p22wlsn", "template_q8u90rx", {
      from_name: `Guille`,
      to_name: `${nombre}`,
      message: `${consulta}`,
      email: `${email}`,
    })
      .then(
        function (response) {
          console.log(response);
          Swal.fire(
            "Sent!",
            "Your message was sent successfully",
            "success"
          );
        },
        function (error) {
          console.log(error);
          Swal.fire(
            "Opps!",
            "Something got wrong, try again in a minute",
            "error"
          );
        }
      );
  };

  return (
    <Fragment>
      <Flex>
        <Title>Contact me</Title>
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <Label>Your name</Label>
            <Input onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Zenitsu Agatsuma" required></Input>
          </FormControl>
          <FormControl>
            <Label>Your email</Label>
            <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="kamadotanjiro@jp.com" required></Input>
          </FormControl>
          <FormControl>
            <Label>Ask me something!</Label>
            <TextArea onChange={(e) => setConsulta(e.target.value)} rows="3" placeholder="Hello!" required></TextArea>
          </FormControl>
          <Btn type='submit'>Send</Btn>
        </Form>
      </Flex>
    </Fragment>
  );
};

export default Contact;
