import './css/resume.css';

export default function Resume() {
    return (
 <main>
        <div className="resume-title-center">
            <h1>Resume</h1>
        </div>
        <div className="resume-row">
            <h2>Experience</h2>
            <a href="https://drive.google.com/file/d/1sI9nwPYZ1Vza5OXHmHynP9U7_BHoNt5B/view?usp=sharing" target='_blank' className="btn btn-primary-download resume-download">DOWNLOAD CV</a>
        </div>
        <section className="resume-section-card">
            <div className="resume-card">
                <div className="resume-card-left">
                    <div className="resume-card-date">2023 – 2025</div>
                    <div className="resume-card-position">Product Engineer</div>
                    <div className="resume-card-company">KN42 Lacer Cut</div>
                    <div className="resume-card-location">16/6 M.7 S.Lampraya, Nakhonpathom</div>
                </div>
                <div className="resume-card-right">
                    <p>- Designed part models and drawings using SolidWorks, ArtCAM, and AutoCAD </p>
                    <p>- Prepared and managed daily work schedules and production plans </p>
                    <p>- Monitored manufacturing processes to ensure targets were met</p>
                    <p>- Operated and maintained CNC laser cutting and CNC milling machines</p>
                </div>
            </div>
        </section>
        <section className="resume-section-card">
            <div className="resume-card">
                <div className="resume-card-left">
                    <div className="resume-card-date">2022 – 2023</div>
                    <div className="resume-card-position">Product Engineer</div>
                    <div className="resume-card-company">STK</div>
                    <div className="resume-card-location">16/6 M.7 S.Lampraya, Nakhonpathom</div>
                </div>
                <div className="resume-card-right">
                    <p>- Designed part models and technical drawings using SolidWorks, ArtCAM, and AutoCAD </p>
                    <p>- Developed and managed daily production schedules to optimize workflow </p>
                    <p>- Monitored and controlled manufacturing processes to consistently meet production targets</p>
                </div>
            </div>
        </section>
        <div className="resume-row">
            <h2>Education</h2>
        </div>
        <section className="resume-section-card">
            <div className="resume-card">
                <div className="resume-card-left">
                    <div className="resume-card-date">King mongkut's institute of technology ladkrabang</div>
                    <div className="resume-card-position">Bachelor of Science Applied Physics</div>
                    <div className="resume-card-company">GPA: 2.20</div>
                </div>
            </div>
        </section>
        <div className="resume-row">
            <h2>Skill</h2>
        </div>
        <section className="resume-section-card">
            <div className="resume-card">   
                <div className="resume-card-right">
                    <p>- Solidwork </p>
                    <p>- Artcam</p>
                    <p>- Autocad</p>
                    <p>- Golang</p>
                    <p>- HTML</p>
                    <p>- Javascript</p>
                    <p>- React Js</p>
                </div>
            </div>
        </section>
        <div className="resume-row">
            <h2>Languages</h2>
        </div>
        <section className="resume-section-card">
            <div className="resume-card">   
                <div className="resume-card-right">
                    <p>- Thai</p>
                    <p>- English</p>
                </div>
            </div>
        </section>
    </main>
      );
}