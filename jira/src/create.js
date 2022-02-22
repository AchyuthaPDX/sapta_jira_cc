import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from "@material-ui/core/KeyboardArrowRight"
import { makeStyles } from '@material-ui/core/'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }

})

export default function Create() {
    const classes = useStyles()
    const [title, setTile] = useState('')
    const [title, setTile] = useState('')
    )

    return (
        <Container>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Creating new table
            </Typography>

            <form noValidate autoComplete="off">
                <TextField
                    className={classes.field}
                    label="Jira Issue Description"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                />
                <TextField
                    className={classes.field}
                    label="Jira Issue Description"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                />

                <Button
                    onClick={() => console.log('create jira issue')}
                    type="submit"
                    color="secondary"
                    variant='contained'
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>
            </form>



        </Container>


    )


}