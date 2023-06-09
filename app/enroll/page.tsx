import React from "react";
import Image from "next/image";
import stock1 from "../../stockImage1.png";

export const metadata = {
  title: "Enroll in the Pilot Study",
};

const EnrollPage = () => {
  return (
    <div className="content">
      <div className="container">
        <h2 className="sectionHeader">
          Here's how to enroll in a pilot study for one or more of our available
          courses! 
        </h2>
        <br></br>
        <div className="section">
          <h6 className="subheading">
            Are you a bioinformatics trainee? Looking to learn more?
          </h6>
          <div className="text">
            Our modules will teach trainees about the bioinformatics community
            and how to engage with it. The content will be presented in various
            formats, including videos, quizzes, coding exercises, and
            open-access reading material. The project will consist of at least
            12 major modules, and all assessments will be auto-graded. The
            project will complement ongoing training in bioinformatics education
            at any point in one's career, and the self-paced modules will enable
            users to compare their results and effectively join local, regional,
            and international science communities.
          </div>
          <Image className="fullImage" src={stock1} alt="Stock Photo" ></Image>
          <div className="imageCaption">A caption for the photo</div>
        </div>

        {/* <div className="section">
          <h6 className="subheading">Where we are today</h6>
          <div className="text">
            What has your team accomplished? What are you most proud of? Tell
            site viewers some of your project's latest accomplishments.
          </div>

          <div className="thumbnails">
            <div className="organizer">
              <Image
                className="thumbnail"
                src={stock1}
                alt="Stock Photo"
              ></Image>
              <div className="imageCaption">
                Caption for recent accomplishment
              </div>
            </div>
            <div className="organizer">
              <Image
                className="thumbnail"
                src={stock1}
                alt="Stock Photo"
              ></Image>
              <div className="imageCaption">
                Caption for recent accomplishment
              </div>
            </div>
          </div> 
        </div>*/}
      </div>
    </div>
  );
};

export default EnrollPage;
