import {
  type CSSProperties,
  type ElementType,
  type MouseEvent as ReactMouseEvent,
  type PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

type FadeInProps = PropsWithChildren<{
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  as?: ElementType
}>

function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  as = 'div',
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()
  const Component = motion.create(as)

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Component>
  )
}

function ContactButton() {
  return (
    <motion.a
      href="mailto:hello@jack.design"
      className="contact-button relative inline-flex shrink-0 overflow-hidden rounded-full px-6 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        Contact me
        <ArrowUpRight size={18} strokeWidth={2} />
      </span>
    </motion.a>
  )
}

function LiveProjectButton() {
  return (
    <motion.a
      href="#contact"
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-8 sm:py-3 sm:text-sm md:px-10 md:py-3.5 md:text-base"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      Live project
      <ArrowUpRight className="hidden sm:block" size={18} />
    </motion.a>
  )
}

function Magnet({
  children,
  padding = 150,
  strength = 3,
}: PropsWithChildren<{ padding?: number; strength?: number }>) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('translate3d(0,0,0)')
  const [active, setActive] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!ref.current || shouldReduceMotion) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const dx = event.clientX - centerX
    const dy = event.clientY - centerY
    const within =
      Math.abs(dx) < rect.width / 2 + padding && Math.abs(dy) < rect.height / 2 + padding
    setActive(within)
    setTransform(within ? `translate3d(${dx / strength}px, ${dy / strength}px, 0)` : 'translate3d(0,0,0)')
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        setActive(false)
        setTransform('translate3d(0,0,0)')
      }}
      style={{
        transform,
        transition: active ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}

const portrait =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png'

function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[620px] w-screen min-w-0 max-w-[100vw] flex-col overflow-x-clip bg-[#0C0C0C] px-5 sm:px-8 md:px-10">
      <FadeIn y={-20} as="nav" className="relative z-30 flex w-full min-w-0 justify-between pt-6 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] sm:text-sm md:pt-8 md:text-lg lg:text-[1.4rem]">
        {[
          ['About', '#about'],
          ['Price', '#services'],
          ['Projects', '#projects'],
          ['Contact', '#contact'],
        ].map(([label, href]) => (
          <a key={label} href={href} className="transition-opacity duration-200 hover:opacity-70">
            {label}
          </a>
        ))}
      </FadeIn>

      <FadeIn delay={0.15} y={40} className="relative z-0 mt-6 w-full min-w-0 max-w-full overflow-hidden sm:mt-4 md:-mt-5">
        <h1 className="hero-heading w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
          Hi, i&apos;m jack
        </h1>
      </FadeIn>

      <div className="pointer-events-auto absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet>
            <img
              src={portrait}
              alt="Jack, 3D creator"
              className="block h-auto w-full select-none object-contain"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex w-full min-w-0 items-end justify-between gap-3 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[160px] text-[clamp(.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]">
            A 3D creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <ArrowDownRight
        aria-hidden="true"
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 text-[#D7E2EA]/60 md:block"
        size={28}
      />
    </section>
  )
}

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

function MarqueeRow({ images, direction, offset }: { images: string[]; direction: 1 | -1; offset: number }) {
  const tripled = [...images, ...images, ...images]
  const x = direction === 1 ? offset - 200 : -(offset - 200)

  return (
    <div className="marquee-mask w-full overflow-hidden">
      <div
        className="flex w-max gap-3"
        style={{ transform: `translate3d(${x}px,0,0)`, willChange: 'transform' }}
      >
        {tripled.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt=""
            loading="lazy"
            className="h-[180px] w-[280px] shrink-0 rounded-2xl object-cover sm:h-[220px] sm:w-[340px] md:h-[270px] md:w-[420px]"
          />
        ))}
      </div>
    </div>
  )
}

function MarqueeSection() {
  const ref = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const update = () => {
      if (!ref.current) return
      const sectionTop = ref.current.offsetTop
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section ref={ref} className="space-y-3 overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40">
      <MarqueeRow images={marqueeImages.slice(0, 11)} direction={1} offset={offset} />
      <MarqueeRow images={marqueeImages.slice(11)} direction={-1} offset={offset} />
    </section>
  )
}

const aboutDecor = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    alt: 'Silver moon',
    className: 'top-[4%] left-[1%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]',
    delay: 0.1,
    x: -80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    alt: 'Abstract blue 3D object',
    className: 'bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]',
    delay: 0.25,
    x: -80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    alt: 'Colorful 3D block',
    className: 'top-[4%] right-[1%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]',
    delay: 0.15,
    x: 80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    alt: 'Abstract chrome 3D composition',
    className: 'bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]',
    delay: 0.3,
    x: 80,
  },
]

const aboutText =
  "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"

