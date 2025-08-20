import React from "react";
import Layout from "./../components/Layout/Layout";
import { FaShieldAlt, FaUserSecret, FaLock } from "react-icons/fa";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/images/contactus.jpeg"
              alt="Privacy Policy"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Policy Content */}
          <div className="col-md-6">
            <h2 className="mb-4 text-primary">Our Privacy Commitment</h2>

            <div className="mb-4">
              <h5><FaShieldAlt className="text-success me-2" />Data Protection</h5>
              <p>
                We prioritize your data privacy. All information collected is encrypted and securely stored.
              </p>
            </div>

            <div className="mb-4">
              <h5><FaUserSecret className="text-danger me-2" />Information Usage</h5>
              <p>
                Your personal details will never be sold or shared without consent. We only use them to enhance your experience.
              </p>
            </div>

            <div className="mb-4">
              <h5><FaLock className="text-warning me-2" />Your Rights</h5>
              <p>
                You have full control over your data. You can request access, updates, or deletion of your information at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
