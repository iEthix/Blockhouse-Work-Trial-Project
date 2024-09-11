# Blockhouse Full Stack Data Visualization

## Introduction

Blockhouse Full Stack Data Visualization is a full-stack web application designed to visualize data entries through various interactive charts. This project integrates a Next.js frontend with a Django REST API backend, each serving its role to display and provide data respectively.

## Setup and Running the Application

### Prerequisites

To run this project, you will need:

- Node.js (version 12.x or higher)
- Python (version 3.8 or higher)
- npm (typically comes with Node.js)
- Pip for Python package installation

### Backend Setup

The backend API is built with Django and Django REST Framework. To get it running:

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
4. Run database migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the Django development server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

The frontend is developed with Next.js. To set it up:

1. Navigate to the frontend directory:
   ```bash
   cd blockhouse-frontend
   ```
2. Install the necessary npm packages:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Libraries and Tools Used

- **Backend**:
  - Django: A high-level Python web framework that encourages rapid development and clean, pragmatic design.
  - Django REST Framework: A powerful toolkit for building Web APIs in Django.
- **Frontend**:
  - Next.js: A React framework for production that provides server-side rendering and generating static websites.
  - Chart.js: Simple yet flexible JavaScript charting for designers & developers.
  - Axios: A promise-based HTTP client for the browser and Node.js.

## Approach and Thought Process

The project was divided into two main components:

- **Backend**: Designed to handle API requests and serve data in a structured JSON format. Django was chosen for its excellent ORM and security features, while Django REST Framework simplified the API creation.
- **Frontend**: Developed to consume APIs and render the data using charts. Next.js was selected for its efficiency in handling server-side rendered applications and its ease of integrating with APIs. Chart.js was used for its simplicity in creating interactive charts.

### Data Structures

Data is hardcoded in the backend to simulate the response from a database, ensuring the frontend can develop independently from backend services.

## Running the Application

Ensure both the frontend and backend are running as per the setup instructions above, then visit `http://localhost:3000` to view the application.

## Conclusion

This README covers the basic setup and running of the Blockhouse Video Analytics application. For any further questions or contributions, please refer to the contact information provided in the source code repositories.
