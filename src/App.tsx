import { useState, useEffect } from 'react';
import CTAButton from './components/CTAButton';
import Section from './components/Section';
import Reveal from './components/Reveal';
import karineImage from './assets/img-karine.jpeg';
import mockupMultiDevice from './assets/muck-up-ebook.jpeg';
import mockupLifestyle from './assets/muckup.jpeg';

const CTA_TARGET = '#checkout';

// Data
const learnItems = [
  {
    title: 'Mapear hormônios-chave',
    description: 'Cortisol, insulina e tireoide: entenda como cada um impacta o seu peso e quais marcadores observar.',
    icon: <IconMolecule />,
  },
  {
    title: 'Ritual matinal anti-inchaço',
    description: 'Sequência de 10 minutos para reduzir retenção, melhorar digestão e estabilizar o humor logo cedo.',
    icon: <IconSunrise />,
  },
  {
    title: 'Prato que equilibra',
    description: 'Combinações simples de proteínas, fibras e gorduras para saciedade real, sem contar calorias.',
    icon: <IconPlate />,
  },
  {
    title: 'Treinos que respeitam o ciclo',
    description: 'Ajuste intensidade, descanso e alimentação de acordo com cada fase do seu ciclo menstrual.',
    icon: <IconCycle />,
  },
  {
    title: 'SOS TPM e cravings',
    description: 'Micro substituições e timing de nutrientes para controlar compulsão e ansiedade.',
    icon: <IconSpark />,
  },
  {
    title: 'Semana modelo',
    description: 'Roteiro prático de 7 dias com horários, hidratação e ajustes rápidos para manter consistência.',
    icon: <IconCalendar />,
  },
];

const audienceList = [
  'Mulheres que já cortaram calorias e seguem cansadas, inflamadas ou sem resultado.',
  'Quem quer emagrecer respeitando hormônios, sem dietas extremas ou treinos exaustivos.',
  'Profissionais e mães com rotina cheia que precisam de um passo a passo direto para seguir.',
  'Quem busca reduzir inchaço, regular ciclo e recuperar energia sem depender de restrições eternas.',
];

const finalBenefits = [
  { icon: <IconDownload />, text: 'PDF enxuto e imediato para aplicar hoje, sem enrolação.' },
  { icon: <IconGuide />, text: 'Protocolos claros e acompanhados de microcopys de execução.' },
  { icon: <IconRocket />, text: 'Porta de entrada para o Desafio 7 Dias — você já sai pronta.' },
];

