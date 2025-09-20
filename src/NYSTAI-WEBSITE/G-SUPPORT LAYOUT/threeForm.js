import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaCity,
  FaGlobe,
  FaAddressCard,
  FaCommentAlt,
  FaBox,
} from "react-icons/fa";
import "./support.css";
import "bootstrap/dist/js/bootstrap.js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import Select from "react-select";
import "react-toastify/dist/ReactToastify.css";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import zIndex from "@mui/material/styles/zIndex";
// import { Link } from "react-router-dom";
const HeadingForm = () => {
  const [activeForm, setActiveForm] = useState("Support");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    message: "",
    businessName: "",
    product: "",
    deviceModel: "",
    serialNumber: "",
    firmwareVersion: "",
    softwareVersion: "",
    privacy: false,
    district: "",
    state: "",
    pincode: "",
    gstNumber: "",
    interestedIn: "",
    currentProducts: "",
    additionalInfo: "",
    FormType: activeForm,
  });
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState("");

  const isRequired = activeForm === "Partner" || activeForm === "Sales";

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the field being changed is 'gstNumber' and capitalize it
    const updatedValue = name === "gstNumber" ? value.toUpperCase() : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handlePhoneChange = (phone) => {
    setFormData({
      ...formData,
      phone: String(phone), // Ensure phone is treated as a string
    });
  };

  const handleRecaptcha = (token) => {
    setRecaptchaVerified(!!token);
    setRecaptchaError("");
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, privacy: e.target.checked });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      address: "",
      message: "",
      businessName: "",
      product: "",
      deviceModel: "",
      serialNumber: "",
      firmwareVersion: "",
      softwareVersion: "",
      privacy: false,
      district: "",
      state: "",
      pincode: "",
      gstNumber: "",
      interestedIn: "",
      currentProducts: "",
      additionalInfo: "",
      FormType: activeForm,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaVerified) {
      setRecaptchaError("Please verify you are not a robot.");
      return;
    }
    if (!formData.phone) {
      toast.error("Phone number is required.");
      return;
    }
    const formEle = e.target;
    const formDataObj = new FormData(formEle);
    // Append any additional data to formData
    formDataObj.append("FormType", activeForm); // Sales, Support, or Partner

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwiWqy8jkGQhb2ZP7bQ65cpYDiyMLucp6tj2xzf5zc5DK5dKzpM72dV8tJpO5ccsi6A/exec",
        {
          method: "POST",
          body: formDataObj,
        }
      );

      const result = await response.text();

      toast.success("Form submitted successfully!");
      handleReset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit the form. Please try again.");
    }
    try {
      // Send the form data via EmailJS
      await emailjs.sendForm(
        "service_lyfqebm",
        "template_izyyodh",
        e.target,
        "7LZ7Pyk8u84wlH4qs"
      );

      handleReset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };
  const getPlaceholderText = (field) => {
    if (activeForm === "Partner") {
      if (field === "name") return "Owner Name";
      if (field === "businessName") return "Organization Name";
      if (field === "email") return "Business Email"; // Change placeholder for Partner form
    } else {
      if (field === "name") return "Name";
      if (field === "businessName") return "Business Name";
      if (field === "email") return "Email"; // Default placeholder
    }
    return ""; // Default return if field does not match
  };

  // Render different form fields based on activeForm
  const renderFields = () => {
    const formFields = [];

    if (activeForm === "Partner") {
      formFields.push(
        // <div className="form-group col-lg-6 mb-2" key="district">
        //     <input
        //         type="text"
        //         name="district"
        //         placeholder="District"
        //         value={formData.district}
        //         onChange={handleChange}
        //         required
        //     />
        // </div>

        <div className="form-group col-lg-6 mb-2" key="district">
          <input
            type="text"
            name="district"
            placeholder="District"
            value={formData.district}
            onChange={(e) => {
              const value = e.target.value;

              // Allow only letters and spaces
              const isValid = /^[A-Za-z\s]*$/.test(value);

              if ((value === "" || isValid) && value.length <= 50) {
                setFormData((prev) => ({
                  ...prev,
                  district: value,
                }));
              }
            }}
            minLength={2}
            maxLength={30}
            required
          />
        </div>
      );
      formFields.push(
        // <div className="form-group col-lg-6 mb-2" key="state">
        //     <input
        //         type="text"
        //         name="state"
        //         placeholder="State"
        //         value={formData.state}
        //         onChange={handleChange}
        //         required
        //     />
        // </div>

        <div className="form-group col-lg-6 mb-2" key="state">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={(e) => {
              const value = e.target.value;

              // Only letters and spaces allowed
              const isValid = /^[A-Za-z\s]*$/.test(value);

              if ((value === "" || isValid) && value.length <= 50) {
                setFormData((prev) => ({
                  ...prev,
                  state: value,
                }));
              }
            }}
            minLength={2}
            maxLength={30}
            required
          />
        </div>
      );
      formFields.push(
        // <div className="form-group col-lg-6 mb-2" key="pincode">
        //     <input
        //         type="text"
        //         name="pincode"
        //         placeholder="Pincode"
        //         value={formData.pincode}
        //         onChange={handleChange}
        //         maxLength={6}
        //         required
        //     />
        // </div>

        <div className="form-group col-lg-6 mb-2" key="pincode">
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={(e) => {
              const value = e.target.value;

              // Allow only digits
              const isValid = /^[0-9]*$/.test(value);

              if ((value === "" || isValid) && value.length <= 6) {
                setFormData((prev) => ({
                  ...prev,
                  pincode: value,
                }));
              }
            }}
            minLength={6}
            maxLength={6}
            required
          />
        </div>
      );
      formFields.push(
        // <div className="form-group col-lg-6 mb-2" key="gstNumber">
        //     <input
        //         type="text"
        //         name="gstNumber"
        //         placeholder="GST No"
        //         value={formData.gstNumber}
        //         onChange={(e) => handleChange(e)}
        //         pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z1-9]{1}[Z]{1}[A-Z0-9]{1}$"
        //         maxLength={15}
        //         required
        //     />
        // </div>

        <div className="form-group col-lg-6 mb-2" key="gstNumber">
          <input
            type="text"
            name="gstNumber"
            placeholder="GST No : (e.g., 27ABCDE1234F1Z5)"
            value={formData.gstNumber}
            onChange={(e) => {
              let value = e.target.value.toUpperCase();
              // Remove all non-alphanumeric characters (including spaces & special characters)
              value = value.replace(/[^A-Z0-9]/g, "");

              // Limit to 15 characters
              if (value.length <= 15) {
                setFormData((prev) => ({
                  ...prev,
                  gstNumber: value,
                }));
              }
            }}
            pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
            maxLength={15}
            minLength={15}
            required
            title="Enter valid 15-character GST number (e.g., 27ABCDE1234F1Z5)"
            className="form-control"
          />
        </div>
      );
      formFields.push(
        <div className="form-group col-lg-12 mb-2" key="interestedIn">
          {/* <FaBox className="form-icon" /> */}
          <select
            name="interestedIn"
            value={formData.interestedIn}
            onChange={handleChange}
            required
            style={{ fontSize: "14px" }}
          >
            <option value="" disabled>
              INTERESTED IN
            </option>
            <option value="Product 1">HYBRID AIoT NVR</option>
            <option value="Product 2">INDUSTRIAL AI-NVR</option>
            <option value="Product 3">ALARM & AUTOMATION</option>
            <option value="Product 4">CAMERA</option>
          </select>
        </div>
      );
      formFields.push(
        // <div className="form-group col-lg-6 mb-2" key="currentProducts">
        //     <textarea
        //         name="currentProducts"
        //         placeholder="What products do you currently sell?"
        //         value={formData.currentProducts}
        //         onChange={handleChange}
        //         required
        //         style={{ resize: "none" }}
        //     ></textarea>
        // </div>
        <div className="form-group col-lg-6 mb-2" key="currentProducts">
          <textarea
            name="currentProducts"
            placeholder="What products do you currently sell?"
            value={formData.currentProducts}
            onChange={handleChange}
            required
            minLength={10} // Require meaningful input
            maxLength={300} // Prevent overly long content
            style={{ resize: "none" }}
          ></textarea>
        </div>
      );
      formFields.push(
        // <div className="form-group col-lg-6 mb-2" key="additionalInfo">
        //     <textarea
        //         name="additionalInfo"
        //         placeholder="Additional Information / Questions"
        //         value={formData.additionalInfo}
        //         onChange={handleChange}
        //         required
        //         style={{ resize: "none" }}
        //     ></textarea>
        // </div>
        <div className="form-group col-lg-6 mb-2" key="additionalInfo">
          <textarea
            name="additionalInfo"
            placeholder="Additional Information / Questions"
            value={formData.additionalInfo}
            onChange={handleChange}
            required
            minLength={10}
            maxLength={300}
            style={{ resize: "none" }}
          ></textarea>
        </div>
      );
    }
    if (activeForm === "Support") {
      formFields.push(
        <div className="form-group col-lg-12 mb-2" key="product">
          {/* <FaBox className="form-icon" /> */}
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            style={{ fontSize: "14px" }}
          >
            <option value="" disabled>
              SELECT PRODUCT
            </option>
            <option value="Product 1">HYBRID AIoT NVR</option>
            <option value="Product 2">INDUSTRIAL AI-NVR</option>
            <option value="Product 3">ALARM & AUTOMATION</option>
            <option value="Product 4">CAMERA</option>
          </select>
        </div>
      );
      formFields.push(
        // <div className="form-group col-lg-6 mb-2" key="deviceModel">
        //     <input
        //         type="text"
        //         name="deviceModel"
        //         placeholder="Device Model"
        //         value={formData.deviceModel}
        //         onChange={handleChange}
        //         required
        //     />
        // </div>

        <div className="form-group col-lg-6 mb-2" key="deviceModel">
          <input
            type="text"
            name="deviceModel"
            placeholder="Device Model"
            value={formData.deviceModel}
            onChange={(e) => {
              const value = e.target.value;

              // Allow only alphanumeric characters (letters and numbers)
              const isValid = /^[A-Za-z0-9]*$/.test(value);

              if ((value === "" || isValid) && value.length <= 50) {
                setFormData((prev) => ({
                  ...prev,
                  deviceModel: value,
                }));
              }
            }}
            minLength={2}
            maxLength={50}
            required
          />
        </div>
      );
      formFields.push(
        // <div className="form-group col-lg-6 mb-2" key="serialNumber">
        //     <input
        //         type="text"
        //         name="serialNumber"
        //         placeholder="Serial Number"
        //         value={formData.serialNumber}
        //         onChange={handleChange}
        //         required
        //     />
        // </div>

        <div className="form-group col-lg-6 mb-2" key="serialNumber">
          <input
            type="text"
            name="serialNumber"
            placeholder="Serial Number"
            value={formData.serialNumber}
            onChange={(e) => {
              const value = e.target.value;

              // Allow only digits (0–9)
              const isValid = /^[0-9]*$/.test(value);

              if ((value === "" || isValid) && value.length <= 20) {
                setFormData((prev) => ({
                  ...prev,
                  serialNumber: value,
                }));
              }
            }}
            minLength={5} // Adjust as needed
            maxLength={20} // Adjust as needed
            required
          />
        </div>
      );
      formFields.push(
        <div className="form-group col-lg-6 mb-2" key="firmwareVersion">
          <input
            type="text"
            name="firmwareVersion"
            placeholder="Firmware Version"
            value={formData.firmwareVersion}
            onChange={(e) => {
              let value = e.target.value;

              // Remove all spaces and disallowed characters (only letters, numbers, dots, underscores)
              value = value.replace(/[^a-zA-Z0-9._]/g, "");

              setFormData((prev) => ({
                ...prev,
                firmwareVersion: value,
              }));
            }}
            pattern="^v?\d+([._]\d+)*$"
            title="Use firmware format like v1.0.0 or 1_2_3 (only letters, numbers, . and _ allowed)"
            required
            minLength={2}
            maxLength={20}
          />
        </div>
      );
      formFields.push(
        // <div className="form-group col-lg-6 mb-2" key="softwareVersion">
        //     <input
        //         type="text"
        //         name="softwareVersion"
        //         placeholder="Software Version"
        //         value={formData.softwareVersion}
        //         onChange={handleChange}
        //         required
        //     />
        // </div>

        <div className="form-group col-lg-6 mb-2" key="softwareVersion">
          <input
            type="text"
            name="softwareVersion"
            placeholder="Software Version"
            value={formData.softwareVersion}
            onChange={(e) => {
              const value = e.target.value;

              // Allow only alphanumeric, dot, and dash
              const isValid = /^[A-Za-z0-9.-]*$/.test(value);

              if ((value === "" || isValid) && value.length <= 20) {
                setFormData((prev) => ({
                  ...prev,
                  softwareVersion: value,
                }));
              }
            }}
            minLength={2}
            maxLength={20}
            required
          />
        </div>
      );
    }

    return formFields;
  };

  const renderForm = () => (
    <form className="contact-form " onSubmit={handleSubmit}>
      <div className="mt-4">
        <span style={{ fontSize: "1rem" }}>
          {activeForm === "Sales" &&
            "Fill out the form below for Sales inquiries."}
          {activeForm === "Support" &&
            "Fill out the form below for Support inquiries."}
          {activeForm === "Partner" &&
            "Fill out the form below for Partner inquiries."}
        </span>
      </div>

      <div className="form-row row mt-3 mb-4">
        <div className="form-group col-lg-6 mb-2 phone-input-group">
          <input
            type="text"
            name="name"
            required
            placeholder={getPlaceholderText("name")}
            value={formData.name}
            onChange={(e) => {
              const value = e.target.value;

              // Regex to allow only letters and spaces
              const isValid = /^[A-Za-z\s]*$/.test(value);

              // Apply min/max length check and regex
              if ((value === "" || isValid) && value.length <= 30) {
                setFormData((prev) => ({
                  ...prev,
                  name: value,
                }));
              }
            }}
            minLength={2}
            maxLength={30}
          />
        </div>

        {/* <div className="form-group col-lg-6 mb-2 phone-input-group ">
                    <input
                        type="text"
                        name="businessName"
                        placeholder={getPlaceholderText('businessName')}
                        value={formData.businessName}
                        onChange={handleChange}
                        required={isRequired}
                    />
                </div> */}

        <div className="form-group col-lg-6 mb-2 phone-input-group">
          <input
            type="text"
            name="businessName"
            placeholder={getPlaceholderText("businessName")}
            value={formData.businessName}
            onChange={(e) => {
              const value = e.target.value;

              // Allow only letters and spaces
              const isValid = /^[A-Za-z\s]*$/.test(value);

              // Apply regex + max length condition
              if ((value === "" || isValid) && value.length <= 50) {
                setFormData((prev) => ({
                  ...prev,
                  businessName: value,
                }));
              }
            }}
            minLength={2}
            maxLength={50}
            required={isRequired}
          />
        </div>

        {/* <div className="form-group col-lg-6 mb-2 phone-input-group custom-phone-input">
                    <PhoneInput
                        country={'in'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputProps={{
                            name: 'phone',
                            required: true,
                            placeholder: 'Phone Number',
                        }}
                    />
                </div> */}

        <div className="form-group col-lg-6 mb-2 phone-input-group custom-phone-input">
          <PhoneInput
            country={"in"}
            value={formData.phone}
            onChange={handlePhoneChange}
            // onlyCountries={['in']}
            countryCodeEditable={false} // Prevents user from deleting the country code
            inputProps={{
              name: "phone",
              required: true,
              placeholder: "Phone Number",
            }}
            isValid={(value, country) => {
              // Basic validation for India
              const cleaned = value.replace(/\D/g, ""); // remove non-digit characters
              if (country.countryCode === "in") {
                return cleaned.length === 12; // +91 (2) + 10-digit number
              }
              return value.length > 0;
            }}
          />
        </div>

        {/* <div className="form-group col-lg-6 mb-2">
                    <input
                        type="email"
                        name="email"
                        placeholder={getPlaceholderText('email')}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div> */}

        <div className="form-group col-lg-6 mb-2">
          <input
            type="email"
            name="email"
            placeholder={getPlaceholderText("email")}
            value={formData.email}
            onChange={(e) => {
              let value = e.target.value.toLowerCase();

              // Allow only valid email characters: letters, numbers, @ . _ -
              value = value.replace(/[^a-z0-9@._-]/g, "");

              setFormData((prev) => ({
                ...prev,
                email: value,
              }));
            }}
            required
          />
        </div>

        {/* <div className="form-group col-lg-6 mb-0">
                    <textarea
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        style={{ resize: "none", fontSize: "15px" }}
                    ></textarea>
                </div> */}

        <div className="form-group col-lg-6 mb-0">
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            minLength={10} // Minimum 10 characters
            maxLength={200} // Maximum 200 characters
            style={{ resize: "none", fontSize: "15px" }}
          ></textarea>
        </div>

        {/* <div className="form-group col-lg-6 mb-0">
                    <textarea
                        name="message"
                        placeholder="Let us know how can we help you"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ resize: "none", fontSize: "15px" }}
                    ></textarea>
                </div> */}

        <div className="form-group col-lg-6 mb-0">
          <textarea
            name="message"
            placeholder="Let us know how can we help you"
            value={formData.message}
            onChange={handleChange}
            required
            minLength={10} // Require at least 10 characters
            maxLength={200} // Limit to 500 characters
            style={{ resize: "none", fontSize: "15px" }}
          ></textarea>
        </div>

        {renderFields()}

        {/* <label className="privacy-policy mt-2 p-0">
                    <input
                        type="checkbox"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleCheckboxChange}
                        required
                    />
                    <p>
                        I consent to receive emails about news, marketing & product
                        updates from Adhiba Technologies Private Limited
                    </p>
                </label> */}

        <div className="captcha-row">
          <ReCAPTCHA
            sitekey="6Lc7niYqAAAAAPxGa2UC1tP2dUv4I9cdMXLgMgMd"
            onChange={handleRecaptcha}
          />
          {recaptchaError && (
            <div className="recaptcha-error">{recaptchaError}</div>
          )}
          <div className="d-flex pt-4">
            <button
              type="button"
              className="button-reset"
              onClick={handleReset}
            >
              Reset
            </button>
            <button type="submit" className="button-submit ms-3">
              Submit
            </button>
          </div>
        </div>
        <input type="hidden" name="FormType" value={activeForm} />
      </div>
    </form>
  );

  return (
    <div className="">
      {/* <div className="card-form-click row">
                <div className="col-lg-4 col-12 mt-2">
                    <a onClick={() => setActiveForm("Sales")} className={activeForm === "Sales" ? "active" : ""}>
                        <div class="darksoul-card1">
                            <div class="circle1"></div>
                            <FontAwesomeIcon icon={faMobile} className="card-click-icon" />
                            <h2 class="content">SALES</h2>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-12 mt-2">
                    <a onClick={() => setActiveForm("Support")} className={activeForm === "Support" ? "active" : ""}>
                        <div class="darksoul-card1">
                            <div class="circle1"></div>
                            <FontAwesomeIcon icon={faMobile} className="card-click-icon" />
                            <h2 class="content">SUPPORT</h2>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-12 mt-2">
                    <a onClick={() => setActiveForm("Partner")} className={activeForm === "Partner" ? "active" : ""}>
                        <div class="darksoul-card1">
                            <div class="circle1"></div>
                            <FontAwesomeIcon icon={faMobile} className="card-click-icon" />
                            <h2 class="content">PARTNER</h2>
                        </div>
                    </a>
                </div>

            </div> */}

      <div className="card-wrapper card-deck-custom row mt-4">
        <div
          className="col-lg-4 col-md-6 col-sm-6"
          style={{ padding: "3px", cursor: "pointer" }}
        >
          <div
            className={`card ${activeForm === "Sales" ? "active" : ""}`}
            onClick={() => setActiveForm("Sales")}
          >
            <div className="card-body">
              <h4 className="card-title mb-0">SALES</h4>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6 col-sm-6"
          style={{ padding: "3px", cursor: "pointer" }}
        >
          <div
            className={`card ${activeForm === "Support" ? "active" : ""}`}
            onClick={() => setActiveForm("Support")}
          >
            <div className="card-body">
              <h4 className="card-title mb-0">SUPPORT</h4>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6 col-sm-6"
          style={{ padding: "3px", cursor: "pointer" }}
        >
          <div
            className={`card ${activeForm === "Partner" ? "active" : ""}`}
            onClick={() => setActiveForm("Partner")}
          >
            <div className="card-body">
              <h4 className="card-title mb-0">PARTNER</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">{renderForm()}</div>
      <ToastContainer />
    </div>
  );
};

export default HeadingForm;
