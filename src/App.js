import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Auth from "./assets/screens/Auth";
import AdminDashboard from "./assets/screens/AdminDashboard";
import REPORTFORM from "./assets/screens/REPORTFORM";

import PreviousRecord from "./assets/screens/PreviousRecord";
import MyDashboard from "./assets/screens/MyDashboard/MyDashboard";
import StudentPreviousRecord from "./assets/screens/MyDashboard/StudentPreviousRecord";
import SetMeetingSchedule from "./assets/screens/MyDashboard/SetMeetingSchedule";
import AssignPunishment from "./assets/screens/MyDashboard/AssignPunishment";
import StudentDashboard from "./assets/screens/StudentDashboard/StudentDashboard";
import AppealForm from "./assets/screens/StudentDashboard/AppealForm";
import Directordashboard from "./assets/screens/DirectorDashboard/Directordashboard";
import ProgressReport from "./assets/screens/ProgressReport";
import ProfileScreen from "./assets/screens/ProfileScreen";
import MyCases from "./assets/screens/MyDashboard/MyCases";
import NavbarScreen from "./assets/screens/NavBAr/NavbarScreen";
import AllCases from "./assets/screens/DirectorDashboard/AllCases";
import NewCommittee from "./assets/screens/HoCDashBoard/NewCommittee";
import ShowAppeal from "./assets/screens/DirectorDashboard/ShowAppeal";
import HoCDashboard from "./assets/screens/HoCDashBoard/HoCDashboard";
import MeetingDetails from "./assets/screens/MyDashboard/MeetingDetails";
import CaseDetails from "./assets/screens/MyDashboard/CaseDetails";
import MyCase from "./assets/screens/StudentDashboard/MyCase";
import Comments from "./assets/screens/DirectorDashboard/Comments";
import Comment from "./assets/screens/HoCDashBoard/Comment";
import ShowCases from "./assets/screens/HoCDashBoard/ShowCases";
import MeetingDetail from "./assets/screens/HoCDashBoard/MeetingDetail";
import ShowAllCases from "./assets/screens/HoCDashBoard/ShowAllCases";
import RelexPunishment from "./assets/screens/RelexPunishment";
import NewHoc from "./assets/screens/DirectorDashboard/NewHoc";

import ChooceHoc from "./assets/screens/DirectorDashboard/ChooceHoc";
import Reg10 from "./assets/screens/Reg10";
import EachCaseReg10 from "./assets/EachCaseReg10";

import SetTrashHold from "./assets/screens/SetTrashHold";
import StudentDetail from "./assets/screens/StudentDetail";
import Smoking10student from "./assets/screens/Smoking10student";
import SetCatagoryReg10 from "./assets/screens/SetCatagoryReg10";
import setfight10value from "./assets/screens/setfight10value";
import SetSmoking10value from "./assets/screens/SetSmoking10value";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="admin" element={<AdminDashboard />} />
      <Route path="reportform" element={<REPORTFORM />} />
      <Route path="showappeal" element={<ShowAppeal />} />

      <Route path="/hocdashboard" element={<HoCDashboard />}>
        <Route path="progressReport" element={<ProgressReport />} />
        <Route path="MeetingDetail" element={<MeetingDetail />} />
        <Route path="ShowCases" element={<ShowCases />} />
        {/* <Route path="relxpunsihment" element={<RelexPunishment />} /> */}
        <Route path="newcommitee" element={<NewCommittee />} />
        <Route path="cmnts" element={<Comment />} />
        <Route path="ShowAllCases" element={<ShowAllCases />} />
      </Route>

      <Route path="MeetingDetails" element={<MeetingDetails />} />
      <Route path="PreviousRecord" element={<PreviousRecord />} />
      <Route path="navbar" element={<NavbarScreen />} />

      {/* //my Dashboard */}
      <Route path="/MyDashboard" element={<MyDashboard />}>
        <Route path="progressReport" element={<ProgressReport />} />
        <Route path="MeetingDetails" element={<MeetingDetails />} />
        <Route path="mycase" element={<MyCases />} />
      </Route>
      {/* //................ */}
      <Route path="/assignpunishment" element={<AssignPunishment />} />

      <Route path="/studentdashboard" element={<StudentDashboard />}>
        <Route path="setmeetingschedule" element={<SetMeetingSchedule />} />

        <Route path="cases" element={<MyCase />} />
      </Route>

      {/* Director Dashboard */}

      <Route path="/db" element={<Directordashboard />}>
        <Route path="allcases" element={<AllCases />} />
        <Route path="showappeal" element={<ShowAppeal />} />
        <Route path="comments" element={<Comments />} />
        <Route path="newhoc" element={<NewHoc />} />
        <Route path="chooce" element={<ChooceHoc />} />
      </Route>

      <Route
        path="/studentperviousrecord"
        element={<StudentPreviousRecord />}
      />
      <Route path="/setmeetingschedule" element={<SetMeetingSchedule />} />
      <Route path="ps" element={<ProfileScreen />} />
      <Route path="/appealform" element={<AppealForm />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="casedetails" element={<CaseDetails />} />
      <Route path="/progressReport" element={<ProgressReport />} />
      <Route path="/relxpunsihment" element={<RelexPunishment />} />
      <Route path="reg10" element={<Reg10 />} />
      <Route path="eachcasereg10" element={<EachCaseReg10 />} />
      <Route path="setvalue" element={<SetTrashHold />} />
      <Route path="studentdetail" element={<StudentDetail />} />
      <Route path="smoking10" element={<Smoking10student />} />
      <Route path="catagoryreg10" element={<SetCatagoryReg10 />} />
      <Route path="fight10" element={<setfight10value />} />
      <Route path="setsmoking10" element={<SetSmoking10value />} />
    </Routes>
  );
}

export default App;
