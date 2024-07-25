/* eslint-disable import/no-extraneous-dependencies */
import * as Yup from 'yup';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Field, Formik, ErrorMessage } from 'formik';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';
import { login, sendOtp } from 'src/redux/slices/authSlice';

import Logo from 'src/components/logo';
import OTPInput from 'src/components/otp';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [credentials] = useState({ username: '' });
  const [isSendOtp, setIsSendOtp] = useState(false);
  const [otp, setOtp] = useState('');
  // const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    username: Yup.string()
      .matches(/^\d{10}$/, 'Mobile number must be 10 digits only')
      .required('Mobile number is required'),
  });

  // const validate = async () => {
  //   try {
  //     await validationSchema.validate(credentials, { abortEarly: false });
  //     // setErrors({});
  //     return true;
  //   } catch (err) {
  //     const validationErrors = {};
  //     err.inner.forEach(error => {
  //       validationErrors[error.path] = error.message;
  //     });
  //     setErrors(validationErrors);
  //     return false;
  //   }
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setCredentials({
  //     ...credentials,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(isSendOtp, 'sssssssss', otp);
    if (!isSendOtp) {
      setIsSendOtp(true);
      dispatch(sendOtp(values, otp));
    } else {
      dispatch(login(values));
      router.push('/');
    }
    setSubmitting(false);
  };

  // };

  const renderForm = (
    <Formik
      initialValues={{ username: credentials.username }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, isSubmitting }) => (
        <Form>
          <Stack spacing={3}>
            <Field
              as={TextField}
              name="username"
              label="Mobile Number"
              value={values.username}
              onChange={handleChange}
              helperText={<ErrorMessage name="username" />}
              error={!!values.username && !!ErrorMessage.name}
            />
            {isSendOtp && <OTPInput separator={<span>-</span>} value={otp} onChange={setOtp} length={5} />}
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
            {isSendOtp && (
              <Link variant="subtitle2" underline="hover">
                Resend OTP
              </Link>
            )}
          </Stack>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="inherit"
            loading={auth.status === 'loading'}
          >
            {isSendOtp ? 'Login' : 'Send OTP'}
          </LoadingButton>

          {auth.status === 'failed' && <p>{auth.error}</p>}
        </Form>
      )}
    </Formik>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.3),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Log in</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
