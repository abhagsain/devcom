import React from "react";
import Link from "next/link";

function Footer(props) {
  return (
    <div className="bg-background py-4">
      <div className="container flex">
        <div>
          <Link href="/">
            <a>
              <img src={props.logo} alt="Logo"></img>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a>About</a>
          </Link>

          <Link href="/faq">
            <a>FAQ</a>
          </Link>

          <Link href="/contact">
            <a>Contact</a>
          </Link>

          <a
            target="_blank"
            href="https://medium.com"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
