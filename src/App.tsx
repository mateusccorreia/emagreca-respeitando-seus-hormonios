import CTAButton from './components/CTAButton';
import Section from './components/Section';
import ImageFrame from './components/ImageFrame';
import Reveal from './components/Reveal';
import heroImage from './assets/img-karine.jpeg';
import profileImage from './assets/img-profile.jpeg';

const CTA_TARGET = '#checkout';

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
  'PDF enxuto e imediato para aplicar hoje, sem enrolação.',
  'Protocolos claros e acompanhados de microcopys de execução.',
  'Porta de entrada para o Desafio 7 Dias — você já sai pronta.',
];

const challengeSteps = [
  {
    title: 'Compra',
    detail: 'Pagamento único de R$ 9,90 e download liberado imediatamente.',
  },
  {
    title: 'Leitura',
    detail: 'Guia curto para ler em menos de 1h e começar a aplicar no mesmo dia.',
  },
  {
    title: 'Convite do Desafio',
    detail: 'Receba o convite do Desafio 7 Dias e continue comigo na prática guiada.',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-emerald-100 text-stone-700">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-0 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="absolute right-10 top-20 h-56 w-56 rounded-full bg-stone-300/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <main className="relative pb-28 md:pb-12">
        <Section className="px-4 pt-12 md:pt-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center font-semibold shadow-sm">
                  K
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.1em] text-emerald-700">Karinne R. Oliveira</p>
                  <p className="text-sm text-stone-500">Nutrição e equilíbrio hormonal feminino</p>
                </div>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl leading-tight font-semibold text-stone-900 md:text-4xl">
                  Emagreça respeitando seus hormônios — sem dietas extremas
                </h1>
                <p className="text-lg text-stone-700 md:text-xl">
                  Um guia prático para mulheres que querem perder peso, reduzir inchaço e recuperar energia entendendo o próprio corpo.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['PDF imediato', 'Pagamento único', 'Leitura no celular'].map((chip) => (
                  <Chip key={chip} label={chip} />
                ))}
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <CTAButton href={CTA_TARGET} />
                <div className="text-sm text-stone-600">Compra segura • Acesso imediato</div>
              </div>
            </div>

            <div className="relative space-y-4">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-white/60 to-emerald-100/60 blur-xl" />
              <ImageFrame src={heroImage} alt="Karinne R. Oliveira" loading="eager" className="h-72 md:h-80" variant="leaf" />
              <div className="rounded-3xl bg-white/70 border border-stone-200 shadow-sm backdrop-blur-sm p-6 md:p-7 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-sm font-semibold border border-emerald-100">
                  <span role="img" aria-label="E-book">📘</span>
                  E-book em PDF
                </div>
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-[0.15em] text-stone-500 font-semibold">Oferta especial</p>
                  <p className="text-3xl font-bold text-stone-900">R$ 9,90 — pagamento único</p>
                </div>
                <div className="grid gap-3 text-sm text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Protocolos práticos para aplicar hoje.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Sem enrolação: direto ao ponto, enxuto.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Preparação para o Desafio 7 Dias.</span>
                  </div>
                </div>
                <CTAButton href={CTA_TARGET} className="w-full justify-center" />
                <p className="text-xs text-center text-stone-500">Pagamento processado em ambiente seguro</p>
              </div>
            </div>
          </div>
        </Section>

        <Section className="px-4 mt-12">
          <div className="max-w-4xl mx-auto text-center space-y-4 bg-white/70 border border-stone-200 rounded-3xl shadow-sm backdrop-blur-sm px-6 py-8">
            <p className="text-sm uppercase tracking-[0.15em] font-semibold text-emerald-700">Identificação</p>
            <p className="text-xl md:text-2xl leading-relaxed text-stone-800">
              Você já entendeu que{' '}
              <span className="text-emerald-700 font-semibold">dieta de moda não resolve</span> e que emagrecer
              é sobre respeitar hormônios, reduzir inflamação e ajustar rotina. Quer{' '}
              <span className="text-emerald-700 font-semibold">um roteiro simples, curto e acionável</span> para
              recuperar energia, desinchar e voltar a sentir controle do seu corpo.
            </p>
          </div>
        </Section>

        <Section className="px-4 mt-14">
          <div className="max-w-6xl mx-auto space-y-6 pb-4">
            <div className="flex items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.15em] font-semibold text-emerald-700">O que você vai aprender</p>
                <h2 className="text-2xl font-semibold text-stone-900">6 blocos rápidos para aplicar hoje</h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-stone-500 pb-1">
                <IconPulse />
                <span>Leitura em menos de 1h</span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {learnItems.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={80 * index}
                  className="group bg-white/70 border border-stone-200 rounded-2xl shadow-sm backdrop-blur-sm p-5 flex flex-col gap-3 transition duration-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-stone-600">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section className="px-4 mt-14">
          <div className="max-w-6xl mx-auto bg-white/70 border border-stone-200 rounded-3xl shadow-sm backdrop-blur-sm p-8 pb-16 space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700 uppercase tracking-[0.15em]">
              <IconCheckCircle />
              Para quem é
            </div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {audienceList.map((item, index) => (
                  <Reveal
                    as="li"
                    key={item}
                    delay={60 * index}
                    className="flex items-start gap-2 text-sm text-stone-700"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
        </Section>

        <Section className="px-4 mt-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
            <div className="bg-white/70 border border-stone-200 rounded-3xl shadow-sm backdrop-blur-sm p-6 space-y-3">
              <p className="text-sm uppercase tracking-[0.15em] font-semibold text-emerald-700">Sobre mim</p>
              <div className="grid gap-3">
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-sm text-stone-700 leading-relaxed">
                  Sou Karinne R. Oliveira, nutricionista especializada em equilíbrio hormonal feminino e nutrição ancestral.
                  Trabalho há mais de 12 anos com mulheres reais, que querem emagrecer sem abrir mão de saúde e sanidade.
                </div>
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-sm text-stone-700 leading-relaxed">
                  Meu método combina ciência, rotina viável e escuta ativa: ajusto alimentação, ritmo de treino e recuperação
                  para que você respeite seu ciclo, reduza inflamação e mantenha energia estável.
                </div>
              </div>
            </div>
            <div className="bg-white/70 border border-stone-200 rounded-3xl shadow-sm backdrop-blur-sm p-6 flex flex-col gap-4 justify-between">
              <ImageFrame src={profileImage} alt="Retrato de Karinne R. Oliveira" className="h-48" variant="leaf" />
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-700 font-semibold">Nutrição Ancestral • Equilíbrio hormonal e vida natural</p>
            </div>
          </div>
        </Section>

        <Section className="px-4 mt-14">
          <div className="max-w-6xl mx-auto bg-white/70 border border-stone-200 rounded-3xl shadow-sm backdrop-blur-sm p-8 pb-20 space-y-5">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="space-y-1">
                <p className="text-sm uppercase tracking-[0.15em] font-semibold text-emerald-700">Ponte para o desafio</p>
                <h3 className="text-xl font-semibold text-stone-900">Este e-book é o primeiro passo</h3>
              </div>
              <div className="text-sm text-stone-500">Sem enrolar: você já sai com o convite em mãos.</div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {challengeSteps.map((step, index) => (
                <Reveal
                  key={step.title}
                  delay={70 * index}
                  className="relative bg-white border border-stone-200 rounded-2xl p-5 flex flex-col gap-2 transition duration-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-9 w-9 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-semibold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <p className="font-semibold text-stone-900">{step.title}</p>
                  </div>
                  <p className="text-sm text-stone-600">{step.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section id="checkout" className="px-4 mt-14">
          <div className="max-w-5xl mx-auto bg-white/70 border border-stone-200 rounded-3xl shadow-sm backdrop-blur-sm p-8 md:p-10 pb-16 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm uppercase tracking-[0.15em] font-semibold text-emerald-700">Oferta final</p>
                <h3 className="text-2xl font-semibold text-stone-900">R$ 9,90 — pagamento único</h3>
                <p className="text-sm text-stone-600">Conteúdo direto, pronto para aplicar e sem mensalidades.</p>
              </div>
              <CTAButton className="w-full md:w-auto justify-center" />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {finalBenefits.map((benefit, index) => (
                <Reveal
                  key={benefit}
                  delay={70 * index}
                  className="flex items-start gap-2 bg-stone-50 border border-stone-200 rounded-2xl p-4 text-sm text-stone-700 transition duration-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  <CheckIcon />
                  <span>{benefit}</span>
                </Reveal>
              ))}
            </div>
            <p className="text-xs text-stone-500 mt-2">Pagamento processado em ambiente seguro</p>
          </div>
        </Section>

        <footer className="px-4 mt-12 pb-16 md:pb-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-stone-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-stone-800">Karinne R. Oliveira</span>
              <span className="text-stone-400">|</span>
              <span>Conteúdo educativo. Não substitui acompanhamento individual.</span>
            </div>
            <div className="flex items-center gap-4">
              <a className="text-emerald-700 hover:text-emerald-900 underline underline-offset-4" href="#">
                Termos
              </a>
              <a className="text-emerald-700 hover:text-emerald-900 underline underline-offset-4" href="#">
                Privacidade
              </a>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 bg-white/90 backdrop-blur border-t border-stone-200 px-4 py-3 md:hidden">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <div className="text-sm font-semibold text-stone-800">R$ 9,90</div>
          <CTAButton href={CTA_TARGET} className="flex-1 w-full justify-center" />
        </div>
      </div>
    </div>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white text-emerald-700 border border-emerald-200 px-3 py-1 text-sm font-medium hover:bg-emerald-50 transition-all duration-200">
      {label}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-emerald-600 shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 4.5L6.5 11 3 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

function IconPulse() {
  return (
    <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h3l2-6 4 12 2-6h5" />
    </svg>
  );
}

function IconCheckCircle() {
  return (
    <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}

export default App;
