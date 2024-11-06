import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      mail: (e.currentTarget.mail as HTMLInputElement).value,
      subject: (e.currentTarget.subject as HTMLInputElement).value,
      message: (e.currentTarget.message as HTMLTextAreaElement).value,
    };

    try {
      await emailjs.send(
        "service_w7hrwd1",
        "template_vklzcdb",
        {
          from_name: formData.mail,
          subject: formData.subject,
          message: formData.message,
        },
        "fadyraouf231@gmail.com"
      );

      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending email:", error);
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-500 mb-8">Contacts</h2>
      <section className="grid grid-cols-3 gap-5 my-20">
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-2xl">{`Let's Connect`}</h2>
          <p className="text-[#ADB7BE] text-lg mb-4">
            {`I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!`}
          </p>
          <div className="flex gap-4 items-center">
            <a href="https://github.com/FR720" target="_blank">
              <FaGithub className="text-4xl text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/fady-raouf-434a62199/"
              target="_blank"
            >
              <IoLogoLinkedin className="text-5xl text-white" />
            </a>
          </div>
        </div>
        <div className="col-span-2 place-items-end">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-[70%]">
            <label htmlFor="mail" className="text-white text-sm -mb-3">
              Your Email
            </label>
            <input
              required
              id="mail"
              name="mail"
              type="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@gmail.com"
            />
            <label htmlFor="subject" className="text-white text-sm -mb-3">
              Subject
            </label>
            <input
              required
              id="subject"
              name="subject"
              placeholder="Just saying hi!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
            <label htmlFor="message" className="text-white text-sm -mb-3">
              Message
            </label>
            <textarea
              required
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
            <button
              type="submit"
              className="bg-[#a855f7] hover:bg-opacity-90 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
