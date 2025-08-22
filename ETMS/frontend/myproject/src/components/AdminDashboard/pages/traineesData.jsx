// src/data/traineesData.js
const traineesData = [
  {
    name: "Alice Brown",
    empId: "T201",
    batch: "Python-01",
    email: "alice@company.com",
    phone: "1112223333",
    domain: "Python Development",
    assignedTasks: 5,
    performance: 88,
    tasks: [
      {
        title: "Build REST API with Flask",
        description: "Create a complete REST API using Flask framework with authentication",
        status: "completed",
        dueDate: "2024-08-15",
        score: 95
      },
      {
        title: "Data Analysis with Pandas",
        description: "Analyze customer data using Pandas and generate insights",
        status: "in-progress",
        dueDate: "2024-08-20",
        score: null
      },
      {
        title: "Web Scraping Project",
        description: "Build a web scraper to collect data from e-commerce sites",
        status: "pending",
        dueDate: "2024-08-25",
        score: null
      }
    ],
    assessments: [
      {
        title: "Python Fundamentals",
        type: "Technical Assessment",
        date: "2024-08-10",
        score: 92,
        maxScore: 100
      },
      {
        title: "Flask Framework",
        type: "Practical Assessment",
        date: "2024-08-12",
        score: 88,
        maxScore: 100
      }
    ],
    meetingAttendance: {
      totalMeetings: 15,
      attended: 14,
      late: 1,
      absent: 1,
      attendancePercentage: 93
    },
    recentMeetings: [
      { date: "2024-08-15", title: "Flask Advanced Concepts", status: "attended" },
      { date: "2024-08-14", title: "Database Integration", status: "attended" },
      { date: "2024-08-13", title: "API Design Patterns", status: "late" },
      { date: "2024-08-12", title: "Authentication & Security", status: "attended" },
      { date: "2024-08-11", title: "Testing Strategies", status: "absent" }
    ]
  },
  {
    name: "Bob Green",
    empId: "T202",
    batch: "Java-02",
    email: "bob@company.com",
    phone: "4445556666",
    domain: "Java Development",
    assignedTasks: 4,
    performance: 80,
    tasks: [
      {
        title: "Spring Boot Application",
        description: "Build a microservice using Spring Boot with JPA",
        status: "completed",
        dueDate: "2024-08-14",
        score: 82
      },
      {
        title: "Database Design",
        description: "Design and implement relational database schema",
        status: "completed",
        dueDate: "2024-08-16",
        score: 78
      },
      {
        title: "Unit Testing with JUnit",
        description: "Write comprehensive unit tests for the application",
        status: "in-progress",
        dueDate: "2024-08-22",
        score: null
      }
    ],
    assessments: [
      {
        title: "Java Fundamentals",
        type: "Technical Assessment",
        date: "2024-08-08",
        score: 85,
        maxScore: 100
      },
      {
        title: "Spring Framework",
        type: "Practical Assessment",
        date: "2024-08-11",
        score: 75,
        maxScore: 100
      }
    ],
    meetingAttendance: {
      totalMeetings: 12,
      attended: 10,
      late: 1,
      absent: 1,
      attendancePercentage: 83
    },
    recentMeetings: []
  },
  {
    name: "Carol White",
    empId: "T203",
    batch: "React-03",
    email: "carol@company.com",
    phone: "7778889999",
    domain: "Frontend Development",
    assignedTasks: 6,
    performance: 94,
    tasks: [
      {
        title: "React Component Library",
        description: "Build reusable component library with TypeScript",
        status: "completed",
        dueDate: "2024-08-13",
        score: 98
      },
      {
        title: "State Management with Redux",
        description: "Implement Redux for complex state management",
        status: "completed",
        dueDate: "2024-08-17",
        score: 92
      },
      {
        title: "Performance Optimization",
        description: "Optimize React app performance using best practices",
        status: "in-progress",
        dueDate: "2024-08-23",
        score: null
      }
    ],
    assessments: [
      {
        title: "React Fundamentals",
        type: "Technical Assessment",
        date: "2024-08-09",
        score: 96,
        maxScore: 100
      },
      {
        title: "TypeScript Advanced",
        type: "Practical Assessment",
        date: "2024-08-13",
        score: 94,
        maxScore: 100
      }
    ],
    meetingAttendance: {
      totalMeetings: 18,
      attended: 17,
      late: 0,
      absent: 1,
      attendancePercentage: 94
    },
    recentMeetings: []
  }
];

export default traineesData;
