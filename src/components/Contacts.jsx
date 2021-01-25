import React from "react";
import "../styles/contacts.css";
import ContactForm from "./ContactForm";
import Social from "./common/Social";
import socialMedia from "./common/templates/socialMedia";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="row">
          <div className="icons col-sm-1">
            {socialMedia.map((createSocialMedia) => {
              return (
                <Social
                  key={createSocialMedia.id}
                  icon={createSocialMedia.icon}
                  url={createSocialMedia.url}
                />
              );
            })}
          </div>
          <div className="col-sm-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
