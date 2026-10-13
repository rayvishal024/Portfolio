
export const educationData = {
     eyebrow: "EDUCATION & ACHIEVEMENTS",
     heading: "A foundation built through learning.",

     education: [
          {
               id: "btech-cse",
               degree: "B.Tech in Computer Science & Engineering",
               institution: "J B Institute of Technology",
               location: "Dehradun, Uttarakhand",
               period: "2024 – 2027",
               detail: "Currently pursuing",
          },
          {
               id: "diploma-cse",
               degree: "Diploma in Computer Science & Engineering",
               institution: "Government Polytechnic Chapra",
               location: "Chapra, Bihar",
               period: "2021 – 2024",
               detail: "CGPA: 9.03 · Overall: 82.75%",
          },
     ],

     achievements: [
          {
               id: "academic-rank",
               title: "Ranked 1st in all three diploma years",
               description:
                    "Achieved first rank throughout the three-year diploma program.",
          },
          {
               id: "medhavi-protsahan",
               title: "Medhavi Protsahan Yojana",
               description:
                    "Received recognition through the Medhavi Protsahan Yojana.",
          },
          {
               id: "bug-hunting",
               title: "Bug Hunting Competition Winner",
               description:
                    "Won a bug-hunting event, demonstrating practical debugging and problem-solving skills.",
          },
     ],
} as const;
