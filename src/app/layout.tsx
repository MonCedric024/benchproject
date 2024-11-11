import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Application</title>
      </head>
      <body>
        {/* <Header /> */}
          <main className="col-span-1 sm:pr-[1rem] sm:pl-[1rem] md:pr-[10rem] md:pl-[10rem] lg:pr-[25rem] lg:pl-[25rem] 2xl:pr-[40rem] 2xl:pl-[40rem] md:col-span-9 order-1 md:order-2">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
