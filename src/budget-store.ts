import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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
      incomes: [],
      expenses: [],
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
