"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import SteamIcon from "../../../public/steam-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import PaypalIcon from "../../../public/paypal-icon.svg";
import TwitchIcon from "../../../public/twitch-icon.svg";
import TwitterIcon from "../../../public/twitter-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Mensaje enviado.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="socials"
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Socials</h5>
        <div className="flex gap-2">
          <Link href="https://github.com/SebSRVV">
            <Image src={GithubIcon} alt="Github Icon" className="text-white" />
          </Link>
          <Link href="https://steamcommunity.com/id/SebRVV">
            <Image src={SteamIcon} alt="Steam Icon" className="text-white" />
          </Link>
          <Link href="https://www.instagram.com/sebrvv/">
            <Image src={InstagramIcon} alt="Instagram Icon" className="text-white" />
          </Link>
          <Link href="https://paypal.me/sebrvv">
            <Image src={PaypalIcon} alt="PayPal Icon" className="text-white" />
          </Link>
          <Link href="https://www.twitch.tv/s3brvv">
            <Image src={TwitchIcon} alt="Twitch Icon" className="text-white" />
          </Link>
          <Link href="https://x.com/TVSebRVV">
            <Image src={TwitterIcon} alt="Twitter Icon" className="text-white" />
          </Link>
        </div>
      </div>

      <div>
      <section
      id="contact"
      className="grid md:grid-cols-2 my-0 py-0 gap-4 relative"
    ></section>
        <h5 className="text-xl font-bold text-white my-2">Contact</h5>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            ¡El email fue enviado correctamente!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Tu email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="sofia@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Asunto
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Titulo"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Contenido..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 hover:bg-gradient-to-l text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Enviar Mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
