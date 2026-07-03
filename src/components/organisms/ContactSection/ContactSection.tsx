import { useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { useEmailForm, MESSAGE_MAX } from '@/hooks';
import styles from './ContactSection.module.css';

export function ContactSection() {
  const { lang } = useLang();
  const t = translations[lang].contact;
  const { name, setName, email, setEmail, message, setMessage, honeypot, setHoneypot, sendEmailAsync, isLoading, error, success } = useEmailForm();
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendEmailAsync();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('nisle.morales@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>

        {/* Email + LinkedIn */}
        <div className={styles.contactRow}>
          <button className={styles.contactBtn} onClick={copyEmail}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            {copied ? '✓ Copied!' : 'nisle.morales@gmail.com'}
          </button>
          <a
            href="https://www.linkedin.com/in/nisleida"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinBtn}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>

        {/* Divider */}
        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerText}>{t.orMessage}</span>
          <span className={styles.dividerLine} />
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>{t.name}</label>
              <input
                className={styles.input}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nisleida"
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>{t.email}</label>
              <input
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@example.com"
                required
              />
            </div>
          </div>

          {/* Honeypot — hidden from real users, bots fill it */}
          <input
            type="text"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className={styles.field}>
            <label className={styles.label}>{t.message}</label>
            <textarea
              className={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="..."
              rows={5}
              required
              maxLength={MESSAGE_MAX}
            />
            <span className={styles.charCount} style={{ color: message.length > MESSAGE_MAX * 0.9 ? '#f87171' : '#94a3b8' }}>
              {message.length} / {MESSAGE_MAX}
            </span>
          </div>

          {error && <p className={styles.errorMsg}>{t.error}</p>}
          {success && <p className={styles.successMsg}>{t.success}</p>}

          <div className={styles.actions}>
            <button type="submit" className={styles.btn} disabled={isLoading}>
              {isLoading ? '...' : `${t.send} →`}
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
