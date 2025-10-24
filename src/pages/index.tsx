import type { GetServerSideProps } from "next";

// Redirect the root page to /home
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/home",
      permanent: false,
    },
  };
};

export default function Home() {
  // This component won't render on the server because of the redirect,
  // but we keep a minimal fallback for client-side navigation.
  return null;
}
