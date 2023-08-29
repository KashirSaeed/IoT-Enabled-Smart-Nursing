import './aboutUs.css';
import React from 'react';
import MyAppbar from '../../components/appbar/appbar';
import MainHeading from '../../components/MainHeading/mainHaeding';
import teamPicture from '../../assets/team.png'
import Footer from '../../components/Footer/footer';


const AboutUs = () => {
    return (
        <div>
            <MyAppbar />
            <div className="mainContainer" >
                <div>
                    
                    <MainHeading text="About Us" />
                    <div className='teamPicProperties'>
                        <img src={teamPicture} alt="teamPicture" className='teamPic' />;
                    </div>
                    <div className='textProperties' >
                        <p>We are a team of dedicated students from UET Lahore working on our Final Year Project called the IoT Enabled Smart Nursing Portal. Our team consists of four motivated individuals who are passionate about utilizing technology to make a positive impact in the healthcare sector.</p>
                        <p>At present, the nursing sector faces significant challenges due to under staffing and overworking. This leads to nurse burnout, compromised patient care, and reduced healthcare efficiency. Our aim is to address these issues by developing an Electronic Nursing Portal (ENP) that automates and assists the nursing workflow.</p>
                        <p>Our project focuses on leveraging the power of IoT and computer vision to provide a comprehensive solution for nurses. By utilizing existing hardware and cameras, we create a cost-effective and practical system that monitors patients 24/7. This system tracks and classifies vital signs and daily activities, providing real-time analytics through a user-friendly dashboard. </p>
                        <p>One of our key objectives is to reduce nurse burnout by streamlining their activities and providing scheduling assistance through a mobile app. By automating tasks and providing timely information, we aim to empower nurses to perform their duties efficiently and make fully informed decisions about patient care.</p>
                        <p>In addition to improving patient outcomes and reducing nurse burnout, our project aligns with Pakistan's sustainable development goals to provide better healthcare facilities for everyone. We envision our technology being implemented not only in hospitals but also in nursing homes for the elderly and daycare centers for baby care. Furthermore, integration with IoT wearables can extend nursing services to patients' homes.</p>
                        <p>As a team, we are committed to excellence in research, development, and implementation. We aim to evaluate the accuracy and reliability of our computer vision system in detecting abnormal activities in elderly patients. We also seek to explore the impact of our Electronic Nursing System on patient outcomes and nurse burnout. Through rigorous testing, analysis, and continuous improvement, we strive to deliver a high-quality and impactful solution.</p>
                        <p> Our project serves as an academic endeavor as well, allowing us to apply our knowledge and skills to solve a real-world problem. We have embraced a hybrid development approach, combining agile and non-agile methodologies, to ensure flexibility, collaboration, and successful project completion.</p>
                        <p>We are excited about the opportunity to contribute to the healthcare industry and revolutionize nursing care through state-of-the-art technology. With the support of our project advisor, experienced team lead, and the dedication of our team members, we are confident in our ability to deliver a comprehensive IoT-enabled Smart Nursing Portal that will make a significant difference in the lives of patients and nurses alike.</p>
                    </div>
                </div>


            </div>
            <Footer />

        </div>
    );
}

export default AboutUs;
