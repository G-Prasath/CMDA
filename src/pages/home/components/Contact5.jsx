import { Button, Input, Label, Textarea } from "@relume_io/relume-ui";
import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { validationSchema } from "../../../assets/hooks/Schema";
import { QueryForm } from "../../../assets/hooks/DataPass";
import { ScrollContext } from "../../../assets/hooks/ScrollContext";
import Reveal from "../../../assets/hooks/Reveal";
import { Link, useNavigate } from "react-router-dom";

export function Contact5() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { formElement } = useContext(ScrollContext);
  return (
    <section
      ref={formElement}
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary_clr text-white"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
          <div>
            <Reveal direction="left">
              <div className="mb-6 md:mb-8">
                <p className="mb-3 font-semibold md:mb-4">Connect</p>
                <p className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  Get in Touch
                </p>
                <p className="md:text-md">
                  We'd love to hear from you. Reach out today!
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="grid grid-cols-1 gap-4 py-2">
                <div className="flex items-center gap-4">
                  <BiEnvelope className="size-6 flex-none" />
                  <Link to="mailto:landmakersrevovest@gmail.com" target="_blank">landmakersrevovest@gmail.com</Link>
                </div>
                <div className="flex items-center gap-4">
                  <BiPhone className="size-6 flex-none" />
                  <Link to="tel:+917823917774" target="_blank">+91 78239 17774</Link>
                </div>
                <div className="flex items-center gap-4">
                  <BiMap className="size-6 flex-none" />
                  <p>No. 33/20, Ramakrishnapuram 3rd Street, West Mambalam, Chennai, Tamil Nadu, 600033</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal direction="bottom">
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                setLoading(true);
                try {
                  setTimeout(() => {
                    setLoading(false);
                    navigate("/thankyou");
                    resetForm();
                  }, 1000);
                  const { data, error } = await QueryForm(values);
                } catch (error) {
                  console.log(error);
                  setLoading(false);
                }
              }}
            >
              <Form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6">
                <div className="grid w-full items-center">
                  <Label htmlFor="name" className="mb-2">
                    Name
                  </Label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="text-primary_clr"
                    autoComplete="off"
                    as={Input}
                  />
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
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="text-primary_clr"
                    autoComplete="off"
                    as={Input}
                  />
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
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    className="text-primary_clr"
                    autoComplete="off"
                    as={Input}
                  />
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
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="(Optional)"
                    className="min-h-[11.25rem] overflow-auto text-primary_clr"
                    autoComplete="off"
                  />
                </div>

                <div>
                  <Button
                    title="Submit"
                    disabled={loading}
                    className="bg-white text-primary_clr font-semibold rounded-md"
                    type="submit"
                  >
                    {loading ? "Loading ..." : "Submit"}
                  </Button>
                </div>
              </Form>
            </Formik>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
