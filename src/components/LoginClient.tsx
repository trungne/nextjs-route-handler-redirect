"use client";

export const LoginClient = () => {
  return (
    <button
      onClick={() => {
        fetch("/api/login", {
          method: "GET",
        });
      }}
    >
      Login client
    </button>
  );
};
