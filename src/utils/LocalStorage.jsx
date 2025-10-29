const employees = [
  {
    "id": 1,
    "email": "alice.johnson@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Prepare monthly sales report",
        "taskDescription": "Compile and summarize sales data for the monthly meeting.",
        "taskDate": "2025-10-15",
        "category": "Reporting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Update client database",
        "taskDescription": "Add new client information and verify existing entries.",
        "taskDate": "2025-10-18",
        "category": "Data Entry",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team meeting preparation",
        "taskDescription": "Gather agenda items and prepare slides for the weekly team meeting.",
        "taskDate": "2025-10-20",
        "category": "Management",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "email": "benjamin.choi@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Code review for new feature",
        "taskDescription": "Review merge request for the new authentication module.",
        "taskDate": "2025-10-17",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix UI bugs on dashboard",
        "taskDescription": "Resolve layout and display issues reported by QA.",
        "taskDate": "2025-10-19",
        "category": "Bug Fixing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Refactor API endpoints",
        "taskDescription": "Improve performance and readability of existing API routes.",
        "taskDate": "2025-10-22",
        "category": "Backend",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Unit testing setup",
        "taskDescription": "Add missing unit tests for user service.",
        "taskDate": "2025-10-25",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "email": "carla.mendez@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Create marketing campaign",
        "taskDescription": "Plan a social media campaign for the upcoming product launch.",
        "taskDate": "2025-10-16",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Design brochure layout",
        "taskDescription": "Work with design team to finalize brochure visuals.",
        "taskDate": "2025-10-19",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Client follow-up",
        "taskDescription": "Contact potential clients for feedback on previous campaigns.",
        "taskDate": "2025-10-21",
        "category": "Client Relations",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Market analysis report",
        "taskDescription": "Compile data on competitor strategies for quarterly presentation.",
        "taskDate": "2025-10-24",
        "category": "Research",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare event proposal",
        "taskDescription": "Draft event outline for client approval.",
        "taskDate": "2025-10-28",
        "category": "Event Planning",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "daniel.smith@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Database optimization",
        "taskDescription": "Analyze slow queries and optimize indexes.",
        "taskDate": "2025-10-14",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Server monitoring setup",
        "taskDescription": "Implement server monitoring tools and alerts.",
        "taskDate": "2025-10-18",
        "category": "DevOps",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Deploy production update",
        "taskDescription": "Deploy latest bug fixes and features to production.",
        "taskDate": "2025-10-22",
        "category": "Deployment",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Security audit",
        "taskDescription": "Review code for potential vulnerabilities.",
        "taskDate": "2025-10-25",
        "category": "Security",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "emma.kapoor@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Organize training workshop",
        "taskDescription": "Coordinate internal skill-building workshop for team members.",
        "taskDate": "2025-10-20",
        "category": "HR",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Employee feedback survey",
        "taskDescription": "Prepare survey forms and analyze responses.",
        "taskDate": "2025-10-23",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Policy update draft",
        "taskDescription": "Update remote work policy and share for review.",
        "taskDate": "2025-10-25",
        "category": "Administration",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare annual report",
        "taskDescription": "Summarize HR initiatives and statistics for the year.",
        "taskDate": "2025-10-28",
        "category": "Reporting",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "New employee onboarding",
        "taskDescription": "Assist new hires with account setup and documentation.",
        "taskDate": "2025-10-30",
        "category": "Onboarding",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];




export const setLocalStorage = () =>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  
}