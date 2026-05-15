import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Data Request Responder — Automate Deletion Requests",
  description: "Centralize and automate GDPR data deletion requests across all your databases and services. Stay compliant, meet deadlines, and generate response templates instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="988d21b7-bed2-426c-8e26-ed45b0702c11"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
