import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import { FormattedMessage } from '../../util/reactIntl';
import {
  Accordion,
  AccordionButton,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
  NamedLink
} from '../../components';
import verifiedImage from '../../assets/checkmark-circle.svg';
import css from './FAQPage.css';

const FAQPage = () => {
  return (
    <StaticPage
      className={css.root}
      title="FAQ"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'FAQPage',
        name: 'FAQ page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain className={css.faq}>
          <h1 className={css.faqTitle}>
            <FormattedMessage id="FAQPage.title" />
          </h1>

          <div className={css.accordionSection} id="create-an-account">
            <h2 className={css.sectionTitle}>
              <FormattedMessage id="FAQPage.createAccount" />
            </h2>
            <Accordion atomic={true} >
              <AccordionButton title="How do I set up an account?" name="Account Setup">
                <p>
                  Sign up for an account on our&nbsp;
                  <NamedLink name="SignupPage">
                    <FormattedMessage id="FAQPage.signupPage" />
                  </NamedLink>
                &nbsp;You can sign up with your Facebook or email address.
                  You will then be able to personalize your account by uploading a profile picture and filling in any information you
                  would like other From The People users to know about you. After signing up, you will not immediately have the ability
                  to post items to sell. To begin selling items you will need to follow the steps of our verification process, which is
                  outlined in the FAQ section below.
                </p>
              </AccordionButton>
              <AccordionButton title="Can I Still Create An Account If I'm Not Native American or Indigenous?">
                <p>
                  Yes! From The People encourages both Natives and non-Natives alike to sign up for an account with us.
                  Non-Natives can directly support Indigenous artists and businesses by buying their goods. This is a form of allyship with Indigenous peoples.
                  <br />
                  <br />
                  We do ask that our non-Native customers refrain from buying or requesting to buy items like ceremonial plants (sage, sweetgrass, etc.) or traditional clothing
                  (ribbon skirts, Powwow regalia, etc). These types of items have special purposes within our communities.
                  </p>
              </AccordionButton>
            </Accordion>
          </div>

          <div className={css.accordionSection} id="become-a-seller">
            <h2 className={css.sectionTitle}>
              <FormattedMessage id="FAQPage.becomeSeller" />
            </h2>
            <Accordion atomic={true}>
              <AccordionButton title="How do I become a seller?">
                <p>
                  Before you can begin selling you will first need to create an account with From The People and complete the following
                  steps to become a seller.
                  <br />
                  <br />
                  1. After creating an account, email us at&nbsp;
                <ExternalLink href="mailto:customersupport@fromthepeople.co">
                    <FormattedMessage id="FAQPage.emailAddress" />
                  </ExternalLink>
                &nbsp;with a message about yourself, your tribal affiliation and the types of products you plan on selling.
                  <br />
                  2. You will receive an email shortly after applying for Seller status. If you do not see our reply email, be sure to check your spam or junk folders!
                  <br />
                  3. This email will be accompanied by a standard vendor contract about the Indian Arts and Crafts Act for you to agree to. From The People requires all vendors to be compliant with the Act.
                  More information regarding the importance of the Indian Arts and Crafts Act can be found in this brochure.
                  <br />
                  4. If you plan on selling items that are marketed as Native American and/or American Indian, made you will need to provide us with
                  verification that your products were made by Tribal Members or by a Certified Indian Artisan.
                  This can be accomplished by sending us any document proving your tribal enrollment status, such as your tribal ID or certificate of Indian blood (C.I.B),
                  through our secure file transfer service. We will provide a link for you to upload your files to.
                </p>
              </AccordionButton>
              <AccordionButton title="Why does From The People verify tribal enrollment for sellers?">
                <p>
                  From The People requires all vendors to be compliant with the Indian Arts and Crafts Act of 1990 (P.L. 101-644),
                  a truth-in-advertising law which prohibits misrepresentation in marketing American Indian or Alaska Native arts and
                  crafts products within the United States. It is illegal to offer or display for sale, or sell any art or craft product
                  in a manner that falsely suggests it is Indian produced, an Indian product, or the product of a particular Indian or
                  Indian Tribe or Indian arts and crafts organization, resident within the United States. To ensure our vendors are compliant
                  with the Indian Arts and Crafts Act (P.L. 101-644), From The People must verify our vendors tribal enrollment status.
                  If any vendor on our site is found to have falsified their credentials or falsely claim their products are “American Indian made,”
                  From The People is obligated to report them to the Indian Arts and Crafts Board. For a first time violation of the Act, an
                  individual can face civil or criminal penalties up to a $250,000 fine or a 5-year prison term, or both. To learn more about
                  the Indian Arts and Crafts Act and compliance, visit&nbsp;
                  <ExternalLink href="https://www.doi.gov/iacb/act">here</ExternalLink>
                  &nbsp;and&nbsp;
              <ExternalLink href="https://www.doi.gov/sites/doi.gov/files/uploads/iacb_know_the_law_brochure_2019_final_web.pdf">here.</ExternalLink>
                </p>
              </AccordionButton>
              <AccordionButton title="Can I become a seller if I am not part of a federally or state recognized tribe?">
                <p>
                  Yes of course! But there are requirements for your postings that you must meet in order to sell.
                  You may not describe any of your items as being “Indian Made”, “Native American Made” or affiliated with any federally or
                  state recognized tribe. You may not have the names of any federally or state recognized tribe in your item descriptions or account Bio.
                  If you are First Nations or part of a Indigenous group outside of the U.S., then you can list your tribal or group affiliation but please include your country of origin.
                  For example, if you are enrolled in a Canadian Cree tribe, you would list your tribal affiliation as “Cree (Canada)”.
                  </p>
              </AccordionButton>
              <AccordionButton title="How do I post my items to sell?">
                <p>
                  Press the “Post A New Listing" link at the top of the website to begin listing your items. If you are not verified yet,
                  you need to contact the From The People Admin team&nbsp;
                  <ExternalLink href="mailto:customersupport@fromthepeople.co">
                    <FormattedMessage id="FAQPage.emailHere" />
                  </ExternalLink>
                  &nbsp;Once you’re verified, posting a listings is super quick and easy and you can always conact us if you run into problems. Make sure to post great pics!
                </p>
              </AccordionButton>
            </Accordion>
          </div>

          <div className={css.accordionSection} id="account-types">
            <h2 className={css.sectionTitle}>
              <FormattedMessage id="FAQPage.accountTypes" />
            </h2>
            <Accordion atomic={true} >
              <AccordionButton title="What types of accounts are available?">
                <p>
                  From The People now offers a range of accounts for our users. We have Verified Seller Accounts, Premium Accounts, Non-Profit Accounts,
                  and Ad Accounts.
                <br />
                  <br />
                Verified Seller Accounts are sellers that have had their tribal enrollment verified by the From The People Team.
                Verified Sellers can post up to 30 listings for free.
                Verified Accounts have this symbol on all of their listings and profile images to denote their verified status:
                <img className={css.verifiedImage} src={verifiedImage} alt="verified tag" />
                  <br />
                  <br />
                  Premium Accounts are used by Native/Indigenous owned businesses that have their own websites but would still like to post their
                  items on our Marketplace. All transactions for their items would take place on their website. Premium Accounts
                  also gain access to our Map and may post their physical location if they would like. Premium Accounts
                  are denoted with this tag on their listings:&nbsp;
                  <span className={css.premiumTag}>
                    <FormattedMessage id="ListingCard.premiumTag" />
                  </span>
                  <br />
                  <br />
                  Non-Profit Accounts are used by Indigenous Non-Profits that would like to post about their causes on our Marketplace. From The People
                  believes in raising awareness and support for issues facing Indigenous People's and giving Non-Profits space on our platform is one
                  way we can facillitate that mission. Non-Profit Accounts can post their physical location on our Map and are denoted with this tag on their listings:&nbsp;
                  <span className={css.nonProfitTag}>
                    <FormattedMessage id="ListingCard.nonProfitTag" />
                  </span>
                  <br />
                  <br />
                  Ad Accounts are used by businesses and groups that would like to advertise on our Marketplace.
                  Listings and posts made by ad accounts are denoted with this tag:&nbsp;
                  <span className={css.adTag}>
                    <FormattedMessage id="ListingCard.adTag" />
                  </span>
                </p>
              </AccordionButton>
              <AccordionButton title="How do I get a Verified Account?">
                <p>
                  Email us at&nbsp;
                  <ExternalLink href="mailto:customersupport@fromthepeople.co">
                    <FormattedMessage id="FAQPage.emailAddress" />
                  </ExternalLink>
                  &nbsp;to get the verification process started.
                  You will need to provide us with verification that your products were made by Tribal Members or by a Certified Indian Artisan.
                  This can be accomplished by sending us any document proving your tribal enrollment status, such as your tribal ID or certificate of Indian blood (C.I.B),
                  through our secure file transfer service. We will provide a link for you to upload your files to.
                </p>
              </AccordionButton>
              <AccordionButton title="How do I get a Premium Account?">
                <p>
                  To get a Premium Account, you will either need a physical business location or a website that users can buy your items from. Email us at&nbsp;
                  <ExternalLink href="mailto:customersupport@fromthepeople.co">
                    <FormattedMessage id="FAQPage.emailAddress" />
                  </ExternalLink>
                  &nbsp;with information about your business and why you would like to have a Premium Account, and include either your physical business address or your website.
                  <br />
                  <br />
                  We charge a subscription fee for Premium Accounts and have 3 subscription plans users can choose from:
                    <br />
                  <br />
                  <b>Map Only Plan - $9.99/month</b>
                  <br />
                    Gain access to post to our Native Businesses Map. You can show the physical location of
                    your business and gain new customers from our Indigenous Marketplace and Community. Your listing on our Map will have links to your website and directions
                    to your business address. This plan is perfect for Native/Indigenous Owned businesses that perform services and do not sell physical goods.
                    <br />
                  <br />
                  <b>Artisan Plan - $19.99/month</b>
                  <br />
                    Post up to 7 listings on our Indigenous Marketplace and gain access to our Native Businesses Map. You will have the Premium Sellers badge on all your listings
                    and can add links to your website to showcase your products. All transactions for your products will take place on your website.
                    <br />
                  <br />
                  <b>Trader Plan - $29.99/month</b>
                  <br />
                    Post up to 15 listings on our Indigenous Marketplace and gain access to our Native Businesses Map. You will have the Premium Sellers badge on all your listings
                    and can add links to your website to showcase your products. All transactions for your products will take place on your website.
                </p>
              </AccordionButton>
              <AccordionButton title="How do I get a Non-Profit Account?">
                <p>
                  For a Non-Profit Account, you simply need a Non-Profit! Email us at&nbsp;
                  <ExternalLink href="mailto:customersupport@fromthepeople.co">
                    <FormattedMessage id="FAQPage.emailAddress" />
                  </ExternalLink>
                  &nbsp;with information about your Non-Profit and how you are helping Indigenous peoples.
                </p>
              </AccordionButton>
              <AccordionButton title="How do I get an Ad account?">
                <p>
                  There are no specific requirements for an Ad Account. Email us at&nbsp;
                  <ExternalLink href="mailto:customersupport@fromthepeople.co">
                    <FormattedMessage id="FAQPage.emailAddress" />
                  </ExternalLink>
                  &nbsp; to inquire about our rates. Please include some information on your company, and what you would like to advertise on our site.
                </p>
              </AccordionButton>
            </Accordion>
          </div>

          <div className={css.accordionSection} id="allyship">
            <h2 className={css.sectionTitle}>
              <FormattedMessage id="FAQPage.allyship" />
            </h2>
            <Accordion atomic={true}>
              <AccordionButton title="What is cultural appropriation vs cultural appreciation?">
                <DummyContent />
              </AccordionButton>
              <AccordionButton title="I am a non-Native ally, how can I support?">
                <DummyContent />
              </AccordionButton>
            </Accordion>
          </div>

          <div className={css.accordionSection} id="native-lands">
            <h2 className={css.sectionTitle}>
              <FormattedMessage id="FAQPage.nativeLands" />
            </h2>
            <Accordion atomic={true}>
              <AccordionButton title="How does the Native Lands filter work?">
                <p>
                  The Native Land filter is used on our&nbsp;
                  <NamedLink name="MapPage">
                  <FormattedMessage id="FAQPage.nativeLandsMap" />
                  </NamedLink>
                  &nbsp;and&nbsp;
                  <NamedLink name="SearchPage">
                  <FormattedMessage id="FAQPage.nativeLandsSearch" />
                  </NamedLink>
                  &nbsp;The filter takes the user's location (or any given location) and finds which Indigenous lands the 
                  user is on. The Indigenous groups connected to that specific location are returned to the user 
                  and may be used to filter Map and Search listings. Users are then able to support the Indigenous artists and businesses 
                  that are from the land that they are currently occupying.
                  <br/>
                  <br/>
                  The results that the filter returns to the user are not exhaustive and may have some errors. Perfectly catagloging the 
                  territories of all Indigenous groups is impossible. We rely on the work done by&nbsp;
                  <ExternalLink href="https://native-land.ca/">
                    <FormattedMessage id="FAQPage.nativeLandsUrl" />
                  </ExternalLink>
                  &nbsp;We encourage all of our users to visit their website and learn more about their work. Territories may be mislabeld,
                  or Indigenous groups may be excluded, and in those cases we are deeply sorry and ask that you let us know or 
                  contact Native Lands Digital to rectify the situation.
                </p>
              </AccordionButton>
              <AccordionButton title="Where does the Native Lands data come from?">
                <p>
                  Tribal land data comes from&nbsp;
                  <ExternalLink href="https://native-land.ca/">
                    <FormattedMessage id="FAQPage.nativeLandsUrl" />
                  </ExternalLink>
                  <br />
                  <br />
                  Native Land Digital is an Indigenous led Canadian not-for-profit organization. We encourage
                  all of our users and customers to check out their website and contribute if possible. 
                  We think their work is an innovative way to highlight the effects of colonialism while increasing
                  the representation of Indigenous people's through technology.
                </p>
              </AccordionButton>
            </Accordion>
          </div>

          <div className={css.accordionSection} id="rules">
            <h2 className={css.sectionTitle}>
              <FormattedMessage id="FAQPage.rules" />
            </h2>
            <Accordion atomic={true}>
              <AccordionButton title="Compliance with the Indian Arts and Crafts Act of 1990">
                <p>
                  If you suspect a seller has misrepresented themselves in regards to Native American heritage or falsely suggests their product is Indian produced,
                  an Indian product, or the product of a particular Indian or Indian tribe or Indian arts and crafts organization, please email us at&nbsp;
                  <ExternalLink href="mailto:customersupport@fromthepeople.co">
                    <FormattedMessage id="FAQPage.emailAddress" />
                  </ExternalLink>
                  &nbsp;. We will investigate all allegations and contact the appropriate authorities.
                  For a first time violation of the Act, an individual can face civil or criminal penalties up to a $250,000 fine or a 5-year prison term, or both.
                  To learn more about the Indian Arts and Crafts Act and compliance, visit
                  <ExternalLink href="https://www.doi.gov/iacb/act">
                    &nbsp;here
                    </ExternalLink>
                  &nbsp;and
                    <ExternalLink href="https://www.doi.gov/sites/doi.gov/files/uploads/iacb_know_the_law_brochure_2019_final_web.pdf">
                    &nbsp;here.
                    </ExternalLink>
                </p>
              </AccordionButton>
              <AccordionButton title="Prohibited Items">
                <p>
                  The following list includes products vendors are prohibited from selling on our site: Firearms, Explosives, Drugs, any Illegal products within
                  the U.S. or elsewhere, Meat Products, Eagle Feathers, Products with Hate Speech and/or Indigenous Slurs. This list is not exhaustive, and
                  From The People reserves the right to add any product category to the Prohibited Items list in the future. If your account is found to be selling
                  any prohibited items, we will immediately close your account with us and contact the appropriate authorities.
                </p>
              </AccordionButton>
            </Accordion>
          </div>

          <div className={css.accordionSection} id="payment-process">
            <h2 className={css.sectionTitle}>
              <FormattedMessage id="FAQPage.payment" />
            </h2>
            <Accordion atomic={true}>
              <AccordionButton title="What is the payment process like?">
                <p>
                  Buyers must use a credit/debit card to make a purchase. After payment, the seller needs to accept the transaction for the payment
                  to be transferred. If the seller does not accept the transaction within 3 days or before the end date (whatever comes first), the transaction is
                  canceled and no money is transferred. Once the transaction is accepted, both users can then discuss freely to agree on details. When the order
                  is completed (seller has provided shipping confirmation, product is delivered…), they can mark the order as completed. Both users can then review
                  each other! Discussions between buyers and sellers can be found in the Inbox section of your account! The payment process also differs slightly
                  based on which payment service you use, either Stripe or Paypal. For more information on the Stripe payment flow, see here:  Stripe Payment Flow.
                  </p>
              </AccordionButton>
              <AccordionButton title="How do I get a refund?">
                <p>
                  In case you need a refund for any reason, please mark the transaction as disputed. A refund request should only be made before a transaction
                  has been marked as completed. Once a transaction has been marked as completed, there is a risk that we may not be able to refund you. Buyers
                  can mark a paid transaction as disputed after the transaction request has been approved and before it is marked as “completed”. The Dispute
                  feature is a way for buyers to clearly communicate to providers that they are not happy with the way the transaction is handled. To resolve
                  a dispute, involvement from admins is required. The admins will investigate the matter and determine if a refund is required.
                </p>
              </AccordionButton>
              <AccordionButton title="What payment service do you use?">
                <p>
                  Currently users only have one payment option when buying items on From The People. Buyers can enter their credit card details (protected with Stripe)
                  for the purchase. We charge a 5% transaction fee, and the minimum transaction fee is $0.65. To use
                  Stripe, all you need to do is add your bank account details in the payments section of your user account. Stripe secures and encrypts your
                  sensitive information. For more information on the Stripe payment flow, see here:  Stripe Payment Flow
                  </p>
              </AccordionButton>
            </Accordion>
          </div>
          <h2 className={css.linkTitle}>
            <FormattedMessage id="FAQPage.notAnswered" />
          </h2>
          <ExternalLink className={css.link} href='mailto:customersupport@fromthepeople.co'>
            <FormattedMessage id="FAQPage.emailUs" />
          </ExternalLink>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

const DummyContent = () => (
  <p style={{ padding: '18px' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);

export default FAQPage;