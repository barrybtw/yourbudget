import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * Fake data to be deleted later
 */

const incomes = [
  {
    id: 1,
    name: "Salary",
    amount: 50000,
    frequency: "biweekly",
  },
  {
    id: 2,
    name: "Freelance",
    amount: 2000,
    frequency: "monthly",
  },
] satisfies Income[];

const expenses = [
  {
    id: 1,
    name: "Rent",
    amount: 1000,
    date_added: new Date(),
    frequency: "monthly",
  },
  {
    id: 2,
    name: "Groceries",
    amount: 200,
    date_added: new Date(),
    frequency: "weekly",
  },
] satisfies Expense[];

type Income = {
  id: number;
  name: string;
  amount: number;
  frequency: "biweekly" | "monthly" | "yearly";
};

type Expense = {
  id: number;
  name: string;
  amount: number;
  date_added: Date;
  frequency?: "daily" | "weekly" | "monthly" | "yearly";
};

interface BudgetStore {
  incomes: Income[];
  expenses: Expense[];
  addIncome: (income: Income) => void;
  addExpense: (expense: Expense) => void;
  removeIncome: (id: number) => void;
  removeExpense: (id: number) => void;
  editIncome: (id: number, income: Partial<Income>) => void;
  resetBudget: () => void;
}

export const useBudgetStore = create<BudgetStore>()(
  persist(
    (set, _get) => ({
      incomes: incomes,
      expenses: expenses,
      addIncome: (income) =>
        set((state) => ({ incomes: [...state.incomes, income] })),
      addExpense: (expense) =>
        set((state) => ({ expenses: [...state.expenses, expense] })),
      removeIncome: (id) =>
        set((state) => ({
          incomes: state.incomes.filter((incomes) => incomes.id !== id),
        })),
      removeExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((expense) => expense.id !== id),
        })),
      editIncome: (id, income) =>
        set((state) => ({
          incomes: state.incomes.map((i) =>
            i.id === id ? { ...i, ...income } : i
          ),
        })),
      resetBudget: () => set({ incomes: [], expenses: [] }),
    }),
    {
      name: "budget-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
