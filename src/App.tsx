import {
  type CSSProperties,
  type ElementType,
  type PropsWithChildren,
  createContext,
  useEffect,
  useContext,
  useRef,
  useState,
} from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  Check,
  Copy,
  Dribbble,
  Instagram,
  Linkedin,
  Mail,
  X,
} from 'lucide-react'
import InteractiveAvatar from './components/InteractiveAvatar/Avatar'
import researchAiToolComparison from './assets/research-ai-tool-comparison.png'
import aeroCourseCover from './assets/aero-course-cover.jpg'
import guidedCreationFlow from './assets/guided-creation-flow.jpg'

type Language = 'en' | 'zh'

const LanguageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
}>({ language: 'en', setLanguage: () => undefined })

function useLanguage() {
  return useContext(LanguageContext)
}

function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed right-5 top-20 z-[120] flex rounded-full border border-white/25 bg-[#111]/90 p-1 text-[11px] font-medium uppercase tracking-wider text-white shadow-lg backdrop-blur-md sm:right-8 sm:top-24">
      {(['en', 'zh'] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={`rounded-full px-3 py-2 transition-colors ${
            language === item ? 'bg-[#D7E2EA] text-[#0C0C0C]' : 'text-white/55 hover:text-white'
          }`}
          aria-pressed={language === item}
        >
          {item === 'en' ? 'EN' : '中文'}
        </button>
      ))}
    </div>
  )
}

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

function ContactButton({ onClick }: { onClick: () => void }) {
  const { language } = useLanguage()
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="contact-button relative inline-flex shrink-0 overflow-hidden rounded-full px-6 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      aria-haspopup="dialog"
    >
      <span className="relative z-10 flex items-center gap-2">
        {language === 'en' ? 'Contact me' : '联系我'}
        <ArrowUpRight size={18} strokeWidth={2} />
      </span>
    </motion.button>
  )
}

function CaseStudyButton({ slug }: { slug: string }) {
  const { language } = useLanguage()
  return (
    <motion.a
      href={`#/case-study/${slug}`}
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-8 sm:py-3 sm:text-sm md:px-10 md:py-3.5 md:text-base"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {language === 'en' ? 'Case study' : '案例详情'}
      <ArrowUpRight className="hidden sm:block" size={18} />
    </motion.a>
  )
}

