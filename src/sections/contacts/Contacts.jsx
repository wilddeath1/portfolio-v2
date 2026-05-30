import React from 'react';
import SectionTag from '../../components/ui/SectionTag';
import SectionHeading from '../../components/ui/SectionHeading';
import ContactGrid from './ContactGrid';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-(--bg-secondary)">
      <div
        className="w-[min(92vw,85rem)] mx-auto">
        {/* HEADER */}
        <div
          className="text-center mb-12 reveal">
          <SectionTag text="Contact" />
          <SectionHeading text="Get In Touch" />
        </div>
        {/* GRID */}
        <ContactGrid />
      </div>
    </section>
  );
};

export default Contact;
