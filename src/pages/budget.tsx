import { useBudgetStore } from "@/budget-store";
import { Layout } from "@/components/inner-layout";

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
          <h2 className="text-2xl font-bold inline italic">noget</h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 min-h-56">
            <button
              onClick={add}
              className="bg-red-400 rounded-md border-[1px] dark:border-white border-black p-2 font-semibold uppercase flex items-center justify-center flex-col gap-2"
            >
              Tilføj indkomst
              <p>+</p>
            </button>
            <button className="bg-red-400 rounded-md border-[1px] dark:border-white border-black p-2 font-semibold uppercase flex items-center justify-center flex-col gap-2">
              Tilføj udgift
              <p>+</p>
            </button>
            <button className="bg-purple-400 rounded-md border-[1px] dark:border-white border-black p-2 font-semibold uppercase flex items-center justify-center flex-col gap-2">
              Fjern indkomst
              <p>-</p>
            </button>
            <button className="bg-black text-white rounded-md border-[1px] dark:border-white border-black p-2 font-semibold uppercase flex items-center justify-center flex-col gap-2">
              Fjern udgift
              <p>-</p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
