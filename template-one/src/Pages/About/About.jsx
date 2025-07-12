import React from "react";
import "./About.css";

import Copy from '../../Components/Copy/Copy'
import ButtonSchedule from "../../Components/Buttons/ButtonSchedule";

const About = () => {
    return(
        <div className="About-style">
            <h1 style={{ color: 'var(--secondary-color)' }}>Welcome to Jones & Brown Legal</h1>
            <div className="text-about">
                            <section className="info-about">
                    <Copy>
                    <p >
                        Jones & Brown Legal has been a pillar of the Los Angeles legal community, providing expert legal counsel across a wide spectrum of practice areas. We are more than just attorneys, we are trusted advisors, dedicated advocates, and strategic partners committed to achieving the best possible outcomes for our clients.
                    </p>
                </Copy>
            </section>
            <section className="info-about">
                    <Copy>
                    <p>
                        We combine decades of experience with a deep understanding of the complexities of California law. Our team of seasoned trial attorneys boasts a proven track record of success in courtrooms throughout Los Angeles and beyond. We pride ourselves on our comprehensive expertise, covering nearly every field of law, ensuring that whatever your legal challenge, we have the knowledge and experience to guide you.
                    </p>
                </Copy>
            </section>
            </div>
            <ButtonSchedule />
        </div>
    )
}

export default About;
