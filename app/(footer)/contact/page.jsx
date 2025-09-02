import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="relative bg-gray-950 min-h-screen text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-900"></div>
      </div>
      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2">
        <div className="bg-gray-900 py-16 px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-300">
              Have questions or want to partner with us? We'd love to hear from you. Send us a message, and we'll respond as soon as possible.
            </p>
            <dl className="mt-8 space-y-6 text-base text-gray-400">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 shrink-0 text-indigo-400" />
                <span>123 Futura Ave, Neo-City, 98765</span>
              </div>
              <div className="flex gap-4">
                <Phone className="h-6 w-6 shrink-0 text-indigo-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex gap-4">
                <Mail className="h-6 w-6 shrink-0 text-indigo-400" />
                <span>connect@aicareercoach.io</span>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-gray-950 py-16 px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">Full name</label>
                <input type="text" name="full-name" id="full-name" autoComplete="name" placeholder="Full Name" className="block w-full rounded-md border-0 bg-gray-800/70 py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" autoComplete="email" placeholder="Email" className="block w-full rounded-md border-0 bg-gray-800/70 py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" rows={4} placeholder="Message" className="block w-full rounded-md border-0 bg-gray-800/70 py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}