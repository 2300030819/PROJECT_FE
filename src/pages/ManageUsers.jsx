import React from "react";

const ManageUsers = () => {
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
    { id: 3, name: "Carol White", email: "carol@example.com", role: "User" },
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Manage Users</h1>
      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr style={theadRowStyle}>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Role</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={tbodyRowStyle}>
                <td style={tdStyle}>{user.id}</td>
                <td style={tdStyle}>{user.name}</td>
                <td style={tdStyle}>{user.email}</td>
                <td style={tdStyle}>{user.role}</td>
                <td style={tdStyle}>
                  <button style={editButton}>Edit</button>
                  <button style={deleteButton}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Container and table styles
const containerStyle = {
  padding: "2rem",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const headerStyle = {
  marginBottom: "20px",
  fontSize: "1.8rem",
  fontWeight: "600",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
};

const theadRowStyle = {
  backgroundColor: "#f4f4f4",
};

const thStyle = {
  padding: "12px",
  textAlign: "left",
  borderBottom: "2px solid #ccc",
};

const tbodyRowStyle = {
  borderBottom: "1px solid #ddd",
};

// Table data and buttons
const tdStyle = {
  padding: "12px",
  textAlign: "left",
  verticalAlign: "middle",
};

const editButton = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  padding: "6px 12px",
  marginRight: "8px",
  borderRadius: "4px",
  cursor: "pointer",
};

const deleteButton = {
  backgroundColor: "#dc3545",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "4px",
  cursor: "pointer",
};

export default ManageUsers;