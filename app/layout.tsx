import "./globals.css";
import { cinzel, montserrat } from "./fonts";

export const metadata = {
  title: "Total Dominance — Nuno Zigi",
  description: "Exclusive Listening Party with Nuno Zigi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${montserrat.variable} bg-black text-neutral-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
