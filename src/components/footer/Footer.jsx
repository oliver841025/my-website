'use client';
import { gsap } from 'gsap';
import classes from './footer.module.scss';
import { useEffect, useRef, useState } from 'react';
import { emailToCopy, defaultCopyString, successfullyCopyString } from '../../../src/constants/footer';

export default function Footer() {
  const emailRef = useRef(null);
  const [buttonText, setButtonText] = useState(defaultCopyString);

  const copyToClipBoard = () => {
    navigator.clipboard
      .writeText(emailToCopy)
      .then(() => {
        setButtonText(successfullyCopyString);

        setTimeout(() => {
          setButtonText(defaultCopyString);
        }, 3000);
      })
      .catch((err) => {
        alert('Copy Failed!');
      });
  };

  useEffect(() => {
    const email = emailRef.current;
    const animation = gsap.to(email, {
      x: -email.clientWidth,
      duration: 30,
      repeat: -1,
      ease: 'none',
      repeatDelay: 0,
    });

    return () => {
      // 動畫清除
      animation.kill();
    };
  }, []);

  return (
    <>
      <div className={classes.whole_wrapper} onClick={copyToClipBoard}>
        <button className={classes.copy_email_btn}>
          <p ref={emailRef} className={classes.copy_email_content}>
            {buttonText}
          </p>
        </button>
      </div>
    </>
  );
}
