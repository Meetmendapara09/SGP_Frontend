import Layout from "../components/Layout";
import SurveyForm from "../components/SurveyForm";
import SuccessMessage from "../components/SuccessMessage";

import { useState } from "react";

export default function Survey() {
  const [success, setSuccess] = useState("");
  const questions = [
    { id: "q1", text: "How satisfied are you?", type: "choice", options: ["Very", "Somewhat", "Not"] },
    { id: "q2", text: "Any suggestions?", type: "text" }
  ];
  function handleSubmit(responses) {
    setSuccess("Survey submitted! Thank you for your feedback.");
    setTimeout(() => setSuccess(""), 2000);
  }
  return (
    <Layout title="Survey">
      {success && <SuccessMessage message={success} />}
      <SurveyForm questions={questions} onSubmit={handleSubmit} />
    </Layout>
  );
}
