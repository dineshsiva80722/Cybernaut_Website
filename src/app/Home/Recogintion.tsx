import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Recognition() {
    const accreditations = [
        {
            name: "Ministry of Corporate Affairs",
            logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447782/MCA_pcbwgr.svg',
            alt: "Ministry of Corporate Affairs logo",
        },
        {
            name: "Department for Promotion of Industry and Internal Trade",
            logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447819/DPIIT_tpe47d.png',
            alt: "DPIIT logo",
        },
        {
            name: "Startup India",
            logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447840/stqrtupindia_hagbxo.png',
            alt: "Startup India logo",
        },
        {
            name: "ISO 9001:2015",
            logo: 'https://res.cloudinary.com/dn60aovto/image/upload/v1742447858/ISO_p9sebu.png',
            alt: "ISO 9001:2015 Certified logo",
            
        },
    ];



    return (
        <section className=" lg:bg-blue-50 container px-4 mt-10 md:py-10 mx-auto">
            <div className="container mx-auto">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-center text-zinc-800">
                            We are accredited by
                        </h3>
                        <div className="flex flex-wrap justify-center py-10 ">
                            {accreditations.map((accreditation, index) => (
                                <Card key={index} className="bg-transparent border-none shadow-none ">
                                    <CardContent className="">
                                        <Image
                                            src={accreditation.logo}
                                            alt={accreditation.alt}
                                            className="h-auto w-60 hover:scale-110 transition-transform duration-500 object-contain"
                                            width={150}
                                            height={100}
                                        />
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}