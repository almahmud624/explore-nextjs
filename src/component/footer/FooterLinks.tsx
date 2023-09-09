import Link from "next/link";
import React from "react";

const linksHeadings = [
  {
    heading: "about",
    links: [
      { id: 1, title: "my story", url: "/" },
      { id: 2, title: "blog", url: "/" },
    ],
  },
  {
    heading: "help",
    links: [
      { id: 1, title: "contact", url: "/" },
      { id: 2, title: "blog", url: "/" },
    ],
  },
];
const FooterLinks = () => {
  return (
    <div className="flex justify-end gap-10">
      {linksHeadings?.map(({ heading, links }) => (
        <div className="space-y-3">
          <h3
            key={heading}
            className="border-b border-gray-600 px-5 pb-1 text-xl capitalize"
          >
            {heading}
          </h3>
          <div className="flex flex-col">
            {links?.map((link) => (
              <Link key={link?.id} href={link?.url} className="capitalize">
                {link?.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
