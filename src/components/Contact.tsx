import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputStyle = {
    border: '2px solid rgba(0,0,0,0.25)',
    boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1), inset -1px -1px 2px rgba(255,255,255,0.1)',
    borderRadius: 0,
    outline: 'none',
  };

  const inputFocusStyle = {
    borderColor: '#5D8A3C',
    boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1), 0 0 0 2px rgba(93,138,60,0.2)',
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-stone-50 dark:bg-mc-night relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(0,0,0,1) 31px, rgba(0,0,0,1) 32px),
          repeating-linear-gradient(90deg, transparent, transparent 31px, rgba(0,0,0,1) 31px, rgba(0,0,0,1) 32px)`,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-14">
          <h2 className="section-title text-gray-800 dark:text-gray-100">Contact</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 flex flex-col gap-5">
            <div
              className="p-5 bg-white dark:bg-mc-night-mid"
              style={{
                border: '3px solid rgba(0,0,0,0.2)',
                boxShadow: '5px 5px 0 rgba(0,0,0,0.15)',
              }}
            >
              <div
                className="h-1.5 w-full -mt-5 -mx-5 mb-4"
                style={{
                  width: 'calc(100% + 40px)',
                  background: 'linear-gradient(90deg, #5D8A3C, #4FC3F7)',
                  borderBottom: '2px solid rgba(0,0,0,0.2)',
                }}
              />
              <h3 className="font-pixel text-xs text-mc-grass dark:text-mc-grass-light mb-4">
                Get In Touch
              </h3>
              <p className="font-body text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                Open to new opportunities, collaborations, or just connecting with fellow data enthusiasts.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3 group transition-all duration-150"
                  style={{
                    border: '2px solid rgba(0,0,0,0.12)',
                    boxShadow: '2px 2px 0 rgba(0,0,0,0.1)',
                  }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                    style={{ background: '#5D8A3C', border: '2px solid rgba(0,0,0,0.3)' }}
                  >
                    <Mail size={14} className="text-white" />
                  </div>
                  <div>
                    <div className="font-pixel text-gray-500 dark:text-gray-400" style={{ fontSize: '8px' }}>Email</div>
                    <div className="font-body text-sm text-gray-700 dark:text-gray-200 group-hover:text-mc-grass transition-colors">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 group transition-all duration-150"
                  style={{
                    border: '2px solid rgba(0,0,0,0.12)',
                    boxShadow: '2px 2px 0 rgba(0,0,0,0.1)',
                  }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                    style={{ background: '#0A66C2', border: '2px solid rgba(0,0,0,0.3)' }}
                  >
                    <Linkedin size={14} className="text-white" />
                  </div>
                  <div>
                    <div className="font-pixel text-gray-500 dark:text-gray-400" style={{ fontSize: '8px' }}>LinkedIn</div>
                    <div className="font-body text-sm text-gray-700 dark:text-gray-200 group-hover:text-blue-500 transition-colors">
                      {personalInfo.linkedin.replace('https://', '')}
                    </div>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 group transition-all duration-150"
                  style={{
                    border: '2px solid rgba(0,0,0,0.12)',
                    boxShadow: '2px 2px 0 rgba(0,0,0,0.1)',
                  }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                    style={{ background: '#24292e', border: '2px solid rgba(0,0,0,0.3)' }}
                  >
                    <Github size={14} className="text-white" />
                  </div>
                  <div>
                    <div className="font-pixel text-gray-500 dark:text-gray-400" style={{ fontSize: '8px' }}>GitHub</div>
                    <div className="font-body text-sm text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {personalInfo.github.replace('https://', '')}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div
              className="p-6 bg-white dark:bg-mc-night-mid"
              style={{
                border: '3px solid rgba(0,0,0,0.2)',
                boxShadow: '5px 5px 0 rgba(0,0,0,0.15)',
              }}
            >
              <div
                className="h-1.5 w-full -mt-6 -mx-6 mb-5"
                style={{
                  width: 'calc(100% + 48px)',
                  background: 'linear-gradient(90deg, #4FC3F7, #FFD700)',
                  borderBottom: '2px solid rgba(0,0,0,0.2)',
                }}
              />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div
                    className="w-16 h-16 flex items-center justify-center"
                    style={{
                      background: '#5D8A3C',
                      border: '3px solid rgba(0,0,0,0.3)',
                      boxShadow: '4px 4px 0 rgba(0,0,0,0.25)',
                    }}
                  >
                    <CheckCircle size={28} className="text-white" />
                  </div>
                  <div>
                    <div className="font-pixel text-mc-grass text-sm mb-2">Message Sent!</div>
                    <p className="font-body text-gray-500 dark:text-gray-400 text-sm">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mc-btn bg-mc-grass text-white px-6 py-2.5 mt-2"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-pixel text-gray-500 dark:text-gray-400 mb-1.5" style={{ fontSize: '8px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 font-body text-sm bg-stone-50 dark:bg-mc-night text-gray-800 dark:text-gray-100 transition-all"
                        style={inputStyle}
                        onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={e => Object.assign(e.target.style, inputStyle)}
                        placeholder="Alex Johnson"
                      />
                    </div>
                    <div>
                      <label className="block font-pixel text-gray-500 dark:text-gray-400 mb-1.5" style={{ fontSize: '8px' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 font-body text-sm bg-stone-50 dark:bg-mc-night text-gray-800 dark:text-gray-100 transition-all"
                        style={inputStyle}
                        onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={e => Object.assign(e.target.style, inputStyle)}
                        placeholder="alex@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-pixel text-gray-500 dark:text-gray-400 mb-1.5" style={{ fontSize: '8px' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 font-body text-sm bg-stone-50 dark:bg-mc-night text-gray-800 dark:text-gray-100 transition-all"
                      style={inputStyle}
                      onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                      onBlur={e => Object.assign(e.target.style, inputStyle)}
                      placeholder="Job Opportunity / Collaboration"
                    />
                  </div>

                  <div>
                    <label className="block font-pixel text-gray-500 dark:text-gray-400 mb-1.5" style={{ fontSize: '8px' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2.5 font-body text-sm bg-stone-50 dark:bg-mc-night text-gray-800 dark:text-gray-100 resize-none transition-all"
                      style={inputStyle}
                      onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                      onBlur={e => Object.assign(e.target.style, inputStyle)}
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mc-btn w-full bg-mc-grass hover:bg-mc-grass-light disabled:opacity-60 text-white py-3.5 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-3 h-3 border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={13} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
