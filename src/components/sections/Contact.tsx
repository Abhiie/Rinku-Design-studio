import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';

interface IFormInput {
  fullName: string;
  email: string;
  phoneNumber: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // Simulate API call for 1.5 seconds
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmittedName(data.fullName);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[var(--bg-color)] border-t border-[var(--border-color)]/30 relative select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">

        {/* Form grid layout — heading is inside the left col so form aligns with it */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative">
          
          {/* Left Column Information Cards */}
          <div className="flex flex-col space-y-8 relative">
            {/* RDS Watermark */}
            <div className="absolute top-0 left-0 font-cormorant font-bold text-[180px] text-[var(--color-gold)] opacity-[0.03] select-none pointer-events-none leading-none">
              RDS
            </div>

            {/* Section title — now inside left col so form top aligns with it */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6 }}
                className="text-[11px] font-light tracking-[0.35em] text-[var(--color-gold)] uppercase font-jost mb-3"
              >
                CONTACT US
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-cormorant text-4xl md:text-5xl font-semibold text-[var(--text-color)]"
              >
                Start Your Journey
              </motion.h2>
            </div>

            <h3 className="font-cormorant text-3xl font-semibold text-[var(--text-color)] md:max-w-md leading-snug relative z-10">
              Let's Create Something Beautiful Together
            </h3>
            <p className="font-jost font-normal text-[15px] text-[var(--text-color)] opacity-85 leading-[1.8] max-w-md relative z-10">
              Arrange your complimentary consultation with Kunal Patel. We discuss your space requirements, design preferences, and budget — with complete transparency from day one.
            </p>

            {/* Contact info rows */}
            <div className="flex flex-col space-y-5 pt-6 border-t border-[var(--border-color)]/20 relative z-10">

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-jost text-[9px] uppercase tracking-[0.2em] text-[var(--color-gold)] font-normal mb-0.5">Studio Atelier</p>
                  <p className="font-jost text-[14px] font-normal text-[var(--text-color)] leading-tight">Ahmedabad, Gujarat</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-jost text-[9px] uppercase tracking-[0.2em] text-[var(--color-gold)] font-normal mb-0.5">Call Us</p>
                  <a href="tel:+919274551195" className="font-jost text-[14px] font-normal text-[var(--text-color)] leading-tight hover:text-[var(--color-gold)] transition-colors duration-200">
                    +91 92745 51195
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="font-jost text-[9px] uppercase tracking-[0.2em] text-[var(--color-gold)] font-normal mb-0.5">Email Enquiries</p>
                  <a href="mailto:hello@rinkudesignstudio.com" className="font-jost text-[14px] font-normal text-[var(--text-color)] leading-tight hover:text-[var(--color-gold)] transition-colors duration-200">
                    hello@rinkudesignstudio.com
                  </a>
                </div>
              </div>

            </div>

