import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import "./index.scss";
hydrateRoot(document, <RemixBrowser />);