function HeroSection({ onContactClick }: { onContactClick: () => void }) {
  const { language } = useLanguage()
  const navItems = language === 'en'
    ? [['About', '#about'], ['Capabilities', '#services'], ['Projects', '#projects'], ['Contact', '#contact']]
    : [['关于我', '#about'], ['专业能力', '#services'], ['项目', '#projects'], ['联系', '#contact']]

  return (
    <section className="relative flex h-screen min-h-[620px] w-screen min-w-0 max-w-[100vw] flex-col overflow-x-clip bg-[#0C0C0C] px-5 sm:px-8 md:px-10">
      <FadeIn y={-20} as="nav" className="relative z-30 flex w-full min-w-0 justify-between pt-6 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] sm:text-sm md:pt-8 md:text-lg lg:text-[1.4rem]">
        {navItems.map(([label, href]) =>
          href === '#contact' ? (
            <button
              key={label}
              type="button"
              onClick={onContactClick}
              className="uppercase transition-opacity duration-200 hover:opacity-70"
            >
              {label}
            </button>
          ) : (
            <a key={label} href={href} className="transition-opacity duration-200 hover:opacity-70">
              {label}
            </a>
          ),
        )}
      </FadeIn>

      <FadeIn delay={0.15} y={40} className="relative z-0 mt-6 w-full min-w-0 max-w-full overflow-hidden sm:mt-4 md:mt-[clamp(2rem,5vh,3.5rem)]">
        <h1 className="hero-heading w-full text-center font-black uppercase tracking-tight">
          <span className="block text-[18vw] leading-[0.82] sm:text-[16vw]">
            {language === 'en' ? <>Hi, i&apos;m</> : '你好，我是'}
          </span>
          <span className="mt-[0.21em] block text-[15.5vw] leading-[0.82] sm:text-[13.5vw]">
            Carol
          </span>
        </h1>
      </FadeIn>

      <div className="pointer-events-auto absolute bottom-[7rem] left-1/2 z-10 w-[min(50vw,180px)] -translate-x-1/2 sm:bottom-0 sm:w-[min(30vw,220px)] md:left-auto md:right-[clamp(8rem,18vw,18rem)] md:w-[min(20vh,260px)] md:translate-x-0 lg:right-[clamp(12rem,18vw,20rem)]">
        <FadeIn delay={0.6} y={30}>
          <InteractiveAvatar />
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex w-full min-w-0 items-end justify-between gap-3 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[180px] text-[clamp(.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[260px] md:max-w-[360px]">
            {language === 'en'
              ? 'A product designer driven by transforming complex problems into clear and meaningful experiences.'
              : '一名产品设计师，致力于将复杂问题转化为清晰且有意义的产品体验。'}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onContactClick} />
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
  '7 years of UI/UX design experience across 20+ B2B tools, AI products, and digital platforms. I specialize in transforming complex business requirements into clear user flows, scalable design systems, and intuitive product experiences, collaborating closely with product, engineering, and AI teams to deliver impactful solutions. Key achievements include improving click-to-download conversion by 2–3x and reducing intelligent video analysis processing time by 40%.'
const aboutTextZh =
  '拥有 7 年 UI/UX 设计经验，参与过 20 多款 B2B 工具、AI 产品和数字平台。我擅长将复杂的业务需求转化为清晰的用户流程、可扩展的设计系统与直观的产品体验，并与产品、研发和 AI 团队紧密协作，交付有影响力的解决方案。代表成果包括将点击到下载的转化率提升 2–3 倍，并将智能视频分析处理时间缩短 40%。'

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
      className="max-w-[760px] text-center text-[clamp(.95rem,1.7vw,1.25rem)] font-medium leading-relaxed text-[#D7E2EA]"
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

function AboutSection({ onContactClick }: { onContactClick: () => void }) {
  const { language } = useLanguage()
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
            {language === 'en' ? 'About me' : '关于我'}
          </h2>
        </FadeIn>
        <div className="mt-10 sm:mt-14 md:mt-16">
          <AnimatedText text={language === 'en' ? aboutText : aboutTextZh} />
        </div>
        <div id="contact" className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.15} y={20}>
            <ContactButton onClick={onContactClick} />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    name: 'Product Strategy & Workflow Design',
    nameZh: '产品策略与工作流设计',
    description:
      'Transform complex business requirements into clear product flows by understanding user roles, business processes, and technical constraints. Define core journeys and MVP solutions that align user needs with business goals.',
    descriptionZh:
      '通过理解用户角色、业务流程与技术约束，将复杂业务需求转化为清晰的产品流程，定义核心旅程与 MVP 方案，使用户需求与商业目标保持一致。',
  },
  {
    name: 'AI Interaction Design',
    nameZh: 'AI 交互设计',
    description:
      'Design controllable and transparent AI experiences through structured interactions, including confirmation steps, partial editing, progressive feedback, retry mechanisms, and risk guidance.',
    descriptionZh:
      '通过确认步骤、局部编辑、渐进式反馈、重试机制与风险提示等结构化交互，设计可控、透明且值得信赖的 AI 产品体验。',
  },
  {
    name: 'Complex Product & Tool Design',
    nameZh: '复杂产品与工具设计',
    description:
      'Design high-density product experiences involving complex editors, dual-view workflows, canvas interactions, multi-role collaboration, and decision-making systems.',
    descriptionZh:
      '设计包含复杂编辑器、双视图工作流、画布交互、多角色协作和决策系统的高信息密度产品体验。',
  },
  {
    name: 'Design Systems & Cross-functional Collaboration',
    nameZh: '设计系统与跨职能协作',
    description:
      'Build scalable components, interaction patterns, and design guidelines. Collaborate with product, engineering, AI, and business teams through high-fidelity designs and documentation to deliver consistent solutions.',
    descriptionZh:
      '构建可扩展的组件、交互模式与设计规范，通过高保真设计和文档与产品、研发、AI 及业务团队协作，交付一致的解决方案。',
  },
]

function ServicesSection() {
  const { language } = useLanguage()
  return (
    <section id="services" className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28">
          {language === 'en' ? 'Capabilities' : '专业能力'}
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
                  {language === 'en' ? service.name : service.nameZh}
                </h3>
                <p className="mt-4 max-w-2xl text-[clamp(.85rem,1.6vw,1.25rem)] font-light leading-relaxed text-[#0C0C0C]/60 sm:mt-5">
                  {language === 'en' ? service.description : service.descriptionZh}
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
    name: 'Aero.ai Course Authoring System',
    nameZh: 'Aero.ai 课程创作系统',
    slug: 'nextlevel-studio',
    category: 'Client',
    categoryZh: '客户项目',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    name: 'Aura Brand Identity',
    nameZh: 'Aura 品牌视觉系统',
    slug: 'aura-brand-identity',
    category: 'Personal',
    categoryZh: '个人项目',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
  },
  {
    name: 'Solaris Digital',
    nameZh: 'Solaris 数字产品',
    slug: 'solaris-digital',
    category: 'Client',
    categoryZh: '客户项目',
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
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const { language } = useLanguage()
  const projectName = language === 'en' ? project.name : project.nameZh
  return (
    <motion.article
      className="group overflow-hidden rounded-[28px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-3 text-[#D7E2EA] sm:rounded-[36px] sm:p-4 lg:rounded-[44px] lg:p-5"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="mb-4 flex min-h-[88px] items-center gap-3 px-1 sm:mb-5 sm:min-h-[100px] sm:gap-4">
          <span className="shrink-0 text-[clamp(3.2rem,6vw,5.5rem)] font-black leading-[0.78] tracking-tight">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] font-light uppercase tracking-[0.2em] opacity-60 sm:text-xs">
              {language === 'en' ? project.category : project.categoryZh}
            </span>
            <h3 className="mt-2 text-[clamp(1rem,1.65vw,1.5rem)] font-medium uppercase leading-none">
              {projectName}
            </h3>
          </div>
          <div className="hidden shrink-0 xl:block">
            <CaseStudyButton slug={project.slug} />
          </div>
      </div>

      {project.slug === 'nextlevel-studio' ? (
        <div className="aspect-[4/3] overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[34px]">
          <img
            src={aeroCourseCover}
            alt="Aero.ai Course Authoring System cover"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="grid aspect-[4/3] grid-rows-[2fr_1fr] gap-2 sm:gap-3">
          <div className="overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[34px]">
            <img
              src={project.images[2]}
              alt={`${project.name} main project view`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <img
              src={project.images[0]}
              alt={`${project.name} detail one`}
              loading="lazy"
              className="h-full min-h-0 w-full rounded-[18px] object-cover sm:rounded-[24px] lg:rounded-[30px]"
            />
            <img
              src={project.images[1]}
              alt={`${project.name} detail two`}
              loading="lazy"
              className="h-full min-h-0 w-full rounded-[18px] object-cover sm:rounded-[24px] lg:rounded-[30px]"
            />
          </div>
        </div>
      )}

      <div className="mt-4 xl:hidden">
        <CaseStudyButton slug={project.slug} />
      </div>
    </motion.article>
  )
}

function ProjectsSection() {
  const { language } = useLanguage()
  return (
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-4 pb-32 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32">
      <FadeIn>
        <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20">
          {language === 'en' ? 'Projects' : '项目'}
        </h2>
      </FadeIn>
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
      <footer className="mx-auto mt-16 flex max-w-[1440px] items-end justify-between border-t border-[#D7E2EA]/25 pt-8 text-[#D7E2EA]">
        <p className="text-sm font-light uppercase tracking-widest">
          {language === 'en' ? 'Available for selected projects' : '可承接精选项目'}
        </p>
        <p className="text-sm font-light uppercase tracking-widest">© 2026 Carol</p>
      </footer>
    </section>
  )
}

const caseStudySections = [
  {
    id: 'background',
    label: 'Background',
    labelZh: '项目背景',
    description:
      'Traditional Content Production System + AI Transformation\nThis was not simply an upgrade of adding AI features to existing software. The core challenge was defining the role, responsibility, and boundaries of AI within a professional training workflow.',
    descriptionZh:
      '传统内容生产系统 + AI 转型\n这并非简单地在现有软件中增加 AI 功能。核心挑战是在专业培训工作流中明确 AI 的角色、责任与边界。',
  },
  {
    id: 'research',
    label: 'Research',
    labelZh: '研究',
    description: 'Why Existing AI Tools Were Not Enough',
    descriptionZh: '为什么现有 AI 工具仍然不够',
  },
  {
    id: 'design-challenge',
    label: 'Core Production Challenges',
    labelZh: '核心生产挑战',
    description:
      'Translate competing needs and technical limitations into a focused, actionable design challenge.',
    descriptionZh: '将相互竞争的需求与技术限制，转化为聚焦且可执行的设计挑战。',
  },
  {
    id: 'solution',
    label: 'Key Design Decisions',
    labelZh: '关键设计决策',
    description: '',
    descriptionZh: '',
  },
  {
    id: 'prototype',
    label: 'Figma Design System',
    labelZh: 'Figma 设计系统',
    description:
      'Bring the experience to life through high-fidelity states and testable interaction details.',
    descriptionZh: '通过高保真状态与可测试的交互细节，让产品体验真实呈现。',
  },
  {
    id: 'reflection',
    label: 'Other Key Screens',
    labelZh: '其他关键页面',
    description:
      'Capture outcomes, lessons, and the opportunities that would shape the next iteration.',
    descriptionZh: '总结成果、经验与机会，为下一轮迭代提供方向。',
  },
]

function CaseStudyPage({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const { language } = useLanguage()
  const [activeSection, setActiveSection] = useState(caseStudySections[0].id)
  const projectName = language === 'en' ? project.name : project.nameZh

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.05, 0.25, 0.5] },
    )

    caseStudySections.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [project.slug])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA]">
      <header className="flex items-center justify-between px-5 py-6 sm:px-8 md:px-12 md:py-8">
        <a
          href="#projects"
          className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-65 sm:text-sm"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          {language === 'en' ? 'Back to projects' : '返回项目'}
        </a>
        <span className="text-xs font-light uppercase tracking-[0.22em] text-[#D7E2EA]/50">
          {language === 'en' ? 'Case study' : '案例'} / {String(index + 1).padStart(2, '0')}
        </span>
      </header>

      <section className="px-5 pb-20 pt-10 sm:px-8 md:px-12 md:pb-28 md:pt-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-[#D7E2EA]/50">
                {language === 'en' ? `${project.category} project` : project.categoryZh}
              </p>
              <h1
                className={`hero-heading max-w-6xl font-black uppercase leading-[0.82] tracking-tight ${
                  project.slug === 'nextlevel-studio'
                    ? 'text-[clamp(3.2rem,7vw,7.5rem)]'
                    : 'text-[clamp(3.6rem,10vw,10rem)]'
                }`}
              >
                {project.slug === 'nextlevel-studio' ? (
                  <>
                    <span className="block whitespace-nowrap">{language === 'en' ? 'Aero.ai Course' : 'Aero.ai 课程'}</span>
                    <span className="block whitespace-nowrap">{language === 'en' ? 'Authoring System' : '创作系统'}</span>
                  </>
                ) : (
                  projectName
                )}
              </h1>
            </div>
            <span className="text-[clamp(4rem,9vw,8rem)] font-black leading-none text-[#D7E2EA]/15">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {project.slug !== 'nextlevel-studio' && (
            <motion.div
              className="mt-12 overflow-hidden rounded-[30px] sm:rounded-[44px] md:mt-16 md:rounded-[60px]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <img
                src={project.images[2]}
                alt={`${project.name} case study cover`}
                className="aspect-[16/9] w-full object-cover"
              />
            </motion.div>
          )}
        </div>
      </section>

      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 pb-32 sm:px-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16 lg:px-12">
        <aside className="hidden self-start lg:sticky lg:top-8 lg:block">
          <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.28em] text-[#D7E2EA]/40">
            {language === 'en' ? 'Project index' : '项目目录'}
          </p>
          <nav className="relative py-2" aria-label="Case study sections">
            <span className="absolute bottom-0 left-0 top-0 w-px bg-[#D7E2EA]/20" />
            {caseStudySections.map(({ id, label }, sectionIndex) => {
              const active = activeSection === id
              const tickWidth = sectionIndex % 2 === 0 ? 'w-8' : 'w-5'

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className={`group relative flex w-full items-center py-4 pl-14 text-left text-xs font-medium uppercase tracking-[0.16em] transition-colors ${
                    active ? 'text-[#D7E2EA]' : 'text-[#D7E2EA]/35 hover:text-[#D7E2EA]/75'
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1/2 h-px -translate-y-1/2 transition-all duration-300 ${
                      active ? 'w-11 bg-[#D7E2EA]' : `${tickWidth} bg-[#D7E2EA]/30 group-hover:w-9`
                    }`}
                  />
                  <span className="mr-3 text-[9px] opacity-45">
                    {String(sectionIndex + 1).padStart(2, '0')}
                  </span>
                  {language === 'en' ? label : caseStudySections[sectionIndex].labelZh}
                </button>
              )
            })}
          </nav>
        </aside>

        <div className="min-w-0">
          <div className="sticky top-0 z-20 -mx-5 mb-8 overflow-x-auto border-y border-[#D7E2EA]/15 bg-[#0C0C0C]/95 px-5 py-4 backdrop-blur lg:hidden">
            <div className="flex w-max gap-2">
              {caseStudySections.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className={`rounded-full border px-4 py-2 text-[10px] font-medium uppercase tracking-[0.14em] transition-colors ${
                    activeSection === id
                      ? 'border-[#D7E2EA] bg-[#D7E2EA] text-[#0C0C0C]'
                      : 'border-[#D7E2EA]/20 text-[#D7E2EA]/50'
                  }`}
                >
                  {language === 'en' ? label : caseStudySections.find((item) => item.id === id)?.labelZh}
                </button>
              ))}
            </div>
          </div>

          {caseStudySections.map((section, sectionIndex) => {
            const primaryImage =
              project.slug === 'nextlevel-studio' && section.id === 'solution'
                ? guidedCreationFlow
                : project.images[sectionIndex % project.images.length]
            const secondaryImage = project.images[(sectionIndex + 1) % project.images.length]
            const showPair = sectionIndex === 1 || sectionIndex === 4 || sectionIndex === 6

            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 border-t border-[#D7E2EA]/15 py-16 first:border-t-0 first:pt-0 sm:py-20 md:py-24"
              >
                <div className="relative mb-10">
                  <span
                    className="absolute right-0 top-1 text-right text-xs font-medium tracking-[0.22em] text-[#D7E2EA]/35"
                  >
                    /{String(sectionIndex + 1).padStart(2, '0')}
                  </span>
                  <div className="pr-20">
                    <h2 className="text-[clamp(2.2rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-tight">
                      {language === 'en' ? section.label : section.labelZh}
                    </h2>
                    {(language === 'en' ? section.description : section.descriptionZh) && (
                      <p className="mt-5 max-w-3xl whitespace-pre-line text-base font-light leading-relaxed text-[#D7E2EA]/55 sm:text-lg">
                        {language === 'en' ? section.description : section.descriptionZh}
                      </p>
                    )}
                  </div>
                </div>

                {project.slug === 'nextlevel-studio' && section.id === 'background' && (
                  <div className="mb-12 grid gap-4 sm:mb-16 md:grid-cols-2">
                    {[
                      {
                        number: '01',
                        title: language === 'en' ? 'Background' : '项目背景',
                        body:
                          language === 'en'
                            ? 'Aviation training content production remained complex:\n• Large volumes of training materials required continuous updates.\n• Multiple aircraft models, versions, roles, airline requirements, and training stages created many course variations.\n• Content preparation involved extensive manual reading, extraction, transcription, and verification.\n• Errors could impact training quality and compliance.'
                            : '航空培训内容生产仍然十分复杂：\n• 大量培训资料需要持续更新。\n• 不同机型、版本、角色、航司要求和培训阶段产生了大量课程变体。\n• 内容准备需要大量人工阅读、提取、录入与核验。\n• 错误可能影响培训质量与合规性。',
                      },
                      {
                        number: '02',
                        title: language === 'en' ? 'My Role' : '我的角色',
                        body:
                          language === 'en'
                            ? 'As a UX Designer, I was responsible for:\n• Understanding existing user workflows\n• Identifying opportunities for AI assistance\n• Defining human-AI responsibility boundaries\n• Designing control and review mechanisms\n• Validating whether AI integration improved real user tasks'
                            : '作为 UX 设计师，我负责：\n• 理解现有用户工作流\n• 识别 AI 辅助机会\n• 定义人机责任边界\n• 设计控制与审核机制\n• 验证 AI 集成是否真正改善用户任务',
                      },
                      {
                        number: '03',
                        title: language === 'en' ? 'Design Constraint' : '设计约束',
                        body:
                          language === 'en'
                            ? 'Aviation training is a high-compliance and high-responsibility environment. AI can assist with content processing, but it cannot replace training experts or authorized users in making final judgments and publishing decisions.'
                            : '航空培训是一个高度合规且责任重大的环境。AI 可以协助内容处理，但不能取代培训专家或授权用户作出最终判断与发布决策。',
                      },
                      {
                        number: '04',
                        title: language === 'en' ? 'Impact' : '项目成效',
                        body:
                          language === 'en'
                            ? 'The course creation and review cycle was reduced from approximately 10 days to 2 days. The workflow shifted from repetitive reading, transcription, and data entry toward content verification, editing, and decision-making.'
                            : '课程创建与审核周期从约 10 天缩短至 2 天。工作流程从重复阅读、录入和数据填写，转向内容核验、编辑与决策。',
                      },
                    ].map((item) => (
                      <article
                        key={item.number}
                        className="rounded-[24px] border border-[#D7E2EA]/18 bg-[#D7E2EA]/[0.035] p-6 sm:rounded-[30px] sm:p-8"
                      >
                        <span className="text-xs font-medium tracking-[0.22em] text-[#D7E2EA]/35">
                          {item.number}
                        </span>
                        <h3 className="mt-7 text-xl font-semibold uppercase tracking-tight sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-5 whitespace-pre-line text-sm font-light leading-7 text-[#D7E2EA]/60 sm:text-base">
                          {item.body}
                        </p>
                      </article>
                    ))}
                  </div>
                )}

                {project.slug === 'nextlevel-studio' && section.id === 'solution' && (
                  <div className="mb-12 sm:mb-16">
                    <h2 className="text-[clamp(1.8rem,3vw,3.2rem)] font-bold leading-tight tracking-tight text-[#D7E2EA]">
                      {language === 'en'
                        ? 'Guided Creation Flow Helps Users Get Started'
                        : '引导式创建，帮助用户快速开始'}
                    </h2>
                    <h3 className="mt-4 text-base font-medium leading-relaxed text-[#D7E2EA]/60 sm:text-xl">
                      {language === 'en'
                        ? 'Goal: Help Users Create Courses Efficiently'
                        : '目标：帮助用户高效创建课程'}
                    </h3>
                  </div>
                )}

                {project.slug === 'nextlevel-studio' && section.id === 'background' ? null : project.slug ===
                    'nextlevel-studio' && section.id === 'research' ? (
                  <div className="grid items-start gap-4 md:grid-cols-2">
                    <motion.figure
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.65 }}
                    >
                      <figcaption className="mb-4 text-sm font-semibold uppercase leading-snug tracking-tight text-[#D7E2EA] sm:text-base">
                        {language === 'en'
                          ? 'Comparison of AI toolcourse platformeditor capabilities'
                          : 'AI 工具、课程平台与编辑器能力对比'}
                      </figcaption>
                      <img
                        src={researchAiToolComparison}
                        alt="Comparison of AI tool, course platform, and editor capabilities"
                        loading="lazy"
                        className="w-full rounded-[24px] bg-white object-contain sm:rounded-[30px]"
                      />
                    </motion.figure>
                    <motion.div
                      className="overflow-hidden rounded-[24px] border border-[#D7E2EA]/18 bg-[#D7E2EA]/[0.035] sm:rounded-[30px]"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.65, delay: 0.08 }}
                    >
                      {[
                        {
                          number: '01',
                          title:
                            language === 'en'
                              ? 'AI Is Powerful but Not Controllable'
                              : 'AI 很强大，但难以控制',
                          body:
                            language === 'en'
                              ? 'One-click generation makes it difficult for users to adjust structure, modify details, or verify quality.'
                              : '一键生成使用户难以调整结构、修改细节或验证内容质量。',
                        },
                        {
                          number: '02',
                          title:
                            language === 'en'
                              ? 'Existing Workflows Are Fragmented'
                              : '现有工作流相互割裂',
                          body:
                            language === 'en'
                              ? 'Documents, presentations, videos, voice-over generation, and LMS delivery often exist across separate tools.'
                              : '文档、演示文稿、视频、配音生成和 LMS 发布通常分散在不同工具中。',
                        },
                        {
                          number: '03',
                          title:
                            language === 'en'
                              ? 'AI Lacks Educational Structure'
                              : 'AI 缺乏教学结构',
                          body:
                            language === 'en'
                              ? 'AI can generate content, but it does not automatically understand learning progression, knowledge structure, or assessment requirements.'
                              : 'AI 可以生成内容，但无法自动理解学习进程、知识结构或考核要求。',
                        },
                        {
                          number: '04',
                          title: language === 'en' ? 'Key Insight' : '关键洞察',
                          body:
                            language === 'en'
                              ? 'The market does not need another content generation tool. It needs a controllable AI workflow that supports real course production.'
                              : '市场并不需要另一个内容生成工具，而是需要一个能够支持真实课程生产的可控 AI 工作流。',
                        },
                      ].map((item) => (
                        <article
                          key={item.number}
                          className="grid gap-3 border-b border-[#D7E2EA]/15 p-5 last:border-b-0 sm:grid-cols-[42px_1fr] sm:p-6"
                        >
                          <span className="text-xs font-medium tracking-[0.18em] text-[#D7E2EA]/35">
                            {item.number}
                          </span>
                          <div>
                            <h3 className="text-sm font-semibold uppercase leading-snug tracking-tight sm:text-base">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm font-light leading-relaxed text-[#D7E2EA]/55">
                              {item.body}
                            </p>
                          </div>
                        </article>
                      ))}
                    </motion.div>
                  </div>
                ) : project.slug === 'nextlevel-studio' && section.id === 'design-challenge' ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      {
                        title: language === 'en' ? 'Complex Course Variations' : '复杂的课程变体',
                        body:
                          language === 'en'
                            ? 'Aircraft types, versions, job roles, airline requirements, and training stages create a large number of course combinations.'
                            : '机型、版本、岗位角色、航司要求和培训阶段共同产生了大量课程组合。',
                      },
                      {
                        title: language === 'en' ? 'Fragmented Materials' : '资料格式分散',
                        body:
                          language === 'en'
                            ? 'Different file formats require different processing methods, making it difficult to maintain consistent course structures.'
                            : '不同文件格式需要采用不同处理方式，因此难以维持一致的课程结构。',
                      },
                      {
                        title: language === 'en' ? 'High Manual Input Cost' : '人工录入成本高',
                        body:
                          language === 'en'
                            ? 'Large amounts of information require manual transcription, creating long production cycles and potential errors.'
                            : '大量信息需要人工录入，造成较长的生产周期，并带来潜在错误。',
                      },
                      {
                        title: language === 'en' ? 'Large Content Scale' : '内容规模庞大',
                        body:
                          language === 'en'
                            ? 'Training materials require repeated reading, extraction, rewriting, and review.'
                            : '培训资料需要反复阅读、提取、改写与审核。',
                      },
                      {
                        title:
                          language === 'en'
                            ? 'High Responsibility Requirements'
                            : '高责任要求',
                        body:
                          language === 'en'
                            ? 'Incorrect, outdated, missing, or inconsistent content can affect training quality and compliance. AI-generated content cannot be published automatically.'
                            : '错误、过时、缺失或不一致的内容可能影响培训质量与合规性，AI 生成内容不能自动发布。',
                      },
                    ].map((item, itemIndex) => (
                      <motion.article
                        key={item.title}
                        className={`rounded-[24px] border border-[#D7E2EA]/18 bg-[#D7E2EA]/[0.035] p-6 sm:rounded-[30px] sm:p-8 ${
                          itemIndex === 4 ? 'md:col-span-2' : ''
                        }`}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.55, delay: itemIndex * 0.05 }}
                      >
                        <span className="text-xs font-medium tracking-[0.2em] text-[#D7E2EA]/35">
                          {String(itemIndex + 1).padStart(2, '0')}
                        </span>
                        <h3 className="mt-7 text-xl font-semibold uppercase tracking-tight sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-4 max-w-3xl text-sm font-light leading-7 text-[#D7E2EA]/60 sm:text-base">
                          {item.body}
                        </p>
                      </motion.article>
                    ))}
                  </div>
                ) : (
                  <div className={showPair ? 'grid gap-4 md:grid-cols-2' : 'grid gap-4'}>
                    <motion.img
                      src={primaryImage}
                      alt={`${project.name} ${section.label}`}
                      loading="lazy"
                      className={
                        project.slug === 'nextlevel-studio' && section.id === 'solution'
                          ? 'w-full rounded-[24px] bg-white object-contain sm:rounded-[34px] md:rounded-[46px]'
                          : 'aspect-[16/10] h-full w-full rounded-[24px] object-cover sm:rounded-[34px] md:rounded-[46px]'
                      }
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.65 }}
                    />
                    {showPair && (
                      <motion.img
                        src={secondaryImage}
                        alt={`${project.name} ${section.label} detail`}
                        loading="lazy"
                        className="aspect-[16/10] h-full w-full rounded-[24px] object-cover sm:rounded-[34px] md:rounded-[46px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65, delay: 0.08 }}
                      />
                    )}
                  </div>
                )}

                {project.slug === 'nextlevel-studio' && section.id === 'solution' && (
                  <div className="mt-20 space-y-20 sm:mt-28 sm:space-y-28">
                    {[
                      {
                        title:
                          language === 'en'
                            ? 'Making the AI Black Box Perceivable'
                            : '让 AI 黑箱变得可感知',
                        goal:
                          language === 'en'
                            ? 'Goal: Reduce user uncertainty'
                            : '目标：降低用户的不确定感',
                      },
                      {
                        title:
                          language === 'en'
                            ? 'Multi-View Editing for Precise Course Control'
                            : '多视图编辑，精细化掌控课程',
                        goal:
                          language === 'en'
                            ? 'Goal: Let users handle different tasks in the most appropriate way'
                            : '目标：让用户可以用最合适方式处理不同任务',
                      },
                      {
                        title:
                          language === 'en'
                            ? 'Conversational Partial Editing'
                            : '对话式局部编辑',
                        goal:
                          language === 'en'
                            ? 'Goal: Use natural language to make precise local AI edits without overwriting the entire course'
                            : '目标：通过自然语言让 AI 精准修改局部内容，避免一次性覆盖全部课程。',
                      },
                      {
                        title:
                          language === 'en'
                            ? 'Course Export Across Multiple Formats'
                            : '课程导出兼顾多种格式',
                        goal:
                          language === 'en'
                            ? 'Goal: Deliver courses to business systems as video, PDF, SCORM packages, and LMS uploads'
                            : '目标：课程最终需要以多种格式进入业务系统，包括视频、PDF、SCORM 包和 LMS 上传。',
                      },
                    ].map((decision, decisionIndex) => (
                      <article key={decision.title}>
                        <h2 className="text-[clamp(1.8rem,3vw,3.2rem)] font-bold leading-tight tracking-tight text-[#D7E2EA]">
                          {decision.title}
                        </h2>
                        <h3 className="mt-4 max-w-4xl text-base font-medium leading-relaxed text-[#D7E2EA]/60 sm:text-xl">
                          {decision.goal}
                        </h3>
                        <div className="mt-9 flex aspect-[16/8] w-full items-center justify-center rounded-[24px] border border-dashed border-[#D7E2EA]/25 bg-gradient-to-br from-[#D7E2EA]/[0.08] to-[#D7E2EA]/[0.02] sm:rounded-[34px] md:rounded-[46px]">
                          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#D7E2EA]/30">
                            {language === 'en'
                              ? `Image placeholder ${decisionIndex + 1}`
                              : `图片占位 ${decisionIndex + 1}`}
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </section>
            )
          })}
        </div>
      </div>

      <footer className="border-t border-[#D7E2EA]/15 px-5 py-10 sm:px-8 md:px-12">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6">
          <span className="text-xs font-light uppercase tracking-[0.2em] text-[#D7E2EA]/45">
            {language === 'en' ? 'End of case study' : '案例结束'}
          </span>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] hover:opacity-65"
          >
            {language === 'en' ? 'All projects' : '全部项目'}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </footer>
    </main>
  )
}

const contactLinks = [
  {
    label: 'Email',
    value: '792334632@qq.com',
    href: 'mailto:792334632@qq.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/carol-design',
    href: 'https://www.linkedin.com/in/carol-design',
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    value: '@carol.design',
    href: 'https://www.instagram.com/carol.design',
    icon: Instagram,
  },
  {
    label: 'Dribbble',
    value: 'dribbble.com/carol-design',
    href: 'https://dribbble.com/carol-design',
    icon: Dribbble,
  },
]

function ContactDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { language } = useLanguage()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    const email = '792334632@qq.com'

    try {
      await navigator.clipboard.writeText(email)
    } catch {
      const input = document.createElement('textarea')
      input.value = email
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      input.remove()
    }

    setCopied(true)
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
    copyTimeoutRef.current = setTimeout(() => setCopied(false), 2200)
  }

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      setCopied(false)
    }
  }, [open, onClose])

  useEffect(
    () => () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
    },
    [],
  )

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.button
            type="button"
            aria-label="Close contact drawer"
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-drawer-title"
            className="relative flex h-full w-full max-w-[520px] flex-col overflow-y-auto border-l border-white/15 bg-[#111111] px-6 py-6 text-[#D7E2EA] shadow-[-24px_0_80px_rgba(0,0,0,.45)] sm:px-10 sm:py-8"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-white/15 pb-5">
              <span className="text-xs font-medium uppercase tracking-[0.26em] text-[#D7E2EA]/55">
                01 / {language === 'en' ? 'Contact' : '联系'}
              </span>
              <motion.button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close contact drawer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-[#0C0C0C]"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.92 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            <div className="pt-12 sm:pt-16">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-[#D7E2EA]/55">
                {language === 'en' ? 'Have a project in mind?' : '有项目想和我聊聊？'}
              </p>
              <h2
                id="contact-drawer-title"
                className="hero-heading text-[clamp(3.4rem,11vw,6.7rem)] font-black uppercase leading-[0.82] tracking-tight"
              >
                {language === 'en' ? (
                  <>Let&apos;s<br />connect</>
                ) : (
                  <>一起<br />聊聊</>
                )}
              </h2>
              <p className="mt-8 max-w-sm text-base font-light leading-relaxed text-[#D7E2EA]/65 sm:text-lg">
                {language === 'en'
                  ? "I'm always open to discussing product design, AI experiences, and meaningful collaborations."
                  : '欢迎与我探讨产品设计、AI 体验，以及有意义的合作机会。'}
              </p>
            </div>

            <div className="mt-12 border-t border-white/15">
              {contactLinks.map(({ label, value, href, icon: Icon }, index) => {
                const isEmail = label === 'Email'
                const content = (
                  <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 text-[#D7E2EA]/70 transition-colors group-hover:border-white group-hover:bg-white group-hover:text-[#0C0C0C]">
                    <Icon size={19} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-[#D7E2EA]/45">
                      {label}
                    </span>
                    <span className="mt-1 block truncate text-sm font-light sm:text-base">{value}</span>
                  </span>
                    {isEmail ? (
                      <span className="relative shrink-0">
                        <AnimatePresence>
                          {copied && (
                            <motion.span
                              role="status"
                              aria-live="polite"
                              className="absolute bottom-[calc(100%+12px)] right-0 z-10 flex w-max items-center gap-2 rounded-full border border-white/20 bg-[#D7E2EA] px-3.5 py-2 text-xs font-medium tracking-wide text-[#0C0C0C] shadow-xl"
                              initial={{ opacity: 0, y: 8, scale: 0.94 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 5, scale: 0.96 }}
                            >
                              <Check size={14} strokeWidth={2.5} />
                              {language === 'en' ? 'Copied to clipboard' : '已复制到剪贴板'}
                            </motion.span>
                          )}
                        </AnimatePresence>
                        <Copy
                          size={17}
                          className="block transition-transform group-hover:scale-110"
                        />
                      </span>
                    ) : (
                      <ArrowUpRight
                        size={19}
                        className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    )}
                  </>
                )

                return isEmail ? (
                  <motion.button
                    key={label}
                    type="button"
                    onClick={handleCopyEmail}
                    className="group relative flex w-full items-center gap-4 border-b border-white/15 py-5 text-left"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + index * 0.07 }}
                    aria-label={`Copy email address ${value}`}
                  >
                    {content}
                  </motion.button>
                ) : (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 border-b border-white/15 py-5"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + index * 0.07 }}
                  >
                    {content}
                  </motion.a>
                )
              })}
            </div>

            <div className="mt-auto flex items-center justify-between pt-10 text-[10px] font-medium uppercase tracking-[0.2em] text-[#D7E2EA]/40">
              <span>{language === 'en' ? 'Based in China' : '常驻中国'}</span>
              <span>{language === 'en' ? 'Available for work' : '可接受工作机会'}</span>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const wrapperStyle: CSSProperties = { overflowX: 'clip' }
  const [contactOpen, setContactOpen] = useState(false)
  const [route, setRoute] = useState(window.location.hash)
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem('portfolio-language')
    return saved === 'zh' ? 'zh' : 'en'
  })

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN'
  }, [language])

  const caseStudySlug = route.startsWith('#/case-study/')
    ? decodeURIComponent(route.replace('#/case-study/', ''))
    : null
  const caseStudyIndex = caseStudySlug
    ? projects.findIndex((project) => project.slug === caseStudySlug)
    : -1

  if (caseStudyIndex >= 0) {
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <LanguageToggle />
        <CaseStudyPage project={projects[caseStudyIndex]} index={caseStudyIndex} />
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <LanguageToggle />
      <main className="min-h-screen w-screen min-w-0 max-w-[100vw] bg-[#0C0C0C]" style={wrapperStyle}>
        <HeroSection onContactClick={() => setContactOpen(true)} />
        <MarqueeSection />
        <AboutSection onContactClick={() => setContactOpen(true)} />
        <ServicesSection />
        <ProjectsSection />
      </main>
      <ContactDrawer open={contactOpen} onClose={() => setContactOpen(false)} />
    </LanguageContext.Provider>
  )
}