const challengeSteps = [
  {
    step: '01',
    title: 'Compra',
    detail: 'Pagamento único de R$ 9,90 e download liberado imediatamente.',
  },
  {
    step: '02',
    title: 'Leitura',
    detail: 'Guia curto para ler em menos de 1h e começar a aplicar no mesmo dia.',
  },
  {
    step: '03',
    title: 'Desafio',
    detail: 'Receba o convite do Desafio 7 Dias e continue comigo na prática guiada.',
  },
];

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-500 text-white font-body overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Left glow */}
        <div className="absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse-slow" />
        {/* Right glow */}
        <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] rounded-full bg-emerald-600/8 blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        {/* Bottom center glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-emerald-500/5 blur-[80px]" />
      </div>

      {/* Header with Logo */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-dark-500/90 backdrop-blur-lg border-b border-emerald-500/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-center">
            <Logo />
          </div>
        </div>
      </header>

      <main className="relative pt-28 pb-32 md:pb-16">
        {/* ===== HERO SECTION ===== */}
        <Section className="px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8 text-center lg:text-left">
                <Reveal>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    E-book disponível agora
                  </span>
                </Reveal>

                <Reveal delay={100}>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Emagreça{' '}
                    <span className="gradient-text">respeitando</span>
                    <br />
                    seus hormônios
                  </h1>
                </Reveal>

                <Reveal delay={200}>
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Um guia prático para mulheres que querem perder peso, reduzir inchaço e recuperar energia — 
                    <span className="text-emerald-400 font-medium"> sem dietas extremas</span>.
                  </p>
                </Reveal>

                <Reveal delay={300}>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                    {['PDF imediato', 'R$ 9,90', 'Leitura no celular'].map((chip, index) => (
                      <span
                        key={chip}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium"
                        style={{ animationDelay: `${400 + index * 100}ms` }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={500}>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <CTAButton href={CTA_TARGET} />
                    <span className="text-white/50 text-sm flex items-center gap-2">
                      <IconShield />
                      Compra 100% segura
                    </span>
                  </div>
                </Reveal>
              </div>

              {/* Right - Product Mockup */}
              <Reveal delay={300} className="relative">
                <div className="relative">
                  {/* Glow background */}
                  <div className="absolute inset-0 bg-gradient-radial from-emerald-500/20 via-transparent to-transparent blur-3xl scale-110" />
                  
                  {/* Main mockup image */}
                  <div className="relative rounded-3xl overflow-hidden animate-float">
                    <img
                      src={mockupMultiDevice}
                      alt="Equilíbrio Hormonal - E-book em múltiplos dispositivos"
                      className="w-full h-auto rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* ===== IDENTIFICATION SECTION ===== */}
        <Section className="px-4 md:px-6 mt-24 md:mt-32">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                
                <p className="text-emerald-400 text-sm font-semibold uppercase tracking-[0.2em] mb-6">
                  Você se identifica?
                </p>
                <p className="text-xl md:text-2xl leading-relaxed text-white/90">
                  Você já entendeu que{' '}
                  <span className="text-emerald-400 font-semibold">dieta de moda não resolve</span> e que emagrecer
                  é sobre respeitar hormônios, reduzir inflamação e ajustar rotina. Quer{' '}
                  <span className="text-emerald-400 font-semibold">um roteiro simples, curto e acionável</span> para
                  recuperar energia, desinchar e voltar a sentir controle do seu corpo.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ===== WHAT YOU'LL LEARN SECTION ===== */}
        <Section className="px-4 md:px-6 mt-24 md:mt-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <Reveal>
                <p className="text-emerald-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                  O que você vai aprender
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
                  6 blocos práticos para{' '}
                  <span className="gradient-text">aplicar hoje</span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 text-white/60 flex items-center justify-center gap-2">
                  <IconClock />
                  Leitura em menos de 1 hora
                </p>
              </Reveal>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {learnItems.map((item, index) => (
                <Reveal key={item.title} delay={100 + index * 80}>
                  <div className="group glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:border-emerald-500/40 hover:shadow-glow hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* ===== LIFESTYLE MOCKUP SECTION ===== */}
        <Section className="px-4 md:px-6 mt-24 md:mt-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Reveal className="order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={mockupLifestyle}
                    alt="E-book Equilíbrio Hormonal em ambiente aconchegante"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500/60 via-transparent to-transparent" />
                </div>
              </Reveal>
              
              <div className="order-1 lg:order-2 space-y-8">
                <Reveal>
                  <p className="text-emerald-400 text-sm font-semibold uppercase tracking-[0.2em]">
                    Para quem é
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
                    Este guia foi feito para{' '}
                    <span className="gradient-text">você</span>
                  </h2>
                </Reveal>
                
                <div className="space-y-4">
                  {audienceList.map((item, index) => (
                    <Reveal key={item} delay={100 + index * 80}>
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors">
                        <div className="mt-0.5 flex-shrink-0">
                          <IconCheck />
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">{item}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ===== ABOUT SECTION ===== */}
        <Section className="px-4 md:px-6 mt-24 md:mt-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
              <Reveal>
                <div className="glass-card rounded-3xl p-8 md:p-10 h-full">
                  <p className="text-emerald-400 text-sm font-semibold uppercase tracking-[0.2em] mb-6">
                    Sobre a autora
                  </p>
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-white/80 leading-relaxed">
                        Sou <span className="text-emerald-400 font-semibold">Karinne R. Oliveira</span>, nutricionista especializada em equilíbrio hormonal feminino e nutrição ancestral.
                        Trabalho há mais de 12 anos com mulheres reais, que querem emagrecer sem abrir mão de saúde e sanidade.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-white/80 leading-relaxed">
                        Meu método combina ciência, rotina viável e escuta ativa: ajusto alimentação, ritmo de treino e recuperação
                        para que você respeite seu ciclo, reduza inflamação e mantenha energia estável.
                      </p>
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold">
                      Nutrição Ancestral • Equilíbrio hormonal • Vida natural
                    </p>
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={150}>
                <div className="glass-card rounded-3xl p-6 h-full flex flex-col">
                  <div className="relative flex-1 rounded-2xl overflow-hidden" style={{ minHeight: '300px' }}>
                    <img
                      src={karineImage}
                      alt="Karinne R. Oliveira"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold">Karinne R. Oliveira</p>
                      <p className="text-emerald-400 text-sm">Nutricionista • CRN 12345</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* ===== HOW IT WORKS SECTION ===== */}
        <Section className="px-4 md:px-6 mt-24 md:mt-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <Reveal>
                <p className="text-emerald-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                  Como funciona
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
                  3 passos para{' '}
                  <span className="gradient-text">começar hoje</span>
                </h2>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {challengeSteps.map((step, index) => (
                <Reveal key={step.title} delay={100 + index * 100}>
                  <div className="relative glass-card rounded-2xl p-8 text-center h-full transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-display text-2xl font-bold mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{step.detail}</p>
                    
                    {/* Connector line */}
                    {index < challengeSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-emerald-500/50 to-transparent" />
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* ===== CHECKOUT SECTION ===== */}
        <Section id="checkout" className="px-4 md:px-6 mt-24 md:mt-32">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="relative glass-card-light rounded-3xl p-8 md:p-12 overflow-hidden">
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider mb-3">
                        Oferta especial
                      </span>
                      <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-800 mb-1">
                        R$ 9,90
                      </h2>
                      <p className="text-stone-600">Pagamento único • Acesso imediato</p>
                    </div>
                    <CTAButton href="#" className="w-full lg:w-auto" label="👉 Quero meu e-book agora" />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {finalBenefits.map((benefit, index) => (
                      <div key={benefit.text} className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                        <div className="flex-shrink-0 text-emerald-600">
                          {benefit.icon}
                        </div>
                        <p className="text-sm text-stone-700 leading-relaxed">{benefit.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-6 text-xs text-stone-500">
                    <span className="flex items-center gap-1">
                      <IconLock />
                      Pagamento seguro
                    </span>
                    <span className="flex items-center gap-1">
                      <IconDownload />
                      Download imediato
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ===== FOOTER ===== */}
        <footer className="px-4 md:px-6 mt-20 pb-24 md:pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="section-divider mb-8" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
              <div className="flex items-center gap-3">
                <Logo size="sm" />
                <span>|</span>
                <span>Conteúdo educativo. Não substitui acompanhamento individual.</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-white/50 hover:text-emerald-400 transition-colors">
                  Termos
                </a>
                <a href="#" className="text-white/50 hover:text-emerald-400 transition-colors">
                  Privacidade
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Mobile Fixed CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-dark-500/95 backdrop-blur-lg border-t border-emerald-500/20 px-4 py-4 md:hidden">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-xs text-white/50">Oferta especial</p>
            <p className="text-lg font-bold text-white">R$ 9,90</p>
          </div>
          <CTAButton href={CTA_TARGET} className="flex-1 justify-center" label="Comprar agora →" />
        </div>
      </div>
    </div>
  );
}

// ===== LOGO COMPONENT =====
function Logo({ size = 'default' }: { size?: 'sm' | 'default' }) {
  const sizeClasses = size === 'sm' ? 'text-base' : 'text-xl';
  return (
    <div className={`flex items-center gap-3 ${sizeClasses}`}>
      <div className={`${size === 'sm' ? 'h-8 w-8' : 'h-10 w-10'} rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-display font-bold shadow-glow`}>
        K
      </div>
      <div>
        <p className="font-display font-semibold text-white">Karinne R. Oliveira</p>
        {size !== 'sm' && (
          <p className="text-xs text-emerald-400/80">Nutrição • Equilíbrio hormonal</p>
        )}
      </div>
    </div>
  );
}

// ===== ICONS =====
function IconCheck() {
  return (
    <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function IconGuide() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11" x2="16" y2="11" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function IconMolecule() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="12" r="2.5" />
      <circle cx="17" cy="7" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
      <path d="M8.9 10.5 15.2 8.5M8.9 13.5l6.3 2" />
    </svg>
  );
}

function IconSunrise() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 17h16M4 12h2M18 12h2M12 3v4M8 17a4 4 0 0 1 8 0" />
      <path d="m9 9 3-3 3 3" />
    </svg>
  );
}

function IconPlate() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="7" />
      <path d="M7 12h10M12 7v10" />
    </svg>
  );
}

function IconCycle() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7h4v4" />
      <path d="M13 13h4v4" />
      <path d="M7 11a5 5 0 0 1 8.5-3.5L18 10" />
      <path d="M17 13a5 5 0 0 1-8.5 3.5L6 14" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 9.5 8.5 3 11l6.5 2.5L12 20l2.5-6.5L21 11l-6.5-2.5L12 2Z" />
      <path d="M5 3v3M3 5h3" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M9 3v4M15 3v4" />
      <path d="M9 14h2v2H9zM13 14h2v2h-2z" />
    </svg>
  );
}

export default App;
