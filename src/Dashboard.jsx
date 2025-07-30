import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./Dashboard.css";

export default function Dashboard({ events, onEvent }) {
  const eventsData = [
    { name: "Loan Applications", value: events.loanApplications },
    { name: "Loans Repaid", value: events.loansRepaid },
    { name: "Page Views", value: events.pageViews },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h2>📊 Microlending Analytics Dashboard</h2>

        <div className="control-panel">
          <button onClick={() => onEvent("loan_application")}>Apply Loan</button>
          <button onClick={() => onEvent("loan_repaid")}>Repay Loan</button>
          <button onClick={() => onEvent("page_view")}>Page View</button>
        </div>

        <div className="dashboard-container">
          <PieChart width={350} height={300}>
            <Pie
              data={eventsData}
              cx={180}
              cy={150}
              outerRadius={100}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}`}
            >
              {eventsData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>

          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {eventsData.map((event, index) => (
                <tr key={index}>
                  <td>{event.name}</td>
                  <td>{event.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
