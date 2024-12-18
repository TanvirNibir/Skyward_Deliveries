# Skyward Deliveries

Skyward Deliveries is a logistics management platform designed to streamline delivery operations by integrating efficient routing, real-time tracking, and a user-friendly interface. This project leverages modern technologies to ensure reliability, scalability, and ease of use.

---

## Features

- **Real-Time Tracking:** Track deliveries in real-time with precise location updates.
- **Efficient Route Planning:** Minimize travel time and fuel costs with smart routing algorithms.
- **User Management:** Role-based access control for administrators, drivers, and customers.
- **Delivery Status Updates:** Automated notifications for delivery progress.
- **Data Analytics:** Visualize delivery metrics and operational performance.

---

## Game Integration

Skyward Deliveries incorporates elements of a flight simulator game, combining logistics management with engaging gameplay. The game encourages strategic planning through delivery tasks, random events, and airplane upgrades to optimize operations.

### Game Features

1. **Delivery Tasks:** Players complete tasks to earn money and fuel for airplane upgrades.
2. **Fuel Management:** Dice rolls determine fuel points for delivery routes, integrating strategy and chance.
3. **Random Events:** Positive and negative events affect player progress, simulating real-world challenges.
4. **Airplane Upgrades:** Improve efficiency and capacity by upgrading airplanes.
5. **Interactive Map:** Players navigate an interactive map of cities and airports for deliveries.

---

## Tech Stack

- **Frontend:**
  - React.js
  - Tailwind CSS for responsive UI design

- **Backend:**
  - Node.js with Express.js
  - MongoDB for database management
  - Python backend for game logic and API communication

- **Other Tools and Libraries:**
  - Mapbox API for geolocation and map integration
  - JWT for secure authentication
  - Socket.IO for real-time communication

---

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or access to a cloud instance
- API key for Mapbox (create one at [Mapbox](https://www.mapbox.com))
- Python environment for backend integration

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/TanvirNibir/Skyward_Deliveries.git
   cd Skyward_Deliveries
   ```

2. Install dependencies:
   ```bash
   npm install
   cd client && npm install
   ```

3. Set up Python backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file in the root directory with the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_database_uri
   JWT_SECRET=your_jwt_secret
   MAPBOX_API_KEY=your_mapbox_api_key
   ```

5. Start the application:
   ```bash
   # Run the backend
   npm start

   # Run the frontend (in a separate terminal)
   cd client && npm start

   # Run the Python backend for game logic
   python backend.py
   ```

6. Access the app in your browser:
   ```
   http://localhost:3000
   ```

---

## Usage

1. **Login:** Use admin credentials to manage users and deliveries.
2. **Create Deliveries:** Add delivery orders with sender, recipient, and package details.
3. **Track Deliveries:** View real-time locations of drivers and delivery progress.
4. **Analyze Data:** Use the analytics dashboard to monitor performance.
5. **Engage in Gameplay:** Use the browser-based interface to complete delivery tasks, manage fuel, and upgrade airplanes.

---

## Quality Requirements

- **Performance:**
  - Fetching delivery and airport data must take no more than 2 seconds.
- **Usability:**
  - Immediate feedback for actions such as rolling dice, selecting tasks, and upgrading airplanes.
- **Sustainability:**
  - Promotes eco-friendly decisions, rewarding upgrades to fuel-efficient airplanes.

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request on GitHub.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Acknowledgments

- [Mapbox](https://www.mapbox.com) for providing mapping and geolocation services.
- Open-source contributors for the tools and libraries used in this project.

---

## Contact

For any inquiries, feel free to reach out:

- **Author:** Tanvir Nibir
- **GitHub:** [TanvirNibir](https://github.com/TanvirNibir)
- **Email:** tanvir.nibir@metropolia.fi
