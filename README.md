📊 Data Visualization App with Next.js 15

This project is a full-featured data visualization application built with Next.js 15. It connects to a FastAPI backend, fetches data, and provides a rich interface for filtering, sorting, visualizing, and submitting data.

🚀 Features

✅ Backend Integration
- Connects to the provided FastAPI backend.
- Fetches data from the `/data/tips` endpoint.

 📥 Data Fetching
- Loading spinner while data is being fetched.
- Displays error messages on failure.

 📊 Data Display
- Responsive HTML table with all dataset columns.
- Adapts to different screen sizes.

 📈 Visualizations (using Chart.js)
- **Scatter Plot**: Total bill vs. tip.
- **Bar Chart**: Average tip per day of the week.

 🔍 Filtering
Filters update both the table and the charts in real-time:
- By Sex (Male / Female)
- By Smoker (Yes / No)
- By Day of Week
- By Time (Lunch / Dinner)
- By Total Bill, Tip Amount, and Party Size (Range Sliders)

🔃 Sorting
- Click on any column header to sort.
- Toggle ascending/descending order.
- Sort indicators included.

 📤 Send Filtered Data
- “Submit Filtered Data” button sends current filter and sort state to the backend.
- Displays success or error messages based on API response.

 💅 User Interface
- Built with **Tailwind CSS**.
- Clean, modern, and fully responsive design.
- Mobile-friendly layout and intuitive controls.

🛠️ Tech Stack

- Frontend: Next.js 15, React, Tailwind CSS
- Charts: Chart.js
- Backend: FastAPI (external)

 📦 Getting Started

 1. Clone the repo
```bash
git clone https://github.com/vickyrajput5/datavisualization.git
cd datavisualization
```

 2. Install dependencies
```bash
npm install
```

 3. Run the development server
```bash
npm run dev
```

 4. Make sure the backend is running
Ensure your FastAPI backend is up and accessible at the expected endpoint.
