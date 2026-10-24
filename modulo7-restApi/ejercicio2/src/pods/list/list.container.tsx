import React from "react";
import { List } from "./list.component";
import { CharacterEntity } from "./list.vm";
import { getCharacters } from "./repository";
import { useDebounce } from "#common/hooks";

export const ListContainer: React.FC = () => {

    const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [personaje, setPersonaje] = React.useState("");
    const debouncedPersonaje = useDebounce(personaje, 800);

    const onPersonajeChange = (value: string) => {
        setPersonaje(value);
    }

    React.useEffect(() => {
        setLoading(true);
        getCharacters({ name: debouncedPersonaje })
            .then((result) => {
                setCharacters(result);
            })
            .finally(() => setLoading(false));
    }, [debouncedPersonaje]);

    return (
        <List
            personaje={personaje}
            onPersonajeChange={onPersonajeChange}
            characters={characters}
            loading={loading}
        />
    )
}


