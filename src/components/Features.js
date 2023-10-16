import React from 'react';
 
function Features() {
  const features =  [
    {
      title: "Outdated User Interface Affecting Usability",
      description:
        "Aggielife, the existing system in place for UCD students, is visibly antiquated and plagued by a user interface that is not user-friendly. The clunky and complex interface poses significant challenges for students who have to struggle to locate necessary information, reducing the system's overall efficacy. Upgrading the interface with a focus on intuitive design could considerably simplify navigation and promote user satisfaction..",
      icon: "bx:bxs-briefcase",
    },
    {
      title: "Inefficient Club Discovery due to Limited Search and Filtering Options",
      description:
        "The platform currently offers limited search and filtering options, thereby adversely affecting the club discovery process. The students are unable to efficiently search for or filter through the available clubs due to this limitation. Enhancing these features with modern search algorithms and introducing robust filters based on interests, activities, or club size could vastly improve the club discovery experience for students.",
      icon: "bx:bxs-window-alt",
    },
    {
      title: "Inadequate organization and management tools",
      description:
        "Aggielife's organization and management tools are not up to par, leading to missed opportunities and challenges in keeping abreast of club activities. The lack of effective tools for scheduling, notification, and communication hinders students' ability to fully engage in club activities. Implementing comprehensive organizational and management tools could increase participation and ensure students don't miss out on valuable experiences.",
      icon: "bx:bxs-data",
    },
  
  ];

  return (
    <>
      <div className="features-header">
        <h2 className="features-title">WHY THE CURRENT SOLUTION IS SH*T</h2>
        <p className="features-subtitle">The current solution for UCD students, Aggielfe, is outdated and suffers from poor usability.</p>
      </div>
      <div className="features-grid">
        {features.map(item => (
          <div className="feature-item" key={item.title}>
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-description">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;
