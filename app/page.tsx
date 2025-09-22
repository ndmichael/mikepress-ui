import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-amber-600">Dashboard</h1>
      <Button
        variant='outline'
        size='lg'
      >
        CLICK ME
      </Button>
    </>
  );
}
