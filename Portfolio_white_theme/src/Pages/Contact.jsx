import React, { useState } from "react";
import emailjs from "emailjs-com";
import { IoSend } from "react-icons/io5";
import ContactOptions from "../Component/ContactOptions";
import "../Styles/contact.css";

function Contact() {
  const [vname, setVname] = useState("");
  const [vemail, setVemail] = useState("");
  const [vsubject, setVsubject] = useState("");
  const [vdesc, setVdesc] = useState("");
  const [showError, setShowError] = useState(false);

  const setName = (event) => {
    setVname(event.target.value);
  };

  const setEmail = (event) => {
    setVemail(event.target.value);
  };

  const setSubject = (event) => {
    setVsubject(event.target.value);
  };

  const setDesc = (event) => {
    setVdesc(event.target.value);
  };

  const sendMessage = () => {
    if (!vname || !vemail || !vsubject || !vdesc) {
      setShowError(true);
      return;
    }

    const templateParams = {
      from_name: vname,
      from_email: vemail,
      subject: vsubject,
      message: vdesc,
    };

    emailjs
      .send(
        "service_uefkxbo",
        "template_kfpfgcl",
        templateParams,
        "cluCFKUy54a97GA_4"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload(true);
        },
        (error) => {
          console.log(error.text);
          setShowError(true);
        }
      );
  };

  return (
    <div className="dp contact df" style={{ flexDirection: "column" }}>
      <div className="f4 df text-shadow">CONTACT ME</div>
      <div className="boxc">
        <div className="contact-form">
          <div className="fields dfc">
            <div className="username">
              <input
                type="text"
                className="user-input"
                placeholder="Your name"
                onChange={setName}
              />
            </div>
            <div className="password">
              <input
                type="email"
                className="user-input"
                placeholder="Your email"
                onChange={setEmail}
              />
            </div>
            <div className="username">
              <input
                type="text"
                className="user-input"
                placeholder="subject"
                onChange={setSubject}
              />
            </div>
            <div className="text-area">
              <textarea
                className="user-input"
                placeholder="Your message"
                onChange={setDesc}
              />
            </div>
            <div className="submitBtn">
              <ContactOptions />
              <div
                className="neu-btn submit-btn"
                style={{
                  width: "10vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={sendMessage}
              >
                Send Now{" "}
                <IoSend
                  style={{
                    marginLeft: "8px",
                    transform: "rotate(-25deg)",
                    position: "relative",
                    bottom: "1px",
                  }}
                />
              </div>
            </div>
            {showError && (
              <div
                style={{ color: "red", fontSize: "0.5em", marginTop: "2vh" }}
              >
                *Please fill in all fields
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
