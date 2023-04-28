# TESTING PROJECT

***HOW TO RUN THE PROJECT***

1 - Install Node.js:
You'll need to have Node.js installed on your machine to run this code. If you don't have it installed already, you can download it from the official website: https://nodejs.org/en/download/

2 - Clone the code:
You'll need to clone the code repository to your local machine. You can do this using Git, which should also be installed on your machine. Open up your terminal/command prompt and navigate to the directory where you want to store the code. Then run the following command:

git clone <https://github.com/matheusmorcinek/testing-project.git>

Install dependencies:
Once you have the code on your local machine, navigate to the directory where it's stored using your terminal/command prompt. Then run the following command to install the necessary dependencies:

npm install

This will install the Express framework and any other dependencies required by the code.

Start the server:
Once the dependencies are installed, you can start the server by running the following command:

npm run dev

This will start the server on port 3000.

Test the API:
With the server running, you can test the API by sending requests to it using a tool like Postman. Here's an example of how to test the GET http://localhost:3000/api/v1/users/:userId

Open up Postman and create a new request.
Set the request method to GET.
Set the request URL to http://localhost:3000/api/v1/users/12345 (replace 12345 with a valid user ID from the database).
Send the request.
You should receive a response containing the user object with the specified ID.

That's it! You now have a working API that can handle GET requests for user data. You can modify the code to add more functionality or endpoints as needed.