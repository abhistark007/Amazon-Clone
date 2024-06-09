import { loadStripe } from '@stripe/stripe-js';


let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    // pk_test_51PPRNUDgwSN5FK8elwIqG2auTlXiFmeP1GO8ggt5qywJyniCWLgEywKCXt3nH8DL9eE08I5GFWqjzmBGYKlrpNHd00JoPAgcjU
    // stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    stripePromise = loadStripe('pk_test_51PPRNUDgwSN5FK8elwIqG2auTlXiFmeP1GO8ggt5qywJyniCWLgEywKCXt3nH8DL9eE08I5GFWqjzmBGYKlrpNHd00JoPAgcjU');
  }
  return stripePromise;
};

export default getStripe;