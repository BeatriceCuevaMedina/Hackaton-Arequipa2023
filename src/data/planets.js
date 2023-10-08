export const solarSystem = {
  stars: [
    {
      name: "Sun",
      type: "Star",
      diameter: "1.391 million kilometers",
      distanceFromEarth: "148.7 million kilometers",
      description:
        "A star is a hot, glowing ball of gas. When you look up in the night sky, you can see countless twinkling stars. Can you see any stars during the daytime? Of course! The light of daytime comes from our closest star: the Sun.",
    },
  ],
  planets: [
    {
      name: "Mercury",
      type: "Rocky Planet",
      diameter: "1,516 miles (2,440 kilometers)",
      distanceFromSun: "36 million miles (58 million kilometers)",
      description:
        "Mercury is the smallest planet in our solar system. It’s just a little bigger than Earth’s moon. It is the closest planet to the sun, but it’s actually not the hottest. Venus is hotter. Along with Venus, Earth, and Mars, Mercury is one of the rocky planets. It has a solid surface that is covered with craters. It has no atmosphere, and it doesn’t have any moons. Mercury likes to keep things simple. This small planet spins around slowly compared to Earth, so one day lasts a long time. Mercury takes 59 Earth days to make one full rotation. A year on Mercury goes by fast. Because it’s the closest planet to the sun, it doesn’t take very long to go all the way around. It completes one revolution around the sun in just 88 Earth days. If you lived on Mercury, you’d have a birthday every three months!",
      moons: [],
      places: [
        "Explore Mercury's rocky terrain, filled with craters and unique geological formations.",
        "Visit the massive Caloris Basin, known for its concentric rings and unusual 'weird terrain.'",
        "Discover hidden water ice in permanently shadowed craters at Mercury's poles.",
      ],
    },
    {
      name: "Venus",
      type: "Planet",
      diameter: "7,521 miles (12,104 kilometers)",
      distanceFromSun: "108.2 million kilometers",
      description:
        "Even though Venus isn't the closest planet to the Sun, it is still the hottest. It has a thick atmosphere full of the greenhouse gas carbon dioxide and clouds made of sulfuric acid. The gas traps heat and keeps Venus toasty warm. In fact, it's so hot on Venus, metals like lead would be puddles of melted liquid. Venus looks like a very active planet. It has mountains and volcanoes. Venus is similar in size to Earth. Earth is just a little bit bigger.",
      moons: [],
      places: [
        "Explore Venus' vast lava-covered plains with unique features like pancake domes and massive volcanic constructs.",
        "Venture into rugged highland regions with rift valleys and tesserae, offering curious geological wonders.",
        "Discover colossal, dormant volcanoes like Maat Mons, showcasing the planet's fiery history.",
      ],
    },
    {
      name: "Earth",
      type: "Planet",
      diameter: "3,959 miles (6,371 kilometers)",
      distanceFromSun: "93 million miles (150 million kilometers)",
      description:
        "Our home planet Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. Earth is special because it is an ocean planet. Water covers 70% of Earth's surface. Our atmosphere is made mostly of nitrogen and has plenty of oxygen for us to breathe. The atmosphere also protects us from incoming meteoroids, most of which break up in our atmosphere before they can strike the surface as meteorites. Since we live here, you might think we know all there is to know about Earth. Not at all, actually! We have a lot we can learn about our home planet. Right now, there are many satellites orbiting Earth taking pictures and measurements. This is how we can learn more about weather, oceans, soil, climate change, and many other important topics.",
      moons: ["Moon"],
      places: [
        "Explore Earth's diverse landscapes, from towering mountains and lush forests to expansive deserts and picturesque coastlines.",
        "Visit iconic natural wonders such as the Grand Canyon, the Great Barrier Reef, and the Amazon Rainforest, showcasing the planet's beauty and biodiversity.",
        "Dive into Earth's vast oceans to witness stunning marine life, coral reefs, and underwater ecosystems, or relax on pristine beaches with crystal-clear waters.",
      ],
    },
    {
      name: "Mars",
      type: "Planet",
      diameter: "2,106 miles (3,390 kilometers)",
      distanceFromSun: "142 million miles (228 million kilometers)",
      description:
        "Mars is a cold desert world. It is half the size of Earth. Mars is sometimes called the Red Planet. It's red because of rusty iron in the ground. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon. There are signs of ancient floods on Mars, but now water mostly exists in icy dirt and thin clouds. On some Martian hillsides, there is evidence of liquid salty water in the ground. Scientists want to know if Mars may have had living things in the past. They also want to know if Mars could support life now or in the future.",
      moons: ["Phobos", "Deimos"],
      places: [
        "Explore the striking Martian landscape, featuring vast deserts, rugged canyons, and towering volcanoes.",
        "Visit Olympus Mons, the largest volcano in the solar system, which rises dramatically above the Martian surface.",
        "Marvel at Valles Marineris, a canyon system on Mars that dwarfs the Grand Canyon on Earth.",
      ],
    },
    {
      name: "Jupiter",
      type: "Planet",
      diameter: "43,440.7 miles (69,911 kilometers)",
      distanceFromSun: "484 million miles (778 million kilometers)",
      description:
        "Jupiter is the biggest planet in our solar system. It's similar to a star, but it never got massive enough to start burning. It is covered in swirling cloud stripes. It has big storms like the Great Red Spot, which has been going for hundreds of years. Jupiter is a gas giant and doesn't have a solid surface, but it may have a solid inner core about the size of Earth. Jupiter also has rings, but they're too faint to see very well.",
      moons: ["Io", "Europa", "Ganymede", "Callisto"],
      places: [
        "Witness the iconic Great Red Spot, a massive storm on Jupiter that has raged for centuries, and learn about its mysteries.",
        "Learn about Jupiter's faint ring system, composed of tiny, dark particles, and compare it to Saturn's more prominent rings.",
        "Discover the dazzling auroras that occur near Jupiter's poles, created by interactions with charged particles from its magnetic environment.",
      ],
    },
    {
      name: "Saturn",
      type: "Planet",
      diameter: "36,183.7 miles (58,232 kilometers)",
      distanceFromSun: "886 million miles (1.4 billion kilometers)",
      description:
        "Saturn isn’t the only planet to have rings, but it definitely has the most beautiful ones. The rings we see are made of groups of tiny ringlets that surround Saturn. They’re made of chunks of ice and rock. Like Jupiter, Saturn is mostly a ball of hydrogen and helium. When Galileo Galilei saw Saturn through a telescope in the 1600s, he wasn't sure what he was seeing. At first he thought he was looking at three planets, or a planet with handles. Now we know those 'handles' turned out to be the rings of Saturn.",
      moons: ["Titan", "Enceladus", "Rhea", "Dione", "Hyperion", "others"],
      places: [
        "Marvel at Saturn's iconic ring system, consisting of dazzling and intricate ring structures made of ice and rock particles.",
        "Discover Saturn's diverse family of moons, each with its unique features and intriguing names, including Enceladus, Mimas, and Iapetus.",
        "Witness the mysterious hexagonal storm at Saturn's north pole, a unique and persistent atmospheric feature.",
      ],
    },
    {
      name: "Uranus",
      type: "Planet",
      diameter: "15,759.2 miles (25,362 kilometers)",
      distanceFromSun: "1.8 billion miles (2.9 billion kilometers)",
      description:
        "Uranus is made of water, methane, and ammonia fluids above a small rocky center. Its atmosphere is made of hydrogen and helium like Jupiter and Saturn, but it also has methane. The methane makes Uranus blue. Uranus also has faint rings. The inner rings are narrow and dark. The outer rings are brightly colored and easier to see. Like Venus, Uranus rotates in the opposite direction as most other planets. And unlike any other planet, Uranus rotates on its side.",
      moons: ["Miranda", "Ariel", "Titania", "others"],
      places: [
        "Learn about Uranus' atmosphere rich in methane, which gives the planet its pale blue-green color and unique weather patterns.",
        "Discover Uranus' family of 27 known moons, including Miranda, Ariel, and Titania, each with its distinct characteristics and mysteries.",
        "Observe Uranus' faint ring system, composed of dark, narrow rings and learn about their origin and composition.",
      ],
    },
    {
      name: "Neptune",
      type: "Planet",
      diameter: "15,299.4 miles (24,622 kilometers)",
      distanceFromSun: "2.8 billion miles (4.5 billion kilometers)",
      description:
        "Neptune is dark, cold, and very windy. It's the last of the planets in our solar system. It's more than 30 times as far from the sun as Earth is. Neptune is very similar to Uranus. It's made of a thick fog of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen, helium, and methane. The methane gives Neptune the same blue color as Uranus. Neptune has six rings, but they're very hard to see.",
      moons: ["Triton", "others"],
      places: [
        "Discover Triton, Neptune's largest moon, and its unique features, including cryovolcanoes and a retrograde orbit.",
        "Observe Neptune's faint ring system, composed of dark, narrow arcs, and explore their origin and composition.",
        "Learn about Neptune's unique magnetosphere, which exhibits complex interactions with the solar wind and the planet's moons.",
      ],
    },
  ],
  moons: [
    {
      name: "Moon",
      type: "Moon",
      diameter: "3,474 kilometers",
      distanceFromPlanet: "384,400 kilometers (from Earth)",
      description:
        "Earth's natural satellite, with a significant impact on Earth's tides and more.",
      places: [],
      moons: [],
    },
    // You can add more moons here...
  ],
  otherObjects: [
    {
      name: "International Space Station (ISS)",
      type: "Space Station",
      description:
        "A habitable space station orbiting Earth for scientific research and international cooperation.",
      places: [],
      moons: [],
      diameter: "",
      distanceFromSun: "",
    },
    {
      name: "Asteroids",
      type: "Minor Bodies",
      description:
        "Small rocky objects that orbit the Sun, often found in the asteroid belt.",
      places: [],
      moons: [],
      diameter: "",
      distanceFromSun: "",
    },
    // You can add other objects here...
  ],
};
