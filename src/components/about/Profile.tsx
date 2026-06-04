import ProfilePic from "./ProfilePic"
import ProfileHeader from "./ProfileHeader"
import ProfileLinks from "./ProfileLinks"
import SocialProfiles from "./SocialProfiles"
import DownloadResume from "./DownloadResume"

export default function Profile() {
  return (
    <aside className="profile">
      <ProfilePic />

      <div className="profile__content">
        <ProfileHeader />
        <ProfileLinks />
        <SocialProfiles />
        <DownloadResume />
      </div>
    </aside>
  )
}
