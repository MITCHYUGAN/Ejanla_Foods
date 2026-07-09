import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <div className="font-mono-tag text-brand-red mb-4">Error 404</div>
        <h1 className="text-6xl font-display">Off the menu.</h1>
        <p className="mt-4 text-sm text-ink-soft">
          The page you're looking for doesn't exist. But our grill is still on.
        </p>
        <a href="/" className="btn-primary mt-8 inline-flex">Back to Home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <div className="font-mono-tag text-brand-red mb-4">Something burned</div>
        <h1 className="text-4xl font-display">This page didn't load</h1>
        <p className="mt-4 text-sm text-ink-soft">
          Give it another try — we'll re-fire it.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ejanla Foods — The Big Fish Place | Premium Seafood in Lagos & Abuja" },
      { name: "description", content: "Ejanla Foods is Nigeria's premium seafood restaurant. Charcoal grilled fish, family platters, pepper soup and cocktails. Dine-in, takeaway and delivery across Lekki, Surulere and Abuja." },
      { name: "author", content: "Ejanla Foods" },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:title", content: "Ejanla Foods — The Big Fish Place" },
      { property: "og:description", content: "Premium grilled seafood, family platters and vibrant Nigerian hospitality. Lekki · Surulere · Abuja." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Ejanla Foods" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ejanla Foods — The Big Fish Place" },
      { name: "twitter:description", content: "Premium seafood restaurant. Grilled fish, platters, pepper soup, cocktails." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
