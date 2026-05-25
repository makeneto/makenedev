import ProfilePic from "./ProfilePic"
import ProfileHeader from "./ProfileHeader"
import ProfileContact from "./ProfileContact"
import SocialProfiles from "./SocialProfiles"
import DownloadResume from "./DownloadResume"

export default function Profile() {
  return (
    <aside className="profile">
      <ProfilePic />

      <div className="profile__content">
        <ProfileHeader />
        <ProfileContact />
        <SocialProfiles />
        <DownloadResume />
      </div>
    </aside>
  )
}
