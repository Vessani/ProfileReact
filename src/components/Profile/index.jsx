import LinkButton from "./LinkButton"
import ProfileSection from "./ProfileSection"
import Title from "./Title"
import styles from "./styles.module.css"

function handleClick(ev) {
  alert("você agora está seguindo!")
}

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button className={styles.followButton} onClick={handleClick}>Follow</button>      
      </Title>
      <ProfileSection>{props.bios}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-sectioin"
        data-teste="some value"
        aria-label="social links"
      >         
        <LinkButton href={props.githubUrl} target="_blank">GitHub</LinkButton>
        <LinkButton href={props.linkedinUrl} target="_blank">LinkedIn</LinkButton>
        <LinkButton href={props.twitterUrl} target="_blank">Twitter</LinkButton>        
      </ProfileSection>
    </div>
  )
}
