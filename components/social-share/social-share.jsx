import React from "react";

import { ButtonsContainer, Button } from "./social-share.style";

const SocialShare = ({ slug }) => {
  const link = `https://www.workcations.in/blog/${slug}`;

  const fbLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    link
  )}`;

  const waLink = `whatsapp://send?text=${encodeURI(
    "Hey Check Out This Amazing Blog by Workcations: \n\n" + link
  )}`;

  const twLink = `https://twitter.com/intent/tweet?text=${encodeURI(
    "Hey Check Out this Amazing Blog by Workcations \n\n" + link
  )}`;

  const liLink = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;

  const emLink = `mailto:?subject=${encodeURI("Amazing Blog")}&body=${encodeURI(
    "Hey! Check Out this amazing blog by Workcations: \n\n" + link
  )}`;

  return (
    <ButtonsContainer>
      <span>Share it on</span>
      <Button
        color="#3b5998"
        rel="noopener noreferrer"
        target="_blank"
        href={fbLink}
      >
        <img src="/social-share/facebook.svg" alt="Share to facebook" />
      </Button>
      <Button
        color="#25D366"
        rel="noopener noreferrer"
        target="_blank"
        href={waLink}
      >
        <img src="/social-share/whatsapp.svg" alt="Share on whatsapp" />
      </Button>
      <Button
        color="#1DA1F2"
        rel="noopener noreferrer"
        target="_blank"
        href={twLink}
      >
        <img src="/social-share/twitter.svg" alt="Tweet" />
      </Button>
      <Button
        color="#0072b1"
        rel="noopener noreferrer"
        target="_blank"
        href={liLink}
      >
        <img src="/social-share/linkedin.svg" alt="Share on Linkedin" />
      </Button>
      <Button rel="noopener noreferrer" target="_blank" href={emLink}>
        <img src="/social-share/email.svg" alt="Share using email" />
      </Button>
    </ButtonsContainer>
  );
};

export default SocialShare;
