import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us - QuickKart"}>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 mb-4">
            <img
              src="/images/contactus.jpeg"
              alt="Contact Us"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Contact Info Section */}
          <div className="col-md-6">
            <div className="p-4 border rounded shadow-sm bg-light">
              <h2 className="text-center mb-4 text-primary">Get in Touch</h2>
              <p className="text-muted">
                Have a question or need help with your order? We're available 24/7! Reach out through any of the options below.
              </p>

              <div className="mt-4">
                <p className="fs-5">
                  <BiMailSend className="me-2 text-danger" />
                  <strong>Email:</strong>{" "}
                  <a href="mailto:help@quickkart.com" className="text-decoration-none">
                    help@quickkart.com
                  </a>
                </p>
                <p className="fs-5">
                  <BiPhoneCall className="me-2 text-success" />
                  <strong>Phone:</strong> +012-345-6789
                </p>
                <p className="fs-5">
                  <BiSupport className="me-2 text-warning" />
                  <strong>Support:</strong> 1800-0000-0000{" "}
                  <small className="text-muted">(Toll Free)</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
