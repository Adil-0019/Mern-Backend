import React from "react";
import Layout from "./../components/Layout/Layout";
import { FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <Layout title="About Us - Ecommerce App">
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/images/about.jpeg"
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6">
            <h2 className="mb-4 text-primary">Who We Are</h2>
            <p className="text-muted">
              At <strong>QuickKart</strong>, we’re more than just an ecommerce platform. We're a team of passionate innovators committed to redefining your shopping experience. From tech gadgets to everyday essentials, we make sure your needs are delivered with speed, security, and style.
            </p>

            <div className="mt-4">
              <h5><FaUsers className="me-2 text-success" /> Our Team</h5>
              <p>
                A collective of experienced developers, designers, and marketers united by one goal: simplifying ecommerce for everyone.
              </p>

              <h5><FaLightbulb className="me-2 text-warning" /> Our Mission</h5>
              <p>
                To empower customers by providing seamless, secure, and satisfying online shopping experiences.
              </p>

              <h5><FaRocket className="me-2 text-danger" /> Our Vision</h5>
              <p>
                Becoming the go-to platform for smart shopping, powered by innovation and customer trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
