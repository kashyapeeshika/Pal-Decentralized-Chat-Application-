/*This code represents the entry point of a Next.js application and defines the layout structure for all pages within the application. Let's break down what each part does:

-Global Styles Import: The line import "../styles/globals.css"; imports global styles defined in the globals.css file. These styles will be applied to all components and pages within the application.

-AppProps Import: The line import { AppProps } from 'next/app'; imports the AppProps type from Next.js, which provides type definitions for the props that can be passed to the custom _app component.

-Functional Component - MyApp: The MyApp component is a functional component that takes in the Component and pageProps as props.

-Layout Structure: Within the MyApp component, there is a structure defined with a <div> wrapping the entire content. Inside this wrapper:

<ChatAppProvider>: This component wraps the entire application with the context provided by ChatAppProvider. This context likely manages global state and provides data and functions to other components via React context.

<NavBar />: This component renders the navigation bar at the top of the application. It's placed outside the main content area to ensure it's consistent across all pages.

<Component {...pageProps} />: This renders the main content of the application, which is determined by the specific page being accessed. The pageProps are passed as props to the Component.

-Export: The MyApp component is exported as the default export of the file, making it the main entry point of the Next.js application.
*/
import "../styles/globals.css";
import { AppProps } from 'next/app';

//Internal import
import { ChatAppProvider } from "../Context/ChatAppContext";
import { NavBar } from "../Components/index";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <ChatAppProvider>
        <NavBar />
        <Component {...pageProps} />
      </ChatAppProvider>
    </div>
  );
};

export default MyApp;
