# Praxis Website - German Medical Practice

A modern, responsive website for a German medical practice (Praxis) built with React, TypeScript, and Vite.

## Features

- **German Language Interface**: Complete German localization for medical practice
- **Responsive Header**: Logo space, navigation menu, and appointment booking button
- **Location-based Booking**: Dropdown menu with two practice locations (Dr. med. Assad Al Kadi & Dr. Hazem Al Kadi)
- **Modern Design**: Clean, professional medical practice theme
- **Appointment Booking**: Dedicated booking pages for each location
- **Routing**: React Router for seamless navigation

## Components

- **Header**: Navigation with logo space and appointment booking dropdown
- **HomePage**: Welcome page with practice information and features
- **AppointmentBooking**: Location-specific booking forms

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Open your browser to the displayed local URL

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header component
│   └── Header.css          # Header styles
├── pages/
│   ├── HomePage.tsx        # Main homepage
│   ├── HomePage.css        # Homepage styles
│   ├── AppointmentBooking.tsx  # Booking form page
│   └── AppointmentBooking.css  # Booking page styles
├── App.tsx                 # Main app with routing
└── App.css                 # Global styles
```

## Technologies Used

- React 19
- TypeScript
- Vite
- React Router DOM
- CSS3 with modern features

## Routes

- `/` - Homepage with practice information
- `/termin-buchung/stadtmitte` - Booking page for Stadtmitte location
- `/termin-buchung/nord` - Booking page for Nord location

## Features Overview

### Header Navigation

- Logo placeholder on the left side
- Navigation menu with German labels (Startseite, Über uns, Leistungen, Team, Kontakt)
- "Termin buchen" (Book Appointment) button on the right with dropdown for location selection

### Homepage

- Hero section with welcome message
- Features section highlighting practice benefits
- Location cards with direct booking buttons
- Contact information section

### Appointment Booking

- Location-specific booking forms
- Contact details for each location
- Opening hours display
- Professional form with validation
