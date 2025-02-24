import React, { useContext, useState } from "react";
import { Button, Input, Label, Textarea } from "@relume_io/relume-ui";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { validationSchema } from "../../assets/hooks/Schema";
import { QueryForm } from "../../assets/hooks/DataPass";
import { ScrollContext } from "../../assets/hooks/ScrollContext";

const Forms = () => {
  const [loading, setLoading] = useState(false);
  const { formElement } = useContext(ScrollContext);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28" ref={formElement}>
      <div className="container">
        <div className="rb-12 mb-8 max-w-lg md:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Connect</p>
          <p
            className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Get in Touch
          </p>
          <p
            className="md:text-md"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            We're here to assist you with your approvals.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[1fr_1fr] md:gap-x-20 md:gap-y-16">
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

          <div className="mb-auto grid gap-x-4 gap-y-10 py-2 sm:grid-cols-2">
            <div data-aos="zoom-in" data-aos-duration="1000">
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Email
              </h3>
              <p className="mb-2">Reach us anytime at</p>
              <a className="underline" href="#">
                hello@relume.io
              </a>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500">
              <div className="mb-3 md:mb-4">
                <BiPhone className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Phone
              </h3>
              <p className="mb-2">Call us at</p>
              <a className="underline" href="#">
                +1 (555) 000-0000
              </a>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2000">
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Office
              </h3>
              <p className="mb-2">123 Sample St, Sydney NSW 2000 AU</p>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Get Directions"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
