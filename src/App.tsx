import {
  type CSSProperties,
  type ElementType,
  type PropsWithChildren,
  type SVGProps,
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
  ArrowLeft,
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Linkedin,
  Mail,
  X,
} from 'lucide-react'
import BorderGlow from './components/BorderGlow'

function UpworkIcon({ size = 19, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3.4 7.2v4.65c0 2.52 1.3 4 3.48 4 2.14 0 3.56-1.5 3.56-4V7.2M10.44 10.2c1.02 3.62 3.15 5.65 6.25 5.65 2.3 0 3.91-1.36 3.91-3.42 0-1.88-1.42-3.23-3.55-3.23-2.15 0-3.6 1.58-3.6 4.05V19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FiverrIcon({ size = 19, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="17.6" cy="5.1" r="1.35" />
      <path d="M5 9.15h2.05V8.4c0-2.55 1.38-4.05 4.02-4.05h2v2.45h-1.25c-1.05 0-1.55.55-1.55 1.6v.75h6.75v8.2H19V20h-7.1v-2.65h1.9v-5.55h-3.53V20H7.05v-8.2H5V9.15Z" />
    </svg>
  )
}
import InteractiveAvatar from './components/InteractiveAvatar/Avatar'
import researchAiToolComparison640 from './assets/research-ai-tool-comparison-640.webp'
import researchAiToolComparison1223 from './assets/research-ai-tool-comparison-1223.webp'
import aeroCourseCover640 from './assets/aero-course-cover-640.webp'
import aeroCourseCover1280 from './assets/aero-course-cover-1280.webp'
import aeroCourseCover1920 from './assets/aero-course-cover-1920.webp'
import guidedCreationFlow768 from './assets/guided-creation-flow-768.webp'
import guidedCreationFlow1280 from './assets/guided-creation-flow-1280.webp'
import guidedCreationFlow1920 from './assets/guided-creation-flow-1920.webp'
import guidedCreationFlow2560 from './assets/guided-creation-flow-2560.webp'
import makingAiProcessesTransparent768 from './assets/making-ai-processes-transparent-768.webp'
import makingAiProcessesTransparent1280 from './assets/making-ai-processes-transparent-1280.webp'
import makingAiProcessesTransparent1920 from './assets/making-ai-processes-transparent-1920.webp'
import makingAiProcessesTransparent2560 from './assets/making-ai-processes-transparent-2560.webp'
import editableAiGeneratedCourseStructure768 from './assets/editable-ai-generated-course-structure-768.webp'
import editableAiGeneratedCourseStructure1280 from './assets/editable-ai-generated-course-structure-1280.webp'
import editableAiGeneratedCourseStructure1920 from './assets/editable-ai-generated-course-structure-1920.webp'
import editableAiGeneratedCourseStructure2560 from './assets/editable-ai-generated-course-structure-2560.webp'
import aeroOtherKeyScreens768 from './assets/aero-other-key-screens-768.webp'
import aeroOtherKeyScreens1280 from './assets/aero-other-key-screens-1280.webp'
import aeroOtherKeyScreens1920 from './assets/aero-other-key-screens-1920.webp'
import collaborativeOutlineViewZh768 from './assets/collaborative-outline-view-zh-768.webp'
import collaborativeOutlineViewZh1280 from './assets/collaborative-outline-view-zh-1280.webp'
import collaborativeOutlineViewZh1920 from './assets/collaborative-outline-view-zh-1920.webp'
import collaborativeOutlineViewEn768 from './assets/collaborative-outline-view-en-768.webp'
import collaborativeOutlineViewEn1280 from './assets/collaborative-outline-view-en-1280.webp'
import collaborativeOutlineViewEn1920 from './assets/collaborative-outline-view-en-1920.webp'
import conversationalTargetedEditingZh768 from './assets/conversational-targeted-editing-zh-768.webp'
import conversationalTargetedEditingZh1280 from './assets/conversational-targeted-editing-zh-1280.webp'
import conversationalTargetedEditingZh1920 from './assets/conversational-targeted-editing-zh-1920.webp'
import conversationalTargetedEditingEn768 from './assets/conversational-targeted-editing-en-768.webp'
import conversationalTargetedEditingEn1280 from './assets/conversational-targeted-editing-en-1280.webp'
import conversationalTargetedEditingEn1920 from './assets/conversational-targeted-editing-en-1920.webp'
import courseExportFormatsZh768 from './assets/course-export-formats-zh-768.webp'
import courseExportFormatsZh1280 from './assets/course-export-formats-zh-1280.webp'
import courseExportFormatsZh1920 from './assets/course-export-formats-zh-1920.webp'
import courseExportFormatsEn768 from './assets/course-export-formats-en-768.webp'
import courseExportFormatsEn1280 from './assets/course-export-formats-en-1280.webp'
import courseExportFormatsEn1920 from './assets/course-export-formats-en-1920.webp'
import aeroDesignSystem768 from './assets/aero-design-system-768.webp'
import aeroDesignSystem1280 from './assets/aero-design-system-1280.webp'
import aeroDesignSystem1920 from './assets/aero-design-system-1920.webp'
import miaofanComicTranslationCover from './assets/miaofan-comic-translation-platform-cover.jpg'
import miaofanProjectOverview from './assets/miaofan-project-overview.jpg'
import miaofanProjectOverviewZh from './assets/miaofan-project-overview-zh.jpg'
import miaofanWorkflowRedesign from './assets/miaofan-workflow-redesign.jpg'
import miaofanWorkflowRedesignZh from './assets/miaofan-workflow-redesign-zh.jpg'
import miaofanRoleBasedWorkspace from './assets/miaofan-role-based-workspace.jpg'
import miaofanRoleBasedWorkspaceZh from './assets/miaofan-role-based-workspace-zh.jpg'
import miaofanBidirectionalCanvasText from './assets/miaofan-bidirectional-canvas-text.jpg'
import miaofanBidirectionalCanvasTextZh from './assets/miaofan-bidirectional-canvas-text-zh.jpg'
import miaofanTerminologyMemorySystem from './assets/miaofan-terminology-memory-system.jpg'
import miaofanTerminologyMemorySystemZh from './assets/miaofan-terminology-memory-system-zh.jpg'
import miaofanAiAssistedHumanApproved from './assets/miaofan-ai-assisted-human-approved.jpg'
import miaofanAiAssistedHumanApprovedZh from './assets/miaofan-ai-assisted-human-approved-zh.jpg'
import miaofanEasyEditingExperience from './assets/miaofan-easy-editing-experience.jpg'
import miaofanEasyEditingExperienceZh from './assets/miaofan-easy-editing-experience-zh.jpg'
import miaofanFindIssuesTrackProgressResolve from './assets/miaofan-find-issues-track-progress-resolve.jpg'
import miaofanComplexProgressAtAGlance from './assets/miaofan-complex-progress-at-a-glance.jpg'
import miaofanOtherKeyScreens from './assets/miaofan-other-key-screens.jpg'
import huanzhiMiniProgramRedesignCover from './assets/huanzhi-mini-program-redesign-cover.jpg'
import huanzhiProjectOverview from './assets/huanzhi-project-overview.webp'
import huanzhiBusinessNeeds1 from './assets/huanzhi-business-needs-1.webp'
import huanzhiDesignGoalsStrategy from './assets/huanzhi-design-goals-strategy.webp'
import huanzhiMapRedesing from './assets/huanzhi-map-redesing.webp'
import huanzhiVehicleControl from './assets/huanzhi-vehicle-control.webp'
import innerglowOverview42 from './assets/innerglow-overview-42.jpg'
import innerglowFullCase from './assets/innerglow-full-case.webp'
import gpuRentalOverview44 from './assets/gpu-rental-overview-44.jpg'
import gpuRentalFullCase from './assets/gpu-rental-full-case.webp'
import teekidsOverview46 from './assets/teekids-overview-46.jpg'
import teekidsOverview47 from './assets/teekids-overview-47.jpg'
import playableInteractiveAdsCover from './assets/playable-interactive-ads-cover.webp'
import playableInteractiveAdsCoverZh from './assets/playable-interactive-ads-cover-zh.jpg'
import teekidsCoverZh from './assets/teekids-cover-zh.jpg'
import innerglowCoverZh from './assets/innerglow-cover-zh.jpg'
import huanzhiCoverZh from './assets/huanzhi-cover-zh.jpg'
import miaofanCoverZh from './assets/miaofan-cover-zh.jpg'
import gpuRentalCoverZh from './assets/gpu-rental-cover-zh.jpg'
import playableProjectOverviewEn from './assets/playable-project-overview-en.webp'
import playableProjectOverviewZh from './assets/playable-project-overview-zh.webp'
import playableProblemDiscoveryEn from './assets/playable-problem-discovery-en.webp'
import playableProblemDiscoveryZh from './assets/playable-problem-discovery-zh.webp'
import playableDesignDirectionEn from './assets/playable-design-direction-en.webp'
import playableDesignDirectionZh from './assets/playable-design-direction-zh.webp'
import playableLockScreenApplication from './assets/playable-lock-screen-application.webp'
import playableInteractiveLockScreenLayoutEn from './assets/playable-interactive-lock-screen-layout-en.webp'
import playableInteractiveLockScreenLayoutZh from './assets/playable-interactive-lock-screen-layout-zh.webp'
import playableInteractiveLockScreenUseCaseEn from './assets/playable-interactive-lock-screen-use-case-en.webp'
import playableInteractiveLockScreenUseCaseZh from './assets/playable-interactive-lock-screen-use-case-zh.webp'
import playableApplyingInteractiveAdsEn from './assets/playable-applying-interactive-ads-en.webp'
import playableApplyingInteractiveAdsZh from './assets/playable-applying-interactive-ads-zh.webp'
import playableFullscreenGuidanceEn from './assets/playable-fullscreen-guidance-en.webp'
import playableFullscreenGuidanceZh from './assets/playable-fullscreen-guidance-zh.webp'
import playableRevenueDataLoopEn from './assets/playable-revenue-data-loop-en.webp'
import playableRevenueDataLoopZh from './assets/playable-revenue-data-loop-zh.webp'
import marqueeAero from './assets/marquee-aero.webp'
import marqueeGpuRental from './assets/marquee-gpu-rental.webp'
import marqueeHuanzhi from './assets/marquee-huanzhi.webp'
import marqueeInnerglow from './assets/marquee-innerglow.webp'
import marqueeMiaofan from './assets/marquee-miaofan.webp'
import marqueeTeekids from './assets/marquee-teekids.webp'
import marqueePlayableInteractiveAds from './assets/marquee-playable-interactive-ads.webp'
import particleActiveMarquee from './assets/particle-active-marquee.webp'
import particleActiveCover from './assets/particle-active-cover.webp'
import particleActiveProjectCard from './assets/particle-active-project-card.webp'
import particleActiveProjectCardEn from './assets/particle-active-project-card-en.webp'
import particleActiveOverview2 from './assets/particle-active-overview-2.webp'
import particleActiveOverview3 from './assets/particle-active-overview-3.webp'
import particleActiveOverview4 from './assets/particle-active-overview-4.webp'

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
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#D7E2EA] transition-colors duration-300 hover:border-[#FFD629] hover:bg-[#FFD629] hover:text-[#0C0C0C] focus-visible:border-[#FFD629] focus-visible:bg-[#FFD629] focus-visible:text-[#0C0C0C] focus-visible:outline-none sm:px-8 sm:py-3 sm:text-sm md:px-10 md:py-3.5 md:text-base"
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
    <section id="home" className="relative flex h-screen min-h-[620px] w-screen min-w-0 max-w-[100vw] flex-col overflow-x-clip bg-[#0C0C0C] px-5 sm:px-8 md:px-10">
      <FadeIn
        y={-20}
        as="nav"
        className="fixed left-0 right-0 top-0 z-[90] flex w-full min-w-0 justify-between border-b border-white/10 bg-[#0C0C0C]/85 px-5 pb-4 pt-6 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] backdrop-blur-md sm:px-8 sm:text-sm md:px-10 md:pb-5 md:pt-7 md:text-lg lg:text-[1.4rem]"
      >
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
          ) : href === '#projects' ? (
            <div key={label} className="group relative">
              <a href={href} className="transition-opacity duration-200 hover:opacity-70">
                {label}
              </a>
              <div className="invisible absolute left-1/2 top-full w-[min(88vw,430px)] -translate-x-1/2 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#111214]/95 p-2 text-[#D7E2EA] shadow-2xl backdrop-blur-xl">
                  <p className="border-b border-white/10 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.24em] text-[#D7E2EA]/45 sm:text-[10px]">
                    {language === 'en' ? 'Selected case studies' : '案例项目'}
                  </p>
                  <div className="max-h-[min(68vh,520px)] overflow-y-auto py-1">
                    {projects.map((project, index) => (
                      <a
                        key={project.slug}
                        href={`#/case-study/${project.slug}`}
                        className="flex items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none"
                      >
                        <span className="w-7 shrink-0 text-[10px] font-medium tracking-[0.16em] text-[#D7E2EA]/35">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="min-w-0 flex-1 text-[11px] font-semibold uppercase leading-tight tracking-[0.08em] sm:text-xs">
                          {language === 'en' ? project.name : project.nameZh}
                        </span>
                        <span className="shrink-0 text-[9px] font-normal tracking-[0.14em] text-[#D7E2EA]/40 sm:text-[10px]">
                          {project.year}
                        </span>
                        <ArrowUpRight size={14} className="shrink-0 opacity-50" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <a key={label} href={href} className="transition-opacity duration-200 hover:opacity-70">
              {label}
            </a>
          ),
        )}
      </FadeIn>

      <FadeIn
        delay={0.15}
        y={40}
        className={`relative z-0 w-full min-w-0 max-w-full overflow-hidden ${
          language === 'en'
            ? 'mt-[5.5rem] sm:mt-24 md:mt-[6.5rem]'
            : 'mt-[6.5rem] sm:mt-28 md:mt-[7.75rem]'
        }`}
      >
        <h1
          className={`hero-title w-full text-center font-black uppercase tracking-tight ${
            language === 'zh' ? 'hero-title--zh' : ''
          }`}
          translate="no"
        >
          <span
            data-label={language === 'en' ? "Hi, i'm" : undefined}
            className={
              `hero-title__line ${language === 'en'
                ? 'block text-[18vw] leading-[0.82] sm:text-[16vw]'
                : 'block pt-[0.08em] text-[clamp(5rem,15vw,12rem)] font-black leading-[1.02] tracking-[-0.03em]'
              }`
            }
          >
            {language === 'en' ? <>Hi, i&apos;m</> : '你好，我是'}
          </span>
          <span
            data-label={language === 'en' ? 'Carol' : undefined}
            className={
              `hero-title__line ${language === 'en'
                ? 'mt-[0.21em] block text-[15.5vw] leading-[0.82] sm:text-[13.5vw]'
                : 'mt-[0.14em] block text-[clamp(5rem,14vw,11rem)] font-black leading-none tracking-[0.04em]'
              }`
            }
          >
            {language === 'en' ? 'Carol' : '薛和'}
          </span>
        </h1>
      </FadeIn>

      <div className="pointer-events-auto absolute bottom-[7rem] left-1/2 z-10 w-[min(50vw,180px)] -translate-x-1/2 sm:bottom-0 sm:w-[min(38vw,340px)] md:w-[min(32vw,420px)] lg:w-[min(30vw,420px)]">
        <FadeIn delay={0.6} y={30}>
          <InteractiveAvatar />
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex w-full min-w-0 items-end justify-between gap-3 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[180px] text-[clamp(.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[260px] md:max-w-[360px]">
            {language === 'en'
              ? 'A product designer driven by transforming complex problems into clear and meaningful experiences.'
              : '一名UI/UX设计师，致力于将复杂问题转化为清晰且有意义的产品体验。'}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>

    </section>
  )
}

type MarqueeItem = {
  src: string
  slug?: string
  alt?: string
  altZh?: string
}

const marqueeItems: MarqueeItem[] = [
  {
    src: marqueePlayableInteractiveAds,
    slug: 'project-placeholder-07',
    alt: 'Playable Interactive Ads',
    altZh: '试玩互动广告',
  },
  { src: marqueeAero, slug: 'nextlevel-studio', alt: 'Aero.ai Course Authoring System', altZh: 'Aero.ai 课程编辑系统' },
  { src: marqueeGpuRental, slug: 'project-placeholder-05', alt: 'GPU Rental App', altZh: '显卡租赁 App' },
  {
    src: particleActiveMarquee,
    slug: 'project-placeholder-08',
    alt: 'Particle Active Website Design',
    altZh: 'Particle Active 官网设计',
  },
  { src: 'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif' },
  { src: 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif' },
  { src: 'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif' },
  { src: 'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif' },
  { src: 'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif' },
  { src: 'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif' },
  { src: 'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif' },
  { src: marqueeInnerglow, slug: 'project-placeholder-04', alt: 'INNERGLOW Website Design', altZh: 'INNERGLOW 网站设计' },
  { src: marqueeTeekids, slug: 'project-placeholder-06', alt: 'TEEKIDS Website Design', altZh: 'TEEKIDS 网站设计' },
  { src: marqueeMiaofan, slug: 'aura-brand-identity', alt: 'Miaofan Comic Translation Platform', altZh: '秒翻漫画翻译平台' },
  { src: marqueeHuanzhi, slug: 'solaris-digital', alt: 'Huanzhi Mini Program Redesign', altZh: '焕智小程序改版' },
  { src: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif' },
  { src: 'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif' },
  { src: 'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif' },
  { src: 'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif' },
  { src: 'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif' },
  { src: 'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif' },
]

function MarqueeRow({ items, direction, offset }: { items: MarqueeItem[]; direction: 1 | -1; offset: number }) {
  const { language } = useLanguage()
  const tripled = [...items, ...items, ...items]
  const x = direction === 1 ? offset - 200 : -(offset - 200)

  return (
    <div className="marquee-mask w-full overflow-hidden">
      <div
        className="flex w-max gap-3"
        style={{ transform: `translate3d(${x}px,0,0)`, willChange: 'transform' }}
      >
        {tripled.map((item, index) => {
          const image = (
            <img
              src={item.src}
              alt={item.slug ? (language === 'en' ? item.alt : item.altZh) : ''}
              loading="lazy"
              decoding="async"
              width={1260}
              height={810}
              draggable={false}
              className="h-[180px] w-[280px] shrink-0 rounded-2xl object-cover sm:h-[220px] sm:w-[340px] md:h-[270px] md:w-[420px]"
            />
          )

          return item.slug ? (
            <a
              key={`${item.src}-${index}`}
              href={`#/case-study/${item.slug}`}
              aria-label={language === 'en' ? `View case study: ${item.alt}` : `查看案例：${item.altZh}`}
              className="shrink-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7E2EA]"
            >
              {image}
            </a>
          ) : (
            <div key={`${item.src}-${index}`} className="shrink-0">
              {image}
            </div>
          )
        })}
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
    <section id="showcase" ref={ref} className="space-y-3 overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40">
      <MarqueeRow items={marqueeItems.slice(0, 11)} direction={1} offset={offset} />
      <MarqueeRow items={marqueeItems.slice(11)} direction={-1} offset={offset} />
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

function AboutDecorItem({
  item,
  index,
  progress,
}: {
  item: (typeof aboutDecor)[number]
  index: number
  progress: MotionValue<number>
}) {
  const reduceMotion = useReducedMotion()
  const isTopDecor = index === 0 || index === 2
  const y = useTransform(
    progress,
    [0, 0.5, 1],
    isTopDecor
      ? [-24, 32, 285 + index * 10]
      : [-205 - index * 12, 0, 205 + index * 12],
  )
  const x = useTransform(progress, [0, 0.5, 1], [item.x * 0.65, 0, item.x * -0.42])
  const rotate = useTransform(progress, [0, 0.5, 1], [index % 2 === 0 ? -15 : 15, 0, index % 2 === 0 ? 17 : -17])
  const scale = useTransform(progress, [0, 0.5, 1], [0.82, 1, 1.1])

  return (
    <motion.div
      className={`pointer-events-none absolute z-0 ${item.className}`}
      style={reduceMotion ? undefined : { y, x, rotate, scale }}
    >
      <img src={item.src} alt={item.alt} className="h-auto w-full object-contain" loading="lazy" />
    </motion.div>
  )
}

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
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  return (
    <section ref={sectionRef} id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-24 sm:px-8 md:px-10">
      {aboutDecor.map((item, index) => (
        <AboutDecorItem
          key={item.src}
          item={item}
          index={index}
          progress={scrollYProgress}
        />
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
      <div className="mx-auto grid max-w-[1400px] gap-px border border-black/15 bg-black/15 md:grid-cols-2">
        {services.map((service, index) => (
          <FadeIn key={service.name} delay={index * 0.1} className="h-full bg-white">
            <article className="grid h-full grid-cols-[64px_1fr] gap-4 p-6 sm:grid-cols-[88px_1fr] sm:gap-6 sm:p-8 lg:p-10">
              <span className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.82] tracking-tight text-[#0C0C0C]/25">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="pt-1">
                <h3 className="text-[clamp(1rem,1.8vw,1.7rem)] font-medium uppercase leading-tight text-[#0C0C0C]">
                  {language === 'en' ? service.name : service.nameZh}
                </h3>
                <p className="mt-4 max-w-2xl text-[clamp(.82rem,1.2vw,1.05rem)] font-light leading-relaxed text-[#0C0C0C]/60">
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
    year: '2025',
    platform: 'web',
    category: 'Client',
    categoryZh: '客户项目',
    tags: ['B2B', 'Education', 'AI'],
    tagsZh: ['B端', '教育', 'AI'],
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    name: 'Miaofan Comic Translation Platform',
    nameZh: '秒翻漫画翻译平台',
    slug: 'aura-brand-identity',
    year: '2024',
    platform: 'web',
    category: 'Client',
    categoryZh: '公司项目',
    tags: ['B2B', 'AI', 'Web'],
    tagsZh: ['B端', 'AI', '网页端'],
    images: [miaofanComicTranslationCover],
    coverImageZh: miaofanCoverZh,
  },
  {
    name: 'Huanzhi Mini Program Redesign',
    nameZh: '焕智小程序改版',
    slug: 'solaris-digital',
    year: '2024',
    platform: 'mobile',
    category: 'Client',
    categoryZh: '客户项目',
    tags: ['Mobile', 'Mobility', 'Redesign'],
    tagsZh: ['移动端', '出行', '改版'],
    images: [huanzhiMiniProgramRedesignCover],
    coverImageZh: huanzhiCoverZh,
  },
  {
    name: 'Playable Interactive Ads',
    nameZh: '试玩互动广告',
    slug: 'project-placeholder-07',
    year: '2022',
    platform: 'mobile',
    category: 'Client',
    categoryZh: '公司项目',
    tags: ['Mobile', 'Advertising', 'Interactive'],
    tagsZh: ['移动端', '广告', '互动体验'],
    images: [playableInteractiveAdsCover],
    coverImageZh: playableInteractiveAdsCoverZh,
  },
  {
    name: 'INNERGLOW website desgin',
    nameZh: 'INNERGLOW 官网设计',
    slug: 'project-placeholder-04',
    year: '2024',
    platform: 'web',
    category: 'Client',
    categoryZh: '客户项目',
    tags: ['Web', 'B2C', 'E-commerce'],
    tagsZh: ['网页端', 'C端', '电商'],
    images: [innerglowOverview42],
    coverImageZh: innerglowCoverZh,
    overviewImages: [innerglowFullCase],
  },
  {
    name: 'GPU RENTAL APP',
    nameZh: '显卡租赁APP',
    slug: 'project-placeholder-05',
    year: '2024',
    platform: ['mobile', 'graphic'],
    category: 'Client',
    categoryZh: '公司项目',
    tags: ['Mobile', 'Fintech', 'Data'],
    tagsZh: ['移动端', '金融科技', '数据可视化'],
    images: [gpuRentalOverview44],
    coverImageZh: gpuRentalCoverZh,
    overviewImages: [gpuRentalFullCase],
  },
  {
    name: 'TEEKIDS website desgin',
    nameZh: 'TEEKIDS 官网设计',
    slug: 'project-placeholder-06',
    year: '2024',
    platform: 'web',
    category: 'Client',
    categoryZh: '客户项目',
    tags: ['Web', 'B2C', 'E-commerce'],
    tagsZh: ['网页端', 'C端', '电商'],
    images: [teekidsOverview46],
    coverImageZh: teekidsCoverZh,
    overviewImages: [teekidsOverview46, teekidsOverview47],
  },
  {
    name: 'Particle Active website design',
    nameZh: 'Particle Active 官网设计',
    slug: 'project-placeholder-08',
    year: '2024',
    platform: 'web',
    category: 'Client',
    categoryZh: '客户项目',
    tags: ['Web', 'E-commerce', 'B2C'],
    tagsZh: ['网页端', '电商', 'C端'],
    images: [particleActiveProjectCard],
    coverImageEn: particleActiveProjectCardEn,
    overviewImages: [
      particleActiveCover,
      particleActiveOverview2,
      particleActiveOverview3,
      particleActiveOverview4,
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
  const projectCoverImage =
    language === 'zh' && 'coverImageZh' in project
      ? project.coverImageZh
      : language === 'en' && 'coverImageEn' in project
        ? project.coverImageEn
        : project.images[0]
  return (
    <BorderGlow className="group">
    <motion.article
      className="h-full overflow-hidden rounded-[inherit] bg-[#0C0C0C] p-3 text-[#D7E2EA] sm:p-4 lg:p-5"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="mb-4 flex min-h-[118px] items-center gap-3 px-1 sm:mb-5 sm:min-h-[132px] sm:gap-4">
          <div className="min-w-0 flex-1">
            <span className="flex items-center gap-3 text-[10px] font-light uppercase tracking-[0.2em] opacity-60 sm:text-xs">
              <span>{language === 'en' ? project.category : project.categoryZh}</span>
              <span aria-hidden="true">/</span>
              <span>{project.year}</span>
            </span>
            <h3 className="mt-2 text-[clamp(1.25rem,2.1vw,2rem)] font-semibold uppercase leading-[1.05]">
              {projectName}
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5" aria-label={language === 'en' ? 'Project tags' : '项目标签'}>
              {(language === 'en' ? project.tags : project.tagsZh).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#D7E2EA]/25 bg-[#D7E2EA]/[0.04] px-3 py-1.5 text-[11px] font-medium uppercase leading-none tracking-[0.1em] text-[#D7E2EA]/75 sm:text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden shrink-0 xl:block">
            <CaseStudyButton slug={project.slug} />
          </div>
      </div>

      <a
        href={`#/case-study/${project.slug}`}
        className="block rounded-[22px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7E2EA] sm:rounded-[28px] lg:rounded-[34px]"
        aria-label={`${language === 'en' ? 'View case study' : '查看案例'}: ${projectName}`}
      >
        {project.slug === 'nextlevel-studio' || project.images.length === 1 ? (
          <div className="aspect-[4/3] overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[34px]">
            {project.slug === 'nextlevel-studio' ? (
              <img
                src={aeroCourseCover1280}
                srcSet={`${aeroCourseCover640} 640w, ${aeroCourseCover1280} 1280w, ${aeroCourseCover1920} 1920w`}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Aero.ai Course Authoring System cover"
                loading="lazy"
                decoding="async"
                width={4000}
                height={3000}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            ) : (
              <img
                src={projectCoverImage}
                alt={`${projectName} cover`}
                loading="lazy"
                decoding="async"
                width={3000}
                height={2250}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            )}
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
      </a>

      <div className="mt-4 xl:hidden">
        <CaseStudyButton slug={project.slug} />
      </div>
    </motion.article>
    </BorderGlow>
  )
}

function ProjectsSection() {
  const { language } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'graphic'>('all')
  const filters = [
    { id: 'all' as const, en: 'All', zh: '全部' },
    { id: 'web' as const, en: 'Web', zh: '网页端' },
    { id: 'mobile' as const, en: 'Mobile', zh: '移动端' },
    { id: 'graphic' as const, en: 'Graphic', zh: '平面设计' },
  ]
  const visibleProjects = projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => {
      if (activeFilter === 'all') return true

      return Array.isArray(project.platform)
        ? project.platform.includes(activeFilter)
        : project.platform === activeFilter
    })

  return (
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-4 pb-32 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32">
      <FadeIn>
        <h2 className="hero-heading mb-8 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-10">
          {language === 'en' ? 'Projects' : '项目'}
        </h2>
        <div className="mb-14 flex flex-wrap items-center justify-center gap-2 sm:mb-16 sm:gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={isActive}
                className={`rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-300 sm:px-7 sm:py-3 sm:text-sm ${
                  isActive
                    ? 'border-[#D7E2EA] bg-[#D7E2EA] text-[#0C0C0C]'
                    : 'border-[#D7E2EA]/45 text-[#D7E2EA]/70 hover:border-[#D7E2EA] hover:text-[#D7E2EA]'
                }`}
              >
                {language === 'en' ? filter.en : filter.zh}
              </button>
            )
          })}
        </div>
      </FadeIn>
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8">
        {visibleProjects.map(({ project, index }) => (
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
      'As the interface scaled, designing page by page would erode consistency and increase handoff costs. I helped build a shared library covering the editor, AI states, forms, export flows, and templates.',
    descriptionZh:
      '随着项目界面规模扩大，单纯依赖页面设计会导致一致性下降和开发沟通成本上升。因此我参与建立了覆盖编辑器、AI 状态、表单、导出流程和模板系统的设计资源库。',
  },
  {
    id: 'reflection',
    label: 'Other Key Screens',
    labelZh: '其他关键页面',
    description: '',
    descriptionZh: '',
  },
]

const miaofanCaseStudySections = caseStudySections.map((section) => {
  if (section.id === 'background') {
    return {
      ...section,
      label: 'Project Overview',
      labelZh: '项目概览',
      description:
        'Comic localization is more than translating words. Teams must coordinate artwork, OCR, narrative context, terminology, visual typesetting, review, and delivery. Without a shared system, information fragments and progress becomes difficult to track.',
      descriptionZh:
        '漫画翻译并非是“把文字翻译成另一种语言”。真实业务中，团队需要同时处理原画图像、文字识别、前后文理解、统一术语、画面排版、校对和交付。每个环节都依赖不同角色协作，若没有统一系统，很容易出现信息割裂，进度不透明等问题。',
    }
  }

  if (section.id === 'research') {
    return {
      ...section,
      label: 'My Role',
      labelZh: '我的角色',
      description:
        'I mapped the workflow and roles, designed the core editing experience, linked text with the canvas, defined AI-assisted moments, and established UI and component standards.',
      descriptionZh:
        '负责业务流程梳理、角色任务拆解、核心工作流设计、文本与画布联动、AI辅助位置、工作台布局、UI 视觉与组件规范',
    }
  }

  if (section.id === 'design-challenge') {
    return {
      ...section,
      label: 'Workflow Redesign',
      labelZh: '工作流重构',
      description:
        'We reorganized fragmented production tasks into a workflow that teams could understand, track, and collaborate within.',
      descriptionZh:
        '把用户原本分散的生产动作重新组织为可理解、可追踪、可协作的工作流。',
    }
  }

  if (section.id === 'solution') {
    return {
      ...section,
      label: 'Role-Based Workspace',
      labelZh: '角色化工作台',
      description:
        'Role-specific workspaces reflect each responsibility: translators ensure linguistic accuracy, typesetters shape on-page text, and reviewers make the final quality call.',
      descriptionZh:
        '根据角色职责设计工作台：译员负责译文准确性，排版员负责画面文字呈现，校对员负责最终质量判断。',
    }
  }

  if (section.id === 'prototype') {
    return {
      ...section,
      label: 'Bidirectional Canvas & Text Synchronization',
      labelZh: '画布与文本双向同步',
      description:
        'Each role sees a different canvas layout and toolset: translators focus on copy, typesetters shape the page, and reviewers provide feedback—so everyone handles only the work relevant to them.',
      descriptionZh:
        '不同角色进入画布后，会有不同的布局和功能。译员看文本，排版员调画面，校对员提反馈，让每个角色只处理自己该处理的事。',
    }
  }

  if (section.id === 'reflection') {
    return {
      ...section,
      descriptionZh:
        '依托AI解析原稿提炼统一设计规范并驱动Figma快速搭建标准化组件库，降低改版与迭代成本快速送代升级筑牢设计基建。',
    }
  }

  return section
})

const huanzhiPlaceholderSections = miaofanCaseStudySections.map((section, sectionIndex) => {
  const placeholderSection = {
    ...section,
    label: `Section Title ${String(sectionIndex + 1).padStart(2, '0')}`,
    labelZh: `章节标题占位 ${String(sectionIndex + 1).padStart(2, '0')}`,
    description:
      'Placeholder body copy for the Huanzhi Mini Program Redesign case study. Replace this text with the final project narrative when the content is ready.',
    descriptionZh:
      '焕智小程序改版案例正文占位。待项目内容确认后，将此处替换为最终的项目叙述。',
  }

  if (section.id === 'background') {
    return {
      ...placeholderSection,
      label: 'Project Overview',
      labelZh: '项目概览',
      description: '',
      descriptionZh: '',
    }
  }

  if (section.id === 'research') {
    return {
      ...placeholderSection,
      label: 'My Role',
      labelZh: '我的角色',
    }
  }

  if (section.id === 'design-challenge') {
    return {
      ...placeholderSection,
      label: 'Business Needs',
      labelZh: '业务需求',
      description: '',
      descriptionZh: '',
    }
  }

  if (section.id === 'solution') {
    return {
      ...placeholderSection,
      label: 'Design Goals & Strategy',
      labelZh: '设计目标与策略',
      description: '',
      descriptionZh: '',
    }
  }

  if (section.id === 'prototype') {
    return {
      ...placeholderSection,
      label: 'Map Redesing',
      labelZh: '地图改版',
      description: '',
      descriptionZh: '',
    }
  }

  return placeholderSection
})

const genericMiaofanPlaceholderSections = miaofanCaseStudySections.map((section) => ({
  ...section,
  description:
    'Placeholder body copy for this case study section. Replace it with the final project narrative when the content is ready.',
  descriptionZh: '此处为案例章节正文占位，待项目内容确认后替换为最终文案。',
}))

const playableInteractiveAdsSections = genericMiaofanPlaceholderSections.map((section) => {
  if (section.id === 'background') {
    return {
      ...section,
      description:
        "Playable interactive ads combine cloud gaming with advertising through screen-casting technology. Designed to improve distribution efficiency and shorten advertisers' ROI payback cycle, they let users start instantly, improve the media experience, and increase retention.",
      descriptionZh:
        '试玩互动广告是基于投屏互动技术衍生出来的一种结合云游戏与广告全新的广告形式，主要为提升渠道分发效率，同时缩短渠道的上游广告主ROI回收周期，用户即点即用，提升媒体分发的用户体验，进而提升渠道的用户留存。',
    }
  }

  if (section.id === 'research') {
    return {
      ...section,
      label: 'Problem Discovery',
      labelZh: '发现问题',
      description: '',
      descriptionZh: '',
    }
  }

  if (section.id === 'design-challenge') {
    return {
      ...section,
      label: 'Design Direction',
      labelZh: '设计方向',
      description:
        'I synthesized the client\'s concern that the brand was not prominent enough with user feedback such as “the map is too small, cabinets are hard to find, and statuses are unclear,” turning them into actionable design strategies. Fragmented requirements were organized into an experience upgrade centered on the core task.',
      descriptionZh:
        '我将客户提出的“品牌不够突出”和用户反馈中的“地图小、找柜难、状态不清等”进行了整合，转化为可执行的设计策略。分散需求组织成一套围绕核心任务的体验升级方案。',
    }
  }

  if (section.id === 'solution') {
    return {
      ...section,
      label: 'Playable Ads Lock-Screen Application',
      labelZh: '试玩互动广告在锁屏中的应用',
      description:
        'Interactive lock screens are a new format built on playable-ad technology. Users can tap a game ad on the lock screen to enter interactive mode, try or download the game without leaving the screen, supporting game promotion.',
      descriptionZh:
        '互动锁屏是基于试玩互动广告技术研发出的一种新型锁屏形式。手机用户可以通过点击锁屏游戏广告，进入互动模式，在当前界面上试玩或下载，达到游戏推广的目的。',
    }
  }

  if (section.id === 'prototype') {
    return {
      ...section,
      label: 'Interactive Lock-Screen Layout',
      labelZh: '互动锁屏布局设计',
      description: '',
      descriptionZh: '',
    }
  }

  if (section.id === 'reflection') {
    return {
      ...section,
      label: 'Revenue&Data Loop',
      labelZh: '商业化升级&数据回收',
      description:
        'Playable content attracted users to stay. Our product helped distribution partners improve delivery efficiency and lower acquisition costs.',
      descriptionZh:
        '以试玩为卖点吸引用户停留，渠道方通过我们的产品提升了分发效率，降低了获客成本。',
    }
  }

  return section
})

function CaseStudyPage({
  project,
  index,
  onContactClick,
}: {
  project: (typeof projects)[number]
  index: number
  onContactClick: () => void
}) {
  const { language } = useLanguage()
  const isMiaofanProject = project.slug === 'aura-brand-identity'
  const isHuanzhiPlaceholder = project.slug === 'solaris-digital'
  const isInnerglowProject = project.slug === 'project-placeholder-04'
  const isGpuRentalProject = project.slug === 'project-placeholder-05'
  const isTeekidsProject = project.slug === 'project-placeholder-06'
  const isParticleActiveProject = project.slug === 'project-placeholder-08'
  const isGenericPlaceholder = /^project-placeholder-0(?:[4-6]|8)$/.test(project.slug)
  const isFullMiaofanPlaceholder = project.slug === 'project-placeholder-07'
  const usesPlaceholderLayout =
    isHuanzhiPlaceholder || isGenericPlaceholder || isFullMiaofanPlaceholder
  const usesMiaofanLayout = isMiaofanProject || usesPlaceholderLayout
  const sections =
    isMiaofanProject
      ? miaofanCaseStudySections
      : isFullMiaofanPlaceholder
        ? playableInteractiveAdsSections
      : isGenericPlaceholder
        ? huanzhiPlaceholderSections.filter(({ id }) =>
      isInnerglowProject || isGpuRentalProject || isTeekidsProject || isParticleActiveProject
        ? id === 'background'
              : id === 'background' || id === 'research',
          )
        : usesPlaceholderLayout
        ? huanzhiPlaceholderSections
        : caseStudySections
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const projectName = language === 'en' ? project.name : project.nameZh
  const overviewImages = ('overviewImages' in project ? project.overviewImages : []) ?? []

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

    sections.forEach(({ id }) => {
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
      <header className="fixed inset-x-0 top-0 z-[80] flex items-center justify-between border-b border-white/10 bg-[#0C0C0C]/90 py-5 pl-5 pr-28 backdrop-blur-xl sm:py-6 sm:pl-8 sm:pr-32 md:pl-12 md:pr-36">
        <a
          href="#home"
          className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-65 sm:text-sm"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          {language === 'en' ? 'Back to home' : '回到首页'}
        </a>
        <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-6 text-xs font-medium uppercase tracking-[0.18em] sm:gap-10 sm:text-sm md:gap-14">
          <div className="group relative">
            <a href="#projects" className="transition-opacity hover:opacity-65">
              {language === 'en' ? 'Projects' : '项目'}
            </a>
            <div className="invisible absolute left-1/2 top-full w-[min(88vw,430px)] -translate-x-1/2 pt-6 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#111214]/95 p-2 text-[#D7E2EA] shadow-2xl backdrop-blur-xl">
                <p className="border-b border-white/10 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.24em] text-[#D7E2EA]/45 sm:text-[10px]">
                  {language === 'en' ? 'Selected case studies' : '案例项目'}
                </p>
                <div className="max-h-[min(68vh,520px)] overflow-y-auto py-1">
                  {projects.map((caseProject, caseIndex) => (
                    <a
                      key={caseProject.slug}
                      href={`#/case-study/${caseProject.slug}`}
                      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors focus-visible:outline-none ${caseProject.slug === project.slug ? 'bg-[#FFD629] text-[#0C0C0C] hover:bg-[#FFE15C] focus-visible:bg-[#FFE15C]' : 'hover:bg-white/10 focus-visible:bg-white/10'}`}
                    >
                      <span className={`w-7 shrink-0 text-[10px] font-medium tracking-[0.16em] ${caseProject.slug === project.slug ? 'text-[#0C0C0C]/55' : 'text-[#D7E2EA]/35'}`}>
                        {String(caseIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="min-w-0 flex-1 text-[11px] font-semibold uppercase leading-tight tracking-[0.08em] sm:text-xs">
                        {language === 'en' ? caseProject.name : caseProject.nameZh}
                      </span>
                      <span className={`shrink-0 text-[9px] font-normal tracking-[0.14em] sm:text-[10px] ${caseProject.slug === project.slug ? 'text-[#0C0C0C]/60' : 'text-[#D7E2EA]/40'}`}>
                        {caseProject.year}
                      </span>
                      <ArrowUpRight size={14} className={`shrink-0 ${caseProject.slug === project.slug ? 'opacity-80' : 'opacity-50'}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onContactClick}
            className="uppercase transition-opacity hover:opacity-65"
          >
            {language === 'en' ? 'Contact me' : '联系我'}
          </button>
        </nav>
        <span className="text-xs font-light uppercase tracking-[0.22em] text-[#D7E2EA]/50">
          {language === 'en' ? 'Case study' : '案例'} / {String(index + 1).padStart(2, '0')}
        </span>
      </header>

      <section className="px-5 pb-20 pt-32 sm:px-8 sm:pt-36 md:px-12 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-[1600px]">
          <div
            className={
              usesMiaofanLayout
                ? 'flex items-end justify-between gap-6'
                : 'flex flex-wrap items-end justify-between gap-8'
            }
          >
            <div className={usesMiaofanLayout ? 'min-w-0 flex-1' : ''}>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-[#D7E2EA]/50">
                {language === 'en' ? `${project.category} project` : project.categoryZh}
              </p>
              <h1
                className={`hero-heading max-w-6xl font-black uppercase tracking-tight ${
                  language === 'zh' ? 'pb-[0.08em] leading-[1.06]' : 'leading-[0.82]'
                } ${
                  project.slug === 'nextlevel-studio'
                    ? 'text-[clamp(3.2rem,7vw,7.5rem)]'
                    : usesMiaofanLayout
                      ? 'text-[clamp(2.8rem,7vw,7.5rem)]'
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
            <span className="shrink-0 text-[clamp(4rem,9vw,8rem)] font-black leading-none text-[#D7E2EA]/15">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {project.slug !== 'nextlevel-studio' && !usesMiaofanLayout && (
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
            {sections.map(({ id, label }, sectionIndex) => {
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
                  {usesMiaofanLayout && id === 'prototype'
                    ? isHuanzhiPlaceholder
                      ? language === 'en'
                        ? 'Key Design Decisions'
                        : '关键设计决策'
                      : language === 'en'
                        ? 'Key Design Decisions'
                        : '关键设计决策'
                    : language === 'en'
                      ? label
                      : sections[sectionIndex].labelZh}
                </button>
              )
            })}
          </nav>
        </aside>

        <div className="min-w-0">
          <div className="sticky top-0 z-20 -mx-5 mb-8 overflow-x-auto border-y border-[#D7E2EA]/15 bg-[#0C0C0C]/95 px-5 py-4 backdrop-blur lg:hidden">
            <div className="flex w-max gap-2">
              {sections.map(({ id, label }) => (
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
                  {usesMiaofanLayout && id === 'prototype'
                    ? isHuanzhiPlaceholder
                      ? language === 'en'
                        ? 'Key Design Decisions'
                        : '关键设计决策'
                      : language === 'en'
                        ? 'Key Design Decisions'
                        : '关键设计决策'
                    : language === 'en'
                      ? label
                      : sections.find((item) => item.id === id)?.labelZh}
                </button>
              ))}
            </div>
          </div>

          {sections.map((section, sectionIndex) => {
            const primaryImage =
              isMiaofanProject && section.id === 'background'
                ? language === 'zh'
                  ? miaofanProjectOverviewZh
                  : miaofanProjectOverview
                : isMiaofanProject && section.id === 'design-challenge'
                  ? language === 'zh'
                    ? miaofanWorkflowRedesignZh
                    : miaofanWorkflowRedesign
                  : isMiaofanProject && section.id === 'solution'
                    ? language === 'zh'
                      ? miaofanRoleBasedWorkspaceZh
                      : miaofanRoleBasedWorkspace
                    : isMiaofanProject && section.id === 'prototype'
                      ? language === 'zh'
                        ? miaofanBidirectionalCanvasTextZh
                        : miaofanBidirectionalCanvasText
                      : isMiaofanProject && section.id === 'reflection'
                        ? miaofanOtherKeyScreens
                : project.slug === 'nextlevel-studio' && section.id === 'solution'
                  ? guidedCreationFlow1280
                  : project.slug === 'nextlevel-studio' && section.id === 'prototype'
                    ? aeroDesignSystem1280
                  : project.slug === 'nextlevel-studio' && section.id === 'reflection'
                    ? aeroOtherKeyScreens1280
                    : project.images[sectionIndex % project.images.length]
            const secondaryImage = project.images[(sectionIndex + 1) % project.images.length]
            const showPair =
              (sectionIndex === 1 || sectionIndex === 4 || sectionIndex === 6) &&
              !(project.slug === 'nextlevel-studio' && section.id === 'prototype') &&
              !(usesMiaofanLayout && section.id === 'prototype')
            const isMiaofanOverview =
              usesMiaofanLayout && section.id === 'background'
            const isMiaofanWorkflow =
              usesMiaofanLayout && section.id === 'design-challenge'
            const isMiaofanRoleWorkspace =
              usesMiaofanLayout && section.id === 'solution'
            const isMiaofanBidirectionalCanvas =
              usesMiaofanLayout && section.id === 'prototype'
            const isMiaofanOtherKeyScreens =
              usesMiaofanLayout && section.id === 'reflection'

            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 border-t border-[#D7E2EA]/15 py-16 first:border-t-0 first:pt-0 sm:py-20 md:py-24"
              >
                {isMiaofanBidirectionalCanvas && (
                  <div className="mb-14 flex items-end justify-between gap-6 sm:mb-20">
                    <h1 className="text-[clamp(2.2rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-tight">
                      {usesPlaceholderLayout
                        ? language === 'en'
                          ? 'Key Design Decisions'
                          : '关键设计决策'
                        : language === 'en'
                          ? 'Key Design Decisions'
                          : '关键设计决策'}
                    </h1>
                    <span className="shrink-0 pb-1 text-xs font-medium tracking-[0.22em] text-[#D7E2EA]/35">
                      /{String(sectionIndex + 1).padStart(2, '0')}
                    </span>
                  </div>
                )}
                <div className="relative mb-10">
                  {!isMiaofanBidirectionalCanvas && (
                    <span
                      className="absolute right-0 top-1 text-right text-xs font-medium tracking-[0.22em] text-[#D7E2EA]/35"
                    >
                      /{String(sectionIndex + 1).padStart(2, '0')}
                    </span>
                  )}
                  <div className="pr-20">
                    <h2
                      className={
                        isMiaofanBidirectionalCanvas
                          ? 'text-[clamp(1.6rem,3vw,3.25rem)] font-bold uppercase leading-tight tracking-tight'
                          : 'text-[clamp(2.2rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-tight'
                      }
                    >
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
                        ? 'Goal: Transform users from content creators into reviewers'
                        : '目标：帮助用户高效创建课程'}
                    </h3>
                  </div>
                )}

                {isFullMiaofanPlaceholder && section.id === 'research' ? (
                  <motion.img
                    src={
                      language === 'en'
                        ? playableProblemDiscoveryEn
                        : playableProblemDiscoveryZh
                    }
                    alt={language === 'en' ? 'Problem discovery' : '发现问题'}
                    loading="lazy"
                    decoding="async"
                    width={2000}
                    height={1292}
                    className="h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.65 }}
                  />
                ) : usesMiaofanLayout && section.id === 'research' ? (
                  <div className="rounded-[24px] border border-[#D7E2EA]/18 bg-[#D7E2EA]/[0.035] p-6 sm:rounded-[30px] sm:p-8 md:p-10">
                    <h3 className="text-xl font-semibold uppercase tracking-tight sm:text-2xl">
                      {usesPlaceholderLayout
                        ? language === 'en'
                          ? 'Placeholder Group Title'
                          : '分组标题占位'
                        : language === 'en'
                          ? 'Core Responsibilities'
                          : '核心职责'}
                    </h3>
                    <div className="mt-8 grid gap-px overflow-hidden rounded-[18px] border border-[#D7E2EA]/15 bg-[#D7E2EA]/15 sm:rounded-[22px] md:grid-cols-2">
                      {[
                        {
                          title:
                            usesPlaceholderLayout
                              ? language === 'en'
                                ? 'Placeholder Card Title 01'
                                : '卡片标题占位 01'
                              : language === 'en'
                              ? 'Map the End-to-End Localization Flow'
                              : '梳理本地化完整流程',
                          body:
                            usesPlaceholderLayout
                              ? language === 'en'
                                ? 'Placeholder copy for this responsibility card. Replace it with the final project content.'
                                : '此处为职责卡片正文占位，待内容确认后替换为最终项目文案。'
                              : language === 'en'
                              ? 'Cover the end-to-end flow from source upload and OCR to translation, typesetting, review, and final delivery.'
                              : '覆盖原稿上传、OCR 识别、翻译、排版、校对到最终交付的端到端流程。',
                        },
                        {
                          title:
                            usesPlaceholderLayout
                              ? language === 'en'
                                ? 'Placeholder Card Title 02'
                                : '卡片标题占位 02'
                              : language === 'en'
                              ? 'Design Role-Based Collaboration'
                              : '设计多角色协作体系',
                          body:
                            usesPlaceholderLayout
                              ? language === 'en'
                                ? 'Placeholder copy for this responsibility card. Replace it with the final project content.'
                                : '此处为职责卡片正文占位，待内容确认后替换为最终项目文案。'
                              : language === 'en'
                              ? 'Define the responsibilities, permissions, and workspace layout for translators, typesetters, reviewers, and administrators.'
                              : '拆解译员、排版员、校对员和管理员的任务分工、权限边界与工作台布局。',
                        },
                        {
                          title:
                            usesPlaceholderLayout
                              ? language === 'en'
                                ? 'Placeholder Card Title 03'
                                : '卡片标题占位 03'
                              : language === 'en'
                              ? 'Optimize the Core Editing Experience'
                              : '优化核心编辑体验',
                          body:
                            usesPlaceholderLayout
                              ? language === 'en'
                                ? 'Placeholder copy for this responsibility card. Replace it with the final project content.'
                                : '此处为职责卡片正文占位，待内容确认后替换为最终项目文案。'
                              : language === 'en'
                              ? 'Link the text list and comic canvas in both directions to make translation, typesetting, and review more efficient.'
                              : '设计文本列表与漫画画布的双向联动，提升翻译、排版和校对效率。',
                        },
                        {
                          title:
                            usesPlaceholderLayout
                              ? language === 'en'
                                ? 'Placeholder Card Title 04'
                                : '卡片标题占位 04'
                              : language === 'en'
                              ? 'Build AI Assistance and a Quality Loop'
                              : '构建 AI 辅助与质量闭环',
                          body:
                            usesPlaceholderLayout
                              ? language === 'en'
                                ? 'Placeholder copy for this responsibility card. Replace it with the final project content.'
                                : '此处为职责卡片正文占位，待内容确认后替换为最终项目文案。'
                              : language === 'en'
                              ? 'Introduce AI translation, terminology prompts, quality checks, and layout assistance while improving task handoffs, feedback, and design standards.'
                              : '引入 AI 翻译、术语提示、质量检查与排版辅助，同时完善任务流转、反馈机制和设计规范。',
                        },
                      ].map((responsibility, responsibilityIndex) => (
                        <motion.article
                          key={responsibility.title}
                          className="bg-[#0C0C0C] p-5 sm:p-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-60px' }}
                          transition={{ duration: 0.5, delay: responsibilityIndex * 0.05 }}
                        >
                          <span className="text-xs font-medium tracking-[0.2em] text-[#D7E2EA]/35">
                            {String(responsibilityIndex + 1).padStart(2, '0')}
                          </span>
                          <h4 className="mt-5 text-base font-semibold uppercase leading-snug tracking-tight sm:text-lg">
                            {responsibility.title}
                          </h4>
                          <p className="mt-3 text-sm font-light leading-7 text-[#D7E2EA]/60 sm:text-base">
                            {responsibility.body}
                          </p>
                        </motion.article>
                      ))}
                    </div>
                  </div>
                ) : project.slug === 'nextlevel-studio' && section.id === 'background' ? null : project.slug ===
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
                        src={researchAiToolComparison1223}
                        srcSet={`${researchAiToolComparison640} 640w, ${researchAiToolComparison1223} 1223w`}
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        alt="Comparison of AI tool, course platform, and editor capabilities"
                        loading="lazy"
                        decoding="async"
                        width={1223}
                        height={971}
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
                            : '机型、版本、岗位、航司要求和培训阶段共同形成大量组合。',
                      },
                      {
                        title: language === 'en' ? 'Fragmented Materials' : '材料格式多',
                        body:
                          language === 'en'
                            ? 'Different file formats require different processing methods, making it difficult to maintain consistent course structures.'
                            : '不同文件格式需要不同的阅读和整理方式，难统一课程结构。',
                      },
                      {
                        title: language === 'en' ? 'High Manual Input Cost' : '人工录入成本高',
                        body:
                          language === 'en'
                            ? 'Large amounts of information require manual transcription, creating long production cycles and potential errors.'
                            : '大量信息依赖手动转录，周期长，也容易产生输入错误。',
                      },
                      {
                        title: language === 'en' ? 'Large Content Scale' : '内容规模庞大',
                        body:
                          language === 'en'
                            ? 'Training materials require repeated reading, extraction, rewriting, and review.'
                            : '需要反复阅读、提取、重写和校对密集材料。',
                      },
                      {
                        title:
                          language === 'en'
                            ? 'High Responsibility Requirements'
                            : '高责任要求',
                        body:
                          language === 'en'
                            ? 'Incorrect, outdated, missing, or inconsistent content can affect training quality and compliance. AI-generated content cannot be published automatically.'
                            : '内容错误、过期、遗漏或不一致可能影响培训质量和合规，因此不能允许 AI 自动生成后直接发布。',
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
                    {isGenericPlaceholder && section.id === 'background' ? (
                      <div className="space-y-4 sm:space-y-6">
                        {overviewImages.map((image, imageIndex) => (
                          <motion.img
                            key={image}
                            src={image}
                            alt={`${project.name} project overview ${imageIndex + 1}`}
                            loading="lazy"
                            decoding="async"
                            width={2000}
                            height={isInnerglowProject ? 16067 : isGpuRentalProject ? 12350 : 1536}
                            className="h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.65, delay: imageIndex * 0.08 }}
                          />
                        ))}
                      </div>
                    ) : isFullMiaofanPlaceholder && section.id === 'background' ? (
                      <motion.img
                        src={
                          language === 'en'
                            ? playableProjectOverviewEn
                            : playableProjectOverviewZh
                        }
                        alt={
                          language === 'en'
                            ? 'Playable interactive ads project overview'
                            : '试玩互动广告项目概览'
                        }
                        loading="lazy"
                        decoding="async"
                        width={2048}
                        height={1536}
                        className="h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65 }}
                      />
                    ) : isHuanzhiPlaceholder && section.id === 'background' ? (
                      <motion.img
                        src={huanzhiProjectOverview}
                        alt="Huanzhi mini program redesign project overview"
                        loading="lazy"
                        decoding="async"
                        width={3000}
                        height={2250}
                        className="h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65 }}
                      />
                    ) : isFullMiaofanPlaceholder && section.id === 'design-challenge' ? (
                      <motion.img
                        src={
                          language === 'en'
                            ? playableDesignDirectionEn
                            : playableDesignDirectionZh
                        }
                        alt={language === 'en' ? 'Design direction' : '设计方向'}
                        loading="lazy"
                        decoding="async"
                        width={2000}
                        height={1044}
                        className="h-auto w-full rounded-[24px] bg-white object-contain sm:rounded-[34px] md:rounded-[46px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65 }}
                      />
                    ) : isHuanzhiPlaceholder && section.id === 'design-challenge' ? (
                      <motion.img
                        src={huanzhiBusinessNeeds1}
                        alt="Huanzhi business and user needs"
                        loading="lazy"
                        decoding="async"
                        width={3000}
                        height={1959}
                        className="h-auto w-full rounded-[24px] bg-white object-contain sm:rounded-[34px] md:rounded-[46px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65 }}
                      />
                    ) : isFullMiaofanPlaceholder && section.id === 'solution' ? (
                      <motion.img
                        src={playableLockScreenApplication}
                        alt="Playable ads lock-screen application"
                        loading="lazy"
                        decoding="async"
                        width={2000}
                        height={1500}
                        className="h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65 }}
                      />
                    ) : isHuanzhiPlaceholder && section.id === 'solution' ? (
                      <motion.img
                        src={huanzhiDesignGoalsStrategy}
                        alt="Huanzhi design goals and strategy"
                        loading="lazy"
                        decoding="async"
                        width={3000}
                        height={3440}
                        className="h-auto w-full rounded-[24px] bg-white object-contain sm:rounded-[34px] md:rounded-[46px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65 }}
                      />
                    ) : isFullMiaofanPlaceholder && section.id === 'prototype' ? (
                      <motion.img
                        src={
                          language === 'en'
                            ? playableInteractiveLockScreenLayoutEn
                            : playableInteractiveLockScreenLayoutZh
                        }
                        alt={
                          language === 'en'
                            ? 'Interactive lock-screen layout'
                            : '互动锁屏布局设计'
                        }
                        loading="lazy"
                        decoding="async"
                        width={2000}
                        height={1368}
                        className="h-auto w-full rounded-[24px] bg-white object-contain sm:rounded-[34px] md:rounded-[46px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65 }}
                      />
                    ) : isHuanzhiPlaceholder && section.id === 'prototype' ? (
                      <motion.img
                        src={huanzhiMapRedesing}
                        alt="Huanzhi map redesing"
                        loading="lazy"
                        decoding="async"
                        width={3000}
                        height={5961}
                        className="h-auto w-full rounded-[24px] bg-white object-contain sm:rounded-[34px] md:rounded-[46px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65 }}
                      />
                    ) : isFullMiaofanPlaceholder && section.id === 'reflection' ? (
                      <motion.img
                        src={
                          language === 'en'
                            ? playableRevenueDataLoopEn
                            : playableRevenueDataLoopZh
                        }
                        alt={language === 'en' ? 'Revenue and data loop' : '商业化升级与数据回收'}
                        loading="lazy"
                        decoding="async"
                        width={2000}
                        height={language === 'en' ? 1000 : 994}
                        className="h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65 }}
                      />
                    ) : usesPlaceholderLayout ? (
                      <motion.div
                        className={`flex w-full items-center justify-center rounded-[24px] border border-dashed border-[#D7E2EA]/25 bg-gradient-to-br from-[#D7E2EA]/[0.08] to-[#D7E2EA]/[0.02] sm:rounded-[34px] md:rounded-[46px] ${
                          isMiaofanOverview
                            ? 'aspect-[3000/2805]'
                            : isMiaofanWorkflow
                              ? 'aspect-[3000/1659]'
                              : isMiaofanRoleWorkspace
                                ? 'aspect-[3000/1335]'
                                : isMiaofanBidirectionalCanvas
                                  ? 'aspect-[3000/1701]'
                                  : 'aspect-[3000/1559]'
                        }`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65 }}
                      >
                        <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#D7E2EA]/30">
                          {language === 'en'
                            ? `Image placeholder ${String(sectionIndex + 1).padStart(2, '0')}`
                            : `图片占位 ${String(sectionIndex + 1).padStart(2, '0')}`}
                        </span>
                      </motion.div>
                    ) : (
                      <motion.img
                      src={primaryImage}
                      srcSet={
                        project.slug === 'nextlevel-studio' && section.id === 'solution'
                          ? `${guidedCreationFlow768} 768w, ${guidedCreationFlow1280} 1280w, ${guidedCreationFlow1920} 1920w, ${guidedCreationFlow2560} 2560w`
                          : project.slug === 'nextlevel-studio' && section.id === 'prototype'
                            ? `${aeroDesignSystem768} 768w, ${aeroDesignSystem1280} 1280w, ${aeroDesignSystem1920} 1920w`
                          : project.slug === 'nextlevel-studio' && section.id === 'reflection'
                            ? `${aeroOtherKeyScreens768} 768w, ${aeroOtherKeyScreens1280} 1280w, ${aeroOtherKeyScreens1920} 1920w`
                          : undefined
                      }
                      sizes={
                        project.slug === 'nextlevel-studio' && section.id === 'solution'
                          ? '(min-width: 1024px) calc(100vw - 380px), calc(100vw - 40px)'
                          : project.slug === 'nextlevel-studio' && section.id === 'prototype'
                            ? '(min-width: 1024px) calc(100vw - 380px), calc(100vw - 40px)'
                          : project.slug === 'nextlevel-studio' && section.id === 'reflection'
                            ? '(min-width: 1024px) calc(100vw - 380px), calc(100vw - 40px)'
                          : undefined
                      }
                      alt={`${project.name} ${section.label}`}
                      loading="lazy"
                      decoding="async"
                      width={
                        language === 'zh' &&
                        (isMiaofanOverview ||
                          isMiaofanWorkflow ||
                          isMiaofanRoleWorkspace ||
                          isMiaofanBidirectionalCanvas)
                          ? 2000
                          : isMiaofanOverview
                          ? 3000
                          : isMiaofanWorkflow
                            ? 3000
                            : isMiaofanRoleWorkspace
                              ? 3000
                              : isMiaofanBidirectionalCanvas
                                ? 3000
                                : isMiaofanOtherKeyScreens
                                  ? 3000
                          : project.slug === 'nextlevel-studio' && section.id === 'solution'
                            ? 3000
                            : project.slug === 'nextlevel-studio' && section.id === 'prototype'
                              ? 2000
                            : project.slug === 'nextlevel-studio' && section.id === 'reflection'
                              ? 2000
                            : undefined
                      }
                      height={
                        language === 'zh' && isMiaofanOverview
                          ? 1729
                          : language === 'zh' && isMiaofanWorkflow
                            ? 1106
                            : language === 'zh' && isMiaofanRoleWorkspace
                              ? 890
                              : language === 'zh' && isMiaofanBidirectionalCanvas
                                ? 1126
                                : isMiaofanOverview
                          ? 2805
                          : isMiaofanWorkflow
                            ? 1659
                            : isMiaofanRoleWorkspace
                              ? 1335
                              : isMiaofanBidirectionalCanvas
                                ? 1701
                                : isMiaofanOtherKeyScreens
                                  ? 1559
                          : project.slug === 'nextlevel-studio' && section.id === 'solution'
                            ? 2250
                            : project.slug === 'nextlevel-studio' && section.id === 'prototype'
                              ? 1218
                            : project.slug === 'nextlevel-studio' && section.id === 'reflection'
                              ? 1500
                            : undefined
                      }
                      className={
                        project.slug === 'nextlevel-studio' && section.id === 'solution'
                          ? 'w-full rounded-[24px] bg-white object-contain sm:rounded-[34px] md:rounded-[46px]'
                          : project.slug === 'nextlevel-studio' && section.id === 'prototype'
                            ? 'h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]'
                          : project.slug === 'nextlevel-studio' && section.id === 'reflection'
                            ? 'h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]'
                          : isMiaofanOverview
                            ? 'h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]'
                            : isMiaofanWorkflow
                              ? 'h-auto w-full rounded-[24px] bg-white object-contain sm:rounded-[34px] md:rounded-[46px]'
                              : isMiaofanRoleWorkspace
                                ? 'h-auto w-full rounded-[24px] bg-white object-contain sm:rounded-[34px] md:rounded-[46px]'
                                : isMiaofanBidirectionalCanvas
                                  ? 'h-auto w-full rounded-[24px] bg-white object-contain sm:rounded-[34px] md:rounded-[46px]'
                                  : isMiaofanOtherKeyScreens
                                    ? 'h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]'
                          : 'aspect-[16/10] h-full w-full rounded-[24px] object-cover sm:rounded-[34px] md:rounded-[46px]'
                      }
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.65 }}
                      />
                    )}
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

                {isMiaofanBidirectionalCanvas && (
                  <div className="mt-20 space-y-20 sm:mt-28 sm:space-y-28">
                    {[
                      {
                        number: '02',
                        title: 'Terminology Memory System',
                        titleZh: '术语记忆系统',
                        body:
                          'To keep translations consistent, the system detects recurring terms, recommends approved translations, flags conflicts, and supports one-click replacement.',
                        bodyZh:
                          '为确保前后译法一致，识别高频词并推荐已有译法；冲突时主动提醒并支持快速替换。',
                        image: miaofanTerminologyMemorySystem,
                        imageZh: miaofanTerminologyMemorySystemZh,
                        imageWidth: 3000,
                        imageHeight: 1721,
                        imageWidthZh: 2000,
                        imageHeightZh: 1147,
                      },
                      {
                        number: '03',
                        title: 'AI-Assisted Human-Approved',
                        titleZh: 'AI辅助，人来拍板',
                        body:
                          'AI is designed as an assistive layer that provides suggestions and validation rather than replacing translators. Since comic translation relies on context and emotional nuance, AI improves efficiency while preserving human judgment.',
                        bodyZh:
                          'AI 翻译没有被设计成“全部自动替换”，而是以建议、提醒和校验的形式出现。因为漫画翻译强依赖语境、人物关系和情绪表达，AI 可以提高效率，但不应削弱专业译员的判断权。',
                        image: miaofanAiAssistedHumanApproved,
                        imageZh: miaofanAiAssistedHumanApprovedZh,
                        imageWidth: 3000,
                        imageHeight: 1716,
                        imageWidthZh: 2000,
                        imageHeightZh: 1144,
                      },
                      {
                        number: '04',
                        title: 'An Easy-to-Use Editing Experience',
                        titleZh: '低门槛的编辑工具',
                        body:
                          'Comic typesetting typically requires advanced image-editing skills, but many users are not professional designers. The workspace therefore focuses on lightweight tools for the most common layout tasks.',
                        bodyZh:
                          '漫画排版通常需要较高的图像编辑经验，而平台面对的用户并不一定都熟悉专业设计工具。所以需要围绕漫画排版的高频任务设计轻量化工具。',
                        image: miaofanEasyEditingExperience,
                        imageZh: miaofanEasyEditingExperienceZh,
                        imageWidth: 3000,
                        imageHeight: 1845,
                        imageWidthZh: 2000,
                        imageHeightZh: 1233,
                      },
                      {
                        number: '05',
                        title: 'Find Issues\nTrack Progress\nResolve',
                        titleZh: '问题能定位\n进度能追踪\n修改能闭环',
                        body:
                          'In multi-role collaboration, quality feedback cannot remain in chat. It must become a task linked to the page, text, owner, and status.',
                        bodyZh:
                          '在多人协作中，质量反馈不能停留在聊天沟通里，而要转化成绑定页面、文本、负责人和状态的任务。',
                        image: miaofanFindIssuesTrackProgressResolve,
                        imageZh: miaofanFindIssuesTrackProgressResolve,
                        imageWidth: 3000,
                        imageHeight: 1686,
                        imageWidthZh: 3000,
                        imageHeightZh: 1686,
                      },
                      {
                        number: '06',
                        title: 'Complex Progress at a Glance',
                        titleZh: '复杂进度一眼看清',
                        body:
                          'In collaborative workflows, quality feedback should not remain only in conversations. Instead, it should be transformed into actionable tasks linked to specific pages, text sections, owners, and statuses.',
                        bodyZh:
                          '在多人协作中，质量反馈不能停留在聊天沟通里，而要转化成绑定页面、文本、负责人和状态的任务。',
                        image: miaofanComplexProgressAtAGlance,
                        imageZh: miaofanComplexProgressAtAGlance,
                        imageWidth: 3000,
                        imageHeight: 1751,
                        imageWidthZh: 3000,
                        imageHeightZh: 1751,
                      },
                    ]
                      .filter(
                        (decision) =>
                          !(
                            isFullMiaofanPlaceholder &&
                            (decision.number === '05' || decision.number === '06')
                          ),
                      )
                      .map((decision) => (
                      <motion.article
                        key={decision.number}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                      >
                        <h2 className="whitespace-pre-line text-[clamp(1.6rem,3vw,3.25rem)] font-bold uppercase leading-tight tracking-tight">
                          {isFullMiaofanPlaceholder && decision.number === '02'
                            ? language === 'en'
                              ? 'Interactive Lock-Screen Use Case'
                              : '互动锁屏应用案例'
                            : isFullMiaofanPlaceholder && decision.number === '03'
                              ? language === 'en'
                                ? 'Applying Interactive Ads'
                                : '互动广告的应用'
                            : isFullMiaofanPlaceholder && decision.number === '04'
                              ? language === 'en'
                                ? 'Fullscreen Guidance'
                                : '全屏模式下的引导'
                            : usesPlaceholderLayout
                            ? language === 'en'
                              ? decision.number === '02'
                                ? 'Vehicle Control.'
                                : `Placeholder Feature Title ${decision.number}`
                              : decision.number === '02'
                                ? '车辆控制'
                                : `功能标题占位 ${decision.number}`
                            : language === 'en'
                              ? decision.title
                              : decision.titleZh}
                        </h2>
                        {!((isHuanzhiPlaceholder && decision.number === '02') ||
                          (isFullMiaofanPlaceholder &&
                            (decision.number === '02' || decision.number === '04'))) && (
                          <p className="mt-5 max-w-3xl text-base font-light leading-relaxed text-[#D7E2EA]/55 sm:text-lg">
                            {isFullMiaofanPlaceholder && decision.number === '03'
                              ? language === 'en'
                                ? 'Our scenario required two actions: play and download. We used content hierarchy to help users quickly locate the playable stream. All essential content was therefore kept within one screen, with minimal supporting information.'
                                : '我们的场景需求是：试玩+下载。主要通过页面上内容的面积占比，让用户快速定位到投屏的试玩内容。所以我们决定在一屏内展示所有内容，不在页面上显示过多信息。'
                              : usesPlaceholderLayout
                              ? language === 'en'
                                ? 'Placeholder body copy for this feature. Replace it with the final design rationale and outcome.'
                                : '此处为功能说明占位，待内容确认后替换为最终设计思路与结果。'
                              : language === 'en'
                                ? decision.body
                                : decision.bodyZh}
                          </p>
                        )}
                        {isFullMiaofanPlaceholder && decision.number === '02' ? (
                          <img
                            src={
                              language === 'en'
                                ? playableInteractiveLockScreenUseCaseEn
                                : playableInteractiveLockScreenUseCaseZh
                            }
                            alt={
                              language === 'en'
                                ? 'Interactive lock-screen use case'
                                : '互动锁屏应用案例'
                            }
                            loading="lazy"
                            decoding="async"
                            width={2000}
                            height={language === 'en' ? 1307 : 1305}
                            className="mt-9 h-auto w-full rounded-[24px] bg-white object-contain sm:rounded-[34px] md:rounded-[46px]"
                          />
                        ) : isFullMiaofanPlaceholder && decision.number === '03' ? (
                          <img
                            src={
                              language === 'en'
                                ? playableApplyingInteractiveAdsEn
                                : playableApplyingInteractiveAdsZh
                            }
                            alt={language === 'en' ? 'Applying interactive ads' : '互动广告的应用'}
                            loading="lazy"
                            decoding="async"
                            width={2000}
                            height={1183}
                            className="mt-9 h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]"
                          />
                        ) : isFullMiaofanPlaceholder && decision.number === '04' ? (
                          <img
                            src={
                              language === 'en'
                                ? playableFullscreenGuidanceEn
                                : playableFullscreenGuidanceZh
                            }
                            alt={language === 'en' ? 'Fullscreen guidance' : '全屏模式下的引导'}
                            loading="lazy"
                            decoding="async"
                            width={2000}
                            height={1294}
                            className="mt-9 h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]"
                          />
                        ) : isHuanzhiPlaceholder && decision.number === '02' ? (
                          <img
                            src={huanzhiVehicleControl}
                            alt="Huanzhi vehicle control redesign"
                            loading="lazy"
                            decoding="async"
                            width={3000}
                            height={3962}
                            className="mt-9 h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]"
                          />
                        ) : !usesPlaceholderLayout && decision.image ? (
                          <img
                            src={language === 'zh' ? decision.imageZh : decision.image}
                            alt={decision.title}
                            loading="lazy"
                            decoding="async"
                            width={language === 'zh' ? decision.imageWidthZh : decision.imageWidth}
                            height={language === 'zh' ? decision.imageHeightZh : decision.imageHeight}
                            className="mt-9 h-auto w-full rounded-[24px] bg-white object-contain sm:rounded-[34px] md:rounded-[46px]"
                          />
                        ) : (
                          <div className="mt-9 flex aspect-[16/9] w-full items-center justify-center rounded-[24px] border border-dashed border-[#D7E2EA]/25 bg-gradient-to-br from-[#D7E2EA]/[0.08] to-[#D7E2EA]/[0.02] sm:rounded-[34px] md:rounded-[46px]">
                            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#D7E2EA]/30">
                              {language === 'en'
                                ? `Image placeholder ${decision.number}`
                                : `图片占位 ${decision.number}`}
                            </span>
                          </div>
                        )}
                      </motion.article>
                      ))}
                  </div>
                )}

                {project.slug === 'nextlevel-studio' && section.id === 'solution' && (
                  <div className="mt-20 space-y-20 sm:mt-28 sm:space-y-28">
                    {[
                      {
                        title:
                          language === 'en'
                            ? 'Transparent AI Generation Process'
                            : '让 AI 黑箱变得可感知',
                        goal:
                          language === 'en'
                            ? 'Goal: Reduce uncertainty during AI operations'
                            : '目标：降低用户的不确定感',
                      },
                      {
                        title:
                          language === 'en' ? 'Multi-View Editing Experience' : '多视图编辑体验',
                        goal:
                          language === 'en'
                            ? 'AI output becomes structured content objects rather than simple text.'
                            : 'AI 输出转化为结构化内容对象，而非简单文本。',
                      },
                      {
                        title:
                          language === 'en'
                            ? 'Collaborative Editing with Outline View'
                            : '大纲视图协同编辑',
                        goal:
                          language === 'en'
                            ? 'The dual-mode editing experience allows users to switch freely between content structure and visual presentation, creating a more efficient and controllable course optimization workflow.'
                            : '双模式切换让用户在逻辑结构与视觉呈现之间自由切换，实现高效、可控的课程优化体验。',
                      },
                      {
                        title:
                          language === 'en'
                            ? 'Conversational, Targeted Editing'
                            : '对话式局部编辑',
                        goal:
                          language === 'en'
                            ? 'Goal: Use natural language to make precise, local AI edits without overwriting the entire course.'
                            : '目标：通过自然语言让 AI 精准修改局部内容，避免一次性覆盖全部课程。',
                      },
                      {
                        title:
                          language === 'en'
                            ? 'Course Export Across Multiple Formats'
                            : '课程导出兼顾多种格式',
                        goal:
                          language === 'en'
                            ? 'Goal: Courses must ultimately enter business systems in multiple formats, including video, PDF, SCORM packages, and LMS uploads.'
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
                        {decisionIndex === 0 ? (
                          <img
                            src={makingAiProcessesTransparent1280}
                            srcSet={`${makingAiProcessesTransparent768} 768w, ${makingAiProcessesTransparent1280} 1280w, ${makingAiProcessesTransparent1920} 1920w, ${makingAiProcessesTransparent2560} 2560w`}
                            sizes="(min-width: 1024px) calc(100vw - 380px), calc(100vw - 40px)"
                            alt="Making AI Processes Transparent"
                            title="Making AI Processes Transparent"
                            loading="lazy"
                            decoding="async"
                            width={3000}
                            height={1890}
                            className="mt-9 h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]"
                          />
                        ) : decisionIndex === 1 ? (
                          <img
                            src={editableAiGeneratedCourseStructure1280}
                            srcSet={`${editableAiGeneratedCourseStructure768} 768w, ${editableAiGeneratedCourseStructure1280} 1280w, ${editableAiGeneratedCourseStructure1920} 1920w, ${editableAiGeneratedCourseStructure2560} 2560w`}
                            sizes="(min-width: 1024px) calc(100vw - 380px), calc(100vw - 40px)"
                            alt="Editable AI-Generated Course Structure"
                            title="Editable AI-Generated Course Structure"
                            loading="lazy"
                            decoding="async"
                            width={3000}
                            height={1590}
                            className="mt-9 h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]"
                          />
                        ) : decisionIndex === 2 ? (
                          <img
                            src={
                              language === 'zh'
                                ? collaborativeOutlineViewZh1280
                                : collaborativeOutlineViewEn1280
                            }
                            srcSet={
                              language === 'zh'
                                ? `${collaborativeOutlineViewZh768} 768w, ${collaborativeOutlineViewZh1280} 1280w, ${collaborativeOutlineViewZh1920} 1920w`
                                : `${collaborativeOutlineViewEn768} 768w, ${collaborativeOutlineViewEn1280} 1280w, ${collaborativeOutlineViewEn1920} 1920w`
                            }
                            sizes="(min-width: 1024px) calc(100vw - 380px), calc(100vw - 40px)"
                            alt={
                              language === 'zh'
                                ? '大纲视图协同编辑'
                                : 'Collaborative Editing with Outline View'
                            }
                            title={
                              language === 'zh'
                                ? '大纲视图协同编辑'
                                : 'Collaborative Editing with Outline View'
                            }
                            loading="lazy"
                            decoding="async"
                            width={2000}
                            height={language === 'zh' ? 1422 : 1440}
                            className="mt-9 h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]"
                          />
                        ) : decisionIndex === 3 ? (
                          <img
                            src={
                              language === 'zh'
                                ? conversationalTargetedEditingZh1280
                                : conversationalTargetedEditingEn1280
                            }
                            srcSet={
                              language === 'zh'
                                ? `${conversationalTargetedEditingZh768} 768w, ${conversationalTargetedEditingZh1280} 1280w, ${conversationalTargetedEditingZh1920} 1920w`
                                : `${conversationalTargetedEditingEn768} 768w, ${conversationalTargetedEditingEn1280} 1280w, ${conversationalTargetedEditingEn1920} 1920w`
                            }
                            sizes="(min-width: 1024px) calc(100vw - 380px), calc(100vw - 40px)"
                            alt={
                              language === 'zh'
                                ? '对话式局部编辑'
                                : 'Conversational, Targeted Editing'
                            }
                            title={
                              language === 'zh'
                                ? '对话式局部编辑'
                                : 'Conversational, Targeted Editing'
                            }
                            loading="lazy"
                            decoding="async"
                            width={2000}
                            height={1131}
                            className="mt-9 h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]"
                          />
                        ) : decisionIndex === 4 ? (
                          <img
                            src={
                              language === 'zh'
                                ? courseExportFormatsZh1280
                                : courseExportFormatsEn1280
                            }
                            srcSet={
                              language === 'zh'
                                ? `${courseExportFormatsZh768} 768w, ${courseExportFormatsZh1280} 1280w, ${courseExportFormatsZh1920} 1920w`
                                : `${courseExportFormatsEn768} 768w, ${courseExportFormatsEn1280} 1280w, ${courseExportFormatsEn1920} 1920w`
                            }
                            sizes="(min-width: 1024px) calc(100vw - 380px), calc(100vw - 40px)"
                            alt={
                              language === 'zh'
                                ? '课程导出兼顾多种格式'
                                : 'Course Export Across Multiple Formats'
                            }
                            title={
                              language === 'zh'
                                ? '课程导出兼顾多种格式'
                                : 'Course Export Across Multiple Formats'
                            }
                            loading="lazy"
                            decoding="async"
                            width={2000}
                            height={1245}
                            className="mt-9 h-auto w-full rounded-[24px] object-contain sm:rounded-[34px] md:rounded-[46px]"
                          />
                        ) : (
                          <div className="mt-9 flex aspect-[16/8] w-full items-center justify-center rounded-[24px] border border-dashed border-[#D7E2EA]/25 bg-gradient-to-br from-[#D7E2EA]/[0.08] to-[#D7E2EA]/[0.02] sm:rounded-[34px] md:rounded-[46px]">
                            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#D7E2EA]/30">
                              {language === 'en'
                                ? `Image placeholder ${decisionIndex + 1}`
                                : `图片占位 ${decisionIndex + 1}`}
                            </span>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                )}
              </section>
            )
          })}
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={language === 'en' ? 'Back to top' : '回到顶部'}
        title={language === 'en' ? 'Back to top' : '回到顶部'}
        className="fixed bottom-5 left-5 z-[110] inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#D7E2EA]/30 bg-[#D7E2EA] px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#0C0C0C] shadow-[0_12px_32px_rgba(0,0,0,.35)] sm:bottom-8 sm:left-8"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.94 }}
      >
        <ArrowUp size={18} strokeWidth={2.2} />
        <span className="hidden sm:inline">{language === 'en' ? 'Back to top' : '回到顶部'}</span>
      </motion.button>

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
    value: 'linkedin.com/in/和-薛-779491157',
    href: 'https://www.linkedin.com/in/%E5%92%8C-%E8%96%9B-779491157/',
    icon: Linkedin,
  },
  {
    label: 'Upwork',
    value: 'upwork.com',
    href: 'https://www.upwork.com',
    icon: UpworkIcon,
  },
  {
    label: 'Fiverr',
    value: 'fiverr.com',
    href: 'https://www.fiverr.com',
    icon: FiverrIcon,
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
                className={language === 'en'
                  ? 'hero-heading text-[clamp(3.4rem,11vw,6.7rem)] font-black uppercase leading-[0.82] tracking-tight'
                  : 'pb-2 text-[clamp(4rem,11vw,7rem)] font-black leading-[0.98] tracking-[-0.06em]'}
                style={language === 'zh' ? {
                  fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans CJK SC", sans-serif',
                } : undefined}
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
                  : '欢迎与我探讨产品设计、AI体验，希望能和您合作~'}
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

  useEffect(() => {
    if (caseStudyIndex >= 0 || contactOpen) return

    let navigationLocked = false
    let unlockTimer: ReturnType<typeof setTimeout> | null = null
    const sectionIds = ['home', 'showcase', 'about', 'services', 'projects']

    const handleSectionWheel = (event: WheelEvent) => {
      if (
        window.innerWidth < 768 ||
        navigationLocked ||
        event.ctrlKey ||
        event.metaKey ||
        Math.abs(event.deltaY) < 35
      ) {
        return
      }

      const targetElement = event.target as HTMLElement | null
      if (targetElement?.closest('input, textarea, select, [contenteditable="true"]')) return

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section))
      if (sections.length !== sectionIds.length) return

      const marker = window.scrollY + 120
      let currentIndex = 0
      sections.forEach((section, index) => {
        if (marker >= section.offsetTop) currentIndex = index
      })

      const direction = event.deltaY > 0 ? 1 : -1
      const projectsSection = sections[sections.length - 1]
      const projectsSnapTop = Math.max(0, projectsSection.offsetTop - 72)
      const isInsideProjects = window.scrollY >= projectsSnapTop - 8

      // Projects can be much taller than the viewport. Preserve normal scrolling
      // while browsing its cards, and only snap upward after reaching its top edge.
      if (isInsideProjects) {
        if (direction > 0 || window.scrollY > projectsSnapTop + 24) return
      }

      const nextIndex = currentIndex + direction
      if (nextIndex < 0 || nextIndex >= sections.length) return

      event.preventDefault()
      navigationLocked = true
      window.scrollTo({
        top: Math.max(0, sections[nextIndex].offsetTop - 72),
        behavior: 'smooth',
      })

      unlockTimer = setTimeout(() => {
        navigationLocked = false
      }, 850)
    }

    window.addEventListener('wheel', handleSectionWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', handleSectionWheel)
      if (unlockTimer) clearTimeout(unlockTimer)
    }
  }, [caseStudyIndex, contactOpen])

  if (caseStudyIndex >= 0) {
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <LanguageToggle />
        <CaseStudyPage
          project={projects[caseStudyIndex]}
          index={caseStudyIndex}
          onContactClick={() => setContactOpen(true)}
        />
        <ContactDrawer open={contactOpen} onClose={() => setContactOpen(false)} />
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
