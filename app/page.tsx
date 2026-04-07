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
import { VideoIntroOverlay } from "@/components/video-intro-overlay"

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
        "Recruitment for GenAI roles, combined with an AI-powered system that accelerates the hiring process end to end. Precise matching between candidates and roles, structured candidate profiles, and a clear, organized process that enables companies to make faster decisions with greater confidence.",
      connect: "Let's Connect",
      linkedin: "View LinkedIn",
    },
    about: {
      title: "AI-Powered Recruitment Platform",
      subtitle:
        "Combining deep expertise in artificial intelligence with proven recruitment strategies to deliver exceptional results for forward-thinking organizations.",
      genai: "AI-Powered Screening & Interviews",
      genaiDesc:
        "Automated initial interviews with an AI avatar, including candidate video profiles for fast and consistent first impressions.",
      strategic: "Smart Matching with Fit Scores",
      strategicDesc:
        "AI-driven matching between candidates and roles, with clear fit scores to support better decision-making.",
      results: "Intuitive End-to-End Experience",
      resultsDesc:
        "A clean, user-friendly interface that makes it easy to manage the entire hiring process from start to finish.",
    },
    services: {
      title: "Recruitment Services",
      subtitle: "Specialized recruitment for GenAI, AI infrastructure, and technical leadership roles.",
      servicesList: [
        {
          title: "Specialized Search for GenAI & AI Roles",
          description:
            "Targeted search for the technical talent behind AI products, including founding engineers, AI engineers, research talent, infrastructure, and product-focused hires.",
          features: ["Founding Engineers", "AI Engineers", "Research Talent"],
        },
        {
          title: "Technical Leadership & Executive Search",
          description:
            "Search for critical leadership roles including VP R&D, CTO, Head of AI, and other senior technical hires who shape product and team direction.",
          features: ["VP R&D", "CTO", "Head of AI"],
        },
        {
          title: "Strategic Hiring Partner",
          description:
            "Support beyond sourcing, including role definition, market mapping, candidate calibration, and hands-on partnership throughout the hiring process.",
          features: ["Role Definition", "Market Mapping", "Candidate Calibration"],
        },
      ],
    },
    howIWork: {
      title: "How I Work",
      steps: [
        {
          number: "1",
          title: "Define and calibrate the role",
          description: "We start by sharpening the role scope, seniority, must-have capabilities, and success profile. I work closely with the hiring team to align on the ideal candidate profile before the search begins.",
        },
        {
          number: "2",
          title: "Map the market and launch the search",
          description: "I identify the most relevant talent pools and build a focused search strategy based on the company's stage, role priorities, and market realities.",
        },
        {
          number: "3",
          title: "Stay closely aligned throughout the process",
          description: "I maintain a close pulse on both candidates and the company throughout the search. We stay in regular contact, hold weekly check-ins, and continuously refine the profile based on market feedback, candidate quality, and interview insights.",
        },
        {
          number: "4",
          title: "Present high-fit candidates and support through close",
          description: "I introduce candidates who are aligned both technically and strategically, and remain hands-on throughout the process — from calibration and candidate engagement to process management and closing.",
        },
      ],
    },
    readyToHire: {
      title: "Ready to hire for your AI team?",
      subtitle: "Whether you're making your first founding hire or scaling an established AI organization, I'd be happy to hear more about the role and how I can help.",
    },
    onAir: {
      title: "On Air",
      description: "In addition to my work in AI and technical recruitment, I also cover technology and innovation as a news presenter on The Economy Channel. I host \"Hakol Anashim\" (\"All People\"), a show exploring the transformation of work, leadership, and technology in the GenAI era.",
      cta: "If you're a founder, researcher, or industry expert with a meaningful perspective on the AI shift we're living through, I'd be happy to connect regarding potential interviews and conversations.",
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
      serviceLinks: {
        aiStrategy: "AI Strategy",
        talentAcquisition: "Talent Acquisition",
        executiveSearch: "Executive Search",
        teamBuilding: "Team Building",
      },
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
        "אני מתמחה בעזרה לסטארטאפים וחברות טכנולוגיה לגייס כישרונות יוצאי דופן בתחומי GenAI, תשתיות AI ומנהיגות טכנית. מגיוס צוות מייסדים ועד הרחבת ארגוני AI מבוססים, אני שותפה מקרוב עם חברות למציאת האנשים שבאמת בונים מוצרי AI מצוינים.",
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
      title: "שירותי גיוס",
      subtitle: "גיוס מתמחה לתפקידי GenAI, תשתיות AI ומנהיגות טכנית.",
      servicesList: [
        {
          title: "חיפוש מתמחה לתפקידי GenAI ו-AI",
          description: "חיפוש ממוקד לכישרונות הטכניים מאחורי מוצרי AI, כולל מהנדסים מייסדים, מהנדסי AI, כישרונות מחקר, תשתיות וגיוסים ממוקדי מוצר.",
          features: ["מהנדסים מייסדים", "מהנדסי AI", "כישרונות מחקר"],
        },
        {
          title: "מנהיגות טכנית וחיפוש בכירים",
          description: "חיפוש תפקידי מנהיגות קריטיים כולל VP R&D, CTO, Head of AI ומנהלים טכניים בכירים אחרים שמעצבים את כיוון המוצר והצוות.",
          features: ["VP R&D", "CTO", "Head of AI"],
        },
        {
          title: "שותפת גיוס אסטרטגית",
          description: "תמיכה מעבר לסורסינג, כולל הגדרת תפקיד, מיפוי שוק, כיול מועמדים ושותפות פעילה לאורך כל תהליך הגיוס.",
          features: ["הגדרת תפקיד", "מיפוי שוק", "כיול מועמדים"],
        },
      ],
    },
    howIWork: {
      title: "איך אני עובדת",
      steps: [
        {
          number: "1",
          title: "הגדרה וכיול התפקיד",
          description: "אנחנו מתחילים בחידוד היקף התפקיד, הבכירות, היכולות החיוניות ופרופיל ההצלחה. אני עובדת בצמוד לצוות הגיוס ליישור על פרופיל המועמד האידיאלי לפני תחילת החיפוש.",
        },
        {
          number: "2",
          title: "מיפוי השוק והשקת החיפוש",
          description: "אני מזהה את מאגרי הכישרונות הרלוונטיים ביותר ובונה אסטרטגיית חיפוש ממוקדת על בסיס שלב החברה, עדיפויות התפקיד ומציאות השוק.",
        },
        {
          number: "3",
          title: "שמירה על יישור צמוד לאורך התהליך",
          description: "אני שומרת על דופק קרוב הן על המועמדים והן על החברה לאורך החיפוש. אנחנו נשארים בקשר קבוע, מקיימים פגישות שבועיות ומשפרים את הפרופיל באופן מתמשך על בסיס משוב שוק, איכות מועמדים ותובנות ראיונות.",
        },
        {
          number: "4",
          title: "הצגת מועמדים מתאימים ותמיכה עד לסגירה",
          description: "אני מציגה מועמדים שמיושרים הן טכנית והן אסטרטגית, ונשארת פעילה לאורך כל התהליך - מכיול ומעורבות מועמדים ועד ניהול תהליך וסגירה.",
        },
      ],
    },
    readyToHire: {
      title: "מוכנים לגייס לצוות ה-AI שלכם?",
      subtitle: "בין אם אתם מבצעים את הגיוס המייסד הראשון שלכם או מרחיבים ארגון AI מבוסס, אשמח לשמוע עוד על התפקיד וכיצד אוכל לעזור.",
    },
    onAir: {
      title: "על המסך",
      description: "בנוסף לעבודתי בגיוס AI וטכנולוגיה, אני גם מסקרת טכנולוגיה וחדשנות כמגישה בערוץ הכלכלה. אני מנחה את \"הכל אנשים\", תוכנית שחוקרת את השינוי בעבודה, מנהיגות וטכנולוגיה בעידן ה-GenAI.",
      cta: "אם אתם מייסדים, חוקרים או מומחי תעשייה עם פרספקטיבה משמעותית על המהפכה של ה-AI שאנחנו חיים בה, אשמח להתחבר לגבי ראיונות ושיחות פוטנציאליות.",
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
      <VideoIntroOverlay />

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
                      : "text-foreground hover:text-primary hover:bg-primary/5"
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
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setLanguage("he")}
                >
                  HE
                </Button>
              </div>
              <Button
                className={`bg-primary hover:bg-primary/90 text-primary-foreground ${isRTL ? "order-1" : ""}`}
                onClick={() => scrollToSection("contact")}
              >
                {t.nav.getStarted}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-40 cosmic-gradient-light dark:cosmic-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <img src="/cosmic-background.png" alt="" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="absolute inset-0 opacity-20">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${isRTL ? "lg:grid-flow-col-dense" : ""}`}
          >
            <div className={`space-y-6 md:space-y-8 lg:space-y-10 ${isRTL ? "lg:col-start-2 text-right" : ""}`}>
              <div className="space-y-4 md:space-y-6">
                <div
                  className={`inline-flex items-center px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-widest backdrop-blur-sm border hover-lift pulse-glow ${isRTL ? "flex-row-reverse" : ""}`}
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground text-balance leading-tight text-left">
                  {language === "en" ? (
                    <>
                      GenAI all the way and <span className="text-cosmic-gradient">beyond</span>
                    </>
                  ) : (
                    <>{t.hero.title}</>
                  )}
                </h1>
                <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-muted-foreground text-pretty max-w-2xl leading-relaxed text-left">
                  {t.hero.subtitle}
                </p>
              </div>
              <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 cosmic-glow hover-lift transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
                  asChild
                >
                  <a
                    href="mailto:sappir2000@gmail.com"
                    style={{ touchAction: "manipulation" }}
                    onClick={(e) => {
                      // Ensure mailto works on all platforms including Mac
                      if (typeof window !== "undefined") {
                        e.preventDefault()
                        window.location.href = "mailto:sappir2000@gmail.com"
                      }
                    }}
                  >
                    <Mail className={`h-5 w-5 md:h-6 md:w-6 ${isRTL ? "ml-2 md:ml-3" : "mr-2 md:mr-3"}`} />
                    {t.hero.connect}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-effect border-primary/30 hover:bg-primary/10 bg-transparent hover-lift text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
                  asChild
                >
                  <a href="https://linkedin.com/in/sapir-german-705ba41b3" target="_blank" rel="noopener noreferrer">
                    <Linkedin className={`h-5 w-5 md:h-6 md:w-6 ${isRTL ? "ml-2 md:ml-3" : "mr-2 md:mr-3"}`} />
                    {t.hero.linkedin}
                  </a>
                </Button>
              </div>
            </div>
            <div className={`relative ${isRTL ? "lg:col-start-1" : ""}`}>
              <div className="relative z-10">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
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
      <section id="about" className="py-16 md:py-20 lg:py-24 cosmic-gradient-light dark:bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 md:mb-16 lg:mb-20 ${isRTL ? "text-right" : ""}`}>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-cosmic-gradient mb-4 md:mb-6 text-balance">
              {t.about.title}
            </h2>
            <p
              className={`text-lg sm:text-xl md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed text-center ${isRTL ? "text-right" : ""}`}
            >
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:cosmic-glow hover-lift group">
              <CardHeader className={`pb-6 md:pb-8 ${isRTL ? "text-right" : ""}`}>
                <Brain
                  className={`h-12 w-12 md:h-14 md:w-14 text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 ${isRTL ? "mr-auto" : ""}`}
                />
                <CardTitle className="text-cosmic-gradient text-lg md:text-xl">{t.about.genai}</CardTitle>
                <CardDescription className="leading-relaxed text-base md:text-lg">{t.about.genaiDesc}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:cosmic-glow hover-lift group">
              <CardHeader className={`pb-6 md:pb-8 ${isRTL ? "text-right" : ""}`}>
                <Users
                  className={`h-12 w-12 md:h-14 md:w-14 text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 ${isRTL ? "mr-auto" : ""}`}
                />
                <CardTitle className="text-cosmic-gradient text-lg md:text-xl">{t.about.strategic}</CardTitle>
                <CardDescription className="leading-relaxed text-base md:text-lg">
                  {t.about.strategicDesc}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:cosmic-glow hover-lift group sm:col-span-2 md:col-span-1">
              <CardHeader className={`pb-6 md:pb-8 ${isRTL ? "text-right" : ""}`}>
                <Target
                  className={`h-12 w-12 md:h-14 md:w-14 text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 ${isRTL ? "mr-auto" : ""}`}
                />
                <CardTitle className="text-cosmic-gradient text-lg md:text-xl">{t.about.results}</CardTitle>
                <CardDescription className="leading-relaxed text-base md:text-lg">
                  {t.about.resultsDesc}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 md:mb-16 ${isRTL ? "text-right" : ""}`}>
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.services.title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {t.services.servicesList.map((service, index) => (
              <Card key={index} className="glass-effect">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
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

      {/* How I Work Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 md:mb-16 ${isRTL ? "text-right" : ""}`}>
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.howIWork.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {t.howIWork.steps.map((step, index) => (
              <Card key={index} className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:cosmic-glow hover-lift">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg md:text-xl">
                      {step.number}
                    </div>
                  </div>
                  <h3 className={`text-lg md:text-xl font-semibold text-foreground mb-3 ${isRTL ? "hebrew-text" : ""}`}>
                    {step.title}
                  </h3>
                  <p className={`text-muted-foreground leading-relaxed text-sm md:text-base ${isRTL ? "hebrew-text" : ""}`}>
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 md:mb-16 ${isRTL ? "text-right" : ""}`}>
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.testimonials.title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {t.testimonials.testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className={`pt-4 md:pt-6 ${isRTL ? "text-right" : ""}`}>
                  <div className={`flex mb-4 text-right ${isRTL ? "flex-row-reverse" : ""}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-accent fill-current" />
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

      {/* On Air Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-8 md:mb-12 ${isRTL ? "text-right" : ""}`}>
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.onAir.title}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-6 md:p-8">
                <p className={`text-muted-foreground leading-relaxed text-base md:text-lg mb-6 ${isRTL ? "hebrew-text text-right" : ""}`}>
                  {t.onAir.description}
                </p>
                <p className={`text-muted-foreground leading-relaxed text-base md:text-lg mb-6 ${isRTL ? "hebrew-text text-right" : ""}`}>
                  {t.onAir.cta}
                </p>
                <div className={`flex flex-wrap items-center gap-4 ${isRTL ? "justify-end" : "justify-start"}`}>
                  <Button variant="outline" asChild>
                    <a href="https://www.youtube.com/@SapirGerman" target="_blank" rel="noopener noreferrer">
                      <Youtube className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                      YouTube
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://linkedin.com/in/sapir-german-705ba41b3" target="_blank" rel="noopener noreferrer">
                      <Linkedin className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                      LinkedIn
                    </a>
                  </Button>
                  <a 
                    href="https://www.youtube.com/watch?v=H2kPajbPI_w" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-1 transition-colors"
                  >
                    <img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon_button-7z9nvoOZ7qOjmNNBsSevMoiEJ5EEr4.jpg" 
                      alt="Channel 10 Economy" 
                      className="h-8 w-auto rounded"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(130, 68, 203, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)
          `,
        }}
      >
        <div className="absolute inset-0 opacity-30">
          <img src="/cosmic-background.png" alt="" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 text-background bg-popover"
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
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-white leading-tight">
                {language === "en" ? (
                  <>
                    Ready to hire for your{" "}
                    <span
                      style={{
                        background: "linear-gradient(to right, #ffffff, #e9d5ff, #ffffff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "#ffffff", // fallback color
                      }}
                    >
                      AI team?
                    </span>
                  </>
                ) : (
                  <>{t.readyToHire.title}</>
                )}
              </h2>
              <p className="text-lg sm:text-xl md:text-xl lg:text-2xl max-w-4xl mx-auto text-pretty leading-relaxed text-white/90">
                {language === "en" ? t.readyToHire.subtitle : t.readyToHire.subtitle}
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center pt-6 md:pt-8 ${isRTL ? "sm:flex-row-reverse" : ""}`}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/95 hover:scale-105 transition-all duration-300 text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl shadow-2xl hover:shadow-white/20 font-semibold w-full sm:w-auto"
                asChild
              >
                <a href="mailto:sappir2000@gmail.com">
                  <Mail className={`h-5 w-5 md:h-6 md:w-6 ${isRTL ? "ml-2 md:ml-3" : "mr-2 md:mr-3"}`} />
                  {t.contact.schedule}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-white text-primary hover:bg-white/90 hover:text-primary hover:scale-105 transition-all duration-300 text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl backdrop-blur-sm font-semibold w-full sm:w-auto"
                asChild
              >
                <a href="tel:+972547557843">
                  <Phone className={`h-5 w-5 md:h-6 md:w-6 ${isRTL ? "ml-2 md:ml-3" : "mr-2 md:mr-3"}`} />
                  {t.contact.call}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/*  Added trusted companies section above footer */}
      <section className="py-12 md:py-16 bg-foreground dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-background dark:text-foreground mb-4">
              {t.trustedBy.title}
            </h2>
            <p className="text-base md:text-lg text-background/70 dark:text-muted-foreground max-w-2xl mx-auto">
              {t.trustedBy.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-items-center">
            {/* Silverfort */}
            <div className="flex items-center justify-center min-h-16 md:min-h-20 w-full max-w-32 md:max-w-40 p-3 md:p-4 hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 animate-pulse hover:animate-none hover:scale-110 animation-delay-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-transparent-silverfort-logo-VSCyyQ49angFBuJSH6k37TxV9ztpCH.png"
                alt="Silverfort"
                className="max-h-10 md:max-h-12 w-auto object-contain mix-blend-multiply"
                style={{ background: "transparent" }}
              />
            </div>
            {/* Monday.com */}
            <div className="flex items-center justify-center min-h-16 md:min-h-20 w-full max-w-32 md:max-w-40 p-3 md:p-4 hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 animate-pulse hover:animate-none hover:scale-110 animation-delay-200">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-transparent-monday-logo-GFe2I0AMce31Q2ihNfrafICb7HneZt.png"
                alt="Monday.com"
                className="max-h-10 md:max-h-12 w-auto object-contain mix-blend-multiply"
                style={{ background: "transparent" }}
              />
            </div>
            {/* Lightricks */}
            <div className="flex items-center justify-center min-h-16 md:min-h-20 w-full max-w-32 md:max-w-40 p-3 md:p-4 hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 animate-pulse hover:animate-none hover:scale-110 animation-delay-300">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-transparent-lightricks-logo-r2iO7Vk530ySZPcLq7FtnzFPJlSEQf.png"
                alt="Lightricks"
                className="max-h-10 md:max-h-12 w-auto object-contain mix-blend-multiply"
                style={{ background: "transparent" }}
              />
            </div>
            {/* Coralogix */}
            <div className="flex items-center justify-center min-h-16 md:min-h-20 w-full max-w-32 md:max-w-40 p-3 md:p-4 hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 animate-pulse hover:animate-none hover:scale-110 animation-delay-400">
              <svg width="140" height="40" viewBox="0 0 140 40" className="max-h-10 md:max-h-12 w-auto">
                <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#1a1a1a">
                  Coralogix
                </text>
              </svg>
            </div>
            {/* Sett.ai */}
            <div className="flex items-center justify-center min-h-16 md:min-h-20 w-full max-w-32 md:max-w-40 p-3 md:p-4 hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 animate-pulse hover:animate-none hover:scale-110 animation-delay-500">
              <svg width="100" height="40" viewBox="0 0 100 40" className="max-h-10 md:max-h-12 w-auto">
                <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700" fill="#1a1a1a">
                  sett.ai
                </text>
              </svg>
            </div>
            {/* Decart AI */}
            <div className="flex items-center justify-center min-h-16 md:min-h-20 w-full max-w-32 md:max-w-40 p-3 md:p-4 hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 animate-pulse hover:animate-none hover:scale-110 animation-delay-600">
              <svg width="120" height="40" viewBox="0 0 120 40" className="max-h-10 md:max-h-12 w-auto">
                <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#1a1a1a">
                  Decart AI
                </text>
              </svg>
            </div>
            {/* Immunai */}
            <div className="flex items-center justify-center min-h-16 md:min-h-20 w-full max-w-32 md:max-w-40 p-3 md:p-4 hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 animate-pulse hover:animate-none hover:scale-110 animation-delay-700">
              <svg width="120" height="40" viewBox="0 0 120 40" className="max-h-10 md:max-h-12 w-auto">
                <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#1a1a1a">
                  Immunai
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cosmic-gradient-light dark:cosmic-gradient py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-full sm:col-span-2 text-left">
              <div
                className={`flex items-center space-x-3 rtl:space-x-reverse mb-4 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <img src="/sapir-logo.png" alt="Sapir German Logo" className="h-6 w-6 md:h-8 md:w-8" />
                <span className="font-bold text-lg md:text-xl text-foreground">Sap.Hi</span>
              </div>
              <p
                className={`text-sm md:text-base text-muted-foreground mb-4 text-pretty text-left ${isRTL ? "text-right" : ""}`}
              >
                {t.footer.description}
              </p>
            </div>

            <div className={isRTL ? "text-right" : ""}>
              <h3 className="font-semibold text-sm md:text-base text-foreground mb-3 md:mb-4 text-left">
                {t.footer.services}
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground text-left">
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
              <h3 className="font-semibold text-sm md:text-base text-foreground mb-3 md:mb-4 text-center">
                {t.footer.contact}
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground text-center">
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
