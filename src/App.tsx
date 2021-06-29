// import { useState } from 'react';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import ApiServiceRequestAsync from './utils/ApiService';

// function Alert(props: any) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export interface IResponseError {
//   status: Status;
//   message: string;
// }

// type Status = 'success' | 'info' | 'warning' | 'error';

// export interface INotification {
//   open: boolean;
//   status: Status;
//   message: string;
// };


// function App() {
//   const [loading, setLoading] = useState(false);
//   const [notification, setNotification] = useState<INotification>({ open: false, status: 'success', message: '' });
//   const classes = useStyles();

//   const handleSubmitAsync = async () => {
//     const response = await ApiServiceRequestAsync<any>({ method: 'get', url: 'blocos' }, setLoading, setNotification);

//     if (!(response as IResponseError)) {
//       console.log('deu certo');
//     }
//   };

//   const handleClose = (event: any, reason: any) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setNotification({ ...notification, open: false });
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <Snackbar open={notification.open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
//         <Alert onClose={handleClose} severity={notification.status}>
//           {notification.message}
//         </Alert>
//       </Snackbar>
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>

//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <div style={{ position: 'relative', margin: 8 }}>
//             <Button
//               onClick={handleSubmitAsync}
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//               disabled={loading}
//             >
//               Sign In
//             </Button>
//             {loading && <CircularProgress size={24} style={{ position: 'absolute', top: '50%', bottom: '50%', marginTop: -7, marginLeft: -209 }} />}
//           </div>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={8}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }

// export default App;
export default function App() { };
