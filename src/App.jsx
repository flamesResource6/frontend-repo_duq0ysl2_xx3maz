import React, { useState } from "react";
import Modal from "./components/Modal";

const ACCENT = "#00C851"; // Freecash green

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold" style={{ color: ACCENT }}>{value}</div>
      <div className="text-slate-600 text-sm">{label}</div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      {title && <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>}
      <div className="text-slate-600 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="bg-white/90 border border-pink-100 rounded-xl p-6 shadow-sm">
      <h4 className="font-semibold text-slate-800 mb-2">{title}</h4>
      <p className="text-slate-600 text-sm">{text}</p>
    </div>
  );
}

function PillButton({ children, variant = "solid", onClick }) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  const solid = `bg-[${ACCENT}] text-white hover:brightness-110 focus:ring-[${ACCENT}] focus:ring-offset-pink-50`;
  const outline = `border border-[${ACCENT}] text-slate-800 hover:bg-[${ACCENT}] hover:text-white focus:ring-[${ACCENT}] focus:ring-offset-pink-50`;
  const cls = `${base} ${variant === "solid" ? solid : outline}`;
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff,rgba(255,228,235,0.6))] text-slate-800">
      {/* Page wrapper */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <section className="pt-16 sm:pt-24 pb-10">
          <div className="text-center">
            <div className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-white/70 border border-pink-100 mb-4">Trusted earning platform</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Earn Real Money Online With Freecash
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Make money by doing simple tasks like surveys, apps, games, videos, and daily bonuses. Freecash gives you fast earning options anytime on mobile.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <PillButton onClick={() => setOpen(true)}>Start Earning on Freecash Today</PillButton>
              <PillButton variant="outline" onClick={() => setOpen(true)}>iOS Bonus Task</PillButton>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            <Card>
              “Got my first payout the same day. So easy to use on my phone.” — Mia
            </Card>
            <Card>
              “Surveys and game offers pay well. Cash out was fast.” — Jordan
            </Card>
            <Card>
              “I do a few tasks daily and it adds up. Very reliable.” — Sam
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            <Stat value="200K+" label="daily earners" />
            <Stat value="6M+" label="tasks monthly" />
            <Stat value="98%" label="payout satisfaction" />
          </div>
        </section>

        {/* Features */}
        <section className="py-10">
          <div className="grid md:grid-cols-3 gap-5">
            <Feature title="Easy Tasks for Quick Rewards" text="Pick from surveys, apps, games, videos, and more. Tasks are simple and fit into your day." />
            <Feature title="Fast Payouts" text="Withdraw to PayPal, crypto, or gift cards. Many users cash out the same day." />
            <Feature title="New Offers Added Daily" text="Fresh ways to earn appear every day, so there’s always something to do." />
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Why Choose Freecash</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Card title="Fast withdrawals">Cash out quickly with trusted methods. No long waiting times.</Card>
            <Card title="High-paying tasks">Top offers that pay more for your time and attention.</Card>
            <Card title="Beginner-friendly">Clear steps. No experience needed to start earning.</Card>
            <Card title="Verified offers">We review offers to keep things safe and fair.</Card>
          </div>
        </section>

        {/* Sign-Up Bonus */}
        <section className="py-12">
          <div className="bg-white/90 border border-pink-100 rounded-2xl p-6 sm:p-10 text-center shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Get Your Freecash Starter Bonus</h3>
            <p className="text-slate-600 max-w-2xl mx-auto mb-6">
              Complete your first offer and instantly receive a $10 bonus you can withdraw through PayPal, crypto, or gift cards.
            </p>
            <PillButton onClick={() => setOpen(true)}>Create Your Freecash Account</PillButton>
          </div>
        </section>

        {/* Earning Options */}
        <section className="py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Earning Options</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Card title="Surveys">Share your opinion and earn in minutes.</Card>
            <Card title="Apps & Games">Try new apps or reach levels in games for bigger rewards.</Card>
            <Card title="Videos & Ads">Watch short clips and ads for quick points.</Card>
            <Card title="Daily Bonuses">Log in daily to claim extra earnings and streak rewards.</Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">FAQ</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <Card title="Can I really earn real money?">
              Yes. You earn points by completing tasks. You can turn points into PayPal cash, crypto, or gift cards.
            </Card>
            <Card title="Why does Freecash pay more?">
              We partner with trusted advertisers and survey providers. They pay for results, and we share more with you.
            </Card>
            <Card title="How fast are withdrawals?">
              Many payouts are processed within hours. Some methods can take up to 24–48 hours for security checks.
            </Card>
            <Card title="Do I need skills to earn?">
              No special skills are needed. Follow simple steps shown on each offer.
            </Card>
            <Card title="What if I don’t qualify for surveys?">
              That happens sometimes. Just try different surveys, or switch to apps, games, or videos. New options appear every day.
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Start Earning With Freecash Today</h3>
            <PillButton onClick={() => setOpen(true)}>Start Earning on Freecash Today</PillButton>
          </div>
        </section>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h4 className="text-lg font-semibold mb-2">Before you join</h4>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Freecash is for everyone, but I’m looking to refer people in the US, UK, CA, AU, NZ, or Germany. If you’re not from these countries, I have instructions so you can still join and get the $10 bonus. Make sure you’re using an Android or iOS phone.
        </p>
        <div className="flex justify-end">
          <PillButton onClick={() => setOpen(false)}>Got it</PillButton>
        </div>
      </Modal>
    </div>
  );
}

export default App;