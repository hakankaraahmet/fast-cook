"use client";
import { Kanit } from "next/font/google";
import store from "../redux/store";
import { Provider } from "react-redux";
import "./global.css";
import Navbar from "../components/Navbar";
import classNames from "classnames";
import Footer from "../components/Footer";

//ESLINT UYGULANACAK

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Fast Cook</title>
        <meta
          name="description"
          content="Fast-cook, generated by Hakan Karaahmetoglu"
        ></meta>
      </head>
      <body
        className={classNames(
          "text-mainText min-h-screen flex flex-col ",
          kanit.className
        )}
      >
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
