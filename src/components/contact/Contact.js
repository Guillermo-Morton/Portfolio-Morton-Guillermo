import React, { Fragment } from "react";
import { Form, FormControl, Label, Input, Flex, TextArea, Title, Btn } from "./ContactElements";

const Contact = () => {
  return (
    <Fragment>
      <Flex>
          <Title>Contact me</Title>
        <Form>
          <FormControl>
            <Label>Your name</Label>
            <Input type="text" placeholder="Zenitsu Agatsuma"></Input>
          </FormControl>
          <FormControl>
            <Label>Your email</Label>
            <Input type="email" placeholder="kamadotanjiro@jp.com"></Input>
          </FormControl>
          <FormControl>
            <Label>Ask me something!</Label>
            <TextArea rows="3" placeholder="Hello!"></TextArea>
          </FormControl>
          <Btn type='submit'>Send</Btn>
        </Form>
      </Flex>
    </Fragment>
  );
};

export default Contact;
