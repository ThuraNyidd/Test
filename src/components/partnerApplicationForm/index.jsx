import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import FloatingBtn from "../FloatingBtn/FloatingBtn";

import { verifyCaptcha } from "../careerApplicationComponent";
const Modal = ({ onClose, children, title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSending, setIsSending] = useState(false);
  const [alertMessage, setAlertMessage] = useState();
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const recaptcha = useRef()
  const onSubmit = async (data) => {
    if (!isRecaptchaVerified) {
      toast.error("Please complete the reCAPTCHA.");
      return;
    }
    try {
      setIsSending(true);
      // contact@smilaxglobal.com
      const response = await axios.post("/api/sendEmail", {
        to: "contact@smilaxglobal.com",//htoohtoo.maw@smilaxglobal.com
        subject: "Partner Application",
        message: JSON.stringify(data),
        template: "partner",
      });
      if (response.status === 200) {
        setIsSending(false);
        setAlertMessage("Email has been sent successfully!");
        toast.success("Email has been sent successfully!")
        reset();
        handleCloseClick
      }
    } catch (error) {
      setIsSending(false);
      toast.error("Something went wrong!")
      setAlertMessage("Something went wrong!");
    }
  };
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  async function handleCaptchaSubmission() {
    // Server function to verify captcha
    const captcha_value = recaptcha.current.getValue();
    await verifyCaptcha(captcha_value)
      .then((data) => {
        if (data.success) {
          setIsRecaptchaVerified(true);
        } else {
          setIsRecaptchaVerified(false);
        }
      })
      .catch(() => setIsRecaptchaVerified(false));
  }

  return (
    <div className="modal-overlay overflow-x-hidden">
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> */}
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header pt-5 pe-10 sm:pe-5">
            <a href="#" className="text-gray-700" onClick={handleCloseClick}>
              <Icon icon="maki:cross" />
            </a>
          </div>
          {title && <h1 className="">{title}</h1>}
          <div className="modal-body rany text-5xl font-semibold  callcenter-h1 text-black italic partners-title  px-10 ">
            {children}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-10 flex lg:flex-row md:flex-row sm:flex-row xs-flex-col ss-flex-col flex-col">
              <div className="basis-1/2 px-10">
                <div className="mb-5">
                  <label className="text-black required">Name </label>
                  <input
                    id="name"
                    name="name"
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register("name", { required: true })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.name && errors.name.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="text-black required">Email</label>
                  <input
                    id="email"
                    name="email"

                    aria-invalid={errors.email ? "true" : "false"}
                    {...register("email", {
                      required: "requierd",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })}
                    type="email"
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.email ? "border-red-600 " : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="text-black required">Phone</label>
                  <input
                    id="phone"
                    name="phone"

                    aria-invalid={errors.phone ? "true" : "false"}

                    {...register("phone", { required: true })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.phone && errors.phone.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="text-black required">Message</label>
                  <input
                    id="message"
                    name="message"
                    aria-invalid={errors.message ? "true" : "false"}

                    {...register("message", { required: true })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.message && errors.message.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
              </div>
              <div className="basis-1/2 px-10">
                <div className="mb-5">
                  <label className="text-black required">Company Name</label>
                  <input
                    id="company_name"
                    name="company_name"
                    aria-invalid={errors.company_name ? "true" : "false"}

                    {...register("company_name", { required: true })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.company_name && errors.company_name.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className=" text-black required">
                    Type of Business
                  </label>
                  {/* <input
                    id="gender"
                    className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"
                  /> */}
                  <select
                    id="type_of_business"
                    {...register("type_of_business", {
                      required: true,
                    })}
                    className={`text-black placeholder-black font-medium text-[15px] w-full border-b-2 outline-none border-black
              pb-[5px]  ${errors.type_of_business && errors.type_of_business.type === "required" ? "border-red-600 " : ""
                      }`}
                  >

                    <option value="IT">Agriculture</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Education">Education</option>
                    <option value="Entertainment and Media">Entertainment and Media</option>
                    <option value="Finance and Banking">Finance and Banking</option>
                    <option value="Government">Government</option>
                    <option value="Hospitality ">Hospitality </option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Nonprofit and Social Impact">Nonprofit and Social Impact</option>
                    <option value="Technology">Technology</option>
                    <option value="Telecommunications">Telecommunications</option>
                    <option value="Other">Other</option>

                  </select>
                </div>

                <div className="mb-5">
                  <label className="text-black required">Address</label>
                  <input
                    id="address"
                    name="address"
                    aria-invalid={errors.address ? "true" : "false"}
                    {...register("address", { required: true })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.address && errors.address.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="text-black required">Website Link</label>
                  <input
                    id="website_link"
                    name="website_link"
                    aria-invalid={errors.website_link ? "true" : "false"}
                    {...register("website_link", { required: true })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.website_link && errors.website_link.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
              </div>
            </div>
            <div className="mt-[14px] ms-4 sm:ms-10 sm:mt-[25px] scale-90 sm:scale-100">
              <ReCAPTCHA
                ref={recaptcha}
                sitekey="6LcYmKIoAAAAAHlXzIvaTxcQiHmufSHURqT8HSts"
                onChange={handleCaptchaSubmission}
              />
            </div>
            <div className="flex justify-center mt-[25px] sm:mb-[48px] pb-10">
              <FloatingBtn classes={"normal-case flex items-center gap-1 border-2 border-solid border-black hover:bg-black hover:text-white rounded-full px-4 py-2 text-[14px] font-medium text-black"} text={isSending ? "Sending... " : "send to us "} disabled={false} footer={false} contact onClick={(e) => console.log(e)} />
              {/* <button
                disabled={isSending}
                type="submit"
                className="font-medium text-[14px] py-2  normal-case flex items-center gap-1 border-2 border-solid border-black hover:bg-black hover:text-white rounded-full px-4 text-black"
              >
                {isSending ? "Sending..." : "send to us"}{" "}
                <Icon icon="quill:send" />
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