function AnimatedCharacter({
  char,
  index,
  count,
  progress,
}: {
  char: string
  index: number
  count: number
  progress: MotionValue<number>
}) {
  const start = index / count
  const end = Math.min(start + 0.14, 1)
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <span className="relative inline-block">
      <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  )
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  return (
    <p
      ref={ref}
      className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
    >
      {Array.from(text).map((char, index) => (
        <AnimatedCharacter
          key={`${char}-${index}`}
          char={char}
          index={index}
          count={text.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  )
}

function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-24 sm:px-8 md:px-10">
      {aboutDecor.map((item) => (
        <FadeIn
          key={item.src}
          delay={item.delay}
          x={item.x}
          y={0}
          duration={0.9}
          className={`pointer-events-none absolute z-0 ${item.className}`}
        >
          <img src={item.src} alt={item.alt} className="h-auto w-full object-contain" loading="lazy" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center">
        <FadeIn y={40}>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </h2>
        </FadeIn>
        <div className="mt-10 sm:mt-14 md:mt-16">
          <AnimatedText text={aboutText} />
        </div>
        <div id="contact" className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.15} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    name: 'Branding',
    description:
      'Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.',
  },
  {
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
]

function ServicesSection() {
  return (
    <section id="services" className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-5xl border-t border-black/15">
        {services.map((service, index) => (
          <FadeIn key={service.name} delay={index * 0.1}>
            <article className="grid grid-cols-[80px_1fr] gap-4 border-b border-black/15 py-8 sm:grid-cols-[150px_1fr] sm:gap-7 sm:py-10 md:grid-cols-[220px_1fr] md:py-12">
              <span className="text-[clamp(3rem,10vw,140px)] font-black leading-[0.82] tracking-tight text-[#0C0C0C]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="pt-1 sm:pt-2">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-none text-[#0C0C0C]">
                  {service.name}
                </h3>
                <p className="mt-4 max-w-2xl text-[clamp(.85rem,1.6vw,1.25rem)] font-light leading-relaxed text-[#0C0C0C]/60 sm:mt-5">
                  {service.description}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

const projects = [
  {
    name: 'Nextlevel Studio',
    category: 'Client',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    name: 'Aura Brand Identity',
    category: 'Personal',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
  },
  {
    name: 'Solaris Digital',
    category: 'Client',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ],
  },
]

function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[number]
  index: number
  total: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0.2, 1], [1, targetScale])
  const radius = 'rounded-[26px] sm:rounded-[40px] md:rounded-[55px]'

  return (
    <div ref={cardRef} className="h-[85vh] min-h-[650px]">
      <motion.article
        style={{ scale, top: `calc(6rem + ${index * 28}px)` }}
        className="sticky overflow-hidden rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 text-[#D7E2EA] sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="mb-4 grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-2 px-1 sm:mb-6 md:grid-cols-[auto_140px_1fr_auto] md:gap-x-8">
          <span className="row-span-2 text-[clamp(3rem,8vw,110px)] font-black leading-[0.78] tracking-tight md:row-span-1">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[11px] font-light uppercase tracking-[0.2em] opacity-60 sm:text-sm">
            {project.category}
          </span>
          <h3 className="col-span-2 text-right text-[clamp(1rem,2.3vw,2rem)] font-medium uppercase leading-none md:col-span-1 md:text-left">
            {project.name}
          </h3>
          <div className="col-start-3 row-start-1 md:col-start-4">
            <LiveProjectButton />
          </div>
        </div>

        <div className="grid h-[55vh] min-h-[410px] grid-cols-[40%_60%] gap-2 sm:gap-3">
          <div className="grid grid-rows-[42%_58%] gap-2 sm:gap-3">
            <img src={project.images[0]} alt={`${project.name} detail one`} loading="lazy" className={`${radius} h-full w-full object-cover`} />
            <img src={project.images[1]} alt={`${project.name} detail two`} loading="lazy" className={`${radius} h-full w-full object-cover`} />
          </div>
          <img src={project.images[2]} alt={`${project.name} main project view`} loading="lazy" className={`${radius} h-full w-full object-cover`} />
        </div>
      </motion.article>
    </div>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-4 pb-32 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32">
      <FadeIn>
        <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20">
          Project
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-[1440px]">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} total={projects.length} />
        ))}
      </div>
      <footer className="mx-auto mt-16 flex max-w-[1440px] items-end justify-between border-t border-[#D7E2EA]/25 pt-8 text-[#D7E2EA]">
        <p className="text-sm font-light uppercase tracking-widest">Available for selected projects</p>
        <p className="text-sm font-light uppercase tracking-widest">© 2026 Jack</p>
      </footer>
    </section>
  )
}

export default function App() {
  const wrapperStyle: CSSProperties = { overflowX: 'clip' }

  return (
    <main className="min-h-screen w-screen min-w-0 max-w-[100vw] bg-[#0C0C0C]" style={wrapperStyle}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  )
}
