// Postmessages component needs to have a capital first letter. [2]

import React, { useEffect, setErrors, setValues, postMessageList } from "react";
import { TextField, withStyles, Button,  } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/postMessage";

const initialFieldValues = {
    
    title:'',
    message:''
}

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    form: {
        display:'flex',
        flexwrap:'wrap',
        justifyContent:'enter'
    }
})

const PostMessageForm = ({classes,...props}) => {

    useEffect(() => {
        if (props.currentId !== 0){
            
            setValues({
                ...props.postMessageList.find(x => x._id === props.currentId)
            })
            
            setErrors({})
    
        }
    }, [props.currentId])

    const validate = () => {
        let temp = { ...errors }
        temp.title = values.title ? "" : "This field is required"
        temp.message = values.message ? "" : "This field is required"
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x === "")

    }
    
    var {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, props.setCurrentId)

    // const handlesubmit = e => {
        
    //     e.preventDefault()
    //     const onSuccess = () => { 
    //         window.alert('Submitted successfully.')
        
    //         resetForm()
        
    //     }

    //     if (validate()) {

    //         if (props.currentId === 0)
    //             props.createpostmessages(values, onSuccess)
    //         else
    //             props.updatepostmessages(props.currentId,values,onSuccess)
    //     }
    // }

    return ( 
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
            
            <TextField fullWidth
            name="title" 
            variant="outlined" 
            label="Title" 
            onChange={handleInputChange}
            {...(errors.title && {error:true,helperTExt:errors.title})}
            value={values.title}></TextField>
            
            <TextField fullWidth multiline
            name="message" 
            variant="outlined" 
            label="message"
            rows={10}
            onChange={handleInputChange} 
            {...(errors.title && {error:true,helperTExt:errors.message})}
            value={values.message}></TextField>
            
            <Button variant="contained" 
            color="primary" 
            size="small" 
            type="submit">Submit</Button>
        
        </form>
    );
}

const mapstatetoprops = state => ({
    postMessageList : state.postMessage.list // State the List of the Reducer
})

const mapactiontoprops = {
    createpostmessages : actions.create,
    updatepostmessages : actions.update
}

export default connect(mapstatetoprops, mapactiontoprops)(withStyles(styles)(PostMessageForm));