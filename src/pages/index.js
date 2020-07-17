import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Giving you the time to do what you do best.
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Here at the outsourced office, you are our primary concern. So let us manage the time consuming jobs to let you focus on what you do best.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Talk to us</Button>
          </p>
          <p className="mt-4 text-gray-600">Speak to a real person about your business needs.</p>
        </div>
        <div className="lg:w-1/2 xl:-mt-24">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Discover our services</h2>
        <div className="flex flex-wrap flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="lg:w-1/3 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Diary management</p>
              <p className="mt-4 text-left">
                Managing your diary can be a time consuming task, especially when it requires phoning other parties for appointments. We will learn your preferences, and get to know your clients and suppliers by letting us arrange appointments for you. We can manage your work and personal diary.
              </p>
            </Card>
          </div>
          <div className="lg:w-1/3 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Admin support</p>
              <p className="mt-4 text-left">
                Has your workload increased and you are not on top of your admin anymore? Or has your staff fallen behind on the workload due to increase in business. Outsourced Office can step in and help you catch up or just be there on regular basis to keep on top of your regular and mundane administrative tasks. Free your time to focus on what you are good at. Let us look after the jobs that don't improve your bottom line but are necessary for a successful running of a company. Some of the jobs we can take on are database input, digital transcriptions, making appointments, writing letters, proofreading.
              </p>
            </Card>
          </div>
          <div className="lg:w-1/3 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Event management</p>
              <p className="mt-4 text-left">
                Does event management send you into panic mode? Don't know where to start and what's involved? Your staff is already at full capacity?
                Outsourced Office can manage any event from office Christmas party to sales representatives meetings, conferences, charity events, exhibitions and others.
                A good event starts with good planning and this all takes your time and focus away from the main business. Don't let an event cost you more than it needs to.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Mrs. Pounce</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Mr. Rouge</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Our lovely clients</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-primary-lighter rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Contact us now to get started.
      </p>
      <form name="contact" netlify action="/thanks.html">
        <p>
          <label>Name <input className="m-2 p-2 rounded" type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input className="m-2 p-2 rounded" type="email" name="email" /></label>
        </p>
        <p>
          <label>Your message <input className="m-2 p-2 rounded" type="text" name="message" /></label>
        </p>
        <p>
        <Button size="lg">👋 Send</Button>
        </p>
      </form>
    </section>
  </Layout>
);
