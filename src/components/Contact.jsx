const Contact = () => (
  <section className="py-20 bg-opacity-30 bg-black" id="contact">
    <div className="container">
      <h2 className="section-title fade-in">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
        <div className="fade-in" style={{ animationDelay: '0.1s' }}>
          <p className="text-gray-300 mb-8">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out using the contact form or through any of the provided channels.
          </p>

          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(33, 118, 255, 0.1)' }}>
              <i className="fas fa-envelope" style={{ color: 'var(--secondary)' }}></i>
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <a href="mailto:contact@dawillygene.com" className="text-gray-400 hover:text-secondary transition-colors">
                contact@dawillygene.com
              </a>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(253, 202, 64, 0.1)' }}>
              <i className="fas fa-phone" style={{ color: 'var(--accent1)' }}></i>
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <a href="tel:+1234567890" className="text-gray-400 hover:text-accent1 transition-colors">
                +255 753 225 961 | Tanzania | Whatsapp
              </a>
            </div>
          </div>

          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(247, 152, 36, 0.1)' }}>
              <i className="fas fa-map-marker-alt" style={{ color: 'var(--accent2)' }}></i>
            </div>
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-400">Dodoma Tanzania</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/elia-william-mariki/" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: 'rgba(33, 118, 255, 0.1)' }}>
                <i className="fab fa-linkedin-in" style={{ color: 'var(--secondary)' }}></i>
              </a>
              <a href="https://github.com/dawillygene" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: 'rgba(33, 118, 255, 0.1)' }}>
                <i className="fab fa-github" style={{ color: 'var(--secondary)' }}></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: 'rgba(33, 118, 255, 0.1)' }}>
                <i className="fab fa-twitter" style={{ color: 'var(--secondary)' }}></i>
              </a>
              <a href="https://www.instagram.com/dawillygene/" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: 'rgba(33, 118, 255, 0.1)' }}>
                <i className="fab fa-instagram" style={{ color: 'var(--secondary)' }}></i>
              </a>
              <a href="https://www.tiktok.com/@dawilly_gene" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: 'rgba(33, 118, 255, 0.1)' }}>
                <i className="fab fa-tiktok" style={{ color: 'var(--secondary)' }}></i>
              </a>
            </div>
          </div>
        </div>

        <div className="fade-in" style={{ animationDelay: '0.3s' }}>
          <form className="contact-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input type="text" placeholder="Your Name" required className="w-full p-3 rounded bg-gray-700 text-white" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" required className="w-full p-3 rounded bg-gray-700 text-white" />
              </div>
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Subject" required className="w-full p-3 rounded bg-gray-700 text-white" />
            </div>
            <div className="mb-6">
              <textarea rows="6" placeholder="Your Message" required className="w-full p-3 rounded bg-gray-700 text-white"></textarea>
            </div>
            <button type="submit" className="btn-primary flex items-center">
              Send Message <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;