/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Form, Field, Formik, ErrorMessage } from 'formik';

import { Box, Grid, Button, MenuItem, TextField, Typography, InputLabel,} from '@mui/material';


// Define validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
    .required('Mobile number is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  file: Yup.mixed().required('File is required'),
});

const states = ['State1', 'State2', 'State3']; // Example states

const MyForm = ({rowData}) => {
  const initialValues = {
    name: rowData.name || '',
    mobile: rowData.mobile || '',
    city: rowData.city || '',
    state: rowData.state || '',
    file: rowData.file || null,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form>
          <Box sx={{ width: '100%', mt: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              {rowData.id ? 'Edit ':'Add '} Lead
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  name="name"
                  as={TextField}
                  fullWidth
                  label="Name"
                  variant="outlined"
                  helperText={<ErrorMessage name="name" />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="mobile"
                  as={TextField}
                  fullWidth
                  label="Mobile"
                  variant="outlined"
                  helperText={<ErrorMessage name="mobile" />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="city"
                  as={TextField}
                  fullWidth
                  label="City"
                  variant="outlined"
                  helperText={<ErrorMessage name="city" />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="state"
                  as={TextField}
                  select
                  fullWidth
                  label="State"
                  variant="outlined"
                  helperText={<ErrorMessage name="state" />}
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="file">Upload File</InputLabel>
                <input
                  id="file"
                  name="file"
                  type="file"
                  onChange={(event) => {
                    setFieldValue('file', event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage name="file" component="div" />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;


MyForm.propTypes = {
  rowData: PropTypes.any,
};