            {/* Social handles links */}
            <div className="pt-6 border-t border-[var(--border-color)]/20 z-10">
              <h4 className="text-[10px] uppercase font-normal tracking-widest text-[var(--color-gold)] mb-4 font-jost">Connect With Us</h4>
              <div className="flex space-x-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/rinkudesignstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-200 shadow-md"
                  style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919274551195?text=Hi%2C%20I%27m%20interested%20in%20your%20interior%20design%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#1fb954] flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-200 shadow-md"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column Form Block with Framer Motion AnimatePresence */}
          <div className="bg-[var(--card-color)] p-8 md:p-10 rounded border border-[var(--border-color)]/20 shadow-lg relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col space-y-6"
                >
                  {/* Full Name Input */}
                  <div className="relative w-full group">
                    <input
                      type="text"
                      {...register('fullName', { required: 'Full name is required' })}
                      className="block py-2.5 px-0 w-full text-sm text-[var(--text-color)] bg-transparent border-0 border-b border-[var(--border-color)]/50 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--color-gold)] peer font-jost font-light"
                      placeholder=" "
                    />
                    <label className="absolute text-sm text-[var(--text-muted)] duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[var(--color-gold)] font-jost font-light">
                      Full Name *
                    </label>
                    {errors.fullName && (
                      <span className="text-[11px] text-red-500 font-light mt-1 block">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="relative w-full group">
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email address is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="block py-2.5 px-0 w-full text-sm text-[var(--text-color)] bg-transparent border-0 border-b border-[var(--border-color)]/50 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--color-gold)] peer font-jost font-light"
                      placeholder=" "
                    />
                    <label className="absolute text-sm text-[var(--text-muted)] duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[var(--color-gold)] font-jost font-light">
                      Email Address *
                    </label>
                    {errors.email && (
                      <span className="text-[11px] text-red-500 font-light mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div className="relative w-full group">
                    <input
                      type="tel"
                      {...register('phoneNumber')}
                      className="block py-2.5 px-0 w-full text-sm text-[var(--text-color)] bg-transparent border-0 border-b border-[var(--border-color)]/50 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--color-gold)] peer font-jost font-light"
                      placeholder=" "
                    />
                    <label className="absolute text-sm text-[var(--text-muted)] duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[var(--color-gold)] font-jost font-light">
                      Phone Number
                    </label>
                  </div>

                  {/* Select parameters */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Project Type */}
                    <div className="flex flex-col space-y-1.5 border-b border-[var(--border-color)]/50 py-1">
                      <label className="text-[10px] uppercase font-light text-[var(--text-muted)] tracking-wider font-jost">
                        Project Type
                      </label>
                      <select
                        {...register('projectType')}
                        className="bg-transparent text-sm font-light font-jost py-1 focus:outline-none text-[var(--text-color)] cursor-pointer"
                      >
                        <option value="Residential" className="bg-[var(--card-color)] text-[var(--text-color)]">Residential</option>
                        <option value="Commercial" className="bg-[var(--card-color)] text-[var(--text-color)]">Commercial</option>
                        <option value="Hospitality" className="bg-[var(--card-color)] text-[var(--text-color)]">Hospitality</option>
                        <option value="Retail" className="bg-[var(--card-color)] text-[var(--text-color)]">Retail</option>
                        <option value="Other" className="bg-[var(--card-color)] text-[var(--text-color)]">Other</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div className="flex flex-col space-y-1.5 border-b border-[var(--border-color)]/50 py-1">
                      <label className="text-[10px] uppercase font-light text-[var(--text-muted)] tracking-wider font-jost">
                        Budget Range
                      </label>
                      <select
                        {...register('budgetRange')}
                        className="bg-transparent text-sm font-light font-jost py-1 focus:outline-none text-[var(--text-color)] cursor-pointer"
                      >
                        <option value="under-10" className="bg-[var(--card-color)] text-[var(--text-color)]">Under ₹10L</option>
                        <option value="10-25" className="bg-[var(--card-color)] text-[var(--text-color)]">₹10L–₹25L</option>
                        <option value="25-50" className="bg-[var(--card-color)] text-[var(--text-color)]">₹25L–₹50L</option>
                        <option value="over-50" className="bg-[var(--card-color)] text-[var(--text-color)]">₹50L+</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div className="flex flex-col space-y-1.5 border-b border-[var(--border-color)]/50 py-1">
                      <label className="text-[10px] uppercase font-light text-[var(--text-muted)] tracking-wider font-jost">
                        Timeline
                      </label>
                      <select
                        {...register('timeline')}
                        className="bg-transparent text-sm font-light font-jost py-1 focus:outline-none text-[var(--text-color)] cursor-pointer"
                      >
                        <option value="ASAP" className="bg-[var(--card-color)] text-[var(--text-color)]">ASAP</option>
                        <option value="1-3" className="bg-[var(--card-color)] text-[var(--text-color)]">1–3 Months</option>
                        <option value="3-6" className="bg-[var(--card-color)] text-[var(--text-color)]">3–6 Months</option>
                        <option value="Flexible" className="bg-[var(--card-color)] text-[var(--text-color)]">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Input text area */}
                  <div className="relative w-full group pt-2">
                    <textarea
                      rows={5}
                      {...register('message', { required: 'Message body can not be empty' })}
                      className="block py-2.5 px-0 w-full text-sm text-[var(--text-color)] bg-transparent border-0 border-b border-[var(--border-color)]/50 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--color-gold)] peer font-jost font-light resize-none"
                      placeholder=" "
                    />
                    <label className="absolute text-sm text-[var(--text-muted)] duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[var(--color-gold)] font-jost font-light">
                      Tell Us About Your Project *
                    </label>
                    {errors.message && (
                      <span className="text-[11px] text-red-500 font-light mt-1 block">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  {/* Button Submission */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 py-4 bg-[var(--color-gold)] text-black font-jost text-xs uppercase font-medium tracking-[0.25em] flex items-center justify-center space-x-2 transition-all duration-300 hover:bg-[var(--color-gold-light)] disabled:opacity-50 cursor-pointer overflow-hidden relative"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-black mr-2 inline-block" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <span>Send Enquiry &mdash;&gt;</span>
                    )}
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="success-div"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center select-none"
                >
                  <div className="w-16 h-16 rounded-full border border-[var(--color-gold)] flex items-center justify-center text-3xl mb-6 text-[var(--color-gold)] bg-[var(--color-gold)]/5 animate-pulse">
                    ✓
                  </div>
                  <h3 className="font-cormorant text-3xl font-semibold text-[var(--text-color)] mb-4 leading-normal">
                    Thank You, {submittedName}!
                  </h3>
                  <p className="font-jost font-normal text-[15px] text-[var(--text-color)] opacity-85 leading-[1.8] max-w-xs">
                    We have received your design specs. An assistant will contact you in less than <span className="text-[var(--color-gold)] font-semibold">24 hours</span> to schedule your call.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full relative border-t border-[var(--color-gold)]/20">
        {/* Gold accent top bar */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent w-full" />

        <div className="relative w-full h-[380px] overflow-hidden">
          <iframe
            title="Rinku Design Studio Location"
            src="https://maps.google.com/maps?q=Rinku+Design+Studio+Interior+Designer+Ahmedabad+Gujarat+India&output=embed&z=15"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />

          {/* Overlay label */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent py-4 px-6 pointer-events-none">
            <div className="flex items-center gap-2 text-[var(--color-gold)]">
              <span className="text-lg">📍</span>
              <div>
                <p className="font-cormorant text-[15px] font-semibold text-white leading-none">Rinku Design Studio</p>
                <p className="font-jost text-[10px] font-light tracking-[0.2em] uppercase text-[var(--color-gold)] mt-0.5">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
