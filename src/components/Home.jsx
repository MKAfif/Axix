import React, { useState, useEffect } from 'react'
import heroImg from '../assets/1st.png'
import logo from '../assets/logo.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const programTabs = [
  { key: 'language', label: 'Language Proficiency & Communication' },
  { key: 'competitive', label: 'Competitive Exam Training' },
  { key: 'school', label: 'School Tuition' },
  { key: 'degree', label: 'Degree Courses' },
  { key: 'support', label: 'Support Services' },
];

const programs = {
  language: [
    { title: 'IELTS', desc: 'International English Language Testing System', img: 'https://placehold.co/160x160?text=IELTS' },
    { title: 'OET', desc: 'Occupational English Test', img: 'https://placehold.co/160x160?text=OET' },
    { title: 'PTE', desc: 'Pearson Test of English', img: 'https://placehold.co/160x160?text=PTE' },
    { title: 'DET', desc: 'Duolingo English Test', img: 'https://placehold.co/160x160?text=DET' },
    { title: 'TOEFL', desc: 'Test of English as a Foreign Language', img: 'https://placehold.co/160x160?text=TOEFL' },
    { title: 'Spoken English', desc: 'Comprehensive spoken English training', img: 'https://placehold.co/160x160?text=Spoken+English' },
  ],
  competitive: [
    { title: 'TRAINING FOR PSC, UPSC, RRB', desc: 'Coaching for PSC, UPSC, and RRB exams', img: 'https://placehold.co/160x160?text=PSC+UPSC+RRB' },
    { title: 'LLB ENTRANCE', desc: 'Preparation for LLB entrance exams', img: 'https://placehold.co/160x160?text=LLB+Entrance' },
  ],
  school: [
    { title: 'SPECIAL TUITIONS FOR CBSE, ICSE & STATE SYLLABUS', desc: 'Comprehensive tutoring for CBSE, ICSE, and State Syllabus students', img: 'https://placehold.co/160x160?text=CBSE+ICSE+State' },
    { title: 'PLUS ONE', desc: 'Tuition for Plus One students', img: 'https://placehold.co/160x160?text=Plus+One' },
    { title: 'PLUS TWO', desc: 'Tuition for Plus Two students', img: 'https://placehold.co/160x160?text=Plus+Two' },
  ],
  degree: [
    { title: 'BA, BSc, BCom', desc: 'Bachelor of Arts, Science, and Commerce', img: 'https://placehold.co/160x160?text=BA+BSc+BCom' },
    { title: 'MA, MCom', desc: 'Master of Arts and Commerce', img: 'https://placehold.co/160x160?text=MA+MCom' },
  ],
  support: [
    { title: 'ADMISSION GUIDANCE', desc: 'Guidance for college and university admissions', img: 'https://placehold.co/160x160?text=Admission+Guidance' },
    { title: 'PLACEMENT SUPPORT', desc: 'Placement and career support', img: 'https://placehold.co/160x160?text=Placement+Support' },
    { title: 'LEGAL SUPPORT', desc: 'Legal support for students', img: 'https://placehold.co/160x160?text=Legal+Support' },
  ],
};

