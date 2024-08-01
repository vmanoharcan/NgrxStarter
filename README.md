Summary
This application is a user management UI that demonstrates integration with Restful APIs to load and edit data. It utilizes NgRx for state management.

Features
User List Display: The application retrieves a list of users from the API and displays id, name, username, and email fields in a simple  table format.The GET API url used is '`https://jsonplaceholder.typicode.com/users`
Editable Rows: Each row in the table includes an Edit button. When clicked, the row becomes editable, allowing users to modify user details directly within the table, also the button changes its text to View, allowing user to toggle between edit and view mode.
Save Functionality: After editing, users can click the Save button to send the updated information back to the API, the PATCH API Url used is '`https://jsonplaceholder.typicode.com/users/1`
The application interacts with the JSONPlaceholder API to fetch user data. 