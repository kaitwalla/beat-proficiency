## REACT

1. Navigate to the `/react-proficiency` folder
2. Create a new branch for this test
3. How would you ensure that everyone would use the same version of npm when running the app? (18.10.0) Why would this be important?
4. Install necessary NPM modules and start React. The Codespace will generate a URL where you can view the application.
5. Create a new user and log in.

### PART I - Bug fixes

1. Clicking on the username in the browser brings up a blank screen. Please fix it so the user's profile and article list are displayed when navigating to the url /@{username}.

### PART II - New feature

The application currently has the ability for users to "favorite" articles and display the articles that they've favorited. We'd like to add a new page where author users can see which of their posts that have been favorited, as well as how many times that article has been favorited.

1. Make a new route "/profile/{user}/favorited" that copies the layout of the existing articles pages (e.g., /profile/{user}) and shows up as a tab on the profile screen.
2. Add a case to the reducer to just return stories from the current user that have been favorited by others.
3. Display just the title and the number of favorites on the page (design is not super important, just make it look decent).

### PART III - Enhancement

The application profile settings screen currently has no validation.

1. For frontend validation, please make all fields required.
2. The username field should require at least 3 characters.
3. The password field should meet basic security requirements.
4. The email field should require a valid email address.
