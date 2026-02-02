export default function App() {
  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div className="container py-2 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <span className="fw-bold fs-5 m-0">RoomAI</span>
            <span className="badge badge-accent">AI roommate matching</span>
          </div>

          <a className="btn btn-brand text-white" href="#waitlist">
            Join the waitlist
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero py-5">
        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-7 text-center text-lg-start">
              <div className="brand-pill mb-3">
                <span>⚡</span>
                <span>Faster, safer shared housing</span>
              </div>

              <h1 className="fw-bold display-5">
                Find a roommate that fits your lifestyle — with help from AI.
              </h1>

              <p className="lead mt-3">
                RoomAI helps students and young professionals match by budget, routine,
                cleanliness, and location preferences.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-lg-start mt-4">
                <a className="btn btn-brand btn-lg text-white" href="#waitlist">
                  Join the waiting list
                </a>
                <a className="btn btn-outline-light btn-lg" href="#how">
                  See how it works
                </a>
              </div>

              <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mt-4">
                <span className="brand-pill">📱 Mobile-first</span>
                <span className="brand-pill">🔒 Safer matching</span>
                <span className="brand-pill">🧠 Preference-based</span>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="glass-card p-4">
                <h5 className="fw-bold mb-2">Quick preview</h5>
                <p className="mb-3" style={{ opacity: 0.85 }}>
                  What RoomAI considers for your match:
                </p>

                <div className="row g-3">
                  <div className="col-6">
                    <div className="glass-card p-3">
                      <div className="fw-bold">💸 Budget</div>
                      <div style={{ opacity: 0.8 }}>Range & split</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="glass-card p-3">
                      <div className="fw-bold">🕒 Routine</div>
                      <div style={{ opacity: 0.8 }}>Sleep/work</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="glass-card p-3">
                      <div className="fw-bold">🧽 Habits</div>
                      <div style={{ opacity: 0.8 }}>Cleanliness</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="glass-card p-3">
                      <div className="fw-bold">📍 Location</div>
                      <div style={{ opacity: 0.8 }}>Near campus</div>
                    </div>
                  </div>
                </div>

                <div className="mt-3" style={{ opacity: 0.8 }}>
                  ✅ Verified profiles • ✅ Safer messaging
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* How it works */}
      <section id="how" className="py-5">
        <div className="container">
          <h2 className="text-center section-title mb-4">How it works</h2>

          <div className="row g-4 text-center">
            <div className="col-12 col-md-4">
              <div className="p-4 border rounded-4 h-100">
                <div className="fs-1">🧾</div>
                <h5 className="fw-bold mt-2">Create a profile</h5>
                <p className="text-muted mb-0">
                  Tell RoomAI your preferences and lifestyle.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-4 border rounded-4 h-100">
                <div className="fs-1">🤝</div>
                <h5 className="fw-bold mt-2">Get matches</h5>
                <p className="text-muted mb-0">
                  Receive compatible roommate suggestions.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-4 border rounded-4 h-100">
                <div className="fs-1">🏠</div>
                <h5 className="fw-bold mt-2">Move in safely</h5>
                <p className="text-muted mb-0">
                  Connect and share housing with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center section-title mb-4">Why RoomAI</h2>

          <div className="row g-4">
            {[
              ["🔒 Verified profiles", "Basic verification to increase trust."],
              ["🧠 Smart matching", "Compatibility based on preferences."],
              ["💬 Safer messaging", "A safer contact flow for roommates."],
              ["🎓 Student-focused", "Built for campus life and budgets."]
            ].map(([title, desc]) => (
              <div className="col-12 col-md-6 col-lg-3" key={title}>
                <div className="p-4 bg-white feature-card h-100">
                  <h6 className="fw-bold">{title}</h6>
                  <p className="text-muted mb-0">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center section-title mb-4">FAQ</h2>

          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="accordion" id="faq">
                {[
                  [
                    "Is RoomAI available now?",
                    "This is a landing page for an upcoming platform. You can join the waitlist."
                  ],
                  [
                    "How does RoomAI match people?",
                    "RoomAI uses preferences like budget, routine, cleanliness, and location to suggest compatible roommates."
                  ],
                  [
                    "Is the landing page responsive?",
                    "Yes. It’s optimized for mobile, tablet, and desktop using Bootstrap grid and breakpoints."
                  ]
                ].map(([q, a], idx) => (
                  <div className="accordion-item" key={q}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${idx !== 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${idx}`}
                      >
                        {q}
                      </button>
                    </h2>

                    <div
                      id={`faq${idx}`}
                      className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body">{a}</div>
                    </div>
                  </div>
                ))}
              </div>

              <small className="text-muted d-block mt-2">
                Tip: show mobile/tablet/desktop responsiveness in your final video.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <div className="p-5 bg-dark text-white rounded-4">
                <div className="row align-items-center g-3">
                  <div className="col-12 col-md-7">
                    <h2 className="fw-bold mb-2">Join the waiting list</h2>
                    <p className="mb-0" style={{ opacity: 0.85 }}>
                      Leave your email and get early access updates.
                    </p>
                  </div>
                  <div className="col-12 col-md-5">
                    <div className="input-group">
                      <input
                        className="form-control"
                        placeholder="your@email.com"
                        aria-label="email"
                      />
                      <button className="btn btn-brand text-white" type="button">
                        Submit
                      </button>
                    </div>
                    <small className="d-block mt-2" style={{ opacity: 0.75 }}>
                      Demo only — no backend required.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center border-top">
        <div className="container">
          <p className="mb-1 fw-bold">RoomAI — Shared Housing Platform</p>
          <small className="footer-muted">
            Capstone Project — Web Development • Pedro Vinicius Evaristo de Moraes
          </small>
        </div>
      </footer>
    </>
  );
}
