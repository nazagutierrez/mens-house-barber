"use client";

import React, { useEffect, useState } from "react";
import {
  Step,
  StepLabel,
  Stepper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Calendar } from "./Calendar";
import { Clock } from "./Clock";
import { useStepContext } from "../../components/contexts/stepContext";
import { useUserContext } from "../../components/contexts/userContext";
import NeedAuthorization from "./NeedAuthorization";
import Confirmation from "./Confirmation";
import getUsers from "../controllers/getAllUsers";
import FinalStep from "./FinalStep";
import { useDateContext } from "../../components/contexts/dateContext";
import setTurn, { getAllTurns } from "../controllers/getAndSetTurn";


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const stepStyle = {
  "& .Mui-active": {
    "&.MuiStepIcon-root": {
      color: "#B6B6B6",
      fontSize: "2rem",
    },
    "& .MuiStepConnector-line": {
      borderColor: "#B6B6B6",
    },
  },
  "& .Mui-completed": {
    "&.MuiStepIcon-root": {
      color: "#37a31c",
      fontSize: "2rem",
    },
    "& .MuiStepConnector-line": {
      borderColor: "#37a31c",
    },
  },
};

export default function ProgressStepper() {
  const { activeStep, handleNext, handleBack } = useStepContext();
  const { user } = useUserContext();
  const { date, setDate } = useDateContext();
  const [listedUsers, setListedUsers] = useState(null);
  const [usersTurns, setUsersTurns] = useState(null);

  const steps = [<p key={1}>Día</p>, <p key={2}>Hora</p>, <p key={3}>Confirmar</p>];
  const stepDescription = [
    <Calendar usersTurns={usersTurns} key={1}/>,
    <Clock usersTurns={usersTurns} key={2}/>,
    <Confirmation key={3}/>,
    <FinalStep key={4}/>,
  ];

  useEffect(() => {
    getUsers().then((r) => {
      setListedUsers(r);
    });
      getAllTurns().then((r) => {
        setUsersTurns(r);
      });
  }, []);
  
  const isAuthorized = () => {
    let authorizedUserId = listedUsers?.find(
      (listdUser) => listdUser.id === user?.uid && listdUser.esAutorizado
    );
    if (authorizedUserId) {
      return true;
    }
  };

  const goBackFunc = () => {
    if (activeStep === 1) {
      setDate((prevState) => ({
        ...prevState,
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0
      }));
    }
    handleBack()
  }

  const submitForm = () => {
    handleNext()
    setTurn(user.uid, date);
  }

  return (
    <>
      {isAuthorized() ? (
        <ThemeProvider theme={darkTheme}>
          <Stepper
            sx={stepStyle}
            className="px-3"
            activeStep={activeStep}
            alternativeLabel
          >
            {steps.map((step) => (
              <Step key={step.props.children}>
                <StepLabel className="mb-2">{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {stepDescription[activeStep]}
            <div className="bg-turnos flex w-full justify-between items-center gap-2 px-4 md:px-6 text-xl">
              <button
                className={`${activeStep === 3 && "hidden"} bg-grayCustom text-effect px-3 py-1 rounded-sm disabled:opacity-60 my-3`}
                onClick={() => goBackFunc()}
                disabled={activeStep === 0}
              >
                ATRAS
              </button>
              <button
                className={`${activeStep === 3 && "hidden"} bg-grayCustom text-effect px-3 py-1 rounded-sm disabled:opacity-60 my-3`}
                onClick={activeStep < 2 ? handleNext : submitForm}
                disabled={activeStep === 3 || (activeStep === 0 && date.day === 0) || (activeStep === 1 && date.hour === 0) || activeStep === 1 && (date.hour < 9 || date.hour > 19)}
              >
                {activeStep === 2 ? "FINALIZAR" : "SIGUIENTE"}
              </button>
            </div>
          </>
            { activeStep === 0 && 
              <p className="text-center text-darkerWhite mt-3 w-72 md:w-full">
                Si no encontras turno o vienen de a dos contactá con nosotros.
              </p>
            }
        </ThemeProvider>
      ) : <NeedAuthorization />}
    </>
  );
}
