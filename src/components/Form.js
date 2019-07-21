import React, { Component } from "react";
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
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styles from "../styles/FormStyles";
import { dictionary } from "../dictionary";

class Form extends Component {
  // setting up the context for language
  static contextType = LanguageContext;
  render() {
    const { classes } = this.props;
    const { language, changeLanguage } = this.context;
    const { email, password, rememberMe, signIn } = dictionary[language];
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">{signIn}</Typography>
          <Select
            value={language}
            onChange={e => changeLanguage(e.target.value)}
          >
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
  }
}

export default withStyles(styles)(Form);
