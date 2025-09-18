"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Phone,
  Linkedin,
  Brain,
  Users,
  Target,
  Zap,
  CheckCircle,
  Star,
  Youtube,
  MessageCircle,
  Globe,
  Accessibility,
} from "lucide-react"
import { useState, useEffect } from "react"

const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      expertise: "Expertise",
      contact: "Contact",
      getStarted: "Get Started",
    },
    hero: {
      badge: "#HIRING",
      title: "GenAI all the way and beyond",
      subtitle:
        "Blending cutting-edge AI with genuine human connection. I help organizations hire the right talent by combining advanced generative AI tools with high-touch conversations that reveal true fit.",
      connect: "Let's Connect",
      linkedin: "View LinkedIn",
    },
    about: {
      title: "AI-Powered Recruitment Excellence",
      subtitle:
        "Combining deep expertise in artificial intelligence with proven recruitment strategies to deliver exceptional results for forward-thinking organizations.",
      genai: "GenAI Expertise",
      genaiDesc:
        "Leveraging cutting-edge generative AI to revolutionize talent acquisition and candidate matching processes.",
      strategic: "Strategic Recruitment",
      strategicDesc:
        "Building high-performing teams through data-driven insights and personalized recruitment strategies.",
      results: "Results-Driven",
      resultsDesc:
        "Delivering measurable outcomes with faster hiring cycles and improved candidate quality through AI optimization.",
    },
    services: {
      title: "Comprehensive AI Recruitment Services",
      subtitle: "From strategy development to implementation, I provide end-to-end AI-powered recruitment solutions.",
      servicesList: [
        {
          title: "AI Strategy Consulting",
          description:
            "Develop comprehensive AI recruitment strategies tailored to your organization's unique needs and goals.",
          features: ["Custom AI Implementation", "Process Optimization", "ROI Analysis"],
        },
        {
          title: "Talent Acquisition",
          description:
            "Find and attract top-tier candidates using advanced AI matching algorithms and predictive analytics.",
          features: ["AI-Powered Matching", "Candidate Scoring", "Automated Screening"],
        },
        {
          title: "Executive Search",
          description:
            "Specialized executive recruitment leveraging AI insights for C-level and senior leadership positions.",
          features: ["Leadership Assessment", "Cultural Fit Analysis", "Succession Planning"],
        },
        {
          title: "Team Building",
          description:
            "Build cohesive, high-performing teams through AI-driven team composition and dynamics analysis.",
          features: ["Team Optimization", "Skills Gap Analysis", "Performance Prediction"],
        },
        {
          title: "Recruitment Automation",
          description: "Streamline your hiring process with intelligent automation and workflow optimization.",
          features: ["Process Automation", "Workflow Design", "Integration Support"],
        },
        {
          title: "Training & Development",
          description: "Upskill your recruitment team with AI tools and methodologies for maximum effectiveness.",
          features: ["AI Tool Training", "Best Practices", "Ongoing Support"],
        },
      ],
    },
    expertise: {
      title: "Industry Expertise & Technologies",
      subtitle:
        "Deep knowledge across industries and cutting-edge AI technologies to deliver superior recruitment outcomes.",
      industries: "Industries",
      technologies: "AI Technologies",
      techList: [
        "Large Language Models",
        "Natural Language Processing",
        "Predictive Analytics",
        "Machine Learning",
        "Computer Vision",
        "Automation Platforms",
        "Data Analytics",
        "AI Integration",
      ],
      industriesList: [
        "Technology & Software",
        "Financial Services",
        "Healthcare & Biotech",
        "Manufacturing",
        "Consulting",
        "Startups & Scale-ups",
        "E-commerce",
        "AI & Machine Learning",
      ],
    },
    testimonials: {
      title: "Client Success Stories",
      subtitle: "Hear from organizations that have transformed their recruitment with AI-powered solutions.",
      testimonials: [
        {
          quote:
            "Sapir's AI-driven approach revolutionized our hiring process. We reduced time-to-hire by 60% while significantly improving candidate quality.",
          author: "Sarah Chen",
          role: "VP of People, TechCorp",
          rating: 5,
        },
        {
          quote:
            "The GenAI solutions implemented by Sapir have given us a competitive edge in attracting top talent in a challenging market.",
          author: "Michael Rodriguez",
          role: "CHRO, InnovateLabs",
          rating: 5,
        },
        {
          quote:
            "Working with Sapir transformed our recruitment from reactive to predictive. The insights we now have are game-changing.",
          author: "Emily Watson",
          role: "Talent Director, GrowthCo",
          rating: 5,
        },
      ],
    },
    contact: {
      title: "Ready to Transform Your Recruitment?",
      subtitle:
        "Let's discuss how AI-powered recruitment can accelerate your hiring success and build exceptional teams.",
      schedule: "Schedule Consultation",
      call: "Call Now",
    },
    footer: {
      description:
        "AI Recruitment Specialist combining human intelligence with cutting-edge generative AI solutions to help organizations build exceptional teams.",
      services: "Services",
      contact: "Contact",
      copyright: "© 2025 Sap.Hi. All rights reserved. | Human intelligence • GenAI all the way and beyond.",
    },
    trustedBy: {
      title: "Trusted by Leading Companies",
      subtitle: "We're proud to work with industry-leading companies, helping them build exceptional teams",
    },
  },
  he: {
    nav: {
      about: "אודות",
      services: "שירותים",
      expertise: "מומחיות",
      contact: "צור קשר",
      getStarted: "בואו נתחיל",
    },
    hero: {
      badge: "#מגייסת",
      title: "בינה מלאכותית גנרטיבית עד הסוף ומעבר לכך",
      subtitle:
        "שינוי תהליכי הגיוס באמצעות טכנולוגיית בינה מלאכותית מתקדמת ואינטליגנציה אנושית. אני עוזרת לארגונים למצוא את הכישרון הנכון באמצעות פתרונות בינה מלאכותית גנרטיבית ותובנות מונעות נתונים.",
      connect: "בואו נתחבר",
      linkedin: "צפה בלינקדאין",
    },
    about: {
      title: "מצוינות בגיוס מונע בינה מלאכותית",
      subtitle:
        "שילוב מומחיות עמוקה בבינה מלאכותית עם אסטרטגיות גיוס מוכחות כדי לספק תוצאות יוצאות דופן לארגונים חדשניים.",
      genai: "מומחיות בבינה מלאכותית גנרטיבית",
      genaiDesc: "מינוף בינה מלאכותית גנרטיבית מתקדמת כדי לחולל מהפכה ברכישת כישרונות ותהליכי התאמת מועמדים.",
      strategic: "גיוס אסטרטגי",
      strategicDesc: "בניית צוותים בעלי ביצועים גבוהים באמצעות תובנות מונעות נתונים ואסטרטגיות גיוס מותאמות אישית.",
      results: "מונע תוצאות",
      resultsDesc:
        "מתן תוצאות מדידות עם מחזורי גיוס מהירים יותר ושיפור איכות המועמדים באמצעות אופטימיזציה של בינה מלאכותית.",
    },
    services: {
      title: "שירותי גיוס מקיפים מונעי בינה מלאכותית",
      subtitle: "מפיתוח אסטרטגיה ועד יישום, אני מספקת פתרונות גיוס מקצה לקצה המונעים על ידי בינה מלאכותית.",
      servicesList: [
        {
          title: "ייעוץ אסטרטגיית בינה מלאכותית",
          description: "פיתוח אסטרטגיות גיוס בינה מלאכותית מקיפות המותאמות לצרכים ויעדים הייחודיים של הארגון שלכם.",
          features: ["יישום בינה מלאכותית מותאם", "אופטימיזציה של תהליכים", "ניתוח החזר השקעה"],
        },
        {
          title: "רכישת כישרונות",
          description: "מציאה ומשיכה של מועמדים מהשורה הראשונה באמצעות אלגוריתמי התאמה מתקדמים ואנליטיקה חזויה.",
          features: ["התאמה מונעת בינה מלאכותית", "ניקוד מועמדים", "סינון אוטומטי"],
        },
        {
          title: "חיפוש בכירים",
          description: "גיוס בכירים מתמחה המנצל תובנות בינה מלאכותית לתפקידי C-level והנהלה בכירה.",
          features: ["הערכת מנהיגות", "ניתוח התאמה תרבותית", "תכנון רצף"],
        },
        {
          title: "בניית צוותים",
          description: "בניית צוותים מלוכדים ובעלי ביצועים גבוהים באמצעות ניתוח הרכב צוות ודינמיקה מונע בינה מלאכותית.",
          features: ["אופטימיזציה של צוותים", "ניתוח פערי כישורים", "חיזוי ביצועים"],
        },
        {
          title: "אוטומציה של גיוס",
          description: "ייעול תהליך הגיוס שלכם עם אוטומציה חכמה ואופטימיזציה של זרימת עבודה.",
          features: ["אוטומציה של תהליכים", "עיצוב זרימת עבודה", "תמיכה באינטגרציה"],
        },
        {
          title: "הכשרה ופיתוח",
          description: "שדרוג כישורי צוות הגיוס שלכם עם כלי בינה מלאכותית ומתודולוגיות ליעילות מקסימלית.",
          features: ["הכשרה בכלי בינה מלאכותית", "שיטות עבודה מומלצות", "תמיכה מתמשכת"],
        },
      ],
    },
    expertise: {
      title: "מומחיות וטכנולוגיות בתעשייה",
      subtitle: "ידע עמוק בתעשיות ובטכנולוגיות בינה מלאכותית מתקדמות כדי לספק תוצאות גיוס מעולות.",
      industries: "תעשיות",
      technologies: "טכנולוגיות בינה מלאכותית",
      techList: [
        "מודלי שפה גדולים",
        "עיבוד שפה טבעית",
        "אנליטיקה חזויה",
        "למידת מכונה",
        "ראייה ממוחשבת",
        "פלטפורמות אוטומציה",
        "אנליטיקת נתונים",
        "אינטגרציית בינה מלאכותית",
      ],
      industriesList: [
        "טכנולוגיה ותוכנה",
        "שירותים פיננסיים",
        "בריאות וביוטכנולוגיה",
        "ייצור",
        "ייעוץ",
        "סטארט-אפים וחברות צומחות",
        "מסחר אלקטרוני",
        "בינה מלאכותית ולמידת מכונה",
      ],
    },
    testimonials: {
      title: "סיפורי הצלחה של לקוחות",
      subtitle: "שמעו מארגונים ששינו את הגיוס שלהם עם פתרונות מונעי בינה מלאכותית.",
      testimonials: [
        {
          quote:
            "הגישה המונע בינה מלאכותית של ספיר חוללה מהפכה בתהליך הגיוס שלנו. הפחתנו את זמן הגיוס ב-60% תוך שיפור משמעותי באיכות המועמדים.",
          author: "שרה כהן",
          role: 'סמנכ"לית משאבי אנוש, טקקורפ',
          rating: 5,
        },
        {
          quote:
            "פתרונות הבינה המלאכותית הגנרטיבית שיישמה ספיר נתנו לנו יתרון תחרותי במשיכת כישרונות מובילים בשוק מאתגר.",
          author: "מיכאל רודריגז",
          role: 'מנכ"ל משאבי אנוש, אינובייטלאבס',
          rating: 5,
        },
        {
          quote: "העבודה עם ספיר שינתה את הגיוס שלנו מתגובתי לחזוי. התובנות שיש לנו עכשיו משנות את המשחק.",
          author: "אמלי ווטסון",
          role: "מנהלת כישרונות, גרואת'קו",
        },
      ],
    },
    contact: {
      title: "מוכנים לשנות את הגיוס שלכם?",
      subtitle: "בואו נדון כיצד גיוס מונע בינה מלאכותית יכול להאיץ את הצלחת הגיוס שלכם ולבנות צוותים יוצאי דופן.",
      schedule: "קבע יעוץ",
      call: "התקשר עכשיו",
    },
    footer: {
      description:
        "מומחית גיוס בינה מלאכותית המשלבת אינטליגנציה אנושית עם פתרונות בינה מלאכותית גנרטיבית מתקדמים כדי לעזור לארגונים לבנות צוותים יוצאי דופן.",
      services: "שירותים",
      contact: "צור קשר",
      copyright: "© 2025 Sap.Hi. All rights reserved. | אינטליגנציה אנושית • בינה מלאכותית גנרטיבית עד הסוף ומעבר לכך.",
      serviceLinks: {
        aiStrategy: "אסטרטגיית בינה מלאכותית",
        talentAcquisition: "רכישת כישרונות",
        executiveSearch: "חיפוש בכירים",
        teamBuilding: "בניית צוותים",
      },
    },
    trustedBy: {
      title: "חברות מובילות סומכות עלינו",
      subtitle: "אנו גאים לעבוד עם חברות מובילות בתעשייה ולסייע להן בבניית צוותים מצוינים",
    },
  },
}

