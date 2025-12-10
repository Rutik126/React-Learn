import React from 'react'
import Card from './components/card'

export const App = () => {


  const jobOpening = [
  {
    "id": 1,
    "company_name": "Amazon",
    "logo": "https://w7.pngwing.com/pngs/371/196/png-transparent-amazon-buy-logo-online-shop-most-usable-logos-icon.png",
    "posted_time": "5 days ago",
    "job_title": "Senior UI/UX Designer",
    "job_type": "Part-time",
    "job_level": "Senior-Level",
    "rate": "$120/hr",
    "location": "Mumbai, India",
    "saved": false
  },
  {
    "id": 2,
    "company_name": "Google",
    "logo": "https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png",
    "posted_time": "2 days ago",
    "job_title": "Frontend Engineer",
    "job_type": "Full-time",
    "job_level": "Mid-Level",
    "rate": "$150/hr",
    "location": "Bangalore, India",
    "saved": false
  },
  {
    "id": 3,
    "company_name": "Microsoft",
    "logo": "https://cdn.iconscout.com/icon/free/png-256/free-microsoft-2752058-2284974.png",
    "posted_time": "1 week ago",
    "job_title": "Backend Developer",
    "job_type": "Remote",
    "job_level": "Junior-Level",
    "rate": "$90/hr",
    "location": "Hyderabad, India",
    "saved": false
  },
  {
    "id": 4,
    "company_name": "Meta",
    "logo": "https://cdn.iconscout.com/icon/free/png-256/free-meta-7577925-6167593.png",
    "posted_time": "3 days ago",
    "job_title": "Product Designer",
    "job_type": "Full-time",
    "job_level": "Senior-Level",
    "rate": "$130/hr",
    "location": "Delhi, India",
    "saved": false
  },
  {
    "id": 5,
    "company_name": "Netflix",
    "logo": "https://cdn.iconscout.com/icon/free/png-256/free-netflix-3521600-2945022.png",
    "posted_time": "6 hours ago",
    "job_title": "Motion Graphics Designer",
    "job_type": "Contract",
    "job_level": "Senior-Level",
    "rate": "$110/hr",
    "location": "Pune, India",
    "saved": false
  },
  {
    "id": 6,
    "company_name": "Apple",
    "logo": "https://cdn.iconscout.com/icon/free/png-256/free-apple-853-675472.png",
    "posted_time": "4 days ago",
    "job_title": "Lead Product Engineer",
    "job_type": "Full-time",
    "job_level": "Senior-Level",
    "rate": "$200/hr",
    "location": "Bangalore, India",
    "saved": true
  },
  {
    "id": 7,
    "company_name": "Adobe",
    "logo": "https://cdn.iconscout.com/icon/free/png-256/free-adobe-226533.png",
    "posted_time": "10 days ago",
    "job_title": "UX Researcher",
    "job_type": "Part-time",
    "job_level": "Mid-Level",
    "rate": "$100/hr",
    "location": "Noida, India",
    "saved": false
  },
  {
    "id": 8,
    "company_name": "Tesla",
    "logo": "https://cdn.iconscout.com/icon/free/png-256/free-tesla-282691.png",
    "posted_time": "12 hours ago",
    "job_title": "Software QA Engineer",
    "job_type": "Full-time",
    "job_level": "Mid-Level",
    "rate": "$95/hr",
    "location": "Chennai, India",
    "saved": true
  },
  {
    "id": 9,
    "company_name": "IBM",
    "logo": "https://cdn.iconscout.com/icon/free/png-256/free-ibm-282751.png",
    "posted_time": "8 days ago",
    "job_title": "Cloud Architect",
    "job_type": "Remote",
    "job_level": "Senior-Level",
    "rate": "$160/hr",
    "location": "Remote, India",
    "saved": false
  },
  {
    "id": 10,
    "company_name": "Intel",
    "logo": "https://cdn.iconscout.com/icon/free/png-256/free-intel-226522.png",
    "posted_time": "4 hours ago",
    "job_title": "AI/ML Engineer",
    "job_type": "Full-time",
    "job_level": "Expert-Level",
    "rate": "$180/hr",
    "location": "Hyderabad, India",
    "saved": false
  }
]


  return (
    <>
    <div className="container">
      {
        jobOpening.map(function(elem){
          return <Card company = {elem.company_name} logo = {elem.logo} post = {elem.job_title} duration = {elem.posted_time} location = {elem.location} salary = {elem.rate} tag2 ={elem.job_level} tag1 ={elem.job_type} />
          // card()
        })
      }
    </div>
    </>
  )
}
 export default App