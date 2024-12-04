import React, {useState} from "react";
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import S from "./Services.module.css"
import {FooterBlock} from "../../components/common/Footer/Footer";
import {v4 as uuidv4} from "uuid";


export const Services = () => {
    const [menuView, setMenuView] = useState(false);
    const servicesArray = ['Pre-Construction', 'General Contracting', 'Construction Management', 'Design Build'];
    const [typeOfService, setTypeOfService] = useState('Pre-Construction');
    const servicesTexts = {
        'Pre-Construction': "Our Pre-construction Services provide our client with an upfront peace of mind by resolving" +
            " potential project challenges prior to construction, reducing project risks, and identifying areas for cost savings.\n" +
            "\n" +
            "Apex’s, Pre-construction Services are a critical component and lends to the success  of the owner’s project." +
            " Our PC services are offered in the development, design, and construction phases. <br/><br/><strong>Apex  offers:</strong>\n" +
            "\n<ul >" +
            "<li style='list-style: square'>Design Direction</li>" +
            "<li style='list-style: square'>Value Engineering</li>" +
            "<li style='list-style: square'>Refined Scheduling</li>" +
            "<li style='list-style: square'>Zoning & Permitting Management</li>" +
            "<li style='list-style: square'>Constructability Analysis</li>" +
            "</ul>",

        'General Contracting': "At Apex, our primary objective is to ensure that your building project achieves the highest levels of client satisfaction. We are committed to this mission by investing significant time and resources in employing and retaining highly qualified Project Management professionals. Our approach includes integrating advanced building systems technology to uphold quality standards and implementing lean construction practices. We maintain a diverse pool of top-performing subcontractors, supported by experienced executives who oversee every project to ensure its success. Furthermore, we prioritize safety by providing a dedicated Site Safety Manager and collaborating with leading safety consulting firms to rigorously monitor and uphold safety procedures throughout the project lifecycl.\n" +
            "\n" +
            "Apex is consistently recognized by our repeat clients as a company committed to fostering strong relationships grounded in trust and consistency. Our overarching goal is to deliver value by saving our clients time and money while providing peace of mind throughout the project lifecycle.",
        'Construction Management': "APEX offers meticulous Construction Management services where we use specialized, project management techniques to oversee the planning, design, and construction of  our clients projects, from its beginning to its end.",
        'Design Build': "APEX’s Design-Build delivery system manages the designer and contractor work together from beginning, as a team, providing unified project recommendations to fit the Owner’s schedule and budget, leading to collaborative problem-solving and innovation."

    }
    const onServiceClick = (type) => {
        setTypeOfService(type);
    }
    return (
        menuView ?
            <div>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <MobileMenu/>
            </div>
            :
            <div>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <div className={S.topWrapper}
                     style={{backgroundImage: `url(https://apextest12.b-cdn.net/projects/Oakbrook%20Office/wasPSD.jpg)`}}>
                    <div className={S.textTitleContainer}>
                        <h1 className={S.servicesTitle}>DISCOVER APEX</h1>
                        <div className={S.topWrapper_servicesTitle}>
                            <div className={S.topBlockHr}></div>
                            <p className={S.servicesInnerTitle}>APEX is dedicated to providing a superior building
                                experience to our clients.</p>
                            <div className={S.topBlockHr}></div>
                        </div>
                        <p className={S.servicesText}>


                            Our goal is to ensure your building project meets and receives the
                            highest level of client satisfaction.
                            Apex has put in the time and resources to ensure we deliver on our promise by employing
                            and retaining experienced, qualified Project Management professionals. Apex focuses on investing in building
                            systems technology ensuring quality, lean construction, identifying and maintaining
                            a diverse pool of top performing subcontractors, integrating top-level executives to oversee
                            all projects, and by providing a stringent Site Safety Manager and the top safety consulting
                            firms to monitor safety procedures.<br/><br/>

                            Apex has been defined by our repeat clients as a company with a desire to build strong
                            relationships, built on trust, consistency, and the overall goal of saving money, time and
                            peace of mind for our clients.<br/><br/>

                            Successful building projects come from good people, working with great companies that delivers
                            hard-working, qualified professionals to their client’s projects.<br/><br/>

                            Apex Construction Group.  Good people, building for great clients.
                        </p>
                    </div>
                </div>


                <section className={S.bodySection}>

                    <div className={S.bodyContainer}>
                        <div className={S.bodyContainerTextPart}>
                            {servicesArray.map((el) =>
                                <div key={uuidv4()} >
                                    <h2 className={S.servicesTitles}
                                        onClick={() => onServiceClick(el)}
                                        style={{
                                            marginLeft: typeOfService === el && '10px',
                                            boxShadow: typeOfService === el && 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
                                        }}>
                                        {el}
                                    </h2>
                                </div>)}
                        </div>
                        <div className={S.bodyContainerContentPart}>
                            <h1 className={S.bodyContainerTitle}>Our Services</h1>
                            <p className={S.servicesDescriptionText}  dangerouslySetInnerHTML={{__html: servicesTexts[typeOfService]}}>

                            </p>
                        </div>
                    </div>

                </section>

                <FooterBlock/>
            </div>
    )
}
