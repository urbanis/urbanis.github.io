import { useRef, useState, useEffect } from 'react';
import { useInView } from 'motion/react';
import styles from './TypewriterHeading.module.css';

interface TypewriterHeadingProps {
  title: string;
  subtitle: string;
  titleColor?: string;
  subtitleColor?: string;
  animateSubtitle?: boolean;
}

function useTypewriter(text: string, speed: number, trigger: boolean, startDelay = 0) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!trigger) {
      setDisplayed('');
      setDone(false);
      return;
    }
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [trigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return { displayed, done };
}

export function TypewriterHeading({ title, subtitle, titleColor, subtitleColor, animateSubtitle = true }: TypewriterHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const { displayed: titleText, done: titleDone } = useTypewriter(title, 48, isInView, 0);
  const { displayed: subtitleText, done: subtitleDone } = useTypewriter(subtitle, 22, animateSubtitle ? titleDone : false, 120);

  return (
    <div ref={ref} className={styles.wrapper}>
      <h2 className={styles.title} style={titleColor ? { color: titleColor } : undefined}>
        {titleText}
        {!titleDone && <span className={styles.cursor} />}
      </h2>
      <p className={styles.subtitle} style={subtitleColor ? { color: subtitleColor } : undefined}>
        {animateSubtitle ? subtitleText : subtitle}
        {animateSubtitle && titleDone && !subtitleDone && <span className={styles.cursor} />}
      </p>
    </div>
  );
}
