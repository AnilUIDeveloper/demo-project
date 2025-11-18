const menuData = [
  {
    id: "starter",
    title: "Starter",
    items: [
      {
        id: "chilli-paneer",
        title: "Chilli Paneer",
        image:
          "https://images.unsplash.com/photo-1601050690597-9ab4f0b30fca?q=80&w=1600&auto=format&fit=crop",
        sizes: [
          { key: "half", label: "half" },
          { key: "full", label: "full" },
        ],
        priceMap: { half: 120, full: 200 },
      },
      {
        id: "chicken-tikka",
        title: "Chicken Tikka",
        image:
          "https://images.unsplash.com/photo-1604909052544-0f0d0d6a9409?q=80&w=1600&auto=format&fit=crop",
        sizes: [
          { key: "half", label: "half" },
          { key: "full", label: "full" },
        ],
        priceMap: { half: 170, full: 300 },
      },
      {
        id: "paneer-tikka",
        title: "Paneer Tikka",
        image:
          "https://images.unsplash.com/photo-1526312426976-593c2b0b2304?q=80&w=1600&auto=format&fit=crop",
        sizes: [
          { key: "half", label: "half" },
          { key: "full", label: "full" },
        ],
        priceMap: { half: 150, full: 250 },
      },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    items: [
      {
        id: "chicken-cheese-pizza",
        title: "Chicken Cheese Pizza",
        image:
          "https://images.unsplash.com/photo-1541745537413-b804f0f68786?q=80&w=1600&auto=format&fit=crop",
        sizes: [
          { key: "regular", label: "regular" },
          { key: "large", label: "large" },
        ],
        priceMap: { regular: 120, large: 240 },
      },
      {
        id: "mix-veg-pizza",
        title: "Mix Veg Pizza",
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop",
        sizes: [
          { key: "regular", label: "regular" },
          { key: "large", label: "large" },
        ],
        priceMap: { regular: 200, large: 400 },
      },
    ],
  },
];

export default menuData;
