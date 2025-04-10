'use client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CircleHelp, MailOpen, MapPinned, MessageCircle } from 'lucide-react';
import React from 'react';
import ContactIconBlock from './contact-icon-block';
import { toast } from 'sonner';

export default function ContactSection() {
  const [loading, setLoading] = React.useState(false);
  const [thankYouVisible, setThankYouVisible] = React.useState(false);

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const scriptUrl = 'https://api.web3forms.com/submit';
    
    setLoading(true); // Set loading state
    setThankYouVisible(false); // Reset thank you message visibility

    try {
        const response = await fetch(scriptUrl, {
            method: 'POST',
            body: formData,
        });
        
        if (response.ok) {
            toast.success('We got your message, Cybernaut Team will get back to you.');
            setThankYouVisible(true); // Show thank you message
        } else {
            toast.error('Error in submitting form, please try again.');
        }
    } catch (error) {
        toast.error(`Error in submitting form, please try again. ${error}`);
    } finally {
        setLoading(false); // Reset loading state
        const form = e.target as HTMLFormElement;
        form?.reset(); // Reset the form
    }
  };

  return (
    <section className="container mx-auto my-16 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-2xl lg:max-w-6xl">
        <div className="text-center">
          <h1 className="text-balance text-2xl font-bold tracking-tight text-neutral-200 dark:text-black md:text-4xl md:leading-tight">
            Contact Us
          </h1>
          <p className="mt-1 text-pretty text-neutral-600 dark:text-neutral-400">
            Have questions or want to discuss a project? Reach out, and let&apos;s craft the perfect
            solution with our tools and services.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8">
            <h2 className="mb-8 text-xl font-bold text-neutral-700">
              Fill in the form below
            </h2>

            <form onSubmit={handleFormSubmit}>
              {/* Hidden Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="701509da-ad7d-43d7-9c9e-6f849ee8ff6d"
              />

              <div className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    id="hs-firstname-contacts"
                    name="fname"
                    required
                    type="text"
                    placeholder="First Name"
                  />
                  <Input
                    id="hs-lastname-contacts"
                    name="lname"
                    required
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <Input
                  id="hs-email-contacts"
                  name="email"
                  required
                  type="email"
                  placeholder="Email"
                />
                <Input
                  type="tel"
                  name="mobile"
                  required
                  placeholder="Phone Number"
                  id="hs-phone-number"
                />
                <Textarea
                  id="hs-about-contacts"
                  required
                  placeholder="Let us know about your requirements"
                  name="message"
                />
              </div>

              <div className="mt-4 grid">
                <Button type="submit" disabled={loading} size="lg">
                  Send Message
                </Button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  We&apos;ll get back to you in 1-2 business days.
                </p>
              </div>

              {/* Thank You Message */}
              {thankYouVisible && (
                  <div className="mt-4 text-center">
                      <p className="text-lg font-semibold text-green-600">
                          Thank you for your message! We will get back to you shortly.
                      </p>
                  </div>
              )}
            </form>
          </div>

          <div className="divide-y divide-neutral-300 dark:divide-neutral-700">
            <ContactIconBlock
              heading="Courses"
              content="Browse through all of our Courses"
              isLinkVisible={true}
              linkTitle="Browse Courses"
              linkURL="/Program"
              isArrowVisible={true}
            >
              <CircleHelp className="size-4" />
            </ContactIconBlock>

            <ContactIconBlock
              heading="About Us"
              content="Get to know more about us."
              isLinkVisible={true}
              linkTitle="Know more"
              linkURL="/Aboutus"
              isArrowVisible={true}
            >
              <MessageCircle className="size-4" />
            </ContactIconBlock>

            <ContactIconBlock
              heading="Contact us by email"
              content="Prefer the written word? Drop us an email at"
              isLinkVisible={true}
              linkTitle="hr@cybernaut.co.in"
              linkURL="mailto:hr@cybernaut.co.in"
            >
              <MailOpen className="size-4" />
            </ContactIconBlock>

            <ContactIconBlock
              heading="Visit our office"
              isLinkVisible
              targetBlack
              linkTitle="Visit Us"
              isAddressVisible={true}
              linkURL="https://www.google.com/maps/place/Cybernaut+Edu-Tech/@10.9401924,78.0816167,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52612db12b7465:0x3435315858221247!8m2!3d10.9401871!4d78.0841916!16s%2Fg%2F11rscsms4l?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D"
              addressContent="43/a, Nehru Nagar, Rayanur, Thoronakkalpatti, Karur, Tamil Nadu 639003"
            >
              <MapPinned className="size-4" />
            </ContactIconBlock>
          </div>
        </div>
      </div>
    </section>
  );
}