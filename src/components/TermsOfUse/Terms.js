import React from 'react';
import { Link } from 'react-router-dom';
import './Terms.css';


function Terms() {
  return (
    <section className='wrapper'>
        <h2 className='brownText'>Terms Of Use</h2>
        <article className='accordion'>
            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab1' />
                <label for='Tab1' className='title'><h3>About these terms of use</h3></label>
                <div className='content'>
                    <p>
                        These Terms of Use (“Terms”) is a legal agreement between you and Coloring Cultures,
                        LLC (registration number TC #####, having registered office at 2205 S Perryville Road,
                        P.O Box #595, Rockford, IL 61108) (“Coloring Cultures, LLC” “we” or “us”).
                        By visiting https://www.coloringcultures.app/ and any other site or online service that is
                        owned or operated by Coloring Cultures (each, a “Site” and collectively, the “Sites”),
                        using mobile games published by Coloring Cultures (each, an “App” and collectively, the
                        “Apps”), playing games that can be played through third party platforms, e.g., via
                        consoles, PCs and/or social media sites such as Facebook (“3rd Party Platform
                        Games”) or otherwise access any of our other products, services or content
                        (collectively, Sites, Apps and 3rd Party Platform Games are referred to as the
                        “Services”), you agree to and accept the Terms, which we may update from time to
                        time. Your use of our Services is also subject to our Privacy Policy (which is a part of
                        the Terms) and our Cookie Policy (which is incorporated into the Privacy Policy) which
                        cover how we collect, use, share and store your personal data.
                        By downloading, installing, using or otherwise accessing the Services, you agree to the
                        Terms. If you do not agree to the Terms, please do not download, install, use or
                        otherwise access the Services. Use of the Services is void where prohibited.
                        Our Apps download/purchase page may contain certain additional terms, conditions and
                        requirements, which constitute a part of the Terms. In case you download/purchase the
                        Apps through an online store such as Google Play Store, Apple App Store, etc. (“Online
                        Store”), please, review the terms and conditions of the owner of that particular Online
                        Store, which may provide for certain additional requirements applicable to the download
                        of the Apps through that Online Store, its installation and use.
                        You can find the latest updated version of the Terms at any time at our
                        Site https://coloringcultures.app/terms-of-use
                        The Services may contain specific rules, controls and guidelines, which can be found
                        within the Services themselves and which are related to the use of the Services. Such rules, controls and guidelines form a part of the Terms and you agree that you will
                        comply with them.
                    </p>
                </div>
            </div>

            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab2' />
                <label for='Tab2' className='title'><h3>Changes and Severability</h3></label>
                <div className='content'>
                    <p>
                        We reserve the right, at our discretion, to change, modify, add or remove portions of the
                        Terms at any time by posting the amended Terms. If there is a material change, we may
                        also provide additional notice within the Services. Unless we state otherwise, the
                        changes are effective immediately upon posting. Each time you access our Services,
                        the current version of the Terms applies. If you continue to use the Services after the
                        changes are posted, you agree that the changes apply to your continued use of the
                        Services.
                        If you do not agree with any amendment to the Terms, your only remedy is to cease use
                        of our Services.
                        If any portion of the Terms is deemed to be illegal or unenforceable, the remainder of
                        the Terms shall be unaffected and shall continue to be fully valid, binding, and
                        Enforceable.

                    </p>
                </div>
            </div>

            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab3' />
                <label for='Tab3' className='title'><h3>Requirements to use</h3></label>
                <div className='content'>
                    <p>
                        By installing, accessing or using our Services you confirm that you are at least 16 years
                        of age and have a full legal capacity to enter into this agreement. In case you are
                        between 16 and 18 years of age, you hereby confirm, that your parent, or a legal
                        guardian, or other representative under the applicable law has reviewed and agrees to
                        the Terms and allows you to access and/or use our Services.
                        We also reserve the right, in our sole discretion and at any time, to discontinue or
                        modify our Services or any part thereof or remove or edit Content (as defined below),
                        without prior notice either permanently or temporarily, at which point your right to use
                        those Services or any part thereof will be automatically terminated or suspended.
                        The transmission of information over wireless and wired networks is not inherently
                        secure. We use many tools to help to protect your personal data against unauthorized access or disclosure, however, we may not guarantee that your personal data or private
                        communications will always remain private when using our Services. You accept all
                        responsibility for such security risks and any damage that may result therefrom. It is
                        also your sole responsibility to use all reasonable and recommended measures (such
                        as complex passwords, etc.) in order to secure your device from any unauthorized
                        access.
                        U.S. GOVERNMENT RESTRICTED RIGHTS: Our Services have been developed
                        entirely at private expense and are provided as “Commercial Computer Software” or
                        “restricted computer software”. Any use, duplication or disclosure by the U.S.
                        Government or a U.S. Government subcontractor is subject to the restrictions set forth
                        in subparagraph (c) (1) (ii) of the Rights in Technical Data and Computer Software
                        clauses in DFARS 252.227-7013 or as set forth in subparagraph (c)(1) and (2) of the
                        Commercial Computer Software Restricted Rights clauses at FAR 52.227-19, as
                        applicable. Any download of our Apps and use of our Services shall be in compliance with all
                        relevant international, U.N., USA or EU sales, export or import restrictions and
                        regulations and you agree to comply with them. You represent and warrant that 
                        <ol type='i' className='lists'>
                            <li>
                                you are not located in a country that is subject to U.S. Government embargo, or that has been designated by the U.S. Government as a „terrorist supporting” country; and 
                            </li>
                            <li>
                                you are not listed in any U.S. Government or EU sanction list of prohibited or restricted parties and you comply with relevant U.S. Government and EU sanctions and
                                embargos; and
                            </li>
                            <li>
                                you are solely responsible for compliance with all applicable laws, including without limitation export and import regulations, when using the Services.
                            </li>
                        </ol>
                    </p>
                </div>
            </div>

            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab4' />
                <label for='Tab4' className='title'><h3>User Account</h3></label>
                <div className='content'>
                    <p>
                        To access or use features of some of our Services, you may be required to register by
                        creating an account (“Account”) or by signing in via a third-party tool (such as Facebook
                        Log In, Sign-In with Apple or Google Sign-In) (“Third-Party Tool”). To create an Account,
                        you may be required to provide details and select a password or to otherwise allow us
                        to access your information through a Third-Party Tool. Please note that Third-Party
                        Tools are governed by their own privacy policies, terms and end-user agreements and
                        we are not responsible for and have no control over the business and privacy practices of such Third-Party Tools. Please review Third-Party Tools privacy policies, terms and
                        end-user agreements before signing into our Services via a Third-Party Tool.
                        You must safeguard and not disclose your login and password information related to
                        your Account in our Services. You will be responsible for all uses of your Account, your
                        login and password information, including purchases, whether or not authorized by you.
                        If you become aware or suspect any breach of security, including any loss, theft or
                        unauthorized disclosure of your Account, your login or password information, you must
                        immediately notify us and modify your login and password.
                        You must provide accurate and complete information when creating an Account in our
                        Services and to update your information promptly upon change. You also agree not to
                        misrepresent your identity or to create an Account on behalf of someone other than
                        yourself.
                        You undertake to monitor your Account at all times and to restrict use by anyone who
                        does not meet the requirements to use our Services. You accept full responsibility for
                        any use of the Service using your Account, your login and password information,
                        including any use of your credit card or other payment instrument.
                        If you wish to terminate or close your Account, or to modify your login, password or
                        other personal information with your Account, you may do so by contacting us at
                        info@coloringcultures.app.
                    </p>
                </div>
            </div>
            
            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab5' />
                <label for='Tab5' className='title'><h3>Purchases in the services</h3></label>
                <div className='content'>
                    <p>
                        When you make in-app purchases (including purchases of Virtual Items in the
                        Services), the payment for such purchases may be processed either by third parties on
                        our behalf, or directly by the owner of the Online Store. If you download the Apps from
                        the Online Store owner, before effecting the purchase from the Online Store, please
                        also review and accept the terms and conditions of the Online Store owner with regard
                        to your rights to cancel orders and get related refunds. Thus, if you have any payment
                        related issues (including cancellation or refund requests), then you will need to contact
                        the respective Online Store owner directly.When making purchases in the Services, you agree that the digital content will be
                        available to you immediately, and acknowledge that you will lose your rights to the 14
                        days cancellation period and refunds available for EU and EEA residents.
                        All purchases in or associated with the Services are final and non-refundable, except
                        when required by applicable law or at Coloring Culture’s sole discretion.
                    </p>
                </div>
            </div>

            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab6' />
                <label for='Tab6' className='title'><h3>Virtual Items</h3></label>
                <div className='content'>
                    <p>
                        In the course of using the Service you may win, earn or alternatively purchase with real
                        money certain game credits, prizes, virtual coins, tokens, points diamonds and other
                        virtual in-game items (collectively, “Virtual Items”).
                        When purchasing Virtual Items, you agree to pay us the applicable charges for your
                        purchase, including applicable taxes, through the applicable Online Store or payment
                        processing partner. Your purchase will be fulfilled only if your payment transaction with
                        the applicable Online Store or payment processing partner is successful.
                        Please note that you only purchase a limited, revocable, non-transferrable license for
                        personal use of Virtual Items in the Services. Virtual Items are not “sold” to you. You
                        agree that you do not own any Virtual Items that you obtained through the Services,
                        regardless of whether you earned those Virtual Items or purchased them.
                        You are not allowed to exchange Virtual Items with us or with anyone else for real
                        money (traditional currency, any other open digital currency), goods, other items, or
                        services of monetary value. Unless expressly authorized in the Services, you shall not
                        transfer Virtual Items outside the Services to any third party, for example by selling,
                        gifting or trading them in the “real world”. Any such transfer or attempted transfer is
                        prohibited and void.
                        We retain the right to manage, regulate, control, modify or eliminate Virtual Items at our
                        sole discretion, and we shall have no liability to you or anyone for exercise of such
                        rights. Prices and availability of Virtual Items are subject to change without notice. We
                        may selectively remove or revoke your license to use Virtual Items in the Services
                        without notice at our sole discretion.You are not obligated, at any time, to purchase any Virtual Items. Your purchase of
                        Virtual Items is final and is not refundable, transferrable or exchangeable, except in
                        Coloring Culture’s sole discretion or when required by applicable law.
                        Please note that if you request your personal data to be erased as specified in our
                        Privacy Policy, you will permanently and without a right to a refund lose all your Virtual
                        Items, as we will no longer be able to associate such Virtual Items with you.
                        YOU ACKNOWLEDGE THAT COLORING CULTURES IS NOT REQUIRED TO
                        PROVIDE A REFUND FOR ANY REASON, AND THAT YOU WILL NOT RECEIVE
                        MONEY OR OTHER COMPENSATION FOR UNUSED VIRTUAL ITEMS WHEN YOU
                        DELETE YOUR ACCOUNT OR WHEN YOU CEASE TO USE OUR SERVICES.
                    </p>
                </div>
            </div>

            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab7' />
                <label for='Tab7' className='title'><h3>Ownership and License</h3></label>
                <div className='content'>
                    <p>
                        Our Services are comprised of works and intellectual property owned by Coloring Cultures and/or its licensors, including, without limitation: games, titles, computer code,themes, objects, characters, stories, dialogue, artwork, graphics, images, animations,audio-visual effects, screen shots, text, sound, music, digitally downloadable files, trademarks, logos, product and character names, slogans, virtual currency and virtualitems and the compilation of the foregoing (“Content”). Under the Terms, we grant you a non-exclusive, personal, limited, revocable and non transferable license to use our Services, provided you agree to comply with the Terms. The Content in our Services are for gaming services and for your non-commercial enjoyment and entertainment. Any other use, including modification, reproduction, uploading, posting, transmission, distribution, sale, rent, lease, display, performance, broadcast, sublicense, assignment or other making available of any rights to the Content or any portions thereof to third parties in any form or by any means without our prior written permission, is strictly prohibited. You may not remove any proprietary notices or labels on the Content or use the Content in any unlawful or infringing manner. Any bypass, modification, defeat or circumvention of the Digital Rights Management solution (“DRM”) used for protection of the Content is strictly prohibited.You are not granted any other right, title or interest in our Services or any Content except as expressly provided herein. All other rights are reserved. Notwithstanding the Terms, the opensource software is licensed to you subject to the terms and conditions of the respective software license agreements accompanying such opensource software.
                        <br/>
                        You agree that you will not:
                    </p>
                    <ol type='i' className='lists'>
                        <li>
                            modify, make derivative works of, disassemble, reversecompile, or reverse engineer any part of the Services;
                        </li>
                        <li>
                            access or use the Services in order to build or support, and/or assist a third party in building or supporting, products or services competitive to Coloring Cultures;
                        </li>
                        <li>
                            disrupt or interfere with the security of, or otherwise cause harm to the Services, servers or networks that host the Services;
                        </li>
                        <li>
                            violate the intellectual property of other rights of any party, including Coloring Cultures;
                        </li>
                        <li>
                            sell, license or exploit the Services for any commercial purposes; and
                        </li>
                        <li>
                        remove or destroy any copyright notices or other proprietary markings contained on or in the Services.
                        </li>
                        <p>
                            if you have been found in violation of the terms, we reserve the right, in our sole discretion and at any time, to limit, suspend, modify or terminate access to services or any portion thereof. If this happens, coloring cultures is not required to compensate you for any losses or results. in addition, you may be found to be in violation of criminal and civil laws, including coloring culture’s intellectual property rights.
                        </p>
                    </ol>
                </div>
            </div>

            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab8' />
                <label for='Tab8' className='title'><h3>User Generated Content</h3></label>
                <div className='content'>
                    <p>
                        On certain areas of the Services or otherwise, you may be able to chat with other users,
                        and submit texts, files, images, photos, videos, sounds, musical works, works of
                        authorship, text postings and other materials and content (“User Generated
                        Content” or “UGC”). Your posting of UGC is subject to the Terms and the following
                        posting rules (“Posting Rules”):
                    </p>
                    <div >
                        <h4 className='head'>A. YOU AGREE THAT YOUR UGC IS:</h4>
                        <ol type='i' className='lists'>
                            <li>Accurate</li>
                            <li>Not confidential;</li>
                            <li>Not in violation of law;</li>
                            <li>
                                Not in violation of contractual restrictions or third party rights, and that you have permission to use content from any other party whose personal or other information or intellectual property is contained in the UGC;        
                            </li>
                            <li>
                                Not abusive, harmful, libelous, profane, obscene or otherwise objectionable;
                            </li>
                            <li>
                                Not for commercial purposes or business solicitations; and
                            </li>
                            <li>
                                Free of viruses, corrupting files, interference, cheat software, worms or other malicious code.
                            </li>
                        </ol>
                    </div>

                    <div>
                        <h4 className='head'>B. RESPONSIBILITY OF POSTINGS</h4>
                        <p className='lists'>
                            You understand and acknowledge that UGC is solely your responsibility, and that
                            Coloring Cultures is not responsible for the information, data, text or other materials that may appear in UGC. Opinions expressed in UGC do not reflect the opinions of Coloring Cultures. UGC is not necessarily reviewed by Coloring Cultures prior to posting and Coloring Cultures makes no warranties, express or implied, as to the UGC or to the accuracy and reliability of the UGC.
                        </p>
                    </div>
                    <div>
                        <h4 className='head'>C. NO MONITORING/VIOLATION NOTICES</h4>
                        <p className='lists'>
                            You acknowledge that Coloring Cultures has no obligation to monitor and takes no
                            responsibility for any UGG posted, transmitted, or communicated to or within the
                            Services. Notwithstanding the foregoing, you further agree that Coloring Cultures and its designees will have the right (but not the obligation) in their sole discretion to refuse, edit, move, or remove any UGC that is available via the Services.
                        </p>
                    </div>
                    <div>
                        <h4 className='head'>D. OBJECTIONABLE CONTENT</h4>
                        <p className='lists'>
                            You shall not post, upload or submit to the Services any UGG that violate these Terms
                            or that contains or links to Objectionable Content. “Objectionable Content” means
                            content that promotes or links to content that is 
                        </p>
                        <ol type='i' className='lists'>
                            <li>offensive, harassing, threatening, abusive, inflammatory or racist;</li>
                            <li>sexually explicit or obscene; </li>
                            <li>
                                illegal, fraudulent, deceptive, contrary to public policy or that could facilitate the violation of any applicable law; 
                            </li>
                            <li>harmful to minors in any way;</li>
                            <li>libelous or defamatory;</li>
                            <li>
                                violates the intellectual property, privacy, publicity, moral or any other right of any third party (such as by way of misrepresenting your identity or impersonating a third party), or otherwise injurious to third parties or objectionable, and 
                            </li>
                            <li>
                                software viruses, commercial solicitation, chain letters, mass mailings, or any form of “spam”.
                            </li>
                        </ol>
                        <p className='lists' style={{marginTop: '1rem'}}>
                            YOU UNDERSTAND AND AGREE THAT COLORING CULTURES MAY DELETE ALL UGC AT ANY TIME, AND WITHOUT NOTICE, IF COLORING CULTURES DEEMS THAT YOU MATERIALLY BREACH THESE POSTING RULES, THE TERMS, APPLICABLE LAW, OR FOR ANY OTHER REASON. COLORING CULTURES ASSUMES NO LIABILITY FOR ANY INFORMATION REMOVED FROM OUR SEVICES AND RESERVES THE RIGHT TO PERMANENTLY RESTRICT ACCESS TO SERVICES.
                        </p>
                    </div>
                </div>
            </div>

            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab9' />
                <label for='Tab9' className='title'><h3>Ownership and license of UGC</h3></label>
                <div className='content'>
                    <p>
                        After posting your UGC on or through the Services, you continue to retain all ownership rights in such UGC, and you continue to have the right to use your UGC in any way you choose, subject to the Terms and the license described herein (“UGC License”).
                    </p>
                    <div>
                        <h4 className='head'>A. SCOPE OF LICENSE.</h4>
                        <p className='lists'>
                            By displaying, publishing, or otherwise posting any UGC on or through the Services, you hereby grant to Coloring Cultures the non-exclusive, irrevocable, worldwide, royalty free license to edit, adapt, publish, modify, reproduce, distribute, publicly display and use your UGC and any derivative works we may create from it, in any and all media (whether it exists now or in the future), for any purpose, in perpetuity, without any payment to you. To the extent allowed by applicable laws, you agree to waive any moral rights you may have in Feedback (e.g. the right to be identified as the author of Feedback or the right to object to a certain use of Feedback). Any UGG you submit on or through the Services will be considered non-confidential and non-proprietary. If you have any idea or information that you would like to keep confidential and/or do not want others to use, please refrain from posting it.
                        </p>
                    </div>
                    <div>
                        <h4 className='head'>B. REPRESENTATIONS.</h4>
                        <p className='lists'>
                            You represent and warrant that: 
                            <ol type='i' className='lists'>
                                <li>
                                    you solely own the UGC displayed, published or posted by you on or through the Services or otherwise have the right to grant the license set forth herein, and 
                                </li>
                                <li>
                                    the displaying, publishing or posting of your UGC does not violate infringe on the rights of any third party, including any copyright, trademark, patent, trade secret or other intellectual property right, or the privacy rights, publicity rights, contract rights or any other rights of any person. You agree to pay for all royalties, fees, and any other monies owing any person by reason of any UGC displayed, published or posted by you to the Services. Except for your UGC, you may not edit, adapt, publish, reproduce, distribute, publicly display and use any UGC appearing on the Services.
                                </li>
                            </ol>
                        </p>
                    </div>
                </div>
            </div>

            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab10' />
                <label for='Tab10' className='title'><h3>User Feedback</h3></label>
                <div className='content'>
                    <p>
                        You may, at your sole discretion, provide us with suggestions, comments or feedback with respect to the Services (collectively, “Feedback”). You represent and warrant that you shall not provide us with Feedback that contains Objectionable Content or infringes upon third party’s rights. If you provide Feedback to us, hereby assign to Coloring Cultures all rights in the Feedback and agree that Coloring Cultures shall have the right to use such Feedback and related information in any manner that it deems appropriate. Coloring Cultures will treat any Feedback you provide as non-confidential and non proprietary. To the extent allowed by applicable laws, you agree to waive any moral rights you may have in Feedback.
                    </p>
                </div>
            </div>

            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab11' />
                <label for='Tab11' className='title'><h3>Link to third parties</h3></label>
                <div className='content'>
                    <p>
                        Our Services may feature advertisements from third-party companies. Please review our <Link className='brownText' to='/privacy-policy'>Privacy Policy</Link> which explains what information we share with advertisers. We are not responsible for the availability of such websites or resources of the third parties, and we are not responsible or liable for any content, advertising, or services they provide. Any content, advertising or services by such third party are provided following the terms of services and privacy policies to be found on the website of the respective third party and, where applicable, you must familiarize yourself and accept the terms of services and privacy policies of such third party before using their services. Any separate charges or obligations you incur in your dealings with these third parties are your responsibility. Coloring Cultures is not liable for any claim relating to any content, goods or services, business practices or privacy policies of third parties, including for how they collect, use or share information they get from you.
                    </p>
                </div>
            </div>

            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab12' />
                <label for='Tab12' className='title'><h3>Indemnification</h3></label>
                <div className='content'>
                    <p>
                        To the maximum extent permitted by the applicable law, you agree to defend, indemnify and hold coloring cultures, its directors, officers, employees, consultants, agents, commissionaires or licensors harmless from any and all third party claims, suits, losses, liability, damages costs and/or expenses (including, but not limited to, attorneys’ fees) arising from your or incurred as a result of your use of the services, or any kind of alleged or actual breach by you of the terms, or any infringement by you or any third party of any intellectual property rights or any other rights of other persons. you agree not to settle any matter without the prior written consent of coloring cultures.
                    </p>
                </div>
            </div>
            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab13' />
                <label for='Tab13' className='title'><h3>Warranty Disclaimer</h3></label>
                <div className='content'>
                    <p>
                        The services are provided on an “as is” basis, with all faults and without a warranty of any kind. you use them at your sole risk and the entire risk as to satisfactory quality, performance, accuracy and effort is with you. To the maximum extent permitted by the applicable law, coloring cultures, on behalf of itself and any of its affiliates, licensors, distributors, third party suppliers and owners of the online stores, expressly disclaims any and all warranties, express or implied, statutory or otherwise, including, but not limited to the implied warranties of fitness for a particular purpose, merchantability, title, quality, accuracy, quiet enjoyment and non-infringement of third party rights, and any implied warranties arising from course of dealing or performance. Without limitation, coloring cultures makes no warranty that the services and the quality thereof will meet your requirements and expectations, that they will be uninterrupted, timely, correct, error-free, secure, that defects will be corrected or that the services are free of viruses or other harmful components. To the maximum extent permitted by the applicable law, we assume no liability or responsibility for any kind of property damage or losses arising from your use of our services, or due to any unauthorized access or other illegal actions by any third party, or due to any errors or omissions in any content, including any damage or losses because of use of any content.
                    </p>
                </div>
            </div>
            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab14' />
                <label for='Tab14' className='title'><h3>Limitations of Liability</h3></label>
                <div className='content'>
                    <p>
                        Under no circumstances will coloring cultures or its directors, officers, employees, agents, commissionaires or licensors be liable for any loss or injury or any direct, indirect, incidental, special, reliance, consequential, exemplary or punitive damages, or any damages whatsoever (including, without limitation, damages for injury to person or property, for loss of business, revenue, profits, goodwill, business interruption, loss of business information, loss of privacy, failure to meet any duty or negligence) arising out of or in any way related to the use or inability to use the services, breach of contract, unauthorised access, tort, including negligence, or any other action by any third party, even if we or our authorised representative has been advised of the possibility of such damages. In no event shall our total cumulative liability arising from the terms or related to your use of the services, whether in contract or tort, exceed the amounts actually paid by you for using the services under the terms during the twelve months immediately preceding the date the claim first arose. The parties agree that the limitations of liability will apply even if any remedy specified in the terms is found to have failed of its essential purpose.
                    </p>
                </div>
            </div>
            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab15' />
                <label for='Tab15' className='title'><h3>Waiver of our rights</h3></label>
                <div className='content'>
                    <p>
                        Our failure to exercise or enforce any of our rights under the Terms does not waive our right to enforce such right. Any waiver of such rights shall only be effective if it is in writing and signed by us.
                    </p>
                </div>
            </div>
            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab16' />
                <label for='Tab16' className='title'><h3>Terms, termination and survival</h3></label>
                <div className='content'>
                    <h4 className='head'>A. Term</h4>
                    <p>
                        The term of this agreement commences on the date you first indicate your acceptance of the Terms and will continue in effect until otherwise terminated in accordance with the Terms. Coloring Cultures reserves the right to suspend, discontinue, enhance, update or otherwise modify the Services (or any of its features or functionalities), or their availability to you, at any time without providing any prior notice.
                    </p>
                    <h4 className='head'>B. Termination by you</h4>
                    <p>
                        You may cease use of the Services at any time by uninstalling and discontinuing use of the Services. Your cessation of use of any Service or request that access to the Service be terminated, will not entitle you to any refund, including of any fees. In addition, you are responsible for any charges incurred to third-party vendors or content providers before your cancellation.
                    </p>
                    <h4 className='head'>C. Termination by Coloring Cultures</h4>
                    <p>
                        Coloring Cultures may terminate or suspend, withdraw, restrict or remove all or any partof our Services without notice at any time in the event that 
                    </p>
                    <ol type='i' className='lists'>
                        <li>
                            Coloring Cultures ceases providing such services to similarly situated users generally for business or operational reasons, or     
                        </li>
                        <li>
                        you breach these Terms or any other Coloring Culture’s terms and policies related to our Services, or 
                        </li>
                        <li>you violate the applicable law, or</li>
                        <li>
                            as otherwise determined by us in our sole discretion. In such event, you will forfeit any continuing right or license to use the Services, including any Virtual Items, and Coloring Cultures is under no obligation to compensate you for any loss or damage of any kind that your or any other party may allege in connection with such action.
                        </li>
                    </ol>
                    <h4 className='head'>D. Survival of terms</h4>
                    <p>
                        All provisions of the Terms with regard to privacy, intellectual property rights, ownership and license of UGG, user feedback, warranty disclaimer, limitations of liability, indemnification, governing law, severability, waiver of our rights and dispute resolution will survive the termination.
                    </p>
                </div>
            </div>

            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab17' />
                <label for='Tab17' className='title'><h3>Governing Law</h3></label>
                <div className='content'>
                    <p>
                        The provisions of the Terms shall be governed by and construed in accordance with the laws of the United States of America without reference to conflict of law rules and principles. The application of the United Nations Convention on Contracts for the International Sale of Goods (CISG) to the Terms is hereby expressly excluded.
                    </p>
                </div>
            </div>

            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab18' />
                <label for='Tab18' className='title'><h3>Dispute resolution</h3></label>
                <div className='content'>
                    <p>
                        Most concerns can be solved quickly by contacting us at <span className='brownText'>info@coloringcultures.app</span>.  In the unlikely event that we cannot solve your concern within 30 (thirty) days, and you wish to bring legal action against us, then that dispute will be subject to the jurisdiction of the courts of the United States of America. By voluntarily accepting these Terms, you and Coloring Cultures both agree that the parties can only bring a claim against each other on an individual basis. To the maximum extent permitted by applicable law, neither you nor Coloring Cultures shall be entitled to consolidate, join or coordinate disputes by or against other individuals or entities, or participate in any collective or class action or litigation. In connection with any dispute, any and all such rights are hereby expressly and unconditionally waived.USA USERS Each party specifically waives any right to trial by jury in any court in connection with any action or litigation. Any claims under these terms shall proceed individually and no party shall join in a class action or other proceeding with or on behalf of the others.
                    </p>
                </div>
            </div>

            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab19' />
                <label for='Tab19' className='title'><h3>Force Majure</h3></label>
                <div className='content'>
                    <p>
                        Neither you nor we will be liable for any failure to perform any obligation under the Terms or to provide access to Services of that failure is caused by the happening of any unforeseen event beyond your or our reasonable control, including without limitation, war, terrorism, riots, embargoes, Internet outages, network infrastructure failures, natural disasters, fire, flood or act of God.
                    </p>
                </div>
            </div>

            <div className='tab'>
                <input type='checkbox' className='accordionTab' id='Tab20' />
                <label for='Tab20' className='title'><h3>Miscellaneous Terms</h3></label>
                <div className='content'>
                    <h4 className='head'>A. Entire agreement</h4>
                    <p>
                        The Terms (including the <Link className='brownText' to='/privacy-policy'>Privacy Policy</Link> and <Link className='brownText' to='/terms-of-use'>Terms of Use</Link>) constitutes the entireagreement between you and Coloring Cultures regarding the use of our Services and supersedes all prior understandings.
                    </p>
                    <h4 className='head'>B. Assignment and novation</h4>
                    <p>
                        We can assign, novate, subcontract or otherwise transfer the Terms to a third party or an affiliate of Coloring Cultures if necessary for the support of our Services, as part of any reorganization, change of control, or for any other business reasons. You may not assign or transfer your rights or obligations under the Terms to anyone without first obtaining our written consent. Any attempt to assign without our consent is void.
                    </p>
                    <h4 className='head'>C. No beneficiaries</h4>
                    <p>
                        The Terms governs the relationship between you and us and does not create any rights for anyone else. Notwithstanding the foregoing, in the event of a valid assignment or transfer, the Terms shall be binding on and inure to the benefit of the relevant party’s representatives, successors, and permitted assigns.
                    </p>
                    <h4 className='head'>D. No right to obligate the other</h4>
                    <p>
                        The Terms does not create a partnership, joint venture or similar relationship between the parties, and neither party will have the power to obligate the other party in any manner whatsoever.
                    </p>
                    <h4 className='head'>E. Notice for aplle device users</h4>
                    <p>
                        In case you download, install or access the Apps through your Apple device, you specifically acknowledge and agree that the following additional terms shall apply (in case of conflict between these additional terms in this section and other terms of this agreement the terms of this section shall prevail):
                    </p>
                    <ol type='i' className='lists'>
                        <li>
                        Acknowledgement. The Terms is concluded between you and us only, not with Apple,and Apple is not responsible for the Apps or the content thereof.
                        </li>
                        <li>
                            Maintenance and Support Coloring Cultures is solely responsible for providing any maintenance and support services with respect to the Apps, as specified in these Terms or as required under applicable law. Coloring Cultures and you acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services withrespect to the Apps.
                        </li>
                        <li>
                            Scope of License. The license granted to you for the Apps is limited to a non transferable license to use the Apps on an iOS Product that you own and control and as permitted by the Usage Rules set forth on the Application Store Terms of Service, except that such Apps may be accessed and used by other accounts associated with the purchaser via Family Sharing or volume purchasing.
                        </li>
                        <li>
                            Warranty. Coloring Cultures is solely responsible for any product warranties, whether expressed or implied by law, to the extent not effectively disclaimed. In the event of failure of any App to conform to any applicable warranty, you may notify Apple, and Apple may refund the purchase price for the App to you; and to the maximum extent permitted by applicable law, Apple will have no other warranty or obligation whatsoever with respect to the App, and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be Coloring Culture’s sole responsibility.
                        </li>
                        <li>
                            Product claims. Coloring Cultures and you acknowledge and agree that Apple is not   responsible for addressing any claims by you or a third party relating to the Apps or your possession and/or use of the Apps, including, but not limited to: <br/>(a) product liability claims; <br/>(b) any claim that the Apps fails to conform to any applicable legal or regulatory requirement; and <br/>(c) claims arising under consumer protection, privacy or similar legislation. This Agreement does not limit Coloring Culture’s liability to you beyond what is permitted by applicable law.
                        </li>
                        <li>
                            Intellectual Property Rights. Coloring Cultures and you acknowledge and agree that Apple is not responsible for the investigation, defense, settlement and discharge of any third party claim that the Apps or your possession and use of the Apps infringes that third party‘s intellectual property rights;
                        </li>
                        <li>
                            Legal compliance. You represent and warrant that 
                            <br/>(i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; and 
                            <br/>(ii) you are not listed on any U.S. Government List of prohibited or restricted parties.
                        </li>
                        <li>
                            Third-Party Terms of Agreement. You must comply with applicable third-party terms of agreement when using the Apps
                        </li>
                        <li>
                            Third-Party Beneficiary. Coloring Cultures and you acknowledge and agree thatApple and its subsidiaries are third party beneficiaries of the Terms and upon your acceptance of the Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce the Terms against you as a third-party beneficiary of thereof; and
                        </li>
                        <li>
                            Developer Name and Address. Coloring Culture’s contact information for any end user complaints or claims with respect to the Apps:
                            <br/>Coloring Cultures, LLC, a company under laws of U.S, with registered address at: 2205 S Perryville Road, P.O Box #595, Rockford, IL 61108 
                            <br/>Email: info@coloringcultures.app
                        </li>
                    </ol>
                    <h4 className='head'>F. Governing language</h4>
                    <p>
                        The original and controlling version of these Terms shall be the English language version. All translations of these Terms into other languages shall be solely for convenience and shall not control the meaning or application of these Terms.
                    </p>
                    <h4 className='head'>G. Contact information</h4>
                    <p>
                        For information, support or questions, please contact us at <span className='brownText'>Info@coloringcultures.app</span>
                    </p>
                </div>
            </div>
        </article>
    </section>
  )
}

export default Terms