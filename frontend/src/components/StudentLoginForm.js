import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { navigate, useNavigate } from "react-router-dom";
// import { QRCode } from "./QRCode";

const StudentLoginForm = () => {
  const [userData, setUserData] = useState({
    id: "",
    email: "",
  });
  const [isFormClicked, setIsFormClicked] = useState(false);
  const [otp, setOtp] = useState(null);
  const [totp, setTotp] = useState(null);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [qrPath, setQrPath] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log("errors" + errors);

  //   function preventNonNumericalInput(e) {
  //     e = e || window.event;
  //     var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
  //     var charStr = String.fromCharCode(charCode);

  //     if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
  //   }

  const onSubmit = () => {
    console.log(userData);
    axios.post("http://localhost:8000/api/auth/sendcode/", userData);
    setIsFormClicked(true);
  };

  const onOtpSubmit = () => {
    console.log(otp);
    axios.post("http://localhost:8000/api/auth/verifycode/", {
      email: userData.email,
      code: otp,
    });
    setIsOtpVerified(true);
    axios
      .post("http://localhost:8000/api/auth/generateTOTPKey", {
        email: userData.email,
        id: userData.id,
      })
      .then((res) => {
        console.log(res);
        setQrPath(res.data.qrcode);
      });
  };

  const onTotpSubmit = () => {
    console.log("totp" + totp);
    axios.post("http://localhost:8000/api/auth/validateCode/", {
      email: userData.email,
      id: userData.id,
      code: totp,
    }).then(res=>{
      console.log('clientId',res.data.clientId);
      localStorage.setItem('clientId',res.data.clientId);
    });
    navigate("/request-form");
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res.isLoggedIn == true) {
    //       redirect("/request-form");
    //     }
    //   });
    console.log("redirect called?");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="login-container">
          <div className="form-container">
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Registration ID</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Registration Id"
                  {...register("regId", {
                    required: "This is required.",
                    minLength: {
                      value: 9,
                      message: "The registration id should be 9 digits.",
                    },
                    maxLength: {
                      value: 9,
                      message: "The registration id should be 9 digits.",
                    },
                    pattern: /[0-9]*/,
                  })}
                  value={userData.id}
                  onChange={(e) =>
                    setUserData({ ...userData, id: e.target.value })
                  }
                  required
                />
                <Form.Text className="text-muted">
                  {errors.regId?.message}
                </Form.Text>
                <div className="invalid-feedback">{errors.regId?.message}</div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>VJTI Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="VJTI Email Address"
                  {...register("email", {
                    required: "This is required.",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._]+_[a-z][0-9]+@[a-z]{2,4}\.vjti\.ac\.in$/,
                      message: "Please enter a valid VJTI email address!",
                    },
                  })}
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  required
                />
                <Form.Text className="text-muted">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>

              {!isFormClicked && (
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  className="form-button"
                >
                  Submit
                </Button>
              )}

              {isFormClicked && (
                <Form onSubmit={handleFormSubmit}>
                  <Form.Control
                    type="number"
                    placeholder="Enter OTP"
                    {...register("number", {
                      required: "This is required.",
                      pattern: {
                        value: /^[0-9]{1,6}$/,
                        message:
                          "Please enter the 6-digit OTP sent to your email address",
                      },
                    })}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />

                  {!isOtpVerified && (
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleSubmit(onOtpSubmit)}
                      className="form-button"
                    >
                      Verify OTP
                    </Button>
                  )}
                </Form>
              )}
            </Form>

            {isOtpVerified && (
              <>
                <Form.Label>QR Code</Form.Label>
                <Container
                  dangerouslySetInnerHTML={{ __html: qrPath }}
                ></Container>
                <Form onSubmit={handleFormSubmit}>
                  <Form.Control
                    type="number"
                    placeholder="Enter TOTP after scanning QR code"
                    {...register("number", {
                      required: "This is required.",
                      pattern: {
                        value: /^[0-9]{1,6}$/,
                        message:
                          "Please enter the 6-digit timed OTP which appears after scanning the QR code on your authenticator app",
                      },
                    })}
                    value={totp}
                    onChange={(e) => setTotp(e.target.value)}
                    required
                  />
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit(onTotpSubmit)}
                    className="form-button"
                  >
                    Complete 2FA
                  </Button>
                </Form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentLoginForm;
