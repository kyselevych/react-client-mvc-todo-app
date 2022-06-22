import React, {ChangeEvent, useEffect} from "react";
import {Field} from "components";
import {useActions} from "hooks/useActions";
import {useTypedSelector} from "hooks/useTypedSelector";

function StorageSelect() {
    const {fetchRepositories, switchRepository} = useActions();
    const repositories = useTypedSelector(state => state.repositories.repositories);
    const currentRepository = useTypedSelector(state => state.repositories.currentRepository);

    const switchRepositoryHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        const repositoryType = event.currentTarget.value;
        switchRepository(repositoryType);
    };

    useEffect(() => {
        fetchRepositories();
    }, []);

    return (
        <Field style={{marginLeft: "auto"}} theme="dark">
            <select
                onChange={switchRepositoryHandler}
                defaultValue={currentRepository?.type}
            >
                {repositories?.map(repository =>
                    <option value={repository.type} key={repository.type}>{repository.type}</option>)
                }
            </select>
        </Field>
    );
}

export default StorageSelect;