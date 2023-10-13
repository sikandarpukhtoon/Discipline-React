import React, { useState } from "react"

import SignIn from "./SignIn"
import SignUp from "./SignUp"
import AdminDashboard from "./AdminDashboard"

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <SignIn changeAuthMode={changeAuthMode} />
    )
  }

  return (
    <SignUp changeAuthMode={changeAuthMode} />
  )
}