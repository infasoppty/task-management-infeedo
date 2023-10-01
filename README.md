README.md

# Project Title

Tracking Tasks - inFeedo

## Installation

### Prerequisites

- Node.js: You need to have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Steps

1. **Clone the repository:**
   \`\`\`
   git clone https://github.com/infasoppty/task-management-infeedo.git
   cd task-management-infeedo
   \`\`\`

2. **Install Dependencies:**
   \`\`\`
   npm install
   \`\`\`

3. **Database Setup (Prisma):**

   - Ensure you have your database configured in \`.env\` file
   - Run Prisma migration to create database tables:
     \`\`\`
     npx prisma migrate dev
     \`\`\`

4. **Start the Application:**
   \`\`\`
   npm start
   \`\`\`

5. **Access the Application:**
   The application should now be running. You can access it server port [http://localhost:8080]

## Usage

This is task track server side apis, when user update the amount of task it is not actually, user create the task with new date and time, then only we can track the latest task count with date. So I used post and get methods, for your reference I have created a update api but did not use anywhere.

1.  **Create a new task**
    curl -X POST http://localhost:8080/api/task/ \
     -H "Content-Type: application/json" \
     -d '{
    "openTasks": 60,
    "inprogressTasks": 40,
    "completedTasks": 30
    }'

2.  **Get all tasks**
    You can retrieve a list of tasks using the `/api/task` endpoint. This API allows you to get all tasks with or without pagination.

- To get all tasks without pagination, you can send a GET request as follows:

  ```bash
  curl http://localhost:8080/api/task/
  ```

  This command retrieves all tasks available in your system.

- To get tasks with pagination, you can include the `page` and `pageSize` query parameters in your GET request. For example, to retrieve tasks on page 2 with 10 tasks per page, you can use the following command:

  ```bash
  curl http://localhost:8080/api/task/?page=2&pageSize=10
  ```

  This command retrieves the specified page of tasks, where `page` indicates the page number, and `pageSize` indicates the number of tasks per page.

       **Note:** Both `page` and `pageSize` query parameters are required for pagination. If either of them is missing, the server will return a 400 Bad Request error response.

3.  **Get the latest task update**
    curl http://localhost:8080/api/task/latest

# Summery Usage Details:

1. To create a new task, send a POST request to the /api/task/ endpoint with the task data in the request body as JSON.
2. To get all tasks, send a GET request to the /api/task/ endpoint.
3. To get all tasks with pagination, send a GET request to the /api/task/?page=1&pageSize=10 endpoint.
4. To get the latest task update, send a GET request to the /api/task/latest endpoint.

## Contact

1. **email**
   infasmax03@gmail.com

2. **mobile**
   +94777348425
