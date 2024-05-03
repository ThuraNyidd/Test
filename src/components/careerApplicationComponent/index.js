"use client";
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import FloatingBtn from "../FloatingBtn/FloatingBtn";


export async function verifyCaptcha(captcha_value) {
  try {
    const response = await axios.post(
      "/api/verifyRecaptcha",
      { captcha_value },
      { headers: { "Content-Type": "application/json" } }
    );
    if (response.data.success) {
      return response.data;
    } else {
      throw new Error("Failed Captcha");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Captcha verification failed");
  }
}
export default function CareerApplicationComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const recaptcha = useRef();

  const [isSending, setIsSending] = useState(false);
  const [alertMessage, setAlertMessage] = useState();
  const [statusMessage, setStatusMessage] = useState("");
  const [uploadedFileCount, setUploadedFileCount] = useState(0);
  const [fileName, setFileName] = useState("");
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
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
  const onSubmit = async (data) => {
    if (!isRecaptchaVerified) {
      toast.error("Please complete the reCAPTCHA.");
      return;
    }
    setIsSending(true);

    try {
      const formData = new FormData();
      uploadedFiles.forEach((file) => {
        formData.append("files", file);
      });
      formData.append("message", JSON.stringify(data));
      formData.append("template", "application-form");
      formData.append("to", "htoohtoo.maw@smilaxglobal.com"); //careers@smilaxglobal.com //htoohtoo.maw@smilaxglobal.com
      formData.append("subject", "New Applicant from Career Application Form");
      const response = await axios.post("/api/sendApplicationForm", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data) {
        setUploadedFiles([]);
        setFileName("");
        setUploadedFileCount(0);
        reset();
        toast.success("Applied Successfully");
        setIsSending(false);
      }
    } catch (error) {
      setIsSending(false);
      toast.error("Something went wrong!");
      console.error("Error uploading files:", error);
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    let errorMessage = "";
    let uploadedCount = 0;

    for (let i = 0; i < files.length; i++) {
      if (files.length > 5) {
        errorMessage = `A maximum of 5 files are allowed`;
        break;
      } else {
        uploadedCount++;
      }
    }

    if (errorMessage) {
      toast.error(errorMessage);
    } else {
      toast.success(`Uploaded ${uploadedCount} file(s) successfully!`);
      // Your code for uploading the files to the remote server (e.g. AWS S3)
      setUploadedFileCount(uploadedCount);
    }
    const selectedFiles = event.target.files;
    setUploadedFiles([...uploadedFiles, ...selectedFiles]);
  };

  const handlePhotoFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    } else {
      setFileName("");
    }
    setUploadedFiles([...uploadedFiles, ...e.target.files]);
  };


  return (
    <>
      {/* <Header/> */}
      <div className="px-4 lg:px-16 mt-4 mb-32 text-black ">
        <div className="mt-[86px] sm:mt-[118px]">
          <h1 className="rany text-4xl font-medium lg:text-7xl callcenter-h1 text-black italic">
            Application Form
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-10 flex flex-col lg:flex-row md:flex-row">
              <div className="basis-1/2 px-0 xs:px-10">
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="jobTitle"
                    aria-invalid={errors.job_title ? "true" : "false"}
                    {...register("job_title", { required: true })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.job_title && errors.job_title.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register("name", { required: true })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.name && errors.name.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Phone No <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="phone"
                    aria-invalid={errors.phone ? "true" : "false"}
                    {...register("phone", { required: true })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.phone && errors.phone.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.email && errors.email.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  {/* <input
                    id="gender"
                    className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"
                  /> */}
                  <select
                    id="gender"
                    {...register("gender", {
                      required: "Please select a genders",
                    })}
                    className={`text-black placeholder-black font-medium text-[15px] w-full border-b-2 outline-none border-black
              pb-[15px]  ${errors.gender ? "border-red-600 " : ""}`}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Marital Stauts <span className="text-red-500">*</span>
                  </label>
                  {/* <input
                    id="gender"
                    className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"
                  /> */}
                  <select
                    id="marital Status"
                    {...register("marital_status", {
                      required: "Please select a genders",
                    })}
                    className={`text-black placeholder-black font-medium text-[15px] w-full border-b-2 outline-none border-black
              pb-[15px]  ${errors.marital_status ? "border-red-600 " : ""}`}
                  >
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="DateofBirth"
                    type="date"
                    aria-invalid={errors.date_of_birth ? "true" : "false"}
                    {...register("date_of_birth", { required: true })}
                    className={`  focus:text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.date_of_birth &&
                      errors.date_of_birth.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    NRC No <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="NRC"
                    aria-invalid={errors.nrc_no ? "true" : "false"}
                    {...register("nrc_no", { required: true })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.nrc_no && errors.nrc_no.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Photo{" "}
                    <span className="text-red-500">
                      *{" "}
                      {fileName && (
                        <span className="text-green-500">{fileName}</span>
                      )}
                    </span>
                  </label>
                  <input
                    type="file"
                    onChange={handlePhotoFileChange}
                    id="photo"
                    className="custom-file-input placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"
                  />
                </div>
              </div>
              <div className="basis-1/2 px-0 xs:px-10">
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Passport No
                  </label>
                  <input
                    id="passport"
                    aria-invalid={errors.passport_no ? "true" : "false"}
                    {...register("passport_no", { required: false })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.passport_no &&
                      errors.passport_no.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Nationality<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="nationality"
                    aria-invalid={errors.nationality ? "true" : "false"}
                    {...register("nationality", { required: true })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.nationality &&
                      errors.nationality.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Religion<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="religion"
                    aria-invalid={errors.religion ? "true" : "false"}
                    {...register("religion", { required: true })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.religion && errors.religion.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="address"
                    aria-invalid={errors.address ? "true" : "false"}
                    {...register("address", { required: true })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.address && errors.address.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Expected Salary{" "}
                  </label>
                  <input
                    id="expectedSalary"
                    aria-invalid={errors.expected_salary ? "true" : "false"}
                    {...register("expected_salary", { required: false })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.expected_salary &&
                      errors.expected_salary.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Work Experience
                  </label>
                  <input
                    id="workExp"
                    aria-invalid={errors.work_experience ? "true" : "false"}
                    {...register("work_experience", { required: false })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.work_experience &&
                      errors.work_experience.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Career Objective
                  </label>
                  <input
                    id="CareerObjective"
                    aria-invalid={errors.carrer_objective ? "true" : "false"}
                    {...register("carrer_objective", { required: false })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.carrer_objective &&
                      errors.carrer_objective.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Education
                  </label>
                  <input
                    id="Education"
                    aria-invalid={errors.education ? "true" : "false"}
                    {...register("education", { required: false })}
                    className={`placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none ${errors.education && errors.education.type === "required"
                      ? "border-red-600 "
                      : ""
                      }`}
                  />
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-black required">
                    Attachment ( {uploadedFileCount}/5 )
                  </label>
                  <input
                    type="file"
                    id="file-input"
                    onChange={handleFileChange}
                    multiple
                    className="custom-file-input placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[14px] ml-[-36px] xs:ml-0 ms-1 ss:ms-5 sm:ms-10 sm:mt-[25px] scale-75 ss:scale-90 sm:scale-100">
              {/* <div className="mt-[14px] ms-10 sm:mt-[25px]"> */}
              <ReCAPTCHA
                ref={recaptcha}
                sitekey="6LcYmKIoAAAAAHlXzIvaTxcQiHmufSHURqT8HSts"
                // sitekey="6Leq0CMoAAAAAAo6bK-kUZcL5Fm9Zz9EIPKmYK03"
                onChange={handleCaptchaSubmission}
              />
            </div>
            <div className="flex justify-center mt-[25px] sm:mb-[48px] pb-10">
              <FloatingBtn classes={"normal-case flex items-center gap-1 border-2 border-solid border-black hover:bg-black hover:text-white rounded-full px-4 py-2 text-[14px] font-medium text-black"} text={isSending ? "Sending... " : "Send to us "} disabled={false} footer={false} contact onClick={(e) => console.log(e)} />
              {/* <button
                disabled={isSending}
                className="normal-case text-[14px] font-medium flex items-center gap-1 border-2 border-solid border-black hover:bg-black hover:text-white rounded-full px-4 py-2 text-black"
                type="submit"
              >
                {isSending ? "Sending ..." : "Send to us"}{" "}
                <Icon icon="quill:send" />
              </button> */}
            </div>
          </form>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

// mt-[86px] sm:mt-[118px]
