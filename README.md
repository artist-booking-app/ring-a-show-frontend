# RingAShow

## About

An app that allows you to book artists for small gigs at home or at a specified location. The app is easy to use and works similar to a food delivery app. Just browse through our list of artists and their performances and click "Book Now" to book that artist.

Features include:
- Filters to specify what type of performance and the city you are located in
- A booking feature to book your favorite artist and performance
- The ability to create an account to store all your bookings
- With this account, you have the following benefits:
  - Browse through your bookings and make any changes where necessary
  - Create and edit new artists and performances

## Steps to run the app locally (frontend)

1. Fork this repo and clone it
2. Navigate to this directory and run the following codes:
    ```bash 
    npm install 
    code -r .
    ```
3. Once opened, install the following dependencies:
    ```bash
  
    npm install react-router-dom 
    ```
4. Once all the previous steps have been completed, type this code to enable the app to run locally on your browser:
    ```bash
    npm run dev
    ```
Please note that this app has a .env file which houses the url for the API. If not present, follow the steps bellow:

1. Create a .env file in the root/directory folder
2. Create a variable called VITE_API_URL and store this link:

    "https://ring-a-show-backend.adaptable.app"

3. When completed, it shoud look like this:
    ```bash
    VITE_API_URL = "https://ring-a-show-backend.adaptable.app"
    ```

## Demo 

https://ring-a-show.netlify.app/

## Project Planning

Brainstorm:
- Possible ideas:
  1: Lifestyle/productivity tracker
  2: Sports app 
    - Keeping track of locations nearby where to do sports
    - Map of all sports-related facilities
    - Finding a fitness buddy to train with
      - Personal info, reviews, location, preferences
  3: Deliveroo for artists
    - Instead of ordering food, you order local artists/bands

MVP:
- Users perspective:
  - Find local artists to perform at your home or specified venue
    - Small private events as an example
  - Filtering function (decide what type of performance: music, theatre, improv)
  - Booking function
  - Customization, random suggestion
- Artists perspective:
  - Artists can register with the app so that they can be booked for a performance
  - Profile with details about themselves, type of performance, availability, fees
  - Set up a mutual agreement (both parties agree to the performance)

Models:
- User model --> CRU 
  - name:
  - last name:
  - email:
  - password:
  - location:
    - address:
    - type of location:  --> model
    - space (square meters):
    - performance ready?: boolean
  - reviews from artists who performed for this user previously (protected; only artists can see this) [array of strings]

- Artist model: - CRU
  - artist name: String
  - type of performance: [enum, array]
  - genre (if applicable):
  - location:
  - performances available: [enum, array]
  - about
    - short biography:
    - examples of previous work (showreel):
    - reviews

- Performance model: - CRUD
  - title:
  - date: Date (also includes time)
  - location:
    - deliver an artist or not:
  - artist model:
  - reviews:
  - fee: [enum, range]

- Booking model: - CRUD
  - Artist reference
  - Performance reference
  - User reference
  - date
  - location:
    - address
    - type of location: private or commercial
    - indoor or outdoor

App pages:
- Home page:
  - Pop-up to show choices; when you click on one, you get redirected to the relevant list
  - List of artists (nearby)
  - Filters
- Artist and Performance page:
  - Artist details
  - Showreel
  - Fees
  - Performances/services available
  - If they can deliver or not
  - Bonus: reviews
  - Contact details
  - Below:
    - Booking capabilities
- Edit/delete performance page:
  - Editing and delete function
- User Profile Page:
  - User details
  - Bonus: reviews that only artists can see
  - Recommendations
- Favourites Page:
  - Wishlist/shortlist
- Login page:
  - Form with email and password
- Sign up page:
  - Form with more details (as mentioned in the user model)

Timeline:
 - Wednesday: Backend
 - Thursday: Backend
 - Friday: Frontend
 - Monday: Frontend
 - MVP Deadline: End of day Monday 

## Milestones

### Milestone 1
[x] Initial project setup on GitHub
    [x] Creating our backend using ironlauncher
        npx  --yes  ironlauncher@latest  our-cool-project-backend   --auth   --json
    [x] Creating our frontend using vite
        npm  --yes  create  vite@latest  our-cool-project-frontend -- --template react
    [x] Uploading to github
    [x] Use mongoose to connect to database
    [x] Implement CORS

### Milestone 2 
[x] Creating the schemas/models on backend 
    [x] User schema
    [x] Artist schema
    [x] Performance schema 
    [x] Booking schema 
[x] Creating the artist routes
    [x] GET api/artists
    [x] GET api/artists/:artistId
    [x] POST api/artists
[x] Creating the user routes
    [x] GET api/user/:userId
[x] Creating the performance routes
    [x] GET api/performances
    [x] GET api/performances/:performanceId
    [x] POST api/performances
    [x] PUT api/performances/:performanceId
    [x] DELETE api/performances/:performanceId
[x] Creating the booking route
[x] Test with Postman

### Milestone 3
[x] Authentication routes
    [x] POST auth/signup
    [x] POST auth/login
    [x] GET auth/verify
[x] If not already present: Error handling and other relevant middleware
[x] Validation middleware
[x] Establish protected routes (isAuthenticated)
[x] Test with Postman

### Milestone 4
[x] Browser Router import
    [x] Wrap around <App /> component on main.jsx
[x] Create a .env file and include backend URL
[x] Create routes for the different pages
    [x] /homepage
    [x] /artistpage
    [x] /performancepage
    [x] /userpage
    [x] /login
    [x] /signup

### Milestone 5
[x] Homepage
    [x] Component for a pop-up banner that asks your preference in the beginning 
[x] Artist page
    [x] GET request to display list of artists
    [x] Added "Add to Favourites" button
[x] Artist Details Page
    [x] GET request to display artist details
[x] Artist Create Page
    [x] POST request to create new artist    
[x] Performance page
    [x] GET request to display performance details
    [x] GET request to display artist details (small link/small bit of information)
[x] Edit/delete performance page
    [x] PUT and DELETE Request
[x] User page 
    [x] GET request to display user details
    [x] Booking details
    [x] Favourites component
[x] Favourites page
[x] Sign up page
    [x] Creating a form to input information
    [x] POST Request
[x] Log in page
    [x] Creating a form to input information
    [x] POST Request

### Milestone 6
[x] Booking component 
    [x] Create state variables for both performance and artists
    [x] Object destructuring to obtain performanceId and artistId
    [x] Create "book now" handler with a POST request to send booking to database
    [x] Add information from the specific performance and artist to booking details
    [x] Create form for address below booking details

### Milestone 7
[x] Implement navigational functionalities
    [x] Navbar (include access to homepage, user page, favourites page, sign up and login)
    [x] Footer
[x] Styling with CSS
[x] Responsive

## Bonuses
[x] Filters for homepage
[ ] Reviews
[ ] Suggestions/random pick
[ ] Map component - meeting points/suggestions for performance places

## Minor fixes