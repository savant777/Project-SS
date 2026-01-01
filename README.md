# Project-SS: The Secret Service Website

<p align="center">
  <img src="https://i.imgur.com/cKGMjug.png" width="800">
  <br>
  <a href="https://savant777.github.io/Project-SS/" target="_blank"><strong>🚀 Live Preview</strong></a>
</p>

**Project-SS** is a responsive, interactive web portal designed for a Role-Playing community. It serves as a centralized hub for lore, game mechanics, and character progression data, featuring a "Teal Neon" futuristic aesthetic.

---

## 🛠️ Technologies Used

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> 
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> 
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> 
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" /> 
  <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white"> 
  <img src="https://img.shields.io/badge/JSON-323330?style=for-the-badge&logo=json&logoColor=white" />
</p>

---

## 🌟 Key Features

- **Data-Driven UI:** Dynamically fetches and renders complex character class and NPC data from JSON files using Vanilla JavaScript.
- **Responsive Design:** A seamless user experience across all devices, built with a custom CSS "Cyberpunk" theme and Bootstrap 5.
- **State Navigation:** Implemented previous/next page logic for smooth browsing of character classes and quest details.
- **Interactive Elements:** Quest acceptance alerts and dynamic content injection based on user selection.

---

## 🧠 Technical Challenges & Solutions

**The Challenge:** The community has a vast amount of intricate data (Stats, Rules, Lore) with varying structures for each character class. Statically coding every page would be inefficient and hard to maintain.

**The Solution:** I designed a specialized **JSON Schema** to standardize the data. I then developed a **Dynamic Content Loader** in JavaScript that parses these JSON files and injects the information into the DOM based on the current context. This approach mimics a "Single Page Application" feel within a static multi-page structure.

---

## 🚀 Future Roadmap: Transitioning to a Dynamic System

While current version serves as a comprehensive static guide, I plan to evolve **Project-SS** into a fully dynamic platform:

- **Integrated Character Management:** Replace Google Forms with a built-in **User Registration & Authentication** system.
- **Account-Bound Progression:** Link character data to user accounts, allowing players to track their own stats and equipment.
- **Interactive Quest Engine:** Implement a backend to track quest status (e.g., "Accepted," "In Progress," "Completed") directly tied to the user's profile.
- **Digital Inventory (Stockpile):** Create a personal item management page where users can view and manage their character's assets in real-time.
- **Admin Dashboard:** Develop a secure interface for community managers to update lore, quests, and NPC data without modifying the source code.

---

## 📂 Project Structure

- **HTML:** Semantic structure for rules, status info, quest boards, and agent profiles.
- **CSS (`style.css`):** Custom styling integrated with Bootstrap to achieve a neon-futuristic UI.
- **JavaScript (`script.js`):** Core logic for data fetching, DOM manipulation, and UI interactions.
- **JSON Data:** Centralized data storage for character classes and NPC agents.

---

## 📸 Image Preview

<details>
<summary>Click to view screenshots</summary>
<br>
<img src="https://i.imgur.com/Voa4h3m.png">
<img src="https://i.imgur.com/HIZEbEv.png">
<img src="https://i.imgur.com/sUz3yow.png">
<img src="https://i.imgur.com/ufbEfXg.png">
<img src="https://i.imgur.com/h4dmWmb.png">
<img src="https://i.imgur.com/Pnoda78.png">
<img src="https://i.imgur.com/c7ibX1Y.png">
<img src="https://i.imgur.com/uDtsBSx.png">
</details>

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/savant777/Project-SS.git
   ```
2. Open `index.html` in your web browser or use VS Code Live Server.
