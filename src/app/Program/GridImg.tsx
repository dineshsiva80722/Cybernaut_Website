// "use client"

// import { useEffect, useRef, useState } from "react"
// import Image from "next/image"
// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"

// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

// interface MasonryGridProps {
//   images: Array<{
//     src: string
//     alt: string
//     width: number
//     height: number
//     span?: "col" | "row" | "both"
//   }>
// }

// function MasonryGrid({ images }: MasonryGridProps) {
//   const [visibleImages, setVisibleImages] = useState<number[]>([])
//   const imageRefs = useRef<(HTMLDivElement | null)[]>([])

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const index = imageRefs.current.findIndex((ref) => ref === entry.target)
//           if (entry.isIntersecting && !visibleImages.includes(index)) {
//             setVisibleImages((prev) => [...prev, index])
//           }
//         })
//       },
//       {
//         threshold: 0.1,
//       },
//     )

//     imageRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref)
//     })

//     return () => observer.disconnect()
//   }, [visibleImages])

//   return (
//     <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           ref={(el) => {
//             imageRefs.current[index] = el;
//           }}
//           className={cn(
//             "relative overflow-hidden rounded-lg transition-all duration-700 ease-in-out transform",
//             "hover:scale-[1.02] hover:shadow-xl",
//             "bg-muted/10",
//             image.span === "col" && "md:col-span-4",
//             image.span === "row" && "row-span-2",
//             image.span === "both" && "md:col-span-2 row-span-4",
//             visibleImages.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
//           )}
//           style={{
//             aspectRatio: `${image.width} / ${image.height}`,
//           }}
//         >
//           <Image
//             src={image.src || "/placeholder.svg"}
//             alt={image.alt}
//             fill
//             className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
//           />
//         </div>
//       ))}
//     </div>
//   )
// }

// const images = [
//   {
//     src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulDjUMfy0KwMhS4xEhrLPGXmUiqaxI.png",
//     alt: "Made in Framer showcase",
//     width: 800,
//     height: 800,
//     span: "both" as const,
//   },
//   {
//     src:  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulDjUMfy0KwMhS4xEhrLPGXmUiqaxI.png",
//     alt: "Design showcase 1",
//     width: 800,
//     height: 800,
//     span: "both" as const,
//   },
//   {
//     src:  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulDjUMfy0KwMhS4xEhrLPGXmUiqaxI.png",
//     alt: "Design showcase 1",
//     width: 800,
//     height: 800,
//     span: "both" as const,
//   },
//   {
//     src:  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulDjUMfy0KwMhS4xEhrLPGXmUiqaxI.png",
//     alt: "Design showcase 1",
//     width: 800,
//     height: 800,
//     span: "both" as const,
//   },
//   {
//     src:  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulDjUMfy0KwMhS4xEhrLPGXmUiqaxI.png",
//     alt: "Design showcase 1",
//     width: 800,
//     height: 800,
//     span: "both" as const,
//   },
//   {
//     src:  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulDjUMfy0KwMhS4xEhrLPGXmUiqaxI.png",
//     alt: "Design showcase 2",
//     width: 800,
//     height: 600,
//     span: "col" as const,
//   },
//   {
//     src:  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulDjUMfy0KwMhS4xEhrLPGXmUiqaxI.png",
//     alt: "Design showcase 3",
//     width: 600,
//     height: 900,
//     span: "row" as const,
//   },
//   {
//     src:  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulDjUMfy0KwMhS4xEhrLPGXmUiqaxI.png",
//     alt: "Design showcase 4",
//     width: 500,
//     height: 700,
//     span: "both" as const,
//   },
//   {
//     src:  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulDjUMfy0KwMhS4xEhrLPGXmUiqaxI.png",
//     alt: "Design showcase 5",
//     width: 600,
//     height: 800,
//   },
//   {
//     src:  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulDjUMfy0KwMhS4xEhrLPGXmUiqaxI.png",
//     alt: "Design showcase 6",
//     width: 900,
//     height: 600,
//     span: "col" as const,
//   },
//   {
//     src:  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulDjUMfy0KwMhS4xEhrLPGXmUiqaxI.png",
//     alt: "Design showcase 7",
//     width: 800,
//     height: 800,
//     span: "both" as const,
//   },
//   {
//     src:  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulDjUMfy0KwMhS4xEhrLPGXmUiqaxI.png",
//     alt: "Design showcase 8",
//     width: 500,
//     height: 700,
//   },
//   {
//     src:  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulDjUMfy0KwMhS4xEhrLPGXmUiqaxI.png",
//     alt: "Design showcase 9",
//     width: 800,
//     height: 600,
//   },
// ]

// export default function GridImg() {
//   const [showHeader, setShowHeader] = useState(false)
//   const lastScrollY = useRef(0)

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY

//       if (currentScrollY > lastScrollY.current) {
//         setShowHeader(true)
//       } else {
//         setShowHeader(false)
//       }

//       lastScrollY.current = currentScrollY
//     }

//     window.addEventListener("scroll", handleScroll, { passive: true })

//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <main className="min-h-screen bg-background">
//       <h1 className="text-4xl font-bold text-center py-8 sticky top-0 bg-background z-10 transition-all duration-300 ease-in-out">
//         Design Showcase
//       </h1>
//       <div
//         className={cn(
//           "fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-20 transition-all duration-300 ease-in-out",
//           showHeader ? "translate-y-0" : "-translate-y-full",
//         )}
//       >
//         <h2 className="text-2xl font-bold text-center py-4">Design Showcase</h2>
//       </div>
//       <div className="container mx-auto py-8">
//         <MasonryGrid images={images} />
//       </div>
//     </main>
//   )
// }

