import { serial, text, boolean, timestamp, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id"),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  role: text("role").$type<"admin" | "customer">(),
  isCoach: boolean("isCoach"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const workout = pgTable("workout", {
  name: text("name"),
  type: text("type")
})