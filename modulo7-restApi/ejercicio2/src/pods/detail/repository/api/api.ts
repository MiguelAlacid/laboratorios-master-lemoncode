import { CharacterEntity } from "./api.model";

export const getCharacter = async (
  id: string
): Promise<CharacterEntity> => {
  return fetch(`/api/character/${id}`)
    .then((response) => response.json());
};

export const saveBestSentence = async (
  id: string,
  bestSentence: string
): Promise<void> => {
  const response = await fetch(`/api/character/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ bestSentence }),
  });
  if (!response.ok) {
    throw new Error("No se pudo guardar la frase");
  }
};
