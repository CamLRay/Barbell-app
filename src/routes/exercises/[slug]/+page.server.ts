import { error } from "@sveltejs/kit";
import { exercises } from "../data";

export function load({ params }) {
  const exercise = exercises.find((exercise) => exercise.id.toString() === params.slug);

  if(!exercise) throw error(404);

  return {
    exercise
  }
};
