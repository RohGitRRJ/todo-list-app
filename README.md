# Todo List Application

A dynamic and user-friendly web-based todo list application built with React and PostgreSQL. The application combines productivity with a delightful user experience.

## Features

- Task management with priority levels
- Real-time task notifications
- Dark/light mode toggle
- Responsive design
- PostgreSQL database for data persistence
- Customizable theme with red color scheme

## Tech Stack

- Frontend: React with responsive design
- Backend: Express.js
- Database: PostgreSQL
- Styling: Tailwind CSS with shadcn/ui components
- State Management: TanStack Query

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/RohGitRRJ/todo-list-app.git
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file with your PostgreSQL database configuration:
```
DATABASE_URL=your_database_url
```

4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

## Database Schema

The application uses a PostgreSQL database with the following schema:

```sql
Table: tasks
- id: serial primary key
- title: text not null
- description: text
- priority: integer not null default 1 (1=low, 2=medium, 3=high)
- completed: boolean not null default false
- createdAt: timestamp not null default now()
- updatedAt: timestamp not null default now()
```

## Deployment

The application is deployed on Replit and can be accessed through the Replit URL.
