import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyles from 'css/styles.css'
import backg from './imges/backgre.png'

export const links =()=>([
  {
    rel: 'stylesheet',
    href: globalStyles
  }
]);  

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Link-Short",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body style={{backgroundImage: `url(${backg})`}}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
