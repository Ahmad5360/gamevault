import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // replace with your form submission logic
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };
  return (
    <div
      className="container"
      style={{ minHeight: "calc(100vh - 150px)", marginBottom: "60px" }}
    >
      <div className="row">
        <div className="col-md-12">
          <div className="title">
            <h3 style={{ color: "#fff" }}>Contact</h3>
            <hr
              style={{ color: "#fff", border: "3px solid white", width: "20%" }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="post_content">
            <div className="post">
              <section className="my-4">
                <div className="wrapper">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="contact-wrap" style={{ color: "#fff" }}>
                        <h3 className="mb-4 text-center">Send us a Message</h3>
                        {/* <div id="form-message-warning" className="mb-4"></div> */}
                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  id="name"
                                  placeholder="Name"
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  value={FormData.subject}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  name="message"
                                  className="form-control"
                                  id="message"
                                  cols="22"
                                  rows="6"
                                  placeholder="Message"
                                  value={formData.message}
                                  onChange={handleInputChange}
                                  required
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="submit"
                                  value="Send Message"
                                  className="btn btn-primary"
                                />
                                <div className="submitting"></div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {showAlert && (
          <div className="alert" role="alert">
            <h4 className="alert-heading">Submitted!</h4>
            <p>We'll reply you soon on your email.</p>
            <hr />
          </div>
        )}
      </div>
    </div>
  );
}
