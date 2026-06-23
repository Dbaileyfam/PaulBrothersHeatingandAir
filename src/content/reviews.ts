export const reviewStats = {
  rating: 5.0,
  totalReviews: 197,
  googleReviews: 197,
} as const;

export const googleReviewsUrl =
  "https://www.google.com/maps/place/Paul+Brother's+Heating+%26+Air/@40.61693,-111.865918,17z/data=!3m1!4b1!4m6!3m5!1s0x87528a4701264c7d:0x39655f75e7a9359e!8m2!3d40.61693!4d-111.865918!16s%2Fg%2F11bzvf11yv";

export const birdeyeReviewsUrl =
  "https://reviews.birdeye.com/paul-brothers-heating-air-165371637392081";

export type ReviewCategory =
  | "ac"
  | "heating"
  | "emergency"
  | "installation"
  | "service";

export type CustomerReview = {
  id: string;
  headline?: string;
  quote: string;
  author: string;
  source: "Google" | "Yelp" | "Customer";
  date?: string;
  categories: ReviewCategory[];
  featured?: boolean;
};

export const customerReviews: CustomerReview[] = [
  {
    id: "shannon-w",
    headline: "Reliable Company",
    quote:
      "We will definitely be using them in the future for any HVAC needs. Great price, reliability, and friendly service are all hard things to find in this day and age.",
    author: "Shannon W.",
    source: "Customer",
    categories: ["service"],
    featured: true,
  },
  {
    id: "stephen-g",
    headline: "Quick Response Time",
    quote:
      "To make them even better we had a small issue on a Sunday and they were there within an hour to take care of it at no charge. Scott and his brother are amazing to work with and I highly recommend them. Couldn't be more pleased!",
    author: "Stephen G.",
    source: "Customer",
    categories: ["emergency", "service"],
    featured: true,
  },
  {
    id: "ryan-k",
    headline: "Friendly Team",
    quote:
      "In short, he was super friendly, professional, and does good work. Will be using Paul Brothers from now on whenever we have furnace/AC/HVAC issues or are in need of service work.",
    author: "Ryan K.",
    source: "Customer",
    categories: ["service"],
    featured: true,
  },
  {
    id: "austin-r",
    headline: "Fair & Honest Pricing",
    quote:
      "He knew exactly what to do, charged me the bare minimum to do it, and my AC has been working great since. I recommend his services highly and without reservation.",
    author: "Austin R.",
    source: "Customer",
    categories: ["ac", "service"],
    featured: true,
  },
  {
    id: "gordon-p",
    headline: "Great Experience",
    quote:
      "HVAC service in the future will only be handled by Paul Brothers. I am recommending them to the HOA of my rental, to all my family and friends, and anyone else that wants quality, honest, and great services.",
    author: "Gordon P.",
    source: "Customer",
    categories: ["service"],
    featured: true,
  },
  {
    id: "sara-b",
    headline: "Awesome Company",
    quote:
      "I appreciated the fact that they didn't try to mansplain anything to me and just show me how they got to the diagnosis just as they would anyone else. Paul Brothers were awesome.",
    author: "Sara B.",
    source: "Customer",
    categories: ["service"],
    featured: true,
  },
  {
    id: "colby-t",
    headline: "Impressive Customer Service",
    quote:
      "If you're looking for reliable and cost-effective repairs look no further. Was able to get them on the same day which was a huge relief since it was 100 degrees when our AC broke.",
    author: "Colby T.",
    source: "Customer",
    categories: ["emergency", "ac"],
  },
  {
    id: "hales",
    headline: "Amazing Customer Service",
    quote:
      "Paul Brothers just installed our new central air unit and we could not be more pleased with the service and quality these guys gave us! They were knowledgeable, professional, personable, and efficient!",
    author: "Hales Family",
    source: "Customer",
    categories: ["installation", "ac"],
  },
  {
    id: "stacey-fearnley",
    quote:
      "Derrick and Scott are amazing. I have used these two brothers for the last 14 years in my personal home, my 3 rentals and in my business. They are fair, have great communication and maybe they only bend over backwards for me but something tells me they bend over backwards for everyone. You will not be disappointed with their services.",
    author: "Stacey Fearnley",
    source: "Google",
    date: "3 weeks ago",
    categories: ["service"],
  },
  {
    id: "linda-sidelko",
    quote:
      "Wonderful experience. Derrick was so knowledgeable. He explained everything and my air conditioner works better than ever. I would give a 10 star if possible.",
    author: "Linda Sidelko",
    source: "Google",
    date: "1 month ago",
    categories: ["ac", "service"],
  },
  {
    id: "paul-g",
    quote:
      "I called this morning at 8:30 A.M. for an AC problem. Scott was here by noon. The temperature was forecast to be 105°F today. It was already 80°F in the house when he got here. Scott diagnosed the problem and got our cooling back on.",
    author: "Paul G.",
    source: "Yelp",
    date: "2 years ago",
    categories: ["emergency", "ac"],
  },
  {
    id: "laura-s",
    quote:
      "Paul Brothers is amazing. Our AC stopped working and they made it work to come out right away to check it out. Derrick did a deep dive into what may have gone wrong and vetted every possible thing until we had real answers.",
    author: "Laura S.",
    source: "Yelp",
    date: "11 months ago",
    categories: ["ac", "emergency"],
  },
  {
    id: "beth-s",
    quote:
      "I called them at 8:30 this morning and they were at my house inspecting our system by 10:30. He was efficient and super patient with all my questions. He identified the issue quickly and had good recommendations for moving forward.",
    author: "Beth S.",
    source: "Yelp",
    date: "2 years ago",
    categories: ["ac", "service"],
  },
  {
    id: "carolyn-l",
    quote:
      "I don't think I can say enough good about this company! When they tell you a window of when they will arrive they keep it, which there's not many service companies that do that.",
    author: "Carolyn L.",
    source: "Yelp",
    date: "2 years ago",
    categories: ["service"],
  },
  {
    id: "julie-p",
    quote:
      "Our air conditioning went out and they came to our house within 5 hours! They identified the problem and solution immediately and got us working right away.",
    author: "Julie P.",
    source: "Yelp",
    date: "2 years ago",
    categories: ["emergency", "ac"],
  },
  {
    id: "christina-c",
    quote:
      "Derrick and Scott are the best in the business! Compassionate, knowledgeable, and absolutely personable. Qualities that are hard to find anywhere.",
    author: "Christina C.",
    source: "Google",
    categories: ["service"],
  },
  {
    id: "bonnie-m",
    quote:
      "I called Paul Bros to come look at my AC/furnace as it was not getting any power and would not turn on. Within 24 hours Derrick was out to my home to diagnose and fix the issue.",
    author: "Bonnie M.",
    source: "Google",
    categories: ["ac", "heating", "emergency"],
  },
  {
    id: "google-trustworthy",
    quote:
      "Great company, very trustworthy and no BS. Have used them a few times and are always very impressed. Scott, Derrick, and the team are fantastic to work with.",
    author: "Google Customer",
    source: "Google",
    categories: ["service"],
  },
  {
    id: "google-ac-options",
    quote:
      "Paul Brothers is incredibly professional, prompt, reliable and trustworthy. They analyzed our broken AC, provided various options, and did not push us into unnecessary work.",
    author: "Google Customer",
    source: "Google",
    categories: ["ac", "service"],
  },
  {
    id: "ductwork-project",
    quote:
      "Paul Brothers helped me complete a project moving my furnace and reworking ductwork. The crew they sent out did a great job and the system runs much better now.",
    author: "Google Customer",
    source: "Google",
    categories: ["heating", "installation"],
  },
  {
    id: "scott-repeat",
    quote:
      "I have used Paul Brothers twice — air conditioning in the summer and just recently for my furnace. Scott has been great both times with excellent customer service.",
    author: "Google Customer",
    source: "Google",
    categories: ["ac", "heating", "service"],
  },
  {
    id: "after-hours-furnace",
    quote:
      "Super impressed with this company! Scott, one of the brothers, came after hours to my home and repaired our furnace that had broken on a cold night.",
    author: "Google Customer",
    source: "Google",
    categories: ["heating", "emergency"],
  },
  {
    id: "furnace-ac-install",
    quote:
      "Paul Brothers installed a furnace and air conditioner. They also installed a smart thermostat. Great price, great service. I will recommend them to everyone I know.",
    author: "Google Customer",
    source: "Google",
    categories: ["installation", "heating", "ac"],
  },
  {
    id: "big-job-experience",
    quote:
      "I can't say enough good things about the Paul Bros. They have an astronomical amount of experience between them. I had a big job I needed done and they handled it professionally from start to finish.",
    author: "Google Customer",
    source: "Google",
    categories: ["installation", "service"],
  },
];

export const featuredReviews = customerReviews.filter((review) => review.featured);
