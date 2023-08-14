"use client";
import { useState } from "react";

const Contact = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                  <label>
                    Name <input type="text" name="name" />
                  </label>
                </p>
                <p>
                  <label>
                    Email <input type="email" name="email" />
                  </label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </div>
            h
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
