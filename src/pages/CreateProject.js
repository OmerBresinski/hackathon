import React from "react";
import { useForm } from "hooks";
import { useHistory } from "react-router";
import Button from "components/Button";
import { URL } from "constant";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Text from 'components/Text'
import * as S from './style'


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '100%',
        },
    },
}));

const CreateProject = () => {
    const history = useHistory();
    const { form, handleChange } = useForm();
    const classes = useStyles();

    const submit = () => {
        history.push(`${URL.project}/${form.projectName}`);
    };

    const handleFieldChange = (value, fieldName) => {
        handleChange({ fieldName: fieldName, value: value })
    }

    return (
        <S.CreateProjectContainer>
            <S.FormCardContainer>
                <Text bold size={'20px'}>{'Upload Project'}</Text>
                <S.FormContainer>
                    <form className={classes.root} noValidate autoComplete="off">

                        <TextField id="filled-title-input"
                            label="Title"
                            type="title"
                            variant="outlined"
                            onChange={(event) => handleFieldChange(event.target.value, "title")} />
                        <TextField id="filled-description-input"
                            label="Description"
                            type="description"
                            variant="outlined"
                            onChange={(event) => handleFieldChange(event.target.value, "description")}
                            multiline={true}
                            rows={8} />
                    </form>
                    <S.Separator></S.Separator>
                    <form>
                        <S.BottomFormSection>
                            <TextField id="filled-role-input"
                                label="Fields i'm looking for"
                                type="field"
                                variant="outlined"
                                onChange={(event) => handleFieldChange(event.target.value, "role")} />
                            <TextField id="filled-attachment-input"
                                label="Attachments"
                                type="attachment"
                                variant="outlined"
                                onChange={(event) => handleFieldChange(event.target.value, "attachment")} />
                        </S.BottomFormSection>
                    </form>
                    <Button label={"Done"} onClick={submit} width='40px' height={'30px'} />
                </S.FormContainer>
            </S.FormCardContainer>
        </S.CreateProjectContainer>
    );
};

export default CreateProject;
