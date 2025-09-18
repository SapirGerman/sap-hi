"use client"

import { useEffect, useState, useRef } from "react"
import { X } from "lucide-react"

export function VideoIntroOverlay() {
  const [showVideo, setShowVideo] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const [videoProgress, setVideoProgress] = useState(0)

  useEffect(() => {
    // Check if user has seen the video before
    const hasSeenVideo = localStorage.getItem("hasSeenIntroVideo")

    if (!hasSeenVideo) {
      setShowVideo(true)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (showVideo) {
      const calculateLogoPosition = () => {
        setTimeout(() => {
          const logoImg = document.querySelector('img[alt="Sapir German Logo"]') as HTMLElement
          if (logoImg) {
            const rect = logoImg.getBoundingClientRect()
            setLogoPosition({
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2,
              width: rect.width,
              height: rect.height,
            })
          }
        }, 500) // Increased delay to ensure page is loaded
      }

      calculateLogoPosition()
      window.addEventListener("resize", calculateLogoPosition)
      return () => window.removeEventListener("resize", calculateLogoPosition)
    }
  }, [showVideo])

  useEffect(() => {
    if (showVideo && videoRef.current) {
      const video = videoRef.current

      const updateProgress = () => {
        const progress = (video.currentTime / video.duration) * 100
        setVideoProgress(progress)

        // Start transition at 70% (approximately 2.1 seconds before end of 7-second video)
        if (progress >= 70 && !isTransitioning) {
          setIsTransitioning(true)
        }
      }

      video.addEventListener("timeupdate", updateProgress)
      return () => video.removeEventListener("timeupdate", updateProgress)
    }
  }, [showVideo, isTransitioning])

  const handleVideoEnd = () => {
    setTimeout(() => {
      setShowVideo(false)
      localStorage.setItem("hasSeenIntroVideo", "true")
    }, 800) // Reduced delay for smoother experience
  }

  const handleSkip = () => {
    setShowVideo(false)
    localStorage.setItem("hasSeenIntroVideo", "true")
  }

  if (isLoading || !showVideo) {
    return null
  }

  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  const translateX = logoPosition.x - centerX
  const translateY = logoPosition.y - centerY

  const videoElement = videoRef.current
  const currentVideoWidth = videoElement ? videoElement.offsetWidth : window.innerWidth * 0.8
  const currentVideoHeight = videoElement ? videoElement.offsetHeight : window.innerHeight * 0.8

  const targetWidth = 40
  const targetHeight = 40
  const scaleX = targetWidth / currentVideoWidth
  const scaleY = targetHeight / currentVideoHeight
  const scaleRatio = Math.min(scaleX, scaleY)

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-all duration-[2000ms] ease-out ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
      style={{
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
        perspective: "1000px",
      }}
    >
      {/* Skip button */}
      <button
        onClick={handleSkip}
        className={`absolute top-4 right-4 z-[10000] bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-2 transition-all duration-300 border border-white/30 ${
          isTransitioning ? "opacity-0 translate-y-2 scale-90" : "opacity-100 translate-y-0 scale-100"
        }`}
        aria-label="Skip intro video"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Video element with premium transition */}
      <div
        className={`relative w-full h-full flex items-center justify-center transition-all duration-[2000ms] cubic-bezier(0.25, 0.46, 0.45, 0.94)`}
        style={{
          transform: isTransitioning
            ? `translate(${translateX}px, ${translateY}px) scale(${scaleRatio}) rotateZ(0.5deg)`
            : "translate(0px, 0px) scale(1) rotateZ(0deg)",
          filter: isTransitioning ? "blur(4px) brightness(1.1) saturate(1.2)" : "blur(0px) brightness(1) saturate(1)",
          opacity: isTransitioning ? 0.1 : 1,
          willChange: "transform, filter, opacity",
          transformOrigin: "center center",
        }}
      >
        <video
          ref={videoRef}
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI_Recruitment_Video_Generation-cXy4mrJAoxf0GsArfJ0RAGJum6BZoY.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
          style={{
            aspectRatio: "16/9",
            maxWidth: "90vw",
            maxHeight: "90vh",
            borderRadius: isTransitioning ? "50%" : "8px",
            transition: "border-radius 2000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          Your browser does not support the video tag.
        </video>

        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
            isTransitioning ? "opacity-0 scale-110" : "opacity-100 scale-100"
          }`}
        ></div>

        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-cyan-500/40"
          style={{
            opacity: isTransitioning ? 0.8 : 0,
            borderRadius: isTransitioning ? "50%" : "8px",
            backdropFilter: isTransitioning ? "blur(3px)" : "blur(0px)",
            transition: "all 2000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
      </div>

      <div
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out ${
          isTransitioning ? "opacity-0 translate-y-8 scale-90" : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        <div className="dark:bg-gray-800 backdrop-blur-sm rounded-lg px-4 py-4 border border-white/20 ">
          <div className="text-center space-y-2">
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight drop-shadow-lg">
              GenAI all the way
            </h2>
            <h3 className="text-white/90 text-lg md:text-xl font-medium tracking-wide drop-shadow-lg">and <span className="text-cosmic-gradient">beyond</span></h3>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 transition-all duration-[2000ms] ease-out ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backdropFilter: isTransitioning ? "blur(2px)" : "blur(0px)",
        }}
      />
    </div>
  )
}
