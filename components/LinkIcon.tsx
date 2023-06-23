import { BsGithub, BsTwitter } from "react-icons/bs";
import { IoMailOpen } from "react-icons/io5";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

interface props {
  icon: string;
}

export default function LinkIcon(props: props) {
  if (props.icon === "github") {
    return <BsGithub size="20px" />;
  }
  if (props.icon === "linkedin") {
    return <ImLinkedin size="18px" />;
  }
  if (props.icon === "twitter") {
    return <BsTwitter size="17px" />;
  }
  if (props.icon === "instagram") {
    return <FaInstagram size="18px" />;
  }
  if (props.icon === "mail") {
    return <IoMailOpen size="20px" />;
  }
}
