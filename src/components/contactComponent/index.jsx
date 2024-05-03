"use client";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useScroll, useTransform, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { verifyCaptcha } from "../careerApplicationComponent";
import FloatingBtn from "../FloatingBtn/FloatingBtn";


export default function ContactComponent() {
  const recaptcha = useRef();
  const recaptchaRef = useRef();

  const handlePhoneClick = () => {
    window.location.href = "tel:09774171717";
  };

  const handlePhoneClickfirst = () => {
    window.location.href = "tel:09771232323";
  };
  const handlePhoneClickSecond = () => {
    window.location.href = "tel:09773272727";
  };

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.8], [30, 0]);

  const [isSending, setIsSending] = useState(false);
  const [alertMessage, setAlertMessage] = useState();
  const [showMap, setShowMap] = useState(false);
  const [showContactBox, setShowContactBox] = useState(false);
  const [selectedOption, setselectedOption] = useState(null);
  const [parentWidth, setParentWidth] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    console.log(data);
    if (!isRecaptchaVerified) {
      toast.error("Please complete the reCAPTCHA.");
      return;
    }
    try {
      setIsSending(true);
      //"General Enquiry" or "Technical Enquiry"  contact@smilaxglobal.com
      // "Sales Enquiry"  "sales@smilaxglobal.com"
      let to = "contact@smilaxglobal.com";
      if (data.subject === "Sales Inquiry") {
        to = "sales@smilaxglobal.com";
      }
      if (data.subject === "General Inquiry") {
        to = "contact@smilaxglobal.com";
      }
      if (data.subject === "Technical Inquiry") {
        to = "support@smilaxglobal.com";
      }
      const response = await axios.post("/api/sendEmail", {
        to, //htoohtoo.maw@smilaxglobal.com
        subject: "Enquiry from Contact Us Form",
        message: JSON.stringify(data),
        template: "contact-us",
      });
      if (response.data) {
        setIsSending(false);
        setAlertMessage("Email has been sent successfully!");
        toast.success("Email has been sent successfully!");
        reset();
      }
    } catch (error) {
      setIsSending(false);
      setAlertMessage("Something went wrong!");
      toast.error("Something went wrong!");
      console.error("Error sending email:", error);
    }
  };


  useEffect(() => {
    setShowMap(true);
    setShowContactBox(true);
  }, []);

  useEffect(() => {
    // Function to update the parentWidth based on the parent container's width
    const updateParentWidth = () => {
      if (recaptchaRef.current) {
        const parentElement = recaptchaRef.current.parentNode;
        if (parentElement) {
          if (parentElement.offsetWidth > 480 && parentElement.offsetWidth < 869) {
            setParentWidth(parentWidth.offsetWidth / 100)
          } else {
            setParentWidth(parentElement.offsetWidth);
          }
        }
      }
    };

    // Call the function when the component mounts
    updateParentWidth();

    // Attach an event listener to update the width when the window resizes
    window.addEventListener("resize", updateParentWidth);

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateParentWidth);
    };
  }, []);

  async function handleCaptchaSubmission() {
    // Server function to verify captcha
    console.log(recaptcha)
    const captcha_value = recaptcha.current.getValue();
    console.log(captcha_value);
    await verifyCaptcha(captcha_value)
      .then((data) => {
        console.log(data);
        if (data.success) {
          setIsRecaptchaVerified(true);
        } else {
          setIsRecaptchaVerified(false);
        }
      })
      .catch(() => setIsRecaptchaVerified(false));
  }
  const handleEmailClick = () => {
    window.location.href = "mailto:contact@smilaxglobal.com";
  };
  return (
    <>
      {/* <Header/> */}
      <div className="mb-12  mt-[86px] sm:mt-[118px] ">
        <div className=" mb-20 px-2 ss:px-2 lg:px-16 text-black ">
          <h1 className="italic rany text-4xl font-semibold sm:text-[50px] xl:text-[80px] text-black contact-us-title">
            Contact Our Team
          </h1>
        </div>
        <div className="map-animation-container">
          <div
            className={`mb-4 mt-10 sm:mt-[37px] border-y-4 border-black map-animation ${showMap ? "show" : ""
              }`}
          >
            <iframe
              className="h-[204px] w-full sm:h-[500px] "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d401.46527367243715!2d96.1547822052693!3d16.806358026600734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ecf56d8d5091%3A0x942bd424a14ee28e!2sSmilax%20Global%20Co.%2C%20Ltd!5e0!3m2!1sen!2smm!4v1695107487591!5m2!1sen!2smm"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="sm:flex  px-4 ">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-0  sm:basis-[60%]">
            <div className="flex flex-row justify-center px-4 sm:basis-[50%] ">
              <div className="basis-[10%] sm:basic-[5%]">
                <Icon className="text-black" icon="tdesign:location" />
              </div>
              <div className="basis-[90%] sm:basic-[95%] text-black">
                <p className="text-xs md:text-[14px] inter">
                  Room:1407, 13th Floor, Yuzana Tower, Corner of Shwe Gon Taing
                  Junction & Kabaraye Pagoda Road, Bahan Township, Yangon,
                  Myanmar.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-2  sm:basis-[50%] ">
              <div className="flex flex-row justify-center px-4">
                <div className="basis-[10%] ">
                  <Icon
                    icon="eva:email-outline"
                    className="text-black cursor-pointer hover:text-red-600"
                    onClick={handleEmailClick}
                  />
                </div>
                <div
                  className="basis-[90%] text-black cursor-pointer hover:text-red-600  "
                  onClick={handleEmailClick}
                >
                  <p className="text-xs  md:text-[14px] inter ">
                    contact@smilaxglobal.com
                  </p>
                </div>
              </div>
              <div className="flex flex-row px-4">
                <div className="basis-[10%] ">
                  <Icon
                    className="text-black cursor-pointer hover:text-red-600"
                    icon="uil:phone"
                    onClick={handlePhoneClick}
                  />
                </div>
                <div className="basis-[90%] text-black flex flex-wrap  ">
                  <p
                    className="text-xs sm:text-[12px] ss:text-[12px] xs:text-[12px] md:text-[12px] inter  hover:text-red-600 cursor-pointer"
                    onClick={handlePhoneClickfirst}
                  >
                    09-771 23 23 23,&nbsp;
                  </p>
                  <p
                    className="text-xs  sm:text-[12px] ss:text-[12px] xs:text-[12px] md:text-[12px]inter  hover:text-red-600 cursor-pointer"
                    onClick={handlePhoneClickSecond}
                  >
                    09-773 27 27 27,&nbsp;
                  </p>
                  <p
                    className="text-xs sm:text-[12px] ss:text-[12px] xs:text-[12px] md:text-[12px] inter  hover:text-red-600 cursor-pointer"
                    onClick={handlePhoneClick}
                  >
                    09-774 17 17 17
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:basis-[40%]"></div>
        </div>
        <div
          className={`  px-4 ss:px-4 mt-[120px] sm:border-2 sm:border-black sm:px-[39px] sm:rounded-tr-3xl sm:rounded-bl-3xl sm:absolute sm:top-[45px]  
            sm:right-[35px] lg:right-[56px] sm:bg-white sm:w-[360px]  md:w-[450px] xl:w-[502px] ${showContactBox ? "show" : ""
            }`}
        >
          <div className="mt-5 sm:mt-[50px] text-black">
            <h1 className="inter italic text-3xl font-semibold text-black	">
              Get in Touch
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <input
              id="name"
              name="name"
              placeholder="Name"
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name", { required: true })}
              className={`placeholder-black focus:placeholder-gray-400 font-medium text-[15px] w-full border-b-2 border-black pb-[15px] mt-2 sm:mt-[25px] outline-none ${errors.name && errors.name.type === "required"
                ? "border-red-600 "
                : ""
                }`}
            />

            <input
              id="email"
              name="email"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              type="email"
              placeholder="Email"
              className={`placeholder-black focus:placeholder-gray-400 font-medium text-[15px] w-full border-b-2 border-black pb-[15px] mt-2 sm:mt-[25px] outline-none ${errors.email ? "border-red-600 " : ""
                }`}
            />

            <input
              id="phone"
              placeholder="Phone"
              aria-invalid={errors.phone ? "true" : "false"}
              {...register("phone", { required: true })}
              className={`placeholder-black focus:placeholder-gray-400 font-medium text-[15px] w-full border-b-2 border-black pb-[15px] mt-2 sm:mt-[25px] border-0 outline-none ${errors.phone && errors.phone.type === "required"
                ? "border-red-600 "
                : ""
                }`}
            />

            {/* {errors.phone && errors.phone.type === "required" && (
                <span role="alert" className="text-red-500">
                  This is required
                </span>
              )} */}

            <select
              id="subject"
              {...register("subject", { required: "Please select a subjects" })}
              placeholder="Subjects"
              className={`text-black placeholder-black focus:placeholder-gray-400 font-medium text-[15px] w-full border-b-2 outline-none border-black
              pb-[15px] mt-2 sm:mt-[25px] ${errors.subject ? "border-red-600 " : ""
                }`}
            >
              <option value="" disabled selected hidden>
                Subjects
              </option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Technical Inquiry">Technical Inquiry</option>
              <option value="Sales Inquiry">Sales Inquiry</option>
            </select>

            <input
              id="message"
              placeholder="Message"
              aria-invalid={errors.message ? "true" : "false"}
              {...register("message", { required: true })}
              className={`placeholder-black focus:placeholder-gray-400 text-gray-600  font-medium text-[15px] w-full border-b-2 border-black pb-[15px] mt-2 sm:mt-[25px] outline-none ${errors.message && errors.message.type === "required"
                ? "border-red-600 "
                : ""
                }`}
            />
            <div className="mt-[23px] sm:my-[28px] g-captcha text-center flex justify-center" ref={recaptchaRef}>
              <ReCAPTCHA
                ref={recaptcha}
                sitekey="6LcYmKIoAAAAAHlXzIvaTxcQiHmufSHURqT8HSts"
                onChange={handleCaptchaSubmission}
                style={{ transform: `scale(${parentWidth / 304})` }}
              />
            </div>
            <div className="flex justify-center mt-[32px] sm:mb-[48px]">
              <FloatingBtn classes={"normal-case flex items-center gap-1 border-2 border-solid border-black hover:bg-black hover:text-white rounded-full px-4 py-2 text-[14px] font-medium text-black"} text={isSending ? "Sending... " : "send to us "} disabled={false} footer={false} contact onClick={(e) => console.log(e)} />
            </div>
          </form>
        </div>
      </div>

      {/* <Footer/> */}
    </>
  );
}
