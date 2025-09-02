const faqs = [
  {
    question: 'How does the AI analyze my resume?',
    answer: 'Our AI uses a sophisticated Natural Language Processing (NLP) model trained on millions of successful resumes and job descriptions. It cross-references your content for keywords, impact metrics, formatting standards, and clarity to provide a comprehensive score and actionable suggestions.',
  },
  {
    question: 'Is my personal data safe?',
    answer: 'Absolutely. We use end-to-end encryption for all data transmissions and storage. Your personal information is anonymized during analysis and is never shared with third parties without your explicit consent. You can review our full Privacy Policy for more details.',
  },
  {
    question: 'Can the AI guarantee me a job?',
    answer: 'While our tools provide a significant competitive advantage, we cannot guarantee job placement. Our goal is to empower you with the best possible resources and insights to maximize your chances of success in the job market.',
  },
  {
    question: 'What makes your platform different from other career tools?',
    answer: 'Our platform is unique due to its holistic and dynamic approach. We don\'t just analyze a single document; we create a comprehensive career profile, simulate real-world scenarios like interviews, and provide a continuously updated skill matrix based on live market data.',
  },
];

export default function FAQsPage() {
  return (
    <div className="bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-4xl font-bold leading-10 tracking-tight text-white text-center">Frequently Asked Questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <details key={index} className="group pt-6">
                <summary className="flex w-full cursor-pointer items-center justify-between text-left text-white">
                  <span className="text-lg font-semibold leading-7">{faq.question}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg className="h-6 w-6 transform transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 pr-12 text-base leading-7 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}