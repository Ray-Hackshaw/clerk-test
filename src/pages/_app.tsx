import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { api } from "~/utils/api";
import { type AppType } from "next/app";
import "~/styles/globals.css";
// import { SubscriptionProvider } from "use-stripe-subscription";
import { env } from "~/env.mjs";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
