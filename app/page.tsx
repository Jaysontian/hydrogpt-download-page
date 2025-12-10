export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <span className="font-display font-semibold text-lg tracking-tight">EcoGPT</span>
          </div>
          <a
            href="https://github.com/igupta1/hydrogpt-final-project"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Chrome Extension
            </span>
          </div>

          {/* Title */}
          <h1 className="animate-fade-in-up-delay-1 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            See How Your
            <br />
            <span className="gradient-text">AI Usage</span> Impacts
            <br />
            the Environment
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Track the energy consumption of your ChatGPT conversations in real-time.
            Privacy-focused, research-based estimates, running entirely in your browser.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download"
              className="group relative px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-2xl transition-all duration-300 flex items-center gap-3 glow-box hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Extension
            </a>
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-16">
            What You&apos;ll <span className="text-primary">Track</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="card-hover bg-dark-card/50 backdrop-blur border border-white/5 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Real-time Energy</h3>
              <p className="text-white/60 leading-relaxed">
                Monitor watt-hours consumed by your ChatGPT conversations as they happen.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card-hover bg-dark-card/50 backdrop-blur border border-white/5 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Message Tracking</h3>
              <p className="text-white/60 leading-relaxed">
                Track daily and lifetime message counts with automatic token estimation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card-hover bg-dark-card/50 backdrop-blur border border-white/5 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Global Perspective</h3>
              <p className="text-white/60 leading-relaxed">
                Understand your impact by comparing it to global energy consumption patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="relative z-10 py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-card/30 backdrop-blur border border-primary/20 rounded-3xl p-10 sm:p-14 text-center glow-box">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              100% <span className="text-primary">Privacy-Focused</span>
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
              No data collection, no accounts, no tracking. All calculations happen locally in your browser.
              Your conversations stay private.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-10 py-24 px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Get <span className="text-primary">Started</span>
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Download the extension and start tracking your AI environmental impact today.
          </p>

          <div className="bg-dark-card/50 backdrop-blur border border-white/5 rounded-2xl p-8 sm:p-10">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center animate-float">
                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold mb-2">Chrome Extension</h3>
                <p className="text-white/50 text-sm mb-6">Version 2.3 • Works with ChatGPT</p>
              </div>

              {/* Download button - link to ZIP file */}
              <a
                href="/download.zip"
                download
                className="group px-10 py-5 bg-primary hover:bg-primary-hover text-white font-semibold rounded-2xl transition-all duration-300 flex items-center gap-3 glow-box hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download ZIP
              </a>

              <p className="text-white/40 text-xs mt-4">
                Manual installation: Unzip → Chrome Extensions → Enable Developer Mode → Load Unpacked
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <span className="text-white/60 text-sm">AI Impact Tracker</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="https://github.com/igupta1/hydrogpt-final-project" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            
            <a href="mailto:ishaangupta2003@gmail.com" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <p className="text-white/30 text-sm">
            Open source project
          </p>
        </div>
      </footer>
    </main>
  );
}

