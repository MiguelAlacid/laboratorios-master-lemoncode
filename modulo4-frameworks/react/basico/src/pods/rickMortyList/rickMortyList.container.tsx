import React from "react";
import { List } from "./rickMortyList.component";
import { CharacterEntity } from "./rickMortyList.vm";
import { getCharacters } from "./repository";
import { useDebounce } from "@/common";

export const RickMortyListContainer: React.FC = () => {

    const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [personaje, setPersonaje] = React.useState("");
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);
    const debouncedPersonaje = useDebounce(personaje, 800);

    const onPersonajeChange = (value: string) => {
        setPersonaje(value);
    }

    const onPageChange = (newPage: number) => {
        setPage(newPage);
    }

    React.useEffect(() => {
        setPage(1);
    }, [debouncedPersonaje]);

    React.useEffect(() => {
        setLoading(true);
        getCharacters({ name: debouncedPersonaje, page })
            .then((result) => {
                setCharacters(result.characters);
                setTotalPages(result.totalPages);
            })
            .finally(() => setLoading(false));
    }, [debouncedPersonaje, page]);

    return (
        <List
            personaje={personaje}
            onPersonajeChange={onPersonajeChange}
            characters={characters}
            loading={loading}
            page={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
        />
    )
}


