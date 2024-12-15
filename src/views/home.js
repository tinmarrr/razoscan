import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Awesome Memorable Dunlin</title>
        <meta property="og:title" content="Awesome Memorable Dunlin" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">Page Four Description</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Main Action</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">Templates</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Page One</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Page Four</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Page Two</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Contact Us</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">Page Two Description</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">About Us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Page Three</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Secondary Action</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Browse Templates</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Get Access to Professional IT Document Templates
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Save time and effort with our collection of ready-to-use IT
              document templates. From IT policies to project plans, we&apos;ve
              got you covered.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Customizable templates for various IT forms
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Form Templates</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">Easy to use and edit templates</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Policy Templates</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Ready-to-use IT document templates
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Document Templates</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Get Started with Our IT Document Templates Today
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Browse through our collection of professionally crafted IT
              document templates to streamline your processes and save time.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Download Now</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Get professionally designed templates that give your IT documents
              a polished look
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Easily customize and edit templates to suit your specific IT
              document needs
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Wide Variety of Documents</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Customizable Templates</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Choose from a wide range of IT document templates including
              policies, procedures, forms, and more
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Professional Look and Feel</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$49/mo</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Get started</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Purchase Now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Unlimited Downloads</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">or $299 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get started</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Feature text goes here</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Feature text goes here</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Feature text goes here</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic Plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$29/mo</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">or $499 yearly</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Regular Updates</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">$99/year</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Template Library Access</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text183">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text184">$9.99/month</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text185">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text186">
              Explore our collection of IT document templates to find the one
              that best fits your needs.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text187">
              Edit and customize the template to include your specific
              information and details.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text188">Select Template</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Choose the template you want to use for your IT document or form.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text190">Browse Templates</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191">Customize Content</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text192">
              Download the customized IT document template and start using it
              for your IT needs.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text193">Download and Use</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text194">Systems Analyst</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195">IT Manager</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text196">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text197">David Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198">
              Great variety of templates to choose from. Very helpful for our
              documentation needs.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text200">Software Developer</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Emily Brown</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text202">
              Using the templates from this website has saved us a lot of time
              and effort. Highly recommended!
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203">Network Administrator</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text204">5 stars</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text205">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text206">
              Excellent resource for IT professionals. Templates are easy to
              customize and use.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text207">
              The templates provided here have improved our documentation
              process significantly.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text209">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text210">Locations</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text212">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text213">Cluj - Napoca</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text214">Blog</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text215">Contact Us</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text216">Templates</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms of Use</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text218">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text219">FAQs</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
