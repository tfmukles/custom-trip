"use client";

const Contact = async () => {
  return (
    <>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              <form name="contact" data-netlify="true" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <div className="mb-6">
                  <input
                    id="name"
                    name="user[name]"
                    className="form-input"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <input
                    name="user[email]"
                    className="form-input"
                    placeholder="john.doe@email.com"
                    type="email"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    id="message"
                    name="message"
                    className="form-input"
                    placeholder="Message goes here..."
                    rows={8}
                  ></textarea>
                  <input
                    type="text"
                    value={"hdfkadkfjklasa"}
                    name="locaction[country]"
                  />
                  <input type="hidden" name="hidden" value={"test"} />
                  <input type="string" name="string" value={"string"} />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
