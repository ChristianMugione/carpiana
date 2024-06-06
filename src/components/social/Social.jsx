import { BsFacebook, BsLinkedin, BsTwitterX } from "react-icons/bs";
import "./Social.css";

export const Social = () => {
  return (
    <ul className="social">
      <li><BsTwitterX/></li>
      <li><BsLinkedin/></li>
      <li><BsFacebook/></li>
    </ul>
  );
};
