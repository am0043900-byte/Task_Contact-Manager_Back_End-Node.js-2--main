# Contact Manager API

A RESTful backend API for managing contacts with support for multiple phone numbers, email addresses, and social media profiles. Built with Node.js, Express, and MongoDB.

## Features

- **Create Contacts** - Add new contacts with detailed information
- **Retrieve Contacts** - Fetch all contacts from the database
- **Delete Contacts** - Remove contacts by ID
- **Data Validation** - Built-in validation for required fields
- **Duplicate Prevention** - Prevents duplicate email addresses
- **Social Media Integration** - Store Facebook and LinkedIn profiles
- **User Association** - Link contacts to specific users
- **Timestamps** - Automatic creation date tracking

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js v5.2.1
- **Database:** MongoDB with Mongoose v9.2.1
- **Environment:** dotenv v17.2.4
- **Development:** Nodemon v3.1.11

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Task 2 Contact Manager"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database_name>
   PORT=3000
   ```

## Project Structure

```
.
├── server.js              # Main server file and database connection
├── models.js/
│   └── Contact.js         # MongoDB Contact schema
├── routes/
│   └── contactRoute.js    # API endpoints for contacts
├── package.json           # Project dependencies
└── .env                   # Environment variables (not included)
```

## API Endpoints

### Create a Contact
**POST** `/api/contacts`

Request body:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phones": ["+1234567890", "+0987654321"],
  "socialMedia": {
    "facebook": "https://facebook.com/johndoe",
    "linkedin": "https://linkedin.com/in/johndoe"
  },
  "user": "user_id_here"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "fullName": "John Doe",
    "email": "john@example.com",
    "phones": ["+1234567890", "+0987654321"],
    "socialMedia": { ... },
    "createdAt": "2024-02-12T10:30:00.000Z"
  }
}
```

### Get All Contacts
**GET** `/api/contacts`

Response:
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "fullName": "John Doe",
      "email": "john@example.com",
      "phones": ["+1234567890"],
      "createdAt": "2024-02-12T10:30:00.000Z"
    },
    ...
  ]
}
```

### Delete a Contact
**DELETE** `/api/contacts/:id`

Path parameter:
- `id` - The contact ID

Response:
```json
{
  "success": true,
  "message": "Contact Deleted Successfully"
}
```

## Error Handling

The API handles the following error scenarios:

| Error | Status Code | Message |
|-------|------------|---------|
| Database connection failure | N/A | "Database Connection Failed" |
| Duplicate email | 400 | "Email already exists" |
| Server error | 500 | "Server Error: [error message]" |
| Validation error | 500 | "Server Error: [validation message]" |

## Getting Started

1. Set up your `.env` file with MongoDB connection string and desired port
2. Start the server:
   ```bash
   npm start
   ```
3. The server will start on the specified PORT (default: 3000)
4. You should see: `Server is running on port 3000`

## Scripts

- `npm start` - Start the server
- `npm test` - Run tests (to be implemented)

## Contact Schema Details

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| fullName | String | Yes | Contact's full name |
| email | String | No | Unique email address (case-insensitive) |
| phones | Array[String] | No | Array of phone numbers |
| socialMedia.facebook | String | No | Facebook profile URL |
| socialMedia.linkedin | String | No | LinkedIn profile URL |
| user | ObjectId | No | Reference to User collection |
| createdAt | Date | Auto | Timestamp of creation |

## Database Connection

The API connects to MongoDB using Mongoose with the connection string from the `MONGODB_URL` environment variable. If the connection fails, the process will exit with error code 1.

## Future Enhancements

- [ ] Add UPDATE (PUT/PATCH) endpoints
- [ ] Implement user authentication
- [ ] Add search and filtering capabilities
- [ ] Implement pagination for contacts list
- [ ] Add input validation middleware
- [ ] Write comprehensive unit tests
- [ ] Add API documentation with Swagger/OpenAPI

## License

ISC License

## Support

For issues or questions, please create an issue in the repository.
