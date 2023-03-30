import { Outlet } from "react-router-dom";
import reactLogo from "assets/react.svg";
import "../App.css";

export default function Home() {
  return (
    <div className="home">
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center">
          <span>
            <img src={reactLogo} className="logo react" alt="React logo" />
          </span>
          <p className="text-4xl">+</p>
          <span>
            <img
              src="https://raw.githubusercontent.com/alDuncanson/react-hooks-snippets/master/icon.png"
              className="logo react"
              alt="React logo"
            />
          </span>
        </div>
        <h1 className="text-3xl mb-8">React + Hooks</h1>
      </div>
      <h1 className="font-semibold tracking-tight mt-10 border-b pb-1 text-2xl contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400">
        Introduction
      </h1>
      <p className="mt-6 leading-7 first:mt-0">
        Welcome to the @thepuskar/custom-hooks demo, featuring a diverse set of
        powerful and reusable custom hooks for React projects, all written in
        TypeScript for enhanced type-safety and ease of development.
      </p>
      <h2 className="font-semibold tracking-tight mt-10 border-b pb-1 text-2xl contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400">
        What is @thePuskar/custom-hooks?
        <span
          className="absolute mt-20"
          id="what-is-thepuskarcustom-hooks"
        ></span>
      </h2>
      <p className="mt-6 leading-7 first:mt-0">
        @thepuskar/custom-hooks is a collection of custom hooks for use in React
        projects. These hooks provide useful and reusable functionality, to help
        speed up and simplify the development of your React components and
        hooks. They are written in TypeScript, which provides type-safety and
        compatibility with other parts of your application. This package can
        help you easily add powerful functionality to your React projects while
        keeping your code clean and maintainable.
      </p>
    </div>
  );
}
