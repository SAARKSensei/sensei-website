import React from "react";
export const metadata = {
  title: "Terms and Conditions",
  description:
    "Welcome to Sensei Life Skills & Education by SAARK Education Pvt. Ltd.! These terms and conditions govern your use of our website located at sensei.org.in.",
};
const Page = () => {
  const PP = [
    {
      heading: "Information We Collect",
      content: [
        {
          heading: "Personal Information",
          content: [
            "To enhance the educational experience, we collect limited personal information:",
            "Student and teacher names",
            "Contact information (email addresses, phone numbers)",
            "Student IDs",
            "Parental contact information",
          ],
        },
        {
          heading: "Non-Personal Information",
          content: [
            "We collect information to improve our curriculum:",
            "Activity completion data",
            "Progress in Mental Wellness, Comprehensive Sexuality Education, Moral Values, and Career Exploration",
            "User-generated content",
          ],
        },
      ],
    },
    {
      heading: "How We Use Your Information",
      content: [
        {
          heading: "We utilise the collected information to:",

          content: [
            "Tailor and enhance our curriculum",
            "Personalise learning experiences",
            "Facilitate communication with students, parents, and educational institutions",
            "Generate personalised reports for parents",
          ],
        },
      ],
    },
    {
      heading: "Security and Identity Protection",
      content: [
        {
          heading: "Your privacy is our priority:",
          content: [
            "Tigorous security measures safeguard your identity.",
            "Information is encrypted during transmission.",
            "Sensitive data is never shared without explicit consent.",
          ],
        },
      ],
    },
    {
      heading: "Parental Solutions and Controls",
      content: [
        {
          heading:
            "Empowering parents with control over their child's educational journey:",
          content: [
            "Access personalised reports for insights.",
            "Exercise rights to review, delete, or limit the collection of their child's personal information",
          ],
        },
      ],
    },

    {
      heading: "No Exams and Activity-Based Learning",
      content: [
        {
          heading: "Experience the Sensei advantage:",
          content: [
            "No stressful exams, promoting a stress-free learning environment.",
            "Activity-based learning for practical skill development.",
          ],
        },
      ],
    },
    {
      heading: "Hybrid Learning and Counsel-or-Led Sessions",
      content: [
        {
          heading: "Our curriculum adopts a hybrid learning approach:",
          content: [
            "Some classes are conducted in-school with the whole class.",
            "Mobile app access for certain sessions.",
            "All teachings are led by certified counsellors.",
          ],
        },
      ],
    },
    {
      heading: "Unique Selling Proposition (USP)",
      content: [
        {
          heading: "Sensei's USP ensures:",
          content: [
            "No Exams: Stress-free learning for students.",
            "Activity-Based Learning: Engaging and practical curriculum.",
            "Age-Sensitive Teaching: Tailored content for age-appropriate learning.",
            "Secured Identity: Robust measures to protect user identity.",
            "Parental Solutions: Empowering parents with insights and control.",
            "Personalised Reports: Individualised progress reports for students.",
          ],
        },
      ],
    },
    {
      heading: "Positive Outcomes",
      content: [
        {
          heading: "Our curriculum aims for positive, holistic outcomes:",

          content: [
            "Our curriculum aims for positive, holistic outcomes:",
            "Enhanced mental wellness",
            "Improved critical and holistic well-being",
            "Promotion of gender equality",
            "Development of better moral values",
          ],
        },
      ],
    },
    {
      heading: "Changes to This Privacy Policy",
      content: [
        "We may update this Privacy Policy to reflect improvements or changes in our services. We'll notify users of any significant changes via email or by posting the updated policy on our website.",
      ],
    },
    {
      heading: "Contact Us",
      content: [
        "If you have questions about this Privacy Policy, please contact us at connect@sensei.org.inWelcome to Sensei, where education meets holistic development. This Privacy Policy details our commitment to safeguarding the privacy and security of your information.",
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4 py-5 md:py-10">
      <h1 className="h1 text-grad mb-5">Privacy Policy</h1>
      <ul className="mb-5 h-fit list-inside list-disc text-secondary md:mb-10">
        <li>
          Welcome to Sensei, where education meets holistic development. This
          Privacy Policy details our commitment to safeguarding the privacy and
          security of your information.{" "}
        </li>
      </ul>
      <ol className="ml-5 flex list-outside list-decimal flex-col gap-4 [counter-reset:section] md:ml-7 md:gap-6">
        {PP.map((t, index) => (
          <li
            className={`h4 font-bold text-secondary [counter-increment:section] marker:[content:counters(section,'.')'._']`}
            key={index}
          >
            <h4 className="">{t.heading}</h4>
            <ol
              className={`ml-4 flex flex-col gap-4 sm:ml-7 md:ml-9 ${index === 0 ? "ml-4 [counter-reset:section]" : ""} md:gap-6`}
            >
              {t?.content.map((c, ind) => (
                <li
                  className={`h5 ${index === 0 ? "[counter-increment:section] marker:[content:counters(section,'.')'._']" : "marker:[content:'']"}`}
                  key={ind}
                >
                  {typeof c === "object" ? c.heading : c}
                  {c?.content && (
                    <ul className="flex list-inside !list-disc flex-col gap-1">
                      {c.content.map((cc, index) => (
                        <li key={index} className="marker:[content:'•_']">
                          {cc}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Page;
