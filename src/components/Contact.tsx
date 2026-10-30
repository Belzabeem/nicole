'use client';

import { useState } from 'react';
import { brief, site, socials } from '@/data/site';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { ArrowRight, ArrowUpRight, Check, Copy } from './Icons';
import styles from './Contact.module.css';

export default function Contact() {
  const [scopes, setScopes] = useState<string[]>([]);
  const [from, setFrom] = useState('');
  const [org, setOrg] = useState('');
  const [details, setDetails] = useState('');
  const [copied, setCopied] = useState(false);

  const toggle = (scope: string) =>
    setScopes((cur) => (cur.includes(scope) ? cur.filter((s) => s !== scope) : [...cur, scope]));

  const subject = scopes.length ? `Enquiry: ${scopes.join(', ')}` : 'Booking enquiry';
  const body = [
    `Hi Nicole,`,
    ``,
    `${org ? `We’re ${org}` : 'I’m reaching out'} and would love to work with you.`,
    ``,
    scopes.length ? `What we need:\n${scopes.map((s) => `• ${s}`).join('\n')}` : '',
    details ? `\nProject details:\n${details}` : '',
    ``,
    `Timeline / date: `,
    `Budget range: `,
    ``,
    `Thanks,`,
    from,
  ]
    .filter((line, i, arr) => !(line === '' && arr[i - 1] === ''))
    .join('\n');

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard unavailable, the address is still visible and selectable */
    }
  };

  return (
    <section id="contact" className="section tone-dark" aria-labelledby="contact-title">
      <div className="container">
        <SectionHead
          id="contact-title"
          index="07"
          label="Contact"
          title={
            <>
              Let’s build your <em>next launch.</em>
            </>
          }
          lede="Whether it is a national product launch, a credible hardware reviewer or an authoritative voice on stage. I'm open to select brand partnerships and keynote engagements."
        />

        <div className={styles.grid}>
          <Reveal className={styles.left}>
            <div className={styles.emailBox}>
              <div>
                <p className={styles.smallLabel}>Direct email</p>
                <a href={`mailto:${site.email}`} className={styles.email}>
                  {site.email}
                </a>
              </div>
              <button type="button" className={styles.copyBtn} onClick={copyEmail} aria-live="polite">
                {copied ? <Check /> : <Copy />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <ul className={styles.socials}>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={styles.social}>
                    <span>
                      <strong>{s.label}</strong>
                      <small>
                        {s.handle} · {s.stat}
                      </small>
                    </span>
                    <ArrowUpRight size={16} className={styles.socialArrow} />
                  </a>
                </li>
              ))}
            </ul>

            <dl className={styles.facts}>
              {brief.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12} className={styles.card}>
            <div className={styles.cardHead}>
              <p className={styles.cardTitle}>Start a brief</p>
              <p className={styles.cardSub}>Choose what you need. This opens a ready-to-send email.</p>
            </div>

            <fieldset className={styles.fieldset}>
              <legend className="sr-only">What do you need?</legend>
              <div className={styles.chips}>
                {brief.scopes.map((s) => {
                  const on = scopes.includes(s);
                  return (
                    <button key={s} type="button" className={`${styles.chip} ${on ? styles.chipOn : ''}`} aria-pressed={on} onClick={() => toggle(s)}>
                      {on ? <Check size={13} /> : <span className={styles.chipPlus} aria-hidden="true">+</span>}
                      {s}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className={styles.fields}>
              <label className={styles.field}>
                <span>Your name</span>
                <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} autoComplete="name" placeholder="Jane Doe" />
              </label>
              <label className={styles.field}>
                <span>Company / agency</span>
                <input type="text" value={org} onChange={(e) => setOrg(e.target.value)} autoComplete="organization" placeholder="Brand or agency" />
              </label>
              <label className={`${styles.field} ${styles.full}`}>
                <span>Project details</span>
                <textarea rows={3} value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Event, product, dates, anything useful…" />
              </label>
            </div>

            <a href={mailto} className={`btn btnPrimary ${styles.send}`}>
              Open email draft <ArrowRight />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
