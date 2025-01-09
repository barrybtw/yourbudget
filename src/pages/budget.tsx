import { useBudgetStore } from "@/budget-store";
import { Layout } from "@/components/inner-layout";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import clsx from "clsx";

function ActionableButton({
  onClick,
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  dialog: { dialogTitle: string; dialogDescription: string };
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          onClick={onClick}
          {...rest}
          className={cn(
            className,
            "rounded-md border-[1px] dark:border-white border-black p-2 font-semibold uppercase flex items-center justify-center flex-col gap-2"
          )}
        >
          {children}
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{rest.dialog.dialogTitle}</DialogTitle>
          <DialogDescription>{rest.dialog.dialogDescription}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default function Budget() {
  const { incomes, expenses, addIncome } = useBudgetStore((state) => state);

  console.log(incomes, expenses);

  function add() {
    addIncome({
      amount: 100,
      frequency: "biweekly",
      name: "Løn",
      id: Math.random(),
    });
  }

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-[2] flex flex-col gap-2">
          <h2 className="text-2xl font-bold inline italic">oversigt</h2>

          <div className="rounded-md border-[1px] border-black dark:border-white min-h-56 p-2"></div>
        </div>
        <div className="flex-[1] flex-col gap-2 flex">
          <h2 className="text-2xl font-bold inline italic">aktioner</h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 min-h-56">
            <ActionableButton
              dialog={{
                dialogDescription: "Tilføj en indkomst",
                dialogTitle: "Tilføj",
              }}
              className="bg-lime-300"
            >
              Tilføj en indkomst
            </ActionableButton>
            <ActionableButton
              dialog={{
                dialogDescription: "Fjern en indkomst",
                dialogTitle: "Fjern",
              }}
              className="bg-red-300"
            >
              Fjern en indkomst
            </ActionableButton>
            <ActionableButton
              dialog={{
                dialogDescription: "Tilføj en udgift",
                dialogTitle: "Tilføj",
              }}
              className="bg-lime-300"
            >
              Tilføj en udgift
            </ActionableButton>
            <ActionableButton
              dialog={{
                dialogDescription: "Fjern en udgift",
                dialogTitle: "Fjern",
              }}
              className="bg-red-300"
            >
              Fjern en udgift
            </ActionableButton>
          </div>
        </div>
      </div>
    </Layout>
  );
}
