// Sample data with 29 members and images
const members = [
  {
    name: "Fleur Hassan-Nahoum",
    title: "Co-Founder",
    country: "UAE",
    topic: "Business",
    img: "https://thumbs.dreamstime.com/b/passport-photo-african-american-businessman-passport-photo-african-american-businessman-isolated-white-background-cut-168920819.jpg",
  },
  {
    name: "Dorian Barak",
    title: "Co-Founder",
    country: "Israel",
    topic: "Economy",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Amb. Aviva Raz Shechter",
    title: "Ambassador",
    country: "Israel",
    topic: "Diplomacy",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Aviad Tamir",
    title: "Head of Israel's Economic and Trade Mission to the UAE",
    country: "Israel",
    topic: "Economy",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Jon Medved",
    title: "CEO",
    country: "US",
    topic: "Business",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Amb. Houda Nonoo",
    title: "Ambassador",
    country: "Bahrain",
    topic: "Diplomacy",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Robert Greenway",
    title: "President & Executive Director",
    country: "US",
    topic: "Diplomacy",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Aryeh Lightstone",
    title: "Special Envoy for Economic Normalization",
    country: "Israel",
    topic: "Economy",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Ariella Steinreich",
    title: "Senior Vice President",
    country: "US",
    topic: "Business",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Amb. Amir Hayek",
    title: "Ambassador",
    country: "Israel",
    topic: "Diplomacy",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Amb. Neil Wigan",
    title: "British Ambassador to Israel",
    country: "UK",
    topic: "Diplomacy",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Avi Solomon",
    title: "Blind Runner, Leader of People of Determination",
    country: "Israel",
    topic: "Human Rights",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Jason Isaacson",
    title: "Chief Policy and Political Affairs Officer",
    country: "US",
    topic: "Politics",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Gidon Bromberg",
    title: "Co-Director",
    country: "Israel",
    topic: "Environment",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Tareq Abu Hamed",
    title: "Executive Director",
    country: "Jordan",
    topic: "Technology",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Daphne Richemond Barak",
    title: "Assistant Professor",
    country: "Israel",
    topic: "Education",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Eitan Neishlos",
    title: "Businessman and Philanthropist",
    country: "Israel",
    topic: "Business",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Ahdeya Ahmed Alsayed",
    title: "Journalist and Former Head of the Bahrain Journalists Association",
    country: "Bahrain",
    topic: "Media",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Jon Medved",
    title: "CEO and Founder",
    country: "Israel",
    topic: "Business",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Benjamin Taylor",
    title: "Marketing Operations Manager",
    country: "UAE",
    topic: "Marketing",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Daniel Bernard",
    title: "Founder",
    country: "Israel",
    topic: "Business",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Deepti Ramachandran",
    title: "Former Protocol and Liaison Manager",
    country: "India",
    topic: "Protocol",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Offer Fabian",
    title: "President",
    country: "Israel",
    topic: "Sports",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Shabib A. Bin Shabib",
    title: "CEO",
    country: "UAE",
    topic: "Business",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Alaa’ Al Shimmari",
    title: "Former Head of Strategic Partnerships",
    country: "UAE",
    topic: "Business",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Sivan Cohen Shachari",
    title: "Director",
    country: "Israel",
    topic: "Technology",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Majid Al Sarrah",
    title: "Expert in Public Policy and International Relations",
    country: "Saudi Arabia",
    topic: "Politics",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Hamdi Osman",
    title: "Chairman & CEO",
    country: "UAE",
    topic: "Business",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Salmaan Jaffery",
    title: "Chief Business Development Officer",
    country: "UAE",
    topic: "Finance",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Asher Fredman",
    title: "Director for Israel",
    country: "Israel",
    topic: "Diplomacy",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Tareq Alnuaimi",
    title: "Founder & CEO",
    country: "UAE",
    topic: "Business",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Majed Al Qassimi",
    title: "Director",
    country: "UAE",
    topic: "Technology",
    img: "https://via.placeholder.com/150",
  },
];

// Function to generate member cards dynamically
function generateCards(data) {
  const cardsContainer = document.getElementById("communityCards");
  cardsContainer.innerHTML = ""; // Clear previous cards

  if (data.length === 0) {
    cardsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  data.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${member.img}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p class="title"><strong>${member.title}</strong></p>
      <p class="country">Country: ${member.country}</p>
      <p class="topic">Topic: ${member.topic}</p>
    `;

    cardsContainer.appendChild(card);
  });
}

// Function to filter members based on search input and filters
function filterMembers() {
  const searchName = document.getElementById("searchName").value.toLowerCase();
  const countryFilter = document.getElementById("countryFilter").value;
  const topicFilter = document.getElementById("topicFilter").value;
  const titleFilter = document.getElementById("titleFilter").value;

  const filteredMembers = members.filter((member) => {
    const matchesName = member.name.toLowerCase().includes(searchName);
    const matchesCountry = countryFilter
      ? member.country === countryFilter
      : true;
    const matchesTopic = topicFilter ? member.topic === topicFilter : true;
    const matchesTitle = titleFilter ? member.title === titleFilter : true;

    return matchesName && matchesCountry && matchesTopic && matchesTitle;
  });

  generateCards(filteredMembers);
}

// Event listeners to trigger filtering whenever the user types or selects a filter
document.getElementById("searchName").addEventListener("input", filterMembers);
document
  .getElementById("countryFilter")
  .addEventListener("change", filterMembers);
document
  .getElementById("topicFilter")
  .addEventListener("change", filterMembers);
document
  .getElementById("titleFilter")
  .addEventListener("change", filterMembers);

// Initial card generation when the page loads
generateCards(members);
