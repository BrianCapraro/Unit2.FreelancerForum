const freelancers = [
  { name: "Dr. Slice", price: 30, occupation: "programmer" },
  { name: "Dr. Pressure", price: 75, occupation: "contractor" },
  { name: "Prof. Possibility", price: 50, occupation: "teacher" },
  { name: "Prof. Prism", price: 61, occupation: "contractor" },
  { name: "Dr. Impulse", price: 44, occupation: "driving instructor" },
  { name: "Prof. Spark", price: 83, occupation: "programmer" },
  { name: "Dr. Wire", price: 57, occupation: "electrician" },
  { name: "Prof. Goose", price: 72, occupation: "pilot" },
];

const displayedFreelancers = []; // Initialize an empty array

function extractData(freelancers) {
  const names = [];
  const prices = [];
  const occupations = [];

  freelancers.forEach((freelancer) => {
    names.push(freelancer.name);
    prices.push(freelancer.price);
    occupations.push(freelancer.occupation);
  });

  return {
    names,
    prices,
    occupations,
  };
}

const freelancerData = extractData(freelancers);

function render(freelancers) {
  console.log("Freelancer Data:");
  freelancers.forEach((freelancer) => {
    console.log(
      `Name: ${freelancer.name}, Price: $${freelancer.price}, Occupation: ${freelancer.occupation}`
    );
  });
}

// Call the function to render the initial data
render(freelancers);

function generateRandomFreelancer() {
  const randomIndex = Math.floor(Math.random() * freelancers.length);
  const randomFreelancer = freelancers[randomIndex];
  return randomFreelancer;
}

function displayRandomFreelancer() {
  const randomFreelancer = generateRandomFreelancer();
  console.log(randomFreelancer);

  if (displayedFreelancers.length >= 5) {
    clearInterval(intervalId);
  } else {
    displayedFreelancers.push(randomFreelancer);
    // Calculate and display the updated average starting price
    const updatedAveragePrice =
      calculateAverageStartingPrice(displayedFreelancers).toFixed(2);
    console.log("Updated Average Starting Price:", updatedAveragePrice);

    // Update the HTML elements with the data
    updateFreelancerData(randomFreelancer);
    updateAverageStartingPrice(updatedAveragePrice);
  }
}

function calculateAverageStartingPrice(freelancers) {
  // Calculate the average starting price here
  // You need to implement this function
}

function updateFreelancerData(freelancer) {
  const freelancerDataDiv = document.getElementById("freelancerData");
  const freelancerInfo = `Name: ${freelancer.name}, Price: $${freelancer.price}, Occupation: ${freelancer.occupation}`;
  const p = document.createElement("p");
  p.textContent = freelancerInfo;
  freelancerDataDiv.appendChild(p);
}

function updateAverageStartingPrice(averagePrice) {
  const averagePriceDiv = document.getElementById("averageStartingPrice");
  averagePriceDiv.textContent = `Updated Average Starting Price: $${averagePrice}`;
}
