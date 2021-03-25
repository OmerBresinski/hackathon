import React from "react";
import { useForm } from "hooks";
import List from "components/List/";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import * as S from "./style";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(2),
            width: "100%",
        },
    },
}));

const Feed = (props) => {
    const { form, handleChange } = useForm();

    const handleFieldChange = (value, fieldName) => {
        handleChange({ fieldName: fieldName, value: value });
    };

    return (
        <S.Feed>
            <S.InputWrapper>
                <TextField
                    id="filled-title-input"
                    label="Search"
                    type="title"
                    variant="outlined"
                    fullWidth
                    onChange={(event) => handleFieldChange(event.target.value, "search")}
                />
            </S.InputWrapper>
            <List items={props.items} searchString={form.search} columns={4} />
        </S.Feed>
    );
};

export default Feed;
