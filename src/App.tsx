import { Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import SpinResultScreen from './screens/SpinResultScreen'
import CommitmentScreen from './screens/CommitmentScreen'
import CheckInScreen from './screens/CheckInScreen'
import CheckInCompleteScreen from './screens/CheckInCompleteScreen'
import LocketFeedScreen from './screens/LocketFeedScreen'
import ProfileScreen from './screens/ProfileScreen'
import WriteReviewScreen from './screens/WriteReviewScreen'
import GroupSpinScreen from './screens/GroupSpinScreen'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/spin-result" element={<SpinResultScreen />} />
      <Route path="/commitment" element={<CommitmentScreen />} />
      <Route path="/check-in" element={<CheckInScreen />} />
      <Route path="/check-in-complete" element={<CheckInCompleteScreen />} />
      <Route path="/locket" element={<LocketFeedScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="/write-review" element={<WriteReviewScreen />} />
      <Route path="/group-spin" element={<GroupSpinScreen />} />
    </Routes>
  )
}
