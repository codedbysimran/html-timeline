export interface Festival {
    month: string;   // e.g., "January"
    name: string;    // e.g., "Makar Sankranti"
    desc: string;    // description
  }
  
  export const festivals: Festival[] = [
    { month: "January",   name: "Makar Sankranti",  desc: "Celebrated across different states, marking the conclusion of long winter nights." },
    { month: "February",  name: "Vasant Panchami",  desc: "Dedicated to Goddess Saraswati, the goddess of wisdom, education, art and culture." },
    { month: "March",     name: "Holi",             desc: "The festival of colors." },
    { month: "April",     name: "Ugadi",            desc: "The Telugu and Kannada New Year." },
    { month: "May",       name: "Eid al-Fitr",      desc: "Celebrates the end of Ramadan, the Islamic holy month of fasting." },
    { month: "June",      name: "Eid al-Adha",      desc: "Also known as Bakrid, a celebration of sacrifice and faith." },
    { month: "July",      name: "Guru Purnima",     desc: "Celebrated to honour one's chosen spiritual teachers or leaders." },
    { month: "August",    name: "Raksha Bandhan",   desc: "Celebrates the bond between brothers and sisters." },
    { month: "September", name: "Ganesh Chaturthi", desc: "Birth of Lord Ganesha, especially significant in Maharashtra." },
    { month: "October",   name: "Dussehra",         desc: "Victory of good over evil, culmination of Navratri." },
    { month: "November",  name: "Diwali",           desc: "Festival of lights; victory of light over darkness; celebrated by Hindus, Sikhs, and Jains." },
    { month: "December",  name: "Christmas",        desc: "Birth of Jesus Christ, widely celebrated across India." },
  ];