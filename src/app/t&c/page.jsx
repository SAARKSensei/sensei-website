import React from "react";
export const metadata = {
  title: "Terms and Conditions",
  description:
    "Welcome to Sensei Life Skills & Education by SAARK Education Pvt. Ltd.! These terms and conditions govern your use of our website located at sensei.org.in.",
};
const Page = () => {
  const TC = [
    {
      heading: "Introduction",
      content: [
        'Welcome to Sensei Life Skills & Education by SAARK Education Pvt. Ltd.! These terms and conditions ("Terms", "Terms and Conditions") govern your use of our website located at sensei.org.in (together with its subdomains and any mobile application, the "Website").',
        "By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Website.",
      ],
    },
    {
      heading: "Conditions of Use",
      content: [
        "You must be at least [Age Limit] years old to access or use the Website. By accessing or using the Website, you warrant and represent that you are at least [Age Limit] years old and of legal capacity to enter into this agreement.",
        "Our Website may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.",
      ],
    },
    {
      heading: "Intellectual Property",
      content: [
        "The Website and its entire contents, features, and functionality (including but not limited to all information, software, code, designs, graphics, logos, and trademarks) are owned by [Your Name] or its licensors.",
        "These Terms do not grant you any right, title, or interest in the Website or its contents.",
      ],
    },

    {
      heading: "User Conduct",
      content: [
        "You may not use the Website for any purpose that is unlawful or violates these Terms.",
        {
          heading: "You agree not to:",
          content: [
            "Violate any applicable laws or regulations.",
            "Infringe upon the rights of others, including intellectual property rights.",
            "Transmit any harmful or malicious code, such as viruses or worms.",
            "Interfere with or disrupt the Website or any servers or networks connected to the Website.",
            "Use the Website for any unauthorized commercial purpose.",
          ],
        },
      ],
    },
    {
      heading: "Disclaimer",
      content: [
        'The Website is provided "as is" and "as available" without any warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.',
        "We do not warrant that the Website will be uninterrupted, secure, or error-free.",
        "We do not warrant that the results that may be obtained from the use of the Website will be accurate or reliable.",
      ],
    },
    {
      heading: "Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to your use of the Website.",
      ],
    },
    {
      heading: "Termination",
      content: [
        "We may terminate or suspend your access to the Website at any time, without notice or reason.",
      ],
    },
    {
      heading: "Governing Law",
      content: [
        "These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
      ],
    },
    {
      heading: "Entire Agreement",
      content: [
        "These Terms constitute the entire agreement between you and us regarding your use of the Website.",
      ],
    },
    {
      heading: "Changes to the Terms",
      content: [
        "We reserve the right to modify these Terms at any time without prior notice.",
      ],
    },
    {
      heading: "Contact Us",
      content: [
        "If you have any questions about these Terms, please contact us at connect@sensei.org.in.",
      ],
    },
  ];
  return (
    <div className="container mx-auto p-4 py-5 md:py-10">
      <h1 className="h1 text-grad mb-5 md:mb-10">Terms and Conditions</h1>
      <ol className="flex list-inside list-decimal flex-col gap-4 md:gap-6">
        {TC.map((t, index) => (
          <React.Fragment key={index}>
            <li className="h4 font-bold text-secondary">{t.heading}</li>
            <ul className="flex list-inside list-disc flex-col gap-2 text-black/70">
              {t?.content.map((c, index) => (
                <React.Fragment key={index}>
                  <li className="h5">
                    {typeof c === "object" ? c.heading : c}
                  </li>
                  {c?.content && (
                    <ul className="ml-3 flex list-inside list-disc flex-col gap-1 md:ml-5">
                      {c.content.map((cc, index) => (
                        <li key={index} className="h5">
                          {cc}
                        </li>
                      ))}
                    </ul>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </ol>
    </div>
  );
};

export default Page;
