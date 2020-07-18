import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import ChloeAvatar from '../svg/ChloeAvatar'
import OlgaAvatar from '../svg/OlgaAvatar'
import Messages from '../svg/Messages'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default () => (
  <Layout>
    <section id="home" className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-none">
            Giving you the time to do what you do best.
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Here at the outsourced office, you are our primary concern. So let us manage the time consuming jobs to let you focus on what you do best.
          </p>
          <p className="mt-8 md:mt-12 hidden lg:block">
            <a href="#contact"><Button size="lg">Talk to us</Button></a>
          </p>
          <p className="mt-4 text-gray-600 hidden lg:block">Speak to a real person about your business needs.</p>
        </div>
        <div className="lg:w-1/2 xl:-mt-24">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="services" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">
          Discover our <RoughNotation type="underline" show={true}>Services</RoughNotation>
        </h2>
        <div className="flex flex-wrap flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="lg:w-1/3 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">🌱Project management</p>
              <p className="mt-4 text-left">
              Being able to deliver a project within the constrains of a time frame require good Project management skills. We have a proven record of working closely with teams, using Lean six Sigma methodology, in order to manage and deliver a project.
              <br/>
              Securing a sale is the first step but ensuring it is delivered and executed well is where we can step in and work closely with you.   
              </p>
            </Card>
          </div>
          <div className="lg:w-1/3 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">🏢 Admin support</p>
              <p className="mt-4 text-left">
                Has your workload increased and you are not on top of your admin anymore? Or has your staff fallen behind on the workload due to increase in business.
                <br/>
                Outsourced Office can step in and help you catch up or just be there on regular basis to keep on top of your regular and mundane administrative tasks. Free your time to focus on what you are good at. Let us look after the jobs that don't improve your bottom line but are necessary for a successful running of a company.
                <br/>
                Some of the jobs we can take on are database input, digital transcriptions, making appointments, writing letters, proofreading.
              </p>
            </Card>
          </div>
          <div className="lg:w-1/3 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">🎈 Event management</p>
              <p className="mt-4 text-left">
                Does event management send you into panic mode? Don't know where to start and what's involved? Your staff is already at full capacity?
                <br/>
                Outsourced Office can manage any event from office Christmas party to sales representatives meetings, conferences, charity events, exhibitions and others.
                <br/>
                A good event starts with good planning and this all takes your time and focus away from the main business. Don't let an event cost you more than it needs to.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <h2 className="text-3xl text-center lg:text-5xl pt-10 pb-16 font-semibold">
        <RoughNotation type="underline" show={true}>About</RoughNotation> us
      </h2>
      <p className="text-md lg:text-lg mt-6 mb-16 px-4 font-light mx-auto max-w-sm md:max-w-lg">
        We recently celebrated our 5th anniversary and in that time we have worked with many clients, ranging from small one man start-ups to large corporates. Most of our clients have engaged with us continuously over the years. As a diverse team, we are able to bring many different skill sets to the table. 
      </p>
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pr-16 xl:pr-32">
            <h3 className="text-3xl font-semibold leading-tight">Olga</h3>
            <p className="mt-8 text-md font-light leading-relaxed">
            I sing loudly (out of tune), wear mismatching socks and wave at random strangers as I drive. I also pick up litter as I walk, love the colour green, and making others feel good about themselves. I am a mom, best friend, colleague and hard worker. But mostly I am just me.
            </p>
          </div>
        }
        secondarySlot={<div className="w-64 mx-auto"><OlgaAvatar/></div>}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pl-16 xl:pl-32">
            <h3 className="text-3xl font-semibold leading-tight">Chloe</h3>
            <p className="mt-8 text-md font-light leading-relaxed">
            I love children and puppies and all things nature. I was a dolphin in my previous life. I usually forget to shave my second leg, and I hate people touching my hair.
            </p>
          </div>
        }
        secondarySlot={<div className="w-64 mx-auto"><ChloeAvatar/></div>}
      />
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-5xl text-center pb-16 font-semibold">
          Our lovely <RoughNotation type="underline" show={true}>clients</RoughNotation>
        </h2>
        <div className="flex flex-col md:flex-row md:-mx-3 flex-wrap">
          {customerData.map(customer => (
            <div key={customer.customerName} className="lg:w-1/3 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="contact" className="container mx-auto my-20 py-24 bg-background rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="my-4 text-xl font-light">
        Contact us now to get started.
      </p>
      <form name="Contact" method="post" data-netlify-honeypot="dontfill" data-netlify="true" action="/thanks">
        <div className="px-8 lg:pl-32 flex flex-row items-stretch">
          <div className="flex-1 flex flex-col text-left">
              <input type="hidden" name="bot-field" />
              <label>Name</label> <input className="mb-2 mt-1 p-2 rounded" type="text" name="name" />
              <label>Email</label> <input className="mb-2 mt-1 p-2 rounded" type="email" name="email" />
              <label>Your message</label> <textarea className="mb-2 mt-1 h-48 p-2 rounded" type="text" name="message" />
            <Button type="submit" size="md" className="my-4 p-2">👋 Send</Button>
          </div>
          <Messages className="flex-1 hidden lg:inline-block"/>
        </div>
      </form>
    </section>
  </Layout>
);
