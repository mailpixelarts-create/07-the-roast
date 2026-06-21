import { useEffect, useRef } from 'react'
import { animateTeam } from '../../animations/sections'
import { TEAM_MEMBERS } from '../../utils/constants'
import './Team.scss'

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      animateTeam(sectionRef.current)
    }
  }, [])

  return (
    <section className="team section" id="team" ref={sectionRef}>
      <div className="container">
        <div className="team__header">
          <span className="section-label">07 / The Team</span>
          <h2 className="team__title font-display">
            The <span className="team__title-accent">Craftspeople</span>
          </h2>
          <hr className="copper-rule" />
          <p className="team__desc">
            Every great cup starts with a team obsessed with perfection.
            These are the people behind every roast.
          </p>
        </div>

        <div className="team__grid">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={member.name} className="team__member" data-cursor>
              <div className="team__portrait">
                <div className="team__portrait-inner">
                  <span className="team__portrait-initial font-display">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="team__portrait-frame" />
              </div>
              <div className="team__info">
                <span className="team__role font-mono">{member.role}</span>
                <h3 className="team__name font-display">{member.name}</h3>
                <p className="team__bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
