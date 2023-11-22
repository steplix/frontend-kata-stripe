import type {NextPage} from "next";

import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Head from "next/head";

import CheckoutForm from "@/modules/CheckoutForm";

const stripePromise = loadStripe(process?.env?.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Steplix Front End Base</title>
        <meta content="Steplix Front End Base" name="description" />
        <meta content="noindex" name="robots" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Home;