const AccessibilityWidget = ({
  language,
  isRTL,
  onLanguageChange,
}: {
  language: "en" | "he"
  isRTL: boolean
  onLanguageChange: (lang: "en" | "he") => void
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [contrast, setContrast] = useState("normal")
  const [animationsEnabled, setAnimationsEnabled] = useState(true)
  const [screenReaderMode, setScreenReaderMode] = useState(false)

  useEffect(() => {
    const savedPrefs = localStorage.getItem("accessibility-preferences")
    if (savedPrefs) {
      const prefs = JSON.parse(savedPrefs)
      setFontSize(prefs.fontSize || 100)
      setContrast(prefs.contrast || "normal")
      setAnimationsEnabled(prefs.animationsEnabled !== false)
      setScreenReaderMode(prefs.screenReaderMode || false)
    }
  }, [])

  const savePreferences = () => {
    const prefs = { fontSize, contrast, animationsEnabled, screenReaderMode }
    localStorage.setItem("accessibility-preferences", JSON.stringify(prefs))
  }

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`
    savePreferences()
  }, [fontSize])

  useEffect(() => {
    document.documentElement.setAttribute("data-contrast", contrast)
    if (contrast === "high") {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
    savePreferences()
  }, [contrast])

  useEffect(() => {
    if (!animationsEnabled) {
      document.documentElement.classList.add("reduce-motion")
    } else {
      document.documentElement.classList.remove("reduce-motion")
    }
    savePreferences()
  }, [animationsEnabled])

  useEffect(() => {
    if (screenReaderMode) {
      document.documentElement.classList.add("screen-reader-mode")
    } else {
      document.documentElement.classList.remove("screen-reader-mode")
    }
    savePreferences()
  }, [screenReaderMode])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      const panel = document.getElementById("accessibility-panel")
      const focusableElements = panel?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      const firstElement = focusableElements?.[0] as HTMLElement
      const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus()
              e.preventDefault()
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus()
              e.preventDefault()
            }
          }
        }
      }

      document.addEventListener("keydown", handleTabKey)
      firstElement?.focus()

      return () => document.removeEventListener("keydown", handleTabKey)
    }
  }, [isOpen])

  return (
    <>
      {/* Accessibility Widget Button */}
      <button
        className={`fixed ${isRTL ? "bottom-6 left-6" : "bottom-6 right-6"} z-50 w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary/50 flex items-center justify-center`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={language === "en" ? "Open accessibility options" : "פתח אפשרויות נגישות"}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6 text-white" aria-hidden="true" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div
          id="accessibility-panel"
          className={`fixed ${isRTL ? "bottom-24 left-6" : "bottom-24 right-6"} z-50 w-80 bg-card border border-border rounded-lg shadow-2xl p-6 glass-effect`}
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-modal="true"
        >
          <div className={`flex items-center justify-between mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
            <h2 id="accessibility-title" className="text-lg font-semibold text-foreground">
              {language === "en" ? "Accessibility Options" : "אפשרויות נגישות"}
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground p-1 rounded focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label={language === "en" ? "Close accessibility panel" : "סגור פאנל נגישות"}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {/* Font Size Control */}
            <div className={isRTL ? "text-right" : ""}>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Text Size" : "גודל טקסט"}
              </label>
              <div className={`flex items-center space-x-2 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
                <button
                  onClick={() => setFontSize(Math.max(75, fontSize - 10))}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label={language === "en" ? "Decrease text size" : "הקטן גודל טקסט"}
                >
                  A-
                </button>
                <span className="text-sm text-muted-foreground min-w-[3rem] text-center">{fontSize}%</span>
                <button
                  onClick={() => setFontSize(Math.min(150, fontSize + 10))}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label={language === "en" ? "Increase text size" : "הגדל גודל טקסט"}
                >
                  A+
                </button>
              </div>
            </div>

            {/* Contrast Control */}
            <div className={isRTL ? "text-right" : ""}>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Contrast Mode" : "מצב ניגודיות"}
              </label>
              <select
                value={contrast}
                onChange={(e) => setContrast(e.target.value)}
                className="w-full px-3 py-2 bg-input border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                aria-label={language === "en" ? "Select contrast mode" : "בחר מצב ניגודיות"}
              >
                <option value="normal">{language === "en" ? "Normal" : "רגיל"}</option>
                <option value="high">{language === "en" ? "High Contrast" : "ניגודיות גבוהה"}</option>
                <option value="dark">{language === "en" ? "Dark Mode" : "מצב כהה"}</option>
              </select>
            </div>

            {/* Language Toggle */}
            <div className={isRTL ? "text-right" : ""}>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Language" : "שפה"}
              </label>
              <div className={`flex space-x-2 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
                <button
                  onClick={() => onLanguageChange("en")}
                  className={`px-4 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    language === "en"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  aria-pressed={language === "en"}
                >
                  English
                </button>
                <button
                  onClick={() => onLanguageChange("he")}
                  className={`px-4 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    language === "he"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  aria-pressed={language === "he"}
                >
                  עברית
                </button>
              </div>
            </div>

            {/* Animation Control */}
            <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
              <label className="text-sm font-medium text-foreground">
                {language === "en" ? "Animations" : "אנימציות"}
              </label>
              <button
                onClick={() => setAnimationsEnabled(!animationsEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  animationsEnabled ? "bg-primary" : "bg-muted"
                }`}
                role="switch"
                aria-checked={animationsEnabled}
                aria-label={language === "en" ? "Toggle animations" : "הפעל/כבה אנימציות"}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    animationsEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Screen Reader Mode */}
            <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
              <label className="text-sm font-medium text-foreground">
                {language === "en" ? "Screen Reader Mode" : "מצב קורא מסך"}
              </label>
              <button
                onClick={() => setScreenReaderMode(!screenReaderMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  screenReaderMode ? "bg-primary" : "bg-muted"
                }`}
                role="switch"
                aria-checked={screenReaderMode}
                aria-label={language === "en" ? "Toggle screen reader mode" : "הפעל/כבה מצב קורא מסך"}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    screenReaderMode ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Keyboard Navigation Help */}
            <div className={isRTL ? "text-right" : ""}>
              <button
                onClick={() =>
                  alert(
                    language === "en"
                      ? "Keyboard shortcuts:\n• Tab: Navigate forward\n• Shift+Tab: Navigate backward\n• Enter/Space: Activate\n• Escape: Close dialogs"
                      : "קיצורי מקלדת:\n• Tab: נווט קדימה\n• Shift+Tab: נווט אחורה\n• Enter/רווח: הפעל\n• Escape: סגור דיאלוגים",
                  )
                }
                className="w-full px-4 py-2 bg-accent text-accent-foreground rounded hover:bg-accent/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {language === "en" ? "Keyboard Shortcuts" : "קיצורי מקלדת"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function Home() {
  const [language, setLanguage] = useState<"en" | "he">("en")
  const [isRTL, setIsRTL] = useState(false)

  useEffect(() => {
    setIsRTL(language === "he")
    document.documentElement.dir = language === "he" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const t = translations[language]

  const scrollToSection = (sectionId: string) => {
    console.log("[v0] Scrolling to section:", sectionId)

    const element = document.getElementById(sectionId)
    if (element) {
      const rect = element.getBoundingClientRect()
      const headerOffset = 80
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const targetPosition = rect.top + scrollTop - headerOffset

      console.log("[v0] Element found, scrolling to position:", targetPosition)

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    } else {
      console.log("[v0] Element not found:", sectionId)
    }
  }

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "rtl" : "ltr"}`}>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        {language === "en" ? "Skip to main content" : "דלג לתוכן הראשי"}
      </a>

      {/* Navigation */}
      <nav
        className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50"
        role="navigation"
        aria-label={language === "en" ? "Main navigation" : "ניווט ראשי"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/sapir-logo.png" alt="Sapir German Logo" className="h-10 w-10" />
              <span className="font-bold text-xl text-foreground">Sap.Hi</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("about")
                }}
              >
                {t.nav.about}
              </a>
              <a
                href="#services"
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("services")
                }}
              >
                {t.nav.services}
              </a>
              <a
                href="#expertise"
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("expertise")
                }}
              >
                {t.nav.expertise}
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
              >
                {t.nav.contact}
              </a>
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div
                className={`flex items-center space-x-1 rtl:space-x-reverse bg-card/80 backdrop-blur-sm rounded-lg p-1 border border-border/50 ${isRTL ? "order-2" : ""}`}
              >
                <Globe className={`h-4 w-4 text-muted-foreground ${isRTL ? "mr-2" : "ml-2"}`} />
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-xs px-2 py-1 h-7 font-medium transition-all duration-200 ${
                    language === "en"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setLanguage("en")}
                >
                  EN
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-xs px-2 py-1 h-7 font-medium transition-all duration-200 ${
                    language === "he"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setLanguage("he")}
                >
                  HE
                </Button>
              </div>
              <Button
                className={`bg-primary hover:bg-primary/90 ${isRTL ? "order-1" : ""}`}
                onClick={() => scrollToSection("contact")}
              >
                {t.nav.getStarted}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 cosmic-gradient-light dark:cosmic-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <img src="/cosmic-background.png" alt="" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #8244cb 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #8244cb 1px, transparent 1px),
                             radial-gradient(circle at 50% 10%, #8244cb 0.5px, transparent 0.5px),
                             radial-gradient(circle at 10% 60%, #8244cb 0.5px, transparent 0.5px),
                             radial-gradient(circle at 90% 40%, #8244cb 0.5px, transparent 0.5px)`,
              backgroundSize: "120px 120px, 100px 100px, 80px 80px, 140px 140px, 110px 110px",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${isRTL ? "lg:grid-flow-col-dense" : ""}`}>
            <div className={`space-y-10 ${isRTL ? "lg:col-start-2 text-right" : ""}`}>
              <div className="space-y-6">
                <div
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold tracking-widest backdrop-blur-sm border hover-lift pulse-glow ${isRTL ? "flex-row-reverse" : ""}`}
                  style={{
                    background: "linear-gradient(135deg, #8244cb 0%, #a855f7 100%)",
                    color: "#ffffff",
                    border: "1px solid rgba(130, 68, 203, 0.3)",
                    boxShadow: `
                      0 0 15px rgba(130, 68, 203, 0.2),
                      0 0 30px rgba(130, 68, 203, 0.15),
                      0 0 45px rgba(130, 68, 203, 0.1),
                      0 0 60px rgba(75, 0, 130, 0.08),
                      0 0 75px rgba(138, 43, 226, 0.05)
                    `,
                  }}
                >
                  {t.hero.badge}
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground text-balance leading-tight text-left">
                  {language === "en" ? (
                    <>
                      GenAI all the way and <span className="text-cosmic-gradient">beyond</span>
                    </>
                  ) : (
                    <>{t.hero.title}</>
                  )}
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground text-pretty max-w-2xl leading-relaxed text-left">
                  {t.hero.subtitle}
                </p>
              </div>
              <div className={`flex flex-col sm:flex-row gap-6 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 cosmic-glow hover-lift transition-all duration-300 text-lg px-8 py-4"
                  asChild
                >
                  <a href="mailto:sappir2000@gmail.com">
                    <Mail className={`h-6 w-6 ${isRTL ? "ml-3" : "mr-3"}`} />
                    {t.hero.connect}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-effect border-primary/30 hover:bg-primary/10 bg-transparent hover-lift text-lg px-8 py-4"
                  asChild
                >
                  <a href="https://linkedin.com/in/sapir-german-705ba41b3" target="_blank" rel="noopener noreferrer">
                    <Linkedin className={`h-6 w-6 ${isRTL ? "ml-3" : "mr-3"}`} />
                    {t.hero.linkedin}
                  </a>
                </Button>
              </div>
            </div>
            <div className={`relative ${isRTL ? "lg:col-start-1" : ""}`}>
              <div className="relative z-10">
                <div className="relative w-96 h-96 mx-auto">
                  <img
                    src="/sapir-german-headshot.png"
                    alt="Sapir German"
                    className="w-full h-full object-cover object-center rounded-full border-4 border-primary/30 shadow-2xl cosmic-glow hover-lift transition-all duration-500"
                  />
                </div>
              </div>
              <div className="absolute inset-0 cosmic-accent-gradient rounded-full blur-3xl opacity-40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 cosmic-gradient-light dark:bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 ${isRTL ? "text-right" : ""}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-cosmic-gradient mb-6 text-balance">{t.about.title}</h2>
            <p
              className={`text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed text-center ${isRTL ? "text-right" : ""}`}
            >
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:cosmic-glow hover-lift group">
              <CardHeader className={`pb-8 ${isRTL ? "text-right" : ""}`}>
                <Brain
                  className={`h-14 w-14 text-primary mb-6 group-hover:scale-110 transition-transform duration-300 ${isRTL ? "mr-auto" : ""}`}
                />
                <CardTitle className="text-cosmic-gradient text-xl">{t.about.genai}</CardTitle>
                <CardDescription className="leading-relaxed text-lg">{t.about.genaiDesc}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:cosmic-glow hover-lift group">
              <CardHeader className={`pb-8 ${isRTL ? "text-right" : ""}`}>
                <Users
                  className={`h-14 w-14 text-primary mb-6 group-hover:scale-110 transition-transform duration-300 ${isRTL ? "mr-auto" : ""}`}
                />
                <CardTitle className="text-cosmic-gradient text-xl">{t.about.strategic}</CardTitle>
                <CardDescription className="leading-relaxed text-lg">{t.about.strategicDesc}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:cosmic-glow hover-lift group">
              <CardHeader className={`pb-8 ${isRTL ? "text-right" : ""}`}>
                <Target
                  className={`h-14 w-14 text-primary mb-6 group-hover:scale-110 transition-transform duration-300 ${isRTL ? "mr-auto" : ""}`}
                />
                <CardTitle className="text-cosmic-gradient text-xl">{t.about.results}</CardTitle>
                <CardDescription className="leading-relaxed text-lg">{t.about.resultsDesc}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isRTL ? "text-right" : ""}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">{t.services.title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.servicesList.map((service, index) => (
              <Card key={index} className="glass-effect">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className={`text-xl font-semibold text-foreground ${isRTL ? "hebrew-text" : ""}`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className={`text-muted-foreground mb-4 leading-relaxed ${isRTL ? "hebrew-text" : ""}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className={`text-sm text-muted-foreground ${isRTL ? "hebrew-text" : ""}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isRTL ? "text-right" : ""}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">{t.expertise.title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t.expertise.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={isRTL ? "text-right" : ""}>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-left">{t.expertise.industries}</h3>
              <div className="grid grid-cols-2 gap-4">
                {(language === "he"
                  ? t.expertise.industriesList
                  : [
                      "Technology & Software",
                      "Financial Services",
                      "Healthcare & Biotech",
                      "Manufacturing",
                      "Consulting",
                      "Startups & Scale-ups",
                      "E-commerce",
                      "AI & Machine Learning",
                    ]
                ).map((industry, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={isRTL ? "text-right" : ""}>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-left">{t.expertise.technologies}</h3>
              <div className="grid grid-cols-2 gap-4">
                {(language === "he"
                  ? t.expertise.techList
                  : [
                      "Large Language Models",
                      "Natural Language Processing",
                      "Predictive Analytics",
                      "Machine Learning",
                      "Computer Vision",
                      "Automation Platforms",
                      "Data Analytics",
                      "AI Integration",
                    ]
                ).map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Brain className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isRTL ? "text-right" : ""}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">{t.testimonials.title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t.testimonials.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className={`pt-6 ${isRTL ? "text-right" : ""}`}>
                  <div className={`flex mb-4 text-right ${isRTL ? "flex-row-reverse" : ""}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <blockquote
                    className={`text-muted-foreground mb-4 text-pretty leading-relaxed text-left ${isRTL ? "hebrew-text" : ""}`}
                  >
                    "{testimonial.quote}"
                  </blockquote>
                  <div className={isRTL ? "text-right" : ""}>
                    <div className={`font-semibold text-foreground ${isRTL ? "hebrew-text" : ""}`}>
                      {testimonial.author}
                    </div>
                    <div className={`text-sm text-muted-foreground ${isRTL ? "hebrew-text" : ""}`}>
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 cosmic-contact-gradient contact-dark-bg text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <img src="/cosmic-background.png" alt="" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, #8244cb 1px, transparent 1px),
                             radial-gradient(circle at 80% 20%, #a855f7 1px, transparent 1px),
                             radial-gradient(circle at 40% 40%, #8244cb 0.5px, transparent 0.5px)`,
              backgroundSize: "100px 100px, 120px 120px, 80px 80px",
            }}
          ></div>
        </div>

        <div
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 ${isRTL ? "text-right" : ""}`}
        >
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-balance text-white leading-tight">
                {language === "en" ? (
                  <>
                    Ready to Transform Your{" "}
                    <span
                      style={{
                        background: "linear-gradient(to right, #ffffff, #e9d5ff, #ffffff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "#ffffff", // fallback color
                      }}
                    >
                      Recruitment?
                    </span>
                  </>
                ) : (
                  <>{t.contact.title}</>
                )}
              </h2>
              <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-pretty leading-relaxed text-white/90">
                {t.contact.subtitle}
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-8 justify-center items-center pt-8 ${isRTL ? "sm:flex-row-reverse" : ""}`}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/95 hover:scale-105 transition-all duration-300 text-lg px-10 py-5 rounded-xl shadow-2xl hover:shadow-white/20 font-semibold"
                asChild
              >
                <a href="mailto:sappir2000@gmail.com">
                  <Mail className={`h-6 w-6 ${isRTL ? "ml-3" : "mr-3"}`} />
                  {t.contact.schedule}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-white text-primary hover:bg-white/90 hover:text-primary hover:scale-105 transition-all duration-300 text-lg px-10 py-5 rounded-xl backdrop-blur-sm font-semibold"
                asChild
              >
                <a href="tel:+972547557843">
                  <Phone className={`h-6 w-6 ${isRTL ? "ml-3" : "mr-3"}`} />
                  {t.contact.call}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/*  Added trusted companies section above footer */}
      <section className="py-16 bg-foreground dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-background dark:text-foreground mb-4">{t.trustedBy.title}</h2>
            <p className="text-lg text-background/70 dark:text-muted-foreground max-w-2xl mx-auto">
              {t.trustedBy.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="flex items-center justify-center h-16 w-32 hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 animate-pulse hover:animate-none hover:scale-110">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-transparent-OptiGroup-logo-I2OBKpPu5K6PLWdQ6ts9A0hnBqwEZA.png"
                alt="OptiGroup"
                className="max-h-12 max-w-full object-contain mix-blend-multiply"
                style={{ background: "transparent" }}
              />
            </div>
            <div className="flex items-center justify-center h-16 w-32 hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 animate-pulse hover:animate-none hover:scale-110 animation-delay-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-transparent-silverfort-logo-VSCyyQ49angFBuJSH6k37TxV9ztpCH.png"
                alt="Silverfort"
                className="max-h-12 max-w-full object-contain mix-blend-multiply"
                style={{ background: "transparent" }}
              />
            </div>
            <div className="flex items-center justify-center h-16 w-32 hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 animate-pulse hover:animate-none hover:scale-110 animation-delay-200">
              <svg
                width="120"
                height="48"
                viewBox="0 0 120 48"
                className="max-h-12 max-w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Lightning bolt icon */}
                <path d="M20 8L12 24h8l-8 16 16-20h-8l8-12z" fill="#FFD700" stroke="#FFA500" strokeWidth="0.5" />
                <text
                  x="32"
                  y="32"
                  fontFamily="Arial, sans-serif"
                  fontSize="24"
                  fontWeight="900"
                  letterSpacing="1px"
                  style={{
                    fill: "#000000",
                    color: "#000000",
                  }}
                >
                  BOLT
                </text>
              </svg>
            </div>
            <div className="flex items-center justify-center h-16 w-32 hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 animate-pulse hover:animate-none hover:scale-110 animation-delay-300">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-transparent-monday-logo-GFe2I0AMce31Q2ihNfrafICb7HneZt.png"
                alt="Monday.com"
                className="max-h-12 max-w-full object-contain mix-blend-multiply"
                style={{ background: "transparent" }}
              />
            </div>
            <div className="flex items-center justify-center h-16 w-32 hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 animate-pulse hover:animate-none hover:scale-110 animation-delay-400">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-transparent-lightricks-logo-r2iO7Vk530ySZPcLq7FtnzFPJlSEQf.png"
                alt="Lightricks"
                className="max-h-12 max-w-full object-contain mix-blend-multiply"
                style={{ background: "transparent" }}
              />
            </div>
            <div className="flex items-center justify-center h-16 w-32 hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 animate-pulse hover:animate-none hover:scale-110 animation-delay-500">
              <svg
                width="120"
                height="48"
                viewBox="0 0 120 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-h-12 max-w-full"
              >
                {/* Blue background blocks */}
                <rect x="0" y="0" width="30" height="24" fill="#0066CC" />
                <rect x="30" y="0" width="30" height="24" fill="#0066CC" />
                <rect x="60" y="0" width="30" height="24" fill="#0066CC" />
                <rect x="90" y="0" width="30" height="24" fill="#0066CC" />
                <rect x="0" y="24" width="30" height="24" fill="#0066CC" />
                <rect x="30" y="24" width="30" height="24" fill="#0066CC" />
                <rect x="60" y="24" width="30" height="24" fill="#0066CC" />
                <rect x="90" y="24" width="30" height="24" fill="#0066CC" />

                <text
                  x="60"
                  y="32"
                  textAnchor="middle"
                  fontSize="18"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                  style={{
                    fill: "#000000",
                    color: "#000000",
                  }}
                >
                  KPMG
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cosmic-gradient-light dark:cosmic-gradient py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 text-left">
              <div
                className={`flex items-center space-x-3 rtl:space-x-reverse mb-4 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <img src="/sapir-logo.png" alt="Sapir German Logo" className="h-8 w-8" />
                <span className="font-bold text-xl text-foreground">Sap.Hi</span>
              </div>
              <p className={`text-muted-foreground mb-4 text-pretty text-left ${isRTL ? "text-right" : ""}`}>
                {t.footer.description}
              </p>
            </div>

            <div className={isRTL ? "text-right" : ""}>
              <h3 className="font-semibold text-foreground mb-4 text-left">{t.footer.services}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground text-left">
                <li>
                  <a
                    href="#services"
                    className="hover:text-primary transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("services")
                    }}
                  >
                    {language === "he" ? t.footer.serviceLinks.aiStrategy : "AI Strategy"}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-primary transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("services")
                    }}
                  >
                    {language === "he" ? t.footer.serviceLinks.talentAcquisition : "Talent Acquisition"}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-primary transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("services")
                    }}
                  >
                    {language === "he" ? t.footer.serviceLinks.executiveSearch : "Executive Search"}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-primary transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("services")
                    }}
                  >
                    {language === "he" ? t.footer.serviceLinks.teamBuilding : "Team Building"}
                  </a>
                </li>
              </ul>
            </div>

            <div className={isRTL ? "text-right" : ""}>
              <h3 className="font-semibold text-foreground mb-4 text-center">{t.footer.contact}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground text-center">
                <li>
                  <a href="mailto:sappir2000@gmail.com" className="hover:text-primary transition-colors">
                    sappir2000@gmail.com
                  </a>
                </li>
              </ul>
              <div
                className={`flex justify-center mt-4 space-x-2 rtl:space-x-reverse ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <Button size="sm" variant="outline" asChild>
                  <a href="https://linkedin.com/in/sapir-german-705ba41b3" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://wa.me/972547557843" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="mailto:sappir2000@gmail.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href="https://www.youtube.com/channel/UCWzpSWOmta5ZNwdiHsua58g"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground ${isRTL ? "text-right" : ""}`}
          >
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Accessibility Widget */}
      <AccessibilityWidget language={language} isRTL={isRTL} onLanguageChange={setLanguage} />
    </div>
  )
}
