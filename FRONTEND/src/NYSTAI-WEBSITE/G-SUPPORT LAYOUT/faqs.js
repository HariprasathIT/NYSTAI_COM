import React, { useEffect } from "react";
import "./support.css";
import Footerproduct from "../A-LAYOUT/footer";

export default function Faqs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="text-center mt-5">
        <h3>Frequently Asked Questions</h3>
      </div>

      <div
        class="container accordion mb-5 accordion-nys-faq accordion-flush"
        id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <p
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What is Nystai?
            </p>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              {" "}
              Nystai is a brand of Adhiba technologies that provides AI-powered
              security systems, IoT automation solutions, and smart surveillance
              technology for homes and businesses.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <p
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              What products does Nystai offer?
            </p>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              {" "}
              Nystai offers security cameras, network video recorders (NVRs),
              alarm systems, video intercoms, access control panels, and AI-IoT
              smart devices.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <p
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              How does Nystai’s AI-powered security system work?
            </p>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Nystai’s AI technology enables real-time video analysis, motion
              detection, facial recognition, and smart notifications for
              enhanced security.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading4">
            <p
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse4"
              aria-expanded="false"
              aria-controls="flush-collapse4"
            >
              Does Nystai have a mobile app?
            </p>
          </h2>
          <div
            id="flush-collapse4"
            class="accordion-collapse collapse"
            aria-labelledby="flush-heading4"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              {" "}
              Yes, Nystai offers a mobile app for both Android and iOS that
              allows users to monitor live HD video, receive instant alerts, and
              communicate through two-way talk.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading5">
            <p
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse5"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Is Nystai compatible with other smart home devices?
            </p>
          </h2>
          <div
            id="flush-collapse5"
            class="accordion-collapse collapse"
            aria-labelledby="flush-heading5"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              {" "}
              Yes, Nystai’s AI-IoT smart devices integrate with other smart home
              systems for seamless automation and control.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading6">
            <p
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse6"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Can I access my Nystai security system remotely?
            </p>
          </h2>
          <div
            id="flush-collapse6"
            class="accordion-collapse collapse"
            aria-labelledby="flush-heading6"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              {" "}
              Yes, users can remotely access and control their security system
              through the Nystai mobile app or web portal.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading7">
            <p
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse7"
              aria-expanded="false"
              aria-controls="flush-collapse7"
            >
              What happens if my internet goes down?
            </p>
          </h2>
          <div
            id="flush-collapse7"
            class="accordion-collapse collapse"
            aria-labelledby="flush-heading7"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              {" "}
              Nystai’s security systems can continue recording locally on NVRs
              or SD cards, and once the internet is restored, cloud features
              will resume.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading8">
            <p
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse8"
              aria-expanded="false"
              aria-controls="flush-collapse7"
            >
              Does Nystai provide cloud storage for video recordings?
            </p>
          </h2>
          <div
            id="flush-collapse8"
            class="accordion-collapse collapse"
            aria-labelledby="flush-heading8"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              {" "}
              Yes, Nystai offers cloud storage options for users who want secure
              access to recorded footage from anywhere.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading9">
            <p
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse9"
              aria-expanded="false"
              aria-controls="flush-collapse7"
            >
              Is there a subscription fee for using Nystai services?
            </p>
          </h2>
          <div
            id="flush-collapse9"
            class="accordion-collapse collapse"
            aria-labelledby="flush-heading9"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              {" "}
              Some features, such as cloud storage and advanced AI analytics,
              may require a subscription, while basic monitoring and control are
              typically free.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading10">
            <p
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse10"
              aria-expanded="false"
              aria-controls="flush-collapse7"
            >
              Where can I buy Nystai products?
            </p>
          </h2>
          <div
            id="flush-collapse10"
            class="accordion-collapse collapse"
            aria-labelledby="flush-heading10"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              {" "}
              Nystai products are available on their official website
              (nystai.in), as well as through authorized retailers and online
              marketplaces.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
