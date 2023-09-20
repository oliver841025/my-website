'use client';
import { gsap } from 'gsap';
import classes from './footer.module.scss';
import { useEffect, useRef } from 'react';

export default function Footer() {
  const emailRef = useRef(null);

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
      <div className={classes.whole_wrapper}>
        <button className={classes.copy_email_btn}>
          <p ref={emailRef} className={classes.copy_email_content}>
            (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞
            Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to
            copy my email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my
            email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my email
            (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞
            Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to
            copy my email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my
            email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my email
            (☞ﾟヮﾟ)☞ Click to copy my email (☞ﾟヮﾟ)☞ Click to copy my email
          </p>
        </button>
      </div>
    </>
  );
}