const Home = () => {
  useEffect(() => {
    AOS.init({ once: false, duration: 800 });
  }, []);
  const [activeTab, setActiveTab] = useState('language');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-2 sticky-top" style={{zIndex: 1030}} aria-label="Main navigation" data-aos="fade-down">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center fw-bold fs-4" href="#">
            <img src={logo} alt="Axis Logo" style={{width: '40px', height: '40px', marginRight: '10px'}} />
            Axis
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center gap-lg-4">
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#courses">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="#contact">Contact</a>
              </li>
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <button className="btn btn-primary px-4 py-2 rounded-pill fw-semibold" type="button">Apply Now</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container my-5" data-aos="fade-up">
        <div className="position-relative rounded overflow-hidden" style={{height: '400px', background: '#eee'}}>
          <img src={heroImg} alt="Axis Building" className="w-100 h-100 object-fit-cover" style={{objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.7)'}} data-aos="zoom-in" />
          <div className="position-absolute top-50 start-50 translate-middle text-center w-100 px-3" style={{zIndex:2}}>
            <h1 className="fw-bold text-white display-4 mb-3" style={{textShadow: '0 2px 8px rgba(0,0,0,0.3)'}} data-aos="fade-up">Empowering Minds, Shaping Futures</h1>
            <p className="lead text-white mb-4" style={{textShadow: '0 1px 4px rgba(0,0,0,0.2)'}} data-aos="fade-up" data-aos-delay="100">Unlock your potential with our comprehensive educational programs designed for success.</p>
            <button className="btn btn-primary px-4 py-2 rounded-pill fw-semibold" data-aos="zoom-in" data-aos-delay="200">Explore Courses</button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mb-5" id="about" data-aos="fade-right">
        <div className="bg-white p-4 rounded shadow-sm">
          <h4 className="fw-bold mb-3" data-aos="fade-right">About Axis</h4>
          <p className="mb-0" data-aos="fade-right" data-aos-delay="100">
            Axis is a leading educational institution dedicated to providing high-quality education and training for students of all levels. Our experienced faculty and state-of-the-art facilities ensure a conducive learning environment. We offer a wide range of courses, including language proficiency tests, academic tuitions, and competitive exam training.
          </p>
        </div>
      </div>

      {/* Our Programs Section */}
      <div className="container mb-5" id="courses" data-aos="fade-up">
        <h4 className="fw-bold mb-3" data-aos="fade-up">Our Programs</h4>
        <ul className="nav nav-tabs mb-3" role="tablist" aria-label="Course categories" data-aos="fade-up" data-aos-delay="100">
          {programTabs.map(tab => (
            <li className="nav-item" key={tab.key} role="presentation">
              <button
                className={`nav-link${activeTab === tab.key ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.key}
                aria-controls={`tab-panel-${tab.key}`}
                id={`tab-${tab.key}`}
                tabIndex={activeTab === tab.key ? 0 : -1}
                onKeyDown={e => {
                  if (e.key === 'ArrowRight') {
                    const idx = programTabs.findIndex(t => t.key === activeTab);
                    setActiveTab(programTabs[(idx + 1) % programTabs.length].key);
                  } else if (e.key === 'ArrowLeft') {
                    const idx = programTabs.findIndex(t => t.key === activeTab);
                    setActiveTab(programTabs[(idx - 1 + programTabs.length) % programTabs.length].key);
                  }
                }}
                style={{outline: activeTab === tab.key ? '2px solid #2563dc' : undefined}}
                data-aos="fade-up"
                data-aos-delay={100 + 50 * programTabs.findIndex(t => t.key === tab.key)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="row g-4" role="tabpanel" id={`tab-panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
          {programs[activeTab].map((prog, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="card h-100 border-0 shadow-sm rounded-4" style={{cursor:'pointer'}} onClick={() => handleCardClick(prog)} aria-label={`View details for ${prog.title}`} tabIndex={0} onKeyDown={e => {if(e.key==='Enter'){handleCardClick(prog)}}}>
                <img src={prog.img} alt={prog.title} className="card-img-top rounded-4" style={{objectFit:'cover',height:'160px'}} />
                <div className="card-body px-3 pb-3 pt-2">
                  <h6 className="fw-bold mb-1">{prog.title}</h6>
                  <div className="text-muted small">{prog.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Details Modal */}
      {showModal && selectedCourse && (
        <div className="modal fade show" tabIndex="-1" style={{display:'block', background:'rgba(0,0,0,0.4)', animation: 'fadeIn 0.3s'}} role="dialog" aria-modal="true" aria-labelledby="modalTitle" onKeyDown={e => {if(e.key==='Escape'){handleCloseModal()}}} data-aos="zoom-in">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 8px 32px rgba(40,80,160,0.15)'}}>
              <div className="modal-header" style={{background: '#2563dc', color: '#fff', borderBottom: 'none', padding: '1.5rem 2rem'}}>
                <h4 className="modal-title fw-bold mb-0" id="modalTitle" style={{letterSpacing: 1}}>{selectedCourse.title}</h4>
                <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body text-center px-4 pb-4 pt-3">
                <img src={selectedCourse.img} alt={selectedCourse.title} className="mb-3 rounded-4 shadow-sm" style={{width: '100%', maxWidth: 240, height: 'auto', border: '4px solid #f3f3f3'}} />
                <hr className="my-4" style={{opacity: 0.15}} />
                <p className="lead mb-0" style={{fontWeight: 500}}>{selectedCourse.desc}</p>
              </div>
              <div className="modal-footer justify-content-center" style={{borderTop: 'none', paddingBottom: '2rem'}}>
                <button type="button" className="btn btn-primary px-4 rounded-pill fw-semibold" style={{background: '#2563dc', border: 'none'}} onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us / Highlights / Testimonials / Faculty */}
      <div className="container mb-5" data-aos="fade-up">
        <h5 className="fw-bold mb-2" data-aos="fade-right">Why Choose Us?</h5>
        <h2 className="fw-bold mb-2" style={{fontFamily: 'inherit'}} data-aos="fade-left">Highlights</h2>
        <p className="mb-4" style={{maxWidth: 600}} data-aos="fade-up" data-aos-delay="100">
          Discover why Axis is the preferred choice for students seeking quality education and training.
        </p>

        <h6 className="fw-bold mb-3" data-aos="fade-up">Testimonials</h6>
        <div className="mb-5" data-aos="zoom-in">
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={4000}
            transitionTime={700}
            swipeable={true}
            emulateTouch={true}
          >
            {/* Slide 1 */}
            <div>
              <div className="row g-4 justify-content-center">
                <div className="col-12 col-md-4">
                  <div className="d-flex flex-column align-items-center bg-light rounded-4 p-4 h-100">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Sarah Johnson" className="mb-3 rounded-3" style={{width: '100%', maxWidth: 120, height: 'auto'}} />
                    <div className="fw-semibold">Sarah Johnson</div>
                    <div className="small text-muted text-center">"Axis's IELTS course helped me achieve my desired score. The instructors were supportive and the materials were excellent."</div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="d-flex flex-column align-items-center bg-light rounded-4 p-4 h-100">
                    <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="David Lee" className="mb-3 rounded-3" style={{width: '100%', maxWidth: 120, height: 'auto'}} />
                    <div className="fw-semibold">David Lee</div>
                    <div className="small text-muted text-center">"I am grateful to Axis for their guidance in preparing for the UPSC exam. The mock tests and study materials were invaluable."</div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="d-flex flex-column align-items-center bg-light rounded-4 p-4 h-100">
                    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Emily Chen" className="mb-3 rounded-3" style={{width: '100%', maxWidth: 120, height: 'auto'}} />
                    <div className="fw-semibold">Emily Chen</div>
                    <div className="small text-muted text-center">"The personalized attention I received at Axis made a huge difference in my academic performance. I highly recommend their tuition classes."</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div>
              <div className="row g-4 justify-content-center">
                <div className="col-12 col-md-4">
                  <div className="d-flex flex-column align-items-center bg-light rounded-4 p-4 h-100">
                    <img src="https://randomuser.me/api/portraits/men/66.jpg" alt="Michael Brown" className="mb-3 rounded-3" style={{width: '100%', maxWidth: 120, height: 'auto'}} />
                    <div className="fw-semibold">Michael Brown</div>
                    <div className="small text-muted text-center">"Axis provided excellent coaching for my competitive exams. The faculty is very knowledgeable and helpful."</div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="d-flex flex-column align-items-center bg-light rounded-4 p-4 h-100">
                    <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="Priya Singh" className="mb-3 rounded-3" style={{width: '100%', maxWidth: 120, height: 'auto'}} />
                    <div className="fw-semibold">Priya Singh</div>
                    <div className="small text-muted text-center">"The spoken English classes at Axis boosted my confidence and communication skills."</div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="d-flex flex-column align-items-center bg-light rounded-4 p-4 h-100">
                    <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Arjun Nair" className="mb-3 rounded-3" style={{width: '100%', maxWidth: 120, height: 'auto'}} />
                    <div className="fw-semibold">Arjun Nair</div>
                    <div className="small text-muted text-center">"Thanks to Axis, I cleared my LLB entrance exam with ease. Highly recommended!"</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div>
              <div className="row g-4 justify-content-center">
                <div className="col-12 col-md-4">
                  <div className="d-flex flex-column align-items-center bg-light rounded-4 p-4 h-100">
                    <img src="https://randomuser.me/api/portraits/women/69.jpg" alt="Fatima Noor" className="mb-3 rounded-3" style={{width: '100%', maxWidth: 120, height: 'auto'}} />
                    <div className="fw-semibold">Fatima Noor</div>
                    <div className="small text-muted text-center">"The tuition for Plus Two at Axis was thorough and exam-oriented. I scored much better than expected."</div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="d-flex flex-column align-items-center bg-light rounded-4 p-4 h-100">
                    <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Ravi Kumar" className="mb-3 rounded-3" style={{width: '100%', maxWidth: 120, height: 'auto'}} />
                    <div className="fw-semibold">Ravi Kumar</div>
                    <div className="small text-muted text-center">"Axis's placement support helped me land my first job after graduation. Thank you!"</div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="d-flex flex-column align-items-center bg-light rounded-4 p-4 h-100">
                    <img src="https://randomuser.me/api/portraits/women/70.jpg" alt="Sneha Menon" className="mb-3 rounded-3" style={{width: '100%', maxWidth: 120, height: 'auto'}} />
                    <div className="fw-semibold">Sneha Menon</div>
                    <div className="small text-muted text-center">"Legal support at Axis was a lifesaver during my admission process. Very professional team."</div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        <h6 className="fw-bold mb-3" data-aos="fade-up">Our Faculty</h6>
        <div className="row g-4" data-aos="fade-up">
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="text-center">
              <img src="https://randomuser.me/api/portraits/women/66.jpg" alt="Dr. Anya Sharma" className="rounded-circle mb-3" style={{width: 120, height: 120, objectFit: 'cover'}} />
              <div className="fw-semibold">Dr. Anya Sharma</div>
              <div className="small text-muted">Ph.D. in Linguistics, 15+ years of experience</div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="text-center">
              <img src="https://randomuser.me/api/portraits/men/66.jpg" alt="Mr. Ethan Clark" className="rounded-circle mb-3" style={{width: 120, height: 120, objectFit: 'cover'}} />
              <div className="fw-semibold">Mr. Ethan Clark</div>
              <div className="small text-muted">M.A. in English Literature, 10+ years of experience</div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="text-center">
              <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="Ms. Olivia Rodriguez" className="rounded-circle mb-3" style={{width: 120, height: 120, objectFit: 'cover'}} />
              <div className="fw-semibold">Ms. Olivia Rodriguez</div>
              <div className="small text-muted">M.Sc. in Mathematics, 8+ years of experience</div>
            </div>
          </div>
        </div>
      </div>

     

      {/* Ready to Start Your Journey & News & Events */}
      <div className="container mb-5" data-aos="fade-up">
        <div className="text-center mb-5" data-aos="zoom-in">
          <h2 className="fw-bold mb-4" style={{fontFamily: 'inherit'}} data-aos="fade-up">Ready to Start Your Journey?</h2>
          <button className="btn btn-primary px-4 py-2 rounded-pill fw-semibold" data-aos="zoom-in" data-aos-delay="100">Apply Now</button>
        </div>

        <h5 className="fw-bold mb-4" data-aos="fade-up">News & Events</h5>
        <div className="row g-4" data-aos="fade-up">
          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4">
              <img src="https://placehold.co/400x200?text=IELTS+Workshop" alt="IELTS Workshop" className="card-img-top rounded-4" style={{objectFit:'cover',height:'180px'}} />
              <div className="card-body px-3 pb-3 pt-2">
                <h6 className="fw-bold mb-1">Upcoming IELTS Workshop</h6>
                <div className="text-muted small">Join our free workshop to learn tips and strategies for the IELTS exam.</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="UPSC Seminar" className="card-img-top rounded-4" style={{objectFit:'cover',height:'180px'}} />
              <div className="card-body px-3 pb-3 pt-2">
                <h6 className="fw-bold mb-1">UPSC Exam Preparation Seminar</h6>
                <div className="text-muted small">Attend our seminar to get insights and guidance for the UPSC exam.</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4">
              <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80" alt="Academic Awards" className="card-img-top rounded-4" style={{objectFit:'cover',height:'180px'}} />
              <div className="card-body px-3 pb-3 pt-2">
                <h6 className="fw-bold mb-1">Annual Academic Excellence Awards</h6>
                <div className="text-muted small">Celebrate the achievements of our students at our annual awards ceremony.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="container mb-5" id="contact" data-aos="fade-up">
        <div className="row justify-content-start">
          <div className="col-12 col-md-8 col-lg-6" data-aos="fade-up">
            <h5 className="fw-bold mb-3" data-aos="fade-up">Contact Us</h5>
            <form>
              <div className="mb-3" data-aos="fade-up" data-aos-delay="100">
                <label htmlFor="contactName" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="contactName" placeholder="Enter your name" style={{background: '#f3f3f3', border: 'none'}} />
              </div>
              <div className="mb-3" data-aos="fade-up" data-aos-delay="200">
                <label htmlFor="contactEmail" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="contactEmail" placeholder="Enter your email" style={{background: '#f3f3f3', border: 'none'}} />
              </div>
              <div className="mb-3" data-aos="fade-up" data-aos-delay="300">
                <label htmlFor="contactMessage" className="form-label">Your Message</label>
                <textarea className="form-control" id="contactMessage" rows="4" placeholder="Enter your message" style={{background: '#f3f3f3', border: 'none'}}></textarea>
              </div>
              <button type="submit" className="btn btn-primary px-4" style={{background: '#6b93b6', border: 'none'}} data-aos="zoom-in" data-aos-delay="400">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mb-4" data-aos="zoom-in">
        <div className="d-flex justify-content-center">
          <iframe
            title="Axis College Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.393964479836!2d76.8565562!3d9.0933714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0672e58fc1d24b%3A0x9ecd225472892656!2sAXIS%20COLLEGE%2C%20PATHANAPURAM!5e0!3m2!1sen!2sin!4v1718030000000!5m2!1sen!2sin"
            width="1000"
            height="400"
            style={{ border: 0, borderRadius: '1.5rem', width: '100%', maxWidth: '1000px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            data-aos="zoom-in"
          ></iframe>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="container pb-4" data-aos="fade-up">
        <div className="row text-center text-md-start align-items-center">
          <div className="col-12 col-md-4 mb-2 mb-md-0">
            <a href="#" className="text-muted small text-decoration-none">Privacy Policy</a>
          </div>
          <div className="col-12 col-md-4 mb-2 mb-md-0 d-flex justify-content-center">
            <span className="text-muted small">©2024 Axis. All rights reserved.</span>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-md-end justify-content-center">
            <a href="#" className="text-muted small text-decoration-none">Terms of Service</a>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 text-center">
            <span className="text-muted small d-block mb-1">📞 +91 6282 123 564</span>
            <span className="text-muted small d-block mb-1">Axis College<br/>Govt. hospital Road<br/>Near Seema theatre<br/>Pathanapuram</span>
            <span className="text-muted small d-block">✉️ infoaxisedu@gmail.com</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home