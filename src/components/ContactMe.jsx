import React from "react";

const ContactMe = () => {
  return (
    <div className="grid md:grid-cols-2 gap-16 my-24">
      <div className="md:p-24 font-bold">
        <h2 className="text-3xl">Contact Me</h2>
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-2xl font-bold">Phone</h4>
            <p>+8801758777516</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">Email</h4>
            <p>ashikfaysal.rc@gmail.com</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">Location</h4>
            <p>Rajshahi, Bangladesh</p>
          </div>
        </div>
      </div>
      <div className="md:p-24 flex flex-col gap-6">
        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <input
          className="textarea w-full max-w-xs h-48 textarea-primary block"
          placeholder="Your Message"
        />
        <button className="my-4 w-full max-w-xs bg-gradient-to-r from-base-100 to-blue-500 hover:from-pink-500 hover:to-yellow-500 btn">
          Sen Message
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
