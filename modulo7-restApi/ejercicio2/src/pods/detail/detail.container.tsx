import React from "react";
import { Detail } from "./detail.component";
import { CharacterEntity } from "./detail.vm";
import { getCharacter, saveBestSentence } from "./repository";

interface Props {
  id: string;
}

export const DetailContainer: React.FC<Props> = ({ id }) => {
  const [character, setCharacter] = React.useState<CharacterEntity>();
  const [loading, setLoading] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getCharacter(id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, [id]);

  const onSaveBestSentence = (bestSentence: string) => {
    setSaving(true);
    saveBestSentence(id, bestSentence)
      .then(() => setCharacter((c) => c && { ...c, bestSentence }))
      .finally(() => setSaving(false));
  };

  return (
    <Detail
      character={character}
      loading={loading}
      saving={saving}
      onSaveBestSentence={onSaveBestSentence}
    />
  );
};
