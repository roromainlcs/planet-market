import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 pb-4">
      Home :)
      <Dialog>
        <DialogTrigger className=" border px-2 py-1">dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogDescription>Dialog description</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button className="btn">Confirm</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
