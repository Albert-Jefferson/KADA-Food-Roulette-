import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomeSpinRewards from './pages/HomeSpinRewards';
import LocketFeed from './pages/LocketFeed';
import ProfileTasteProfile from './pages/ProfileTasteProfile';
import LuckySpinWheel from './pages/LuckySpinWheel';
import SpinResult from './pages/SpinResult';
import MysteryBoxReveal from './pages/MysteryBoxReveal';
import CheckInVerification from './pages/CheckInVerification';
import CheckInCompleteRewards from './pages/CheckInCompleteRewards';
import WriteReview from './pages/WriteReview';
import ReviewSubmitted from './pages/ReviewSubmitted';
import GroupSpinWhoSpins from './pages/GroupSpinWhoSpins';
import GroupVoteVeto from './pages/GroupVoteVeto';
import GroupVoteResult from './pages/GroupVoteResult';
import GroupCheckInVerification from './pages/GroupCheckInVerification';
import GroupCheckInCompleteRewards from './pages/GroupCheckInCompleteRewards';
import SeasonGarden from './pages/SeasonGarden';
import EnhancedSeasonGardenProgress from './pages/EnhancedSeasonGardenProgress';
import StreakDashboard from './pages/StreakDashboard';
import FriendsLeaderboardDetail from './pages/FriendsLeaderboardDetail';
import NearbyRestaurantsLeaderboard from './pages/NearbyRestaurantsLeaderboard';
import NearbyRestaurantsMapView from './pages/NearbyRestaurantsMapView';
import KhCCommitment from './pages/KhCCommitment';
import ShareYourHarvestSuccess from './pages/ShareYourHarvestSuccess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeSpinRewards />} />
          <Route path="/locket" element={<LocketFeed />} />
          <Route path="/profile" element={<ProfileTasteProfile />} />
          <Route path="/spin" element={<LuckySpinWheel />} />
          <Route path="/spin/result" element={<SpinResult />} />
          <Route path="/mystery-box" element={<MysteryBoxReveal />} />
          <Route path="/check-in" element={<CheckInVerification />} />
          <Route path="/check-in/rewards" element={<CheckInCompleteRewards />} />
          <Route path="/review" element={<WriteReview />} />
          <Route path="/review/submitted" element={<ReviewSubmitted />} />
          <Route path="/group-spin/who-spins" element={<GroupSpinWhoSpins />} />
          <Route path="/group-spin/veto" element={<GroupVoteVeto />} />
          <Route path="/group-spin/result" element={<GroupVoteResult />} />
          <Route path="/group-check-in" element={<GroupCheckInVerification />} />
          <Route path="/group-check-in/rewards" element={<GroupCheckInCompleteRewards />} />
          <Route path="/garden" element={<SeasonGarden />} />
          <Route path="/garden/enhanced" element={<EnhancedSeasonGardenProgress />} />
          <Route path="/streak" element={<StreakDashboard />} />
          <Route path="/leaderboard" element={<FriendsLeaderboardDetail />} />
          <Route path="/leaderboard/restaurants" element={<NearbyRestaurantsLeaderboard />} />
          <Route path="/leaderboard/map" element={<NearbyRestaurantsMapView />} />
          <Route path="/commitment" element={<KhCCommitment />} />
          <Route path="/share/harvest" element={<ShareYourHarvestSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
