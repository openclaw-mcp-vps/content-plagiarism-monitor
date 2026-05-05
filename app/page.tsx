export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For Content Creators & Digital Agencies
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Monitor Your Content for{' '}
          <span className="text-[#58a6ff]">Theft Across the Web</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically scan the internet for unauthorized use of your content, send DMCA takedown notices, and track theft analytics — all on autopilot.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors text-lg"
        >
          Start Protecting for $17/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 gap-4 mb-20 sm:grid-cols-3">
        {[
          { icon: '🔍', title: 'Continuous Scanning', desc: 'Web crawlers check for your content 24/7 across millions of pages.' },
          { icon: '⚡', title: 'Auto DMCA Notices', desc: 'Automated takedown requests sent the moment theft is detected.' },
          { icon: '📊', title: 'Theft Analytics', desc: 'Dashboard showing who stole what, when, and where.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$17</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited content URLs monitored',
              'Real-time theft alerts via email',
              'Automated DMCA takedown notices',
              'Full analytics dashboard',
              'Search API + web crawler scanning',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the content scanning work?',
              a: 'We use a combination of search APIs and web crawlers to continuously index the web and compare found content against your registered URLs using fingerprinting and similarity algorithms.',
            },
            {
              q: 'What happens when theft is detected?',
              a: 'You receive an instant email alert. If you have auto-DMCA enabled, we automatically draft and send a takedown notice to the hosting provider and search engines on your behalf.',
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Content Plagiarism Monitor. All rights reserved.
      </footer>
    </main>
  )
}
