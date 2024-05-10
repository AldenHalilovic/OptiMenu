import { Box } from "@mui/system";
import React from "react";
import "./footer.css";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <Box>
      <ul className="socialList">
        <li>
          <a className="facebook" href="/" rel="noreferrer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <FaFacebookSquare style={{ paddingTop: "7px" }} />
          </a>
        </li>
        <li>
          <a className="instagram" href="/" rel="noreferrer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <FaInstagram style={{ paddingTop: "7px" }} />
          </a>
        </li>
        <li>
          <a className="linkedin" href="/" rel="noreferrer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <FaLinkedin style={{ paddingTop: "7px" }} />
          </a>
        </li>
      </ul>
    </Box>
  );
};

export default SocialIcons;
