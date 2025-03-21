// "use client"

// import { useState } from "react"
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Toast } from "@/components/ui/toast"

// interface EnrollmentModalProps {
//   isOpen: boolean
//   onClose: () => void
//   courseTitle: string
//   price: number
// }

// export default function EnrollmentModal({ isOpen, onClose, courseTitle, price }: EnrollmentModalProps) {
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault()
//     setIsSubmitting(true)

//     const formData = new FormData(event.currentTarget)
//     formData.append("access_key", "53d4e36e-83ca-402d-8ce1-4e43d6530b98")
//     formData.append("course", courseTitle)
//     formData.append("price", price.toString())

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       })

//       const data = await response.json()

//       if (data.success) {
//         Toast({
//           title: "Enrollment Successful",
//           // description: "Thank you for enrolling! We'll contact you shortly with next steps.",
//         })
//         onClose()
//       } else {
//         throw new Error("Submission failed")
//       }
//     } catch (error) {
//       Toast({
//         title: "Error",
//         // description: "There was an error processing your enrollment. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Enroll in {courseTitle}</DialogTitle>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Full Name</Label>
//             <Input id="name" name="name" placeholder="Enter your full name" required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input id="email" name="email" type="email" placeholder="Enter your email" required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="phone">Phone Number</Label>
//             <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="education">Educational Qualification</Label>
//             <Input id="education" name="education" placeholder="Enter your qualification" required />
//           </div>
//           <div className="pt-4 space-x-2 flex justify-end">
//             <Button type="button" variant="outline" onClick={onClose}>
//               Cancel
//             </Button>
//             <Button type="submit" disabled={isSubmitting}>
//               {isSubmitting ? "Enrolling..." : "Confirm Enrollment"}
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }

