import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      form.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="min-h-screen bg-black text-white flex justify-center items-start"
    >
      <div className="w-full max-w-[800px] p-8">
        <div className="bg-zinc-900 rounded-3xl p-12">
          <h1 className="text-4xl font-bold mb-6">Contact</h1>
          <div className="text-xl text-zinc-400">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full p-3 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full p-3 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
                ></textarea>
              </div>
              
              {status.message && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' ? 'bg-green-800/50 text-green-200' : 'bg-red-800/50 text-red-200'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg transition-colors ${
                  isSubmitting 
                    ? 'bg-blue-700 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
