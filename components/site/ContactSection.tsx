'use client';

import { useState } from 'react';
import { addDocument, COLLECTIONS } from '@/lib/firestore';
import {
  companyProfile,
  contactBudgetRanges,
  contactProjectTypes,
  contactTimelineRanges,
} from '@/lib/siteContent';

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className="container" style={{ paddingBottom: '5rem' }}>
      <section className="contact-layout">
        <div className="glass-card" style={{ padding: '2rem' }}>
          <div className="section-badge">Direct Contact</div>
          <h2 style={{ marginBottom: '0.75rem' }}>Project conversations, hiring opportunities, and technical collaboration</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            The best engagements usually begin with a clear operating problem, timeline expectations, and a shared sense of what success should look like.
          </p>

          <div className="info-stack">
            <div>
              <strong>Email</strong>
              <a href={`mailto:${companyProfile.email}`}>{companyProfile.email}</a>
            </div>
            <div>
              <strong>Phone / WhatsApp</strong>
              <a href={`tel:${companyProfile.phone.replace(/\s+/g, '')}`}>{companyProfile.phone}</a>
            </div>
            <div>
              <strong>Location</strong>
              <span>{companyProfile.location}</span>
            </div>
            <div>
              <strong>Availability</strong>
              <span>{companyProfile.availability}</span>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.25rem', marginTop: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Preferred inquiry quality</h3>
            <ul className="clean-list">
              <li>What process or workflow needs improvement</li>
              <li>Who the primary users or decision-makers are</li>
              <li>Expected timeline, scope, and budget comfort level</li>
              <li>Whether the need is a new build, recovery, or modernization effort</li>
            </ul>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '2rem' }}>
          <div className="section-badge">Inquiry Form</div>
          <form
            className="site-form-grid"
            onSubmit={async (event) => {
              event.preventDefault();
              setError('');
              setSubmitted(false);
              setSubmitting(true);

              const form = event.currentTarget;
              const formData = new FormData(form);

              try {
                await addDocument(COLLECTIONS.CONTACT_INQUIRIES, {
                  fullName: String(formData.get('fullName') || ''),
                  email: String(formData.get('email') || ''),
                  organization: String(formData.get('organization') || ''),
                  projectType: String(formData.get('projectType') || ''),
                  budgetRange: String(formData.get('budgetRange') || ''),
                  timeline: String(formData.get('timeline') || ''),
                  message: String(formData.get('message') || ''),
                  status: 'new',
                  source: 'website-contact-form',
                });
                form.reset();
                setSubmitted(true);
              } catch {
                setError('The inquiry could not be submitted right now. Please use the direct email option and try again later.');
              } finally {
                setSubmitting(false);
              }
            }}
          >
            <label className="field-label">
              <span>Full name</span>
              <input className="site-input" type="text" name="fullName" required />
            </label>
            <label className="field-label">
              <span>Email</span>
              <input className="site-input" type="email" name="email" required />
            </label>
            <label className="field-label">
              <span>Organization</span>
              <input className="site-input" type="text" name="organization" />
            </label>
            <label className="field-label">
              <span>Project type</span>
              <select className="site-select" name="projectType" defaultValue={contactProjectTypes[0]}>
                {contactProjectTypes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="field-label">
              <span>Budget range</span>
              <select className="site-select" name="budgetRange" defaultValue={contactBudgetRanges[0]}>
                {contactBudgetRanges.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="field-label">
              <span>Timeline</span>
              <select className="site-select" name="timeline" defaultValue={contactTimelineRanges[0]}>
                {contactTimelineRanges.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="field-label full-span">
              <span>Message</span>
              <textarea
                className="site-input"
                name="message"
                rows={7}
                required
                placeholder="Describe the problem, current workflow, or opportunity you want to explore."
              />
            </label>

            <div className="full-span" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" type="submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Inquiry'}
              </button>
              {submitted ? (
                <p style={{ color: 'var(--success)', fontWeight: 600 }}>
                  Thanks. Your inquiry has been saved successfully and can now be reviewed from the admin dashboard.
                </p>
              ) : error ? (
                <p style={{ color: 'var(--error)', fontWeight: 600 }}>{error}</p>
              ) : (
                <p style={{ color: 'var(--text-quaternary)' }}>
                  Direct email and social links remain available if you prefer a faster route.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
