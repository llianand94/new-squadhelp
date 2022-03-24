import React from 'react';
import styles from './HowItWork.module.sass';
import grid from '../../common/styles/grid.module.sass';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const HowItWork = () => {

  return (
    <div>
      <Header/>
      <section className={`${styles.introduceSection} ${grid.container}`}>
        <span className='tag'>World's #1 Naming Platform</span>
        <h1>how does squadhelp work?</h1>
        <p className={`${grid.col_2}`}>Squadhelp helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.</p>
        <a className='playBtn' href="http://google.com">
          <span>!!!triangular!!!</span>
          <span>Play video</span>
        </a>
      </section>
      <section className='usingSection'>
        <span className='tag'>Our Services</span>
        <h2>3 Ways To Use Squadhelp</h2>
        <p>Squadhelp offers 3 ways to get you a perfect name for your business.</p>
        <article>
          <span>!!!image!!!</span>
          <h2  classNames='textCapitalize' >Launch a Contest</h2>
          <p>Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.</p>
          <a  classNames='textCapitalize'  href='http://google.com'>Launch a Contest</a>

          <span>!!!image!!!</span>
          <h2  classNames='textCapitalize' >Explore Names For Sale</h2>
          <p>Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design</p>
          <a classNames='textCapitalize' href='http://google.com'>Expolre Names For Sale</a>

          <span>!!!image!!!</span>
          <h2  className='textCapitalize' >Agency-level Managed Contests</h2>
          <p>Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs</p>
          <a  classNames='textCapitalize'  href='http://google.com'>Learn more</a>
        </article>
      </section>



      
      <section className='howItWorkSection'>
        <span>!!!image!!!</span>
        <h2 className='textCapitalize'>How Do Naming Contests Work?</h2>
        <ul>
          <li>
            <span>1.</span>
            <p>Fill out your Naming Brief and begin receiving name ideas in minutes</p>
          </li>
          <li>
            <span>2.</span>
            <p>Rate the submissions and provide feedback to creatives. Creatives submit even more names based on your feedback.</p>
          </li>
          <li>
            <span>3.</span>
            <p>Our team helps you test your favorite names with your target audience. We also assist with Trademark screening.</p>
          </li>
          <li>
            <span>4.</span>
            <p>Pick a Winner. The winner gets paid for their submission.</p>
          </li>
        </ul>
        <div className='imgWrapper'>
          <img alt='houseWork' src=''/>
        </div>
      </section>



      <section className='answersSection'>  
        <nav className='sticker'>
          <ul>
            <li><a href='http://google.com'>Launching A Contest</a></li>
            <li><a href='http://google.com'>Buying From Marketplace</a></li>
            <li><a href='http://google.com'>Managed Contests</a></li>
            <li><a href='http://google.com'>For Creatives</a></li>
          </ul>
        </nav>
        <div className='answersWrapper'>
          <article>
            <h3>Launching A Contest</h3>

            <div className='answer'>
              <btn className='answerBtn'>
                <h4>How long does it take to start receiving submissions?</h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p>For Naming contests, you will start receiving your submissions within few minutes of launching your contest. Since our creatives are located across the globe, you can expect to receive submissions 24 X 7 throughout the duration of the brainstorming phase .</p>
              </div>
            </div>

            <div className='answer'>
              <btn className='answerBtn'>
                <h4>How long do Naming Contests last?</h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p>You can choose a duration from 1 day to 7 days. We recommend a duration of 3 Days or 5 Days. This allows for sufficient time for entry submission as well as brainstorming with creatives. If you take advantage of our validation services such as Audience Testing and Trademark Research, both will be an additional 4-7 days (3-5 business days for Audience Testing and 1-2 business days for Trademark Research).</p>
              </div>
            </div>
            
            <div className='answer'>
              <btn className='answerBtn'>
                <h4>Where are the creatives located?</h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p>About 70% of our Creatives are located in the United States and other English speaking countries (i.e. United Kingdom, Canada, and Australia.). We utilize an advanced rating score algorithm to ensure that high quality creatives receive more opportunities to participate in our contests.</p>
              </div>
            </div>

            <div className='answer'>
              <btn className='answerBtn'>
                <h4>What if I do not like any submissions?</h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p>While it is unusually rare that you will not like any names provided, we have a few options in case this problem occurs:</p>
                <ol>
                  <li>If the contest ends and you have not yet found a name that you’d like to move forward with, we can provide complimentary extension of your contest as well as a complimentary consultation with one of our branding consultants (a $99 value).</li>
                  <li>By exploring our premium domain marketplace you can apply the contest award towards the purchase of any name listed for sale.</li>
                  <li>If you choose the Gold package or Platinum package and keep the contest as "Not Guaranteed", you can request a partial refund if you choose not to move forward with any name from you project. (Please note that the refund is for the contest award). Here is a link to our <a href='http://google.com'>Refund Policy</a></li>                  
                </ol>
              </div>
            </div>

            <div className='answer'>
              <btn className='answerBtn'>
                <h4>How much does it cost?</h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p>Our naming competitions start at $299, and our logo design competitions start at $299. Also, there are three additional contest level that each offer more features and benefits. See our <a href='http://google.com'>Pricing Page</a> for details</p>
              </div>
            </div>
            
            <div className='answer'>
              <btn className='answerBtn'>
                <h4>I need both a Name and a Logo. Do you offer any discount for multiple contests?</h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p>Yes! We have many contest bundles - our most popular being our Name, Tagline, and Logo bundle. Bundles allow you to purchase multiple contests at one time and save as much as from $75 - $400. You can learn more about our bundle options on our <a href='http://google.com'>Pricing Page</a></p>
              </div>
            </div>

            <div className='answer'>
              <btn className='answerBtn'>
                <h4>What if I want to keep my business idea private?</h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p>You can select a Non Disclosure Agreement (NDA) option at the time of launching your competition. This will ensure that only those contestants who agree to the NDA will be able to read your project brief and participate in the contest. The contest details will be kept private from other users, as well as search engines.</p>
              </div>
            </div>

            <div className='answer'>
              <btn className='answerBtn'>
                <h4>Can you serve customers outside the US?</h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p>Absolutely. Squadhelp services organizations across the globe. Our customer come from many countries, such as the United States, Australia, Canada, Europe, India, and MENA. We’ve helped more than 25,000 customer around the world.</p>
              </div>
            </div>

            <div className='answer'>
              <btn className='answerBtn'>
                <h4>Can I see any examples?</h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p>Our creatives have submitted more than 6 Million names and thousands of logos on our platform. Here are some examples of Names, Taglines, and Logos that were submitted in recent contests.
                </p>
                <ol>
                  <li><a href='http://google.com'>Name Examples</a></li>
                  <li><a href='http://google.com'>Tagline Examples</a></li>
                  <li><a href='http://google.com'>Logo Examples</a></li>
                </ol>
              </div>
            </div>
          </article>
          <article>
            <h3>Buying From Marketplace</h3>

            <div className='answer'>
              <btn className='answerBtn'>
                <h4></h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p></p>
              </div>
            </div>
            <div className='answer'>
              <btn className='answerBtn'>
                <h4></h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p></p>
              </div>
            </div>
            <div className='answer'>
              <btn className='answerBtn'>
                <h4></h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p></p>
              </div>
            </div>
          </article>
          <article>
            <h3>Managed Contests</h3>

            <div className='answer'>
              <btn className='answerBtn'>
                <h4></h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p></p>
              </div>
            </div>
            <div className='answer'>
              <btn className='answerBtn'>
                <h4></h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p></p>
              </div>
            </div>
            <div className='answer'>
              <btn className='answerBtn'>
                <h4></h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p></p>
              </div>
            </div>
            <div className='answer'>
              <btn className='answerBtn'>
                <h4></h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p></p>
              </div>
            </div>
          </article>
          <article>
            <h3>For Creatives</h3>

            <div className='answer'>
              <btn className='answerBtn'>
                <h4></h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p></p>
              </div>
            </div>
            <div className='answer'>
              <btn className='answerBtn'>
                <h4></h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p></p>
              </div>
            </div>
            <div className='answer'>
              <btn className='answerBtn'>
                <h4></h4>
                <span>!!!arrow!!!</span>
              </btn>
              <div className='answerBody'>
                <p></p>
              </div>
            </div>
          </article>   
        </div>
      </section>

      <section className='startSection'>
        <h5>Ready to get started</h5>
        <p>Fill out your contest brief and begin receiving custom name suggestions within minutes.</p>
        <a href='/start-contest'>Start A Contest</a>
      </section>

      <Footer/>
    </div>
  );
}

export default HowItWork;
