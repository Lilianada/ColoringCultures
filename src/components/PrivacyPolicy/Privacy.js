import React from 'react';
import './Privacy.css';

function Privacy() {
  return (
    <section className='privacyWrapper'>
      <h2 className='brownText'>Privacy Policy</h2>
      <p style={{marginTop: "2rem"}}>
        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. 
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
      </p>

      <article className='accordion'>
        <div className='tab'>
            <input type='checkbox' className='accordionTab' id='Tab1' />
            <label htmlFor='Tab1' className='title'><h3>Intepretation and Definitions</h3></label>
            <div className='content'>
              <>
                <h4 className='head'>Interpretation</h4>
                  <p>
                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>
              </>

              <>
                <h4 className='head'>Definitions</h4>
                <p>For the purposes of this Privacy Policy:</p>
                <ul className='lists'>
                  <li>
                    <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
                  </li>
                  <li>
                    <strong>Affiliate</strong> means an entity that contruls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                  </li>
                  <li>
                    <strong>Application</strong>means the software program provided by the Company downloaded by You on any electronic device, named Coloring Coltures.
                  </li>
                  <li>
                    <strong>Business,</strong>for the purpose of the CCPA (California Consumer Privacy Act), refers to the Company as the legal entity that collects Consumers' personal information and determines the purposes and means of the processing of Consumers' personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers' personal information, that does business in the State of California.
                  </li>
                  <li>
                    <strong>Company</strong>(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Coloring Cultures, LLC, Rockford, IL 61108.
                  </li>
                  <li>
                    <strong>Consumer,</strong> for the purpose of the CCPA (California Consumer Privacy Act), means a natural person who is a California resident. A resident, as defined in the law, includes 
                    <br/>(1) every individual who is in the USA for other than a temporary or transitory purpose, and 
                    <br/>(2) every individual who is domiciled in the USA who is outside the USA for a temporary or transitory purpose.
                  </li>
                  <li>
                    <strong>Country</strong> refers to: Illinois, United States
                  </li>
                  <li>
                    <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                  </li>
                  <li>
                    <strong>Do Not Track (DNT)</strong> is a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.
                  </li>
                  <li>
                    <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.
                  </li>
                  <li>
                    <strong>Sale,</strong> for the purpose of the CCPA (California Consumer Privacy Act), means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer's personal information to another business or a third party for monetary or other valuable consideration.
                  </li>
                  <li>
                    <strong>Service</strong> refers to the Application.
                  </li>
                  <li>
                    <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
                  </li>
                  <li>
                    <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                  </li>
                  <li>
                    <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                  </li>
                </ul>
              </>
            </div>
        </div>

        <div className='tab'>
          <input type='checkbox' className='accordionTab' id='Tab2' />
          <label htmlFor='Tab2' className='title'><h3>Collecting and using your personal data</h3></label>
          <div className='content'>
            <h4 className='head'>Types of Data Collected</h4>
              
              <>
                <h5 className="subHead">Personal Data</h5>
                <p>
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                </p>
                <ul className='lists'>
                  <li>Email Address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Usage data</li>
                </ul>
              </>

              <>
                <h5 className='subHead'>Usage Data</h5>
                <p>
                  Usage Data is collected automatically when using the Service.
                  <br/>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                  <br/>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                  <br/>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                </p>
              </>

              <>
                <h5 className='subHead'>Use of Your Personal Data</h5>
                <p>The Company may use Personal Data for the following purposes:</p>
                <ul className="lists">
                  <li><strong>To provide and maintain our Service,</strong> including to monitor the usage of our Service.</li>
                  <li>
                    <strong>To manage Your Account:</strong>to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
                  </li>
                  <li>
                    <strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
                  </li>
                  <li>
                    <strong>To contact You:</strong>To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
                  </li>
                  <li>
                    <strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
                  </li>
                  <li>
                    <strong>To manage Your requests:</strong>To attend and manage Your requests to Us.
                  </li>
                  <li>
                    <strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
                  </li>
                  <li>
                    <strong>For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
                  </li>
                </ul>

                <p style={{marginTop: "1rem"}}>We may share Your personal information in the following situations:</p>
                <ul className="lists">
                  <li>
                    <strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to show advertisements to You to help support and maintain Our Service, for payment processing, to contact You.
                  </li>
                  <li>
                    <strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
                  </li>
                  <li>
                    <strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
                  </li>
                  <li>
                    <strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.
                  </li>
                  <li>
                    <strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
                  </li>
                  <li>
                    <strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.
                  </li>
                </ul>
              </>

              <>
                <h5 className='subHead'>Retention of Your Personal Data</h5>
                <p>
                  The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                  <br/>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                </p>
              </>

              <>
                <h5 className='subHead'>Transfer of Your Personal Data</h5>
                <p>
                  Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to ??? and maintained on ??? computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
                  <br/>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer. 
                  <br/>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                </p>
              </>

              <>
                <h5 className='subHead'>Disclosure of Your Personal Data</h5>
                <h6 className='subHead'>Business Transactions</h6>
                <p>
                  If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                </p>

                <h6 className='subHead'>Law enforcement</h6>
                <p>
                  Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                </p>

                <h6 className='subHead'>Law enforcement</h6>
                <p>
                  The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                </p>
                <ul className="lists">
                  <li>Comply with a legal obligation</li>
                  <li>Protect and defend the rights or property of the Company</li>
                  <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                  <li>Protect the personal safety of Users of the Service or the public</li>
                  <li>Protect against legal liability</li>
                </ul>
              </>

              <>
                <h5 className='subHead'>Security of Your Personal Data</h5>
                <p>
                  The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                </p>
              </>
          </div>
        </div>
            
        <div className='tab'>
          <input type='checkbox' className='accordionTab' id='Tab3' />
          <label htmlFor='Tab3' className='title'><h3>Collecting and using your personal data</h3></label>
          <div className='content'>
              <h4 className='head'>Detailed Information on the Processing of Your Personal Data</h4>
              <p>
                The Service Providers We use may have access to Your Personal Data. These third-party vendors collect, store, use, process and transfer information about Your activity on Our Service in accordance with their Privacy Policies.
              </p>

            <>
              <h5 className='subHead'>Advertising</h5>
              <p>
                We may use Service Providers to show advertisements to You to help support and maintain Our Service.
              </p>
              <ul className='lists'>
                <li>
                  <strong>Google AdSense & DoubleClick Cookie</strong>
                  <br/>Google, as a third party vendor, uses cookies to serve ads on our Service. Google's use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our Service or other websites on the Internet.
                  You may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting the Google Ads Settings web page: http://www.google.com/ads/preferences/
                </li>
              </ul>
            </>

            <>
              <h5 className='subHead'>Payments</h5>
              <p>
              We may provide paid products and/or services within the Service. In that case, we may use third-party services for payment processing (e.g. payment processors).
              <br/>We will not store or collect Your payment card details. That information is provided directly to Our third-party payment processors whose use of Your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.
              </p>
              <ul className='lists'>
                <li>
                  <strong>Paypal</strong>
                  <br/>Their Privacy Policy can be viewed at https://www.paypal.com/webapps/mpp/ua/privacy-full
                </li>
              </ul>
            </>
          </div>
        </div>

        <div className='tab'>
          <input type='checkbox' className='accordionTab' id='Tab4' />
          <label htmlFor='Tab4' className='title'><h3>CCPA Privacy</h3></label>
          <div className='content'>
              <p>
                This privacy notice section for California residents supplements the information contained in Our Privacy Policy and it applies solely to all visitors, users, and others who reside in the State of California.
              </p>

              <>
                <h4 className='head'>Categories of Personal Information Collected</h4>
                <p>
                  We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular Consumer or Device. The following is a list of categories of personal information which we may collect or may have been collected from California residents within the last twelve (12) months.
                </p><br/>
                <br/>Please note that the categories and examples provided in the list below are those defined in the CCPA. This does not mean that all examples of that category of personal information were in fact collected by Us, but reflects our good faith belief to the best of our knowledge that some of that information from the applicable category may be and may have been collected. For example, certain categories of personal information would only be collected if You provided such personal information directly to Us.
                <ul className='lists'>
                <li>
                  <strong>Category A: Identifiers.</strong>
                  <br/>Examples: A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, driver's license number, passport number, or other similar identifiers.
                  <br/>Collected: Yes.
                </li>
                <li>
                  <strong>Category B: Personal information categories listed in the California Customer Records statute (Cal. Civ. Code ?? 1798.80(e)).</strong>
                  <br/>Examples: A name, signature, Social Security number, physical characteristics or description, address, telephone number, passport number, driver's license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information. Some personal information included in this category may overlap with other categories.
                  <br/>Collected: Yes.
                </li>
                <li>
                  <strong>
                    Category C: Protected classification characteristics under California or federal law.
                  </strong>
                  <br/>Examples: Age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (including familial genetic information).
                  <br/>Collected: No.
                </li>
                <li>
                  <strong>Category D: Commercial information.</strong>
                  <br/>Examples: Records and history of products or services purchased or considered.
                  <br/>Collected: Yes.
                </li>
                <li>
                  <strong>Category E: Biometric information.</strong>
                  <br/>Examples: Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to extract a template or other identifier or identifying information, such as, fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or exercise data.
                  <br/>Collected: No.
                </li>
                <li>
                  <strong>Category F: Internet or other similar network activity.</strong>
                  <br/>Examples: Records and history of products or services purchased or considered.
                  <br/>Collected: Yes.
                </li>
                <li>
                  <strong>Category G: Geolocation data.</strong>
                  <br/>Examples: Approximate physical location.
                  <br/>Collected: No.
                </li>
                <li>
                  <strong>Category H: Sensory data.</strong>
                  <br/>Examples: Audio, electronic, visual, thermal, olfactory, or similar information.
                  <br/>Collected: No.
                </li>
                <li>
                  <strong>Category I: Professional or employment-related information.</strong>
                  <br/>Examples: Current or past job history or performance evaluations.
                  <br/>Collected: No.
                </li>
                <li>
                  <strong>
                    Category J: Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)).
                  </strong>
                  <br/>Examples: Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.
                  <br/>Collected: No.
                </li>
                <li>
                  <strong>Category K: Inferences drawn from other personal information.</strong>
                  <br/>Examples: Profile reflecting a person's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.
                  <br/>Collected: No.
                </li>
              </ul>
              
              <>
                <p>Under CCPA, personal information does not include:</p>
                <ul className='lists'>
                  <li>Publicly available information from government records</li>
                  <li>Deidentified or aggregated consumer information</li>
                  <li>Information excluded from the CCPA's scope, such as:
                    <ul className='subLists'>
                      <li>
                        Health or medical information covered by the Health 
                        Insurance Portability and Accountability Act of 1996 (HIPAA) 
                        and the California Confidentiality of Medical Information Act (CMIA) 
                        or clinical trial data
                      </li>
                      <li>
                        Personal Information covered by certain sector-specific privacy laws, including the Fair Credit Reporting Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and the Driver's Privacy Protection Act of 1994
                      </li>
                    </ul>
                  </li>
                </ul>
              </>
            </>

            <>
              <h5 className='subHead'>Sources of Personal Information</h5>
              <p>
                We obtain the categories of personal information listed above from the following categories of sources:
              </p>
              <ul className='lists'>
                <li>
                  <strong>Directly from You.</strong> For example, from the forms You complete on our Service, preferences You express or provide through our Service, or from Your purchases on our Service. 
                </li>
                <li>
                  <strong>Indirectly from You.</strong> For example, from observing Your activity on our Service.
                </li>
                <li>
                  <strong>Automatically from You.</strong> For example, through cookies We or our Service Providers set on Your Device as You navigate through our Service.
                </li>
                <li>
                  <strong>From Service Providers.</strong> For example, third-party vendors to provide advertising on our Service, third-party vendors for payment processing, or other third-party vendors that We use to provide the Service to You.
                </li>
              </ul>
            </>

            <>
              <h5 className='subHead'>Use of Personal Information for Business Purposes or Commercial Purposes</h5>
              <p>
                We may use or disclose personal information We collect for "business purposes" or "commercial purposes" (as defined under the CCPA), which may include the following examples:
              </p>
              <ul className='lists'>
                <li>To operate our Service and provide You with our Service.</li>
                <li>
                  To provide You with support and to respond to Your inquiries, including to investigate and address Your concerns and monitor and improve our Service.</li>
                <li>
                  To fulfill or meet the reason You provided the information. For example, if You share Your contact information to ask a question about our Service, We will use that personal information to respond to Your inquiry. If You provide Your personal information to purchase a product or service, We will use that information to process Your payment and facilitate delivery.
                </li>
                <li>
                  To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.
                </li>
                <li>
                  As described to You when collecting Your personal information or as otherwise set forth in the CCPA.
                </li>
                <li>For internal administrative and auditing purposes.</li>
                <li>
                  To detect security incidents and protect against malicious, deceptive, fraudulent or illegal activity, including, when necessary, to prosecute those responsible for such activities.
                </li>
              </ul>
              <p>
                Please note that the examples provided above are illustrative and not intended to be exhaustive. For more details on how we use this information, please refer to the "Use of Your Personal Data" section.
                <br/>If We decide to collect additional categories of personal information or use the personal information We collected for materially different, unrelated, or incompatible purposes We will update this Privacy Policy.
              </p>
            </>

            <>
              <h5 className='subHead'>Disclosure of Personal Information for Business Purposes or Commercial Purposes</h5>
              <p>
                We may use or disclose and may have used or disclosed in the last twelve (12) months the following categories of personal information for business or commercial purposes:
              </p>
              <ul className='lists'>
                <li>Category A: Identifiers</li>
                <li>Category B: Personal information categories listed in the California Customer Records statute (Cal. Civ. Code ?? 1798.80(e))</li>
                <li>Category D: Commercial information</li>
                <li>Category F: Internet or other similar network activity</li>
              </ul>
              <p>
                Please note that the categories listed above are those defined in the CCPA. This does not mean that all examples of that category of personal information were in fact disclosed, but reflects our good faith belief to the best of our knowledge that some of that information from the applicable category may be and may have been disclosed.
                <br/>When We disclose personal information for a business purpose or a commercial purpose, We enter a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use it for any purpose except performing the contract.
              </p>
            </>

            <>
              <h5 className='subHead'>Sale of Personal Information</h5>
              <p>
                As defined in the CCPA, "sell" and "sale" mean selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a consumer's personal information by the business to a third party for valuable consideration. This means that We may have received some kind of benefit in return for sharing personal information, but not necessarily a monetary benefit.
              </p>
              <br/>
              <p>
                Please note that the categories listed below are those defined in the CCPA. This does not mean that all examples of that category of personal information were in fact sold, but reflects our good faith belief to the best of our knowledge that some of that information from the applicable category may be and may have been shared for value in return.
              </p>
              <br/>
              <p>
                We may sell and may have sold in the last twelve (12) months the following categories of personal information:
              </p>
              <ul className='lists'>
                <li>Category A: Identifiers</li>
                <li>Category B: Personal information categories listed in the California Customer Records statute (Cal. Civ. Code ?? 1798.80(e))</li>
                <li>Category D: Commercial information</li>
                <li>Category F: Internet or other similar network activity</li>
              </ul>
            </>

            <>
              <h5 className='subHead'>Share of Personal Information</h5>
              <p>
                We may share Your personal information identified in the above categories with the following categories of third parties:
              </p>
              <ul className='lists'>
                <li>Service Providers</li>
                <li>Payment processors</li>
                <li>Our affiliates</li>
                <li>Our business partners</li>
                <li>Third party vendors to whom You or Your agents authorize Us to disclose Your personal information in connection with products or services We provide to You</li>
              </ul>
            </>

            <>
              <h5 className='subHead'>Sale of Personal Information of Minors Under 16 Years of Age</h5>
              <p>
                We do not knowingly collect personal information from minors under the age of 16 through our Service, although certain third party websites that we link to may do so. These third-party websites have their own terms of use and privacy policies and we encourage parents and legal guardians to monitor their children's Internet usage and instruct their children to never provide information on other websites without their permission.
              </p>
              <br/>
              <p>
                We do not sell the personal information of Consumers We actually know are less than 16 years of age, unless We receive affirmative authorization (the "right to opt-in") from either the Consumer who is between 13 and 16 years of age, or the parent or guardian of a Consumer less than 13 years of age. Consumers who opt-in to the sale of personal information may opt-out of future sales at any time. To exercise the right to opt-out, You (or Your authorized representative) may submit a request to Us by contacting Us.
              </p>
              <br/>
              <p>
                If You have reason to believe that a child under the age of 13 (or 16) has provided Us with personal information, please contact Us with sufficient detail to enable Us to delete that information.
              </p>
            </>

            <>
              <h5 className='subHead'>Your Rights under the CCPA</h5>
              <p>
                The CCPA provides California residents with specific rights regarding their personal information. If You are a resident of California, You have the following rights: 
              </p>
              <ul className='lists'>
                <li>
                  <strong>The right to notice.</strong> You have the right to be notified which categories of Personal Data are being collected and the purposes for which the Personal Data is being used.</li>
                <li>
                  <strong>The right to request.</strong> Under CCPA, You have the right to request that We disclose information to You about Our collection, use, sale, disclosure for business purposes and share of personal information. Once We receive and confirm Your request, We will disclose to You:
                  <ul className='subLists'>
                    <li>The categories of personal information We collected about You</li>
                    <li>The categories of sources for the personal information We collected about You</li>
                    <li>Our business or commercial purpose for collecting or selling that personal information</li>
                    <li>The categories of third parties with whom We share that personal information</li>
                    <li>The specific pieces of personal information We collected about You</li>
                    <li>If we sold Your personal information or disclosed Your personal information for a business purpose, We will disclose to You:</li>
                      <ul className='subSubLists'>
                        <li>The categories of personal information categories sold</li>
                        <li>The categories of personal information categories disclosed</li>
                      </ul>
                  </ul>
                </li>
                <li>
                  <strong>The right to say no to the sale of Personal Data (opt-out).</strong> You have the right to direct Us to not sell Your personal information. To submit an opt-out request please contact Us.
                </li>
                <li>
                  <strong>The right to delete Personal Data.</strong> You have the right to request the deletion of Your Personal Data, subject to certain exceptions. Once We receive and confirm Your request, We will delete (and direct Our Service Providers to delete) Your personal information from our records, unless an exception applies. We may deny Your deletion request if retaining the information is necessary for Us or Our Service Providers to:
                  <ul className='subLists'>
                    <li>
                      Complete the transaction for which We collected the personal information, provide a good or service that You requested, take actions reasonably anticipated within the context of our ongoing business relationship with You, or otherwise perform our contract with You.
                    </li>
                    <li>
                      Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.
                    </li>
                    <li>
                      Debug products to identify and repair errors that impair existing intended functionality.
                    </li>
                    <li>
                      Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.
                    </li>
                    <li>
                      Comply with the California Electronic Communications Privacy Act (Cal. Penal Code ?? 1546 et. seq.).
                    </li>
                    <li>
                      Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information's deletion may likely render impossible or seriously impair the research's achievement, if You previously provided informed consent.
                    </li>
                    <li>
                      Enable solely internal uses that are reasonably aligned with consumer expectations based on Your relationship with Us.
                    </li>
                    <li>Comply with a legal obligation.</li>
                    <li>
                      Make other internal and lawful uses of that information that are compatible with the context in which You provided it.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>The right not to be discriminated against.</strong> You have the right not to be discriminated against for exercising any of Your consumer's rights, including by:
                  <ul className='subLists'>
                    <li>Denying goods or services to You</li>
                    <li>
                      Charging different prices or rates for goods or services, including the use of discounts or other benefits or imposing penalties
                    </li>
                    <li>Providing a different level or quality of goods or services to You</li>
                    <li>
                      Suggesting that You will receive a different price or rate for goods or services or a different level or quality of goods or services
                    </li>
                  </ul>
                </li>
              </ul>
            </>

            <>
              <h5 className='subHead'>Exercising Your CCPA Data Protection Rights</h5>
              <p>
                In order to exercise any of Your rights under the CCPA, and if You are a California resident, You can contact Us:
              </p>
              <ul className='lists'>
                <li>By email: info@coloringcultures.app</li>
              </ul>

              <p className='paragraph'>
                Only You, or a person registered with the California Secretary of State that You authorize to act on Your behalf, may make a verifiable request related to Your personal information.
                <br/>Your request to Us must:
              </p>
              <ul className='lists'>
                <li>
                  Provide sufficient information that allows Us to reasonably verify You are the person about whom We collected personal information or an authorized representative
                </li>
                <li>
                  Describe Your request with sufficient detail that allows Us to properly understand, evaluate, and respond to it
                </li>
              </ul>

              <p className='paragraph'>
                We cannot respond to Your request or provide You with the required information if we cannot:
              </p>
              <ul className='lists'>
                <li>Verify Your identity or authority to make the request</li>
                <li>And confirm that the personal information relates to You</li>
              </ul>
              <p className='paragraph'>
                We will disclose and deliver the required information free of charge within 45 days of receiving Your verifiable request. The time period to provide the required information may be extended once by an additional 45 days when reasonably necessary and with prior notice. Any disclosures We provide will only cover the 12-month period preceding the verifiable request's receipt.
                <br/>
                For data portability requests, We will select a format to provide Your personal information that is readily usable and should allow You to transmit the information from one entity to another entity without hindrance.
              </p>
            </>

            <>
              <h5 className='subHead'>Do Not Sell My Personal Information</h5>
              <p>
                You have the right to opt-out of the sale of Your personal information. Once We receive and confirm a verifiable consumer request from You, we will stop selling Your personal information. To exercise Your right to opt-out, please contact Us
              </p>
            </>
          </div>
        </div>

        <div className='tab'>
          <input type='checkbox' className='accordionTab' id='Tab5' />
          <label htmlFor='Tab5' className='title'>
            <h3>"Do Not Track" Policy as Required by California Online Privacy Protection Act (CalOPPA)</h3>
          </label>
          <div className='content'>
            <p>
              Our Service does not respond to Do Not Track signals.
            </p>
            <p className='paragraph'>
              However, some third party websites do keep track of Your browsing activities. If You are visiting such websites, You can set Your preferences in Your web browser to inform websites that You do not want to be tracked. You can enable or disable DNT by visiting the preferences or settings page of Your web browser.
            </p>

            <>
              <h4 className='head'>Children's Privacy</h4>
              <p>
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
              </p>
              <p className='paragraph'>
                If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
              </p>
            </>

            <>
              <h4 className='head'>Your California Privacy Rights (California's Shine the Light law)</h4>
              <p>
                Under California Civil Code Section 1798 (California's Shine the Light law), California residents with an established business relationship with us can request information once a year about sharing their Personal Data with third parties for the third parties' direct marketing purposes.
              </p>
              <p className='paragraph'>
                If you'd like to request more information under the California Shine the Light law, and if You are a California resident, You can contact Us using the contact information provided below.
              </p>
            </>

            <>
              <h4 className='head'>California Privacy Rights for Minor Users (California Business and Professions Code Section 22581)</h4>
              <p>
                California Business and Professions Code Section 22581 allows California residents under the age of 18 who are registered users of online sites, services or applications to request and obtain removal of content or information they have publicly posted.
                <br/>
                To request removal of such data, and if You are a California resident, You can contact Us using the contact information provided below, and include the email address associated with Your account.
                <br/>
                Be aware that Your request does not guarantee complete or comprehensive removal of content or information posted online and that the law may not permit or require removal in certain circumstances.
              </p>
            </>

            <>
              <h4 className='head'>Links to Other Websites</h4>
              <p>
                Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
              </p>
              <p>
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
              </p>
            </>

            <>
              <h4 className='head'>Changes to this Privacy Policy</h4>
              <p>
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
                <br/>
                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
                <br/>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </>

            <>
              <h4 className='head'>Contact Us</h4>
              <p>If you have any questions about this Privacy Policy, You can contact us:</p>
              <ul className='lists'>
                <li>By email: info.culturecolors@gmail.com</li>
              </ul>
            </>
          </div>
        </div>

      </article>
    </section> 
  )
}

export default Privacy