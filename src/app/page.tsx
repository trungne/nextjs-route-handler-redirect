import { LoginClient } from "@/components/LoginClient";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        action={async () => {
          "use server";
          fetch("/api/login", {
            method: "GET",
          });
        }}
      >
        <button type="submit" className="bg-red-500">
          Login form action
        </button>
      </form>

      <LoginClient />
    </main>
  );
}
