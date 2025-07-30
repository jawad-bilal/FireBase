import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";

function App() {
  const [events, setEvents] = useState({
    loanApplications: 0,
    loansRepaid: 0,
    pageViews: 0,
  });

  const sendEvent = (type) => {
    logEvent(analytics, type, { debug_mode: true });

    setEvents((prev) => {
      const updated = { ...prev };
      if (type === "loan_application") updated.loanApplications++;
      if (type === "loan_repaid") updated.loansRepaid++;
      if (type === "page_view") updated.pageViews++;
      return updated;
    });
  };

  return <Dashboard events={events} onEvent={sendEvent} />;
}

export default App;
