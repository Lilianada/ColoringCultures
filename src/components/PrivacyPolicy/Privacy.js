import React from 'react';
import './Privacy.css';

function Privacy() {
  return (
    <section className='privacyWrapper'>
        <h2 className='brownText'>Privacy Policy</h2>
        <p className='paragraph'>
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. 
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
        </p>
        <article className='accordion'>
            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab1' />
                <label htmlFor='Tab1' className='title'><h3>Intepretation and Definitions</h3></label>
                <div className='content'>
                  <h4 className='head'>Interpretation</h4>
                    <p>
                      The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>
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
                </div>
            </div>

            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab2' />
                <label htmlFor='Tab2' className='title'><h3>Collecting and using your personal data</h3></label>
                <div className='content'>
                  <h4 className='head'>Types of Data Collected</h4>
                  
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

                  <h5 className='subHead'>Usage Data</h5>
                  <p>
                    Usage Data is collected automatically when using the Service.
                    <br/>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                    <br/>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                    <br/>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                  </p>

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

                  <h5 className='subHead'>Retention of Your Personal Data</h5>
                  <p>
                    The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                    <br/>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                  </p>

                  <h5 className='subHead'>Transfer of Your Personal Data</h5>
                  <p>
                    Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
                    <br/>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer. 
                    <br/>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                  </p>
                </div>
            </div>
        </article>
    </section> 
  )
}

export default Privacy