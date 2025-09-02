export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-400">Last updated: September 1, 2025</p>
        </div>
        
        <div className="mt-16 text-gray-300 prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-indigo-400 prose-strong:text-white">
          <p>
            Welcome to AI Career Coach ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and demographic information, that you voluntarily give to us when you register with the Site.</li>
            <li><strong>Resume & Career Data:</strong> Information you provide regarding your career history, skills, education, and professional goals, including documents you upload.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
          </ul>

          <h2>2. How We Use Your Data</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Analyze your resume and career data to provide personalized AI-driven insights.</li>
            <li>Email you regarding your account or order.</li>
            <li>Improve the efficiency and operation of the Site.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          </ul>
          
          <h2>3. Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>4. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@aicareercoach.io">privacy@aicareercoach.io</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

// Note: For the "prose" classes to work, you may need to install the official Tailwind CSS typography plugin:
// npm install -D @tailwindcss/typography
// Then add it to your tailwind.config.js file:
// plugins: [require('@tailwindcss/typography')],