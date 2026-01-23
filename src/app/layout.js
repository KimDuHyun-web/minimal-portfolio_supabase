export const metadata = {
  title: "Minimal Portfolio",
  description: "The Most Fantastic And Flawless Portfolio In The World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
