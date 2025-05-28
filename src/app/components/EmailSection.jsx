"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Iconos sociales
import GithubIcon from "../../../public/github-icon.svg";
import SteamIcon from "../../../public/steam-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import PaypalIcon from "../../../public/paypal-icon.svg";
import TwitchIcon from "../../../public/twitch-icon.svg";
import TwitterIcon from "../../../public/twitter-icon.svg";

const EmailSection = () => {
  return (
    <section
      id="socials"
      className="py-24 px-6 xl:px-16 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-white mb-8">Mis Redes</h3>
        <p className="text-gray-400 text-lg mb-10">
          Puedes encontrarme y seguirme en las siguientes plataformas:
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <SocialLink href="https://github.com/SebSRVV" icon={GithubIcon} alt="GitHub" />
          <SocialLink href="https://steamcommunity.com/id/SebRVV" icon={SteamIcon} alt="Steam" />
          <SocialLink href="https://www.instagram.com/sebrvv/" icon={InstagramIcon} alt="Instagram" />
          <SocialLink href="https://paypal.me/sebrvv" icon={PaypalIcon} alt="PayPal" />
          <SocialLink href="https://www.twitch.tv/s3brvv" icon={TwitchIcon} alt="Twitch" />
          <SocialLink href="https://x.com/TVSebRVV" icon={TwitterIcon} alt="Twitter" />
        </div>
      </div>
    </section>
  );
};

// Icono social animado
const SocialLink = ({ href, icon, alt }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={alt}
    className="transition-transform hover:scale-110 duration-300"
  >
    <Image src={icon} alt={alt} className="w-10 h-10" />
  </Link>
);

export default EmailSection;
