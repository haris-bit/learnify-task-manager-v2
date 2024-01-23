import React from "react";
import Header from "../components/Header";

const SelectTemplate = () => {
  const templates = [
    {
      id: 1,
      title: "Project Template 1",
      assignee: "John Doe",
      dueDate: "2024-02-15",
      description: "This is a project template with various tasks.",
      projectedHours: 20,
      actualHours: 15,
      subTasks: ["Task 1", "Task 2", "Task 3"],
      collaborators: ["Jane Smith", "Bob Johnson"],
      comments: [
        { user: "Alice", text: "Great template!" },
        { user: "Charlie", text: "Very useful." },
      ],
    },
    {
      id: 2,
      title: "Project Template 2",
      assignee: "Alice Johnson",
      dueDate: "2024-02-20",
      description: "Another project template for different purposes.",
      projectedHours: 25,
      actualHours: 18,
      subTasks: ["Task A", "Task B", "Task C"],
      collaborators: ["Eve Wilson", "David Brown"],
      comments: [
        { user: "Frank", text: "Nice template design!" },
        { user: "Grace", text: "Could use some improvements." },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex flex-col gap-2 w-full items-center justify-center mt-4">
        <h2 className="text-3xl font-bold">Select a template</h2>
        <p>Choose a template to start your project</p>

        {/* populate each template in the form of card */}
        <div className="flex flex-wrap justify-center">
          {templates.map((template) => (
            <div
              key={template.id}
              className="flex flex-col gap-2 w-full max-w-sm p-4 border border-gray-300 rounded-md shadow-md mx-4 my-4
              cursor-pointer hover:border-blue-500 hover:shadow-lg
              "
            >
              <h2 className="text-2xl font-bold">{template.title}</h2>
              <p>{template.description}</p>
              <p>Assignee: {template.assignee}</p>
              <p>Due Date: {template.dueDate}</p>
              <p>Projected Hours: {template.projectedHours}</p>
              <p>Actual Hours: {template.actualHours}</p>
              <p>Sub Tasks: {template.subTasks.join(", ")}</p>
              <p>Collaborators: {template.collaborators.join(", ")}</p>
              <p>
                Comments:{" "}
                {template.comments.map((comment, index) => (
                  <span key={index}>
                    <strong>{comment.user}:</strong> {comment.text}
                    {index < template.comments.length - 1 && ", "}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectTemplate;
