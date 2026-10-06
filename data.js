// Sample student records. Add or edit objects here and the page updates itself.
const students = [
  {
    id: 1,
    name: "Ayesha Khan",
    email: "ayesha.khan@example.com",
    department: "Engineering",
    course: "Artificial Intelligence",
    mobile: "0300 1234567",
    status: "Accepted",
    description: "Strong background in mathematics and Python. Completed two machine learning projects during her first two years.",
    image: "assets/images/ref.png"
  },
  {
    id: 2,
    name: "Hamza Ali",
    email: "hamza.ali@example.com",
    department: "Business",
    course: "Data Science",
    mobile: "0311 7654321",
    status: "Pending",
    description: "Interested in business analytics. Waiting on transcript verification.",
    image: "assets/images/not-found.png"   // broken on purpose -> shows placeholder
  },
  {
    id: 3,
    name: "Sara Ahmed",
    email: "sara.ahmed@example.com",
    department: "Tourism",
    course: "English",
    mobile: "0321 1112223",
    status: "Rejected",
    description: "Application incomplete. Missing documents were not submitted before the deadline.",
    image: ""                               // missing on purpose -> shows placeholder
  },
  {
    id: 4,
    name: "Bilal Raza",
    email: "bilal.raza@example.com",
    department: "Engineering",
    course: "Web development",
    mobile: "0333 4445556",
    status: "Accepted",
    description: "Built several websites for local businesses. Strong portfolio.",
    image: "assets/images/ref.png"
  },
  {
    id: 5,
    name: "Fatima Noor",
    email: "fatima.noor@example.com",
    department: "Media",
    course: "Mobile App Development",
    mobile: "0345 9998887",
    status: "Pending",
    description: "Wants to combine media design with mobile apps. Interview scheduled next week.",
    image: ""
  },
  {
    id: 6,
    name: "Usman Tariq",
    email: "usman.tariq@example.com",
    department: "Aviation",
    course: "Data Science",
    mobile: "0301 5556667",
    status: "Rejected",
    description: "Did not meet the minimum grade requirement for the selected department.",
    image: "assets/images/ref.png"
  },
  {
    id: 7,
    name: "Zainab Siddiqui",
    email: "zainab.siddiqui@example.com",
    department: "Engineering",
    course: "Machine Learning",
    mobile: "0312 3334445",
    status: "Accepted",
    description: "Won a regional hackathon with a computer vision project.",
    image: "assets/images/missing-photo.jpg"
  },
  {
    id: 8,
    name: "Ali Hassan",
    email: "ali.hassan@example.com",
    department: "Business",
    course: "English",
    mobile: "0322 8887776",
    status: "Pending",
    description: "Strong communication skills. Still waiting for reference letters.",
    image: ""
  },
  // Edge case: very long name, email and description to test the layout
  {
    id: 9,
    name: "Muhammad Abdullah Ibn Abdul Rahman Al-Farooqui Sahib the Third of Rawalpindi Cantonment",
    email: "muhammad.abdullah.ibn.abdul.rahman.alfarooqui.sahib.the.third@averyveryverylongdomainname-example.com",
    department: "Engineering",
    course: "Artificial Intelligence",
    mobile: "0300 0000000",
    status: "Pending",
    description: "This is a deliberately very long description used to test the card layout. It keeps going and going to make sure that the text never pushes the card wider than the screen, never overlaps other cards, and gets cut off neatly after a few lines instead of making one card huge compared to the others. Supercalifragilisticexpialidocious_and_a_very_long_word_without_any_spaces_to_test_wrapping_behaviour.",
    image: ""
  },
  {
    id: 10,
    name: "Mariam Javed",
    email: "mariam.javed@example.com",
    department: "Tourism",
    course: "Web development",
    mobile: "0334 1239876",
    status: "Accepted",
    description: "Created a tourism booking website as her final school project.",
    image: "assets/images/ref.png"
  }
];
