import { Expense, Frequency, Income, useBudgetStore } from "@/budget-store";
import IncomeExpenseTable from "@/components/income-expense-table";
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
import { ColumnDef } from "@tanstack/react-table";

const translate = (key: Frequency) => {
  switch (key) {
    case "daily":
      return "Hver dag";
    case "biweekly":
      return "Hver anden uge";
    case "yearly":
      return "Hvert år";
    case "monthly":
      return "Hver måned";
    case "weekly":
      return "Hver uge";
  }
};

const prettifyCurrency = (amount: number) => {
  return new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    maximumSignificantDigits: 2,
  }).format(amount);
};

export default function Budget() {
  const { incomes, expenses, addIncome } = useBudgetStore((state) => state);

  console.log(incomes, expenses, addIncome);

  const incomeCols: ColumnDef<Income>[] = [
    {
      accessorKey: "name",
      header: "Navn",
    },
    {
      accessorKey: "amount",
      header: "Beløb",
      cell: (cell) => (
        <span>{prettifyCurrency(cell.getValue() as number)}</span>
      ),
    },
    {
      accessorKey: "frequency",
      header: "Frekvens",
      cell: (cell) => <span>{translate(cell.getValue() as Frequency)}</span>,
    },
  ];

  const expenseCols: ColumnDef<Expense>[] = [
    {
      accessorKey: "name",
      header: "Navn",
    },
    {
      accessorKey: "amount",
      header: "Beløb",
      cell: (cell) => (
        <span>{prettifyCurrency(cell.getValue() as number)}</span>
      ),
    },
    {
      accessorKey: "frequency",
      header: "Frekvens",
      cell: (cell) => <span>{translate(cell.getValue() as Frequency)}</span>,
    },
    {
      accessorKey: "delete",
      header: "Slet",
      cell: (cell) => (
        <Dialog>
          <DialogTrigger>
            <button className={cn("btn", "btn-red")}>Slet</button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Slet udgift</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Er du sikker på at du vil slette denne udgift?
            </DialogDescription>
            <div className="flex gap-2">
              <button className={cn("btn", "btn-red")}>Ja</button>
              <button className={cn("btn", "btn-green")}>Nej</button>
            </div>
          </DialogContent>
        </Dialog>
      ),
    },
  ];

  return (
    <Layout className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-[1] flex flex-col gap-2">
          <h2 className="text-2xl font-bold inline italic">indkomster</h2>
          <ul>
            <IncomeExpenseTable columns={incomeCols} data={incomes} />
          </ul>
        </div>
        <div className="flex-[1] flex flex-col gap-2">
          <h2 className="text-2xl font-bold inline italic">udgifter</h2>
          <ul>
            <IncomeExpenseTable columns={expenseCols} data={expenses} />
          </ul>
        </div>
      </div>
      <div>Udgifter</div>
    </Layout>
  );
}
