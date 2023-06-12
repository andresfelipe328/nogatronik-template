import React from "react";

import { AiFillInstagram, AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const FOLLOWLINKS = [
  {
    icon: AiFillInstagram,
  },
  {
    icon: AiFillFacebook,
  },
  {
    icon: AiFillYoutube,
  },
];

const MainFooter = () => {
  return (
    <footer className="flex justify-around flex-wrap gap-5 p-10 border-t-2 border-t-light">
      <div className="flex flex-col gap-4">
        <h2 className="text-extra">Have something to say</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="subject" />
          <input type="text" placeholder="mail" />
          <input type="text" placeholder="phone" />
        </div>
        <textarea
          placeholder="message"
          rows={8}
          cols={50}
          className="resize-none"
        />
      </div>

      <div className="flex flex-col justify-between">
        <h2 className="text-extra">Support</h2>

        <div className="flex flex-col gap-4 ">
          <h2 className="text-extra">Follow Us</h2>
          <ul className="flex gap-5">
            {FOLLOWLINKS.map((item, index) => (
              <li key={index}>
                <item.icon className="text-light text-3xl hover:text-extra hover:scale-110 transition-all duration-300 ease-in-out" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
