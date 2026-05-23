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
        
        {/* Section title */}
        <div className="mb-16 text-center md:text-left">
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

        {/* Form grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative">
          
          {/* Left Column Information Cards */}
          <div className="flex flex-col space-y-8 relative">
            {/* RDS Watermark */}
            <div className="absolute top-0 left-0 font-cormorant font-bold text-[180px] text-[var(--color-gold)] opacity-[0.03] select-none pointer-events-none leading-none">
              RDS
            </div>

            <h3 className="font-cormorant text-3xl font-semibold text-[var(--text-color)] md:max-w-md leading-snug relative z-10">
              Let's Create Something Beautiful Together
            </h3>
            <p className="font-jost font-normal text-[15px] text-[var(--text-color)] opacity-85 leading-[1.8] max-w-md relative z-10">
              Arrange your complimentary consultation with Kunal Patel. We discuss your space requirements, design preferences, and budget — with complete transparency from day one.
            </p>

            {/* Address cards */}
            <div className="flex flex-col space-y-6 pt-6 border-t border-[var(--border-color)]/20 relative z-10 font-jost">
              <div className="flex items-start space-x-4">
                <span className="text-xl text-[var(--color-gold)]">📍</span>
                <div>
                  <h4 className="text-[10px] uppercase font-light tracking-widest text-[var(--text-muted)] mb-1">STUDIO ATELIER</h4>
                  <p className="text-sm font-light text-[var(--text-color)] leading-normal">
                    Ahmedabad, Gujarat
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-xl text-[var(--color-gold)]">📞</span>
                <div>
                  <h4 className="text-[10px] uppercase font-light tracking-widest text-[var(--text-muted)] mb-1">CALL US</h4>
                  <p className="text-sm font-light text-[var(--text-color)] leading-normal">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-xl text-[var(--color-gold)]">✉️</span>
                <div>
                  <h4 className="text-[10px] uppercase font-light tracking-widest text-[var(--text-muted)] mb-1">EMAIL ENQUIRIES</h4>
                  <p className="text-sm font-light text-[var(--text-color)] leading-normal">
                    hello@rinkudesignstudio.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social handles links */}
            <div className="pt-6 border-t border-[var(--border-color)]/20 z-10">
              <h4 className="text-[10px] uppercase font-light tracking-widest text-[var(--text-muted)] mb-4 font-jost">FOLLOW OUR DESIGN WORK</h4>
              <div className="flex space-x-4">
                {['Instagram', 'Pinterest', 'Houzz'].map((soc) => (
                  <a
                    key={soc}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="w-10 h-10 rounded-full border border-[var(--color-gold)]/30 hover:border-[var(--color-gold)] hover:scale-105 active:scale-95 text-[11px] font-light tracking-wider uppercase font-jost flex items-center justify-center text-[var(--color-gold)] transition-all duration-300"
                  >
                    {soc[0]}
                  </a>
                ))}
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

      {/* Subtle Map block */}
      <div className="w-full h-[180px] bg-[var(--surface-color)] border-t border-b border-[var(--border-color)]/20 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative z-10 flex items-center space-x-2 text-[var(--color-gold)] font-jost text-sm font-light tracking-[0.25em] uppercase">
          <span>📍</span>
          <span>AHMEDABAD, GUJARAT, INDIA</span>
        </div>
      </div>
    </section>
  );
}
