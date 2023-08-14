"use client";

const Contact = () => {

  return (
    <>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
            <form name="contact" action="/" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <p>
                <label htmlFor="yourname">
                  Your Name:
                </label> <br />
                <input type="text" name="name" id="yourname" />
              </p>
              <p>
                <label htmlFor="youremail">
                  Your Email:
                </label> <br />
                <input type="email" name="email" id="youremail" />
              </p>
              <p>
                <label htmlFor="yourmessage">
                  Message:
                </label> <br />
                <textarea name="message" id="yourmessage"></textarea>
              </p>
              <br />
              <p>
                <button type="submit" className="bg-dark text-white px-4 py-2">Send</button>
              </p>
            </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
