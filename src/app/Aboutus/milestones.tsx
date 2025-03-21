import { LightbulbIcon, CheckCircle } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Marquee from 'react-fast-marquee'
import Mobilemisltones from './Mobile-UI/milstones'

interface MilestoneCardProps {
    type: "idea" | "check"
    number: string
    label: string
    className?: string
}

function MilestoneCard({ type, number, label, className }: MilestoneCardProps) {
    return (
        <Card className={`bg-white shadow-sm hover:shadow-md transition-shadow ${className}`}>
            <CardContent className="p-6 flex flex-col ">
                {type === "idea" ? (
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                        <LightbulbIcon className="w-6 h-6 text-sky-400" />
                    </div>
                ) : (
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                        <CheckCircle className="w-6 h-6 text-sky-400" />
                    </div>
                )}
                <h3 className="text-6xl font-bold text-gray-800 mt-10 mb-2">{number}</h3>
                <p className="text-gray-600 text-lg">{label}</p>
            </CardContent>
        </Card>
    )
}

export default function Page() {
    const milestones = [
        { type: "idea", number: "10+", label: "Colleges Supported" },
        { type: "idea", number: "20+", label: "MOUs Signed" },
        { type: "check", number: "5k+", label: "Students Trained" }
    ] as const
    const milestones1 = [
        { type: "idea", number: "10+", label: "Colleges Supported" },
        { type: "idea", number: "20+", label: "MOUs Signed" },
        { type: "check", number: "5k+", label: "Students Trained" }
    ] as const

    return (
        <section className="container py-20  overflow-hidden md:px-6  bg-sky-50 mx-auto relative ">
            <div className="relative hidden lg:flex items-center justify-center h-[40rem] ">
                <div className='relative h-full w-full'>
                    <div className="relative left-0 z-20 w-96 bg-sky-50 p-5 h-80">
                        <h2 className="text-5xl font-bold text-gray-900">
                            OUR
                            <br />
                            MILESTONES
                        </h2>
                    </div>
                    <div className='w-full  h-[10rem] absolute  top-0'>
                        <div className="absolute top-0">
                            <Marquee
                                gradient={false}
                                pauseOnHover={true}
                                direction="right"
                                className="bg-gradient-to-l overflow-hidden   from-sky-50 via-transparent to-sky-50 min-h-[10rem] overflow-x-hidden"
                            >
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 py-4 mx-6 my-2">
                                        {milestones.map((milestone, index) => (
                                            <MilestoneCard
                                                key={index}
                                                type={milestone.type}
                                                number={milestone.number}
                                                label={milestone.label}
                                                className="w-[350px] h-[250px]"
                                            />
                                        ))}
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                        <div className="absolute  top-80">
                            <Marquee
                                gradient={false}
                                pauseOnHover={true}
                                direction="left"
                                className="bg-gradient-to-l overflow-hidden   from-sky-50 via-transparent to-sky-20 min-h-[10rem] overflow-x-hidden"
                            >
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 py-4 mx-6 my-2">
                                        {milestones1.map((milestone, index) => (
                                            <MilestoneCard
                                                key={index}
                                                type={milestone.type}
                                                number={milestone.number}
                                                label={milestone.label}
                                                className="w-[350px] h-[250px]"
                                            />
                                        ))}
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>
                
                <div className='w-full h-80  absolute left-96 top-0 flex gap-4 justify-center z-20 bg-gradient-to-r from-sky-50 via-transparent to-sky-50  overflow-x-hidden'>
                </div>
                <div className='w-full h-80  absolute left-0 right-0 top-80 flex gap-4 justify-center z-20 bg-gradient-to-r from-sky-50 via-transparent to-sky-50  overflow-x-hidden'>
                </div>
                
            </div>


            <div className='block lg:hidden w-full min-h-60'>
                <div className="bg-gray-100 flex items-center justify-center p-4">
                    <div className="bg-blue-50 rounded-3xl p-6 max-w-md w-full">
                        {/* Top row - full width */}
                        <div className="bg-white rounded-3xl p-5 mb-3">
                            <h2 className="text-xl font-bold text-center text-gray-800">
                                10+ COLLEGES SUPPORTED
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                            {/* Left box - Students trained */}
                            <div className="bg-white rounded-3xl p-5 flex items-center justify-center">
                                <h2 className="text-xl font-bold text-center text-gray-800">
                                    5K+ STUDENTS<br />TRAINED
                                </h2>
                            </div>

                            {/* Right column - two boxes */}
                            <div className="grid grid-cols-1 gap-3">
                                {/* Years of impact */}
                                <div className="bg-white rounded-3xl p-5 flex items-center justify-center">
                                    <h2 className="text-xl font-bold text-center text-gray-800">
                                        5 YEARS OF<br />IMPACT
                                    </h2>
                                </div>

                                {/* MOUs signed */}
                                <div className="bg-white rounded-3xl p-5 flex items-center justify-center">
                                    <h2 className="text-xl font-bold text-center text-gray-800">
                                        20+ MOUS<br />SIGNED
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Bottom section - two boxes side by side */}
                        <div className="grid grid-cols-2 gap-3 mb-3">
                            {/* MAANG alumni */}
                            <div className="bg-white rounded-3xl p-5 flex items-center justify-center">
                                <h2 className="text-xl font-bold text-center text-gray-800">
                                    1,000+ MAANG<br />ALUMNI
                                </h2>
                            </div>

                            {/* Project intern */}
                            <div className="bg-white rounded-3xl p-5 flex items-center justify-center">
                                <h2 className="text-xl font-bold text-center text-gray-800">
                                    1500+<br />PROJECT<br />INTERN
                                </h2>
                            </div>
                        </div>

                        {/* Bottom row - full width */}
                        <div className="bg-white rounded-3xl p-5 flex items-center justify-center">
                            <h2 className="text-xl font-bold text-center text-gray-800">
                                150+ OUTREACH PROGRAMS
                            </h2>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
