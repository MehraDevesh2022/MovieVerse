import { LoadingButton } from "@mui/lab";
import { Box, Divider, Stack, TextField , Typography} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import uiConfigs from "../configs/ui.configs";
import { useState } from "react";
import userApi from "../api/modules/user.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { setAuthModalOpen } from "../redux/features/authModalSlice";

const PasswordUpdate = () => {
  const [onRequest, setOnRequest] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "password minimum 8 characters")
        .required("password is required"),
      newPassword: Yup.string()
        .min(8, "newPassword minimum 8 characters")
        .required("newPassword is required"),
      confirmNewPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "confirmNewPassword not match")
        .min(8, "confirmNewPassword minimum 8 characters")
        .required("confirmNewPassword is required"),
    }),
    onSubmit: async (values) => onUpdate(values),
  });

  const onUpdate = async (values) => {
    if (onRequest) return;
    setOnRequest(true);

    const { response, err } = await userApi.passwordUpdate(values);

    setOnRequest(false);

    if (err) toast.error(err.message);
    if (response) {
      form.resetForm();
      navigate("/");
      dispatch(setUser(null));
      dispatch(setAuthModalOpen(true));
      toast.success("Update password success! Please re-login");
    }
  };

  return (
    <Box
      sx={{
        ...uiConfigs.style.mainContent,
        border: "0.5px solid #f2f2f2",
        maxWidth: "400px",
        margin: "auto",
        marginTop: "100px",
        padding: "32px 22px",
        borderRadius: "10px",
        boxShadow: "0 0 10px 0px #000000",
        textAlign: "center",
        alignSelf: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginBottom: 2,
          marginTop: 2,
          padding: "18px",
        }}
      >
        Update Password
      </Typography>
      <Divider
        sx={{
          width: "50%",
          height: "2px",
          margin: "-1rem auto 2.5rem ",
          backgroundColor: "red",
        }}
      />
      <Box component="form" onSubmit={form.handleSubmit}>
        <Stack spacing={2}>
          <TextField
            type="password"
            placeholder="password"
            name="password"
            fullWidth
            value={form.values.password}
            onChange={form.handleChange}
            color="success"
            error={form.touched.password && form.errors.password !== undefined}
            helperText={form.touched.password && form.errors.password}
          />
          <TextField
            type="password"
            placeholder="new password"
            name="newPassword"
            fullWidth
            value={form.values.newPassword}
            onChange={form.handleChange}
            color="success"
            error={
              form.touched.newPassword && form.errors.newPassword !== undefined
            }
            helperText={form.touched.newPassword && form.errors.newPassword}
          />
          <TextField
            type="password"
            placeholder="confirm new password"
            name="confirmNewPassword"
            fullWidth
            value={form.values.confirmNewPassword}
            onChange={form.handleChange}
            color="success"
            error={
              form.touched.confirmNewPassword &&
              form.errors.confirmNewPassword !== undefined
            }
            helperText={
              form.touched.confirmNewPassword && form.errors.confirmNewPassword
            }
          />

          <LoadingButton
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: 4 }}
            loading={onRequest}
          >
            update password
          </LoadingButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default PasswordUpdate;
