import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon"></i>
            <div>
                <h3 className="about__title">
                    <span className="about__subtitle">
                    </span>
                </h3>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">5</h3>
                    <span className="about__subtitle">
                        Project Completed
                    </span>
                
            </div>
        </div>


        <div className="about__box">
            <i className="about__icon"></i>
            <div>
                <h3 className="about__title">
                    <span className="about__subtitle">
                    </span>
                </h3>
            </div>
        </div>

    </div>
  )
}

export default AboutBox
