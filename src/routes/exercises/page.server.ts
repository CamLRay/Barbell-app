import { exercises } from "./data";

export function load() {
  return {
    summaries: exercises.map((exercise) => ({
      name: exercise.name,
      bodypart: exercise.bodypart,
      performance: exercise.performance
    }))
  };
}