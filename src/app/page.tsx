import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="min-h-screen w-full flex justify-center items-center gap-4">
      <Button asChild>
        <Link href="/sign-in">Sign In</Link>
      </Button>
      <Button asChild>
        <Link href="/sign-up">Sign Up</Link>
      </Button>
    </main>
  );
}
