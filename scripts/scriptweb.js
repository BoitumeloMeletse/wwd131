// Destination data
const destinations = [
  {
    id: 1,
    name: "Cape Town",
    description: "Discover the beauty of Table Mountain and the vibrant culture of the Mother City.",
    image: "images/Cape Town.jpg",
  },
  {
    id: 2,
    name: "Kruger National Park",
    description: "Experience the thrill of a safari and spot the Big Five in their natural habitat.",
    image: "images/Kruger National Park.jpg",
  },
  {
    id: 3,
    name: "Garden Route",
    description: "Drive along the scenic coastal route and explore charming towns and pristine beaches.",
    image: "images/Garden Route.jpg",
  },
  {
    id: 4,
    name: "Drakensberg Mountains",
    description: "Hike through breathtaking landscapes and discover ancient rock art.",
    image: "images/Drakensberg Mountains.jpg",
  },
  {
    id: 5,
    name: "Soweto",
    description: "Immerse yourself in the rich history and vibrant culture of this iconic township.",
    image: "images/Soweto.jpg",
  },
  {
    id: 6,
    name: "Blyde River Canyon",
    description: "Marvel at one of the largest canyons in the world and its stunning natural wonders.",
    image: "images/Blyde River Canyon.jpg",
  },
]

// Function to create destination cards
function createDestinationCard(destination) {
  const card = document.createElement("div")
  card.className = "destination-card"
  card.innerHTML = `
        <img src="${destination.image}" alt="${destination.name}" loading="lazy">
        <div class="destination-card-content">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <a href="#" class="learn-more-button">Learn More</a>
        </div>
    `
  return card
}

// Function to populate destination grids
function populateDestinations(containerId, destinationsToShow) {
  const container = document.getElementById(containerId)
  if (container) {
    destinationsToShow.forEach((destination) => {
      container.appendChild(createDestinationCard(destination))
    })
  }
}

// Populate top destinations on the home page
populateDestinations("top-destinations", destinations.slice(0, 3))

// Populate all destinations on the destinations page
populateDestinations("all-destinations", destinations)

// Handle contact form submission
const contactForm = document.getElementById("contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(contactForm)
    const formObject = Object.fromEntries(formData)

    // Store form data in localStorage
    localStorage.setItem("lastContactSubmission", JSON.stringify(formObject))

    // Show confirmation message
    alert("Thank you for your message! We will get back to you soon.")

    // Reset form
    contactForm.reset()
  })
}

// Lazy loading images
document.addEventListener("DOMContentLoaded", () => {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"))

  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target
          lazyImage.src = lazyImage.dataset.src
          lazyImage.classList.remove("lazy")
          lazyImageObserver.unobserve(lazyImage)
        }
      })
    })

    lazyImages.forEach((lazyImage) => {
      lazyImageObserver.observe(lazyImage)
    })
  }
})

