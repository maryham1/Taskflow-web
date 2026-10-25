import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";

import PrivacyPolicy from "../page/PrivacyPolicy";
import TermsOfService from "../page/TermsOfService";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
