import React, { useContext, useState } from "react";
import { Button, Input, Label, Textarea } from "@relume_io/relume-ui";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../../assets/hooks/Schema";
import { QueryForm } from "../../../assets/hooks/DataPass";
import { ScrollContext } from "../../../assets/hooks/ScrollContext";

export function Contact1() {
  const [loading, setLoading] = useState(false);
  const { formElement } = useContext(ScrollContext);
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28" ref={formElement}>
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          <p
            className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Get in Touch
          </p>
          <p
            className="md:text-md"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            We'd love to hear from you. Reach out today!
          </p>
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            message: "",
            select: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            setLoading(true);
            try {
              const { data, error } = await QueryForm(values);
              resetForm();
            } catch (error) {
              console.log(error);
            } finally {
              setLoading(false);
            }
          }}
        >
          {({ touched, errors }) => (
            <Form
              className="grid grid-cols-1 gap-6"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="grid w-full items-center">
                <Label htmlFor="name" className="mb-2">
                  Name
                </Label>
                <Field type="text" id="name" name="name" as={Input} />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="email" className="mb-2">
                  Email
                </Label>
                <Field type="email" id="email" name="email" as={Input} />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="phone" className="mb-2">
                  Phone
                </Label>
                <Field type="text" id="phone" name="phone" as={Input} />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="message" className="mb-2">
                  Message
                </Label>
                <Field
                  id="message"
                  name="message"
                  as={Textarea}
                  placeholder="Write your message..."
                  className="min-h-[11.25rem] overflow-auto"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <Button type="submit" title="Submit" disabled={loading}>
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
