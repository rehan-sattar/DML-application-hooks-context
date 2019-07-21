import React, { useContext } from "react";
import {
  Avatar,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Button,
  Paper,
  Typography,
  Select,
  MenuItem,
  withStyles
} from "@material-ui/core";
import { LanguageContext } from "../contexts/LanguageContext";
import { dictionary } from "../dictionary";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styles from "../styles/FormStyles";

const Form = props => {
  const { classes } = props;
  const { language, changeLanguage } = useContext(LanguageContext);
  const { email, password, rememberMe, signIn } = dictionary[language];
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{signIn}</Typography>
        <Select value={language} onChange={e => changeLanguage(e.target.value)}>
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="french">French</MenuItem>
          <MenuItem value="urdu">Urdu</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">{email}</InputLabel>
            <Input type="email" id="email" name="email" required autoFocus />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">{password}</InputLabel>
            <Input type="password" id="password" required name="password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={rememberMe}
          />
          <Button
            type="submit"
            className={classes.submit}
            variant="contained"
            color="primary"
            fullWidth
          >
            {signIn}
          </Button>
        </form>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(Form);
